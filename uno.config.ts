import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTagify,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	safelist: ["font-text", "antialiased", "i-carbon-logo-github", "i-carbon-logo-linkedin"],
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-4 lg:px-8 sm:px-6"],
		["crate-boxed", "mx-auto max-w-3xl px-4 lg:px-8 sm:px-6"],
		["flex-center", "flex justify-center items-center"]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle"
			}
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				text: {
					name: "Inter",
					weights: [300, 400, 500]
				}
			}
		})
	],
	theme: {
		breakpoints: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			uw: "2000px"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
