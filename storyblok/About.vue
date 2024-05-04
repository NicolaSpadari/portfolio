<template>
	<section id="about" border-t border-gray-200>
		<div crate py="90px" lg="py-30">
			<div flex flex-col gap-10 border-t-2 border-black lg="gap-20">
				<p class="about-title" lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
					{{ props.blok.title }}
				</p>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="about-text" md="col-span-4" pointer-events-none>
						<p text-2xl lg="text-[32px]" font-medium>
							{{ props.blok.text }}
						</p>
					</div>
					<div md="col-start-7 col-span-6" flex flex-col gap-10>
						<div v-for="paragraph in props.blok.content" :key="paragraph._uid" class="about-desc" invisible text-xl lg="text-[22px]" v-html="useRichText(paragraph.text!)" />
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

	const { upToDesktop } = useConstants();

	onMounted(() => {
		useGsap.matchMedia().add(upToDesktop, () => {
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
