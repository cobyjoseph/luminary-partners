<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import { onMount } from 'svelte';
</script>

<div class="px-[6%]">
	<Menu />

	<LandingPage />

	<div class="bg-primaryLight customHeight absolute w-full inset-0 -z-20" />
</div>

<style>
	.customHeight {
		height: 100vh;
		height: 100svh;
	}
</style>
