<template>
	<div absolute py-10 space-y-3>
		<div flex flex-col>
			<NuxtLink v-for="anchor in props.sections" :key="anchor._uid" :to="`#${anchor.component}`" py-3 text-lg>
				{{ anchor.title }}
			</NuxtLink>
		</div>
		<div flex gap-8>
			<NuxtLink v-for="social in socials" :key="social.id" :to="social.link">
				<span :class="social.icon" :font-controlled="false" h-7 w-7 />
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		sections: SbBlokData[]
	}>();

	const { socials } = useConstants();
</script>
