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
  <!-- <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-[28rem] bg-base-100 shadow-xl">
      <div class="card-body gap-4">
        <h2 class="card-title">Hello DaisyUI 🌼</h2>
        <p class="text-base-content/70">
          Use the switcher to toggle themes. Your choice is saved.
        </p>

        <div class="flex items-center gap-3">
          <span class="font-medium">Theme:</span>
          <select v-model="currentTheme" class="select select-bordered w-40">
            <option v-for="t in themes" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>

        <div class="card-actions justify-end">
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div> -->
  <!-- app is below -->
  <div id="app">
    <Navbar></Navbar> <!-- this is how to make the navbar get rendered -->
    <router-view></router-view> <!-- this is how to make the navbar actually appear -->
  </div>
</template>



<style scoped>
/* optional extra styles here */
</style>
