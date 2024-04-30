<template>
	<section id="photo" max-h="570px" overflow-hidden>
		<NuxtImg :src="getPlaceholder(1920, 1080)" class="image" size-full object-cover :alt="fullName" />
	</section>
</template>

<script lang="ts" setup>
	const { getPlaceholder } = usePlaceholder();
	const { name, surname } = useConstants();

	const fullName = computed(() => `${name} ${surname}`);

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
