<script setup lang="ts">
	import twitter  from '@/components/icons/twitter.vue'
	import insta from '@/components/icons/insta.vue'
</script>

<template>
  <footer class="space-y-6 bg-black py-16 px-6 text-white flex flex-wrap justify-between">
    <nav class="w-full sm:w-1/2 md:w-auto space-y-3 text-left">
      
      <ul>
        <h4 class="font-bold uppercase">Menu</h4>
        <h4 class="font-bold uppercase">Mentions légaless</h4>
        <li><a href="#">Projet réalisé dans le cadre d’un exercice pédagogique au département MMI de Montbéliard</a></li>
        <li><a href="#">Contact et accès</a></li>
        <li><a href="#">Noah Ripert C1</a></li>
        <li><a href="#">ripertnoah@gmail.com</a></li>
      </ul>
    </nav>

    <div class="w-full sm:w-1/2 md:w-auto space-y-3">
      <h4 class="font-bold uppercase">Contact</h4>
      <address>
        Fondation Cartier, 261 Bd Raspail<br />75014 Paris<br />
        <a href="tel:0384542727">03 84 54 27 27</a><br />
        <a href="mailto:ripertnoah@gmail.com">ripertnoah@gmail.com</a>
      </address>
    </div>


    <div class="w-full sm:w-1/2 md:w-auto space-y-3">
      <h4 class="font-bold uppercase">Nous suivre</h4>
      <ul class="flex gap-4"> 
        <div><twitter /></div>
        <div><insta /></div>
        <li>
          <a href="https://instagram.com" aria-label="instagram"> </a>
        </li>
        <li>
          <a href="https://twitter.com" aria-label="twitter"> </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
