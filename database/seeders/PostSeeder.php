<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            [
                'title' => 'Introducción a la programación',
                'body' => 'En este post exploraremos los conceptos básicos de la programación y cómo comenzar a escribir código.'
            ],
            [
                'title' => 'Aprende a crear aplicaciones web con React',
                'body' => 'Descubre cómo construir aplicaciones web modernas utilizando la biblioteca de JavaScript, React.'
            ],
            [
                'title' => 'Los beneficios del aprendizaje en línea',
                'body' => 'Exploraremos las ventajas de adquirir nuevos conocimientos a través de plataformas de educación en línea.'
            ],
            [
                'title' => 'Recetas saludables para una dieta equilibrada',
                'body' => 'En este post, compartiremos algunas recetas deliciosas y saludables que puedes incorporar a tu dieta diaria.'
            ],
            [
                'title' => 'Introducción al diseño gráfico',
                'body' => 'Descubre los principios fundamentales del diseño gráfico y cómo aplicarlos en tus proyectos creativos.'
            ],
            [
                'title' => 'Consejos para mejorar la productividad personal',
                'body' => 'Aprende técnicas y hábitos que pueden aumentar tu productividad y ayudarte a gestionar mejor tu tiempo.'
            ],
            [
                'title' => 'Viaje virtual por las maravillas del mundo',
                'body' => 'Explora monumentos y lugares asombrosos alrededor del mundo a través de este recorrido virtual.'
            ],
            [
                'title' => 'Guía de fotografía para principiantes',
                'body' => 'Consejos básicos para aquellos que recién comienzan en el mundo de la fotografía y desean capturar momentos especiales.'
            ],
            [
                'title' => 'La importancia del ejercicio regular',
                'body' => 'Descubre los beneficios físicos y mentales de mantener una rutina de ejercicio regular en tu vida diaria.'
            ],
            [
                'title' => 'Cómo elegir el destino de tu próximo viaje',
                'body' => 'Consejos para planificar y seleccionar el destino perfecto para tus próximas vacaciones inolvidables.'
            ],
            [
                'title' => 'Iniciando tu propio negocio desde cero',
                'body' => 'Pasos esenciales para emprender y establecer con éxito tu propia empresa, desde la idea hasta la ejecución.'
            ],
            [
                'title' => 'La magia de la literatura clásica',
                'body' => 'Explora las obras literarias clásicas que han dejado una huella perdurable en la historia de la literatura.'
            ],
            [
                'title' => 'Consejos para mejorar tus habilidades de comunicación',
                'body' => 'Aprende a transmitir tus ideas de manera efectiva y a desarrollar una comunicación clara y persuasiva.'
            ],
            [
                'title' => 'Mitos y realidades sobre la alimentación saludable',
                'body' => 'Desentraña los mitos comunes relacionados con la alimentación saludable y obtén información basada en evidencia.'
            ],
            [
                'title' => 'Explorando el arte del origami',
                'body' => 'Sumérgete en el mundo del origami y aprende a crear impresionantes figuras tridimensionales con papel.'
            ],
            [
                'title' => 'Cómo cultivar un jardín en espacios reducidos',
                'body' => 'Consejos prácticos para crear y mantener un hermoso jardín incluso si dispones de poco espacio en casa.'
            ]
        ]);
    }
}
