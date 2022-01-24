<script lang="ts">
  import ExperienceBlock from './ExperienceBlock.svelte';
  import Subtitle from "./Subtitle.svelte";
  import { experience } from "./data";
</script>

<div id="experiences" class="flex flex-col items-center text-center pt-14 pb-20 bg-zinc-200 min-h-screen">
  <Subtitle>{experience.title}</Subtitle>
  <div class="grid grid-cols-6 grid-rows-5 gap-x-5 mr-auto w-full">
    {#each experience.rows as row}
      <div class="grid grid-cols-6 col-span-6 row-span-1 justify-center items-center border-b-2 border-gray-300">
        <span class="text-2xl my-5 col-span-2 col-start-1 w-full text-center px-10 font-bold border-r-2 border-emerald-500">{row.name}</span>
        {#each row.items as item}
          <ExperienceBlock>{item}</ExperienceBlock>
        {/each}
      </div>
    {/each}
    <div class="grid grid-cols-6 col-span-6">
      <span class="text-2xl my-10 col-span-2 row-span-2 flex justify-center items-center w-full font-bold border-r-2 border-emerald-500">{experience.lastrow.name}</span>
      {#each experience.lastrow.items as item}
        <ExperienceBlock>{item}</ExperienceBlock>
      {/each}
    </div>  
  </div>
</div>