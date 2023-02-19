import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      coins: 0, // account of user of coins for buy features and skins in app shop 
      fields: [
        
          { type: 'flower' },
          { type: 'empty' },
          { type: 'cactus' },
          { type: 'empty' },
          { type: 'bush' },
          { type: 'bush' },
          { type: 'flower' },
          { type: 'tree' },
          { type: 'flower' },
          { type: 'empty' },
          { type: 'cactus' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' }
        
      ]
    };
  },
  mutations: {
    resetField(state, { fieldIndex }) {
      state.fields[fieldIndex] = { type: 'empty' };
    },
    editField(state, { fieldIndex, type }) {
      state.fields[fieldIndex] = { type };
    },
    // sellPlant(state, { rowIndex, fieldIndex,  type }) { 
    //     // future functionality for sell plants grown by the user
    // }
  },
  actions: {},
  modules: {}
});