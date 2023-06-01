<script setup lang="ts">
import {pb, oneIDArtiste} from '@/backend'
const props = defineProps<{ id: string }>();

console.log(props.id);
const unartiste = await oneIDArtiste(props.id)
console.log(unartiste);

const urlImg0 = unartiste.img ? pb.getFileUrl(unartiste, unartiste.img, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>
    <template>
    <div class="pt-28">
      <h1 class="border-b-2 border-b-white p-1 m-3 w-48 lg:w-1/3">{{ unartiste.nom }}</h1>
      <div class="grille">
        <img :src="urlImg0">
    </div>
      <div class="lg:col-start-6 lg:col-span-9">
          <div class="lg:w-2/3 lg:pl-8">
            <h2 class="border-b-2 border-b-white p-1 m-3 w-48">Bio</h2>
            <p class="ml-5 mr-5" v-html="unartiste.Biographie"></p>
          </div>
        </div>
    </div>
</template>