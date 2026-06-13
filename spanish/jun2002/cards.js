// June 2002 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key, recovered from the Wayback Machine),
// raw-docs/nysedregents.org/spanish/jun2002/.
// Printed quirks kept verbatim (verified against page renders):
// "el director movedor" (Part 3a passage, page 4), "El" printed without an
// accent for "Él" twice in the Part 3a passage, "un estatua para el jardín"
// (Q11 choice 2), "cultivo los nueces pequeños" and "apróximadamente"
// (Q10 dictation), "la salsa centroamericana" (Q15 dictation — José Alberto
// "El Canario" is Dominican), and "Quetzacóatl" (standard spelling
// Quetzalcóatl) visible in the Q21 realia image.

const TDC_SRC = "Teacher Dictation Copy, June 2002 Comprehensive Spanish Regents";

const STIMULI = {
  // ----- Part 2a listening passages (questions and answers in English) -----
  l01: {
    passage: `[Background] You are staying in a hotel in Madrid. The hotel clerk makes this recommendation to you:

[La maestra lee] El Parque del Retiro es como un inmenso teatro todos los domingos. Su escenario principal, el Salón del Estanque, es más grande que los otros que abundan en Madrid. Aparecen músicos, titiriteros, payasos, malabaristas, bailarines y magos. Todos los espectáculos tienen el mismo precio: nada.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] While shopping in Madrid, you hear this announcement:

[La maestra lee] Las parejas que quieren casarse, disponen en El Corte Inglés de nuestro departamento especial “Novios” y nuestras listas de boda, que centralizan y hacen más cómodos todos los preparativos para la boda. Se puede usar todo El Corte Inglés para elegir regalos. El departamento de listas de boda le ofrece un cheque regalo por valor del diez por ciento del importe total de los regalos comprados. Finalmente, nuestra guía de compras le ayuda a escoger todo lo necesario.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are watching television and hear this advertisement:

[La maestra lee] Un nuevo postre que se llama Cremacita es tan sano como un vaso de leche. Está lleno de energía. Es tan nutritivo como deseable. Así son los exquisitos postres Cremacita. ¿Cómo vas a negarle a tu bebé algo tan sano, tan bueno para su salud?`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] While watching a Spanish cable television program, you hear this announcement:

[La maestra lee] La conmemoración del 250 aniversario del nacimiento de Francisco de Goya, uno de los pintores más importantes de la historia del arte, es quizá el acontecimiento cultural más importante de este año en España. Con este motivo, se han programado una serie de exposiciones para mejorar el conocimiento y la apreciación de la obra del gran artista tanto dentro de España como fuera del país.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You hear this public service announcement at the end of a television broadcast:

[La maestra lee] Puede resultar peligroso no prestar atención a lo que se hace en la cocina. Cuando usted esté cocinando algo, no le quite la vista. Si usted debe abandonar la cocina por un instante, llévese un guante de cocina o una cuchara con usted para acordarse de regresar a la cocina lo antes posible. El equipo de cocina es la principal causa de los fuegos en los EE.UU. Tome las precauciones necesarias para prevenir un incendio.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] Your teacher has brought the class to a special Spanish program at a local theater. Before the program begins, the manager makes this announcement:

[La maestra lee] Buenas tardes, nuestros queridos jóvenes amigos. Vamos a ofrecerles hoy una presentación de una versión del famoso y legendario libro de Miguel de Cervantes: Don Quixote. Desafortunadamente, tenemos que anunciar que el que normalmente actúa en el papel de Sancho Panza se enfermó anoche y no puede estar aquí hoy. Pero, el joven Alejandro García nos ayudará con su interpretación estupenda de ese personaje tan cómico. Ojalá que este cambio no le moleste a nadie.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] While visiting Paraguay, you call a hotel for information and hear this recording:

[La maestra lee] Hotel Larios, situado en el centro histórico y comercial de la ciudad, les ofrece un nuevo concepto en hostelería en un ambiente acogedor y exclusivo. Les ofrecemos los mejores salones para convenciones, y además un restaurante, terraza panorámica, y facilidad de aparcamiento. Estas comodidades le harán disfrutar de su estancia en Asunción.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] While listening to Spanish radio, you hear this information:

[La maestra lee] Cuando los sobrinos y sobrinas de Charito Calvachi Wakefield le pidieron que les enseñara sobre las fiestas típicas en su Ecuador natal, ella se dio cuenta de que muchos niños latinos — y adultos también — no conocían las celebraciones tradicionales de sus antepasados latinoamericanos. Eso la inspiró a crear un libro que representa la música y tradiciones de 25 países de América Latina. El libro, escrito en español e inglés, viene acompañado de un CD de canciones. Para Calvachi, el libro es un sueño hecho realidad.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] Your friend reads a letter from a magazine to you. This is what you hear:

