<script setup lang="ts">
import Hero from '@/components/hero.vue'

</script>
<template>
  <Hero
    title="Exposition Kalinka"

  >
    <template #chapo>
      <nav class="flex-1 font-poppins lg:text-3xl">
        <ul class="grid grid-cols-3 gap-12">
      
        </ul>
      </nav>
    </template>
    <template #patterns>
      <div
        class="absolute inset-0 flex items-center justify-end overflow-hidden stroke-pink stroke-[24px] opacity-40"
      >
        <Patterns class="-ml-60 -mr-[5vw] lg:ml-auto lg:w-[80vw]" />
      </div>
    </template>
  </Hero>
  <section class="grille my-24 grid-rows-2 space-y-8 lg:space-y-0">
    <div class="col-span-7 col-start-1 row-span-2 row-start-1">
      <img src="/img/image 8.webp" alt="musée" />
    </div>
    <header class="col-span-7 col-start-6 row-span-1 row-start-1 space-y-8 bg-white lg:p-16 rounded-md">
      <h2 class="text-poppins lg:text-3xl">PRENEZ PLACE À 
L’EXPOSITION KALINKA
      </h2>
      <h3 class="text-poppins lg:text-3xl ">Cette exposition aura pour but de présenter des oeuvres du courant réaliste socialiste soviétique.
      </h3>
    </header>

    <div class="col-span-5 col-start-8 row-start-2 grid grid-cols-2 gap-12">
      <p>
        <span class="block text-2xl text-bold-poppins lg:text-2xl text-white">13 avril au 23 juin 2021</span>
        <span class="text-white">Date de l’exposition</span>
      </p>
      <p>
        <span class="block text-2xl text-bold-poppins lg:text-2xl text-white">75014 Paris</span>
        <span class="text-white">Fondation Cartier, 261 Bd Raspail</span>
      </p>
      <p>
        <span class="block text-2xl text-bold-poppins lg:text-2xl text-white text-white">11€</span>
        <span class="text-white">Plein tarif</span>
      </p>
      <p>
        <span class="block text-2xl text-bold-poppins lg:text-2xl text-white">7,50€</span>
        <span class="text-white">Tarif réduit</span>
      </p>
    </div>
  </section>
  
  <hr class="my-8 w-[250px] border border-white m-auto lg:w-[1072px]">
  
  <section
    class="grille space-y-5 py-24 lg:before:col-span-1 lg:before:col-start-1 lg:before:mt-12 lg:before:h-[1px] lg:before:bg-black"
  >

  <div class="col-span-3 col-start-1 row-span-1 row-start-1">
      <img class="h-[220px] absolute" src="/img/image 2.webp" alt="mouvement" />
    </div>
    <header class="col-span-4 col-start-1 space-y-6">
      <header class="col-span-7 col-start-6 row-span-1 row-start-1 space-y-8 bg-white lg:p-16 rounded-md">
        <h2 class="text-poppins lg:text-2xl">Qu'est-ce que le réalisme socialiste soviétique ?
      </h2>
      <h3 class="text-poppins lg:text-1xl ">C’est une doctrine élaborée en Union Soviétique par notamment Staline, Nikolaï Boukarine, Maxime Gorki et Andreï Jdanov entre 1932 et 1934 et qui est devenue la doctrine officielle de l'art dans les pays du bloc communiste.
      </h3>
      
    
      <div class="flex justify-between gap-4 ">

        <div class="grid justify-items-center">
          <img class="h-[120px]" src="../assets/Rectangle 10.webp">
          <p class="block text-2xl text-bold-poppins lg:text-2xl text-black">
            Ivan Vladimirov
          </p>
          <RouterLink class="menu-link" to="">
            <p class="text-decoration-line: underline">
            En savoir plus
          </p>
          </RouterLink>
        </div>

        <div class="grid justify-items-center">
          <img class="h-[120px]" src="../assets/Rectangle 12.webp">
          <p class="block text-2xl text-bold-poppins lg:text-2xl text-black">
            Igor Grabar
          </p>
          <RouterLink class="menu-link" to="">
            <p class="text-decoration-line: underline">
            En savoir plus
          </p>
          </RouterLink>
        </div>

        <div class="grid justify-items-center">
          <img class="h-[120px]" src="../assets/Rectangle 13.webp">
          <p class="block text-2xl text-bold-poppins lg:text-2xl text-black">
            Constantin Youon
          </p>
          <RouterLink class="menu-link" to="">
            <p class="text-decoration-line: underline">
            En savoir plus
          </p>
          </RouterLink>
        </div>

        <div class="grid justify-items-center">
          <img class="h-[120px]" src="../assets/Rectangle 14.webp">
          <p class="block text-2xl text-bold-poppins lg:text-2xl text-black">
            Sun Mu
          </p>
          <RouterLink class="menu-link" to="">
            <p class="text-decoration-line: underline">
            En savoir plus
          </p>
          </RouterLink>
        </div>

      </div>

      
</header>

<hr class="my-8 w-[250px] border border-white m-auto lg:w-[1072px]">

      <h2 class="text-4xl lg:text-4xl text-center text-white text-poppins text-decoration-line: underline">Informations sur l’exposition</h2>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Dates de l’exposition : du 13 avril au 23 juin 2021
      </p>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Fondation Cartier, 261 Bd Raspail, 75014 Paris
      </p>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Plein tarif : 11€
      </p>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Tarif réduit : 7,50€
      </p>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Réduction 13 - 25 ans : 5€
      </p>
      <p class="text-xl leading-normal lg:text-1xl text-center text-white text-poppins">
        Fondation Cartier Pass : 18€ - 50€
      </p>
    </header>



  </section>
</template>