import { z } from "zod";

export const formSchema = z.object({
  Name: z.string().min(2, "Tool name must be at least 2 characters"), // Nombre de la herramienta
  createdBy: z.string().min(2, "Creator name is required"), // Creador
  visitWebsite: z.string().url("Please enter a valid URL").optional(), // URL del sitio web
  linkedinUrl: z.string().url("Please enter a valid LinkedIn URL").optional(), // LinkedIn (opcional)
  twitterUrl: z.string().url("Please enter a valid Twitter URL").optional(), // Twitter (opcional)
  githubUrl: z.string().url("Please enter a valid GitHub URL").optional(), // GitHub (opcional)
  discordUrl: z.string().url("Please enter a valid Discord URL").optional(), // Discord (opcional)
  aiimagecategory: z.string().min(1, "Please select a valid category"),
  ShortDescription: z.string().min(100, "Short Description must be at least 100 characters"), // Descripción
  Description: z.string().min(750, "Description must be at least 750 characters"), // Descripción
  KeyFeatures: z
    .string()
    .min(1, "Key features are required")
    .transform((value) => value.split("\n")), // Características clave (array)
  UseCases: z
    .string()
    .min(1, "Use cases are required")
    .transform((value) => value.split("\n")), // Casos de uso (array)
  videoUrl: z.string().url("Please enter a valid video URL").optional(), // Video (opcional)
  logo: z.any().optional(), // Logo de la herramienta (opcional)
  pricingModels: z.string().default("Free"), // Modelo de precios
  preview: z.any().optional(), // Imagen de vista previa (opcional)
  demoVideo: z.any().optional(), // URL del video demo (opcional)
});

export type FormValues = z.infer<typeof formSchema>;

