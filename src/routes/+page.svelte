<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Services from '$lib/components/Services.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import FAQPage from '$lib/components/FAQPage.svelte';
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="absolute bg-gradient-to-b from-black to-secondaryDark h-[10rem] -translate-y-[2rem] w-full opacity-30 -z-10 blur-lg"
/>
<div class="px-[8%] customHeight">
	<Menu />

	<LandingPage />
	<div class="bg-secondaryLight  absolute w-full inset-0 -z-20 " />
</div>

<Reports />

<Services />

<div class="px-[8%] customHeight relative">
	<AboutUs />
	<div class="bg-secondaryLight  absolute w-full inset-0 -z-20 " />
</div>

<FAQPage />

<style>
	.customHeight {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
