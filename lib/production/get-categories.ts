import { endpoint } from "./strapi-prod";

export async function getCategories() {
    const res = await endpoint("aiimagecategories")
    console.log(res.data)
    return res.data

}

