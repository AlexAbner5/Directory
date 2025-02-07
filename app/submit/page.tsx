"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getCategories } from "@/lib/get-categories";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Header } from "@/components/Header";
import FooterSectionCopy from "@/components/Footer/FooterSectionCopy";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


// Schema para validación del formulario
const formSchema = z.object({
  Name: z.string().min(2, "Tool name must be at least 2 characters"),
  createdBy: z.string().min(2, "Creator name is required"),
  VisitWebsite: z.string().url("Please enter a valid URL").optional(),
  aiimagecategory: z.string().min(1, "Please select a category"),
  ShortDescription: z.string().min(10, "Short Description must be at least 10 characters"),
  Description: z.string().min(100, "Description must be at least 100 characters"),
  KeyFeatures: z.string().transform((value) => value.split("\n")),
  UseCases: z.string().transform((value) => value.split("\n")),
  DemoVideo: z.string().url("Please enter a valid video URL").optional(),
  logo: z.any().optional(),
  Preview: z.any().optional(),
  PricingModels: z.string().default("Free"),
});

interface Category {
  id: number;
  name: string;
}

// Agregar esta función de utilidad después del formSchema
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-'); // Eliminar guiones múltiples consecutivos
};

const transformToBlocks = (items: string[]) => {
  return items.map(item => ({
    type: "paragraph",
    children: [{ type: "text", text: item }]
  }));
};

export default function AIAgentForm() {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      createdBy: "",
      aiimagecategory: "",
      Description: "",
      logo: "",
      PricingModels: "",
      Preview: "",
      DemoVideo: "",
      ShortDescription: "",
      KeyFeatures: [],
      UseCases: [],
      VisitWebsite: "",
    },
  });

  const uploadFile = async (file: File) => {

    const formData = new FormData();
    formData.append("files", file);

    console.log("Archivo que se intenta subir:", file);
  console.log("Contenido de FormData:", Array.from(formData.entries()));

  
  
    const response = await fetch("https://lionfish-app-tj3wh.ondigitalocean.app/api/upload", {
        method: "POST",
        headers: {

          Authorization: `Bearer 43eef1165870a0f7e9aa6a2bbc3e98747448ed191109b78f30027cffa1d243310c93a8df6375dadafa572a7b9bba0cddb9d89d033e327bb99d2cd773ccc97807c59be91202ddc37f15383ed5acfb2ea7757f70b8fe0299ec561f44dd2f7c83e01d11bea6d854d906cbffd4d5b375b06d213f00c39474e6de6a26b539b20ba6b2`,
        },
      body: formData,
    });
  
    if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error al subir archivo:", errorDetails);
        throw new Error("Error al subir el archivo");
    }
  
    const uploadedFiles = await response.json();
    console.log("Archivo subido con éxito:", uploadedFiles);
    return uploadedFiles[0].id; // Retorna el ID del archivo subido
  };
  

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const selectedCategory = categories.find(
        (cat) => cat.id === parseInt(values.aiimagecategory)
      );

      if (!selectedCategory) {
        throw new Error("Invalid category selected");
      }

      const logoId = values.logo ? await uploadFile(values.logo[0]) : null;
      const previewId = values.Preview ? await uploadFile(values.Preview[0]) : null;

      const toolData = {
        data: {
          Name: values.Name,
          ShortDescription: values.ShortDescription,
          logo: logoId,
          VisitWebsite: values.VisitWebsite,
          PricingModels: ["Free", "Paid", "Freemium"].includes(values.PricingModels)
            ? values.PricingModels
            : "Free",
          Description: [
            {
              type: "paragraph",
              children: [
                {
                  text: values.Description,
                  type: "text",
                },
              ],
            },
          ],
          KeyFeatures: transformToBlocks(values.KeyFeatures),
          UseCases: transformToBlocks(values.KeyFeatures),
          Preview: previewId,
          DemoVideo: values.DemoVideo,
          aiimagecategory: {
            id: parseInt(values.aiimagecategory),
            name: selectedCategory?.name,
          },
          slug: generateSlug(values.Name),
          publishedAt: null,
        }
      };
      
      const requestData = {
        data: toolData.data,
        status: "draft"
      };

      const response = await fetch("https://lionfish-app-tj3wh.ondigitalocean.app/api/saas-tools?status=draft", {
        method: "POST",
        headers: {

          Authorization: `Bearer 43eef1165870a0f7e9aa6a2bbc3e98747448ed191109b78f30027cffa1d243310c93a8df6375dadafa572a7b9bba0cddb9d89d033e327bb99d2cd773ccc97807c59be91202ddc37f15383ed5acfb2ea7757f70b8fe0299ec561f44dd2f7c83e01d11bea6d854d906cbffd4d5b375b06d213f00c39474e6de6a26b539b20ba6b2`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Detalles del error:", errorDetails);
        throw new Error(`Error de Strapi: ${JSON.stringify(errorDetails)}`);
      }

      const result = await response.json();
      console.log("Éxito:", result);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen p-4 bg-[#1c1c1c]">
      <Card className="mx-auto max-w-4xl bg-gray-100">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>AI Agent Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter AI Agent name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="createdBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Created By</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter creator name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="VisitWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter website or GitHub URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aiimagecategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>AI Image Category *</FormLabel>
                      <FormControl>
                        <select
                          className="w-full rounded-md border px-3 py-2"
                          {...field}
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="ShortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description *</FormLabel>
                    <FormControl>
                      <Input placeholder="Short description for your AI Agent" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Detailed description of your AI Agent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="KeyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Features *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter each feature on a new line"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="UseCases"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Use Cases *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter each use case on a new line"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-6 md:grid-cols-2">
              <FormField
  control={form.control}
  name="logo"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Logo (JPG o PNG)</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              console.log("Archivo seleccionado:", e.target.files[0]);
              field.onChange(e.target.files); // Asegúrate de pasar los archivos correctamente
            } else {
              console.log("No se seleccionó ningún archivo.");
            }
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

                <FormField
                  control={form.control}
                  name="Preview"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thumbnail Image (JPG or PNG)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              console.log("Archivo seleccionado:", e.target.files[0]);
                              field.onChange(e.target.files);
                            } else {
                              console.log("No se seleccionó ningún archivo.");
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="DemoVideo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo Video URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter demo video URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit AI Agent
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
    <FooterSectionCopy/>
    </>
  );
}
