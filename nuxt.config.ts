import { colors } from "@unocss/preset-mini";

const zinc50 = typeof colors?.zinc === "string" ? colors?.zinc : colors?.zinc?.[50];

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/image",
		"@nuxt/icon",
		"@nuxt/eslint",
		"@storyblok/nuxt",
		"@hypernym/nuxt-gsap",
		"@nuxt/fonts",
		"nuxt3-date-fns",
		"nuxt3-lenis",
		"nuxt-security",
		"nuxt-svgo",
		"nuxt-gtag"
	],
	app: {
		head: {
			title: "Nicola Spadari",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: zinc50 },
				{ name: "format-detection", content: "no" },
				{ name: "description", content: "Nicola Spadari's portfolio" }
			],
			htmlAttrs: {
				lang: "en"
			},
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
					"*.storyblok.com",
					"*.googleapis.com"
				],
				"script-src": [
					"'self'",
					"'unsafe-inline'",
					"'unsafe-eval'",
					"*.googletagmanager.com",
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
	fonts: {
		defaults: {
			weights: [`${100}..${900}`]
		}
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
			scrollTrigger: true,
			scrollTo: true
		}
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN
	},
	image: {
		provider: "ipx"
	},
	icon: {
		mode: "svg"
	},
	imports: {
		presets: [
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
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2025-01-01"
});
