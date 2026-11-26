<script setup lang="ts">
import {ingredients,potions,recipes} from '../data'
import {useGame} from '../game'
const {e}=useGame()
</script>
<template><section><h2>Гримуар рецептів</h2><p class="muted">Відкрито {{e.discovered.length}} / {{recipes.length}}</p><div v-for="r in recipes" :key="r.potion" class="recipe"><template v-if="e.discovered.includes(r.potion)"><strong>{{potions[r.potion].name}}</strong><small>{{ingredients[r.ingredients[0]].name}} + {{ingredients[r.ingredients[1]].name}}</small></template><template v-else>??? + ??? → ???</template></div></section></template>
