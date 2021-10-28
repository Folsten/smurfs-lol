export const state = () => ({
  smurfs: [],
  isSmurfsLoaded: false,
})

export const mutations = {
  loadSmurfs(state, smurfs) {
    state.smurfs = smurfs
  },
}

export const actions = {
  async loadSmurfs({ commit, state }) {
    const smurfs = await this.$axios.$get('http://localhost:1337/smurfs')

    let bottedSmurfs = [];
    let handleveledSmurfs = [];

    // Сортировка по цене
    let smurfsSortedByPrice = smurfs.sort(
      (a, b) => a.originalPrice - b.originalPrice
    );

    // Сортировка на Botted и Handleveled
    smurfsSortedByPrice.forEach(function (item) {
      if (item.levelingType == "botted") {
        bottedSmurfs.push(item);
      }
      if (item.levelingType == "handleveled") {
        handleveledSmurfs.push(item);
      }
    });

    // В зависимости от того, что с чем конкатанировать меняется порядок отображения
    // Смурфов на странице, либо сначала botted, либо сначала handleveled
    await commit('loadSmurfs', bottedSmurfs.concat(handleveledSmurfs))
  }
}
