<template>
  <div>
    <header
      v-bind="$attrs"
      class="
        header
        flex
        justify-center
        h-16
        fixed
        left-0
        top-0
        bg-primaryDark
        border-b border-gray
        w-full
        z-20
      "
    >
      <div class="container items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="'/'" class="pr-8 flex">
            <div class="">
              <img
                class="w-40"
                src="@/assets/img/logo/logo-main-transparent.svg"
                alt="smurfs.lol logo"
              />
            </div>
          </NuxtLink>
          <div class="hidden font-barlow md:flex">
            <NuxtLink
              :to="'/'"
              class="pl-3 pr-3 duration-300 hover:text-text"
              >Home</NuxtLink
            >
            <NuxtLink
              :to="{ path: '/', hash: '#products' }"
              v-scroll-to="'#products'"
              class="pl-3 pr-3 duration-300 hover:text-text"
              >Buy Account</NuxtLink
            >
            <a
              href="https://discord.gg/77uGyWJczT"
              class="pl-3 pr-3 duration-300 hover:text-text"
              target="_blank"
            >
              Discord
            </a>
            <a
              class="pl-3 pr-3 duration-300 hover:text-text"
              @click="$store.commit('contactUsModal/toggle')"
              >Contact Us</a
            >
          </div>
        </div>
        <div
          @click="$store.commit('responsiveMenu/toggle')"
          class="
            flex
            items-center
            justify-center
            w-12
            h-full
            cursor-pointer
            md:hidden
          "
        >
          <i class="fas fa-bars text-xl"></i>
        </div>
      </div>
    </header>
    <div class="pt-16"></div>
    <ResponsiveMenu></ResponsiveMenu>
  </div>
</template>

<script>
import ResponsiveMenu from "@/components/header/responsiveMenu/ResponsiveMenu";

export default {
  components: {
    ResponsiveMenu,
  },
};
</script>
