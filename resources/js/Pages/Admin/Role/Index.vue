<script setup>

import AdminLayout from "../../../Layouts/AdminLayout.vue";
import BreadCrumbs from "@/Components/BreadCrumbs.vue";
import {VDataTable} from 'vuetify/labs/VDataTable'
import {computed, onMounted, ref} from 'vue';
import {useForm} from '@inertiajs/vue3'


const props = defineProps({
    roles: {
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
        title: 'Roles',
        disabled: false,
        href: '/dashboard/role',
    }
]

let dialogDelete = ref(false);
let dialog = ref(false)

const headers = [
    {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name',
    },
    {title: 'Calories', key: 'calories'},
    {title: 'Fat (g)', key: 'fat'},
    {title: 'Carbs (g)', key: 'carbs'},
    {title: 'Protein (g)', key: 'protein'},
    {title: 'Actions', key: 'actions', sortable: false},
];

const form = useForm({
    name: '',
    description: '',
})

const headersRoles = [

    {
        title: 'Nombre',
        key: 'name',
    }, {
        title: 'Descripción', key: 'description'
    },
    {
        title: 'Actions',
        key: 'actions',
        sortable: false
    },
];

let desserts = [];

let editedIndex = ref(-1);

const editedItem = ref({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
});

const defaultItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
};


const formTitle = computed(() => {
    if (editedIndex.value === -1) {
        return 'Crear nuevo rol';
    }
    return 'Editar rol';
});
let dialog2 = ref(false)
const alert1 = ref(true)
const search = ref(null)

function submit() {

    form.post(route('role.store'), {
        preserveScroll: true,
        onSuccess: (response) => {
            console.log(response)
        },
    })
    console.log(form)
}


function editItem(item) {
    editedIndex = props.roles.data.indexOf(item);
    console.log(editedIndex)
    Object.assign(editedItem, item);
    dialog.value = true;
}

function deleteItem(item) {
    editedIndex = props.roles.data.indexOf(item);
    Object.assign(editedItem, item);
    dialogDelete = true;
}

function deleteItemConfirm() {
    desserts.splice(editedIndex, 1);
    closeDelete();
}

function close() {
    dialog.value = false;
    Object.assign(editedItem, defaultItem);
    editedIndex = -1;
}

function closeDelete() {
    dialogDelete = false;
    Object.assign(editedItem, defaultItem);
    editedIndex = -1;
}

function save() {
    if (editedIndex > -1) {
        Object.assign(desserts[editedIndex], editedItem);
    } else {
        desserts.push(editedItem);
    }
    close();
}

</script>


<template>
    <admin-layout>
        <bread-crumbs :items="links" name="Gestion de Rol"></bread-crumbs>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-alert
                        v-model="alert1"
                        :closable="true"
                        border="start"
                        class="mb-3"
                        close-label="Close Alert"
                        variant="tonal"
                    >
                        <template v-slot:title>
                            <span class="font-weight-bold text-uppercase text-subtitle-1">
                                ¡Página de gestión de roles!
                            </span>
                        </template>

                        <div class="text-wrap text-justify">
                            Los roles en un sistema brindan control y administración de
                            accesos al asignar funciones y permisos específicos a los usuarios, garantizando la
                            seguridad y
                            eficiencia del sistema.
                            ¡Aquí puede enumerar, crear, actualizar o eliminar funciones!

                        </div>
                    </v-alert>
                </v-col>
                <v-col>
                    <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                        <v-card-text class="bg-white rounded-lg">

                            <v-data-table
                                :headers="headersRoles"
                                :items="roles.data"
                                :search="search"
                                item-value="name"
                            >
                                <template v-slot:top>
                                    <v-toolbar
                                        :flat="true"
                                        class="rounded"
                                    >
                                        <v-text-field
                                            v-model="search"
                                            append-inner-icon="mdi-magnify"
                                            class="mx-2"
                                            clearable
                                            density="compact"
                                            hide-details
                                            label="Search templates"
                                            single-line
                                            variant="solo"
                                        ></v-text-field>
                                    </v-toolbar>
                                </template>

                                <template v-if="can.edit || can.delete" v-slot:item.actions="{ item }">
                                    <v-icon
                                        v-if="can.edit"
                                        class="me-2"
                                        size="small"
                                        @click="editItem(item.raw)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        v-if="can.delete"
                                        size="small"
                                        @click="deleteItem(item.raw)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                                <template v-slot:no-data>
                                    <v-btn
                                        color="primary"
                                        @click="initialize"
                                    >
                                        Reset
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                        <v-toolbar
                            cards
                            dark
                            flat
                        >
                            <v-card-title>
                                {{ formTitle }}
                            </v-card-title>

                        </v-toolbar>

                        <v-card-text class="bg-white rounded-b-lg">
                            <v-form @submit.prevent="submit">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="form.name"
                                                      :error-messages="form.errors.name"
                                                      density="compact"
                                                      label="Nombre"
                                                      variant="outlined">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea v-model="form.description"
                                                    :error-messages="form.errors.description"
                                                    density="compact"
                                                    label="Descripción"
                                                    variant="outlined">
                                        </v-textarea>
                                    </v-col>
                                    <v-col>
                                        <v-btn :block="true" :disabled="form.processing" color="primary" type="submit">
                                            agregar
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>


            </v-row>
        </v-container>
    </admin-layout>
</template>


<style lang="scss" scoped>

</style>
