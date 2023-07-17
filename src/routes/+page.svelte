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
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	function smoothScrollTo(targetPosition, duration) {
		const startPosition = window.pageYOffset;
		const distance = targetPosition - startPosition;
		const startTime = performance.now();

		function animation(currentTime) {
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);
			// const easeOutQuad = (t) => 1 - (1 - t) * (1 - t); // This is an ease-out quadratic easing function

			window.scrollTo(0, startPosition + distance * progress);

			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
		}

		requestAnimationFrame(animation);
	}
	onMount(() => {
		// setTimeout(() => {
		// 	smoothScrollTo(4800, 13000); // Adjust the target position and duration as needed
		// }, 500);
	});
</script>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
		rel="stylesheet"
	/>

	<title>Luminary Partners consulting</title>
	<meta
		name="description"
		content="Luminary Partners is a boutique consulting firm here for your strategic marketing needs"
	/>
</svelte:head>

<div
	class="absolute -z-10 h-[10rem] w-full -translate-y-[2rem] bg-gradient-to-b from-black to-secondaryDark opacity-30 blur-lg"
/>

<div bind:clientHeight={$pages4HeightInitial}>
	<div bind:clientHeight={$landingPageHeightInitial}>
		<div class="backgroundPhoto absolute z-0 h-full w-full " />
		<div class="absolute z-0 h-full w-full  bg-slate-900 opacity-80 " />

		<div class="customHeight relative px-[8%] 2xl:px-[14%]">
			<Menu />

			<LandingPage />
			<!-- <div class="absolute  inset-0 -z-20 w-full bg-secondaryLight " /> -->
		</div>

		<!-- <Reports /> -->
	</div>
	``
	<Services1 />

	<Services2 />
</div>

<Services3 />

<OurTeam />

<Contact />

<Footer />

<style>
	.backgroundPhoto {
		background-image: url($lib/assets/bg-images/bg-image2.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	@supports (background-image: url('test.webp')) {
		.backgroundPhoto {
			background-image: url($lib/assets/bg-images/bg-image2-opt.webp);
		}
	}

	.customHeight {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
