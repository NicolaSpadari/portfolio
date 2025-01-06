<template>
	<section id="skills" :class="{ linkable: props.blok.linkable }" class="border-t border-gray-200 text-zinc-900">
		<div class="py-90px space-y-10" lg="py-30 space-y-16">
			<div crate>
				<div class="grid grid-cols-1 gap-10" md="grid-cols-12">
					<div class="skills-col pointer-events-none border-t-2 border-zinc-900" md="col-span-4">
						<p class="mt-6 text-4xl font-medium" lg="text-52px mt-10">
							{{ props.blok.title }}
						</p>
					</div>
					<div md="col-span-7 col-start-6">
						<div class="grid grid-cols-2 gap-2" md="grid-cols-3" lg="grid-cols-4">
							<div v-for="(skill, skillIndex) in props.blok.content" :key="skill._uid" class="group magnet cell invisible relative aspect-square size-full flex-center gradient overflow-hidden rounded-xl" :style="`animation-delay: ${100 * skillIndex}ms`">
								<NuxtImg :src="skill.image.filename" loading="lazy" :alt="skill.name" class="size-15 transition-opacity duration-250" group-hover="opacity-0" />

								<div class="inner pointer-events-none absolute inset-0 size-full flex-center opacity-0 transition-opacity duration-250" group-hover="opacity-100" strength="2">
									<p class="text-xl font-medium" md="text-base" xl="text-2xl">
										{{ skill.name }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: SkillsStoryblok
	}>();

	const appConfig = useAppConfig();

	onMounted(() => {
		useGsap.matchMedia().add(appConfig.upToDesktopMediaQuery, () => {
			useGsap.to(".skills-col", {
				scrollTrigger: {
					trigger: "#skills",
					start: "top top",
					pin: ".skills-col",
					pinSpacing: false,
					end: "bottom top+=20%"
				}
			});
		});

		useGsap.from(".cell", {
			scrollTrigger: {
				trigger: "#skills",
				start: "50% bottom"
			},
			autoAlpha: 0,
			scale: 0.75,
			duration: 1,
			delay: 0.75,
			stagger: {
				amount: 0.5,
				from: "start",
				grid: "auto"
			}
		});
	});
</script>
