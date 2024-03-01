<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    textModel: {
        type: String,
        default: 'posts',
    },
    pagination: Object,
})
const page = ref(1)
const totalPages = computed(() => {
    return Math.ceil(links.length / to)
})
const toggle = ref(null)

defineEmits(['paginate'])

const {from, to, total, current_page, last_page, links} = props.pagination;
</script>

<template>
    <div :key="new Date().getTime()">
        <div class="d-flex justify-space-between">
            <p>
                Mostrando de {{ from }} a {{ to }} de {{ total }} {{ textModel }}
            </p>
            <v-spacer></v-spacer>





            <template
                v-for="(link, l) in links"
                :key="link.label"
            >
                <v-btn
                    v-if="link.label === 'first'"
                    class="mx-1"
                    icon="mdi-skip-backward-outline"
                    size="small"
                    @click.prevent="$emit('paginate', 1)"
                >
                </v-btn>


                <v-btn
                    v-if="link.label === 'prev'"
                    class="mx-1"
                    icon="mdi-skip-previous-outline"
                    size="small"
                    @click="$emit('paginate', current_page - 1)"
                >
                </v-btn>


                <v-btn v-if="!isNaN(link.label)"
                       :class="[link.active ? 'text-white' : 'bg-white text-grey', 'border-gray-300']"
                       :color="link.active?'primary':''"
                       class="mx-1"
                       icon
                       size="small"
                       @click.prevent="$emit('paginate', link.label)"
                >
                    {{ link.label }}
                </v-btn>

                <v-btn v-if="link.label === 'next'"
                       class="mx-1"
                       icon="mdi-skip-next-outline"
                       size="small"
                       @click="$emit('paginate', current_page + 1)"
                >
                </v-btn>

                <v-btn v-if="link.label === 'last'"
                       class="mx-1"
                       icon="mdi-skip-forward-outline"
                       size="small"
                       @click="$emit('paginate', last_page)"
                >
                </v-btn>
            </template>
        </div>
    </div>
</template>
