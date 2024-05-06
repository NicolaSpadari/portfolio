<template>
	<Body :class="{ 'overflow-y-hidden': open }">
		<SiteNavbar />

		<div v-editable="content.content">
			<StoryblokComponent v-for="story in content.content.body" :key="story._uid" :blok="story" />
		</div>

		<SiteFooter />
	</Body>
</template>

<script lang="ts" setup>
	const { open } = useMenu();

	const content = await useAsyncStoryblok("home", {
		version: "published"
	}) as SbBlokData;
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
