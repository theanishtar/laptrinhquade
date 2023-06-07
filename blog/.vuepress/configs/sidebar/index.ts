import type { SidebarConfig } from "vuepress-theme-gungnir";

export const en: SidebarConfig = {
	"/about/": [
		{
			text: "Giới thiệu",
			children: [
				"/about/readme.md",
				"/about/project.md"
			]
		},
	]
};