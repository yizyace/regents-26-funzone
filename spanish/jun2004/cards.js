// June 2004 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2004/.
// Printed quirks kept verbatim: "Depués" (Q18 stem), "decidió que su hija iba a
// bailar" (Part 3a passage), "Ultimamente"/"Esta debe estar" (TDC items 14/10),
// "marrueca/francesa", "ganó premio festival", "el Esclerosis Múltiple" (Part 3c
// passage), and the official 8-credit samples' "nostros", "en en este viaje",
// "un sinópsis". Note: the printed Q33 cartoon shows a blank easel sign; the
// PDF's invisible text overlay reads "CINE CINCO" there.

const TDC_SRC = "Teacher Dictation Copy, June 2004 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to the radio in Spain and you hear:

[La maestra lee] Subway to Sally es un grupo musical que se ha apoderado de las listas de popularidad en gran parte de Europa. Y no es para menos, pues estos siete alemanes han podido hacer una mezcla de lo más extraño, ya que combinan melodías de la Edad Media con música típica europea y sonidos de metal moderno. Así que si eres una de las personas que le gusta escuchar cosas nuevas en la escena musical, este disco es para ti.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are watching a talk show on Spanish television. You hear this discussion about a successful author:

[La maestra lee] Según Daniel Goleman, autor del mejor libro del año La inteligencia emocional, cuando aplaudimos los primeros pasos de un niño, un río de substancias neuroquímicas fortalecen sus circuitos mentales. Es un dato más que demuestra que se debe reconocer los logros del niño para conseguir su desarrollo emocional y mental.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to the radio in Cancun and hear this announcement:

[La maestra lee] ¿Estás de vacaciones y deseas hacer algo diferente? ¡Ven a Parque Nizuc! Ven y disfruta de nuestras tres atracciones. Sí, Parque Nizuc tiene tres atracciones por el precio de una. Wet ‘n Wild es nuestro parque acuático y es pura diversión. Si quieres aprender algo, te gustará la experiencia de Atlántida, el único delfinario en Cancún. Puedes nadar y jugar con los delfines. Si tienes ganas de hacer una exploración submarina, ven a Baxal-Há. Aquí podrás bucear y ver una gran variedad de vida marina. ¿Por qué gastar más tiempo y dinero buscando actividades agradables cuando puedes pasar todo el día en el Parque Nizuc? ¡Qué divertido!`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are watching a television broadcast in Spanish. You hear:

[La maestra lee] ¿Quiere recibir los mejores descuentos? Llame hoy para obtener la tarjeta que ofrece la posibilidad de descuentos de 35 a 50%. Inscribirse hoy para restaurantes, apartamentos, camping, comercios, deportes y aventura, cultura, espectáculos, viajes y ocio. Los hoteles están a un descuento de casi 50%. Llame hoy para hacer que su dinero se utilice lo mejor posible.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are getting on a motorboat at the lagoon on Margarita Island, Venezuela. The boatman says:

[La maestra lee] Señores y señoras, les pedimos por favor, que sigan estas reglas para su bienestar y seguridad. Por favor, no se levanten o muevan de lugar mientras la lancha esté moviéndose.

No se levanten ni se muevan de un lado a otro y por favor, no pongan las manos en el agua. Gracias. ¡Que tengan buen viaje!`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to a Spanish radio station in New York City and hear this announcement:

[La maestra lee] El Festival de Cine de Nueva York comienza el 27 de septiembre con una extraordinaria selección de películas y cortos de varias partes del mundo. Veinticinco países están representados este año, con los mejores ejemplos de España a Hong Kong. Hay varias funciones por la tarde y por la noche. Todavía hay boletos disponibles. Para pedir más información, llame al 875-5605.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are in a department store in Colombia and you hear this announcement over the store’s loudspeaker:

[La maestra lee] Buenos días, damas y caballeros. Hoy, con mucho gusto, este almacén anuncia una gran venta de otoño. Esta tienda se va a cerrar el 1º de noviembre. En cada piso hay muchas gangas y unos descuentos de más de cincuenta por ciento. Ahora mismo hay ofertas de ropa juvenil muy a la moda, juguetes para bebés, objetos para el hogar, sofás, alfombras y mucho más. En la planta baja hay muchos recuerdos del país. Hay que vender todo porque vamos a trasladar la tienda a otra parte de la ciudad. ¡No pierdan esta gran oportunidad!`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are listening to the radio in New York City and hear this announcement:

[La maestra lee] El Consulado General de la República Dominicana en Nueva York les entregó a más de 400 estudiantes la medalla de “Mérito Estudiantil” en City College. Estuvieron presentes destacadas personalidades del estado de Nueva York y los padres y familiares de los estudiantes.

Los estudiantes recibieron el premio por haber recibido calificaciones de 90 a 100 puntos. Fueron seleccionados por sus profesores y reconocidos por sus esfuerzos. Este año se reconocieron a más de 400 nuevos alumnos en distintos niveles académicos.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are on a flight to Mexico and hear this announcement:

[La maestra lee] El equipo electrónico aprobado para el uso mientras el avión está en la plataforma es el siguiente: las computadoras portátiles, los teléfonos celulares y los bipers de doble comunicación. Solicitamos su cooperación en apagar y guardar todo equipo electrónico portátil después de que el capitán haya encendido el aviso de cinturones de seguridad. Todos los aparatos electrónicos deberán permanecer apagados mientras el avión esté en movimiento, para el despegue y el aterrizaje hasta que lleguemos al terminal. Durante el vuelo el capitán o un miembro de la tripulación le dirá cuándo usted puede usar equipo electrónico portátil.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to the radio and hear this advice:

[La maestra lee] Cuando llegan flores frescas a casa, hay algunos cuidados básicos para que se mantengan sanas y fuertes por más tiempo. Es importante el cambio de agua. Esta debe estar a la temperatura del ambiente, ya que las flores son muy sensibles al frío. Los conservantes especiales para flores prolongan la vida de las plantas; en tal caso, hay que añadir todos los días agua fresca. Si no se emplean estos productos, hay que cambiar toda el agua una vez al día.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to a travel program on the radio. This is what you hear:

[La maestra lee] Esta semana, nuestro destino es la ciudad de San Francisco, California. Esta bella ciudad estadounidense se considera como la más europea y singular de las metrópolis norteamericanas. Con sus cafés al aire libre, sus panaderías de primera clase, sus barrios multiculturales, y su clima templado, San Francisco es una destinación preferida de turistas de todas partes del mundo. Como las ciudades de Europa, San Francisco no es solamente una ciudad moderna dinámica, sino también una ciudad histórica. Y como esas ciudades, tiene su propio ambiente pintoresco. ¡Vengan a San Francisco!`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to the radio in San Juan and you hear:

