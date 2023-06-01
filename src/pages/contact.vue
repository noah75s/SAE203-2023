<script setup lang="ts">
    
  

</script>

<template>
  <main class="py-16">
    
    <form class="border-2 border-Jaune_principal rounded-lg p-6">
  <div class="mb-4">
    <label for="nom" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
    <input type="text" id="nom" class="w-full px-3 py-2 border border-Jaune_principal rounded-md focus:outline-none focus:border-Jaune_principal" placeholder="Votre nom">
  </div>
  <div class="mb-4">
    <label for="prenom" class="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
    <input type="text" id="prenom" class="w-full px-3 py-2 border border-Jaune_principal rounded-md focus:outline-none focus:border-Jaune_principal" placeholder="Votre prénom">
  </div>
  <div class="mb-4">
    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input type="email" id="email" class="w-full px-3 py-2 border border-Jaune_principal rounded-md focus:outline-none focus:border-Jaune_principal" placeholder="Votre adresse email">
  </div>
  <div class="mb-4">
    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
    <textarea id="message" class="w-full px-3 py-2 border border-Jaune_principal rounded-md focus:outline-none focus:border-Jaune_principal" rows="4" placeholder="Votre message"></textarea>
  </div>
  <button type="submit" class="bg-Jaune_principal text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none">Envoyer</button>
    </form>


  </main>
 
</template>