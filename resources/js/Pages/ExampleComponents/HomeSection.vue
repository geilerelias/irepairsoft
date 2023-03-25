<template>
    <section id="hero">
        <v-parallax :src="bgHero" dark height="750">
            <v-row class="fill-height align-center justify-center text-white" align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="6" xl="8">
                            <h1 class=" text-h2 font-weight-bold mb-4">Vuetify.js</h1>
                            <h1 class="font-weight-light">
                                Lorem ipsum dolor sit amet consectetur <br/>
                                adipisicing elit. Maiores porro voluptatibus <br/>
                                delectus nam optio harum!
                            </h1>
                            <v-btn
                                class="mt-5"
                                dark
                                large
                                variant="outlined"
                                rounded
                                @click="$vuetify.goTo('#features')"
                            >
                                Saiba mais
                                <v-icon class="ml-2">mdi-arrow-down</v-icon>
                            </v-btn>
                            <div class="video d-flex align-center py-4">
                                <a class="playBut" @click.stop="dialog = true">
                                    <svg
                                        enable-background="new 0 0 213.7 213.7"
                                        height="60px"
                                        version="1.1"
                                        viewBox="0 0 213.7 213.7"
                                        width="60px"
                                        x="0px"
                                        xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        y="0px"
                                    >
                    <polygon
                        id="XMLID_18_"
                        class="triangle"
                        fill="none"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="7"
                    />

                                        <circle
                                            id="XMLID_17_"
                                            class="circle"
                                            cx="106.8"
                                            cy="106.8"
                                            fill="none"
                                            r="103.3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="10"
                                            stroke-width="7"
                                        />
                  </svg>
                                </a>
                                <p class="subheading ml-2 mb-0">Assista o vídeo</p>
                            </div>
                        </v-col>
                        <v-col class="hidden-sm-and-down" cols="12" md="6" xl="4"></v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="svg-border-waves text-white">
                <v-img :src="borderWaves"/>
            </div>
        </v-parallax>
        <v-container id="features" class="mt-2" fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="space-around">
                        <!-- <v-col cols="12" class="text-center">
                          <h1 class="font-weight-light display-2">Title</h1>
                          <h1 class="font-weight-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </h1>
                        </v-col> -->
                        <v-col
                            v-for="(feature, i) in features"
                            :key="i"
                            class="text-center"
                            cols="12"
                            sm="4"
                        >
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                    :class="{ up: hover }"
                                    :elevation="hover ? 10 : 4"
                                    class="card"
                                    shaped
                                >
                                    <v-img
                                        :class="{ 'zoom-efect': hover }"
                                        :src="feature.img"
                                        class="d-block ml-auto mr-auto"
                                        max-width="100px"
                                    ></v-img>
                                    <h1 class="font-weight-regular">{{ feature.title }}</h1>
                                    <h4 class="font-weight-regular subtitle-1">
                                        {{ feature.text }}
                                    </h4>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialog" max-width="640px">
            <v-card>
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0"
                        height="701" src="https://www.youtube.com/embed/i8IvvHJssWE"
                        title="Best Code Editor for Vue.js"
                        width="1246">
                </iframe>
            </v-card>
        </v-dialog>
        <div class="svg-border-waves">
            <img :src="wave2"/>
        </div>
    </section>
</template>

<script setup>
import {ref, watch} from "vue";

import * as easings from 'vuetify/lib/services/goto/easing-patterns'


import bgHero from '../../../images/img/bgHero.jpg'
import icon3 from '../../../images/img/icon3.png'
import icon2 from '../../../images/img/icon2.png'
import icon1 from '../../../images/img/icon1.png'
import borderWaves from "../../../images/img/borderWaves.svg"
import wave2 from "../../../images/img/wave2.svg"

let dialog = ref(false);
let videoId = ref("i8IvvHJssWE");
const player = ref(null)

let features = [
    {
        img: icon2,
        title: "Design Limpo",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: icon1,
        title: "Dados Seguros",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: icon3,
        title: "Código Aberto",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];


watch(dialog, (value) => {
    if (!value) {
        pause();
    }
})

function ready(event) {

    let player;
    player = event.target;
}

function playing(event) {

}


function change() {
    // when you change the value, the player will also change.
    // If you would like to change `playerVars`, please change it before you change `videoId`.
    // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
    // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
    videoId = "another video id";
}

function stop() {
    player.stopVideo();
}

function pause() {
    this.player.pauseVideo();
}


</script>

<style lang="scss">
.circle {
    stroke: white;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
}

.playBut {
    /*  border: 1px solid red;*/
    display: inline-block;
    -webkit-transition: all 0.5s ease;

    .triangle {
        -webkit-transition: all 0.7s ease-in-out;
        stroke-dasharray: 240;
        stroke-dashoffset: 480;
        stroke: white;
        transform: translateY(0);
    }

    &:hover {
        .triangle {
            stroke-dashoffset: 0;
            opacity: 1;
            stroke: white;
            animation: nudge 0.7s ease-in-out;

            @keyframes nudge {
                0% {
                    transform: translateX(0);
                }
                30% {
                    transform: translateX(-5px);
                }
                50% {
                    transform: translateX(5px);
                }
                70% {
                    transform: translateX(-2px);
                }
                100% {
                    transform: translateX(0);
                }
            }
        }

        .circle {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }
}
</style>

<style>
.btn-play {
    transition: 0.2s;
}

.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}

#hero {
    z-index: 0;
}

.svg-border-waves img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -2px;
    z-index: -1;
}

.card {
    min-height: 300px;
    padding: 10px;
    transition: 0.5s ease-out;
}

.card .v-image {
    margin-bottom: 15px;
    transition: 0.75s;
}

.card h1 {
    margin-bottom: 10px;
}

.zoom-efect {
    transform: scale(1.1);
}

.up {
    transform: translateY(-20px);
    transition: 0.5s ease-out;
}
</style>

<style>
section {
    position: relative;
}
</style>

