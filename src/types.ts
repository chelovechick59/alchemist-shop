export type Ingredient = 'root' | 'mushroom' | 'crystal' | 'leaf' | 'dust'
export type Potion = 'health' | 'mana' | 'power'
export type Upgrade = 'hp' | 'mp'
export interface Recipe { ingredients: [Ingredient, Ingredient]; potion: Potion }
export interface Customer { name: string; potion: Potion; price: number }
