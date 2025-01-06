<template>
	<footer id="footer" class="gradient">
		<div class="py-20" lg="py-30">
			<div crate>
				<div class="flex flex-col gap-12" md="flex-row" lg="gap-32">
					<div class="flex flex-col gap-12" md="flex-row">
						<button type="button" aria-label="Scroll to top" class="magnet mb-auto" @click="scrollTop()">
							<SvgoLogo :font-controlled="false" class="size-10 text-zinc-900" />
						</button>
					</div>
					<div class="flex flex-col gap-12 text-zinc-900">
						<p class="text-3xl font-medium" lg="max-w-md">
							I'm {{ appConfig.user.name }} &ndash; a Frontend Web Developer based in Italy
						</p>
						<div>
							<Btn :to="`mailto:${appConfig.user.email}`" :external="true" :icon="true" :strength="1.5" class="magnet inline-flex">
								Email me
							</Btn>
						</div>
						<div class="flex flex-wrap gap-6">
							<NuxtLink v-for="social in Object.values(appConfig.socials)" :key="social.id" :to="social.link" class="magnet text-base transition-opacity" hover="opacity-65" :aria-label="social.label">
								{{ social.label }}
							</NuxtLink>
							<span class="text-base text-neutral-500">&copy; {{ appConfig.currentYear }}</span>
							<button type="button" class="cursor-default text-base text-neutral-500 opacity-1" @click="handleEasterEgg()">
								Have you found the easter egg?
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	const appConfig = useAppConfig();
	const { enabled } = useEasterEgg();

	const handleEasterEgg = () => {
		console.log("🥚");
		enabled.value = true;
	};

	const scrollTop = () => {
		useGsap.to(window, {
			scrollTo: 0,
			duration: 1,
			ease: "power3.inOut"
		});
	};
</script>
