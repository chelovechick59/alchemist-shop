<script setup lang="ts">
import {potions} from '../data'
import {useGame} from '../game'
const {e,drink,active}=useGame()
</script>
<template><section><h2>Вітрина зілля</h2><div v-for="(item,id) in potions" :key="id" class="item"><span>{{item.name}} × {{e.inventory[id]}}</span><button v-if="id!=='power'" :disabled="!active()||!e.inventory[id]" @click="drink(id)">Випити</button><small v-else>Для продажу</small></div></section></template>
