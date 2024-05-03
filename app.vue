<template>
	<Body :class="{ 'overflow-y-hidden': open }">
		<SiteNavbar />

		<SectionHero />

		<SectionIntro />

		<!-- <SectionWorks /> -->

		<SectionWriting />

		<SectionAbout />

		<SectionExperiences />

		<SectionProjects />

		<SectionInterests />

		<SectionTouch />

		<SectionPhoto />

		<SiteFooter />
	</Body>
</template>

<script lang="ts" setup>
	const { open } = useMenu();
</script>

<style lang="scss">
	html {
	-webkit-tap-highlight-color: transparent;
	scroll-behavior: smooth;
	@apply min-h-screen;
}
img {
	-webkit-user-drag: none;
	@apply select-none;
}

// Transitions
.fade-enter-active,
.fade-leave-active {
	@apply transition-opacity ease-in-out duration-300;
}
.fade-enter-from,
.fade-leave-to {
	@apply opacity-0;
}
</style>
