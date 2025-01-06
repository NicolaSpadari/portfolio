<template>
	<NuxtLink :to="props.project.link" :external="true" class="group work flex flex-col gap-6" md="px-8" lg="px-0">
		<div class="aspect-video overflow-hidden" md="rounded-xl">
			<NuxtImg :src="props.project.image" class="w-full" :alt="props.project.title" />
		</div>
		<div class="flex flex-col gap-1 px-8" md="px-0">
			<p class="text-2xl font-medium transition-opacity -z-1 space-x-2 group-hover:opacity-70">
				<span>{{ props.project.title }}</span>
				<span>
					<Icon name="carbon:arrow-right" class="size-7" />
				</span>
			</p>
			<p class="text-2xl transition-opacity" group-hover="opacity-70">
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
