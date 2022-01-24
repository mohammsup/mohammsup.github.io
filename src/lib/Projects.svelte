<script>
  import Project from './Project.svelte';
  import Subtitle from "./Subtitle.svelte";
  import { projects } from "./data";
</script>
<div id="projects" class="flex flex-col items-center text-center pt-14 bg-zinc-800 p-10 px-20 min-h-screen">
  <Subtitle>{projects.title}</Subtitle>
  {#each projects.projects as project}
  <Project {...project} />    
  {/each}
</div> 
