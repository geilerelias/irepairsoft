<script setup>
defineProps({
    text: String
});
</script>

<template>
    <v-chip size="small" class="mr-1">
        {{ text }}
    </v-chip>
</template>
