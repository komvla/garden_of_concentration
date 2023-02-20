<template>
  <div class="container content-center mx-auto ">
    <header class="header">
    
    </header>
    <div class='grid grid-cols-12 gap-4 container py-10'>
    <table class=" col-start-4 col-span-6 grid grid-cols-4 gap-4 justify-items-center">
        <ButtonField v-for="(field, fieldIndex) in fields" :key="fieldIndex" :idx="fieldIndex+1" :type="field.type" />
    </table>
    <!-- <button class="col-start-4 col-span-6 m-2 p-5 font-mono text-black font-bold border-4 border-solid bg-lime-400 border-lime-600 rounded-md" :disabled="!canGrow" @click="growNew">Grow new</button>     -->
    </div>
    <ModalSelectPlant :canGrow="canGrow" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'; 
import ButtonField from '../common/ButtonField.vue';
import ModalSelectPlant from '../common/ModalSelectPlant.vue';


export default defineComponent({
  components: {ButtonField, ModalSelectPlant},
  setup() {
    const store = useStore();

    const fields = computed(() => store.state.fields);

    const resetField = (fieldIndex) => {
      store.commit('resetField', { fieldIndex });
    };

    const canGrow = computed(() => {
      return fields.value.some(field => field.type !== 'empty');
    });


    return { fields, resetField, canGrow };
  }
});
</script>

<style scoped>

</style>