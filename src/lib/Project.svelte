<script lang="ts">  
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  export let title: string;
  export let content: string;
  export let type: string;
  export let supervisor: string;
  export let time: string;
  export let view: string;
  export let supervisorLink: string;
  
  let enable = false;
  const enabled = () => enable = !enable;
</script>

<div on:click={enabled} class="collapse py-5 my-5 -auto w-full z-10 border-2 rounded-box bg-zinc-200 border-base-300 hover:shadow-xl hover:scale-[1.01] duration-700">
  <input type="checkbox"> 
  <div class="collapse-title text-left text-xl font-bold w-full !bg-transparent mx-4 flex justify-end">
    <span class="mr-auto w-5/6">
      {title} 
    </span>
    <div class="badge  mx-4 py-0 w-1/6 bg-zinc-900 px-4 rounded-md">{time}</div>
    <Icon icon="akar-icons:chevron-{enable ? "up" : "down"}" />
  </div> 
  <div class="collapse-content flex flex-wrap text-left -my-2 mx-4 w-full !bg-transparent"> 
    {type}
    <div class="w-full text-xs mt-4">
      <div class="w-1/2">
        {content}
      </div>
    </div>
    <br>
    <a href={supervisorLink} target="_blank" class="text-sm mx-4 font-semibold tracking-wide text-right ml-auto -mb-3 btn bg-zinc-400 hover:bg-zinc-400 border-0 text-black">Supervised By: {supervisor}</a>
    <a href={view} target="_blank" class="btn flex mr-4 gap-x-2">
      <Icon icon="ant-design:file-pdf-filled" width={17} />
      View
    </a>
  </div>
</div> 

