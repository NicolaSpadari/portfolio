<template>
	<section id="about" border-t border-gray-200>
		<div crate py="90px" lg="py-30">
			<div flex flex-col gap-10 border-t-2 border-black lg="gap-20">
				<p class="about-title" lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
					About
				</p>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div class="about-text" md="col-span-4">
						<p text-2xl lg="text-[32px]" font-medium>
							I'm Ben — a freelance digital product designer with 10 years of experience. I care a lot about using design for positive impact. Currently based in Lisbon, Portugal.
						</p>
					</div>
					<div md="col-start-7 col-span-6" flex flex-col gap-10>
						<p class="about-desc" text-xl lg="text-[22px]">
							I was most recently working at Portugal's newest unicorn, <NuxtLink to="/" font-medium underline>
								Cucumber
							</NuxtLink>. They raised the biggest Series D Portugal has seen. Before that I worked for <NuxtLink to="/" font-medium underline>
								Cool Cool
							</NuxtLink>
							&ndash; the fastest growing bank in Portugal. I led product design for over 8 million customers. I worked across multiple product squads solving complex money problems.
						</p>
						<p class="about-desc" text-xl lg="text-[22px]">
							I was most recently working at Portugal's newest unicorn, <NuxtLink to="/" font-medium underline>
								Cucumber
							</NuxtLink>. They raised the biggest Series D Portugal has seen. Before that I worked for <NuxtLink to="/" font-medium underline>
								Cool Cool
							</NuxtLink>
							&ndash; the fastest growing bank in Portugal. I led product design for over 8 million customers. I worked across multiple product squads solving complex money problems.
						</p>
						<p class="about-desc" text-xl lg="text-[22px]">
							I was most recently working at Portugal's newest unicorn, <NuxtLink to="/" font-medium underline>
								Cucumber
							</NuxtLink>. They raised the biggest Series D Portugal has seen. Before that I worked for <NuxtLink to="/" font-medium underline>
								Cool Cool
							</NuxtLink>
							&ndash; the fastest growing bank in Portugal. I led product design for over 8 million customers. I worked across multiple product squads solving complex money problems.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { upToDesktop } = useConstants();

	onMounted(() => {
		useGsap.matchMedia().add(upToDesktop, () => {
			useGsap.to(".about-title", {
				scrollTrigger: {
					trigger: "#about",
					start: "top top",
					pin: ".about-title",
					pinSpacing: false,
					end: "bottom top+=50%"
				}
			});
			useGsap.to(".about-text", {
				scrollTrigger: {
					trigger: "#about",
					start: "top top",
					pin: ".about-text",
					pinSpacing: false,
					end: "bottom top+=50%"
				}
			});
		});

		useGsap.from(".about-desc", {
			scrollTrigger: {
				trigger: "#about",
				start: "40% bottom"
			},
			opacity: 0,
			duration: 0.75,
			delay: 1,
			stagger: 0.25
		});
	});
</script>
