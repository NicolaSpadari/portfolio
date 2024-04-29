<template>
	<section id="photo" max-h="570px" overflow-hidden>
		<NuxtImg :src="getPlaceholder(1920, 1080)" size-full object-cover object-cc :alt="fullName" />
	</section>
</template>

<script lang="ts" setup>
	const { getPlaceholder } = usePlaceholder();
	const { name, surname } = useConstants();

	const fullName = computed(() => `${name} ${surname}`);
</script>
