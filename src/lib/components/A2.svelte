<script>
	export let innerData;

	let openStates = innerData.map(() => false);

	function toggle(index) {
		openStates[index] = !openStates[index];
	}
</script>

{#each innerData as i, index}
	<div on:click={() => toggle(index)}>
		<div class="text-3xl text-red">
			{i.question}
		</div>
		{#if openStates[index]}
			<div class="bg-blue-300">
				<slot />
			</div>
		{/if}
	</div>
{/each}
