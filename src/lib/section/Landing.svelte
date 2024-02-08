<main class="relative bg-purple-200 main">
   <img
      src="/images/backgrounds/gif.gif"
      alt="pixel background"
      class="absolute inset-0 object-cover w-full h-full opacity-70"
      style="mix-blend-mode: difference;"
   />

   <div class="z-50 center" data-scroll data-scroll-speed="0.3">
      <p
         class="relative z-10 p-4 font-bold text-center text-error text-9xl"
         style="font-size: 22rem; font-family: 'Adieu', sans-serif;  mix-blend-mode: difference;"
      >
         mathis.
      </p>

      <div class="z-50 arrow">
         <span></span>
         <span></span>
      </div>

      <img src="/images/utils/pixeldme.png" class="background-image" alt="me" />
   </div>
</main>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@700&display=swap");

   .main {
      height: 100vh;
      width: 100vw;
   }

   .background-image {
      position: absolute;
      width: 100%; /* Adjust the width as per your preference */
      height: 110%; /* Automatically adjust the height to maintain aspect ratio */
      object-fit: cover;
      z-index: 0;
      top: 0;
   }

   .arrow {
      position: absolute;
      mix-blend-mode: difference;
      bottom: 15%;
      left: 50%;
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
