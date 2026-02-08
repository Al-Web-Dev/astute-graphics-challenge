<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string
}>()

const formatted = computed(() => {
  const date = new Date(props.value)

  return date
    .toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    .replace(',', ' at')
})
</script>

<template>
 <p>{{ formatted }}</p>
</template>
