<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-8">
          <span
            v-if="eventIdx !== timeline.length - 1"
            class="absolute top-4 left-2 md:left-[10.5rem] -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex space-x-3 md:pl-40">
            <div>
              <span
                :class="[
                  'bg-gray-300 mt-1 h-4 w-4 rounded-full flex items-center justify-center',
                ]"
              >
              </span>
            </div>
            <div
              class="flex flex-col-reverse md:flex-row min-w-0 flex-1 justify-between"
            >
              <div>
                <h3 class="mb-0 font-bold">{{ event.company }}</h3>
              </div>
              <div
                class="whitespace-nowrap mb-2 md:text-right text-sm opacity-70 md:absolute left-0 top-0.5"
              >
                <time :datetime="event.datetime">{{ event.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const timeline = [
  {
    id: 1,
    company: "HubSpot CMS Developer",
    date: "April 2022",
    datetime: "2022",
  },
  {
    id: 2,
    company: "Zend Framework 2 Certification",
    date: "Sep 2017",
    datetime: "2017",
  },
];
</script>
