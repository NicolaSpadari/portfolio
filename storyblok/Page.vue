<template>
	<div v-editable="blok">
		<StoryblokComponent v-for="story in props.blok.body" :key="story._uid" :blok="story" />
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: SbBlokData
	}>();
</script>
