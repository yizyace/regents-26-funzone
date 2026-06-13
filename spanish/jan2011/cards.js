// January 2011 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jan2011/.
// Spelling quirks ("Miguel Fernandez", "del jardin", "más facilmente",
// "que de lo que se pensaba", "lo qué comen", "¿Qué ayudó Punta Arenas...",
// "cinco voces masculinas", "Para el concierto grabaron un disco",
// "un sólo día") are verbatim from the printed exam and dictation copy.

const TDC_SRC = "Teacher Dictation Copy, January 2011 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] A friend is talking to you about breakfast in Costa Rica. She says:

[La maestra lee] Un desayuno típico para los costarricenses es el “Gallo Pinto”. Es muy sencillo prepararlo. Se hace con arroz y frijoles negros y es acompañado con huevos y crema ácida. Este plato, servido con tortillas de maíz, se come todos los días en casi todos los hogares. Hasta en los restaurantes de comida rápida se puede encontrar este plato “Gallo Pinto” tan apreciado por los ticos.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are watching television and hear this information about a contest in Spain:

[La maestra lee] Estamos muy cerca de la celebración del final del Sexto Concurso de Jóvenes Cocineros, Cocina de autor tradicional renovada, que se celebrará en Madrid. La edición de este año va a ser especial. Es la primera vez que un final de este concurso será retransmitido en vivo y a través del internet. Además, nos ofrecerán imágenes por el internet de cómo las distintas escuelas de cocina se prepararon para el concurso.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to the radio and hear an interview with musician Jon Secada. He says:

[La maestra lee] Como usted sabe, soy cubano-americano y estoy muy orgulloso de mi herencia latina. Aunque hace casi siete años que grabo en inglés, quería volver a mis raíces latinas e incluir canciones, todas en español, en mi nuevo álbum. El título del álbum es Amanecer, el comienzo de un nuevo día. Lo nombro así porque empiezo una nueva etapa de mi vida artística. Esta vez, todo se grabó en vivo, sin instrumentos electrónicos y sin ninguna canción en inglés.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are in Spain and hear this announcement:

[La maestra lee] En las últimas noticias sobre la vida de los ricos y los famosos, la revista Gente anunció el compromiso oficial del conocido escritor de novelas de misterio, Miguel Fernandez, de 35 años, con la periodista Adriana Ortiz, de 31 años. La boda tendrá lugar el próximo 22 de mayo. Se van a casar en la catedral de Santa María Inmaculada en la ciudad de Santiago.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are watching television and hear this advertisement:

[La maestra lee] ¡Conócelos de cerca “Animales de México”! En nuestro país hay innumerables especies de animales debido a la riqueza en flora y fauna. A la vez, la poca consideración que muchos muestran por los animales pone en peligro su existencia. Por eso, es muy importante inculcar a los niños el respeto por la naturaleza. En este libro, por medio de relatos muy sencillos, tienen la oportunidad de conocer ciertos aspectos de 25 representantes de la fauna de México. Se explica cómo viven y se defienden, lo qué comen, cuáles son sus tácticas de caza, y además le ofrece datos científicos en la ficha técnica de cada animal. Ponga en las manos de sus hijos opciones que aviven su interés por convivir en armonía con la naturaleza.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are at the airport in Buenos Aires and hear this announcement:

[La maestra lee] ¡Señores y señoras! Tenemos una venta especial en ciertos artículos. Todos los bolsos de cuero para señoras están reducidos en precio cincuenta por ciento. También, varias novelas y tarjetas postales están en oferta. Si ustedes necesitan algo para leer, o si quieren comprar algunas tarjetas postales o recuerdos para sus niños, cómprenselos antes de abordar su avión.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are in the Dominican Republic and hear this weather forecast:

[La maestra lee] Una tormenta fuerte se acerca por la costa del sur. Viene acompañada de relámpagos, de truenos y de vientos fuertes. La situación puede ser peligrosa por varios días. Si usted piensa pasar unos días en la playa este fin de semana, modifique sus planes. Recuerde que la última tormenta cambió de trayectoria y causó más daño que de lo que se pensaba.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are in Panama and are listening to the radio. You hear this part of an interview:

[La maestra lee] Trabajar en el jardín es excelente para la salud física pero hay que tener cuidado para no lastimarse. También les sugiero que se pongan guantes de cuero, y que usen camisas de manga larga y pantalones largos. No olviden de protegerse los pies. Nunca podemos ver todos los peligros que existen en la tierra. Pues, las bacterias que viven en la tierra del jardin pueden causar infecciones peligrosas en las heridas.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are watching a television talk show in Seville, Spain. The talk show host says:

[La maestra lee] De vez en cuando se dice que la gente pierde interés en la fiesta nacional de España, la corrida de toros. Aunque no existe el mismo interés por todas partes de España, la verdad es que las corridas todavía tienen mucha popularidad. Según la Comisión Nacional de Asuntos Taurinos, el año pasado había 948 corridas en España, un número más alto que desde hace diez años. Aunque sea un tema controversial, sin duda la corrida sigue siendo una parte íntegra de la cultura española.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You hear this announcement on the news in Spain:

