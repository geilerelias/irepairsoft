<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import BreadCrumbs from "@/Components/BreadCrumbs.vue";

const props = defineProps({
    permissions: {
        type: Object,
        default: () => ({}),
    },
    can: {
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
        title: 'Permisos',
        disabled: false,
        href: '/dashboard/permission',
    }
]
</script>

<template>
    <admin-layout>
        <bread-crumbs :items="links" name="Gestion de Permisos"></bread-crumbs>
        <div class="py-12">
            <v-container>
                <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="flex bg-gray justify-between items=center p-5">
                            <div class="flex space-x-2 items-center">
                                Permission Settings Page! Here you can list, create, update or delete permission!
                            </div>
                            <div v-if="can.create" class="flex space-x-2 items-center">
                                <a class="px-4 py-2 bg-green uppercase text-white rounded focus:outline-none flex items-center"
                                   href="#"><span
                                    class="iconify mr-1" data-icon="gridicons:create" data-inline="false"></span> Create
                                    Permission</a>
                            </div>
                        </div>
                    </div>
                </v-card>
                <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th class="py-3 px-6" scope="col">Name</th>
                                <th v-if="can.edit || can.delete" class="py-3 px-6" scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="permission in permissions.data" :key="permission.id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="py-4 px-6" data-label="Name">
                                    {{ permission.name }}
                                </td>
                                <td
                                    v-if="can.edit || can.delete"
                                    class="py-4 px-6"
                                >
                                    <div no-wrap type="justify-start lg:justify-end">
                                        <v-btn v-if="can.edit"
                                               class="ml-4 bg-green px-2 py-1 rounded text-white cursor-pointer">
                                            Edit
                                        </v-btn>
                                        <v-btn v-if="can.delete"
                                               class="ml-4 bg-red px-2 py-1 rounded text-white cursor-pointer">
                                            Delete
                                        </v-btn>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </v-card>
            </v-container>
        </div>

    </admin-layout>
</template>

<style scoped>

</style>
