<script lang="ts">  
  import Icon from "@iconify/svelte";
  export let title: string;
  export let content: string;
  export let type: string;
  export let supervisor: string;
  export let time: string;
  
  let enable = false;
  const enabled = () => enable = !enable;
</script>

<div on:click={enabled} class="collapse py-5 my-5 -auto w-full border-2 rounded-box bg-zinc-200 border-base-300 hover:shadow-xl hover:scale-[1.01] duration-700">
  <input type="checkbox"> 
  <div class="collapse-title text-left text-xl font-bold w-full !bg-transparent mx-4 flex justify-end">
    <span class="mr-auto">
      {title} 
    </span>
    <div class="badge mx-4 py-3 bg-zinc-900 px-4 rounded-md">{time}</div>
    <Icon icon="akar-icons:chevron-{enable ? "up" : "down"}" />
  </div> 
  <div class="collapse-content flex flex-wrap text-left -my-2 mx-4 w-full !bg-transparent"> 
    {type}
    <p class="w-full text-xs ">
      {content}
    </p>
    <br>
    <span class="text-sm mx-4 font-semibold tracking-wide text-right ml-auto -mb-3 btn btn-disabled bg- text-black">Supervised By: {supervisor}</span>
    <div class="btn flex mr-4 gap-x-2">
      <Icon icon="ant-design:file-pdf-filled" width={17} />
      View
    </div>
  </div>
</div> 

