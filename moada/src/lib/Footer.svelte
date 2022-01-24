<script lang="ts">
  import Icon from "@iconify/svelte";
  const size = 30;
</script>
<hr class="bg-zinc-800" />
<footer class="items-center p-4 flex justify-end footer bg-neutral text-neutral-content ">
	<div class="items-center grid-flow-col mr-auto">
		<p>Copyright © 2022 - All right reserved</p>
	</div>
  <div class="flex gap-x-5">
    <a href="https://twitter.com/mohamsup" target="_blank">
      <Icon icon="akar-icons:twitter-fill" width={size} class="hover:scale-110 duration-300" />
    </a>
    <a href="https://www.facebook.com/mohammsup/" target="_blank">
      <Icon icon="ant-design:facebook-filled" width={size} class="hover:scale-110 duration-300" />
    </a>
    <a href="https://instagram.com/mohamsup/" target="_blank">
      <Icon icon="akar-icons:instagram-fill" width={size} class="hover:scale-110 duration-300" />
    </a>
    <a href="https://www.linkedin.com/in/mohamsup/" target="_blank">
      <Icon icon="akar-icons:linkedin-fill" width={size} class="hover:scale-110 duration-300" />
    </a>
    <a href="https://github.com/mohammsup" target="_blank">
      <Icon icon="akar-icons:github-fill" width={size} class="hover:scale-110 duration-300" />
    </a>
  </div>
</footer>
