// January 27, 2000 Comprehensive Examination in Spanish — session deck.
// Source: exam.pdf / tdc.pdf / key.pdf, raw-docs/nysedregents.org/spanish/jan2000/.

const STIMULI = {
  "l01": {
    "passage": "[Background] You are in a department store in Spain and you hear this announcement:\n\n[La maestra lee] Apreciados clientes, en estos momentos deseamos informarles que en pocos\nminutos empezará una venta muy especial. La sección de accesorios en la planta\ntres pone a la venta todos los artículos de piel. Usted puede comprar zapatos,\nbolsos, carteras, billeteras y cinturones a mitad de precio solamente durante la\npróxima hora. ¡Apresúrense! ¡Apresúrense! ¡Ésta es una oportunidad única para\nnuestros clientes!",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l02": {
    "passage": "[Background] You hear this advice being given by a radio announcer in San Juan:\n\n[La maestra lee] ¿Está muy cansado después de viajar por avión? ¿Quiere combatir esta fatiga\npasajera? Pues, hay una manera muy simple de aliviar esta molestia. Frótese con\nmucha fuerza y energía la palma de la mano derecha durante unos segundos. Así\nestimula unos nervios directamente y dentro de poco tiempo se está combatiendo\neste problema de estar cansado.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l03": {
    "passage": "[Background] You are listening to a radio program about tourism in Spain and hear this information:\n\n[La maestra lee] Ya está a la venta en kioscos por toda España. El libro de bolsillo más completo\nsobre establecimientos de las cuatro provincias gallegas: restaurantes, mesones,\nbodegones, casas tradicionales de comidas, hoteles, cafeterías, campings y\nalojamientos rurales. Contiene más de 1.000 fotografías a color. Además\nencontrará Ud. planos de las poblaciones más importantes. Hay una sección\ndedicada a informaciones complementarias: por ejemplo fiestas y ferias\ngastronómicas, vinos gallegos, etc. Busque Ud. la guía de la hostelería de Galicia.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l04": {
    "passage": "[Background] You are in the bus station in Mexico City and ask how to get the bus to Cuernavaca.\n\n[La maestra lee] This is what you are told:\nBueno, para comprar un boleto de autobús, tiene que ir a la oficina de\ninformación. Allí verá el horario de todos los autobuses. Es necesario averiguar el\nnúmero del autobús porque no anuncian las destinaciones. Sólo se anuncia el\nnúmero. Este número está escrito cerca de la puerta del autobús. No se olvide de\nrecordarlo porque a esa hora siempre hay muchos autobuses esperando en la calle\nenfrente de la estación. Entonces, vaya a la taquilla y pida el boleto. Apresúrese\nporque para Cuernavaca no hay muchos. El último sale a las nueve.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l05": {
    "passage": "[Background] While listening to the radio in Venezuela, you hear this announcement:\n\n[La maestra lee] La Administración Postal de las Naciones Unidas anuncia la circulación de una\nserie de sellos muy especiales. El conjunto de noventa estampillas constituye una\ngalería en miniatura de arte famoso dedicado a los derechos del hombre. Estos\npapelitos hermosos, con su texto e ilustraciones, han llamado la atención del\npúblico por su valor artístico y político.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l06": {
    "passage": "[Background] On the first day in your Spanish class, your teacher says:\n\n[La maestra lee] Bueno, saben que lo más importante en esta clase es hablar español. Cada día\nustedes van a hablar conmigo y en parejas. Algunas veces van a trabajar en grupos\npequeños. Quiero que todos se hagan responsables de contribuir a la\nconversación. Después de unas lecciones, ustedes van a crear proyectos orginales.\nMás tarde discutiremos algunas ideas para estos proyectos. Entonces, ¡empecemos\na charlar!",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l07": {
    "passage": "[Background] A friend is telling you about a new movie theater that has opened in Barcelona. Your\n\n[La maestra lee] friend says:\nAyer se inauguró en Barcelona un cine con una pantalla gigantesca. La sala de\ncine, situada en el puerto de Barcelona, ha costado 2.000 millones de pesetas. La\nsala proyectará películas OMNIMAX. En estas películas el tamaño de la imagen ha\nsido alterado. Ahora la pantalla de este cine es diez veces más grande que la de un\ncine convencional.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l08": {
    "passage": "[Background] While listening to the music channel on television, you hear this advertisement:\n\n[La maestra lee] ¿Te gusta la música para bailar? ¿Vas a menudo a las discotecas? ¿Quieres\nconocer más? Bueno, a continuación te vamos a hacer una oferta que no podrás\nresistir. Las primeras cien personas que manden una carta a ERES van a recibir el\nestupendo álbum \"Música para bailar: volumen número uno\", en el que incluyen\ntemas de los mejores artistas de hoy. Y, ¡todo es música bailable como en las\ndiscotecas! Ya sabes, si quieres tener la mejor música de hoy, escribe ya a Editorial\nERES, Apartado Postal 5-733, México D.F.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l09": {
    "passage": "[Background] Before takeoff at the Juan Santamaria Airport in Costa Rica, the pilot makes this\n\n[La maestra lee] announcement:\n¡Señores pasajeros! Tengo que informarles que debido a un problema con el\ntransportador de equipaje, tenemos que desembarcar del avión en seguida. Un\nautobús les llevará a la terminal. Allá recibirán un cupón para el almuerzo gratis en\nla cafetería de la terminal. Esperamos embarcar el avión dentro de una hora y\nmedia. Sentimos mucho la demora y las molestias.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l10": {
    "passage": "[Background] You are visiting an exhibit of Latin American art. The museum guide says:\n\n[La maestra lee] Los artistas representados en esta exposición son del Perú, de la Argentina, del\nEcuador y de Colombia. Ustedes van a ver fotografías, muebles, ropa y artículos\nde cerámica. El arte refleja la vida y la cultura del presente y del pasado de la\ngente en estos países. Lo más interesante de esta exposición es que representa la\nvida diaria de la gente.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l11": {
    "passage": "[Background] You are listening to the radio in Colombia and hear this advertisement:\n\n[La maestra lee] Postobón lanzó al mercado de refrescos en Colombia su nueva línea de jugos,\nllamado \"Chispa\".\nEl producto, que estará disponible en todo el país, inicialmente tendrá cinco\nsabores: mora, mango, guayaba, tropical y naranja.\nDurante su proceso de elaboración, Postobón emplea técnicas que lo\nconvierten en un producto de óptima calidad, que conserva las propiedades de la\nfruta.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l12": {
    "passage": "[Background] You are listening to a Spanish talk show and hear this advice for parents:\n\n[La maestra lee] De usted depende darle o no al niño algún dulce antes de irse a la cama para\nque duerma mejor. Científicamente no se ha probado que esto ayude al niño a\ndormir. Pero si desea hacerlo de todos modos, tenga presente las siguientes\nrecomendaciones:\nPrimero, no le sirva al niño nada que contenga cafeína, por ejemplo\nchocolates, galletitas de chocolate, té caliente o té frío, ni gaseosas.\nSegundo, no le dé demasiado líquido antes de dormir.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l13": {
    "passage": "[Background] You are listening to a documentary in Chile and you hear the narrator say:\n\n[La maestra lee] Dieciocho perros, treinta pájaros mensajeros y cuatro caballos han sido\ncondecorados por el Museo Imperial de la Guerra. La frase militar \"Ellos también\nsirven\" ha sido el motivo principal por esta extraña ceremonia. Estos animales\nrecibieron la medalla de oro, que reconoce el trabajo de estos animales por ser\nmuy útiles al servicio de la humanidad durante la Segunda Guerra Mundial. Estos\nanimales buscaban y encontraban a las víctimas de este conflicto. Los periódicos\ncuentan de una paloma mensajera que voló 250 kilómetros con el mensaje de un\naccidente, y las personas fueron salvadas.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l14": {
    "passage": "[Background] You are listening to the news in Spain and hear:\n\n[La maestra lee] Una figura de un dragón se ha encontrado recientemente en la Casa de\nCisneros, un taller de restauración en Madrid. Este dragón, antiguo símbolo de la\nciudad, era parte de la famosa fuente de Cibeles, un gran monumento madrileño.\nPero en 1864 se llevaron la estatua del dragón para restaurarla, y fue olvidada por\nmuchos años. Ahora se planea devolver esta figura a su lugar original al lado de la\ndiosa Cibeles.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "l15": {
    "passage": "[Background] While waiting at the ticket counter at an airport, you hear this announcement:\n\n[La maestra lee] Su equipaje es tan importante para nosotros como para usted. Le rogamos\nponer su nombre en cada maleta. Para esto puede utilizarse las etiquetas de\nidentificación en los mostradores. Identifique sus maletas y lleve consigo todos sus\nmedicamentos, sus llaves y los objetos de valor. El equipaje de mano que los\npasajeros no llevan consigo se les entrega al desembarcar.",
    "psource": "Teacher Dictation Copy, January 2000 Comprehensive Spanish Regents"
  },
  "longReading": {
    "passage": "Papel de la Tierra\nNo hay duda, la tierra todo lo da. Y un claro ejemplo es el papel que se fabrica en las\nmontañas chiapanecas (una región de México) utilizando pétalos de flores, hojas de árbol,\ny otras partes de la vegetación como del maíz, bejucos, cepa de plátano, bambú, hasta se\nusa ropa reciclada.\nContinuando la tradición del pueblo maya, un grupo de artesanos que se compone de\nmujeres y hombres mayas y mestizos, produce desde hace veinte años papel hecho a\nmano. También hacen libros impresos, pinturas e ilustraciones en madera. Estos artesanos\nson los miembros del Taller de Leñateros en Chiapas.\nEn este establecimiento, además de fabricar papel con fibras naturales y material\nreciclado, enseñan, por medio de sus publicaciones, el arte popular y la tradición maya de\ncerámica y manuscritos. Este grupo ha ganado tres premios por el papel hecho a mano,\ndos veces el Premio Nacional de Artesanía de México y también el premio Manos de\nLas mujeres indígenas son las responsables de darle forma, color y vida a los\ndiferentes tipos de papel. En el patio de una casa humilde se repite una escena sacada del\naño 800 de nuestra era. Una mujer maya, vestida a la manera tradicional, seca al sol\npedazos de papel. Ella nos transporta a la elaboración tradicional de los manuscritos\nmayas que fueron destruidos por los conquistadores para eliminar su historia. El material\ncon que se hacían los antiguos manuscritos era la piel de venado y la corteza de árboles.\nEl papel era importante en la decoración de la ropa de los dioses y sacerdotes en los ritos\nsagrados. Para algunos este papel representa el espíritu indio, un espíritu profundo y\nsabio, lo esencial de la tierra.\nEn 1978 el taller editó su primer libro dedicado a los niños con un tema ecológico y\npara 1992 editaron \"La lícara\", una revista-objeto de arte que representa lo mejor de la\nliteratura maya actual\nAsí es Chiapas, una tierra llena de milagros. El papel de los viejos mayas, que hoy\nllega a nuestras manos para escribir la historia de un amor o de una guerra, tiene origen\nen esta tierra.",
    "psource": "Part 3a reading passage, January 2000 Comprehensive Spanish Regents"
  },
  "cloze": {
    "passage": "Cartagena, Colombia, el 30 de junio\nQuerido Kevin,\nTú no puedes imaginarte qué país tan lindo es\nColombia. Es un país rico en cultura. La gente, la\nmúsica y la comida me fascinan muchísimo. Sería\ndifícil darte una descripción completa de este país\nen el espacio limitado de una carta. ¡Para hacerlo\ntendría que escribir un libro entero!\nLa semana pasada hicimos un viaje interesante.\nFuimos a Barranquilla. No tuvimos tiempo para ir\na Santa Marta. Yo quería visitar Santa Marta\nporque tiene 26)\nmaravillosas para nadar.\nY además allá podría tomar el sol, esquiar en el\n(26) 1 plazas\n2 montañas\n3 canchas\n4 playas\nagua, e ir de pesca. Me encanta Colombia y mis\npadres me prometieron que en nuestro próximo\nviaje a este bello _(27). pasaríamos varios días en\nSanta Marta.\n(27) 1 castillo\n2 camino\n3 país\n4 rascacielos\nEn las dos semanas que hemos estado aquí, he\nvisitado muchos lugares importantes. Ayer tuve la\noportunidad de ver varias exposiciones de arte\ncolombiano. Cuando entré en _(28) vi una\nenorme figura de oro impresionante que llevaba un\n(28) 1 la corrida\n2 el museo\n3 el banco\n4 la estación\ncollar de esmeraldas enormes. Era un objeto\nincreíble. Te mandaré una tarjeta postal con una\nfotografía de esta figura.\nAntes de volver a los Estados Unidos me\ngustaría ver una corrida de toros. A mis hermanas\nno les gustan las corridas. Ellas prefieren ir de\ncompras a las tiendas. Ellas siempre _(29)_\nmuchos recuerdos para regalar a sus amigos.\n(29) 1 compran\n2 pierden\n3 venden\n4 prestan\nDurante estas vacaciones no sólo he visto muchos\nlugares interesantes. Sino que al mismo tiempo he\n\naprendido muchas palabras nuevas. Me gusta\nmucho hablar español con mis amigos\ncolombianos. Al volver al colegio voy a estudiar el\nespañol con más interés.\n¡Qué carta tan larga! En unos pocos minutos\nsalimos para cenar en el restaurante del hotel.\nBueno, Kevin, te veré en septiembre y te\ncontaré más de nuestro viaje _(30)\na Colombia.\n(30) 1 fascinante\n2 triste\n3 problemático\n4 aburrido\nTu amigo,\nJuan",
    "psource": "Part 3c cloze passage, January 2000 Comprehensive Spanish Regents"
  },
  "q21doc": {
    "imgs": [
      {
        "src": "img/q21-fmr-art-magazine.png",
        "cap": "FMR art magazine advertisement. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Advertisement for FMR, a magazine about important museums, private collections, world art, and upcoming exhibitions."
      }
    ]
  },
  "q22doc": {
    "imgs": [
      {
        "src": "img/q22-basketball-sub22.png",
        "cap": "Notice honoring Puerto Rico Sub-22 basketball team. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Notice congratulating Puerto Rico Sub-22 national basketball players for winning a silver medal at a world tournament in Australia."
      }
    ]
  },
  "q23doc": {
    "imgs": [
      {
        "src": "img/q23-puppy-training.png",
        "cap": "Article about caring for and training a puppy. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Article giving advice on disciplining, feeding, and correcting a young puppy."
      }
    ]
  },
  "q24doc": {
    "imgs": [
      {
        "src": "img/q24-nature-books.png",
        "cap": "“Libros que ayudan a conservar la naturaleza” notice. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Notice about books whose sale helps acquire and protect Amazon jungle land."
      }
    ]
  },
  "q25doc": {
    "imgs": [
      {
        "src": "img/q25-mia-vacation-plan.png",
        "cap": "Mía magazine travel and activity article. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Magazine text inviting readers to try healthy vacation activities such as horseback riding, hiking, paragliding, skiing, and cycling."
      }
    ]
  },
  "writingPicture": {
    "imgs": [
      {
        "src": "img/q33-museum-line.png",
        "cap": "Part 4b picture prompt for question 33. Source: January 27, 2000 Comprehensive Spanish Regents.",
        "alt": "Cartoon museum line scene with visitors waiting near artwork and an entrance; students must write a story related to the picture."
      }
    ]
  }
};

const ALL_CARDS = [
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does this announcement describe?",
    choices: [
        "a job opportunity",
        "a sale on leather goods",
        "a lost item",
        "a child looking for his parent"
    ],
    answer: 1,
    back: "(2) a sale on leather goods — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. For whom is this advice most useful?",
    choices: [
        "people who are tired after traveling",
        "people who want to become more physically fit",
        "people who want to book direct flights to their destinations",
        "people who are afraid of flying"
    ],
    answer: 0,
    back: "(1) people who are tired after traveling — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. According to this program, what is now available for tourists?",
    choices: [
        "a new vacation and travel guide",
        "a free tour of Galicia",
        "a video on regional cooking in Spain",
        "a magazine about architecture in Galicia"
    ],
    answer: 0,
    back: "(1) a new vacation and travel guide — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What information tells you which bus to take?",
    choices: [
        "the color of the ticket",
        "the number of the bus",
        "the city name on the front of the bus",
        "the letter of the gate"
    ],
    answer: 1,
    back: "(2) the number of the bus — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What does this announcement describe?",
    choices: [
        "a series of newspaper articles",
        "an international art exhibit",
        "a sale of recently issued stamps",
        "a political demonstration"
    ],
    answer: 2,
    back: "(3) a sale of recently issued stamps — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What are students expected to do?",
    choices: [
        "stay after school for extra help",
        "complete each lesson before learning new material",
        "converse in the language as much as possible",
        "read short stories and write short essays"
    ],
    answer: 2,
    back: "(3) converse in the language as much as possible — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is a unique feature of this theater?",
    choices: [
        "It shows films that appear 10 times larger on the screen.",
        "It is built in a special location.",
        "It only shows Spanish movies.",
        "It is the oldest movie theater in Spain."
    ],
    answer: 0,
    back: "(1) It shows films that appear 10 times larger on the screen. — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What do you need to do to take advantage of this offer?",
    choices: [
        "buy a magazine",
        "make a telephone call",
        "go to the place of business",
        "send a letter"
    ],
    answer: 3,
    back: "(4) send a letter — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What are passengers advised to do?",
    choices: [
        "board the plane now",
        "pick up their suitcases and go to customs",
        "remove their carry-on luggage",
        "get off the plane and enjoy a free lunch"
    ],
    answer: 3,
    back: "(4) get off the plane and enjoy a free lunch — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué se trata en esta exposición de arte?",
    choices: [
        "la vida de los conquistadores de Sudamérica",
        "la cultura y la vida de la gente",
        "la celebración de la independencia de estos países",
        "el descubrimiento del nuevo mundo"
    ],
    answer: 1,
    back: "(2) la cultura y la vida de la gente — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué se ofrece aquí?",
    choices: [
        "un postre",
        "un cereal",
        "una bebida",
        "una comida"
    ],
    answer: 2,
    back: "(3) una bebida — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Por qué se les da estos consejos a los padres?",
    choices: [
        "para que los niños duerman mejor",
        "para que los niños aprendan a cocinar",
        "para que los niños hagan más ejercicio",
        "para que los niños se levanten temprano"
    ],
    answer: 0,
    back: "(1) para que los niños duerman mejor — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Por qué recibieron una medalla estos animales?",
    choices: [
        "porque eran animales que han desaparecido",
        "porque eran animales que volaron al espacio",
        "porque eran animales que ayudaron a muchas personas",
        "porque eran animales que vivían sin contacto humano"
    ],
    answer: 2,
    back: "(3) porque eran animales que ayudaron a muchas personas — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Por qué fue importante el descubrimiento del dragón?",
    choices: [
        "Fue un regalo del oriente.",
        "Tomó más de cien años para construir.",
        "Fue un juguete de la familia real.",
        "Formó parte de un monumento famoso de Madrid."
    ],
    answer: 3,
    back: "(4) Formó parte de un monumento famoso de Madrid. — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Cuál es el mensaje principal de este anuncio?",
    choices: [
        "Aconseja al pasajero qué medicinas puede llevar.",
        "Informa dónde comprar los boletos.",
        "Informa el número de asiento a cada pasajero.",
        "Aconseja a los pasajeros qué hacer con las maletas."
    ],
    answer: 3,
    back: "(4) Aconseja a los pasajeros qué hacer con las maletas. — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q16",
    stem: "Q16. El papel del que se habla en este artículo se produce exactamente en",
    choices: [
        "una región de indios aztecas",
        "la capital de México",
        "la región de Chiapas en México",
        "un museo nacional de México"
    ],
    answer: 2,
    back: "(3) la región de Chiapas en México — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q17",
    stem: "Q17. La tradición de hacer papel a mano fue originada por",
    choices: [
        "los indios maya",
        "una familia con influencia",
        "los artesanos europeos",
        "un grupo de escritores"
    ],
    answer: 0,
    back: "(1) los indios maya — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Para qué se usaba este papel en esa civilización antigua?",
    choices: [
        "para decorar las casas",
        "para hacer juguetes de niños",
        "para utilizar como moneda",
        "para adornar ropa ceremonial"
    ],
    answer: 3,
    back: "(4) para adornar ropa ceremonial — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿De qué trataba el primer libro editado por esta organización?",
    choices: [
        "de un tema de ecología para niños",
        "de cantos rituales",
        "de las aventuras de los conquistadores",
        "de la autobiografía de un jefe indio"
    ],
    answer: 0,
    back: "(1) de un tema de ecología para niños — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q20",
    stem: "Q20. Además de hacer papel ¿a qué se dedican los miembros del Taller de Leñateros?",
    choices: [
        "a vender premios hechos de oro",
        "a preservar la cultura indígena maya a través de libros",
        "a escribir poesías y canciones indígenas",
        "a enseñar bailes típicos regionales"
    ],
    answer: 1,
    back: "(2) a preservar la cultura indígena maya a través de libros — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is being offered in this advertisement?",
    choices: [
        "a series of tickets to several museums",
        "a series of art videos",
        "a magazine about world art",
        "a course about art appreciation"
    ],
    answer: 2,
    back: "(3) a magazine about world art — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is the purpose of this notice?",
    choices: [
        "to honor a team for winning a worldwide event",
        "to announce new economic ties with Australia",
        "to publish the schedule of the basketball season",
        "to dedicate a statue in the airport"
    ],
    answer: 0,
    back: "(1) to honor a team for winning a worldwide event — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is discussed in this article?",
    choices: [
        "how to teach a dog to \"speak\"",
        "what to do with a stray animal",
        "how to train a pet",
        "when to vaccinate a puppy"
    ],
    answer: 2,
    back: "(3) how to train a pet — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "Q24",
    stem: "Q24. How will part of the funds raised from the sale of these books be used?",
    choices: [
        "to open pet shelters in large cities",
        "to purchase land in the jungle",
        "to plant new trees in Europe",
        "to promote new industry"
    ],
    answer: 1,
    back: "(2) to purchase land in the jungle — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "Q25",
    stem: "Q25. What information will the reader find in this issue of the magazine?",
    choices: [
        "how to subscribe to the magazine",
        "how to lose weight quickly",
        "how to spend a healthy vacation",
        "how to travel for less money"
    ],
    answer: 2,
    back: "(3) how to spend a healthy vacation — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
        "plazas",
        "montañas",
        "canchas",
        "playas"
    ],
    answer: 3,
    back: "(4) playas — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
        "castillo",
        "camino",
        "país",
        "rascacielos"
    ],
    answer: 2,
    back: "(3) país — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
        "la corrida",
        "el museo",
        "el banco",
        "la estación"
    ],
    answer: 1,
    back: "(2) el museo — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
        "compran",
        "pierden",
        "venden",
        "prestan"
    ],
    answer: 0,
    back: "(1) compran — official scoring key answer for January 27, 2000."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
        "fascinante",
        "triste",
        "problemático",
        "aburrido"
    ],
    answer: 0,
    back: "(1) fascinante — official scoring key answer for January 27, 2000."
  },
  {
    type: "self",
    label: "W1",
    front: "W1 (Part 4a, Question 31 — note, at least 6 clauses). A group of Spanish-speaking exchange students is coming to your school for two weeks. Write a note in Spanish to the coordinator offering to help welcome or assist them.",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W2",
    front: "W2 (Part 4a, Question 32 — note, at least 6 clauses). You recently heard that a friend's feelings were hurt because of something you said. Write a note in Spanish apologizing and explaining what happened.",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.writingPicture,
    type: "self",
    label: "W3",
    front: "W3 (Part 4b, Question 33 — composition, at least 10 clauses). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description. Do not write a dialogue.",
    back: "Model response: write a complete Spanish narrative with a clear beginning, middle, and ending that uses the picture as the situation. Rubric: the response must accomplish the stated purpose, avoid dialogue-only writing, and include at least 10 clauses; each clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W4",
    front: "W4 (Part 4b, Question 34 — letter, at least 10 clauses). A local television station is sponsoring a contest to identify a teacher in your school for special recognition. Write a letter in Spanish nominating a teacher. Dateline: el 27 de enero de 2000; Salutation: Estimados señores; Closing: [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. What leather goods are mentioned in the department-store sale?",
    choices: [
        "shoes, bags, wallets, billfolds, and belts",
        "books and stamps",
        "pet supplies",
        "plane tickets"
    ],
    answer: 0,
    back: "(1) shoes, bags, wallets, billfolds, and belts — supported by the stimulus above."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "S2",
    stem: "S2. What information must the traveler remember at the bus station?",
    choices: [
        "the bus number",
        "the ticket color",
        "the driver's name",
        "the city map"
    ],
    answer: 0,
    back: "(1) the bus number — supported by the stimulus above."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S3",
    stem: "S3. How much larger is the new theater screen?",
    choices: [
        "ten times larger",
        "twice as large",
        "half as large",
        "one hundred times larger"
    ],
    answer: 0,
    back: "(1) ten times larger — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S4",
    stem: "S4. ¿Qué materiales se usan para fabricar el papel?",
    choices: [
        "pétalos, hojas, maíz, bambú y ropa reciclada",
        "metal y vidrio",
        "plástico importado",
        "piedras volcánicas"
    ],
    answer: 0,
    back: "(1) pétalos, hojas, maíz, bambú y ropa reciclada — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Qué taller produce este papel?",
    choices: [
        "el Taller de Leñateros",
        "la Casa de Cisneros",
        "FMR",
        "Editorial ERES"
    ],
    answer: 0,
    back: "(1) el Taller de Leñateros — supported by the stimulus above."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "S6",
    stem: "S6. What medal did the Puerto Rico Sub-22 basketball team win?",
    choices: [
        "silver",
        "gold",
        "bronze",
        "none"
    ],
    answer: 0,
    back: "(1) silver — supported by the stimulus above."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "S7",
    stem: "S7. What animal is the advice about?",
    choices: [
        "a puppy",
        "a horse",
        "a bird",
        "a cat"
    ],
    answer: 0,
    back: "(1) a puppy — supported by the stimulus above."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "S8",
    stem: "S8. Which region is protected by funds from the books?",
    choices: [
        "the Amazon jungle",
        "the Galician coast",
        "the Andes mountains",
        "the Sahara desert"
    ],
    answer: 0,
    back: "(1) the Amazon jungle — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S9",
    stem: "S9. Where did Juan want to visit because it has wonderful beaches?",
    choices: [
        "Santa Marta",
        "Barranquilla",
        "Cartagena",
        "Madrid"
    ],
    answer: 0,
    back: "(1) Santa Marta — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S10",
    stem: "S10. What did Juan see in the museum?",
    choices: [
        "a gold figure with emeralds",
        "a dragon fountain",
        "a basketball medal",
        "a private art magazine"
    ],
    answer: 0,
    back: "(1) a gold figure with emeralds — supported by the stimulus above."
  },
];
