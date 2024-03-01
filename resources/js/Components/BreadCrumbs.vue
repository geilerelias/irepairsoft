<template>
    <v-sheet class="rounded-b-lg pa-4 ml-2 mt-0" elevation="2" width="100vw">
        <div class="d-flex justify-space-between">
            <div class="d-flex py-0 align-center">
                <div>
                    <h3 class="text-h6 mb-2">{{name}}</h3>

                    <v-breadcrumbs :items="items" class="font-weight-regular pa-0 ml-n1">
                        <template v-slot:item="{ item }">
                            <inertia-link v-if="!item.disabled" :href="item.href">
                                <v-breadcrumbs-item
                                    :disabled="item.disabled"
                                >
                                    {{ item.text }}
                                </v-breadcrumbs-item>
                            </inertia-link>
                            <v-breadcrumbs-item v-else
                                                :disabled="item.disabled"
                            >
                                {{ item.text }}
                            </v-breadcrumbs-item>
                        </template>
                    </v-breadcrumbs>
                </div>
            </div>
        </div>
    </v-sheet>
</template>

<script setup>

defineProps({
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})
</script>

<style>

</style>
