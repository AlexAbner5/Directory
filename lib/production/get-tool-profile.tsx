import { endpoint } from "./strapi-prod";


export async function getToolProfile({ slug }: { slug: string }) {
  return endpoint(`saas-tools?filters[slug][$eq]=${slug}&populate=*`).then((res) => {
    const data = res.data;
    if (data.length === 0) return null; 
    console.log(data[0].DemoVideo)
    return data.map((tool: any) => ({

      id: tool.id,
      name: tool.Name,
      description: tool.Description ,
      shortDescription: tool.ShortDescription,
      logo: tool.logo?.url ? `https://lionfish-app-tj3wh.ondigitalocean.app${tool.logo.url}` : null,
      preview: tool.Preview?.url ? `https://lionfish-app-tj3wh.ondigitalocean.app${tool.Preview.url}` : null,
      slug: tool.slug,
      visitWebsite: tool.VisitWebsite,

      category: tool.category?.name || "N/A",
      aiimagecategory: tool.aiimagecategory?.name || "N/A",
      PricingModels: tool.PricingModels,
      VisitWebsite: tool.VisitWebsite,
      KeyFeatures: tool.KeyFeatures,
      UseCases: tool.UseCases,
      Likes: tool.Likes,
      DemoVideo: tool.DemoVideo,
      
    }))[0];
  });
}