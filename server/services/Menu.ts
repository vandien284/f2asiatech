import { getAllMenu } from "../db/Menu";

export const fetchAllMenu = async () => {
    return await getAllMenu()
}