<script lang="ts">
</script>

<main class="relative bg-purple-200 main">
   <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2F50d43db43843a7dc2fbb93c660a1d0dc%2Ftumblr_ozar2dfRQI1rh3rypo1_1280.gif&f=1&nofb=1&ipt=4fc71b0b7a05822ead71374f474d2bf91bb1a30b8b24db40f978ee425e416c95&ipo=images"
      alt="pixel background"
      class="absolute inset-0 object-cover w-full h-full opacity-70"
   />

   <div class="z-50 center" data-scroll data-scroll-speed="0.3">
      <h1
         class="relative z-10 p-4 font-bold text-center text-error"
         style="font-family: 'Adieu', sans-serif;  mix-blend-mode: difference;"
      >
         mathis.
      </h1>

      <div class="z-50 arrow">
         <span></span>
         <span></span>
      </div>

      <img
         src="/images/utils/pixeldme.png"
         class="background-image h-[120%]"
         alt="me"
      />
   </div>
</main>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@700&display=swap");

   h1 {
      font-size: 20rem; /* for large screens */
   }

   .main {
      height: 100vh;
      width: 100vw;
   }

   .background-image {
      position: absolute;
      width: 100%;
      object-fit: cover;
      z-index: 0;
      top: 0;
   }

   .arrow {
      position: absolute;
      mix-blend-mode: difference;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
   }

   .arrow span {
      display: block;
      width: 2.5vw;
      height: 2.5vw;
      border-bottom: 20px solid oklch(var(--er));
      border-right: 20px solid oklch(var(--er));
      transform: rotate(45deg);
      margin: -10px;
      animation: animate 2s infinite;
   }

   .arrow span:nth-child(2) {
      animation-delay: -0.2s;
   }

   .arrow span:nth-child(3) {
      animation-delay: -0.4s;
   }

   @keyframes animate {
      0% {
         opacity: 0;
         transform: rotate(45deg) translate(-20px, -20px);
      }

      50% {
         opacity: 1;
      }

      100% {
         opacity: 0;
         transform: rotate(45deg) translate(20px, 20px);
      }
   }
</style>
