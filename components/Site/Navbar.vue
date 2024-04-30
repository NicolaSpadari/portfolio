<template>
	<nav id="navbar" sticky top-0 z-5 w-full bg-lime-50 py-5>
		<div crate>
			<div class="navbar-content" flex justify-between>
				<NuxtLink to="#">
					<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
				</NuxtLink>

				<div hidden md="flex gap-10">
					<div flex items-center gap-10>
						<NuxtLink v-for="anchor in sections" :key="anchor.id" :to="anchor.hash" text-xl transition-opacity hover="opacity-65">
							<span class="navbar-section">{{ anchor.label }}</span>
						</NuxtLink>
					</div>
					<div flex items-center gap-8>
						<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" transition-opacity hover="opacity-65">
							<span :class="social.icon" :font-controlled="false" h-7 w-7 />
						</NuxtLink>
					</div>
				</div>

				<div flex items-center md="hidden">
					<button type="button" @click="open = !open">
						<i-heroicons-solid-x-mark v-if="open" h-6 w-6 />
						<i-heroicons-solid-bars-2 v-else h-6 w-6 />
					</button>
				</div>
			</div>
		</div>

		<div relative>
			<SiteMenu />
		</div>
	</nav>
</template>

<script lang="ts" setup>
	const { sections, socials } = useConstants();
	const { open } = useMenu();

	onMounted(() => {
		useGradient("#navbar");

		useGsap.from(".navbar-content", {
			yPercent: -150,
			delay: 0.5,
			duration: 1,
			ease: "power3.out"
		});

		useGsap.from(".navbar-section", {
			opacity: 0,
			stagger: 0.1,
			duration: 0.3,
			delay: 0.75
		});
	});
</script>
