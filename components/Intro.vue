import Progressbar from './Progressbar.vue';

<template>
  <div class="text-white">
    <div class="space-y-10 flex flex-col">
      <div class="">
        <nuxt-img
          src="/images/avatar.jpg"
          sizes="sm:100vw md:50vw lg:430px"
          class=""
          alt="Profile of Igor Duspara"
        />
      </div>
      <div class="lg:flex-1 px-6">
        <h1 class="text-green-400">Igor Duspara</h1>
        <h2>Full-Stack Developer</h2>
        <h3 class="opacity-80">Front-End: 70% - Back-End: 30%</h3>
      </div>
      <div class="px-6">
        <h3>Programming Languages</h3>
        <ul class="mt-4 space-y-4 mb-10">
          <li><Progressbar label="CSS" percentage="95" /></li>
          <li><Progressbar label="Vue" percentage="90" /></li>
          <li><Progressbar label="HTML" percentage="90" /></li>
          <li><Progressbar label="JavaScript" percentage="85" /></li>
          <li><Progressbar label="PHP" percentage="70" /></li>
          <li><Progressbar label="SQL" percentage="50" /></li>
          <li><Progressbar label="React" percentage="30" /></li>
        </ul>
        <h3>Contact:</h3>
        <div class="flex flex-row text-4xl gap-4 justify-between mb-10">
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
            href="https://github.com/igor-duspara"
            target="_blank"
            class="ring-1 ring-gray-600 flex items-center justify-center p-4 rounded w-full hover:ring-green-400 hover:text-green-400"
          >
            <ClientOnly
              ><font-awesome-icon
                icon="fa-brands fa-github"
                class="fa-fw" /></ClientOnly
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
