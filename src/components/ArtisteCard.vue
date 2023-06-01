<script setup lang="ts">
import { pb } from '@/backend'
import type { ArtistesResponse } from '@/pocketbase-types'
const props: ArtistesResponse = defineProps<ArtistesResponse>()


const urlImg0 = props.img ? pb.getFileUrl(props, props.img, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>


<template>
    <div class="lg:mt-20 mt-2  flex-col justify-center items-center text-center pb-10 lg:pb-36">
        <h1 class="text-2xl underline decoration-4 decoration-tahiti-100 pb-10">{{ nom }}</h1>
        <img class="m-auto pb-4" :src="urlImg0">
    </div>

    <div class=" w-[345] h-[130] border text-sm ">
        <p>artiste : {{ nom }}</p>
        <p>image de l'artiste : {{ img }}</p>
        <RouterLink
                  :to="{
                      name: 'artiste-id',
                      params: {
                          id
                      }
                  }"
                  class="text-red-400 hover:text-red-600"
                ><p class="text-white font-light underline mt-5">En savoir plus</p></RouterLink>
    </div>
</template>
