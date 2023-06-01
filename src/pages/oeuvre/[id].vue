<script setup lang="ts">
import {pb} from '@/backend'
import { oneIDOeuvre } from '@/backend'
const props = defineProps<{ id: string }>();

console.log(props.id);
const uneOeuvre = await oneIDOeuvre (props.id)
console.log(uneOeuvre);

const urlImg0 = uneOeuvre.img ? pb.getFileUrl(uneOeuvre, uneOeuvre.img, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>
    <template>
    <div class="pt-28">
      <h1 class="border-b-2 border-b-white p-1 m-3 w-48 lg:w-1/3">{{ uneOeuvre.nom }}</h1>
      <div class="grille">
        <img :src="urlImg0">
    </div>
        <div>
          <h2 class="border-b-2 border-b-white p-1 m-3 w-60">artiste</h2>
            <p class="ml-5 mr-5" v-html="uneOeuvre.artiste"></p>
        </div>
    </div>
</template>