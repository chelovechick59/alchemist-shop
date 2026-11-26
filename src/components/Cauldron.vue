<script setup lang="ts">
import { ingredients } from '../data'
import {useGame} from '../game'
const {a,e,removeSlot,synthesize,active}=useGame()
</script>
<template><section><h2>Котел синтезу</h2><div class="slots"><button v-for="(id,i) in e.slots" :key="i" :disabled="!active()||!id" @click="removeSlot(i)">{{id?ingredients[id].name:'Слот '+(i+1)}}</button></div><p class="muted">Натисніть на зайнятий слот, щоб повернути інгредієнт.</p><button class="primary" :disabled="!active()||a.mp<15||e.slots.includes(null)" @click="synthesize">Синтезувати (15 MP)</button></section></template>
