<script lang="ts">
  import Subtitle from "./Subtitle.svelte";
  import { courses } from "./data";
</script>
<div id="courses" class="flex flex-col items-center min-h-screen pt-24 p-20 bg-zinc-800">
  <Subtitle>Courses</Subtitle>
  <div class="grid grid-cols-3 w-full gap-5">
    {#each courses.courses as course}
      <div class="py-8 px-4 bg-zinc-200 rounded-md hover:scale-[1.02] duration-300 ease-out">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mt-5 mb-2 border-b-2 border-gray-200">IIUM</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-wide text-xs  font-bold text-indigo-500 mb-1">{course.code}</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{course.name}</h1>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>  