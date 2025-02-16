import { endpoint } from "./strapi-prod";

interface StrapiItem {
  id: number;
  Name: string;
  Description: any[];
  category: {
    name: string;
    id: number;
    slug: string;
  };
  aiimagecategory: {
    name: string;
    id: number;
    slug: string;
  };
  logo?: {
    url: string;
  };
  Preview?: {
    url: string;
  };
  slug: string;
}

export async function getSaasTools() {
  const res = await endpoint('saas-tools?populate=*');
  console.log(res.data);

  return res.data.map((item: StrapiItem) => {

    return {
      id: item.id,
      name: item.Name,
      logoUrl: item.logo?.url || '',  // No concatenes la URL base
      description: item.Description,
      category: item.category || '',
      aiimagecategory: item.aiimagecategory || '',
      preview: item.Preview?.url || '',  // No concatenes la URL base
      slug: item.slug
    };
  });
}