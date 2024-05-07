<template>
	<section id="projects" :class="{ linkable: props.blok.linkable }" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div flex flex-col gap-10 md="gap-8">
					<div border-t-2 border-black md="col-span-2">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							{{ props.blok.title }}
						</p>
					</div>
					<div flex flex-col divide-y divide-gray-200>
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
