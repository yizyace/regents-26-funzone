// June 2006 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2006/.
// Printed quirks kept verbatim: Q16 stem lacks its opening "¿"; "cantando
// “¿Por qué te vas”?" punctuation order; "llamado“Federico”" missing space;
// Q30 stem "contribution to show?" (missing "the"); "super estrella",
// "super adicta", "Fé", "cualquiera emisora", "las Grutas de Tulum",
// "futurísticos", "temporarios" all as printed.

const TDC_SRC = "Teacher Dictation Copy, June 2006 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to a Spanish radio station in Spain and hear this:

[La maestra lee] Hoy a las 9:00 de la mañana se celebrará su “Gran Día Familiar”. Está invitado por el Club de Jóvenes Universitarios para que se divierta junto a su familia. Habrá competencias de juegos, música, diversiones para los niños, comida y refrescos. Venga y traiga a toda su familia desde los abuelitos hasta el bebé. Todo es gratis. Para más información, llame al club al teléfono 833-2303.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You hear this information on the radio:

[La maestra lee] Se debe tomar poco sol, y evitarlo entre las horas de más intensidad, que es entre las once de la mañana y las 3 de la tarde. Siempre se debe usar un protector solar. El protector solar debe ser a prueba de agua, para no tener que reaplicarlo cada vez que entre y salga del agua. Es importante también usar un sombrero. Y una vez bajo el sol, hay que voltearse varias veces para no quemarse.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] While in Venezuela you hear a newscaster say this:

[La maestra lee] La aparición de la televisión hizo pensar que los días de la radio estaban contados. Lejos de desaparecer, la radio se mantuvo en pie gracias a sus fieles oyentes. Hoy en plena revolución tecnológica, este medio de comunicación tiene las ventajas que ofrece el Internet para superar algunas de sus limitaciones. Miles de estaciones de radio se pueden escuchar a través de la Red.
El Internet le permite a cualquiera emisora de radio extender sus emisiones a cualquier punto del planeta con conexión al Internet. Una ventaja que ofrece la Red a los que escuchan radio es que, además de grabar los programas, pueden escoger el momento en que quieren escucharlos.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] A friend is reading a letter that he received. He says:

[La maestra lee] Estudiar en la Universidad de Madrid, una universidad fundada hace 183 años, es una magnífica oportunidad para profundizar su conocimiento de la lengua, la literatura y la cultura española. Nuestro centro ha sido la primera institución extranjera reconocida por las autoridades educativas de la Comunidad de Madrid. Dentro y fuera de la Universidad usted podrá hablar y escuchar el castellano actual además de convivir con otros estudiantes, españoles e internacionales. Si solamente desea perfeccionar su español durante el verano, le ofrecemos también Cursos de Perfeccionamiento.
Después de leer el folleto adjunto, si desea más información, por favor póngase en contacto con nosotros como le sea más conveniente: por teléfono, por fax o por correo electrónico.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are in the bank when you overhear one of the tellers talking to a customer. He says:

[La maestra lee] Recuerde que cuando Ud. compra cheques de viajero, debe hacer lo siguiente. Debe firmar los cheques en el espacio indicado después de recibirlos. Solamente debe contrafirmar el cheque cuando lo haga efectivo y en presencia del aceptante. Debe proteger estos cheques como si fueran dinero en efectivo. No se realizará ningún reembolso si no ha cumplido con estas condiciones. Que tenga un buen viaje.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are in Madrid and are watching a health program on television. You hear:

[La maestra lee] Según los estudios científicos es bueno ser optimista ya que los optimistas son más felices y tienen más éxito. Puedes aprender a ser optimista y ver el mundo color de rosa si sigues estos pasos: (1) Concéntrate en el problema que tienes que resolver sin pensar en lo negativo. (2) Concéntrate en lo positivo en ti mismo y no te critiques demasiado. (3) Acepta la realidad y recuerda que los obstáculos son temporarios y que van a pasar. (4) Ten sentido del humor y ríe con frecuencia para moderar tus emociones.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] Your Spanish friend reads to you this announcement from a Spanish newspaper in Puerto Rico:

[La maestra lee] Con el fin de promover la creación poética entre los jóvenes, este periódico anuncia la convocatoria para su segundo certamen de poesía. Esta competencia se hará de las fechas del 15 de junio al 15 de agosto. Habrá un premio de $1,500. El poema premiado se publicará en este periódico.
Pueden participar las personas residentes en Puerto Rico de 18 a 30 años de edad. Cada participante podrá enviar un poema o un conjunto de poemas en lengua española que no se exceda de más de 15 páginas. El autor debe utilizar un seudónimo. Para más información comuníquese con las oficinas de este periódico.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] While listening to a Spanish radio station, you hear this information:

[La maestra lee] Una poderosa nevada azotó partes del nordeste de EE.UU. sepultando la región bajo una capa de nieve, escarcha y hielo, amenazando comunidades en la costa del Atlántico y dejando a miles de viajeros en los aeropuertos de todo el país. La tempestad obligó a las aerolíneas a cancelar cientos de vuelos en los tres aeropuertos de la zona metropolitana de Nueva York y en la región de Nueva Inglaterra. Se pronostica que el intenso frío continuará por unos días.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] While you are in Spain, your host family explains one of their traditions to you. You hear:

