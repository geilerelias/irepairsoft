<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from '../../../images/bg/Imagen1.jpg'
import bgLogo from '../../../images/slides/slide-7.jpg'
import contact from '../../../images/bg/bg-01.jpg'

import service10 from '../../../images/services/service (10).jpg'
import service11 from '../../../images/services/service (11).jpg'
import service13 from '../../../images/services/service (13).jpg'
import service9 from '../../../images/services/service (9).jpg'
import service7 from '../../../images/services/service (7).jpg'
import service2 from '../../../images/services/service (2).jpg'
import service6 from '../../../images/services/service (6).jpg'

import img18 from "../../../images/img-18.jpg"
import img5 from "../../../images/img-5.jpg"
import img6 from "../../../images/img-6.jpg"

import team1 from "../../../images/avatar/user-1.png";
import team2 from "../../../images/avatar/user-2.png";
import team3 from "../../../images/avatar/user-3.png";
import team4 from "../../../images/avatar/user-4.png";
import team5 from "../../../images/avatar/user-5.png";
import team6 from "../../../images/avatar/user-6.png";
import team7 from "../../../images/avatar/user-7.png";


import {ref} from "vue";
import {useDisplay} from "vuetify";


const {mobile, xs, md, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

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
        title: 'Fallas Comunes',
        description: 'Identificamos y resolvemos las fallas más frecuentes en dispositivos móviles, garantizando un funcionamiento óptimo.',
        img: [img18]
    },
    {
        title: 'Reparaciones de Placa',
        description: 'Contamos con expertos en reparación de placas base, ofreciendo soluciones efectivas para problemas de hardware.',
        img: [img5]
    },
    {
        title: 'Pantalla Roja, Pantalla Azul',
        description: 'Solucionamos problemas de pantalla, incluyendo pantallas rojas y azules, con técnicas especializadas y repuestos de calidad.',
        img: [img6]
    },
    {
        title: 'Problemas de Carga',
        description: 'Resolvemos problemas relacionados con la carga de dispositivos, ya sea la batería, el puerto de carga o el cable.',
        img: [service9]
    },
    {
        title: 'Problemas de Touch',
        description: 'Solucionamos problemas táctiles en dispositivos, incluyendo problemas con la pantalla táctil y la respuesta al toque.',
        img: [service13]
    },
    {
        title: 'Problemas de Imagen',
        description: 'Reparamos problemas relacionados con la visualización de imágenes en dispositivos, abordando problemas de pantalla, píxeles muertos, etc.',
        img: [service7]
    },
    {
        title: 'Problemas de Cámara',
        description: 'Ofrecemos servicios para solucionar problemas con las cámaras de dispositivos, ya sea en la captura de fotos o videos.',
        img: [service10]
    },
    {
        title: 'Problemas de Audio',
        description: 'Resolvemos problemas de audio en dispositivos, incluyendo problemas con altavoces, auriculares y problemas de reproducción.',
        img: [service11]
    },
    {
        title: 'Problemas de Señal',
        description: 'Abordamos problemas de conectividad y señal en dispositivos, asegurando una conexión estable y confiable.',
        img: [service2]
    },
    {
        title: 'Errores -1, 9, 14, 21, 40, 50, 53, 56, 4013, 4014',
        description: 'Ofrecemos soluciones para errores específicos de software, como los mencionados, garantizando un rendimiento óptimo del dispositivo.',
        img: [service6]
    },
    // Puedes agregar más servicios según sea necesario
];


const processList = [
    {
        id: 1,
        icon: 'mdi mdi-eye-check-outline',
        title: 'Diagnóstico',
        description: 'Identificar y analizar las fallas o problemas en los dispositivos móviles para determinar las soluciones necesarias.'
    },
    {
        id: 2,
        icon: 'mdi mdi-cog-outline',
        title: 'Reparación',
        description: 'Realizar las reparaciones necesarias en los dispositivos móviles, incluyendo cambios de pantalla, reparaciones de placa, entre otros.'
    },
    {
        id: 3,
        icon: 'mdi mdi-wifi',
        title: 'Pruebas',
        description: 'Realizar pruebas exhaustivas en los dispositivos móviles reparados para garantizar su correcto funcionamiento y rendimiento.'
    },
    {
        id: 4,
        icon: 'mdi mdi-lightbulb-on-outline',
        title: 'Asesoramiento',
        description: 'Brindar asesoramiento a los clientes sobre el uso adecuado y mantenimiento de sus dispositivos móviles para prolongar su vida útil.'
    },
];

