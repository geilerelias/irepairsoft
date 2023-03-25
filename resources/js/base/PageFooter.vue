<script setup>
import Logo from "../Components/Logo.vue";
import {useLinksStore} from "../../stores/links";

const linksStore = useLinksStore();

</script>

<template>
    <v-footer  elevation="24">
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" md="4">
                    <logo></logo>
                    <div>
                        <a class="d-flex align-center text-decoration-none mr-2">
                                <span
                                    class="font-weight-black text-h5 text-truncate">
                                    iRepairSoft
                                </span>
                        </a>
                    </div>
                    <div class="text-body-1 mt-4 secondary--text text--lighten-2 text-justify">
                        El Sistema Web para la Gestión del Servicio de Reparaciones de Dispositivos
                        mobiles surge como una solución de software desarrollado para agilizar
                        los procesos inherentes a los establecimientos de reparación.
                    </div>
                </v-col>
                <v-col cols="12" md="8">
                    <div class="text-center text-md-right">
                        <v-btn class="mx-2" color="secondary" density="comfortable" icon>
                            <v-icon>
                                mdi-twitter
                            </v-icon>
                        </v-btn>
                        <v-btn class="mx-2" color="secondary" density="comfortable" icon>
                            <v-icon>
                                mdi-instagram
                            </v-icon>
                        </v-btn>
                    </div>
                    <div class="text-center text-md-right mt-4">
                        <inertia-link
                            v-for="item in linksStore.links"
                            :key="item.id"
                            :href="route(item.route)"
                            class="font-weight-bold text-decoration-none d-inline-block text-truncate text-h6 ml-2"
                        >
                            <v-btn
                                :class="
                                route().current(item.route)
                                    ? 'text-primary font-weight-black'
                                    : 'text-secondary'
                            "
                                variant="text"
                                class="mx-2"
                                rounded="xl"
                            >
                                {{ item.title }}
                            </v-btn>
                        </inertia-link>
                    </div>
                </v-col>
            </v-row>
            <v-divider class="my-4"/>
            <div class="text-center body-2  secondary--text text--lighten-2">

                <span class="font-weight-bold">iRepairSoft</span> 2020 - {{ new Date().getFullYear() }} © Todos los derechos reservados
            </div>
        </v-container>
    </v-footer>
</template>

<style scoped>

</style>
