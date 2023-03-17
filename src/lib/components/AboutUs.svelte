<script lang="ts">
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';
	import StaffPhotos from '$lib/components/StaffPhotos.svelte';
	import InView from '$lib/components/InView.svelte';
	import InView2 from '$lib/components/InView2.svelte';
</script>

<InView yThreshold="300" let:isVisible>
	{#if isVisible}
		<div class="absolute top-0 right-0 h-[70vh] w-[70vh] overflow-hidden">
			<div
				in:scale
				class="absolute top-0 right-0 -z-10 h-[30vh] w-[30vh] translate-x-[40%] -translate-y-[30%] rounded-full bg-secondaryDark sm:h-[70vh] sm:w-[70vh] "
			/>
		</div>
	{/if}

	<div class="justify-center sm:grid sm:grid-cols-2 sm:gap-10 ">
		<div class="flex flex-col gap-4 font-satoshi text-white   ">
			<div class="flex ">
				<div
					class="psuedoUnderline relative flex pt-10 pb-2 font-satoshi text-3xl font-extrabold text-white sm:text-5xl"
				>
					Who we are
				</div>
			</div>
			<div class="mt-3 flex flex-col gap-4 sm:text-lg  ">
				<div>
					<span class="font-extrabold  italic">Our mission:</span> To be a trusted partner to businesses,
					delivering customized solutions that help them achieve their goals and overcome challenges.
				</div>
				<div>
					We are committed to providing exceptional value and quality, and we pride ourselves on our
					ability to exceed expectations. Our focus on driving growth for our clients is at the core
					of our mission, and we work tirelessly to ensure their success.
				</div>

				<div
					class="textSmallClamp mt-2 flex  max-w-fit items-center justify-center gap-1 rounded-lg bg-base px-6 py-3 font-bold text-secondaryDark hover:bg-base hover:text-secondaryDark  "
				>
					<div class="flex">Book a consultation</div>

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

		<div
			class="flex flex-col flex-wrap gap-4 pb-2 font-satoshi sm:grid sm:grid-cols-2    sm:flex-row sm:gap-6"
		>
			<StaffPhotos />
		</div>
	</div>
</InView>

<InView yThreshold="200" let:isVisible>
	{#if isVisible}
		<div class="absolute bottom-0 left-0 -z-10 h-[70vh] w-[70vh] overflow-hidden">
			<svg
				class="absolute bottom-0 left-0 -translate-x-1 translate-y-1 "
				width="184"
				height="200"
				viewBox="0 0 184 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					in:draw={{ duration: 200, delay: 0, easing: quintIn }}
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
					in:draw={{ duration: 300, delay: 75, easing: quintIn }}
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
					in:draw={{ duration: 300, delay: 150, easing: quintIn }}
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
</InView>

<!-- ------------------------------------------------------------------------------------ -->
<style>
	.psuedoUnderline::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 10px;
		background-color: none;
		border-bottom: 4px solid #57599e;
		border-top: 4px solid #57599e;
	}
</style>
