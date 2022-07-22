<template>
  <div class="profile-grid" v-if="vehicles.length">
    <div v-for="vehicle in vehicles" :key="vehicle.url">
      <GridCard :vehicle="vehicle" />
    </div>
    <span v-if="!vehicles.length && error">{{ error }}</span>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import GridCard from './GridCard.vue'
import Spinner from './Spinner.vue'
import { useVehicles } from '@/store/vehicleStore'
import { storeToRefs } from 'pinia'

export default {
  props: ['vehicles'],
  components: {
    GridCard,
    Spinner
  },
  setup() {
    const vehiclesStore = useVehicles()

    const { vehicles, error } = storeToRefs(vehiclesStore)
    
    vehiclesStore.loadAllVehicles()

    return { vehicles, error }
  }
}
</script>