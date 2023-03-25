<template>
    <v-navigation-drawer
        v-model="localDrawer"
        :permanent="!$vuetify.breakpoint.smAndDown"
        :temporary="$vuetify.breakpoint.smAndDown"
        app
        clipped
        style="box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px">


        <v-img
            :aspect-ratio="1"
            :src="logo"
            :width="300"
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

        <v-list dense shaped>
            <v-list-item-group
                v-model="group"
                color="primary"
            >

                <template v-if="$page.props.user==null">

                    <v-divider></v-divider>
                    <v-subheader>Authentication</v-subheader>
                    <inertia-link v-for="item in items"
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

                <!-- Responsive Settings Options -->
                <template v-if="$page.props.user!==null" dense>

                    <inertia-link v-for="item in linksWithAuth" :key="item.id" :href="route(item.route)"
                                  class="text-decoration-none">
                        <v-list-item
                            :class="route().current(item.route)?'active primary  white--text':''"
                            :dark="route().current(item.route)"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </inertia-link>

                    <v-divider></v-divider>
                    <v-subheader>Settings Options</v-subheader>

                    <inertia-link :href="route('profile.show')">
                        <v-list-item
                            :class="route().current('profile.show')?'active primary  white--text':''"
                            :dark="route().current('profile.show')">
                            <v-list-item-icon>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title> Profile</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </inertia-link>
                    <inertia-link v-if="$page.props.jetstream.hasApiFeatures"
                                  :href="route('api-tokens.index')">
                        <v-list-item
                            :class="route().current('api-tokens.index')?'active primary  white--text':''"
                            :dark="route().current('api-tokens.index')"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-lan</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title> API Tokens</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </inertia-link>

                    <v-subheader>Authentication</v-subheader>

                    <v-list-item @click="logout">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list-item-group>


        </v-list>

    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import logo from '../../images/logo.jpg';

import JetApplicationMark from '@/Jetstream/ApplicationMark.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
import JetNavLink from '@/Jetstream/NavLink.vue'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue'

export default {
    name: "Drawer",
    components: {
        JetApplicationMark,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
    },
    data: () => ({
        dialog: false,
        group: null,
        logo: logo,
        opciones: [
            {title: "Notificaciones", icon: 'mdi-bell', route: ""},
            {title: "Seguidos", icon: 'mdi-account-group', route: ""},
            {title: "Favoritos", icon: 'mdi-heart', route: ""},
            {title: "Ubicación", icon: 'mdi-map-marker', route: ""},
            {title: "Ajustes", icon: 'mdi-cog', route: ""},
        ],
        items: [
            {title: 'Login', icon: 'mdi-account-lock', route: "/login"},
            {title: 'Sign Up', icon: 'mdi-account-plus', route: "/register"},
        ],
        businesses: [],
        right: null,
        notifications: false,
        sound: true,
        widgets: false,
        select: [
            {text: 'State 1'},
            {text: 'State 2'},
            {text: 'State 3'},
            {text: 'State 4'},
            {text: 'State 5'},
            {text: 'State 6'},
            {text: 'State 7'},
        ],
    }),
    created() {

    },
    watch: {
        group() {
            this.drawer ? this.setDrawer(false) : this.setDrawer(true);
        },
    },
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "links", "linksWithAuth"]),
        localDrawer: {
            get() {
                return this.drawer;
            },
            set(val) {
                this.setDrawer(val);
            }
        }
    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal"
        ]),

        switchToTeam(team) {
            this.$inertia.put(route('current-team.update'), {
                'team_id': team.id
            }, {
                preserveState: false
            })
        },

        logout() {
            axios.post(route('logout')).then(response => {
                window.location = '/';
            })
        },
    }
}
</script>

<style>

</style>
