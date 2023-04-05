<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')    
      .col-lg-8.my-3 
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá conceptos claves para realizar el análisis de la información; se inicia con la organización y clasificación de los datos obtenidos en el ejercicio de campo desarrollado por el investigador, para lo cual se deben validar, previamente, las técnicas de recolección de datos, el tipo de investigación y los parámetros de clasificación estadísticos proyectados, desarrollando con lo anterior una organización y representación gráfica bajo variables y frecuencias, las cuales ayudan al análisis y a la interpretación objetiva de los resultados, potenciando con esto las conclusiones del documento final, que es elaborado con el apoyo de las herramientas tecnológicas actuales, entre las cuales se encuentran la aplicación de citas, reseñas bibliográficas, automatización del índice, automatización de tablas y gráficas, además de unas características de redacción, que permiten comprender y ubicar, de manera científica, las diferentes particularidades del documento final de la investigación.  
    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente componente formativo.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kqOT7-AdCK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)               
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
