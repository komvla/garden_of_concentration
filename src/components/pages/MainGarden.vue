<template>
  <div>
    <table>
      <tr v-for="(row, rowIndex) in buttons" :key="rowIndex">
        <td v-for="(button, buttonIndex) in row" :key="buttonIndex">
          <button :class="{'green': button.filled, 'brown': !button.filled}">
            {{ button.filled ? button.type : 'empty' }}
          </button>
        </td>
      </tr>
    </table>
    <button :disabled="!canGrow" @click="grow">Grow new</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonTable',
  props: ['buttons'],
  computed: {
    canGrow() {
      return this.buttons.some(row => row.some(button => !button.filled));
    }
  },
  methods: {
    grow() {
      console.log('hello');
    }
  }
}
</script>

<style scoped>
.green {
  background-color: green;
}

.brown {
  background-color: brown;
}
</style>