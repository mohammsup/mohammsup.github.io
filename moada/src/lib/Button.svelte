<script lang="ts">
  import { goto } from "$app/navigation";
  export let scroll: (id: string) => void;
  export let id: string;

  function fnname(id: number) {
    return id + 1
  }

  const l = _ => _*_;
  l(2);

</script>

<div on:click={() => !id.endsWith("sharing") ? scroll(id) : goto(id)}  class="uppercase mx-2 p-1 font-semibold tracking-tight group border-white cursor-pointer duration-100">
  <slot />
  <div class="w-0 group-hover:w-full h-px bg-white duration-200" />
</div>




