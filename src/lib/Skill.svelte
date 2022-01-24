<script lang="ts">
  export let skill: {
    a: string;
    b: string;
    c: string;
  }
</script>
<div class="flex flex-col w-full p-5 my-4 rounded-box items-center">
  <img src={skill.b} alt="" class="h-32 w-32 invert bg-white p-4 rounded-lg">
  <div class="text-white my-4 text-2xl font-semibold">{skill.a}</div>
  <p class="text-zinc-200 my-4 text- text-sm font-semibold tracking-tight">
    {skill.c} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit minus nam culpa ut. Consequuntur quas, fugiat aliquid repellat veritatis unde.
  </p>
</div>

