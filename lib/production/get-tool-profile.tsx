import { endpoint } from "./strapi-prod";

export async function getToolProfile({ slug }: { slug: string }) {
  try {
    const res = await endpoint(
      `saas-tools?filters[slug][$eq]=${slug}&populate=*`
    );

    const data = res.data;

    if (!data || data.length === 0) {
      return null; // Si no hay datos, retorna null
    }

    console.log(data[0].DemoVideo);

    return data.map((tool: any) => ({
      id: tool.id,
      name: tool.Name,
      description: tool.Description || "",
      shortDescription: tool.ShortDescription || "",
      logo: tool.logo?.url || null, // Usamos directamente la URL sin concatenación
      preview: tool.Preview?.url || null, // Usamos directamente la URL sin concatenación
      slug: tool.slug,
      visitWebsite: tool.VisitWebsite || "",
      category: tool.category?.name || "N/A",
      aiimagecategory: tool.aiimagecategory?.name || "N/A",
      PricingModels: tool.PricingModels || [],
      VisitWebsite: tool.VisitWebsite || "",
      KeyFeatures: tool.KeyFeatures || [],
      UseCases: tool.UseCases || [],
      Likes: tool.Likes || 0,
      DemoVideo: tool.DemoVideo || "",
    }))[0];
  } catch (error) {
    console.error("Error fetching tool profile:", error);
    return null; // Retorna null en caso de error
  }
}

