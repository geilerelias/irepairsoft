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
    },
    dark: {
        default: false,
        type: Boolean
    },
    tile: {
        default: false,
        type: Boolean
    }
});

</script>

<template>
    <inertia-link :href="route('home')"
                  class="d-flex align-center text-decoration-none mr-2 router-link-exact-active router-link-active">
        <v-avatar var :color="color" :size="size" :rounded="tile?'0':'circle'">
            <v-avatar :color="color" :size="size-4" :rounded="tile?'0':'circle'">
                <v-img :src="transparent?logoTransparent:logo" alt="logo"/>
            </v-avatar>
        </v-avatar>
    </inertia-link>
</template>


<style scoped>

</style>
