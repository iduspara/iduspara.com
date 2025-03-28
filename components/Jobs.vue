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
                <h4 class="text-gray-500">{{ event.title }}</h4>
                <p>
                  {{ event.content }}
                </p>
              </div>
              <div
                class="whitespace-nowrap mb-2 md:text-right text-sm text-gray-500 md:absolute left-0 top-0.5"
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
      "",
    title: "Senior Front End Developer",
    company: "BANOVO GmbH",
    date: "May 2023 - till today",
    datetime: "2023-05-01",
  },
  {
    id: 2,
    content:
      "Bei BANOVO habe ich die Weiterentwicklung der Website und deren Features übernommen. Dazu gehörten die Umsetzung des neuen Designs und die Migration der Website auf das HubSpot CMS. Ich habe hierbei Technologien wie PHP (Symfony, Twig, ApiPlatform), CSS (Tailwind, Quasar), JavaScript (Vue, Quasar, NuxtJS, Vuex) und GraphQL verwendet. Eine weitere wichtige Aufgabe war die Verbesserung der Website-Performance sowie die Optimierung für SEO-Zwecke. Durch meine Arbeit konnte die Website auf den neuesten Stand gebracht werden und die Benutzerfreundlichkeit sowie die Sichtbarkeit in Suchmaschinen verbessert werden.",
    title: "Front End Developer",
    company: "BANOVO GmbH",
    date: "Feb 2019 - Mai 2023",
    datetime: "2019-02-01 - 2023-05-01",
  },
  {
    id: 3,
    content:
      "Bei CHECK24 GmbH war ich für die Weiterentwicklung und Verbesserung des Risikolebensversicherungsrechners verantwortlich. Dabei habe ich die Webarchitektur konzipiert und umgesetzt, Prototypen erstellt sowie neue Dienste, Features und Produkte entwickelt. Eine wichtige Aufgabe war auch die Weiterentwicklung der Firmenstandards. Dabei habe ich Technologien wie PHP (Zend, Swagger), CSS, HTML, JavaScript (jQuery), MySQL, JIRA und BitBucket verwendet. Eine weitere wichtige Aufgabe war die Verbesserung der Website-Performance sowie die Optimierung für SEO-Zwecke. Durch meine Arbeit konnte die Benutzerfreundlichkeit der Website verbessert werden und die Sichtbarkeit in Suchmaschinen gesteigert werden.",
    title: "Full-stack Developer (Freelancer)",
    company: "CHECK24 GmbH",
    date: "Aug 2013 - Feb 2019",
    datetime: "2013-08-01 - 2019-02-01",
  },
  {
    id: 4,
    content:
      "Ich habe ein Immobilienportal entwickelt, das Ähnlichkeiten mit der Internetpräsenz des Unternehmens aufweist. Hierbei habe ich Technologien wie PHP, HTML, CSS und MySQL eingesetzt, um eine leistungsstarke und benutzerfreundliche Plattform zu schaffen. Ein besonderes Feature meines Projekts war eine FTP-Schnittstelle, die den Import von Anzeigen ermöglichte. Mit meinem Fachwissen und meinen Fähigkeiten habe ich maßgeblich zur erfolgreichen Umsetzung dieses Projekts beigetragen und somit einen wertvollen Beitrag zum Erfolg der HIHC GmbH geleistet.",
    title: "Full-stack Developer (Freelancer)",
    company: "HIHC Horvat Real Estate GmbH",
    date: "Sep 2012 till today",
    datetime: "2012-09-01",
  },
  {
    id: 5,
    content:
      "Bei Svijet Medija d.o.o habe ich als Webshop-Administrator gearbeitet und Unterstützung bei der Netzwerkadministration und im Marketing geleistet. Ich war auch als Projektleiter für die Entwicklung von Business-Anwendungen und deren Webshop tätig. Darüber hinaus habe ich sowohl Web- als auch Desktop-Anwendungen für das Unternehmen entwickelt.",
    title: "Adminstrator / Entwickler / Projektleiter",
    company: "Svijet Medija d.o.o",
    date: "Sep 2008 - Aug 2012",
    datetime: "2008-09-01 - 2012-08-01",
  },
  {
    id: 6,
    content:
      "Software Entwickler bei einer Verlag Firma. Zuständig für das Administrieren und weiterentwickeln deren Website.",
    title: "Full-Stack Entwickler",
    company: "Mape Servis d.o.o",
    date: "Juni 2006 - Sep 2008",
    datetime: "2006-06-01 - 2008-09-01",
  },
];
</script>
