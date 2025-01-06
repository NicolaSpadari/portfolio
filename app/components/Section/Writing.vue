<template>
	<section id="writing" class="border-t border-gray-200">
		<div class="py-90px space-y-10" lg="py-30 space-y-16">
			<div crate>
				<div class="grid grid-cols-1 gap-10" md="grid-cols-12">
					<div class="writing-title pointer-events-none border-t-2 border-zinc-900" md="col-span-4">
						<p class="mt-6 text-4xl font-medium" lg="text-52px mt-10">
							Writing
						</p>
					</div>
					<div md="col-span-7 col-start-5">
						<div class="flex flex-col gap-10">
							<p class="text-2xl font-medium">
								Blog posts
							</p>

							<div class="flex flex-col divide-y divide-gray-200">
								<Post v-for="i in 5" :key="i" />
							</div>
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
		useGsap.matchMedia().add(appConfig.upToDesktopMediaQuery, () => {
			useGsap.to(".writing-title", {
				scrollTrigger: {
					trigger: "#writing",
					start: "top top",
					pin: ".writing-title",
					pinSpacing: false,
					end: "bottom top+=20%"
				}
			});
		});

		document.querySelectorAll(".post").forEach((post) => {
			useGsap.from(post, {
				scrollTrigger: {
					trigger: post,
					start: "20% bottom"
				},
				autoAlpha: 0,
				duration: 0.5,
				delay: 0.25
			});
		});
	});
</script>
