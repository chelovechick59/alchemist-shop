import { reactive } from 'vue'
import type { Upgrade } from '../types'

const state = reactive({
  hp: 100, mp: 100, maxHp: 100, maxMp: 100,
  level: 1, xp: 0, alive: true, pending: 0, masterRanks: 0,
  get nextXp(): number { return 30 + (this.level - 1) * 15 },
  get bonus(): number { return this.masterRanks * 0.05 },
  damage(amount: number) {
    this.hp = Math.max(0, this.hp - amount)
    if (!this.hp) this.alive = false
  },
  spendMana(amount: number) {
    if (!this.alive || this.mp < amount) return false
    this.mp -= amount
    return true
  },
  restore(kind: Upgrade, amount: number) {
    if (!this.alive) return
    if (kind === 'hp') this.hp = Math.min(this.maxHp, this.hp + amount)
    else this.mp = Math.min(this.maxMp, this.mp + amount)
  },
  gainXp(amount: number) {
    this.xp += amount
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp
      this.level++
      if (this.level % 5 === 0) this.masterRanks++
      else this.pending++
    }
  },
  upgrade(kind: Upgrade) {
    if (!this.alive || !this.pending) return
    if (kind === 'hp') { this.maxHp += 15; this.hp = this.maxHp }
    else { this.maxMp += 15; this.mp = this.maxMp }
    this.pending--
  },
  revive() {
    if (this.alive) return
    Object.assign(this, { hp:100, mp:100, maxHp:100, maxMp:100, level:1, xp:0, alive:true, pending:0 })
  }
})
export function useAlchemist() { return state }
