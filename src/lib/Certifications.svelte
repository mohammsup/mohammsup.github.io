<script lang="ts">
  import Subtitle from "./Subtitle.svelte";
  import { certifications } from "./data";
</script>

<div id="certs" class="flex flex-col items-center min-h-screen pt-24 bg-zinc-200">
  <Subtitle>{certifications.title}</Subtitle>

  <div class="flex px-40 gap-x-20 h-full mt-32 items-center justify-center">
    {#each certifications.certs as cert}
      <div class="w-full text-center">
        <img src={cert.img} alt="">
        <div class="my-2 font-semibold tracking-tigher">{cert.title}</div>
      </div>
    {/each}
  </div>
</div>  
