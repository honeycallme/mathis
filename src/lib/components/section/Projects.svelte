<script lang="ts">
   import Project from "$lib/components/element/Project.svelte";

   export let data: any[] = [];
</script>

<main class="my-[7dvw] main" id="projects">
   <div class="relative gallery">
      <p class="p-2 font-serif text-3xl italic text-right">Featured Work</p>
      {#each data as project, i}
         <Project {project} />
      {/each}
   </div>
</main>

<style>
   .main {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .gallery {
      width: 90%;
   }
</style>
