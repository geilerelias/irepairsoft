<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        dark
        src="@/assets/img/bgDrawer.jpg"
        temporary
    >
        <v-list>
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar>
                        <img alt="Logo" src="../../../images/logo.png"/>
                    </v-avatar>
                </template>
                <template v-slot:subtitle>
                    <v-list-item-title class="title">Calango</v-list-item-title>
                    <v-list-item-subtitle>WEB</v-list-item-subtitle>
                </template>
            </v-list-item>
        </v-list>

        <v-divider/>

        <v-list dense>
            <v-list-item
                v-for="([icon, text, link], i) in items"
                :key="i"
                link
                @click="$vuetify.goTo(link)"
            >
                <template v-slot:append>
                    <v-icon>{{ icon }}</v-icon>
                </template>
                <template v-slot:subtitle>
                    <v-list-item-title class="subtitile-1">{{
                            text
                        }}
                    </v-list-item-title>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :class="{ expand: flat }"
        :color="color"
        :flat="flat"
        class="px-15"
        dark
    >
        <v-toolbar-title>
            <v-img :src="imgLogo" max-width="50px"/>
        </v-toolbar-title>
        <v-spacer/>
        <v-app-bar-nav-icon
            v-if="isXs"
            class="mr-4"
            @click.stop="drawer = !drawer"
        />
        <div v-else>
            <v-btn variant="text" @click="$vuetify.goTo('#hero')">
                <span class="mr-2">Home</span>
            </v-btn>
            <v-btn variant="text" @click="$vuetify.goTo('#features')">
                <span class="mr-2">Sobre</span>
            </v-btn>
            <v-btn variant="text" @click="$vuetify.goTo('#download')">
                <span class="mr-2">Download</span>
            </v-btn>
            <v-btn variant="text" @click="$vuetify.goTo('#pricing')">
                <span class="mr-2">Preços</span>
            </v-btn>
            <v-btn rounded variant="outlined" @click="$vuetify.goTo('#contact')">
                <span class="mr-2">Contate-nos</span>
            </v-btn>
        </div>
        {{flat}}
    </v-app-bar>

</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import imgLogo from "../../../images/logo.png"

const props = defineProps({
    color: String,
    flat: Boolean,
});

let drawer = ref(null)
let isXs = ref(false)
const items = [
    ["mdi-home-outline", "Home", "#hero"],
    ["mdi-information-outline", "Sobre", "#features"],
    ["mdi-download-box-outline", "Download", "#download"],
    ["mdi-currency-usd", "Precios", "#pricing"],
    ["mdi-email-outline", "Contacto", "#contact"],
];

function onResize() {
    isXs = window.innerWidth < 850;
}

watch(isXs, (value) => {
    if (!value) {
        if (drawer) {
            drawer = false;
        }
    }
})
onMounted(() => {
    onResize();
    window.addEventListener("resize", onResize, {passive: true});
});

</script>


<style scoped>

.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}
</style>
