<template>
	<Transition name="fade">
		<div v-show="open" crate md="hidden">
			menu
		</div>
	</Transition>
</template>

<script lang="ts" setup>
	const { open } = useMenu();
</script>
