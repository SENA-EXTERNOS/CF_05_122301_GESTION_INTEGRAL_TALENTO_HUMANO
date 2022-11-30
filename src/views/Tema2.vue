<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Análisis exploratorio de datos

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-8.my-3 
        p(data-aos="fade-down") Teniendo claros los conceptos de estadística, se prosigue con el análisis exploratorio de datos EDA, el cual se refiere a la utilización de herramientas como gráficos y visualizaciones, para explorar y analizar un conjunto de datos, conocerlos y comprender lo que se puede averiguar de ellos.

        p(data-aos="fade-down") El análisis exploratorio de datos es un trabajo en el que se buscan claves y pistas que puedan conducir a la identificación de las posibles causas de origen del problema que se intenta resolver. Se examinan las variables de una en una, luego de dos en dos, y después, muchas variables al mismo tiempo.
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El EDA comprende tablas de resúmenes estadísticos como la media y la desviación estándar, pero la mayor parte de los individuos se centran en los gráficos, los cuales son variados, y herramientas exploratorias. 
       
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')    
    p(data-aos="fade-down").mb-5 A continuación, se presenta una lista de varios tipos de gráficos que se pueden utilizar en el análisis de datos. 
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-secundario
        .row.justify-content-center.align-items-start.pt-3(titulo="Diagrama de barras")
          .col-md-7.mb-4.mb-md-0
            p Es un gráfico de barras horizontales que acopia la frecuencia con que se repite una determinada variable en cada uno de los diferentes grupos en los que se divide un conjunto. Un ejemplo típico es la pirámide de población.      
          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='')
        .row.justify-content-center.align-items-start.pt-3(titulo="Diagrama de Pareto")
          .col-md-7.mb-4.mb-md-0
            p Es un gráfico que organiza valores, que se encuentran separados por barras y se organizan de mayor a menor y de izquierda a derecha, respectivamente.
            p Se basa en el principio que establece que el 20 % de las causas generan el     80 % de los efectos o resultados. Por ejemplo, de los problemas que tiene una determinada empresa, el 20 % de ellos genera el 80 % de sobrecostos.
          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')     
        .row.justify-content-center.align-items-start.pt-3(titulo="Gráfico en mosaico")
          .col-md-7.mb-4.mb-md-0
            p Es un gráfico que organiza valores, que se encuentran separados por barras y se organizan de mayor a menor y de izquierda a derecha, respectivamente.
            p Se basa en el principio que establece que el 20 % de las causas generan el     80 % de los efectos o resultados. Por ejemplo, de los problemas que tiene una determinada empresa, el 20 % de ellos genera el 80 % de sobrecostos.
 
          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='')
        .row.justify-content-center.align-items-start.pt-3(titulo="Diagrama en árbol")
          .col-md-7.mb-4.mb-md-0
            p Es un gráfico que indica una estructura jerárquica de datos, con rectángulos de colores y tamaños diferentes y visualiza los posibles resultados de un experimento, que consta de una serie de pasos, donde cada uno de ellos tiene una cantidad infinita de formas para llevarlas a cabo. Se utiliza en los problemas de conteo y probabilidad. 
          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/25.png', alt='')

    .bg3
      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Variables 

      .row.justify-content-center.align-items-start.mb-4           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Ahora, es necesario hablar, también, de la variable, la cual se refiere a cualquier elemento que puede ser manipulado, controlado o medido en un experimento, investigación o en cualquier tipo de acción. En una investigación se identifican varios tipos de variables.

          p(data-aos="fade-down") Las variables son características o magnitudes (medidas), que pueden tomar diferentes valores o estados en el tiempo, es decir, son dinámicas. 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.up(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/28.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 Se encuentra también la variable de investigación o variable de estudio, término que se usa para aludir a cualquier modelo de relación de causa y efecto. O sea que, una variable representa un atributo medible que cambia durante el proceso de un experimento, comprobando los resultados. Estas propiedades contienen diferentes medidas, dependiendo de las variables, del contexto del estudio, o de los límites que los investigadores consideren.  
              
      p(data-aos="fade-down") Estas variables de investigación se dividen en varios tipos, dependiendo de su nivel operativo, de la relación con otras variables y de la escala en la que se puedan medir. 
      p(data-aos="fade-down").mb-5 A continuación, se define cada modelo:

      .row.justify-content-center.align-items-start.mb-4 
        .col-lg-3.up.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')                   
        .col-lg-9.up.my-3
          TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
            .tarjeta.color-acento-contenido--borde.p-4(titulo="Según su operatividad")
              .row.justify-content-center.align-items-start
                .col-lg-12
                  p Son las más populares para una investigación, porque es posible darles un valor numérico y que operen a partir de valor. Se clasifican en:
                  h5 Cualitativas
                  p También se conocen como variables categóricas. Se caracterizan por no utilizar valores numéricos, sino que describen los datos por categorías sin un orden natural. Pueden ser:
                  ul.lista-ul.ps-2
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Dicotómicas:] solamente permiten tomar dos valores posibles; por ejemplo “sí o no” “arriba o abajo”.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Politómicas:] permiten que se den múltiples valores, de los cuales puede seleccionarse a uno y omitir a los demás.
                  h5 Cuantitativas 
                  p Son numéricas, representan una cantidad medible. Pueden ser: 
                  ul.lista-ul.ps-2
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Discretas:] variables que no permiten el uso de valores intermedios o decimales.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Continuas:] en estas pueden encontrarse valores intermedios.                                       
            .tarjeta.color-acento-contenido--borde.p-4(titulo="Según su relación<br> con otras variables")
              .row.justify-content-center.align-items-start
                .col-lg-12
                  p En una investigación se presentan varios tipos de variables que se instauran debido a su relación con otras. Inclusive, un elemento puede ser de un tipo de variable y pertenecer a otra.
                  ul.lista-ul.ps-2
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Dependiente:] la que se prueba o se mide en un experimento científico. Puede modificarse a medida que el experimentador cambia la variable independiente.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Independiente:] se cambia o controla en un experimento científico, para probar los efectos en la variable dependiente. 
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Moderadora:] se encarga de cambiar el efecto o la relación que existe entre la variable dependiente y la variable independiente.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Extraña:] no se considera durante una investigación, pero de alguna forma afecta el resultado.                                       
            .tarjeta.color-acento-contenido--borde.p-4(titulo="Según su escala")
              .row.justify-content-center.align-items-start
                .col-lg-12
                  p Tienen diferentes características y se ocupan de comparar la información obtenida. 
                  ul.lista-ul.ps-2
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Nominal:] nombra a variables sin ningún valor cuantitativo, no tiene un orden y no permite operaciones matemáticas.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b Ordinal:] el orden de los valores es importante y significativo, pero las diferencias entre cada uno no se conocen. 
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b De intervalo:] escalas numéricas en las que se conoce tanto el orden, como las diferencias exactas entre los valores.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 #[b De razón:] informa el orden y el valor exacto entre unidades. Un cero absoluto, permite un gran rango de estadísticas descriptivas e inferenciales, para ser aplicado.   

    p(data-aos="fade-down") Conocer los tipos de variables en una investigación, permite realizar un estudio fácil de medir. Entender qué es una variable y cómo se utiliza, es útil para interpretar los diversos tipos de investigación que se encuentran en diferentes entornos. Cuando se intente determinar qué variables son cada una, recordar que las variables independientes son la causa, mientras que las variables dependientes son el efecto.
    p(data-aos="fade-down").mb-5 Para distribuir una variable de manera normal, se debe tener un histograma (función de densidad) con forma de campana, con un pico y ser simétrica alrededor de la media.

    .row.justify-content-center.align-items-start 
      .col-lg-8
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La distribución de posibilidad de una variable, es una función que asigna a cada suceso definido sobre la variable, la probabilidad que dicho suceso ocurra. Un ejemplo puede ser el de las grandes cadenas de electrodomésticos, que se sitúan en lugares con fácil acceso para las familias. O una distribución exclusiva como cuando el punto de venta se centra en otorgar un mayor prestigio a la marca; por ejemplo, puede ser una filial de una cadena de almacenes.
    p(data-aos="fade-down").mb-5 En el estudio del análisis exploratorio de datos, se identifican dos temas importantes que se explican a continuación.   

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Medidas numéricas")
            .col-10
              P Las medidas numéricas son valores de carácter numérico que permiten describir algunas características del conjunto de datos, como también sacar conclusiones acerca de la población de interés.

              P Las investigaciones cuantitativas manejan valores numéricos desde la fase de recogida de datos, hasta la fase de elaboración del informe final, pasando por la fase de análisis, en la que se aplican los procedimientos de la estadística descriptiva o de la estadística inferencial. 

              P Los datos numéricos suelen obtenerse con instrumentos de medida que, entendidos en sentido amplio, abarcan desde un termómetro en una investigación de ciencias naturales, hasta un test de inteligencia en un estudio de ciencias sociales. Cuando los valores numéricos se obtienen directamente de un instrumento de medida, el resultado se denomina medida directa; al combinar varias de ellas con operaciones matemáticas, se obtiene como resultado una medida indirecta.
 
          .row.justify-content-center.align-items-center(titulo="Correlación estadística")
            .col-10
              P La correlación es una medida estadística que muestra hasta qué punto dos variables están relacionadas linealmente, o sea que cambian conjuntamente a una tasa constante. Es una herramienta común para describir relaciones simples, sin hacer afirmaciones sobre causa y efecto.

              P Dos variables están asociadas cuando una variable nos da información acerca de la otra. Por el contrario, cuando no existe asociación, el aumento o disminución de una variable no nos dice nada sobre el comportamiento de la otra variable.

              P Dos variables se correlacionan cuando muestran una tendencia creciente o decreciente. El análisis de correlación es el primer paso para construir modelos explicativos y predictivos más complejos.

              P Con frecuencia, nos interesa observar y medir la relación entre dos variables numéricas, mediante el análisis de correlación. Se trata de una de las técnicas más habituales en análisis de datos y el primer paso necesario antes de construir cualquier modelo explicativo o predictivo más complejo.                                              
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')  

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')  
    p(data-aos="fade-down") Se llega así a la transformación de datos. Transformar datos se refiere al proceso de convertir datos de un formato a otro, con el objetivo que el sistema o aplicación de destino, los pueda utilizar. En este procedimiento se incluyen diversas actividades, para transformar los datos, depurando según ciertas reglas y uniendo distintos campos para obtener una vista consolidada. Cuando se transforman datos, se lleva a cabo un proceso que convierte el formato, el valor o la estructura de los datos, en otro cuestionario o formulario. 
    p(data-aos="fade-down").mb-5 Realizar una transformación o traducción de datos, varía de acuerdo con las necesidades y los sistemas de la organización. Este proceso tiene un sistema central que se puede utilizar para todas las empresas y para implementar una transformación de datos o sistema de transformación, se presentan los siguientes pasos:
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10(data-aos="zoom-in")
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-start(numero="1" titulo="Interpretar los datos")
            .col-auto.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/32.svg', alt='')
            .col.my-3
              p Antes de iniciar el procedimiento, se deben conocer los modelos de datos que se administran y se identifica el formato al que se le van a transformar las métricas. Se determinan los objetivos para el procedimiento para que los equipos trabajen eficiente y productivamente. Esto ayuda a planificar el proceso en general y evita retrasos y pasos innecesarios.
              p En este proceso, se puede optimizar la interpretación de los datos, haciendo uso de un modelado dimensional, para calificar los objetivos en esta transformación de datos.  
          .row.justify-content-center.align-items-start(numero="2" titulo="Examinar la calidad de los datos")
            .col-auto.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/33.svg', alt='')
            .col.my-3
              p Luego de determinar los formatos de los datos y los objetivos, el personal de la empresa puede iniciar a examinar la calidad de sus datos. Esto involucra comprobar las métricas para asegurar que son precisas y no están duplicadas. Llevar a cabo una evaluación de calidad, también ayuda a los equipos para que identifiquen los valores dañados o los conjuntos de datos que faltan. Este es un paso crucial, porque los datos con defectos pueden retrasar los pasos posteriores del proceso de transformación.  
          .row.justify-content-center.align-items-start(numero="3" titulo="Transformar los datos")
            .col-auto.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/34.svg', alt='')
            .col.my-3
              p Esta etapa conlleva seleccionar un conjunto de datos y reemplazarlo por una nueva métrica que cumpla con los estándares del formato de datos de destino.   
          .row.justify-content-center.align-items-start(numero="4" titulo="Revisar la calidad de los nuevos datos")
            .col-auto.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/35.svg', alt='')
            .col.my-3
              p Cuando los datos han sido traducidos, los encargados realizan una segunda comprobación de la calidad.
              p Esto se hace para garantizar que la información y la estructura de los datos permanezcan iguales durante el proceso de transformación. El equipo debe identificar cualquier inconsistencia, error o métrica faltante y auditar estos problemas. Si se encuentran discrepancias en los datos de salida, se debe corregir la información y realizar los cambios que se consideren necesarios en el proceso.

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Hay diferentes tipos de transformación de datos, que las empresas pueden ejecutar para comprender mejor sus operaciones. De acuerdo con el tipo que se utilice en la empresa, se manifiestan unas ventajas que aportan resultados en la obtención de la calidad.

    p(data-aos="fade-down").mb-5 Las siguientes, son ventajas que favorecen a las organizaciones cuando realizan las transformaciones de datos. 

    .row.justify-content-center      
      .col-lg-10
        .row.justify-content-center.mb-5           
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w2(src='@/assets/curso/temas/36.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4.pt-3.mb-3 Organización mejorada
                p Cuando los datos están limpios y su estructura estandarizada, las personas y los sistemas informáticos pueden localizarlos con facilidad y accesibilidad. Los datos también se pueden organizar rápidamente en función de su nuevo formato o modelo.
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w2(src='@/assets/curso/temas/37.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4.pt-3.mb-3 Calidad de datos mejorada
                p El proceso de transformación garantiza que se rectifiquen los valores nulos, las entradas duplicadas, los defectos y los formatos incorrectos. Por lo tanto, al formatear y validar correctamente los datos, su calidad general mejora. 
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w2(src='@/assets/curso/temas/38.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4.pt-3.mb-3 Compatibilidad garantizada            
                p Los datos se pueden convertir de varias formas para múltiples propósitos. Esto significa que una fuente de datos puede ser compatible con diferentes aplicaciones y sistemas empresariales. 
</template>

<script>
export default {
  name: 'Tema2',
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
