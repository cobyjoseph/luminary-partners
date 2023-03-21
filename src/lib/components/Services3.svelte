<script lang="ts">
	import InView from '$lib/components/InView.svelte';
	import { pages4HeightInitial } from '$lib/stores/heightStore';
	import { fly, blur } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { derived } from 'svelte/store';

	let colorBlue = 'blue';
	let colorRed = 'red';

	let scroll: number;
	let speed = 0.6;
	let speed2 = 1;
	let amplify = 1.9;
	let abovePagesHeight;
	let containerHeight;

	$: derivedTranslate = ((scroll * speed2 - abovePagesHeight) / containerHeight) * 3 * 100;

	pages4HeightInitial.subscribe((value) => {
		abovePagesHeight = value;
	});

	$: scrollStart = scroll - abovePagesHeight;
</script>

<svelte:window bind:scrollY={scroll} />

<!-- this is the grandparet: -->
<div class="tallerHeightClass relative   " bind:clientHeight={containerHeight}>
	<!-- this is the parent: -->

	<div class="heightClass sticky top-0 h-screen w-full overflow-hidden bg-opacity-50  ">
		<div
			style:transform={derivedTranslate > 0
				? `scale(${derivedTranslate ** amplify + 100}%)`
				: 'scale(1)'}
			class="backgroundPhotoMask absolute top-0 z-40 flex h-full w-full "
		/>

		<div
			class="backgroundPhoto sticky top-0 flex h-full w-full flex-col items-center justify-center"
		>
			<div
				class="justicy-center  flex flex-col items-center  gap-6 px-[8%] font-satoshi text-white"
			>
				<div class="textClamp  z-20 flex  text-center font-extrabold">Cut through the noise</div>
				<div class="textClampSmall z-20 text-center font-thin">
					With the vast amount of content being produced every day, it is increasingly challenging
					to stand out and capture the attention of your target audience. We can help.
				</div>
				<div class="z-20 flex justify-center">
					<div
						class="textSmallClamp  mt-2 flex items-center justify-center gap-1 rounded-sm bg-bright px-4 py-3 font-bold text-white hover:bg-base hover:text-[#2155FF]  "
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
				<div class="absolute top-0  h-full  w-full bg-slate-900 opacity-60" />
			</div>
		</div>
	</div>

	<!-- <div class="backgroundPhoto absolute top-0  h-full w-full " /> -->
</div>

<style>
	.backgroundPhoto {
		background-image: url($lib/assets/bg-images/lightBulb.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.backgroundPhotoMask {
		background-image: url($lib/assets/bg-images/luminary-logo-mask-v0.3.svg);
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

	.textClamp {
		font-size: clamp(3rem, 5vw + 1rem, 15rem);
		line-height: clamp(3rem, 5vw + 1rem, 7rem);
	}
	.textClampSmall {
		font-size: clamp(1.2rem, 1.5vw + 0.5rem, 5rem);
		line-height: clamp(1.6rem, 1.5vw + 1rem, 4rem);
	}
</style>
