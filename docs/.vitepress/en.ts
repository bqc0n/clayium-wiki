import { DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: "en_US",
    themeConfig: {
        sidebar: {
            "en/": { base: "en/", items: sidebar() }
        }
    }
})

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            base: "introduction/",
            collapsed: false,
            items: [
                { text: "Changes from original", link: "changes-from-original" },
            ]
        },
        {
            text: "Features",
            base: "features/",
            collapsed: true,
            items: [
                { text: "Clay laser", link: "clay-laser" }
            ],
        },
        {
            text: "GroovyScript",
            base: "groovy-script/",
            collapsed: true,
            items: [
                { text: "Recipe", link: "recipe" }
            ]
        },
    ]
}
