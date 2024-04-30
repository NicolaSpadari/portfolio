<template>
	<section id="intro">
		<div crate-boxed>
			<div class="intro-content" lg="space-y-8 py-30" invisible py-20 space-y-6>
				<p text-2xl lg="text-3xl">
					Freelance senior product designer with 10 years of experience. Based in Lisbon. Available for remote-friendly freelance work from July.
				</p>
				<p text-2xl lg="text-3xl">
					Most recently at Lisbon's newest unicorn,
					<NuxtLink to="https://google.it" underline>
						Cucumber
					</NuxtLink>.
					Previously, at Cool Cool &mdash; the fastest growing bank in the Portugal. Before that, the first design hire at Red Box.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	onMounted(() => {
		useGsap.from(".intro-content", {
			scrollTrigger: {
				trigger: "#intro",
				start: "20% bottom"
			},
			autoAlpha: 0,
			duration: 2,
			delay: 1.25
		});
	});
</script>
