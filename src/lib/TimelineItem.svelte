<script lang="ts">
  export let a: string = "";
  export let b: string = "";
  export let c: string = "";
  export let cgpa = 0;
  export let right: boolean = false;
  export let month: string = "";
  export let year: number = 0;
  // const right = no % 2 == 0;
</script>

<div class="mb-8 flex justify-between {right ? "" : "flex-row-reverse"} items-center w-full"> 
  <div class="order-1 w-5/12" />
  <div class="z-20 flex items-center order-1  {year != 0 ? "bg-gray-700" : "bg-emerald-500"} w-fit px-2 h-8 rounded-lg">
    <h1 class="mx-auto text-white font-semibold text-lg">{year != 0 ? year : month}</h1>
  </div>
  <div class="relative hover:scale-[1.02] {right ? "hover:rotate-1" : "hover:-rotate-1"} duration-500 ease-in-out order-1 {b} rounded-md {year != 0 ? "" : "shadow-xl"} w-5/12 px-6 py-4">
    {#if !year}
      {#if cgpa != 0}
        <div class="absolute top-2 -right-12 bg-zinc-800 px-2 text-white rounded-md shadow-xl">
          {cgpa}/4.00
        </div>
      {/if}
      <h3 class="mb-1 font-bold text-white text-xl">
        {a}
      </h3>
      <p class="text-xs font-semibold leading-snug  text-zinc-100 text-opacity-100">
        {@html c}
      </p>
      <hr class="mx-4 border-zinc-800 mt-4 mb-2" />
      <span class="text-xs font-semibold tracking-tight">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur officia fugiat veritatis mollitia necessitatibus asperiores ut obcaecati quo numquam?
      </span>
      {/if}
    </div>
</div>

