<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from '../../../images/bg/Imagen2.jpg'

const breadcrumbs = [
    {
        text: 'Inicio',
        disabled: false,
        href: '/'
    },

    {
        text: 'Nosotros',
        disabled: true,
        href: '/contact-us'
    }
];
</script>

<template>
    <page-layout>
        <section>
            <v-row class="no-gutters">
                <v-col class="col col-12">
                    <section>
                        <v-img
                            :src="bg"
                            color="#45516b"
                            cover
                            gradient="to top, rgb(14 26 17 / 80%), rgb(194 225 201 / 80%)"
                            max-width="100%"
                            style="height: 250px; max-width: 100%;"
                        >
                            <v-row
                                class="ma-0 fill-height text-center d-flex align-center justify-center"
                            >
                                <v-col class="col-12">
                                    <h1
                                        class="text-h3 font-weight-500 mb-2 text-white animate__animated animate__zoomIn"
                                    >
                                        Nosotros
                                    </h1>
                                    <v-responsive
                                        class="secondary mx-auto mb-6 base-divider--dense"
                                        dense
                                        style="max-width: 28px;"
                                    >
                                        <div class="v-responsive__content">
                                            <v-divider></v-divider>
                                        </div>
                                    </v-responsive>
                                    <v-breadcrumbs :items="breadcrumbs"
                                                   color="white"
                                                   class="justify-center pa-0 "
                                                    >
                                        <template v-slot:item="{ item }">
                                            <inertia-link :href="item.href">
                                                <v-breadcrumbs-item :disabled="item.disabled">
                                                    <div v-text="item.text.toUpperCase()">
                                                    </div>
                                                </v-breadcrumbs-item>
                                            </inertia-link>
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
                                ¿QUIENES SOMOS?
                            </h1>
                            <v-responsive class=" rounded-lg primary mr-auto mb-6" style="max-width: 100px;">
                                <v-divider class="pb-1 rounded-lg" light/>
                            </v-responsive>

                            <p class="base-body text-body-1  grey--text text--darken-1  mb-10 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi culpa deleniti
                                dolorum nesciunt, odio officia perspiciatis praesentium quae quam, quasi quod sint
                                suscipit tempora totam veritatis! Ex, repellendus.
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            style="background-color: rgb(218, 218, 218);"
        >
            <v-row class="py-5 my-0">
                <v-col class="col">
                    <v-container class="container">
                        <v-row
                            class="d-flex justify-content-around justify-center "
                        >
                            <v-col cols="12" md="6" lg="5" >
                                <v-card
                                    class="mr-1 fill-height animate__animated animate__bounceInLeft"
                                    tile
                                >
                                    <v-card-title>
                                        <h4
                                            class="d-flex justify-center bg-secondary pt-2 pb-2 fill-width"
                                            style="width: 100%"
                                        >
                                            Misión
                                        </h4>
                                    </v-card-title>

                                    <v-card-text>
                                        <p
                                            class="mx-2 my-3 text-subtitle-1 text-justify"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor
                                            dolorem eaque, esse, exercitationem impedit iste laboriosam maxime
                                            necessitatibus nemo quia quibusdam quisquam sit tempora tempore. Animi
                                            architecto illo impedit!
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6" lg="5" class="mt-4 mt-md-0">
                                <v-card
                                    class="mr-1 fill-height  animate__animated animate__bounceInRight"
                                >
                                    <v-card-title >
                                        <h4
                                            class="text-white d-flex justify-center bg-primary pt-2 pb-2  fill-width"
                                            style="width: 100%"
                                        >
                                            Visión
                                        </h4>
                                    </v-card-title>

                                    <v-card-text>
                                        <p
                                            class="mx-2 my-3 text-subtitle-1 text-justify"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem enim
                                            eveniet facilis, fugit id illo labore maxime, nobis quae quam quibusdam
                                            quidem quisquam quo sunt veritatis voluptatibus. Odio, porro.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </section>
    </page-layout>
</template>
