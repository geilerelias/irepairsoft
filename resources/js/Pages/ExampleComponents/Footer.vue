<template>
    <v-footer dark padless>
        <v-card class="secondary white--text text-center" flat tile>
            <v-card-text>
                <v-btn
                    v-for="(icon, i) in icons"
                    :key="i"
                    :href="icon.link"
                    class="mx-4 white--text"
                    icon
                    target="_blank"
                >
                    <v-icon size="24px">{{ icon.text }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                Mauris cursus commodo interdum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Calango WEB</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<style scoped>
.v-card {
    width: 100%;
}
</style>

<script setup>
const icons = [
    {
        text: "mdi-facebook",
        link: "",
    },
    {
        text: "mdi-twitter",
        link: "",
    },
    {
        text: "mdi-linkedin",
        link: "",
    },
    {
        text: "mdi-instagram",
        link: "https://instagram.com/joabson_arley/",
    },
];

</script>
