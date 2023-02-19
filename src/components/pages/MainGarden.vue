<template>
  <div>
    <header class="header">My Garden</header>
    <table>
        <ButtonField v-for="(field, fieldIndex) in fields" :key="fieldIndex" :idx="fieldIndex+1" :type="field.type" />
    </table>
    <button :disabled="!canGrow" @click="growNew">Grow new</button>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'; 
import ButtonField from '../common/ButtonField.vue';


export default defineComponent({
  components: {ButtonField},
  setup() {
    const store = useStore();

    const fields = computed(() => store.state.fields);

    const resetField = (fieldIndex) => {
      store.commit('resetField', { fieldIndex });
    };

    const canGrow = computed(() => {
      return fields.value.some(field => field.type !== 'empty');
    });

    const growNew = () => {
      console.log('hello');
    };

    return { fields, resetField, canGrow, growNew };
  }
});
</script>

<style scoped>

</style>