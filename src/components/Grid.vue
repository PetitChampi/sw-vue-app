<template>
  <div class="profile-grid">
    <div v-for="vehicle in vehicles" :key="vehicle.url">
      <GridCard :vehicle="vehicle" />
    </div>
    <span>{{ error }}</span>
  </div>
</template>

<script>
import GridCard from './GridCard.vue'
import getVehicles from '@/composables/getVehicles'

export default {
  props: ['vehicles'],
  components: {
    GridCard
  },
  setup() {
    const { vehicles, error, load } = getVehicles()
    
    load()

    return { vehicles, error }
  }
}
</script>

<style>

</style>