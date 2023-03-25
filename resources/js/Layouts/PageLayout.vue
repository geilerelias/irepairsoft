<template>
    <v-app>
        <inertia-head :title="title"/>

        <page-drawer></page-drawer>
        <page-header></page-header>
        <v-main>
                <slot></slot>
            <page-footer></page-footer>
        </v-main>

    </v-app>

</template>

<script setup>

import PageDrawer from "../base/PageDrawer.vue";
import PageHeader from "../base/PageHeader.vue";
import PageFooter from "../base/PageFooter.vue";

defineProps({
    title: String,
});

</script>

