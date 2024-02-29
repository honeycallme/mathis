<script lang="ts">
   import { Motion } from "svelte-motion";
   import { splitString } from "$lib/utils/utils";
   import { DownloadUrl } from "sveltepocket";

   export let project : any;
   let active = false;

   [project.title1, project.title2] = splitString(project.title);

   const anim = {
      initial: { width: 0 },
      visible: {
         width: "auto",
         transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
      },
      hidden: { width: 0 },
   };
</script>

<div
   class="project"
   on:mouseenter={() => (active = true)}
   on:mouseleave={() => (active = false)}
   data-scroll
   role="button"
   tabindex="0"
>
   <p class:text-error={active}>{project.title1}</p>

   <Motion variants={anim} animate={active ? "visible" : "hidden"} let:motion>
      <div class="containerImage" use:motion>

         <DownloadUrl record={project} file={project.cover} let:link>
            <img src={link} alt="not found" />
         </DownloadUrl>

      </div>
   </Motion>

   <p class:text-error={active}>{project.title2}</p>
</div>

<style>
   .project {
      border-top: 2px solid black;
      padding-top: 0.8vw;
      padding-bottom: 0.8vw;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      position: relative;
   }

   .containerImage {
      overflow: hidden;
      display: flex;
      justify-content: center;
      width: 0;
   }

   .project p {
      font-size: 5vw;
      font-family: "Adieu", sans-serif;
      margin: 0px;
   }
   .project p:nth-of-type(1) {
      margin-right: 0.75vw;
   }
   .project p:nth-of-type(2) {
      margin-left: 0.75vw;
   }
   .project:last-of-type {
      border-bottom: 2px solid black;
   }
   .project img {
      width: 10vw;
   }
</style>
