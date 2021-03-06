import { defineStore } from 'pinia'
import { Vehicle } from '@/models/vehicle'

export const useVehicles = defineStore('vehicles', {
  state: () => {
    return {
      apiUrl: 'https://swapi.dev/api/vehicles',
      vehicles: [],
      vehicle: null,
      error: null,
    }
  },
  actions: {
    async loadAllVehicles() {
      await fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => {
        this.vehicles = data.results.map((item: Vehicle) => {
          return { ...item, id: item.url.slice(item.url.lastIndexOf('/', 31) + 1, -1) }
        })
      })
      .catch(err => this.error = err.message)
    },
    async loadVehicle(id: string) {
      await fetch(`${this.apiUrl}/${id}`)
      .then(res => res.json())
      .then(data => this.vehicle = { ...data, id: id })
      .catch(err => this.error = err.message)
    }
  },
})