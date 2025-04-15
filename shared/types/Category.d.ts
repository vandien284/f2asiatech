import type { ISubCategory } from "./SubCategory";

export interface ICategory {
    id: number,
    name?: string,
    menu_id?: number,
    sub_category?: ISubCategory[],
    created_at?: string
}
