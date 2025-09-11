<template>
<!-- navbar set up -->
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">Logo for the time being</router-link>
      </div>
      <div class="menu-icon" @click="toggle">
        <!-- insert code -->
      </div>
      <!-- create an unordered list with data binding. true means it always applys the css; isOpen is a variable  -->
      <ul :class="{ 'nav-links': true, 'open': isOpen }">
        <li><router-link to="/home" @click="toggle">Home</router-link></li>


      </ul>
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
