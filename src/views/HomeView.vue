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

<script lang="ts">
import { defineComponent } from 'vue';
import Grid from '@/components/Grid.vue';
import Search from '@/components/Search.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Grid,
    Search,
  }
});
</script>
