import { DefaultTheme, defineConfig } from 'vitepress'

export const ja = defineConfig({
    lang: "ja",
    themeConfig: {
        sidebar: sidebar()
    }
})

function sidebar(): DefaultTheme.SidebarItem[] {
    return []
}
