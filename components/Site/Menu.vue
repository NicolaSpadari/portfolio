<template>
	<Transition name="fade">
		<div v-show="open" crate md="hidden">
			<div space-y-3 py-10>
				<div flex flex-col>
					<NuxtLink v-for="section in sections" :key="section.id" :to="section.hash" text-lg py-3>
						{{ section.label }}
					</NuxtLink>
				</div>
				<div flex gap-8>
					<NuxtLink v-for="social in socials" :key="social.id" :to="social.link">
						<span :class="social.icon" :font-controlled="false" w-7 h-7 />
					</NuxtLink>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
	const { sections, socials } = useConstants();
	const { open } = useMenu();
</script>
