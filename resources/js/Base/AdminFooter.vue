<script setup>

import {useLinksStore} from '../../stores/links';

const linkStore = useLinksStore();

let links = linkStore.links;

</script>

<template>
    <v-divider class="bg-grey pa-1"></v-divider>
    <v-footer
        :app="true"
        name="app-footer"
    >

        <v-container>
            <div class="h-100 d-flex align-center justify-space-between">
                <span class="d-flex align-center font-weight-bold"> © 2023 iRepairSoft</span>


                <span
                    class="d-md-flex  text-primary d-none">
                    <inertia-link v-for="link in links" :key="link.id" :href="link.route"
                                  class="text-decoration-none text-primary px-2"
                                  target="noopener noreferrer">
                        {{ link.title }}
                    </inertia-link>
                </span>
            </div>
        </v-container>

    </v-footer>
</template>
