<script lang="ts">
    import { DownloadUrl } from "sveltepocket";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    export let data: any[] = [];
 
    let slider: HTMLElement;
    let marker: HTMLElement;
    let current = 0;
 
    onMount(() => {
       gsap.registerPlugin(ScrollTrigger);
       let slides = gsap.utils.toArray(".slide");
 
       gsap.to(slides, {
          xPercent: -100 * (slides.length - 1.5),
          ease: "none",
          scrollTrigger: {
             trigger: ".contain",
             pin: true,
             scrub: 1,
             snap: 1 / (slides.length - 1),
             end: () => "+=" + (slider.offsetWidth * 2),
             onUpdate: (self) => {
                current = Math.round(self.progress * (slides.length - 1)) + 1;
                marker.style.left = `${self.progress * 100}vw`;
             },
          },
       });
    });
 </script>
 

<main class="w-full h-full min-h-[100dvh] contain" bind:this={slider}>
   <div class="marker-wrapper" bind:this={marker}>
      <div class="marker">
         <span class="grab"></span>
      </div>
      <span class="active-slide">{current}/{data.length}</span>
   </div>

   <div class="slider">
      <div class="slider-wrapper">
         {#each data as item, index}
            <div class="slide">
               <DownloadUrl record={item} file={item.cover} let:link>
                  <img src={link} alt={item.id} />
               </DownloadUrl>
               <span class="text-gray-500">{item.title}</span>
            </div>
         {/each}
      </div>
   </div>

   <div class="footer">
      <span>Mathis web designs</span>
      <span>mathis { new Date().getFullYear() } &copy;</span>
   </div>
</main>

<style>
   .footer {
      position: fixed;
      widows: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
      font-size: 15px;
      text-transform: uppercase;
      color: black;
      opacity: 0.5;
      bottom: 0;
   }

   .contain {
      width: 100%;
      height: 100%;
      overflow: hidden;
   }

   .slider {
      width: 100%;
      height: 100%;
      overflow: hidden;
   }

   .slider-wrapper {
      width: max-content;
      padding: 0 150px;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 10vw;
   }

   .slide {
      width: 60dvh;
      height: 60dvh;
      background: gray;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .marker-wrapper {
      position: absolute;
      top: 1;
      left: 0;
      width: max-content;
      height: 100dvh;
   }

   .marker {
      position: relative;
      width: 2px;
      height: 100%;
      background: black;
   }

   .marker::after {
      position: absolute;
      content: "";
      display: block;
      top: 50px;
      left: -20px;
      width: 40px;
      height: 40px;
      background: whitesmoke;
      border: 2px solid black;
      border-radius: 100%;
   }

   .active-slide {
      position: absolute;
      top: 60px;
      left: 40px;
      font-size: 15px;
   }
</style>
