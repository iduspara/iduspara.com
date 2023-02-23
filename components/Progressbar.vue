<template>
  <div class="" aria-hidden="true">
    <div class="overflow-hidden rounded-full bg-gray-800">
      <div
        class="h-2 rounded-full bg-green-400"
        :style="{ width: percentage + '%' }"
      />
    </div>
    <div class="mt-2 grid-cols-2 text-sm font-medium text-green-400 grid">
      <div>{{ label }}</div>
      <div class="text-right">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  percentage: String,
});
</script>