[La maestra lee] Querido Autor:
Tengo un problemita: una chica de Chile, llamada Carmen, me envió una carta para ponernos de acuerdo con un intercambio de material de Mel Gibson para mí y los Backstreet Boys para ella. Pero no escribió su dirección. En verdad me siento mal por no responderle. Así que si llegas a leer esto, Carmen, por favor, escríbeme.`,
    psource: TDC_SRC
  },
  // ----- Part 2b listening passages (questions and answers in Spanish) -----
  l10: {
    passage: `[Background] It is career day at school. A guest speaker who is talking about his job says:

[La maestra lee] Trabajo en Alamogordo, Nuevo México. Me gusta el aire libre y por eso no trabajo en ninguna oficina. También me encanta comer los pistachos. Estoy empleado en una hacienda donde cultivo los nueces pequeños. El pistacho es un árbol chico alcanzando cerca de 30 pies de altura. Las plantaciones comerciales son de apróximadamente 120 árboles por acre.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] Your Spanish-speaking friend tells you about a new product. She says:

[La maestra lee] El tilo, cultivado a menudo en jardinería, crece en zonas algo frías y húmedas. Es eficaz como tranquilizante. También, combate la gripe y el resfriado. En su uso externo, se utiliza para las heridas y contra la caída del pelo.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to the radio and hear these instructions:

[La maestra lee] ¿Necesita ayuda para preparar el próximo cumpleaños de su hijo? Primero, haga una lista de invitados de acuerdo con la edad de su hijo y súmele un amiguito más. Por ejemplo, si el niño cumple 4 años, entonces invite a 5 niños.
Segundo, busque un payaso o teatro de marionetas que los entretenga. Entonces, mande las invitaciones por correo, con detalles sobre cuántas horas durará la celebración. Mientras más chiquito sea el niño, más corta debe ser. Por lo general, de 2 a 3 horas es más que suficiente. Finalmente, compre la torta y el helado y haga planes para unos juegos.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are watching television in your hotel room and hear this advertisement on the hotel channel:

[La maestra lee] ¿Podrá imaginarse cuántas toallas son lavadas por todos los hoteles del mundo? Toda el agua usada, llena de detergente, es una amenaza para nuestro sistema ecológico. Queremos hacer un esfuerzo común para reducir este peligro. Si desea que sus toallas sean reemplazadas, póngalas dentro de la bañera. Si pone las toallas en el tendedero, asumiremos que las quiere reusar. Gracias por su contribución para mantener un mejor equilibrio ecológico.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to the news while in Salamanca, Spain, and you hear this report:

[La maestra lee] La pintora española, Marisa Nortigas, obtuvo el premio otorgado en el Último Salón Internacional de Pintura Abstracta. Otras dos pintoras españolas recibieron menciones de honor. En la exhibición, que estará abierta al público hasta el 31 de agosto, se encuentran más de 120 obras de 49 artistas de varias nacionalidades. Este salón anual de pintura está considerado como uno de los más representativos de Europa.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio in Argentina and the disc jockey says:

[La maestra lee] José Alberto, El Canario, un conocido cantante por estas tierras y un referente de la salsa centroamericana, sacó su nuevo disco, “Herido”, un disco bailable y con una cuidada producción. El disco capta la esencia del ritmo caribeño, ciertos toques pop, la rumba y el merengue típico de su República Dominicana.`,
    psource: TDC_SRC
  },
  // ----- Part 3a: long reading passage (Q16-20) -----
  cordero: {
    passage: `Antonio Cordero

Antonio Cordero, el director movedor de la agencia de viajes de aventura Ambar, ya lleva cinco años recomendando los países de Sudamérica. El se ha dedicado a un turismo muy nuevo en los últimos años: el turismo de aventura y riesgo.

Antonio realiza estos viajes normalmente solo con el propósito de abrir una ruta nueva para los clientes de su agencia. Antes de embarcar en estos viajes de exploración, Antonio lee todo lo publicado sobre el lugar. También charla con la gente con experiencia y conocimiento de estos lugares escogidos para el viaje. Después, selecciona rutas a pie, en todo terreno y por agua y hace un plan preliminar. Siempre tiene en cuenta el deseo de ofrecer al turista unas expediciones innovadoras y diferentes. El le ofrece al turista la oportunidad de descubrir la cultura y la naturaleza de la zona. Aunque a veces le acompaña su esposa, fotógrafa de profesión, Antonio ama la soledad y goza de los momentos de silencio cuando puede concentrarse y escribir en verso sus sentimientos y reacciones personales hacia sus aventuras.

Antonio Cordero pasa parte del año descubriendo tierras inhóspitas y oasis exuberantes desde México hasta la Patagonia, Argentina. Cruza los ríos en canoa, fotografía el colorido del paisaje y recorre la selva en una camioneta. Cuando cae la noche, busca refugio en la casita de una familia cualquiera de las que habitan estas tierras salvajes. Y durante todo, en su cuaderno de notas apunta unas cuantas pistas de una ruta que después ofrecerá a sus clientes en España.

