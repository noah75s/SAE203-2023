<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ref, computed, watch } from 'vue'
    import Logo from '@/components/icons/logo.vue'
    const activeMenu = ref(false)

    function closeMenu() {
      activeMenu.value = false

    }
    </script>

<template>
  <header  class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6
   py-2 transition-all duration-300 ease-in-out  lg:py-0">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
        <Logo/>
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button>
        <SearchIcon />
      </button>
<button class="relative z-10 flex h-5 w-8 flex-col justify-between
      lg:hidden" 
        @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" 
        :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" 
        :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" 
        :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
      </button>
<nav  class=" invisible opacity-0 fixed inset-0 h-screen w-screen bg-stone-200 text-2xl text-black
            transition-all duration-300 ease-in-out  lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:Poppins lg:tracking-wide
             lg:text-black lg:opacity-100"
            :class="{ '!visible opacity-100': activeMenu }">
            <ul class="mt-[25vh] ml-16  lg:m-0 lg:flex">
              <li  class="menu-item"><RouterLink class="menu-link" to="/conservatoire"    @click="closeMenu">L'exposition</RouterLink></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/artiste"    @click="closeMenu">Artistes</RouterLink></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/frise"    @click="closeMenu">Frise</RouterLink ></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/contact"    @click="closeMenu">Contact</RouterLink ></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/oeuvre"    @click="closeMenu">Oeuvres</RouterLink ></li>
            </ul>
          </nav>
    </div>
  </header>
</template>
