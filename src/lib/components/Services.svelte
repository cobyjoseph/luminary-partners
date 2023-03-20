<script lang="ts">
	import bgLines from '$lib/assets/patterns/background-lines-v0.4.svg';
	import bgLinesPortrait from '$lib/assets/patterns/background-lines-v0.8.svg';
	import InView from '$lib/components/InView.svelte';
	import { landingPageHeightInitial } from '$lib/stores/heightStore';
	import { fly, blur } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	let colorBlue = 'blue';
	let colorRed = 'red';

	let scroll: number;
	let speed = 0.6;
	let speed2 = 1;
	let landingPageHeight;
	let containerHeight;
	let showFirst = false;
	let showSecond = false;
	let showThird = false;

	$: derivedTranslate = ((scroll * speed2 - landingPageHeight) / containerHeight) * 3 * 100 - 100;

	landingPageHeightInitial.subscribe((value) => {
		landingPageHeight = value;
	});

	$: scrollStart = scroll - landingPageHeight;
</script>

<svelte:window bind:scrollY={scroll} />

<!-- <div>
	derived translate: {derivedTranslate}
	<div>
		showFirst: {showFirst} , showSecond: {showSecond}
		showThird: {showThird}
	</div>
</div> -->
<!-- scroll amount: {scroll}
<div class="bg-green-400">
	landing page height: {landingPageHeight}
</div>

<div>
	container height: {containerHeight}
</div> -->

<!-- <div>
	variable test: `{(((${scroll} - ${landingPageHeight}) / ${containerHeight}) - 200) * 2.6}%`
</div> -->

<!-- The issue is just that I need to reset scroll to 0 when at the top of the second page. so I need to make it scroll - the outerHeight of the first two pages. So just need to bind outerheight of those and use a store? or some other method to pass that value between the components -->
<!-- try making a y threshold down   -->

<!-- I want the translate to be from the start of  -->

<div class="heightClass relative overflow-hidden" bind:clientHeight={containerHeight}>
	<InView let:isVisible yThreshold="-100">
		<!-- <img class="absolute z-10  portrait:hidden " src={bgLinesPortrait} alt="backgroundlines" /> -->
		<img
			class="absolute z-10 landscape:hidden   "
			style:transform={isVisible
				? `translateX(${derivedTranslate}%) scale(10.0)`
				: 'translateX(-500%) scale(10.0)'}
			src={bgLinesPortrait}
			alt="backgroundlines"
		/>
		<img
			class="absolute z-10 portrait:hidden  "
			style:transform={isVisible
				? `translateX(${derivedTranslate}%) scale(3.0)`
				: 'translateX(-500%) scale(10.0)'}
			src={bgLinesPortrait}
			alt="backgroundlines"
		/>

		<div class="flex flex-col items-center justify-center text-center">
			<div
				style:transform={isVisible
					? `translateY(${(scroll - 500) * speed}px)`
					: `translateY(-400px)`}
				class=" textClamp relative z-20 mb-2 flex px-[8%] font-satoshi font-extrabold text-black"
			>
				We are here to help you:
			</div>
			{#if derivedTranslate > -250}
				<div
					in:blur={{ duration: 500, delay: 0, easing: sineInOut }}
					style:transform={isVisible
						? `translateY(${(scroll - 500) * speed}px)`
						: `translateY(-400px)`}
					class=" textClampSmall relative z-20 flex px-[8%] font-satoshi font-semibold italic text-bright"
				>
					identify inefficienies,
				</div>
			{/if}
			{#if derivedTranslate > -170}
				<div
					in:blur={{ duration: 500, delay: 0, easing: sineInOut }}
					style:transform={isVisible
						? `translateY(${(scroll - 500) * speed}px)`
						: `translateY(-400px)`}
					class=" textClampSmall relative z-20 flex px-[8%] font-satoshi font-semibold italic text-bright"
				>
					create a roadmap,
				</div>
			{/if}

			{#if derivedTranslate > -100}
				<div
					in:blur={{ duration: 500, delay: 0, easing: sineInOut }}
					style:transform={isVisible
						? `translateY(${(scroll - 500) * speed}px)`
						: `translateY(-400px)`}
					class=" textClampSmall relative z-20 flex px-[8%] font-satoshi font-semibold italic text-bright"
				>
					and drive growth.
				</div>
			{/if}
		</div>
	</InView>
</div>

<!-- translateX(-${derivedTranslate}%) scale(10.0) -->
<style>
	.textClamp {
		font-size: clamp(1.7rem, 3.5vw + 0.5rem, 5rem);
		line-height: 1;
	}
	.textClampSmall {
		font-size: clamp(1rem, 2.5vw + 0.5rem, 3rem);
		line-height: 1.2;
	}

	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
