<script lang="ts">
	import toast_ from 'svelte-french-toast';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let animateChevron1 = false;
	let animateChevron2 = false;
	let animateChevron3 = false;
	let animateChevron4 = false;
	let animateChevron5 = false;

	export let toast;
</script>

<div class=" overflow-x-auto bg-white">
	<div
		class="flex   py-2 text-xs font-semibold sm:text-sm lg:px-[8%] 2xl:justify-center 2xl:text-lg"
	>
		<div class="py-1 px-3 font-bold text-[#2155FF] sm:pl-0  sm:pr-7">LATEST REPORTS</div>
		<div
			on:mouseenter={() => {
				animateChevron1 = !animateChevron1;
			}}
			on:mouseleave={() => {
				animateChevron1 = !animateChevron1;
			}}
			class="flex min-w-[10rem] flex-col justify-between border-l-[1.5px] border-l-[#2155FF]  py-1  px-3 hover:cursor-pointer hover:bg-base hover:text-secondaryLight sm:min-w-[13rem]  2xl:min-w-[20rem] "
		>
			<div class="flex">Implementing Agile Methodologies</div>
			<div class="flex justify-between">
				<div class="flex font-satoshi text-xl text-[#2155FF]">1</div>

				{#if animateChevron1}
					<svg
						in:fly={{ duration: 400, x: -100, y: 0, easing: quintInOut }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 28 20"
						stroke-width="1.5"
						class="flex h-5 w-5 self-end stroke-[#2155FF] "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 28 20"
						stroke-width="1.5"
						class="flex h-5 w-5 self-end stroke-[#2155FF] "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
				{/if}
			</div>
		</div>

		<div
			on:mouseenter={() => {
				animateChevron2 = !animateChevron2;
			}}
			on:mouseleave={() => {
				animateChevron2 = !animateChevron2;
			}}
			class="flex min-w-[10rem] flex-col justify-between border-l-[1.5px] border-l-[#2155FF] py-1  px-3 hover:cursor-pointer hover:bg-base  hover:text-secondaryLight sm:min-w-[13rem] 2xl:min-w-[20rem]"
		>
			<div class="flex">Maximizing the Impact of CSR Programs</div>

			<div class="flex justify-between">
				<div class="flex font-satoshi text-xl text-[#2155FF]">2</div>
				{#if animateChevron2}
					<svg
						in:fly={{ duration: 400, x: -100, y: 0, easing: quintInOut }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 28 20"
						stroke-width="1.5"
						class="flex h-5 w-5 self-end stroke-[#2155FF] "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 28 20"
						stroke-width="1.5"
						class="flex h-5 w-5 self-end stroke-[#2155FF] "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
				{/if}
			</div>
		</div>

		<div
			on:mouseenter={() => {
				animateChevron3 = !animateChevron3;
			}}
			on:mouseleave={() => {
				animateChevron3 = !animateChevron3;
			}}
			class="flex min-w-[10rem] flex-col justify-between border-l-[1.5px] border-l-[#2155FF] py-1  px-3 hover:cursor-pointer hover:bg-base  hover:text-secondaryLight sm:min-w-[13rem] 2xl:min-w-[20rem]"
		>
			<div class="flex">Industry Trends in Supply Chain Management</div>
			{#if animateChevron3}
				<svg
					in:fly={{ duration: 400, x: -100, y: 0, easing: quintInOut }}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{/if}
		</div>

		<div
			on:mouseenter={() => {
				animateChevron4 = !animateChevron4;
			}}
			on:mouseleave={() => {
				animateChevron4 = !animateChevron4;
			}}
			class="flex min-w-[10rem] flex-col justify-between border-l-[1.5px] border-l-[#2155FF] py-1  px-3 hover:cursor-pointer hover:bg-base  hover:text-secondaryLight sm:min-w-[13rem] 2xl:min-w-[20rem]"
		>
			<div class="flex">Digital Transformation Strategies for SMEs</div>
			{#if animateChevron4}
				<svg
					in:fly={{ duration: 400, x: -100, y: 0, easing: quintInOut }}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{/if}
		</div>

		<div
			on:mouseenter={() => {
				animateChevron5 = !animateChevron5;
			}}
			on:mouseleave={() => {
				animateChevron5 = !animateChevron5;
			}}
			class="flex min-w-[10rem] flex-col justify-between border-l-[1.5px] border-l-[#2155FF] py-1  px-3 hover:cursor-pointer hover:bg-base  hover:text-secondaryLight sm:min-w-[13rem] 2xl:min-w-[20rem]"
		>
			<div class="flex">Optimizing Performance through Cost Reduction</div>
			{#if animateChevron5}
				<svg
					in:fly={{ duration: 400, x: -100, y: 0, easing: quintInOut }}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 20"
					stroke-width="1.5"
					class="flex h-5 w-5 self-end stroke-[#2155FF] "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			{/if}
		</div>
	</div>
</div>

<style>
	.widthClamp {
		width: clamp(10rem, 8vw + 20rem, 25rem);
	}

	.heightClamp {
		height: clamp(6rem, 5vw + 1rem, 12rem);
	}
</style>
