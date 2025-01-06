<template>
	<section id="hero" :class="{ linkable: props.blok.linkable }" class="h-65vh gradient [@media(max-height:992px)]:h-65vh" lg="55vh">
		<div crate-boxed class="h-full">
			<div class="grid h-full items-center">
				<div>
					<p v-for="(line, lineIndex) in props.blok.content" :key="line._uid" lg="text-5rem mb-0" class="overflow-hidden text-5xl text-zinc-900" :class="{ 'mb-5': lineIndex === 0 }">
						<span class="line invisible inline-block">{{ line.text }}</span>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: HeroStoryblok
	}>();

	onMounted(() => {
		useGsap.from(".line", {
			autoAlpha: 0,
			yPercent: 100,
			stagger: 0.15,
			duration: 0.75,
			ease: "power4.out"
		});
	});
</script>
