<script lang="ts">
  export let name: string;
  export let img: string;
  export let type: string;
  export let year: string;
  export let loc: string;
</script>
<div class="p-2 md:w-1/3">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-contain object-center bg-gray-200" src={img ? img : "https://dummyimage.com/720x400"} alt="university-logo">
    <div class="p-6 text-center">
      <h2 class="tracking-widest text-[0.8rem] text-center font-medium text-gray-400 mb-1">{type}</h2>
      <span class="tracking-wid text-sm text-center font-semibold text-emerald-500 mb-1">({year})</span>
      <h1 class="text-center text-lg font-medium text-white mb-1">{name}</h1>
      <p class="tracking-wider mb-3 text-gray-400 text-center text-sm">{loc}</p>
      <div class="flex items-center flex-wrap ">
        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 noborder-r-2 border-gray-200">

        </span>
        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

        </span>
      </div>
    </div>
  </div>
</div>

