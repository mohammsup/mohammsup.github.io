<script>
  import Skill from './Skill.svelte';
  import Subtitle from "./Subtitle.svelte";
  import { skills } from './data';

</script>
<div id="skills" class="flex flex-col items-center text-center pt-14 bg-zinc-800 min-h-screen">
    <Subtitle>{skills.title}</Subtitle>
  <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-x-5 mt-10">
    {#each skills.items as skill}
      <Skill {skill} />
    {/each}
  </div>
</div>  