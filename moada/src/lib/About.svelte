<script>
  import Subtitle from "./Subtitle.svelte";
  import { about } from "./data";
</script>
<div id="about" class="flex flex-col justify-center items-center bg-zinc-200 py-20 text-center min-h-screen">
  <Subtitle>{about.title}</Subtitle>
  <p class="text-sm text-justify mx-5 md:mx-20 shadow-xl bg-slate-200 font-semibold p-5 rounded-xl">
    {@html about.subtitle}
  </p>
</div>