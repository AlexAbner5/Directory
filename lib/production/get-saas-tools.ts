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
      logoUrl: `https://directoryimg.sfo2.digitaloceanspaces.com${item.logo?.url}` || '',
      description: item.Description,
      category: item.category || '',
      aiimagecategory: item.aiimagecategory || '',
      preview: `https://directoryimg.sfo2.digitaloceanspaces.com${item.Preview?.url}` || '',
      slug: item.slug
    };
  });
}