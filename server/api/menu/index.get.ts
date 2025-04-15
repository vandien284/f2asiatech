import { fetchAllMenu } from '../../services/Menu'

export default defineEventHandler(async () => {
  try {
    const data = await fetchAllMenu()
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
