<template>
    <v-app>
        <div v-scroll="onScroll">
            <v-app-bar>
                <v-app-bar-title>
                    example
                </v-app-bar-title>
                <v-banner
                    class="justify-center text-h5 font-weight-light"
                    sticky
                >
                    Scroll Me - Method invoked

                    <span
                        class="font-weight-bold"
                        v-text="scrollInvoked"
                    ></span>

                    times
                </v-banner>
                <v-app-bar-nav-icon>

                </v-app-bar-nav-icon>
            </v-app-bar>

            <v-container>
                <v-row>
                    <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
                        <v-col :cols="image.cols">
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
                                cover
                                height="100%"
                            ></v-img>
                        </v-col>

                        <v-col v-if="image.children" class="d-flex flex-column" cols="6">
                            <v-row>
                                <v-col v-for="(children,childIdx) in image.children" :key="childIdx"
                                       :cols="children.cols">
                                    <v-img
                                        :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                                        cover
                                        height="100%"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                    </template>
                </v-row>
            </v-container>

            <v-btn v-if="showButton"
                   bottom
                   class="mb-1" color="primary" icon="mdi-chevron-up" right
                   style="bottom: 0px; z-index: 1004; position: fixed; right: 0px;"
                   @click="scrollToTop">
            </v-btn>

        </div>
    </v-app>
</template>

<script setup>
import {useWindowScroll} from "@vueuse/core";
import {computed} from "vue";

let scrollInvoked = 0;
let offsetTop = 0;
let fab = null;

const {y} = useWindowScroll();
const showButton = computed(() => {
    return y.value > 100;
});

const imageLayout = [
    {cols: 4},
    {
        cols: 8,
        children: [{cols: 12}, {cols: 12}],
    },
    {cols: 6},
    {cols: 3},
    {cols: 9},
    {cols: 4},
    {cols: 8},
];

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

const onScroll = /*() =>{
    // this.offsetTop = e.target.scrollTop
    scrollInvoked++
}*/
    (e) => {
        offsetTop = e.target.scrollTop
    }

function toTop() {
}

</script>
