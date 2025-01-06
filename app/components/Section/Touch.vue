<template>
	<section id="get-in-touch" class="border-t border-gray-200">
		<div crate class="py-90px" lg="py-30">
			<div class="flex flex-col gap-10 border-t-2 border-zinc-900" lg="gap-20">
				<p class="mt-6 text-4xl font-medium" lg="text-52px mt-10">
					Get in touch
				</p>
				<p class="project-text invisible mt-6 text-40px font-medium" lg="text-7xl mt-10">
					Have a project in mind?
				</p>
				<div class="grid grid-cols-1 gap-10" md="grid-cols-12">
					<div md="col-span-7">
						<div class="flex flex-col gap-8">
							<p class="touch-text invisible text-xl" lg="text-22px">
								If you want to chat about a project &ndash; send me an email on <NuxtLink :to="`mailto:${appConfig.user.email}`" class="font-medium underline transition-opacity" hover="opacity-65">
									{{ appConfig.user.email }}
								</NuxtLink>.
							</p>
							<p class="touch-text invisible text-xl" lg="text-22px">
								I can help designing a new website, designing a new digital product, building a strong design system, and building websites in Nuxt and UnoCSS.
							</p>
							<p class="touch-text invisible text-xl" lg="text-22px">
								Currently based in Trento, Italy &ndash; available for remote work.
							</p>
						</div>
					</div>
					<div class="flex flex-col gap-3" md="col-span-3 col-start-9">
						<div v-for="social in Object.values(appConfig.socials)" :key="social.id" class="transition-opacity duration-250" hover="opacity-65">
							<NuxtLink :to="social.link" class="touch-social invisible text-3xl font-medium underline">
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
	const appConfig = useAppConfig();

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
