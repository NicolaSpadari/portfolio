<template>
	<div class="project invisible py-8 divide-y divide-neutral-200" lg="py-12">
		<NuxtLink :to="props.project.link.url" target="_blank" class="group inline-flex items-start gap-2 text-40px" lg="text-7xl">
			<span class="transition-all" md="variate">{{ props.project.name }}</span>
			<Icon name="carbon:arrow-up-right" class="size-5 opacity-0 transition-opacity duration-500" md="size-7" group-hover="opacity-100" />
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		project: WorkStoryblok
	}>();
</script>
