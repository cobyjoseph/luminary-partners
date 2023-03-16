<script lang="ts">
	import bgLines from '$lib/assets/patterns/background-lines-v0.1.svg';
	import bgLinesPortrait from '$lib/assets/patterns/portrait-background-lines-v0.2.svg';
	import InView from '$lib/components/InView.svelte';

	let color = 'blue';
	let tempScroll = 400;
	let scroll;
	let speed = 0.8;
</script>

<svelte:window bind:scrollY={scroll} />

{scroll}

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
				style:color
				style:transform={isVisible
					? `'{translateY(${scroll - 500 * speed}px)}'`
					: `'(translateY(0px))'`}
				class=" relative z-20 px-[8%] font-satoshi text-3xl font-extrabold text-secondaryDark {isVisible
					? 'customTranslate bg-red-400'
					: ' bg-green-500'}"
			>
				{isVisible}
				Your partner for:
			</div>
		</div>
	</InView>
</div>

<style>
	.customTranslate {
		transform: translateY('`${scroll}px`');
	}

	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
