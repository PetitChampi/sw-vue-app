<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="vehicle">
    <h1>This is vehicle {{ vehicle.id }}</h1>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import getVehicle from '@/composables/getVehicle'

export default {
  setup() {
    const route = useRoute()

    const { vehicle, error, load } = getVehicle(route.params.id)

    load()

    return { vehicle, error }
  }
}
</script>