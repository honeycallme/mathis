<script lang="ts">
   import Loader from "$lib/components/utils/Loader.svelte";
   import type LocomotiveScroll from "locomotive-scroll";
   import { onMount, onDestroy } from "svelte";
   import { blur } from "svelte/transition";
   import { App } from 'sveltepocket';

   import Navigation from "$lib/components/utils/Navigation.svelte";
   import { getStore } from "$lib/stores/stores";
   import initializeScroll from "$lib/stores/scroll";
   import "../app.css";

   const id = "window-scroll";
   let locomotive: LocomotiveScroll = null;
   let loading: boolean = true;

   onMount(() => {
      const store = getStore(id, initializeScroll(id, { duration: 5.2 }));
      locomotive = store.locomotive;

      loading = false;
   });

   onDestroy(() => {
      if (locomotive) {
         locomotive.destroy();
      }
   });
</script>

<svelte:head>
   <title>mathis's world 🫖</title>
</svelte:head>

<App url={'https://mathis.pockethost.io'}>
   <main class="bg-[url('/images/backgrounds/white.jpg')]">
      {#if loading}
         <Loader />
      {:else}
         <div transition:blur={{ duration: 800, amount: 10 }}>
            <Navigation />
            <slot />
         </div>
      {/if}
   </main>
</App>


<div class="fixed inset-0 z-20 pointer-events-none">
   <img
      src="/images/utils/frame.png"
      alt="frame"
      class="left-0 right-0 w-full h-full"
   />
</div>
