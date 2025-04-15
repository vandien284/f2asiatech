import { supabase } from "../ultis/supabase"

export const getCategoryInMenu = async (menu_id: number) => {
    const { data, error } = await supabase.from("category").select("*").eq("menu_id",menu_id);

    if (error) {
        return null;
    }

    return data;
}