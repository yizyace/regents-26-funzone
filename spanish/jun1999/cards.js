// June 22, 1999 Comprehensive Examination in Spanish — session deck.
// Source: exam.pdf / tdc.pdf / key.pdf, raw-docs/nysedregents.org/spanish/jun1999/.

const STIMULI = {
  "l01": {
    "passage": "[Background] You are an exchange student in a school in Chile. On the morning announcements,\n\n[La maestra lee] you hear:\nHay una reunión esta tarde a las tres y media para todos los que quieran\nparticipar en la primera producción dramática de la escuela. No es necesario tener\nexperiencia. Lo más importante es tener interés en el teatro y el deseo de trabajar\ncon nosotros.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l02": {
    "passage": "[Background] You hear this advertisement on a television program:\n\n[La maestra lee] En épocas pasadas todas las niñas recibían una muñeca de regalo. Y era el\njuguete favorito de la niña. Hoy, sin embargo, los promovedores de muñecas\ntienen algo nuevo para las niñas, la muñeca clónica. Los padres mandan una foto\nde su hija a la compañía que fabrica las muñecas clónicas. Entonces, las muñecas\nson hechas a mano y las hacen parecidas a la persona en la foto. Algunos pediatras\nnorteamericanos dicen que estas muñecas pueden ayudar a los niños.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l03": {
    "passage": "[Background] You are listening to the radio and hear this report:\n\n[La maestra lee] Steven Fisher de los EEUU es especialista en lenguas del Pacífico. Es la\nprimera persona que ha podido interpretar la misteriosa escritura jeroglífica de la\nisla chilena de Pascua. El señor Fisher mostró el texto escrito sobre tabla de\nmadera. Esta escritura se basa en 120 pictogramas de criaturas y objetos. Cuando\nlos pictogramas y los objetos se combinan, forman glifos o inscripciones. El señor\nFisher pasó seis años visitando museos que poseen las tablas y descubrió la llave\nde los glifos en el Museo de Historia Natural de Santiago de Chile.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l04": {
    "passage": "[Background] While traveling in Costa Rica, you hear this announcement on the radio:\n\n[La maestra lee] ¡Viaja, hermano, para echar una mano! Cambiar las clásicas vacaciones en la\nplaya por un viaje para ayudar a otros es una buena alternativa para este verano.\nNuestra organización ofrece la posibilidad de cuidar a enfermos, participar en\nprogramas de educación, de sanidad, de agricultura o limpieza medioambiental.\nLos participantes tendrán que tomar cursos para prepararse para todos los\naspectos del viaje.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l05": {
    "passage": "[Background] You are in Santiago, Chile, and hear this news item:\n\n[La maestra lee] En la ciudad, el señor Esmog está cada día más grande y poderoso. Señor\nEsmog crece con el humo negro y denso de los autos. Para combatir el esmog, las\nautoridades tienen una restricción de vehículos. De lunes a viernes, el último\ndígito de la matrícula determina cuándo se puede usar un auto. Por ejemplo, si es\nmartes y el número termina en 6 o 0, hay que esperar hasta mañana para conducir\nsu coche, o tiene que usar transporte público. Todos los días hay dos números\ndiferentes y menos contaminación. ¡Pobre Esmog!",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l06": {
    "passage": "[Background] After viewing a program at the planetarium, you hear this request:\n\n[La maestra lee] Los voluntarios hacen muchos trabajos vitales en el Museo y el Planetario. Se\nemplean voluntarios en la tienda de regalos. También dan programas para\nestudiantes, ayudan con exhibiciones y eventos, o proveen seguridad para las\nfunciones de laser y mucho más. Por favor, infórmese en la oficina si usted está\ninteresado. ¡Nosotros lo necesitamos!",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l07": {
    "passage": "[Background] You are at a hotel in Madrid, Spain, and you overhear the desk clerk talking to a newly\n\n[La maestra lee] arrived tourist. The desk clerk says:\nSi Ud. desea cambiar sus dólares en pesetas lo puede realizar en muchos\nlugares. Los bancos están abiertos los días laborales de 8,30 a 14h., y los sábados\nde 9 a 13h. Casi todos los hoteles de 4 y 5 estrellas pueden cambiar su dinero\nigualmente que las agencias de viajes y los grandes almacenes. Si Ud. lo desea,\nnuestra caja aquí le puede ayudar con ese servicio. Estamos a sus órdenes.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l08": {
    "passage": "[Background] You hear this advertisement about a restaurant:\n\n[La maestra lee] El restaurante \"Mesónde Oro\" debe ser el único en la ciudad que ofrece\ncomidas en la piscina. Durante el invierno, tapan la piscina con una alfombra y se\nconvierte en comedor. El resto del año, la descubren sólo con propósitos\ndecorativos.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l09": {
    "passage": "[Background] You are an exchange student in Spain. You hear a lecturer discuss the origin of chess.\n\n[La maestra lee] He says:\nEl juego de ajedrez nació en India en el siglo VI. Los jugadores usaban cuatro\npeones, un rey, un barco y un elefante. El juego tenía las mismas reglas que una\nverdadera batalla. El objetivo de esta competencia era capturar al rey. De la India\nel juego pasó a Persia y después a Arabia. Los árabes introdujeron el juego en\nÁfrica del Norte y en España. Desde España, pasó a Europa, donde el barco y el\nelefante fueron sustituidos por la torre y el caballo.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l10": {
    "passage": "[Background] You are listening to a radio station in Puerto Rico and you hear this announcement:\n\n[La maestra lee] \"El gato negro\" en Joyudas, Cabo Rojo, anuncia su apertura y lo celebra este\nsábado, primero de agosto, con una gran fiesta de inauguración. Para ayudar a\ncelebrar el estreno de este restaurante se presentarán al gran cantante de música\nsalsa, Gilberto Santarosa y el grupo \"Zona Roja\". Tendremos disponible nuestro\nsabroso pollo asado, mariscos, empanadas de camarones, pescado y carne. ¡Les\nesperamos!",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l11": {
    "passage": "[Background] You are with a tour group in Madrid and the tour guide says:\n\n[La maestra lee] La Puerta del Sol, o solamente Sol, como la llaman los madrileños, es desde\nhace siglos el centro del Madrid popular. Es lugar de encuentro y de paso de\nmuchos de los turistas y otros extranjeros que viajan a Madrid: unos se citan a la\nentrada del Metro, otros pasean, van de compras o simplemente, toman un\nrefresco y observan a la gente desde un café.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l12": {
    "passage": "[Background] While touring Puerto Rico you hear this commentary by a tour guide:\n\n[La maestra lee] En todas las Antillas, pocas ciudades muestran las etapas de su historia tan\nclaramente como San Juan. A principios del siglo XVI, Juan Ponce de León\nestableció un pueblo que, en 1521, se convirtió en el Viejo San Juan. Hoy es uno\nde los mejores museos vivientes de arquitectura colonial, repleto de balcones de\nhierro y de calles de piedras. El fuerte de El Morro, al lado del mar, es un\nrecuerdo del pasado militar.\nA pocos pasos de la parte antigua de la ciudad brillan los hoteles modernos de\nla Playa del Condado. Hay numerosos casinos y espectáculos, y más allá, existen\nrascacielos y grandísimos centros comerciales en la parte nueva de la ciudad.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l13": {
    "passage": "[Background] While on a flight to Spain, you hear this announcement:\n\n[La maestra lee] Con la confianza de ofrecerle lo mejor, Iberia ha seleccionado para usted 10\ncanales de audio donde podrá escoger desde los grandes músicos clásicos, hasta los\núltimos éxitos de las listas internacionales, así como música iberoamericana,\njaponesa . . . y mucho más. Para nuestros amigos más pequeños hemos dedicado\nun canal especial. Los auriculares para música le serán facilitados gratuitamente.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l14": {
    "passage": "[Background] You are watching television in Barcelona, Spain, and you hear this announcement:\n\n[La maestra lee] Pruebe Nueva Dermis, para rejuvenecer su piel sin cirugía. Nueva Dermis es\nun tratamiento moderno que renueva la piel, eliminando gradualmente las arrugas\ny las manchas de la vejez dando a la piel un nuevo tono joven y fresco. Además,\nNueva Dermis es también un extraordinario tratamiento contra el acné y sus\ncicatrices, devolviendo al rostro un aspecto limpio y normal.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "l15": {
    "passage": "[Background] You are on an airplane that is landing at the airport in Mexico City and you hear this\n\n[La maestra lee] announcement:\nEl capitán y toda la tripulación espera que usted haya gozado de este vuelo con\ndestino a la Ciudad de México. Y queremos recordarles que sus sugerencias y\nopiniones acerca de nuestro servicio son agradecidas. Queremos poder servirle\nmejor en el futuro.\nEn estos momentos nuestras asistentes de vuelo les entregarán un corto\ncuestionario para que usted haga sus comentarios. Antes de desembarcar, deje el\ncuestionario en el asiento. Gracias por su cooperación.\nEn nombre de todo el personal de aviación les damos las gracias por volar con\nnosotros. Esperamos poder servirles pronto.",
    "psource": "Teacher Dictation Copy, June 1999 Comprehensive Spanish Regents"
  },
  "longReading": {
    "passage": "Alcanzando las Estrellas\nComo muchos niños que se criaron en los años 50 y 60, Franklin Chang Díaz soñaba\ncon ser astronauta. La guerra fría había hecho de la conquista del espacio una carrera en la\nque parecía que todo el mundo tenía algo que ganar, o perder. Cuando miraba hacia el cielo\ndesde San José, Costa Rica, Franklin Chang Díaz no se imaginaba que sería uno de los\nprimeros hispanoamericanos en viajar al espacio.\nCuando tenía 9 años, Franklin Chang Díaz construyó su propia nave espacial usando\nuna silla de la cocina y una caja de cartón. A los 15 años, el ingenioso joven diseñó un\ncohete mecánico y lo disparó hacia el cielo con un pobre ratoncito amarrado a la cabina\ndelantera. \"Parecía que había subido muchísimo, llegando a la estratosfera, pero\nseguramente no llegó a más de 100 pies\". (No se preocupen, el ratón regresó a la tierra sano\ny salvo gracias a un paracaídas.)\nHoy día, los cohetes y el espacio no son juegos de niños para este astronauta de la\nNASA. Chang Díaz, de 49 años, es el astronauta hispanoamericano más destacado de la\nNASA y el primer director latino del Laboratorio de Propulsión Avanzada de la NASA en\nHouston. En 1986, Chang Díaz se convirtió en el primer hispanoamericano en viajar en el\ntransbordador espacial y ahora está trabajando en el proyecto más importante de su vida: el\nmotor de una nave espacial que llevará a personas al planeta Marte. \"El espacio siempre me\n, recuerda. \"Fue mi sueño\"\nLuchar por sus sueños es parte de la tradición familiar de Chang Díaz. A principios del\nsiglo XX, su abuelo paterno, José Chang, emigró de la China en busca de una vida mejor en\nCosta Rica, Su abuelo materno, Roberto Díaz, vivió en los Estados Unidos durante 20 años\ntrabajando con la marina mercante, antes de regresar a su país natal, Costa Rica. \"Mi familia\nes una familia de inmigrantes\", dice Franklin, cuyo nombre de pila fue inspirado por el\npresidente estadounidense Franklin Delano Roosevelt, a quién su abuelo Díaz admirab:\nmucho. \"Mi abuelo siempre me dijo que si quería lograr mis sueños tenía que ir a los\nEstados Unidos\".\nPero sus sueños no se iban a realizar tan fácilmente. Hijo de Ramón, un jefe de\nconstrucción, y María Eugenia, una ama de casa, Franklin se crió junto a sus cinco\nhermanos en una modesta casa colonial. A los 18 años, viajó a los Estados Unidos con sólo\n$50 en el bolsillo y, como muchos latinos, fue a quedarse en casa de un primo lejano que\nvivía con sus nueve hijos en un pequeño apartamento en Hartford, Connecticut. \"Sé que yo\nera una carga para ellos, pero no tenía más remedio\".\nAunque ya se había graduado de la escuela secundaria en Costa Rica, Franklin se\nmatriculó en una escuela pública de Hartford para aprender inglés. Tan buenas fueron sus\nnotas al hacer la secundaria en inglés, que se ganó una beca de un año para empezar sus\nestudios en la Universidad de Connecticut. \"Esa ayuda económica era lo que yo necesitaba\ny de allí, mi carrera se encaminó.\nHoy, Franklin ayuda a encaminar a otros, aconsejando a jóvenes estudiantes sobre\noportunidades en la NASA. Y tampoco quiere que sus hijos se olviden de sus raíces. \"Él no\nhabla conmigo si no es en español\", dice su hija Lidia.\nAunque Franklin tiene una gran colección de trofeos y títulos, su orgullo es la Medalla\nde la Libertad que le fue otorgada por el ex presidente Ronald Reagan en 1986. \"Ésa es la\nmás importante porque reconoce las contribuciones de un inmigrante a los Estados\n\", dice Franklin.",
    "psource": "Part 3a reading passage, June 1999 Comprehensive Spanish Regents"
  },
  "cloze": {
    "passage": "Antonio Banderas\nAntonio Banderas nació en Málaga, España, en\n1960, y se interesó por la actuación desde muy\npequeño. Pero al ver en un escenario el musical\nHair, Banderas decidió seguir una carrera artística.\n\"Quiero hacer lo mismo que esta gente\", se dijo.\nEra tal la energía que demostraban los _\n26)\nde la obra musical, tan moderno el espectáculo y\nlos colores, que Banderas dio el paso. Al día\nsiguiente creó su propio grupo dramático.\nDurante cinco años hizo teatro clásico, estudió\nen la escuela de arte dramático, hizo teatro\nexperimental hasta que se fue a Madrid porque\nestaba aburrido. Allí tenía un amigo argentino que\nle ofreció el sofá para que durmiera. Pasó seis\nmeses en aquella casa, durmiendo en el sofá.\nLuego consiguió un trabajo y se mudó. En dos\naños en Madrid, Antonio .\n27)\nen once\ncasas. Hubo ocasiones en que ni siquiera deshizo la\nmaleta.\nUn amigo de Antonio le dijo que él conocía a\nun director de cine que tal vez lo podía ayudar.\nFue entonces cuando conoció a Pedro Almodóvar.\nAlmodóvar fue a ver una función en la que\ntrabajaba Antonio y le dijo: \"¡Oye! ¿Quieres hacer\nuna\n28)\n_ conmigo? Es un papelito corto\nque te puede interesar\". Antonio dijo que sí, y así\ncomenzó una relación de trabajo que duró por\nsiete años.\nAntonio hace el \"crossover\"\nal cine\nnorteamericano con la película \"The Mambo\n(26) 1 jugadores\n2 actores\n(27) 1 cantó\n2 actuó\n(28) 1 película\n2 canción\n\nKings\", que es la historia de dos hermanos cubanos\nque vienen en busca del sueño americano. Con\nesta película Banderas despertó mucho entusiasmo\ny se le consideró un amante latino. \"Me imagino\nque eso ocurrió porque tengo el cabello oscuro y\nestán buscando a un nuevo actor romántico como\nRodolfo Valentino\", dijo él.\nEn la actualidad, Hollywood mantiene a\nBanderas muy _ (29) Y por eso él trabaja\nmucho. Una de sus películas, \"Desperado\", tiene\nlugar en una población mexicana. Antonio se\nmuestra capaz de ingresar a la liga de los héroes de\nacción y con un toque latino.\nEl actor asumió el desafío más grande de su\ncarrera al participar en la famosa película \"Evita\".\nEsta película es la versión cinematográfica del\nmusical del mismo _ (30)\n_ creado por el\ncompositor Andrew Lloyd Webber. La película, a\nun costo de 40 millones de dólares, fue dirigida\npor Alan Parker. Madonna interpretó a Eva Perón\ny Banderas a Ché Guevara. A Antonio Banderas le\ngustaría seguir trabajando en los Estados Unidos,\nun país que según él facilita el crecimiento de los\nartistas que tienen talento. \"Esto está clarísimo. Es\nuna lección que ya me aprendí\".\n(29) 1 desilusionado\n2 aburrido\n(30) 1 título\n2 estado",
    "psource": "Part 3c cloze passage, June 1999 Comprehensive Spanish Regents"
  },
  "q21doc": {
    "imgs": [
      {
        "src": "img/q21-emmanuel-caracas.png",
        "cap": "Newspaper article “Llevará su Amor a Caracas.” Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Article about Mexican singer Emmanuel traveling to Caracas to promote his album Amor Total."
      }
    ]
  },
  "q22doc": {
    "imgs": [
      {
        "src": "img/q22-talaia-mar-restaurant.png",
        "cap": "Article “Una de las grandes cocinas de Barcelona.” Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Restaurant article about Talaia Mar in Barcelona, its chefs, menu, and connection with El Bulli."
      }
    ]
  },
  "q23doc": {
    "imgs": [
      {
        "src": "img/q23-montoya-letter.png",
        "cap": "Letter from Javier Montoya to Mr. Woodard. Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Formal Spanish letter thanking Mr. Woodard for help with Javier studying grade 12 in the United States for one school year."
      }
    ]
  },
  "q24doc": {
    "imgs": [
      {
        "src": "img/q24-magazine-back-issue.png",
        "cap": "Reader letter requesting magazine issue No. 14. Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Letter from Alicia E. Mastrangelo asking a magazine to send issue No. 14 and write about singer Sandro."
      }
    ]
  },
  "q25doc": {
    "imgs": [
      {
        "src": "img/q25-french-penpal-ad.png",
        "cap": "Classified ad by a French student seeking correspondents. Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Anuncios classified from a 19-year-old French woman who will study at the University of Cádiz and seeks people to write to."
      }
    ]
  },
  "writingPicture": {
    "imgs": [
      {
        "src": "img/q33-restaurant-cartoon.png",
        "cap": "Part 4b picture prompt for question 33. Source: June 22, 1999 Comprehensive Spanish Regents.",
        "alt": "Cartoon restaurant scene with seated diners and two waiters standing by a table; students must write a story related to the picture."
      }
    ]
  }
};

const ALL_CARDS = [
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What will take place this afternoon?",
    choices: [
        "a field trip to a local theater",
        "tryouts for the basketball team",
        "a presentation by the principal",
        "a meeting about a school play"
    ],
    answer: 3,
    back: "(4) a meeting about a school play — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is required to purchase one of these dolls?",
    choices: [
        "a toy that can be recycled",
        "a photograph of the child",
        "a pediatrician's prescription",
        "a monetary contribution to charity"
    ],
    answer: 1,
    back: "(2) a photograph of the child — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What did Steven Fisher discover?",
    choices: [
        "the purpose of the wooden tablets",
        "the importance of languages",
        "the meaning of some writings",
        "the first person to inhabit Easter Island"
    ],
    answer: 2,
    back: "(3) the meaning of some writings — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What does this advertisement offer?",
    choices: [
        "an opportunity to change careers",
        "an opportunity to spend a vacation helping",
        "special rates for traveling around the country",
        "special classes to improve your Spanish"
    ],
    answer: 1,
    back: "(2) an opportunity to spend a vacation helping — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What information does the news report give?",
    choices: [
        "the latest plan to reduce smog",
        "the personal health dangers of smog",
        "the daily smog level advisory",
        "the rise in the level of contamination of crops by smog"
    ],
    answer: 0,
    back: "(1) the latest plan to reduce smog — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What kind of work are these volunteers expected to do?",
    choices: [
        "provide food for the children's programs",
        "work in the gift shop",
        "provide transportation to the office",
        "help with the cleanup"
    ],
    answer: 1,
    back: "(2) work in the gift shop — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What does the desk clerk explain to the tourist?",
    choices: [
        "the itinerary for the trip",
        "the hours of departure from the hotel",
        "information about exchanging money",
        "the price of 4- and 5-star hotels in Madrid"
    ],
    answer: 2,
    back: "(3) information about exchanging money — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is unusual about this restaurant?",
    choices: [
        "It never closes.",
        "It is covered with exotic flowers.",
        "It serves tapas.",
        "It serves meals in the pool."
    ],
    answer: 3,
    back: "(4) It serves meals in the pool. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. According to this lecturer, where did the game of chess originate?",
    choices: [
        "Spain",
        "Persia",
        "Arabia",
        "India"
    ],
    answer: 3,
    back: "(4) India — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué se trata este anuncio?",
    choices: [
        "una fiesta en el restaurante \"El gato negro\"",
        "dos famosas orquestas de música salsa",
        "un disco compacto nuevo del cantante Gilberto Santarosa",
        "un menú especial de la región"
    ],
    answer: 0,
    back: "(1) una fiesta en el restaurante \"El gato negro\" — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué es la Puerta del Sol?",
    choices: [
        "una obra teatral madrileña",
        "un museo famoso",
        "un centro de mucha actividad",
        "una época histórica"
    ],
    answer: 2,
    back: "(3) un centro de mucha actividad — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué dice el guía de la ciudad de San Juan?",
    choices: [
        "Allí se encuentran varios tipos de arquitectura.",
        "Ponce de León destruyó la vieja ciudad.",
        "La playa está muy lejos de la ciudad.",
        "Todos los edificios son modernísimos."
    ],
    answer: 0,
    back: "(1) Allí se encuentran varios tipos de arquitectura. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué se le ofrece al pasajero?",
    choices: [
        "revistas internacionales para leer",
        "programación para todos los gustos de música",
        "unos ejercicios para hacer durante el vuelo",
        "unas películas para niños"
    ],
    answer: 1,
    back: "(2) programación para todos los gustos de música — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué es Nueva Dermis?",
    choices: [
        "un programa que cambia lo que va a comer",
        "un tratamiento para mantener sano el pelo",
        "unas clínicas famosas que acaban de abrir en España",
        "un plan para mejorar el aspecto de la piel de la cara"
    ],
    answer: 3,
    back: "(4) un plan para mejorar el aspecto de la piel de la cara — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué información da este anuncio?",
    choices: [
        "Quiere comentarios sobre el servicio ofrecido.",
        "Informa donde recoger el equipaje.",
        "Anuncia nuevas rutas y mejores precios.",
        "Aconseja a los pasajeros que siempre vuelen por Avianca."
    ],
    answer: 0,
    back: "(1) Quiere comentarios sobre el servicio ofrecido. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q16",
    stem: "Q16. Desde su juventud se podía notar que Franklin Chang Díaz",
    choices: [
        "se interesaba por el espacio",
        "no tenía habilidad mecánica",
        "quería trabajar con su familia",
        "tenía muchos juguetes"
    ],
    answer: 0,
    back: "(1) se interesaba por el espacio — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Por qué es conocido Franklin Chang Díaz?",
    choices: [
        "Viene de una familia con influencia política.",
        "Tiene una larga tradición de científicos en su familia.",
        "Llegó a dirigir un programa espacial norteamericano.",
        "Era un autor célebre de ciencia ficción en Costa Rica."
    ],
    answer: 2,
    back: "(3) Llegó a dirigir un programa espacial norteamericano. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué tiene en común Franklin Chang Díaz con sus abuelos?",
    choices: [
        "Todos asistieron a la misma universidad.",
        "Ellos eran de Hartford, Connecticut.",
        "Comenzaron por trabajar en construcción.",
        "Tuvieron que trabajar mucho para realizar sus sueños."
    ],
    answer: 3,
    back: "(4) Tuvieron que trabajar mucho para realizar sus sueños. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según Franklin, ¿qué le ayudó a comenzar su carrera?",
    choices: [
        "Vio un programa de televisión sobre el espacio.",
        "Ganó un concurso científico.",
        "Recibió asistencia financiera para ir a la universidad.",
        "Trabajó para una compañía de construcción."
    ],
    answer: 2,
    back: "(3) Recibió asistencia financiera para ir a la universidad. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q20",
    stem: "Q20. Según Franklin, ¿por qué es importante la Medalla de la Libertad?",
    choices: [
        "Es necesaria para luchar por la libertad de expresión.",
        "Es la evidencia de que los inmigrantes ofrecen mucho al país adoptado.",
        "Simboliza el fin de la guerra fría.",
        "Pone énfasis en la cooperación internacional."
    ],
    answer: 1,
    back: "(2) Es la evidencia de que los inmigrantes ofrecen mucho al país adoptado. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "Q21",
    stem: "Q21. Which statement is best supported by this newspaper article?",
    choices: [
        "Emmanuel will show his paintings in Venezuela in the fall.",
        "Emmanuel will promote his new release in another country.",
        "Emmanuel will begin his world tour in South America.",
        "Emmanuel will play rock music in an outdoor theater."
    ],
    answer: 1,
    back: "(2) Emmanuel will promote his new release in another country. — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is the topic of this article?",
    choices: [
        "a cruise ship",
        "the Olympic Games",
        "a cooking class",
        "a restaurant"
    ],
    answer: 3,
    back: "(4) a restaurant — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "Q23",
    stem: "Q23. According to this letter, what is Mr. Montoya's son going to do?",
    choices: [
        "work for the Spanish Embassy in the United States",
        "study in the United States for one year",
        "improve his English before coming to the United States",
        "move permanently to the United States"
    ],
    answer: 2,
    back: "(3) improve his English before coming to the United States — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "Q24",
    stem: "Q24. Why did Alicia write to this magazine?",
    choices: [
        "to contact a pen pal",
        "to request a back issue",
        "to answer an advertisement",
        "to renew a subscription"
    ],
    answer: 1,
    back: "(2) to request a back issue — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is this person looking for?",
    choices: [
        "people with whom she could study Spanish",
        "information about foreign study",
        "someone with whom to correspond",
        "a friend with whom she has lost contact"
    ],
    answer: 2,
    back: "(3) someone with whom to correspond — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
        "jugadores",
        "actores",
        "productores",
        "traductores"
    ],
    answer: 1,
    back: "(2) actores — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
        "cantó",
        "actuó",
        "vivió",
        "estudió"
    ],
    answer: 2,
    back: "(3) vivió — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
        "película",
        "canción",
        "escuela",
        "investigación"
    ],
    answer: 0,
    back: "(1) película — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
        "desilusionado",
        "aburrido",
        "triste",
        "ocupado"
    ],
    answer: 3,
    back: "(4) ocupado — official scoring key answer for June 22, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
        "título",
        "estado",
        "horario",
        "concurso"
    ],
    answer: 0,
    back: "(1) título — official scoring key answer for June 22, 1999."
  },
  {
    type: "self",
    label: "W1",
    front: "W1 (Part 4a, Question 31 — note, at least 6 clauses). The host mother of a Spanish exchange student in your school is having a birthday. Write a note in Spanish to the exchange student suggesting a gift or celebration and offering help.",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W2",
    front: "W2 (Part 4a, Question 32 — note, at least 6 clauses). Your Spanish teacher has given your class a homework assignment that is due tomorrow. You cannot complete it on time. Write a note in Spanish to your teacher explaining the situation and asking what you should do.",
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
    front: "W4 (Part 4b, Question 34 — letter, at least 10 clauses). You have just returned from a trip to Spain and discovered that you left something in the hotel. Write a letter in Spanish to the hotel manager explaining what you left and asking for help getting it back.",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. What quality is most important for students who want to join the production?",
    choices: [
        "interest in theater and a desire to work",
        "previous acting experience",
        "basketball skill",
        "a finished script"
    ],
    answer: 0,
    back: "(1) interest in theater and a desire to work — supported by the stimulus above."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S2",
    stem: "S2. Where did Steven Fisher find the key to the glyphs?",
    choices: [
        "the Natural History Museum in Santiago de Chile",
        "a school in Madrid",
        "a restaurant in Barcelona",
        "an airport in Mexico City"
    ],
    answer: 0,
    back: "(1) the Natural History Museum in Santiago de Chile — supported by the stimulus above."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S3",
    stem: "S3. What makes the restaurant unusual?",
    choices: [
        "meals are served in or around a pool",
        "it is open only in winter",
        "it has no menu",
        "it serves only tapas"
    ],
    answer: 0,
    back: "(1) meals are served in or around a pool — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S4",
    stem: "S4. Según el pasaje, ¿qué construyó Franklin cuando tenía 9 años?",
    choices: [
        "una nave espacial con una silla y una caja",
        "un telescopio profesional",
        "una computadora",
        "un avión de papel"
    ],
    answer: 0,
    back: "(1) una nave espacial con una silla y una caja — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Qué idioma estudió Franklin en Hartford?",
    choices: [
        "inglés",
        "francés",
        "italiano",
        "chino"
    ],
    answer: 0,
    back: "(1) inglés — supported by the stimulus above."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "S6",
    stem: "S6. What city is the restaurant article about?",
    choices: [
        "Barcelona",
        "Madrid",
        "Caracas",
        "Cádiz"
    ],
    answer: 0,
    back: "(1) Barcelona — supported by the stimulus above."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "S7",
    stem: "S7. What issue number does Alicia request?",
    choices: [
        "No. 14",
        "No. 12",
        "No. 20",
        "No. 30"
    ],
    answer: 0,
    back: "(1) No. 14 — supported by the stimulus above."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "S8",
    stem: "S8. Where does the writer plan to study?",
    choices: [
        "the University of Cádiz",
        "a school in Caracas",
        "the University of Connecticut",
        "a cooking academy"
    ],
    answer: 0,
    back: "(1) the University of Cádiz — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S9",
    stem: "S9. What musical inspired Antonio Banderas to pursue an artistic career?",
    choices: [
        "Hair",
        "Evita",
        "The Mambo Kings",
        "Desperado"
    ],
    answer: 0,
    back: "(1) Hair — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S10",
    stem: "S10. Who played Eva Perón in Evita?",
    choices: [
        "Madonna",
        "Alicia Mastrangelo",
        "Franklin Chang Díaz",
        "Oriol Balaguer"
    ],
    answer: 0,
    back: "(1) Madonna — supported by the stimulus above."
  },
];
