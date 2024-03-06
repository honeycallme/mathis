<script lang="ts">
   import type LocomotiveScroll from "locomotive-scroll";
   import { onMount } from "svelte";
   import { getStore } from "$lib/stores/stores";
   import { goto } from "$app/navigation";

   let showNav = false;

   let locomotive: LocomotiveScroll = null;
   const locomotiveStore = getStore("window-scroll");

   onMount(() => {
      const unsubscribe = locomotiveStore.subscribe(
         ($locomotive: LocomotiveScroll) => {
            locomotive = $locomotive;
         },
      );

      return unsubscribe;
   });

   function goHome() {
      goto("/");
   }

   function goTo(target: string) {
      const params = {
         duration: 5,
      };
      const element = document.getElementById(target);
      if (!element) return;

      locomotive.scrollTo(element, params);
   }

</script>

<div class="relative z-[100]" style="font-family: 'Adieu', sans-serif;">
   {#if !showNav}
      <div class="fixed right-0 p-6">
         <button
            class="mr-4 btn btn-square btn-ghost"
            on:click={() => (showNav = !showNav)}
         >
            <img src="/images/utils/avatar.png" alt="cat" />
         </button>
      </div>
   {:else}
      <div class="fixed w-full p-4 rounded-2xl">
         <div
            class="flex flex-col w-full bg-transparent bg-cover navbar rounded-2xl lg:flex-row"
         >
            <button
               class="flex items-center justify-center lg:navbar-start"
               on:click={goHome}
            >
               <img
                  src="/images/utils/mathis.png"
                  alt="mathis"
                  class="w-24 ml-4"
               />
            </button>

            <div class="flex items-center justify-center lg:navbar-end">
               <ul class="px-1 text-lg italic text-error menu menu-horizontal">
                  <li><a on:click={() => goTo("projects")}>Projects</a></li>
                  <li><a on:click={() => goTo("contact")}>Contact</a></li>
               </ul>

               <button
                  class="mr-4 btn btn-square btn-ghost"
                  on:click={() => (showNav = !showNav)}
               >
                  <img src="/images/utils/avatar.png" alt="cat" />
               </button>
            </div>
         </div>
      </div>
   {/if}
</div>
