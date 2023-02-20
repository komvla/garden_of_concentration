<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <div class='grid grid-cols-12 gap-4 container'>
          <button class="col-start-4 col-span-6 m-2 p-5 font-mono text-black font-bold border-4 border-solid bg-lime-400 border-lime-600 rounded-md" :disabled="!canGrow" v-bind="props" @click="openDialog">
            Grow new
          </button>    
        </div>
      </template>

  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-list density="compact">
      <v-list-subheader>SELECT PLANT TO GROW</v-list-subheader>

      <v-list-item
        v-for="(item, i) in typesPlants"
        :key="i"
        :value="item.type"
        @click="goToGrow(item.type)"
        active-color="primary"
      >
        <template v-slot:prepend>
          <img class="h-10" :src="require(`@/assets/${item.type}.png`)" />
        </template>

        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="`Growing time: ${(item.growingTime <= 60 ? item.growingTime : item.growingTime/60 )}${item.growingTime <= 60 ? 's' : 'm'}`"></v-list-item-subtitle>
      </v-list-item>
    </v-list>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const typesPlants = computed(() => store.state.typesPlants);

    const dialog = ref(false);
    const canGrow = ref(true);
    const openDialog = () => (dialog.value = true);

    const goToGrow = (type) => router.push(`/spot/${type}`)

    return { dialog, openDialog, canGrow, typesPlants, goToGrow };
  },
});
</script>

<style scoped>
/* Styles go here */
</style>