import type { SidebarConfig } from "vuepress-theme-gungnir";

export const en: SidebarConfig = {
	// Giới thiệu
	"/about/": [
		"/about/readme.md",
		// "/about/project.md"
	],

	// Lập trình Java căn bản
	"/java-core/": [
		"/java-core/readme.md",
		"/java-core/session1.md",
		"/java-core/session2.md",
		"/java-core/session3.md",
		"/java-core/session4.md",
		"/java-core/session5.md",
		"/java-core/session6.md",
		"/java-core/session7.md",
		"/java-core/session8.md",
	],

	// Lập trình hướng đối tượng với Java
	"/java-oop/": [
		"/java-oop/readme.md",
		"/java-oop/session1.md",
	],

};


// {
// 	"/about/": [
// 		{
// 			text: "Giới thiệu",
// 			children: [
// 				"/about/readme.md",
// 				"/about/project.md"
// 			]
// 		},
// 	],
// };
