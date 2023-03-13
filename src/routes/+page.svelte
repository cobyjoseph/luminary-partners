<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Services from '$lib/components/Services.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="px-[8%] customHeight">
	<Menu />

	<LandingPage />
	<div class="bg-primaryLight  absolute w-full inset-0 -z-20 " />
</div>

<Reports />

<Services />

<div class="px-[8%] customHeight relative">
	<AboutUs />
	<div class="bg-primaryLight  absolute w-full inset-0 -z-20 " />
</div>

<style>
	.customHeight {
		height: 100vh;
		height: 100svh;
	}
</style>
