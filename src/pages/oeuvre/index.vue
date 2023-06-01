<script setup lang="ts">
import { allOeuvres } from '@/backend';
import OeuvreCard from "@/components/OeuvreCard.vue" ;
const artistesListe = await allOeuvres();
</script>


<template>
    <div class="pt-40"></div>
    <h1 class="uppercase text-center text-4xl mt-24 mb-16 lg:mb-2">Oeuvres</h1>
    <div class="lg:flex lg:justify-center lg:gap-20">
        <OeuvreCard v-for="unOeuvre of artistesListe" v-bind="{ ...unOeuvre }" />
    </div>
</template>