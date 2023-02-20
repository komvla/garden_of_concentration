<template>
  <button @click="deletePlant" :class="buttonClasses"><img :src="imageSrc" :alt="buttonText"></button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'empty'
    },
    idx: {
      type: Number,
      default: 0
    }
  },
  setup(props) {

    const store = useStore();
    const buttonText = computed(() => props.type !== 'empty' ? props.type : 'pot');
    const imageSrc = computed(() => props.type !== 'empty' ? require(`@/assets/${props.type}.png`) : require('@/assets/pot.png'));
    const buttonClasses = computed(() => [
      props.type !== 'empty' ? 'filled' : 'empty',
      props.idx % 5 === 0 ? 'break' : '',
      'rounded-full',
      'flex-col',
      'p-4', 'flex', 'justify-center',
    ]);

    const deletePlant = () => {
      store.commit('resetField', {fieldIndex : props.idx-1});
    }

    return { buttonClasses, buttonText, imageSrc, deletePlant };
  }
});

</script>

<style scoped>
button {
  height: 8rem;
  width: 8rem;
  border: none;
  align-items: center;
  cursor: pointer;
}

label {
    cursor: pointer;
}

.empty {
    background: #584545;
}

.filled {
    background: #426d26;
}
</style>