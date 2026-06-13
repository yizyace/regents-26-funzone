// January 2008 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key / rating guide), raw-docs/nysedregents.org/spanish/jan2008/.
// Printed quirks kept verbatim (verified against page renders): "jovenes"
// (Q19 choices 1 and 3, no accent), "Sr. Diaz" (Q9 dictation passage, second
// mention without accent), "Ciento veinte y cinco" (Q1 dictation passage),
// and "usario" in the Q22 realia image.

const TDC_SRC = "Teacher Dictation Copy, January 2008 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to a Spanish-language radio broadcast and you hear:

[La maestra lee] Ciento veinte y cinco objetos de la antigüedad, de la tumba de un jefe importante de una tribu del antiguo Perú, han sido seleccionados para mostrarnos nuestras raíces artísticas e históricas. Se trata de una exposición de la civilización mochica que se presenta en el Museo Metropolitano de Nueva York. Cada uno de los objetos que se exponen, desde joyas hasta cerámica, sirve para ilustrar las costumbres de esta civilización que vivió hace dieciséis siglos en la costa norte del Perú.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are listening to your teacher who says:

[La maestra lee] Muchas veces les pido buscar información útil en la red mundial. El uso de una computadora para este tipo de trabajo es frecuentemente una tarea confusa, lenta y frustrante. Para evitar lo tedioso de la búsqueda, Uds. van a seguir con estas instrucciones que yo les voy a dar. Aquí hay toda la información disponible que necesitarán para que no pierdan tiempo.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are at the Plaza Mayor in Madrid and overhear a woman who is being interviewed. She says:

[La maestra lee] Soy María Figueroa, estudiante de Valencia. Necesito estudiar y trabajar, especialmente en invierno. Pero me gustan más las vacaciones de verano cuando hace calor. No quiero viajar. Prefiero quedarme en casa con mis padres y mis hermanos y también divertirme con mis amigos. Para mí, esas son las mejores vacaciones.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are at a travel agency with a Spanish-speaking friend. A travel agent is telling your friend about an upcoming cruise:

[La maestra lee] La compañía de cruceros anunció hoy que ha cancelado su viaje al Caribe. Ciento veinte personas que viajaban a bordo del barco en el que Ud. iba a viajar se pusieron enfermos. Una representante de esa empresa informó que 100 pasajeros y 20 miembros de la tripulación del barco, que se encontraba en Cozumel, mostraron síntomas de estar infectados con un virus que duró unas 48 horas. Desafortunadamente no es la primera vez que esto ha sucedido en la industria de cruceros. Llámeme para hacer otra reserva.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You have just boarded the plane to Uruguay and you hear this announcement:

[La maestra lee] Señoras y señores, por favor pongan todos sus paquetes y maletas de mano en el compartimiento por encima de sus asientos. Todo necesita estar asegurado. No pueden poner maletas debajo del asiento. Si tienen algo a bordo que no cabe en el compartimiento, favor de informarnos y les encontraremos un lugar donde ponerlo.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to a Spanish-language radio program and you hear an announcer say:

[La maestra lee] Si a Ud. no le permiten pagar en una tienda con tarjeta de crédito por ser tiempo de rebajas, Ud. puede informar a las organizaciones de consumo o asociaciones de consumidores. Una tienda no puede negarse a aceptar el pago con tarjetas de crédito por ser tiempo de gangas, ni por ninguna otra razón, cuando permite que Ud. pague con tarjetas el resto del año. No debe tolerar este abuso.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are listening to a Spanish-language radio station and hear this announcement:

[La maestra lee] Cuando uno está de vacaciones en la Costa del Sol de España, se puede disfrutar de las aguas mediterráneas, de la playa en pleno sol o debajo de un parasol bonito. Poco a poco va a tener sed y hambre. Para ayudarle con estos deseos existe “El Chiquito”. Este lugar ofrece magníficos olores y sabores a pescado y otras especialidades de la casa. Después de sentarse, uno debe pedir todo a la vez. Es probable que sólo tenga una oportunidad para hacerlo debido a la cantidad de gente que come allí. Pida desde las bebidas hasta los postres y aprovéchese de los sabores únicos españoles.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You hear this commentary while listening to a local radio program in Madrid:

[La maestra lee] Madrid se ha poblado de voces latinoamericanas. Más de la mitad de los 460.000 inmigrantes habitantes en esta región vienen de la América Central y la del Sur. Muchos de ellos, casi siempre resignados a la lejanía, combaten la tristeza y la nostalgia manteniendo el contacto con su música, su gente y su cultura. Y lo hacen a través de numerosas emisoras de radio y publicaciones en la capital dirigidas a los ciudadanos del otro lado del Atlántico. Los latinoamericanos se sienten más cómodos escuchando la música de su tierra y evocando sus costumbres. Radio Nuevo Mundo, es una de las emisoras de inmigrantes para inmigrantes que ya comienzan a aparecer en Madrid.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are listening to a program about the arts on a Spanish-language radio station in New York. The program’s host is discussing today’s guest:

