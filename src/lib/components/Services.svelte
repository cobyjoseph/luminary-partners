<script lang="ts">
	import bgLines from '$lib/assets/patterns/background-lines-v0.4.svg';
	import bgLinesPortrait from '$lib/assets/patterns/background-lines-v0.6.svg';
	import InView from '$lib/components/InView.svelte';
	import { landingPageHeightInitial } from '$lib/stores/heightStore';

	let colorBlue = 'blue';
	let colorRed = 'red';

	let scroll: number;
	let speed = 0.6;
	let speed2 = 0.7;
	let landingPageHeight;
	let containerHeight;

	$: derivedTranslate = ((scroll * speed2 - landingPageHeight) / containerHeight) * 3 * 100 - 100;

	landingPageHeightInitial.subscribe((value) => {
		landingPageHeight = value;
	});

	$: scrollStart = scroll - landingPageHeight;
</script>

<svelte:window bind:scrollY={scroll} />

<div>
	derived translate: {derivedTranslate}
</div>
scroll amount: {scroll}
<div class="bg-green-400">
	landing page height: {landingPageHeight}
</div>

<!-- scroll start: {scrollStart} -->
<div>
	container height: {containerHeight}
</div>

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
				? `translateX(${derivedTranslate}%) scale(5.0)`
				: 'translateX(-500%) scale(10.0)'}
			src={bgLinesPortrait}
			alt="backgroundlines"
		/>

		<div class="flex justify-center">
			<div
				style:transform={isVisible ? `translateY(${(scroll - 500) * speed}px)` : `translateY(0px)`}
				class=" relative z-20 px-[8%] font-satoshi text-3xl font-extrabold text-black"
			>
				Your partner for:
			</div>
		</div>
	</InView>
</div>

<!-- translateX(-${derivedTranslate}%) scale(10.0) -->
<style>
	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
