<template>
	<NuxtLink :to="props.project.link" :external="true" flex flex-col gap-6 md="px-8" lg="px-0" class="work group">
		<div aspect-video overflow-hidden md="rounded-xl">
			<NuxtImg :src="props.project.image" w-full :alt="props.project.title" />
		</div>
		<div flex flex-col gap-1 px-8 md="px-0">
			<p class="group-hover:opacity-70" z--1 text-2xl font-medium transition-opacity space-x-2>
				<span>{{ props.project.title }}</span>
				<i-heroicons-solid-arrow-right h-7 w-7 />
			</p>
			<p class="group-hover:opacity-70" text-2xl transition-opacity>
				{{ props.project.description }}
			</p>
		</div>
	</NuxtLink>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		project: Project
	}>();
</script>
