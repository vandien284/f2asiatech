import { getProducts } from "../db/Products";

export const fetchProduct = async (sub_category_id: number) => {
    return await getProducts(sub_category_id)
}