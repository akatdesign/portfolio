// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Chakra Petch",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css",
          integrity: "sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
    },
  },
  // 使用するscssファイルを指定
  css: ["@/assets/styles/main.scss"],
  // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/_button1.scss" as b1;
          @use "~/assets/styles/_responsive.scss" as res;
          @use "~/assets/styles/_color.scss" as c;
          `,
        },
      },
    },
  },
})
