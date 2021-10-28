export const state = () => ({
  currentServer: 'NA',
  servers: []
})

export const mutations = {
  setServer(state, value) {
    state.currentServer = value
  },
  loadServers(state, value) {
    state.servers = value
  }
}

export const actions = {
  async loadServers({commit, state}) {

    const servers = await this.$axios.$get('http://localhost:1337/servers')

    // Сортировка серверов согласно их нумерованности в базе данных, поле order
    servers.sort((a,b) => a.order - b.order)
    await commit('loadServers', servers)
  }
}
