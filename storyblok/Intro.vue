<template>
	<section id="intro">
		<div crate-boxed>
			<div class="intro-content" lg="space-y-8 py-30" invisible py-20 space-y-6>
				<div v-for="paragraph in props.blok.text" :key="paragraph._uid" text-2xl lg="text-3xl" v-html="useRichText(paragraph.text!)" />
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: IntroStoryblok
	}>();

	onMounted(() => {
		useGsap.from(".intro-content", {
			scrollTrigger: {
				trigger: "#intro",
				start: "20% bottom"
			},
			autoAlpha: 0,
			duration: 2,
			delay: 1.25
		});
	});
</script>
