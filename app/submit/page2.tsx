"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

// Schema para validación del formulario
const formSchema = z.object({
  Name: z.string().min(2, "Tool name must be at least 2 characters"),
  createdBy: z.string().min(2, "Creator name is required"),
  websiteUrl: z.string().url("Please enter a valid URL"),
  aiimagecategory: z.string().min(1, "AI Image Category is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  logo: z.any().optional(),
  pricingModels: z.string().default("Free"),
  preview: z.any().optional(),
  demoVideo: z.any().optional(),
  ShortDescription: z.string().optional(),
  KeyFeatures: z.string().optional(),
  UseCases: z.string().optional(),
});

interface Category {
  id: number;
  name: string;
}

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

  // Configuración del formulario
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      createdBy: "",
      websiteUrl: "",
      aiimagecategory: "",
      description: "",
      logo: undefined,
      pricingModels: "Free",
      preview: undefined,
      demoVideo: "",
      ShortDescription: "",
      KeyFeatures: "",
      UseCases: "",
    },
  });

  // Lógica de envío
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const selectedCategory = categories.find(cat => cat.id === parseInt(values.aiimagecategory));

      const toolData = {
        data: {
          Name: values.Name,
          Description: [
            {
              type: "paragraph",
              children: [
                {
                  text: values.description,
                  type: "text",
                },
              ],
            },
          ],
          KeyFeatures: [
            {
              type: "paragraph",
              children: [
                {
                  text: values.description,
                  type: "text",
                },
              ],
            },
          ],
          UseCases: [
            {
              type: "paragraph",
              children: [
                {
                  text: values.description,
                  type: "text",
                },
              ],
            },
          ],
          aiimagecategory: {
            id: parseInt(values.aiimagecategory),
            name: selectedCategory?.name
          },
        },
      };
      

      console.log("Datos enviados:", toolData);

      const response = await fetch("http://localhost:1338/api/saas-tools", {
        method: "POST",
        headers: {
          Authorization: `Bearer 43eef1165870a0f7e9aa6a2bbc3e98747448ed191109b78f30027cffa1d243310c93a8df6375dadafa572a7b9bba0cddb9d89d033e327bb99d2cd773ccc97807c59be91202ddc37f15383ed5acfb2ea7757f70b8fe0299ec561f44dd2f7c83e01d11bea6d854d906cbffd4d5b375b06d213f00c39474e6de6a26b539b20ba6b2`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toolData),
      });

      console.log("Payload final enviado al servidor:", JSON.stringify(toolData, null, 2));


      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Detalles del error del servidor:", errorDetails);
        console.error("Datos enviados:", toolData);
        console.error("Estado de respuesta:", response.status, response.statusText);
        throw new Error("Error al enviar datos a Strapi");
      }
  
      const result = await response.json();
      console.log("Herramienta creada exitosamente:", result);
  
      // Reiniciar el formulario después del envío exitoso
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      if (error instanceof Error) {
        console.error("Detalles del error:", error.message);
      }
    }
    
  }

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gray-100 p-4">
        <Card className="mx-auto max-w-4xl">
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Tool name" {...field} />
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
                        <FormLabel>Created By *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter creator name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter website URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter description" {...field} />
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
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                          {...field}
                        >
                          <option value="">Select a category</option>
                          {categories.map((category: Category) => (
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
                <Button type="submit" className="w-full">
                  Submit Tool
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}