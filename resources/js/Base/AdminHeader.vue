<script setup>
import {computed, ref} from "vue";
import {useDisplay} from 'vuetify';


import {useAdminDrawerStore} from '../../stores/adminDrawer';
import {useAuthLinksStore} from "../../stores/authLinks";
import Logo from "@/Components/Logo.vue";
import SettingsDropdown from "@/Components/SettingsDropdown.vue";

const adminDrawerStore = useAdminDrawerStore();
const authLinksStore = useAuthLinksStore();


const appName = 'iRepairSoft';
const links = authLinksStore.authLinks
const toggleDrawer = () => {
    adminDrawerStore.toggleDrawer();
};

const rail = computed(() => adminDrawerStore.rail)

function changeRail() {
    adminDrawerStore.changeDrawerRail();
}

const {mdAndUp} = useDisplay()
const layoutStyle = computed(() => {
    console.error('este es un mensaje: ', mdAndUp && rail)
    if (mdAndUp && rail) {
        return 'width: 260px !important';
    } else {
        return 'width: 0px !important';
    }
});
let loading = ref(false)


function getRoute(name) {
    // this.$inertia.route(this.$route(name)).url()
    return name;
}

function onClick() {
    loading = true
    alert("llega")
    setTimeout(() => {
        loading = false
        let loaded;
        loaded = true

    }, 2000)

}


</script>

<template>
    <v-app-bar class="bg-primary">
        <template v-slot:prepend>
            <div :style="layoutStyle" class="d-flex  align-center">
                <logo size="50"></logo>
                <p v-if="!rail" class="mr-2 text-h6 font-weight-bold">{{ appName }}</p>
            </div>

        </template>

        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-app-bar-nav-icon @click="changeRail"></v-app-bar-nav-icon>
        <v-menu :close-on-content-click="false"
                location="end"
                offset-y>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-magnify" v-bind="props"></v-btn>
            </template>

            <v-sheet class="elevation-10 rounded-md" style="width: 360px;">
                <div class="d-flex align-center justify-space-between px-5 pt-5">
                    <v-text-field
                        :loading="loading"
                        append-inner-icon="mdi-magnify"
                        color="primary"
                        density="compact"
                        hide-details
                        label="Search templates"
                        single-line
                        variant="outlined"
                        @click:append-inner="onClick"
                    ></v-text-field>
                </div>

                <div class="ps ps--active-y" style="height: 380px;">
                    <v-list
                        :lines="false"
                        density="compact"
                        lines="two"
                    >
                        <v-list-subheader>Enlaces de página rápida</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in links"
                            :key="i"
                            :prepend-icon="item.icon"
                            :subtitle="getRoute(item.route)"
                            :title="item.title"
                            :value="item"
                            color="primary"
                        >
                        </v-list-item>
                    </v-list>
                </div>
            </v-sheet>
        </v-menu>
        <v-spacer></v-spacer>

        <template v-slot:append>
            <settings-dropdown></settings-dropdown>
        </template>
    </v-app-bar>
</template>

