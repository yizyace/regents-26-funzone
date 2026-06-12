// June 2009 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2009/.
// Printed quirks kept verbatim: "accomodate" (Q21 choice 2), "Your hear"
// (TDC background for item 14), "Iximiché", "volley" (TDC item 2),
// "dado a las diferencias" (Q21 realia box).

const TDC_SRC = "Teacher Dictation Copy, June 2009 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] When you return home, you hear this message on your answering machine:

[La maestra lee] Oí el pronóstico y mañana va a hacer muy buen tiempo. Miguel y yo vamos a ir de pesca al lago. ¿Quieres acompañarnos? Si tenemos suerte, podemos preparar los pescados para la cena. Me encanta comer la trucha. ¿Qué te parece? Llámame pronto para discutir los planes.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You hear this report on the news in Argentina:

[La maestra lee] La semana próxima habrá actividades especiales para todos los niños de la ciudad de Mendoza. Podrán disfrutar de entretenimientos, pasajes y entradas gratuitas al zoológico. Miles de chicos llegarán al Estadio Malvinas Argentinas con sus padres para participar en el día festivo organizado por el gobierno. Tomarán un chocolate con medialunas y alfajores, jugarán al fútbol y al volley, y disfrutarán de espectáculos infantiles. Habrá actividades toda la semana hasta el domingo para conmemorar el Día del Niño.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are talking to your Spanish-speaking friend and she gives you this advice:

[La maestra lee] Hay varios secretos para que puedas tomar buenos apuntes. Uno es que si se te da la oportunidad, lee lo que se va a discutir en clase antes de llegar. Ahora bien, tomar apuntes no es copiar todo lo que dice el profesor. Es preferible que escuches con atención, y que escribas sólo unos apuntes breves de lo más importante. Cuando no entiendas algo, levanta la mano y haz una pregunta. Vuelve a preguntar, si es necesario.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are watching a Spanish-language television program and hear the announcer say:

[La maestra lee] No te lo pierdas. Nueva programación de fin de semana. Si se trata de mantenerse informado, la periodista Satcha Pretto se encargará de las últimas noticias de eventos mundiales en el popular programa Primer Impacto: Fin de semana. Pretto, con todos sus años de experiencia, será la presentadora principal de este programa que, con el paso de los años, se ha convertido en uno de los espacios más vistos de la cadena Univisión. Entérate de todo lo que necesitas saber los sábados y los domingos.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are watching a Spanish-language television show and the host says:

[La maestra lee] Me encantan las habitaciones en las que todo es blanco. Pienso que ese color puede ser muy atractivo. Para hacer un espacio tan blanco más acogedor se debe considerar incluir plantas. También se puede añadir algunos toques étnicos para añadir color al cuarto.

Pero realmente, flores, plantas y fotos de su familia es todo lo necesario para hacer una habitación más cálida. También, si Ud. tiene pisos de madera, ponga una alfombra redonda o cuadrada. Le sorprenderá el efecto que se puede crear.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to MTV in Spain and the announcer says this about Alex Ubago:

[La maestra lee] Después de tres años de silencio, el cantante y compositor Alex Ubago estrena su nueva canción, “Viajar contigo”. Esta canción es el primer disco sencillo de su tercer álbum, “Aviones de cristal”, que saldrá el 25 de septiembre. El nuevo video clip fue rodado en Madrid con la ayuda de unos músicos famosos. Ha contado con la colaboración de varios artistas como la cantante Luz Casal y el baterista Enzo Filippone. Las doce canciones nuevas en “Aviones de cristal” expresan muchos sentimientos humanos de una manera muy profunda.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are at Maria’s 15th birthday party. Her father stands up and says:

[La maestra lee] Hoy nos hemos reunido para celebrar a María, nuestra quinceañera. Es un cumpleaños especial y ella es una hija especial. Pues, quisiera proclamar: Querida hija... que siempre seas tan feliz como lo estás hoy y que siempre sepas cuánto te queremos tu madre y yo. En este día quiero que me prometas que continuarás tu trabajo en la comunidad que ha beneficiado a tantas personas. También quiero que sigas orgullosa de tu herencia latina y que nunca olvides tu lengua. Tú eres la esperanza del futuro. María, que tengas felicidad, amor, y la satisfacción de saber que has hecho una diferencia positiva en nuestra comunidad y en el mundo.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You hear this announcement on a radio program in Venezuela:

[La maestra lee] Después de dos años de ausencia, la actriz cubana Aylin Mujica regresa al mundo del espectáculo con la telenovela mexicana “Agua y aceite”.

La artista se hizo famosa después de haber actuado en varias telenovelas en México, entre las que destacan “La Dueña” y “Canción de amor”. Se retiró de este trabajo por unos años para dedicarse a su recién formada familia. Durante ese tiempo, según la actriz, hizo todo lo posible para mejorar su cuerpo y su mente.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are on vacation in Oaxaca, Mexico, and you hear this radio advertisement:

[La maestra lee] ¡Atención turistas y aficionados a la artesanía! La región de Oaxaca se conoce por todo el mundo por la variedad y autenticidad de sus artesanías. La pregunta es, ¿cómo comprar objetos de calidad a precios bajos? La respuesta, ¡vengan a la Casa de las Artesanías de Oaxaca! Aquí pueden comprar artesanías auténticas de toda clase, telas indígenas, artículos de madera pintados a mano, artículos de plata, y cerámicas. Vengan a la Casa de Artesanías de Oaxaca, una experiencia inolvidable. La dirección es Matamoros 105 Centro, teléfono 516-50-62.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to a radio station in Puerto Rico and hear this announcement:

