<template>
  <div class="wrapper">
    <router-link :to="{ name: 'home' }" class="btn-back">
      &lt; Back
    </router-link>
    <div v-if="!vehicle && error">{{ error }}</div>
    <div v-if="vehicle && vehicle.id === $route.params.id">
      <div class="vehicle-card">
        <header class="vehicle-card-header">
          <h1 class="vehicle-card-header--title">{{ vehicle.name }}</h1>
          <p
            class="vehicle-card-header--price"
            v-if="vehicle.cost_in_credits === 'unknown'"
          >
            Contact us for a quote
          </p>
          <p
            class="vehicle-card-header--price"
            v-else
          >
            {{ new Intl.NumberFormat().format(vehicle.cost_in_credits) }} GC
          </p>
        </header>
        <div class="vehicle-card-body">
          <div>
            <div class="vehicle-card-body-section">
              <p>Class:</p>
              <span>{{ vehicle.vehicle_class }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Model:</p>
              <span>{{ vehicle.model }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Manufacturer:</p>
              <span>{{ vehicle.manufacturer }}</span>
            </div>
          </div>
          
          <div>
            <div class="vehicle-card-body-section">
              <p>Length:</p>
              <span>{{ vehicle.length }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Max atm. speed:</p>
              <span>{{ vehicle.max_atmosphering_speed }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Cargo capacity:</p>
              <span>{{ vehicle.cargo_capacity }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Consumables:</p>
              <span>{{ vehicle.consumables }}</span>
            </div>
          </div>

          <div>
            <div class="vehicle-card-body-section">
              <p>Crew:</p>
              <span>{{ vehicle.crew }}</span>
            </div>
            <div class="vehicle-card-body-section">
              <p>Passengers:</p>
              <span>{{ vehicle.passengers }}</span>
            </div>
          </div>
        </div> <!-- .vehicle-card-body -->
      </div> <!-- .vehicle-card -->
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script lamg="ts">
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
import { useVehicles } from '@/store/vehicleStore'
import { storeToRefs } from 'pinia'

export default {
  components: { Spinner },
  setup() {
    const route = useRoute()

    const vehiclesStore = useVehicles()

    const { vehicle, error } = storeToRefs(vehiclesStore)
    
    vehiclesStore.loadVehicle(route.params.id)

    return { vehicle, error }
  }
}
</script>