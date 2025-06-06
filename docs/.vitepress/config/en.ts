import { DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en_US",
    themeConfig: {
        editLink: {
            pattern: "https://github.com/bqc0n/clayium-wiki/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
        sidebar: {
            "/en/": { base: "/en/", items: sidebar() }
        }
    }
})

function sidebar(): DefaultTheme.SidebarItem[] {
    return []
}
