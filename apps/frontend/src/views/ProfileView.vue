<script setup>
// import computed to create reactive values based on other values
import { computed } from 'vue'

// pull the saved profile from local storage
const stored = localStorage.getItem('studybuddy_profile')

// convert stored JSON to js object or null if there isn't anything stored
// wrap it in computed so it updates if the values change
const profile = computed(() => stored ? JSON.parse(stored) : null)


</script>

<template>
<!-- main container -->
<div class="min-h-screen bg-base-200 font-mono flex justify-center py-20">
  <!-- card that displays user info -->
  <div class="card bg-base-100 w-full max-w-3xl shadow-xl">
    <div class="card-body p-10 space-y-8">
      <!-- if we have a profile, then show full layout -->
      <div class="flex items-center space-x-6">
        <div
              class="w-20 h-20 rounded-full bg-neutral flex items-center justify-center text-3xl font-bold text-white shadow-lg"
        >
              {{ profile.firstName.charAt(0) }}
        </div>

        <div>
              <h1 class="text-4xl font-bold">Hi, {{ profile.firstName }}!</h1>
              <p class="opacity-70 text-sm mt-1">
                Welcome back to your study profile!
              </p>
        </div>
      </div>

      <hr />

    <div>
      <!-- if profile exists, then display all the details -->
      <div v-if="profile" class="space-y-4 text-lg">
        <p>
          <span class="font-semibold">Name:</span><br />
          {{ profile.firstName }} {{ profile.lastName }}
        </p>

        <p>
          <span class="font-semibold">University:</span><br />
          {{ profile.university }}
        </p>

        <p>
          <span class="font-semibold">Year:</span><br />
          {{ profile.yearInSchool }}
        </p>

        <p>
          <span class="font-semibold">Major:</span><br />
          {{ profile.major }}
        </p>

          <div class="sm:col-span-2">
            <p>
            <span class="font-semibold">Goal:</span><br />
            {{ profile.goal }}
            </p>
          </div>

        </div>

        <!-- if no profile is stored yet -->
        <p v-else class="opacity-70">
          No profile data yet. Create an account or login first.
        </p>
      </div>
    </div>
  </div>
</div>
</template>
