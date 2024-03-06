<script lang="ts">
   import { Motion } from "svelte-motion";

   let mouse = { x: 0, y: 0 };

   const handleMouseMove = (e: MouseEvent) => {
      mouse = {
         x: e.clientX,
         y: e.clientY,
      };
   };

   let hovered: boolean = false;
   let size: number;

   $: size = hovered ? 400 : 40;
</script>

<main class="w-full h-full font-serif text-5xl main" on:mousemove={handleMouseMove}>
   <div class="maskContainer">
      <Motion
      animate={{
         WebkitMaskPosition: 
            `${mouse.x - size / 2}px ${
            (mouse.y - window.innerHeight * 0.3 - size / 2) / 0.7
         }px`,
         WebkitMaskSize: `${size}px`,
      }}
         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
         let:motion
         >
         <div class="mask" use:motion>
            <span class="text-2xl text-center">(surprise)</span>
            <p
               on:mouseenter={() => (hovered = true)}
               on:mouseleave={() => (hovered = false)}
            >
            A freelance web developper with skills that haven't been replaced by A.I
            (yet) making the best web app's possible in a multitude of different languages.
         </p>
         
         <img src="/images/utils/avatar.png" alt="" class="z-50 w-16 mt-4" />
      </div>
   </Motion>
   
      <span class="text-2xl text-center text-white">(hover me)</span>
      <p class="text-white">
         I'm a <span class="highlight">very curious</span> computer science student with strong focus
         on learning new technologies and creating new and exciting projects. 
      </p>

      <img src="/images/utils/avatar.png" alt="" class="z-50 w-16 mt-4" />
   </div>

</main>

<style>
   .mask,
   .maskContainer {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: default;
      text-align: center;
   }

   .maskContainer p {
      width: 1000px;
      padding: 40px;
   }

   .maskContainer .highlight {
      color: #ec4e39;
   }

   .mask {
      mask-image: url("/svgs/circle.svg");
      mask-repeat: no-repeat;
      mask-size: 40px;
      background: #ec4e39;
      position: absolute;
      color: black;
   }
</style>
