<template>
	<section id="get-in-touch" border-t border-gray-200>
		<div crate py="90px" lg="py-30">
			<div flex flex-col gap-10 border-t-2 border-black lg="gap-20">
				<p lg="text-[52px] mt-10" mt-6 text-4xl font-medium>
					Get in touch
				</p>
				<p lg="text-7xl mt-10" mt-6 text="40px" font-medium>
					Have a project in mind?
				</p>
				<div grid grid-cols-1 gap-10 md="grid-cols-5 gap-48">
					<div lg="col-span-3">
						<div flex flex-col gap-8>
							<p text-xl lg="text-[22px]">
								If you want to chat about a project &ndash; send me an email on <NuxtLink to="/" font-medium underline>
									hi@email.com
								</NuxtLink>.
							</p>
							<p text-xl lg="text-[22px]">
								I can help designing a new website, designing a new digital product, building a strong design system, and building websites in Framer.
							</p>
							<p text-xl lg="text-[22px]">
								Currently based in Lisbon, Portugal &ndash; available for remote-friendly work.
							</p>
						</div>
					</div>
					<div lg="col-span-2" flex flex-col gap-3>
						<NuxtLink v-for="social in socials" :key="social.id" :to="social.link" text-3xl font-medium underline>
							{{ social.label }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { socials } = useConstants();
</script>
