<script lang="ts" setup>
const props = defineProps(['name', 'description', 'picture'])
</script>

<template>
<div class="rounded overflow-hidden shadow-lg">
    <img class="w-full h-80 object-cover" :src="props.picture">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ props.name }}</div>
    <p class="text-gray-700 text-base">
        {{ props.description }}
    </p>
    </div>
</div>
</template>