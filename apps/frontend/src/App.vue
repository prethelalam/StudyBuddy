<script setup>
// ref is used to store reactive values that can change over time
// computed create a reactive, automatically updated value based on other reactive values - not sure if i need this
import { ref, watch, onMounted } from 'vue'

// import the Navbar
import Navbar from './components/Navbar.vue'

// Navbar route
const routes = {
  path: '/', component: Navbar
}


const themes = ['retro', 'dim'] // use any you like
const currentTheme = ref(localStorage.getItem('theme') || themes[0])

function applyTheme(t) {
  // set on both html and body (extra-safe for DaisyUI)
  document.documentElement.setAttribute('data-theme', t)
  document.body.setAttribute('data-theme', t)
  localStorage.setItem('theme', t)
}

onMounted(() => applyTheme(currentTheme.value))
watch(currentTheme, (t) => applyTheme(t))
</script>


<template>
  <!-- app is below -->
  <div id="app">
    <Navbar></Navbar> <!-- this is how to make the navbar get rendered -->
    <router-view></router-view> <!-- this is how to make the navbar actually appear -->
  </div>
</template>



