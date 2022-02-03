<template>
  <div class="flex justify-center flex-wrap pt-5">
    <div v-for="server in $store.state.servers.servers" :key="server.acronym">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          w-24
          text-lg
          rounded-main
          m-2
          pt-2
          pb-2
          font-barlow font-semibold
          bg-secondaryLight
          cursor-pointer
          serversToggle__toggler
        "
        :class="{
          serverSwitcher_active:
            $store.state.servers.currentServer === server.acronym,
        }"
        @click="$store.commit('servers/setServer', server.acronym)"
      >
        <img :src="getServerImage(server.acronym)" class="h-14" />
        <span class="pt-1 uppercase">{{ server.acronym }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.getters['servers/getServersWithSmurfs'])
  },
  async fetch() {
    const servers = await this.$axios.$get("/servers");

    // Сортировка серверов согласно их нумерованности в базе данных, поле order
    servers.sort((a, b) => a.order - b.order);

    await this.$store.commit("servers/loadServers", servers);
  },
  methods: {
    getServerImage(server) {
      return require(`~/assets/img/servers/${server}.png`);
    },
  },
};
</script>
