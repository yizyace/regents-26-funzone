// June 2000 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2000/.
// Exam administered Tuesday, June 20, 2000.
// Printed quirks kept verbatim (verified against page renders):
// "Qué Dios te bendiga" (Part 3a passage, standard spelling "Que Dios"),
// "jibarita de Ponce" (Part 3a passage), and "El siempre ha tenido" — "Él"
// printed without an accent — in the official Q33 model answer (scoring key).
// Part 4 prints FOUR task numbers (31–34): Part 4a is a note (choose 31 or 32)
// and Part 4b is a composition (choose 33 or 34); all four become self cards.

const TDC_SRC = "Teacher Dictation Copy, June 2000 Comprehensive Spanish Regents";

const STIMULI = {
  // ----- Part 2a listening passages (questions and answers in English) -----
  l01: {
    passage: `[Background] You hear a representative of an airline make this announcement:

[La maestra lee] Los gobiernos de los Estados Unidos y el Japón firmaron un tratado de aviación que nos permite ofrecer más vuelos competitivos y accesibles entre los dos países. Me complace anunciar que con este nuevo servicio extendido al Japón, ahora tendrá la oportunidad de llegar a su destino más fácil — y más rápidamente que antes. Este es el resultado de muchos años de negociaciones con el gobierno japonés para un servicio más rápido y más frecuente.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] While watching television in Spain, you hear this announcement:

[La maestra lee] Ayúdenos a retirar este producto del mercado. El juguete se llama "Osito Meloso". Hemos detectado que si un bebé se lo pone en la boca, podría obstruirle la respiración. Por esto, hemos decidido quitarlo del mercado inmediatamente. Si su hijo tiene este juguete, por favor, envíelo por correo certificado. Incluya una carta donde nos indique su nombre y apellidos, dirección completa con código postal y teléfono. Para nosotros la seguridad de su bebé es lo primero.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You hear this message on your answering machine:

[La maestra lee] Lo sentimos mucho, pero la bicicleta que usted pidió la semana pasada ya no se fabrica. La compañía interrumpió la fabricación de ese modelo hace seis meses. Si quiere le podemos enviar una de otro modelo más moderno, pero tiene un costo adicional. O si prefiere le devolveremos su dinero sin ningún problema. En todo caso, por favor llame nuestra oficina para indicarnos su decisión.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] While watching a Spanish television station, you hear this commercial announcement:

[La maestra lee] Por más de 50 años, nuestra compañía ha traído a la cocina una línea completa de sartenes, ollas, y cacerolas de alta calidad, diseñada para un estilo de vida saludable. Nuestro exclusivo equipo de cocina se distingue por su bella construcción y por su rápida distribución de calor. Es fácil de limpiar. Cocina con un mínimo de energía. Es tan durable, que nosotros ofrecemos una garantía de por vida.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are in Mexico watching television. You hear an announcer say:

[La maestra lee] El actor brasileño Guy Ecker será el protagonista central de "La mentira", la telenovela que se empieza a transmitir el próximo lunes.
"La mentira" es muy diferente. Tiene características interesantes, distintas a la telenovela tradicional; el tema es el drama de la vida moderna y los personajes tienen actitudes muy dramáticas.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] While you are listening to some music on the radio, you hear the announcer say:

[La maestra lee] Apreciado aficionado a la música latina: ¿Recuerda cuando la pasión por la música latina crecía en todas partes . . . pero la selección disponible era escasa y difícil de conseguir?
Nosotros mismos hemos sentido esa falta. En 1991 nosotros, los aficionados a la música latina decidimos formar el Club Música Latina, un club con una misión: ofrecer el mejor servicio a nuestra comunidad con la facilidad de comprar desde su casa la mejor selección de música latina.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] The principal of a school is being interviewed on a local television channel in Spain. The principal says:

[La maestra lee] Se les invita a todos los padres a visitar la escuela de sus hijos. Todos los visitantes deben ir primero a la oficina. Todos los que deseen reunirse con un maestro o con el director de la escuela, deben llamar primero para hacer una cita. Si desea entrar en el salón de clase de su hijo, debe hablar con el director para que le indique la fecha y la hora en que lo puede hacer.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are listening to the radio and hear this commercial:

[La maestra lee] El Banco de Santander ha iniciado en Colombia un programa de comercio electrónico seguro que permitirá a los consumidores comprar con seguridad en la red mundial. Esta nueva tecnología garantiza la integridad de la información de crédito que se envía por la Internet. Este servicio fue creado para la división de América Latina y el Caribe del Banco de Santander.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] While you are visiting a school in Puerto Rico, you hear this announcement:

[La maestra lee] Todos los jóvenes entre las edades de 14 y 18 años necesitan un permiso para trabajar. Los estudiantes de la escuela pueden obtener los formularios en la oficina de la enfermera o en la oficina del sub-director. El solicitante necesita que uno de sus padres o su tutor firme la solicitud. También necesita un documento que pruebe su edad y un certificado de salud de su médico o del médico de la escuela. Los permisos para trabajar serán procesados y otorgados en las oficinas indicadas.`,
    psource: TDC_SRC
  },
  // ----- Part 2b listening passages (questions and answers in Spanish) -----
  l10: {
    passage: `[Background] You are listening to a program and hear this information:

[La maestra lee] Es joven, hermosa y bilingüe. María del Carmen Romero es una poetisa chilena que acaba de publicar su tercera antología de poemas, Recuerdos, en la que resaltan su simplicidad, su preocupación social y sus sentimientos románticos. Según lo confiesa al iniciar su colección de poemas, cada palabra que escribe es un escape. Se mueve entre el pasado y el presente, e intenta tocar la esencia de la vida. El libro está ilustrado con dibujos en negro y rojo. El negro simboliza lo concreto en su vida y el rojo sus sentimientos o los sentimientos del arte en relación a lo que escribe.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to the radio and hear this report:

[La maestra lee] "Tengo fe", el nuevo álbum del artista Carlos Vives que hizo popular por todo el mundo el vallenato, una música típica colombiana, ha batido records de venta en su país. El disco tiene temas escritos por él, con una mezcla de ritmos que mantienen la esencia de la música vallenata. Aunque todo el álbum es en español, el primer día vendió 300.000 copias en su país, lo que le valió seis discos de platino. Carlos Vives piensa grabar en otros idiomas para dar a conocer mejor su música por el mundo entero.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to the radio and hear this commentary from a doctor:

[La maestra lee] Probablemente, todos tenemos o hemos tenido algún problema con los pies, pero casi siempre limitamos su cuidado a cortar las uñas. El primer paso en el cuidado de los pies es la prevención, y realmente, es muy simple. Lavar y secar escrupulosamente los pies sólo requiere unos instantes. ¿Cuántos de nosotros tenemos esta rutina?`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While you are at a travel agency in Mexico, the agent tells you about Veracruz:

[La maestra lee] Caer de una cascada de agua de 30 metros de altura, arrojarse desde un globo en pleno vuelo, navegar contra la fuerza del agua mar abierto o de los ríos, escalar montañas, andar en bicicleta, ¡todo es adrenalina pura! Gracias a su favorable geografía, Veracruz es reconocido por la Secretaría de Turismo como el estado de mayor actividad ecoturística.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] A travel agent in Mexico City tells you about a hotel. The travel agent says:

[La maestra lee] Por encontrarse en un lugar céntrico, el hotel Bristol satisface las necesidades de los ejecutivos más exigentes. Situado a sólo dos calles del Paseo de la Reforma, detrás de la embajada de Estados Unidos y a un paso de la Zona Rosa — con sus tiendas, restaurantes y boutiques — usted encontrará los bancos y comercios más importantes para resolver todos sus asuntos.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are an exchange student in Valencia, Spain. While visiting your host's school, you hear this announcement:

[La maestra lee] ¿Tienes talentos artísticos? ¿Te gustaría actuar? Si respondiste que sí a estas dos preguntas, ven a nuestra reunión esta tarde. Este año vamos a presentar una obra del escritor español Alejandro Casona. Necesitamos todo tipo de ayuda . . . y si no quieres actuar, puedes ayudar con el diseño del escenario o del programa, la venta de boletos y muchas otras actividades.`,
    psource: TDC_SRC
  },
  // ----- Part 3a: long reading passage (Q16-20) -----
  colon: {
    passage: `Miriam Colón

La carrera artística de Miriam Colón se puede describir en tres palabras: Teatro Rodante Puertorriqueño. Este teatro fundado por ella hace más de treinta años, es motivo de orgullo y es su destino, aunque algunas veces es un dolor de cabeza. El Teatro Rodante Puertorriqueño es para Miriam Colón, el drama de su vida.

A principios de los años 50, ella era una adolescente que estudiaba en la escuela Baldorioty del Viejo San Juan, en Puerto Rico. "La noche de la última función de la producción escolar donde debuté como actriz, me di cuenta de que me había enamorado del teatro", recuerda ella. Hoy, casi cincuenta años después, su entusiasmo es el mismo. Se le ilumina la cara cuando habla de sus grandes pasiones: la producción de teatro latino y el descubrir y estimular el talento joven.

Comenzó sus estudios en la Universidad de Puerto Rico. Poco después, el profesorado de esta universidad se dio cuenta de su gran talento y le dio una beca para que Miriam continuara sus estudios en Nueva York. Entonces Miriam tenía solamente 17 años. Más tarde estudió en el famoso Actors Studio. "Fui la primera puertorriqueña que estudió allí", dice con un brillo en sus ojos oscuros.

A principios de los años 60, Colón comenzó su carrera cinematográfica en Hollywood. "Imagínate cómo sería para mí, una jibarita de Ponce, el poder actuar junto con Marlon Brando: ¡Lo máximo!", dice. Luego se desilusionó con los papeles pequeños que le ofrecían a las actrices hispanas y decidió buscar otras maneras de satisfacer su ambición.

En 1967, organizó en Nueva York un teatro rodante similar al de la Universidad de Puerto Rico, que daba representaciones gratis a los pueblos de la isla. Ahora, todos los veranos el Teatro Rodante Puertorriqueño lleva funciones al aire libre y gratuitas a los vecindarios de Nueva York. Además de las presentaciones en inglés y español aquí se ofrecen también talleres para actores y Miriam Colón participa en todo.

Pero a pesar de los títulos honorarios, de los premios recibidos como actriz y como líder en la comunidad, Miriam Colón piensa que no ha tenido un éxito completo. "Producimos producciones de primera clase en el Teatro Rodante, la crítica es excelente, pero nos faltan miles de dólares para llevar al público una obra. Ojalá que en el futuro haya latinos que quieran producir teatro, en vez de esperar sombrero en mano, que ocurra un milagro", dice la célebre puertorriqueña.

El Teatro Rodante acaba de celebrar sus 30 años. Colón se siente satisfecha, y en cuanto al futuro dice, "Me gustaría encontrar una persona a quien le apasione el teatro y que tenga la voluntad necesaria para dirigir una organización artística hispana. Cuando la encuentre, me haré a un lado y le diré, 'Aquí está, mi hijo. Qué Dios te bendiga'."`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 20, 2000"
  },
  // ----- Part 3b realia (Q21-25) -----
  higiene: {
    imgs: [
      { src: "img/q21-higiene-cocina.png",
        cap: "Article for question 21, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Boxed article titled 'LA HIGIENE EN LA COCINA' (hygiene in the kitchen), a bulleted list of food-safety tips. It advises keeping two thermometers: one in the freezer (temperature below 32 degrees Fahrenheit) and another in the refrigerator (40 degrees) so food stays fresh. Use refrigerated leftovers within one or two days. When freezing meats, do not place them on top of ice trays because liquids from the package could drip and contaminate the ice cubes. Store leftovers without meat, and sauces, for less than a week. Be guided by the sell-by date stamped on packages ('use before...') for perishable products like milk; these dates are set by the agency that regulates food safety to ensure the public consumes fresh, wholesome food." }
    ]
  },
  parques: {
    imgs: [
      { src: "img/q22-sabia-usted.png",
        cap: "Article for question 22, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Boxed article headed '¿Sabía usted...?' (Did you know...?) describing improvements to New York City recreational sites. More than $12 million was invested in restoring Central Park, the city's 'green jewel,' including a new fishing lake and the Discovery Center where you can rent a fishing rod and buy bait. Renovation of the New York Botanical Garden in the Bronx (250 acres) was completed at a cost of $165 million. Tompkins Square Park, with its handball and basketball courts and an elegant fountain, reopened at a cost of $5.3 million. In Queens, the Flushing Meadows–Corona State Park zoo reopened after a $5 million restoration. The Aquarium reopened after two years of repairs, with dolphins and sea lions; the former Floyd Bennett Field became a municipal education and recreation complex; and Brooklyn gained a $70 million sports stadium that hosted the Goodwill Games." }
    ]
  },
  humo: {
    imgs: [
      { src: "img/q23-humo-de-trenes.png",
        cap: "Book review for question 23, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Boxed book-review column headed 'LIBROS' by Elizabeth Subercaseaux, reviewing 'HUMO DE TRENES' by Poli Délano (Editorial Andrés Bello). It notes that more and more parents worry about the scarcity of literature being written today for their adolescent children; kids of 12, 13, and 14 often do not read, not because they dislike reading but because they have nothing to read, spending half the day glued to the television. The good news is 'Humo de trenes,' a novel for adolescents by the renowned Chilean writer Poli Délano (author of 'En este Lugar Sagrado,' 'Dos lagartos en una botella,' 'Sin morir del todo,' 'La misma esquina del mundo,' and 'Cuentos mexicanos'), winner of the Casa de las Américas Prize in 1973 and the National Short-Story Prize in Mexico in 1975. He wrote this delightful novel to pull adolescents away from the hypnotism of television and invite them instead to literature." }
    ]
  },
  carta: {
    imgs: [
      { src: "img/q24-senora-directora.png",
        cap: "Letter to the editor for question 24, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Boxed letter to the editor addressed 'Señora Directora:' and signed by Luis Bernardo Duque Osorio, Director de Fomento y Turismo de Medellín. The citizens of Medellín, Colombia, write that they feel very flattered by the excellent article that the magazine 'Geomundo' published in its September issue about their beautiful city; it has been an honor to be included in one of the most important Spanish-language magazines in the world. The writer thanks journalist Olga Lucía Jaramillo and photographer Jorge Ernesto Bautista for their magnificent article and beautiful photographs. He closes by saying Medellín will always be the magazine's home and offers their permanent collaboration, sending a cordial and affectionate greeting." }
    ]
  },
  telefonos: {
    imgs: [
      { src: "img/q25-listado-telefonico.png",
        cap: "Telephone directory listing for question 25, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Boxed telephone directory headed 'PARA OBTENER INFORMACIÓN CON FACILIDAD...llame directamente a las oficinas siguientes marcando el número 808 seguido de los números que aparecen al lado de los nombres a continuación' (to get information easily, dial 808 followed by the listed extension). The listings are all school departments and offices: Plan de estudios de música y arte 2333, Director atlético y salud 2420, Presupuesto 2016, Programas comunitarios 2071, Plan de estudios para estudiantes de comercio 2236, Curso de estudios de inglés 2060, Curso de estudios de lenguas extranjeras 2073, Servicios de consejería 2035, Programa sobre estrategias de aprendizaje 2232, Servicios alimenticios 2040, Curso de estudios de matemáticas 2180, Servicios médicos 2050, Programa para estudiantes superdotados 2230, Centro de información para padres 2174, Programa de Pre-escolar 2039, Servicios estudiantiles, trabajo social, servicios psicológicos, habla, asistencia y evaluación 2425, Curso de estudios de ciencias 2172, Curso de estudios sociales 2037, Oficina de información estudiantil 2438, Transporte, autobuses escolares 2057, and Voluntarios 2013." }
    ]
  },
  // ----- Part 3c: cloze passage (Q26-30) -----
  fiesta: {
    passage: `La fiesta: herencia cultural española

España está siempre de fiesta, más de 25.000 al año. Cada veinte minutos se celebra una fiesta en cualquier parte del país. Algunas fiestas se originaron hace muchos siglos; otras empezaron en los recientes __(26)__. Para los españoles cualquier razón es buena para tener una fiesta. Ningún país del mundo tiene tantas fiestas, celebraciones, carnavales, corridas, desfiles, procesiones, y alegría en general para gritar, bailar, comer, __(27)__ y disfrutar de la vida. Los historiadores y autores clásicos son muy aficionados a estudiar este carácter de alegría nacional. "Descansemos hoy, necesitamos la energía para celebrar mañana. ¡Qué buena vida es ésta!" dicen los españoles.

Hay fiestas de origen histórico, pero la mayoría son religiosas, como las procesiones, y las ofrendas navideñas. Al mismo tiempo existen fiestas como la Tomatina, donde los participantes se tiran tomates como manera de divertirse. De hecho, España es una fiesta constante que empezó hace ya muchos siglos, y que no va a __(28)__ muy pronto.

Hay más fiestas que ciudades. Hay fiestas donde el motivo es expresar __(29)__ con música, risas, gritos, y ruidos tan altos que podrían dañar los oídos.

El antropólogo Enrique Gil Calvo escribió en su libro Estado de Fiesta que los pueblos mediterráneos presentan unas de las manifestaciones más coloridas del continente europeo. Para Gil Calvo, la fiesta es una expresión más de la capacidad humana de demostrar sus sentimientos.

Esplendor, alegría e imaginación popular son características básicas de las fiestas españolas. Las grandes celebraciones festivas que tienen lugar cada año tienen al pueblo como protagonista y como espectador. Las fiestas son parte de la herencia cultural, fenómeno propio de la vitalidad española. Hay celebraciones en diferentes lugares y en todas las estaciones del año sin ninguna interrupción. El viajero encontrará siempre el momento apropiado para asistir a algunos de estos eventos mágicos y espectaculares que alteran el ritmo cotidiano de la __(30)__.`,
    psource: "Part 3c cloze passage, Comprehensive Examination in Spanish, June 20, 2000"
  },
  // ----- Part 4b: picture for question 33 -----
  dibujo: {
    imgs: [
      { src: "img/q33-estudiantes-escuela.png",
        cap: "Picture for Part 4, question 33, Comprehensive Examination in Spanish, June 20, 2000",
        alt: "Black-and-white line drawing of two teenage students walking together and talking outside school buildings. A boy on the left carries books and a bag under his arm and looks toward a girl on the right, who carries a backpack and appears to be speaking to him. Behind them stand school buildings with large windows and a tree." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does the airline offer?",
    choices: [
      "better in-flight service",
      "a free flight to Japan",
      "more flights to Japan",
      "more modern airplanes"
    ],
    answer: 2,
    back: "(3) more flights to Japan — the aviation treaty between the U.S. and Japanese governments lets the airline offer \"más vuelos competitivos y accesibles entre los dos países,\" a more frequent service to passengers' destinations."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is the purpose of this announcement?",
    choices: [
      "to promote a new children's game",
      "to warn parents of the danger of a toy",
      "to advertise a new health clinic",
      "to introduce faster mail service"
    ],
    answer: 1,
    back: "(2) to warn parents of the danger of a toy — the \"Osito Meloso\" toy is being recalled because a baby who puts it in its mouth \"podría obstruirle la respiración\" (could choke); parents are asked to mail it back."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What did the message say?",
    choices: [
      "The item you ordered is no longer made.",
      "Your rebate is in the mail.",
      "The company has changed its address.",
      "The product you wanted is now on sale."
    ],
    answer: 0,
    back: "(1) The item you ordered is no longer made — \"la bicicleta que usted pidió la semana pasada ya no se fabrica\"; production of that model stopped six months ago."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is being advertised?",
    choices: [
      "health foods",
      "a set of cookware",
      "kitchen cabinets",
      "a new heating system"
    ],
    answer: 1,
    back: "(2) a set of cookware — for over 50 years the company has made \"una línea completa de sartenes, ollas, y cacerolas de alta calidad\" (pans, pots, and casseroles) with a lifetime guarantee."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What kind of television program begins soon?",
    choices: [
      "musical show",
      "game show",
      "historical drama",
      "soap opera"
    ],
    answer: 3,
    back: "(4) soap opera — \"La mentira\" is described as a \"telenovela\" starting next Monday, with the Brazilian actor Guy Ecker, dramatizing modern life."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is being offered to the public?",
    choices: [
      "a new Latin dance club",
      "a new chain of music stores",
      "an easier way to purchase music",
      "a chance to meet a Latin star"
    ],
    answer: 2,
    back: "(3) an easier way to purchase music — the Club Música Latina's mission is \"la facilidad de comprar desde su casa la mejor selección de música latina\" (buying the best Latin music from home)."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Who would be most interested in this announcement?",
    choices: [
      "those planning to take adult education courses",
      "those wishing to visit their child's school",
      "those seeking information about college",
      "those hoping to work with schoolchildren"
    ],
    answer: 1,
    back: "(2) those wishing to visit their child's school — the principal invites all parents to visit the school (\"Se les invita a todos los padres a visitar la escuela de sus hijos\"), explaining the procedures for doing so."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What service has been initiated?",
    choices: [
      "a safe way of sending credit information",
      "a special new charge card for Spanish-speaking countries",
      "a computer program for managing clients' financial records",
      "a guarantee of the lowest interest rates available"
    ],
    answer: 0,
    back: "(1) a safe way of sending credit information — Banco de Santander launched secure e-commerce that \"garantiza la integridad de la información de crédito que se envía por la Internet.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. Who would be most interested in this announcement?",
    choices: [
      "someone wanting a driver's license",
      "someone with a medical problem",
      "someone going on a field trip",
      "someone looking for employment"
    ],
    answer: 3,
    back: "(4) someone looking for employment — youths aged 14 to 18 \"necesitan un permiso para trabajar\"; the announcement explains how to get the work-permit forms and what documents are required."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De quién se habla en este pasaje?",
    choices: [
      "una autora",
      "una deportista",
      "una cantante",
      "una ilustradora"
    ],
    answer: 0,
    back: "(1) una autora — María del Carmen Romero \"es una poetisa chilena que acaba de publicar su tercera antología de poemas, Recuerdos\"; se habla de una escritora."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. Según este anuncio, ¿qué hará el cantante Carlos Vives?",
    choices: [
      "Va a cambiar su estilo.",
      "Va a cantar en otras lenguas.",
      "Va a dar más dinero a su comunidad.",
      "Va a actuar en una película."
    ],
    answer: 1,
    back: "(2) Va a cantar en otras lenguas — \"Carlos Vives piensa grabar en otros idiomas para dar a conocer mejor su música por el mundo entero.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué discute el médico?",
    choices: [
      "dónde hacer ejercicios",
      "cómo seleccionar zapatos",
      "la práctica del atletismo",
      "el cuidado de los pies"
    ],
    answer: 3,
    back: "(4) el cuidado de los pies — el médico explica que \"El primer paso en el cuidado de los pies es la prevención\": lavar y secar bien los pies."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. Según el agente, ¿qué puedes hacer si vas de vacaciones a Veracruz?",
    choices: [
      "viajar a las ruinas prehistóricas",
      "visitar muchos museos y monumentos",
      "competir en un concurso de geografía",
      "gozar de mucha acción en la naturaleza"
    ],
    answer: 3,
    back: "(4) gozar de mucha acción en la naturaleza — Veracruz ofrece cascadas, globos, ríos, montañas y bicicleta, \"¡todo es adrenalina pura!\"; es \"el estado de mayor actividad ecoturística.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué ventaja tiene este hotel?",
    choices: [
      "Está en un buen sitio para negocios.",
      "Está cerca del supermercado.",
      "Está en un lugar tranquilo.",
      "Está cerca de la estación de trenes."
    ],
    answer: 0,
    back: "(1) Está en un buen sitio para negocios — el hotel Bristol está \"en un lugar céntrico,\" cerca del Paseo de la Reforma y de \"los bancos y comercios más importantes para resolver todos sus asuntos.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Para quiénes es este anuncio?",
    choices: [
      "para estudiantes interesados en ir a un concierto",
      "para estudiantes que quieren visitar museos",
      "para estudiantes interesados en participar en una obra teatral",
      "para estudiantes que quieren aprender a dibujar"
    ],
    answer: 2,
    back: "(3) para estudiantes interesados en participar en una obra teatral — el grupo va a presentar \"una obra del escritor español Alejandro Casona\" y necesita ayuda con la actuación, el escenario, el programa y la venta de boletos."
  },
  // ----- Part 3a: Reading, long passage (Q16-20) -----
  { ...STIMULI.colon,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cuándo descubrió Miriam su gran pasión?",
    choices: [
      "cuando era muy joven",
      "cuando tenía 50 años",
      "cuando viajó a Nueva York",
      "cuando terminó la universidad"
    ],
    answer: 0,
    back: "(1) cuando era muy joven — siendo adolescente en la escuela Baldorioty, \"la noche de la última función... me di cuenta de que me había enamorado del teatro.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué le entusiasma a ella todavía?",
    choices: [
      "trabajar como profesora de lengua española",
      "dar becas a los jóvenes con talento excepcional",
      "actuar con el grupo de la escuela Baldorioty",
      "crear teatro latino y animar a jóvenes actores"
    ],
    answer: 3,
    back: "(4) crear teatro latino y animar a jóvenes actores — sus grandes pasiones son \"la producción de teatro latino y el descubrir y estimular el talento joven.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué empezó Miriam en el año 1967?",
    choices: [
      "un teatro para los estudiantes de la Universidad de Puerto Rico",
      "un teatro rodante que no cobra dinero por sus presentaciones",
      "una escuela de música para niños",
      "una compañía para construir nuevos teatros"
    ],
    answer: 1,
    back: "(2) un teatro rodante que no cobra dinero por sus presentaciones — en 1967 organizó en Nueva York un teatro rodante que lleva \"funciones al aire libre y gratuitas a los vecindarios de Nueva York.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Cuál es uno de los problemas que tiene que enfrentar Miriam Colón?",
    choices: [
      "la falta de dinero",
      "la crítica negativa",
      "la falta de buenos actores",
      "la gente que no habla español"
    ],
    answer: 0,
    back: "(1) la falta de dinero — \"la crítica es excelente, pero nos faltan miles de dólares para llevar al público una obra.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué espera Miriam Colón en el futuro?",
    choices: [
      "encontrar un edificio nuevo para su teatro",
      "encontrar un nuevo líder para la organización",
      "producir otro tipo de teatro en Nueva York",
      "obtener más títulos honorarios de la comunidad"
    ],
    answer: 1,
    back: "(2) encontrar un nuevo líder para la organización — desea \"encontrar una persona a quien le apasione el teatro y que tenga la voluntad necesaria para dirigir una organización artística hispana.\""
  },
  // ----- Part 3b: Realia (Q21-25) -----
  { ...STIMULI.higiene,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is this article about?",
    choices: [
      "the importance of balanced, nutritious meals",
      "the need to wash frequently",
      "the importance of handling and storing food safely",
      "the need to keep an activities calendar in the kitchen"
    ],
    answer: 2,
    back: "(3) the importance of handling and storing food safely — \"La higiene en la cocina\" gives tips on refrigerator/freezer temperatures, using leftovers within a day or two, freezing meat safely, and watching sell-by dates."
  },
  { ...STIMULI.parques,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is this article about?",
    choices: [
      "information for tourists on how to travel to important places",
      "the lack of money for renovations in recreational sites",
      "improvements made to recreational sites in New York City",
      "the closing of various places of interest in New York City"
    ],
    answer: 2,
    back: "(3) improvements made to recreational sites in New York City — the article details millions invested in restoring Central Park, the Botanical Garden, Tompkins Square Park, the Flushing Meadows zoo, the Aquarium, and a new Brooklyn stadium."
  },
  { ...STIMULI.humo,
    type: "mc",
    label: "Q23",
    stem: "Q23. Why did Poli Délano write this novel?",
    choices: [
      "to show how a television series is produced",
      "to encourage adolescents to read novels written for them",
      "to inform teenagers about the pleasures of traveling by train",
      "to provide parents with advice on raising adolescents"
    ],
    answer: 1,
    back: "(2) to encourage adolescents to read novels written for them — he wrote \"Humo de trenes\" \"para sacar a los adolescentes del hipnotismo de la televisión e invitarlos, en cambio, a la literatura.\""
  },
  { ...STIMULI.carta,
    type: "mc",
    label: "Q24",
    stem: "Q24. Why did Luis Bernardo write to the magazine?",
    choices: [
      "to compliment them for an article they printed",
      "to find out how to contact the photographer",
      "to renew his subscription for another year",
      "to complain about inaccurate statements"
    ],
    answer: 0,
    back: "(1) to compliment them for an article they printed — the citizens of Medellín feel \"muy halagados por el excelente artículo\" that \"Geomundo\" published about their city, and thank the journalist and photographer."
  },
  { ...STIMULI.telefonos,
    type: "mc",
    label: "Q25",
    stem: "Q25. These telephone listings are all related to",
    choices: [
      "a hotel",
      "an employment agency",
      "a hospital",
      "a school"
    ],
    answer: 3,
    back: "(4) a school — the directory lists school departments: music and art curriculum, athletic director, counseling services, English and foreign-language courses, the pre-school program, student transportation/school buses, and more."
  },
  // ----- Part 3c: Cloze passage (Q26-30) -----
  { ...STIMULI.fiesta,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
      "clubes",
      "puertos",
      "tiempos",
      "pensamientos"
    ],
    answer: 2,
    back: "(3) tiempos — \"Algunas fiestas se originaron hace muchos siglos; otras empezaron en los recientes tiempos\": some festivals began in recent times."
  },
  { ...STIMULI.fiesta,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
      "callar",
      "criticar",
      "seguir",
      "jugar"
    ],
    answer: 3,
    back: "(4) jugar — the list of festive activities is \"para gritar, bailar, comer, jugar y disfrutar de la vida\" (to shout, dance, eat, play, and enjoy life)."
  },
  { ...STIMULI.fiesta,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
      "terminar",
      "interesar",
      "animar",
      "nacer"
    ],
    answer: 0,
    back: "(1) terminar — Spain is a constant fiesta that began centuries ago \"y que no va a terminar muy pronto\" (and that will not end any time soon)."
  },
  { ...STIMULI.fiesta,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
      "la alegría",
      "la información",
      "la ayuda",
      "el miedo"
    ],
    answer: 0,
    back: "(1) la alegría — \"Hay fiestas donde el motivo es expresar la alegría con música, risas, gritos\": the purpose is to express joy."
  },
  { ...STIMULI.fiesta,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
      "edad",
      "enfermedad",
      "sociedad",
      "verdad"
    ],
    answer: 2,
    back: "(3) sociedad — these magical events \"alteran el ritmo cotidiano de la sociedad\" (alter the daily rhythm of society)."
  },
  // ----- Part 4: Writing tasks (note: choose 31 or 32; composition: choose 33 or 34) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4a, Question 31 — on the real exam, choose either 31 or 32). A Spanish-speaking classmate is recovering from an illness and will not be at school for several days. Write a note in Spanish to your classmate offering your help to him or her.

In your note, you may wish to include an expression of sympathy and/or hope for a quick recovery. You may wish to make a general offer to help or you may wish to suggest something specific, such as taking notes in class, providing homework assignments, or performing some errands that he or she needs to have done. Be sure to accomplish the purpose of the note, which is to offer to help your classmate.

Use the following:
Salutation: Querido/Querida [classmate's name],
Closing: [your name]

Your note must consist of at least six clauses; the salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key, slash marks removed):

Querido Carlos,
Oí que estás enfermo. ¡Lo siento! ¿Te puedo ayudar con algo? Si quieres, te traigo la tarea y los apuntes. Dime cuando puedo ir a tu casa.
José

Rubric: the note earns credit only if it accomplishes the stated purpose (offering to help the classmate); each of the first six clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4a, Question 32 — on the real exam, choose either 31 or 32). Your pen pal is visiting from Spain. You would like to bring him or her to your Spanish class. Write a note in Spanish to your Spanish teacher about bringing your pen pal to class.

In your note, you may wish to include where your pen pal is from, when he or she is coming, and what he or she can contribute to the class. You may also wish to tell your teacher other details about your pen pal. Be sure to accomplish the purpose of the note, which is to write about bringing your Spanish pen pal to Spanish class.

Use the following:
Salutation: Estimado Profesor/ Estimada Profesora,
Closing: [your name]

Your note must consist of at least six clauses; the salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key, slash marks removed):

Estimada Profesora,
Mi amiga Carolina acaba de llegar de Aravaca. Quiere visitar nuestra clase. Ella puede hablar de su país y de las costumbres españolas. ¿Cuándo le parece mejor que venga a la clase? Estará acá por 2 semanas. Le hablaré a Ud. más tarde.
Teresa

Rubric: the note earns credit only if it accomplishes the stated purpose (writing about bringing the pen pal to Spanish class); each of the first six clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4b, Question 33 — on the real exam, choose either 33 or 34). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your composition must consist of at least 10 clauses.`,
    back: `Official 10-credit sample response (scoring key, slash marks removed):

Fernando e Isabel están muy preocupados. Acaban de tomar un examen muy difícil en la clase de ciencias. Fernando se queja porque no tuvo bastante tiempo para terminar el examen. Pero Isabel estudió mucho y no le pareció tan difícil. El siempre ha tenido más problemas con las ciencias. Ellos saben que van a recibir sus notas mañana. Isabel dormirá muy tranquila.

Rubric: the composition earns credit only if it is a STORY relating to the picture (not a description, not a dialogue); each of the first 10 clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  {
    type: "self",
    label: "W4",
    front: `W4 (Part 4b, Question 34 — on the real exam, choose either 33 or 34). Schools are sometimes the subject of criticism. Your Spanish teacher would like to know your ideas about what is positive and/or good about your school. In Spanish, write a letter to your Spanish teacher discussing what is positive and/or good about your school.

You must accomplish the purpose of the letter, which is to discuss what is positive and/or good about your school.

In your letter, you may wish to mention and give some examples of how certain teachers, friends, classes, sports, art, music, drama, clubs, and/or afterschool activities make attending your school a good and positive experience.

You may use any or all of the ideas suggested above or you may use your own ideas. Either way, you must discuss what is positive and/or good about your school.

Use the following:
Dateline: el 20 de junio de 2000
Salutation: Sr./Sra. [your teacher's name],
Closing: [your name]

Your letter must consist of at least 10 clauses; the dateline, salutation, and closing will not be counted as part of the 10 required clauses.`,
    back: `Official 10-credit sample response (scoring key, slash marks removed):

20 de junio de 2000
Sra. Soto,
Aunque existen muchos problemas en nuestro colegio, en mi opinión hay muchas cosas buenas también. Por ejemplo, aunque hay mucha construcción, vamos a tener muchas clases nuevas y una nueva biblioteca. Además, nuestra escuela hoy día ofrece muchas actividades, y con las renovaciones podríamos tener más conciertos, partidos y bailes. Hay muchos estudiantes aquí que pueden tomar cursos para crédito universitario. Tenemos también un buen equipo de baloncesto que es conocido en todo el estado. Me gusta asistir a este colegio.
Sinceramente,
Miguel

Rubric: the letter earns credit only if it accomplishes the stated purpose (discussing what is positive/good about your school); each of the first 10 clauses earns up to one credit — two-thirds for comprehensibility-appropriateness and one-third for form, with one form error per clause forgiven.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, what made the new extended service to Japan possible?",
    choices: [
      "a merger with a Japanese airline",
      "an aviation treaty signed by the U.S. and Japanese governments",
      "the purchase of more modern airplanes",
      "a large reduction in ticket prices"
    ],
    answer: 1,
    back: "(2) an aviation treaty signed by the U.S. and Japanese governments — \"Los gobiernos de los Estados Unidos y el Japón firmaron un tratado de aviación que nos permite ofrecer más vuelos competitivos y accesibles entre los dos países.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S2",
    stem: "S2. According to the message, what options does the company offer the customer?",
    choices: [
      "a full refund only",
      "a different, more modern model at an additional cost or a refund",
      "a free upgrade to a newer model",
      "store credit toward a future purchase"
    ],
    answer: 1,
    back: "(2) a different, more modern model at an additional cost or a refund — \"le podemos enviar una de otro modelo más moderno, pero tiene un costo adicional. O si prefiere le devolveremos su dinero.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S3",
    stem: "S3. According to the principal, what must a parent do to enter their child's classroom?",
    choices: [
      "go directly to the classroom at any time",
      "call the teacher the night before",
      "speak with the director, who will set the date and time",
      "submit a written request to the school board"
    ],
    answer: 2,
    back: "(3) speak with the director, who will set the date and time — \"Si desea entrar en el salón de clase de su hijo, debe hablar con el director para que le indique la fecha y la hora en que lo puede hacer.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S4",
    stem: "S4. Besides a parent's or guardian's signature, what does a work-permit applicant need?",
    choices: [
      "a document proving their age and a health certificate",
      "a letter of recommendation from a teacher",
      "a copy of their school transcript",
      "a driver's license and a photograph"
    ],
    answer: 0,
    back: "(1) a document proving their age and a health certificate — \"También necesita un documento que pruebe su edad y un certificado de salud de su médico o del médico de la escuela.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S5",
    stem: "S5. Según el agente, ¿por qué es reconocido Veracruz por la Secretaría de Turismo?",
    choices: [
      "por tener las mejores playas del país",
      "por ser el estado de mayor actividad ecoturística",
      "por sus famosos museos de arte",
      "por su comida tradicional"
    ],
    answer: 1,
    back: "(2) por ser el estado de mayor actividad ecoturística — \"Gracias a su favorable geografía, Veracruz es reconocido por la Secretaría de Turismo como el estado de mayor actividad ecoturística.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S6",
    stem: "S6. Según el anuncio, ¿qué van a presentar los estudiantes este año?",
    choices: [
      "un concierto de música tradicional",
      "una exposición de arte estudiantil",
      "una obra del escritor español Alejandro Casona",
      "una competencia de baile"
    ],
    answer: 2,
    back: "(3) una obra del escritor español Alejandro Casona — \"Este año vamos a presentar una obra del escritor español Alejandro Casona.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "S7",
    stem: "S7. Según el artículo, ¿qué fue Miriam Colón la primera puertorriqueña en hacer?",
    choices: [
      "estudiar en el famoso Actors Studio",
      "actuar con Marlon Brando",
      "fundar un teatro en la Universidad de Puerto Rico",
      "ganar un premio en Hollywood"
    ],
    answer: 0,
    back: "(1) estudiar en el famoso Actors Studio — \"Más tarde estudió en el famoso Actors Studio. 'Fui la primera puertorriqueña que estudió allí', dice.\""
  },
  { ...STIMULI.colon,
    type: "mc",
    label: "S8",
    stem: "S8. Según el artículo, ¿por qué decidió Miriam Colón buscar otras maneras de satisfacer su ambición?",
    choices: [
      "porque ganaba poco dinero en Hollywood",
      "porque se desilusionó con los papeles pequeños que les ofrecían a las actrices hispanas",
      "porque quería regresar a vivir a Puerto Rico",
      "porque prefería trabajar en la televisión"
    ],
    answer: 1,
    back: "(2) porque se desilusionó con los papeles pequeños que les ofrecían a las actrices hispanas — \"Luego se desilusionó con los papeles pequeños que le ofrecían a las actrices hispanas y decidió buscar otras maneras de satisfacer su ambición.\""
  },
  { ...STIMULI.parques,
    type: "mc",
    label: "S9",
    stem: "S9. According to the article, how much was invested in restoring Central Park, New York's \"green jewel\"?",
    choices: [
      "more than $12 million",
      "$165 million",
      "$70 million",
      "$5.3 million"
    ],
    answer: 0,
    back: "(1) more than $12 million — \"se ha invertido más de $12 millones en restaurar la preciosa joya verde de Nueva York, el Parque Central.\" ($165 million went to the Botanical Garden, $70 million to the Brooklyn stadium, and $5.3 million to Tompkins Square Park.)"
  },
  { ...STIMULI.fiesta,
    type: "mc",
    label: "S10",
    stem: "S10. Según el pasaje, ¿qué es la Tomatina?",
    choices: [
      "una fiesta donde los participantes se tiran tomates",
      "una procesión religiosa de Navidad",
      "un festival de música clásica",
      "una corrida de toros tradicional"
    ],
    answer: 0,
    back: "(1) una fiesta donde los participantes se tiran tomates — \"existen fiestas como la Tomatina, donde los participantes se tiran tomates como manera de divertirse.\""
  }
];
