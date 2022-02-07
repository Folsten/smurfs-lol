<template>
  <div
    ref="headerTopNotification"
    class="
      md:flex
      justify-center
      w-full
      pt-2
      pb-2
      headerTopNotification
      bg-coloredSecondary
    "
  >
    <div class="container justify-between items-center flex-nowrap">
      <span class="text-white"
        >🔥 Join our discord for regular giveaways and access to our Gifting
        Store, to buy Riot Points 50% cheaper!</span
      >
      <a
        :href="this.$store.state.myContacts.discordServer"
        target="_blank"
        class="
          primaryButton
          whitespace-nowrap
          bg-white
          text-black
          h-8
          rounded-full
        "
        >Join to our community!</a
      >
    </div>
  </div>
</template>
