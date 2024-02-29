<script setup>
import {computed, ref} from 'vue';
import logo from '../../images/bg-logo-drawer.jpg'
//import logo from '../../images/logo.jpg'


import {useAdminDrawerStore} from '../../stores/adminDrawer';
import {useDisplay} from 'vuetify';
import {useAuthLinksStore} from "../../stores/authLinks";

const breakpoint = useDisplay();

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

function logout() {
    axios.post(route('logout')).then(response => {
        window.location = '/';
    })
}

</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        expand-on-hover
        style="box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
    >
        <v-img class='mt-n1' :src="logo" min-width="260">
            <div class="py-7 px-1">
                <v-avatar size="45">
                    <v-img :alt="$page.props.auth.user.name" :src="$page.props.auth.user.profile_photo_url"
                           contain
                    >
                    </v-img>
                </v-avatar>
            </div>
            <div class="d-flex align-center px-3"
                 style="background: rgba(0,0,0,.5);">
                <h5 :class="{'text-truncate': rail }" class="text-white font-weight-medium ">
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
        </v-img>
        <v-divider></v-divider>
        <v-list dense shaped>
            <v-list-item-group
                v-model="group"
                color="primary"
            >
                <template v-if="$page.props.user===null">

                    <v-divider></v-divider>
                    <v-subheader>Authentication</v-subheader>
                    <inertia-link v-for="item in listNotAuthenticated"
                                  :key="item.title"
                                  :href="item.route">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </inertia-link>
                </template>

                <v-list-subheader>Admin</v-list-subheader>
                <v-list-item
                    v-for="(item, i) in links"
                    :key="i"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    :value="item"
                    color="primary"
                >
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.background-image {
    width: 100%;
    height: 300px; /* Establece el alto deseado */
    background-size: cover;
    background-position: center;
}
</style>
