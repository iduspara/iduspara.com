// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Igor Duspara - Full-Stack Developer",
      meta: [
        {
          name: "description",
          content:
            "Looking for a talented and dedicated Full-Stack Developer? Look no further! With extensive skills in Javascript, PHP, CSS, and MySQL, as well as experience in Backend, Front-End, SEO, and Marketing, I am committed to delivering innovative solutions with a user-friendly and audience-driven approach. Let me help you successfully complete complex projects and tackle new challenges. Contact me now to learn more!",
        },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image-edge"],
  googleFonts: {
    display: "swap",
    download: true,
    prefetch: true,
    families: {
      Inter: [300, 400, 600],
    },
  },
  image: {},
});
