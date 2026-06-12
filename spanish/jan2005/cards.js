// January 2005 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key / rating guide), raw-docs/nysedregents.org/spanish/jan2005/.
// Printed quirks kept verbatim (verified against page renders): "Vincente"
// (three times in the Part 3a passage), "fue eligido" (Part 3a, page 5),
// "estación de policiá" (Q2 dictation), "los niveles pocos saludables"
// (Q10 dictation), "Dtibizchaltun", "zackol" and "conección" (Part 3c
// passage), "Chichen Itza" unaccented in the printed Q26 stem, and
// "Neuva York" visible in the Q21 realia image.

const TDC_SRC = "Teacher Dictation Copy, January 2005 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] Your friend from Costa Rica calls you and says:

[La maestra lee] ¿Ya recibiste la invitación para el cumpleaños de Federica? Acabo de llegar a casa y me encontré con una invitación para su fiesta de quinceañera. Piensan celebrarla en una galería de arte y estoy segura de que va a ser fenomenal. Ve y mira si la invitación te llegó. Todos somos buenos amigos y estoy segura de que te invitó.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are sitting on a park bench in Buenos Aires, Argentina, and you overhear a woman speaking to a police officer:

[La maestra lee] Señor policía, quisiera darle información de un robo. Yo soy víctima de un robo. Un hombre vino corriendo por la plaza mientras yo iba hacia el metro y él me empujó. Sin darme cuenta, me quitó la bolsa. Yo llevaba todos mis cheques viajeros y mi pasaporte en la bolsa. Yo voy a ir a la estación de policiá para darle más información con detalles del incidente.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to the radio and hear this introduction:

[La maestra lee] Y ahora, la Pregunta de Hoy en Curiosidades, el programa diario para los niños. La Pregunta de Hoy es de Maricela Chávez, de Guayaquil. Maricela quiere saber ¿cuál es el deporte más antiguo? Maricela, el deporte más antiguo es la lucha, que se remonta por lo menos a unos 4.500 años. Este deporte aún se practica por todo el mundo. En Japón, los luchadores de sumo son héroes nacionales. Otros deportes, como el tenis, por ejemplo, lo practicaban los nobles franceses hace 800 años. El béisbol surgió de un juego inglés con bate y pelota que se llamaba “rounders.” El baloncesto fue inventado por un profesor de gimnasia en los Estados Unidos, en el 1891, para que las clases fueran más entretenidas.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You enter the Prado Museum with your tour group. The guide says:

[La maestra lee] Por favor, tomen su entrada y regresen dentro de una hora. Debido a la popularidad de la exhibición de los cuadros de El Greco, el salón de pinturas está muy congestionado. Dentro de una hora habrá menos personas y nuestro grupo recibirá preferencia con un guía personal. Gracias por su paciencia.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] Your friend Antonio left this message on your answering machine:

[La maestra lee] ¡Hola! Te llamo porque acabo de llegar y no encuentro las tarjetas postales que compramos cuando fuimos a Machu Picchu. Por favor, ¿puedes buscarlas en tu cuarto? Estoy seguro de que las dejé en tu casa antes de salir.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to the Spanish-language radio station and you hear this:

[La maestra lee] Este mes el Repertorio Español presenta directamente de la República Dominicana las obras teatrales ‘Mi tía la jamona’ y ‘Qué buena amiga es mi suegra’, dos divertidas comedias escritas y dirigidas por Franklin Domínguez, uno de los más destacados representantes del teatro dominicano. Entre la comedia y el drama, Domínguez ha enriquecido el teatro de Quisqueya por más de 50 años. Esta vez lo acompaña la talentosa actriz Monina Solá, interpretando varios personajes.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are listening to the radio and you hear this announcement:

[La maestra lee] ¿Te sientes frustrado porque tienes que esperar los resultados de tu equipo de fútbol? Pues, un clic y ya estarás allí en el estadio con holaHoy.com. Conéctate y tendrás los resultados del partido minuto a minuto, las jugadas polémicas, los protagonistas y otras cosas de interés. Con galerías de fotos de tus jugadores favoritos, análisis del partido y reporteros siguiendo en directo toda la emoción de una nueva cita futbolística, holaHoy.com te invita a ser parte de este grupo mundial. HolaHoy.com — porque eres un aficionado dedicado y mereces lo mejor del mundo deportivo.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] Your Spanish neighbor calls you and says:

[La maestra lee] Hola, soy Patricia. Siento mucho llamar tan temprano. Llamo para decirles que la boda de Roberto y Lucía tiene que posponerse a causa de la tormenta de nieve. Las autopistas están cerradas y la familia no puede llegar a la iglesia. No es muy seguro conducir hoy. La boda tendrá lugar en una fecha futura. Gracias.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are on vacation in Mexico and hear this advertisement on the radio:

[La maestra lee] Uno de los placeres de estar de vacaciones es comer. ¿Pero dónde? “Caramba” le presenta un nuevo concepto de salir a comer. “Caramba” es una cantina y restaurante con un ambiente a la vez distinguido y casual. Ofrecemos especiales diarios y una gran variedad de platos continentales y tradicionales. Pero también le ofrecemos la oportunidad de relajarse participando en varios juegos de mesa. Venga a “Caramba” y diviértase jugando dominó o ajedrez. Ofrecemos también servicio de banquetes. “Caramba” se encuentra frente al edificio de la Bolsa de Valores. Se necesitan reservaciones. Llame al 511-6918. Esperamos verle pronto.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You hear this report on the evening news:

