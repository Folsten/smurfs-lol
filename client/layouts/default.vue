<template>
  <div class="wrapper relative w-full min-h-full bg-primary">
    <ContactUsModal></ContactUsModal>
    <Cart></Cart>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("servers/loadServers");
    this.$store.dispatch("smurfs/loadSmurfs");
  },
}
</script>
