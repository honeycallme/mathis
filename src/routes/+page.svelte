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

   let marginValue = 0;

   onMount(() => {
      scroll(animate(".progress", { scaleX: [0, 0.9] }));
   });
</script>

<main class="">
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


   <main class="relative bg-purple-200 h-[150dvh]">
      <img
         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2F50d43db43843a7dc2fbb93c660a1d0dc%2Ftumblr_ozar2dfRQI1rh3rypo1_1280.gif&f=1&nofb=1&ipt=4fc71b0b7a05822ead71374f474d2bf91bb1a30b8b24db40f978ee425e416c95&ipo=images"
         alt="pixel background"
         class="absolute inset-0 object-cover w-full h-full opacity-70"
      />
   </main>

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
