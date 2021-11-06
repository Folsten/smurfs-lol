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

    console.log(smurfs)

    let bottedSmurfs = [];
    let handleveledSmurfs = [];

    // Отбор только валидных смурфов для дальнейшего использования
    // smurf.server == проверка, что в strapi у smurf сущности указана связь с каким-либо сервером
    const validatedSmurfs = smurfs.filter(smurf => smurf.server != null)

    // Сортировка по цене
    let smurfsSortedByPrice = validatedSmurfs.sort(
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
