<script setup>
// import ref to use values and router (in order to navigate to new pages)
import { ref } from 'vue'
import { useRouter } from 'vue-router'


// signup or login mode in order to change the modes, we're going to start at signup
const mode = ref('signup')

// router instance to change the vue or route
const router = useRouter()

// form data for user input
const email = ref('')
const password = ref('')

// function to submit
const handleSubmit = () => {
  // added a user object for fake data until supabase is added
  const user = {
    email: email.value,
    mode: mode.value,
  }

  // temporarily store the "logged in user" in localStorage
  localStorage.setItem('studybuddy_user', JSON.stringify(user))

  // if user clicked singip
  if (mode.value === 'signup') {
    console.log('sign up with', user)
    // call supabase
    // after sign up, always go to profile setup page
    router.push('/profile-setup')
  } else {
    console.log('login with', user)
    // call supabase
    // check if user has a saved profile
    const hasProfile = !!localStorage.getItem('studybuddy_profile')
    router.push(hasProfile ? '/profile' : '/profile-setup')

    // if profile exists then go to profile page and if not then go to setup page
    if (hasProfile) {
      router.push('/profile')
    } else {
      router.push('/profile-setup')
    }
  }
}

</script>

<template>
    <!-- if the user is not signed in then have them sign in -->
  <div class="hero bg-base-200 min-h-screen font-mono">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-center">
        <h1 class="text-5xl font-bold">
          <!-- need an if statement to determine mode -->
          {{  mode === 'signup' ? 'Sign up' : 'Login' }}
        </h1>
          <p class="py-6">
            Your learning journey starts here! Create a profile to track your goals, stay organized, and build better study habits with tools tailored to you.
          </p>
      </div>

    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <!-- enter email -->
        <form @submit.prevent="handleSubmit" class="fieldset space-y-2">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="email"
            class="input input-bordered w-full"
            placeholder="Email"
            required
          />

          <!-- enter password -->
          <label class="label mt-2">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="password"
            class="input input-bordered w-full"
            placeholder="password"
            required
          >

          <!-- forgot password link -->
          <div class="mt-1">
            <a class="link link-hover text-sm">Forgot Password?</a>
          </div>

          <!-- submit button: text will change with mode -->
          <button type="submit" class="btn btn-neutral mt-4 w-full">
            {{ mode == 'signup' ? 'Sign up': 'Login' }}
          </button>

          <!-- toggle between the modes -->
          <button
            type="button"
            class="btn btn-ghost mt-2 text-xs w-full"
            @click="mode = mode === 'signup' ? 'login' : 'signup'"
          >
          <span v-if="mode === 'signup'">
            Already have an account? Login
          </span>
          <span v-else>
            Need an account? Sign up
          </span>
        </button>
        </form>
      </div>
    </div>
  </div>
</div>


</template>
