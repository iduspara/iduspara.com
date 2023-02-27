<template>
  <div class="" aria-hidden="true">
    <div
      class="mt-2 grid grid-cols-3 text-sm font-medium text-green-400 print:text-gray-800"
    >
      <div class="">{{ label }}</div>
      <div class="col-span-2 flex flex-row items-center">
        <div
          class="flex-1 overflow-hidden rounded-full bg-gray-800 print:bg-gray-200"
        >
          <div
            class="h-2 rounded-full bg-green-400 print:bg-gray-500"
            :style="{ width: percentage + '%' }"
          />
        </div>
        <div class="pl-8 text-right">{{ percentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  percentage: String,
});
</script>