Desde muy joven, este madrileño de 34 años sintió la llamada del riesgo y la aventura. Viajaba igual que cualquier chico de su edad, pero lo hacía con una ansia de curiosidad muy especial. Estudió imagen y sonido y psicología, aunque pasaba sus ratos libres leyendo novelas de aventura de Joseph Conrad, escritor inglés. Se enriqueció con su literatura y se apasionó con sus personajes.

Actualmente, cuando Antonio prepara una expedición para sus clientes, lo hace pensando en gente joven, más de espíritu que de edad. Considera también que sus clientes deben estar en buena forma física, aunque sin necesidad de ser atletas. Clasifica estas expediciones según su nivel de dificultad: para principiantes, nivel intermedio, y nivel avanzado. Además el turista tiene que estar preparado para estar lejos de las comodidades de la vida moderna.

Como dice Antonio, “Si establecí la agencia, fue más por satisfacer ese deseo por descubrir. Además quiero que la gente siga mi ejemplo y se enriquezca con las mismas experiencias que yo he tenido.”`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 21, 2002"
  },
  // ----- Part 3b realia (Q21-25) -----
  ruinas: {
    imgs: [
      { src: "img/q21-ruinas-mayas.png",
        cap: "Travel advertisement for question 21, Comprehensive Examination in Spanish, June 21, 2002",
        alt: "Boxed text advertisement titled 'A las ruinas mayas'. Ameri-Span, an important organization dedicated to educational excursions in Latin America, invites tourists on a 13-day excursion through the historic and accessible ruins of the Mayan region in Mexico. Participants will have a professional guide with private transportation through the Yucatan peninsula, to climb the pyramids and travel the extensive Mayan zone, with comfortable lodging in the towns of Yucatan. Among other ruins they will visit Palenque, Uxmal, Chichén-Itzá and the pyramid El Castillo, where the image of Quetzacóatl sits on top. The excursion will also visit Mérida, the capital of Yucatán, founded by the Spanish conquistadors in 1542, with its Moorish-style structures, and the town of Izamal." }
    ]
  },
  tienda: {
    imgs: [
      { src: "img/q22-curiosa-tienda.png",
        cap: "Article for question 22, Comprehensive Examination in Spanish, June 21, 2002",
        alt: "Boxed article titled 'Curiosa Tienda'. In the city of San Francisco, in the United States, where there is enormous interest in the arts, there is a store called 'Petroglyph' where, after making reservations 'for a space', you can sit alone or with a group of friends, buy an unfinished piece of ceramic, and begin to paint and decorate it in your own style while you chat, drink coffee or tea, and listen to music. A kind of creative workshop and informal café at the same time, the place provides the paints (they charge 5 dollars per hour) and afterwards the 'kilns' in which to seal your 'work of art', which can be a refrigerator magnet or an even larger ceramic piece. A fabulous idea for a business that should exist in other cities, since children and adults love it." }
    ]
  },
  nasa: {
    imgs: [
      { src: "img/q23-programas-nasa.png",
        cap: "Announcement for question 23, Comprehensive Examination in Spanish, June 21, 2002",
        alt: "Boxed announcement titled 'PROGRAMAS ESTUDIANTILES DE LA NASA'. A summer apprenticeship program for university students as research assistants (SHARP): this eight-week program offers the opportunity to take part in an intensive apprenticeship in science and engineering. The SHARP program is designed especially to attract and serve students. Its purpose is to increase student participation in the fields of science, mathematics, engineering, and computer science — careers compatible with NASA's aerospace science and technology programs. There is another internship program that offers NASA-related jobs and grants scholarships covering all expenses. Participants begin after completing the first year of college. The student works 40 hours a week and receives a weekly salary." }
    ]
  },
  bolsa: {
    imgs: [
      { src: "img/q24-bolsa-resistente.png",
        cap: "Product advertisement for question 24, Comprehensive Examination in Spanish, June 21, 2002",
        alt: "Magazine advertisement headed 'Bolsa resistente al agua' (water-resistant bag). With this bag, your wallet, credit cards, and billfold will be protected from sand, dust, and above all, water. It is 100% waterproof down to 20 meters of immersion and, moreover, it floats. Tan in peace with the assurance that your belongings are safe. Dimensions 14 x 21 cm. Specific slots for credit cards. Resistant to extreme temperatures and salt water. Patented closing system. Ref MG 9000. Price 18 euros. A black starburst reads 'Aprovecha esta oportunidad. Sólo por 18€'." }
    ]
  },
  huesped: {
    imgs: [
      { src: "img/q25-estimado-huesped.png",
        cap: "Hotel notice for question 25, Comprehensive Examination in Spanish, June 21, 2002",
        alt: "Boxed hotel notice addressed 'Estimado Huésped:' and signed 'La Gerencia'. Because of repairs being carried out on our hydropneumatic system, we find it necessary to interrupt water service between 1:00 a.m. and 3:00 a.m. on Wednesday. Our most sincere apologies for the inconvenience this may cause and thanks in advance for your understanding. We appreciate your cooperation in keeping the bathtub and sink faucets closed during these hours." }
    ]
  },
  // ----- Part 3c: cloze passage (Q26-30) -----
  isla: {
    passage: `La isla española: República Dominicana

