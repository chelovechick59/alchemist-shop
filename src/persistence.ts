import { watch } from 'vue'
import { useAlchemist } from './stores/alchemist'
import { useEconomy } from './stores/economy'
import { useCustomers } from './stores/customers'

const key = 'alchemist-shop-v1'
export function initPersistence() {
  const a = useAlchemist(), e = useEconomy(), c = useCustomers()
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const saved = JSON.parse(raw)
      for (const [target, source] of [[a, saved.alchemist], [e, saved.economy], [c, saved.customers]]) {
        if (!source || typeof source !== 'object') continue
        for (const name of Object.keys(target)) {
          const descriptor = Object.getOwnPropertyDescriptor(target, name)
          if (descriptor?.writable && typeof Reflect.get(target, name) !== 'function' && Object.hasOwn(source, name)) {
            Reflect.set(target, name, source[name])
          }
        }
      }
    }
  } catch { /* Новий сеанс */ }
  if (!c.current) c.next(a.bonus)
  function save() {
    try {
      localStorage.setItem(key, JSON.stringify({ alchemist: a, economy: e, customers: c }))
    } catch { /* Сховище недоступне */ }
  }
  watch([a, e, c], save, { deep: true })
  save()
}
