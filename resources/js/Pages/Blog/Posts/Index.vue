<script setup>
import {onMounted, ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {router} from '@inertiajs/vue3'
import {Link} from "@inertiajs/inertia-vue3";
import Pagination from "@/Components/App/Pagination.vue";
import Post from "@/Components/App/Posts/Post.vue";
import AdminLayout from "../../../Layouts/AdminLayout.vue";
import BreadCrumbs from "../../../Components/BreadCrumbs.vue";

const props = defineProps({
    model: {
        type: Object,
        default: {
            posts: [],
            categories: {},
            tags: {},
            filters: {},
            initial_filters: {},
        },
    },
})

const input = ref(null);
const filters = ref(props.model.filters);

const links = [
    {
        title: 'Dashboard',
        disabled: true,
        href: '/dashboard',
    }, {
        title: 'Post',
        disabled: false,
        href: '/dashboard/posts',
    }
]

onMounted(() => input.value.focus());

const updateCategories = () => {
    filters.value.categories = props.model.filters.categories.map(id => {
        const category = props.model.categories.data.find(item => item.id === Number(id));
        return category || null;
    });
};

onMounted(updateCategories)

const exportToExcel = () => {
    let queryString = [];
    Object.keys(filters.value).forEach(key => {
        if (Array.isArray(filters.value[key])) {
            filters.value[key].forEach((value) => {
                queryString.push(`${key}[]=${value}`);
            });
        }
        if (typeof filters.value[key] === 'string') {
            if (filters.value[key]) {
                queryString.push(`${key}=${filters.value[key]}`);
            }
        }
    })
    window.location.href = `${window.route('posts.export-to-excel')}?${queryString.join('&')}`;
};

const paginate = page => {
    filters.value.page = page;
    router.get(route('posts.index'), filters.value, {
        preserveScroll: true,
    });
}

const filterData = () => {
    paginate();
}

const resetFilters = () => {
    filters.value = props.model.initial_filters;
    filterData();
    console.log(window.location.pathname);
    router.get(window.location.pathname);
}
</script>

<template>
    <admin-layout title="Posts">
        <bread-crumbs :items="links" name="Gestion de Post"></bread-crumbs>
        <v-container>

            <v-card flat="">
                <v-card-text class="d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap">
                    <v-btn class="bg-primary" variant="elevated"
                           @click="Inertia.visit(route('posts.create'))"
                    >
                        Crear nuevo post
                    </v-btn>

                    <v-btn color="primary"
                           flat=""
                           variant="outlined"
                           @click.prevent="exportToExcel"
                    >
                        Exportar a Excel
                    </v-btn>
                </v-card-text>

                <v-card-text class=" d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap">
                    <v-row>

                        <v-col cols="12" lg="3" md="6">
                            <v-text-field
                                ref="input"
                                v-model="filters.query"
                                clearable
                                density="compact"
                                hide-details
                                placeholder="Búsqueda por título"
                                prepend-inner-icon="mdi-magnify"
                                type="text"
                                variant="outlined"
                                @input="filterData"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-autocomplete
                                v-if="model.categories"
                                v-model="filters.categories"
                                :chips="true"
                                :items="model.categories.data"
                                :multiple="true"
                                closable-chips
                                density="compact"
                                hide-details
                                item-title="name"
                                item-value="id"
                                label="Categorías"
                                variant="outlined"
                                @update:modelValue="filterData"
                            >
                                <template v-slot:chip="{ props, item }">
                                    <v-chip
                                        :text="item.raw.name"
                                        :value="item.raw.id"
                                        v-bind="props"
                                    ></v-chip>
                                </template>

                                <template v-slot:item="{ props, item }">
                                    <v-list-item
                                        :title="item?.raw?.name"
                                        :value="item?.raw?.id"
                                        v-bind="props"
                                    >
                                    </v-list-item>
                                </template>
                            </v-autocomplete>
                        </v-col>

                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-autocomplete
                                v-if="model.tags"
                                v-model="filters.tags"
                                :chips="true"
                                :items="model.tags.data"
                                :multiple="true"
                                closable-chips
                                density="compact"
                                hide-details
                                item-title="name"
                                item-value="id"
                                label="Etiquetas"
                                variant="outlined"
                                @chip-input="filterData"
                            >
                                <template v-slot:chip="{ props, item }">
                                    <v-chip
                                        :text="item.raw.name"
                                        :value="item.raw.id"
                                        v-bind="props"
                                    ></v-chip>
                                </template>

                                <template v-slot:item="{ props, item }">
                                    <v-list-item
                                        :title="item?.raw?.name"
                                        :value="item?.raw?.id"
                                        v-bind="props"
                                        @click="filterData"
                                    >
                                    </v-list-item>
                                </template>
                            </v-autocomplete>
                        </v-col>

                        <v-col class="d-flex justify-center" cols="12" lg="3" md="6">
                            <v-btn color="primary"
                                   rounded="xl"
                                   size="large"
                                   @click="resetFilters"
                            >
                                Restablecer filtros
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

        </v-container>

        <v-container>
            <div class="py-8">
                <div>

                    <!--                    <div>
                                            <div class="col-span-1">
                                                <input
                                                    ref="input"
                                                    v-model="filters.query"
                                                    placeholder="Búsqueda por título"
                                                    type="text"
                                                    @input="filterData"
                                                />
                                            </div>
                                            <div class="col-span-1">
                                                <select
                                                    v-if="model.categories"
                                                    v-model="filters.categories"
                                                    multiple
                                                    @change="filterData"
                                                >
                                                    <option v-for="category in model.categories.data" :value="category.id">
                                                        {{ category.name }}
                                                    </option>

                                                </select>

                                            </div>
                                            <div class="col-span-1">
                                                <select
                                                    v-if="model.tags"
                                                    v-model="filters.tags"
                                                    multiple
                                                    @change="filterData"
                                                >
                                                    <option v-for="tag in model.tags.data" :value="tag.id">
                                                        {{ tag.name }}
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="col-span-1 mx-auto my-auto">
                                                <button
                                                    type="button"
                                                    @click="resetFilters"
                                                >
                                                    Restablecer filtros
                                                </button>
                                            </div>
                                        </div>-->

                    <div>
                        <v-row v-if="model.posts.data.length" >
                            <v-col
                                v-for="post in model.posts.data"
                                :key="post.id"
                                class="d-flex child-flex"
                                cols="6"
                            >
                                <Post
                                    :post="post"
                                />
                            </v-col>
                        </v-row>
                        <v-row v-else class="text-center py-4">
                            <v-col>
                                <h3>No hay posts</h3>
                                <p>Crea el primer post.</p>
                                <div class="mt-6">
                                    <Link
                                        :href="route('posts.create')"
                                    >
                                        Nuevo Post
                                    </Link>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                    <Pagination
                        v-if="model.posts.data.length"
                        :pagination="model.posts.meta"
                        @paginate="paginate"
                    />
                </div>
            </div>
        </v-container>
    </admin-layout>
</template>
