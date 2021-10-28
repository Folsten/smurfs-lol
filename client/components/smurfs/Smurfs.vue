<template>
  <ul>
    <SmurfsSmurf v-for="smurf in list" :key="smurf._id" :smurf="smurf"></SmurfsSmurf>
    <li
      class="font-bold text-error text-center"
      v-if="this.list.length == 0 && this.$store.state.smurfs.smurfs.length > 0"
    >
      At the moment there is no available accounts in selected region. Please,
      select another region or visit website later.
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.smurfs.smurfs.filter(
        (smurf) =>
          smurf.server.acronym === this.$store.state.servers.currentServer
      );
    },
  },
};
</script>
