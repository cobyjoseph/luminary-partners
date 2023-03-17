<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Services from '$lib/components/Services.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import FAQPage from '$lib/components/FAQPage.svelte';
	import { pageHeightInitial } from '$lib/stores/heightStore';
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="absolute -z-10 h-[10rem] w-full -translate-y-[2rem] bg-gradient-to-b from-black to-secondaryDark opacity-30 blur-lg"
/>

<div bind:clientHeight={$pageHeightInitial}>
	<div class="customHeight relative px-[8%]">
		<Menu />

		<LandingPage />
		<div class="absolute  inset-0 -z-20 w-full bg-secondaryLight " />
	</div>

	<Reports />
</div>

<Services />

<div class="customHeight relative px-[8%]">
	<AboutUs />
	<div class="absolute  inset-0 -z-20 w-full bg-secondaryLight " />
</div>

<FAQPage />

<style>
	.customHeight {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
