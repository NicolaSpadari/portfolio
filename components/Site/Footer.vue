<template>
	<footer id="footer" bg-lime-50>
		<div py-20 lg="py-30">
			<div crate>
				<div flex gap-12 lg="gap-32">
					<div flex flex-col md="flex-row" gap-12>
						<NuxtLink to="/">
							<SvgoLogo h-10 w-10 text-black :font-controlled="false" />
						</NuxtLink>
					</div>
					<div flex flex-col gap-12>
						<p lg="max-w-md" text-3xl font-medium>
							I'm {{ name }} &ndash; a Frontend Web Developer based in Italy
						</p>
						<div>
							<Btn to="/" :icon="true" inline-flex>
								Email me
							</Btn>
						</div>
						<div flex flex-wrap gap-6>
							<NuxtLink v-for="social in socials" :key="social.id" text-base>
								{{ social.label }}
							</NuxtLink>
							<span text-base text-neutral-500>&copy; {{ currentYear }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	const { name, socials, currentYear } = useConstants();
</script>
