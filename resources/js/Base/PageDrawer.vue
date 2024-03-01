<script setup>
import {ref} from "vue";

import logo from '../../images/logo.jpg';
import {useDrawerStore} from "../../stores/drawer";

import {useLinksStore} from "../../stores/links";
import {router} from "@inertiajs/vue3";

const linksStore = useLinksStore();

const drawerStore = useDrawerStore();

const group = ref(null)
const authentication = [
    {title: 'Login', icon: 'mdi-account-lock', route: "/login"},
    {title: 'Sign Up', icon: 'mdi-account-plus', route: "/register"},
]

const logout = () => {
    router.post(route('logout'));
};

const redirect = dir => {
    router.get(route(dir))
    drawerStore.drawer = false;
}

</script>


<template>
    <v-navigation-drawer
        v-model="drawerStore.drawer"
        style="box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
        temporary>
        <v-img
            :aspect-ratio="1"
            :src="logo"
            contain
        >
            <template v-slot:placeholder>
                <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                >
                    <v-progress-circular
                        color="grey lighten-5"
                        indeterminate
                    ></v-progress-circular>
                </v-row>
            </template>
        </v-img>

        <v-divider></v-divider>

        <v-list
            v-model="group"
            color="primary"
            density="compact"
            nav>
            <v-list-subheader>
                Enlaces Útiles
            </v-list-subheader>

            <v-list-item
                v-for="item in linksStore.links" :key="item.id"
                :class="route().current(item.route)?'active bg-primary  text-white':''"
                :dark="route().current(item.route)"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.route"
                color="primary"
                @click="redirect(item.route)">

            </v-list-item>


            <template v-if="$page.props.auth===null">
                <v-list-subheader>Autenticación</v-list-subheader>
                <inertia-link v-for="item in authentication"
                              :key="item.title"
                              :href="item.route"
                              class="text-decoration-none">
                    <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.title"></v-list-item>
                </inertia-link>
            </template>

            <template v-if="$page.props.auth!==null">

                <v-list-subheader>
                    Autenticado
                </v-list-subheader>

                <v-list-item prepend-icon="mdi-view-dashboard-outline"
                             title="Dashboard"
                             value="Dashboard"
                             @click="redirect('dashboard')">
                </v-list-item>

            </template>

        </v-list>
        <template v-if="$page.props.auth!==null" v-slot:append>
            <v-list-item @click="logout">
                <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout"></v-list-item>
            </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<style>

</style>
