<script>
   import { scale } from "svelte/transition";
   import { onMount } from "svelte";
   import { animate, scroll } from "motion";

   let pictures = [
      { src: "/images/parallax/1.jpeg", scale: 1 },
      { src: "/images/parallax/2.jpeg", scale: 0.7 },
      { src: "/images/parallax/3.jpg", scale: 0.5 },
      { src: "/images/parallax/4.jpg", scale: 1 },
      { src: "/images/parallax/6.jpg", scale: 0.9 },
   ];

   onMount(() => {
      scroll(animate(".el", { scale: [1, 10] }), {
         offset: ["8% start", "end end"],
      });
   });
</script>

<main class="-mt-[10dvh] bg-black content">
   <div
      class="w-full h-full bg-[url('/images/backgrounds/plastic.png')] bg-fixed"
   >
      <div class="glued">
         <p class="relative z-50 text-center text-lg text-error top-[50%] el italic">
            i also design web apps such as this one !
         </p>

         {#each pictures as { src }, index}
            <div class="el" style="z-index: {index === 0 ? 1 : 0}">
               <div class="imageContainer">
                  <img {src} alt={"image" + index} />
               </div>
            </div>
         {/each}
      </div>
   </div>
</main>

<style>
   .content {
      height: 350vh;
      position: relative;
   }

   .glued {
      position: sticky;
      overflow: hidden;
      top: 0;
      height: 100vh;
   }

   .el {
      width: 100%;
      height: 100%;
      top: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .el .imageContainer {
      position: relative;
      width: 25vw;
      height: 25vh;
   }

   .el:nth-of-type(2) .imageContainer {
      top: -30vh;
      left: 5vw;
      width: 35vw;
      height: 30vh;
   }

   .el:nth-of-type(3) .imageContainer {
      top: -10vh;
      left: -25vw;
      width: 20vw;
      height: 45vh;
   }

   .el:nth-of-type(4) .imageContainer {
      left: 27.5vw;
      width: 25vw;
      height: 25vh;
   }

   .el:nth-of-type(5) .imageContainer {
      top: 27.5vh;
      left: -22.5vw;
      width: 30vw;
      height: 25vh;
   }

   .el .imageContainer img {
      object-fit: cover;
   }
</style>
