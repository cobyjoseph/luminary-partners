<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Services1 from '$lib/components/Services1.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import FAQPage from '$lib/components/FAQPage.svelte';
	import { landingPageHeightInitial } from '$lib/stores/heightStore';
	import { pages4HeightInitial } from '$lib/stores/heightStore';
	import Services2 from '$lib/components/Services2.svelte';
	import Services3 from '$lib/components/Services3.svelte';
	import OurTeam from '$lib/components/OurTeam.svelte';
	import Contact from '$lib/components/Contact.svelte';
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

<div bind:clientHeight={$pages4HeightInitial}>
	<div bind:clientHeight={$landingPageHeightInitial}>
		<div class="backgroundPhoto absolute z-0 h-full w-full " />
		<div class="absolute z-0 h-full w-full  bg-slate-900 opacity-80 " />

		<div class="customHeight relative px-[8%]">
			<Menu />

			<LandingPage />
			<!-- <div class="absolute  inset-0 -z-20 w-full bg-secondaryLight " /> -->
		</div>

		<!-- <Reports /> -->
	</div>

	<Services1 />

	<Services2 />
</div>

<Services3 />

<OurTeam />

<Contact />

<!-- <div class="customHeight relative px-[8%]">
	<AboutUs />
	<div class="absolute  inset-0 -z-20 w-full bg-secondaryLight " />
</div> -->

<!-- <FAQPage /> -->
<style>
	.backgroundPhoto {
		background-image: url($lib/assets/bg-image2.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.customHeight {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
