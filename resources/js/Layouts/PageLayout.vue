<template>
    <v-app>
        <Head :title="title"/>

        <page-drawer></page-drawer>
        <page-header></page-header>
        <v-main>
            <slot></slot>
            <page-footer></page-footer>
        </v-main>

    </v-app>

</template>

<script setup>
import {onMounted} from "vue";
import PageDrawer from "../Base/PageDrawer.vue";
import PageHeader from "../Base/PageHeader.vue";
import PageFooter from "../Base/PageFooter.vue";
import {Head} from "@inertiajs/vue3";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

onMounted(() => {
    AOS.init();
})

defineProps({
    title: String,
});

</script>

<style>


.img-fluid {
    max-width: 100%;
    height: auto;
}

.browse-category .browse-img .browse-img-content {
    bottom: 20px;
    left: 25px
}

.browse-category .hover-card .zoom-in {
    transition: all .2s ease-in-out
}

.browse-category .hover-card:hover .zoom-in {
    transform: scale(1.1)
}

.hover-card .zoom-in {
    transition: all .2s ease-in-out
}

.hover-card:hover .zoom-in {
    transform: scale(1.1)
}

.mt-95 {
    margin-top: 95px;
}

.service-video {
    max-width: 1400px;
}
</style>
