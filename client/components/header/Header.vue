<template>
  <div>
    <HeaderTopNotification></HeaderTopNotification>
    <header
      v-bind="$attrs"
      ref="header"
      class="
        duration-150
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
      :class="{ 'mt-12': isHeaderOnTop }"
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
            <NuxtLink :to="'/'" class="pl-3 pr-3 duration-300 hover:text-text"
              >Home</NuxtLink
            >
            <!-- <div class="ml-3 mr-3 relative dropdown1" @mouseover="showServers = true" @mouseleave="showServers = false">
              <NuxtLink
                :to="{ path: '/', hash: '#products' }"
                v-scroll-to="'#products'"
                class="pr-1 duration-200 hover:text-text"
                >Buy Account</NuxtLink
              >
              <i class="fas fa-chevron-down text-xs"></i>
              <transition name="fade">
                <HeaderDropDownMenu v-show="showServers" :contentType="'smurfs'"></HeaderDropDownMenu>
              </transition>
            </div> -->
            <NuxtLink
              :to="{ path: '/', hash: '#products' }"
              v-scroll-to="'#products'"
              class="pl-3 pr-3 duration-200 hover:text-text"
              >Buy Account</NuxtLink
            >
            <NuxtLink
              :to="'/gifting-center'"
              class="pl-3 pr-3 duration-200 hover:text-text"
              >Gifting Center</NuxtLink
            >
            <a
              :href="this.$store.state.myContacts.discordServer"
              class="pl-3 pr-3 duration-200 hover:text-text"
              target="_blank"
            >
              Discord
            </a>
            <a
              class="pl-3 pr-3 duration-200 hover:text-text"
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
    <HeaderResponsiveMenu></HeaderResponsiveMenu>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isHeaderOnTop: true,
      showServers: false,
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset == 0) {
          this.isHeaderOnTop = true;
        } else {
          this.isHeaderOnTop = false;
        }
      };
    },
  },
};
</script>
