<template>
	<section id="writing" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 gap-10 md="grid-cols-12">
					<div class="writing-title" md="col-span-4" border-t-2 border-black>
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
	onMounted(() => {
		useGsap.to(".writing-title", {
			scrollTrigger: {
				trigger: "#writing",
				start: "top top",
				pin: ".writing-title",
				pinSpacing: false,
				end: "bottom top+=20%"
			}
		});

		useGsap.utils.toArray(".post").forEach((post: HTMLElement) => {
			useGsap.from(post, {
				scrollTrigger: {
					trigger: post,
					start: "20% bottom"
				},
				opacity: 0,
				duration: 0.5,
				delay: 0.25
			});
		});
	});
</script>