[La maestra lee] ¿Quién no ha visto a alguien cruzando la calle y al mismo tiempo leyendo o enviando mensajes de texto? ¿Quién no se ha enojado en el cine con la persona que no ha apagado el celular? ¿Quién no ha sentido vergüenza o incomodidad cuando, en un lugar público, alguien a nuestro lado dice cosas íntimas o pelea con alguien? Pues bien, para todos esos problemas y unos cuantos más, hay una solución. Es una guía de uso responsable del teléfono celular. Se trata de un manual de recomendaciones para hacer buen uso, con responsabilidad y respeto, del aparato telefónico.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to a Spanish-language radio program in Florida and hear this report:

[La maestra lee] En honor a Salvador Dalí, uno de los artistas más conocidos del movimiento surrealista de los años veinte, varios museos en los Estados Unidos y en Europa organizaron una serie de exposiciones especiales para marcar su centésimo cumpleaños. En estas exposiciones se exhibieron las diferentes expresiones de su arte como pinturas, dibujos, diseños de escenario, libros y manuscritos del artista y hasta un dibujo animado muy corto, llamado Destino, que estaba haciendo para Walt Disney, pero que nunca terminó. Este dibujo se había perdido pero fue encontrado recientemente y fue reproducido por medio de una computadora.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are watching television in Spain and hear this announcement:

[La maestra lee] El programa Los 4.400 regresa a Antena 3. La cadena emitirá esta noche y el 5 de septiembre las dos primeras entregas de esta exitosa obra de ficción. Es una historia llena de misterio, que narra el regreso a la Tierra de 4.400 personas desaparecidas: algunas de ellas llevaban más de 50 años sin que sus familias supieran lo que les había pasado. Ahora, a su regreso, ya no recuerdan nada. Algunas de las personas volvieron a la Tierra con conocimientos científicos que podrían ayudar a nuestro planeta.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are listening to the radio in San Antonio, Texas, and hear this advertisement:

[La maestra lee] Una nueva compañía de productos para computadoras comenzará a ofrecer discos compactos que Ud. podrá usar en su computadora para aprender cualquier tipo de programa. A través de instrucciones fáciles Ud. podrá seguir paso a paso las instrucciones en la pantalla sin tener que leer los complicados manuales que muchas veces vienen con los programas. La compañía afirma que el 95% de sus clientes están satisfechos con la facilidad y la conveniencia de aprender a usar los programas de computadora de esta forma.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are watching a television program in Mexico. Your hear the host of the program say:

[La maestra lee] Pica los tomatillos en cuartos. En una sartén grande calienta el aceite a temperatura media. Añade la cebolla y el ajo, y revuélvelos hasta que se empiecen a dorar. Reduce la temperatura y añade el comino y el polvo de chile a la sartén. Poco a poco disuelve la salsa de tomate. Cuando hierva, quita la salsa de la hornilla. Deja que se enfríe. Colócala en una licuadora con el resto de los ingredientes hasta hacerla puré. Sazona al gusto.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are in Costa Rica and hear this announcement on television:

[La maestra lee] Felicitaciones: ya puedes aprender a hablar una lengua extranjera desde tu casa. Nuestros libros y programas de computadoras pueden ser usados en cualquier lugar y en cualquier momento, y así podrás aprender tu lengua favorita. Como sabes, es muy importante saber varios idiomas y cuando viajes te será muy valioso. Ya no tendrás que buscar excusas para no poder practicar con éxito. No te pierdas esta oportunidad. Si no te gusta el curso, puedes devolvérnoslo.`,
    psource: TDC_SRC
  },
  huerta: {
    passage: `Dolores Huerta: el trabajo de una vida

Se dice que los ojos muestran mucho de la experiencia de una persona. Cuando miramos los ojos de Dolores Huerta vemos la historia de una vida llena de tristezas y de triunfos. Sus ojos inspiran fuerza y esperanza, aspectos centrales de la misión de Dolores Huerta. Aunque tiene más de 75 años, la cofundadora de la Unión de Campesinos Unidos todavía es muy activa. Ella continúa organizando a los trabajadores y defendiendo los derechos de todos.

En el año 1962, César Chávez, cofundador del mismo sindicato y ella empezaron a luchar por condiciones adecuadas de higiene y de seguridad por las pensiones y los salarios justos para los trabajadores agrícolas. Lo principal de su movimiento era hacer lo necesario sin violencia, basado en su visión de hacer bien para el bienestar de todos. César Chávez y Dolores Huerta cambiaron una nación, luchando contra las malas e injustas condiciones de trabajo de los campesinos. A Chávez y a Huerta les costó mucho sacrificio personal este movimiento. Para avanzar su causa, llevaron vidas difíciles y austeras. Como consecuencia, les dedicaron menos tiempo a sus propias familias y vivieron con muy poco dinero para no usar los fondos financieros del movimiento. La lista de dificultades y victorias es larga.

