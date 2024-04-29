<template>
	<section id="interests" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 gap-10 md="grid-cols-5 gap-8">
					<div border-t-2 border-black md="col-span-2">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Interests
						</p>
					</div>
					<div md="col-span-3">
						<div grid grid-cols-2 md="grid-cols-3" lg="grid-cols-4" gap-2>
							<NuxtImg v-for="i in 12" :key="i" :src="genericPlaceholder" aspect-square h-full w-full overflow-hidden rounded-xl />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { genericPlaceholder } = usePlaceholder();
</script>