La República Dominicana ha estado llena de vida desde los primeros años de su historia. Gracias a su situación geográfica, desempeñó un papel fundamental en el descubrimiento de América, ya que funcionó como una antesala al continente. Fue descubierta por Cristóbal Colón en su primer __(26)__ a América. Su capital, Santo Domingo de la Isla Española, fue residencia de notables hombres históricos como Hernán Cortés, Simón Bolívar, y Juan Ponce de León y sirvió de modelo para otras __(27)__ del Nuevo Mundo.

Además de ser “la tierra del merengue”, la República Dominicana, que ocupa dos tercios de la isla, se ha convertido en uno de los destinos turísticos más importantes del Caribe. Más de treinta kilómetros de playas ofrecen sitios donde la gente puede __(28)__ en el clima tropical de la isla. La playa de Bayahibe se transforma en un auténtico mercado cuando los dominicanos se reúnen para __(29)__ todo tipo de artesanías a los turistas.

Pero no todo queda en bailes y playas. Desde hace dos décadas, la economía del país ha evolucionado hacia una modernización. Esta transformación ha sido más evidente en el paisaje de la capital que ahora está llena de edificios altos, tiendas, bancos, y torres de hoteles.

La República Dominicana es el país caribeño que tiene más negocios con los Estados Unidos. Aunque no pertenece a ningún grupo económico regional, colabora con varios de ellos, lo que la ha convertido en una importante plataforma para la Comunidad Económica Europea. Por otro lado, representa un vínculo para sus países vecinos, particularmente Haití y los países miembros del Mercado Común del Caribe.

