<script lang="ts">
   import { goto } from "$app/navigation";
   import { page } from "$app/stores";

   const title = $page.status;
   const description = $page.error?.message;

   function goHome() {
      goto("/");
   }
</script>

<div class="screen center">
   <h1 class="text-9xl adieu">{title}</h1>
   <p class="text-3xl adieu">{description}</p>
   <button class="mt-16 btn btn-wide btn-error" on:click={goHome}>Go Home</button>
</div>

<style>
   .adieu {
      font-family: "Adieu", sans-serif;
   }
</style>
