<template>
	<NuxtLink :to="props.to" rounded-xl bg-black px-8 py-4 text-white transition-colors hover="bg-black/80">
		<span class="inner" flex items-center justify-center gap-x-1 :strength="props.strength">
			<slot />
			<Icon v-if="props.icon" name="heroicons-solid:arrow-right" size-4 />
		</span>
	</NuxtLink>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		to: string
		icon: boolean
		strength?: number
	}>();
</script>
