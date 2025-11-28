<script setup>
// first import ref and useRouter since ref lets us access input and useRouter lets use use this route
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// create a variable for the useRouter
const router = useRouter()

// create profile fields
const firstName = ref('')
const lastName = ref('')
const university = ref('')
const yearInSchool = ref('')
const major = ref('')
const subject = ref('')
const goal = ref('')

// create a fake save profile to test flow
const handleProfileSave = () => {
  // make a profile object
  const profile = {
    firstName: firstName.value,
    lastName: lastName.value,
    university: university.value,
    yearInSchool: yearInSchool.value,
    major: major.value,
    subject: subject.value,
    goal: goal.value,
  }

  // temporary storage so its not lost on refresh
  localStorage.setItem('studybuddy_profile', JSON.stringify(profile))

  // call supabase here but for now lets print to console
  console.log('Saved profile: ', profile)

  // go to the main profile view
  router.push('/profile')
}
</script>

<template>
  <div class="hero bg-base-200 min-h-screen font-mono">
    <div class="hero-content flex-col w-full max-w-2xl">
      <div class="text-center mb-6">
        <!-- create a header to state what the user should do -->
        <h1 class="text-4xl font-bond mb-2">Finish setting up your profile</h1>
        <!-- add a paragraph to have a description -->
        <p class="text-sm opacity-80">
          Tell Studdy Buddy a bit about you so we can make your dashboard more personal
        </p>
      </div>

      <div class="card bg-base-100 w-full shadow-2xl">
        <!-- create a form to handle saving the profile -->
        <form class="card-body space-y-4" @submit.prevent="handleProfileSave">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <!-- crete an input to allow user to input information
              the v-model must match the profile fields you made
            -->
            <label class="form-control">
              <span class="label-text">First name</span>
              <input v-model="firstName" class="input input-bordered" required />
            </label>

            <label class="form-control">
              <span class="label-text">Last name</span>
              <input v-model="lastName" class="input input-bordered" required />
            </label>
          </div>

          <div class="form-control">
            <label class="form-control">
              <span class="label-text">What university are you attenting?</span>
            </label>
            <input v-model="university" class="input input-bordered w-full" required />
          </div>

          <div class="form-control">
            <label class="form-control">
              <span class="label-text">What year are you in your university?</span>
            </label>
            <input v-model="yearInSchool" class="input input-bordered w-full" required />
          </div>

          <div class="form-control">
            <label class="form-control">
              <span class="label-text">What is your major?</span>
            </label>
            <input v-model="major" class="input input-bordered w-full" required />
          </div>

          <div class="form-control">
            <label class="form-control">
              <span class="label-text">What subject are you studying?</span>
            </label>
            <input v-model="subject" class="input input-bordered w-full" required />
          </div>

          <div class="form-control">
            <label class="form-control">
              <span class="label-text">Main study goal</span>
            </label>
            <input v-model="goal" class="textarea textarea-bordered w-full" rows="3"/>
          </div>


          <!-- create button to save profile -->
          <button type="submit" class="btn btn-neutral mt-4 w-full">
            Save profile
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
