<script lang="ts">
   import Mask from "$lib/utils/Mask.svelte";
</script>

<main class="h-[70dvh] w-full bg-purple-200">
   <div
      class="w-full h-full bg-[url('/images/backgrounds/plastic.png')] bg-fixed"
   >
      <div class="relative z-50 w-full h-full" data-scroll data-scroll-speed="0.25">
         <Mask />
      </div>
   </div>
</main>
