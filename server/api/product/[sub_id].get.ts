import { fetchProduct } from "~/server/services/Product";

export default defineEventHandler(async (event) => {
  try {
    const { sub_id } = getRouterParams(event)

    const subId = parseInt(sub_id) ?? 0

    const data = await fetchProduct(subId)

    return {
      status: 'success',
      data
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.message
    }
  }
})
