<template>
	<section id="works" :class="{ linkable: props.blok.linkable }" class="border-t border-gray-200 text-zinc-900">
		<div class="py-90px space-y-10" lg="py-30 space-y-16">
			<div crate>
				<div class="flex flex-col gap-10" md="gap-8">
					<div class="border-t-2 border-zinc-900" md="col-span-2">
						<p class="mt-6 text-4xl font-medium" lg="text-52px mt-10">
							{{ props.blok.title }}
						</p>
					</div>
					<div class="flex flex-col divide-y divide-gray-200">
						<Project v-for="project in props.blok.content" :key="project._uid" :project="project" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		blok: WorksStoryblok
	}>();

	onMounted(() => {
		document.querySelectorAll(".project").forEach((project) => {
			useGsap.from(project, {
				scrollTrigger: {
					trigger: project,
					start: "20% bottom"
				},
				autoAlpha: 0,
				duration: 0.5,
				delay: 0.25
			});
		});
	});
</script>
