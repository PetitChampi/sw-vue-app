<template>
  <div class="profile-grid" v-if="vehicles.length">
    <div v-for="vehicle in vehicles" :key="vehicle.url">
      <GridCard :vehicle="vehicle" />
    </div>
    <span>{{ error }}</span>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import GridCard from './GridCard.vue'
import Spinner from './Spinner.vue'
import getVehicles from '@/composables/getVehicles'

export default {
  props: ['vehicles'],
  components: {
    GridCard,
    Spinner
  },
  setup() {
    const { vehicles, error, load } = getVehicles()
    
    load()

    return { vehicles, error }
  }
}
</script>