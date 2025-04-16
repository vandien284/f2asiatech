import { defineStore } from 'pinia'
import type { IBanner } from '~/shared/types/Banner'
import type { ICategory } from '~/shared/types/Category'
import type { IMenu } from '~/shared/types/Menu'
import type { IProduct } from '~/shared/types/Product'
import type { ISubCategory } from '~/shared/types/SubCategory'

export const useDataStore = defineStore('data', () => {
  const menus = ref<IMenu[]>([])
  const categories = ref<ICategory[]>([])
  const subCategories = ref<ISubCategory[]>([])
  const products = ref<IProduct[]>([])
  const banner = ref<IBanner[]>([])

  const fetchAllMenu = async () => {
    if (menus.value.length > 0) return;
  
    try {
      const res = await $fetch<{ status: string, data: IMenu[] }>('/api/menu');
    
      if (res.status === 'success') {
        menus.value = res.data || [];
        
        categories.value = res.data.flatMap(menu => menu.categorys || []);
        subCategories.value = categories.value.flatMap(cat => cat.sub_category || []);
      } else {
        menus.value = []; 
      }
    } catch (error) {
      menus.value = [];
    }
  }

  const fetchProduct = async (sub_menu_id: number) => {
    try {
      const res = await $fetch<{ status: string, data: IMenu[] }>(`/api/product/${sub_menu_id}`);
    
      if (res.status === 'success') {
       products.value = res.data || []
      } else {
        products.value = []; 
      }
    } catch (error) {
      products.value = []; 
    }
  }

  const fetchAllBanner = async () => {
    if (banner.value.length > 0) return;
  
    try {
      const res = await $fetch<{ status: string, data: IMenu[] }>('/api/banner');
    
      if (res.status === 'success') {
        banner.value = res.data || [];
      } else {
        banner.value = []; 
      }
    } catch (error) {
      banner.value = [];
    }
  }
  
  
 
  return {
    menus: computed(() => menus.value),
    categories: computed(() => categories.value),
    subCategories: computed(() => subCategories.value),
    products: computed(() => products.value),
    banner: computed(() => banner.value),
    fetchAllBanner,
    fetchAllMenu,
    fetchProduct,
  }
})