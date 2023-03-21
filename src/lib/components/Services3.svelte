<script lang="ts">
	import InView from '$lib/components/InView.svelte';
	import { pages4HeightInitial } from '$lib/stores/heightStore';
	import { fly, blur } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	let colorBlue = 'blue';
	let colorRed = 'red';

	let scroll: number;
	let speed = 0.6;
	let speed2 = 1;
	let abovePagesHeight;
	let containerHeight;

	$: derivedTranslate = ((scroll * speed2 - abovePagesHeight) / containerHeight) * 3 * 100;

	pages4HeightInitial.subscribe((value) => {
		abovePagesHeight = value;
	});

	$: scrollStart = scroll - abovePagesHeight;
</script>

<svelte:window bind:scrollY={scroll} />

derivedTranslate: {derivedTranslate}

<div class="tallerHeightClass sticky" bind:clientHeight={containerHeight}>
	<InView let:isVisible yThreshold="-100">
		<div class="heightClass relative flex items-center justify-center">
			<div class="z-20 flex flex-col gap-6">
				<div class="z-20 flex font-satoshi text-4xl font-extrabold text-white">
					Cut through the noise
				</div>
				<div class="flex justify-center">
					<div
						class="textSmallClamp z-20 mt-2 flex items-center justify-center gap-1 rounded-lg bg-bright px-4 py-3 font-bold text-white hover:bg-base hover:text-[#2155FF]  "
					>
						<div class="flex">Let's talk</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 28 20"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5 hover:stroke-secondaryDark"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div class="backgroundPhoto absolute  h-full w-full " />
			<div class="absolute z-0 h-full w-full  bg-slate-900 opacity-50 " />
		</div>
	</InView>
</div>

<style>
	.backgroundPhoto {
		background-image: url($lib/assets/lightBulb.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}

	.tallerHeightClass {
		min-height: 300vh;
		min-height: 300svh;
	}

	.textSmallClamp {
		font-size: clamp(1rem, 0.8vw + 0.4rem, 2.5rem);
		line-height: normal;
	}
</style>
