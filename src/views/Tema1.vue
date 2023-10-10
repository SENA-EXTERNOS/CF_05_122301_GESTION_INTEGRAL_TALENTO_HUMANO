<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Estadística
      
    .bg1      
      .row.justify-content-center.align-items-start.mb-4          
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')    
        .col-lg-8.my-3 
          p(data-aos="fade-down") Cuando se habla de analítica de datos, es importante adentrarse en el tema de la estadística, disciplina de la ciencia matemática, dedicada al estudio de las probabilidades de ocurrencia de fenómenos en el tiempo y para lo cual utiliza datos históricos o actuales. La estadística, a través de sus técnicas y/o métodos, organiza y analiza las fuentes numéricas de datos, y permite establecer conclusiones numéricas y gráficas, respecto al comportamiento de los fenómenos en el momento actual y hacer proyecciones futuras. Asimismo, proyecta la realidad de una muestra de datos, hacia la generalidad de toda una población de datos, lo cual permite generalizar las realidades y tomar decisiones. Esta disciplina es la base de los cálculos en el mundo global, para la medicina, la política, la educación, la demografía; absolutamente todo fenómeno que posea comportamientos medibles con datos numéricos, puede ser sometido al análisis estadístico.
      p(data-aos="fade-down").mb-5 La estadística es utilizada en el manejo de la información empresarial, por ejemplo, en los procesos de producción, y permite:  
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.up
          SlyderF.custom.mb-5(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/5.svg", alt="alt").img100.m-auto     
              p.text-center.mb-0 Hacer proyecciones de demanda con base en un mercado potencial.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/6.svg", alt="alt").img100.m-auto     
              p.text-center.mb-0 Favorecer la proyección de datos de producción.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/7.svg", alt="alt").img100.m-auto     
              p.text-center.mb-0 Determinar la frecuencia histórica de fallas de la maquinaria.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/8.svg", alt="alt").img100.m-auto     
              p.text-center.mb-0 Llevar registro histórico de la mejora o bajas en los resultados de la calidad.

      p(data-aos="fade-down").mb-5 Otro de los usos fundamentales se basa en la administración, la cual debe ofrecer a los procesos gerenciales estratégicos, información clave para la toma de decisiones, donde los datos “simples”, aislados y sin procesamiento, no generan aportes.
      .row.justify-content-center.align-items-start.mb-4           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") La estadística permite, además del procesamiento oportuno y científico de los datos, la visualización gráfica de la información, que es un elemento esencial para la comprensión del comportamiento de los procesos empresariales.

      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Técnicas y herramientas de la estadística para el procesamiento de datos 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-11.up(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/10.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 La estadística para el procesamiento de datos científicos, es decir, datos con valor predictivo, con importancia para la toma de decisiones, que conjugados aporten la mayor información posible al analista, amerita el uso de técnicas y herramientas que han sido definidas por los matemáticos, y las cuales se han formalizado en tres grandes categorías, en función de su complejidad y utilidad:
              br
              ul.lista-ul.ps-2.mb-0
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Las distribuciones de frecuencia. 
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Las medidas de tendencia central.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Las medidas de dispersión.                                
      p(data-aos="fade-down") Cada una de estas técnicas posee procesamientos distintos, amerita del apoyo de herramientas ofimáticas o <i>software</i> de cálculo, y generan diversos tipos de información, visualizadas de maneras análogas a través de tablas y gráficos, pero que muestran una estructura de datos particulares en cada caso.    
      p(data-aos="fade-down").mb-5 Seguidamente, se describen técnicas y herramientas de la estadística, para el procesamiento de datos:

    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-9.up.my-3
        TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Distribuciones<br> de frecuencia")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Son las herramientas más básicas de la estadística descriptiva, la cual, mediante tablas, muestra la cantidad de veces que ocurre un evento y, el porcentaje de ocurrencia de ese evento, en función de la totalidad de la cantidad de casos de estudio. 
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Medidas de<br> tendencia<br> central")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Se refiere a los parámetros estadísticos que indican el punto medio donde se comportan los datos de una población estadística de datos. Responden a la pregunta: ¿hacia dónde se concentran los datos? 
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Medidas de<br> dispersión")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Relacionan los parámetros estadísticos que indican qué tanto cambia el comportamiento de una variable estadística con respecto a otra, o el valor que toma una variable, con respecto a otro de la misma variable. Responden a la pregunta: ¿qué tanto varía (cambia) el valor de una variable?                                       
      .col-lg-3.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')    

      p(data-aos="fade-down") Las distribuciones de frecuencia, facilitan la tabulación básica de los datos de entrada de un estudio, su conteo y el cálculo de las proporciones, sobre la base del total de los datos obtenidos.
   
      p(data-aos="fade-down") Estas distribuciones se pueden generar para datos simples o para datos agrupados, dependiendo de los intereses de quien realiza el análisis, del tipo de dato y de la cantidad de datos.  
    .row.justify-content-center.align-items-start 
      .col-lg-10
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para la visualización de las distribuciones, se utilizan diferentes elementos gráficos elaborados con las herramientas de cálculo utilizadas por el analista, y recordar que la más básica es Excel.  

      p(data-aos="fade-down").mb-5 Es importante que, para mostrar de forma adecuada la información, se elija entre los diferentes tipos de gráficos en Excel. Cada tipo de gráfico despliega la información de una forma diferente y utiliza el gráfico correcto, ayudando a dar la interpretación correcta a los datos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.up      
      SlyderF.custom.mb-5(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráfico de columna 
            p Este gráfico se enfoca en las variaciones de los datos a través del tiempo. Las categorías de datos aparecen en el eje horizontal y los valores en el eje vertical. Es común comparar este tipo de gráfico con los gráficos de barra, donde la diferencia principal es que en los gráficos de barra las categorías se muestran en el eje vertical.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráfico de línea 
            p Este gráfico indica las relaciones de los cambios en los datos durante un período de tiempo. Se compara con los gráficos de área, pero los de línea remarcan un énfasis especial en las tendencias de los datos, más que en las cantidades de cambio, como lo hacen los gráficos de área.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráfico circular
            p Este se conoce como gráfico de #[em pie] o gráfico de pastel. Puede contener una sola serie de datos debido a que indica los porcentajes de cada una de las partes con respecto al total.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráfico de barra 
            p Este gráfico hace un énfasis en la comparación entre elementos en un período de tiempo determinado y utiliza cilindros, conos y pirámides.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráficos de área 
            p Este gráfico indica la importancia de los valores a través del tiempo. Es similar a uno de línea, pero como el área entre las líneas está relleno, el de área le da un mayor significado a la dimensión de los valores.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Gráfico XY (dispersión) 
            p Este gráfico es útil para indicar la relación entre diferentes puntos de datos. Utiliza valores numéricos para ambos ejes.
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/18.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Histograma 
            p Este gráfico muestra la frecuencia de las variables en estudio. 
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/19.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            h4.mb-3.pt-4 Ojiva 
            p Este gráfico se logra a partir del trabajo sobre frecuencias acumuladas, ya sean simples o de intervalos. Visualmente, es la misma línea de puntos que la curva de frecuencia, pero la clave es que se utiliza para frecuencias acumuladas. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
