<template>
	<section id="get-in-touch" border-t border-gray-200>
		<div crate py="90px" lg="py-30">
			<div flex flex-col gap-10 border-t-2 border-black lg="gap-20">
				<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
					Get in touch
				</p>
				<p class="project-text" lg="text-7xl mt-10" text="40px" invisible mt-6 font-medium>
					Have a project in mind?
				</p>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div md="col-span-7">
						<div flex flex-col gap-8>
							<p class="touch-text" invisible text-xl lg="text-[22px]">
								If you want to chat about a project &ndash; send me an email on <NuxtLink :to="`mailto:${email}`" font-medium underline transition-opacity hover="opacity-65">
									hi@email.com
								</NuxtLink>.
							</p>
							<p class="touch-text" invisible text-xl lg="text-[22px]">
								I can help designing a new website, designing a new digital product, building a strong design system, and building websites in Framer.
							</p>
							<p class="touch-text" invisible text-xl lg="text-[22px]">
								Currently based in Lisbon, Portugal &ndash; available for remote-friendly work.
							</p>
						</div>
					</div>
					<div md="col-span-3 col-start-9" flex flex-col gap-3>
						<div v-for="social in socials" :key="social.id" transition-opacity duration-250 hover="opacity-65">
							<NuxtLink :to="social.link" class="touch-social" invisible text-3xl font-medium underline>
								{{ social.label }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { socials, email } = useConstants();

	onMounted(() => {
		useGsap.from(".project-text", {
			scrollTrigger: {
				trigger: "#get-in-touch",
				start: "20% bottom"
			},
			autoAlpha: 0,
			duration: 2,
			delay: 0.5
		});

		useGsap.from(".touch-text", {
			scrollTrigger: {
				trigger: "#get-in-touch",
				start: "40% bottom"
			},
			autoAlpha: 0,
			duration: 0.75,
			delay: 1,
			stagger: 0.15
		});

		useGsap.from(".touch-social", {
			scrollTrigger: {
				trigger: "#get-in-touch",
				start: "40% bottom"
			},
			autoAlpha: 0,
			duration: 0.75,
			delay: 2,
			stagger: 0.3
		});
	});
</script>
