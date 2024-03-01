<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import Badge from "@/Components/App/Badge.vue";

defineProps({
    post: Object,
})
</script>

<template>
    <v-card class="pa-2 ma-2" style="width: 100%;">
        <v-card-title>
            <h2 class="text-xl font-medium text-indigo-darken-2 underline text-truncate">
                <Link :href="route('posts.edit', post)" class="focus:outline-none ">
                    {{ post.title }}
                </Link>
            </h2>
        </v-card-title>
        <v-card-text>
            <small>({{ post.created_at }})</small>
            <h3 class="text-lg font-medium">
                {{ post.user.name }}
            </h3>
            <p class="mt-2 text-sm text-grey-darken-3">
                Categorías:
                <Badge :text="post.category.name"/>
            </p>
            <p class="mt-2 text-sm text-grey-darken-3">
                Etiquetas:
                <Badge
                    v-for="tag in post.tags"
                    :key="tag.id"
                    :text="tag.name"
                />
            </p>
        </v-card-text>
    </v-card>
</template>
