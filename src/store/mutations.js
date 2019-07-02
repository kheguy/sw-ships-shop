import * as types from './types'

export default {
  [types.BUY_STARSHIP]: (state, model) => {
    state.purchasedStarshipsModels.push(model)
  },
  [types.REMOVE_STARSHIP]: (state, model) => {
    state.purchasedStarshipsModels.splice(state.purchasedStarshipsModels.indexOf(model), 1)
  },
  [types.CLEAR_BASKET]: (state) => {
    state.purchasedStarshipsModels = []
  }
}