[La maestra lee] El Premio Salambó es una forma de reconocimiento literario muy deseado por los escritores. Creado por el Club Cultural de la Fnac y el Café Salambó, es único en su género. El último martes del mes de febrero un jurado de quince escritores eligió el mejor libro del año escrito en castellano y el mejor libro escrito en catalán. Este año, los premiados son Vicente Molina Foix en castellano e Imma Monsó en catalán.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are on a tour in Lima, Peru, and hear this information about the city:

[La maestra lee] Lima es una de las ciudades más antiguas de Sudamérica. En la época colonial era la capital de Nueva España. En la catedral está enterrado Francisco Pizarro, conquistador y fundador de Lima. Hay muchas casas que datan de esa época. Entre ellas hay la Casa Aliaga, una casa privada que está abierta al público. Otro sitio de interés es la Iglesia San Francisco con sus catacumbas. Servía como el primer cementerio de Lima. Allí se pueden ver los restos de los primeros habitantes de la ciudad.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are watching Spanish-language television and hear this announcement about an upcoming television program:

[La maestra lee] Después de una larga ausencia, Karlos Arguiñano regresa a cocinar en su programa La Cocina de Karlos Arguiñano. Aquí en el canal 2, el cocinero popular ofrecerá nuevas recetas fáciles y saludables. Seguirá una dieta mediterránea que incluirá los básicos de buena nutrición. Nos enseñará cómo escoger los mejores productos frescos y cómo distinguir distintas especies y variedades de verduras, pescados, y carnes.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are watching a Spanish-language news program and hear this news report:

[La maestra lee] Los profesores de la Universidad Politécnica quieren que sus estudiantes utilicen sus teléfonos celulares con propósitos educativos. Los alumnos pueden obtener información de la clase, como tareas y la disponibilidad de los laboratorios de computación. Además, el servicio permite que los estudiantes pueden participar en encuestas, comenzar discusiones por teléfono, crear grupos de estudio o recibir noticias de la universidad. El resultado deseado es que las discusiones en las clases sean más animadas y los estudiantes estén mejor informados.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to the radio in Mexico and hear this advertisement:

[La maestra lee] Este sábado por la noche habrá un concierto con el grupo musical, RBD, en la Ciudad de México. Hace tres años este grupo estableció una fundación con el propósito de ayudar a los niños con los fondos para la educación. El programa de becas que por ahora sólo ayuda a los niños en México va a extenderse a España y a otros países. Se utiliza parte del dinero de las ventas de boletos y discos para las becas. Si usted quiere donar dinero o tiempo para el beneficio de esta fundación, llame a 8-88-56-78 hoy.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a Spanish-language radio station and hear this announcement:

[La maestra lee] Si usted no puede dormir porque le molestan el ruido y la luz, hay maneras de evitar este problema. Para dormirse más facilmente, baje las luces una hora antes de acostarse y use un filtro para mejorar la calidad del aire. Ciertas lámparas disponibles en el mercado pueden ayudar también, ya que estimulan la producción de melatonina, una hormona que promueve el sueño. Si se despierta, mantenga los ojos cerrados. No mire el reloj y en poco tiempo se dormirá de nuevo.`,
    psource: TDC_SRC
  },
  chile: {
    passage: `Chile: tierra de nieve y arena

En su famoso poema “Descubridores de Chile”, Pablo Neruda, poeta chileno amado por su pueblo, describe su tierra natal como una nación angosta hecha de “noche, nieve, y arena”. Como dice Neruda, Chile es ciertamente un país largo y estrecho con más de 2.700 millas de longitud. Al este, los Andes con docenas de picos volcánicos activos, forman la frontera con Argentina. Entre los Andes y el Océano Pacífico, la topografía de Chile va de un extremo a otro. Al norte, se encuentra el desierto de Atacama, uno de los lugares más secos del planeta. Al sur, la tierra se transforma en un laberinto de islas, canales y fiordos glaciales.

En el extremo sur del país está el Cabo de Hornos donde se unen los océanos Pacífico y Atlántico. La ciudad de Punta Arenas, el puerto más al sur del país, ha prosperado como centro de transportes desde que la fiebre del oro de California en el siglo XIX atrajo una gran cantidad de barcos que circunnavegaban el continente buscando la riqueza prometida. Hoy miles de turistas llegan allí con itinerarios que incluyen visitas a los fiordos chilenos y a la Antártida. Desde Punta Arenas un día de viaje llevará al turista al Monumento Natural Los Pingüinos, habitado por más de cien mil pingüinos magallánicos.

En el centro de Chile, están las tres ciudades más importantes: Santiago, Valparaíso y Concepción. Santiago, la capital del país, ofrece grandes calles, rascacielos, un moderno sistema de metro, además de bellas iglesias y plazas coloniales. Una variedad de restaurantes ofrece la oportunidad de probar especialidades regionales como la cazuela, que consiste en un caldo con arroz, maíz fresco, papas y carne o pollo. Santiago es una buena base para iniciar viajes de un sólo día a parques nacionales, a centros de esquí, a aguas termales y a antiguas haciendas.

