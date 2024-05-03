<template>
	<section id="intro">
		<div crate-boxed>
			<div class="intro-content" lg="space-y-8 py-30" invisible py-20 space-y-6>
				<p text-2xl lg="text-3xl">
					Senior frontend developer and engineer with {{ experienceYears }} years of experience. Based in Trento and working remotely.
				</p>
				<p text-2xl lg="text-3xl">
					Most recently at <NuxtLink :to="companyWebsite" target="_blank" underline>Bitbull</NuxtLink>, a fully remote company specialized in the e-commerce sector.
					Previously at <NuxtLink :to="prevCompanyWebsite" target="_blank" underline>Suggesto</NuxtLink> &mdash; creating web services and technologies for tourism and culture.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { companyWebsite, prevCompanyWebsite, experienceYears } = useConstants();

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
