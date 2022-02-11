<script>
  import Icon from '@iconify/svelte';
  import Subtitle from './Subtitle.svelte';
  import { hero } from "$lib/data";
</script>
<div id="hero" class="flex lg:flex-row flex-col items-center px-20 pb-20 pt-20 w-full bg-zinc-800 min-h-screen">
  <div class="flex flex-col items-center w-3/5">
    <Subtitle>{hero.title}</Subtitle>
    <div class="uppercase -mt-2 font-semibold leading-tight text-zinc-400">
      {hero.subtitle}
    </div>
    <div class="flex invert mt-10 gap-x-5 lg:gap-x-16">
      <a href="https://twitter.com/mohamsup" target="_blank">
        <Icon icon="akar-icons:twitter-fill" width={40} class="hover:scale-110 hover:!invert-0 hover:text-rose-700 duration-300" />
      </a>
      <a href="https://www.facebook.com/mohammsup/" target="_blank">
        <Icon icon="ant-design:facebook-filled" width={40} class="hover:scale-110 duration-300" />
      </a>
      <a href="https://instagram.com/mohamsup/" target="_blank">
        <Icon icon="akar-icons:instagram-fill" width={40} class="hover:scale-110 duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/mohamsup/" target="_blank">
        <Icon icon="akar-icons:linkedin-fill" width={40} class="hover:scale-110 duration-300" />
      </a>
      <a href="https://github.com/mohammsup" target="_blank">
        <Icon icon="akar-icons:github-fill" width={40} class="hover:scale-110 duration-300" />
      </a>
    </div>
  </div>
  <div class="flex w-2/5 mt-10 lg:mt-0 justify-end items-center">
    <img src={hero.img} alt="" width={420} class="object-contain  min-h-[200px]">
  </div>
</div>