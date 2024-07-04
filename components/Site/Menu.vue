<template>
	<div absolute py-10 space-y-3>
		<div flex flex-col>
			<button v-for="anchor in props.sections" :key="anchor._uid" py-3 text-left text-lg @click="scrollSection(`#${anchor.component}`)">
				{{ anchor.title }}
			</button>
		</div>
		<div flex gap-8>
			<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" :aria-label="social.label">
				<Icon :name="social.icon" size-7 />
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		sections: SbBlokData[]
	}>();
	const emit = defineEmits(["scroll"]);
	const { socials } = useConstants();

	const scrollSection = (hash: string) => {
		emit("scroll");
		useGsap.to(window, {
			scrollTo: hash,
			duration: 1,
			ease: "power3.inOut"
		});
	};
</script>
