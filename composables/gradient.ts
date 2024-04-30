import { colors } from "@unocss/preset-mini";

export const useGradient = (section: string) => {
	const lime = typeof colors?.lime === "string" ? colors?.lime : colors?.lime?.[50];
	const cyan = typeof colors?.cyan === "string" ? colors?.cyan : colors?.cyan?.[50];
	const pink = typeof colors?.pink === "string" ? colors?.pink : colors?.pink?.[50];
	const indigo = typeof colors?.indigo === "string" ? colors?.indigo : colors?.indigo?.[50];
	const orange = typeof colors?.orange === "string" ? colors?.orange : colors?.orange?.[50];

	const tl = useGsap.timeline({ repeat: -1 });

	tl.to(section, {
		backgroundColor: cyan,
		duration: 3
	});
	tl.to(section, {
		backgroundColor: pink,
		duration: 3
	});
	tl.to(section, {
		backgroundColor: indigo,
		duration: 3
	});
	tl.to(section, {
		backgroundColor: orange,
		duration: 3
	});
	tl.to(section, {
		backgroundColor: lime,
		duration: 3
	});
};
