import { defineConfig } from 'vitepress'
import { ja } from "./ja"
import { en } from "./en"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clayium Wiki",
  description: "a wiki for Clayium Unofficial",
  locales: {
    root: { label: "日本語", ...ja },
    en: { label: "English", ...en },
  },
})
