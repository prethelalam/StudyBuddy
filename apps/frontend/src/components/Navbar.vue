<template>
<!-- navbar set up -->
  <nav class="navbar shadow-sm">
    <!-- create a reactive container -->
    <div class="flex-1">
      <!-- create a naviagation link using vue router -->
      <!-- <div class="w-15 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="/images/StudyBuddyLogo.png" />
        </div> -->
      <router-link class="btn btn-ghost text-xl" to="/home">Study Buddy</router-link>
    </div>

    <!-- desktop nav -->
    <div>
      <!-- create an unordered list -->
      <ul class="menu menu-horizontal hidden md:flex px-1">
        <!-- create your tabs here -->
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/quiz">Quiz</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>

    </div>


    <!-- mobile hamburger menu -->
    <div class="md:hidden">
      <!-- create a button, apply style, and apply an action -->
      <button
        class="btn btn-square btn-ghost"
        @click="toggle">
        <!-- hamburger icon (got from daisyUI) -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6"
            stroke="currentColor"
            fill="none">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div v-show="isOpen"
        class="menu dropdown-content absolute right-0 mt-2 w-48 p-2 bg-base-100 shadow rounded-box z-50">
      <!-- drop down panel -->
      <!-- create an unordered list -->
      <ul class="menu-p-2">
        <!-- create your tabs here -->
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/quiz">Quiz</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// need to import ref in order to use it below
import { ref } from 'vue';


// make a reactive flag to close and open the hamburger menu
const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)
</script>
