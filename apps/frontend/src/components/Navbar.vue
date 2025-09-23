<template>
<!-- navbar set up -->
  <nav class="navbar bg-base-100 shadow-sm">
    <div class="container flex-none">
      <button class="btn btn-square btn-ghost">
        <!-- hamburger menu -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        <ul :class="{ 'nav-links': true, 'open': isOpen }">
        <!-- router-link is a vue component -->
        <li><router-link to="/home" @click="toggle">Home</router-link></li>
        <li><router-link to="/dashboard" @click="toggle">Dashboard</router-link></li>
        <li><router-link to="/quiz" @click="toggle">Quiz</router-link></li>
        <li><router-link to="/profile" @click="toggle">Profile</router-link></li>
      </ul>
      </button>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Study Buddy</a>
      </div>
      <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>

      <div class="logo">
        <router-link to="/">Logo for the time being</router-link>
      </div>
      <div class="menu-icon" @click="toggle">
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
      <!-- create an unordered list with data binding. true means it always applys the css; isOpen is a variable  -->
      <!-- <ul :class="{ 'nav-links': true, 'open': isOpen }">
        router-link is a vue component
        <li><router-link to="/home" @click="toggle">Home</router-link></li>
        <li><router-link to="/dashboard" @click="toggle">Dashboard</router-link></li>
        <li><router-link to="/quiz" @click="toggle">Quiz</router-link></li>
        <li><router-link to="/profile" @click="toggle">Profile</router-link></li>
      </ul> -->
    </div>
  </nav>
</template>

<script setup>

// function to toggle on and off
function toggle() {
  if (this.isOpen == true) {
    this.isOpen = false;
  }
  else if (this.isOpen == false) {
    this.isOpen = true;
  }
};
</script>
