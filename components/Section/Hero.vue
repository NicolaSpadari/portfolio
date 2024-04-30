<template>
	<section id="hero" h="40vh" lg="45vh" animate-gradient animate-duration="15s" animate-count-infinite>
		<div crate-boxed h-full>
			<div grid h-full items-center>
				<div>
					<p lg="text-[5rem]" overflow-hidden text-5xl text-dark>
						<span inline-block invisible class="line">{{ name }} {{ surname }}</span>
					</p>
					<p lg="text-[5rem]" overflow-hidden text-5xl text-dark>
						<span inline-block invisible class="line">Frontend web</span>
					</p>
					<p lg="text-[5rem]" overflow-hidden text-5xl text-dark>
						<span inline-block invisible class="line">developer</span>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { name, surname } = useConstants();

	onMounted(() => {
		useGsap.from(".line", {
			autoAlpha: 0,
			yPercent: 100,
			stagger: 0.15,
			duration: 0.75,
			ease: "power4.out"
		});
	});
</script>
