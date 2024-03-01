<script setup>
import {ref} from "vue";

import PageLayout from '@/Layouts/PageLayout.vue';
import {useDisplay} from "vuetify";
import {Link} from "@inertiajs/vue3"

import slide1 from '../../../images/slides/slide-1.jpg'
import slide2 from '../../../images/slides/slide-2.jpg'
import slide3 from '../../../images/slides/slide-3.jpg'
import slide4 from '../../../images/slides/slide-4.jpg'
import slide5 from '../../../images/slides/slide-5.jpg'
import slide6 from '../../../images/slides/slide-6.jpg'
import bg11 from '../../../images/slides/slide-6.jpg'
import slide7 from '../../../images/slides/slide-7.jpg'
import slide8 from '../../../images/slides/slide-8.jpg'
import slide9 from '../../../images/slides/slide-9.jpg'
import slide10 from '../../../images/slides/slide-10.jpg'
import slide11 from '../../../images/slides/slide-11.jpg'
import slide12 from '../../../images/slides/slide-12.jpg'
import slide13 from '../../../images/slides/slide-13.jpg'
import slide14 from '../../../images/slides/slide-14.jpg'
import slide15 from '../../../images/slides/slide-15.jpg'

import user1 from '../../../images/avatar/user-1.png'
import user2 from '../../../images/avatar/user-2.png'
import user3 from '../../../images/avatar/user-3.png'
import user4 from '../../../images/avatar/user-4.png'

import bg2 from '../../../images/bg/reparacion-de-movil.jpeg'

