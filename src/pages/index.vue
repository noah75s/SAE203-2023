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

  <section
    class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-[1px] lg:before:bg-black"
  >
    <header class="col-span-6 col-start-3 space-y-6">
      <header class="col-span-7 col-start-6 row-span-1 row-start-1 space-y-8 bg-white lg:p-16 rounded-md"></header>
      <h2 class="text-4xl lg:text-6xl">Agenda</h2>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles
        ouvertes à tous.
      </p>
    </header>
  
   
  </section>
</template>