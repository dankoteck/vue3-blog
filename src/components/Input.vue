<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

defineProps<{
  placeholder: string
  modelValue: string
}>()
defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()
</script>

<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <MagnifyingGlassIcon class="w-4 h-4" />
    </div>
    <input
      :value="modelValue"
      @input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      id="input-group-1"
      class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
      :placeholder="placeholder"
    />
  </div>
</template>