[La maestra lee] Primero, precaliente el horno a 400 grados. Mezcle dos tazas de harina con un cuarto de taza de azúcar. Añada una taza de leche y un huevo batido. Ponga media taza de aceite y una banana. También se puede poner media taza de nueces picadas. Ponga la mezcla en una sartén y hornee por unos quince minutos o hasta que esté dorada.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are watching television and hear this report:

[La maestra lee] Esmeralda Santiago nació y creció en Puerto Rico. Llegó a los Estados Unidos a la edad de trece años. Asistió a una escuela en Brooklyn, Nueva York. Se graduó de la Escuela Secundaria de Artes de la Interpretación de Nueva York. Después de graduarse de la universidad escribió su primer libro con el título, “Cuando era puertorriqueña”. Este libro cuenta la historia de su infancia pobre pero feliz, en Puerto Rico. En su segundo libro cuenta de su adolescencia.

Ambos libros han sido considerados como clásicos dentro de la literatura cultural y de la conciencia emocional en la literatura. Los dos son muy populares con los lectores de habla hispana.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are watching a travel program on television. This is what you hear:

[La maestra lee] Ultimamente los cruceros se han popularizado. Muchos novios eligen este medio para celebrar su luna de miel. No hay mejor ambiente que el aire fresco, el mar y el cielo azul que les rodee. Los cruceros tienen ahora tanto éxito que los padres embarcan con sus niños. La vida a bordo ofrece una variedad de actividades para ocupar el tiempo. La comida es excelente, el servicio es rápido y el ambiente es relajante. ¡Vengan y hagan un crucero!`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio and hear this advertisement concerning a restaurant in Mallorca:

[La maestra lee] A Miguel Arias Molino, propietario y director del restaurante mallorquín Flanigan, le gusta definirse como una persona creativa y práctica. Acaso por eso dice que la cocina de su restaurante no puede calificarse ni nueva, ni moderna, ni clásica. Es más bien una cocina natural, a base de materias de primera calidad, no complicada, y con referencias a todas las gastronomías de España.`,
    psource: TDC_SRC
  },
  ballet: {
    passage: `Sinfonía de color y movimiento

En 1925, México vivía en la época posrevolucionaria. Amalia Hernández tenía sólo ocho años de edad cuando se enfrentó a su padre, el coronel Lamberto Hernández García, para decirle, decididamente, que quería ser bailarina. Fue una mujer que se adelantó a su tiempo. Una mujer soñadora pero con las ideas bien claras. Ya que su padre decidió que no quería exponer a su hija a la vida pública, decidió que su hija iba a bailar.

Amalia Hernández nació el 19 de septiembre de 1917 en la Ciudad de México. Vivía en el rancho Las Palmas, muy cerca de la capital de México.

Su padre, el coronel Hernández García, contrató al ruso Hipólito Sybine, el bailarín principal de la compañía de Anna Pavlova y a Nesly Dambre, integrante del Ballet de la Opera de París, para que Amalia iniciara clases privadas de ballet. Así se inició lo que sería su mayor pasión durante toda una vida.

La primera experiencia de Amalia Hernández fue con el ballet clásico. Después estudió con la bailarina española Encarnación López, llamada “La Argentinita,” y con el coreógrafo estadounidense Waldeen, quien introdujo la danza contemporánea en México.

Aunque Amalia, quien fue entrenada en el baile clásico, descubrió que era más fuerte la intensidad de las bandas callejeras, las procesiones de los pueblos, los bailes y ritos de México más profundos, indio y mestizo, rural y urbano. Por eso, bajo la influencia de Luis Felipe Obregón, el primer folklorista de México, decidió llevar su formación clásica al descubrimiento de un baile de tipo folklórico propio de ella. Amalia escogió bailes, rituales y leyendas tradicionales que ella transformó en coreografías audaces y con estilo.

Empezó a popularizar sus ideas de baile como profesora de baile y coreografía en el Instituto Nacional de Bellas Artes de México. En 1952, dejó el instituto y con la ayuda de un empresario mexicano, Emilio Azcárraga Vidaurreta, director de la cadena de televisión en México, formó una pequeña compañía de ocho bailarines e inició una serie de programas de ballet que tuvo mucho éxito. Así nació el Ballet Folklórico de México creado por Amalia Hernández. Más tarde el Departamento de Turismo de México la nombró embajadora oficial de la cultura de México. En 1961, el Ballet recibió el primer premio en el Festival de las Naciones en París como uno de los mejores representantes de danza étnica en el mundo. Un año después comenzó su exitosa gira en los Estados Unidos. Desde entonces, Amalia Hernández ha estado preparando el espléndido repertorio actual de la compañía.

Quizá uno de los ballets más representativos del Ballet Folklórico de México es la Danza del Venado. Este baile está inspirado en el rito de la comunidad yaqui. Los yaquis son un grupo de indios al norte de México de poca influencia española. La danza del venado reproduce con dramatismo y belleza un baile que los yaquis hacían antes de cazar el venado.

En sus coreografías se destaca la calidad de la música, la cuidada elaboración del vestuario, el rigor técnico y sobre todo, la intensidad y la profundidad de una cultura de más de treinta siglos de herencia histórica que se expresa a través del color y movimiento.

El Ballet Folklórico de México se ha presentado en lugares como el Lincoln Center y el Carnegie Hall de Nueva York. Ha recibido más de 200 premios en los casi cincuenta años de existencia del Ballet entre los destacados fue la Medalla de la Paz otorgada en 1963 por el Canadá.

Actualmente la compañía está integrada por 350 bailarines, músicos y técnicos divididos en dos compañías. Una de las compañías es itinerante, que viaja por todo el mundo y la otra compañía es permanente con presentaciones anuales en el Palacio de Bellas Artes en la Ciudad de México.

Una de las grandes creaciones de Amalia Hernández fue la fundación de la Escuela del Ballet Folklórico de México para formar bailarines profesionales en danza folklórica, danzas indígenas y mestizas, ballet clásico y danza moderna. En esta escuela se han formado varias generaciones de bailarines que se han integrado al Ballet de Amalia Hernández o que han creado sus propias compañías en México.

Amalia Hernández dejó una hermosa herencia para México y la cultura hispanoamericana que continúa sorprendiendo a los espectadores del mundo. Hoy en día su hija es la directora de esta compañía.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 22, 2004"
  },
  porques: {
    imgs: [
      { src: "img/q21-los-porques-naturaleza.jpg",
        cap: "Los porqués de la naturaleza advertisement — reading selection for question 21, Comprehensive Examination in Spanish, June 2004",
        alt: "Magazine advertisement in Spanish for a children's nature book. Headline: Prepárese a escuchar los secretos y misterios de la naturaleza, next to a photograph of children reading together. The text says that even in this modern world nature keeps intriguing us with its mysteries — why is the sky blue, where does the wind come from, why doesn't the spider get trapped in its web, why are days longer in summer, why does ice float, how does a chameleon change color — and that Los porqués de la naturaleza answers questions about the world of animals, plants, flowers, minerals, and phenomena of the planet, with revealing photographs. A picture shows the book cover with a butterfly and nature photos. Order details: real size 21.3 by 27.6 cm, 336 pages, 471 illustrations and photographs; only $28.10 plus $4.85 postage, C.O.D. or money order, single total payment $32.95; to save the C.O.D. cost, send a check or money order for $29.70." }
    ]
  },
  reebok: {
    imgs: [
      { src: "img/q22-la-calle-esta-suave.png",
        cap: "“La calle está suave” magazine column — reading selection for question 22, Comprehensive Examination in Spanish, June 2004",
        alt: "Boxed magazine column in Spanish headed La calle está suave: between 1982 and 1987 the Reebok company's sales climbed from $3.5 to $1,400 million. Part of this incredible growth is credited to Angel Martínez, raised in the Bronx and now living in Los Angeles, inventor of Reebok's aerobic shoe, of which 20 million pairs have been sold around the world. The idea occurred to Angel while he watched women exercising in running shoes, when he worked as a sales representative for his company in California. His design not only proved perfectly suited to aerobic exercise but set the fashion for the casual shoe — light, elegant, in soft leather and various colors. Martínez is Reebok's vice president of commercial development and a millionaire several times over." }
    ]
  },
  peaje: {
    imgs: [
      { src: "img/q23-peaje-salinas.png",
        cap: "Salinas toll plaza notice, Government of Puerto Rico — reading selection for question 23, Comprehensive Examination in Spanish, June 2004",
        alt: "Boxed public notice in Spanish headed MEJORAS EN LA PLAZA DE PEAJE DE SALINAS, signed GOBIERNO DE PUERTO RICO. It announces improvements planned for more comfortable travel: effective September 1, tolls will be paid in only one direction at the Salinas toll plaza. In the Ponce to San Juan direction, two-axle vehicles will pay $1.25, five cents less than the current round-trip toll. In the San Juan to Ponce direction there will be express lanes free of charge. Other rates apply to heavy vehicles; the rest of the highway system's tolls remain unchanged. Drivers are asked to watch for the signs that will be installed with information about how these improvements will change the traffic pattern." }
    ]
  },
  conEdison: {
    imgs: [
      { src: "img/q24-con-edison-folleto.png",
        cap: "Con Edison free-booklet coupon advertisement — reading selection for question 24, Comprehensive Examination in Spanish, June 2004",
        alt: "Boxed advertisement in Spanish headed Un folleto gratis de Con Edison. The text says this booklet was prepared to help you save energy and money in your home; many of the ideas in the booklet “A bajo-costo, A ningún-costo. Ideas que ahorran energía” cost nothing, others cost $5 or less, and you will find valuable advice to feel comfortable all year round, including suggestions for cooking, washing, lighting, and many ways of using your electric appliances more intelligently. Request the free booklet by filling out and mailing the coupon below. The mail-in coupon is addressed to Con Edison, P.O. Box 900, New York, N.Y. 10003, and has blank lines for name, address, city, state, and zip code, next to the Con Edison logo with the slogan “la energía de Nueva York.”" }
    ]
  },
  precios: {
    imgs: [
      { src: "img/q25-buenos-precios-espana.png",
        cap: "“Buenos precios en España” announcement — reading selection for question 25, Comprehensive Examination in Spanish, June 2004",
        alt: "Boxed news announcement in Spanish titled Buenos precios en España: Spain is one of the European Union markets where new automobiles are cheapest and best equipped, according to the results of a survey by the European Commission — in fact it holds third place on the list of the Fifteen with the most economical prices. The Spanish market, along with the Dutch, Swedish, and Portuguese ones, is where the consumer can buy at the lowest prices the same vehicles for which the English and the Germans pay the highest prices. In addition, European Executive sources reported the great increase in Spain in sales of luxury automobiles in the first seven months of the year." }
    ]
  },
  quinn: {
    passage: `Un padre y un hijo del mundo cinematográfico

Francesco Quinn está siguiendo los pasos de su papá y es la copia viva de él.

Durante la filmación de una escena de la serie popular JAG, Francesco Quinn, hijo del célebre actor Anthony Quinn, paseaba por el desierto del sur de California a caballo. Al camarógrafo le recordó la figura del legendario padre y lo llamó “Tony”. “Lo siento,” dijo después. “Es que te pareces demasiado a tu padre.” “Da miedo como me parezco a él,” dice Francesco.

Anthony Quinn nació en Chihuahua, México, de herencia mexicana/irlandesa. Sus padres se establecieron en Texas y después en California donde su padre consiguió un trabajo en los estudios Selznick. Poco a poco Anthony se metió en el mundo de Hollywood demostrando una gran capacidad interpretativa. Es lo que le abrió las puertas para conseguir muchos tipos de papeles. Que tuvo mucho éxito es evidente en las 250 películas que tiene a su nombre. Además tenía gran habilidad artística, dedicándose también a la pintura, la escultura y el diseño de joyas.

Francesco, como su padre tiene un estilo versátil, considerado un “actor de muchas caras.” Ha actuado en 23 películas mayores. Según Don Bellisario, creador de JAG, Francesco siempre crea un personaje memorable.

Francesco trata de hacer su propio camino. Ha actuado en varias cintas de cine independiente como la película Efecto de placebo, que ganó premio festival. Él es veterano de la telenovela Los Jóvenes y los inquietos, y aparece mucho en la tele. Recientemente tomó parte en el especial de televisión “Los Premios de Herencia Hispánica.”

Para Francesco, no ha sido fácil crecer como el hijo de un ídolo. Es que la esencia similar le ha creado un poco de perplejidad. En ocasiones los directores quieren que el joven Quinn duplique la leyenda de su padre. Una vez audicionó para un personaje en Italia. El director le exigió: “Levántate y dame esa mirada que tu padre tenía en Viva Zapata.” “La gente espera de mí que sea más alto,” dice Francesco. Mi padre medía 6’ 2” y yo 5’ 10.” Algunos hasta quisieran que él se subiera a una caja.

Porque su mamá era de Italia, Francesco creció entre allá y los Estados Unidos. Su niñera era marrueca/francesa. Por eso él habla inglés, italiano, español y francés. Es muy buen atleta, aficionado a los deportes “de extrema” como bucear, ciclismo de montaña y motociclismo. Está dispuesto a ayudar con causas sociales. Por ejemplo, él es portavoz por la seguridad en el motociclismo y ha participado en el turismo “MS 150.” Éste gana dinero para el Esclerosis Múltiple.

Francesco tiene mucho orgullo de su padre pero lucha con su legado. Continúa trazando su propio destino. Recientemente su esposa tuvo gemelos, Max y Michela. Porque su famoso abuelo ya ha muerto, los hijos de Francesco nunca lo conocerán. Sin embargo, van a descubrirlo por la obra que dejó, sus películas. Una noche, con Max en los brazos, Francesco se dio cuenta de que una de estas películas se presentaba en la televisión. Dice Francesco: “Subí el volumen para que mi hijo pudiera oír la voz de su abuelo.”

Tal vez un día Max y Michela tendrán niños que oirán las voces de su bisabuelo y a su abuelo de la misma manera.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 22, 2004"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-cine-cartoon.png",
        cap: "Picture for writing task 33 — Bunny Hoest & John Reiner, “Laugh Parade,” Parade (adapted), Comprehensive Examination in Spanish, June 2004",
        alt: "Line-drawing cartoon of a man and a woman standing at a movie-theater box office, talking with the cashier behind the counter. Above the cashier hangs a large board headed PELICULAS with fifteen numbered lines for movie titles. A rope stanchion stands at the left, and a large blank easel sign leans against the front of the counter." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is unique about this group’s music?",
    choices: [
      "Their music is played on all the major subways in Europe.",
      "Their music combines old melodies with modern sounds.",
      "Their music features an orchestra.",
      "Their music is only sold in Germany."
    ],
    answer: 1,
    back: "(2) Their music combines old melodies with modern sounds — the seven Germans of Subway to Sally \"combinan melodías de la Edad Media con música típica europea y sonidos de metal moderno.\""
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What advice does the author give?",
    choices: [
      "how to raise emotionally healthy children",
      "how to improve children’s diets",
      "how to avoid conflict in the home",
      "how to produce a best-selling book"
    ],
    answer: 0,
    back: "(1) how to raise emotionally healthy children — Goleman says applauding a child's first steps strengthens mental circuits: \"se debe reconocer los logros del niño para conseguir su desarrollo emocional y mental.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. Why should you go to this park?",
    choices: [
      "It has guided tours of Mayan ruins.",
      "You can ride the largest roller coaster in Cancun.",
      "It is the only site in Cancun to see zoo animals.",
      "It has several activities in one location."
    ],
    answer: 3,
    back: "(4) It has several activities in one location — \"Parque Nizuc tiene tres atracciones por el precio de una\": the Wet ‘n Wild water park, the Atlántida dolphinarium, and underwater exploring at Baxal-Há, so you can spend the whole day there."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is being advertised?",
    choices: [
      "rental properties",
      "a discount card",
      "a major sale",
      "sporting events"
    ],
    answer: 1,
    back: "(2) a discount card — \"Llame hoy para obtener la tarjeta que ofrece la posibilidad de descuentos de 35 a 50%\" at restaurants, apartments, camping, shops, sports, culture, shows, and travel."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What does the boatman advise?",
    choices: [
      "that you leave your possessions in the boat when you go ashore",
      "that you help your fellow passengers into the boat",
      "that you follow a few safety regulations",
      "that you not dive or swim from the boat"
    ],
    answer: 2,
    back: "(3) that you follow a few safety regulations — \"les pedimos por favor, que sigan estas reglas para su bienestar y seguridad\": stay seated while the launch is moving and keep hands out of the water."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is the topic of this announcement?",
    choices: [
      "films of various countries",
      "international art exhibits",
      "trips abroad",
      "holiday parties"
    ],
    answer: 0,
    back: "(1) films of various countries — the New York Film Festival offers \"una extraordinaria selección de películas y cortos de varias partes del mundo,\" with twenty-five countries represented."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Why is this sale taking place?",
    choices: [
      "The store wants to add a new style of children’s clothing.",
      "They are celebrating a national holiday.",
      "The department store is moving to a new location.",
      "Another floor is being added to the store."
    ],
    answer: 2,
    back: "(3) The department store is moving to a new location — \"Hay que vender todo porque vamos a trasladar la tienda a otra parte de la ciudad.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What did these students receive?",
    choices: [
      "prizes of one-hundred dollars",
      "a trip to the Dominican Republic",
      "a medal for academic achievement",
      "scholarships to City College of New York"
    ],
    answer: 2,
    back: "(3) a medal for academic achievement — the Dominican Consulate awarded more than 400 students \"la medalla de ‘Mérito Estudiantil’\" for earning grades of 90 to 100 points."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What do the airline personnel want you to know?",
    choices: [
      "a description of the movie they will show in flight",
      "when is the appropriate time to communicate with flight personnel",
      "the exact time you are arriving at your destination",
      "when you can use personal electronic devices in the airplane"
    ],
    answer: 3,
    back: "(4) when you can use personal electronic devices in the airplane — the announcement lists the approved equipment and explains that devices must stay off during taxi, takeoff, and landing until the crew \"le dirá cuándo usted puede usar equipo electrónico portátil.\""
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué se recomienda hacer con las flores cuando llegan?",
    choices: [
      "cortarlas dentro del agua",
      "cambiarles el agua",
      "darles remedios líquidos",
      "limpiarlas con agua"
    ],
    answer: 1,
    back: "(2) cambiarles el agua — \"Es importante el cambio de agua\"; sin conservantes especiales \"hay que cambiar toda el agua una vez al día.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué tiene en común San Francisco con las ciudades europeas?",
    choices: [
      "muchos artistas en los parques",
      "los precios bajos de las habitaciones",
      "los mercados siempre están abiertos",
      "una mezcla de lo histórico y lo moderno"
    ],
    answer: 3,
    back: "(4) una mezcla de lo histórico y lo moderno — \"Como las ciudades de Europa, San Francisco no es solamente una ciudad moderna dinámica, sino también una ciudad histórica.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué clase de programa estás escuchando?",
    choices: [
      "un programa de cocina",
      "un programa cultural",
      "un anuncio para un restaurante",
      "un anuncio para un supermercado"
    ],
    answer: 0,
    back: "(1) un programa de cocina — es una receta paso a paso: precalentar el horno, mezclar harina y azúcar, añadir leche, huevo, aceite y una banana, y hornear quince minutos."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿De qué se trata este reportaje?",
    choices: [
      "de dos libros de una autora puertorriqueña",
      "de un concierto de música clásica",
      "de libros para aprender español rápido",
      "de libros sobre lugares turísticos en Nueva York"
    ],
    answer: 0,
    back: "(1) de dos libros de una autora puertorriqueña — Esmeralda Santiago nació en Puerto Rico; su primer libro es “Cuando era puertorriqueña” y el segundo cuenta de su adolescencia; \"Ambos libros han sido considerados como clásicos.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿De qué se trata?",
    choices: [
      "un viaje en un gran barco",
      "una vacación en una isla",
      "un vuelo internacional en avión",
      "una excursión por el país en tren"
    ],
    answer: 0,
    back: "(1) un viaje en un gran barco — habla de los cruceros: \"Ultimamente los cruceros se han popularizado... La vida a bordo ofrece una variedad de actividades.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Cómo se puede calificar los platos del restaurante?",
    choices: [
      "como cocina nueva y moderna",
      "como cocina complicada",
      "como cocina clásica y picante",
      "como cocina básica de excelente calidad"
    ],
    answer: 3,
    back: "(4) como cocina básica de excelente calidad — \"Es más bien una cocina natural, a base de materias de primera calidad, no complicada.\""
  },
  // ----- Part 3a: Reading, long passage with Spanish questions (Q16-20) -----
  { ...STIMULI.ballet,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Qué le dijo Amalia Hernández a su padre a los ocho años de edad?",
    choices: [
      "quería estudiar drama",
      "quería dedicarse al baile",
      "que le gustaría vivir en México",
      "que prefería asistir a una escuela pública"
    ],
    answer: 1,
    back: "(2) quería dedicarse al baile — a los ocho años \"se enfrentó a su padre... para decirle, decididamente, que quería ser bailarina.\""
  },
  { ...STIMULI.ballet,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Con quién aprendió a bailar Amalia?",
    choices: [
      "con un familiar de ella",
      "con una bailarina en Nueva York",
      "con una maestra de su escuela pública",
      "con famosos bailarines de Europa"
    ],
    answer: 3,
    back: "(4) con famosos bailarines de Europa — su padre contrató al ruso Hipólito Sybine, bailarín principal de la compañía de Anna Pavlova, y a Nesly Dambre, integrante del Ballet de la Opera de París."
  },
  { ...STIMULI.ballet,
    type: "mc",
    label: "Q18",
    stem: "Q18. Depués de convertirse en bailarina, ¿qué prefería bailar?",
    choices: [
      "bailes del Canadá",
      "bailes tradicionales de México",
      "el flamenco de España",
      "el tango de la Argentina"
    ],
    answer: 1,
    back: "(2) bailes tradicionales de México — descubrió la intensidad de los bailes y ritos mexicanos y \"escogió bailes, rituales y leyendas tradicionales que ella transformó en coreografías audaces.\" (El stem conserva la errata impresa \"Depués\".)"
  },
  { ...STIMULI.ballet,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Cómo se llama la compañía del ballet que ella organizó?",
    choices: [
      "Festival de las Naciones.",
      "El ballet indígena para turistas.",
      "El Ballet Folklórico de México.",
      "Bailes de Amalia Hernández"
    ],
    answer: 2,
    back: "(3) El Ballet Folklórico de México — \"Así nació el Ballet Folklórico de México creado por Amalia Hernández.\""
  },
  { ...STIMULI.ballet,
    type: "mc",
    label: "Q20",
    stem: "Q20. Además de ballet, ¿qué otra cosa organizó la señora Hernández?",
    choices: [
      "un colegio para dibujo y pintura",
      "una escuela de drama contemporánea",
      "un colegio para enseñar varias profesiones",
      "una escuela de bailes tradicionales y clásicos"
    ],
    answer: 3,
    back: "(4) una escuela de bailes tradicionales y clásicos — fundó \"la Escuela del Ballet Folklórico de México para formar bailarines profesionales en danza folklórica, danzas indígenas y mestizas, ballet clásico y danza moderna.\""
  },
  // ----- Part 3b: Realia with English questions (Q21-25) -----
  { ...STIMULI.porques,
    type: "mc",
    label: "Q21",
    stem: "Q21. This publication would be most appropriate for children who are interested in",
    choices: [
      "exploring the possibility of life on other planets",
      "developing techniques to photograph nature",
      "reading fables about animals",
      "learning about the environment"
    ],
    answer: 3,
    back: "(4) learning about the environment — the book answers children's questions about \"el mundo de los animales, plantas, flores, minerales y fenómenos del planeta,\" the secrets and mysteries of nature."
  },
  { ...STIMULI.reebok,
    type: "mc",
    label: "Q22",
    stem: "Q22. How did Mr. Martínez increase his company’s profits?",
    choices: [
      "by training the entire salesforce",
      "by hiring experts",
      "by creating a new type of shoe",
      "by moving the factory to California"
    ],
    answer: 2,
    back: "(3) by creating a new type of shoe — Angel Martínez is the \"inventor del zapato aeróbico de Reebok, del cual se han vendido 20 millones de pares alrededor del mundo.\""
  },
  { ...STIMULI.peaje,
    type: "mc",
    label: "Q23",
    stem: "Q23. According to this notice, how will travelers from Ponce to San Juan be affected?",
    choices: [
      "They will pay a reduced toll.",
      "They will have to display a special pass.",
      "They will be allowed to drive at an increased speed.",
      "They will be required to drive with their headlights on."
    ],
    answer: 0,
    back: "(1) They will pay a reduced toll — \"En dirección de Ponce a San Juan, los vehículos de dos ejes pagarán $1.25, cinco centavos menos que el costo del peaje actual de ida y vuelta.\""
  },
  { ...STIMULI.conEdison,
    type: "mc",
    label: "Q24",
    stem: "Q24. This coupon should be completed by a person who wants to",
    choices: [
      "learn how to save energy",
      "enter a contest to win an appliance",
      "receive information about new electric rates",
      "notify the company about a change of address"
    ],
    answer: 0,
    back: "(1) learn how to save energy — the free booklet \"A bajo-costo, A ningún-costo. Ideas que ahorran energía\" was prepared \"para ayudarle a ahorrar energía y dinero en su hogar.\""
  },
  { ...STIMULI.precios,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is reported in this announcement?",
    choices: [
      "The demand for luxury cars has decreased.",
      "Spain manufactures more economy cars than Germany and England.",
      "The European Market has built a new car factory.",
      "The price of new cars is lower in Spain."
    ],
    answer: 3,
    back: "(4) The price of new cars is lower in Spain — \"España es uno de los mercados de la Unión Europea (UE) donde los automóviles nuevos son más baratos,\" third on the list of the Fifteen."
  },
  // ----- Part 3c: Second reading passage with English questions (Q26-30) -----
  { ...STIMULI.quinn,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which statement best expresses the opinion of both the camera operator and Francesco?",
    choices: [
      "Francesco’s father had a good life.",
      "Francesco is a good painter.",
      "Francesco’s father was a great horseman.",
      "Francesco’s father and Francesco look very much alike."
    ],
    answer: 3,
    back: "(4) Francesco’s father and Francesco look very much alike — the camera operator called him \"Tony\" by mistake (\"te pareces demasiado a tu padre\"), and Francesco agrees: \"Da miedo como me parezco a él.\""
  },
  { ...STIMULI.quinn,
    type: "mc",
    label: "Q27",
    stem: "Q27. Why was the senior Mr. Quinn successful?",
    choices: [
      "He was able to play many types of roles.",
      "He was mentored by a famous actor.",
      "He directed his own films in Mexico.",
      "He was an actor in silent movies."
    ],
    answer: 0,
    back: "(1) He was able to play many types of roles — his \"gran capacidad interpretativa... le abrió las puertas para conseguir muchos tipos de papeles,\" with 250 films to his name."
  },
  { ...STIMULI.quinn,
    type: "mc",
    label: "Q28",
    stem: "Q28. Francesco has had some difficulty in that",
    choices: [
      "he is as tall as his father",
      "at times others want him to be his father",
      "there is not enough work in films",
      "he has not had enough experience"
    ],
    answer: 1,
    back: "(2) at times others want him to be his father — \"En ocasiones los directores quieren que el joven Quinn duplique la leyenda de su padre,\" like the Italian director who demanded the look from Viva Zapata."
  },
  { ...STIMULI.quinn,
    type: "mc",
    label: "Q29",
    stem: "Q29. What did Francesco’s life at home with his parents enable him to do?",
    choices: [
      "become multilingual",
      "travel all over the world",
      "enjoy dangerous sports",
      "work with other children"
    ],
    answer: 0,
    back: "(1) become multilingual — he grew up between Italy and the United States with a Moroccan/French nanny: \"Por eso él habla inglés, italiano, español y francés.\""
  },
  { ...STIMULI.quinn,
    type: "mc",
    label: "Q30",
    stem: "Q30. What does the author predict regarding the future of Max and Michela?",
    choices: [
      "They will get to know their grandfather indirectly.",
      "They will explore their Mexican heritage.",
      "They will work for charities.",
      "They will become great athletes."
    ],
    answer: 0,
    back: "(1) They will get to know their grandfather indirectly — although Anthony Quinn has died, \"van a descubrirlo por la obra que dejó, sus películas,\" hearing his voice as Francesco's son did."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). Your Spanish teacher has asked your Spanish class for suggestions about a class trip. In Spanish, write a letter telling him/her where you would like to go. You may wish to include:
