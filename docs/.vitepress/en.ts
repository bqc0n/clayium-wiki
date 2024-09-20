import { DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en_US",
    themeConfig: {
        sidebar: {
            "en/": {base: "en/", items: sidebar()}
        }
    }
})

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                { text: "Changes from original", link: "changes-from-original" },
                { text: "Clay laser", link: "laser" },
            ]
        }
    ]
}
