<script setup>
import {useDrawerStore} from "../../stores/drawer";
import {useLinksStore} from "../../stores/links";
import {useDisplay, useTheme} from 'vuetify'
import Logo from "../Components/Logo.vue";
import logo from '../../images/logo-transparent.png';

import SettingsDropdown from "../Components/SettingsDropdown.vue";
import {computed} from "vue";


const theme = useTheme()


const drawerStore = useDrawerStore();
const linksStore = useLinksStore();

const {xsOnly, mobile, xs, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

const changeDrawer = (value) => {
    drawerStore.change(!value)
}

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
});

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

                    <v-spacer v-if="mobile"></v-spacer>

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
                            class="d-flex d-none d-sm-flex justify-start align-center"
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
                                        9:00am - 6:00pm
                                    </a>

                                    <a class="mx-2  text-decoration-none text-white" href="tel:+57 012 3456789">
                                        <v-icon class="mt-n1" dark size="16">
                                            mdi-phone-outline
                                        </v-icon>
                                        +57 311 650 0061
                                    </a>
                                    <a class="ml-2 text-decoration-none  text-white"
                                       href="mailto:contacto@irepairsoft.com">
                                        <v-icon class="mt-n1 ml-1" dark size="18">
                                            mdi-email-outline
                                        </v-icon>
                                        contacto@irepairsoft.com
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
                        :color="isDarkTheme?'secondary':'white'"
                        :height="mdAndUp ? 88 : 68">
                        <v-container
                            class="d-flex flex-md-row  justify-center align-center justify-md-start  px-sm-0 px-md-10"
                        >
                            <settings-dropdown v-if="$page.props.user!==null"></settings-dropdown>

                            <v-btn icon @click="toggleTheme">
                                <v-icon
                                    :icon="$vuetify.theme.name === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
                            </v-btn>
                            <inertia-link
                                v-for="item in linksStore.links"
                                :key="item.id"
                                :href="route(item.route)"
                                class="text-decoration-none"

                            >
                                <v-btn

                                    :class="route().current(item.route)
                                    ? 'active text-primary font-weight-black'
                                    : isDarkTheme?'text-white':'text-secondary'"
                                    class="overline font-weight-bold"
                                    variant="text"
                                >
                                    {{ item.title }}
                                </v-btn>
                            </inertia-link>


                        </v-container>
                    </v-toolbar>
                </v-fade-transition>
            </v-col>
            <v-col v-if="mdAndUp"
                   :class="!isDarkTheme?'bg-primary':'bg-white'"
                   :style="mdAndDown
                        ? 'width: 170px;max-width: 170px'
                        : 'width: 260px; max-width: 260px'
                "
                   class="d-flex justify-center align-center"
                   style="height: 136px;max-height: 136px;"
            >

                <logo :circle="false" :dark="isDarkTheme" :size="120" :tile="isDarkTheme"
                      :transparent="!!isDarkTheme"></logo>

                <div
                    v-if="lgAndUp"
                    :class="isDarkTheme?'triangle-shapes-dark':'triangle-shapes'"
                ></div>
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
    border-left: 0px solid rgb(var(--v-theme-primary));
    border-right: 50px solid rgb(var(--v-theme-primary));
    border-bottom: 136px solid transparent;
    z-index: 1;
    right: 259px;
}

.triangle-shapes-dark {
    position: absolute;
    height: 0px;
    width: 0px;
    border-top: 0px solid white;
    border-left: 0px solid white;
    border-right: 50px solid white;
    border-bottom: 136px solid transparent;
    z-index: 1;
    right: 259px;
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


.bg-gradient {
    background: linear-gradient(to bottom, #10578b, #2ba9e1);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

custom-transition-enter-active, .custom-transition-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.custom-transition-enter, .custom-transition-leave-to {
    opacity: 0;
    transform: scale(0);
}

.custom-transition-enter-to, .custom-transition-leave {
    opacity: 1;
    transform: scale(1);
}


.custom-btn {
}

.custom-btn span {
    white-space: nowrap;
    transition: opacity 0.3s ease-in-out;
}

.custom-btn:hover span {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
