<script setup lang="ts">
import { allartistes } from '@/backend';
import ArtisteCard from '@/components/ArtisteCard.vue';
const artistesListe = await allartistes();
</script>


<template>
    <div class="pt-40"></div>
    <h1 class="uppercase text-center text-4xl mb-16 lg:mb-2">Artistes</h1>
    <div class="lg:flex lg:justify-center lg:gap-">
        <ArtisteCard v-for="unartiste of artistesListe" v-bind="{ ...unartiste }" />
    </div>
</template>