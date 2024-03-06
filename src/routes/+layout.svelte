<script lang="ts">
   import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
   import type LocomotiveScroll from "locomotive-scroll";
   import { onMount, onDestroy } from "svelte";
   import { blur } from "svelte/transition";
   import { App } from 'sveltepocket';
   
   import Loader from "$lib/components/utils/Loader.svelte";
   import Navigation from "$lib/components/utils/Navigation.svelte";
   import { getStore } from "$lib/stores/stores";
   import initializeScroll from "$lib/stores/scroll";
   import "../app.css";
   import Contact from '$lib/components/section/Contact.svelte';

   injectSpeedInsights();

   const id = "window-scroll";
   let locomotive: LocomotiveScroll = null;
   let loading: boolean = true;
   let size : number = 0;

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

<svelte:window bind:innerWidth={size} />

<App url={'https://mathis.pockethost.io'}>
   <main class="bg-[url('/images/backgrounds/white.jpg')]">
      {#if loading}
         <Loader />
      {:else}

         {#if size > 768}
            <div transition:blur={{ duration: 800, amount: 10 }}>
               <Navigation />
               <slot />
            </div>
         {:else}
            <Contact />
         {/if}

      {/if}
   </main>
</App>


{#if size > 768}
   <div class="fixed inset-0 z-[9999999] pointer-events-none">
      <img
         src="/images/utils/frame.png"
         alt="frame"
         class="left-0 right-0 w-full h-full"
      />
   </div>
{/if}

