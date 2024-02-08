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
            WebkitMaskPosition: `${mouse.x - size / 2}px ${
               (mouse.y - window.innerHeight * 0.3 - size / 2) / 0.7
            }px`,
            WebkitMaskSize: `${size}px`,
         }}
         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
         let:motion
      >
         <div class="mask" use:motion>
            <p
               on:mouseenter={() => (hovered = true)}
               on:mouseleave={() => (hovered = false)}
            >
               A visual designer - with skills that haven't been replaced by A.I
               (yet) - making good shit only if the paycheck is equally good.
            </p>

            <img src="/images/utils/cat.png" alt="" class="z-50 w-16 mt-4" />
         </div>
      </Motion>

      <p class="text-white">
         I'm a <span>selectively skilled</span> product designer with strong focus
         on producing high quality & impactful digital experience.
      </p>

      <img src="/images/utils/cat.png" alt="" class="z-50 w-16 mt-4" />
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

   .maskContainer span {
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
