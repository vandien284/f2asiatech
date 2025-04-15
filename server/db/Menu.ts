import { supabase } from "../ultis/supabase"

export const getAllMenu = async () => {
    const { data, error } = await supabase.from("menus").select('*, categorys(*, sub_category(*))');

    if (error) {
        return null;
    }

    return data;
}