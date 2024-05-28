import AutoImport from "unplugin-auto-import/vite";

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/image",
		"@storyblok/nuxt",
		"@hypernym/nuxt-gsap",
		"@nuxtjs/fontaine",
		"nuxt3-date-fns",
		"nuxt-security",
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
			htmlAttrs: {
				lang: "en"
			},
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
	security: {
		headers: {
			crossOriginEmbedderPolicy: "unsafe-none",
			contentSecurityPolicy: {
				"default-src": ["'self'", "*.storyblok.com"],
				"style-src": [
					"'self'",
					"'unsafe-inline'",
					"*.storyblok.com"
				],
				"script-src": [
					"'self'",
					"'unsafe-inline'",
					"'unsafe-eval'",
					"*.storyblok.com",
					"*.netlify.app"
				],
				"script-src-attr": [
					"'self'",
					"'unsafe-inline'",
					"'unsafe-eval'",
					"*.storyblok.com",
					"*.netlify.app"
				],
				"connect-src": [
					"'self'",
					"*.storyblok.com"
				],
				"img-src": [
					"'self'",
					"data:",
					"*.storyblok.com"
				],
				"base-uri": ["'self'"],
				"frame-src": ["'self'", "*.netlify.com"],
				"frame-ancestors": ["'self'", "*.storyblok.com"]
			}
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
	image: {
		provider: "ipx"
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
