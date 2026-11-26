import { reactive } from 'vue'
import { names, potions } from '../data'
import type { Customer, Potion } from '../types'

const state = reactive({
  current: null as Customer | null,
  next(bonus:number) {
    const ids = Object.keys(potions) as Potion[]
    const potion = ids[Math.floor(Math.random() * ids.length)]!
    this.current = {
      name: names[Math.floor(Math.random() * names.length)]!,
      potion,
      price: Math.round(potions[potion].price * (0.85 + Math.random() * 0.3) * (1 + bonus))
    }
  }
})
export function useCustomers() { return state }
