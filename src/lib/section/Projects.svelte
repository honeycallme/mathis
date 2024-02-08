<script>
    import Project from "$lib/element/Project.svelte";

   const projects = [
      {
         title1: "Jomor",
         title2: "Design",
         src: "jomor_design.jpeg",
      },
      {
         title1: "La",
         title2: "Grange",
         src: "la_grange.jpeg",
      },
      {
         title1: "Deux Huit",
         title2: "Huit",
         src: "deux_huit_huit.jpeg",
      },
      {
         title1: "Nothing",
         title2: "Design Studio",
         src: "nothing_design_studio.png",
      },
      {
         title1: "Mambo",
         title2: "Mambo",
         src: "mambo_mambo.jpeg",
      },
   ];
</script>

<main class="my-[20dvh] main" id="projects">
   <div class="relative gallery">
      <p class="p-2 font-serif text-3xl italic text-right">Featured Work</p>
      {#each projects as project, i}
         <Project {project} />
      {/each}
   </div>
</main>

<style>
   .main {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .gallery {
      width: 90%;
   }
</style>