Desde muy niña, Dolores Huerta vio la necesidad de mejorar las condiciones de vida de los trabajadores agrícolas. Estas ideas siempre estaban presentes en las discusiones de su familia. Su padre era sindicalista voluntario y era muy respetado como miembro de la legislatura del estado de Nuevo México. Su madre también era líder en la comunidad: en su casa ella insistía en que todos, hermanos y hermanas, dividieran igualmente los quehaceres del hogar. Por esa razón, Dolores piensa que su madre era feminista para su época. Su madre no dejaba que ninguna de las mujeres en la familia sirviera a los hombres, como era la costumbre en otras familias latinas.

A veces, a Dolores le molestaba que una de las consecuencias de su vida de activismo político y social fuera no tener tiempo para dedicarles a sus hijos. Le hubiera gustado pasar más tiempo con ellos, pero le resultó difícil. Fueron siempre muy pobres y a pesar de que ella no estaba en casa la mayor parte del tiempo, piensa que sus hijos llegaron a ser muy buenas personas. Insistía en que se les debiera enseñar a los hijos buenos valores, una conciencia social y no darle mucha importancia a las cosas materiales. Dolores pensaba que era importante enseñarles a sus hijos que ellos pudieran ayudar a los demás como lo hacía ella.

Cuando se le pregunta a Dolores Huerta cómo quiere ella ser recordada en el futuro, ella espera que la gente diga que fue una buena organizadora. En su vida quiso transmitir que se puede obtener buenos resultados cuando la gente se une para cambiar las cosas. Ella dice que quisiera dejar en todos la idea de que se puede hacer cambios en la sociedad sin violencia a través de la buena organización.`,
    psource: "Reading passage, Part 3a, June 2009 Comprehensive Spanish Regents"
  },
  rincon: {
    imgs: [
      { src: "img/q21-rincon-de-la-vieja.png",
        cap: "“Rincón de la Vieja” — reading selection for question 21, Comprehensive Examination in Spanish, June 2009",
        alt: "Boxed text in Spanish about Rincón de la Vieja National Park in the Guanacaste mountain range of Costa Rica, 27 km northeast of the city of Liberia: created by a federal law in 1973, about 14,000 hectares, it protects the environment and probably holds the largest wild population of the guaria morada, the national flower; it has great tourist potential for its scenic beauty and geology, diverse habitats shaped by altitude, rainfall and volcanic eruptions, 257 bird species, many mammals, abundant insects and beautiful butterflies." }
    ]
  },
  superborn: {
    imgs: [
      { src: "img/q22-superborn-restaurante.png",
        cap: "“SUPERBORN (Barcelona)” notice — reading selection for question 22, Comprehensive Examination in Spanish, June 2009",
        alt: "Boxed text in Spanish announcing Superborn, a new spot in Barcelona's Born district where you can savor salads, sandwiches, raciones and crepes; renowned chef Paco Guzmán designed the menu; the place has dark wood-and-iron decor yet is bright thanks to large windows, walls covered with murals and comic strips to read while eating, and the best music of the eighties and nineties; address Pasaje Mercantil 1, Barcelona, telephone 932 68 17 28, www.superborn.com." }
    ]
  },
  estrategias: {
    imgs: [
      { src: "img/q23-estrategias-proyectos.png",
        cap: "“Estrategias para manejar múltiples proyectos en menos tiempo” — reading selection for question 23, Comprehensive Examination in Spanish, June 2009",
        alt: "Boxed Spanish article listing five bold-faced strategies for handling multiple projects in less time: organize your papers and keep your desk in order; make short lists of the three most important projects; set yourself deadlines at least a day before your boss's date; pick up and answer phone and electronic messages only twice a day; and set aside an hour or two for internet searches instead of doing them one by one." }
    ]
  },
  hotel: {
    imgs: [
      { src: "img/q24-hotel-puerto-escondido.png",
        cap: "Hotel advertisement, Puerto Escondido, Oaxaca — reading selection for question 24, Comprehensive Examination in Spanish, June 2009",
        alt: "Boxed Spanish advertisement: if you travel to Puerto Escondido, Oaxaca, Club México Desconocido recommends this hotel, a beautiful Mediterranean building of only five rooms with ocean-view balconies, air conditioning, cable television, telephone, safe, parking and closed-circuit television; you will enjoy comfort, privacy and personalized service, the best view in town, near the main tourist street and heart of Puerto Escondido, steps from the best services (restaurants, clubs, banks, agencies) and from the pier where tour boats and fishing launches depart." }
    ]
  },
  deofi: {
    imgs: [
      { src: "img/q25-deofi-pintado.png",
        cap: "DEOFI S.A. advertisement — reading selection for question 25, Comprehensive Examination in Spanish, June 2009",
        alt: "Black-and-white advertisement reading 'Servicio de pintado plastificado en serie' with the slogan 'Nuestra misión es darle una mano... y de la mejor pintura.' in a black paint splash, and a bullet list: polyester powder paint; corrosion-resistant thanks to hot phosphatizing; varied, durable colors (textured and matte); raises your productivity; reduces your current cost; helps eliminate bottlenecks; the latest in industrial painting technology. Company DEOFI S.A., Av. Colonial 1740 - Lima, Telf.: 336-5466." }
    ]
  },
  antigua: {
    passage: `Antigua – ciudad histórica de Guatemala

