export default {
  global: {
    componenteFormativo:
      'Elaboración de informes de acuerdo con la analítica de datos',
    descripcionCurso:
      'Para realizar el análisis de la información, se requiere de una organización y clasificación de los datos recopilados por el investigador, validando previamente las técnicas de recolección de datos y los parámetros de clasificación estadísticos propuestos; la tabulación y la elaboración de gráficas, elaboradas bajo el esquema de variables y frecuencias, que contribuyen al análisis y a la interpretación de los resultados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estadística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis exploratorio de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Visualización de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Inteligencia de negocios (BI)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estadística',
      referencia:
        'Matemáticas profe Alex. (2017). <i>Tablas de frecuencia | Ejemplo 1</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cyXenZEbGz4',
    },
    {
      tema: 'Análisis exploratorio de datos',
      referencia:
        'Libélula-ciencia, ingeniería y cultura. (2021). <i>Herramientas para clasificar los datos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_LzW2Y2xPTw',
    },
    {
      tema: 'Análisis exploratorio de datos',
      referencia:
        'Matemáticas profe Alex. (2018). <i>Tipos de variables estadísticas | Cuantitativas Cualitativas</i>',
      tipo: 'Video',
      link: 'https://youtu.be/nCszHELuwxk',
    },
    {
      tema: 'Visualización de datos',
      referencia:
        'Matemáticas profe Alex. (2021). <i>Tipos de gráficos estadísticos</i>',
      tipo: 'Video',
      link: 'https://youtu.be/9G4HPNVA5w4',
    },
  ],
  glosario: [
    {
      termino: 'Diagrama de Pareto',
      significado:
        'gráfico que organiza valores que se encuentran separados por barras y se organizan de mayor a menor y de izquierda a derecha, respectivamente.',
    },
    {
      termino: 'Diagrama en árbol',
      significado:
        'es un gráfico que indica una estructura jerárquica de datos, con rectángulos de colores y tamaños diferentes y visualiza los posibles resultados de un experimento, que consta de una serie de pasos, donde cada uno de ellos tiene una cantidad infinita de formas para llevarlas a cabo.',
    },
    {
      termino: 'Gráfica',
      significado: 'representación de los datos bajo un esquema.',
    },
    {
      termino: 'Instrumento',
      significado:
        'elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Medidas de dispersión',
      significado:
        'relacionan los parámetros estadísticos que indican qué tanto cambia el comportamiento de una variable estadística con respecto a otra, o el valor que toma una variable, con respecto a otro de la misma variable.',
    },
    {
      termino: 'Medidas de tendencia central',
      significado:
        'se refiere a los parámetros estadísticos que indican el punto medio donde se comportan los datos de una población estadística de datos.',
    },
    {
      termino: 'Parámetros de centralización',
      significado:
        'indican en torno a qué valor o criterio central se distribuyen los datos obtenidos en una investigación, para lo cual se establecen la media aritmética, mediana y moda.',
    },
    {
      termino: 'Parámetros de dispersión',
      significado:
        'es la representación de los datos que se alejan de la parte central de los valores de distribución generales.',
    },
    {
      termino: 'Parámetros de posición',
      significado:
        'son los datos que se organizan en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.',
    },
    {
      termino: 'Técnica',
      significado:
        'características para el desarrollo de una actividad específica que parte de la pericia y la secuencia para adelantar actividades.',
    },
  ],
  referencias: [
    {
      referencia:
        'García Jiménez, A., Aguilar Morales, N., Hernández-Triano, L. y Lancaster-Días, E. (2021). La inteligencia de negocios: herramienta clave para el uso de la información y la toma de decisiones empresariales.<i> Revista de Investigaciones Universidad del Quindío, 33</i>(1), p. 132-138.',
      link:
        'http://portal.amelica.org/ameli/journal/517/5172230009/5172230009.pdf',
    },
    {
      referencia:
        'Iniciativa aporta. (s.f.). <i>Guía práctica de introducción al Análisis Exploratorio de Datos</i>.',
      link:
        'https://datos.gob.es/sites/default/files/doc/file/analisis_exploratorio_de_datos_2021_v6.pdf',
    },
    {
      referencia:
        'López Benítez, Y. (2018). <i>Business Intelligence. ADGG102PO</i>. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124393?page=10',
    },
    {
      referencia:
        'Viteri-Cevallos, D. y Murillo-Párraga, D. (2021). Inteligencia de Negocios para las Organizaciones. <i>Revista Arbitrada Interdisciplinaria Kolnonía, 6</i>(12), p. 304-323.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
