<template>
	<div class="experience invisible flex flex-col gap-4 py-8" lg="py-12">
		<div class="flex flex-col">
			<span class="text-28px font-500" md="variate">{{ props.experience.name }}</span>
			<span class="block text-lg">
				{{ props.experience.text }}
			</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-xl">
				{{ useFormat(props.experience.from, "MMM yyyy") }}

				<template v-if="props.experience.to">
					- {{ useFormat(props.experience.to, "MMM yyyy") }}
				</template>

				<template v-else-if="props.experience.current">
					- today
				</template>
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		experience: ExperienceStoryblok
	}>();
</script>
