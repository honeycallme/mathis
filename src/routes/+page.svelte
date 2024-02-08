<script lang="ts">
    import { animate, scroll } from "motion";
    import { onMount } from "svelte";

    import Projects from "$lib/section/Projects.svelte";
    import Landing from "$lib/section/Landing.svelte";
 
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
 
    <div style="height: 60vh;" class="bg-[url('/images/backgrounds/page.jpg')] bg-fixed flex items-center justify-center z-50">
       <p class="relative z-50 w-1/2 font-serif text-2xl italic text-center" data-scroll data-scroll-speed="0.25">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          magni itaque quisquam earum repellendus praesentium nulla corrupti
          totam, commodi inventore non sapiente, quod labore facilis fugiat
          laudantium? Perspiciatis fugit est repellendus ducimus quibusdam
          laudantium corrupti, nostrum necessitatibus possimus sapiente! Placeat
          quaerat qui porro voluptatum, velit dolores cumque minima voluptate
          omnis libero asperiores! Commodi totam, voluptas labore cum facere
          minima fugit incidunt unde. Officiis illo hic ratione facilis neque
          quis, labore fuga inventore esse non consequuntur, sint saepe nisi aut
          architecto necessitatibus.
       </p>
    </div>
 
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
 