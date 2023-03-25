<template>
    <inertia-link :href="route('home')"
                  class="d-flex align-center text-decoration-none mr-2 router-link-exact-active router-link-active">
        <v-avatar :color="color" :size="size">
            <v-avatar :color="color" :size="size-4">
                <v-img :src="transparent?logoTransparent:logo" alt="logo"/>
            </v-avatar>
        </v-avatar>
    </inertia-link>
</template>

<script setup>
import logo from '../../images/logo.png';
import logoTransparent from '../../images/logo-transparent.png';

const props = defineProps({
    color: {
        default: "white",
        type: String
    },
    circle: {
        default: true,
        type: Boolean
    },
    transparent: {
        default: false,
        type: Boolean
    },
    size: {
        default: 55,
        type: Number
    }
});
</script>

<style scoped>

</style>
