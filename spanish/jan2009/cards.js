// January 2009 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key / rating guide), raw-docs/nysedregents.org/spanish/jan2009/.
// Printed quirks kept verbatim (verified against page renders): "erupcíon"
// (Q17 choice 2), "Prohibe" (Q19 choice 1), "El piensa" (Part 3c passage),
// "horones" (Q22 realia), and the unclosed quote before "decorarse la ropa
// con extravagancia" in the Q5 dictation passage.

const TDC_SRC = "Teacher Dictation Copy, January 2009 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are talking with your host mother in Spain and she offers you this advice:

[La maestra lee] En esta época del año es muy necesario el uso de gafas de sol para proteger nuestros ojos. Si quieres llevarlas siempre bien limpias, solamente tienes que lavarlas con agua caliente y unas gotas de vinagre. Después, deja que se sequen y ya está. ¡Vas a ver qué limpias quedan!`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are in Florida listening to a Spanish-language radio station and hear this report about the history of Cuba:

[La maestra lee] Cuando Cuba declaró la guerra contra España en 1869, Ana Betancourt anunció ante la Asamblea de la Constitución que no era suficiente liberarse de España. Era necesario también liberarse de la discriminación contra la mujer. Con su esposo, el filósofo Ignacio Mora de la Pera, publicó varios artículos feministas proclamando la necesidad de permitir a las mujeres votar y poseer propiedad.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are in Chile and hear this announcement on the radio:

[La maestra lee] “Estoy aburrido”. “No tengo nada que hacer”. Estas son quizás las mismas frases que siempre escuchan los padres cada vez que llega el fin de semana. La verdad es que mantener entretenidos a los hijos puede ser una tarea muy difícil para los padres. Una excelente solución sería llevar a los niños a ver las obras de teatro infantil. Esta alternativa también puede ser beneficiosa para promover la lectura, enseñar a los niños a portarse bien o aprender el valor de la amistad…y el precio de las entradas es siempre razonable.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are watching a Spanish-language television program and hear this report about a fashion designer from the Dominican Republic:

[La maestra lee] La oportunidad toca a menudo a la puerta de la diseñadora dominicana Miguelina Gambaccini. Y así fue como todo comenzó. Un día que ella estaba aburrida diseñó una simple túnica y esto se convirtió en su pasatiempo favorito. Un amigo fotografió la túnica para una revista británica y de allí nació su línea Miguelina. Para una diseñadora que nunca estudió diseño, su ambición no tiene límites. Y ahora quiere diseñar una línea de ropa de playa y trajes de novia.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] A Colombian exchange student is talking to your class. She says:

[La maestra lee] La palabra “chévere” se extendió por toda la América Latina y se convirtió en expresión popular en muchos de estos países. Ser “chévere” significa “excelente” o “elegante”. ¿Cómo surgió esta palabra? Hay dos explicaciones posibles. “Chévere” puede venir de una expresión de una lengua africana, que significa “decorarse la ropa con extravagancia. También puede provenir del nombre de un famoso caballero francés que siempre vestía elegantemente y que llevaba el título de señor de Chièvre. De esta manera, “chièvre” se convirtió en la palabra “chévere”, sinónimo de elegancia.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to a Spanish-language radio station in California and hear this report:

[La maestra lee] Desde los 17 años de edad, Mirna Hernández comenzó a estudiar náhuatl: el idioma de sus ancestros aztecas. Cada día más personas de origen mexicano están aprendiendo esta antigua lengua que los conecta al pasado. Es muy interesante notar que muchas palabras del español, y hasta del inglés, provienen del náhuatl, como por ejemplo, coyote, chocolate y chicle. En 1993, cuando Macedonio Arteaga estableció la Escuela Izcalli en San Diego, sólo tres estudiantes asistieron a clases para aprender náhuatl. Hoy día su programa de verano cuenta con hasta 200 estudiantes.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are listening to a radio station in Puerto Rico and hear this announcement:

[La maestra lee] Sabemos que a ustedes les encanta el grupo musical, Los Ponceños. Hemos preparado para Uds., nuestros oyentes, el mejor regalo para el Año Nuevo. Durante este mes cada uno de los miembros del grupo compartirá con ustedes un poquito de su vida, sus gustos, sus secretos y sus sueños en una entrevista especial. ¡No pierdan la oportunidad de escuchar a estos músicos talentosos y, al mismo tiempo, conocerlos mejor!`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are on a tour of an archaeological site in Mexico. The guide says:

[La maestra lee] La llegada de la primavera en Teotihuacán, México, es sin duda una de las celebraciones más singulares de todo México. En la ciudad de Teotihuacán se puede disfrutar de un museo, dos palacios y un templo. También se puede subir las famosas pirámides del Sol y de la Luna. Turistas de muchos países se unen a los mexicanos cada marzo para celebrar esta nueva estación del año. Se recomienda que todo el mundo lleve ropa de color blanco y rojo para participar en esta celebración. Es impresionante ver como los colores tradicionales le dan un aspecto muy festivo a esta celebración.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You overhear your Spanish teacher give some advice to one of your classmates:

