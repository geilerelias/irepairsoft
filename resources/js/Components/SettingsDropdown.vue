<template>
    <!-- Settings Dropdown -->

    <div v-if="$page.props.auth.user!==null" class="text-center hidden-xs-only">
        <v-menu
            :close-on-content-click="false"
            offset-y
        >
            <template v-slot:activator="{ props }">
                <v-btn v-if="$page.props.jetstream.managesProfilePhotos"
                       dark
                       icon
                       size="large"
                       v-bind="props"
                >
                    <v-avatar size="50">
                        <v-img :alt="$page.props.auth.user.name" :src="$page.props.auth.user.profile_photo_url"
                               contain
                        >
                        </v-img>
                    </v-avatar>
                </v-btn>
            </template>

            <v-card class="pa-5">
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend v-if="$page.props.jetstream.managesProfilePhotos">
                            <v-avatar color="grey-lighten-1">
                                <img
                                    :alt="$page.props.auth.user.name"
                                    :src="$page.props.auth.user.profile_photo_url"
                                >
                            </v-avatar>
                        </template>

                        <template v-slot:subtitle="{ subtitle }">
                            <v-list-item-title>{{ $page.props.auth.user.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ $page.props.auth.user.email }}</v-list-item-subtitle>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>


                <!-- Responsive Settings Options -->
                <v-list v-if="$page.props.auth.user!==null" dense rounded>
                    <v-list-subheader>Administración</v-list-subheader>

                    <inertia-link :href="route('dashboard')">
                        <v-list-item
                            :class="route().current('dashboard')?'active primary  white--text':''"
                            :dark="route().current('dashboard')">
                            <template v-slot:prepend>
                                <v-icon>mdi-view-dashboard-outline</v-icon>
                            </template>
                            <template v-slot:subtitle="{ subtitle }">
                                <v-list-item-title> Dashboard</v-list-item-title>
                            </template>
                        </v-list-item>
                    </inertia-link>
                </v-list>

                <v-list v-if="$page.props.auth.user!==null" dense rounded>
                    <v-list-subheader>Settings Options</v-list-subheader>

                    <inertia-link :href="route('profile.show')">
                        <v-list-item
                            :class="route().current('profile.show')?'active primary  white--text':''"
                            :dark="route().current('profile.show')">
                            <template v-slot:prepend>
                                <v-icon>mdi-account-circle</v-icon>
                            </template>
                            <template v-slot:subtitle="{ subtitle }">
                                <v-list-item-title> Profile</v-list-item-title>
                            </template>
                        </v-list-item>
                    </inertia-link>
                    <inertia-link v-if="$page.props.jetstream.hasApiFeatures"
                                  :href="route('api-tokens.index')">
                        <v-list-item
                            :class="route().current('api-tokens.index')?'active primary  white--text':''"
                            :dark="route().current('api-tokens.index')"
                        >
                            <template v-slot:prepend>
                                <v-icon>mdi-lan</v-icon>
                            </template>
                            <template v-slot:subtitle="{ subtitle }">
                                <v-list-item-title> API Tokens</v-list-item-title>
                            </template>
                        </v-list-item>
                    </inertia-link>

                </v-list>

                <v-list-subheader>Authentication</v-list-subheader>
                <v-list dense rounded>
                    <v-list-item @click="logout">
                        <template v-slot:prepend>
                            <v-icon>mdi-logout</v-icon>
                        </template>
                        <template v-slot:subtitle="{ subtitle }">
                            <v-list-item-title>Logout</v-list-item-title>
                        </template>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </div>

<!--Usuario no autenticado-->
    <div v-if="$page.props.auth.user==null" class="text-center">
        <v-menu
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
        >
            <template v-slot:activator="{ props }">
                <v-btn class="ml-2 hidden-xs-only white--text"
                       icon
                       v-bind="props"
                >
                    <v-icon>
                        mdi-dots-vertical
                    </v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <template v-if="$page.props.auth.user==null">
                        <v-list-subheader>Authentication</v-list-subheader>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            :href="item.route"
                        >
                            <template v-slot:prepend>
                                <v-icon>{{ item.icon }}</v-icon>
                            </template>

                            <template v-slot:subtitle="{ subtitle }">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </template>
                        </v-list-item>

                    </template>
                </v-list>
            </v-card>
        </v-menu>
    </div>

</template>

<script setup>

import {router} from "@inertiajs/vue3";
import {ref} from "vue";


const menu = ref(false)

const items = [
    {title: 'Login', icon: 'mdi-account-lock', route: '/login'},
    {title: 'Sign Up', icon: 'mdi-account-plus', route: '/register'}
]
const logout = () => {
    router.post(route('logout'));
};

</script>

<style scoped>

</style>
