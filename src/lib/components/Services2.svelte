<script>
	import img1 from '$lib/assets/services/MarketResearch-opt.webp';
	import img2 from '$lib/assets/services/Branding-opt.webp';
	import img3 from '$lib/assets/services/Advertising-opt.webp';
	import InView from '$lib/components/InView.svelte';
	import { slide, fly, scale } from 'svelte/transition';

	let imageHeight;
</script>

<div class="heightClass relative z-40 mt-[-2rem] justify-center bg-base px-[6%] ">
	<div class="flex flex-col justify-center gap-10 sm:flex-row sm:gap-0 ">
		<div class=" flex w-full flex-col gap-4 sm:w-[28vw] ">
			<InView yThreshold="0" let:isVisible>
				<div class="relative">
					{#if !isVisible}
						<div
							out:slide={{ duration: 400, opacity: 0.5 }}
							class="absolute h-full w-full bg-base"
						/>
					{/if}
					<img transition:fly={{ duration: 500 }} src={img1} alt="" class=" bg-contain " />
				</div>
			</InView>

			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="pr-7 font-satoshi text-3xl font-thin text-bright ">Market research</div>
			<div class="pr-7 font-satoshi text-lg font-thin text-textLight 2xl:text-2xl">
				We help uncover valuable insights about your audience, competitors, and industry trends, to
				drive your business forward with data-driven decisions.
			</div>
			<div class="hidden h-[4rem] w-full sm:block" />
		</div>

		<div class=" flex w-full flex-col gap-4 sm:mt-[2rem]  sm:w-[28vw]">
			<InView yThreshold="50" let:isVisible>
				<div class="relative">
					{#if !isVisible}
						<div
							out:slide={{ duration: 400, opacity: 0.5 }}
							class="absolute h-full w-full bg-base"
						/>
					{/if}
					<img src={img2} alt="" class=" bg-contain " />
				</div>
			</InView>
			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="pr-7 font-satoshi text-3xl font-thin text-bright ">Branding and design</div>
			<div class="pr-7 font-satoshi text-lg font-thin text-textLight  2xl:text-2xl">
				Our design services help you leave a lasting impression with a brand tailored to showcase
				your unique identity and captivate your audience.
			</div>
			<div class="hidden h-[2rem] w-full sm:block" />
		</div>

		<div class=" flex w-full flex-col gap-4 sm:mt-[4rem]  sm:w-[28vw]">
			<InView yThreshold="100" let:isVisible>
				<div class="relative">
					{#if !isVisible}
						<div
							out:slide={{ duration: 400, opacity: 0.5 }}
							class="absolute h-full w-full bg-base"
						/>
					{/if}
					<img src={img3} alt="" class=" bg-contain " />
				</div>
			</InView>
			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="pr-7 font-satoshi text-3xl font-thin text-bright ">Advertising and promotion</div>
			<div class="pr-7 font-satoshi text-lg font-thin text-textLight 2xl:text-2xl">
				Maximize your reach with our comprehensive advertising services, designed to deliver the
				right message to the right audience.
			</div>
		</div>
	</div>
</div>

<style>
	.image1 {
		background-image: url($lib/assets/services/MarketResearch.jpg);
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