[La maestra lee] Me dijeron que quieres ir a España durante el verano y que estás un poco preocupado por el costo del viaje. Mira, hay organizaciones que ofrecen unas becas magníficas. Además, si te quedas en casa de una familia, vas a poder hablar español todo el tiempo y te ahorrarás mucho dinero. Ya sé que la vida en España es muy cara ahora y claro, necesitas ahorrar dinero para la universidad. Pero con un poco de determinación estoy seguro que encontrarás ayuda financiera para tu viaje.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are in Mexico and are watching the news on television. You hear:

[La maestra lee] Con el objetivo de incluir a todo México en la conservación de nuestro maravilloso hábitat, la Secretaría Medio Ambiente y Recursos Naturales, en conjunto con otras organizaciones, celebrará en todo el país la Semana Nacional de la Conservación. Durante esta semana se realizarán diferentes actividades enfocadas a promover la preservación de la naturaleza. Tales acciones incluyen limpieza de las playas, ríos y carreteras, talleres de educación ambiental, concursos y exposiciones, entre otras. Una amplia invitación queda abierta para todos los que quieran colaborar en el cuidado de nuestro medio ambiente.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You hear this news report while watching television in Barcelona:

[La maestra lee] La versión digital del periódico español, El País recibió el premio destinado al periódico digital mejor diseñado en España y Portugal. El País compitió en la categoría de medios de la red que recibió más de 10 millones de visitas. El número de visitas fue superior a los años anteriores. Una organización internacional de más de 2.500 periodistas y académicos otorgó el premio. El objetivo de la organización es “reconocer e impulsar la calidad del periodismo visual en la Península Ibérica”.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are watching a Spanish-language television program and hear this announcement:

[La maestra lee] Don Omar anunció este martes que hará una grabación a dúo con la estrella pop Beyoncé. “Acabamos de cerrar esta semana las negociaciones con ella”, dijo en conferencia de prensa en la Ciudad de México. “Será un CD de estilo hip-hop, pero podría llevar unos toques de reggaetón. En cuanto pueda, yo viajaré a Nueva York para hacer la grabación”, añadió el cantante famoso.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are listening to a Spanish television program and hear this report:

[La maestra lee] Muchos estados empiezan a dar exámenes a los niños desde el primer grado. Por eso es una buena idea saber como ayudar a su niño para que se sienta cómodo durante los exámenes.

Primero, hable con su niño. Pregúntele al niño si está nervioso y trate de determinar por qué lo está. Cuando usted sabe lo que está pasando, puede ayudar a su niño a estar listo. Procure que el niño duerma bien la noche antes del examen y que desayune bien por la mañana. Es un dicho muy antiguo, pero todavía muy cierto, que el cerebro no funciona cuando el estómago está vacío.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You have just arrived on a Caribbean island and hear a person saying:

[La maestra lee] ¡Saludos y bienvenidos a nuestro paraíso caribeño! Sus vacaciones van a ser inolvidables. Con nuestra cadena de hoteles alrededor de la isla, Uds. podrán disfrutar de los distintos sabores de nuestra cultura en un excelente ambiente de atención personalizada. Disfrute de la historia y tradición de más de cien años en el hotel Plaza de Armas y de la vida nocturna y el ambiente del Condado.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are at a bank in Spain and you hear the teller say to a customer:

[La maestra lee] Buenas tardes, señor Robles. Si no quiere esperar tanto tiempo la próxima vez pruebe nuestro nuevo cajero automático. Las instrucciones son sencillas y aparecen en la pantalla. Allí podrá hacer cualquier transacción bancaria que usted necesite. Claro que si necesita hablar con uno de nuestros empleados, siempre puede hacer una cita.`,
    psource: TDC_SRC
  },
  galapagos: {
    passage: `Las Islas Galápagos

Las Islas Galápagos siempre han tenido una magia especial desde que el joven naturalista inglés Charles Darwin las visitó en 1835 y dio a conocer esa magia en el libro El origen de las especies. Visitar las islas es conocer la naturaleza desde muy cerca en todo su esplendor.

Este archipiélago, llamado oficialmente archipiélago de Colón, está situado a casi mil kilómetros de la costa del Ecuador y consiste de unos cuarenta islotes, varias islas pequeñas y una docena de islas mayores, cada cual con su nombre y con su historia particular. Los exploradores españoles las llamaron Islas Encantadas, pero no les dieron mayor importancia.

En el siglo XVI, las Islas Galápagos fueron una base de operaciones de piratas ingleses. En 1684, uno de los bucaneros que había recibido una educación formal hizo un mapa de las islas, dándoles nombres de reyes y nobles ingleses. Más tarde, los españoles le dieron a cada isla otro nombre por eso muchas islas tienen dos nombres.

En 1790 una gran cantidad de peces y vida marítima desapareció a causa de los pescadores que llegaron a las islas y explotaron los recursos naturales. Ya para el siglo XIX, habían muerto más de 200.000 tortugas y focas. Estos animales eran usados para hacer ornamentos y ropa que se vendían en el mercado internacional. Por suerte, gracias a la sensibilidad de la comunidad y el buen criterio del Ecuador, se ha podido preservar este paraíso único que estuvo a punto de perderse para siempre.

Las Islas Galápagos están situadas en un lugar ideal. Se estima que las Galápagos datan de hace cinco millones de años y que son el resultado de erupciones volcánicas. Están aisladas del continente y al mismo tiempo reciben el beneficio de las corrientes oceánicas del Pacífico que les permiten ser un paraíso geológico, zoológico y botánico. Por ejemplo, hay tortugas gigantes, iguanas marinas, pájaros, albatros, focas, pingüinos y otros animales. También hay una gran variedad de plantas y de peces – muchos de ellos exclusivos del archipiélago.

