<script setup>
import {reactive, ref} from "vue";
import {useDisplay} from 'vuetify'

import PageLayout from "@/Layouts/PageLayout.vue";
import SpinnerComponent from "@/Components/SpinnerComponent.vue";
import bg from '../../../images/bg/Contact-us.jpg';
import bgContact from '../../../images/img-horario.jpg';

import {useVuelidate} from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'

const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
}


const {xs, sm, smAndUp} = useDisplay()
const state = reactive({
    ...initialState,
})

const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

const rules = {
    name: {required},
    email: {required, email},
    select: {required},
    items: {required},
    checkbox: {required},
}

const v$ = useVuelidate(rules, state)

function clear() {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
    }
}


const breadcrumbs = [
    {
        text: 'Inicio',
        disabled: false,
        href: '/'
    },

    {
        text: 'Contacto',
        disabled: true,
        href: '/contact-us'
    }
];
const mail = {
    name: "",
    email: "",
    subject: "",
    content: ""
};
const overlay = ref(false);


const enviar = (mail) => {

}
</script>

<template>
    <page-layout>
        <section>
            <v-row class="no-gutters">
                <v-col>
                    <section>
                        <v-img
                            :src="bg"
                            color="#45516b"
                            cover
                            gradient="to top,rgb(5 11 31 / 48%), rgb(0 28 71 / 35%)"
                            max-width="100%"
                            style="height: 250px; max-width: 100%;"
                        >
                            <v-row class="ma-0 fill-height text-center d-flex align-center justify-center">
                                <v-col class="col-12">
                                    <h1 class="text-h3 font-weight-500 mb-2  text-white animate__animated animate__zoomIn">
                                        Contacto
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

        <v-sheet class="py-md-15 py-8" light style="padding: 56px 0px;">
            <v-container class="container">

                <div
                    class="text-h4 font-weight-bold text-dark text-primary"
                    data-aos="fade-up"
                    data-aos-delay="200" data-aos-duration="1000">
                                            <span class="  font-weight-light">
                                                MANTENTE EN
                                            </span>
                    <br>
                    <span class="ml-16  text-secondary font-weight-bold font-weight-black">
                                                CONTACTO CON NOSOTROS
                                            </span>
                </div>
                <v-responsive class=" rounded-lg bg-primary mr-auto mb-6"
                              style="max-width: 100px;">
                    <v-divider class="pb-1 rounded-lg" light/>
                </v-responsive>

                <v-row class="justify-space-between">
                    <v-col cols="12" md="5">
                        <div>

                            <div>
                                <div class="pt-2 mb-0 d-flex">
                                    <div class="d-inline-flex mb-3 align-self-start">
                                        <v-avatar class="grey lighten-2" size="72">
                                            <v-icon color="secondary " size="36">mdi-map-marker</v-icon>
                                        </v-avatar>
                                    </div>
                                    <div class="d-flex justify-center align-center">
                                        <div class="d-inline ml-3">
                                            <h4 class="text-left text-h6  mb-1 secondary--text">Visítanos</h4>
                                            <p class="text-body-1  grey--text text--darken-1 text-left mb-0">
                                                local 6 esquina, Cl. 16b #11-123.
                                                <br>Valledupar, Cesar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <v-divider class="my-2"></v-divider>
                                <div class="pt-2 mb-0 d-flex">
                                    <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                        <!---->
                                        <v-avatar class="grey lighten-2" size="72">
                                            <v-icon color="secondary " size="36">mdi-cellphone</v-icon>
                                        </v-avatar>
                                    </div>

                                    <div class="d-flex flex-column justify-center align-center">
                                        <div class="d-inline ml-3">
                                            <h4 class="text-left text-h6  mb-1 text-secondary">Llámanos</h4>
                                            <a class="text-decoration-none " href="tel:+57 012 3456789">
                                                +57 311 650 0061
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <hr aria-orientation="horizontal" class="my-2 v-divider theme--light" role="separator"/>
                                <div class="pt-2 mb-0 d-flex align-center">
                                    <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                        <v-avatar class="grey lighten-2" size="72">
                                            <v-icon color="secondary " size="36">mdi-email</v-icon>
                                        </v-avatar>
                                    </div>
                                    <div class="d-flex flex-column justify-center  align-center">
                                        <div class="d-inline ml-3">
                                            <h4 class="text-left text-h6  mb-1 text-secondary">Escríbenos</h4>
                                            <a class="text-decoration-none"
                                               href="mailto:contacto@irepairsoft.com">
                                                contacto@irepairsoft.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>

                    <v-col class="" cols="12" md="7">
                        <v-card class="map-responsive" outlined>
                            <iframe
                                allowfullscreen=""
                                height="400"
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.365594429328!2d-73.25063998553398!3d10.471818467606363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9b76a4787e5%3A0x3ff856c3ae1d2ce9!2siRepair!5e0!3m2!1ses!2sco!4v1675335559139!5m2!1ses!2sco"
                                style="border:0;"
                                width="100%">
                            </iframe>
                        </v-card>
                    </v-col>


                </v-row>
            </v-container>
        </v-sheet>
        <section class="py-md-15 py-8">
            <v-container>

                <v-row class="d-flex justify-center">
                    <v-col md="4">
                        <v-card class="hover-card" data-aos="flip-up"
                                data-aos-delay="200"
                                data-aos-duration="1000">
                            <a class="text-decoration-none" href="#">
                                <v-img :src="bgContact"
                                       alt="about2" class="zoom-in w-100 h-100" rounded="lg"/>
                            </a>
                        </v-card>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-center align-center  flex-column">
                            <div>
                                <h3 class="text-h6 font-weight-bold mb-1 text-left">
                                    ENVÍENOS SU MENSAJE
                                </h3>

                                <v-responsive class="base-divider bg-primary pb-1 border-2 mx-auto  mb-6"
                                              style="max-width: 28px;">
                                </v-responsive>
                            </div>
                        </div>
                        <v-form
                            ref="form"
                            :lazy-validation="false"
                            class="pa-5"
                            @submit.prevent="enviar(mail)"
                        >
                            <v-card :min-width="smAndUp?500:300" outlined>
                                <v-card-text>
                                    <v-row>
                                        <v-col>
                                            <v-text-field v-model="mail.name"
                                                          label="Nombre"
                                            />
                                        </v-col>
                                        <v-col>
                                            <v-text-field v-model="mail.email"
                                                          label="Email"
                                            />
                                        </v-col>
                                    </v-row>
                                    <v-text-field v-model="mail.subject"
                                                  label="Asunto"
                                    />

                                    <v-textarea v-model="mail.content"
                                                dense
                                                label="Descripción del mensaje"
                                    />
                                    <div class="d-flex justify-center">
                                        <v-btn class="font-weight-bold " color="secondary" dark size="x-large"
                                               @click="enviar(mail)">
                                            Enviar mensaje
                                        </v-btn>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-form>
                    </v-col>
                </v-row>

            </v-container>
        </section>
        <spinner-component :opacity="0.9" :value="overlay" color="primary"></spinner-component>

        <div class="bg-secondary py-md-15 py-sm-8 py-8">
            <div class="py-md-9 py-2">
                <v-container>
                    <v-row class="justify-space-between">
                        <v-col class="v-col-md-3 v-col-12 pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="secondary lighten-2" color="primary" size="72">
                                        <v-icon color="white " size="36">mdi-map-marker</v-icon>
                                    </v-avatar>
                                </div>
                                <div class="d-flex justify-center align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Visítanos</h4>
                                        <h5 class="font-weight-medium text-body-1 text-white ml-2">
                                            local 6 esquina, Cl. 16b #11-123.
                                            <br>Valledupar, Cesar
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-3 v-col-12 pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="grey lighten-2" color="primary" size="72">
                                        <v-icon color="white " size="36">mdi-phone</v-icon>
                                    </v-avatar>
                                </div>

                                <div class="d-flex flex-column justify-center align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Llámanos</h4>

                                        <a class="text-decoration-none " href="tel:+57 012 3456789">

                                            <h5 class="font-weight-medium text-body-1 text-white">
                                                +57 311 650 0061
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-4 v-col-12">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="grey lighten-2" color="primary" size="72">
                                        <v-icon color="white " size="36">mdi-email</v-icon>
                                    </v-avatar>
                                </div>
                                <div class="d-flex flex-column justify-center  align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Escríbenos</h4>
                                        <div class="d-flex">
                                            <a class="text-decoration-none font-weight-medium text-body-1 text-white"
                                               href="mailto:contacto@irepairsoft.com">
                                                contacto@irepairsoft.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
