<script lang="ts">
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';
	import StaffPhotos from '$lib/components/StaffPhotos.svelte';
	import InView from '$lib/components/InView.svelte';
	import InView2 from '$lib/components/InView2.svelte';
</script>

<InView let:isVisible>
	{#if isVisible}
		<div class="absolute w-[70vh] h-[70vh] top-0 right-0 overflow-hidden">
			<div
				in:scale
				class="sm:w-[70vh] sm:h-[70vh] w-[30vh] h-[30vh] -z-10 translate-x-[40%] -translate-y-[30%] absolute top-0 right-0 rounded-full bg-primaryDark "
			/>
		</div>
	{/if}

	<div class="flex flex-col gap-4 font-satoshi text-white ">
		<div class="flex">
			<div
				class="text-3xl sm:text-5xl pt-10 pb-2 font-extrabold relative flex text-white psuedoUnderline font-satoshi"
			>
				Who we are
			</div>
		</div>
		<div class="flex flex-col gap-4 sm:text-lg">
			<div>
				<span class="font-extrabold  italic">Our mission:</span> To be a trusted partner to businesses,
				delivering customized solutions that help them achieve their goals and overcome challenges.
			</div>
			<div>
				We are committed to providing exceptional value and quality, and we pride ourselves on our
				ability to exceed expectations. Our focus on driving growth for our clients is at the core
				of our mission, and we work tirelessly to ensure their success.
			</div>
		</div>
	</div>

	<div
		class="flex flex-col sm:flex-row flex-wrap gap-0 sm:gap-12  justify-between font-satoshi pb-10"
	>
		<StaffPhotos />
	</div>
</InView>

<InView2 let:isVisible2>
	{#if isVisible2}
		<div class="absolute w-[70vh] h-[70vh] bottom-0 left-0 overflow-hidden -z-10">
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
</InView2>

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
		border-bottom: 2px solid white;
		border-top: 2px solid white;
	}
</style>