[La maestra lee] Curiosamente, la tradición—adoptada por los españoles—de comer las doce uvas al dar las doce campanadas de medianoche el 31 de diciembre, surgió únicamente por necesidad económica. Durante el año de 1909 hubo una cosecha de tantísimas uvas, que los cosecheros inventaron la tradición. ¿El resultado? Lograron deshacerse del gran número de uvas.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to a commercial on a Spanish-speaking television station and you hear the announcer say:

[La maestra lee] Este sábado a las ocho de la noche verán un gran programa de televisión. Con el talento musical de Willie Colón, Juanes, Gloria Estefan y más, ustedes pueden escuchar las canciones populares del mundo latino. Si les gustan los ritmos de moda de Latinoamérica vean este programa el sábado desde las ocho hasta las diez de la noche.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] Your Mexican host mother is telling you about some plans for tomorrow. She says:

[La maestra lee] Tal vez para el desayuno mañana les voy a preparar tamales rellenos con cerdo, frijoles y pimentones jalapeños. Hacer los tamales toma bastante tiempo. Primero usted tiene que cocinar la carne y desmenuzarla. Luego se le añaden los condimentos, y se cocina por largo tiempo. Después se mezcla la harina de maíz, con la grasa y se la extiende en las hojas de las mazorcas. Luego se pone la carne de relleno encima de la harina de maíz. Finalmente, se ponen todos los tamales en una gran olla y se hierven por una hora. Si no ha comido un tamal, debería probar uno; pero recuerde que no se comen las hojas de la mazorca.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You hear this announcement on the radio:

[La maestra lee] Aprenda inglés fácilmente en la comodidad de su casa con el moderno método de enseñanza en video. Con sólo una hora diaria, toda la familia podrá aprender inglés sin tener que salir de la sala. Llame pronto para recibir más información sobre el costo de nuestro curso “Inglés en el hogar.” Garantizamos resultados en seis meses.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] A friend in your Spanish class gives an oral presentation and says:

[La maestra lee] Después de grabar un nuevo álbum, cumplir con todas sus tareas escolares y actuar en vivo por todo el mundo, pensarías que Mandy Moore no tiene tiempo para navegar en la Red. Pues te equivocas. Es super adicta a la computadora, confiesa la sensación musical. Cuando no visita sitios en busca de las últimas noticias sobre sus grupos musicales y actores favoritos, esta fanática organiza fiestas cibernéticas con sus amigos y al mismo tiempo, envía un promedio de 60 mensajes electrónicos al día.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to a radio program where advice is given to callers with questions or problems. You hear:

[La maestra lee] Gracias, Señorita Ayala, por pedir información sobre el viaje que piensa hacer pronto. Le aconsejamos que si usted y sus amigos tienen entre las edades de 17 a 30 años existe una agencia llamada Kontiki Tours que es excelente. Esta agencia organiza viajes para jóvenes. Estas giras los llevan a visitar los lugares de más interés turístico de cada país sin olvidarse de los gustos de la gente joven. Además los orienta y tienen paseos en las noches y excursiones especiales.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a program about tourism in Mexico and hear this information:

[La maestra lee] A aproximadamente una hora de Mérida, le espera una ventana a la cultura maya. Conocida como la “Ruta Puuc”, este recorrido incluye los sitios arqueológicos de Uxmal, Kabah, y las Grutas de Tulum. En ellos se pueden encontrar estructuras totalmente restauradas, otras en proceso y algunas aún cubiertas de hierbas, árboles y vegetación densa. Estas últimas se parecen mucho a las que los primeros exploradores encontraron a finales del siglo pasado.`,
    psource: TDC_SRC
  },
  mana: {
    passage: `El grupo Maná, de gira con su nuevo álbum “Revolución de amor”

Maná es una de las bandas de rock latino más populares en la historia. Ha trascendido sus raíces mexicanas, de las cuales sus miembros están muy orgullosos, con una capacidad poética para expresar las cosas a las cuales ellos dan más importancia en la vida, tal como la ecología, la pobreza, y la justicia. ¡Y lo hacen sin sacrificar los elementos que emocionan a los admiradores del rock!

Después de una larga espera, el grupo Maná estrena su nuevo álbum lleno de nuevos ritmos musicales. “Sabemos que nuestro público había estado esperando este álbum desde el lanzamiento de “Sueños Líquidos” en 1997. Lo que sucede es que no participamos en el concepto de lanzar discos cada año solamente para hacer dinero. Para nosotros es más importante dedicarle el tiempo necesario a cada uno de los discos que creamos y eso hace que nuestros seguidores puedan apreciarlo más”, expresa Fher de Maná. El famoso grupo es parte de lo que Fher llama “anti estrellas de rock”. Ellos dan más importancia a la música que al estilo de vida. Y eso es lo que nos ofrece Maná en su nueva producción “Revolución de amor”.

Los ganadores de múltiples premios Grammy contribuyen en el área de la composición de la parte de tres de sus miembros y verdaderamente colaboran entre todos en la selección de sus temas. La voz inconfundible de Fher domina canciones idealistas como “Justicia, Tierra y Libertad” y “Pobre Juan”. Además “Revolución de amor” cuenta con dos de las grandes estrellas de la música latina: Carlos Santana y el legendario Rubén Blades.

