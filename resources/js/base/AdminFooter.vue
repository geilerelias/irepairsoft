<template>
    <v-footer class="mx-auto" color="white" elevation="24">

        <v-row>
            <v-col class="col-md-4 col-12">
                <div>
                    <div class="d-flex align-center mb-4">
                        <logo></logo>
                    </div>
                    <h3 class="text-body-1 font-weight-bold mb-4 secondary--text ">
                        iRepairSoft
                    </h3>
                    <p class="text-body-1 grey--text mt-4 mb-6 pr-6 text-justify">
                        El Sistema Web para la Gestión del Servicio de Reparaciones de Dispositivos
                        mobiles surge como una solución de software desarrollado para agilizar
                        los procesos inherentes a los establecimientos de reparación.
                    </p>
                    <inertia-link class="text-decoration-none" href="/about-us">
                        <v-btn class="py-5 primary">
                            Buy now
                        </v-btn>
                    </inertia-link>
                </div>
            </v-col>
            <v-col class="col-md-4 col-12">
                <div class="container pa-0">
                    <div class="row justify-center">
                        <div class="col col-12"><h3
                            class="text-uppercase text-h6 font-weight-bold mb-1 primary--text">
                            Customer Service
                        </h3>
                            <v-divider class="primary mr-auto mb-6"
                                       style="max-width: 50%;">
                            </v-divider>

                            <div class="text-body-1 grey--text text--lighten-1 mb-6">
                                <a class="grey--text text-body-1 d-block mb-5" href="#">
                                    Payment Methods
                                </a>
                                <a class="grey--text text-body-1 d-block mb-5" href="#">
                                    Returns
                                </a>
                                <a class="grey--text text-body-1 d-block mb-5" href="#">
                                    Shipping
                                </a>
                                <a class="grey--text text-body-1 d-block mb-5" href="#">
                                    Terms and conditions
                                </a>
                                <a class="grey--text text-body-1 d-block mb-5" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="col-md-4 col-12">
                <v-container class="pa-0">
                    <v-row class="justify-center">
                        <div class="col col-12">
                            <h3
                                class="text-uppercase text-h6 font-weight-bold mb-1 primary--text">
                                Contact Us
                            </h3>

                            <v-divider class="primary mr-auto"
                                       style="max-width: 50%;">
                            </v-divider>
                            <div>
                                <div class="pt-2 mb-0 d-flex justify-start align-center">
                                    <v-avatar class="transparent" size="72">
                                        <v-icon size="36">
                                            mdi-map-marker-outline
                                        </v-icon>
                                    </v-avatar>

                                    <div class="text-body-1 grey--text text--lighten-1">
                                        <div>4932 College Street, <br>PHILIPSBURG</div>
                                    </div>
                                </div>

                                <v-divider class="my-2"></v-divider>

                                <div class="pt-2 mb-0 d-flex justify-start align-center">
                                    <v-avatar class="transparent" size="72">
                                        <v-icon size="36">mdi-phone-forward</v-icon>
                                    </v-avatar>

                                    <div class="text-body-1 grey--text text--lighten-1">
                                        <div>404-385-7987</div>
                                    </div>
                                </div>
                                <v-divider class="my-2"></v-divider>
                                <div class="pt-2 mb-0 d-flex justify-start align-center">
                                    <v-avatar class="transparent" size="72">
                                        <v-icon size="36">
                                            mdi-email
                                        </v-icon>
                                    </v-avatar>

                                    <div class="text-body-1 grey--text text--lighten-1">
                                        <div>john@vuetifyjs.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-divider aria-orientation="horizontal" class="my-4 v-divider theme--light" role="separator"/>
        <div class="text-center body-2 font-weight-bold gray--text  text--darken-4">
            2020 - {{ new Date().getFullYear() }} © All
            Rights
            Reserved
        </div>

    </v-footer>
</template>

<script>

import logo from '../../images/logo.jpg';
import Logo from "@/Components/Logo.vue";

export default {
    name: "Footer",
    components: {Logo},
    data: () => ({
        logo: logo,
        links: [
            {name: "Inicio", route: "home"},
            {name: "Acerca de", route: "aboutme"},
            {name: "Servicios", route: "services"},
            {name: "Contacto", route: "contact"}
        ]
    })
}
</script>

<style scoped>

</style>
