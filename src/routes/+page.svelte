<script lang="ts">
   import { animate, scroll } from "motion";
   import { onMount } from "svelte";

   import Projects from "$lib/section/Projects.svelte";
   import Landing from "$lib/section/Landing.svelte";
   import Welcome from "$lib/section/Welcome.svelte";
   import Parallax from "$lib/section/Parallax.svelte";

   onMount(() => {
      scroll(animate(".progress", { scaleX: [0, 0.9] }));
   });
</script>

<main class="">
   <div class="flex justify-center">
      <img
         alt="arrow"
         src="/images/transitions/arrow.png"
         class="absolute z-10 px-8 drop-shadow-2xl -mt-[80vh]"
      />
   </div>

   <Landing />
   <Welcome />
   <Parallax />
   <Projects />

   <div style="height: 300vh;"></div>

   <div class="progress"></div>
</main>

<style>
   .progress {
      position: fixed;
      z-index: 50;
      left: 0;
      right: 0;
      bottom: 50px;
      height: 5px;
      background-color: white;
      mix-blend-mode: difference;
      transform: scaleX(0);
   }
</style>