Algunos dominicanos luchan por ser parte de los avances del mundo moderno. Hay otros que viven felizmente y no se preocupan del futuro de su isla donde la música, el sol y el mar hacen la vida muy __(30)__.`,
    psource: "Part 3c cloze passage, Comprehensive Examination in Spanish, June 21, 2002"
  },
  // ----- Part 4b: picture for question 33 -----
  dibujo: {
    imgs: [
      { src: "img/q33-mecanico-cartoon.png",
        cap: "Picture for Part 4, question 33, Comprehensive Examination in Spanish, June 21, 2002 (cartoon by Jerry Marcus, © 2001 King Features Syndicate)",
        alt: "Black-and-white cartoon set in an auto repair shop: a worried woman in a coat stands at the counter holding a telephone receiver to her ear, her handbag on her arm, while a mechanic in a plaid shirt and cap inspects under the raised hood of her car." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. Why is the Retiro Park recommended by the hotel clerk?",
    choices: [
      "Many performances are presented free.",
      "The royal palace is located there.",
      "The hotel provides transportation to it.",
      "It has a large shopping mall."
    ],
    answer: 0,
    back: "(1) Many performances are presented free — musicians, puppeteers, clowns, jugglers, dancers and magicians appear, and \"Todos los espectáculos tienen el mismo precio: nada.\" (every show costs nothing)."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. Who would be most interested in this announcement?",
    choices: [
      "people about to take a vacation",
      "people shopping for wedding gifts",
      "people shopping for clothing",
      "people looking for an apartment"
    ],
    answer: 1,
    back: "(2) people shopping for wedding gifts — El Corte Inglés advertises its special \"Novios\" department and wedding gift lists (\"listas de boda\") for choosing wedding gifts."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. According to this advertisement, what is an advantage of this product?",
    choices: [
      "It is low in calories.",
      "It is economical.",
      "It is easy to prepare.",
      "It is healthful."
    ],
    answer: 3,
    back: "(4) It is healthful — the Cremacita dessert is \"tan sano como un vaso de leche\" and \"tan bueno para su salud\" (as healthy as a glass of milk, good for your baby's health)."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is one purpose of this exhibition?",
    choices: [
      "showing the paintings of new artists",
      "raising money for a charity",
      "promoting awareness of a Spanish painter",
      "improving international relations"
    ],
    answer: 2,
    back: "(3) promoting awareness of a Spanish painter — for the 250th anniversary of Goya's birth, exhibitions are planned \"para mejorar el conocimiento y la apreciación de la obra del gran artista\" in and outside Spain."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is the subject of this announcement?",
    choices: [
      "what to do in case of food poisoning",
      "how to avoid fires in the kitchen",
      "how to cook fast foods",
      "which type of cooking utensils are safe to use"
    ],
    answer: 1,
    back: "(2) how to avoid fires in the kitchen — kitchen equipment is the leading cause of fires in the U.S.: \"Tome las precauciones necesarias para prevenir un incendio.\""
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. Which change in the performance did the manager announce?",
    choices: [
      "There will be a substitution in the cast.",
      "The performance will be shortened.",
      "Today’s performance will be followed by a lecture.",
      "The show will be presented as a tragedy rather than a comedy."
    ],
    answer: 0,
    back: "(1) There will be a substitution in the cast — the actor who normally plays Sancho Panza fell ill last night, so young Alejandro García will play the part instead."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is notable about this hotel?",
    choices: [
      "its large variety of services",
      "its oceanfront location",
      "its large number of rooms",
      "its low parking rates"
    ],
    answer: 0,
    back: "(1) its large variety of services — Hotel Larios offers convention rooms, a restaurant, a panoramic terrace and easy parking in the historic center of Asunción."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is this book and CD about?",
    choices: [
      "the geography of Ecuador",
      "a method of learning another language",
      "the cultural traditions of South America",
      "the life of a famous musician"
    ],
    answer: 2,
    back: "(3) the cultural traditions of South America — the book \"representa la música y tradiciones de 25 países de América Latina\" and comes with a CD of songs."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What does this person want to know?",
    choices: [
      "the native language of an individual",
      "the name of an individual",
      "the country of origin of an individual",
      "the address of an individual"
    ],
    answer: 3,
    back: "(4) the address of an individual — Carmen proposed a fan-material exchange \"pero no escribió su dirección,\" so the writer cannot answer her."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué profesión es este hombre?",
    choices: [
      "Es abogado.",
      "Es cocinero.",
      "Es profesor.",
      "Es agricultor."
    ],
    answer: 3,
    back: "(4) Es agricultor — \"Estoy empleado en una hacienda donde cultivo los nueces pequeños\": cultiva pistachos al aire libre en Alamogordo, Nuevo México."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué es este producto?",
    choices: [
      "una planta medicinal",
      "un estatua para el jardín",
      "una revista para el viajero",
      "una prenda de vestir"
    ],
    answer: 0,
    back: "(1) una planta medicinal — el tilo \"es eficaz como tranquilizante\", combate la gripe y el resfriado, y se utiliza para las heridas y contra la caída del pelo."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué explican estos consejos?",
    choices: [
      "cómo planear una recepción de boda sin niños",
      "cómo llevar a los niños de viaje",
      "cómo organizar una fiesta para niños",
      "cómo enseñar a los niños a actuar"
    ],
    answer: 2,
    back: "(3) cómo organizar una fiesta para niños — pasos para el cumpleaños de su hijo: la lista de invitados, un payaso o teatro de marionetas, las invitaciones, la torta, el helado y los juegos."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. Según este anuncio, ¿qué quiere el hotel que hagan los huéspedes?",
    choices: [
      "que paguen por el uso del refrigerador",
      "que no abran las ventanas a causa del smog",
      "que limpien bien la bañera después de usarla",
      "que ayuden a conservar la ecología"
    ],
    answer: 3,
    back: "(4) que ayuden a conservar la ecología — reusar las toallas reduce el agua llena de detergente: \"Gracias por su contribución para mantener un mejor equilibrio ecológico.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué ganó Marisa Nortigas?",
    choices: [
      "un premio de arte",
      "un viaje por Europa",
      "una nueva decoración de la sala",
      "un trabajo como representante"
    ],
    answer: 0,
    back: "(1) un premio de arte — la pintora española \"obtuvo el premio otorgado en el Último Salón Internacional de Pintura Abstracta.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿De qué se trata este disco?",
    choices: [
      "canciones infantiles",
      "música clásica de España",
      "música latina contemporánea",
      "canciones medievales"
    ],
    answer: 2,
    back: "(3) música latina contemporánea — \"Herido\" de José Alberto, El Canario, es un disco bailable de salsa que capta el ritmo caribeño con toques pop, rumba y merengue."
  },
  // ----- Part 3a: Reading, long passage (Q16-20) -----
  { ...STIMULI.cordero,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cuál es la profesión de Antonio Cordero?",
    choices: [
      "geógrafo muy famoso",
      "guía turístico",
      "ecólogo extranjero",
      "escritor muy conocido"
    ],
    answer: 1,
    back: "(2) guía turístico — es el director de la agencia de viajes de aventura Ambar y abre rutas nuevas que después ofrece a los clientes de su agencia."
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Cómo hace sus expediciones?",
    choices: [
      "usa varios medios de transportación",
      "prefiere viajar solamente por agua",
      "usa el equipo más moderno",
      "prefiere viajar por las ciudades grandes"
    ],
    answer: 0,
    back: "(1) usa varios medios de transportación — \"selecciona rutas a pie, en todo terreno y por agua\"; cruza los ríos en canoa y recorre la selva en una camioneta."
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "Q18",
    stem: "Q18. Cuando explora las zonas remotas por primera vez, ¿dónde pasa la noche?",
    choices: [
      "en el centro de la ciudad",
      "en los hoteles de lujo",
      "en una tienda de acampar",
      "en casa de gente de la región"
    ],
    answer: 3,
    back: "(4) en casa de gente de la región — \"Cuando cae la noche, busca refugio en la casita de una familia cualquiera de las que habitan estas tierras salvajes.\""
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Dónde encontró Antonio la inspiración para sus viajes extraordinarios?",
    choices: [
      "en los cuentos de un tío favorito",
      "en las películas documentales",
      "en las novelas de su autor preferido",
      "en los programas de televisión"
    ],
    answer: 2,
    back: "(3) en las novelas de su autor preferido — pasaba sus ratos libres \"leyendo novelas de aventura de Joseph Conrad, escritor inglés. Se enriqueció con su literatura y se apasionó con sus personajes.\""
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué tipo de cliente busca Antonio para sus expediciones?",
    choices: [
      "personas con el deseo de viajar en primera clase",
      "personas con un espíritu aventurero",
      "personas con talento artístico",
      "personas mayores con títulos universitarios"
    ],
    answer: 1,
    back: "(2) personas con un espíritu aventurero — prepara sus expediciones \"pensando en gente joven, más de espíritu que de edad,\" en buena forma física y lista para estar lejos de las comodidades modernas."
  },
  // ----- Part 3b: Realia (Q21-25) -----
  { ...STIMULI.ruinas,
    type: "mc",
    label: "Q21",
    stem: "Q21. Who would find this article of particular interest?",
    choices: [
      "people who want to learn about Mexican culture",
      "people who would enjoy going on a cruise",
      "people who are interested in international cuisine",
      "people who prefer to relax at the beach"
    ],
    answer: 0,
    back: "(1) people who want to learn about Mexican culture — Ameri-Span's 13-day educational excursion tours the Mayan ruins of Mexico's Yucatán peninsula (Palenque, Uxmal, Chichén-Itzá) plus colonial Mérida and Izamal."
  },
  { ...STIMULI.tienda,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is unique about this store?",
    choices: [
      "Magazines can be read there.",
      "Artwork can be created there.",
      "A musical instrument can be played there.",
      "Cooking is taught there."
    ],
    answer: 1,
    back: "(2) Artwork can be created there — at \"Petroglyph\" you buy an unfinished ceramic piece and paint and decorate it yourself; the store provides the paints and the kilns to seal your \"obra de arte.\""
  },
  { ...STIMULI.nasa,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is the purpose of this announcement?",
    choices: [
      "to offer the services of NASA speakers to educational institutions",
      "to offer video programs to high school students about the latest space technology",
      "to announce student tours of NASA facilities during the summer",
      "to inform students of available work-study programs with NASA"
    ],
    answer: 3,
    back: "(4) to inform students of available work-study programs with NASA — the SHARP eight-week summer apprenticeship in science and engineering, plus a paid internship program (40 hours a week with a weekly salary and full-expense scholarships)."
  },
  { ...STIMULI.bolsa,
    type: "mc",
    label: "Q24",
    stem: "Q24. This product would be most practical for use at a",
    choices: [
      "library",
      "restaurant",
      "beach",
      "movie theater"
    ],
    answer: 2,
    back: "(3) beach — the bag protects wallet and credit cards \"de la arena, del polvo y, sobre todo, del agua,\" is 100% waterproof to 20 meters, floats, and lets you tan in peace (\"Broncéese tranquilo\")."
  },
  { ...STIMULI.huesped,
    type: "mc",
    label: "Q25",
    stem: "Q25. What information did the hotel guests receive in this notice?",
    choices: [
      "what time the front doors would be closed",
      "what to do in case they lose their keys",
      "the interruption of water service during a specific time period",
      "a celebration taking place on a weekday between 1:00 and 3:00"
    ],
    answer: 2,
    back: "(3) the interruption of water service during a specific time period — repairs to the hydropneumatic system force the hotel to cut water service between 1:00 a.m. and 3:00 a.m. on Wednesday."
  },
  // ----- Part 3c: Cloze passage (Q26-30) -----
  { ...STIMULI.isla,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
      "romper",
      "viaje",
      "festival",
      "aprender"
    ],
    answer: 1,
    back: "(2) viaje — \"Fue descubierta por Cristóbal Colón en su primer viaje a América\": the island was discovered on Columbus's first voyage to America."
  },
  { ...STIMULI.isla,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
      "ciudades",
      "profesiones",
      "novelas",
      "canciones"
    ],
    answer: 0,
    back: "(1) ciudades — Santo Domingo \"sirvió de modelo para otras ciudades del Nuevo Mundo\": the capital served as a model for other cities of the New World."
  },
  { ...STIMULI.isla,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
      "atreverse",
      "enojarse",
      "divertirse",
      "dañarse"
    ],
    answer: 2,
    back: "(3) divertirse — the beaches offer places where people can enjoy themselves (\"divertirse\") in the island's tropical climate."
  },
  { ...STIMULI.isla,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
      "romper",
      "defender",
      "vender",
      "aprender"
    ],
    answer: 2,
    back: "(3) vender — Bayahibe beach becomes \"un auténtico mercado\" when Dominicans gather to sell (\"vender\") all kinds of handicrafts to the tourists."
  },
  { ...STIMULI.isla,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
      "antipática",
      "difícil",
      "rápida",
      "agradable"
    ],
    answer: 3,
    back: "(4) agradable — music, sun and sea make life very pleasant (\"agradable\") on the island; the sentence contrasts happy islanders with those chasing modern progress."
  },
  // ----- Part 4: Writing tasks (notes: choose 31 or 32; compositions: choose 33 or 34) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4a, Question 31 — on the real exam, choose either 31 or 32). Your Spanish Club recently held a festival at your school. Write a note in Spanish to a Spanish-owned business that provided support for the festival to thank the business for its support.

In your note you may wish to mention when the festival was held, what activities took place (such as games and movies), who attended, what the business provided, and how it was used. Be sure to accomplish the purpose of the note, which is to thank the business for its support of the festival at your school.

Use the following:
Salutation: Señor/Señora:
Closing: [your name]

Your note must consist of at least six clauses; the salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key, slash marks removed):

Señor/Señora:
Le agradecemos su ayuda. El festival de la comida latina es siempre un gran éxito. Toda la comunidad asistió al festival este fin de semana pasado. Con su ayuda ofrecimos platos típicos de Costa Rica. Esperamos que su restaurante pueda participar el año próximo.
[your name]

Rubric: the note earns credit only if it accomplishes the stated purpose (thanking the business); each of the first six clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4a, Question 32 — on the real exam, choose either 31 or 32). You purchased a product from a catalog company and now want to return it. Write a note in Spanish to the company to return the product that you purchased.

In your note, you may want to identify the product, mention how much it cost, and how you paid for it (cash or credit card). You may also wish to discuss why you want to return the product and/or suggest a solution to the problem (refund or exchange). Be sure to accomplish the purpose of the note, which is to return the product that you purchased.

Use the following:
Salutation: Estimados Señores:
Closing: [your name]

Your note must consist of at least six clauses; the salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key, slash marks removed):

Estimados Señores:
Por medio de su catálogo, acabo de comprar una camiseta del Real Madrid. Pedí el tamaño grande pero me enviaron el tamaño pequeño. No puedo ponérmela. Por eso les devuelvo la camiseta. Por favor, mándenme o la camiseta grande o mi dinero. Gracias.
[your name]

Rubric: the note earns credit only if it accomplishes the stated purpose (returning the product); each of the first six clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4b, Question 33 — on the real exam, choose either 33 or 34). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your composition must consist of at least 10 clauses.`,
    back: `Official 10-credit sample response (scoring key, slash marks removed):

La señora tiene un problema. Hoy por la mañana iba a la oficina cuando el coche se le descompuso. Llamó al taller mecánico para llevar el coche al taller. Ya que va a llegar tarde a su empleo, llama al jefe para explicarle el problema. Luego llamará a un taxi para que la lleve a la oficina. Ella ha pasado un muy mal día.

Rubric: the composition earns credit only if it is a STORY relating to the picture (not a description, not a dialogue); each of the first 10 clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  {
    type: "self",
    label: "W4",
    front: `W4 (Part 4b, Question 34 — on the real exam, choose either 33 or 34). Your pen pal from Spain is writing an article for her school newspaper. The article is about what life is like for a teenager in the United States. Your pen pal has asked you to provide some information for the article. In Spanish, write a letter to your pen pal providing information that could be used for a school newspaper article about what life is like for a teenager in the United States.

