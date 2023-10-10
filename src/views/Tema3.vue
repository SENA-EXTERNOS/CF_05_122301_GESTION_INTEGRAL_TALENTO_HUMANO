<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .bloque-fondo4
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 3
        h1 Visualización de datos
      .row.justify-content-center.align-items-start.mb-4
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')        
        .col-lg-8.my-3
          p(data-aos="fade-down") Para una mejor interpretación de los datos su visualización se realiza de manera gráfica y es por eso que se utilizan herramientas para darle una mejor proyección a los datos, para que permitan ver a manera de cuadros y mapas entre otras opciones, mostrando un panorama suficiente para determinar, de alguna manera, decisiones vitales para la empresa u orientar a un equipo para alcanzar algún objetivo. Por esta razón, las herramientas de visualización proporcionan una manera de ver los datos de forma atípica y entender los patrones en ellos. En la actualidad, los datos y las herramientas de visualización son indispensables para la toma de decisiones basadas en la información que se tiene. 

      .row.justify-content-center.align-items-start.mb-4
        .col-lg-8.my-3
          p(data-aos="fade-down") Normalmente, los datos, cuando son visualizados a través de una imagen, son más atractivos y se pueden realizar deducciones con mayor claridad y entendimiento para el grupo de trabajo; cuando se observa un gráfico, normalmente se distinguen con rapidez las tendencias y sus valores atípicos; por poner un ejemplo, en una hoja de cálculo con cientos de datos, es difícil ver una tendencia o ver algo que se quiera identificar, lo que no sucede con las gráficas; es por eso que, en el campo del <i>big data</i>, a medida que la ciencia de datos se introduce cada vez más y más en la cotidianidad de las predicciones en una empresa y se tornan indispensables para el futuro de las mismas, se puede decir que todo lo que gira en torno a ellas, va escalando en importancia para su correcta utilización e interpretación y de esa manera le dan sentido a los millones de datos que circulan diariamente por la red. 
          .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Sin embargo, es difícil de comprender hoy en día, que los sectores productivos de un país no se beneficien normalmente de los datos y de sus predicciones para la toma de decisiones; las habilidades de las personas tienden a cambiar para volcarse a la interpretación de los datos, mediante la utilización de las herramientas que se han creado para ese fin.          
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')

    p(data-aos="fade-down") Cuando se empieza un proyecto de visualización, la duda que se presenta es: cuál herramienta utilizar para poder realizar un trabajo que satisfaga las necesidades del usuario final. 
    
    p(data-aos="fade-down").mb-5 Por tanto, es bueno tener en cuenta la siguiente guía que ayuda a la escogencia de la herramienta o librería indicada:    

    ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')

      .tarjeta.color-primario.p-3(x="39%" y="34%" numero="+")
        p.mb-0 Es la librería más antigua de todas y, así mismo, es la más potente; de hecho, de esta librería surgen muchas otras más y se caracteriza por su gran posibilidad de poder hacer de todo con ella, pero de ahí viene también su complejidad y conseguir información de cómo hacer las cosas.  
      .tarjeta.color-primario.p-3(x="62.6%" y="33.8%" numero="+")
        p.mb-0 Es una de las librerías más recientes, pero no por eso deja de ser una herramienta sofisticada y potente porque permite realizar gráficos interactivos al estilo de D3.js (<i>Data-Driven Documents</i> - librería JavaScript que se utiliza para manipular y visualizar documentos basados en datos), se caracteriza por su fácil trabajo con los navegadores actuales debido a que sus gráficas profesionales son congruentes con los grandes volúmenes de datos que se pueden manejar; es una gran herramienta para cualquier persona que quiera graficar de manera rápida y sencilla, gráficos interactivos como <i>dashboards</i>; sin embargo, esta librería es capaz de crear gráficos estáticos, como interactivos. 
      .tarjeta.color-primario.p-3(x="39%" y="63.8%" numero="+")
        p.mb-0 Si se quiere realizar gráficos geográficos, esta librería es la indicada porque permite realizar gráficos de alta densidad e interactivos, al estilo de Leaflet.js (una librería JavaScript <i>open source</i>, que se centra en un conjunto básico de características), porque los gráficos de Folium son interactivos y hace que sea la herramienta ideal para realizar <i>dashboards</i>. 
      .tarjeta.color-primario.p-3(x="62.6%" y="63.8%" numero="+")
        p.mb-0 Librería especializada en gráficos estadísticos y está basada en la librería Matplotlib; con ella se pueden elaborar visualizaciones complejas de manera sencilla; una de las características de esta librería es el desarrollo de regresiones lineales, distribuciones de una o varias variables aleatorias, que le dan más importancia para que sea una buena opción a la hora de graficar.

    p(data-aos="fade-down").mb-5 En conclusión, la visualización de los datos es la herramienta utilizada para la comprensión, difusión y análisis de los datos en la empresa, en los procesos de toma de decisiones. Se ha constituido en un gran aporte en los informes empresariales, y es asumida por los analistas de la mano de la tecnología, como un proceso clave en la inteligencia empresarial.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.up(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/44.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 El manejo de los datos amerita un proceso de organización, y la estadística descriptiva ofrece las herramientas básicas conocidas como tablas y gráficos, los cuales, además de la organización, favorecen la visualización gráfica, permitiendo una mejor comprensión del comportamiento de los datos. Los procesadores tecnológicos de datos, permiten la elaboración de ambos recursos, y para la estadística, su combinación es fundamental. 

      .row.justify-content-center.align-items-start.mb-3.pt-5
        .col-lg-8.my-3
          p(data-aos="fade-down") En la empresa, es usual encontrar reportes de datos gráficos, debido a que las imágenes son un recurso esencial en la comunicación de la información empresarial en cualquier área. Los gráficos de producción, las proyecciones de venta, los resultados en rentabilidad, en su mayoría, son representados a través de visualizaciones estadísticas gráficas.
          .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Tratándose de #[i big data] y datos masivos, existen múltiples, productivas y exitosas herramientas de visualización de los datos, en donde la tecnología proporciona la visualización dinámica, simulando comportamientos, tendencias y otras generalizaciones esenciales en los grandes flujos de información, de la cual se amerita tomar decisiones.        
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')

    p(data-aos="fade-down") Es evidente que, para la visualización de los datos masivos, se necesita de #[i software] especializados, y de competencias específicas para su manejo. 
    p(data-aos="fade-down").mb-5 A continuación, se mencionan algunas herramientas de #[i big data] utilizadas para el procesamiento y visualización de los datos en la empresa:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.up      
      SlyderF.custom.mb-5(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/46.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Tableau
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/47.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Infogram
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/48.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 ChartBlocks
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/49.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Datawrapper
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/50.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Ploty
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/51.png' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Visual.ly        
          
      .row.justify-content-center.align-items-start.mb-4
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')        
        .col-lg-8.my-3
          p(data-aos="fade-down") Los informes de datos masivos, debido a la cantidad de datos que manejan, no pueden consistir en informes tradicionales, sino que la forma de prepararlos es con contenido visual, lo cual permite condensar la información y presentarla de una manera atractiva. Para ello, las mismas herramientas de visualización poseen “salidas” bajo diferentes combinaciones de datos, que permiten al analista “jugar” con la forma en que presenta sus informes para la audiencia respectiva. 
          .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Es importante destacar que, a pesar que los modelos estadísticos son los más comunes para la presentación de los datos numéricos, sean o no de <i>big data</i>, hoy en día los elementos contextuales, como presentaciones con imágenes visuales, como el caso de las infografías, son un recurso en auge y que llama la atención en la comprensión de los datos, resultando estos, interpretables a primera vista, atractivos y de fácil retención, tanto para el analista, como para el usuario de los datos. 

    p(data-aos="fade-down").mb-5 Para ampliar la información sobre los informes como herramienta de presentación de datos, lo invitamos a ver el siguiente video.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6o_YCyl3aTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaC,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
