<script setup>
import {reactive, ref} from "vue";
import { useDisplay } from 'vuetify'

import PageLayout from "@/Layouts/PageLayout.vue";
import SpinnerComponent from "@/Components/SpinnerComponent.vue";
import bg from '../../../images/bg/Contact-us.jpg';

import {useVuelidate} from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'
import TextInput from "../../Components/TextInput.vue";
import AreaInput from "../../Components/AreaInput.vue";

const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
}


const { xs,sm,smAndUp } = useDisplay()
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
                            gradient="to top, rgb(14 26 17 / 80%), rgb(194 225 201 / 80%)"
                            max-width="100%"
                            style="height: 250px; max-width: 100%;"
                        >
                            <v-row class="ma-0 fill-height text-center d-flex align-center justify-center">
                                <v-col class="col-12">
                                    <h1 class="text-h3 font-weight-500 mb-2  white--text animate__animated animate__zoomIn">
                                        Contacto</h1>
                                    <v-responsive class="secondary mx-auto mb-6 base-divider--dense" dense
                                                  style="max-width: 28px;">
                                        <v-divider></v-divider>
                                    </v-responsive>
                                    <v-breadcrumbs :items="breadcrumbs"
                                                   class="justify-center pa-0 "
                                                   dark divider="/">
                                        <template v-slot:item="{ item }">
                                            <inertia-link :href="item.href">
                                                <v-breadcrumbs-item :disabled="item.disabled">
                                                    <div :class="item.disabled ? 'primary--text' : 'white--text'"
                                                         v-text="item.text.toUpperCase()">
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

        <v-sheet class="rounded-0" light style="padding: 56px 0px;">
            <v-container class="container">
                <v-row class="justify-space-between">
                    <v-col cols="12" md="5">
                        <div>
                            <v-container class="container pa-0" pace="6">
                                <v-row class="no-gutters justify-start">
                                    <v-col>
                                        <h3 class="text-uppercase text-h6 font-weight-bold mb-1 text-left">MANTENTE EN
                                            CONTACTO CON NOSOTROS</h3>
                                        <v-responsive class=" base-divider primary mr-auto mb-6"
                                                      style="max-width: 28px;">
                                            <v-divider aria-orientation="horizontal" class="theme--light"
                                                       role="separator"/>
                                        </v-responsive>
                                    </v-col>
                                </v-row>
                            </v-container>
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
                                            <h4 class="text-left text-h6  mb-1 secondary--text">Llámanos</h4>
                                            <a class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                               href="tel:000000000">+57 000000000</a>
                                            <span
                                                class="base-body text-body-1 mx-auto grey--text text--darken-1 px-2">-</span>
                                            <a class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                               href="tel:0000000000">+57 0000000000</a>
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
                                            <h4 class="text-left text-h6  mb-1 secondary--text">Escríbenos</h4>
                                            <a class="text-body-1 grey--text text--darken-1 mb-0"
                                               href="mailto:contacto@irepairsoft.xyz">contacto@irepairsoft.xyz</a>
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

                    <v-col  class="d-flex justify-center">
                        <div>
                            <v-container class="container pa-0" space="4">
                                <v-row class=" justify-start" no-gutters>
                                    <v-col>
                                        <h3 class="text-uppercase text-h6 font-weight-bold mb-1 text-left">
                                            ENVÍENOS SU MENSAJE
                                        </h3>
                                        <v-responsive class="base-divider bg-primary mr-auto mb-6"
                                                      style="max-width: 28px;">

                                            <v-divider/>

                                        </v-responsive>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-form
                                ref="form"
                                :lazy-validation="false"
                                class="pa-5"
                                @submit.prevent="enviar(mail)"
                            >
                                <v-card outlined :min-width="smAndUp?500:300">
                                    <v-card-text>
                                        <v-row>
                                            <v-col>
                                                <TextInput v-model="mail.name"
                                                              dense
                                                              label="Nombre"
                                                              />
                                            </v-col>
                                            <v-col>
                                                <TextInput v-model="mail.email"
                                                              dense
                                                              label="Email"
                                                              />
                                            </v-col>
                                        </v-row>
                                        <TextInput v-model="mail.subject"
                                                      dense label="Asunto"
                                                      />

                                        <AreaInput v-model="mail.content"
                                                    dense
                                                    label="Descripción del mensaje"
                                                    />
                                        <div class="d-flex justify-center">
                                            <v-btn class="font-weight-bold " color="secondary" dark
                                                   @click="enviar(mail)">
                                                Enviar mensaje
                                            </v-btn>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-form>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        <spinner-component :opacity="0.9" :value="overlay" color="primary"></spinner-component>

    </page-layout>
</template>

<style scoped>

</style>
