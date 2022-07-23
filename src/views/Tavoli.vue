<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import TableCard from '@/components/TableCard.vue'

const links = [
  ["Los Angeles", "los-angeles", "https://drive.google.com/file/d/1PhGcgh24cn6yLhw8Ivft-63sw6keNpCF/view?usp=sharing"],
  ["Barbados", "barbados", "https://drive.google.com/file/d/1PqP2Xb1isyyWxyWSa2goAmrQa5l8uYnU/view?usp=sharing"],
  ["Puerto Rico", "puerto-rico", "https://drive.google.com/file/d/1QEsKHDjViFEJQZ9HHCKjlcopqG8w6y1k/view?usp=sharing"],
  ["St Kitts e Nevis", "st-kitts-nevis", "https://drive.google.com/file/d/1PvZsl_gmtpVqhxBa5xQ9ZPlzb1DI2xBQ/view?usp=sharing"],
  ["Londra", "london", "https://drive.google.com/file/d/1Q2WCunoOLGFxHbuMS2ahw8W3y_UudHgY/view?usp=sharing"],
  ["Mauritius", "mauritius", "https://drive.google.com/file/d/1Q9j5by9dKaU0V3CTK6RszD7Q_jtvverb/view?usp=sharing"],
  ["Miami", "miami", "https://drive.google.com/file/d/1PkLricCNrfwaJWAfuhDmYUKONz8aycsk/view?usp=sharing"],
  ["Hawaii", "hawaii", "https://drive.google.com/file/d/1QPpr46iDN15MfsVJeUHZcaUYnjqR4a4O/view?usp=sharing"],
  ["New York, New Jersey e Pennsylvania", "new-york", "https://drive.google.com/file/d/1QBb3ZhT1QnLZr80-OZBajchGxQMTHKvU/view?usp=sharing"],
  ["Firenze", "firenze", "https://drive.google.com/file/d/1Q4jc8JXusnrnKHDj_TpLcZ9l_awx8Alf/view?usp=sharing"],
]

</script>

<template>
  <div>
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 mb-5">Tavoli</h2>
    <p>Seleziona un tavolo per leggerne la descrizione</p>
    <div class="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
      <a :href="i[2]" v-for="i in links" target="_blank">
        <TableCard 
          :name="i[0]" 
          :picture="`/locations/${i[1]}.jpg`"
        />
      </a>
    </div>
  </div>
</template>