<template>
	<footer id="footer" gradient>
		<div py-20 lg="py-30">
			<div crate>
				<div flex flex-col gap-12 md="flex-row" lg="gap-32">
					<div flex flex-col md="flex-row" gap-12>
						<button type="button" mb-auto aria-label="Scroll to top" @click="scrollTop()">
							<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
						</button>
					</div>
					<div flex flex-col gap-12>
						<p lg="max-w-md" text-3xl font-medium>
							I'm {{ name }} &ndash; a Frontend Web Developer based in Italy
						</p>
						<div>
							<Btn :to="`mailto:${email}`" :external="true" :icon="true" inline-flex>
								Email me
							</Btn>
						</div>
						<div flex flex-wrap gap-6>
							<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" text-base transition-opacity hover="opacity-65" :aria-label="social.label">
								{{ social.label }}
							</NuxtLink>
							<span text-base text-neutral-500>&copy; {{ currentYear }}</span>
							<span text-base text-neutral-500 opacity-1>Have you found the easter egg?</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	const { name, socials, currentYear, email } = useConstants();

	const scrollTop = () => {
		useGsap.to(window, {
			scrollTo: 0,
			duration: 1,
			ease: "power3.inOut"
		});
	};
</script>
