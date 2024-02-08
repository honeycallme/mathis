<script lang="ts">
	import Loader from './../lib/utils/Loader.svelte';
   import { onMount, onDestroy } from "svelte";
   import { blur } from 'svelte/transition';
   import LocomotiveScroll from "locomotive-scroll";

   import Navigation from "$lib/utils/Navigation.svelte";
   import { getStore } from "$lib/stores";
   import initializeScroll from "$lib/scroll";
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

<main class="bg-[url('/images/backgrounds/white.jpg')]">
   {#if loading}
      <Loader />
   {:else}
      <div transition:blur={{ duration: 800, amount : 10 }}>
         <Navigation />
         <slot />
      </div>
   {/if}
</main>

<div class="fixed inset-0 z-20 pointer-events-none">
   <img src="/images/utils/frame.png" alt="frame" class="left-0 right-0 w-full h-full" />
</div>