• destination
• your reasons for making this suggestion
• dates or times for the trip
• method of transportation
• cost of the trip
• ways to earn money for the trip
• possible activities during the trip
• length of time that the trip will take
• number of people going on the trip
• who will go on the trip

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response (printed typos kept):

el 5 de junio

Querida señora Valdés

La clase de español del 2004 desea planear el viaje que vamos a hacer el año que viene. Nos gustaría visitar la Ciudad de México. A todos nostros nos gustaría conocer mejor este país tan interesante. Creemos que la mejor temporada para ir a México es en la primavera. Podemos viajar durante las vacaciones de abril del próximo año. El viaje cuesta aproximadamente mil quinientos dólares por una semana, incluyendo hotel y transporte. Los estudiantes que trabajan pueden pagar este precio. Los demás estudiantes piensan ganar dinero para poder viajar. Durante este viaje podemos visitar muchos sitios de interés tales como el Museo de Antropología, las pirámides, los mercados al aire libre, el Parque de Chapultepec, y también podemos conocer la comida mexicana. Hay veinte y cinco estudiantes interesados en en este viaje.

Espero que le guste esta sugerencia.

Sinceramente

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You have just found out that one of your friends is moving away. In Spanish, write a journal entry expressing how you feel. You may wish to include:
• a description of your friend
• why this person is your friend
• how long you have known each other
• why you will miss your friend
• activities that you did together
• when your friend is leaving
• where your friend will be living
• how you can stay in contact with each other
• when you can visit each other

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