Para la protección de este milagro de la naturaleza, la UNESCO declaró las Islas Galápagos Patrimonio Natural de la Humanidad. Además, hay que notar que el Ecuador ha hecho una gran labor en la conservación de las islas: ha controlado el número de personas que puede visitar la isla y ha protegido las especies naturales de las islas. Los expertos, guías y naturalistas profesionales tratan de educar a los visitantes para que no contaminen el ambiente. Por ejemplo, el visitante aprende antes de llegar a las islas que puede sacar fotos, pero no puede ofrecerles comida a los animales. Es estrictamente prohibido dejar cualquier tipo de basura en las islas. Sin embargo, el turista tendrá suficiente tiempo para caminar, nadar, hacer buceo, fotografiar y observar la abundante variedad de fauna y flora en cada isla. También podrá nadar junto a los lobos marinos y caminar entre las iguanas.

Para apreciar las islas en todo su esplendor, es necesario un paseo de varias horas. Lleve ropa, zapatos cómodos, gorra y protector solar. Se le aconseja también hacer buceo de la superficie aunque las aguas son muy frías. No le tenga miedo al agua fría porque el paraíso debajo del agua es tan exótico como el paraíso que hay en tierra firme.

En realidad no hay una época que sea mejor que otra para visitar las islas. Todo depende de las intenciones que Ud. tenga. En abril nacen las tortugas; en diciembre y enero hace más frío, pero se pueden ver ballenas. A finales de junio termina la temporada de lluvias, otra buena época para visitarlas. Sin embargo, con temperatura templada y menos turistas, noviembre también es un mes perfecto para ver docenas de leones de mar y pajaritos recién nacidos que enriquecen tanto este lugar indescriptiblemente bello.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 28, 2009"
  },
  hallaca: {
    imgs: [
      { src: "img/q21-la-hallaca.png",
        cap: "Reading selection for question 21, Comprehensive Examination in Spanish, January 2009",
        alt: "Boxed text titled LA HALLACA. The Diccionario de la Lengua Española defines the hallaca as a corn-flour pie filled with small pieces of fish or meat, bacon, raisins, olives, almonds, capers and other ingredients, wrapped in plantain leaves, made in Venezuela especially as a Christmas gift. It is Venezuela's national dish, said to have been eaten since colonial times, a complicated culinary combination with heterogeneous components, prepared more or less identically everywhere in the country, and a symbol of unification: when a Venezuelan abroad thinks of home, the hallaca comes to mind first." }
    ]
  },
  safari: {
    imgs: [
      { src: "img/q22-safari-parque-zoologico.png",
        cap: "Advertisement for question 22, Comprehensive Examination in Spanish, January 2009",
        alt: "Boxed advertisement titled Safari en el Parque Zoológico. Have fun: marvel at the life of owls and 'horones' in the Nocturama, and discover the world of spiders, ants and scorpions in the Artropodario; if you get hungry afterwards, visit the restaurant. Zoo hours: Monday to Friday 18:00 to 23:00 (ticket office), Sundays and holidays 10:00 to 22:00 (ticket office); the zoo closes one hour after the ticket office, so Monday to Friday you have until midnight to explore. Tickets: adults 70 pesos, children 40 pesos." }
    ]
  },
  bosque: {
    imgs: [
      { src: "img/q23-bosque-de-flores.png",
        cap: "Notice for question 23, Comprehensive Examination in Spanish, January 2009",
        alt: "Boxed notice titled BOSQUE DE FLORES. For your information and greater enjoyment of the walk: most visitors spend 30 to 45 minutes enjoying the forest, others spend all day. Along the path, in the gardens and elsewhere there are benches to rest on. Following the main path you will see most of what the forest offers, but for additional enjoyment there are alternative paths and dead-end paths. Wheelchair users are asked to use the routes designated for them as shown on the map." }
    ]
  },
  carta: {
    imgs: [
      { src: "img/q24-carta-revista.png",
        cap: "Letter to a magazine for question 24, Comprehensive Examination in Spanish, January 2009",
        alt: "Boxed letter to a magazine: Your August issue was wonderful. However, it lacked stories about the people we meet in daily life — people who do not work in the artistic world, who get ahead despite their tragedies, immigrants who better themselves, people devoted to helping others. Those are the true heroes! Artists are admired from afar; these people, in contrast, are part of our daily lives, inspire us with their heart, and we can imitate them in real life." }
    ]
  },
  desayunos: {
    imgs: [
      { src: "img/q25-desayunos-de-verano.png",
        cap: "Advertisement for question 25, Comprehensive Examination in Spanish, January 2009",
        alt: "Advertisement titled Desayunos de verano. The heat of summer nights generally makes us wake up with a dry mouth and no desire to eat, and the same happens to children, so it is important to offer them a breakfast that is refreshing and nutritious at once; in this season children spend more time exercising outdoors and need more liquids. A day-by-day list of breakfast ideas follows: Monday, peach juice and a bowl of cold milk with cereal; Tuesday, orange juice and toast with cream cheese and honey; Wednesday, a bowl of fresh fruit (apple, banana, peach and strawberries) with yogurt plus four cookies or a muffin; Thursday, a portion of ice cream, two cookies or bread with a slice of ham; Friday, a chocolate shake made with cold milk, a spoonful of cocoa, one of sugar or honey, and a muffin; Saturday, apple and pear compote with two cookies; Sunday, a soft-boiled, scrambled or beaten egg, a slice of fresh bread and apple or orange juice." }
    ]
  },
  vazquez: {
    passage: `Javier Vázquez

Santos Alomar no ha sido el único pelotero puertorriqueño famoso en las Grandes Ligas del béisbol. También tenemos a Javier Vázquez, quien por casualidad viene del mismo pueblo que Santos Alomar. Cuando Javier Vázquez firmó un contrato con los Yankees de Nueva York, se convirtió en el lanzador puertorriqueño mejor pagado de la historia de las Grandes Ligas.

Para este artículo visitamos a Vázquez en el parque donde acostumbraba practicar el béisbol cuando era pequeño. Allí el pelotero compartió con nosotros sus pensamientos unos días después de integrarse a la liga mayor de béisbol.

Al hablar con Javier Vázquez sobre su carrera en el béisbol, atribuyó su éxito a dos detalles. El primero fue que no abusó de su brazo cuando era pequeño. El segundo fue que, cuando firmó su primer contrato, su papá estableció que no lanzara más de 75 a 80 lanzamientos por partido. Es por eso que Javier atribuye su éxito a su padre, Carlos Vázquez. Javier cree que su padre es responsable por lo que Javier es como lanzador hoy día.

Javier dijo que a los 15 años él empezó a experimentar con la curva, pero no la usaba tanto. La curva es una forma específica de lanzar la pelota. El problema de muchos jugadores es que, tirando curva desde los siete u ocho años, daña el brazo. La protección que le dio a su brazo le permitió a Vázquez convertirse en un jugador de Grandes Ligas.

La cosa más importante en la vida de Javier Vázquez es su familia. Él está decidido a vivir una vida con propósito. El piensa que su carácter se lo debe al apoyo incondicional de su familia. Sus padres le enseñaron a ser fuerte y dedicado. Es un estilo de vida que le ha permitido triunfar y que le dio las fuerzas para entrar en el mundo del béisbol cuando firmó con los Expos en 1994. Fue entonces que comprendió que si quería triunfar tenía que dedicarse totalmente al juego. Rechazó mil invitaciones de los compañeros para salir a divertirse por las noches. Prefería quedarse durmiendo porque al otro día tenía que ir a trabajar temprano.

Hoy día este hombre goza del beneficio de sus sacrificios. Ese fuerte carácter lleno de honestidad y autoconfianza fue el que le permitió triunfar en su carrera. Javier está casado y tiene dos hijos, Kamilla y Javier José. No le gusta ser el centro de atención fuera del juego de béisbol. Prefiere pasar su tiempo libre en casa con su familia.

Recientemente vimos a Vázquez firmando autógrafos para los niños durante un partido que fue celebrado en la isla de Puerto Rico. Javier Vázquez es un buen ejemplo para toda la juventud.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 28, 2009"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-gregory-restaurante.png",
        cap: "Picture for writing task 33 (— Gregory, New Yorker, adapted), Comprehensive Examination in Spanish, January 2009",
        alt: "Line drawing of a balding man with glasses seated at a restaurant table, holding open a large dark menu and looking puzzled. On the table are a glass of wine, a slender vase with a single flower, and a folded newspaper. A waiter in shirt and tie, with a cloth over his forearm, stands beside the table looking down at him." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is this advice about?",
    choices: [
      "conserving water",
      "washing clothes",
      "cleaning sunglasses",
      "drying hair"
    ],
    answer: 2,
    back: "(3) cleaning sunglasses — sunglasses are a must this time of year, and to keep them clean \"solamente tienes que lavarlas con agua caliente y unas gotas de vinagre.\""
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What did Ana Betancourt want to accomplish?",
    choices: [
      "to make the military stronger in Cuba",
      "to get equal rights for women in Cuba",
      "to have Cuba remain a colony of Spain",
      "to preserve Cuba’s cultural traditions"
    ],
    answer: 1,
    back: "(2) to get equal rights for women in Cuba — she declared it was not enough to free Cuba from Spain: \"Era necesario también liberarse de la discriminación contra la mujer,\" publishing feminist articles demanding that women be allowed to vote and own property."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. Who would be most interested in this announcement?",
    choices: [
      "people who like to play sports",
      "adults who travel abroad often",
      "children who have difficulty with homework",
      "parents who have young children"
    ],
    answer: 3,
    back: "(4) parents who have young children — keeping kids entertained \"puede ser una tarea muy difícil para los padres,\" and the suggested solution is taking children to children's theater."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. How did Miguelina begin her career?",
    choices: [
      "by designing clothing as a hobby",
      "by working as a model for several years",
      "by studying at college in Great Britain",
      "by writing for a popular teen magazine"
    ],
    answer: 0,
    back: "(1) by designing clothing as a hobby — bored one day, she designed a simple tunic and \"esto se convirtió en su pasatiempo favorito\"; a friend photographed it for a British magazine and her line was born. She never studied design."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What does this student discuss in your class?",
    choices: [
      "the accomplishments of a famous actor",
      "the discovery of a new species of birds",
      "the origin of a popular word in Spanish",
      "the results of climate changes in Latin America"
    ],
    answer: 2,
    back: "(3) the origin of a popular word in Spanish — \"¿Cómo surgió esta palabra?\": the two possible origins of \"chévere,\" an African-language expression or the French señor de Chièvre."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. According to this report, what is “Nahuatl”?",
    choices: [
      "a new theater in San Diego",
      "a typical Mexican dish",
      "an Aztec calendar",
      "an ancient language"
    ],
    answer: 3,
    back: "(4) an ancient language — Nahuatl is \"el idioma de sus ancestros aztecas,\" \"esta antigua lengua que los conecta al pasado.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is being announced?",
    choices: [
      "an interview with members of a music group",
      "an opportunity to tour the studio",
      "a chance to win a free trip to Puerto Rico",
      "a series of political debates"
    ],
    answer: 0,
    back: "(1) an interview with members of a music group — this month each member of Los Ponceños will share his life, tastes, secrets and dreams \"en una entrevista especial.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. According to the guide, what do people do at this celebration?",
    choices: [
      "They visit the outdoor markets.",
      "They attend lectures given by local writers.",
      "They participate in ancient games.",
      "They wear clothing of certain colors."
    ],
    answer: 3,
    back: "(4) They wear clothing of certain colors — \"Se recomienda que todo el mundo lleve ropa de color blanco y rojo para participar en esta celebración\" of the arrival of spring at Teotihuacán."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What advice does the teacher give to the student?",
    choices: [
      "how to make the trip to Spain affordable",
      "how to get into a good college in Spain",
      "how to get a job where he can practice Spanish",
      "how to travel around Spain by train"
    ],
    answer: 0,
    back: "(1) how to make the trip to Spain affordable — organizations offer \"unas becas magníficas,\" staying with a family saves money, and with determination \"encontrarás ayuda financiera para tu viaje.\""
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Quiénes estarían más interesados en este anuncio?",
    choices: [
      "personas interesadas en estudiar arte",
      "personas interesadas en cuidar la naturaleza",
      "personas interesadas en ir de vacaciones",
      "personas interesadas en limpiar su casa"
    ],
    answer: 1,
    back: "(2) personas interesadas en cuidar la naturaleza — la Semana Nacional de la Conservación trae actividades \"enfocadas a promover la preservación de la naturaleza,\" con invitación abierta a quienes quieran colaborar en el cuidado del medio ambiente."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué nos dice esta noticia sobre El País?",
    choices: [
      "que creó una nueva dirección de Internet",
      "que recibió un premio distinguido",
      "que salió con un nuevo diseño",
      "que publicó un nuevo suplemento semanal"
    ],
    answer: 1,
    back: "(2) que recibió un premio distinguido — la versión digital de El País \"recibió el premio destinado al periódico digital mejor diseñado en España y Portugal,\" otorgado por una organización internacional de más de 2.500 periodistas y académicos."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Por qué irá Don Omar a Nueva York?",
    choices: [
      "para abrir un restaurante mexicano",
      "para actuar en una película norteamericana",
      "para participar en una telenovela",
      "para grabar un disco con otra cantante"
    ],
    answer: 3,
    back: "(4) para grabar un disco con otra cantante — hará \"una grabación a dúo con la estrella pop Beyoncé\": \"En cuanto pueda, yo viajaré a Nueva York para hacer la grabación.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿De qué tratan estos consejos?",
    choices: [
      "de presentar a los niños la música clásica",
      "de preparar mejores comidas para los niños",
      "de preparar a los niños para los exámenes",
      "de mejorar el comportamiento de los niños"
    ],
    answer: 2,
    back: "(3) de preparar a los niños para los exámenes — \"es una buena idea saber como ayudar a su niño para que se sienta cómodo durante los exámenes\": hablar con él, que duerma bien y que desayune bien."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿En qué trabaja esta persona?",
    choices: [
      "en turismo",
      "en arquitectura",
      "en medicina",
      "en periodismo"
    ],
    answer: 0,
    back: "(1) en turismo — da la bienvenida a los visitantes al \"paraíso caribeño\" y promociona \"nuestra cadena de hoteles alrededor de la isla,\" la historia del hotel Plaza de Armas y la vida nocturna del Condado."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué sugiere el cajero al Sr. Robles?",
    choices: [
      "que cuente el dinero",
      "que espere en la oficina",
      "que use su tarjeta de crédito",
      "que use la nueva máquina"
    ],
    answer: 3,
    back: "(4) que use la nueva máquina — \"Si no quiere esperar tanto tiempo la próxima vez pruebe nuestro nuevo cajero automático,\" con instrucciones sencillas en la pantalla."
  },
  // ----- Part 3a: Reading, long passage, questions in Spanish (Q16-20) -----
  { ...STIMULI.galapagos,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Qué pensaron los exploradores españoles sobre las islas?",
    choices: [
      "No les gustó el clima.",
      "Creían que el medio ambiente estaba contaminado.",
      "No les parecieron importantes.",
      "Creían que no se podía vivir allí."
    ],
    answer: 2,
    back: "(3) No les parecieron importantes — \"Los exploradores españoles las llamaron Islas Encantadas, pero no les dieron mayor importancia.\""
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué pasó en el siglo XIX en las Galápagos?",
    choices: [
      "Muchos animales desaparecieron.",
      "Hubo una erupcíon volcánica.",
      "Los ingleses invadieron las islas.",
      "Se construyeron muchos hoteles en las islas."
    ],
    answer: 0,
    back: "(1) Muchos animales desaparecieron — \"Ya para el siglo XIX, habían muerto más de 200.000 tortugas y focas,\" usados para hacer ornamentos y ropa. (La errata \"erupcíon\" es del examen impreso.)"
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Cuál es la atracción principal de las Galápagos?",
    choices: [
      "su ecosistema único",
      "su museo histórico",
      "sus altas montañas",
      "sus hoteles modernos"
    ],
    answer: 0,
    back: "(1) su ecosistema único — las islas son \"un paraíso geológico, zoológico y botánico\" con tortugas gigantes, iguanas marinas, pingüinos y muchas especies \"exclusivos del archipiélago.\""
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según la selección, ¿cómo protege el Ecuador las islas?",
    choices: [
      "Prohibe el uso de aparatos electrónicos.",
      "Limita el número de turistas.",
      "Permite visitas solamente durante los meses de invierno.",
      "Requiere el uso de productos del gobierno."
    ],
    answer: 1,
    back: "(2) Limita el número de turistas — el Ecuador \"ha controlado el número de personas que puede visitar la isla y ha protegido las especies naturales de las islas.\""
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "Q20",
    stem: "Q20. Si Ud. va a las Islas Galápagos, no puede",
    choices: [
      "sacar fotos",
      "dar un paseo",
      "nadar con los animales marinos",
      "dar de comer a los animales"
    ],
    answer: 3,
    back: "(4) dar de comer a los animales — el visitante \"puede sacar fotos, pero no puede ofrecerles comida a los animales,\" y es estrictamente prohibido dejar basura."
  },
  // ----- Part 3b: Realia, questions in English (Q21-25) -----
  { ...STIMULI.hallaca,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is one of the characteristics of the “hallaca”?",
    choices: [
      "It has a variety of ingredients.",
      "It is often prepared very differently throughout Venezuela.",
      "It may only be served when it is very cold.",
      "It is easy to prepare."
    ],
    answer: 0,
    back: "(1) It has a variety of ingredients — it is filled with fish or meat, bacon, raisins, olives, almonds, capers \"y otros ingredientes\"; a complicated culinary combination, \"heterogénea en los componentes.\""
  },
  { ...STIMULI.safari,
    type: "mc",
    label: "Q22",
    stem: "Q22. What information about the zoo is provided in this advertisement?",
    choices: [
      "It allows visitors to feed the animals.",
      "It is open 7 days a week, but not on holidays.",
      "It is open late at night.",
      "It gives discounts to large groups."
    ],
    answer: 2,
    back: "(3) It is open late at night — weekdays the ticket office runs 18:00 to 23:00 and the zoo closes an hour later: \"Lunes a viernes tendrás hasta la medianoche para recorrer el lugar.\""
  },
  { ...STIMULI.bosque,
    type: "mc",
    label: "Q23",
    stem: "Q23. What makes this place so enjoyable?",
    choices: [
      "There are several sports facilities where you can play.",
      "There are several theatrical performances for you to see.",
      "There are a number of paths available for you to follow.",
      "There are a number of tour guides ready to help you."
    ],
    answer: 2,
    back: "(3) There are a number of paths available for you to follow — the main path shows most of the forest, and \"para un disfrute adicional, hay caminos alternativos y caminos sin salida.\""
  },
  { ...STIMULI.carta,
    type: "mc",
    label: "Q24",
    stem: "Q24. According to this letter, the writer prefers to read about",
    choices: [
      "generous celebrities",
      "ordinary people",
      "historical figures",
      "political leaders"
    ],
    answer: 1,
    back: "(2) ordinary people — the magazine lacked \"historias de gente que encontramos en la vida diaria\": people outside show business who overcome tragedy, immigrants who better themselves, people who help others. \"¡Ésos son los verdaderos héroes!\""
  },
  { ...STIMULI.desayunos,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does the advertisement suggest?",
    choices: [
      "Children need to limit how much they drink.",
      "Children should not eat late at night.",
      "Children should not snack between meals.",
      "Children need a different diet in summer."
    ],
    answer: 3,
    back: "(4) Children need a different diet in summer — summer heat kills morning appetite, so children need a breakfast \"que sea refrescante y nutritivo a la vez,\" and in this season they need more liquids; the ad lists a special summer-breakfast menu for each day."
  },
  // ----- Part 3c: Reading, second passage, questions in English (Q26-30) -----
  { ...STIMULI.vazquez,
    type: "mc",
    label: "Q26",
    stem: "Q26. What do Santos Alomar and Javier Vázquez have in common?",
    choices: [
      "They are the same age.",
      "They are both left-handed.",
      "They are both from the same place of origin.",
      "They both started playing on the same team."
    ],
    answer: 2,
    back: "(3) They are both from the same place of origin — Vázquez \"por casualidad viene del mismo pueblo que Santos Alomar.\""
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "Q27",
    stem: "Q27. Javier thinks he became a good pitcher because as a child",
    choices: [
      "he did not overuse his arm when he played baseball",
      "he would practice all day long",
      "he took lessons from a famous trainer",
      "he attended many baseball games"
    ],
    answer: 0,
    back: "(1) he did not overuse his arm — the first detail of his success: \"no abusó de su brazo cuando era pequeño\"; that protection let him become a Major League player."
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "Q28",
    stem: "Q28. According to the article, what is one of the problems that many pitchers have?",
    choices: [
      "They train for too short a time.",
      "They do not warm up properly.",
      "They do not rest between innings.",
      "They injure their arms too early in their careers."
    ],
    answer: 3,
    back: "(4) They injure their arms too early in their careers — \"El problema de muchos jugadores es que, tirando curva desde los siete u ocho años, daña el brazo.\""
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "Q29",
    stem: "Q29. According to the article, in what way did Javier’s family influence his life?",
    choices: [
      "His father played baseball with him.",
      "His family helped build his character.",
      "His family moved several times when he was young.",
      "His father sent him to baseball camp every summer."
    ],
    answer: 1,
    back: "(2) His family helped build his character — \"El piensa que su carácter se lo debe al apoyo incondicional de su familia. Sus padres le enseñaron a ser fuerte y dedicado.\""
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "Q30",
    stem: "Q30. How was Javier different from his teammates?",
    choices: [
      "He did not go out socially as often.",
      "He did not get paid as much.",
      "He did not spend much time with his family.",
      "He did not question the umpires."
    ],
    answer: 0,
    back: "(1) He did not go out socially as often — \"Rechazó mil invitaciones de los compañeros para salir a divertirse por las noches. Prefería quedarse durmiendo porque al otro día tenía que ir a trabajar temprano.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You recently had a pleasant surprise in your life. Write a journal entry about that surprise. You may wish to include:
• what the surprise was
• how you found out about it
• when it happened
• where it happened
• people involved
• how the surprise affected you or how it affects you now
• reason that it was a pleasant surprise

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

¡Imagínate! ¡No lo puedo creer! Mi mejor amiga me sorprendió anoche con una fiesta de cumpleaños. ¡Qué alegría! Me había invitado a su casa a ver un video nuevo. Cuando entré unas treinta personas me gritaron “Feliz Cumpleaños”. Me abrazaron y Ricardo me dio un besito en la mejilla. Había pizza y refrescos para todos y mi torta favorita, de chocolate y cerezas. Después de comer, charlamos y bailamos, y lo pasamos muy bien. Más tarde me ofrecieron unos regalos. Recibí ropa, dinero, CDs y unos aretes. Ricardo me dio una tarjeta en la cual me invitó a ir al cine con él el sábado próximo ¡Qué ilusión! Fue realmente un cumpleaños inolvidable. Voy a escribir mucho más después de mi cita el sábado.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). Your family is planning a trip for a vacation. Write a letter to your Spanish-speaking pen pal discussing the upcoming trip. You may wish to include:
• purpose of the trip
• when you will go
• where you will go
• how you will get there
• length of the trip
• what you hope to see
• what you expect to do

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Paco,
Mi familia va a viajar a la Florida. Viajo con mis padres, hermanos, hermanas — ¡y el perro, también! Vamos la tercera semana de abril durante las vacaciones de primavera. Primero vamos al Mundo de Disney en Orlando. Hay mucho que ver y hacer en ese gran parque de atracciones. También sé que vamos a ver un partido de béisbol de las ligas mayores. Están entrenándose en abril y los boletos no son muy caros. Quizás podamos obtener unos autógrafos de los jugadores. Después de pasar un rato en el centro de la Florida vamos a ir a la costa y nadaremos en el mar. ¡Será muy divertido! Te contaré más cuando vuelva.
tu amigo,
Roberto

Rubric: a letter accomplishing the task with many connected details (purpose, dates, destination, transportation, length, sights, activities), clear organization with salutation and closing, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

El Sr. Martínez es un negociante que trabaja en Madrid. Hoy va a almorzar en un restaurante cerca de su oficina. El problema es que no sabe mucho español y entonces no entiende toda la carta. No sabe que pedir. Cuando el camarero le pregunta qué le apetece, el Sr. Martínez explica que no entiende y que necesita ayuda. El camarero sabe algo de inglés y le dice que el plato del día es el pollo asado. También le explica que el plato del día no incluye el aperitivo, la bebida ni el postre. Aunque es un poco caro el Sr. Martínez decide pedir el pollo asado con papas y una ensalada verde. Va a beber el agua mineral, y el camarero le recomienda el flan como postre. Al Sr. Martínez le gustó mucho su comida.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.galapagos,
    type: "mc",
    label: "S1",
    stem: "S1. Según la selección, ¿por qué muchas de las Islas Galápagos tienen dos nombres?",
    choices: [
      "Los españoles le dieron a cada isla otro nombre después del mapa inglés.",
      "Charles Darwin les cambió los nombres en 1835.",
      "El gobierno del Ecuador les puso nombres nuevos para atraer turistas.",
      "Los piratas nunca pudieron ponerse de acuerdo sobre los nombres."
    ],
    answer: 0,
    back: "(1) Los españoles le dieron a cada isla otro nombre — en 1684 un bucanero hizo un mapa \"dándoles nombres de reyes y nobles ingleses. Más tarde, los españoles le dieron a cada isla otro nombre por eso muchas islas tienen dos nombres.\""
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "S2",
    stem: "S2. Según la selección, ¿cuál es el origen geológico de las Islas Galápagos?",
    choices: [
      "Son el resultado de erupciones volcánicas.",
      "Se separaron de la costa del Ecuador.",
      "Fueron formadas por las corrientes oceánicas del Pacífico.",
      "Surgieron de un gran terremoto submarino."
    ],
    answer: 0,
    back: "(1) Son el resultado de erupciones volcánicas — \"Se estima que las Galápagos datan de hace cinco millones de años y que son el resultado de erupciones volcánicas.\""
  },
  { ...STIMULI.galapagos,
    type: "mc",
    label: "S3",
    stem: "S3. Según la selección, ¿qué debe llevar el visitante para el paseo de varias horas por las islas?",
    choices: [
      "binoculares y una cámara profesional",
      "ropa, zapatos cómodos, gorra y protector solar",
      "comida para darles a los animales",
      "un mapa de los caminos principales"
    ],
    answer: 1,
    back: "(2) ropa, zapatos cómodos, gorra y protector solar — \"Para apreciar las islas en todo su esplendor, es necesario un paseo de varias horas. Lleve ropa, zapatos cómodos, gorra y protector solar.\" (Darles comida a los animales está prohibido.)"
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "S4",
    stem: "S4. According to the article, what happened when Javier Vázquez signed his contract with the New York Yankees?",
    choices: [
      "He became the highest-paid Puerto Rican pitcher in Major League history.",
      "He moved his family permanently to New York.",
      "He retired from playing baseball in Puerto Rico.",
      "He became the youngest pitcher in the Major Leagues."
    ],
    answer: 0,
    back: "(1) He became the highest-paid Puerto Rican pitcher in Major League history — \"se convirtió en el lanzador puertorriqueño mejor pagado de la historia de las Grandes Ligas.\""
  },
  { ...STIMULI.vazquez,
    type: "mc",
    label: "S5",
    stem: "S5. According to the article, what rule did Javier's father establish when Javier signed his first contract?",
    choices: [
      "that Javier finish college before playing professionally",
      "that Javier practice in the park every morning",
      "that Javier not throw more than 75 to 80 pitches per game",
      "that Javier never experiment with the curveball"
    ],
    answer: 2,
    back: "(3) that Javier not throw more than 75 to 80 pitches per game — \"su papá estableció que no lanzara más de 75 a 80 lanzamientos por partido.\" That is why Javier credits his father, Carlos Vázquez, for the pitcher he is today."
  },
  { ...STIMULI.l01,
    type: "mc",
    label: "S6",
    stem: "S6. According to your host mother, what should you use to clean your sunglasses?",
    choices: [
      "a special soap and a soft cloth",
      "hot water and a few drops of vinegar",
      "cold water and lemon juice",
      "an alcohol-based cleaning spray"
    ],
    answer: 1,
    back: "(2) hot water and a few drops of vinegar — \"solamente tienes que lavarlas con agua caliente y unas gotas de vinagre,\" then let them dry."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S7",
    stem: "S7. According to the report, which words come from Nahuatl?",
    choices: [
      "tomato, chili, and avocado",
      "hammock, canoe, and hurricane",
      "coyote, chocolate, and chicle",
      "patio, plaza, and rodeo"
    ],
    answer: 2,
    back: "(3) coyote, chocolate, and chicle — \"muchas palabras del español, y hasta del inglés, provienen del náhuatl, como por ejemplo, coyote, chocolate y chicle.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S8",
    stem: "S8. According to the student, what are the two possible origins of the word “chévere”?",
    choices: [
      "an Aztec word and the name of a Spanish king",
      "an African-language expression and the title of an elegant French gentleman",
      "a Caribbean dance and the name of a popular song",
      "a Colombian city and a famous writer's nickname"
    ],
    answer: 1,
    back: "(2) an African-language expression and the title of an elegant French gentleman — it may come from an African-language expression meaning to dress extravagantly, or from \"el título de señor de Chièvre,\" a French gentleman who always dressed elegantly."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "S9",
    stem: "S9. Según el anuncio, ¿qué actividades se realizarán durante la Semana Nacional de la Conservación?",
    choices: [
      "conciertos y festivales de cine al aire libre",
      "visitas guiadas a los museos nacionales",
      "limpieza de playas, talleres de educación ambiental y concursos",
      "venta de productos hechos de materiales reciclados"
    ],
    answer: 2,
    back: "(3) limpieza de playas, talleres de educación ambiental y concursos — \"Tales acciones incluyen limpieza de las playas, ríos y carreteras, talleres de educación ambiental, concursos y exposiciones, entre otras.\""
  },
  { ...STIMULI.desayunos,
    type: "mc",
    label: "S10",
    stem: "S10. According to the advertisement, what breakfast is suggested for Wednesday (miércoles)?",
    choices: [
      "peach juice and a bowl of cold milk with cereal",
      "a chocolate shake made with cold milk and cocoa",
      "apple and pear compote with two cookies",
      "a bowl of fresh fruit with yogurt, plus cookies or a muffin"
    ],
    answer: 3,
    back: "(4) a bowl of fresh fruit with yogurt, plus cookies or a muffin — \"Miércoles: Un tazón de frutas frescas (manzana, plátano, melocotón y fresas) con yogur. 4 galletas o un muffin.\" (Peach juice with cereal is Monday, the chocolate shake is Friday, and the compote is Saturday.)"
  }
];
