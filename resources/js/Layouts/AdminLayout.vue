<template>
    <v-app>
<!--        <inertia-head :title="title"/>
        <admin-header></admin-header>

        <v-main>
            <slot></slot>
        </v-main>
        -->

        <v-layout ref="appRef">
            <admin-header name="app-bar"></admin-header>

            <admin-drawer></admin-drawer>


            <v-main class="d-flex" style="min-height: 300px;">
                <slot></slot>
            </v-main>

            <admin-footer></admin-footer>

        </v-layout>
    </v-app>
</template>

<script setup>

import AdminDrawer from "../base/AdminDrawer.vue";
import AdminHeader from "../base/AdminHeader.vue";
import AdminFooter from "../base/AdminFooter.vue";

defineProps({
    title: String,
});

</script>

