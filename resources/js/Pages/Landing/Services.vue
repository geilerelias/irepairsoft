<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from '../../../images/bg/Imagen1.jpg'
import img1 from '../../../images/bg/Imagen1.jpg'
import img2 from '../../../images/bg/Imagen2.jpg'
import img3 from '../../../images/bg/Imagen3.jpg'
import LoadingComponent from "@/Components/LoadingComponent.vue";

const breadcrumbs = [
    {
        text: 'Inicio',
        disabled: false,
        href: '/'
    },

    {
        text: 'Servicios',
        disabled: true,
        href: '/services'
    }
]
const services = [
    {
        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img1
    }, {
        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img2
    }, {

        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img3
    }, {
        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img1
    }, {
        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img2
    }, {

        title: 'Titulo del servicio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum explicabo quas.',
        src: img3
    },
]
</script>

<template>
    <page-layout>
        <section>
            <v-row no-gutters>
                <v-col cols="12">
                    <section>
                        <v-img
                            :src="bg"
                            color="#45516b"
                            cover
                            gradient="to top,rgb(5 11 31 / 48%), rgb(0 28 71 / 35%)"
                            max-width="100%"
                            style="height: 250px; max-width: 100%;"
                        >
                            <v-row
                                class="ma-0 fill-height text-center d-flex align-center justify-center"
                            >
                                <v-col class="col-12">
                                    <h1
                                        class="text-h3 font-weight-500 mb-2  text-white animate__animated animate__zoomIn"
                                    >
                                        Servicios
                                    </h1>

                                    <v-responsive
                                        class="bg-white mx-auto mb-6 base-divider--dense"
                                        dense
                                        style="max-width: 28px;"
                                    >
                                        <div class="v-responsive__content">
                                            <v-divider></v-divider>
                                        </div>
                                    </v-responsive>
                                    <v-breadcrumbs :items="breadcrumbs"
                                                   class="justify-center pa-0 "
                                                   color="white"
                                    >
                                        <template v-slot:item="{ item }">
                                            <inertia-link :href="item.href">
                                                <v-breadcrumbs-item :disabled="item.disabled">
                                                    <div v-text="item.text.toUpperCase()">
                                                    </div>
                                                </v-breadcrumbs-item>
                                            </inertia-link>
                                        </template>
                                        <template v-slot:divider>
                                            <span class="text-white">/</span>
                                        </template>
                                    </v-breadcrumbs>
                                </v-col>
                            </v-row>
                        </v-img>
                    </section>
                </v-col>
            </v-row>
        </section>

        <section>
            <v-container>
                <v-row class="px-sm-12">
                    <v-col class="col-12">
                        <div class="text-left my-12">
                            <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-left">
                                NUESTROS SERVICIOS
                            </h1>
                            <v-responsive class=" rounded-lg bg-primary mr-auto mb-6" style="max-width: 100px;">
                                <v-divider class="pb-1 rounded-lg" light/>
                            </v-responsive>

                            <div class="pa-4 mt-6 ">
                                <v-row>
                                    <v-col v-for="item in services" :key="item.id" cols="12" lg="4" md="6">
                                        <div class="d-flex align-center">
                                            <div class="mr-2">
                                                <v-avatar class="elevation-4" size="144">
                                                    <v-avatar class="" size="140">
                                                        <v-img :src="item.src" cover>
                                                            <template v-slot:placeholder>
                                                                <v-row
                                                                    align="center"
                                                                    class="fill-height ma-0"
                                                                    justify="center"
                                                                >
                                                                    <loading-component/>
                                                                </v-row>
                                                            </template>
                                                        </v-img>
                                                    </v-avatar>
                                                </v-avatar>
                                            </div>
                                            <div>
                                                <div class="text-body-1 font-weight-black">{{ item.title }}</div>
                                                <div class="text-subtitle-1 text-md-justify text-justify ">
                                                    {{ item.description }}
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </page-layout>
</template>

<style scoped>

</style>
