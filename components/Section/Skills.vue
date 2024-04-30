<template>
	<section id="skills" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div flex flex-col gap-10 md="gap-8">
					<div border-t-2 border-black md="col-span-2">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Skills
						</p>
					</div>
					<div flex flex-col divide-y divide-gray-200>
						<Skill v-for="i in 5" :key="i" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	onMounted(() => {
		useGsap.utils.toArray(".skill").forEach((skill: HTMLElement) => {
			useGsap.from(skill, {
				scrollTrigger: {
					trigger: skill,
					start: "20% bottom"
				},
				opacity: 0,
				duration: 0.5,
				delay: 0.25
			});
		});
	});
</script>
