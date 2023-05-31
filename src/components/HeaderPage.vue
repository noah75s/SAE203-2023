<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ref, computed, watch } from 'vue'
    import Logo from '@/components/icons/Logo.vue'
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
            transition-all duration-300 ease-in-out  lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide
             lg:text-black lg:opacity-100"
            :class="{ '!visible opacity-100': activeMenu }">
            <ul class="mt-[25vh] ml-16  lg:m-0 lg:flex">
              <li  class="menu-item"><RouterLink class="menu-link" to="/conservatoire"    @click="closeMenu">Le conservatoire</RouterLink></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/"    @click="closeMenu">Enseignements</RouterLink></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/events"    @click="closeMenu">Agenda</RouterLink ></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/contact"    @click="closeMenu">Contact</RouterLink ></li>
              <li  class="menu-item"><RouterLink class="menu-link" to="/"    @click="closeMenu">S'inscrire</RouterLink ></li>
            </ul>
          </nav>
    </div>
  </header>
</template>
.menu-link {
    @apply block px-5 py-4 lg:py-8;
  }
  .menu-item {
    @apply relative overflow-hidden lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:h-2 lg:before:w-full lg:before:translate-y-2 lg:before:bg-black lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:hover:before:translate-y-0;
  }