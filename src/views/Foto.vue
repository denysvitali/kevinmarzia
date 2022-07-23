<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue'

const links = [
  ["22.07", "https://photos.app.goo.gl/iXT8CMEuAVXg2U1K7"],
  ["23.07", "https://photos.app.goo.gl/P7zPEN37UrjP669x9"],
]

</script>

<template>
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 mb-5">Foto</h2>
    <p>
      Se hai partecipato al matrimonio in comune oppure in chiesa,
      seleziona il giorno appropriato tramite i bottoni qua sotto e
      vedi oppure carica le foto!
    </p>
    <div class="flex flex-row justify-center mt-5">
      <ActionButton v-for="link in links" :href="link[1]" color="gold">
        {{ link[0] }}
      </ActionButton>
    </div>
</template>