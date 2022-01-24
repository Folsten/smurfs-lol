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

export const actions = {}
