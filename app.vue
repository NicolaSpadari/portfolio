<template>
	<Body :class="{ 'overflow-y-hidden': open }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Body>
</template>

<script lang="ts" setup>
	const { open } = useMenu();
</script>

<style lang="scss">
html {
	-webkit-tap-highlight-color: transparent;
	@apply min-h-screen scroll-smooth;
}
img {
	-webkit-user-drag: none;
	@apply select-none;
}
</style>
