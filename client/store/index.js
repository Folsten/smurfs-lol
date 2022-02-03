export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const response = await this.$axios.$get(`http://localhost:1337/my-contact`)
    commit('myContacts/setDiscordProfile', response.discordProfile);
    commit('myContacts/setDiscordServer', response.discordServer);
    commit('myContacts/setSkype', response.skype);
    commit('myContacts/setEmail', response.email);
  }
}
