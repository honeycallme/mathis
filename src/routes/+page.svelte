<script lang="ts">
   import { animate, scroll } from "motion";
   import { onMount } from "svelte";
   import { calculateMargin } from "$lib/utils/utils";
   import { Collection } from "sveltepocket"; 

   import Projects from "$lib/components/section/Projects.svelte";
   import Landing from "$lib/components/section/Landing.svelte";
   import About from "$lib/components/section/About.svelte";
   import Parallax from "$lib/components/section/Parallax.svelte";
   import Gallery from "$lib/components/section/Gallery.svelte";
   import Contact from "$lib/components/section/Contact.svelte";

   let marginValue = 0;

   onMount(() => {
      scroll(animate(".progress", { scaleX: [0, 0.9] }));
   });
</script>

<main class="px-2">
   <div class="flex justify-center">
      <img
         alt="arrow"
         src="/images/transitions/arrow.png"
         class="absolute z-10 px-8 drop-shadow-2xl"
         style={`margin-top: ${calculateMargin(marginValue)}dvh;`}
      />
   </div>

   <Landing />
   <About />
   <Parallax />

   <Collection collection={"projects"} let:data>

      <Projects {data} />
      <Gallery {data} />

      <div slot="loading">
         <p class="text-5xl italic">Loading ...</p>
      </div>
   </Collection>

   <Contact />


   <!-- progress bar -->
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
