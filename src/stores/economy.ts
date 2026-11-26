import { reactive } from 'vue'
import { ingredients } from '../data'
import type { Ingredient, Potion } from '../types'

const state = reactive({
  gold: 50,
  pantry: {root:0,mushroom:0,crystal:0,leaf:0,dust:0} as Record<Ingredient,number>,
  inventory: {health:0,mana:0,power:0} as Record<Potion,number>,
  slots: [null,null] as [Ingredient|null,Ingredient|null],
  discovered: [] as Potion[],
  message: 'Ласкаво просимо до крамниці!',
  buy(id:Ingredient) {
    const price = ingredients[id].price
    if (this.gold < price) return
    this.gold -= price
    this.pantry[id]++
  },
  addSlot(id:Ingredient) {
    const i = this.slots.indexOf(null)
    if (i === -1 || !this.pantry[id]) return
    this.pantry[id]--
    this.slots[i] = id
  },
  removeSlot(i:number) {
    const id = this.slots[i]
    if (id) { this.pantry[id]++; this.slots[i] = null }
  },
  consumePotion(id:Potion) {
    if (!this.inventory[id]) return false
    this.inventory[id]--
    return true
  },
  brew(id:Potion) {
    this.inventory[id]++
    if (!this.discovered.includes(id)) this.discovered.push(id)
  }
})
export function useEconomy() { return state }
