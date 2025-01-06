<template>
	<section id="photo" class="max-h-570px overflow-hidden">
		<NuxtImg :src="props.blok.image.filename" class="image size-full object-cover" loading="lazy" :alt="props.blok.image.alt" />
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: PhotoStoryblok
	}>();

	onMounted(() => {
		useGsap.to(".image", {
			scrollTrigger: {
				trigger: "#photo",
				start: "20% bottom",
				scrub: 0.7
			},
			scale: 1.15
		});
	});
</script>
