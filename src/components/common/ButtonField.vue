<template>
  <button col lg="4" :class="buttonClasses">{{ buttonText }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'empty'
    }
  },
  setup(props) {
    const buttonText = props.type !== 'empty' ? props.type : 'empty';
    const buttonClasses = [
      props.type !== 'empty' ? 'filled' : 'empty',
      props.idx % 5 === 0 ? 'break' : '',
    ];
    return { buttonClasses, buttonText };
  }
});

</script>

<style scoped>
button {
  height: 10vw;
  width: 10vw;
  border-radius: 50rem;
  margin: 3rem;
  border: none;
  cursor: pointer;
}

.empty {
    background: #584545;
}

.filled {
    background: #426d26;
}

.break {
    flex-basis: 100%;
}

</style>