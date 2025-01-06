<template>
	<section id="about" :class="{ linkable: props.blok.linkable }" class="border-t border-gray-200 text-zinc-900">
		<div crate class="py-90px" lg="py-30">
			<div class="flex flex-col gap-10 border-t-2 border-zinc-900" lg="gap-20">
				<p class="about-title mt-6 text-4xl font-medium" lg="text-52px mt-10">
					{{ props.blok.title }}
				</p>
				<div class="grid grid-cols-1 gap-10" md="grid-cols-12">
					<div class="about-text pointer-events-none" md="col-span-4">
						<p class="text-2xl font-medium" lg="text-32px">
							{{ props.blok.text }}
						</p>
					</div>
					<div class="flex flex-col gap-10" md="col-start-7 col-span-6">
						<div v-for="paragraph in props.blok.content" :key="paragraph._uid" class="about-desc invisible text-xl" lg="text-22px" v-html="useRichText(paragraph.text!)" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: AboutStoryblok
	}>();

	const appConfig = useAppConfig();

	onMounted(() => {
		useGsap.matchMedia().add(appConfig.upToDesktopMediaQuery, () => {
			useGsap.to(".about-title", {
				scrollTrigger: {
					trigger: "#about",
					start: "top top",
					pin: ".about-title",
					pinSpacing: false,
					end: "bottom top+=50%"
				}
			});
			useGsap.to(".about-text", {
				scrollTrigger: {
					trigger: "#about",
					start: "top top",
					pin: ".about-text",
					pinSpacing: false,
					end: "bottom top+=50%"
				}
			});
		});

		useGsap.from(".about-desc", {
			scrollTrigger: {
				trigger: "#about",
				start: "40% bottom"
			},
			autoAlpha: 0,
			duration: 0.75,
			delay: 1,
			stagger: 0.25
		});
	});
</script>
