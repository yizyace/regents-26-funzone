// June 2011 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2011/.
// Spelling quirks ("Berbardo", "albúm", "deshechos", "efectua",
// "responsibilidad") are verbatim from the printed exam.

const TDC_SRC = "Teacher Dictation Copy, June 2011 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are in a school in Puerto Rico and hear this announcement:

[La maestra lee] ¡Atención estudiantes! La presentación dramática de este año será una opereta musical, El sombrero de tres picos. Necesitamos cantantes, actores y actrices de todas las edades que sean dinámicos y entusiastas para hacer varios papeles. Todos los interesados están invitados a la primera reunión, hoy a las tres en el pequeño teatro. Comenzaremos los ensayos la semana después de hacer la selección.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are watching a television program in which the narrator makes these introductory remarks:

[La maestra lee] ¿Cómo será la vida dentro de cien años? Según los científicos de las diferentes instituciones que estudian al ser humano, las personas vivirán una saludable vejez hasta los cien o tal vez hasta los ciento cincuenta años. Habrá medicinas que curarán todas las enfermedades conocidas. Las colonias espaciales circundarán la tierra, los robots harán las tareas caseras y los automóviles estarán programados para evitar accidentes.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are in Spain and are watching a documentary on television. You hear:

[La maestra lee] Todos los estudios elaborados sobre el Internet coinciden en que su uso es un fenómeno más bien urbano. Está más desarrollado en los grandes núcleos de población. Ahora en España muchos estudiantes están conectándose a la Red a través de los ordenadores de los centros escolares y de las universidades. También muchos se han aprovechado de la capacidad de los teléfonos celulares para conectarse a la red mundial.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You hear an advertisement about a new cartoon series. The announcer says:

[La maestra lee] Regresa a la televisión la serie de dibujos animados de Mafalda, la niña sabia del pelo liso. Esta serie de Mafalda consiste en 104 episodios de un minuto de duración cada uno. A diferencia de la serie anterior, no hay diálogos en la nueva serie producida en Argentina. Ni Mafalda ni ninguno de sus amiguitos habla. Es una serie sin palabras, donde la inteligente niña, sólo con la ayuda de imágenes, música y efectos especiales, muestra las contradicciones de los mayores y de la sociedad en la que vive.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] While you are visiting a friend in Buenos Aires, your friend tells you:

[La maestra lee] Paré el carro en el semáforo de San Juan y Berbardo de Irigoyen. Oí a un agente de tránsito darle dos infracciones a una sola persona. Conducía sin cinturón de seguridad y hablaba por teléfono móvil mientras estaba conduciendo. Poca gente presta atención a estas nuevas reglas. Estas nuevas leyes de tránsito comenzaron sin ningún anuncio oficial. Ahora hay mucha resistencia de la gente, especialmente con respecto al uso de los cinturones de seguridad.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are with a tour group at the zoo in Mayaguez, Puerto Rico. The guide says to the group:

[La maestra lee] En un momento, vamos a entrar a la exhibición de reptiles. El interior de la Casa de Reptiles está oscura. Los animales están en jaulas con lámparas especiales para que podamos verlos mejor. Favor de quitarse los lentes de sol dentro de la exhibición. Hay que caminar con cuidado a causa de la oscuridad.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are watching television in Madrid and hear this announcement about a special report:

[La maestra lee] Hoy día los españoles también se han acostumbrado a consumir las comidas rápidas. En todas las ciudades hay negocios que promueven la cultura del comer con las manos. Los jóvenes son la principal clientela y su dieta corre el riesgo de ser peligrosa para la salud. Vea nuestro programa esta tarde a las cinco para aprender lo que dicen los expertos sobre este tema.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are in a supermarket in Puerto Rico and hear this announcement about mangoes:

