<template>
    <div id="app">
        <div class="linea1"></div>
        <div class="linea2"></div>
        <div class="linea3"></div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const steps = ref(10); // Número de líneas en el escalón
</script>

<style>
/* Primera línea: ocupa el 80% de la página */
.linea1 {
    width: 80%;
    height: 30px;
    background: black;
}

/* Segunda línea: inicia donde termina la primera pero con una inclinación de 60 grados bajando 60px */
.linea2 {
    width: 30px; /* Usamos trigonometría para calcular el ancho */
    height: 100px;
    background: black;
    transform: rotate(-60deg); /* Rotamos la línea 60 grados en sentido antihorario */
    transform-origin: left top; /* El punto de rotación es el extremo izquierdo superior */
    position: relative; /* Posicionamos la línea de forma relativa */
    left: 80%; /* Movemos la línea a la derecha para que empiece donde termina la primera */
    top: 0px; /* Movemos la línea un pixel hacia arriba para que se alinee con la primera */
}

/* Tercera línea: comienza donde termina la segunda ocupando el 20% restante de la página */
.linea3 {
    position: relative; /* Posicionamos la línea de forma relativa */
    left: calc(80% + 60px); /* Movemos la línea a la derecha para que empiece donde termina la primera */
    width: 20%;
    height: 30px;
    right: 0;
    background: black;
    top: -65px; /* Movemos la línea 60px hacia arriba para que se alinee con la segunda */
}

</style>
