<template>
	<nav id="navbar" fixed inset-x-0 w-full md="sticky" top-0 z-5 gradient overflow-hidden py-5>
		<div crate>
			<div class="navbar-content" flex transform justify-between translate-y="-150%">
				<NuxtLink to="#">
					<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
				</NuxtLink>

				<div hidden md="flex gap-10">
					<div flex items-center gap-10>
						<NuxtLink v-for="anchor in sections" :key="anchor.id" :to="anchor.hash" text-xl transition-opacity hover="opacity-65">
							<span class="navbar-section" invisible>{{ anchor.label }}</span>
						</NuxtLink>
					</div>
					<div flex items-center gap-8>
						<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" transition-opacity hover="opacity-65">
							<span :class="social.icon" :font-controlled="false" h-7 w-7 />
						</NuxtLink>
					</div>
				</div>

				<div flex items-center md="hidden">
					<button type="button" @click="handleMenu()">
						<i-heroicons-solid-x-mark v-if="open" h-6 w-6 />
						<i-heroicons-solid-bars-2 v-else h-6 w-6 />
					</button>
				</div>
			</div>

			<div relative>
				<SiteMenu />
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	const { sections, socials } = useConstants();
	const { open } = useMenu();

	const tl = useGsap.timeline({
		reversed: true,
		paused: true
	});

	onMounted(() => {
		useGsap.to(".navbar-content", {
			"--un-translate-y": 0,
			delay: 0.5,
			duration: 1,
			ease: "power3.out"
		});

		useGsap.from(".navbar-section", {
			autoAlpha: 0,
			stagger: 0.1,
			duration: 0.3,
			delay: 0.75
		});

		tl.to("#navbar", {
			height: "100vh",
			duration: 0.75,
			ease: "power4.inOut"
		});
	});

	const handleMenu = () => {
		open.value = !open.value;
		tl.reversed() ? tl.play() : tl.reverse();
	};
</script>
