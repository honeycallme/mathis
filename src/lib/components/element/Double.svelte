<script lang="ts">
   import { onMount } from "svelte";
   import { DownloadUrl } from "sveltepocket";

   export let project: any;
   export let reversed: boolean = false;

   let firstImage: HTMLElement;
   let secondImage: HTMLElement;

   let requestAnimationFrameId: number | null = null;
   let xPercent = reversed ? 100 : 0;
   let currentXPercent = reversed ? 100 : 0;
   const speed = 0.15;

   function manageMouseMove(e: MouseEvent) {
       const { clientX } = e;
       xPercent = (clientX / window.innerWidth) * 100;
       
       if (!requestAnimationFrameId) {
           requestAnimationFrameId = requestAnimationFrame(animate);
       }
   }

   function animate() {
       const xPercentDelta = xPercent - currentXPercent;
       currentXPercent += xPercentDelta * speed;

       const firstImagePercent = 66.66 - (currentXPercent * 0.33);
       const secondImagePercent = 33.33 + (currentXPercent * 0.33);
       firstImage.style.width = `${firstImagePercent}%`;
       secondImage.style.width = `${secondImagePercent}%`;

       if (Math.round(xPercent) === Math.round(currentXPercent)) {
           cancelAnimationFrame(requestAnimationFrameId as number);
           requestAnimationFrameId = null;
       } else {
           requestAnimationFrameId = requestAnimationFrame(animate);
       }
   }

   onMount(() => {
      firstImage.style.width = `${66}%`;
      secondImage.style.width = `${33}%`;

      if (reversed) {
         firstImage.style.order = "2";
         secondImage.style.order = "1";
      }

       return () => {
           if (requestAnimationFrameId) {
               cancelAnimationFrame(requestAnimationFrameId);
           }
       };
   });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="double" on:mousemove={manageMouseMove}>
   <div class="imageContainer" bind:this={firstImage}>
      <div class="stretchyWrapper">
         <DownloadUrl record={project} file={project.images[0]} let:link>
            <img src={link} alt="image" />
         </DownloadUrl>
      </div>
      <div class="body">
         <h3>{project.title}</h3>
         <p>{project.company}</p>
      </div>
   </div>

   <div class="imageContainer" bind:this={secondImage}>
      <div class="stretchyWrapper">
         <DownloadUrl record={project} file={project.images[1]} let:link>
            <img src={link} alt="image" />
         </DownloadUrl>
      </div>
      <div class="body">
         <p>{project.description}</p>
      </div>
   </div>
</div>

<style>
   .double {
      display: flex;
      height: 45vw;
   }

   .double .body {
      font-size: 16px;
      padding: 10px;
   }

   .double .body h3 {
      font-size: 1.2em;
      margin-bottom: 5px;
      margin-top: 0px;
      font-weight: 400;
   }

   .double .body p {
      font-size: 1em;
      margin: 0px;
      color: rgb(187, 187, 187);
   }

   .double .body p:nth-of-type(2) {
      color: rgb(101, 101, 101);
   }
</style>
