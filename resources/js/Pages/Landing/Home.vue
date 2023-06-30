<template>
    <page-layout title="Inicio">
        <section>
            <v-carousel cycle>
                <v-carousel-item v-for="item in slides" :key="item.id"
                                 :src="item.img"
                                 cover
                                 gradient="to top,rgb(5 11 31 / 48%), rgb(0 28 71 / 35%)"
                                 style="height: 65vh"
                >

                    <v-row align="center" class="fill-height ma-0" justify="center">
                        <v-responsive
                            class="d-flex align-center  fill-height"
                            style="height: 100%; width: 100%;"
                        >
                            <h1
                                id="frase1"
                                class="text-center text-white  white--text font-weight-bold text-h3"
                            >
                                {{ item.title }}
                            </h1>
                            <h1
                                id="frase2"
                                class="text-center text-primary font-weight-black text-h2 animate__animated animate__slideInLeft"
                            >
                                {{ item.message }}
                            </h1>
                        </v-responsive>
                    </v-row>

                </v-carousel-item>
            </v-carousel>
        </section>

        <v-container class="py-6 py-lg-12 text-center">
            <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">A better way to build your next <span
                class="primary--text">web project</span></h1>
            <h2 class="text-h6 text-sm-h5 secondary--text mt-4 w-full w-md-8-12 w-xl-half mx-auto">Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam
                iure amet.</h2>
            <div class="mt-4">
                <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" color="primary" x-large>Get started</v-btn>
                <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" x-large>Learn more</v-btn>
            </div>
        </v-container>
    </page-layout>
    Lorem ipsum dolor.
</template>

<script setup>
import {ref} from "vue";

import PageLayout from '@/Layouts/PageLayout.vue';
import img1 from '../../../images/bg/Imagen1.jpg'
import img2 from '../../../images/bg/Imagen2.jpg'
import img3 from '../../../images/bg/Imagen3.jpg'

const slides = ref([
    {img: img1, title: 'Lorem ipsum.', message: 'Lorem ipsum dolor.'},
    {img: img2, title: 'Lorem ipsum.', message: 'Lorem ipsum dolor.'},
    {
        img: img3, title: 'Lorem ipsum.', message: 'Lorem ipsum dolor.'
    }])

</script>

<style scoped>

</style>