[La maestra lee] La actividad física es cualquier movimiento corporal que dé lugar a un gasto de energía o la quemadura de calorías. En una palabra, significa moverse. Cuando usted camina, juega, practica la jardinería, patina, limpia su casa, baila o sube escaleras se está moviendo por su salud. Realizar una actividad física moderada con regularidad es una de las maneras más sencillas de mejorar su salud y mantenerse sano. Tiene el potencial de prevenir y controlar ciertas enfermedades, y aumentar su nivel de energía. Le ayuda a reducir el estrés y rebajar los niveles pocos saludables de colesterol y de tensión arterial.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to the radio and hear this report about the Olympic games:

[La maestra lee] El Comité Olímpico ha decidido ser ecológicamente responsable en los Juegos Olímpicos este año. Hoy día es necesario preocuparse por el ambiente. Greenpeace ha preparado una guía medioambiental con consejos para participantes y visitantes. La villa olímpica utiliza energía solar. El agua es reciclada en los sistemas sanitarios. Además no permiten el uso de automóviles en el recinto olímpico pero ofrecen un sistema eficaz de transporte público. La guía medioambiental no tiene que ver ni con el dinero ni con asuntos políticos.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to an interview of Latinos in the United States. This is what you hear:

[La maestra lee] Para muchos latinos como yo, el español es un elemento esencial de nuestra cultura e identidad. Pero desde hace muchos años nos lamentamos que hemos perdido nuestra lengua en este país. Aunque pasamos nuestra vida pensando, leyendo, escribiendo y trabajando en una sociedad de habla inglesa, queremos mantener el español para nuestros hijos. Por eso estoy comprometida a enseñarles a mis hijas la lengua de nuestros antepasados. Yo insisto, como lo hacía mi madre, “¡En esta casa se habla español!”`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] An exchange student from Colombia tells you something he learned about a United States president while researching a report for English class:

[La maestra lee] Imagínate, un presidente y el príncipe Guillermo de Inglaterra, quienes aparentemente no tienen ninguna relación, han resultado ser primos. Una compañía que se especializa en la búsqueda de información genealógica ha encontrado un antepasado común entre la familia real y la familia del presidente. El ancestro común es Henry Spencer, un antepasado de la familia materna del príncipe Guillermo, que vivió en Inglaterra, en el siglo quince. Los expertos encontraron también un lazo entre la familia del presidente y el primer ministro británico, Winston Churchill. Interesante, ¿no?`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are watching Spanish television and hear a doctor giving advice about nutrition. The doctor says:

[La maestra lee] Tras haberme dedicado durante más de 20 años a la relación entre la dieta y la prevención de enfermedades, creo que la clave de la buena nutrición es el color. Las verduras de gran consumo, por ejemplo, la lechuga y las papas fritas, no nutren mucho. Una pista importante: su falta de color. En cambio, las frutas y verduras de colores vivos, por ejemplo las manzanas y las zanahorias, contienen grandes cantidades de fitonutrientes, sustancias vegetales que alimentan y combaten las enfermedades. Recomiendo añadir una porción de las siete familias de color a una dieta de cereales, proteínas y grasas saludables.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are in a Spanish department store and you hear this announcement:

[La maestra lee] Tenemos un muchachito aquí que nos ha dicho que su mamá está perdida. Si usted tiene un hijito de tres años, con el nombre de Carlos, favor de ir en seguida al mostrador de servicio al cliente. Carlos lleva pantalones azules con una chaqueta verde y quiere encontrar a su mamá.`,
    psource: TDC_SRC
  },
  fox: {
    passage: `Vicente Fox: el presidente con botas

El primero de diciembre de 2000, Vicente Fox llegó a ser el Presidente de México. Su ascenso al poder rompe innumerables moldes políticos y personales. Él es el primer presidente de México que es hijo de una extranjera. Aunque su padre nació en México, su madre es española, nacida en el norte de España. También parece más vaquero que político con su sombrero, botas de montar, cinturón de cuero, y sus gestos de ranchero.

Vincente Fox nació el dos de julio de 1942 en la Ciudad de México, pero pasó su juventud en un rancho con sus padres y sus hermanos cerca de la ciudad de Guanajuato. Él es una persona sencilla y honesta, cualidades que aprendió al lado de hombres de campo. Su primer trabajo fue también en un rancho de Guanajuato, un lugar donde él ha vivido casi toda su vida. Madrugaba diariamente, incluyendo sábados y domingos, una disciplina que todavía sigue. El presidente admite que ha tenido más oportunidades que muchos de sus amigos de la infancia. “En mi niñez mis padres me inculcaron una disciplina de trabajo y yo creo que el trabajo es el camino al éxito,” dice él. Vicente Fox se graduó de la Universidad Iberoamericana y obtuvo un diploma en Alta Gerencia de Empresas de la Universidad de Harvard en los Estados Unidos.

