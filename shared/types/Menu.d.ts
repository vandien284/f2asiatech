import type { ICategory } from './Category';
export interface IMenu {
    id: number,
    name?: string,
    categorys?: ICategory[],
    created_at?: string
}
