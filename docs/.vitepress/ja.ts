import { DefaultTheme, defineConfig } from 'vitepress'

export const ja = defineConfig({
    lang: "ja", 
    themeConfig: {
        sidebar: sidebar()
    }
})

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "はじめに",
            collapsed: false,
            items: [
                { text: "原作からの変更点", link: "changes-from-original" }
            ]
        }
    ]
}