En 1964 empezó una carrera con la compañía Coca Cola, primero como vendedor y supervisor de ruta. A bordo de un camión de distribución del refresco Coca Cola, tuvo oportunidad de viajar y conocer a todo el país. Por su esfuerzo, llegó a ocupar el puesto de presidente de la compañía para México y América Latina, siendo el gerente más joven de la empresa. Con la experiencia adquirida decidió regresar a Guanajuato y dedicarse a los negocios privados y participar en la vida política de su pueblo.

En 1988 Vicente Fox fue elegido a una posición federal. Aunque en 1991 perdió las elecciones para gobernador del estado de Guanajuato, tuvo éxito en 1995 y fue elegido. Durante su administración, Guanajuato se convirtió en la quinta economía más importante de México y también en una tierra de oportunidades para todos. En Guanajuato 99% de los niños asisten a la escuela primaria y la educación pública está garantizada para todos. Por los buenos resultados de su gobierno, Vicente Fox fue seleccionado candidato de la Alianza por el Cambio para las elecciones presidenciales. El mismo día que celebró sus cincuenta años de edad, Vincente Fox fue eligido presidente de su país. La fecha de esta ocasión memorable fue el dos de julio del año 2000.

El nuevo presidente asegura que no será tradicional. Como presidente planea estar en la calle con la gente, no sólo en su oficina. En los cinco meses entre las elecciones y el comienzo de su presidencia, Vincente Fox no se ha quedado quieto. Ha visitado doce países, incluyendo los Estados Unidos, para discutir ideas y obtener apoyo para su gobierno. Aunque Vicente Fox fue designado por la revista TIME como “el hombre latinoamericano del año”, la verdadera prueba de su éxito se calculará durante los seis años como presidente de México.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 26, 2005"
  },
  lectores: {
    imgs: [
      { src: "img/q21-circulo-de-lectores.png",
        cap: "Membership offer for question 21, Comprehensive Examination in Spanish, January 2005",
        alt: "Mail-in coupon headed '2 libros por sólo $5.00 cada uno (más gastos de franqueo)' from Círculo de Lectores, 65 Commerce Road, Stamford, CT. The fine print reads: Yes, I want to be a member of Círculo de Lectores. Please send me the two books I have indicated below along with a bill for only $10.00, plus handling and shipping charges (plus taxes for residents of 'Neuva' York and Connecticut). If I decide to keep the books, I commit to buying 3 books per year to continue as a member. If I decide not to keep the introductory books, I will return them (within 10 days), I will owe nothing, and my name will be removed from the membership list. The form has blanks for name, address, apartment, city, state, postal zone, telephone and signature, plus a side panel reading 'POR FAVOR, ENVIEME LOS SIGUIENTES LIBROS (indique los códigos solamente)' with two code boxes, and notes that the offer is valid only for new members and all orders are subject to credit approval." }
    ]
  },
  goya: {
    imgs: [
      { src: "img/q22-cubitos-goya.png",
        cap: "Advertisement for question 22, Comprehensive Examination in Spanish, January 2005",
        alt: "Boxed advertisement showing a package of Goya powdered bouillon ('Cubitos en polvo, pollo') with all-capitals Spanish text: Goya powdered cubes — double your money. If you are not completely convinced that with Goya powdered cubes all your meals come out tastier and they are also easier to use, send us the box with the unused Goya powdered cubes to: Cubitos en Polvo Goya, Apartado 2728, Bayamón, PR 00621, and we will return to you double your money. Because with Goya powdered cubes we prove once more that... 'Si es Goya... tiene que ser bueno.'" }
    ]
  },
  piratas: {
    imgs: [
      { src: "img/q23-cosas-de-piratas.png",
        cap: "Announcement for question 23, Comprehensive Examination in Spanish, January 2005",
        alt: "Boxed announcement titled 'Cosas de Piratas' with a drawing of a pirate sailing ship flying a skull-and-crossbones flag. The Spanish text asks: Have you ever dreamed of roaming the seas aboard a pirate ship? If you want to become authentic sea dogs, do not fail to visit the interactive exhibition 'Piratas, corsarios y bucaneros', open between April 21 and 30 in the La Moraleja shopping center in Madrid, which will let you enjoy the most fantastic stories lived aboard a pirate galleon. Don't miss it." }
    ]
  },
  loteria: {
    imgs: [
      { src: "img/q24-loteria-nacional.png",
        cap: "Advertisement for question 24, Comprehensive Examination in Spanish, January 2005",
        alt: "Advertisement with the large headline 'Con la Lotería Usted gana y México también...' (With the lottery you win, and so does Mexico). The text explains: every time you play the lottery you help hundreds of children who are cared for in Rehabilitation and Special Education Centers built with the support of the Lotería Nacional. Below the boxed slogan '¡Vamos a ganar por México!' is the logo of the Lotería Nacional para la Asistencia Pública." }
    ]
  },
  mascota: {
    imgs: [
      { src: "img/q25-no-regale-mascota.png",
        cap: "Notice for question 25, Comprehensive Examination in Spanish, January 2005",
        alt: "Boxed notice headed '¡ATENCION! NO REGALE UNA MASCOTA CUANDO:' (Attention! Do not give a pet as a gift when:) followed by five bullets: a family member is allergic to dog hair; the animal will be alone at home more than eight hours or shut in one room all day; the person is very fussy about housecleaning and cannot stand seeing hair on the armchairs or rugs; the residents' association does not allow domestic animals; the family has too tight a budget to cope with small unexpected expenses." }
    ]
  },
  golfo: {
    passage: `El Golfo de México

Bajo el Golfo de México, en una zona tropical, se encuentra un destino de vacaciones de verdadero interés. Se llama la Península de Yucatán. Bañado por las aguas del Atlántico, este estado mexicano forma parte de un gran circuito turístico que ha ganado un sitio de honor en el turismo internacional.

Antes de la llegada de los exploradores españoles al lugar que se conoce como Yucatán, los mayas ya habían desarrollado una civilización muy avanzada. Usaban un calendario de 365 días, construían enormes ciudades y hasta masticaban chicle. Hoy día, el turista aventurero puede visitar dos de las maravillas de la antigüedad en las Américas — Uxmal, con su espectáculo de luz y sonido, y la gran pirámide de Chichén Itzá. También se puede ir a Dtibizchaltun, un sitio arqueológico a una media hora de Mérida, a contemplar el equinoccio en el Templo de las Siete Muñecas.

Yucatán también refleja su pasado colonial. En un país de tanta tradición religiosa el turista tiene que visitar los conventos o el monasterio que visitó el Papa Juan Pablo II en su viaje a México. La Colonia Valladolid abre la puerta de entrada al mundo colonial de la península. Esta hermosa ciudad también tiene en su historia batallas de la época de los conquistadores. En su visita a esta región, se debe probar el “zackol”, un verdadero plato típico yucateco preparado con el ingrediente más básico del país: el maíz. Pero, tenga cuidado con las otras comidas porque son muy picantes, muy diferentes, ajenas a la dieta de los turistas norteamericanos.

Si la perspectiva de pasarse días enteros viendo ruinas y pueblos coloniales no le encanta ni un poquito, no se preocupe. Son varios los planes que Yucatán ofrece al viajero. Uno de los menos conocidos y de los más interesantes es la naturaleza. Hay cristalinas aguas subterráneas para bucear y para nadar, cuevas para explorar, y reservas naturales para observar pájaros y otros animales. Así se puede disfrutar de una temporada muy variada y divertida. La época más fresca para visitar Yucatán es entre los meses de enero y marzo. Se puede conseguir alojamiento razonable en pensiones y pequeños hoteles hechos en casonas coloniales situados en los centros de varias ciudades. Aunque no hay vuelo directo desde Nueva York, la aerolínea Aeroméxico le lleva a Cancún o a la Ciudad de México, donde se puede hacer conección a Mérida, Yucatán. Escriba a la Secretaría de Turismo para pedir más información para planear unas vacaciones inolvidables.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 26, 2005"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-supermercado-cartoon.png",
        cap: "Picture for writing task 33 (— Bunny Hoest & John Reiner, “Laugh Parade,” Parade, adapted), Comprehensive Examination in Spanish, January 2005",
        alt: "Line drawing of two men meeting in a supermarket aisle in front of shelves stocked with boxed goods, with a sign hanging from the ceiling. One man, balding and open-mouthed in surprise, pushes a shopping cart with a few items in its basket; the other man, carrying a small hand basket, strides past while looking back at him." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is Federica celebrating?",
    choices: [
      "her birthday",
      "her success in a competition",
      "the opening of her exhibition",
      "the arrival of a friend"
    ],
    answer: 0,
    back: "(1) her birthday — the invitation is \"para el cumpleaños de Federica,\" her quinceañera party, to be celebrated in an art gallery."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is this person going to do?",
    choices: [
      "go back to the hotel",
      "return to the subway station",
      "provide more information at the police station",
      "show two forms of identification"
    ],
    answer: 2,
    back: "(3) provide more information at the police station — \"Yo voy a ir a la estación de policiá para darle más información con detalles del incidente.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is the topic of this part of the program?",
    choices: [
      "world geography",
      "the Olympic Games",
      "current events",
      "sports history"
    ],
    answer: 3,
    back: "(4) sports history — the program reviews how old the sports are: wrestling (at least 4,500 years), tennis among French nobles 800 years ago, baseball from the English game \"rounders,\" and basketball invented in 1891."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What are you asked to do?",
    choices: [
      "view a videotape of the exhibit from a different room",
      "take your ticket and return to the museum in an hour",
      "submit your ticket for a refund",
      "return on the weekend because of the crowds"
    ],
    answer: 1,
    back: "(2) take your ticket and return to the museum in an hour — \"tomen su entrada y regresen dentro de una hora\"; the El Greco room is crowded, and in an hour the group will get preference with a personal guide."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What problem does Antonio tell you about in his message?",
    choices: [
      "He has not received any mail.",
      "He cannot find his postcards.",
      "He cannot meet his friend tonight.",
      "He has lost an address."
    ],
    answer: 1,
    back: "(2) He cannot find his postcards — \"no encuentro las tarjetas postales que compramos cuando fuimos a Machu Picchu. Por favor, ¿puedes buscarlas en tu cuarto?\""
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is being announced?",
    choices: [
      "the annual Dominican parade",
      "a film festival showing a variety of Dominican movies",
      "a book fair featuring authors from the Dominican Republic",
      "the performances of two plays from the Dominican Republic"
    ],
    answer: 3,
    back: "(4) the performances of two plays from the Dominican Republic — Repertorio Español presents \"las obras teatrales ‘Mi tía la jamona’ y ‘Qué buena amiga es mi suegra’,\" two comedies by Franklin Domínguez."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is being promoted?",
    choices: [
      "a sports web site",
      "a new soccer league",
      "a party for soccer fans",
      "a new movie about a sports team"
    ],
    answer: 0,
    back: "(1) a sports web site — holaHoy.com: \"un clic y ya estarás allí en el estadio,\" with minute-by-minute results, photo galleries and match analysis."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is the problem concerning the wedding?",
    choices: [
      "It has to be moved to a different location.",
      "It will be held earlier in the day than originally planned.",
      "It will cost more than had been expected.",
      "It has to be postponed due to bad weather."
    ],
    answer: 3,
    back: "(4) It has to be postponed due to bad weather — \"la boda de Roberto y Lucía tiene que posponerse a causa de la tormenta de nieve... La boda tendrá lugar en una fecha futura.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What is a feature of this restaurant?",
    choices: [
      "It offers an opportunity to play games.",
      "Reservations are not required.",
      "It is never closed.",
      "Formal dress is required to enter."
    ],
    answer: 0,
    back: "(1) It offers an opportunity to play games — \"le ofrecemos la oportunidad de relajarse participando en varios juegos de mesa... jugando dominó o ajedrez.\" (Reservations ARE needed, so choice 2 is wrong.)"
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Cuál es el propósito de este reportaje?",
    choices: [
      "sugerir actividades especiales con el fin de descansar bien",
      "mostrar los beneficios de la actividad física para la salud",
      "explicar los resultados de una investigación sobre el estrés",
      "corregir unos conceptos erróneos sobre el ejercicio"
    ],
    answer: 1,
    back: "(2) mostrar los beneficios de la actividad física para la salud — \"Realizar una actividad física moderada con regularidad es una de las maneras más sencillas de mejorar su salud y mantenerse sano.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Cuál aspecto de los Juegos Olímpicos reportan?",
    choices: [
      "el político",
      "el competitivo",
      "el ecológico",
      "el financiero"
    ],
    answer: 2,
    back: "(3) el ecológico — el Comité Olímpico \"ha decidido ser ecológicamente responsable\": energía solar, agua reciclada y transporte público; la guía medioambiental \"no tiene que ver ni con el dinero ni con asuntos políticos.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué quiere enseñarles a sus hijas esta madre?",
    choices: [
      "la importancia de obedecer las leyes de la sociedad",
      "la importancia de escribir composiciones en inglés",
      "la importancia de conocer la historia de España y de México",
      "la importancia de aprender su lengua ancestral, el español"
    ],
    answer: 3,
    back: "(4) la importancia de aprender su lengua ancestral, el español — \"estoy comprometida a enseñarles a mis hijas la lengua de nuestros antepasados... ¡En esta casa se habla español!\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué aprendió el estudiante sobre un presidente?",
    choices: [
      "Un presidente ganó un premio de Inglaterra.",
      "Un presidente nació en Inglaterra.",
      "Un presidente es ciudadano de Inglaterra.",
      "Un presidente tenía familia en Inglaterra."
    ],
    answer: 3,
    back: "(4) Un presidente tenía familia en Inglaterra — el ancestro común con el príncipe Guillermo, Henry Spencer, \"vivió en Inglaterra, en el siglo quince\"; el presidente y el príncipe resultaron ser primos."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. Según este doctor, ¿qué debes comer para prevenir las enfermedades?",
    choices: [
      "frutas y verduras de varios colores",
      "sopas frías y calientes",
      "solamente lechuga verde",
      "frutas de color rojo solamente"
    ],
    answer: 0,
    back: "(1) frutas y verduras de varios colores — \"las frutas y verduras de colores vivos... contienen grandes cantidades de fitonutrientes\"; el doctor recomienda \"añadir una porción de las siete familias de color\" a la dieta."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué ha pasado?",
    choices: [
      "No hay electricidad en la tienda.",
      "Carlos no pagó por la ropa.",
      "Dos personas se han separado en la tienda.",
      "Hay una venta especial."
    ],
    answer: 2,
    back: "(3) Dos personas se han separado en la tienda — un niño de tres años, Carlos, \"nos ha dicho que su mamá está perdida\" y la espera en el mostrador de servicio al cliente."
  },
  // ----- Part 3a: Reading, long passage with Spanish questions (Q16-20) -----
  { ...STIMULI.fox,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Dónde ha vivido Vicente Fox por la mayor parte de su vida?",
    choices: [
      "en la Ciudad de México",
      "en el campo de Guanajuato",
      "en los Estados Unidos",
      "en unos países diferentes"
    ],
    answer: 1,
    back: "(2) en el campo de Guanajuato — \"Su primer trabajo fue también en un rancho de Guanajuato, un lugar donde él ha vivido casi toda su vida.\""
  },
  { ...STIMULI.fox,
    type: "mc",
    label: "Q17",
    stem: "Q17. Según el artículo, ¿qué clase de hombre es Vicente Fox?",
    choices: [
      "pesimista y tradicional",
      "quieto y tímido",
      "altivo y distante",
      "honrado y trabajador"
    ],
    answer: 3,
    back: "(4) honrado y trabajador — \"Él es una persona sencilla y honesta\"; madrugaba todos los días y cree que \"el trabajo es el camino al éxito.\""
  },
  { ...STIMULI.fox,
    type: "mc",
    label: "Q18",
    stem: "Q18. Además de ser político, Vicente Fox ha trabajado como",
    choices: [
      "comerciante",
      "reportero",
      "deportista",
      "cocinero"
    ],
    answer: 0,
    back: "(1) comerciante — hizo carrera en la compañía Coca Cola, de vendedor a presidente para México y América Latina, y después se dedicó \"a los negocios privados.\""
  },
  { ...STIMULI.fox,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Qué empezó Vicente Fox en 1988?",
    choices: [
      "su educación escolar",
      "su trabajo ranchero",
      "su carrera política",
      "su biografía extensa"
    ],
    answer: 2,
    back: "(3) su carrera política — \"En 1988 Vicente Fox fue elegido a una posición federal,\" su primer cargo político."
  },
  { ...STIMULI.fox,
    type: "mc",
    label: "Q20",
    stem: "Q20. El día de su elección a la presidencia, Vicente Fox también celebró",
    choices: [
      "su cumpleaños",
      "la graduación universitaria",
      "su aniversario matrimonial",
      "la boda de su hijo"
    ],
    answer: 0,
    back: "(1) su cumpleaños — \"El mismo día que celebró sus cincuenta años de edad, Vincente Fox fue eligido presidente de su país\"; nació el dos de julio de 1942 y fue elegido el dos de julio del año 2000."
  },
  // ----- Part 3b: Reading, realia with English questions (Q21-25) -----
  { ...STIMULI.lectores,
    type: "mc",
    label: "Q21",
    stem: "Q21. How many books do you have to buy each year to remain a member?",
    choices: [
      "one",
      "two",
      "three",
      "none"
    ],
    answer: 2,
    back: "(3) three — the fine print commits the member: \"me comprometo a comprar 3 libros por año para continuar como miembro.\" (The two $5.00 books are only the introductory offer.)"
  },
  { ...STIMULI.goya,
    type: "mc",
    label: "Q22",
    stem: "Q22. If you are not satisfied with its product, this company will",
    choices: [
      "ask you to complete a survey",
      "send you a different product",
      "mail you money-saving coupons",
      "refund to you twice the original purchase price"
    ],
    answer: 3,
    back: "(4) refund to you twice the original purchase price — \"TE DEVOLVEREMOS EL DOBLE DE TU DINERO\" if you mail back the box with the unused bouillon cubes."
  },
  { ...STIMULI.piratas,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is being offered?",
    choices: [
      "a visit to an exhibit",
      "a sea excursion",
      "a book about pirates",
      "a contest for children"
    ],
    answer: 0,
    back: "(1) a visit to an exhibit — readers are urged to visit \"la exposición Piratas, corsarios y bucaneros,\" open April 21–30 at the La Moraleja shopping center in Madrid."
  },
  { ...STIMULI.loteria,
    type: "mc",
    label: "Q24",
    stem: "Q24. According to this advertisement, one benefit of participating in the Mexican lottery is that the proceeds",
    choices: [
      "are used to fund a student exchange program",
      "provide assistance to children with special needs",
      "fund scholarships in the Mexican university system",
      "help support nursery schools"
    ],
    answer: 1,
    back: "(2) provide assistance to children with special needs — every time you play, \"usted ayuda a cientos de niños que son atendidos en Centros de Rehabilitación y Educación Especial.\""
  },
  { ...STIMULI.mascota,
    type: "mc",
    label: "Q25",
    stem: "Q25. This information is directed to individuals who want to",
    choices: [
      "choose a name for a pet",
      "purchase pet supplies",
      "give pets as gifts",
      "enter an animal in a pet contest"
    ],
    answer: 2,
    back: "(3) give pets as gifts — the notice is headed \"NO REGALE UNA MASCOTA CUANDO:\" and lists the situations in which you should NOT give a pet as a gift."
  },
  // ----- Part 3c: Reading, second passage with English questions (Q26-30) -----
  { ...STIMULI.golfo,
    type: "mc",
    label: "Q26",
    stem: "Q26. A traveler would visit Uxmal and Chichen Itza in order to see",
    choices: [
      "beautiful beach resorts",
      "modern Mexican cities",
      "colonial battlegrounds",
      "ancient Mayan ruins"
    ],
    answer: 3,
    back: "(4) ancient Mayan ruins — Uxmal and the great pyramid of Chichén Itzá are \"dos de las maravillas de la antigüedad en las Américas,\" built by the Maya."
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "Q27",
    stem: "Q27. What is “zackol”?",
    choices: [
      "a famous monastery",
      "a historic colonial site",
      "a typical food of the region",
      "a jungle animal of Mexico"
    ],
    answer: 2,
    back: "(3) a typical food of the region — \"se debe probar el “zackol”, un verdadero plato típico yucateco preparado con el ingrediente más básico del país: el maíz.\""
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "Q28",
    stem: "Q28. According to the passage, which activity is not available to tourists in the Yucatan?",
    choices: [
      "touring an automobile factory",
      "swimming in clear water",
      "seeing colonial villages",
      "visiting nature preserves"
    ],
    answer: 0,
    back: "(1) touring an automobile factory — the passage offers crystalline underground waters for swimming and diving, colonial towns, caves and nature preserves, but never mentions a factory."
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "Q29",
    stem: "Q29. The passage cautions tourists to the Yucatan about the",
    choices: [
      "spicy foods of the region",
      "appropriate clothes to wear",
      "high cost of lodging",
      "unfavorable exchange rates"
    ],
    answer: 0,
    back: "(1) spicy foods of the region — \"tenga cuidado con las otras comidas porque son muy picantes, muy diferentes, ajenas a la dieta de los turistas norteamericanos.\""
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which statement about the Yucatan is best supported by this passage?",
    choices: [
      "The weather is unbearably hot all year.",
      "The area offers a broad selection of vacation activities.",
      "There are many nonstop flights to the Yucatan from New York.",
      "All traces of the Mayan civilization have disappeared."
    ],
    answer: 1,
    back: "(2) The area offers a broad selection of vacation activities — ruins, colonial towns, swimming, caves and nature preserves: \"Son varios los planes que Yucatán ofrece al viajero.\" (There is NO direct flight from New York, and January–March is the coolest season.)"
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You are writing an article for your Spanish class newspaper about one or more aspects of your school that you would like to change. In Spanish, write about one or more aspects of your school that you would like to change. You may wish to include:
• the school day
• courses offered
• athletic program
• performing arts — dance, theater, music
• lunchtime options
• students’ rights and responsibilities
• homework

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

En nuestro colegio no podemos llevar la ropa que queremos. Las reglas son demasiado exigentes, y todos los alumnos, los chicos y las chicas, se quejan mucho. No entendemos por qué no podemos llevar una gorra en el edificio. Llevar una gorra o una capucha no tiene nada que ver con cuánto aprendemos. Quizás sea mejor que podamos ponernos una gorra o una capucha porque así estamos más cómodos. Además en unas aulas hace mucho frío y una capucha es necesaria. Muchas alumnas quieren ponerse las faldas cortas que están de moda, pero si se las ponen, tienen que cambiarse a otra ropa. Si no tienen ropa adecuada en el colegio, tienen que ir a casa para conseguir otra ropa ¡Es absurdo faltar a una o dos clases para cambiarse de ropa! Cuando revisen las reglas para el año próximo, hay que tener unos alumnos en el comité.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You have received a letter from your former Spanish host mother asking you what your plans are for the next school year in the United States. In Spanish, write a letter to your former host mother telling her what your plans are for the next school year in the United States. You may wish to include:
• academic goals
• plans for leisure and extracurricular activities
• volunteer work
• community service
• work during the week
• family responsibilities

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querida mamá,
¡Tengo muchos planes para el año que viene! Primero, quiero seguir estudiando el español. Después de pasar el año con ustedes en Madrid, creo que hablo y comprendo mucho más. Espero hablar español más este invierno cuando vaya de vacaciones con mis padres a México.
En el invierno voy a esquiar tres fines de semana con mi mejor amigo Mike. Vamos a quedarnos en casa de sus abuelos en los Adirondacks.
Además de la escuela y el esquí, voy a trabajar como voluntario en el hospital de mi ciudad. Ayudo a los enfermeros que siempre están muy ocupados, y estoy aprendiendo mucho también. Más que todo me gusta atender a los pacientes. ¡Lo aprecian mucho! Ahora que sé más español, cuando vayamos a México, mi familia quiere que yo les sirva de guía; ¡porque soy el único hispanohablante de la familia!
Nos veremos el verano próximo.
Su hijo,
Pablo

Rubric: a letter accomplishing the task with many connected details (goals, activities, volunteer work, family plans), clear organization with salutation and closing, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

El Sr. López tiene una esposa y dos niños. Es vendedor de coches. Trabaja muchas horas cada día. Hoy, recibe una llamada telefónica de su esposa. El hermano de su esposa está visitando para el fin de semana. La Sra. López va a preparar una comida para su familia y su hermano. Su marido va al almacén para comprar un poco de pan, leche, y queso. ¡Sorpresa! Descubre que el hermano está en el almacén. El hermano desea comprar algunos regalos para los niños. También desea ayudar a su hermana a preparar una comida para la familia. Los dos hombres ríen y hablan y después se van a casa a preparar la comida.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.fox,
    type: "mc",
    label: "S1",
    stem: "S1. Según el artículo, ¿por qué rompe moldes el origen familiar de Vicente Fox?",
    choices: [
      "Es el primer presidente de México que es hijo de una extranjera.",
      "Su padre nació en el norte de España.",
      "Su familia llegó a México de los Estados Unidos.",
      "Sus padres eran políticos famosos."
    ],
    answer: 0,
    back: "(1) Es el primer presidente de México que es hijo de una extranjera — \"Él es el primer presidente de México que es hijo de una extranjera. Aunque su padre nació en México, su madre es española, nacida en el norte de España.\""
  },
  { ...STIMULI.fox,
    type: "mc",
    label: "S2",
    stem: "S2. Según el artículo, ¿qué puesto llegó a ocupar Vicente Fox en la compañía Coca Cola?",
    choices: [
      "supervisor de las fábricas de Guanajuato",
      "presidente de la compañía para México y América Latina",
      "director de publicidad internacional",
      "conductor de los camiones de distribución"
    ],
    answer: 1,
    back: "(2) presidente de la compañía para México y América Latina — \"Por su esfuerzo, llegó a ocupar el puesto de presidente de la compañía para México y América Latina, siendo el gerente más joven de la empresa.\""
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "S3",
    stem: "S3. According to the passage, what is the coolest time of year to visit the Yucatan?",
    choices: [
      "between January and March",
      "between April and June",
      "between July and September",
      "between October and December"
    ],
    answer: 0,
    back: "(1) between January and March — \"La época más fresca para visitar Yucatán es entre los meses de enero y marzo.\""
  },
  { ...STIMULI.golfo,
    type: "mc",
    label: "S4",
    stem: "S4. According to the passage, what had the Maya already developed before the Spanish explorers arrived?",
    choices: [
      "a 365-day calendar, enormous cities, and even chewing gum",
      "a direct trade route to Europe",
      "small fishing villages along the coast",
      "gold and silver mines in the mountains"
    ],
    answer: 0,
    back: "(1) a 365-day calendar, enormous cities, and even chewing gum — \"los mayas ya habían desarrollado una civilización muy avanzada. Usaban un calendario de 365 días, construían enormes ciudades y hasta masticaban chicle.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S5",
    stem: "S5. According to the radio program, what is the oldest sport?",
    choices: [
      "tennis",
      "wrestling",
      "baseball",
      "basketball"
    ],
    answer: 1,
    back: "(2) wrestling — \"el deporte más antiguo es la lucha, que se remonta por lo menos a unos 4.500 años,\" still practiced worldwide; in Japan sumo wrestlers are national heroes."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S6",
    stem: "S6. According to the advertisement, where is the restaurant “Caramba” located?",
    choices: [
      "across from the Stock Exchange building",
      "inside a beach resort hotel",
      "next to the main cathedral",
      "near the central train station"
    ],
    answer: 0,
    back: "(1) across from the Stock Exchange building — \"«Caramba» se encuentra frente al edificio de la Bolsa de Valores. Se necesitan reservaciones. Llame al 511-6918.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "S7",
    stem: "S7. Según el doctor, ¿cuáles son ejemplos de verduras que no nutren mucho?",
    choices: [
      "las manzanas y las zanahorias",
      "los cereales y las proteínas",
      "la lechuga y las papas fritas",
      "las verduras de las siete familias de color"
    ],
    answer: 2,
    back: "(3) la lechuga y las papas fritas — \"Las verduras de gran consumo, por ejemplo, la lechuga y las papas fritas, no nutren mucho. Una pista importante: su falta de color.\""
  },
  { ...STIMULI.lectores,
    type: "mc",
    label: "S8",
    stem: "S8. According to the membership offer, what happens if you return the two introductory books within 10 days?",
    choices: [
      "You owe nothing and your name is removed from the membership list.",
      "You must still buy three more books that year.",
      "You receive two different books in exchange.",
      "You pay only the shipping and handling charges."
    ],
    answer: 0,
    back: "(1) You owe nothing and your name is removed from the membership list — \"Si decido no quedarme con los libros introductorios, los devolveré (dentro de 10 días), no deberé nada y mi nombre se eliminará de su lista de miembros.\""
  },
  { ...STIMULI.loteria,
    type: "mc",
    label: "S9",
    stem: "S9. According to the logo in this advertisement, what is the full name of the organization that runs the Mexican lottery?",
    choices: [
      "Lotería Nacional para la Asistencia Pública",
      "Centro Nacional de Rehabilitación",
      "Alianza para la Educación Especial",
      "Fondo Mexicano de Beneficencia"
    ],
    answer: 0,
    back: "(1) Lotería Nacional para la Asistencia Pública — the logo under the slogan \"¡Vamos a ganar por México!\" reads \"LOTERIA NACIONAL PARA LA ASISTENCIA PUBLICA.\""
  },
  { ...STIMULI.mascota,
    type: "mc",
    label: "S10",
    stem: "S10. According to the notice, why would a family's tight budget be a reason not to give them a pet?",
    choices: [
      "The family could not cope with small unexpected expenses.",
      "Pets must be insured by law.",
      "Pet food prices rise every year.",
      "Veterinarians require payment in advance."
    ],
    answer: 0,
    back: "(1) The family could not cope with small unexpected expenses — \"La familia tiene un presupuesto demasiado ajustado que le impide hacer frente a pequeños imprevistos.\""
  }
];
