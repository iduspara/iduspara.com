<template>
  <div class="flex flex-col print:flex-row lg:flex-row lg:h-screen print:p-8">
    <div
      class="w-full lg:max-w-[430px] print:max-w-[230px] overflow-y-auto bg-gradient-to-b from-slate-700 print:bg-none to-slate-900"
    >
      <Intro />
    </div>
    <div class="relative w-full p-6 print:py-0 overflow-y-auto">
      <svg
        class="fixed inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        ></rect>
      </svg>
      <div class="max-w-screen-lg mx-auto">
        <article class="py-10 print:py-0">
          <div class="">
            <h2>Über mich</h2>
            <p>
              Ich bin ein kreativer Full-Stack-Entwickler mit einem Sinn für
              Design und umfassenden Kenntnissen in Technologien wie Javascript,
              PHP, CSS und MySQL. Ich habe Prototypen erstellt, Dienste
              entwickelt und die Webarchitektur von Unternehmen konzipiert und
              implementiert. Mit Erfahrung in Backend, Front-End, SEO und
              Marketing bringe ich ein breites Spektrum an Fähigkeiten und
              Erfahrungen mit.
            </p>
            <p>
              Insgesamt bin ich talentiert, engagiert und strebe immer nach
              innovativen Lösungen. Meine Arbeit ist stets auf
              Benutzerfreundlichkeit und Zielgruppenorientierung ausgerichtet.
              Ich setze mich leidenschaftlich dafür ein, komplexe Projekte
              erfolgreich abzuschließen und bin immer auf der Suche nach neuen
              Herausforderungen.
            </p>
            <p>
              Ich verfüge über umfassende Fähigkeiten und eine kreative
              Herangehensweise, die mich zu einem wertvollen Teammitglied in
              jedem Entwicklungsprojekt machen. Ich bin stolz darauf, dass ich
              in der Lage bin, komplexe Projekte erfolgreich abzuschließen und
              suche immer nach neuen Herausforderungen.
            </p>
            <p>
              Wenn Sie nach einem talentierten und engagierten
              Full-Stack-Entwickler suchen, der komplexe Projekte erfolgreich
              abschließen kann, dann bin ich die richtige Wahl für Sie!
            </p>
          </div>
        </article>
        <h2 class="mb-5">Berufserfahrung:</h2>
        <Jobs class="mb-20 print:mb-4" />
        <h2 class="mb-5">Auszeichnungen:</h2>
        <Certificates class="mb-20 print:mb-4" />
        <h2 class="mb-5">Schule & Studium:</h2>
        <School class="mb-20 print:mb-4" />
        <h2 class="mb-5">
          Technologien und Fähigkeiten im Bereich der Web- und
          Desktop-Entwicklung
        </h2>
        <Skills class="mb-20 print:mb-4" />
        <h2 class="mb-5">Sprachen</h2>
        <dl class="mt-4 grid grid-cols-3 overflow-hidden rounded-xl divide-x-2">
          <div class="flex flex-col text-gray-800">
            <dt class="text-sm leading-6">Muttersprache</dt>
            <dd class="order-first text-2xl">Kroatisch</dd>
          </div>
          <div class="flex flex-col pl-8 text-gray-800">
            <dt class="text-sm leading-6">Fließend</dt>
            <dd class="order-first text-2xl">Deutsch</dd>
          </div>
          <div class="flex flex-col pl-8 text-gray-800">
            <dt class="text-sm leading-6">Sehr Gut</dt>
            <dd class="order-first text-2xl">Englisch</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
