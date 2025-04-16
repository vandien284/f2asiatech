import { fetchAllBanner } from '../../services/Banner'

export default defineEventHandler(async () => {
  try {
    const data = await fetchAllBanner()
    return {
      status: 'success',
      data
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.message,
    }
  }
})
