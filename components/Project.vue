<template>
	<div class="project" invisible py-8 divide-y divide-neutral-200 lg="py-12">
		<NuxtLink :to="props.project.link" target="_blank" class="group text-40px" lg="text-7xl" inline-flex items-start gap-2 font-medium>
			{{ props.project.title }}
			<i-heroicons-solid-arrow-up-right md="size-7" class="group-hover:opacity-100" size-5 opacity-0 transition-opacity duration-500 />
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		project: Project
	}>();
</script>
