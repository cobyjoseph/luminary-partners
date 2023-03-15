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

<div class="relative heightClass bg-base px-[8%] pb-6 ">
	<InView let:isVisible>
		{#if isVisible}
			<div class="absolute w-[70vh] h-[70vh] bottom-0 right-0 overflow-hidden z-0">
				<div
					in:scale={{ delay: 400 }}
					class="sm:w-[70vh] sm:h-[70vh] w-[30vh] h-[30vh] -z-10 absolute translate-x-[40%] translate-y-[30%] bottom-0 right-0 rounded-full bg-baseDark "
				/>
			</div>
		{/if}

		<div class="flex relative z-20">
			<div
				class="text-3xl pt-10 pb-[0.6rem] font-extrabold relative flex text-secondaryDark psuedoUnderline font-satoshi sm:text-5xl"
			>
				Common questions
			</div>
		</div>

		<OneFAQ FAQs={data} />
	</InView>

	<InView2 let:isVisible2>
		{#if isVisible2}
			<div class="absolute w-[70vh] h-[70vh] top-0 left-0 overflow-hidden    ">
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
		border-bottom: 2px solid #3c3e6d;
		border-top: 2px solid #3c3e6d;
	}
</style>
