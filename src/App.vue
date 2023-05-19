<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const store = useAuthStore()
const { listenAuthChange } = store

onMounted(() => {
  listenAuthChange()
})
</script>

<template>
  <RouterView />
</template>