[La maestra lee] Hoy tenemos el placer de hablar con Francisco Díaz quien visita Nueva York por primera vez. Es un artista dinámico cuyo punto de vista único ha creado obras contemporáneas de mucho valor. Nació en Bogotá y recibió sus estudios formales en la Escuela de Bellas Artes. Luego recibió dos premios prestigiosos que le permitieron continuar su carrera. Ha tenido varias exposiciones individuales en Bogotá. Ahora el Sr. Diaz presentará su primera exposición individual en museos de arte de Nueva York a Los Ángeles. ¡Bienvenido, Francisco!`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are in a bookstore in San Juan and hear the manager say:

[La maestra lee] Estimados clientes, esta tarde tenemos el honor, aquí en la librería González, de tener por primera vez el autor de una de las novelas más populares de hoy día. Quisiéramos que tengan la oportunidad que el autor les dedique su novela. Si todavía no tienen un ejemplar, los tenemos en la mesa de enfrente. Compren su propio ejemplar y pasen a la mesa para saludar al autor y para que les dé su autógrafo.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are shopping in Costa Rica and hear this announcement over the loudspeaker:

[La maestra lee] ¿Tiene Ud. estrés y tensiones en la vida? Queremos mostrarle una línea de productos que puede cambiarle y mejorarle la vida. Los productos “Jardín del Bienestar” son la primera línea de productos que incorporan los conocimientos de la Aromaterapia a nuestra vida cotidiana. Estos productos pueden reducir el estrés en la vida. Le ofrecen el bienestar con extractos naturales. Puede escoger aromas que promueven el relajo, la vitalidad, o el equilibrio mental. Para conseguir la paz personal, ¡pruebe nuestros productos hoy!`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to a health program on the radio in Spain and hear this information:

[La maestra lee] ¿Has notado irritación en la piel después de bañarte en el océano? Para calmar el malestar inicial, te puedes aplicar abundante arena y agua del mar. Generalmente no necesitas consultar al médico. Cuando llegues a casa, limpia suavemente la parte irritada con un algodón mojado en alcohol. Verás como te refresca y te alivia la irritación.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are visiting Buenos Aires, Argentina, and hear this announcement on the radio:

[La maestra lee] A pesar de los miles de kilómetros que las separan, Buenos Aires y Berlín se transformarán en sitios del mismo evento cultural. La idea es crear un puente de intercambio entre las dos ciudades. Buenos Aires mostrará en Berlín parte de su arte y viceversa. Desde el 7 de septiembre podrá verse en ambas ciudades el arte de cada una. Los visitantes a Buenos Aires pueden ver unas exposiciones como “la Nueva Berlín”, una colección de fotos y “Actualizaciones de la bandera de Berlín”, con obras realizadas por artistas alemanes.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] While listening to a Spanish-language radio broadcast in Florida you hear this announcement:

[La maestra lee] Después de mucho esperar, por fin llega a Univisión Te amaré en silencio. Esta es la primera telenovela producida por esta cadena que también supone el regreso a la pantalla pequeña del actor mexicano Eduardo Yáñez, conocido por sus trabajos en novelas como “Marielena”, junto a Lucía Méndez. En esta ocasión, su enamorada será la bella modelo brasileña Ana Carolina da Fonseca. Así que no olvides tu cita con esta apasionada historia de amor a las nueve de la noche.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are in Barcelona talking to a Spanish friend. Your friend says:

[La maestra lee] Quiero mostrarte las obras del artista famoso, Gaudí. Aquí en Barcelona hay una catedral famosa y otros edificios diseñados por este artista. Podemos ir en metro de un lugar a otro, pero lleva zapatos cómodos, porque vamos a subir muchas escaleras en algunos lugares. Después de este recorrido te prometo que vas a ser una experta en la obra de este gran artista español.`,
    psource: TDC_SRC
  },
  flamenco: {
    passage: `El Flamenco: La danza del espíritu

¿De qué manera ha llegado el sabor de los pueblos de Andalucía a Nueva York, Miami, Los Ángeles, Chicago, Santa Fe y otras ciudades norteamericanas? La influencia de Andalucía ha llegado a los Estados Unidos a través del explosivo resurgimiento del apasionado baile, el flamenco. Esta danza tuvo sus orígenes en los tablaos gitanos, o sea, en los lugares en el sur de España. Hoy también florece en teatros de las principales ciudades norteamericanas gracias a los bailadores que se conocen por sus espectáculos vivos de flamenco.

En los años 20 el padre de Rita Hayworth conducía un grupo de danza clásica española: la popular familia Cansino. En los 30 surgió la presencia de Vicente Escudero. En los 40 apareció la maravillosa Carmen Amaya, y en los 50, el genial José Greco que, con su magnífica compañía de baile, se convirtió en el bailador más reconocido por el público norteamericano. Hoy día Teodoro Morca, director del Morca Dance Theater en Washington, continúa esta tradición enseñando cursos de verano desde hace once años a alumnos que vienen de todas partes del mundo.

María Benítez, la extraordinaria bailadora y ganadora del Premio del Gobernador por Excelencia en el Campo de la Danza de Nuevo México, ha tratado siempre de eliminar la imagen incorrecta del flamenco creada por las películas de Hollywood, donde se da la impresión de que el flamenco es un baile mexicano. No es verdad; es un baile decididamente español. Benítez ha presentado sus conciertos en salas como el Kennedy Center en Washington, D.C. y el Brooklyn Academy of Music en Nueva York, y ha creado coreografías para las óperas de Santa Fe y Boston. “Sin embargo”, confiesa la artista, “mis mejores espectáculos han sido en Santa Fe donde después de catorce años tengo un público muy leal que viene todos los veranos al ambiente íntimo de mis espectáculos.” Por eso, es aquí donde ella recibió más satisfacción. De esta manera el público redescubre la esencia del movimiento, el alma, el misterio. El flamenco llega a los adultos y a los niños porque es la danza del espíritu humano.

