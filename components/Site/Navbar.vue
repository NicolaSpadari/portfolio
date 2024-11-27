<template>
	<nav id="navbar" md="sticky" fixed inset-x-0 top-0 z-5 w-full gradient overflow-hidden py-2>
		<div crate>
			<div class="navbar-content" flex transform justify-between translate-y="-150%">
				<NuxtLink to="#" :aria-label="`${appConfig.user.name} ${appConfig.user.surname}`" class="magnet" py-3>
					<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
				</NuxtLink>

				<div hidden md="flex gap-5">
					<div flex items-center gap-2>
						<button v-for="anchor in props.sections" :key="anchor._uid" px-5 py-3 text-xl transition-opacity hover="opacity-65" class="page-link magnet" @click="scrollSection(`#${anchor.component}`)">
							<span class="navbar-section inner" invisible>{{ anchor.title }}</span>
						</button>
					</div>
					<div flex items-center gap-2>
						<NuxtLink v-for="social in Object.values(appConfig.socials)" :key="social.id" :to="social.link" p-3 transition-opacity hover="opacity-65" class="magnet" :aria-label="social.label">
							<Icon :name="social.icon" size-7 />
						</NuxtLink>
					</div>
				</div>

				<div flex items-center md="hidden">
					<button type="button" aria-label="Toggle menu" @click="handleMenu()">
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

	const appConfig = useAppConfig();
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

<style scoped>
	.page-link:after{
		@apply content-empty bg-neutral-800 absolute size-1.5 bottom-0 left-50% block rounded-full transform -translate-50% scale-0 transition-transform duration-300;
	}
	.page-link:hover:after{
		@apply scale-100;
	}
</style>
