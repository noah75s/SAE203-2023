<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import logo from '@/components/icons/logo.vue'
import menu from '@/components/icons/menu.vue'
import { RouterLink } from 'vue-router'


// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)
function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
 <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button>
        <SearchIcon />
      </button>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between"
      @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
      </button>

			<nav
    class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
    :class="{ '!visible opacity-100': activeMenu }"
    v-scroll-lock="activeMenu"
  >
		    <ul class="mt-[25vh] ml-16">
		      <li class="menu-item"><RouterLink class="menu-link" to="/exposition" @click="closeMenu">Infos sur l'exposition</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Artistes</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/events" @click="closeMenu">Frise</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/contact" @click="closeMenu">Contact</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Billetterie</RouterLink></li>
		    </ul>
		  </nav>

      
    </div>
  </header>
</template>