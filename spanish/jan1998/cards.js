// January 1998 Comprehensive Examination in Spanish — quiz deck
// Sources: exam booklet (scan, transcribed from 2.5–4x renders), Teacher
// Dictation Copy (text layer), official scoring key. Listening passages are
// printed on the cards because no audio exists for self-study.

const TDC_SRC = "Teacher Dictation Copy, January 1998 Comprehensive Spanish Regents";
const EXAM_SRC = "January 1998 Comprehensive Spanish Regents";

const STIMULI = {
  l1: {
    passage: `[Background] You are staying with a host family as an exchange student. One day you overhear a neighbor talking to your host mother. The neighbor says:

¿Has oído lo que ha pasado? Marcos David Cuello ha pedido la mano de la hija de los Señores Rafael Cánoras. Dicen que la boda se celebrará en el mes de septiembre. La recepción tendrá lugar en la casa de los padres de la novia.`,
    psource: TDC_SRC
  },
  l2: {
    passage: `[Background] You are listening to the radio and hear the announcer read this report:

Para mantener buena salud y mantener entusiasmo en la vida, las personas tienen que reír. La risa es capaz de eliminar ansiedad, angustia, y nerviosidad. Veinte segundos de pura y dura risa y carcajada pueden producir un efecto inmediato de optimismo y alegría. La risa es una buena razón para estar contento y tener una gran dosis de felicidad y energía vital.`,
    psource: TDC_SRC
  },
  l3: {
    passage: `[Background] At a school in Costa Rica you hear this morning announcement:

El colegio está planeando una gran sorpresa para los alumnos. El último día de clases van a tener la oportunidad de ganarse un equipo nuevo de computadoras. Esta oportunidad fue posible debido a la generosidad de los antiguos alumnos del colegio. Para participar en el concurso los participantes tienen que haber pasado todas las asignaturas y seleccionar un número a suerte.`,
    psource: TDC_SRC
  },
  l4: {
    passage: `[Background] You are listening to a commentary about the recent activity of Bianca Jagger. You hear:

Siempre se ha asociado el nombre de Bianca Jagger con el de Mick Jagger del grupo The Rolling Stones, y con la vida frívola de Nueva York. Pero en estos últimos años participó en la política de Nicaragua, su país natal. Ella quiere crear un partido que se preocupe por los más necesitados, y quiere presentarse para presidente en las futuras elecciones. "Mi filosofía es que, con perseverancia y paciencia, la gente se va a dar cuenta de quien soy realmente", afirma Bianca.`,
    psource: TDC_SRC
  },
  l5: {
    passage: `[Background] Your Mexican friend Ramón left this message on your answering machine:

Habla Ramón. Te llamo para decirte cuánto nos divertimos durante las últimas vacaciones que pasamos en tu casa. Hace tres semanas que volvimos y todos seguimos hablando de esos días maravillosos. Esperamos no haberte causado demasiadas molestias. Estamos muy agradecidos por todo. Recuerda que siempre tienes una casa aquí con nosotros.`,
    psource: TDC_SRC
  },
  l6: {
    passage: `[Background] In Barcelona, Spain, you are late for an appointment and are trying to find the department store El Corte Inglés. You ask someone for directions. The person says:

El Corte Inglés está en la Plaza Cataluña. Está un poco lejos de aquí. Si vas a pie necesitarás unos cuarenta minutos más o menos. Si tomas el metro llegarás en cinco minutos. Toma la línea roja. Existe también un autobús pero no es muy rápido y realmente no te ahorrarás mucho tiempo. La parada está en la esquina. Recuerda que si tomas el metro tendrás que bajarte en la Plaza Cataluña.`,
    psource: TDC_SRC
  },
  l7: {
    passage: `[Background] You are listening to a veterinarian on a local talk show in Caracas, Venezuela. The veterinarian says:

De todas las formas de vida que nos rodean, sólo el perro ha establecido una alianza con nosotros. Los gatos se limitan a tolerarnos, los caballos sólo obedecen nuestras órdenes, pero los perros se han convertido verdaderamente en nuestros mejores amigos. Ellos son benéficos para la salud humana en muchos sentidos. Los investigadores de la Universidad de Cambridge descubrieron que hay una reducción de estrés cuando los mayores tienen estos animales fieles.`,
    psource: TDC_SRC
  },
  l8: {
    passage: `[Background] You are at the airport in Mexico City and hear this announcement on the public address system about your flight:

Anunciamos a los señores pasajeros que a causa del mal tiempo el vuelo número 230 de Aereoméxico con salida a las diez y media con destino a Yucatán ha sido cancelado. El vuelo saldrá mañana a la misma hora. Rogamos a estos pasajeros que pasen por la oficina de información que está localizada en el centro del aeropuerto Benito Juárez para recoger un cupón que les permitirá permanecer en un hotel esta noche a cuenta nuestra.`,
    psource: TDC_SRC
  },
  l9: {
    passage: `[Background] You overhear two parents talking about children's parties. One of them says:

La preparación para la fiesta de cumpleaños es una buena oportunidad para enseñar al niño la forma de comportarse a la mesa. Se le puede indicar la manera correcta de usar la servilleta, de comer con moderación, a no lanzarse sobre el plato y a no hablar con la boca llena. A los niños pequeños les fascina imitar a los adultos. Antes de la fiesta también es ideal enseñarles cómo colocar los cubiertos sobre el plato y cómo coger el tenedor o la cuchara.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are an exchange student living with a family in the Dominican Republic. You come home for lunch and your host parent says to you:

Pedro, mañana salimos para Puerto Plata. Espero que tengas tu equipaje listo porque saldremos muy temprano. Tendrás que llevar ropa adecuada para que puedas disfrutar del mar y del campo. En la playa hará mucho calor pero en el campo estará muy fresco. Las temperaturas de la costa y de las montañas son muy diferentes, por lo tanto hay que ir bien preparado.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to a review of a recent show. The announcer says:

Hay silencio y oscuridad total. De repente, en el escenario se ilumina la silueta inmóvil de Pilar Rioja, quien con un taconeo, las palmadas y el grito de su canción flamenca, empieza el tablado con el grito y el braceo del flamenco. La música enciende la flama de Rioja, quien mantiene constante en su espectáculo la pasión y la intensidad. Expresa en su baile lo más alto de lo poético y musical.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to a guest lecturer in class. He says:

Comencé a entrenar 6 o 7 meses antes. Participé en un maratón nacional y llegué tercero. Luego gané las eliminatorias para decidir quién iba a los Juegos Panamericanos. Allí me sentía bien relajado. Fue una gran emoción obtener la medalla de oro y la marca nacional en esa misma carrera, además establecer la marca del evento para Juegos Panamericanos. La medalla de oro me abrió las puertas para participar en el extranjero; me llovían las invitaciones. Me sentía bien, valió la pena el sacrificio que hice; hice lo que la gente esperaba de mí y eso me dio la satisfacción.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are listening to the news in Spanish and hear this report:

El Instituto Cervantes de Madrid nos informa que la enseñanza del español se ha duplicado en los últimos años. El español es la lengua extranjera que más se enseña en los Estados Unidos y en Europa. El francés ocupa el segundo lugar como lengua internacional del mundo. Quizás en el futuro el español puede llegar a ocupar este lugar. Se dice que la población de habla española llega a trescientos cincuenta y seis millones. Esto incluye España, la América Latina, los Estados Unidos, las Filipinas y Guinea. El informe reporta que para el año 2000, habrá 35 millones de personas de origen hispano en los Estados Unidos.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to the radio and hear this announcement:

Si usted no puede incluir México en su agenda de viajes para el año que viene pero quiere saber más de la cultura, le sugerimos que visite el Museo Heard en Phoenix. Desde el 19 de octubre hasta agosto del verano próximo, este museo de las culturas y artes nativos hospedará seis festivales de máscaras de aldeas mexicanas. Historiadores del arte, antropólogos, folkloristas estadounidenses y mexicanos pusieron más de tres mil horas de trabajo para realizar esta exhibición.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio in San Juan and hear this news:

A partir del próximo año escolar, los estudiantes de las escuelas secundarias del sistema de educación pública tendrán que completar más cursos de ciencias, matemáticas y comunicaciones. Al momento, la escuela superior se termina con 15 créditos. El aumento de los créditos se diseñará dentro del horario académico. En vez de una serie de créditos electivos, dentro del horario de clases, habrá nuevos cursos obligatorios. Y de ahora en adelante se graduará con 18 créditos.`,
    psource: TDC_SRC
  },
  ecuador: {
    passage: `ECUADOR — UN PAÍS LLENO DE TESOROS

Para el turista que busca aventura, una visita al Ecuador es viajar a un lugar distinto, un cien por ciento lleno de sorpresas y también de muchos e inesperados tesoros. Es conocer una tierra de exóticas junglas, playas y palmeras, majestuosos volcanes y el Bosque de Lluvia, del que tanto se habla ahora en círculos ecológicos; además de encontrarse con una antiquísima herencia colonial española y una cultura indígena variada e impresionante. Viajando al Ecuador, el visitante curioso puede viajar en canoa por el río, escalar los picos de los Andes, conocer la extraña belleza de las Islas Galápagos, observar fascinantes mercados indígenas y ver, de primera mano, el Bosque de Lluvia.

La gente piensa que el Ecuador es un país tropical. Sin embargo, el turista que va a Quito, la capital, debe estar preparado llevando ropa apropiada para las mañanas frescas de primavera, el mediodía cálido y a veces lluvioso del verano, el atardecer ligeramente frío del otoño y el frío invernal de las noches. La altísima ciudad de Quito, donde el aire es más fino y casi transparente, está a 2,827 metros de altura. Es importante saber que, debido a su altura, en un mismo día Quito experimenta "las cuatro estaciones".

Los famosos mercados cerca de la ciudad están abiertos los lunes, miércoles, viernes, sábados y domingos. El Mercado de Otavalo, el más famoso, está a 75 kilómetros al norte de Quito. Allí venden textiles de todo tipo, artículos de cuero, cerámicas y hasta animales. Parte del encanto de la visita es observar a los indígenas de la zona y su forma de peinar y vestir.

Un viaje muy interesante, en un par de días, es al Río Aguarico, en la región Amazónica donde se puede tomar un crucero en un barco-hotel flotante llamado El Flotel Orellana. En este viaje se puede conocer la jungla, pueblecitos, bosques y aprender muchísimo de la cultura indígena y plantas medicinales. En este viaje se puede también viajar en ríos y lagos por canoas hechas de troncos de árboles huecos y rústicos.

Para conocer bien el paisaje, la flora y fauna del Ecuador, existe un encantador viaje al interior de 2 días en el Quito-Riobamba Expreso. Durante la excursión, se atraviesan montañas y valles en tren. El tren pasa cerca de los volcanes incluyendo la silueta simétrica del célebre Cotopaxi. Cotopaxi es uno de los volcanes activos más altos del mundo (si no el más alto). Durante el viaje se puede desembarcar en lugares donde hay pequeños mercados de artesanía, almorzar al pasar cerca del lago Yambo y pasar la noche en Riobamba (la que tiene un maravilloso Museo de Arte Religioso).

La comida ecuatoriana es muy interesante. Incluye bacalao y filetes de pescado usados en el famoso "ceviche", y mariscos como los langostinos y camarones. También hay empanadas muy sabrosas, tamales, pastelillos de soya, sopas como "locro", o sopa de patatas, la Sopa Quiteña, el Chupe con Camarones, el Ají de Pollo, el Seco de Chivo y varios platos de arroces como el Arroz de Cebada a la Criolla.

Aquí hay una nota curiosa. ¡Es en Ecuador — y no en Panamá — donde se fabrican los muy populares sombreros de Panamá y allí los puede comprar a muy buen precio! El Ecuador es un país lleno de tesoros para el turista que busca aventura.`,
    psource: "Part 3a reading passage, " + EXAM_SRC
  },
  r21: {
    imgs: [{
      src: "img/q21-mente-sana.png",
      cap: "Magazine article in a cloud-shaped frame: your head produces 30–50 thousand thoughts a day — \"Mente sana en cuerpo sano\". Source: " + EXAM_SRC + ", Part 3b",
      alt: "Cloud-shaped Spanish magazine clipping about the mind producing thirty to fifty thousand thoughts a day and the importance of positive thinking"
    }]
  },
  r22: {
    imgs: [{
      src: "img/q22-profeco-derechos.png",
      cap: "\"Defiende tus derechos como consumidora\" — consumer-rights advice box naming the Procuraduría Federal del Consumidor (Profeco). Source: " + EXAM_SRC + ", Part 3b",
      alt: "Boxed Spanish consumer-rights article with a cartoon of a grocer weighing goods, listing situations in which to complain to the consumer protection agency Profeco"
    }]
  },
  r23: {
    imgs: [{
      src: "img/q23-bancomer-tarjeta.png",
      cap: "\"¿Qué hacer si surge un compromiso?\" — Tarjeta Bancómer advertisement. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Spanish advertisement explaining that the Bancomer card lets you manage money without carrying cash, make purchases at thousands of affiliated businesses, and pay no interest if the full balance is paid monthly"
    }]
  },
  r24: {
    imgs: [{
      src: "img/q24-noticiario-radio.png",
      cap: "\"Ni amarilla, ni roja, ni gris, ni opaca. La Verdad es Transparente.\" — El Noticiario, Grupo IMER radio news advertisement. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Bold black-and-white Spanish radio ad declaring the truth is transparent, promoting El Noticiario news broadcasts daily at 7 AM, 2 PM and 7 PM on Grupo IMER stations"
    }]
  },
  r25: {
    imgs: [{
      src: "img/q25-boda-real.png",
      cap: "Two formal cards from La Zarzuela (15 de enero de 1995) announcing the wedding of la Infanta Doña Elena in Sevilla. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Two formal Spanish royal-household announcement cards describing the March 18 wedding ceremony of Infanta Elena at the Cathedral of Seville and the surrounding celebrations"
    }]
  },
  cloze: {
    passage: `Para hacer el esquí nórdico no hay que ir a Escandinavia. España puede ser una alternativa.

La cita era a las diez de la mañana en un pueblo de Soria, a los pies de las montañas de Urbión. La razón era un curso básico de esquí organizado por la compañía Ociotur, dedicada a la promoción de turismo activo y de naturaleza en la provincia de Soria. Según la publicidad, se ofrecían dos días de actividad por 12.000 pesetas, con habitación en un __(26)__, comidas y alquiler de material necesario. El lugar elegido fue el pueblo de Santa Inés, en plena sierra de las montañas entre Soria y La Rioja.

Aunque parece extraño, Soria es una zona muy frecuentada por los amantes del esquí nórdico, que encuentran entre sus árboles y suaves montes un lugar apropriado para practicar el esquí. Además, la nieve cae en abundancia en diciembre y dura hasta abril.

Arriba, en las montañas de Santa Inés, hacía un tiempo muy frío. Las nubes bajas hacían la mañana gris y el viento cortaba el aliento. Pero el bosque se mostraba precioso. Los árboles parecían vestidos de blanco para alguna ocasión especial y un lindo manto de __(27)__ lo cubría todo.

Las clases de esquí comenzaban en un claro protegido del viento por los árboles. Primero, deslizar sin los bastones; segundo elevar los brazos para coordinarlos con el movimiento de las piernas; finalmente unos pasos sobre unas pistas de __(28)__. La clase, vista desde lejos, parecía fácil, pero el simple hecho de mantener paralelos los esquís resultaba muy __(29)__; evitar que los esquís se cruzaran y te tiraran al suelo, imposible.

Este tipo de curso trata de que en un día el estudiante aprenda las nociones básicas del esquí nórdico. Se dedican cuatro horas a __(30)__ el movimiento de los brazos y las piernas, y el uso correcto de los bastones. Al segundo día el estudiante puede recorrer varios kilómetros de pista sin caídas ni sobresaltos.

La recompensa llega a la mañana siguiente: un par de horas permiten disfrutar de la paz y la soledad del bosque nevado, descubriendo rincones hermosos a los que sería difícil ver de otra manera.`,
    psource: "Part 3c cloze passage, " + EXAM_SRC
  },
  w33pic: {
    imgs: [{
      src: "img/q33-dibujo-coches.png",
      cap: "Part 4b picture prompt: write a story about the situation shown. Source: " + EXAM_SRC,
      alt: "Line drawing of a man and a woman standing among cars under pennant banners, looking at a sports car in the foreground, suggesting a car dealership"
    }]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a: listening, Q1-9 (answered in English) ----------
  {
    ...STIMULI.l1, "type": "mc", "label": "Q1",
    "stem": "Q1. What is this news about?",
    "choices": ["a marriage", "a reunion", "a death", "a birthday"],
    "answer": 0,
    "back": "(1) a marriage — the neighbor says Marcos David Cuello \"ha pedido la mano\" of the Cánoras' daughter and that \"la boda se celebrará\" in September."
  },
  {
    ...STIMULI.l2, "type": "mc", "label": "Q2",
    "stem": "Q2. What is the message of this notice?",
    "choices": ["Walking every day can be an important health benefit.", "Certain foods are necessary for good health.", "People who laugh are healthier and happier.", "Open and direct communication is necessary for good relationships."],
    "answer": 2,
    "back": "(3) People who laugh are healthier and happier — \"para mantener buena salud... las personas tienen que reír\"; laughter eliminates anxiety and produces optimism and joy."
  },
  {
    ...STIMULI.l3, "type": "mc", "label": "Q3",
    "stem": "Q3. What is being announced?",
    "choices": ["the summer plans for two teachers", "a contest to win a computer", "the students who made the honor roll", "the accomplishments of former students"],
    "answer": 1,
    "back": "(2) a contest to win a computer — students get \"la oportunidad de ganarse un equipo nuevo de computadoras\" in a school concurso."
  },
  {
    ...STIMULI.l4, "type": "mc", "label": "Q4",
    "stem": "Q4. According to this commentary, what has been a change for Bianca Jagger?",
    "choices": ["She has hosted a lot of parties.", "She has joined a new band.", "She has had another baby.", "She has become interested in politics."],
    "answer": 3,
    "back": "(4) She has become interested in politics — once known for frivolous New York life, \"participó en la política de Nicaragua\" and wants to run for president."
  },
  {
    ...STIMULI.l5, "type": "mc", "label": "Q5",
    "stem": "Q5. What was the purpose of Ramón's message?",
    "choices": ["to tell you about his future plans", "to invite you on a trip", "to thank you for your hospitality", "to give you his new address"],
    "answer": 2,
    "back": "(3) to thank you for your hospitality — \"Estamos muy agradecidos por todo\" after the wonderful vacation at your house."
  },
  {
    ...STIMULI.l6, "type": "mc", "label": "Q6",
    "stem": "Q6. Which suggestion should you follow?",
    "choices": ["take the subway", "take the bus", "walk to the corner and turn left", "call a taxi"],
    "answer": 0,
    "back": "(1) take the subway — walking takes 40 minutes and the bus is slow, but \"si tomas el metro llegarás en cinco minutos\" — and you are late."
  },
  {
    ...STIMULI.l7, "type": "mc", "label": "Q7",
    "stem": "Q7. What observation does the veterinarian make?",
    "choices": ["People are looking for different breeds of dogs to buy.", "Owning a dog can be beneficial to a person's health.", "Older people have more time for pets.", "Pet owners must have their animals receive certain innoculations."],
    "answer": 1,
    "back": "(2) Owning a dog can be beneficial to a person's health — dogs \"son benéficos para la salud humana\"; Cambridge researchers found stress reduction in older owners. (The exam's printed spelling \"innoculations\" is preserved.)"
  },
  {
    ...STIMULI.l8, "type": "mc", "label": "Q8",
    "stem": "Q8. What should you do next?",
    "choices": ["board the plane", "check your luggage", "go to the information booth", "wait for further announcements"],
    "answer": 2,
    "back": "(3) go to the information booth — passengers of the cancelled flight should \"pasen por la oficina de información\" to pick up a hotel coupon."
  },
  {
    ...STIMULI.l9, "type": "mc", "label": "Q9",
    "stem": "Q9. What does this parent suggest about parties?",
    "choices": ["tell the child what to bring to the party", "teach the child how to plan the party", "make sure that there are adults at the party", "use an upcoming party as a reason to teach table manners"],
    "answer": 3,
    "back": "(4) use an upcoming party as a reason to teach table manners — party preparation is \"una buena oportunidad para enseñar al niño la forma de comportarse a la mesa\"."
  },
  // ---------- Part 2b: listening, Q10-15 (answered in Spanish) ----------
  {
    ...STIMULI.l10, "type": "mc", "label": "Q10",
    "stem": "Q10. ¿Por qué se necesita llevar diferentes tipos de ropa en este viaje?",
    "choices": ["Hay que estar a la moda.", "Hay variación de clima.", "Hay viajes en barco.", "Hay que salir con frecuencia."],
    "answer": 1,
    "back": "(2) Hay variación de clima — \"las temperaturas de la costa y de las montañas son muy diferentes\": calor en la playa, fresco en el campo."
  },
  {
    ...STIMULI.l11, "type": "mc", "label": "Q11",
    "stem": "Q11. ¿Por qué fue éste un programa memorable?",
    "choices": ["La bailarina recitaba poemas mientras bailaba.", "Hay muchas bailarinas en la escena.", "Los trajes eran muy elegantes.", "El movimiento de la bailarina fue poético y apasionado."],
    "answer": 3,
    "back": "(4) El movimiento de la bailarina fue poético y apasionado — Pilar Rioja \"expresa en su baile lo más alto de lo poético\" con pasión e intensidad constantes."
  },
  {
    ...STIMULI.l12, "type": "mc", "label": "Q12",
    "stem": "Q12. ¿De qué está hablando?",
    "choices": ["de las personas que buscan riquezas", "de un viaje que hará en unos meses", "de su participación en competiciones deportivas", "de la situación política en su país"],
    "answer": 2,
    "back": "(3) de su participación en competiciones deportivas — habla del maratón nacional, las eliminatorias, los Juegos Panamericanos y su medalla de oro."
  },
  {
    ...STIMULI.l13, "type": "mc", "label": "Q13",
    "stem": "Q13. ¿De qué nos informa esta noticia?",
    "choices": ["Es difícil aprender las lenguas extranjeras.", "El español tiene una importancia grande en el mundo.", "Se enseña el idioma inglés en Madrid.", "El español es un idioma muy fácil a aprender."],
    "answer": 1,
    "back": "(2) El español tiene una importancia grande en el mundo — es la lengua extranjera más enseñada en los EE.UU. y Europa, con 356 millones de hablantes."
  },
  {
    ...STIMULI.l14, "type": "mc", "label": "Q14",
    "stem": "Q14. ¿Qué se está anunciando?",
    "choices": ["un viaje a algunos pueblos mexicanos", "un programa de música folklórica mexicana", "una exposición de arte de México", "una oferta de trabajo en México"],
    "answer": 2,
    "back": "(3) una exposición de arte de México — el Museo Heard de Phoenix hospedará seis festivales de máscaras de aldeas mexicanas."
  },
  {
    ...STIMULI.l15, "type": "mc", "label": "Q15",
    "stem": "Q15. ¿Qué sucederá en cuanto al nuevo plan escolar?",
    "choices": ["Los estudiantes tomarán más clases.", "Los profesores darán más tarea.", "El día escolar será más largo.", "Se construirá otra escuela secundaria."],
    "answer": 0,
    "back": "(1) Los estudiantes tomarán más clases — habrá nuevos cursos obligatorios y se graduará con 18 créditos en vez de 15."
  },
  // ---------- Part 3a: reading passage, Q16-20 ----------
  {
    ...STIMULI.ecuador, "type": "mc", "label": "Q16",
    "stem": "Q16. ¿Qué tipo de clima se espera en Quito?",
    "choices": ["variado y cambiable", "caluroso y seco", "húmedo y nevoso", "constante y soleado"],
    "answer": 0,
    "back": "(1) variado y cambiable — por su altura, \"en un mismo día Quito experimenta 'las cuatro estaciones'\"."
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "Q17",
    "stem": "Q17. ¿Cuándo están cerrados los mercados fuera de Quito?",
    "choices": ["los domingos", "los días de trabajo", "tres días a la semana", "los martes y jueves"],
    "answer": 3,
    "back": "(4) los martes y jueves — los mercados abren lunes, miércoles, viernes, sábados y domingos; quedan cerrados martes y jueves."
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "Q18",
    "stem": "Q18. Según este artículo, ¿qué debe hacer el turista en la región Amazónica?",
    "choices": ["cultivar plantas y árboles", "hacer excursión en bote", "estudiar la contaminación del agua", "cazar animales exóticos"],
    "answer": 1,
    "back": "(2) hacer excursión en bote — el crucero en el barco-hotel El Flotel Orellana y las canoas de troncos por ríos y lagos."
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "Q19",
    "stem": "Q19. ¿Por qué es famoso Cotopaxi?",
    "choices": ["su mercado", "su lago", "su altura", "su ciudad indígena"],
    "answer": 2,
    "back": "(3) su altura — Cotopaxi es \"uno de los volcanes activos más altos del mundo (si no el más alto)\"."
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "Q20",
    "stem": "Q20. Uno debe probar el ceviche si le gusta",
    "choices": ["la fruta del mar", "el postre", "la carne", "las legumbres frescas"],
    "answer": 0,
    "back": "(1) la fruta del mar — el ceviche se hace con bacalao y filetes de pescado, además de mariscos como langostinos y camarones."
  },
  // ---------- Part 3b: realia, Q21-25 ----------
  {
    ...STIMULI.r21, "type": "mc", "label": "Q21",
    "stem": "Q21. What is the topic of this article?",
    "choices": ["the importance of positive thinking", "new ways to make friends", "a cure for insomnia", "the need for daily exercise"],
    "answer": 0,
    "back": "(1) the importance of positive thinking — feeding the mind \"una gran dosis de pensamientos positivos\" is the key to \"Mente sana en cuerpo sano\"."
  },
  {
    ...STIMULI.r22, "type": "mc", "label": "Q22",
    "stem": "Q22. This article indicates that some government agencies",
    "choices": ["provide health care for citizens", "help protect the interests of consumers", "promote competition in business", "react favorably to special-interest groups"],
    "answer": 1,
    "back": "(2) help protect the interests of consumers — government institutions like Profeco exist \"encargadas de proteger al consumidor\"."
  },
  {
    ...STIMULI.r23, "type": "mc", "label": "Q23",
    "stem": "Q23. What is being promoted?",
    "choices": ["savings accounts", "a trip to Spain", "a credit card", "traveler's checks"],
    "answer": 2,
    "back": "(3) a credit card — la Tarjeta Bancómer, \"un práctico sistema de pago\" accepted at thousands of affiliated businesses."
  },
  {
    ...STIMULI.r24, "type": "mc", "label": "Q24",
    "stem": "Q24. This station is proud of its",
    "choices": ["musical variety", "children's programs", "unbiased reporting", "popular hosts"],
    "answer": 2,
    "back": "(3) unbiased reporting — \"Ni amarilla, ni roja, ni gris... La Verdad es Transparente\": objective, serious, timely news so listeners form their own opinion."
  },
  {
    ...STIMULI.r25, "type": "mc", "label": "Q25",
    "stem": "Q25. What kind of event is discussed in this announcement?",
    "choices": ["a visit by a foreign head of state", "a royal wedding ceremony", "an important exhibit by an artist", "a funeral for the king"],
    "answer": 1,
    "back": "(2) a royal wedding ceremony — the cards announce \"la boda de Su Alteza Real la Infanta Doña Elena\" in Sevilla, with the ceremony at the cathedral."
  },
  // ---------- Part 3c: cloze, Q26-30 ----------
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q26",
    "stem": "Q26. Which choice best completes blank (26)?",
    "choices": ["valle", "periódico", "hotel", "precio"],
    "answer": 2,
    "back": "(3) hotel — the 12.000-peseta package includes \"habitación en un hotel\", meals, and equipment rental."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q27",
    "stem": "Q27. Which choice best completes blank (27)?",
    "choices": ["nieve", "lluvia", "viento", "calor"],
    "answer": 0,
    "back": "(1) nieve — the trees seemed dressed in white and \"un lindo manto de nieve lo cubría todo\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q28",
    "stem": "Q28. Which choice best completes blank (28)?",
    "choices": ["nadar", "esquiar", "correr", "patinar"],
    "answer": 1,
    "back": "(2) esquiar — the lesson ends with steps on practice ski tracks: \"pistas de esquiar\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q29",
    "stem": "Q29. Which choice best completes blank (29)?",
    "choices": ["sencillo", "aburrido", "suave", "difícil"],
    "answer": 3,
    "back": "(4) difícil — from afar the class looked easy, \"pero el simple hecho de mantener paralelos los esquís resultaba muy difícil\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q30",
    "stem": "Q30. Which choice best completes blank (30)?",
    "choices": ["olvidar", "coordinar", "caer", "saltar"],
    "answer": 1,
    "back": "(2) coordinar — four hours are devoted to coordinating the movement of arms and legs and the correct use of the poles."
  },
  // ---------- Part 4: writing tasks ----------
  {
    "type": "self", "label": "W1",
    "front": "W1 (Part 4a, Question 31 — choose 31 OR 32 on the real exam). You are an exchange student in Peru and have a train ticket to visit Lima, the capital, on the next day. You find out that the train is not running. Write a note in Spanish to your Peruvian friend asking about other ways to get to Lima. Your note must consist of at least SIX clauses. Salutation: Querido/Querida (name); Closing: (your name). The salutation and closing will not be counted as part of the six required clauses. You must accomplish the purpose of the note: to ask about other ways to get to Lima.",
    "back": "Model note (6+ clauses): \"Querida Rosa: Acabo de saber que el tren a Lima no funciona mañana. Todavía quiero visitar la capital esta semana. ¿Sabes si hay un autobús directo que salga por la mañana? ¿O crees que es mejor tomar un vuelo? También me han dicho que algunos taxis colectivos van a Lima. Por favor, dime cuál es la mejor manera de llegar. — (tu nombre)\" — Rubric: the note must actually ASK about alternative transportation to Lima; each clause needs a verb and subject."
  },
  {
    "type": "self", "label": "W2",
    "front": "W2 (Part 4a, Question 32 — choose 31 OR 32 on the real exam). You are supposed to go shopping with a Spanish-speaking friend today, but your plans have changed. Write a note in Spanish to your friend telling him or her that you are not going shopping today. At least SIX clauses; you may explain why your plans changed or suggest another day. Salutation: Querido/Querida (name); Closing: (your name).",
    "back": "Model note (6+ clauses): \"Querido Andrés: Lo siento mucho, pero no puedo ir de compras contigo hoy. Mi madre está enferma y tengo que cuidar a mi hermanito. Además, debo terminar un proyecto para la clase de historia. ¿Podemos ir el sábado por la mañana? Ese día estaré libre y tendré el dinero de mi trabajo. Gracias por comprender. — (tu nombre)\" — Rubric: must clearly tell the friend you are NOT going shopping today."
  },
  {
    ...STIMULI.w33pic, "type": "self", "label": "W3",
    "front": "W3 (Part 4b, Question 33 — choose 33 OR 34 on the real exam). In Spanish, write a STORY about the situation shown in the picture (a couple looking at a sports car under dealership banners). It must be a story relating to the picture, NOT a description of the picture. Do not write a dialogue. Your composition must consist of at least TEN clauses.",
    "back": "Model story (10+ clauses): \"El sábado pasado los señores Vega fueron a la agencia de coches porque su coche viejo se descompuso otra vez. Un vendedor los saludó y les mostró un coche deportivo rojo. A la señora Vega le encantó el coche inmediatamente. Su esposo miró el precio y se puso nervioso. El vendedor les explicó que podían pagar poco a poco. Los Vega dieron una vuelta de prueba por la ciudad. El coche corría rápido y casi no hacía ruido. Después de pensarlo mucho, decidieron comprarlo. Firmaron los papeles esa misma tarde. Salieron de la agencia muy contentos con su coche nuevo.\" — Rubric: a narrative with beginning/middle/end tied to the picture; 10 clauses, no dialogue."
  },
  {
    "type": "self", "label": "W4",
    "front": "W4 (Part 4b, Question 34 — choose 33 OR 34 on the real exam). You are writing to an organization that is looking for student volunteers for a 2-week period in the summer to help with a project in Paraguay. In Spanish, write a LETTER to the Program Director to offer your participation in the project. At least TEN clauses. Use: Dateline: el 28 de enero de 1998; Salutation: Estimado Director/Estimada Directora; Closing: Atentamente, (your name). You may include information about yourself, where you found out about the opportunity, your qualifications, your interests, your ability to speak Spanish, and your desire to help.",
    "back": "Model letter (10+ clauses): \"el 28 de enero de 1998 — Estimado Director: Leí sobre su proyecto en el periódico de mi escuela y quiero ofrecer mi participación. Me llamo (nombre) y tengo diecisiete años. Estudio español desde hace cuatro años y lo hablo bastante bien. El verano pasado trabajé como voluntario en un hospital de mi comunidad. Me interesa mucho conocer la cultura de Paraguay. Puedo viajar durante dos semanas en julio. Estoy listo para trabajar duro y ayudar donde sea necesario. Creo que esta experiencia será valiosa para mí y para el proyecto. Espero su respuesta pronto. Atentamente, (tu nombre)\" — Rubric: the letter must OFFER participation in the project; dateline, salutation, and closing don't count toward the 10 clauses."
  },
  // ---------- Supplemental coverage cards S1-S10 ----------
  {
    ...STIMULI.l3, "type": "mc", "label": "S1",
    "stem": "S1. (Supplemental — same announcement as Q3.) What must students do to participate in the computer contest?",
    "choices": ["pass all of their subjects and draw a number", "write an essay about former students", "donate money to the school", "attend class on the last day of school"],
    "answer": 0,
    "back": "(1) pass all of their subjects and draw a number — \"los participantes tienen que haber pasado todas las asignaturas y seleccionar un número a suerte\"."
  },
  {
    ...STIMULI.l6, "type": "mc", "label": "S2",
    "stem": "S2. (Supplemental — same directions as Q6.) About how long would it take to walk to El Corte Inglés?",
    "choices": ["five minutes", "fifteen minutes", "forty minutes", "two hours"],
    "answer": 2,
    "back": "(3) forty minutes — \"si vas a pie necesitarás unos cuarenta minutos más o menos\"."
  },
  {
    ...STIMULI.l8, "type": "mc", "label": "S3",
    "stem": "S3. (Supplemental — same announcement as Q8.) Why was flight 230 to Yucatán cancelled?",
    "choices": ["mechanical problems", "bad weather", "a crew strike", "an overbooked cabin"],
    "answer": 1,
    "back": "(2) bad weather — \"a causa del mal tiempo el vuelo número 230... ha sido cancelado\"; it will leave tomorrow at the same time."
  },
  {
    ...STIMULI.l13, "type": "mc", "label": "S4",
    "stem": "S4. (Suplementaria — la misma noticia que Q13.) Según el informe, ¿a cuántas personas llega la población de habla española?",
    "choices": ["a 35 millones", "a 100 millones", "a 356 millones", "a 500 millones"],
    "answer": 2,
    "back": "(3) a 356 millones — \"la población de habla española llega a trescientos cincuenta y seis millones\", incluyendo España, América Latina, los EE.UU., las Filipinas y Guinea."
  },
  {
    ...STIMULI.l14, "type": "mc", "label": "S5",
    "stem": "S5. (Suplementaria — el mismo anuncio que Q14.) ¿Dónde se puede ver la exhibición de máscaras mexicanas?",
    "choices": ["en la Ciudad de México", "en el Museo Heard en Phoenix", "en un teatro de San Juan", "en la Universidad de Cambridge"],
    "answer": 1,
    "back": "(2) en el Museo Heard en Phoenix — \"le sugerimos que visite el Museo Heard en Phoenix\", el museo de las culturas y artes nativos."
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "S6",
    "stem": "S6. (Suplementaria — el mismo artículo que Q16–20.) Según el artículo, ¿dónde se fabrican los famosos sombreros de Panamá?",
    "choices": ["en Panamá", "en Ecuador", "en España", "en Perú"],
    "answer": 1,
    "back": "(2) en Ecuador — la nota curiosa: \"¡Es en Ecuador — y no en Panamá — donde se fabrican los muy populares sombreros de Panamá!\""
  },
  {
    ...STIMULI.ecuador, "type": "mc", "label": "S7",
    "stem": "S7. (Suplementaria — el mismo artículo que Q16–20.) ¿Qué es El Flotel Orellana?",
    "choices": ["un tren que va a Riobamba", "un mercado indígena famoso", "un barco-hotel flotante en la región Amazónica", "un museo de arte religioso"],
    "answer": 2,
    "back": "(3) un barco-hotel flotante — en el Río Aguarico \"se puede tomar un crucero en un barco-hotel flotante llamado El Flotel Orellana\"."
  },
  {
    ...STIMULI.r23, "type": "mc", "label": "S8",
    "stem": "S8. (Supplemental — same ad as Q23.) According to the ad, how can a cardholder avoid paying interest?",
    "choices": ["by shopping only at affiliated stores", "by paying the full balance each month", "by reporting the card lost", "by using the card only in Spain"],
    "answer": 1,
    "back": "(2) by paying the full balance each month — \"Usted no paga intereses si liquida mensualmente la totalidad de su cuenta\"."
  },
  {
    ...STIMULI.r24, "type": "mc", "label": "S9",
    "stem": "S9. (Supplemental — same ad as Q24.) How often is El Noticiario broadcast each day?",
    "choices": ["once", "twice", "three times", "every hour"],
    "answer": 2,
    "back": "(3) three times — \"Diariamente a las 7:00 AM, 2:00 PM y 7:00 PM\" on Grupo IMER stations."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "S10",
    "stem": "S10. (Suplementaria — el mismo pasaje que Q26–30.) ¿Cuánto costaban los dos días de actividad del curso de esquí?",
    "choices": ["2.827 pesetas", "12.000 pesetas", "15.000 pesetas", "75.000 pesetas"],
    "answer": 1,
    "back": "(2) 12.000 pesetas — \"se ofrecían dos días de actividad por 12.000 pesetas\", con habitación, comidas y alquiler de material."
  }
];
