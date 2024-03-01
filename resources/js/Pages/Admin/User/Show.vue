<script setup>

import AdminLayout from "@/Layouts/AdminLayout.vue";
import BreadCrumbs from "@/Components/BreadCrumbs.vue";
import logoImageBackground from '../../../../images/reparacion-de-movil.jpeg'
import {useDisplay} from "vuetify";

const props = defineProps({
    user: {
        type: Object,
        default: () => ({}),
    },
})

const links = [
    {
        title: 'Dashboard',
        disabled: true,
        href: '/dashboard',
    }, {
        title: 'Users',
        disabled: true,
        href: '/dashboard/user',
    }, {
        title: 'Show',
        disabled: false,
        href: '/dashboard/user/show',
    }
]
const {lgAndUp} = useDisplay()
</script>

<template>
    <admin-layout>
        <bread-crumbs :items="links" name="Informacion de Usuario"></bread-crumbs>
        {{ user }}

        <v-container>
            <v-card class="elevation-10 rounded-md overflow-hidden">

                <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" :cover="true" :src="logoImageBackground" alt="profile" class="w-100" max-height="300"></v-img>
                <div class="pb-8">
                    <v-row class="mt-1">
                        <v-col class=" order-sm-second" cols="12" lg="4" sm="12">
                            <div class="px-4 py-1">
                                <v-row class="justify-center">
                                    <v-col class=" text-center" cols="4">
                                        <v-icon icon="mdi-file-document-outline"></v-icon>
                                        <h4 class="text-subtitle-1">938</h4>
                                        <h6 class="text-body-2 font-weight-regular">Posts</h6>
                                    </v-col>
                                    <v-col class="v-col v-col-4 text-center">
                                        <v-icon icon="mdi-account-circle-outline"></v-icon>
                                        <h4 class="text-subtitle-1">3,586</h4>
                                        <h6 class="text-body-2 font-weight-regular"> Followers </h6>
                                    </v-col>

                                    <v-col class="v-col v-col-4 text-center">
                                        <v-icon icon="mdi-account-group-outline"></v-icon>
                                        <h4 class="text-subtitle-1">2,659</h4>
                                        <h6 class="text-body-2 font-weight-regular"> Following </h6>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col class="v-col-sm-12 v-col-lg-4 v-col-12 d-flex justify-center order-sml-first">
                            <div :class="lgAndUp?'top-spacer':''" class="text-center">
                                <div class="avatar-border">
                                    <v-avatar
                                        class="userImage" size="100">
                                        <v-img :alt="user.name"
                                               :src="user.profile_photo_url"
                                               contain
                                        >
                                        </v-img>
                                    </v-avatar>
                                </div>
                                <h5 class="text-h5 mt-3">{{ user.name }}</h5>
                                <span class="text-h6 font-weight-regular">{{ user.email }}</span>
                            </div>
                        </v-col>
                        <v-col
                            class="v-col-lg-4 v-col-12 d-flex align-center justify-center justify-lg-end order-sm-third">
                            <div class="d-flex align-center justify-space-between px-10 py-1 gap-3">

                                <v-btn class="bg-primary">
                                    Add to Story
                                </v-btn>
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-card>
        </v-container>
    </admin-layout>
</template>

<style scoped>

.avatar-border {
    background-image: linear-gradient(rgb(14, 128, 31), rgb(39, 160, 182));
    border-radius: 50%;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.top-spacer {
    margin-top: -95px;
}
</style>
