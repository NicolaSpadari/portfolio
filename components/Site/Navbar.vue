<template>
	<nav id="navbar" md="sticky" fixed inset-x-0 top-0 z-5 w-full gradient overflow-hidden py-5>
		<div crate>
			<div class="navbar-content" flex transform justify-between translate-y="-150%">
				<NuxtLink to="#">
					<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
				</NuxtLink>

				<div hidden md="flex gap-10">
					<div flex items-center gap-10>
						<button v-for="anchor in props.sections" :key="anchor._uid" text-xl transition-opacity hover="opacity-65" @click="scrollSection(`#${anchor.component}`)">
							<span class="navbar-section" invisible>{{ anchor.title }}</span>
						</button>
					</div>
					<div flex items-center gap-8>
						<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" transition-opacity hover="opacity-65">
							<Icon :name="social.icon" size-7 />
						</NuxtLink>
					</div>
				</div>

				<div flex items-center md="hidden">
					<button type="button" @click="handleMenu()">
						<Icon v-if="open" name="heroicons-solid:x-mark" size-6 />
						<Icon v-else name="heroicons-solid:bars-2" size-6 />
					</button>
				</div>
			</div>

			<div relative>
				<SiteMenu :sections="props.sections" @scroll="handleMenu()" />
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		sections: SbBlokData[]
	}>();

	const { socials } = useConstants();
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

	const scrollSection = (hash: string) => {
		useGsap.to(window, {
			scrollTo: hash,
			duration: 1,
			ease: "power3.inOut"
		});
	};
</script>
