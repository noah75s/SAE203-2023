<script setup lang="ts">
import { allartistes } from '@/backend';
import ArtisteCard from '@/components/ArtisteCard.vue';
const artistesListe = await allartistes();
</script>


<template>

    <div class="pt-40">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officiis deserunt, nostrum eum culpa qui dolor similique alias sequi dignissimos quibusdam aspernatur nobis minima? Quibusdam temporibus magnam aut eaque. Pariatur!</div>
    <h1 class="uppercase text-center text-4xl mt-24 mb-16 lg:mb-2">Artistes</h1>
    <div class="lg:flex lg:justify-center lg:gap-20">
        <ArtisteCard v-for="unartiste of artistesListe" v-bind="{ ...unartiste }" />
    </div>
</template>