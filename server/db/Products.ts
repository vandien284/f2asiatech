import { supabase } from "../ultis/supabase"

export const getProducts = async (sub_category_id: number) => {
    const { data, error } = await supabase.from("products").select("*").eq("sub_category_id",sub_category_id);

    if (error) {
        return null;
    }

    return data;
}