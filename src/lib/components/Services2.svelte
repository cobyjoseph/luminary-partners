<script>
	import img1 from '$lib/assets/services/MarketResearch.jpg';
	import img2 from '$lib/assets/services/Branding.jpg';
	import img3 from '$lib/assets/services/Advertising.jpg';
	import InView from '$lib/components/InView.svelte';
	import { slide, fly, scale } from 'svelte/transition';

	let imageHeight;
</script>

<div class="heightClass mt-[-2rem] bg-base px-[6%] ">
	<div class="flex justify-center ">
		<div class=" flex w-[28vw] flex-col gap-4 ">
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
			<div class="pr-7 font-satoshi font-thin text-textLight">
				We help uncover valuable insights about your audience, competitors, and industry trends, to
				drive your business forward with data-driven decisions.
			</div>
			<div class="h-[4rem] w-full" />
		</div>

		<div class=" mt-[2rem] flex w-[28vw] flex-col  gap-4">
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
			<div class="pr-7 font-satoshi font-thin text-textLight">
				Our design services help you leave a lasting impression with a brand tailored to showcase
				your unique identity and captivate your audience.
			</div>
			<div class="h-[2rem] w-full" />
		</div>

		<div class=" mt-[4rem] flex w-[28vw] flex-col  gap-4">
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
			<div class="pr-7 font-satoshi font-thin text-textLight">
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
