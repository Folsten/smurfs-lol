export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const response = await this.$axios.$get("/my-contact").catch(error => {
      console.log("request to my-contact from store/index.js file failed", error);
    })
    if (response) {
      commit('myContacts/setDiscordProfile', response.data.attributes.discordProfile);
      commit('myContacts/setDiscordServer', response.data.attributes.discordServer);
      commit('myContacts/setSkype', response.data.attributes.skype);
      commit('myContacts/setEmail', response.data.attributes.email);
    }
  }
}
