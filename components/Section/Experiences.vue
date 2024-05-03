<template>
	<section id="experiences" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="experience-col" md="col-span-4" pointer-events-none border-t-2 border-black>
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Experience
						</p>
					</div>
					<div md="col-start-7 col-span-6">
						<div flex flex-col divide-y divide-gray-200>
							<Experience v-for="experience in experiences" :key="experience.id" :experience="experience" />
							<Btn class="button" to="/" :icon="true" invisible>
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
	const { data: experiences } = await useFetch("/api/experiences", {
		headers: useRequestHeaders(["cookie"])
	});

	const { upToDesktop } = useConstants();

	onMounted(() => {
		useGsap.matchMedia().add(upToDesktop, () => {
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
