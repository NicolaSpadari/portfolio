<template>
	<section id="experiences" border-t border-gray-200>
		<div py="90px" lg="py-30 space-y-16" space-y-10>
			<div crate>
				<div grid grid-cols-1 md="grid-cols-12" gap-10>
					<div border-t-2 border-black md="col-span-4">
						<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
							Experience
						</p>
					</div>
					<div md="col-start-7 col-span-6">
						<div flex flex-col divide-y divide-gray-200>
							<Experience v-for="i in 5" :key="i" />
							<Btn to="/" :icon="true">
								See full CV
							</Btn>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
