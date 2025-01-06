<template>
	<Html class="min-h-100dvh">
		<Body
			:class="{
				'overflow-y-hidden': open,
				'rotate-180': enabled,
			}"
			class="font-text antialiased bg-zinc-50"
			scrollbar="~ rounded"
		>
			<Lenis ref="lenis" :auto-raf="false" :options="lenisOptions" root>
				<SiteNavbar :sections="sections" />

				<div v-if="page.content" v-editable="page.content" class="sb-content">
					<StoryblokComponent v-for="story in page.content.body" :key="story._uid" :blok="story" />
				</div>

				<SiteFooter />
			</Lenis>
		</Body>
	</Html>
</template>

<script lang="ts" setup>
	const { open } = useMenu();
	const { enabled } = useEasterEgg();
	const sections = ref<SbBlokData[]>([]);
	const lenis = ref<any>(null);

	const page = await useAsyncStoryblok("home", {
		version: "draft"
	}) as Ref<SbBlokData>;

	sections.value.push(...page.value.content?.body.filter((story: SbBlokData) => story.linkable));

	const lenisOptions = {
		lerp: 0.1,
		wheelMultiplier: 1,
		gestureOrientation: "vertical",
		normalizeWheel: false,
		smoothTouch: false
	};

	const onFrame = (time: number) => {
		lenis.value.instance.raf(time * 1000);
	};

	onMounted(() => {
		useGsap.ticker.add(onFrame);
		const elements = document.querySelectorAll(".magnet");
		useMagnet(elements);
	});

	onBeforeUnmount(() => {
		useGsap.ticker.remove(onFrame);
	});
</script>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
	}
	img {
		-webkit-user-drag: none;
		@apply select-none;
	}
</style>
