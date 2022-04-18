<template>
  <div class="wrapper">
    <div class="header">
      <p class="header--subtitle">Intergalactic vehicle marketplace</p>
      <h1 class="header--title">Pick your next ride</h1>
    </div>
    <Search />
    <Grid />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'HomeView',
  components: {
    Search,
    Grid
  }
}
</script>
