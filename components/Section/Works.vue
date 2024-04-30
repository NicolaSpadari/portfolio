<template>
	<section id="works" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div border-t-2 border-black>
					<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
						Work
					</p>
				</div>
			</div>

			<div lg="crate">
				<div class="works-content" grid grid-cols-1 gap-10 md="grid-cols-2 gap-8">
					<Work md="col-span-2 px-8" lg="px-0" />

					<Work />
					<Work />
					<Work />
					<Work />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	onMounted(() => {
		useGsap.utils.toArray(".work").forEach((work: HTMLElement) => {
			useGsap.from(work, {
				scrollTrigger: {
					trigger: work,
					start: "20% bottom"
				},
				opacity: 0,
				duration: 0.5,
				delay: 0.5
			});
		});
	});
</script>
