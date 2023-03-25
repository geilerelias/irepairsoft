<template>
    <page-layout title="Inicio">
        <section>
            <v-carousel>
                <v-carousel-item
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-carousel-item>

                <v-carousel-item
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                ></v-carousel-item>

                <v-carousel-item
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                ></v-carousel-item>
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
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";</script>

<style scoped>

</style>
