<template>
  <router-link :to="{ name: 'vehicle', params: { id: vehicle.id }}" class="profile-grid--link">
    <article class="profile-grid--item">
      <div class="profile-grid--item-img"></div>
      <div class="profile-grid--item-excerpt">
        <h3 class="profile-grid--item-excerpt--name">{{ vehicle.name }}</h3>
        <span v-if="vehicle.cost_in_credits === 'unknown'" class="profile-grid--item-excerpt--price">Ask for price</span>
        <span v-else class="profile-grid--item-excerpt--price">{{ new Intl.NumberFormat().format(vehicle.cost_in_credits) }} GC</span>
        <div class="profile-grid--item-excerpt--summary">
          <p>Class: {{ vehicle.vehicle_class }}</p>
          <p>Passengers: {{ vehicle.passengers }}</p>
          <p>Cargo capacity: {{ vehicle.cargo_capacity }}</p>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script lang="ts">
export default {
  props: ['vehicle']
}
</script>