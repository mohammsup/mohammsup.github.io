<script>
  import TimelineItem from './TimelineItem.svelte';
  import Subtitle from "./Subtitle.svelte";
  import { timeline } from "./data"
</script>
<div id="timeline" class="flex flex-col items-center min-h-screen pt-24 bg-zinc-200">
  <Subtitle>{timeline.title}</Subtitle>
    <div class="  mx-auto w-full h-full rounded-md">
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%" />
        {#each timeline.items as item}
          <TimelineItem {...item} />
        {/each}
      </div>
    </div>
</div>
