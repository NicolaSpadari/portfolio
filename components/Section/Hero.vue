<template>
	<section id="hero" h="40vh" bg-lime-50>
		<div crate-boxed h-full>
			<div grid h-full items-center>
				<p lg="text-[5rem]" overflow-hidden text-5xl text-dark>
					<span class="line">{{ name }} {{ surname }}</span>
					<span class="line">Frontend web</span>
					<span class="line">developer</span>
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { name, surname } = useConstants();

	onMounted(() => {
		useGradient("#hero");

		useGsap.fromTo(".line", {
			yPercent: -100,
			opacity: 0
		}, {
			yPercent: 0,
			opacity: 1,
			stagger: 0.25,
			duration: 0.5
		});
	});
</script>
