<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from '../../../images/bg/Imagen2.jpg'

import bgLogo from '../../../images/slides/slide-1.jpg'
import about1 from '../../../images/img-3.jpg'
import about2 from '../../../images/img-5.jpg'
import about3 from '../../../images/img-6.jpg'
import bg18 from '../../../images/img-25.jpg'
import bg25 from '../../../images/img-26.jpg'


import team1 from '../../../images/avatar/user-1.png'
import team2 from '../../../images/avatar/user-2.png'
import team3 from '../../../images/avatar/user-3.png'
import team4 from '../../../images/avatar/user-4.png'
import team5 from '../../../images/avatar/user-5.png'
import team6 from '../../../images/avatar/user-6.png'
import team7 from '../../../images/avatar/user-7.png'
import {useDisplay} from "vuetify";

const {mobile, xs, md, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

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

const teamList = [
    {img: team1, name: 'user 1', rol: 'rol establecido'},
    {img: team2, name: 'User 2', rol: 'rol establecido'},
    {img: team3, name: 'User 3', rol: 'rol establecido'},
    {img: team4, name: 'User 4', rol: 'rol establecido'},
    {img: team5, name: 'user 5', rol: 'rol establecido'},
    {img: team6, name: 'user 6', rol: 'rol establecido'},
    {img: team7, name: 'user 7', rol: 'rol establecido'},
    // Add more professionals as needed
];
const valores = [
    {
        title: "Compromiso",
        icon: "mdi-checkbox-marked-circle-outline",
        description: "Implicación a la hora de desempeñar las tareas de forma responsable, profesional y positiva.",
        color: "blue"
    },
    {
        title: "Responsabilidad",
        icon: "mdi-account-group-outline",
        description: "Este valor es consecuencia del compromiso y nos muestra como un equipo humano plenamente identificado con nuestra misión y visión, con poca necesidad de control, lo que revierte en una organización con personas que pueden trabajar de forma autónoma y sin excesiva jerarquización.",
        color: "green"
    },
    {
        title: "Pasión",
        icon: "mdi-heart-outline",
        description: "La pasión es el motor que nos mueve. Solamente si trabajamos y actuamos con pasión, seremos excelentes en lo que hacemos. Queremos que nuestro trabajo diario demuestre pasión a través del esfuerzo por la Excelencia.",
        color: "red"
    },
    {
        title: "Eficiencia",
        icon: "mdi-clock-time-eight-outline",
        description: "Un correcto aprovechamiento del tiempo y de los recursos existentes, garantizando, de esta manera, la consecución de los objetivos de manera eficaz.",
        color: "amber"
    }
]
</script>

<template>
    <page-layout>
        <section>
            <v-row class="no-gutters">
                <v-col class="col col-12">
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
                                    class="text-h3 font-weight-500 mb-2 text-white animate__animated animate__zoomIn"
                                >
                                    Nosotros
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
                </v-col>
            </v-row>
        </section>

        <v-container class=" ">
            <v-row class=" align-center justify-md-space-between justify-center pb-5 pt-12">
                <v-col class="v-col-md-6 v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile?'fade-up':'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200" data-aos-duration="1000">
                                <span class=" font-weight-light">
                                    ¿Quienes
                                </span>
                            <br>
                            <span class="text-secondary ml-16 font-weight-bold font-weight-black">
                                    Somos?
                            </span>
                        </h2>
                        <v-responsive class=" rounded-lg bg-primary mr-auto mb-6" style="max-width: 100px;">
                            <v-divider class="pb-1 rounded-lg" light/>
                        </v-responsive>

                        <p :data-aos="mobile?'fade-up':'fade-up'"
                           class="text-body-1 text-justify text-muted  position-relative z-index1"
                           data-aos-delay="400" data-aos-duration="1000">
                            El Laboratorio de micro-electrónica iRepair es una empresa
                            que ha venido evolucionando desde el año 2015. Desde su
                            creación se ha esforzado por responder a las necesidades
                            primordiales del sector de la micro-electrónica avanzada,
                            micro-soldadura y reparación profesional de telefonía
                            celular, adaptándose a los continuos cambios tecnológicos
                            y respondiendo de esta forma a las más altas exigencias
                            del mercado.
                        </p>
                    </div>
                </v-col>
                <v-col class="v-col-md-6 v-col-12">
                    <div class="pl-sm-6">
                        <v-card class="hover-card elevation-10"
                                variant="elevated">
                            <v-img :src="bgLogo" class="zoom-in"></v-img>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
            <div class="py-sm-16 py-6">
                <v-row>
                    <v-col>
                        <div class="hover-card">
                            <v-img :src="about1"
                                   alt="about1" class="zoom-in w-100 h-100" rounded="lg"/>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="hover-card">
                            <v-img :src="about2"
                                   alt="about2" class="zoom-in w-100 h-100" rounded="lg"/>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="hover-card ">
                            <v-img :src="about3"
                                   alt="about2" class="zoom-in w-100 h-100" rounded="lg"/>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>


        <section class="bg-secondary bg-dark py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container class="">
                    <v-row class=" justify-space-between">
                        <v-col :data-aos="mobile?'fade-up':'fade-up'"
                               class="v-col-md-4 v-col-12" data-aos-delay="200" data-aos-duration="1000">
                            <h2 class="text-h4 text-dark font-weight-bold pr-sm-10">
                                Misión y visión empresarial
                            </h2>
                            <p class="text-body-1 text-muted my-4">
                                iRepair Laboratorio es líder en reparación de telefonía celular en Valledupar y sus
                                alrededores, destacándose por su calidad y enfoque en el crecimiento tecnológico.
                            </p>
                        </v-col>
                        <v-col class="v-col-md-7 v-col-12">
                            <v-row class="d-flex flex-column flex-sm-row justify-content-around justify-center">
                                <v-col class="col-12 col-sm-12 col-md-6 col-lg-5 ">
                                    <v-card
                                        :data-aos="mobile?'fade-up':'fade-right'"
                                        class="mr-1 fill-height  rounded-lg"
                                        data-aos-delay="400"
                                        data-aos-duration="1000">
                                        <v-card-title>
                                            <h4
                                                class="d-flex justify-start text-h4 font-weight-black  text-primary pt-2  fill-width"
                                                style="width: 100%;"> Misión
                                            </h4>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="mx-2 my-3 text-subtitle-1 text-justify">
                                                iRepair laboratorio es una empresa líder en el campo de la
                                                reparación profesional de telefónia celular, mantenimientos,
                                                capacitaciones, en la ciudad de Valledupar, y sus alrededores, con el
                                                máximo aprovechamiento de sus conocimientos,
                                                estudios y los equipos necesarios que se ven reflejado en el
                                                crecimiento de sus capacidades productivas y tecnológicas.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                                <v-col class="col-12 col-sm-12 col-md-6 col-lg-5 mt-4 mt-sm-0">
                                    <v-card
                                        :data-aos="mobile?'fade-up':'fade-left'"
                                        class="mr-1 fill-height rounded-lg"
                                        data-aos-delay="400"
                                        data-aos-duration="1000">
                                        <v-card-title>
                                            <h4
                                                class="text-primary d-flex justify-start rounded-lg text-h4 font-weight-bold font-weight-black pt-2  white--text fill-width"
                                                style="width: 100%;">
                                                Visión
                                            </h4>
                                        </v-card-title>
                                        <v-card-text class="v-card__text"><p
                                            class="mx-2 my-3 text-subtitle-1 text-justify">
                                            Consolidar iRepair Laborarorio como el mejor espacio para la
                                            reparación, la experimentación y la investigación con criterios de calidad
                                            que nos permita mantener prestigio en el
                                            campo científico, tecnológico y humano en todo el territorio
                                            nacional para el año 2024.
                                        </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>

        <section>
            <div class="bg-secondary-lighten-1 py-md-15 py-8">
                <div class="py-md-15 py-sm-8">
                    <v-container>
                        <v-row class="justify-center">
                            <v-col class="v-col-sm-8 v-col-12">
                                <div class="text-center">
                                    <div :data-aos="mobile?'fade-up':'fade-right'"
                                         :data-aos-delay="200" class="d-flex align-center mb-5 justify-center "
                                         data-aos-duration="1000"><span
                                        class="bg-success pa-2 rounded-circle mr-2"></span><h6
                                        class="text-subtitle-1 text-dark font-weight-bold">Valores corporativos</h6>
                                    </div>
                                    <h2 :data-aos="mobile?'fade-up':'fade-left'"
                                        class="text-h4 font-weight-bold text-dark mb-md-12 mb-6"
                                        data-aos-delay="200" data-aos-duration="1000">
                                        La esencia de nuestra misión y visión se encuentra en los valores que sustentan
                                        cada
                                        aspecto
                                    </h2>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row class=" justify-center">

                            <v-col v-for="(valor) in valores" class="v-col-sm-6 v-col-md-3 v-col-12">
                                <v-card
                                    :data-aos="mobile?'fade-up':'fade-up'"
                                    class=" elevation-0  text-center py-md-15 py-6 px-md-8 px-4 rounded-md aos-init aos-animate"
                                    data-aos-delay="200" data-aos-duration="1000"><!---->

                                    <v-avatar :color="valor.color" size="48">
                                        <v-icon :icon="valor.icon" size="30">

                                        </v-icon>
                                    </v-avatar>
                                    <h4
                                        class="text-dark font-weight-bold my-sm-6 my-4 px-md-6">
                                        {{ valor.title }}
                                    </h4>
                                    <p class="text-muted mb-sm-6 mb-4">
                                        {{ valor.description }}
                                    </p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>

        </section>

        <section class="bg-accent py-md-12 py-5">
            <div class="py-sm-5">
                <v-container>
                    <div class="text-center">
                        <h2 :data-aos="mobile?'fade-up':'fade-right'"
                            class="text-h2 text-dark mb-3 aos-init aos-animate" data-aos-delay="200"
                            data-aos-duration="1000">
                            Nuestro equipo
                        </h2>
                        <p :data-aos="mobile?'fade-up':'fade-left'" class="text-body-1 text-muted aos-init aos-animate"
                           data-aos-delay="200"
                           data-aos-duration="1000">
                            Profesionales dedicados de iRepair
                        </p>
                    </div>


                    <div class="d-flex align-center justify-center flex-wrap mt-sm-8 mt-5">
                        <div
                            v-for="(team, n) in teamList"
                            :key="n"
                            class="pa-2 d-flex flex-column align-center"
                        >
                            <v-card class="hover-card overflow-hidden rounded-md lh-10 mb-7 rounded-circle" width="200">

                                <!--                                <v-img
                                                                    :alt="team.name"
                                                                    :aspect-ratio="4/5"
                                                                    :src="team.img"
                                                                    class="zoom-in w-100"
                                                                    cover=""
                                                                />-->

                                <v-avatar size="200" variant="elevated">
                                    <img
                                        :alt="team.name"
                                        :src="team.img"
                                        class="zoom-in w-100"/>
                                </v-avatar>
                            </v-card>
                            <h2 class="text-h5 text-dark font-weight-bold">{{ team.name }}</h2>
                            <p class="text-muted">{{ team.rol }}</p>
                        </div>
                    </div>
                    <div
                        class="bg-secondary py-sm-15 py-7 px-lg-16 px-4 mt-12 rounded-lg">
                        <div class="px-sm-6 px-3">
                            <v-row>
                                <v-col class="v-col-md-6 v-col-12"><h2
                                    class="text-h4 mb-6 text-sm-start text-center text-white">¿Tengo una pregunta?</h2>
                                    <p class="text-h6 font-weight-regular text-sm-start text-center text-white">
                                        En iRepair Laboratorio, nuestro equipo se destaca por su dedicación y talento en
                                        la reparación profesional de dispositivos móviles. Con un liderazgo visionario y
                                        la pasión de cada miembro, trabajamos juntos para ofrecer servicios de
                                        reparación de calidad y soluciones técnicas innovadoras.
                                    </p>
                                </v-col>
                                <v-col class="v-col-md-6 v-col-12">

                                    <v-row>
                                        <v-col>
                                            <div class="hover-card">
                                                <v-img :src="bg18"
                                                       alt="about1" class="zoom-in w-100 h-100" rounded="lg"/>
                                            </div>
                                        </v-col>
                                        <v-col>
                                            <div class="hover-card">
                                                <v-img :src="bg25"
                                                       alt="about2" class="zoom-in w-100 h-100" rounded="lg"/>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>


                            <v-row>
                                <v-col class="v-col-12">
                                    <div
                                        class="d-sm-flex justify-md-end justify-sm-start justify-center position-relative">
                                        <div class="mr-sm-13">
                                            <div class="text-uppercase text-body-1">Phone</div>
                                            <div class="d-flex align-center">
                                                <a class="text-decoration-none" href="tel:+573116500061"
                                                   target="_blank">
                                                    <v-icon color="white">mdi-phone</v-icon>
                                                </a> &nbsp;
                                                <a href='wa.me/message/ZQMAOFCKE2PTN1' target="_blank">
                                                    <v-icon color="white">mdi-whatsapp</v-icon>
                                                </a> &nbsp;
                                                <a href="tel:+573116500061">
                                                    <h5 class="font-weight-medium text-h5 text-white">
                                                        +57 311 650 0061</h5>
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="text-uppercase text-sm-14 text-body-1 mt-sm-0 mt-4">EMAIL</div>
                                            <div class="d-flex align-center">
                                                <a class="text-decoration-none"
                                                   href="mailto:contacto@irepairsoft.com"
                                                   target="_blank">
                                                    <v-icon color="white">mdi-email</v-icon>
                                                </a>

                                                <a class="font-weight-medium text-md-h5 text-white ml-2 text-truncate"
                                                   href="mailto:contacto@irepairsoft.com">
                                                    contacto@irepairsoft.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </div>
        </section>
    </page-layout>
</template>
