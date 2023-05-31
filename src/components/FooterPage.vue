<script setup lang="ts">
	import twitter  from '@/components/icons/twitter.vue'
	import insta from '@/components/icons/insta.vue'
</script>

<template>
  <footer class="space-y-6 bg-gray-900 py-16 px-6 text-white">
    <nav class="col-span-3 col-start-7 space-y-3">
      <h4 class="font-bold uppercase">Menu</h4>
      <ul>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Projet réalisé dans le cadre d’un exercice pédagogique au département MMI de Montbéliard</a></li>
        <li><a href="#">Contact et accès</a></li>
        <li><a href="#">Noah Ripert C1</a></li>
        <li><a href="#">ripertnoah@gmail.com</a></li>
      </ul>
    </nav>

    <div class="space-y-3">
      <h4 class="font-bold uppercase">Contact</h4>
      <address>
        Fondation Cartier, 261 Bd Raspail<br />75014 Paris<br />
        <a href="tel:0384542727">03 84 54 27 27</a><br />
        <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
      </address>
    </div>


    <div class="col-span-3 col-start-10 space-y-3">
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