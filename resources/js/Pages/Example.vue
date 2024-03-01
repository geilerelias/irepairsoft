<template>
    <div class="container">
        <div class="image">
            <logo></logo>
        </div>
        <div class="logo">
            <logo></logo>
            <p>Soporte Técnico Apple</p>
        </div>
        <div class="text">
            <h1>RAPIDO</h1>
            <h1>CONFIABLE Y SEGURO</h1>
            <h2>REPARACION EN TIEMPO RECORD</h2>
        </div>
    </div>
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <!-- Fondo gris -->
        <rect x="0" y="0" width="200" height="200" fill="#f5f5f5"/>
        <!-- Figura geométrica grande -->
        <clipPath id="big-shape">
            <path d="M 50 50 L 150 50 L 175 100 L 150 150 L 50 150 L 25 100 Z"/>
        </clipPath>
        <image href="https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-15/298586034_201863088863725_4868329215289649250_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjQ3eDEyNDcuc2RyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=X-01SidTt-AAX8_Bxro&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkwMTI5MjMxNDk0OTgzNjkyMg%3D%3D.2-ccb7-5&oh=00_AfD9wflluKbuXMe7OfLa0MsFqlLgDUZW0bVwcjdzafsnfg&oe=659B1B15&_nc_sid=ee9879" clip-path="url(#big-shape)" width="200" height="200"/>
        <!-- Figura geométrica pequeña -->
        <clipPath id="small-shape">
            <path d="M 100 100 L 150 100 L 175 150 L 100 150 Z"/>
        </clipPath>
        <image href="https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/277473878_158093976610940_4053223824330779181_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=LOHoDywhNN4AX82g-qb&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfD4Kdu9kiV9FM7vVytVozcQ0jnqj_GXZ8oTl7bW-8a5Gw&oe=659DD259&_nc_sid=b41fef" clip-path="url(#small-shape)" width="200" height="200"/>
    </svg>

    <svg height="200" width="200">
        <!-- Línea -->
        <path d="M0,50 H140 Q160,50 160,70 V130 Q160,150 140,150 H0 Z" style="fill:none;stroke:black;stroke-width:50" />
    </svg>



</template>

<script>
import Logo from "@/Components/Logo.vue";

export default {
    name: "App",
    components: {Logo},
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    color: #4d4d4d;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.image {
    flex: 1;
    margin: 2rem;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
}

.logo img {
    width: 10rem;
    height: 10rem;
}

.logo p {
    font-size: 2rem;
    font-weight: bold;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
}

.text h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 0.5rem;
}

.text h2 {
    font-size: 3rem;
    font-weight: normal;
    margin: 0.5rem;
}
</style>
