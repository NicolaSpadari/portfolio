<template>
	<section id="skills" :class="{ linkable: props.blok.linkable }" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="skills-col" pointer-events-none border-t-2 border-black md="col-span-4">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							{{ props.blok.title }}
						</p>
					</div>
					<div md="col-span-7 col-start-6">
						<div grid grid-cols-2 md="grid-cols-3" lg="grid-cols-4" gap-2>
							<div v-for="(skill, skillIndex) in props.blok.content" :key="skill._uid" class="group cell magnet" :style="`animation-delay: ${100 * skillIndex}ms`" invisible relative aspect-square h-full w-full flex-center gradient overflow-hidden rounded-xl>
								<NuxtImg class="group-hover:opacity-0" :src="skill.image.filename" loading="lazy" :alt="skill.name" size-15 transition-opacity duration-250 />

								<div pointer-events-none absolute inset-0 size-full flex-center opacity-0 transition-opacity duration-250 class="inner group-hover:opacity-100" strength="2">
									<p text-xl md="text-base" xl="text-2xl" font-medium>
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
