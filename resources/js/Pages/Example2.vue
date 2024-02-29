<!--<template>
    <v-app id="inspire">
        <v-navigation-drawer :permanent="true" v-model="drawer">
            &lt;!&ndash;  &ndash;&gt;
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <br>
            <p>
                {{drawer}}
            </p>

            &lt;!&ndash;  &ndash;&gt;
        </v-main>
    </v-app>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useAdminDrawerStore} from '../../stores/adminDrawer';

const adminDrawerStore = useAdminDrawerStore();

const drawer = computed(() => adminDrawerStore.adminDrawer);

const toggleDrawer = () => {
    adminDrawerStore.toggleDrawer();
};
</script>-->
<template>
    <v-app>
        <v-layout ref="appRef" class="rounded rounded-md">
            <v-app-bar color="grey-lighten-2" name="app-bar">
                <v-btn class="mx-auto" @click="print('app-bar')">Get data</v-btn>
            </v-app-bar>

            <v-navigation-drawer
                color="grey-darken-2"
                name="drawer"
                permanent
            >
                <div class="d-flex justify-center align-center h-100">
                    <v-btn @click="print('drawer')">Get data</v-btn>
                </div>
            </v-navigation-drawer>

            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                Main Content
            </v-main>

            <v-footer
                app
                name="footer"
            >
                <footer class="layout-footer">
                    <div class="footer-content-container">
                        <div class="h-100 d-flex align-center justify-space-between"><span class="d-flex align-center"> © 2023 Made With <svg
                            aria-hidden="true" class="v-icon notranslate v-theme--light text-error mx-1 iconify iconify--mdi"
                            height="1em" role="img" style="font-size: 1.25rem; height: 1.25rem; width: 1.25rem;"
                            tag="i" viewBox="0 0 24 24"
                            width="1em" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                                                                                               fill="currentColor"></path></svg> By <a
                            class="text-primary ms-1" href="https://themeselection.com" rel="noopener noreferrer"
                            target="_blank">ThemeSelection</a></span><span
                            class="d-md-flex gap-x-4 text-primary d-none"><a href="https://themeselection.com/license/"
                                                                             target="noopener noreferrer">License</a><a
                            href="https://themeselection.com/" target="noopener noreferrer">More Themes</a><a
                            href="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/"
                            target="noopener noreferrer">Documentation</a></span></div>
                    </div>
                </footer>
            </v-footer>
        </v-layout>
    </v-app>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import {useAdminDrawerStore} from '../../stores/adminDrawer';

const overlay = ref(false)


watch(overlay, (val) => {
    if (val) {
        setTimeout(() => {
            overlay.value = false
        }, 2000)
    }
})

const adminDrawerStore = useAdminDrawerStore();

let drawer = computed({
    get: () => adminDrawerStore.adminDrawer,
    set: (value) => {
        // Realiza alguna lógica adicional antes de asignar el valor
        adminDrawerStore.adminDrawer = value;
    }
});


const toggleDrawer = () => {
    adminDrawerStore.toggleDrawer();
};

const appRef = ref(null);

const print = (key) => {
    console.log(appRef)
    alert(JSON.stringify(appRef.getLayoutItem(key), null, 2));
};

</script>
