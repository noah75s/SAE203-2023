<script setup lang="ts">
import LogoIcon from '@/components/icons/IconLogo.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div>
      <button>
        <SearchIcon />
      </button>

      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>

			<nav>
		    <ul>
		      <li><RouterLink to="/conservatoire">Infos sur l'exposition</RouterLink></li>
		      <li><RouterLink to="/">Artistes</RouterLink></li>
		      <li><RouterLink to="/events">Frise</RouterLink></li>
		      <li><RouterLink to="/contact">Contact</RouterLink></li>
		      <li><RouterLink to="/">Billetterie</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>