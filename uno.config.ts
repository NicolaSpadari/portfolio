import {
	defineConfig,
	presetAttributify,
	presetTagify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";
import { colors } from "@unocss/preset-mini";

const lime = typeof colors?.lime === "string" ? colors?.lime : colors?.lime?.[50];
const cyan = typeof colors?.cyan === "string" ? colors?.cyan : colors?.cyan?.[50];
const pink = typeof colors?.pink === "string" ? colors?.pink : colors?.pink?.[50];
const indigo = typeof colors?.indigo === "string" ? colors?.indigo : colors?.indigo?.[50];
const orange = typeof colors?.orange === "string" ? colors?.orange : colors?.orange?.[50];

export default defineConfig({
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-10"],
		["crate-boxed", "mx-auto max-w-3xl px-10"],
		["flex-center", "flex justify-center items-center"],
		["gradient", "animate-gradient animate-duration-[15s] animate-count-infinite"],
		["variate", "variation-weight-500 ease-in-out transition-all duration-500 hover:variation-weight-700"]
	],
	rules: [
		[/^variation-weight-(\d+)$/, ([, w]) => ({ "font-variation-settings": `'wght' ${w}` })]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetTypography()
	],
	theme: {
		fontFamily: {
			text: "Inter"
		},
		breakpoints: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			uw: "2000px"
		},
		animation: {
			keyframes: {
				gradient: `{
					0%, 100% { background-color: ${lime} }
					20% { background-color: ${cyan} }
					40% { background-color: ${pink} }
					60% { background-color: ${indigo} }
					80% { background-color: ${orange} }
				}`
			}
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
