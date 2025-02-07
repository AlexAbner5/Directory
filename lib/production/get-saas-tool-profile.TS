import { endpoint } from "./strapi";

interface StrapiSaaSTool {
    id: number;
    Name: string;
    Preview?: {
        url: string;
      };
    Description: any[];
    DemoVideo?: {
        url: string;
      };
    ShortDescription: string;
    KeyFeatures:any[];
    UseCases:any[];
    VisitWebsite:string;
    PricingModels: any[];
    logo?: {
        url: string;
      };
    Like: number;
    categories_images: Array<{
        id: number;
        name: string;
        seoUrl: string;
    }>;
    category: {
        id: number;
        name: string;
        seoUrl: string;
    };
    slug: string;
}

export async function getToolProfile() {
    const res = await endpoint('saas-tools?populate=*');
    return res.data.map((item: StrapiSaaSTool) => ({
        id: item.id,
        name: item.Name,
        preview: item.Preview?.url ? `https://lionfish-app-tj3wh.ondigitalocean.app${item.Preview.url}` : '',
        Description: item.Description,
        demoVideo: item.DemoVideo?.url ? `https://lionfish-app-tj3wh.ondigitalocean.app${item.DemoVideo.url}` : '',
        shortDescription: item.ShortDescription,
        keyFeatures: item.KeyFeatures,
        useCases: item.UseCases,
        visitWebsite: item.VisitWebsite,

        pricingModels: item.PricingModels,
        logoUrl: `https://lionfish-app-tj3wh.ondigitalocean.app${item.logo?.url}` || '',
        like: item.Like,
        categories_images: item.categories_images?.[0]?.name || '',
        category: item.category?.name || '',
        slug: item.slug
    }));
}



