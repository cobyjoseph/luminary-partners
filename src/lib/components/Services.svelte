<script>
	import bgLines from '$lib/assets/patterns/background-lines-v0.1.svg';
	import bgLinesPortrait from '$lib/assets/patterns/portrait-background-lines-v0.2.svg';
	import InView from '$lib/components/InView.svelte';

	let scroll;
	let speed = 400;
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

	<InView let:isVisible yThreshold="-500">
		<div class="flex justify-center">
			<div
				class=" relative z-20 px-[8%] font-satoshi text-3xl font-extrabold text-secondaryDark {isVisible
					? 'customTranslate bg-red-400'
					: 'translate-y-0 bg-green-500'}"
			>
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
