<template>
	<div class="experience" flex flex-col gap-4 py-8 lg="py-12">
		<div flex flex-col>
			<span font-medium text="28px">{{ props.experience.name }}</span>
			<span block text-lg>
				<template v-for="text in props.experience.details">
					{{ text }}
				</template>
			</span>
		</div>
		<div flex items-center gap-2>
			<span text-xl>
				{{ props.experience.date }}

				<template v-if="props.experience.current">
					- today
				</template>
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		experience: Experience
	}>();
</script>
