import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      coins: 0, // account of user of coins for buy features and skins in app shop 
      fields: [
          { type: 'flower' },
          { type: 'flower' },
          { type: 'cactus' },
          { type: 'tree' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' },
          { type: 'empty' }
      ],
      typesPlants : [
        { name: 'Flower', type: 'flower', growingTime : 5, price : 10 },
        { name: 'Bush', type: 'bush', growingTime : 10, price : 60 },
        { name: 'Cactus', type: 'cactus', growingTime : 3600, price : 360 },
        { name: 'Big Plant',  type: 'tree', growingTime : 3600*4, price : 360*4  },
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
    placePlantToField(state, { type }) {
      const emptyIndex = state.fields.findIndex((field) => field.type === 'empty');
      state.fields[emptyIndex] = {type} ;

    }   
    // sellPlant(state, { rowIndex, fieldIndex,  type }) { 
    //     // future functionality for sell plants grown by the user
    // }
  },
  actions: {},
  modules: {}
});