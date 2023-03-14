<script>
	import photo1 from '$lib/assets/headshots/photo-1.png';
	import photo2 from '$lib/assets/headshots/photo-2.png';
	import photo3 from '$lib/assets/headshots/photo-3.png';
	import photo4 from '$lib/assets/headshots/photo-4.png';

	let staffData = [
		{
			name: 'Sarah Jones',
			role: 'Managing Director',
			photoSRC: photo1
		},
		{
			name: 'Keisha Davis',
			role: 'Senior Consultant',
			photoSRC: photo2
		},
		{
			name: 'Ana Torres',
			role: 'Consultant',
			photoSRC: photo3
		},
		{
			name: 'Matt Walsh',
			role: 'Consultant',
			photoSRC: photo4
		}
	];
</script>

{#each staffData as i}
	<div class="flex gap-4 items-center sm:flex-col ">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<img
				src={i.photoSRC}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col sm:items-center ">
			<div class="flex text-xl text-white font-bold  ">{i.name}</div>
			<div class="flex text-sm text-white   ">{i.role}</div>
		</div>
	</div>
{/each}

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
</style>
