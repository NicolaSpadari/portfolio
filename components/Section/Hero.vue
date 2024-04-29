<template>
	<section id="hero" h="40vh" bg-lime-50>
		<div h-full crate-boxed>
			<div grid h-full items-center>
				<p text-5xl text-dark lg="text-[5rem]">
					{{ name }} {{ surname }}<br> Frontend web<br> developer
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { name, surname } = useConstants();
</script>