You must accomplish the purpose of the letter, which is to provide information that could be used for a school newspaper article about what life is like for a teenager in the United States.

In your letter you may wish to include: how American teenagers dress, afterschool and weekend activities, favorite foods, favorite music, family life, what a typical school day is like, and what your community is like.

You may use any or all of the ideas suggested above or you may use your own ideas. Either way, you must provide information that could be used for a school newspaper article about what life is like for a teenager in the United States.

Use the following:
Dateline: el 21 de junio de 2002
Salutation: Querido/Querida (name)
Closing: [your name]

Your letter must consist of at least 10 clauses; the dateline, salutation, and closing will not be counted as part of the 10 required clauses.`,
    back: `Official 10-credit sample response (scoring key, slash marks removed):

Querido Roberto,
Me has pedido que te explique cómo es la vida de los jóvenes en los EE.UU. Yo te puedo hablar solo de mi vida personal. Asisto a una escuela pública entonces no necesito llevar uniforme. Me gustan los deportes y juego fútbol en el equipo de la escuela. Pero muchos de mis amigos participan en el club de drama o el club de computación. Me encanta ir al cine y al centro comercial con mis amigos. La pizza es nuestra comida favorita. Yo vivo en una ciudad pequeña pero muy simpática. Ojalá que tengas bastante información para escribir un artículo interesante.

