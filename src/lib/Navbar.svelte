<script lang="ts">
	import Button from './Button.svelte';
	import { buttons } from "./data";
	const scroll = (id: string) => {
		const div = document.getElementById(id);
		if (div) {
			const pos = div.getBoundingClientRect().top;
			const offestPos = pos + window.pageYOffset - 40;
			window.scrollTo({
				top: offestPos,
				behavior: 'smooth',
			});
		}
	}
</script>

<div class="navbar fixed z-50 w-full mb-2 shadow-lg backdrop-blur-3xl bg-[#111111d2] text-neutral-content">
	<div class="flex-1 px-2 mx-2 h-full">
		<span on:click={() => scroll("hero")} class="text-lg font-bold cursor-pointer">{buttons.left}</span>
	</div>
	<div class="flex-none hidden px-2 mx-2 lg:flex h-full">
		<div class="flex items-stretch h-full">
			{#each buttons.right as item}
				<Button {scroll} id={item.id}>{item.title}</Button>
			{/each}
			<!-- <Button {scroll} id="">CV</Button> -->
		</div>
	</div>
</div>
