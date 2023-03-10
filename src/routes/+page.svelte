<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
</script>

<div class="px-[6%] customHeight">
	<Menu />

	<LandingPage />

	<div class="bg-primaryLight  absolute w-full inset-0 -z-20" />
</div>

<Reports />

<style>
	.customHeight {
		height: 100vh;
		height: 100svh;
	}
</style>
