<script>
	import img1 from '$lib/assets/services/MarketResearch.jpg';
	import img2 from '$lib/assets/services/Branding.jpg';
	import img3 from '$lib/assets/services/Advertising.jpg';
</script>

<div class="heightClass bg-base px-[6%]  ">
	<div class="flex justify-center ">
		<div class=" flex w-[28vw] flex-col gap-4 ">
			<img src={img1} alt="" class=" bg-contain" />
			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="font-satoshi text-3xl font-thin text-bright pr-7 ">Market research</div>
			<div class="font-satoshi font-thin text-textLight pr-7">
				We help uncover valuable insights about your audience, competitors, and industry trends, to
				drive your business forward with data-driven decisions.
			</div>
			<div class="h-[4rem] w-full" />
		</div>

		<div class=" mt-[2rem] flex w-[28vw] flex-col  gap-4">
			<img src={img2} alt="" class=" bg-contain" />
			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="font-satoshi text-3xl font-thin text-bright pr-7 ">Branding and design</div>
			<div class="font-satoshi font-thin text-textLight pr-7">
				Our design services help you leave a lasting impression with a brand tailored to showcase
				your unique identity and captivate your audience.
			</div>
			<div class="h-[2rem] w-full" />
		</div>

		<div class=" mt-[4rem] flex w-[28vw] flex-col  gap-4">
			<img src={img3} alt="" class=" bg-contain" />
			<div class="h-[0.07rem] w-[30%] bg-textLight" />
			<div class="font-satoshi text-3xl font-thin text-bright pr-7 ">Advertising and promotion</div>
			<div class="font-satoshi font-thin text-textLight pr-7">
				Maximize your reach with our comprehensive advertising services, designed to deliver the
				right message to the right audience.
			</div>
		</div>
	</div>
</div>

<style>
	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
