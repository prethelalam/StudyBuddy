<script setup>
// ref is used to store reactive values that can change over time
// computed create a reactive, automatically updated value based on other reactive values - not sure if i need this
import { ref, watch, onMounted } from 'vue'

// imports from components
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// routes for components
const routes = {
  path: '/', component: Navbar,
  path: '/', component: Footer
}


const themes = ['retro', 'dim'] // use any you like
  // if you want to change a theme, do a hard reset

const currentTheme = ref('retro')

function applyTheme(t) {
  // set on both html and body (extra-safe for DaisyUI)
  document.documentElement.setAttribute('data-theme', t)
  document.body.setAttribute('data-theme', t)
  localStorage.setItem('theme', t)
}

onMounted(() => applyTheme(currentTheme.value))
watch(currentTheme, (t) => applyTheme(t))
</script>


<template >
  <!-- app is below -->
  <div id="app" class="min-h-screen">
    <Navbar class="font-mono"></Navbar> <!-- this is how to make the navbar get rendered -->
    <main class="flex-1">
      <router-view></router-view> <!-- this is how to make the navbar actually appear -->
    </main>
    <Footer class="font-mono"></Footer>
  </div>
</template>



