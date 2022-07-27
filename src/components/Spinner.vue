<template>
  <div class="spin"></div>
</template>

<script lang="ts">
export default {
  name: 'Spinner'
}
</script>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #525c9e;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>