<template>
	<section id="writing" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 gap-10 md="grid-cols-12">
					<div class="writing-title" md="col-span-4" pointer-events-none border-t-2 border-black>
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Writing
						</p>
					</div>
					<div md="col-span-7 col-start-5">
						<div flex flex-col gap-10>
							<p text-2xl font-medium>
								Blog posts
							</p>

							<div flex flex-col divide-y divide-gray-200>
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
