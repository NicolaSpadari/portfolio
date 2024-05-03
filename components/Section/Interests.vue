<template>
	<section id="skills" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="skills-col" pointer-events-none border-t-2 border-black md="col-span-4">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Skills
						</p>
					</div>
					<div md="col-span-7 col-start-6">
						<div grid grid-cols-2 md="grid-cols-3" lg="grid-cols-4" gap-2>
							<div v-for="skill in skills" :key="skill.id" class="group cell" relative aspect-square h-full w-full flex-center gradient overflow-hidden rounded-xl>
								<NuxtImg :src="skill.image" :alt="skill.title" size-15 />

								<div pointer-events-none absolute inset-0 size-full flex-center gradient opacity-0 transition-opacity duration-250 class="group-hover:opacity-100">
									<p text-xl md="text-base" xl="text-2xl" font-medium>
										{{ skill.title }}
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
	const { data: skills } = await useFetch("/api/competences", {
		headers: useRequestHeaders(["cookie"])
	});

	const { upToDesktop } = useConstants();

	onMounted(() => {
		useGsap.matchMedia().add(upToDesktop, () => {
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
			opacity: 0,
			scale: 0.75,
			duration: 0.75,
			delay: 0.5,
			stagger: {
				amount: 0.25,
				from: "start",
				grid: "auto"
			}
		});
	});
</script>