“Carlos ha influenciado a una nueva generación de guitarristas latinos”, dijo el guitarrista Sergio Vallín. “Desde el principio tuvimos una química especial. También fue maravilloso trabajar con Rubén, respetamos inmensamente el trabajo que ha hecho como persona y como músico”, añadió.

Según los críticos profesionales, con este nuevo álbum los miembros de este grupo, Fher, Alex, Sergio, y Juan, han hecho su mejor disco hasta la fecha. Con las canciones “Fé” y “Nada que Perder”, Alex no solamente sobresalió como baterista sino también como cantante. Sergio imita el estilo de George Harrison cantando “¿Por qué te vas”? Las canciones del álbum, “Revolución”, incluyen baladas, ritmos salseros y hasta el rock and roll puro y duro; todo con suficiente electricidad e integridad para convertir este material en uno de los logros más importantes de la música en español del nuevo milenio.

“Cuando terminemos la gira con Santana, nos tomamos un año libre y descansamos”, dijo Alex González. “Miramos cosas buenas y malas, y escribimos muchísimas canciones. Y simplemente nos decimos, no toques con tu cabeza, toca con el corazón, súbete y empieza a darle con todo lo que tengas”.

Sobre el secreto del éxito lo describen de la siguiente manera: “lo que es interesante de la banda es que no contamos con un estilo fijo, que nos limitaría”, confiesa Fher. “Es por eso que todos actuamos como nuestros propios productores, no contamos con estructura ni convenciones que nos limiten, decimos lo que sentimos”.

