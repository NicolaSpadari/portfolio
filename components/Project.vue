<template>
	<div class="project" invisible py-8 divide-y divide-neutral-200 lg="py-12">
		<NuxtLink :to="props.project.link.url" target="_blank" class="group text-40px" lg="text-7xl" inline-flex items-start gap-2>
			<span font-500 md="variate">{{ props.project.name }}</span>
			<Icon name="heroicons-solid:arrow-up-right" md="size-7" class="group-hover:opacity-100" size-5 opacity-0 transition-opacity duration-500 />
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		project: WorkStoryblok
	}>();
</script>
