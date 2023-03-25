<script setup>
import Logo from "@/Components/Logo.vue";
import {useDisplay} from 'vuetify'


defineProps({
    banner: {
        type: Boolean,
        default: true
    },
    title: String,
});

const {smAndDown} = useDisplay()


</script>

<template>
    <v-app>
        <inertia-head>
            <title>{{title}}</title>
        </inertia-head>

        <v-row class="max-h-screen" no-gutters>
            <v-col v-if="banner"
                   :order="smAndDown?'2':'1'"
                   class=" d-flex flex-column-reverse align-center justify-center  my-0 py-0 align-center"
                   cols="12"
                   lg="7"
                   md="6"
                   style="background: radial-gradient( #65c020,#7dd439);"
            >
                <v-container>
                    <v-row class="sm:justify-center items-center">
                        <v-col class="d-flex flex-column justify-center align-center items-center" lg="8" md="10"
                               sm="12">
                            <!--                                <v-img :src="logoFinal" contain height="50vh"></v-img>-->
                            <logo :size="200" class="mb-6"></logo>
                            <v-sheet class="bg-transparent mx-auto w-75"
                                     flat>
                                <h1 class="font-weight-bold text-white text-h3 text-lg-h2  text-truncate">
                                    iRepairSoft
                                </h1>
                                <h6
                                    class="subtitle-1 mt-4 text-white  font-weight-regular text-justify">
                                    Es el Sistema Web para la Gestión del Servicio de Reparaciones de Dispositivos
                                    mobiles que surge como una solución de software desarrollado para agilizar
                                    los procesos inherentes a los establecimientos de reparación.
                                </h6>

                                <inertia-link class="text-decoration-none" href="/about-us">
                                    <v-btn
                                        class="mt-4 text-capitalize "
                                        color="white"
                                        dark
                                        depressed
                                        size="x-large"
                                        variant="outlined"
                                    >
                                        Saber más
                                    </v-btn>
                                </inertia-link>

                            </v-sheet>

                        </v-col>
                    </v-row>
                </v-container>

            </v-col>
            <v-col :order="smAndDown?'1':'2'"
                   class="d-flex align-center"
                   cols="12"
                   lg="4"
                   md="6"
            >
                <v-container>
                    <slot></slot>
                </v-container>
            </v-col>
        </v-row>
    </v-app>
</template>


<style>

.v-field--variant-outlined .v-field__outline__notch {
    flex: none;
    position: relative;
    border-width: 0px;
}
</style>
