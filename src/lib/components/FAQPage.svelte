<script lang="ts">
	import { FAQStore } from '$lib/stores/FAQStores';
	import OneFAQ from '$lib/components/OneFAQ.svelte';
	import { slide, scale, draw } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import InView from '$lib/components/InView.svelte';
	import InView2 from '$lib/components/InView2.svelte';

	let data;

	FAQStore.subscribe((value) => {
		data = value;
	});

	console.log(data);
</script>

<div class="heightClass relative bg-base px-[8%] 2xl:px-[14%] pb-6 ">
	<InView yThreshold="0" let:isVisible>
		{#if isVisible}
			<div class="absolute bottom-0 right-0 z-0 h-[70vh] w-[70vh] overflow-hidden">
				<div
					in:scale={{ delay: 400 }}
					class="absolute bottom-0 right-0 -z-10 h-[30vh] w-[30vh] translate-x-[40%] translate-y-[30%] rounded-full bg-baseDark sm:h-[70vh] sm:w-[70vh] "
				/>
			</div>
		{/if}

		<div class="relative z-20 flex">
			<div
				class="psuedoUnderline relative flex pt-10 pb-[0.6rem] font-satoshi text-3xl font-extrabold text-secondaryDark sm:text-5xl"
			>
				Common questions
			</div>
		</div>

		<OneFAQ FAQs={data} />
	</InView>

	<InView2 let:isVisible2>
		{#if isVisible2}
			<div class="absolute top-0 left-0 h-[70vh] w-[70vh] overflow-hidden    ">
				<svg
					class="absolute top-0 left-0 translate-x-0 -translate-y-2 rotate-90 "
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
						stroke="#cdcdc1"
						stroke-width="2"
					/>
				</svg>
				<svg
					class="absolute top-0 left-0 -translate-x-5 -translate-y-5  rotate-90"
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
						stroke="#cdcdc1"
						stroke-width="2"
					/>
				</svg>
				<svg
					class="absolute top-0 left-0  -translate-x-9 -translate-y-9 rotate-90 "
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
						stroke="#cdcdc1"
						stroke-width="2"
					/>
				</svg>
			</div>
		{/if}
	</InView2>
</div>

<style>
	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
	.psuedoUnderline::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 10px;
		background-color: none;
		border-bottom: 4px solid #cdcdc1;
		border-top: 4px solid #cdcdc1;
		z-index: -20;
	}
</style>
