<script setup lang="ts">
import {potions} from '../data'
import {useGame} from '../game'
const {c,e,sell,refuse,active}=useGame()
</script>
<template><section><h2>Черга покупців</h2><div v-if="c.current"><h3>{{c.current.name}}</h3><p>Потрібно: {{potions[c.current.potion].name}}</p><p class="gold">Пропонує {{c.current.price}} монет</p><div class="actions"><button class="primary" :disabled="!active()||!e.inventory[c.current.potion]" @click="sell">Продати</button><button :disabled="!active()" @click="refuse">Відмовити</button></div></div></section></template>
