import type { Ingredient, Potion, Recipe } from './types'
export const ingredients: Record<Ingredient, {name: string; price: number}> = {
  root: {name:'Червоний корінь',price:5}, mushroom:{name:'Місячний гриб',price:8},
  crystal:{name:'Магічний кристал',price:10}, leaf:{name:'Срібний листок',price:4}, dust:{name:'Зоряний пил',price:7}
}
export const potions: Record<Potion,{name:string;price:number}> = {
  health:{name:'Зілля лікування',price:22}, mana:{name:'Зілля мани',price:30}, power:{name:'Зілля сили',price:35}
}
export const recipes: Recipe[] = [
  {ingredients:['root','leaf'],potion:'health'},
  {ingredients:['mushroom','dust'],potion:'mana'},
  {ingredients:['crystal','root'],potion:'power'}
]
export const names = ['Мандрівник Орест','Магиня Ліра','Лицар Данило','Травниця Міра','Купець Марко']
