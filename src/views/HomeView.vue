<script setup lang="ts">
</script>

<template>
  <main>
    <div class="flex flex-col items-center md:flex-row">
      <div class="basis-1/2 flex flex-col text-center mx-10">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block l:inline font-marck-script color-gold">Matrimonio di Kevin & Marzia</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          23 luglio 2022
        </p>
      </div>
      <div class="basis-1/2 mt-10 md:mt-0">
        <img class="object-cover w-full h-96 md:h-full"
          src="@/assets/kevin-marzia-800px.jpg" alt="Kevin e Marzia al matrimonio civile" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
}

div.buttons {
  display: flex;
  justify-content: center;
}
</style>