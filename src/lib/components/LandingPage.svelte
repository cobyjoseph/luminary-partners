<script lang="ts">
	import { onMount } from 'svelte';
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';

	let mountAnimations = false;

	onMount(() => {
		mountAnimations = !mountAnimations;
	});
</script>

<!-- {#if mountAnimations}
	<div class="absolute bottom-0 left-0 h-[70vh] w-[70vh] overflow-hidden">
		<div
			in:scale
			class="absolute bottom-0 left-0 -z-10 h-[70vh] w-[70vh] -translate-x-[40%] translate-y-[30%] rounded-full "
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
				in:draw={{ duration: 200, easing: quintIn }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="#57599e"
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
				in:draw={{ duration: 300, delay: 75, easing: quintIn }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="#57599e"
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
				in:draw={{ duration: 300, delay: 150, easing: quintIn }}
				x1="-24.2929"
				y1="1.29289"
				x2="182.707"
				y2="208.293"
				stroke="#57599e"
				stroke-width="2"
			/>
		</svg>
	</div>
{/if} -->

{#if mountAnimations}
	<div class="relative z-20 mt-[10vh] flex flex-col items-center justify-center  font-satoshi">
		<div class="flex max-w-[40rem] flex-col items-center gap-12 text-center  text-white ">
			<div class="textSmallClamp flex flex-col  items-center justify-center gap-7  ">
				<div
					in:fly={{ duration: 300, delay: 0, easing: sineInOut, y: 100 }}
					class="textClamp font-satoshi font-extrabold leading-10  text-white  sm:px-[5vw]  "
				>
					Strategic marketing for innovative companies
				</div>
				<div in:fly={{ duration: 300, delay: 0, easing: sineInOut, y: 100 }}>
					We provide comprehensive marketing and branding services to help you stand out from the
					crowd and drive home your message.
				</div>
				<div in:fly={{ duration: 300, delay: 150, easing: sineInOut, y: 100 }} class="flex">
					<div
						class="textSmallClamp mt-2 flex items-center justify-center gap-1 rounded-md bg-bright px-6 py-[0.7rem] font-bold text-white hover:bg-base hover:text-[#2155FF]  "
					>
						<div class="flex">Learn More</div>

						<!-- <svg
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
						</svg> -->
					</div>
				</div>
			</div>

			<!-- <div class="overflow-hidden ">
				<img
					src={heroSliced}
					alt="business people in a meeting"
					in:fly={{ duration: 300, delay: 0, easing: sineInOut, y: 100 }}
					class="flex"
				/>
			
			</div> -->
		</div>
	</div>
{/if}

<style>
	/* .backgroundImage {
		background-image: url;
	} */

	.roundingClamp {
		border-radius: clamp(0.2rem, 2vw + 1rem, 7rem);
	}

	.textClamp {
		font-size: clamp(1.7rem, 2.5vw + 0.5rem, 3rem);
	}

	.textSmallClamp {
		font-size: clamp(1rem, 0.8vw + 0.4rem, 2.5rem);
		line-height: normal;
	}

	/* Picture modified from Rawpixel Ltd on Flickr / 2018. source: https://www.flickr.com/photos/byrawpixel/45739276632/ */
</style>