¡Qué triste estoy! Mi amiga tan linda e inteligente se muda. Es una persona leal y que siempre está lista para ayudarme. Nos conocemos desde hace cinco años. Somos inseparables. Cada día almorzamos juntas, cada fin de semana asistimos a unas fiestas o vamos de compras o al cine. Al llegar a casa, después de las clases nos llamamos y hablamos del día y de lo que vamos a hacer por la noche. El verano pasado fuimos de vacaciones al lago. Nos queda sólo un mes para gozar de nuestra estrecha amistad. Mi amiga va a vivir cerca de Nueva York. Nos hemos prometido que quedaremos amigas por toda la vida. Podemos estar en contacto por teléfono y por visitas. Mis padres me van a permitir viajes a su casa con frecuencia.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response (printed "un sinópsis" kept):

Don Manuel y doña Lucía deciden ir al cine porque hace mucho tiempo que no han salido. Primero cenaron en un restaurante. Comieron su plato favorito: la paella. Ahora están en el cine tratando de escoger la película que quieren ver. No quieren ver una película seria ni pesada. Desean divertirse y ver una película cómica. Pero ¿cuál película? Don Manuel y doña Lucía deciden hablar con la cajera. Ella les recomienda tres películas y les da un sinópsis de cada película. Cuando la cajera deja de hablar, don Manuel y doña Lucía deciden que no les gusta ninguna película. Ellos salen del cine, van a Video Blockbuster, y piensan alquilar su película favorita romántica. Pero ¿cuál película romántica favorita?

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  // ----- Supplemental cards (new questions over the same stimuli) -----
  { ...STIMULI.l03,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, what can visitors do at Atlántida, one of the attractions of Parque Nizuc?",
    choices: [
      "ride water slides after dark",
      "explore Mayan ruins underwater",
      "swim and play with dolphins",
      "rent fishing boats"
    ],
    answer: 2,
    back: "(3) swim and play with dolphins — \"te gustará la experiencia de Atlántida, el único delfinario en Cancún. Puedes nadar y jugar con los delfines.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S2",
    stem: "S2. According to the announcement, when is this department store going to close?",
    choices: [
      "on November 1",
      "on December 31",
      "at the end of this week",
      "on the national holiday"
    ],
    answer: 0,
    back: "(1) on November 1 — \"Esta tienda se va a cerrar el 1º de noviembre,\" which is why everything must be sold before the store moves."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S3",
    stem: "S3. Who selected the students who were honored at City College?",
    choices: [
      "the Consul General himself",
      "the students’ parents",
      "personalities of New York State",
      "their teachers"
    ],
    answer: 3,
    back: "(4) their teachers — the students \"Fueron seleccionados por sus profesores y reconocidos por sus esfuerzos\" after earning grades of 90 to 100 points."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S4",
    stem: "S4. Besides staying seated, what does the boatman ask passengers not to do while the launch is moving?",
    choices: [
      "talk to the boatman",
      "put their hands in the water",
      "eat or drink on board",
      "take photographs of the lagoon"
    ],
    answer: 1,
    back: "(2) put their hands in the water — \"No se levanten ni se muevan de un lado a otro y por favor, no pongan las manos en el agua.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S5",
    stem: "S5. Según el programa de viajes, ¿cómo es el clima de San Francisco?",
    choices: [
      "templado",
      "muy frío y lluvioso",
      "tropical y húmedo",
      "seco como un desierto"
    ],
    answer: 0,
    back: "(1) templado — entre los atractivos de la ciudad están \"sus cafés al aire libre, sus panaderías de primera clase, sus barrios multiculturales, y su clima templado.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S6",
    stem: "S6. Según el reportaje, ¿de qué trata el primer libro de Esmeralda Santiago?",
    choices: [
      "de la historia de una escuela de artes",
      "de sus años en la universidad",
      "de su infancia pobre pero feliz en Puerto Rico",
      "de unos lugares turísticos de la isla"
    ],
    answer: 2,
    back: "(3) de su infancia pobre pero feliz en Puerto Rico — “Cuando era puertorriqueña” \"cuenta la historia de su infancia pobre pero feliz, en Puerto Rico\"; el segundo libro cuenta de su adolescencia."
  },
  { ...STIMULI.ballet,
    type: "mc",
    label: "S7",
    stem: "S7. Según el pasaje, ¿en qué está inspirada la Danza del Venado?",
    choices: [
      "en el ballet clásico de Anna Pavlova",
      "en un baile que los yaquis hacían antes de cazar el venado",
      "en una procesión religiosa de España",
      "en una serie de programas de televisión"
    ],
    answer: 1,
    back: "(2) en un baile que los yaquis hacían antes de cazar el venado — \"Este baile está inspirado en el rito de la comunidad yaqui... reproduce con dramatismo y belleza un baile que los yaquis hacían antes de cazar el venado.\""
  },
  { ...STIMULI.porques,
    type: "mc",
    label: "S8",
    stem: "S8. According to the advertisement, how many pages does Los porqués de la naturaleza contain?",
    choices: [
      "336 pages",
      "471 pages",
      "213 pages",
      "100 pages"
    ],
    answer: 0,
    back: "(1) 336 pages — the order details list \"336 páginas\" and \"471 ilustraciones y fotografías\" (471 is the number of illustrations, not pages), with a real size of 21.3 × 27.6 cm."
  },
  { ...STIMULI.conEdison,
    type: "mc",
    label: "S9",
    stem: "S9. According to the advertisement, how much do the ideas in the free Con Edison booklet cost to carry out?",
    choices: [
      "between $10 and $20 each",
      "a $5 monthly fee",
      "at least $25 per project",
      "nothing at all, or $5 or less"
    ],
    answer: 3,
    back: "(4) nothing at all, or $5 or less — \"Muchas de las ideas que incluye el folleto... no cuestan nada, otras cuestan $5 o menos.\""
  },
  { ...STIMULI.quinn,
    type: "mc",
    label: "S10",
    stem: "S10. Besides acting, in which artistic activities did Anthony Quinn also engage?",
    choices: [
      "singing and ballet dancing",
      "writing novels and poetry",
      "painting, sculpture, and jewelry design",
      "directing operas in Italy"
    ],
    answer: 2,
    back: "(3) painting, sculpture, and jewelry design — \"Además tenía gran habilidad artística, dedicándose también a la pintura, la escultura y el diseño de joyas.\""
  }
];
