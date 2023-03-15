<script>
	import { FAQStore } from '$lib/stores/FAQStores';
	import { slide } from 'svelte/transition';

	export let FAQs;
	let index;

	let openStates = FAQs.map(() => false);

	function toggle(index) {
		openStates[index] = !openStates[index];
	}
</script>

{#each FAQs as i, index}
	<div class="items-center font-satoshi text-secondaryDarkest mt-4 relative z-10">
		<button class=" w-full flex gap-2  text-left" on:click={() => toggle(index)}>
			<div class="">
				{#if !openStates[index]}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>

			<div class="flex flex-col gap-2 text-secondaryDarkest text-xl">
				<div class="text-Q font-bold ">{i.question}</div>

				{#if openStates[index]}
					<div transition:slide={{ duration: 200 }}>
						{i.answer}
					</div>
				{/if}
			</div>
		</button>
	</div>
{/each}
