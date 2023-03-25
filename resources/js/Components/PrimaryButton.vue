<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <v-btn color="primary" :type="type">
        <slot />
    </v-btn>
</template>
