<template>
	<div class="experience" invisible flex flex-col gap-4 py-8 lg="py-12">
		<div flex flex-col>
			<span font-500 md="variate" text="28px">{{ props.experience.name }}</span>
			<span block text-lg>
				{{ props.experience.text }}
			</span>
		</div>
		<div flex items-center gap-2>
			<span text-xl>
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