En la Universidad de Nuevo México en Albuquerque, una bailarina llamada Eva Enciñias, empezó con sus clases de flamenco en el Departamento de Danza hace doce años. De allí surgió el popular Festival del Flamenco, en el cual participan artistas de renombre internacional que contribuyen con sus espectáculos y clases de guitarra, canto y baile. Con los fondos recibidos, la universidad provee becas de estudio para jóvenes en los Estados Unidos que aspiran a hacer carrera en las artes. De los cientos que se interesan en las becas, sólo veinte son seleccionados. Además de recibir las becas, reciben también trajes, castañuelas y oportunidades de actuar en las escuelas primarias y secundarias. Cuando los bailadores entran en las clases los niños se fascinan y aplauden, y a través del flamenco, se conectan positivamente con la cultura y con el idioma español. Eva Enciñias confirma que la gente necesita conectarse con sus emociones y que el flamenco ofrece una oportunidad para expresar la intensidad de estos sentimientos.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 23, 2008"
  },
  certamen: {
    imgs: [
      { src: "img/q21-certamen-relatos-breves.png",
        cap: "Announcement for question 21, Comprehensive Examination in Spanish, January 2008",
        alt: "Boxed announcement with a vertical black banner reading XI Certamen de Relatos Breves de Diario de Mallorca, followed by six numbered rules. 1: A first prize of 300 euros, a second prize of 200 euros and a third prize of 100 euros are established. 2: All writers who wish may participate, in Castilian or Catalan; each author may send only one original work accompanied by four copies, signed without pseudonym and showing the contestant's personal data. 3: Maximum length is seven pages typed, double-spaced, on one side, averaging thirty lines per page. 4: Originals are accepted starting March 6 and the deadline is April 27; they must be sent to Diario de Mallorca, calle Puerto Rico, 15 - 07007 Palma de Mallorca (Illes Balears), with the envelope marked 'Para el XI Certamen de Relatos Breves'. 5: Stories must be unpublished; failure to meet this requirement invalidates participation, and Diario de Mallorca reserves the right to publish them. 6: The contest will be decided by a jury whose composition will be made public in these pages once the submission period closes; the jury may decide any incident of the contest and its ruling is final. At the bottom is the logo of the sponsor, 'SA NOSTRA' Caixa de Balears." }
    ]
  },
  zapatillas: {
    imgs: [
      { src: "img/q22-zapatillas-max.png",
        cap: "Article for question 22, Comprehensive Examination in Spanish, January 2008",
        alt: "Boxed newspaper article headlined 'Inventan unas zapatillas para niños que crecen cuando lo hace el pie', datelined Madrid, Agencias. A German company has brought to market children's athletic shoes that grow at the same rate as the child's foot, sparing parents the worry of buying a new pair every little while. They are the 'Max' sneakers, whose Spanish translation, according to the company, is 'gusano' (worm), since like that animal they stretch at the user's request. The shoe has a button that activates an expansion system; the mechanism is a panel that stretches to fit different sizes. The innovation was developed by German athletic shoe maker K2. The pairs, presented in Munich, come in several designs and cost 49.95 euros." }
    ]
  },
  diaAnimal: {
    imgs: [
      { src: "img/q23-dia-del-animal.png",
        cap: "Reading selection for question 23, Comprehensive Examination in Spanish, January 2008",
        alt: "Boxed text in a casual rounded font: Argentina will celebrate the Día del Animal on April 29. This holiday is commemorated in honor of doctor Ignacio Albarracín, who died on that date in 1926. Born in San Juan, he became a tireless fighter for animal rights. At the initiative of the Sociedad Protectora de animales this date was chosen to commemorate the Día de los Animales. Albarracín promoted law No. 2786 (of 1891), on Protection of Animals, which establishes the priority of protecting animals and prohibiting their mistreatment. He also took part, together with Domingo F. Sarmiento and others, in creating the Sociedad Argentina Protectora de Animales, and was elected its secretary and later its president." }
    ]
  },
  huracan: {
    imgs: [
      { src: "img/q24-nombre-huracan.png",
        cap: "Article for question 24, Comprehensive Examination in Spanish, January 2008",
        alt: "Boxed article titled 'El Nombre de un Huracán'. The decision to use names to 'baptize' tropical storms and hurricanes is a custom several centuries old. Today, once a tropical disturbance intensifies into a tropical storm with rotating circulation and winds over 63 kilometers per hour, the National Hurricane Center assigns it a name. Starting in 1953 tropical storms began receiving feminine names, used in alphabetical order, the first storm of the season always getting a name beginning with 'A'. In 1978 male and female names began to be used on the eastern Pacific list, and during the 1979 season the Atlantic basin list was expanded to include masculine and feminine names; the order of male and female names alternates each year. There are six lists of names for tropical storms, each composed of 23 names from A to W, used in rotation — for example, a group of names used in 1997 was used again to name storms in 2003. Occasionally a name is retired from the list when it was used for a hurricane that caused deaths and extreme damage; retired names include Andrew, Bob, Camille, David, Elena, Frederic and Hugo." }
    ]
  },
  foroPublico: {
    imgs: [
      { src: "img/q25-foro-publico.png",
        cap: "Letter for question 25, Comprehensive Examination in Spanish, January 2008",
        alt: "Boxed letter headed 'Foro Público — Carta al Editor:', signed 'Atentamente, Pedro Melgar'. To the editors, my congratulations. At the offices of Gigante Express I was given a free copy, and after enjoying its different and interesting articles, it gives me great pleasure to know that from today on we will have a serious, informative, clean and honest newspaper. I feel proud to take part in the birth of a new newspaper. I will keep this first issue as a collector's item. I wish you much success; keep up the work of informing the Spanish-speaking community here in Austin, which is growing by leaps and bounds. It was about time we had a newspaper like 'El Norte'. Onward and much success." }
    ]
  },
  colaSomos: {
    passage: `Cola Somos 51

Parece que todo el mundo está dispuesto a enojar a Coca-Cola. Últimamente esta compañía ha tenido que enfrentar la competencia a causa de la llegada al mundo árabe de la marca Meca-Cola, y a Turquía, la Cola Turka. Ahora dos jóvenes catalanes, Luis Ferrant y su esposa, Ester Piulats, se atreven a lanzar en España la marca Cola Somos 51.

Sin embargo, la meta de Cola Somos 51 es muy distinta a la de Coca-Cola. Según la pareja, el nuevo refresco no lo fabrican para hacerse millonarios. Al contrario, el 51 por ciento de los beneficios generados por la venta de esta bebida van a causas humanitarias para curar enfermedades graves y proyectos en el Tercer Mundo. Pero, ¿de dónde viene esta idea?

Todo empezó hace dos años. Ester, que trabajaba como financiera, y su marido, como ingeniero, tomaron la decisión de cambiar su vida de estrés y rutina y comenzar de nuevo. Decidieron juntar todos sus ahorros para abrir las puertas en un restaurante en pleno Pirineo catalán, el cual nombraron Picot Negre. En poco tiempo la empresa empezó a tener gran éxito, hasta aparecer en la Guía Michelín. Ya es uno de los restaurantes que la Guía recomienda visitar.

Una tarde Luis y Ester vieron en la tele un programa donde muchos protestaban, y pensaron que querían hacer algo para ayudar a la gente que lucha por la justicia en el mundo. Y de allí nació la idea de buscar un producto de carácter universal que uniera a toda la gente. Decidieron que lo que mejor unía a estas personas era una bebida de cola. “Todo el mundo, cuando abre la nevera de su casa tiene una Coca-Cola o una Pepsi.” Ahora empezaba lo más difícil: encontrar la financiación para tal proyecto tan extraño. Después de largas discusiones con varios banqueros, convencieron a otros tres jóvenes que la idea tenía posibilidades. Así, comenzó el negocio.

En estos momentos producen 100.000 botellas de esta bebida en dos formatos: botellas de dos litros y de medio litro. Ester explica que no usan latas por miedo de contaminación. Piensan llegar a la producción de un millón de litros a finales del año, pero por el momento se contentan con cifras modestas. De hecho, han tenido que subcontratar toda la producción. Ahora el refresco es producido por la fabricante de bebidas Sanmy, una empresa de Tarrasa, especializada en la fabricación de gaseosas.

¿Y cuál es el secreto que le da a esta bebida un sabor diferente a los otros refrescos? Todos saben que no existe un refresco de cola sin su ingrediente particular. En el caso de Cola Somos 51, que es el nombre que los fundadores han dado al nuevo refresco, el sabor ha estado en las manos de Luis Ferrant, experto en olores y sabores. En realidad, fue él responsable de la cocina y del éxito del restaurante. Los ingredientes de esta bebida incluyen la lima, el guaraná, la vainilla y otros aromas que fabrica la compañía de gaseosas.

La comercialización va despacio, aunque a un buen ritmo. Por ahora la venta de la bebida, que tiene alcance nacional, se hace a través de la página web de la empresa (www.somos51.com). Este éxito se debe sin duda al propósito benéfico del producto. Beber Cola Somos 51 le ayuda a la humanidad.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 23, 2008"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-madre-leyendo.png",
        cap: "Picture for writing task 33 (— Woman's World, 2007, adapted), Comprehensive Examination in Spanish, January 2008",
        alt: "Line drawing of a boy standing and talking to his mother, gesturing with one hand. The mother, wearing glasses, a white blouse and a flowered skirt, sits in an armchair holding an open magazine and looks up at him. Framed pictures hang on the wall behind them." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What can you find at this exhibit?",
    choices: [
      "live animals",
      "modern sculptures",
      "political documents",
      "ancient artifacts"
    ],
    answer: 3,
    back: "(4) ancient artifacts — \"Ciento veinte y cinco objetos de la antigüedad, de la tumba de un jefe importante de una tribu del antiguo Perú\": jewels and ceramics of the Mochica civilization, which lived sixteen centuries ago."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is the teacher telling you to do?",
    choices: [
      "follow her Internet search directions",
      "finish reading the book",
      "play a new computer game",
      "study for an upcoming test"
    ],
    answer: 0,
    back: "(1) follow her Internet search directions — to avoid a confusing, slow, frustrating search, \"Uds. van a seguir con estas instrucciones que yo les voy a dar.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What does this person like most about her summer vacation?",
    choices: [
      "earning some extra money",
      "taking additional courses",
      "visiting other countries",
      "spending time with friends and family"
    ],
    answer: 3,
    back: "(4) spending time with friends and family — \"Prefiero quedarme en casa con mis padres y mis hermanos y también divertirme con mis amigos. Para mí, esas son las mejores vacaciones.\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What does the travel agent tell your friend?",
    choices: [
      "A special rate for families is being offered.",
      "The trip is canceled due to a contagious illness.",
      "Passengers can board 48 hours earlier than expected.",
      "Passengers can participate in a special contest on the cruise."
    ],
    answer: 1,
    back: "(2) The trip is canceled due to a contagious illness — the cruise line \"ha cancelado su viaje al Caribe\" because 120 people aboard \"mostraron síntomas de estar infectados con un virus.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What are you told to do?",
    choices: [
      "Fasten your seatbelt immediately.",
      "Leave room for your seatmate’s luggage.",
      "Turn off all electronic devices.",
      "Place all carry-on luggage in an overhead compartment."
    ],
    answer: 3,
    back: "(4) Place all carry-on luggage in an overhead compartment — \"pongan todos sus paquetes y maletas de mano en el compartimiento por encima de sus asientos\"; bags may not go under the seat."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What problem is being discussed?",
    choices: [
      "refusal of credit cards during sales",
      "high interest rates on store credit cards",
      "increase of prices on luxury items",
      "limited number of sales items"
    ],
    answer: 0,
    back: "(1) refusal of credit cards during sales — \"Si a Ud. no le permiten pagar en una tienda con tarjeta de crédito por ser tiempo de rebajas\": a store cannot refuse card payment during sales when it accepts cards the rest of the year."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Who would most likely want to go to “El Chiquito”?",
    choices: [
      "someone who enjoys taking classes",
      "someone who enjoys swimming in an indoor pool",
      "someone who enjoys eating Spanish food",
      "someone who enjoys art exhibits"
    ],
    answer: 2,
    back: "(3) someone who enjoys eating Spanish food — \"El Chiquito\" offers \"magníficos olores y sabores a pescado y otras especialidades de la casa\" and \"los sabores únicos españoles.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is the main emphasis of this radio program?",
    choices: [
      "European sports presentations",
      "live news broadcasts 24 hours a day",
      "health and nutrition information",
      "Latin American music and culture"
    ],
    answer: 3,
    back: "(4) Latin American music and culture — immigrants fight sadness and nostalgia \"manteniendo el contacto con su música, su gente y su cultura\" through stations like Radio Nuevo Mundo, \"de inmigrantes para inmigrantes.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What does the announcer say about this artist?",
    choices: [
      "He will exhibit his work in the United States.",
      "He will start teaching in a university in Bogota.",
      "He will become a director of a museum.",
      "He will give a series of lectures in Spain."
    ],
    answer: 0,
    back: "(1) He will exhibit his work in the United States — \"Ahora el Sr. Diaz presentará su primera exposición individual en museos de arte de Nueva York a Los Ángeles.\""
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué les invitan a hacer?",
    choices: [
      "participar en un concurso",
      "asistir a clases",
      "conocer a un autor",
      "comprar libros a descuento"
    ],
    answer: 2,
    back: "(3) conocer a un autor — la librería González recibe por primera vez al autor de una novela popular: \"pasen a la mesa para saludar al autor y para que les dé su autógrafo.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué tipo de producto se anuncia?",
    choices: [
      "un producto para cultivar las plantas",
      "un producto para relajarse",
      "un producto electrodoméstico",
      "un producto comestible"
    ],
    answer: 1,
    back: "(2) un producto para relajarse — los productos de Aromaterapia \"Jardín del Bienestar\" \"pueden reducir el estrés en la vida\" y ofrecen aromas \"que promueven el relajo, la vitalidad, o el equilibrio mental.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Para quiénes es útil esta información?",
    choices: [
      "para los que nadan en el mar",
      "para los que juegan muchos deportes",
      "para los que cocinan a menudo",
      "para los que trabajan en edificios altos"
    ],
    answer: 0,
    back: "(1) para los que nadan en el mar — el consejo responde a la pregunta \"¿Has notado irritación en la piel después de bañarte en el océano?\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué se puede ver en Buenos Aires durante este evento?",
    choices: [
      "exposiciones del arte de Berlín",
      "conciertos de música argentina",
      "presentaciones de bailes regionales",
      "conferencias políticas internacionales"
    ],
    answer: 0,
    back: "(1) exposiciones del arte de Berlín — \"Los visitantes a Buenos Aires pueden ver unas exposiciones como “la Nueva Berlín”, una colección de fotos y “Actualizaciones de la bandera de Berlín”, con obras realizadas por artistas alemanes.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿De qué trata este anuncio?",
    choices: [
      "una nueva canción",
      "una obra de teatro",
      "un programa de televisión",
      "un partido deportivo"
    ],
    answer: 2,
    back: "(3) un programa de televisión — llega a Univisión \"Te amaré en silencio,\" \"la primera telenovela producida por esta cadena,\" con cita \"a las nueve de la noche.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿De qué habla tu amiga?",
    choices: [
      "de las comidas que le gustan",
      "de las atracciones que van a visitar",
      "de las tiendas donde compra",
      "de las playas que prefiere"
    ],
    answer: 1,
    back: "(2) de las atracciones que van a visitar — \"Quiero mostrarte las obras del artista famoso, Gaudí\": una catedral famosa y otros edificios diseñados por este artista en Barcelona."
  },
  // ----- Part 3a: Reading, long passage with Spanish questions (Q16-20) -----
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q16",
    stem: "Q16. Según el artículo, ¿por qué continúa la popularidad del flamenco en los Estados Unidos?",
    choices: [
      "Muchos bailadores lo llevan al público estadounidense regularmente.",
      "Muchos norteamericanos van a España a estudiarlo.",
      "El gobierno español lo promueve en los Estados Unidos.",
      "Lo enseñan en muchas universidades estadounidenses."
    ],
    answer: 0,
    back: "(1) Muchos bailadores lo llevan al público estadounidense regularmente — el flamenco \"florece en teatros de las principales ciudades norteamericanas gracias a los bailadores que se conocen por sus espectáculos vivos,\" en una tradición que va de la familia Cansino a Teodoro Morca."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué imagen del flamenco quiere cambiar María Benítez?",
    choices: [
      "que es demasiado lento",
      "que es un baile sólo para los adultos",
      "que es de origen mexicano",
      "que es difícil de aprender"
    ],
    answer: 2,
    back: "(3) que es de origen mexicano — Benítez \"ha tratado siempre de eliminar la imagen incorrecta del flamenco creada por las películas de Hollywood, donde se da la impresión de que el flamenco es un baile mexicano. No es verdad; es un baile decididamente español.\""
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Dónde ha tenido María Benítez sus mejores espectáculos?",
    choices: [
      "en Boston",
      "en Santa Fe",
      "en Washington, D.C.",
      "en Nueva York"
    ],
    answer: 1,
    back: "(2) en Santa Fe — \"mis mejores espectáculos han sido en Santa Fe donde después de catorce años tengo un público muy leal que viene todos los veranos al ambiente íntimo de mis espectáculos.\""
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿A quiénes ayuda el dinero que recibe la universidad del Festival de Flamenco?",
    choices: [
      "a los jovenes que quieren aprender a bailar",
      "a los profesores que quieren escribir sobre la danza",
      "a los jovenes que desean aprender medicina",
      "a los profesores que ofrecen cursos de pintura"
    ],
    answer: 0,
    back: "(1) a los jovenes que quieren aprender a bailar — \"Con los fondos recibidos, la universidad provee becas de estudio para jóvenes en los Estados Unidos que aspiran a hacer carrera en las artes.\" (El examen imprime \"jovenes\" sin acento en estas opciones.)"
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cuál es la reacción de los niños que ven el flamenco en sus clases?",
    choices: [
      "Se ríen.",
      "Se enojan.",
      "Se entusiasman.",
      "Se aburren."
    ],
    answer: 2,
    back: "(3) Se entusiasman — \"Cuando los bailadores entran en las clases los niños se fascinan y aplauden, y a través del flamenco, se conectan positivamente con la cultura y con el idioma español.\""
  },
  // ----- Part 3b: Realia with English questions (Q21-25) -----
  { ...STIMULI.certamen,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is being advertised?",
    choices: [
      "a literary contest",
      "a sporting event",
      "a random drawing",
      "a quiz show"
    ],
    answer: 0,
    back: "(1) a literary contest — the XI Certamen de Relatos Breves (short-story contest) of Diario de Mallorca: unpublished stories of up to seven typed pages compete for prizes of 300, 200 and 100 euros, judged by a jury."
  },
  { ...STIMULI.zapatillas,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is this article about?",
    choices: [
      "a sports program for children",
      "a fabric for children’s clothing",
      "children’s shoes that stretch",
      "pets for children"
    ],
    answer: 2,
    back: "(3) children’s shoes that stretch — the German maker K2 invented \"unas zapatillas deportivas para niños que crecen al mismo ritmo que el pie del pequeño\": a button activates an expansion panel that adjusts to different sizes."
  },
  { ...STIMULI.diaAnimal,
    type: "mc",
    label: "Q23",
    stem: "Q23. Why is this day celebrated in Argentina?",
    choices: [
      "to help protect the environment",
      "to honor an important person",
      "to elect new government officials",
      "to commemorate the country’s independence"
    ],
    answer: 1,
    back: "(2) to honor an important person — the Día del Animal (April 29) \"se conmemora en honor del doctor Ignacio Albarracín,\" the tireless animal-rights champion who promoted the 1891 animal-protection law and died on that date in 1926."
  },
  { ...STIMULI.huracan,
    type: "mc",
    label: "Q24",
    stem: "Q24. Why are some names taken off the hurricane name list?",
    choices: [
      "They were listed out of alphabetical order.",
      "They appear on another one of the six lists.",
      "It depends on whether this is a year for male or female names.",
      "They were previously used to refer to very violent hurricanes."
    ],
    answer: 3,
    back: "(4) They were previously used to refer to very violent hurricanes — \"un nombre es retirado de la lista cuando se usó para un huracán, que causó muertes y daños extremos,\" like Andrew, Bob, Camille, David, Elena, Frederic and Hugo."
  },
  { ...STIMULI.foroPublico,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is the purpose of this letter?",
    choices: [
      "to request a magazine subscription",
      "to advertise a store opening",
      "to express congratulations",
      "to suggest an idea for an article"
    ],
    answer: 2,
    back: "(3) to express congratulations — Pedro Melgar opens \"A los editores, mis felicitaciones\" and celebrates the birth of the new newspaper \"El Norte,\" wishing the editors much success."
  },
  // ----- Part 3c: Reading, second passage with English questions (Q26-30) -----
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "Q26",
    stem: "Q26. What did Luis and Ester create?",
    choices: [
      "a new business",
      "a new medicine",
      "a new cooking method",
      "a new television commercial"
    ],
    answer: 0,
    back: "(1) a new business — the Catalan couple dared \"a lanzar en España la marca Cola Somos 51\"; after convincing investors, \"Así, comenzó el negocio.\""
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "Q27",
    stem: "Q27. According to Luis and Ester, what is the main goal for their activities?",
    choices: [
      "getting famous quickly",
      "helping special causes",
      "supporting political events",
      "encouraging tourism"
    ],
    answer: 1,
    back: "(2) helping special causes — they are not in it to get rich: \"el 51 por ciento de los beneficios generados por la venta de esta bebida van a causas humanitarias para curar enfermedades graves y proyectos en el Tercer Mundo.\""
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "Q28",
    stem: "Q28. Why did Luis and Ester change careers?",
    choices: [
      "They were not earning enough money.",
      "Their work required traveling.",
      "Their work was stressful and boring.",
      "They needed to spend more time with their children."
    ],
    answer: 2,
    back: "(3) Their work was stressful and boring — the financier and engineer \"tomaron la decisión de cambiar su vida de estrés y rutina y comenzar de nuevo.\""
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "Q29",
    stem: "Q29. What was the most difficult task?",
    choices: [
      "finding employees",
      "choosing a location",
      "financing the business",
      "advertising the project"
    ],
    answer: 2,
    back: "(3) financing the business — \"Ahora empezaba lo más difícil: encontrar la financiación para tal proyecto tan extraño,\" requiring long discussions with bankers before three other young people were convinced."
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "Q30",
    stem: "Q30. What makes this product unique?",
    choices: [
      "its price",
      "its flavor",
      "its dark color",
      "its medical benefits"
    ],
    answer: 1,
    back: "(2) its flavor — \"¿Y cuál es el secreto que le da a esta bebida un sabor diferente a los otros refrescos?\": flavor expert Luis Ferrant blends lime, guaraná, vanilla and other aromas."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). Your school’s foreign language club advisor will be retiring this year and the club will need a new advisor for next year. In Spanish, write a letter to your Spanish teacher to convince him or her to be the next advisor of the club. You may wish to include:
• why the students need to have a foreign language club
• the purpose of the club
• how the club is organized
• what you like about the club
• the meeting times and location of the club
• the responsibilities of the club members
• your request for him or her to be the advisor for the club
• why the teacher would be a good advisor for the club
• the kinds of activities the advisor does for the club

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Señor Martillo,
Como ya sabe, la Señora Gómez se va a jubilar al fin de este año. Ella lleva muchos años como consejera del club de español. Necesitamos tener un consejero nuevo para continuar con el trabajo de este club. Este club tiene muchos proyectos durante el año: presentamos programas culturales a los alumnos de la escuela, damos serenatas en español a los pacientes en unos hospitales, enseñamos español a los niños en kinder y tenemos varias fiestas durante el año. Es importante que sigamos con estas actividades pero no lo podemos hacer sin usted.
Por favor, ayúdenos. Nos reunimos todos los martes a las tres y media en el salón 302.
Gracias,
María

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). A community organization is offering a scholarship to one high school student to take a foreign language course at a nearby university. Students must write a letter in a foreign language to the organization in order to be considered for the scholarship.
In Spanish, write a letter to the organization expressing your interest in receiving the scholarship to take a foreign language course at the university. You may wish to include:
• an introduction of yourself
• why you would like the scholarship
• how long you have been studying a foreign language
• why you want to take a foreign language course at the university
• how you use your foreign language skills
• why you want to improve your foreign language skills
• your future plans
• an expression of appreciation for considering you

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido presidente:
Soy Arturo Peralta y estoy estudiando en una secundaria cerca de Albany en Nueva York. Les pido que me consideren como recipiente de la beca de su organización.
Me interesa el programa de estudios hispanos de su Universidad. A mí me gusta mucho la lengua española y quiero aprender más de la cultura y de los países hispanohablantes.
Ahora soy el presidente del club de español de mi escuela y también ayudo con clases de tutoría a los estudiantes que tienen dificultades con el español. Me gustaría mejorar mi dominio de la lengua a través de este programa y creo ser buen candidato. Estudio el español desde hace muchos años y siempre aprendo y practico con mis amigos hispanos. También, escucho música hispana y miro los canales de tele en español en mi casa.
Creo que hablo bastante bien, pero quiero tener la oportunidad de hablar mejor. En el futuro me gustaría ser traductor y quisiera trabajar en los hospitales para ayudar a las personas enfermas. Después que termine la universidad, quiero viajar o vivir en Venezuela. Espero recibir esta beca porque me ayudaría mucho con mis planes para el futuro.

Rubric: a letter accomplishing the task with many connected details, clear organization with salutation and closing, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

La mamá de Pedrito estaba cansada. Se sentó en el sofá y se puso a leer su revista favorita. De repente llegó Pedrito muy preocupado. Le dijo a su mamá que necesitaba ensayar su trompeta, pero ¡la había dejado en la escuela! Quería que su madre lo llevara a la escuela. Ella no estaba muy entusiasmada. Lo regañó por haber olvidado otra vez. Pedrito le recordó que mañana habrá un concierto de la orquesta juvenil. Muchas personas van a asistir, incluyendo la familia. La madre decidió llevarlo a la escuela pero cuando llegaron encontraron que todo estaba cerrado con llave. ¡Qué lío! Ahora Pedro no estará listo para el concierto.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.flamenco,
    type: "mc",
    label: "S1",
    stem: "S1. Según el artículo, ¿quién se convirtió en el bailador de flamenco más reconocido por el público norteamericano en los años 50?",
    choices: [
      "Vicente Escudero",
      "el padre de Rita Hayworth",
      "José Greco",
      "Teodoro Morca"
    ],
    answer: 2,
    back: "(3) José Greco — \"en los 50, el genial José Greco que, con su magnífica compañía de baile, se convirtió en el bailador más reconocido por el público norteamericano.\" Escudero fue figura de los años 30 y el padre de Rita Hayworth dirigía la familia Cansino en los 20."
  },
  { ...STIMULI.flamenco,
    type: "mc",
    label: "S2",
    stem: "S2. Según el artículo, ¿cuántos jóvenes son seleccionados para recibir las becas de estudio del Festival del Flamenco?",
    choices: [
      "sólo veinte de los cientos interesados",
      "todos los que se interesan",
      "doce bailarines profesionales",
      "cincuenta estudiantes universitarios"
    ],
    answer: 0,
    back: "(1) sólo veinte de los cientos interesados — \"De los cientos que se interesan en las becas, sólo veinte son seleccionados,\" y además de las becas reciben trajes, castañuelas y oportunidades de actuar en las escuelas."
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "S3",
    stem: "S3. According to the article, why does the company not sell its drink in cans?",
    choices: [
      "Cans are too expensive to produce.",
      "They fear contamination.",
      "Their factory only makes bottles.",
      "Customers prefer larger sizes."
    ],
    answer: 1,
    back: "(2) They fear contamination — \"Ester explica que no usan latas por miedo de contaminación\"; the drink comes only in two-liter and half-liter bottles."
  },
  { ...STIMULI.colaSomos,
    type: "mc",
    label: "S4",
    stem: "S4. According to the article, what happened to the restaurant Luis and Ester opened in the Catalan Pyrenees?",
    choices: [
      "It had to close for lack of customers.",
      "It became so successful that the Guía Michelín recommends visiting it.",
      "It was sold to pay for the new beverage factory.",
      "It was converted into a bottling plant."
    ],
    answer: 1,
    back: "(2) It became so successful that the Guía Michelín recommends it — Picot Negre \"empezó a tener gran éxito, hasta aparecer en la Guía Michelín. Ya es uno de los restaurantes que la Guía recomienda visitar.\""
  },
  { ...STIMULI.l01,
    type: "mc",
    label: "S5",
    stem: "S5. According to the broadcast, where is the exhibition of the Mochica civilization being presented?",
    choices: [
      "at a university in Lima",
      "at the Metropolitan Museum in New York",
      "at a gallery on the north coast of Peru",
      "at the National Museum of Madrid"
    ],
    answer: 1,
    back: "(2) at the Metropolitan Museum in New York — \"Se trata de una exposición de la civilización mochica que se presenta en el Museo Metropolitano de Nueva York,\" showing 125 objects from the tomb of a chief of ancient Peru."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S6",
    stem: "S6. According to the announcement, what should diners at “El Chiquito” do after sitting down?",
    choices: [
      "wait for the daily specials to be announced",
      "order everything at once, from drinks to desserts",
      "reserve a table for the next visit",
      "ask to sit near the beach"
    ],
    answer: 1,
    back: "(2) order everything at once — \"Después de sentarse, uno debe pedir todo a la vez,\" because with so many people eating there \"es probable que sólo tenga una oportunidad para hacerlo.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S7",
    stem: "S7. Según el anuncio, ¿cuál es la idea de este evento cultural?",
    choices: [
      "crear un puente de intercambio entre Buenos Aires y Berlín",
      "construir un museo nuevo en Buenos Aires",
      "vender obras de arte argentinas en Europa",
      "celebrar el aniversario de la ciudad de Berlín"
    ],
    answer: 0,
    back: "(1) crear un puente de intercambio entre las dos ciudades — \"La idea es crear un puente de intercambio entre las dos ciudades. Buenos Aires mostrará en Berlín parte de su arte y viceversa,\" desde el 7 de septiembre."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "S8",
    stem: "S8. Según el anuncio, ¿a qué hora se puede ver esta historia de amor?",
    choices: [
      "a las seis de la tarde",
      "a las siete de la tarde",
      "a las nueve de la noche",
      "a medianoche"
    ],
    answer: 2,
    back: "(3) a las nueve de la noche — \"Así que no olvides tu cita con esta apasionada historia de amor a las nueve de la noche,\" la telenovela con Eduardo Yáñez y la modelo brasileña Ana Carolina da Fonseca."
  },
  { ...STIMULI.certamen,
    type: "mc",
    label: "S9",
    stem: "S9. According to the announcement, what is the maximum length of a story entered in the contest?",
    choices: [
      "thirty pages, single-spaced",
      "seven typed pages, double-spaced, on one side",
      "four pages, handwritten",
      "one page per copy submitted"
    ],
    answer: 1,
    back: "(2) seven typed pages, double-spaced, on one side — rule 3: \"La extensión máxima será de siete folios escritos a máquina, a doble espacio, por una sola cara y un promedio de treinta líneas por folio.\""
  },
  { ...STIMULI.huracan,
    type: "mc",
    label: "S10",
    stem: "S10. According to the article, how are the six lists of storm names organized?",
    choices: [
      "Each list has 23 names from A to W and the lists are used in rotation.",
      "Each list has 26 names, one for every letter of the alphabet.",
      "A new list of names is written every year.",
      "Each list is used only once and then retired."
    ],
    answer: 0,
    back: "(1) Each list has 23 names from A to W, used in rotation — \"Existen seis listas de nombres... cada una está compuesta de 23 nombres de la A a la W. Las listas son usadas en rotación,\" so the 1997 group was reused in 2003."
  }
];