Rubric: the letter earns credit only if it accomplishes the stated purpose (information a school newspaper could use about U.S. teenage life); each of the first 10 clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, what does the wedding-list department offer its customers?",
    choices: [
      "free delivery of all wedding gifts",
      "a discount on the wedding dress",
      "a gift check worth ten percent of the total value of the gifts purchased",
      "a free honeymoon trip for the couple"
    ],
    answer: 2,
    back: "(3) a gift check worth ten percent of the total value of the gifts purchased — \"El departamento de listas de boda le ofrece un cheque regalo por valor del diez por ciento del importe total de los regalos comprados.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S2",
    stem: "S2. According to the announcement, why should you take an oven glove or a spoon with you when you leave the kitchen?",
    choices: [
      "to protect your hands from hot pans",
      "to remind yourself to return to the kitchen as soon as possible",
      "to stir the food while it cooks",
      "to show guests what you are preparing"
    ],
    answer: 1,
    back: "(2) to remind yourself to return to the kitchen as soon as possible — \"llévese un guante de cocina o una cuchara con usted para acordarse de regresar a la cocina lo antes posible.\""
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S3",
    stem: "S3. According to the manager, why is the usual actor unable to perform today?",
    choices: [
      "He is performing in another city.",
      "He retired from the stage.",
      "He arrived late to the theater.",
      "He became ill last night."
    ],
    answer: 3,
    back: "(4) He became ill last night — \"el que normalmente actúa en el papel de Sancho Panza se enfermó anoche y no puede estar aquí hoy\"; young Alejandro García will take the role."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S4",
    stem: "S4. What inspired Charito Calvachi Wakefield to create her book?",
    choices: [
      "Her nieces and nephews asked her to teach them about the typical festivals of her native Ecuador.",
      "A publisher offered her a contract for a children's cookbook.",
      "She wanted to learn English by translating song lyrics.",
      "Her teachers asked her to write a history of Latin America."
    ],
    answer: 0,
    back: "(1) Her nieces and nephews asked her to teach them about the typical festivals of her native Ecuador — that request made her realize many Latino children and adults did not know their ancestors' traditional celebrations, which inspired the book."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Dónde trabaja este hombre?",
    choices: [
      "en una oficina en la capital",
      "en una hacienda en Alamogordo, Nuevo México",
      "en un restaurante de comida mexicana",
      "en una escuela secundaria"
    ],
    answer: 1,
    back: "(2) en una hacienda en Alamogordo, Nuevo México — \"Trabajo en Alamogordo, Nuevo México... Estoy empleado en una hacienda donde cultivo los nueces pequeños\"; le gusta el aire libre y no trabaja en ninguna oficina."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S6",
    stem: "S6. Según el anuncio, ¿qué deben hacer los huéspedes si quieren que sus toallas sean reemplazadas?",
    choices: [
      "ponerlas dentro de la bañera",
      "ponerlas en el tendedero",
      "llevarlas a la recepción",
      "dejarlas encima de la cama"
    ],
    answer: 0,
    back: "(1) ponerlas dentro de la bañera — \"Si desea que sus toallas sean reemplazadas, póngalas dentro de la bañera. Si pone las toallas en el tendedero, asumiremos que las quiere reusar.\""
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "S7",
    stem: "S7. Según el artículo, ¿qué hace Antonio antes de embarcar en un viaje de exploración?",
    choices: [
      "Compra el equipo más caro y moderno.",
      "Toma clases de fotografía con su esposa.",
      "Visita las agencias de viajes de sus competidores.",
      "Lee todo lo publicado sobre el lugar y charla con gente con experiencia."
    ],
    answer: 3,
    back: "(4) Lee todo lo publicado sobre el lugar y charla con gente con experiencia — \"Antonio lee todo lo publicado sobre el lugar. También charla con la gente con experiencia y conocimiento de estos lugares escogidos para el viaje.\""
  },
  { ...STIMULI.cordero,
    type: "mc",
    label: "S8",
    stem: "S8. Según el artículo, ¿cómo clasifica Antonio las expediciones que ofrece a sus clientes?",
    choices: [
      "según el precio del viaje",
      "según su nivel de dificultad",
      "según la edad de los participantes",
      "según la distancia de España"
    ],
    answer: 1,
    back: "(2) según su nivel de dificultad — \"Clasifica estas expediciones según su nivel de dificultad: para principiantes, nivel intermedio, y nivel avanzado.\""
  },
  { ...STIMULI.ruinas,
    type: "mc",
    label: "S9",
    stem: "S9. According to the advertisement, how long is the Ameri-Span excursion through the Mayan ruins?",
    choices: [
      "three days",
      "one week",
      "thirteen days",
      "one month"
    ],
    answer: 2,
    back: "(3) thirteen days — Ameri-Span invites tourists to \"una excursión de 13 días por las históricas y accesibles ruinas de la región maya en México.\""
  },
  { ...STIMULI.isla,
    type: "mc",
    label: "S10",
    stem: "S10. Según el pasaje, ¿qué parte de la isla ocupa la República Dominicana?",
    choices: [
      "un tercio de la isla",
      "la mitad de la isla",
      "dos tercios de la isla",
      "toda la isla"
    ],
    answer: 2,
    back: "(3) dos tercios de la isla — \"la República Dominicana, que ocupa dos tercios de la isla, se ha convertido en uno de los destinos turísticos más importantes del Caribe.\""
  }
];
