<template>
	<div>
		<StoryblokComponent v-if="story" :blok="story.content" />
	</div>
</template>

<script lang="ts" setup>
	const story = await useAsyncStoryblok("home", {
		version: "draft"
	});
</script>
