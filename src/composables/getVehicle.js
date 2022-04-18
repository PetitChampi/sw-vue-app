import { ref } from 'vue'

const getVehicle = (id) => {
  const vehicle = ref(null)
  const error = ref(null)

  const load = async () => {
    await fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => vehicle.value = { ...data, id: id })
      .catch(err => error.value = err.message)
  }

  return { vehicle, error, load }
}

export default getVehicle