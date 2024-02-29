<script setup>
import {useDrawerStore} from "../../stores/drawer";
import {useLinksStore} from "../../stores/links";
import {useDisplay} from 'vuetify'
import Logo from "../Components/Logo.vue";
import logo from '../../images/logo-transparent.png';

import SettingsDropdown from "../Components/SettingsDropdown.vue";


const drawerStore = useDrawerStore();
const linksStore = useLinksStore();

const {xsOnly, xs, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

const changeDrawer = (value) => {
    drawerStore.change(!value)
}

const back = () => {
    window.history.back();
}

</script>

<template>
    <v-app-bar :height="mdAndUp? 136: xs? 60: 128"
               app
               class="ma-0 pa-0 "
    >
        <v-row no-gutters>
            <v-col v-if="mdAndUp"
                   :style="mdAndDown
                        ? 'width: 170px;max-width: 170px'
                        : 'width: 260px; max-width: 260px'
                "
                   class="bg-primary d-flex justify-center align-center"
                   style="height: 136px;max-height: 136px;"
            >

                <logo :circle="false" :size="120" :transparent="false"></logo>

                <div
                    v-if="lgAndUp"
                    class="triangle-shapes"
                ></div>
            </v-col>

            <v-col>
                <v-toolbar
                    :color="mdAndUp ? 'primary-darken-1' : 'primary'"
                    :height="mdAndUp ? 48 : xs?60:68"
                    class="px-md-10 d-flex justify-center"
                    density="default"
                >

                    <div v-if="smAndDown">
                        <v-container class="d-flex">
                            <v-btn v-if="!route().current('home')" class="mr-1 " icon light text @click="back">
                                <v-icon>mdi-arrow-left</v-icon>
                            </v-btn>
                            <logo :circle="false" :size="mdAndUp ? 150 : 50"></logo>
                        </v-container>
                    </div>

                    <v-spacer></v-spacer>

                    <v-spacer v-if="xsOnly"></v-spacer>

                    <v-btn
                        v-if="xs"
                        color="white"
                        height="40"
                        min-width="40"
                        width="40"
                        @click="changeDrawer(drawerStore.drawer)"
                    >
                        <v-icon dark size="40">mdi-menu</v-icon>
                    </v-btn>

                    <v-fade-transition>
                        <v-container
                            v-if="smAndUp"
                            class="d-flex d-none d-sm-flex justify-end align-center"
                        >
                            <div class="align-self-center d-md-flex align-center fill-height">
                                <div
                                    class="white-text d-flex text-right  align-center"
                                    style="font-size: 16px;"
                                >
                                    <a class="d-none d-md-flex flex-row align-center mx-2 text-decoration-none">
                                        <v-icon class="mt-n1" dark size="17">
                                            mdi-clock-outline
                                        </v-icon>
                                        8:00am - 6:00pm
                                    </a>

                                    <a class="mx-2  text-decoration-none text-white" href="tel:+57 012 3456789">
                                        <v-icon class="mt-n1" dark size="16">
                                            mdi-phone-outline
                                        </v-icon>
                                        +57 012 3456789
                                    </a>
                                    <a class="ml-2 text-decoration-none  text-white" href="mailto:contacto@irepairsoft.xyz">
                                        <v-icon class="mt-n1 ml-1" dark size="18">
                                            mdi-email-outline
                                        </v-icon>
                                        contacto@irepairsoft.xyz
                                    </a>
                                </div>
                            </div>
                        </v-container>
                    </v-fade-transition>
                    <!--</editor-fold>-->
                </v-toolbar>

                <v-fade-transition>
                    <v-toolbar
                        v-if="!xs"
                        :height="mdAndUp ? 88 : 68"
                        color="white">
                        <v-container
                            class="d-flex flex-md-row  justify-center align-center justify-md-end  px-sm-0 px-md-10"
                        >
                            <inertia-link
                                v-for="item in linksStore.links"
                                :key="item.id"
                                :href="route(item.route)"
                                class="text-decoration-none"

                            >
                                <v-btn

                                    :class="route().current(item.route)
                                    ? 'active text-primary font-weight-black'
                                    : 'text-secondary'"
                                    class="overline font-weight-bold"
                                    variant="text"
                                >
                                    {{ item.title }}
                                </v-btn>
                            </inertia-link>

                            <settings-dropdown v-if="$page.props.user!==null"></settings-dropdown>
                        </v-container>
                    </v-toolbar>
                </v-fade-transition>
            </v-col>
        </v-row>

    </v-app-bar>
</template>


<style>

.triangle-shapes {

    position: absolute;
    height: 0px;
    width: 0px;
    border-top: 0px solid rgb(var(--v-theme-primary));
    border-left: 100px solid rgb(var(--v-theme-primary));
    border-right: 0px solid transparent;
    border-bottom: 136px solid transparent;
    z-index: 1;
    left: 259px;
}

.px-20 {
    padding-left: 20px !important;
    padding-right: 20px !important;
}


.active {
    position: relative;
    outline: 1px solid;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.active:hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
}

</style>
