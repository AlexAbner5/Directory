import { endpoint } from "./strapi";

export async function getCategories() {
    const res = await endpoint("aiimagecategories")
    console.log(res.data)
    return res.data

}

