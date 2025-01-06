<template>
	<NuxtLink :to="props.to" class="rounded-xl bg-zinc-900 px-8 py-4 text-zinc-50 transition-colors" hover="bg-zinc-900/80">
		<span class="inner flex items-center justify-center gap-x-1" :strength="props.strength">
			<slot />
			<Icon v-if="props.icon" name="carbon:arrow-right" class="size-4" />
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
