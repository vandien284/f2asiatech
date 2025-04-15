import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['@/assets/css/main.css'],

  app: {
    head: {
      title: "Yen Market",
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/logo-brand-1.png",
        }
      ],
      meta: [
        { name: "description", content: "Siêu thị nhập khẩu Tiêu Chuẩn Nhật Bản" },
        { name: "keywords", content: "market, siêu thị, menu, món ăn, thực đơn, nhà hàng" },
        { name: "author", content: "Yen Market" },
        { name: "og:title", content: "Yen Market" },
        { name: "og:description", content: "Siêu thị nhập khẩu Tiêu Chuẩn Nhật Bản" },
        { name: "og:image", content: "/images/logo-brand-1.png" },
      ]
    }
  },

  modules: ["@pinia/nuxt", 'nuxt-keen-slider', "@nuxt/image"],

  components: true,

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})