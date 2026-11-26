<script setup lang="ts">
import { useGame } from './game'
import AlchemistVitals from './components/AlchemistVitals.vue'
import Market from './components/Market.vue'
import Pantry from './components/Pantry.vue'
import Cauldron from './components/Cauldron.vue'
import PotionsInventory from './components/PotionsInventory.vue'
import CustomerQueue from './components/CustomerQueue.vue'
import RecipeBook from './components/RecipeBook.vue'
const {e}=useGame()
</script>
<template>
 <main><header><small>АЛХІМІЯ · ТОРГІВЛЯ · МАЙСТЕРНІСТЬ</small><h1>Крамниця алхіміка</h1></header>
 <AlchemistVitals/>
 <p class="notice" role="status">{{ e.message }}</p>
 <div class="layout"><Market/><Pantry/><Cauldron/><PotionsInventory/><CustomerQueue/><RecipeBook/></div>
 </main>
</template>