“Antigua es la ciudad más romántica del mundo,” dijo Aldous Huxley sobre esta ciudad también llamada Ciudad de las Rosas. Es aquí donde encontramos un ambiente tranquilo y placentero y al mismo tiempo, una de las ciudades coloniales que mejor refleja la habilidad que tiene el hombre para enfrentarse y responder a la violencia que traen los terremotos. Se puede decir que las erupciones y los terremotos han tenido un impacto increíble en la historia de la ciudad que en un tiempo fue capital de la América Central.

La historia de Antigua es larga y llena de eventos desafortunados. Don Pedro de Alvarado derrotó a los cakchiqueles y fundó en 1524 la ciudad sobre las ruinas mayas de Iximiché. Las continuas luchas con los indígenas obligaron a trasladar la ciudad cerca del volcán Agua. En 1541 las inundaciones destruyeron la ciudad. En ese momento se decidió construir la nueva ciudad en el valle de Pancho, por donde pasa el Río Pensativo. En ese lugar, los habitantes podían disfrutar de la belleza natural y del clima suave rodeado de volcanes que se pueden ver desde cualquier lugar.

La docena de temblores, terremotos y epidemias de los siglos XVI al XVIII trajeron muchas dificultades a los pobladores de Antigua. Los tres terremotos de 1773 convencieron al rey Carlos III de abandonar la capital y trasladarla a un nuevo lugar. Este lugar es hoy la Ciudad de Guatemala de la Asunción. El antiguo nombre de La Muy Noble y Muy Leal Santiago de los Caballeros de Guatemala cambió para ser conocida como Antigua.

El gobierno pudo ayudar económicamente a la nueva capital con varias reconstrucciones, convirtiéndola en el siglo XVIII en un importante centro urbano de 60.000 habitantes. Su belleza era tan reconocida que se comparaba con ciudades como México o Lima. Pero Antigua es muy diferente, tiene menos habitantes y conserva hoy su estilo colonial con ruinas de conventos e iglesias y con las casas pintadas de alegres colores.

Siguiendo el modelo de construcción de muchas ciudades latinoamericanas, la ciudad creció alrededor de una gran plaza donde están la catedral, el Palacio Arzobispal, el Palacio de los Capitanes Generales, el Ayuntamiento y el Portal de las Panaderas. Las viviendas en las calles de piedra son grandes y de paredes gruesas, de una planta con patios con jardines y fuentes, balcones adornados de flores y una gran puerta de entrada. Declarada por las Naciones Unidas como Patrimonio de la Humanidad, el gobierno está obligado a conservar el estilo colonial de los hermosos edificios.

El estilo decorativo barroco les gustó a los indígenas mayas y lo incorporaron a su textilería y muebles. Son famosos los huipiles, camisas mayas decoradas con vivísimos colores. Las mujeres mayas trabajan en silencio pero hablan a través del uso de los colores, las figuras, las escenas de mitología y las escenas diarias en las telas de hermosas vestimentas. Un ejemplo del valor de estos vestidos es que las jóvenes le regalan a su futura suegra la mejor de sus creaciones.

De los más de 40 templos católicos que se construyeron, hay que visitar la Merced, Santa Catalina, Santa Clara, las Capuchinas. También se puede visitar San Francisco, donde reposan los restos del fraile Pedro, un religioso natural de Canarias, quien murió en Antigua en 1667. La gente viene de todas partes del país a la iglesia San Francisco para depositar ofrendas, flores y velas.

