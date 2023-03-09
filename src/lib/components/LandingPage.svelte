<script lang="ts">
	import { onMount } from 'svelte';
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let mountAnimations = false;

	onMount(() => {
		mountAnimations = !mountAnimations;
	});
</script>

{#if mountAnimations}
	<div class="absolute w-[70vh] h-[70vh] bottom-0 left-0 overflow-hidden">
		<div
			in:scale
			class="w-[70vh] h-[70vh] -z-10 -translate-x-[40%] translate-y-[30%] absolute bottom-0 left-0 rounded-full bg-primaryDark "
		/>

		<svg
			class="absolute bottom-0 left-0 -translate-x-1 translate-y-1 "
			width="184"
			height="200"
			viewBox="0 0 184 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				in:draw={{ duration: 500 }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="white"
				stroke-width="2"
			/>
		</svg>
		<svg
			class="absolute bottom-0 left-0 -translate-x-5 translate-y-5"
			width="184"
			height="200"
			viewBox="0 0 184 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				in:draw={{ duration: 700 }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="white"
				stroke-width="2"
			/>
		</svg>
		<svg
			class="absolute bottom-0 left-0 -translate-x-9 translate-y-9 "
			width="184"
			height="200"
			viewBox="0 0 184 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				in:draw={{ duration: 900 }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="white"
				stroke-width="2"
			/>
		</svg>
	</div>
{/if}

{#if mountAnimations}
	<div class=" flex flex-col font-workSans gap-7 mt-5">
		<div
			in:fly={{ duration: 500, delay: 0, easing: backOut, y: 100 }}
			class="textClamp font-workSans font-bold italic text-white "
		>
			Unlocking Your Business's Full Potential
		</div>
		<div class="sm:grid sm:grid-cols-2 flex flex-col text-white gap-7 ">
			<div class="textSmallClamp flex flex-col  gap-7 ">
				<div in:fly={{ duration: 500, delay: 200, easing: backOut, y: 100 }}>
					We provide expert guidance to optimize your strategy, operations, and performance driving
					growth and success.
				</div>
				<div in:fly={{ duration: 500, delay: 400, easing: backOut, y: 100 }} class="flex">
					<div
						class="bg-secondaryDark  flex  gap-2 justify-center font-bold textSmallClamp px-4 py-3 rounded-lg items-center"
					>
						<div class="flex">Learn More</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5 "
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
			<div in:fly={{ duration: 500, delay: 0, easing: backOut, y: 100 }} class="flex">right</div>
		</div>
	</div>
{/if}

<style>
	.textClamp {
		font-size: clamp(0.2rem, 5vw + 0.5rem, 3rem);
		line-height: normal;
	}

	.textSmallClamp {
		font-size: clamp(1rem, 1vw + 0.8rem, 2rem);
		line-height: normal;
	}
</style>