Un lugar lleno de historia que siempre se recomienda visitar es el Distrito del Lago, tierra de densos bosques y pintorescos lagos. Es también la tierra de los araucanos, el pueblo indígena de Chile. Cerca del Lago Villarrica se encuentra una gran población mapuche, la más prominente de las tribus araucanas. Aunque no tan conocidos como los mayas, los aztecas o los incas, los mapuches se encuentran entre las culturas indígenas más distinguidas de América. Los mapuches usaban tácticas de guerra tan superiores a los otros pueblos que les permitieron ser victoriosos en las guerras contra los incas y contra los españoles.

El territorio de Chile también incluye varias islas notables. La más lejana es la Isla de Pascua, famosa por sus enormes figuras talladas en piedra volcánica por los primeros habitantes. Las islas de Juan Fernández, situadas al oeste de Valparaíso, sirvieron de refugio para los piratas en el pasado. Hoy día sirven de santuario a varias especies de animales que están en peligro de extinción. Su visitante más famoso fue Alexander Selkirk, un fugitivo escocés que vivió en las islas entre 1704 y 1709. Daniel Defoe basó su historia, Robinson Crusoe, en la vida de este famoso visitante. Como Neruda, sus cuentos han sido inspirados por este misterioso país.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 26, 2011"
  },
  acuaticas: {
    imgs: [
      { src: "img/q21-actividades-acuaticas.png",
        cap: "“Actividades Acuáticas” park announcement — reading selection for question 21, Comprehensive Examination in Spanish, January 2011",
        alt: "Boxed announcement in Spanish titled Actividades Acuaticas: among the activities available at the Parque de la Laguna de Cara Blanca are panoramic boat trips on the river and outings on the lakes; the office at the park entrance provides information on the outings, schedule, and prices. The lake water has a pleasant temperature; swimming is permitted in the park lakes but not recommended in the river; however, anyone who swims in the river or the lakes swims at their own risk, since there is no one to protect swimmers. Park rules require permits for all boats, which can be bought at the park entrance." }
    ]
  },
  protejase: {
    imgs: [
      { src: "img/q22-protejase-tarjetas.png",
        cap: "“¡Protéjase!” credit card notice — reading selection for question 22, Comprehensive Examination in Spanish, January 2011",
        alt: "Boxed bulleted notice in Spanish titled Protejase (Protect yourself): your credit card must be signed; memorize your secret number, tell it to no one, and avoid using personal data that identify you easily; destroy the cards you no longer use; if you need a new card and do not receive it, notify us immediately; before starting a trip, check your credit limit and the assistance number of the country you are traveling to; use the emergency numbers and report the disappearance of your card immediately — the speed of that call is fundamental." }
    ]
  },
  merengue: {
    imgs: [
      { src: "img/q23-merengue-nacional.png",
        cap: "Article about the merengue — reading selection for question 23, Comprehensive Examination in Spanish, January 2011",
        alt: "Boxed article in Spanish: many say the merengue dance got its name from the sweet made with sugar and egg whites. Although the dance was popular, no one managed to turn it into the symbol of the Dominican national dance until Rafael Trujillo came to power in 1930. The merengue supposedly originated in Cibao, a zone of Santiago where Trujillo was also born. There, the political candidate used the merengue to advance his presidential campaign through the radio. That is how the merengue left its origins as music of the poor and came to be danced and listened to among the middle class. Very soon it became the national dance." }
    ]
  },
  perro: {
    imgs: [
      { src: "img/q24-adoptar-perro.jpg",
        cap: "Dog adoption advertisement — reading selection for question 24, Comprehensive Examination in Spanish, January 2011",
        alt: "Advertisement with a cartoon of a sad dog beside a doghouse and food bowl. Headline in Spanish: Do you want a dog? Before buying one, think about adopting one. Body text: every year thousands of dogs are abandoned; many die of hunger or disease, are run over, or are victims of mistreatment. El refugio takes in about 200 dogs a year, adults and puppies, who live at the Adoption Center while a home is found for them. If you want to adopt a dog or become a member, call 91 730 36 80 or 619 75 68 31. El refugio is a nonprofit association whose goals are to prevent, denounce, and solve the abandonment and mistreatment of animals." }
    ]
  },
  ferrero: {
    imgs: [
      { src: "img/q25-ferrero-bombones.jpg",
        cap: "Ferrero advertisement — reading selection for question 25, Comprehensive Examination in Spanish, January 2011",
        alt: "Advertisement in Spanish with the headline: How, every year, with the arrival of high temperatures, the mystery of the disappeared chocolates returns! The text explains: let us get ready before it is too late — Ferrero Rocher and Mon Cheri will disappear in a few days and cannot be enjoyed any more. People ask: why do Ferrero Rocher and Mon Cheri suddenly disappear without a trace? It is very simple: the Ferrero specialties are withdrawn from the market to guarantee their high quality, which high temperatures can alter. For Ferrero, quality and consumer satisfaction are the main reason for being, and to guarantee them we are willing to withdraw our products from the market. Ferrero Rocher and Mon Cheri will return in October, fresher and better than ever. FERRERO logo with photos of the chocolates on a ribbon." }
    ]
  },
  oreja: {
    passage: `La Oreja de Van Gogh

La Oreja de Van Gogh es una banda con una historia fascinante. Este grupo se formó en enero de 1996 en San Sebastián, España. Está compuesta de Amaia, Pablo, Haritz, Álvaro, y Xabi. Al principio sólo se trataba de un grupo de amigos universitarios que pasaba el rato tocando música de sus grupos favoritos. Cuando empezaron a componer su propia música se dieron cuenta de que ninguno de ellos tenía una voz bastante especial para cantar. Primero trataron de ver si entre la gente que conocían había alguien con una voz lo suficientemente buena para integrarse al grupo.

Su búsqueda terminó cuando Pablo conoció a Amaia. Después de oírla cantar, él le propuso hacerse parte del grupo y Amaia aceptó, convirtiéndose así en la voz principal de la banda. Hasta hoy día la banda consiste en cinco voces masculinas y una sola voz femenina.

Al principio sólo tocaban en lugares donde tenían amistad con el dueño, pero luego pensaron que ya estaban listos para un público más numeroso y decidieron presentarse en un concurso de pop rock en la Ciudad de San Sebastián. Para el concierto grabaron un disco y se lo presentaron al jurado. Al final no consiguieron ningún premio, pero gracias a este concurso lograron que se les oyera por la radio. De esa manera su nombre y su música comenzaron a ser conocidos por la gente de la región.

Otro resultado de no haber ganado nada en el concurso fue que trabajaron mucho más duro para volver a presentarse en el concurso del año siguiente. En esa ocasión el grupo logró ganar el primer premio y así fue que su música se empezó a oír en todas las estaciones de radio del país.

En 1998 después del éxito del concurso, una de las compañías discográficas más conocidas se interesó en ellos y en los estudios Ashram de Nacho Cano en Madrid, con Alejo Stivel como supervisor de su trabajo, grabaron lo que sería su primer álbum “Dile al sol”.

El éxito del disco fue grande y durante un año entero, el grupo estuvo dando conciertos por toda España, llegando a dar 150 conciertos. En los premios de música que se presentaron en 1999 recibieron el premio de mejor artista y el premio de mejor compositor. Las cosas les iban realmente bien, y decidieron que ya era hora de tomarse unas muy merecidas vacaciones.

Su segundo álbum “El Viaje de Copperpot” fue grabado en estudios de Madrid, Francia y Londres y fue producido por el famoso Nigel Walker.

Unos años más tarde presentaron su tercer CD llamado, “Lo que te conté mientras te hacías la dormida”. Este disco incluye catorce canciones. Los ritmos en su mayoría siguen el mismo estilo de los anteriores, aunque algunas canciones sorprenderán a aquellos que han seguido de muy cerca la exitosa carrera de La Oreja de Van Gogh a causa de los temas incluidos.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 26, 2011"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-family-circus.png",
        cap: "Picture for writing task 33 — Bil Keane, “The Family Circus” (adapted), Comprehensive Examination in Spanish, January 2011",
        alt: "Circular Family Circus cartoon: a mother stands at the breakfast table pouring cereal from a box into a bowl while four young children sit around the table with cups, bowls, and spoons; a milk carton and a pitcher stand on the table." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. According to your friend, which foods are in a typical Costa Rican breakfast?",
    choices: [
      "tropical fruit",
      "rice and beans",
      "cheese and crackers",
      "fried meat and plantains"
    ],
    answer: 1,
    back: "(2) rice and beans — Gallo Pinto \"se hace con arroz y frijoles negros\" (it is made with rice and black beans), accompanied by eggs and sour cream."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is unique about this contest?",
    choices: [
      "It is for cooks from the best restaurants in Spain.",
      "The cooking school of the winner will receive the prize.",
      "It is the first time that this cooking contest has taken place.",
      "The final cooking competition can be viewed online."
    ],
    answer: 3,
    back: "(4) The final cooking competition can be viewed online — \"Es la primera vez que un final de este concurso será retransmitido en vivo y a través del internet.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What does Jon Secada explain about his new album?",
    choices: [
      "It was dedicated to his parents.",
      "It relies heavily on electronic instruments.",
      "It was inspired by his many travels.",
      "It is sung entirely in Spanish."
    ],
    answer: 3,
    back: "(4) It is sung entirely in Spanish — the album includes \"canciones, todas en español\" and was recorded live \"sin instrumentos electrónicos y sin ninguna canción en inglés.\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What event is being announced?",
    choices: [
      "a retirement",
      "a graduation",
      "an engagement",
      "an anniversary"
    ],
    answer: 2,
    back: "(3) an engagement — the magazine Gente announced \"el compromiso oficial\" (the official engagement) of writer Miguel Fernandez and journalist Adriana Ortiz; the wedding will be May 22."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is one purpose of this book?",
    choices: [
      "to explain to children why it is important to be polite",
      "to teach children to be concerned about nature",
      "to show children how to care for their pets at home",
      "to help children understand how Mexico was founded"
    ],
    answer: 1,
    back: "(2) to teach children to be concerned about nature — \"es muy importante inculcar a los niños el respeto por la naturaleza\"; the book awakens their interest in living in harmony with nature."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is this announcement about?",
    choices: [
      "unattended luggage",
      "sale items",
      "boarding information",
      "children traveling alone"
    ],
    answer: 1,
    back: "(2) sale items — \"Tenemos una venta especial en ciertos artículos\": leather handbags 50% off, plus novels and postcards on sale before boarding."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Why should you avoid going to the beach this weekend?",
    choices: [
      "A tropical storm is expected.",
      "A heat advisory is in effect.",
      "The air quality is very poor.",
      "The beach is contaminated."
    ],
    answer: 0,
    back: "(1) A tropical storm is expected — \"Una tormenta fuerte se acerca por la costa del sur\" with lightning, thunder, and strong winds; change your beach plans."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is this interview about?",
    choices: [
      "using building tools carefully",
      "cooking food thoroughly",
      "learning first aid techniques",
      "gardening precautions"
    ],
    answer: 3,
    back: "(4) gardening precautions — gardening is healthy \"pero hay que tener cuidado para no lastimarse\": wear leather gloves, long sleeves and pants, and protect your feet from soil bacteria."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What does this person say about bullfighting in Spain?",
    choices: [
      "There are fewer bullfighters now than in the past.",
      "Bullfighting events are televised only in certain regions.",
      "Bullfighting continues to remain popular in the country.",
      "The cost to attend bullfighting events has become too expensive."
    ],
    answer: 2,
    back: "(3) Bullfighting continues to remain popular — \"las corridas todavía tienen mucha popularidad\": 948 bullfights last year, the highest number in ten years."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Quiénes recibieron este premio?",
    choices: [
      "unos directores",
      "unos autores",
      "unos compositores",
      "unos deportistas"
    ],
    answer: 1,
    back: "(2) unos autores — el Premio Salambó es un reconocimiento literario: los premiados son los escritores Vicente Molina Foix (castellano) e Imma Monsó (catalán)."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. Según esta información, ¿cómo es Lima?",
    choices: [
      "Es una ciudad muy pequeña.",
      "Es una ciudad completamente moderna.",
      "Es una ciudad donde llueve mucho.",
      "Es una ciudad de mucha historia."
    ],
    answer: 3,
    back: "(4) Es una ciudad de mucha historia — \"una de las ciudades más antiguas de Sudamérica\", con la tumba de Pizarro, casas coloniales como la Casa Aliaga y las catacumbas de la Iglesia San Francisco."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué va a hacer este cocinero en su programa?",
    choices: [
      "preparar algunas cremas y salsas especiales",
      "preparar platos con ingredientes baratos",
      "preparar comidas buenas para la salud",
      "preparar platos típicos mexicanos"
    ],
    answer: 2,
    back: "(3) preparar comidas buenas para la salud — Karlos Arguiñano \"ofrecerá nuevas recetas fáciles y saludables\" siguiendo una dieta mediterránea con los básicos de buena nutrición."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué esperan los profesores?",
    choices: [
      "mejores discusiones en las clases",
      "cursos más baratos",
      "clases más largas",
      "más investigaciones científicas"
    ],
    answer: 0,
    back: "(1) mejores discusiones en las clases — \"El resultado deseado es que las discusiones en las clases sean más animadas y los estudiantes estén mejor informados.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Cuál es el propósito de este concierto?",
    choices: [
      "ayudar a los niños a continuar sus estudios",
      "ayudar en la campaña de un político",
      "celebrar el aniversario de la formación del grupo",
      "celebrar la independencia de varios países hispanos"
    ],
    answer: 0,
    back: "(1) ayudar a los niños a continuar sus estudios — la fundación de RBD ayuda \"a los niños con los fondos para la educación\" y usa parte de las ventas de boletos para su programa de becas."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿A quién le interesaría este anuncio?",
    choices: [
      "a una persona que necesita gafas",
      "a una persona que tiene dificultad para dormirse",
      "a una persona que quiere comprar un reloj",
      "a una persona que está interesada en viajar"
    ],
    answer: 1,
    back: "(2) a una persona que tiene dificultad para dormirse — el anuncio da consejos para quien \"no puede dormir\": bajar las luces, usar un filtro de aire y lámparas que estimulan la melatonina."
  },
  // ----- Part 3a: Long reading passage, questions in Spanish (Q16-20) -----
  { ...STIMULI.chile,
    type: "mc",
    label: "Q16",
    stem: "Q16. Se puede describir Chile como un país de contrastes a causa de",
    choices: [
      "su situación económica",
      "su geografía diversa",
      "su historia literaria",
      "su variedad de industrias"
    ],
    answer: 1,
    back: "(2) su geografía diversa — \"la topografía de Chile va de un extremo a otro\": el desierto de Atacama al norte y un laberinto de islas, canales y fiordos glaciales al sur."
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué ayudó Punta Arenas a ser un puerto importante en el siglo XIX?",
    choices: [
      "el número de playas y hoteles en el área",
      "la gran cantidad de habitantes en la región",
      "los medios de transporte muy modernos",
      "los barcos que pasaban por allí buscando oro"
    ],
    answer: 3,
    back: "(4) los barcos que pasaban por allí buscando oro — la fiebre del oro de California \"atrajo una gran cantidad de barcos que circunnavegaban el continente buscando la riqueza prometida.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Por qué son conocidos los mapuches?",
    choices: [
      "por sus conocimientos militares",
      "por sus conocimientos de astrología",
      "por su contribución a la arquitectura indígena",
      "por su contribución a la agricultura del país"
    ],
    answer: 0,
    back: "(1) por sus conocimientos militares — \"Los mapuches usaban tácticas de guerra tan superiores\" que vencieron en las guerras contra los incas y contra los españoles."
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según la selección, ¿qué podemos encontrar en la Isla de Pascua?",
    choices: [
      "muchas estatuas antiguas",
      "muchas iglesias en ruinas",
      "muchas ciudades cosmopolitas",
      "muchas montañas cubiertas de nieve"
    ],
    answer: 0,
    back: "(1) muchas estatuas antiguas — la Isla de Pascua es \"famosa por sus enormes figuras talladas en piedra volcánica por los primeros habitantes.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Quiénes son Neruda y Defoe?",
    choices: [
      "piratas del pasado",
      "exploradores valientes",
      "escritores notables",
      "periodistas internacionales"
    ],
    answer: 2,
    back: "(3) escritores notables — Pablo Neruda es el poeta chileno de \"Descubridores de Chile\" y Daniel Defoe escribió Robinson Crusoe, inspirado en Alexander Selkirk."
  },
  // ----- Part 3b: Realia (Q21-25) -----
  { ...STIMULI.acuaticas,
    type: "mc",
    label: "Q21",
    stem: "Q21. What information is provided in this announcement?",
    choices: [
      "Swimming is at your own risk in the park.",
      "Swimming is not permitted during certain hours.",
      "The water is always cold even in the summer.",
      "A small fee is charged to use the pool."
    ],
    answer: 0,
    back: "(1) Swimming is at your own risk in the park — \"si usted nada en el río o en los lagos, nada bajo su propia responsabilidad. No hay nadie para proteger a los nadadores.\""
  },
  { ...STIMULI.protejase,
    type: "mc",
    label: "Q22",
    stem: "Q22. This announcement provides information about",
    choices: [
      "credit card applications",
      "credit card rewards",
      "low interest rates for credit cards",
      "prevention of credit card fraud"
    ],
    answer: 3,
    back: "(4) prevention of credit card fraud — every tip protects the cardholder: sign the card, memorize the secret number, destroy unused cards, and report a missing card immediately."
  },
  { ...STIMULI.merengue,
    type: "mc",
    label: "Q23",
    stem: "Q23. What contributed to making the merengue the Dominican national dance?",
    choices: [
      "a cooking competition",
      "a political campaign",
      "a religious movement",
      "a visit by foreign dignitaries"
    ],
    answer: 1,
    back: "(2) a political campaign — Rafael Trujillo \"usó el merengue para avanzar su campaña presidencial a través de la radio,\" and soon it became the national dance."
  },
  { ...STIMULI.perro,
    type: "mc",
    label: "Q24",
    stem: "Q24. This organization is concerned about the",
    choices: [
      "effectiveness of dog training",
      "popularity of certain pets",
      "mistreatment of animals",
      "sale of endangered animals"
    ],
    answer: 2,
    back: "(3) mistreatment of animals — El refugio is a nonprofit \"con los objetivos de prevenir, denunciar y dar solución al abandono y maltrato de animales\" (abandonment and mistreatment of animals)."
  },
  { ...STIMULI.ferrero,
    type: "mc",
    label: "Q25",
    stem: "Q25. Why is this product available for a limited time, only?",
    choices: [
      "High temperatures affect the quality of this product.",
      "Certain ingredients for this product are in short supply.",
      "This product is offered only during holidays.",
      "The packaging for this product is being redesigned."
    ],
    answer: 0,
    back: "(1) High temperatures affect the quality — the chocolates \"son retiradas del mercado con el fin de garantizar su elevada calidad que las altas temperaturas pueden alterar\"; they return in October."
  },
  // ----- Part 3c: Second reading passage, questions in English (Q26-30) -----
  { ...STIMULI.oreja,
    type: "mc",
    label: "Q26",
    stem: "Q26. What do we know about the members of this band when it first formed in 1996?",
    choices: [
      "They mainly played in private homes.",
      "They were all from different countries.",
      "They all had exceptional voices.",
      "They were all university students."
    ],
    answer: 3,
    back: "(4) They were all university students — at first it was just \"un grupo de amigos universitarios que pasaba el rato tocando música de sus grupos favoritos.\""
  },
  { ...STIMULI.oreja,
    type: "mc",
    label: "Q27",
    stem: "Q27. What did the band members realize when they started to compose music?",
    choices: [
      "They had difficulties working together.",
      "They could not make a living from their music.",
      "They needed someone with a good voice to sing with them.",
      "They could not maintain the privacy that they had before."
    ],
    answer: 2,
    back: "(3) They needed someone with a good voice — \"se dieron cuenta de que ninguno de ellos tenía una voz bastante especial para cantar,\" so they searched for a singer and found Amaia."
  },
  { ...STIMULI.oreja,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which was one of the first achievements of the band?",
    choices: [
      "opening for a famous rock group",
      "winning a pop rock competition",
      "participating in an international tour",
      "appearing on a popular television program"
    ],
    answer: 1,
    back: "(2) winning a pop rock competition — after failing the first year, \"el grupo logró ganar el primer premio\" at the San Sebastián pop rock contest, and their music hit radio stations nationwide."
  },
  { ...STIMULI.oreja,
    type: "mc",
    label: "Q29",
    stem: "Q29. What did the members of the band do in 1998?",
    choices: [
      "They recorded their first album in Madrid.",
      "They starred in a successful movie.",
      "They decided to break up temporarily.",
      "They introduced a flamenco sound in their music."
    ],
    answer: 0,
    back: "(1) They recorded their first album in Madrid — in 1998, \"en los estudios Ashram de Nacho Cano en Madrid... grabaron lo que sería su primer álbum 'Dile al sol'.\""
  },
  { ...STIMULI.oreja,
    type: "mc",
    label: "Q30",
    stem: "Q30. What was one of the characteristics of the third recording by Oreja de Van Gogh?",
    choices: [
      "The selections were all instrumental.",
      "There were songs in several languages.",
      "There were fewer songs on this CD than on the previous ones.",
      "The style of the songs was very similar to previous recordings."
    ],
    answer: 3,
    back: "(4) The style was very similar to previous recordings — \"Los ritmos en su mayoría siguen el mismo estilo de los anteriores,\" though some themes surprised longtime fans."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). Your pen pal has asked you to tell him or her about a recent school vacation. In Spanish, write a letter to your pen pal telling him or her about your most recent school vacation. You may wish to include:
• when you took the vacation
• the season of the year
• what the weather was like
• length of the vacation
• with whom you spent your time
• holidays that you celebrated
• places that you visited
• activities during the vacation
• whether you enjoyed the vacation
• plans for the next vacation

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Hola María,
Las vacaciones de Navidad fueron muy buenas. La escuela estaba cerrada entre el veintitrés de diciembre y el tres de enero. Hacía mucho frío porque era el invierno. Aquí en Nueva York siempre nieva en el invierno. Pasé mucho tiempo afuera con mis amigos. Nosotros jugábamos en la nieve todos los días. Una noche fuimos al cine y vimos la nueva película de Harry Potter. Era estupenda. Me fascinaban los efectos especiales. Para el Año Nuevo, mi familia y yo fuimos a visitar a mis abuelos. Comimos una comida tradicional y mis primos y yo no nos acostamos hasta muy tarde. En la primavera visitaremos a mis otros abuelos quienes viven en la Florida. Podremos también ir a la playa donde nos divertiremos mucho.
Hasta pronto,

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You have been thinking about what you would do if you could visit any country that you wanted. In Spanish, write a journal entry about which country you would like to visit. You may wish to include:
• the name of the country
• where it is located
• what languages are spoken in that country
• what the weather is like in that country
• what is famous about that country
• why you like that country
• how long it will take to go to that country
• the cost to live in that country
• what you would do in that country

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

En la clase de español estudiamos los países sudamericanos. Aunque me gustan todos, pienso que me gustaría ir a la Argentina. Está situada al este de Chile. Las estaciones son completamente opuestas a las nuestras. Cuando aquí es invierno, allí es verano.
Quiero pasar tiempo en Buenos Aires para practicar y mejorar mi español. También me encanta el tango. Hay muchos lugares donde puedes ir a escuchar música y bailar el tango. Sólo por el tango, vale la pena ir a la Argentina.
El viaje es muy largo pero llevaré libros y juegos para entretenerme en el avión. Dicen que el dólar vale mucho así que no será muy caro vivir allí por un mes. Creo que va a ser un viaje fenomenal.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Esta mañana fue un desastre. Primero, el reloj despertador no funcionó y me desperté tarde. Me vestí muy de prisa. Saqué unos calcetines del tocador y me los puse sin darme cuenta de que no eran del mismo color. Cuando llegué a la cocina todos ya estaban comiendo. Mamá estaba furiosa. Mi hermanita lloraba porque su vestido favorito estaba sucio y mis dos hermanitos se burlaban de ella. Yo quería huevos pero no había tiempo. Mamá no tenía paciencia para mis pedidas ni para las quejas de los demás. Entonces perdí el autobús y llegué tarde al colegio. Cuando entré en la clase les saludé a mis amigos y ellos se rieron de mí al ver que yo llevaba un calcetín rosado y otro azul. ¡Qué mañana!

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. According to your friend, where besides homes can Gallo Pinto be found in Costa Rica?",
    choices: [
      "only in luxury hotels",
      "at outdoor street fairs",
      "even in fast-food restaurants",
      "only in school cafeterias"
    ],
    answer: 2,
    back: "(3) even in fast-food restaurants — \"Hasta en los restaurantes de comida rápida se puede encontrar este plato 'Gallo Pinto' tan apreciado por los ticos.\""
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S2",
    stem: "S2. In which city will the final of the young cooks contest be celebrated?",
    choices: [
      "Barcelona",
      "Madrid",
      "Sevilla",
      "Valencia"
    ],
    answer: 1,
    back: "(2) Madrid — the final of the Sexto Concurso de Jóvenes Cocineros is the one \"que se celebrará en Madrid.\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "S3",
    stem: "S3. According to the announcement, when will the wedding of Miguel Fernandez and Adriana Ortiz take place?",
    choices: [
      "on February 14",
      "on July 4",
      "on December 31",
      "on May 22"
    ],
    answer: 3,
    back: "(4) on May 22 — \"La boda tendrá lugar el próximo 22 de mayo\" in the cathedral of Santa María Inmaculada in Santiago."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S4",
    stem: "S4. What does the forecaster say about the last storm?",
    choices: [
      "It changed direction and caused more damage than expected.",
      "It stayed far away from the southern coast.",
      "It lasted only a few hours.",
      "It was followed by a long drought."
    ],
    answer: 0,
    back: "(1) It changed direction and caused more damage than expected — \"la última tormenta cambió de trayectoria y causó más daño que de lo que se pensaba.\""
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "S5",
    stem: "S5. Según el anuncio, ¿quiénes eligieron los mejores libros del año para el Premio Salambó?",
    choices: [
      "los lectores del Café Salambó",
      "unos profesores universitarios",
      "un jurado de quince escritores",
      "los periodistas de una revista literaria"
    ],
    answer: 2,
    back: "(3) un jurado de quince escritores — \"El último martes del mes de febrero un jurado de quince escritores eligió el mejor libro del año escrito en castellano y el mejor libro escrito en catalán.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S6",
    stem: "S6. Según la información, ¿quién está enterrado en la catedral de Lima?",
    choices: [
      "un poeta famoso del Perú",
      "Francisco Pizarro, conquistador y fundador de la ciudad",
      "el primer presidente del Perú",
      "un arquitecto de la época colonial"
    ],
    answer: 1,
    back: "(2) Francisco Pizarro — \"En la catedral está enterrado Francisco Pizarro, conquistador y fundador de Lima.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "S7",
    stem: "S7. Según la selección, ¿qué es la cazuela?",
    choices: [
      "un caldo con arroz, maíz fresco, papas y carne o pollo",
      "un postre típico de Valparaíso",
      "una bebida caliente del desierto de Atacama",
      "un pan dulce de las antiguas haciendas"
    ],
    answer: 0,
    back: "(1) un caldo con arroz, maíz fresco, papas y carne o pollo — en Santiago se puede \"probar especialidades regionales como la cazuela, que consiste en un caldo con arroz, maíz fresco, papas y carne o pollo.\""
  },
  { ...STIMULI.acuaticas,
    type: "mc",
    label: "S8",
    stem: "S8. According to the announcement, what do the park rules require for all boats?",
    choices: [
      "a life jacket for every passenger",
      "an inspection by the park office",
      "a fee paid after each trip",
      "a permit that can be bought at the park entrance"
    ],
    answer: 3,
    back: "(4) a permit that can be bought at the park entrance — \"Las reglas del parque requieren permisos para todos los barcos. Los permisos se pueden comprar a la entrada del parque.\""
  },
  { ...STIMULI.protejase,
    type: "mc",
    label: "S9",
    stem: "S9. According to this notice, what should you do with credit cards that you no longer use?",
    choices: [
      "mail them back to the bank",
      "keep them in a safe place",
      "destroy them",
      "lend them only to family members"
    ],
    answer: 2,
    back: "(3) destroy them — the notice says \"Destruya las tarjetas que ya no usa\" (destroy the cards you no longer use)."
  },
  { ...STIMULI.oreja,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, what did the band members decide to do after giving 150 concerts throughout Spain?",
    choices: [
      "record an album in English",
      "take some well-deserved vacations",
      "move to London permanently",
      "look for a new lead singer"
    ],
    answer: 1,
    back: "(2) take some well-deserved vacations — after a year of 150 concerts and winning best artist and best composer in 1999, \"decidieron que ya era hora de tomarse unas muy merecidas vacaciones.\""
  }
];
