import { ref } from 'vue'

const getVehicles = () => {
  const vehicles = ref([])
  const error = ref(null)

  // I found a solution online to override the pagination, but it was using the Promise class & Axios.
  // I tried implementing my own solution using fetch() but haven't been succesful.
  
  const load = async () => {
    await fetch('https://swapi.dev/api/vehicles')
      .then(res => res.json())
      .then(data => {
        vehicles.value = data.results.map(item => {
          return { ...item, id: item.url.slice(item.url.lastIndexOf('/', 31) + 1, -1) }
        })
      })
      .catch(err => error.value = err.message)
  }

  return { vehicles, error, load }
}

export default getVehicles