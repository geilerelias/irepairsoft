<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <v-btn :type="type" class="inline-flex items-center justify-center px-4 py-2 bg-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red active:bg-red focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">
        <slot />
    </v-btn>
</template>
