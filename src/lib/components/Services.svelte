<script lang="ts">
	import bgLines from '$lib/assets/patterns/background-lines-v0.1.svg';
	import bgLinesPortrait from '$lib/assets/patterns/portrait-background-lines-v0.2.svg';
	import InView from '$lib/components/InView.svelte';

	let colorBlue = 'blue';
	let colorRed = 'red';
	let tempScroll = 400;
	let scroll;
	let speed = 0.4;
</script>

<svelte:window bind:scrollY={scroll} />

{scroll}

<!-- The issue is just that I need to reset scroll to 0 when at the top of the second page. so I need to make it scroll - the outerHeight of the first two pages. So just need to bind outerheight of those and use a store? or some other method to pass that value between the components -->

<div class="heightClass relative overflow-hidden">
	<img class="absolute z-10 bg-cover portrait:hidden" src={bgLines} alt="backgroundlines" />
	<img
		class="absolute z-10 scale-125 bg-cover landscape:hidden"
		src={bgLinesPortrait}
		alt="backgroundlines"
	/>

	<InView let:isVisible yThreshold="-400">
		<div class="flex justify-center">
			<div
				style:color={isVisible ? `${colorRed}` : 'blue'}
				style:transform={isVisible ? `translateY(${scroll * speed}px)` : `translateY(0px)`}
				class=" relative z-20 px-[8%] font-satoshi text-3xl font-extrabold text-secondaryDark"
			>
				{isVisible}
				Your partner for:
			</div>
		</div>
	</InView>
</div>

<style>
	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
