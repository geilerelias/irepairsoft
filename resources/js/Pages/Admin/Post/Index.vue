<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {computed, nextTick, reactive, ref} from 'vue';
import BreadCrumbs from "@/Components/BreadCrumbs.vue";
import Swal from 'sweetalert2'


const props = defineProps({
    posts: {
        //type: Object,
        default: () => ({}),
    }, users: {
        //type: Object,
        default: () => ({}),
    },
    can: {
        //type: Object,
        default: () => ({}),
    },
})

const headers = [
    {
        title: 'Title',
        align: 'start',
        sortable: false,
        key: 'title',
    },
    {title: 'Descripción', key: 'description'},
    {title: 'Actions', key: 'actions', sortable: false},

];

const links = [
    {
        title: 'Dashboard',
        disabled: true,
        href: '/dashboard',
    }, {
        title: 'Publicaciones',
        disabled: false,
        href: '/dashboard/post',
    }
];

let search = ref(null)
let dialog = ref(null)

let editedIndex = -1;

let editedForm = reactive({
    title: "",
    description: ""
});

let defaultForm = {
    title: "",
    description: ""
};

const isEdit = ref(null)
const titleRules = [
    v => !!v || 'Title is required',
    v => (v && v.length >= 10) || 'El titulo debe ser superior a 10'
]

const descriptionRules = [
    v => !!v || 'Description is required',
    v => (v && v.length >= 20) || 'La descripción debe ser superior a 20'
]

const formRef = ref(null)
const alert1 = ref(true)

const formTitle = computed(() => {
    return editedIndex === -1 ? 'Nueva Publicación' : 'Editar Publicación';
});


function save() {
    console.log("este es save")
    if (editedIndex > -1) {
        Object.assign(props.posts.data[editedIndex], editedForm)
        Swal.fire(
            'Modificación de registro!',
            'Tu modificación ha sido completado exitosamente y se ha actualizado correctamente en nuestro sistema.',
            'success'
        )
    } else {
        props.posts.data.push(editedForm)
        Swal.fire(
            'Agregando registro!',
            'Tu registro ha sido completado exitosamente y se ha registrado correctamente en nuestro sistema.',
            'success'
        )
    }
    close()
}


function editItem(item) {
    editedIndex = props.posts.data.indexOf(item)
    editedForm = Object.assign({}, item)
    dialog.value = true
}

function deleteItem(item) {
    console.log("delete: ", item)
    editedIndex = props.posts.data.indexOf(item)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
    console.log("Estes index", editedIndex)
    editedForm = Object.assign({}, item)
}


async function validate() {
    const {valid} = await formRef.validate()

    if (valid) alert('Form is valid')
}

function reset() {
    formRef.reset()
}

function resetValidation() {
    formRef.resetValidation()
}

function close() {
    dialog.value = false;
    nextTick(() => {
        // Restaurar el objeto editedItem a su valor por defecto
        editedForm = Object.assign({}, defaultForm);
        editedIndex = -1;
    });
}

</script>

<template>
    <admin-layout>
        <bread-crumbs :items="links" name="Gestión de publicaciones"></bread-crumbs>
        <v-container class="py-12">
            <v-alert
                v-model="alert1"
                :closable="true"
                border="start"
                class="mb-3"
                close-label="Close Alert"
                color="info"
                variant="tonal"
            >
                <template v-slot:title>
                    <span class="font-weight-bold text-uppercase text-subtitle-1"> Información relevante</span>

                </template>
                <div class="text-wrap text-justify">
                    ¡Página de configuración de publicaciones! ¡Aquí puede enumerar, crear, actualizar o
                    eliminar publicaciones!
                </div>
            </v-alert>
            <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                <v-card-text class="bg-white rounded-lg">

                    <v-data-table
                        :headers="headers"
                        :items="posts.data"
                        :search="search"
                        item-value="name"
                    >
                        <template v-slot:top>
                            <v-toolbar
                                :flat="true"
                                class="rounded"
                            >
                                <v-btn class="px-4 py-2 bg-green uppercase text-white" @click="dialog=true">
                                    <v-icon class="mr-1"
                                            icon="mdi-plus"></v-icon>
                                    Create
                                    Post
                                </v-btn>
                                <v-divider
                                    :inset="true"
                                    :vertical="true"
                                    class="mx-4"
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-inner-icon="mdi-magnify"
                                    class="mr-2"
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
        </v-container>

        <v-dialog
            v-model="dialog"
            width="auto"
        >
            <v-form ref="formRef" @submit.prevent="save">
                <v-card>
                    <v-card-title>{{ formTitle }}</v-card-title>
                    <v-card-text>

                        <v-text-field
                            v-model="editedForm.title"
                            :rules="titleRules" label="Título" variant="outlined"></v-text-field>
                        <v-textarea v-model="editedForm.description" :rules="descriptionRules" label="Descripción"
                                    variant="outlined"></v-textarea>
                        <v-spacer></v-spacer>


                        <div class="d-flex justify-space-around">
                            <v-btn class="mr-2" color="warning" @click="close()"> Cancelar</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" type="submit">{{
                                    isEdit === 'editar' ? 'Actualizar' : 'Guardar'
                                }}
                            </v-btn>
                        </div>

                    </v-card-text>

                </v-card>
            </v-form>
        </v-dialog>
    </admin-layout>
</template>

<style scoped>

</style>
