import { supabase } from "../ultis/supabase"

export const getSubCategoryInCategory = async (category_id: number) => {
    const { data, error } = await supabase.from("sub_category").select("*").eq("category_id",category_id);

    if (error) {
        return null;
    }

    return data;
}