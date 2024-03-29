<script setup>
import {computed, ref} from 'vue';
import logo from '../../images/bg-logo-drawer.jpg'
//import logo from '../../images/logo.jpg'
import {useAdminDrawerStore} from '../../stores/adminDrawer';
import {useDisplay} from 'vuetify';
import {useAuthLinksStore} from "../../stores/authLinks";

import {router} from '@inertiajs/vue3'

const {mdAndUp} = useDisplay()

const adminDrawerStore = useAdminDrawerStore();

let drawer = computed({
    get: () => adminDrawerStore.adminDrawer,
    set: (value) => {
        // Realiza alguna lógica adicional antes de asignar el valor
        adminDrawerStore.adminDrawer = value;
    }
});

const rail = computed(() => adminDrawerStore.rail)

const group = ref(null)
const listNotAuthenticated = [
    {title: 'Login', icon: 'mdi-account-lock', route: "/login"},
    {title: 'Sign Up', icon: 'mdi-account-plus', route: "/register"},
];

const authLinksStore = useAuthLinksStore();
const links = authLinksStore.authLinks

function navigateTo(route) {
    router.get(route);
}

function logout() {
    axios.post(route('logout')).then(response => {
        window.location = '/';
    })
}

</script>

<template>

    <v-navigation-drawer
        v-model="drawer"
        :absolute="true"
        :permanent="mdAndUp"
        :rail="rail"
        :rail-width="75"
        class="position-fixed"
        expand-on-hover
        fixed
        style="box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;"

    >
        <perfect-scrollbar>
            <v-img min-width="250px" :src="logo" class='mt-n1'>
                <div class="fill-height d-flex flex-column justify-space-between">
                    <div class="py-7 px-1">
                        <v-avatar v-if="$page.props.auth !==null" size="45">
                            <v-img :alt="$page.props.auth.user.name" :src="$page.props.auth.user.profile_photo_url"
                                   contain
                            >
                            </v-img>
                        </v-avatar>
                    </div>


                </div>
            </v-img>

            <div class="d-flex align-center px-3"
                 style="background: rgba(0,0,0,.5);">
                <h5 v-if="$page.props.auth !==null" :class="{'text-truncate': rail }"
                    class="text-white font-weight-medium  text-truncate"
                    style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    {{ $page.props.auth.user.name }}
                </h5>
                <div class="ml-auto">
                    <v-btn color="white" icon variant="text" @click="logout">
                        <v-icon icon="mdi-power"></v-icon>
                        <v-tooltip
                            activator="parent"
                            location="top"
                        >
                            cerrar sesión
                        </v-tooltip>
                    </v-btn>
                </div>
            </div>

            <v-divider></v-divider>

            <v-list>
                <template v-if="$page.props.auth.user===null">
                    <v-divider></v-divider>
                    <v-list-subheader>Authentication</v-list-subheader>
                    <inertia-link v-for="item in listNotAuthenticated"
                                  :key="item.title"
                                  :href="item.route">
                        <v-list-item>
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item>
                    </inertia-link>
                </template>

                <v-list-subheader>Admin</v-list-subheader>

                <v-list-item
                    v-for="(item, i) in links" :key="i"
                    :active="route().current(item.route)"
                    :class="route().current(item.route)?'active bg-primary':''"
                    :dark="route().current(item.route)"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    class="text-decoration-none mr-1"
                    rounded="e-xl"
                    @click="navigateTo(route(item.route))"
                >

                </v-list-item>
            </v-list>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>

<style scoped>
.ps {
    height: calc(100vh - 64px);
}

</style>
