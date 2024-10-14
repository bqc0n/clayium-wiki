import {defineConfig} from "vitepress";
import {
    GitChangelog,
    GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

export const shared = defineConfig({
    title: "Clayium Wiki",
    description: "a wiki for Clayium Unofficial",
    lastUpdated: false,
    vite: {
        plugins: [
            GitChangelog({
                // Fill in your repository URL here
                repoURL: () => "https://github.com/bqc0n/clayium-wiki",
                maxGitLogCount: 20,
                mapAuthors: [
                    {
                        avatar: "https://avatars.githubusercontent.com/u/89625049?v=4",
                        name: "bqc0n",
                        username: "bqc0n",
                        mapByNameAliases: ["bqc0n"],
                    }
                ]
            }),
            GitChangelogMarkdownSection(),
        ],
    },
    markdown: {
        math: true,
    },
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/TRCDevelopers/Clayium" }
        ]
    }
})