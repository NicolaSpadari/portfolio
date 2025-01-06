<template>
	<div class="absolute py-10 text-zinc-900 space-y-3">
		<div class="flex flex-col">
			<button v-for="anchor in props.sections" :key="anchor._uid" class="py-3 text-left text-lg" @click="scrollSection(`#${anchor.component}`)">
				{{ anchor.title }}
			</button>
		</div>
		<div class="flex gap-8">
			<NuxtLink v-for="social in Object.values(appConfig.socials)" :key="social.id" :to="social.link" :aria-label="social.label">
				<Icon :name="social.icon" class="size-7" />
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		sections: SbBlokData[]
	}>();
	const emit = defineEmits(["scroll"]);
	const appConfig = useAppConfig();

	const scrollSection = (hash: string) => {
		emit("scroll");
		useGsap.to(window, {
			scrollTo: hash,
			duration: 1,
			ease: "power3.inOut"
		});
	};
</script>
