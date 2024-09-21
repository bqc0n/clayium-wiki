import { defineConfig } from 'vitepress'
import { ja } from "./ja"
import { en } from "./en"
import {shared} from "./shared";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  title: "Clayium Wiki",
  base: "/clayium-wiki/",
  description: "a wiki for Clayium Unofficial",
  lastUpdated: false,
  locales: {
    root: { label: "日本語", ...ja },
    en: { label: "English", ...en },
  },
})
