import { useAlchemist } from './stores/alchemist'
import { useEconomy } from './stores/economy'
import { useCustomers } from './stores/customers'
import { recipes,potions } from './data'
import type { Ingredient,Potion } from './types'
export function useGame(){
 const a=useAlchemist(), e=useEconomy(), c=useCustomers()
 const active=()=>a.alive && !a.pending
 function buy(id:Ingredient){if(active())e.buy(id)}
 function addSlot(id:Ingredient){if(active())e.addSlot(id)}
 function removeSlot(i:number){if(active())e.removeSlot(i)}
 function synthesize(){
   const [x,y]=e.slots;if(!active()||!x||!y||!a.spendMana(15))return
   e.slots=[null,null]
   const recipe=recipes.find(r=>(r.ingredients[0]===x&&r.ingredients[1]===y)||(r.ingredients[0]===y&&r.ingredients[1]===x))
   if(recipe){e.brew(recipe.potion);e.message='Створено: '+potions[recipe.potion].name;return}
   const roll=Math.random(), multiplier=roll<0.7?1:roll<0.95?2:3
   a.damage(25*multiplier)
   e.message=['','Звичайний вибух','Важкий вибух','Катастрофічний вибух'][multiplier]+': −'+25*multiplier+' HP'+(a.alive?'':' — алхімік загинув!')
 }
 function drink(id:Potion){if(!active()||id==='power'||!e.consumePotion(id))return;a.restore(id==='health'?'hp':'mp',40);e.message='Зілля використано'}
 function sell(){const customer=c.current;if(!active()||!customer||!e.consumePotion(customer.potion))return;e.gold+=customer.price;a.gainXp(15);e.message='Продано за '+customer.price+' монет. +15 XP';c.next(a.bonus)}
 function refuse(){if(active())c.next(a.bonus)}
 function revive(){if(a.alive)return;a.revive();e.message='Алхіміка відроджено. Рівень скинуто.';c.next(a.bonus)}

 function rest(){if(active()){a.restore('mp',15);e.message='Відпочинок: +15 MP'}}
 return {a,e,c,buy,addSlot,removeSlot,synthesize,drink,sell,refuse,revive,rest,active}
}