const {mobile, xs, md, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

const slides = ref([
    {
        img: slide1,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide2,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide3,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide4,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide5,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide6,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide7,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide8,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide9,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide10,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide11,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide12,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide13,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide14,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    }, {
        img: slide15,
        title: 'Lorem ipsum.',
        message: 'Lorem ipsum dolor.'
    },
])


const pilaresCorporativos = [
    {
        title: 'Compromiso',
        description: 'Nos comprometemos a superar expectativas con entregas precisas, calidad inquebrantable y dedicación constante. Trabajamos con responsabilidad y excelencia para construir relaciones sólidas basadas en la confianza mutua.',
        icon: 'mdi-handshake-outline'
    },
    {
        title: 'Innovación',
        description: 'Abrazamos la innovación como motor de crecimiento constante. Exploramos nuevas ideas y tecnologías para ofrecer soluciones TIC vanguardistas. Fomentamos la creatividad para adaptarnos a un entorno en evolución.',
        icon: 'mdi-lightbulb-on-outline'
    },
    {
        title: 'Confiabilidad',
        description: 'La confiabilidad es la base de nuestra reputación. Construimos relaciones sólidas con transparencia e integridad. Nos esforzamos por ofrecer servicios confiables, respaldando continuamente a nuestros clientes.',
        icon: 'mdi-shield-check-outline'
    }
];


</script>

<template>
    <page-layout title="Inicio">
        <section>
            <v-container>
                <v-responsive>
                    <v-carousel :data-aos="mobile?'fade-up':'fade-up'" aspect-ratio="4/3"
                                class="rounded-lg" cycle data-aos-delay="200" data-aos-duration="1000"
                                data-aos-mirror="true" height="70vh" hide-delimiter-background
                                hide-delimiters
                                rounded
                                width="60vh">
                        <v-carousel-item v-for="(item,i) in slides" :key="item.id" :cover="true"
                                         :src="item.img"
                                         aspect-ratio="4/3"
                                         gradient="to top,rgb(5 11 31 / 48%), rgb(0 28 71 / 35%)"

                        >

                            <!--
                                                <v-row align="center" class="fill-height ma-0" justify="center">
                                                    <v-responsive
                                                        class="d-flex align-center  fill-height"
                                                        style="height: 100%; width: 100%;"
                                                    >
                                                        <h1
                                                            id="frase1"
                                                            class="text-center text-white  white&#45;&#45;text font-weight-bold text-h3"
                                                        >
                                                            {{ i + 1 }}). {{ item.title }}
                                                        </h1>
                                                        <h1
                                                            id="frase2"
                                                            class="text-center text-primary font-weight-black text-h2 animate__animated animate__slideInLeft"
                                                        >
                                                            {{ item.message }}
                                                        </h1>
                                                    </v-responsive>
                                                </v-row>
                            -->

                        </v-carousel-item>
                    </v-carousel>
                </v-responsive>
            </v-container>
        </section>

        <v-container class="py-6 py-lg-12 text-center">
            <h1 class="text-body-1 text-sm-h6 text-md-h6 text-lg-h6 text-primary ">
                <span :data-aos="mobile?'fade-up':'fade-left'" data-aos-delay="200"
                      data-aos-duration="1000" data-aos-mirror="true">
                    Soporte Técnico Apple
                </span>
                <br>
                <span :data-aos="mobile?'fade-up':'fade-left'"
                      class="text-secondary text-body-1 text-sm-h6 text-md-h5 text-lg-h3 font-weight-bold"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-mirror="true">
                     Especialista en iPhone
                </span>
            </h1>
            <h2 :data-aos="mobile?'fade-up':'fade-left'"
                class="text-body-1 text-sm-h6 text-secondary mt-4 w-full w-md-8-12 w-xl-half mx-auto"
                data-aos-delay="200"
                data-aos-duration="1000">
                Nuestro servicio posee los más altos estándares en tecnología y diagnóstico.
                No dejes tu equipo en manos inexpertas, visita profesionales y vive la experiencia iRepair 💻📱⌚️
            </h2>
            <div class="mt-4">
                <InertiaLink :data-aos="mobile?'fade-up':'fade-left'" data-aos-delay="200"
                             data-aos-duration="1000" href="contact-us">
                    <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" color="primary" x-large>
                        Empezar
                    </v-btn>
                </InertiaLink>
                <InertiaLink :data-aos="mobile?'fade-up':'fade-right'" data-aos-delay="200"
                             data-aos-duration="1000" href="about-us">
                    <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" x-large>
                        Saber más
                    </v-btn>
                </InertiaLink>
            </div>
        </v-container>

        <section class="pt-md-16 pt-8 pb-md-12 pb-8">
            <v-container class="">
                <v-row class="align-center justify-space-between pt-md-7">
                    <v-col :data-aos="mobile?'fade-up':'fade-right'"
                           class="v-col-md-5 v-col-12" data-aos-delay="200"
                           data-aos-duration="1000">
                        <div :data-aos="mobile?'fade-up':'zoom-out-up'" class="d-flex align-center mb-6"
                             data-aos-delay="200"
                             data-aos-duration="1000">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Rapido confiable y seguro
                            </h6>
                        </div>
                        <h1 :data-aos="mobile?'fade-up':'fade-left'"
                            class="text-h5 text-lg-h4 font-weight-bold text-dark mb-6"
                            data-aos-delay="200" data-aos-duration="1000">
                            Reparación en tiempo record

                        </h1>
                        <p :data-aos="mobile?'fade-up':'fade-up'" class="text-body-1 text-muted mb-8"
                           data-aos-delay="200" data-aos-duration="1000">
                            Nuestra mayor satisfacción es darle soluciones a nuestros clientes. Darles la experiencia de
                            un servicio
                            superior con los más altos estándares, tanto tecnológicos como en diagnóstico.
                            ¿Que esperas para reparar tu iPhone ?
                        </p>

                        <InertiaLink href="contact-us">
                            <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" color="primary" flat x-large>
                                Empezar
                            </v-btn>
                        </InertiaLink>
                        <InertiaLink href="about-us">
                            <v-btn class="my-1 mx-sm-1 w-full w-sm-auto" color="primary" variant="outlined" x-large>
                                Saber más
                            </v-btn>
                        </InertiaLink>
                        <div class="d-flex align-center mt-11 mb-md-0 mb-sm-5 mb-8">
                            <div class="d-flex align-center">
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user1"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user2"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user3"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user4"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                            </div>
                            <p class="text-subtitle-1 ml-6">
                                ¿Necesitas ayuda?
                                <Link class="text-decoration-none" href="/contact-us">
                                    <a aria-current="page"
                                       class="router-link-active router-link-exact-active text-decoration-none text-primary">
                                        Contacta con nuestros expertos
                                    </a>
                                </Link>
                                <br> Háblanos de tu proyecto
                            </p>
                        </div>
                    </v-col>
                    <v-col v-if="!mobile" class="v-col-md-6 v-col-12">
                        <div :data-aos="mobile?'fade-up':'fade-left'"
                             class="mt-12 rounded-md d-flex justify-center text-center  text-center text-lg-start mt-12"
                             data-aos-delay="200"
                             data-aos-duration="1000"
                        >
                            <v-img :src="bg11" alt="banner"
                                   class="rounded-lg" cover/>

                        </div>

                    </v-col>
                </v-row>
            </v-container>
        </section>


        <div class="bg-secondary py-md-15 py-8">
            <div class="py-md-15 py-sm-8">
                <v-container>
                    <v-row class="justify-center">
                        <v-col class="v-col-sm-8 v-col-12">
                            <div class="text-center">
                                <div :data-aos="mobile?'fade-up':'fade-right'"
                                     :data-aos-delay="200" class="d-flex align-center mb-5 justify-center "
                                     data-aos-duration="1000"><span
                                    class="bg-success pa-2 rounded-circle mr-2"></span><h6
                                    class="text-subtitle-1 text-dark font-weight-bold">pilares corporativos</h6></div>
                                <h2 :data-aos="mobile?'fade-up':'fade-left'"
                                    class="text-h4 font-weight-bold text-dark mb-md-12 mb-6"
                                    data-aos-delay="200" data-aos-duration="1000">
                                    Pilares que sustentan cada aspecto
                                </h2>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class=" justify-center">

                        <v-col v-for="(pilar) in pilaresCorporativos" class="v-col-sm-6 v-col-md-4 v-col-12">
                            <v-card
                                :data-aos="mobile?'fade-up':'fade-up'"
                                class=" elevation-0  text-center py-md-15 py-6 px-md-8 px-4 rounded-md aos-init aos-animate"
                                data-aos-delay="200" data-aos-duration="1000"><!---->

                                <v-avatar color="secondary" size="68">
                                    <v-icon :icon="pilar.icon" size="40">

                                    </v-icon>
                                </v-avatar>
                                <h4
                                    class="text-h5 text-dark font-weight-bold my-sm-6 my-4 px-md-6">
                                    {{ pilar.title }}
                                </h4>
                                <p class="text-muted mb-sm-6 mb-4">
                                    {{ pilar.description }}
                                </p>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>


        <div class="py-md-15 py-8">
            <div class="py-md-15 py-sm-8">
                <v-container class="">
                    <v-row class="justify-center">
                        <v-col class="v-col-md-8 v-col-12">
                            <div class="text-center">
                                <div :data-aos="mobile?'fade-up':'zoom-out-up'"
                                     class="rounded-lg mb-md-15 d-flex justify-center"
                                     data-aos-delay="200"
                                     data-aos-duration="1000">
                                    <v-img :src="bg2" alt="" class=" img-fluid rounded-xl"
                                           rounded style="max-height: 300px"/>


                                </div>
                                <p class="mb-sm-11 mb-6 text-h5 font-weight-medium">
                                    cada desafío es una oportunidad para crecer. Hoy, superemos obstáculos con una
                                    sonrisa y enfoquémonos en alcanzar nuevos logros. Juntos, somos imparables. ¡Vamos a
                                    brillar!

                                    #EquipoImparable 💪✨
                                </p>
                                <v-avatar class=" mb-3"
                                          style="width: 64px; height: 64px;"
                                          variant="flat">
                                    <img :src="user2"
                                         alt="profile"
                                         height="64"
                                         width="64">
                                </v-avatar>
                                <h3 class="text-body-1 font-weight-bold text-dark">Danir Jose Ortiz</h3>
                                <p class="lh-normal text-muted">Trabajador feliz, iRepair</p></div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>


        <div class="bg-secondary py-md-15 py-8">
            <div class="py-md-8 py-sm-5">
                <v-container class="">
                    <v-row class="align-center justify-space-between">
                        <v-col class="v-col-md-5 v-col-12">
                            <div>
                                <div class="d-flex align-center mb-5">
                                    <span
                                        class="bg-success pa-2 rounded-circle mr-2">
                                    </span>
                                    <h6
                                        class="text-subtitle-1 text-white font-weight-bold">
                                        Podemos ayudar
                                    </h6>
                                </div>
                                <h2 class="text-h4 py-6 text-white">
                                    Discutamos sobre su proyecto y llevémoslo al siguiente nivel.
                                </h2>
                                <v-row>
                                    <v-col class="v-col-12"><h6
                                        class="text-body-1 text-muted font-weight-regular">Teléfono</h6>
                                        <div class="d-flex align-center">
                                            <a class="text-decoration-none" href="tel:+573116500061" target="_blank">
                                                <v-icon color="white">mdi-phone</v-icon>
                                            </a> &nbsp;
                                            <a href='https://wa.me/573116500061' target="_blank">
                                                <v-icon color="white">mdi-whatsapp</v-icon>
                                            </a> &nbsp;
                                            <a class="font-weight-medium text-h5 text-white" href="tel:+573116500061">
                                                +57 311 650 0061
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">

                                        <h6 class="text-body-1 text-muted font-weight-regular">Email</h6>
                                        <div class="d-flex align-center">
                                            <a class="text-decoration-none" href="mailto:contacto@irepairsoft.com"
                                               target="_blank">
                                                <v-icon color="white">mdi-email</v-icon>
                                            </a>

                                            <a class="font-weight-medium text-h5 text-white ml-2"
                                               href="mailto:contacto@irepairsoft.com">
                                                contacto@irepairsoft.com
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">

                                        <h6 class="text-body-1 text-muted font-weight-regular">
                                            Localización
                                        </h6>
                                        <div class="d-flex ">
                                            <a class="text-decoration-none" href="#"
                                               target="_blank">
                                                <v-icon color="white">mdi-map-marker</v-icon>
                                            </a>
                                            <h5 class="font-weight-medium text-h5 text-white ml-2">
                                                Calle 85 B # 71 A-30 Barrio El Limoncito / Barranquilla Atlántico
                                            </h5></div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>

                        <v-col class="v-col-md-5 v-col-12">
                            <v-card class="elevation-0   rounded-md"
                                    variant="elevated">
                                <div class="pa-md-11 pa-sm-8 pa-4">
                                    <h4
                                        class="text-dark text-h4 font-weight-bold mb-7">
                                        Iniciar el proyecto
                                    </h4>
                                    <v-form class="project-form" novalidate="">
                                        <v-row class="v-row">
                                            <v-col class="v-col-sm-6 v-col-12 pb-1">

                                                <v-text-field density="comfortable"
                                                              label="Nombres" variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-6 v-col-12 pb-1">
                                                <v-text-field density="comfortable"
                                                              label="Apellidos" variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-text-field
                                                    color="primary"
                                                    density="comfortable"
                                                    label="Email"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-text-field
                                                    color="primary"
                                                    density="comfortable"
                                                    label="País o región"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-textarea
                                                    color="primary"
                                                    density="comfortable"
                                                    label="Cuéntanos sobre el proyecto"
                                                    variant="outlined"
                                                ></v-textarea>
                                            </v-col>
                                            <v-col class="v-col-12 mb-md-3 mb-1">
                                                <div class="ml-n2">
                                                    <div class="d-flex align-center">
                                                        <v-checkbox-btn></v-checkbox-btn>
                                                        <div class="text-muted pl-2">
                                                            I have read and acknowledge
                                                            the
                                                            <a aria-current="page"
                                                               class="router-link-active router-link-exact-active opacity-1 text-decoration-none text-primary"
                                                               href="/">
                                                                Terms and Conditions
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </v-col>
                                            <v-col class="v-col v-col-12 pt-0">
                                                <v-btn block="" class="bg-primary rounded-md" size="large"
                                                       style="text-transform: capitalize; letter-spacing: 0px;"
                                                       variant="flat">enviar consulta
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>

    </page-layout>
</template>


<style scoped>

</style>
