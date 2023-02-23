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
                <h4 class="text-gray-400">{{ event.title }}</h4>
                <p>
                  {{ event.content }}
                </p>
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
    content:
      "Web Development (PHP, MySQL, JavaScript, HTML, CSS3) und Desktop Application Development (VB.NET & SQL)",
    title: "Student",
    company: "Ivora- Cambridge Education Centre",
    date: "Sep 2009 - Juli 2012",
    datetime: "2019-02-01",
  },
  {
    id: 2,
    content: "Computertehniker",
    title: "Schüler",
    company: "Zeljeznicka Tehnicka Skola",
    date: "Sep 2004 - Juni 2008",
    datetime: "2004-09-01 - 2008-06-01",
  },
];
</script>
