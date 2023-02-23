<template>
  <div class="flex flex-wrap gap-2">
    <div
      v-for="skill in skills"
      class="inline-block items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-200 text-green-800"
    >
      {{ skill }}
    </div>
  </div>
</template>
<script setup>
const skills = [
  "PHP",
  "JavaScript",
  "CSS3",
  "Desktop Aplication Development",
  "OOP",
  "MYSQL",
  "Web Design",
  "Web Development",
  "Jasmin",
  "Zend Framework 2",
  "Jira",
  "Atlassian Software",
  "Photoshop",
  "Ghostlab",
  "Mac OS X",
  "Linux",
  "Windows",
  "Cross-Browser Development",
  "Foundation",
  "Bootstrap",
  "HTML",
  "Gulp",
  "Git",
  "Behat",
  "Nucleus",
  "Symfony Frameworks",
  "Sketch",
  "Postman",
  "Tower",
  "Sequel Pro",
  "Full Stack",
  "Vue",
  "VueEx",
  "PWA SPA SSR",
  "REST API",
  "TypeScript",
  "Nuxt",
  "Web",
  "Frontend",
  "Backend",
  "jQuery",
  "TDD",
  "Cypress",
  "Sentry",
];
</script>
