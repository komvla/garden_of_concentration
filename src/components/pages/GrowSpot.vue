<template>
<div class="grid content-center	">
    <v-card     
    class="mx-auto my-20"
    max-width="600"
    >
    <div class="container grid grid-cols-1 gap-4  justify-items-center">
    <h3 class="">{{plantInfo.name}}</h3>
    <div class="img-wrapper">
    <img class=" h-64" :src="require(`@/assets/${plantInfo.type}.png`)" />
    </div>
    <v-card-content>
  <div>
    <div class="text-center">
      <button
        ref="button"
        class="px-6 py-3 bg-green-500 text-white rounded-lg m-2"
        @mouseover="startTimer"
        @mouseout="stopTimer"
      >
        {{ buttonText }}
      </button>
      <button
        class="ml-2 px-6 py-3 bg-red-500 text-white rounded-lg m-2"
        v-if="showTryAgain"
        @click="resetGame"
      >
        Try Again
      </button>
      <button
        ref="button"
        class="px-6 py-3 bg-green-500 text-white rounded-lg m-2"
        v-if="showButtonPlaceAPlant"
        @click="placeAPlant"
      >
        Place a plant
      </button>

    </div>

  </div>
    </v-card-content>
    </div>

    </v-card>
</div>

</template>
<script>

import { defineComponent, ref, reactive, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';


export default defineComponent({

  setup() {
    // router & store
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    // plant info

    const plantType = route.params.type;
    const plantInfo = store.state.typesPlants.find(item => item.type === plantType);

    // timer functionality 
    const buttonRef = ref(null);
    const timeLeft = reactive({ value: plantInfo.growingTime });
    const timer = ref(null);
    let buttonPlacePlantIsClickedOnce = false;
    const gameState = reactive({
      started: false,
      finished: false,
      won: false,
    });
    const message = ref('');
    const showMessage = ref(false);

    const startTimer = () => {
      if (!gameState.started) {
        gameState.started = true;
        timer.value = setInterval(() => {
          timeLeft.value--;
          if (timeLeft.value === 0) {
            clearInterval(timer.value);
            gameState.finished = true;
            gameState.won = true;
          }
        }, 1000);
      }
    };

    const stopTimer = () => {
      if (gameState.started && !gameState.finished) {
        clearInterval(timer.value);
        gameState.finished = true;
        gameState.won = false;
      }
    };

    const resetGame = () => {
      timeLeft.value = plantInfo.growingTime;
      gameState.started = false;
      gameState.finished = false;
      gameState.won = false;
    };

    const buttonText = computed(() => {
      if (gameState.finished) {
        return gameState.won ? 'You win!' : 'You lose!';
      }
      return gameState.started ? `${timeLeft.value} seconds left` : 'Move cursor to start';
    });

    const showTryAgain = computed(() => {
      return gameState.finished && !gameState.won;
    });

    const showButtonPlaceAPlant = computed(() => {
      return gameState.finished && gameState.won;
    });

    const placeAPlant = () => {
      buttonPlacePlantIsClickedOnce = true;
      store.commit('placePlantToField', {type: plantInfo.type })
      router.push('/');
    };
   

    return { 
      plantInfo, 
      plantType, 
      buttonRef,
      buttonText,
      showTryAgain,
      showButtonPlaceAPlant,
      startTimer,
      stopTimer,
      resetGame,
      message,
      showMessage,
      placeAPlant,
      buttonPlacePlantIsClickedOnce
    };
  },
}) 

</script>
<style scoped>
    
</style>