[La maestra lee] El mango añade un sabor especial a una gran variedad de recetas. Para disfrutar más de su pescado favorito o para acompañar unas costillas de cerdo, prepare una refrescante y sabrosa salsa de mango. El mango maduro en ensaladas, en batidos, o simplemente así solito....pelado y rebanado, será un éxito en cualquier momento. Pruebe el mango y sin duda Ud. dirá: ¡Qué rico es el mango!`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are listening to the radio and hear this announcement:

[La maestra lee] Si va a viajar con su familia por carretera, haga que le revisen el auto para asegurarse de que todo funcione bien. Consiga los mapas necesarios para llegar a su destino sin problemas. Planee actividades para el camino para que todos gocen de buen humor. Lo que les importará más a los niños es pasar un rato agradable con la familia. Es algo que recordarán por toda la vida.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are in the airport waiting for your flight to Guatemala City and hear this announcement:

[La maestra lee] Atención, señores pasajeros. Debido a una falla mecánica del avión, el vuelo a Guatemala tendrá un retraso de aproximadamente diez horas. Por lo tanto, les ofrecemos una cena y una habitación en el hotel del aeropuerto. Les rogamos que nos disculpen por este inconveniente, el cual está fuera de nuestro control. Gracias por su paciencia y cooperación.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are watching Univision and hear this announcement:

[La maestra lee] Si quieres viajar a Latinoamérica sin moverte de tu sofá favorito, nuestra cadena te ofrece esta oportunidad. Una nueva serie llegará a las pantallas de televisión a partir de septiembre. Sus presentadores, Roberto Alcaraz y Leticia Vásquez, mostrarán los paisajes, las costumbres y la gente de países como el Perú, Bolivia, Cuba, Puerto Rico, y el Ecuador entre otros. Conoce Latinoamérica y disfruta de la diversidad de su gente... desde tu propia casa y sin gastar ni un centavo.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are watching a cooking show on television and hear the chef say:

[La maestra lee] Lavar los pétalos de rosas y violetas y secarlos. Cocer 100 gramos de pétalos de rosas y un cuarto de kilo de azúcar durante 10 minutos a fuego lento. Cuando falte un minuto, añadir el resto de los pétalos de rosas rojas. Dejar enfriar y vertir en la heladora unos 20 minutos hasta que esté hecho el helado. Batir la clara de huevo ligeramente y pasar las violetas por ella. Servir el helado con las violetas, cubiertas con abundante azúcar.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are with a friend at a post office in Mexico. Your friend is trying to send a package to his family in New York. The clerk says:

[La maestra lee] Lo siento, joven, pero no puede enviar esta caja de chocolates a los Estados Unidos en este momento. El problema no tiene nada que ver con el peso ni con el tamaño del paquete. Es que las leyes de México no permiten que se envíen comestibles que puedan ser afectados por el calor del verano. Durante otra estación del año no habrá ningún problema en mandar su paquete.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to the radio and hear this announcement:

[La maestra lee] Escuche un nuevo programa en nuestra estación. Presentamos a la famosa Doctora Rebeca Romero, experta en enfermedades que afectan la visión. El nuevo programa informativo está dedicado a enseñarnos a proteger uno de los órganos más importantes de nuestro cuerpo y evitar perder la vista. Escuche los interesantes y profesionales consejos de la Doctora Romero todos los domingos a las once de la mañana.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio and hear this announcement:

[La maestra lee] ¿Quieres hablar con un amigo extranjero? ¿Quieres conocer profundamente otra cultura? ¿Te gustaría pedir lo que quieres en un restaurante en el extranjero en otro idioma? El poder maravilloso de la comunicación es tuyo cuando dominas otra lengua. Si quieres sentirte más a gusto en otro país, ven a nuestro curso. Aprenderás a comunicarte mejor y también estarás mejor preparado para una profesión. Si te interesa, marca 80-76-13.`,
    psource: TDC_SRC
  },
  blades: {
    passage: `Rubén Blades: Panamá en su corazón

Rubén Blades es un hombre de muchas dimensiones. Es actor y cantante. Se graduó de Harvard y fue candidato para la presidencia de su país natal, Panamá. De la misma manera en que Panamá conecta dos continentes, Blades es la conexión entre muchas tierras. Actúa en una película estadounidense en Manhattan un día, y otro día está produciendo un disco en español en otro continente. Ha ganado dos “Grammys” y un premio de excelencia en televisión por cable. Ha sido nominado dos veces para un “Emmy”. Pero para él, el mejor premio es cuando puede regresar a Panamá. A él le encanta mucho hablar de su país, especialmente de la ciudad de su juventud: la Ciudad de Panamá. Un álbum suyo, “La Rosa de los Vientos”, está titulado en honor a lo que él dice es el otro nombre de Panamá.

Según Blades, Panamá es “un rincón del paraíso” y sugiere que la gente vaya allá como un Cristóbal Colón: a descubrir un nuevo mundo. Hay belleza natural por todas partes. Un ejemplo de esta belleza es el bosque tropical situado en la isla Barro Colorado donde se encuentran árboles de quinientos años y especies de animales que están protegidos para evitar su extinción. La Institución Smithsonian mantiene un laboratorio de investigaciones en este bosque. Bajo la supervisión de la Smithsonian sólo se permite un número muy limitado de visitantes.

En la Ciudad de Panamá, la capital, se encuentra el Parque de Santa Ana, centro de un gran número de actividades para el disfrute de todos los panameños. Y muy cerca de las calles estrechas alrededor del parque están los edificios de los ministerios del gobierno. Blades dice, “Ningún viajero debe irse sin visitar la Iglesia de Natá de los Caballeros, la iglesia más antigua del continente americano.” A Blades, algunas partes de Santa Ana le recuerdan a Nueva Orleáns y otras partes le recuerdan al Viejo San Juan en Puerto Rico. Hay ruinas como las del Convento de las Carmelitas y monumentos como el Arco Chato, que fueron diseñados por los españoles.

Sobre el Canal de Panamá, Blades opina que es único en el mundo y que como obra maestra de la ingeniería, no tiene igual. Para construirlo, tuvieron que enfrentar muchos problemas: la diferencia de altura entre la costa del Océano Pacífico y la del Océano Atlántico; la jungla, la fiebre amarilla y el clima hostil. Para resolver el primer problema, usaron un sistema que permite alzar y bajar el agua; de esta manera, pueden pasar los barcos de un océano al otro. El visitante puede apreciar la maravillosa ingeniería que permite dar paso a miles de barcos por el canal.

Blades también aconseja visitar la región de San Blas, considerado un verdadero paraíso que consiste en trescientas islas donde están las mejores playas. Para un buceador, los arrecifes de coral y la gran variedad de peces son inimaginables.

Además, según Blades, un viaje a la provincia de Chiriquí es esencial. Cada pequeñito pueblo tiene algo especial. El viajero podrá observar la rutina diaria de la gente en un ambiente folklórico inolvidable. En esta región habita el quetzal, el pájaro exótico que es considerado un regalo de los dioses.

Un recuerdo que Blades guarda de su infancia es los paseos con su madre por la Plaza Herrera. Los olores de las tortillas, las voces de los vendedores ambulantes y las flores que crecen en los balcones lo trasladan lleno de nostalgia a aquellos días. En sus palabras, “Recuerdo todo en mi corazón, y para mí, Panamá siempre será ‘La Rosa de los Vientos’”.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 22, 2011"
  },
  pompeya: {
    imgs: [
      { src: "img/q21-pompeya-maya.png",
        cap: "“La Pompeya Maya” — reading selection for question 21, Comprehensive Examination in Spanish, June 2011",
        alt: "Boxed article in Spanish titled La Pompeya Maya: after more than a century, ruins of a prosperous Mayan community that disappeared in 600 A.D. because of a devastating volcanic eruption come to light near the present-day town of Joya de Ceren, El Salvador, in Central America; the ruins show a great resemblance between village customs of 1,400 years ago and Mayan culture today." }
    ]
  },
  donjuan: {
    imgs: [
      { src: "img/q22-don-juan-restaurante.png",
        cap: "Don Juan Restaurante advertisement — reading selection for question 22, Comprehensive Examination in Spanish, June 2011",
        alt: "Advertisement in Spanish for Don Juan Restaurante, the only Spanish restaurant, serving paella, zarzuela catalana, bacalao, grilled shrimp, other seafood dishes and a great selection of desserts; specials from $14,95 per person; takeout paella; opening for lunch starting June 1; open Monday through Saturday 5:00 pm to 11:00 pm; call 6-57-32-14 for reservations." }
    ]
  },
  butano: {
    imgs: [
      { src: "img/q23-butano-aviso.png",
        cap: "BUTANO S.A. customer notice — reading selection for question 23, Comprehensive Examination in Spanish, June 2011",
        alt: "Boxed notice in Spanish from the gas company butano sa: so customers keep enjoying gas during their vacations, BUTANO will stay attentive to their needs all summer with fast service wherever they are; customers vacationing in a chalet or apartment should take the chance to have their butane gas installation checked; although the world price of gas has risen, the advance-payment program guarantees no change in the monthly bill." }
    ]
  },
  vacunelo: {
    imgs: [
      { src: "img/q24-vacunelo-anuncio.png",
        cap: "Public service advertisement — reading selection for question 24, Comprehensive Examination in Spanish, June 2011",
        alt: "Advertisement showing a photo of a baby playing with large dice. Headline in Spanish: do not gamble with your baby's life — vaccinate before age two. Smaller text urges protection against dangerous childhood diseases: chickenpox, diphtheria, measles, whooping cough, tetanus, mumps, rubella. Slogan: to wait is to regret. For more information call toll-free 1-800-333-0233. HMA associates logo." }
    ]
  },
  amigos: {
    imgs: [
      { src: "img/q25-consejos-amistad.png",
        cap: "Advice list — reading selection for question 25, Comprehensive Examination in Spanish, June 2011",
        alt: "Bulleted advice list in Spanish: talk to your friends' parents, who should also be part of family life; visit them now and then and see how important they will feel; always write to those who live far away; compose a poem or song you invented and send it to the friend who most needs your friendship; always smile at your friends, since a smiling face is like a sedative for pain; always try to keep your good old friends." }
    ]
  },
  flores: {
    passage: `Flores Frescas de Colombia

Colombia es el segundo exportador de flores frescas del mundo, después de Holanda. Las flores son el segundo producto de exportación colombiano, después de los hidrocarburos, y su principal destino es los Estados Unidos. La mayor parte de las flores se producen en los campos que rodean Bogotá, debido a su cercanía al aeropuerto. La mayoría de los trabajadores son mujeres. Sin duda, esta industria ayuda enormemente a la economía colombiana.

El 82% de las flores que produce Colombia proviene de Bogotá, la capital. El ingeniero Javier Vásquez es gerente de una compañía que opera en los campos al norte de Bogotá, a 2.800 metros sobre el nivel del mar. En este lugar se producen principalmente claveles que se exportan fundamentalmente a Estados Unidos. Para Vásquez, es importante que la empresa, que tiene 500 empleados, proteja tanto a las plantas como a quienes las cuidan. En los invernaderos de la compañía, los trabajadores se entrenan para mejorar su habilidad en el trato de las semillas y de las flores mismas. Al mismo tiempo, la empresa insiste en que la protección del medio ambiente sea una necesidad antes que un favor a la naturaleza.

Se han creado organizaciones para proteger a los trabajadores y el medio ambiente. Por ejemplo, la Asociación Colombiana de Exportadores de Flores, ASCOLFLORES, da certificados a las compañías que reciclan deshechos y usan racionalmente el agua. También supervisa la protección de trabajadores, sobre todo debido al uso de herbicidas y fertilizantes.

Este interés por mantener un alto nivel de responsabilidad social se manifiesta en varias formas. Veamos, por ejemplo, el caso de la siguiente compañía. A varios kilómetros de distancia, visitamos una empresa en la que su responsabilidad social se manifiesta de otra manera. La empresa rescató un viejo silo y lo convirtió en una guardería infantil para cuidar a los hijos de los trabajadores durante las horas laborales. Sin embargo, Roberto Almeida, gerente de la empresa, dijo que la compañía, que ha estado veinte años en la zona, se ha demorado un poco. Según Almeida, antes de poder embarcarse en un proyecto social, la compañía “tenía que consolidarse económicamente en un sector relativamente nuevo con el fin de obtener las ganancias necesarias para crear la guardería”. Otras empresas tienen proyectos de viviendas, con subsidios a sus trabajadores.

La importancia del bienestar de los trabajadores se demuestra en las reglas que efectua “Flores Colombianas, C.I. Ltda.” Esta empresa toma la responsibilidad de fomentar una cultura de ahorro y economía solidaria. Se toma cuidado de usar productos biológicos y químicos en las plantas que cumplen con las reglas de la Agencia para la Protección del Medioambiente. También se busca el mejoramiento social y ambiental a través de la protección de aguas y riegos, y la evaluación de residuos, suelos, y fertilizantes. Sus productos son elaborados bajo estrictas condiciones que garantizan una producción amigable con el medioambiente y responsable con la salud de los trabajadores.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 22, 2011"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-mujer-periodico.png",
        cap: "Picture for writing task 33, Comprehensive Examination in Spanish, June 2011",
        alt: "Line drawing of a smiling young woman sitting at a table beside a large window with a curtain, holding open a newspaper with several columns of small print, as if reading the classified ads." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is this announcement about?",
    choices: [
      "the cancellation of a musical play",
      "transportation arrangements to the theater",
      "a substitution in the cast of a play",
      "a call for participants in a theatrical production"
    ],
    answer: 3,
    back: "(4) a call for participants in a theatrical production — the school needs \"cantantes, actores y actrices de todas las edades\" for this year's musical and invites everyone interested to a first meeting."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is one of the narrator's predictions?",
    choices: [
      "People will live longer and healthier lives.",
      "There will not be a sufficient supply of oil.",
      "People will speak a common language.",
      "There will be fewer technological advances."
    ],
    answer: 0,
    back: "(1) People will live longer and healthier lives — \"las personas vivirán una saludable vejez hasta los cien o tal vez hasta los ciento cincuenta años.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What does this documentary say about the use of the Internet in Spain?",
    choices: [
      "The Internet is used primarily for entertainment.",
      "Internet usage costs have increased dramatically.",
      "Internet usage is greatest in urban areas.",
      "Schools have been slow to implement use of the Internet."
    ],
    answer: 2,
    back: "(3) Internet usage is greatest in urban areas — its use is \"un fenómeno más bien urbano... más desarrollado en los grandes núcleos de población.\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. According to the announcer, what is unusual about these cartoons?",
    choices: [
      "They only appear once a year.",
      "There are no spoken words.",
      "All scenes take place in the future.",
      "They are in black and white."
    ],
    answer: 1,
    back: "(2) There are no spoken words — \"Es una serie sin palabras\"; neither Mafalda nor any of her friends speaks, only images, music, and special effects."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What problem is your friend describing?",
    choices: [
      "violations of new laws",
      "poor road conditions",
      "too much noise",
      "increased traffic"
    ],
    answer: 0,
    back: "(1) violations of new laws — a driver got two tickets at once and \"Poca gente presta atención a estas nuevas reglas\"; people resist the new traffic laws, especially seat belts."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What does the guide tell the group?",
    choices: [
      "to move along quickly",
      "to refrain from taking photos",
      "to remove sunglasses",
      "to maintain silence"
    ],
    answer: 2,
    back: "(3) to remove sunglasses — \"Favor de quitarse los lentes de sol dentro de la exhibición\" because the Reptile House interior is dark."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What will be the subject of the special report?",
    choices: [
      "the state of the economy",
      "the problems associated with fast food",
      "the importance of daily exercise",
      "the most recent advances in technology"
    ],
    answer: 1,
    back: "(2) the problems associated with fast food — Spaniards now eat fast food too, and young people's diet \"corre el riesgo de ser peligrosa para la salud\"; experts discuss it tonight at five."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What does this announcement tell shoppers about mangoes?",
    choices: [
      "They are being offered as free samples.",
      "They are being grown in more countries.",
      "They are on sale until the end of the week.",
      "They are a source of additional flavor in various dishes."
    ],
    answer: 3,
    back: "(4) They are a source of additional flavor in various dishes — \"El mango añade un sabor especial a una gran variedad de recetas\": mango salsa for fish or pork ribs, salads, shakes, or on its own."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What is this announcement about?",
    choices: [
      "traveling with pets",
      "traveling alone",
      "traveling on a budget",
      "traveling by car"
    ],
    answer: 3,
    back: "(4) traveling by car — \"Si va a viajar con su familia por carretera...\": have the car checked, get maps, and plan activities for the road."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué trata este anuncio?",
    choices: [
      "La pista no estará disponible.",
      "El avión no saldrá a tiempo.",
      "Se abordará el avión pronto.",
      "Faltan varios pasajeros para el vuelo."
    ],
    answer: 1,
    back: "(2) El avión no saldrá a tiempo — debido a una falla mecánica, el vuelo a Guatemala \"tendrá un retraso de aproximadamente diez horas\"; la aerolínea ofrece cena y hotel."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Cuál es el tema de este anuncio?",
    choices: [
      "los muebles lujosos latinoamericanos",
      "los viajes en avión a Latinoamérica",
      "un nuevo programa cultural sobre unos países en Latinoamérica",
      "unos reporteros latinoamericanos"
    ],
    answer: 2,
    back: "(3) un nuevo programa cultural sobre unos países en Latinoamérica — una nueva serie de televisión mostrará \"los paisajes, las costumbres y la gente\" del Perú, Bolivia, Cuba, Puerto Rico y el Ecuador."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Para qué son estas instrucciones?",
    choices: [
      "para un postre",
      "para una sopa",
      "para un pan",
      "para una bebida"
    ],
    answer: 0,
    back: "(1) para un postre — la receta termina en un helado de pétalos de rosas servido con violetas azucaradas: \"hasta que esté hecho el helado.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué problema tiene el joven?",
    choices: [
      "No trae suficiente dinero.",
      "No tiene la declaración de aduana.",
      "No puede mandar el paquete ahora.",
      "No tiene la dirección correcta."
    ],
    answer: 2,
    back: "(3) No puede mandar el paquete ahora — las leyes de México no permiten enviar comestibles \"que puedan ser afectados por el calor del verano\"; tendrá que esperar a otra estación."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿En qué se especializa la Doctora Romero?",
    choices: [
      "los ojos",
      "los pies",
      "las orejas",
      "las rodillas"
    ],
    answer: 0,
    back: "(1) los ojos — la Doctora Romero es \"experta en enfermedades que afectan la visión\" y su programa enseña a \"evitar perder la vista.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿A quién le interesaría este anuncio?",
    choices: [
      "a una persona que quiere trabajar al aire libre",
      "a una persona que quiere aprender a cocinar",
      "a una persona que quiere trabajar en la radio",
      "a una persona que quiere aprender otro idioma"
    ],
    answer: 3,
    back: "(4) a una persona que quiere aprender otro idioma — el anuncio invita a un curso de lenguas: \"El poder maravilloso de la comunicación es tuyo cuando dominas otra lengua.\""
  },
  // ----- Part 3a: Long reading passage (Q16-20) -----
  { ...STIMULI.blades,
    type: "mc",
    label: "Q16",
    stem: "Q16. Según la selección, ¿qué se puede decir de Rubén Blades?",
    choices: [
      "Es como un puente entre culturas.",
      "Es como un defensor de los pobres.",
      "Es como un educador reconocido.",
      "Es como un bosque misterioso."
    ],
    answer: 0,
    back: "(1) Es como un puente entre culturas — \"De la misma manera en que Panamá conecta dos continentes, Blades es la conexión entre muchas tierras\": actúa en Manhattan un día y produce discos en español en otro continente."
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿A qué se refiere el título de su albúm?",
    choices: [
      "una flor indígena",
      "a otro nombre de su país",
      "a otro premio que recibió",
      "a un pueblo en Panamá"
    ],
    answer: 1,
    back: "(2) a otro nombre de su país — \"La Rosa de los Vientos\" está titulado \"en honor a lo que él dice es el otro nombre de Panamá.\""
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué se puede encontrar en el bosque tropical en la isla Barro Colorado?",
    choices: [
      "una gran variedad de hoteles modernos",
      "montañas altas y volcanes en actividad",
      "árboles muy viejos y animales exóticos",
      "ruinas de antiguas civilizaciones"
    ],
    answer: 2,
    back: "(3) árboles muy viejos y animales exóticos — allí \"se encuentran árboles de quinientos años y especies de animales que están protegidos para evitar su extinción.\""
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Por qué recomienda Blades visitar Chiriquí?",
    choices: [
      "para nadar en las playas",
      "para aprender como viven los habitantes",
      "para explorar el bosque tropical",
      "para caminar por los parques"
    ],
    answer: 1,
    back: "(2) para aprender como viven los habitantes — en Chiriquí \"El viajero podrá observar la rutina diaria de la gente en un ambiente folklórico inolvidable.\""
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué memoria recuerda más de su infancia Blades?",
    choices: [
      "los poemas de su madre",
      "la casa donde vivía",
      "la construcción del canal de Panamá",
      "el ambiente de un lugar que visitaba"
    ],
    answer: 3,
    back: "(4) el ambiente de un lugar que visitaba — recuerda los paseos por la Plaza Herrera: los olores de las tortillas, las voces de los vendedores y las flores en los balcones."
  },
  // ----- Part 3b: Realia (Q21-25) -----
  { ...STIMULI.pompeya,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is the main topic of this article?",
    choices: [
      "the celebration of a regional festival",
      "the discovery of an ancient city",
      "the publication of a book",
      "the differences between Mayan and Aztec cultures"
    ],
    answer: 1,
    back: "(2) the discovery of an ancient city — after more than a century, the ruins of a prosperous Mayan community (\"La Pompeya Maya\") have come to light near Joya de Ceren, El Salvador."
  },
  { ...STIMULI.donjuan,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is one of the dishes offered in this restaurant?",
    choices: [
      "seafood",
      "steak",
      "pork chops",
      "omelettes"
    ],
    answer: 0,
    back: "(1) seafood — the ad lists \"paella, zarzuela catalana, bacalao, camarones a la parrilla, otros platos con mariscos\" (shellfish and seafood dishes)."
  },
  { ...STIMULI.butano,
    type: "mc",
    label: "Q23",
    stem: "Q23. This company is announcing to its customers that it will",
    choices: [
      "maintain the same monthly payment for customers",
      "give additional discounts to current customers",
      "stop service during the summer vacation period",
      "increase production in the next few months"
    ],
    answer: 0,
    back: "(1) maintain the same monthly payment — although gas prices rose worldwide, \"nuestro programa de pago con anticipación le garantiza que no notará ningún cambio en su cuenta mensual.\""
  },
  { ...STIMULI.vacunelo,
    type: "mc",
    label: "Q24",
    stem: "Q24. This advertisement offers information about",
    choices: [
      "proper behavior for young children",
      "appropriate toys for children under two years of age",
      "immunization of children under two years of age",
      "nursery schools and day-care centers"
    ],
    answer: 2,
    back: "(3) immunization of children under two years of age — \"VACÚNELO ANTES DE QUE CUMPLA DOS AÑOS DE EDAD\": vaccinate against chickenpox, diphtheria, measles, whooping cough, tetanus, mumps, rubella."
  },
  { ...STIMULI.amigos,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is the advice about?",
    choices: [
      "how to apply for a job",
      "how to improve your writing skills",
      "how to organize your time",
      "how to be a good friend"
    ],
    answer: 3,
    back: "(4) how to be a good friend — every tip is about friendship: talk to friends' parents, visit, write to faraway friends, send a poem or song, smile, keep your old friends."
  },
  // ----- Part 3c: Second reading passage (Q26-30) -----
  { ...STIMULI.flores,
    type: "mc",
    label: "Q26",
    stem: "Q26. According to the passage, flowers are important for Colombia because they",
    choices: [
      "attract many tourists",
      "are used for medicinal purposes",
      "contribute greatly to the economy",
      "provide fragrances for perfumes"
    ],
    answer: 2,
    back: "(3) contribute greatly to the economy — \"Sin duda, esta industria ayuda enormemente a la economía colombiana\"; flowers are Colombia's second export product."
  },
  { ...STIMULI.flores,
    type: "mc",
    label: "Q27",
    stem: "Q27. According to the passage, why are the majority of flowers grown in the fields around Bogota?",
    choices: [
      "The area receives the most sunshine.",
      "A major transportation center is nearby.",
      "It rains nearly every day there.",
      "Most of the flowers are sold in the capital."
    ],
    answer: 1,
    back: "(2) A major transportation center is nearby — most flowers are grown around Bogotá \"debido a su cercanía al aeropuerto\" (because of its closeness to the airport)."
  },
  { ...STIMULI.flores,
    type: "mc",
    label: "Q28",
    stem: "Q28. In the company where Javier Vásquez works, what do employees receive?",
    choices: [
      "money to start their own businesses",
      "a share in a scholarship fund",
      "part ownership in the company",
      "training on the care of flowers"
    ],
    answer: 3,
    back: "(4) training on the care of flowers — \"los trabajadores se entrenan para mejorar su habilidad en el trato de las semillas y de las flores mismas.\""
  },
  { ...STIMULI.flores,
    type: "mc",
    label: "Q29",
    stem: "Q29. The organization ASCOLFLORES gives certificates to companies that",
    choices: [
      "protect workers and their environment",
      "produce the greatest quantity of flowers",
      "have the lowest accident rate",
      "reduce production costs"
    ],
    answer: 0,
    back: "(1) protect workers and their environment — ASCOLFLORES certifies companies that recycle waste and use water rationally, and it supervises worker protection from herbicides and fertilizers."
  },
  { ...STIMULI.flores,
    type: "mc",
    label: "Q30",
    stem: "Q30. According to the passage, one of the goals of “Flores Colombianas” is to",
    choices: [
      "accelerate the shipping process",
      "increase union membership",
      "protect water quality",
      "eliminate import duties"
    ],
    answer: 2,
    back: "(3) protect water quality — the company seeks improvement \"a través de la protección de aguas y riegos, y la evaluación de residuos, suelos, y fertilizantes.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You recently had an interesting dream that you remember. In Spanish, write a journal entry about your dream. You may want to include:
• what your dream was about
• why it was interesting
• who or what was in the dream
• where it took place
• what happened
• what you did about it
• why you had this dream
• what you remember most
• how you reacted after you woke up

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Anoche tuve un sueño muy raro, pero chistoso. Soñé que estaba en el patio de mi casa jugando sola cuando vi una luz blanca iluminando el jardín de mi mamá. Cuando me acerqué al jardín, noté que había un objeto redondo y de metal gris. Este objeto giraba lentamente y tocaba música que no conocía. De repente, se prendieron luces de todos colores — amarillas, rojas, azules. Aunque tenía mucho miedo de permanecer en el jardín, al mismo tiempo no quería huir de ahí por mi curiosidad. Me acerqué y lo toqué. De repente el objeto dio un salto tremendo. ¡Qué horror! Salí corriendo del jardín y al entrar en mi casa vi que mi papá estaba en la puerta jugando con un aparato eléctrico, el cual apuntaba en la dirección del jardín. Era un nuevo juguete que él había comprado para la familia y lo estaba estrenando antes de dárnoslo.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You recently had a day in which you were particularly happy. In Spanish, write a journal entry about that day. You may wish to include:
• when that day was
• what the weather was like
• where you were
• what happened that day
• who was involved
• how you felt
• why you felt that way
• what the rest of the day was like

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

El domingo pasado fue fenomenal para mí. Hacía mucho sol y tenía ganas de salir a cualquier parte. Llamé a mi amiga Laura y decidimos ir a la playa. Allí encontramos a Pablo, a Juan, y a Elena, compañeros del colegio. ¡Qué genial! Pasamos el día nadando, buceando, jugando al voleibol y charlando. Fuimos a un restaurante cerca de la playa donde el papá de Juan era cocinero. Nos preparó unos mariscos magníficos con un helado especial de postre. Por la tarde decidimos ir a ver una película nueva y a comer unas tapas en la calle. ¡Fue un placer pasar el día con mis amigos!

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Alejandra trabajaba para una compañía de aviación. La semana pasada su jefe le dijo que probablemente ella iba a perder su trabajo en unos meses. Alejandra estaba muy triste porque hacía diez años que trabajaba allí. Le gustaba el trabajo porque podía viajar a muchos países y visitar lugares interesantes.

Cuando ella llegó a su casa, empezó a leer el periódico y vio que había varios anuncios de compañías que buscaban empleados. Ella se puso muy contenta porque todos los meses tenía que pagar muchas cuentas y si no tuviera un puesto tendría que pedirles dinero a sus padres. Ella decidió que iba a llamar a la agencia de empleo para pedir una entrevista para ver si le daría empleo.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, where and when will the first meeting for interested students take place?",
    choices: [
      "tomorrow morning in the cafeteria",
      "today at three in the little theater",
      "Saturday afternoon in the gymnasium",
      "next week in the music room"
    ],
    answer: 1,
    back: "(2) today at three in the little theater — \"Todos los interesados están invitados a la primera reunión, hoy a las tres en el pequeño teatro.\" Rehearsals begin the week after casting."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "S2",
    stem: "S2. How long does each episode of the new Mafalda cartoon series last?",
    choices: [
      "thirty minutes",
      "one hour",
      "one minute",
      "ten minutes"
    ],
    answer: 2,
    back: "(3) one minute — the new series \"consiste en 104 episodios de un minuto de duración cada uno\" (104 episodes of one minute each), produced in Argentina."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S3",
    stem: "S3. Según el chef, ¿por cuánto tiempo se deben cocer los pétalos de rosas con el azúcar?",
    choices: [
      "durante diez minutos a fuego lento",
      "durante veinte minutos a fuego alto",
      "durante una hora en el horno",
      "durante un minuto en agua fría"
    ],
    answer: 0,
    back: "(1) durante diez minutos a fuego lento — \"Cocer 100 gramos de pétalos de rosas y un cuarto de kilo de azúcar durante 10 minutos a fuego lento.\" (Los 20 minutos corresponden a la heladora.)"
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S4",
    stem: "S4. Según el empleado del correo, ¿cuándo podrá el joven mandar su paquete a Nueva York?",
    choices: [
      "mañana por la mañana",
      "durante otra estación del año",
      "después de pagar un impuesto",
      "cuando el paquete pese menos"
    ],
    answer: 1,
    back: "(2) durante otra estación del año — el calor del verano impide enviar comestibles ahora, pero \"Durante otra estación del año no habrá ningún problema en mandar su paquete.\""
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "S5",
    stem: "S5. Según Rubén Blades, ¿qué debe visitar todo viajero antes de irse de Panamá?",
    choices: [
      "el laboratorio de la Institución Smithsonian",
      "las trescientas islas de San Blas",
      "los edificios de los ministerios del gobierno",
      "la iglesia más antigua del continente americano"
    ],
    answer: 3,
    back: "(4) la iglesia más antigua del continente americano — Blades dice: \"Ningún viajero debe irse sin visitar la Iglesia de Natá de los Caballeros, la iglesia más antigua del continente americano.\""
  },
  { ...STIMULI.blades,
    type: "mc",
    label: "S6",
    stem: "S6. Según la selección, ¿cómo resolvieron los ingenieros la diferencia de altura entre los dos océanos al construir el Canal de Panamá?",
    choices: [
      "Usaron un sistema que permite alzar y bajar el agua.",
      "Construyeron un túnel debajo de la jungla.",
      "Eliminaron la fiebre amarilla de la región.",
      "Cambiaron la ruta hacia el norte del país."
    ],
    answer: 0,
    back: "(1) Usaron un sistema que permite alzar y bajar el agua — \"Para resolver el primer problema, usaron un sistema que permite alzar y bajar el agua; de esta manera, pueden pasar los barcos de un océano al otro.\""
  },
  { ...STIMULI.pompeya,
    type: "mc",
    label: "S7",
    stem: "S7. According to the article, what caused the disappearance of the prosperous Mayan community in 600 A.D.?",
    choices: [
      "a long civil war",
      "a devastating volcanic eruption",
      "a severe drought",
      "a powerful hurricane"
    ],
    answer: 1,
    back: "(2) a devastating volcanic eruption — the community \"desapareció a causa de una devastadora erupción volcánica,\" which is why archaeologists call the region \"La Pompeya Maya.\""
  },
  { ...STIMULI.donjuan,
    type: "mc",
    label: "S8",
    stem: "S8. According to the advertisement, what will the Don Juan restaurant begin doing on June 1?",
    choices: [
      "offering free desserts",
      "closing for summer vacation",
      "opening for lunch",
      "delivering meals to homes"
    ],
    answer: 2,
    back: "(3) opening for lunch — \"A partir del 1° de junio abriremos para el almuerzo\" (starting June 1 we will open for lunch); until then it is open Monday–Saturday, 5:00 pm to 11:00 pm."
  },
  { ...STIMULI.butano,
    type: "mc",
    label: "S9",
    stem: "S9. What does BUTANO suggest customers do if they spend their vacation in a chalet or apartment?",
    choices: [
      "turn off the gas before leaving home",
      "buy a more modern gas stove",
      "have their butane gas installation checked",
      "switch to electric appliances for the summer"
    ],
    answer: 2,
    back: "(3) have their butane gas installation checked — \"Si usted pasa las vacaciones en su chalet o apartamento, aproveche la oportunidad para que le revisen su instalación de gas butano.\""
  },
  { ...STIMULI.flores,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, one flower company showed its social responsibility by converting an old silo into",
    choices: [
      "a flower-packing warehouse",
      "a museum of the flower industry",
      "a housing project for retirees",
      "a day-care center for workers' children"
    ],
    answer: 3,
    back: "(4) a day-care center for workers' children — \"La empresa rescató un viejo silo y lo convirtió en una guardería infantil para cuidar a los hijos de los trabajadores durante las horas laborales.\""
  }
];
