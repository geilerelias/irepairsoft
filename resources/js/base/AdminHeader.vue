<template>
    <div>
        <v-app-bar :class="$vuetify.breakpoint.mdAndUp?'px-20':''"
                   app
                   clipped-left
                   color="primary">
            <v-btn v-if="!route().current('home')" class="mr-1 " fab light text @click="back">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>


            <logo></logo>

            <v-spacer></v-spacer>


            <!-- Settings Dropdown -->
            <settings-dropdown></settings-dropdown>


            <v-app-bar-nav-icon
                class="hidden-md-and-up white--text"
                @click="drawer?setDrawer(false):setDrawer(true)"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-btn
            v-show="fab"
            v-scroll="onScroll"
            bottom
            color="primary"
            dark
            fab
            fixed
            right
            @click="toTop"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

import JetApplicationMark from '@/Jetstream/ApplicationMark.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
import JetNavLink from '@/Jetstream/NavLink.vue'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue'


import logo from '@/Components/Logo.vue'
import SettingsDropdown from "@/Components/SettingsDropdown.vue";

export default {

    name: "Header",
    components: {
        SettingsDropdown,
        JetApplicationMark,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        logo
    },
    props: {
        seeker: {
            type: Boolean,
            default: true
        },
        app: {
            type: Boolean,
            default: false
        },
    },
    created() {

    },
    data: () => ({

        fav: true,
        menu: false,
        dialog: false,
        message: false,
        hints: true,
        fab: false,
        logo: logo,
        department: [],
        businesses: [],
        items: [
            {title: 'Login', icon: 'mdi-account-lock', route: "/login"},
            {title: 'Sign Up', icon: 'mdi-account-plus', route: "/register"},
        ],
        opciones: [
            {title: "Notificaciones", icon: 'mdi-bell', route: ""},
            {title: "Seguidos", icon: 'mdi-account-group', route: ""},
            {title: "Favoritos", icon: 'mdi-heart', route: ""},
            {title: "Ubicación", icon: 'mdi-map-marker', route: ""},
            {title: "Ajustes", icon: 'mdi-cog', route: ""},
        ],
    }),
    computed: {
        ...mapState(["drawer", "search", "page", "color", "flat", "links", "idBusiness"]),
        localSearch: {
            get() {
                return this.search;
            },
            set(val) {
                this.setSearch(val);
            }
        },
    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setSearch",
            "setPage",
            "setFlat",
            "setIdBusiness"
        ]),
        toTop() {
            this.$vuetify.goTo(0);
        }
        ,
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            if (top > 50) {
                this.fab = true;
                this.setFlat(false);
            } else {
                this.fab = false;
                this.setFlat(true);
            }
        }
        ,
        switchToTeam(team) {
            this.$inertia.put(route('current-team.update'), {
                'team_id': team.id
            }, {
                preserveState: false
            })
        },
        logout() {
            axios.post(route('logout').url())
                .then(response => {
                    window.location = '/';
                })
        },
        back() {
            window.history.back();
            //return document.referrer;
        },
        searching() {
            if (!this.route().current('marketplace')) {
                this.$inertia.get('/marketplace');
            }
        }
    }
}
</script>

<style>
.active {
    border-bottom: solid;
}

.px-20 {
    padding-left: 20px !important;
    padding-right: 20px !important;
}
</style>

