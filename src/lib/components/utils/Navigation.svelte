<script lang="ts">
   import type LocomotiveScroll from "locomotive-scroll";
   import { onMount } from "svelte";
   import { getStore } from "$lib/stores/stores";
   import { goto } from "$app/navigation";

   let showNav = false;
   let chosen = "en";

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

   function setLang(lang: string) {
      chosen = lang;
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

            <div class="navbar-center">
               <ul class="px-1 text-lg italic text-error menu menu-horizontal">
                  <li><a on:click={() => goTo("about")}>About Me</a></li>
                  <li><a on:click={() => goTo("projects")}>Portfolio</a></li>
                  <li><a on:click={() => goTo("contact")}>Contact</a></li>
               </ul>
            </div>

            <div class="flex items-center justify-center lg:navbar-end">
               <div class="dropdown dropdown-hover">
                  <div tabindex="0" role="button" class="btn btn-ghost">
                     {#if chosen == "en"}
                        🇺🇸
                     {:else if chosen == "fr"}
                        🇫🇷
                     {/if}
                  </div>
                  <ul
                     tabindex="0"
                     class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                  >
                     <li><a on:click={() => setLang("en")}>🇺🇸</a></li>
                     <li><a on:click={() => setLang("fr")}>🇫🇷</a></li>
                  </ul>
               </div>

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

<style>
   .dropdown-content {
      backdrop-filter: blur(5px);
      background: rgba(255, 255, 255, 0.2);
   }
</style>
