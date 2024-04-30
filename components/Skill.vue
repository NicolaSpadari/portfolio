<template>
	<div class="skill" py-8 divide-y divide-neutral-200 lg="py-12">
		<p font-medium text="40px" lg="text-7xl">
			{{ skill.title }}
		</p>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		skill: Competence
	}>();
</script>
