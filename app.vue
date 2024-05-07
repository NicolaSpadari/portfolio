<template>
	<Body :class="{ 'overflow-y-hidden': open }">
		<SiteNavbar :sections="sections" />

		<div v-if="page.content" v-editable="page.content" class="sb-content">
			<StoryblokComponent v-for="story in page.content.body" :key="story._uid" :blok="story" />
		</div>

		<SiteFooter />
	</Body>
</template>

<script lang="ts" setup>
	const { open } = useMenu();
	const sections = ref<SbBlokData[]>([]);

	const page = await useAsyncStoryblok("home", {
		version: "draft"
	}) as Ref<SbBlokData>;

	sections.value.push(...page.value.content?.body.filter((story: SbBlokData) => story.linkable));
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