const dialog = ref(false)

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

        <v-container class=" ">
            <v-row class=" align-start justify-md-space-between justify-center pb-5 pt-12">
                <v-col class="v-col-md-6 v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile?'fade-up':'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200" data-aos-duration="1000">
                                <span class="  font-weight-light">
                                    Nuestros
                                </span>
                            <br>
                            <span class="text-secondary ml-16 font-weight-bold font-weight-black">
                                    Servicios
                                </span>
                            <v-responsive class=" rounded-lg bg-primary mr-auto mb-6" style="max-width: 100px;">
                                <v-divider class="pb-1 rounded-lg" light/>
                            </v-responsive>
                        </h2>
                        <p :data-aos="mobile?'fade-up':'fade-up'"
                           class="text-body-1 text-justify text-muted  position-relative z-index1"
                           data-aos-delay="400" data-aos-duration="1000">
                            En iRepair Laboratorio, nos enorgullece ofrecer una amplia gama de servicios diseñados para
                            satisfacer tus necesidades más exigentes en la reparación profesional de dispositivos
                            móviles. Desde diagnósticos precisos hasta reparaciones especializadas, nuestro compromiso
                            es brindarte resultados excepcionales. Ya sea que necesites reparar una placa base,
                            solucionar problemas de pantalla o resolver fallas comunes, nuestro equipo de expertos está
                            aquí para ayudarte en cada paso del camino. Descubre cómo nuestros servicios pueden mantener
                            tus dispositivos en óptimas condiciones y garantizar tu satisfacción.
                        </p>
                    </div>
                </v-col>
                <v-col class="v-col-md-6 v-col-12">
                    <v-card :data-aos="mobile?'fade-up':'fade-left'"
                            class="rounded-md grey-lighten-2 position-relative z-index1 mt-md-6 mb-md-n16"
                            color="blue-grey-lighten-5"
                            data-aos-delay="200"
                            data-aos-duration="1000" elevation="10"
                            variant="elevated">
                        <v-card-item class=" px-lg-15 px-8 py-sm-11 py-5">
                            <logo></logo>
                            <div class="font-weight-bold text-dark mt-2 mb-1">
                                Servicios de Excelencia
                            </div>
                            <p class="text-h6 font-weight-regular text-muted mb-4 text-justify">
                                Nuestra atención al detalle y nuestro compromiso con la calidad nos permiten ofrecer
                                soluciones tecnológicas de alto nivel, impulsando así el éxito de quienes confían en
                                nosotros.
                            </p>
                            <p class="text-muted">Recomendado por </p>
                            <div class="d-flex align-center mt-6">

                                <v-avatar v-for="team in teamList" class="mr-n2" color="white" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="team.img"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="bg-primary mr-n2" color="white"
                                          flat
                                          size="48"
                                          variant="outlined"> 16k
                                </v-avatar>
                                <p class="text-subtitle-1 text-grey100 ml-2"></p></div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="service-video mt-12 mx-auto">
            <div class="video-bg  rounded-md overflow-hidden lh-10">
                <v-img
                    :src="bgLogo"
                    alt="banner"
                    cover=""
                    gradient="to top right, rgb(21 92 138 / 47%), rgb(4 16 35 / 52%)" height="500">
                    <div class="d-flex justify-center align-center fill-height">
                        <v-dialog
                            v-model="dialog"
                            width="1024"
                        >
                            <template v-slot:activator="{ props }">

                                <v-btn class="rounded-circle bg-white" elevation="10"
                                       icon size="70"
                                       v-bind="props">
                                    <v-icon color="primary" icon="mdi-play" size="34"></v-icon>
                                </v-btn>
                            </template>
                            <v-card>
                                <iframe
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                    frameborder="0"
                                    height="400"
                                    src="https://www.youtube.com/embed/bjokCxALGBg"
                                    title="FLYING OVER COLOMBIA (4K UHD) - Relaxing Music Along With Beautiful Nature Videos - 4K Video UltraHD"
                                    width="100%"></iframe>
                            </v-card>
                        </v-dialog>

                    </div>
                </v-img>
            </div>
            <v-container>
                <p class="text-muted text-body-1 mt-sm-8 mt-4">
                    En iRepair Laboratorio, no solo nos enfocamos en ofrecer reparaciones excepcionales, sino que
                    también creamos experiencias memorables para nuestros clientes. Más que una empresa, somos una
                    comunidad dedicada a la innovación, la excelencia y el éxito mutuo. Descubre cómo iRepair
                    Laboratorio puede transformar tu visión en realidad, ofreciendo soluciones tecnológicas que marcan
                    la diferencia.
                </p>
            </v-container>
        </v-container>


        <section>
            <v-container>
                <v-row>
                    <v-col v-for="item in services" cols="12" md="4" sm="6">
                        <div class="mb-sm-6 ma-sm-1 "
                             data-aos-delay="200"
                             data-aos-duration="1000">

                            <div :data-aos="mobile?'fade-up':'flip-up'" class="hover-card"
                                 data-aos-delay="200"
                                 data-aos-duration="1000">
                                <a class="text-decoration-none" href="#">
                                    <v-img :src="item.img[0]"
                                           alt="about2" class="zoom-in w-100 h-100" rounded="lg"/>
                                </a>
                            </div>

                            <div :data-aos="mobile?'fade-up':'fade-right'" class="mt-4" data-aos-delay="200"
                                 data-aos-duration="1000">
                                <h5 class="text-h5 font-weight-bold text-13">
                                    {{ item.title }}
                                </h5>
                                <p class="text-muted text-h6 font-weight-regular">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>


        <div class="border-bottom">
            <div class="py-md-12 py-5">
                <div class="py-md-10 py-sm-5">
                    <v-container class="">
                        <v-row class="v-row justify-center">
                            <div class="v-col-md-7 v-col-12">
                                <h2
                                    :data-aos="mobile?'fade-up':'fade-right'"
                                    class="text-h2 text-center text-dark mb-4 aos-init aos-animate"
                                    data-aos-delay="200" data-aos-duration="1000">
                                    Proceso de trabajo
                                </h2>
                                <p :data-aos="mobile?'fade-up':'fade-left'"
                                   class="text-body-1 text-center text-muted aos-init aos-animate"
                                   data-aos-delay="200" data-aos-duration="1000">
                                    Te ofrecemos una nueva generación de tareas.
                                    y proyecto
                                </p>
                            </div>
                            <v-col class="v-col-12 mt-8">
                                <v-row>
                                    <v-col v-for="process in processList" class="v-col-sm-6 v-col-md-3 v-col-12">
                                        <div :data-aos="mobile?'fade-up':'fade-up'" class="aos-init aos-animate"
                                             data-aos-delay="200"
                                             data-aos-duration="1000">
                                            <div class="text-sm-left text-center">
                                                <v-avatar
                                                    class="bg-primary mb-5"
                                                    size="55"
                                                    variant="flat">
                                                    <v-icon :icon="process.icon"></v-icon>
                                                </v-avatar>
                                                <h4 class="text-h6 text-sm-left text-center font-weight-bold mb-4"
                                                    v-text="process.title">
                                                </h4>
                                            </div>
                                            <p class="text-body-1 text-sm-left  text-center text-muted  mb-sm-0 mb-3"
                                               v-text="process.description">

                                            </p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </div>

        <div class="profile bg-secondary py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container class="">
                    <v-row class="justify-space-between align-center">
                        <v-col class="v-col-md-6 v-col-12">
                            <div class="position-relative">
                                <img :src="contact"
                                     alt="banner de perfil" class="w-100 rounded-md"/>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-5 v-col-12">
                            <div>
                                <h2 class="text-h5 text-dark mb-sm-5 mb-3">
                                    Iniciar un
                                    nuevo
                                    proyecto
                                </h2>
                                <p class="text-muted text-body-1">

                                    Bienvenido al emocionante comienzo de tu viaje hacia la materialización de tu
                                    visión. En iRepair Laboratorio, estamos listos para colaborar contigo en cada paso
                                    del camino. Desde la concepción de ideas hasta la implementación práctica, nuestro
                                    equipo dedicado trabajará incansablemente para convertir tus sueños en una realidad
                                    palpable. Con una combinación de creatividad, experiencia y compromiso, juntos
                                    crearemos algo extraordinario. ¡Vamos a empezar!
                                </p>
                                <div class="mt-sm-10 mt-5 border-top pt-3">
                                    <div class="d-flex align-center mb-2">
                                        <a class="text-decoration-none" href="tel:+573116500061" target="_blank">
                                            <v-icon color="primary">mdi-phone</v-icon>
                                        </a> &nbsp;
                                        <a href='https://wa.me/573116500061' target="_blank">
                                            <v-icon color="primary">mdi-whatsapp</v-icon>
                                        </a> &nbsp;
                                        <a href="tel:+573116500061">
                                            <h5 class="font-weight-medium text-h5 text-primary">
                                                +57 311 650 0061</h5>
                                        </a>
                                    </div>
                                    <div class="d-flex align-center">
                                        <a class="text-decoration-none" href="mailto:contacto@irepairsoft.com"
                                           target="_blank">
                                            <v-icon color="primary">mdi-email</v-icon>
                                        </a>

                                        <a class="font-weight-medium text-h5 text-primary ml-2"
                                           href="mailto:contacto@irepairsoft.com">
                                            contacto@irepairsoft.com
                                        </a>
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
.lh-10 {
    line-height: 10px;
}

.position-relative {
    position: relative !important;
}

.rounded-md {
    border-radius: 8px !important;
}

.overflow-hidden {
    overflow: hidden !important;
}

.hover-card .zoom-in {
    transition: all .4s ease-in-out;
}

.w-100 {
    width: 100% !important;
}

.v-responsive {
    display: flex;
    flex: 1 0 auto;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
}

.v-img {
    --v-theme-overlay-multiplier: 3;
    z-index: 0;
}
</style>
