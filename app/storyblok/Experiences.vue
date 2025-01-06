<template>
	<section id="experiences" :class="{ linkable: props.blok.linkable }" class="border-t border-gray-200 text-zinc-900">
		<div class="py-90px space-y-10" lg="py-30 space-y-16">
			<div crate>
				<div class="grid grid-cols-1 gap-10" md="grid-cols-12">
					<div class="experience-col pointer-events-none border-t-2 border-zinc-900" md="col-span-4">
						<p class="mt-6 text-4xl font-medium" lg="text-52px mt-10">
							Experience
						</p>
					</div>
					<div md="col-start-7 col-span-6">
						<div class="flex flex-col divide-y divide-gray-200">
							<Experience v-for="experience in props.blok.content" :key="experience._uid" :experience="experience" />
							<Btn v-if="props.blok.attachment.filename" class="magnet button invisible" :to="props.blok.attachment.filename" :icon="true" :strength="1.5">
								See full CV
							</Btn>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: ExperiencesStoryblok
	}>();

	const appConfig = useAppConfig();

	onMounted(() => {
		useGsap.matchMedia().add(appConfig.upToDesktopMediaQuery, () => {
			useGsap.to(".experience-col", {
				scrollTrigger: {
					trigger: "#experiences",
					start: "top top",
					pin: ".experience-col",
					pinSpacing: false,
					end: "bottom top+=20%"
				}
			});
		});

		document.querySelectorAll(".experience").forEach((experience) => {
			useGsap.from(experience, {
				scrollTrigger: {
					trigger: experience,
					start: "20% bottom"
				},
				autoAlpha: 0,
				duration: 0.5,
				delay: 0.25
			});
		});

		useGsap.from(".button", {
			scrollTrigger: {
				trigger: ".button",
				start: "20% bottom"
			},
			autoAlpha: 0,
			yPercent: 30,
			duration: 0.5,
			delay: 0.5
		});
	});
</script>
