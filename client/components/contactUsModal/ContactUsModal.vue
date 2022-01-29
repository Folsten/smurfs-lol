<template>
  <div
    @click.self="$store.commit('contactUsModal/toggle')"
    v-if="this.$store.state.contactUsModal.isActive"
    class="flex fixed overlay z-50"
  >
    <div
      class="
        relative
        max-w-md
        w-full
        bg-secondary
        border border-gray
        rounded-main
        flex flex-col
        items-center
        p-7
        xs:p-9
        ml-3
        mr-3
      "
    >
      <div
        @click="$store.commit('contactUsModal/toggle')"
        class="
          flex
          absolute
          justify-center
          items-center
          right-0
          top-0
          w-12
          h-12
          cursor-pointer
        "
      >
        <i class="fas fa-times text-2xl"></i>
      </div>
      <div
        class="
          text-2xl
          font-barlow font-semibold
          tracking-wide
          text-left
          w-full
        "
      >
        Contact us
      </div>
        <div
          class="
            text-base text-left
            font-barlow
            text-text
            font-semibold
            w-full
            pt-2
            pb-5
          "
        >
          <!-- You can always contact us with 24/7 chat at the bottom right. -->
          You can always contact us in any way
        </div>
      <a
        href="https://discord.gg/Dvh3m9B2ZG"
        target="blank"
        class="
          primaryButton
          bg-discord
          hover:bg-discordDark
          h-10
          w-full
          font-barlow
        "
      >
        <i class="fab fa-discord pr-1"></i>Folsten#3709
      </a>
      <a
        href="skype:live:bd024eca514dfc47?add"
        target="blank"
        class="
          primaryButton
          bg-skype
          hover:bg-skypeDark
          h-10
          mt-3
          w-full
          font-barlow
        "
        ><i class="fab fa-skype pr-1"></i>live:bd024eca514dfc47</a
      >
      <div
        class="
          text-base
          font-barlow
          text-text
          font-semibold
          text-left
          pt-4
          w-full
        "
      >
        Or contact us at
        <a
          href="mailto:support@smurfs.lol"
          class="text-whiteDarker duration-300 hover:text-white"
          >support@smurfs.lol</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
