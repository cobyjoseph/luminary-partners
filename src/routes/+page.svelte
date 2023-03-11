<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="px-[6%] customHeight">
	<Menu />

	<LandingPage />

	<div class="bg-primaryLight  absolute w-full inset-0 -z-20" />
</div>

<Reports />

<Services />

<style>
	.customHeight {
		height: 100vh;
		height: 100svh;
	}
</style>
