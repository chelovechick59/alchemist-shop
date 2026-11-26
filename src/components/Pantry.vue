<script setup lang="ts">
import { ingredients } from '../data'
import { useGame } from '../game'
const {e,addSlot,active}=useGame()
</script>
<template><section><h2>Комора</h2><p class="muted">Оберіть інгредієнт для котла.</p><div v-for="(item,id) in ingredients" :key="id" class="item"><span>{{item.name}} × {{e.pantry[id]}}</span><button :disabled="!active()||!e.pantry[id]||!e.slots.includes(null)" @click="addSlot(id)">Додати</button></div></section></template>
