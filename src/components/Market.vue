<script setup lang="ts">
import { ingredients } from '../data'
import { useGame } from '../game'
const {e,buy,active}=useGame()
</script>
<template><section><h2>Ринок інгредієнтів</h2><div v-for="(item,id) in ingredients" :key="id" class="item"><span>{{item.name}}<small>{{item.price}} монет</small></span><button :disabled="!active()||e.gold<item.price" @click="buy(id)">Купити</button></div></section></template>
