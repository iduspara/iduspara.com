import Progressbar from './Progressbar.vue';

<template>
  <div class="text-white print:text-gray-800">
    <div class="space-y-10 flex flex-col">
      <div class="">
        <nuxt-img
          src="/images/avatar.jpg"
          sizes="sm:100vw md:50vw lg:430px"
          class=""
          width="640"
          height="640"
          alt="Profile of Igor Duspara"
        />
      </div>
      <div class="lg:flex-1 px-6 text-center">
        <h1 class="text-green-400 print:text-gray-800">Igor Duspara</h1>
        <h2 class="">Full-Stack Developer</h2>
        <dl
          class="mt-4 grid grid-cols-2 gap-0.5 overflow-hidden rounded-xl text-center"
        >
          <div class="flex flex-col bg-white/5 print:bg-gray-200 p-4">
            <dt class="text-sm leading-6 text-gray-300 print:text-gray-800">
              Alter
            </dt>
            <dd
              class="order-first text-3xl tracking-tight text-white print:text-gray-700"
            >
              36 Jahre
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 print:bg-gray-200 p-4">
            <dt class="text-sm leading-6 text-gray-300 print:text-gray-800">
              Berufserfahrung
            </dt>
            <dd
              class="order-first text-3xl tracking-tight text-white print:text-gray-700"
            >
              18 Jahre
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 print:bg-gray-200 p-4">
            <dt class="text-sm leading-6 text-gray-300 print:text-gray-800">
              Front-End
            </dt>
            <dd
              class="order-first text-3xl tracking-tight text-white print:text-gray-700"
            >
              70%
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 print:bg-gray-200 p-4">
            <dt class="text-sm leading-6 text-gray-300 print:text-gray-800">
              Back-End
            </dt>
            <dd
              class="order-first text-3xl tracking-tight text-white print:text-gray-700"
            >
              30%
            </dd>
          </div>
        </dl>
      </div>
      <div class="px-6">
        <h2 class="text-xl">Kontakt:</h2>
        <div
          class="print:hidden flex flex-row text-4xl gap-4 justify-between mb-10"
        >
          <a
            aria-label="My E-Mail"
            href="mailto:igor.duspara@gmail.com"
            target="_blank"
            class="ring-1 ring-gray-600 flex items-center justify-center p-4 rounded w-full hover:ring-green-400 hover:text-green-400"
          >
            <ClientOnly
              ><font-awesome-icon
                icon="fa-regular fa-envelope"
                class="fa-fw" /></ClientOnly
          ></a>
          <a
            aria-label="My Xing Profile link"
            href="https://www.xing.com/profile/Igor_Duspara"
            target="_blank"
            class="ring-1 ring-gray-600 flex items-center justify-center p-4 rounded w-full hover:ring-green-400 hover:text-green-400"
          >
            <ClientOnly
              ><font-awesome-icon
                icon="fa-brands fa-xing"
                class="fa-fw" /></ClientOnly
          ></a>
          <a
            aria-label="My Github profile link"
            href="https://github.com/iduspara"
            target="_blank"
            class="ring-1 ring-gray-600 flex items-center justify-center p-4 rounded w-full hover:ring-green-400 hover:text-green-400"
          >
            <ClientOnly
              ><font-awesome-icon
                icon="fa-brands fa-github"
                class="fa-fw" /></ClientOnly
          ></a>
        </div>
        <ul class="hidden print:block space-y-2">
          <li>E-mail: igor.duspara@gmail.com</li>
          <li>Github: igor-duspara</li>
          <li>Xing: Igor_Duspara</li>
        </ul>
        <h2 class="text-xl">Mein Daily Tech-Stack:</h2>
        <ul class="mt-4 space-y-4 mb-10">
          <li><Progressbar label="CSS" percentage="95" /></li>
          <li><Progressbar label="React" percentage="90" /></li>
          <li><Progressbar label="HTML" percentage="90" /></li>
          <li><Progressbar label="JavaScript" percentage="85" /></li>
          <li><Progressbar label="PHP" percentage="70" /></li>
          <li><Progressbar label="SQL" percentage="50" /></li>
          <li><Progressbar label="Vue" percentage="30" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
