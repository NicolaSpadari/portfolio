import AutoImport from "unplugin-auto-import/vite";

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/image",
		"@storyblok/nuxt",
		"@hypernym/nuxt-gsap",
		"nuxt3-date-fns",
		"nuxt-svgo"
	],
	app: {
		head: {
			title: "Nicola Spadari",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: "#ffffff" },
				{ name: "format-detection", content: "no" }
			],
			bodyAttrs: {
				class: ["font-text", "antialiased"]
			},
			link: [
				{ rel: "shortcut-icon", href: "/favicon.svg" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
	},
	experimental: {
		typedPages: true
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	svgo: {
		autoImportPath: "./assets/"
	},
	gsap: {
		composables: true,
		extraPlugins: {
			scrollTrigger: true
		}
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN
	},
	vite: {
		plugins: [
			AutoImport({
				imports: [
					{
						from: "@storyblok/nuxt",
						imports: ["SbBlokData"],
						type: true
					},
					{
						from: "@storyblok/vue",
						imports: ["ISbRichtext"],
						type: true
					}
				]
			})
		]
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag.startsWith("i-")
		}
	},
	nitro: {
		prerender: {
			routes: ["/"]
		}
	},
	sourcemap: {
		server: true,
		client: false
	}
});
