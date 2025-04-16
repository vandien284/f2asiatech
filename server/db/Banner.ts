import { supabase } from "../ultis/supabase"

export const getAllBanner = async () => {
    const { data, error } = await supabase.from("banners").select('*');

    if (error) {
        return null;
    }

    return data;
}