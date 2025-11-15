<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="font-mono">
    </div>

    <div
      class="hero min-h-screen"
      style="background-image: url('/images/heroImageNoText.png')" >
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome to Study Buddy</h1>
      <p class="mb-5">
        Study Buddy helps you stay on track, stay motivated, and study with confidence. Whether you’re preparing for exams, reviewing class concepts, or building better study habits, Study Buddy gives you structure, encouragement, and the tools to grow.
      </p>
      <!-- use a router link in order to make clickable button go to profile page -->
      <router-link
        to="/profile"
        custom v-slot="{ href }"
      >
      <a :href="href" class="btn btn-primary">
        Get Started
      </a>
      </router-link>
      <!-- <button class="btn btn-primary">Get Started</button> -->
      <div>
        <!-- testing -->
        <!-- testing part 2 -->
      </div>
    </div>
  </div>
</div>
  </main>
</template>
