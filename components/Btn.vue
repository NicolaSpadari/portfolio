<template>
	<NuxtLink :to="props.to" flex items-center justify-center rounded-xl bg-black px-8 py-4 text-white transition-colors space-x-1 hover="bg-black/80">
		<span><slot /></span>
		<i-heroicons-solid-arrow-right v-if="props.icon" h-4 w-4 />
	</NuxtLink>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		to: string
		icon: boolean
	}>();
</script>
