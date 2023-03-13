<script lang="ts">
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';
	import InView from '$lib/components/InView.svelte';

	import photo1 from '$lib/assets/headshots/photo-1-v3.png';
	import photo2 from '$lib/assets/headshots/photo-2.png';
	import photo3 from '$lib/assets/headshots/photo-3.png';
	import photo4 from '$lib/assets/headshots/photo-4.png';
	// import texturePhoto from '$lib/assets/patterns/canvas-texture.png';
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
</InView>

<div class="flex flex-col gap-4 font-satoshi text-white ">
	<div class="flex">
		<div
			class="text-3xl sm:text-5xl pt-10 pb-2 font-extrabold relative flex text-white psuedoUnderline font-josefinSans"
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
			ability to exceed expectations. Our focus on driving growth for our clients is at the core of
			our mission, and we work tirelessly to ensure their success.
		</div>
	</div>
</div>

<div class="flex flex-col sm:flex-row flex-wrap gap-0 sm:gap-12  justify-between font-satoshi pb-7">
	<div class="flex gap-4 items-center sm:flex-col ">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<!-- <img src={texturePhoto} alt="texture" class=" bg-cover absolute -z-10 bg-repeat" /> -->
			<img
				src={photo1}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col sm:items-center ">
			<div class="flex text-xl text-white font-bold  ">Sarah Jones</div>
			<div class="flex text-sm text-white   ">Managing Director</div>
		</div>
	</div>
	<div class="flex gap-4 items-center sm:flex-col">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<!-- <img src={texturePhoto} alt="texture" class=" bg-cover absolute -z-10 bg-repeat" /> -->
			<img
				src={photo2}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col  sm:items-center ">
			<div class="flex text-xl text-white font-bold  ">Keisha Davis</div>
			<div class="flex text-sm text-white   ">Senior Consultant</div>
		</div>
	</div>
	<div class="flex gap-4 items-center sm:flex-col">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<!-- <img src={texturePhoto} alt="texture" class=" bg-cover absolute -z-10 bg-repeat" /> -->
			<img
				src={photo3}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col sm:items-center">
			<div class="flex text-xl text-white font-bold  ">Ana Torres</div>
			<div class="flex text-sm text-white   ">Consultant</div>
		</div>
	</div>
	<div class="flex gap-4 items-center sm:flex-col">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<!-- <img src={texturePhoto} alt="texture" class=" bg-cover absolute -z-10 bg-repeat" /> -->
			<img
				src={photo4}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col sm:items-center ">
			<div class="flex text-xl text-white font-bold  ">Matt Walsh</div>
			<div class="flex text-sm text-white   ">Consultant</div>
		</div>
	</div>
</div>

<!-- ------------------------------------------------------------------------------------ -->
<style>
	.customTransition {
		transition: transform 350ms ease-in-out;
	}

	.backgroundPhotoTexture {
		background-image: url('$lib/assets/patterns/canvas-texture.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

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
