<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
</script>

<template>
    <AdminLayout title="Dashboard">
        <v-container>
            <div v-for="item in 10" :key="item.id">
                {{ item }}
            </div>
        </v-container>
    </AdminLayout>
</template>
