<script setup lang="ts">
  
</script>

<template>
  <main class="py-16 relative">
    <form class="border-2 border-Jaune_principal rounded-lg p-6 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full">
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

    <div class="">
      <img class="" src="/img/image 10.webp" alt="mouvement" />
    </div>
  </main>
</template>
