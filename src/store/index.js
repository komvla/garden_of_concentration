import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buttons: [
      [
        { filled: true, type: 'flower' },
        { filled: false, type: '' },
        { filled: true, type: 'cactus' },
        { filled: false, type: '' },
      ],
      [
        { filled: false, type: '' },
        { filled: true, type: 'bush' },
        { filled: false, type: '' },
        { filled: true, type: 'tree' },
      ],
      [
        { filled: false, type: '' },
        { filled: false, type: '' },
        { filled: false, type: '' },
        { filled: true, type: 'tree' },
      ],
      [
        { filled: false, type: '' },
        { filled: false, type: '' },
        { filled: false, type: '' },
        { filled: true, type: '' },
      ]
    ]
  },
  mutations: {
    editButton(state, { rowIndex, buttonIndex, filled, type }) {
      state.buttons[rowIndex][buttonIndex] = {filled: filled, type: type};
    },
    resetButton(state, { rowIndex, buttonIndex }) {
        state.buttons[rowIndex][buttonIndex] = {filled: false, type: '' };
    }
  },
  actions: {},
  modules: {}
});