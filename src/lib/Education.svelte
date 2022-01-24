<script>
  import University from './University.svelte';
  import Subtitle from "./Subtitle.svelte";
  import { education } from "./data";

</script>
<div id="edu" class="flex flex-col items-center pt-32 bg-zinc-800 min-h-screen">
  <Subtitle>{education.title}</Subtitle>
  <section class="text-gray-600 body-font">
    <div class="container py-16 mx-auto">
      <div class="flex flex-wrap -m-10">
        {#each education.unis as uni}
          <University {...uni} />
        {/each}
      </div>
    </div>
  </section>
</div>