Aparte del turismo, la ciudad conserva la cultura. Es un placer escuchar leyendas mientras se está sentado alrededor de las fuentes de un refrescante patio de las antiguas casonas, palacios y conventos, algunos convertidos en hoteles lujosos, restaurantes y cafés. Se han restaurado museos y se han abierto galerías. Hay numerosas academias que enseñan el español, a las que asisten muchos jóvenes norteamericanos. Una herencia del pasado cultural es la Universidad Pontificia de San Carlos de Borromeo, que se encuentra en un edificio bien restaurado y que se considera la tercera universidad en importancia de la época colonial.`,
    psource: "Reading passage, Part 3c, June 2009 Comprehensive Spanish Regents"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-biblioteca-escena.png",
        cap: "Picture for writing task 33, Comprehensive Examination in Spanish, June 2009",
        alt: "Line drawing of a library reading room with tall shelves full of books: a man sits writing at a long table, a young person wearing glasses sits writing at the same table with papers in hand, and a woman stands at a slanted reading shelf leafing through an open book." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does your friend want you to do?",
    choices: [
      "take swimming lessons",
      "go fishing",
      "make restaurant reservations",
      "go to the movies"
    ],
    answer: 1,
    back: "(2) go fishing — \"Miguel y yo vamos a ir de pesca al lago. ¿Quieres acompañarnos?\" If they are lucky they will cook the fish (trout) for dinner."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What does this report describe?",
    choices: [
      "the first day of school",
      "activities for the Day of the Child",
      "a children's bicycle race",
      "the opening of a new theme park"
    ],
    answer: 1,
    back: "(2) activities for the Day of the Child — a week of free entertainment, rides and zoo admission in Mendoza \"para conmemorar el Día del Niño.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is this advice about?",
    choices: [
      "how to use the library more effectively",
      "how to get your homework done on time",
      "how to get along better with others",
      "how to take better notes in class"
    ],
    answer: 3,
    back: "(4) how to take better notes in class — \"Hay varios secretos para que puedas tomar buenos apuntes\": read ahead, listen carefully, write only brief notes of the most important points, and ask questions."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. Who is Satcha Pretto?",
    choices: [
      "a fashion designer",
      "a news reporter",
      "a model",
      "an athlete"
    ],
    answer: 1,
    back: "(2) a news reporter — \"la periodista Satcha Pretto se encargará de las últimas noticias de eventos mundiales\" as lead presenter of Primer Impacto: Fin de semana on Univisión."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is the host talking about?",
    choices: [
      "heating a home",
      "taking care of pets",
      "decorating a room",
      "making a photo album"
    ],
    answer: 2,
    back: "(3) decorating a room — the host explains how to make an all-white room cozier with plants, ethnic touches, family photos and a round or square rug on wood floors."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What does the announcer say about Alex Ubago’s new album?",
    choices: [
      "Many of the songs in this album are from his previous CDs.",
      "The new album was dedicated to his children.",
      "Sales of his new album were higher than expected.",
      "Several well-known musicians worked with him on the album."
    ],
    answer: 3,
    back: "(4) Several well-known musicians worked with him on the album — \"Ha contado con la colaboración de varios artistas como la cantante Luz Casal y el baterista Enzo Filippone.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What does Maria’s father hope his daughter will do?",
    choices: [
      "continue to help others",
      "travel as much as possible",
      "get a college diploma",
      "learn another language"
    ],
    answer: 0,
    back: "(1) continue to help others — \"quiero que me prometas que continuarás tu trabajo en la comunidad que ha beneficiado a tantas personas.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is this announcement about?",
    choices: [
      "the return of an actress to television",
      "the cancellation of a news program",
      "the success of a new record company",
      "the filming of a new music video"
    ],
    answer: 0,
    back: "(1) the return of an actress to television — after two years away, Cuban actress Aylin Mujica \"regresa al mundo del espectáculo con la telenovela mexicana 'Agua y aceite'.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What can you get at this center?",
    choices: [
      "discounted housewares",
      "travel guides",
      "genuine handcrafted items",
      "samples of various ethnic foods"
    ],
    answer: 2,
    back: "(3) genuine handcrafted items — at the Casa de las Artesanías de Oaxaca you can buy \"artesanías auténticas de toda clase\": indigenous textiles, hand-painted wooden articles, silver and ceramics."
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué información da esta guía?",
    choices: [
      "cómo usar el teléfono celular responsablemente",
      "cómo hacer una llamada de larga distancia",
      "cómo comprar el mejor teléfono para sus necesidades",
      "cómo obtener información sobre las diferentes compañías telefónicas"
    ],
    answer: 0,
    back: "(1) cómo usar el teléfono celular responsablemente — \"Es una guía de uso responsable del teléfono celular... un manual de recomendaciones para hacer buen uso, con responsabilidad y respeto, del aparato telefónico.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué se puede ver en la exposición de arte de Dalí?",
    choices: [
      "una guía para aprender a pintar",
      "un libro de obras musicales escritas por Dalí",
      "unas fotos de su familia que habían desaparecido",
      "una variedad de obras que hizo durante su vida"
    ],
    answer: 3,
    back: "(4) una variedad de obras que hizo durante su vida — se exhibieron \"las diferentes expresiones de su arte como pinturas, dibujos, diseños de escenario, libros y manuscritos\" y hasta el dibujo animado Destino."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué tipo de programa se va a presentar?",
    choices: [
      "una obra musical",
      "una obra de ciencia ficción",
      "un reportaje sobre deportes",
      "un documental sobre animales"
    ],
    answer: 1,
    back: "(2) una obra de ciencia ficción — Los 4.400 es una \"exitosa obra de ficción... llena de misterio, que narra el regreso a la Tierra de 4.400 personas desaparecidas\" con conocimientos científicos."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué ofrece esta compañía?",
    choices: [
      "clases de computadoras en varias ciudades",
      "servicios para arreglar su computadora",
      "manuales para aprender a diseñar su propia computadora",
      "discos para saber cómo usar los programas de computadoras"
    ],
    answer: 3,
    back: "(4) discos para saber cómo usar los programas de computadoras — la compañía ofrece \"discos compactos que Ud. podrá usar en su computadora para aprender cualquier tipo de programa\" paso a paso, sin manuales complicados."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿De qué trata este programa?",
    choices: [
      "un manual de decoración",
      "una receta de cocina",
      "un libro de salud",
      "una charla de una película"
    ],
    answer: 1,
    back: "(2) una receta de cocina — el presentador da instrucciones de cocina: picar los tomatillos, calentar el aceite, dorar la cebolla y el ajo, disolver la salsa de tomate y hacerla puré en la licuadora."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué están anunciando en la televisión?",
    choices: [
      "una compañía de seguros",
      "una librería nueva",
      "un producto para la limpieza",
      "un programa para aprender idiomas"
    ],
    answer: 3,
    back: "(4) un programa para aprender idiomas — \"ya puedes aprender a hablar una lengua extranjera desde tu casa\" con libros y programas de computadora; si no te gusta el curso, puedes devolverlo."
  },
  // ----- Part 3a: Long reading passage, Spanish questions (Q16-20) -----
  { ...STIMULI.huerta,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Qué hace todavía Dolores Huerta a su edad?",
    choices: [
      "Continúa escribiendo su biografía.",
      "Continúa asistiendo a la universidad.",
      "Continúa trabajando en una oficina de salud pública.",
      "Continúa ayudando a los trabajadores agrícolas."
    ],
    answer: 3,
    back: "(4) Continúa ayudando a los trabajadores agrícolas — aunque tiene más de 75 años, \"Ella continúa organizando a los trabajadores y defendiendo los derechos de todos.\""
  },
  { ...STIMULI.huerta,
    type: "mc",
    label: "Q17",
    stem: "Q17. Según el artículo, ¿cuál fue un aspecto importante de este movimiento?",
    choices: [
      "poder educar a más estudiantes",
      "hacer cambios de una forma pacifista",
      "obtener dinero para las escuelas pobres",
      "recordar la historia de los países de los inmigrantes"
    ],
    answer: 1,
    back: "(2) hacer cambios de una forma pacifista — \"Lo principal de su movimiento era hacer lo necesario sin violencia, basado en su visión de hacer bien para el bienestar de todos.\""
  },
  { ...STIMULI.huerta,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué influyó a Dolores Huerta a llevar una vida de activismo?",
    choices: [
      "sus experiencias en el ejército",
      "las recomendaciones de sus vecinos",
      "las ideas y las acciones de sus padres",
      "sus estudios fuera del país"
    ],
    answer: 2,
    back: "(3) las ideas y las acciones de sus padres — su padre era sindicalista voluntario y legislador en Nuevo México; su madre era líder de la comunidad y feminista para su época."
  },
  { ...STIMULI.huerta,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según el artículo, ¿qué sacrificio tuvo que hacer Dolores Huerta para avanzar el movimiento?",
    choices: [
      "No pudo pasar mucho tiempo con su familia.",
      "No pudo viajar al extranjero.",
      "No pudo aprender un nuevo idioma.",
      "No pudo enviar a sus hijos a la universidad."
    ],
    answer: 0,
    back: "(1) No pudo pasar mucho tiempo con su familia — \"les dedicaron menos tiempo a sus propias familias y vivieron con muy poco dinero para no usar los fondos financieros del movimiento.\""
  },
  { ...STIMULI.huerta,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué quiere Dolores que la gente piense de ella?",
    choices: [
      "que supo organizar bien a los trabajadores",
      "que ayudó a construir nuevos hospitales",
      "que fue una buena maestra de colegio",
      "que pudo abrir muchas compañías"
    ],
    answer: 0,
    back: "(1) que supo organizar bien a los trabajadores — \"ella espera que la gente diga que fue una buena organizadora\" y que se pueden hacer cambios sin violencia a través de la buena organización."
  },
  // ----- Part 3b: Realia, English questions (Q21-25) -----
  { ...STIMULI.rincon,
    type: "mc",
    label: "Q21",
    stem: "Q21. What does this information tell us about this park?",
    choices: [
      "The national flower of Costa Rica is abundantly found in this park.",
      "The park was redesigned to accomodate more visitors.",
      "Tourists are temporarily prohibited from visiting this park.",
      "Insecticides are used in this park to help limit dangerous diseases."
    ],
    answer: 0,
    back: "(1) The national flower of Costa Rica is abundantly found in this park — \"En este parque hay, probablemente, la mayor cantidad en estado natural de la guaria morada, la flor nacional del país.\" (Choice 2 keeps the exam's printed spelling \"accomodate.\")"
  },
  { ...STIMULI.superborn,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is Superborn?",
    choices: [
      "an artist's studio",
      "a movie theater",
      "a school for design",
      "a new restaurant"
    ],
    answer: 3,
    back: "(4) a new restaurant — \"Hay un nuevo espacio en el barrio del Born donde se puede saborear ensaladas, bocadillos, raciones y crepés,\" with a menu designed by chef Paco Guzmán."
  },
  { ...STIMULI.estrategias,
    type: "mc",
    label: "Q23",
    stem: "Q23. What advice is offered in this article?",
    choices: [
      "how to apply for college",
      "how to clean a home more effectively",
      "how to organize your time at work",
      "how to find specific sites on the Internet"
    ],
    answer: 2,
    back: "(3) how to organize your time at work — strategies for handling multiple projects in less time: organize papers, make short lists, set deadlines, batch messages, and set aside time for searches."
  },
  { ...STIMULI.hotel,
    type: "mc",
    label: "Q24",
    stem: "Q24. Where is the hotel located?",
    choices: [
      "just outside of town",
      "near the ocean",
      "in a desert region",
      "on top of a mountain"
    ],
    answer: 1,
    back: "(2) near the ocean — the five rooms have \"balcón al océano,\" and the hotel is steps from the pier \"de donde salen los barcos de paseo y lanchas de pesca.\""
  },
  { ...STIMULI.deofi,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is being advertised?",
    choices: [
      "a jewelry store",
      "a digital camera",
      "a gardening catalog",
      "a painting service"
    ],
    answer: 3,
    back: "(4) a painting service — DEOFI S.A. advertises \"Servicio de pintado plastificado en serie,\" an industrial plastified painting service using polyester powder paint."
  },
  // ----- Part 3c: Second reading passage, English questions (Q26-30) -----
  { ...STIMULI.antigua,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which description of Antigua is best supported by the passage?",
    choices: [
      "It is a city that has been ruled by several European nations.",
      "It is a city that is known for its modern rapid-transit system.",
      "It is a city that has been preserved in classical literature.",
      "It is a city that has survived several natural disasters."
    ],
    answer: 3,
    back: "(4) It is a city that has survived several natural disasters — floods, a dozen tremors, earthquakes and epidemics from the 16th to the 18th centuries shaped Antigua's history, yet it preserves its colonial style."
  },
  { ...STIMULI.antigua,
    type: "mc",
    label: "Q27",
    stem: "Q27. According to the passage, what posed the greatest threat to the survival of this city?",
    choices: [
      "its lack of water",
      "its location near the sea",
      "earthquakes and volcanic eruptions",
      "a short growing season for planting"
    ],
    answer: 2,
    back: "(3) earthquakes and volcanic eruptions — \"las erupciones y los terremotos han tenido un impacto increíble en la historia de la ciudad,\" including the three earthquakes of 1773."
  },
  { ...STIMULI.antigua,
    type: "mc",
    label: "Q28",
    stem: "Q28. Who ordered the relocation of the city?",
    choices: [
      "a powerful Mayan ruler",
      "don Pedro de Alvarado",
      "an ancestor of Aldous Huxley",
      "King Carlos III"
    ],
    answer: 3,
    back: "(4) King Carlos III — \"Los tres terremotos de 1773 convencieron al rey Carlos III de abandonar la capital y trasladarla a un nuevo lugar,\" today's Ciudad de Guatemala de la Asunción."
  },
  { ...STIMULI.antigua,
    type: "mc",
    label: "Q29",
    stem: "Q29. The main feature in the construction of the city was its",
    choices: [
      "central plaza",
      "underground tunnels",
      "system of waterways",
      "roads and bridges"
    ],
    answer: 0,
    back: "(1) central plaza — \"la ciudad creció alrededor de una gran plaza\" with the cathedral, the Archbishop's Palace, the Palace of the Captains General, the City Hall and the Portal de las Panaderas."
  },
  { ...STIMULI.antigua,
    type: "mc",
    label: "Q30",
    stem: "Q30. According to the passage, where did the Mayans use the decorative baroque style?",
    choices: [
      "in their monuments",
      "in their temples",
      "in their clothing and furniture",
      "in their musical instruments"
    ],
    answer: 2,
    back: "(3) in their clothing and furniture — \"El estilo decorativo barroco les gustó a los indígenas mayas y lo incorporaron a su textilería y muebles,\" such as the brightly colored huipiles."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). Your pen pal has asked you about your favorite sport. In Spanish, write a letter to your pen pal discussing your favorite sport. You may wish to include:
• what the sport is
• why you like this sport
• whether it is a team sport or an individual sport
• where this sport is played (in school, outside, etc)
• when it is played
• skills needed to play
• favorite players or team
• whether you play this sport
• cost of playing this sport
• future plans for playing this sport

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Hola Juan,
Quiero hablarte de un nuevo deporte que estoy practicando este año. Tenemos una nueva piscina en el colegio y decidí competir en el equipo de natación. ¿Recuerdas que antes nunca me metía en el agua? ¡No puedo creerlo, pero me encanta nadar! Nuestro entrenador participó en las últimas Olimpiadas. Practicamos todos los días después de las clases y las competencias tienen lugar los viernes por la noche. Me gusta mucho este deporte porque es bueno para mi cuerpo y también es barato. También se puede ver a mucha gente interesante. Espero continuar el año que viene y mejorar mis habilidades en el agua.
Abrazos y espero verte pronto
Miguel

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). Your school is preparing for Career Day. In Spanish, write a journal entry describing your ideas about a career that interests you. You may wish to include:
• what profession or occupation interests you the most
• why you are interested in that kind of job
• what activities are involved in that occupation
• potential for earning money
• where to study or prepare for that career
• someone you know in that field
• work schedule
• where you will work
• personal qualities needed for that kind of work
• what other people think about that occupation

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

¿Qué quiero hacer con mi vida? Me interesaría muchísimo ser médico porque es importante ayudar a la gente. Mi madre y yo somos voluntarios en el hospital cerca de mi casa y me parece que este trabajo es exactamente lo que deseo hacer en el futuro. Mi tío es pediatra en la ciudad y él me ha dicho que ésta es una carrera noble. Yo sé que esta carrera requiere muchos años de estudios y sacrificios. Por supuesto, se trabaja muchas horas, incluyendo noches y fines de semana. Pero las recompensas no tienen igual.
Creo que me gustaría trabajar en el hospital de la capital. Es muy moderno y los médicos tienen una reputación excelente.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Susana y yo estamos estudiando en la biblioteca para nuestros exámenes finales del año escolar. Tenemos que aprender de memoria las fórmulas científicas para el examen de química. El profesor es muy exigente y no nos permite usar nuestros apuntes. Es casi imposible concentrarse en este lugar porque una señora está haciendo mucho ruido con sus libros y su chicle. Espero que ella se vaya pronto. Después de estudiar una hora más, nosotros vamos a encontrarnos con nuestros amigos en la heladería cercana. Estaremos muy contentos cuando se terminen todos estos exámenes y podremos disfrutar de las vacaciones de verano en el campo.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to the report, where will thousands of children and their parents gather for the holiday celebration?",
    choices: [
      "at the Mendoza city zoo",
      "at a new amusement park",
      "at the Malvinas Argentinas Stadium",
      "at the main city plaza"
    ],
    answer: 2,
    back: "(3) at the Malvinas Argentinas Stadium — \"Miles de chicos llegarán al Estadio Malvinas Argentinas con sus padres para participar en el día festivo organizado por el gobierno.\" (Zoo admission is free that week, but the gathering is at the stadium.)"
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S2",
    stem: "S2. According to the announcer, when will Alex Ubago's third album, “Aviones de cristal,” go on sale?",
    choices: [
      "on September 25",
      "at the end of his concert tour",
      "in three more years",
      "on his birthday"
    ],
    answer: 0,
    back: "(1) on September 25 — \"Viajar contigo\" is the first single from \"su tercer álbum, 'Aviones de cristal', que saldrá el 25 de septiembre,\" with twelve new songs."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S3",
    stem: "S3. What does the advertisement promise shoppers at the Casa de las Artesanías de Oaxaca?",
    choices: [
      "free delivery to their hotels",
      "quality items at low prices",
      "guided tours of the artisans' workshops",
      "discounts for large tourist groups"
    ],
    answer: 1,
    back: "(2) quality items at low prices — \"La pregunta es, ¿cómo comprar objetos de calidad a precios bajos? La respuesta, ¡vengan a la Casa de las Artesanías de Oaxaca!\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S4",
    stem: "S4. Según el reportaje, ¿qué pasó con el dibujo animado “Destino” que Dalí estaba haciendo para Walt Disney?",
    choices: [
      "Fue terminado por el mismo Dalí en los años veinte.",
      "Se exhibió en los cines de toda Europa.",
      "Fue destruido en un incendio en un museo.",
      "Se había perdido, pero fue encontrado y reproducido por medio de una computadora."
    ],
    answer: 3,
    back: "(4) Se había perdido, pero fue encontrado y reproducido por medio de una computadora — Dalí nunca terminó este dibujo animado muy corto; \"se había perdido pero fue encontrado recientemente y fue reproducido por medio de una computadora.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "S5",
    stem: "S5. Según las instrucciones del programa, ¿qué se debe hacer con la salsa cuando hierva?",
    choices: [
      "añadirle más aceite caliente",
      "quitarla de la hornilla y dejar que se enfríe",
      "servirla inmediatamente con los tomatillos",
      "ponerla en el horno por diez minutos"
    ],
    answer: 1,
    back: "(2) quitarla de la hornilla y dejar que se enfríe — \"Cuando hierva, quita la salsa de la hornilla. Deja que se enfríe.\" Después se hace puré en la licuadora con el resto de los ingredientes."
  },
  { ...STIMULI.huerta,
    type: "mc",
    label: "S6",
    stem: "S6. Según el artículo, ¿en qué insistía la madre de Dolores Huerta en su casa?",
    choices: [
      "en que las mujeres de la familia sirvieran a los hombres",
      "en que los hijos trabajaran en la legislatura del estado",
      "en que todos, hermanos y hermanas, dividieran igualmente los quehaceres del hogar",
      "en que la familia no hablara de política durante las discusiones"
    ],
    answer: 2,
    back: "(3) en que todos, hermanos y hermanas, dividieran igualmente los quehaceres del hogar — por eso Dolores piensa que su madre \"era feminista para su época\"; no dejaba que ninguna mujer de la familia sirviera a los hombres."
  },
  { ...STIMULI.rincon,
    type: "mc",
    label: "S7",
    stem: "S7. According to the information, how was Rincón de la Vieja National Park established?",
    choices: [
      "It was created by a federal law in 1973.",
      "It was donated by a private landowner.",
      "It was founded by the city of Liberia.",
      "It was set aside by a volcanic research institute."
    ],
    answer: 0,
    back: "(1) It was created by a federal law in 1973 — \"Fue creado por una ley federal en 1973. Cuenta con una extensión de unas 14.000 hectáreas,\" 27 km northeast of the city of Liberia."
  },
  { ...STIMULI.superborn,
    type: "mc",
    label: "S8",
    stem: "S8. According to the notice, who designed the menu at Superborn?",
    choices: [
      "a famous muralist from the Born district",
      "a 1980s rock musician",
      "the owner of a comic-strip magazine",
      "the well-known chef Paco Guzmán"
    ],
    answer: 3,
    back: "(4) the well-known chef Paco Guzmán — \"El reconocido chef Paco Guzmán ha diseñado la carta.\" The walls carry murals and comic strips, and 80s-90s music plays, but the menu is the chef's."
  },
  { ...STIMULI.deofi,
    type: "mc",
    label: "S9",
    stem: "S9. According to the DEOFI S.A. advertisement, why does its paint resist corrosion?",
    choices: [
      "because it is applied under water",
      "because of its hot phosphatizing system",
      "because it uses natural plant dyes",
      "because it is baked in a wood oven"
    ],
    answer: 1,
    back: "(2) because of its hot phosphatizing system — \"Resistente a la corrosión gracias al sistema de Fosfatizado en caliente,\" using polyester powder paint in varied textured and matte colors."
  },
  { ...STIMULI.antigua,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, what do young Mayan women traditionally give their future mothers-in-law?",
    choices: [
      "a basket of flowers and candles",
      "a painted colonial-style chair",
      "the best of their woven creations",
      "a book of family legends"
    ],
    answer: 2,
    back: "(3) the best of their woven creations — \"las jóvenes le regalan a su futura suegra la mejor de sus creaciones,\" the brilliantly colored huipiles that speak through colors, figures and scenes."
  }
];
