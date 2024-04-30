<template>
	<section id="experiences" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="experience-col" border-t-2 border-black md="col-span-4">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Experience
						</p>
					</div>
					<div md="col-start-7 col-span-6">
						<div flex flex-col divide-y divide-gray-200>
							<Experience v-for="i in 5" :key="i" />
							<Btn class="button" to="/" :icon="true">
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
	onMounted(() => {
		useGsap.to(".experience-col", {
			scrollTrigger: {
				trigger: "#experiences",
				start: "top top",
				pin: ".experience-col",
				pinSpacing: false,
				end: "bottom top+=20%"
			}
		});

		useGsap.utils.toArray(".experience").forEach((experience: HTMLElement) => {
			useGsap.from(experience, {
				scrollTrigger: {
					trigger: experience,
					start: "20% bottom"
				},
				opacity: 0,
				duration: 0.5,
				delay: 0.25
			});
		});

		useGsap.from(".button", {
			scrollTrigger: {
				trigger: ".button",
				start: "20% bottom"
			},
			opacity: 0,
			yPercent: 30,
			duration: 0.5,
			delay: 0.5
		});
	});
</script>
