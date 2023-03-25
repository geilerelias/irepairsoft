<template>
    <v-app>
        <navigation :color="color" :flat="flat"></navigation>
        <v-main>
            <home-section></home-section>
        </v-main>
        <v-scale-transition>
            <v-btn
                v-show="fab"
                v-scroll.self="onScroll"
                bottom
                color="secondary"
                dark
                fab
                fixed
                right
                @click="toTop"
            >
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>

        <footer/>
    </v-app>
</template>

<script setup>
import Navigation from "./ExampleComponents/Navigation.vue";
import HomeSection from "./ExampleComponents/HomeSection.vue";
import Footer from './ExampleComponents/Footer.vue';

import {onMounted, ref, watch} from "vue";

let color = ref("transparent")
let flat = ref(false)
let fab = ref(null)

watch(fab, (value) => {
    if (value) {
        color = "secondary";
        flat = false;
    } else {
        color = "transparent";
        flat = true;
    }
})

onMounted(() => {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
        color = "transparent";
        flat = true;
    }
});


function onScroll(e) {
    if (typeof window === "undefined") return;
    const top = window.pageYOffset || e.target.scrollTop || 0;
    fab = top > 60;
}

function toTop() {
    this.$vuetify.goTo(0);
}
</script>

<style scoped>

</style>
