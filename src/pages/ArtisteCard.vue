<script setup lang="ts">
  import { pb } from '@
  import type { ArtisteResponse } from '@/pocketbase-types' 
  const props: ArtisteResponse = defineProps<ArtisteResponse>() 
  const urlImg0 = props.image ?
    pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg0)
</script>
     <template> 
    <div class="p-64"> 
        <p>nom : {{ nom }}</p> 
        <p>age : {{ age }}</p> 
        <img :src="urlImg0" alt=""> 
    </div> 
 </template>