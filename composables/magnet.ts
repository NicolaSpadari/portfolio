import type { MaybeComputedElementRef } from "@vueuse/core";
import { theme } from "@unocss/preset-mini";

export const useMagnet = (elements: NodeListOf<Element>) => {
	const strength = 35;
	const innerStrength = 10;
	const speed = 2;
	const { breakpoints } = theme;
	const mm = useGsap.matchMedia();

	elements.forEach((element) => {
		const target = toRef(element);
		const inner = toRef(element.querySelector(".inner"));
		const customStrength = Number(inner.value?.getAttribute("strength")) || 1;

		const { x, y } = useMouse({
			type: "client",
			touch: false
		});
		const { width, height, left, top } = useElementBounding(target as MaybeComputedElementRef);

		mm.add(`(min-width: ${breakpoints.lg})`, () => {
			useEventListener(target, "mousemove", () => {
				useGsap.to(target.value, {
					x: (((x.value - left.value) / width.value) - 0.2) * strength,
					y: (((y.value - top.value) / height.value) - 0.2) * strength,
					ease: "Power4.easeOut",
					duration: speed
				});

				if (inner.value) {
					useGsap.to(inner.value, {
						x: (((x.value - left.value) / width.value) - 0.5) * innerStrength * customStrength,
						y: (((y.value - top.value) / height.value) - 0.5) * innerStrength * customStrength,
						ease: "Power4.easeOut",
						duration: speed
					});
				}
			});

			useEventListener(target, "mouseleave", () => {
				useGsap.to(target.value, {
					x: 0,
					y: 0,
					ease: "elastic.out",
					duration: speed
				});

				if (inner.value) {
					useGsap.to(inner.value, {
						x: 0,
						y: 0,
						ease: "elastic.out",
						duration: speed
					});
				}
			});
		});
	});
};