En fin, “Revolución de amor” es una vigorosa declaración melódica, rítmica, emocional y política, sobre una música que tiene su foro en las fiestas de barrio y las calles.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 16, 2006"
  },
  consejos: {
    imgs: [
      { src: "img/q21-consejos-examen.png",
        cap: "Advice column for nervous exam takers — reading selection for question 21, Comprehensive Examination in Spanish, June 2006",
        alt: "Shaded text box in Spanish addressed to someone who has bitten their nails and finished all the coffee in the house from nerves: the exam is in a few hours and one question fills your mind — will I get in? The anguish is behind you, along with kilometers of lines reviewed a thousand times to do well on the exam. Relax, breathe deeply, and count to ten. Only you know whether your preparation — in an academy, a study group, or boldly on your own — guarantees you can begin a university career. Here we have offered some practical, easy-to-follow tips so you will have no problem at the very moment of the exam." }
    ]
  },
  mireaccion: {
    imgs: [
      { src: "img/q22-mireaccion.png",
        cap: "“mireacción.com” web site notice — reading selection for question 22, Comprehensive Examination in Spanish, June 2006",
        alt: "Boxed text in Spanish: Do you want to congratulate someone on their class presentation but feel uncomfortable? Now you can do it through mireacción.com, the site where you can send e-mails to anyone, since it reveals neither your name nor your e-mail address. Although it may seem a bit cowardly, it can give you the chance to offer your opinions. Mi reacción is the site that helps you release all those positive ideas you have about the people around you; the anonymous messages will help the person who receives them feel encouraged. The person who receives the message will never know who it is from because it will be sent from mireacción.com — there is no way to find out who sent it." }
    ]
  },
  galicia: {
    imgs: [
      { src: "img/q23-galicia-irlanda.png",
        cap: "“Las relaciones entre Galicia e Irlanda” article — reading selection for question 23, Comprehensive Examination in Spanish, June 2006",
        alt: "Boxed article in Spanish titled Las relaciones entre Galicia e Irlanda: Galicia, a region in northern Spain, and Ireland have a great number of affinities and parallels. Their original names, Galciia and Gaeilge, seem to share the same Celtic root Gal. A legend tells of Breoghan, leader of the Gaels, one of the Celtic tribes, who founded the city of Coruña; from there his son Itho set out for an island visible from a tower and reached Ireland with some of his people. Although this story has impressed many for more than eight centuries, the connections between Galicia and Ireland have existed since prehistoric times: a rich folklore with great similarities, journeys to sacred places in each country, a rural economy, and a seafaring life. Both have preserved a language and a literature of Celtic origin whose oral character has kept legends and mythological traditions alive." }
    ]
  },
  agua: {
    imgs: [
      { src: "img/q24-agua-de-moda.png",
        cap: "“El agua de moda en los restaurantes más ‘in’” article — reading selection for question 24, Comprehensive Examination in Spanish, June 2006",
        alt: "Boxed article in Spanish, framed by ornaments, titled El agua de moda en los restaurantes más in: we are all aware there is no drink like water, nor a greater source of health. Perhaps this is why in the most fashionable restaurants around the world the usual question for the waiter is: what mineral water do you have? Having a good water list has become a symbol of quality in prestigious restaurants — in Paris the fashionable restaurant Colette stocks some seventy different waters, and in Spain, above all in Barcelona, such lists are used more and more. Water also matters in cooking: those who want proof can consult the book published by the Academia Española de Gastronomía titled El agua en la cocina del futuro, in which the country's best-known chefs contribute recipes where water is a fundamental ingredient." }
    ]
  },
  referencia: {
    imgs: [
      { src: "img/q25-referencia-electronica.png",
        cap: "“Imagínese tener un mundo de conocimientos . . . en su mano” advertisement — reading selection for question 25, Comprehensive Examination in Spanish, June 2006",
        alt: "Double-bordered advertisement in Spanish headlined Imagínese tener un mundo de conocimientos . . . en su mano: carry an electronic reference with you and you will have instant information at the press of a key, whenever and wherever you wish. Teachers recommend it, students and professionals alike consider it indispensable, and parents know it can help their children turn in better schoolwork. With an electronic reference you can expand your vocabulary, write letters and end-of-term reports without grammatical errors, speak a foreign language, and even acquire knowledge about history, nutrition, or medicine. And by inserting any of a selection of Bookcards into the slot on the back of the unit, you literally double the amount of information within reach. Portable knowledge will open a world of possibilities." }
    ]
  },
  flamenco: {
    passage: `Un espectáculo de flamenco

En un espectáculo de danza donde se mezcla lo más simbólico de la cultura española, la bailadora Carlota Santana inauguró anoche en el Teatro Joyce de Nueva York su nueva producción “Mano a mano”. En “Mano a mano”, Carlota cuenta la historia de la vida del famoso torero Manolete.

Con un auditorio lleno hasta los topes, el espectáculo se estrenó primero en Pittsburgh hace unos meses. El espectáculo dramatiza la vida del popular torero español que nació en Linares, Córdoba, en 1917 y, que después de cautivar las audiencias por la pureza de su estilo de toreo, murió en la plaza de toros treinta años más tarde.

Dos años de preparación han sido necesarios para poner en escena esta producción, que muestra los comienzos de la carrera de Manolete hasta el desafío final con el joven torero Luis Dominguín.

Santana creó su compañía “Flamenco Vivo” en 1983 con la visión de poder desarrollar nuevos aspectos de música y danza española, pero gran parte de su reconocimiento se debe, no sólo a su arte, sino a la gran ayuda que ofrece a los artistas jóvenes. “No he creado mi propia compañía para ser una estrella”, explicó. “Disfruto trayendo a gente que no tiene la oportunidad de trabajar en los escenarios de Nueva York. Me agrada tanto ayudarles como el baile”, anotó modestamente.

Tanto en su espectáculo llamado“Federico”, sobre la vida del poeta Federico García Lorca, que estrenó en Nueva York en 1998, como con “Mano a mano”, Santana quiere inculcar el flamenco a través de historias. “Me gusta hacer cosas diferentes, espectáculos que tengan un hilo argumental y que muestren a la vez la belleza del flamenco”. Al utilizar historias para comunicar la pasión del flamenco, la compañía de Carlota ha tenido mucho éxito. “Para el público norteamericano el flamenco sólo a veces es difícil de asimilar”, dijo Carlota.

El libreto de “Mano a mano” ha sido escrito por Samuel Hazo, con algunos retoques y correcciones del mismo coreógrafo Antonio Hidalgo, quien además de crear la pieza y hacer el papel de Manolete, se ha encargado de escoger al resto del reparto. Hidalgo, que baila desde los 15 años de edad, y que ha participado en espectáculos con Antonio Gades y Manuela Vargas, ya había compartido escenario en otras producciones como la mayoría de los bailarines del reparto. El dice “En mi elección puse mucho énfasis en el factor humano, ya que por el tipo de espectáculo que estábamos preparando, prefería gente que supiera bailar y también interpretar y no sólo que tuviera mucha técnica”, afirmó el coreógrafo.

De origen cordobés, Hidalgo afirmó que le ha encantado interpretar este papel de una persona que es todo un icono en nuestra cultura y que cautivó audiencias en medio mundo. Anotó que está preparando otras coreografías para representarlas en Japón, “aunque me gustaría que este espectáculo viajara a otros países, entre ellos, España”.

La música, que fue una de las partes más emocionantes del espectáculo, es del compositor y guitarrista que vive en Nueva Jersey, Roberto Castellón, Junior, quien a los ocho años, empezó a tocar la guitarra de la mano de su padre y del maestro Manolo Barón.

Recientemente, Castellón trabajó para la compañía de María Benítez y para “Flamenco Vivo” de Carlota Santana, y no sólo ha creado piezas musicales, sino que también ha participado en los programas educativos en artes que promueve la artista.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 16, 2006"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-agencia-de-viajes.png",
        cap: "Drawing for writing task 33 — Gregory, New Yorker (adapted). Comprehensive Examination in Spanish, June 2006",
        alt: "Cartoon of a travel agency office: a travel agent sits at a desk with a computer, fanning out brochures and tickets toward a seated customer, who studies an open travel brochure. Posters of a palm-tree beach, the Eiffel Tower with the word Paris, and an Atlantic ocean liner hang on the walls." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1–9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. Who is invited to this event?",
    choices: [
      "only grandparents and children",
      "you and your entire family",
      "only members of the club",
      "university students and their friends"
    ],
    answer: 1,
    back: "(2) you and your entire family — “Venga y traiga a toda su familia desde los abuelitos hasta el bebé”: the Club de Jóvenes Universitarios invites you to bring everyone, from the grandparents to the baby, free of charge."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. Who would benefit most from this information?",
    choices: [
      "people who enjoy cooking",
      "people who go out at night",
      "people who go to the beach",
      "people who like shopping"
    ],
    answer: 2,
    back: "(3) people who go to the beach — the advice is all about sun exposure: avoid the most intense hours, use waterproof sunscreen so it survives going in and out of the water, wear a hat, and turn over so you don't burn."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is she saying about the Internet?",
    choices: [
      "It is possible to learn about other planets through the Internet.",
      "People chat through the Internet often.",
      "Finding a job through the Internet is easy.",
      "You can use the Internet to listen to your favorite radio programs."
    ],
    answer: 3,
    back: "(4) You can use the Internet to listen to your favorite radio programs — “Miles de estaciones de radio se pueden escuchar a través de la Red”, and listeners can record programs and choose when to hear them."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. Why would your friend respond to this letter?",
    choices: [
      "to learn more Spanish",
      "to become a web designer",
      "to take a vacation",
      "to request a transcript"
    ],
    answer: 0,
    back: "(1) to learn more Spanish — the letter offers study at the Universidad de Madrid “para profundizar su conocimiento de la lengua, la literatura y la cultura española”, including summer Cursos de Perfeccionamiento."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What does this customer want to do?",
    choices: [
      "buy some travelers checks",
      "open a checking account",
      "open a savings account",
      "close his account"
    ],
    answer: 0,
    back: "(1) buy some travelers checks — the teller explains the rules “cuando Ud. compra cheques de viajero”: sign on receipt, countersign only when cashing, and protect them like cash."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What kind of advice is being offered?",
    choices: [
      "how to exercise more effectively",
      "steps to improve your eyesight",
      "steps to improve emotional well-being",
      "how to meet people and make friends"
    ],
    answer: 2,
    back: "(3) steps to improve emotional well-being — the program teaches how to become an optimist: focus on the positive, accept that obstacles are temporary, and laugh often “para moderar tus emociones”."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is the announcement about?",
    choices: [
      "a contest to write an essay about the Spanish language",
      "a contest for writing poetry",
      "an advertisement for delivering newspapers",
      "a contest about Puerto Rican society"
    ],
    answer: 1,
    back: "(2) a contest for writing poetry — the newspaper announces “su segundo certamen de poesía” to promote poetic creation among young people, with a $1,500 prize and publication of the winning poem."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What does this information describe?",
    choices: [
      "a severe storm",
      "a vacation abroad",
      "an economic forecast",
      "an airline discount"
    ],
    answer: 0,
    back: "(1) a severe storm — “Una poderosa nevada azotó partes del nordeste de EE.UU.”, burying the region in snow and ice and forcing airlines to cancel hundreds of flights."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. Why was this tradition started in 1909?",
    choices: [
      "Many bells were manufactured that year.",
      "The farmers went on strike that year.",
      "A new recipe was invented that year.",
      "There was an excess crop of grapes that year."
    ],
    answer: 3,
    back: "(4) There was an excess crop of grapes that year — “Durante el año de 1909 hubo una cosecha de tantísimas uvas, que los cosecheros inventaron la tradición” to get rid of the surplus."
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10–15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué tipo de programa dan el sábado?",
    choices: [
      "un programa de música",
      "un programa de deportes",
      "un programa de la cocina",
      "un programa de las noticias"
    ],
    answer: 0,
    back: "(1) un programa de música — con Willie Colón, Juanes y Gloria Estefan, “ustedes pueden escuchar las canciones populares del mundo latino” el sábado de ocho a diez de la noche."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿De qué habla la madre?",
    choices: [
      "de la especialidad de su restaurante preferido",
      "de ir al supermercado y comprar ingredientes",
      "de la preparación de una comida vegetariana",
      "cómo preparar algo especial para el desayuno"
    ],
    answer: 3,
    back: "(4) cómo preparar algo especial para el desayuno — “para el desayuno mañana les voy a preparar tamales rellenos con cerdo”, y explica paso a paso cómo se hacen los tamales."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Cuál es una ventaja de este curso?",
    choices: [
      "Se puede terminar en dos semanas.",
      "Todos los alumnos son adolescentes.",
      "Se puede estudiar en casa.",
      "No tiene que pagar nada."
    ],
    answer: 2,
    back: "(3) Se puede estudiar en casa — el curso “Inglés en el hogar” se sigue “en la comodidad de su casa... sin tener que salir de la sala”, con sólo una hora diaria."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. Según estas noticias, ¿cómo pasa mucho tiempo la super estrella Mandy Moore?",
    choices: [
      "hablando por teléfono",
      "aprendiendo a bailar",
      "comprando ropa nueva",
      "navegando el Internet"
    ],
    answer: 3,
    back: "(4) navegando el Internet — es “super adicta a la computadora”: visita sitios de noticias, organiza fiestas cibernéticas y envía un promedio de 60 mensajes electrónicos al día."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué están recomendando estos expertos?",
    choices: [
      "trabajos en las agencias de viajes",
      "una organización que se especializa en viajes para jóvenes",
      "restaurantes con precios bien bajos",
      "hoteles de primera categoría"
    ],
    answer: 1,
    back: "(2) una organización que se especializa en viajes para jóvenes — recomiendan Kontiki Tours, una agencia que “organiza viajes para jóvenes” de 17 a 30 años, con paseos nocturnos y excursiones especiales."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué se puede ver en una excursión por la “Ruta Puuc”?",
    choices: [
      "monumentos modernos",
      "restaurantes elegantes",
      "civilizaciones antiguas",
      "edificios futurísticos"
    ],
    answer: 2,
    back: "(3) civilizaciones antiguas — la ruta es “una ventana a la cultura maya” con los sitios arqueológicos de Uxmal y Kabah, algunos restaurados y otros aún cubiertos de vegetación."
  },
  // ----- Part 3a: Reading passage with Spanish questions (Q16–20) -----
  { ...STIMULI.mana,
    type: "mc",
    label: "Q16",
    stem: "Q16. Según el artículo, qué les importa más a los miembros de este grupo?",
    choices: [
      "producir muchos álbumes",
      "la vida loca de una estrella de rock",
      "el dinero que reciben de sus álbumes",
      "expresarse a través de su música"
    ],
    answer: 3,
    back: "(4) expresarse a través de su música — son “anti estrellas de rock”: “Ellos dan más importancia a la música que al estilo de vida” y “decimos lo que sentimos”."
  },
  { ...STIMULI.mana,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Por qué no producen discos cada año?",
    choices: [
      "porque tienen muchas obligaciones familiares",
      "porque les importa más hacer música de alta calidad",
      "porque su contrato no lo permite",
      "porque están muy ocupados con sus conciertos"
    ],
    answer: 1,
    back: "(2) porque les importa más hacer música de alta calidad — “no participamos en el concepto de lanzar discos cada año solamente para hacer dinero. Para nosotros es más importante dedicarle el tiempo necesario a cada uno de los discos”."
  },
  { ...STIMULI.mana,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Por qué es diferente el nuevo álbum de Maná?",
    choices: [
      "porque las canciones fueron escritas en muchos idiomas",
      "porque participaron dos artistas famosos",
      "porque contiene canciones y poemas",
      "porque habla de la historia de México"
    ],
    answer: 1,
    back: "(2) porque participaron dos artistas famosos — “Revolución de amor” cuenta “con dos de las grandes estrellas de la música latina: Carlos Santana y el legendario Rubén Blades”."
  },
  { ...STIMULI.mana,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Qué hizo el grupo después de la gira?",
    choices: [
      "Descansó por doce meses.",
      "Grabó un nuevo disco.",
      "Hizo un viaje a España.",
      "Escribió un libro de canciones."
    ],
    answer: 0,
    back: "(1) Descansó por doce meses — “Cuando terminemos la gira con Santana, nos tomamos un año libre y descansamos”, dijo Alex González."
  },
  { ...STIMULI.mana,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Por qué tiene éxito este grupo musical?",
    choices: [
      "Se visten con ropa exótica.",
      "Utilizan las ideas de sus aficionados.",
      "Tocan diferentes estilos de música.",
      "Solamente tocan música romántica."
    ],
    answer: 2,
    back: "(3) Tocan diferentes estilos de música — “no contamos con un estilo fijo, que nos limitaría”: el álbum incluye baladas, ritmos salseros y hasta el rock and roll puro y duro."
  },
  // ----- Part 3b: Realia with English questions (Q21–25) -----
  { ...STIMULI.consejos,
    type: "mc",
    label: "Q21",
    stem: "Q21. Who would be most interested in reading this article?",
    choices: [
      "a person who is about to start a new exercise program",
      "someone who has to take a test to go to a university",
      "a student who has finished all the final exams",
      "a parent looking for a new school for a child"
    ],
    answer: 1,
    back: "(2) someone who has to take a test to go to a university — the reader's one question is “¿Ingresaré?”, and the advice is about staying calm so the preparation “te garantiza que podrás iniciar una carrera universitaria”."
  },
  { ...STIMULI.mireaccion,
    type: "mc",
    label: "Q22",
    stem: "Q22. What does this web site offer its customers?",
    choices: [
      "a way to communicate anonymously",
      "a way to meet new people",
      "a way to learn about job opportunities",
      "a way to get someone’s address"
    ],
    answer: 0,
    back: "(1) a way to communicate anonymously — mireacción.com sends e-mails without revealing your name or e-mail address; “No hay ninguna manera para que se entere de quién envió el mensaje”."
  },
  { ...STIMULI.galicia,
    type: "mc",
    label: "Q23",
    stem: "Q23. What information is provided in this passage?",
    choices: [
      "Spain and Ireland have been influenced by the Celtic culture.",
      "Spain’s Irish immigrants often returned to Ireland.",
      "Spain was ruled by Ireland for centuries.",
      "Spain has a town where the Gaelic language is taught in school."
    ],
    answer: 0,
    back: "(1) Spain and Ireland have been influenced by the Celtic culture — Galicia and Ireland share a Celtic root in their names, Celtic legends, and “una lengua y una literatura de origen celta”."
  },
  { ...STIMULI.agua,
    type: "mc",
    label: "Q24",
    stem: "Q24. What does this article tell us about water?",
    choices: [
      "People in Paris drink more water to help lose weight.",
      "Many Europeans are drinking less water because of water pollution.",
      "The waiters do not serve water with the meals.",
      "Some restaurants have dozens of brands of water on their menu."
    ],
    answer: 3,
    back: "(4) Some restaurants have dozens of brands of water on their menu — in Paris the fashionable restaurant Colette “cuenta con unas setenta aguas diferentes”, and a good water list is a mark of quality in prestigious restaurants."
  },
  { ...STIMULI.referencia,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does this product offer?",
    choices: [
      "a fun game for families to play together",
      "a summary of current novels",
      "information at your fingertips",
      "an explanation of medicines and nutrition"
    ],
    answer: 2,
    back: "(3) information at your fingertips — the electronic reference gives “información instantánea con sólo pulsar una tecla. Cuando usted lo desee, donde usted lo desee”."
  },
  // ----- Part 3c: Second reading passage with English questions (Q26–30) -----
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q26",
    stem: "Q26. What is this article promoting?",
    choices: [
      "a new book",
      "a bullfight",
      "a new show",
      "a sports event"
    ],
    answer: 2,
    back: "(3) a new show — Carlota Santana “inauguró anoche en el Teatro Joyce de Nueva York su nueva producción «Mano a mano»”, a flamenco dance production."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q27",
    stem: "Q27. According to this article, who was Manolete?",
    choices: [
      "a bullfighter",
      "a singer",
      "an actor",
      "a painter"
    ],
    answer: 0,
    back: "(1) a bullfighter — the show tells “la historia de la vida del famoso torero Manolete”, the popular Spanish bullfighter born in Linares, Córdoba, in 1917."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q28",
    stem: "Q28. Why did Carlota Santana create the company “Flamenco Vivo”?",
    choices: [
      "to help Manolete become famous",
      "to help young artists in developing their careers",
      "to work with the poet García Lorca",
      "to become a star"
    ],
    answer: 1,
    back: "(2) to help young artists in developing their careers — “No he creado mi propia compañía para ser una estrella... Disfruto trayendo a gente que no tiene la oportunidad de trabajar en los escenarios de Nueva York”."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q29",
    stem: "Q29. Why is her company successful?",
    choices: [
      "The dancers are well-known throughout the world.",
      "She relates stories through music and dance.",
      "The shows are widely advertised.",
      "The company has performed throughout Europe."
    ],
    answer: 1,
    back: "(2) She relates stories through music and dance — “Al utilizar historias para comunicar la pasión del flamenco, la compañía de Carlota ha tenido mucho éxito”: shows with a narrative thread that also display the beauty of flamenco."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q30",
    stem: "Q30. What was Hidalgo’s contribution to show?",
    choices: [
      "He designed the costumes for the dancers.",
      "He constructed the set for the performance.",
      "He sang and played the guitar.",
      "He created the play and performed the main role."
    ],
    answer: 3,
    back: "(4) He created the play and performed the main role — the choreographer Antonio Hidalgo, “además de crear la pieza y hacer el papel de Manolete, se ha encargado de escoger al resto del reparto”."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You recently visited a relative who lives in a distant city. Write a letter to your pen pal in Spanish telling him or her about the visit. You may wish to include:
• who the relative is
• where the relative lives
• when you visited the relative
• how you traveled
• the purpose of the visit
• gifts that you brought
• activities during your visit
• how you felt about seeing your relative

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido Enrique,
Espero que estés bien junto a tu familia. Nosotros estamos bien.
La semana pasada visitamos a mis abuelos que viven en la capital. Disfrutamos mucho de este viaje, especialmente el viaje en avión. Para mí, fue la primera vez que he viajado en avión.
Nosotros fuimos a celebrar el aniversario de mis abuelos. Ellos tienen cuarenta años de casados. Mis padres les hicieron una fiesta como regalo de aniversario.
Despues de las fiestas, visitamos sitios muy interesantes, como el Parque de Chapultepec, el Museo de Antropología y vimos un espectáculo de música folklórica. ¡Nos divertimos mucho!
Cuéntame de tus vacaciones. Escríbeme pronto.
Tu amigo,
Raúl

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). Write a journal entry for your Spanish class describing your favorite place to spend time. You may wish to include:
• when you go there
• why you like this place
• a description of the place
• how you get there
• who else goes there
• what you do while you are there
• how much time you spend there
• how you feel after you have been there

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Visito mi lugar favorito todo el verano. Este sitio está cerca de una finca y está en las montañas. Cada vez que doy un paseo sola por las colinas, los campos y los bosques, gozo allí de la paz que me rodea. Es interesante ver las plantas y las flores de muchos colores distintos. Los árboles son altísimos con muchas hojas verdes. Hay lugares debajo de los árboles donde duermen los ciervos. También se puede oír los pájaros cantando en las ramas. Paso todo el día en el verano cogiendo fresas o sentándome cerca de un pequeño lago. Es muy tranquilo allí porque está bastante lejos del camino. Cuando regreso a casa, estoy muy relajada y alegre.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Un día, el señor Romero va a una agencia de viajes. El quiere información acerca de unas vacaciones a Europa. Piensa pasar dos semanas con su familia visitando algunas ciudades en España, Francia e Italia. Cuando la agente de viajes le dijo los precios, el señor estuvo muy sorprendido. No sabía que los precios eran tan caros. Decidió cambiar sus planes. Ahora desea visitar solamente España. Quiere ver el acueducto de Segovia, la catedral de Toledo, los museos de Madrid y la Plaza de Toros de Sevilla. Necesita más información sobre los hoteles. Ella explica que necesita tener un pasaporte válido para viajar a España. También lo ayuda a hacer las reservas de vuelos y otros preparativos para sus vacaciones. El viaje va a ser muy bueno y el señor Romero sale de la agencia muy contento con sus planes.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1–S10 (new questions on unprobed content) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. How much does it cost to attend the “Gran Día Familiar”?",
    choices: [
      "Adults pay a small entrance fee.",
      "Everything is free.",
      "Only the food and drinks cost money.",
      "Children pay half price."
    ],
    answer: 1,
    back: "(2) Everything is free — the announcement says “Todo es gratis”: games, music, children's entertainment, food, and drinks all cost nothing."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S2",
    stem: "S2. According to this advice, during which hours should you avoid the sun?",
    choices: [
      "between 11 a.m. and 3 p.m.",
      "before 9 a.m.",
      "between 3 p.m. and 6 p.m.",
      "after sunset"
    ],
    answer: 0,
    back: "(1) between 11 a.m. and 3 p.m. — you should avoid the sun during its most intense hours, “entre las once de la mañana y las 3 de la tarde”."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S3",
    stem: "S3. According to the teller, when should you countersign a travelers check?",
    choices: [
      "as soon as you receive it",
      "before you leave on your trip",
      "only when you cash it, in front of the person accepting it",
      "after you return from your trip"
    ],
    answer: 2,
    back: "(3) only when you cash it, in front of the person accepting it — “Solamente debe contrafirmar el cheque cuando lo haga efectivo y en presencia del aceptante”; the first signature goes on the checks when you receive them."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S4",
    stem: "S4. Who may participate in the newspaper’s poetry contest?",
    choices: [
      "anyone who writes in Spanish",
      "residents of Puerto Rico between 18 and 30 years old",
      "students at any university",
      "professional poets only"
    ],
    answer: 1,
    back: "(2) residents of Puerto Rico between 18 and 30 years old — “Pueden participar las personas residentes en Puerto Rico de 18 a 30 años de edad”, submitting poems in Spanish of no more than 15 pages under a pseudonym."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S5",
    stem: "S5. What does this Spanish New Year’s Eve tradition involve?",
    choices: [
      "ringing twelve bells in the town square",
      "eating twelve grapes as the clock strikes midnight",
      "drinking grape juice with the family dinner",
      "giving baskets of grapes to the neighbors"
    ],
    answer: 1,
    back: "(2) eating twelve grapes as the clock strikes midnight — the custom is “comer las doce uvas al dar las doce campanadas de medianoche el 31 de diciembre”, invented by growers in 1909 to use up a huge harvest."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S6",
    stem: "S6. Según la madre, ¿qué parte del tamal no se debe comer?",
    choices: [
      "la carne de relleno",
      "la harina de maíz",
      "las hojas de la mazorca",
      "los pimentones jalapeños"
    ],
    answer: 2,
    back: "(3) las hojas de la mazorca — la madre termina con una advertencia: “recuerde que no se comen las hojas de la mazorca”; las hojas sólo envuelven el tamal mientras se hierve."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S7",
    stem: "S7. Según el anuncio, ¿en cuánto tiempo garantizan resultados con el curso “Inglés en el hogar”?",
    choices: [
      "en una semana",
      "en un mes",
      "en seis meses",
      "en dos años"
    ],
    answer: 2,
    back: "(3) en seis meses — el anuncio promete “Garantizamos resultados en seis meses”, estudiando con sólo una hora diaria de video en casa."
  },
  { ...STIMULI.mana,
    type: "mc",
    label: "S8",
    stem: "S8. Según el artículo, ¿cuáles son algunos de los temas a los que Maná da más importancia en la vida?",
    choices: [
      "la ecología, la pobreza y la justicia",
      "los deportes y la televisión",
      "la moda y el estilo de vida",
      "la historia de la música norteamericana"
    ],
    answer: 0,
    back: "(1) la ecología, la pobreza y la justicia — el grupo expresa con capacidad poética “las cosas a las cuales ellos dan más importancia en la vida, tal como la ecología, la pobreza, y la justicia”."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "S9",
    stem: "S9. Where did “Mano a mano” premiere before opening in New York?",
    choices: [
      "in Madrid",
      "in Pittsburgh",
      "in Córdoba",
      "in Tokyo"
    ],
    answer: 1,
    back: "(2) in Pittsburgh — “el espectáculo se estrenó primero en Pittsburgh hace unos meses”, before last night's opening at the Teatro Joyce in New York."
  },
  { ...STIMULI.referencia,
    type: "mc",
    label: "S10",
    stem: "S10. According to the advertisement, how can you double the amount of information the electronic reference puts in your hand?",
    choices: [
      "by buying a second unit",
      "by connecting it to the Internet",
      "by inserting a “Bookcard” into the slot on the back of the unit",
      "by downloading files from a computer"
    ],
    answer: 2,
    back: "(3) by inserting a “Bookcard” into the slot on the back of the unit — “al introducir cualquiera de una selección de «Bookcards» en la ranura posterior de la unidad, literalmente usted duplica la cantidad de información al alcance de su mano”."
  }
];
