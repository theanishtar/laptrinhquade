import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
// import { giscusPlugin } from "vuepress-plugin-giscus";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAwT2Z-hMtohDflO0fliu-dxmjpuxjA5fU",
	authDomain: "angurvad-5559e.firebaseapp.com",
	projectId: "angurvad-5559e",
	storageBucket: "angurvad-5559e.appspot.com",
	messagingSenderId: "908813697862",
	appId: "1:908813697862:web:c2d4e7769a6f514ae7db47",
	measurementId: "G-5RDHC2ETQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
	title: "Angurvad",
	description: "Developer 18+",

	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: `/img/logo/favicon-16x16.png`
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: `/img/logo/favicon-32x32.png`
			}
		],
		["meta", { name: "application-name", content: "Xiaohan Zou" }],
		["meta", { name: "apple-mobile-web-app-title", content: "Xiaohan Zou" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" }
		],
		[
			"link",
			{ rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
		],
		["meta", { name: "theme-color", content: "#377bb5" }],
		["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
	],

	bundler: viteBundler(),

	theme: gungnirTheme({
		repo: "Theanishtar/angurvad",
		docsDir: "blog",
		docsBranch: "master",
		navbarTitle: "Angurvad",
		hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
		searchText: "Tìm kiếm",
		// personal information
		personalInfo: {
			name: "Theanishtar",
			avatar: "/img/avatar.jpg",
			// description: "いつか、私がヒトじゃなくなっても",
			description: "Môi trường học tập thú vị dành cho sinh viên CNTT",
			sns: {
				github: "theanishtar",
				linkedin: "tranhuudang",
				facebook: "dangcongchuaa",
				twitter: "theanishtar",
				// zhihu: "chao-neng-gui-su",
				email: "dangtt135@gmail.com",
				// rss: "/rss.xml"
			}
		},

		// header images on home page
		homeHeaderImages: [
			{
				path: "/img/home-bg/1.jpg",
				mask: "rgba(40, 57, 101, .4)"
			},
			{
				path: "/img/home-bg/2.jpg",
				mask: "rgba(196, 176, 131, .1)"
			},
			{
				path: "/img/home-bg/3.jpg",
				mask: "rgba(68, 74, 83, .1)"
			},
			{
				path: "/img/home-bg/4.jpg",
				mask: "rgba(19, 75, 50, .2)"
			},
			{
				path: "/img/home-bg/5.jpg"
			}
		],

		// other pages
		pages: {
			tags: {
				title: "Bài viết",
				subtitle: "Bạn có thể tìm theo từng từ khóa về công nghệ và ngôn ngữ lập trình",
				bgImage: {
					path: "/img/pages/tags.jpg",
					mask: "rgba(211, 136, 37, .5)"
				}
			},
			links: {
				title: "Công nghệ",
				subtitle:
					"When you are looking at the stars, please put the brightest star shining night sky as my soul.",
				bgImage: {
					path: "/img/pages/links.jpg",
					mask: "rgba(64, 118, 190, 0.5)"
				}
			}
		},

		themePlugins: {
			// only enable git plugin in production mode
			git: isProd,
			katex: true,
			giscus: {
				// repo: "dangth12/blog-giscus-comments",
				// repoId: "R_kgDOJpeyjQ",
				// category: "Announcements",
				// categoryId: "DIC_kwDOJpeyjc4CW2KP",
				// mapping: "pathname",  // optional, string, default="title"
				lang: "vi",  // optional, string, default="auto" (follow the site's language, fall to "en" if your site's language is not supported by Giscus)
				// lazyLoad: true,  // optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)
				// crossorigin: "anonymous",  // optional, string, default="anonymous"
				darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",

				// repo: "This-is-an-Apple/gitalk-comments",
				// repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
				// category: "Announcements",
				// categoryId: "DIC_kwDODIxYNs4CAO1u",

				repo: "dangth12/blog-giscus-comments",
				repoId: "R_kgDOJpeyjQ",
				category: "Announcements",
				categoryId: "DIC_kwDOJpeyjc4CW2KO",
				lazyLoad: true
			},
			mdPlus: {
				all: true
			},
			ga: "G-HCQSX53XFG",
			ba: "75381d210789d3eaf855fa16246860cc",
			rss: {
				siteURL: "https://blog.zxh.io",
				copyright: "Renovamen 2018-2022"
			}
		},

		navbar: [
			{
				text: "Trang chủ",
				link: "/",
				icon: "fa-fort-awesome"
			},
			{
				text: "Bài viết",
				link: "/tags/",
				icon: "fa-tag"
			},
			{
				text: "Công nghệ",
				link: "/tech/",
				icon: "fa-satellite-dish"
			},
			// {
			// 	text: "About",
			// 	link: "https://zxh.io",
			// 	icon: "fa-paw"
			// },
			// {
			// 	text: "Portfolio",
			// 	link: "https://portfolio.zxh.io/",
			// 	icon: "oi-rocket"
			// }
		],

		footer: `
      &copy; <a href="https://github.com/Theanishtar" target="_blank">Theanishtar</a> 2023
      <br>
      Powered by <a href="" target="_blank">Vue</a> &
      <a href="" target="_blank">Gungnir</a>
    `
	}),

	markdown: {
		headers: {
			level: [2, 3, 4, 5]
		},
		code: {
			lineNumbers: false
		}
	},
});




//Angurvadal -> Angurvad
//Angurvadal là một thanh kiếm huyền thoại trong thần thoại Bắc Âu. Nó được khắc những chữ Rune ma thuật, những chữ này sẽ rực sáng trong lúc nó được mang đi giao chiến,  nhưng chỉ lấp lánh với ánh sáng mờ ảo trong lúc hòa bình. Theo thần thoại Bắc Âu, nó thuộc về Frithiof, con trai của người anh hùng Thorstein Vikingsson.
