import { ref } from 'vue'

const getVehicles = () => {
  const vehicles = ref([])
  const error = ref(null)

  const load = async () => {
    await fetch('https://swapi.dev/api/vehicles')
      .then(res => res.json())
      .then(data => vehicles.value = data.results)
      .catch(err => error.value = err.message)
  }

  return { vehicles, error, load }
}

export default getVehicles