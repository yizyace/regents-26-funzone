// January 2007 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key / rating guide), raw-docs/nysedregents.org/spanish/jan2007/.
// Printed quirks kept verbatim (verified against page renders): "Popocatéptl"
// (Part 3c passage, missing the second 'e'), "será interpretada Jennifer López"
// (Part 3a passage, no "por"), "El volar en tren lo inventaron los chinos"
// (Q12 dictation passage), "Los Angeles" without accent (Q8 and Q14 dictation
// passages), "el pronóstico de tiempo" (Q2 dictation passage), "to visit
// Cordoba" without accent (Q25 choice 3), and "El tiene" without accent in the
// official Part 4 sample response for task 33.

const TDC_SRC = "Teacher Dictation Copy, January 2007 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] Your friend leaves you a telephone message while you are out. You retrieve the message and hear:

[La maestra lee] Hola. Habla Verónica. ¿Ya compraste un regalo de cumpleaños para Alicia? Su fiesta de cumpleaños es el sábado y no tengo ninguna idea de qué comprarle. Pienso regalarle ropa, pero no estoy muy segura de su talla ni del color que prefiere. Necesito que me llames lo más pronto posible con algunas ideas porque voy de compras con mi mamá en una hora. Espero tu llamada. Gracias.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are listening to the weather forecast in Valencia, Spain. You hear:

[La maestra lee] Hoy el pronóstico de tiempo en Valencia indica que tendremos cielos azules hasta el anochecer. La temperatura llegará hasta los 31°. Hará bastante calor y hará mucho sol, el tiempo perfecto para broncearse.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to the radio in San Juan, Puerto Rico, and hear this advertisement:

[La maestra lee] Es un automóvil hecho a la medida para disfrutar del aire libre. Es algo nunca antes visto. Tiene un diseño elegante y una construcción llamativa. Es un vehículo que contiene todos los adelantos de la tecnología e ingeniería de hoy. Está equipado con un sistema de frenos antibloqueo y aire acondicionado con un sistema de filtración de aire antipolen. También hay controles individuales de temperatura para el conductor y el pasajero delantero y un estéreo compacto. Consulte con su vendedor favorito.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You hear this commentary on a Spanish-language radio station:

[La maestra lee] Parece que el animador puertorriqueño, Rafael José, se unirá al grupo de artistas que se interesa por el servicio al público. El ex locutor del programa “Despierta América” está considerando un puesto en el senado de Puerto Rico, pero como quiere hacer un buen trabajo, quiere organizar su campaña con mucho cuidado. Aunque dentista de profesión, Rafael José ve la política como una oportunidad para devolverle a su comunidad el cariño que se le ha demostrado.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] While listening to a Spanish-speaking radio station, you hear this announcement:

[La maestra lee] Todos los días Ud. tiene que tomar decisiones importantes sobre su familia. Pero, ¿cómo conseguir la información necesaria para tomar estas decisiones? Esa información está en la “Lista de publicaciones federales en español para el consumidor”, un catálogo de doscientas publicaciones gratis del gobierno sobre beneficios federales, alimentación, finanzas, educación, salud, y más. Para recibir la lista de publicaciones en español, mande su nombre y dirección a nuestra emisora de radio.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are in Mexico and you hear this advertisement on television:

[La maestra lee] Correo electrónico inalámbrico. Este aparato para mensajes personales sirve para enviar y recibir correos electrónicos desde cualquier lugar y en cualquier momento. Es una computadora portátil muy pequeña, con teclado y pantalla. Úsalo para comunicarte con tus amigos mientras haces cola en el cine o cuando vayas al centro comercial. ¡Bienvenidos al Siglo XXI!`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You hear this announcement on a Spanish-language radio station:

[La maestra lee] Si te interesa la música, esta información va a ser de tu agrado. Los músicos profesionales que comenzaron a estudiar música desde que eran niños pequeños, tienen ciertas áreas del cerebro más desarrolladas que las personas que no son músicos. Pero todavía no se sabe lo que significa este descubrimiento para los músicos ni para el resto de la población.

Varias investigaciones han demostrado que el entrenamiento musical temprano puede mejorar la inteligencia. Exámenes de inteligencia indican que los niños entrenados musicalmente sacan mejores notas que los niños que no han recibido clases de música.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are in Los Angeles listening to a Spanish-language radio station and you hear this announcement:

[La maestra lee] Aunque no es tan conocido como su famoso padre Gabriel García Márquez, Rodrigo García también está dejando su huella. El camarógrafo, escritor y director de 43 años, que ha participado en proyectos cinematográficos de tanto éxito como Danzón, Mi vida loca, y Frida, ahora debuta como dramaturgo con la obra Diez obras cortas sobre el amor. Se estrenó hace poco en el Teatro Lee Strasberg, de Los Angeles, y fue muy bien recibida por el público.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are in Barcelona, Spain, and you hear this announcement on the news:

[La maestra lee] El descubrimiento de un mural del artista catalán Joan Miró que no se había exhibido por más de diez años, fue la excusa perfecta para inaugurar la exposición titulada “De Picasso a Pollock: clásicos del arte moderno”, en el museo Guggenheim en la ciudad de Nueva York. Esta exposición, que durará hasta finales del mes próximo, unifica a los artistas de mayor importancia de la primera mitad del siglo XX. Si piensas visitar la Gran Manzana por estas fechas, no te pierdas esta exhibición. El museo está ubicado en la famosa Quinta Avenida y la calle 89.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to a Spanish radio station and you hear:

[La maestra lee] ¿Has pensado en lo que harás este verano? Si no tienes nada que hacer, el descanso escolar puede ser muy largo y terminarás echando de menos la escuela, las asignaciones y los exámenes. Aprovecha estas vacaciones para disfrutar de nuevas actividades. También es un buen momento para aprender cosas nuevas y tener experiencias diferentes. Por ejemplo, puedes hacer trabajo voluntario u ofrecer ayuda a tus abuelitos.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] Your friend reads to you some information from a Spanish web site about travel. She says:

[La maestra lee] Si después de descubrir todo lo que ofrece Europa en otoño, decide hacer un viaje, la información a continuación le ayudará. Primero, necesita un pasaporte, porque sin éste no puede viajar. Segundo, lleve su cámara fotográfica y rollos de película para que traiga recuerdos de sitios inolvidables. Es preferible llevar una maleta de mano para viajar con más facilidad. Para el día lleve ropa de algodón y para la noche lleve un abrigo liviano. Se recomiendan zapatos cómodos, en caso de que tenga que caminar mucho. Y para el avión, un buen libro.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are in Spain and you hear this announcement:

[La maestra lee] El volar en tren lo inventaron los chinos. Va a 400 kilómetros por hora. Sólo tiene tres vagones y corre muy rápido sobre los rieles gracias a la tecnología de “levitación” magnética. Puede viajar hasta 50 kilómetros en 8 minutos.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are watching a Spanish-language television program and hear this report:

[La maestra lee] ¡El cantante Juanes sigue triunfando! Una vez más será el invitado de honor a una ceremonia especial. Ya está acostumbrado a obtener nominaciones en múltiples categorías, y los premios “Lo Nuestro” no son la excepción. Está nominado como “Mejor artista masculino”, “Mejor artista de rock” y “Mejor álbum”, entre otros. Este evento tendrá lugar el próximo cinco de febrero. ¡Enhorabuena a uno de nuestros músicos favoritos!`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] While watching a talk show in Mexico, you hear this commentary:

[La maestra lee] El actor Armando Gutiérrez es un muchacho sencillo al que no le interesa Hollywood y es el típico chico que te gustaría llevar a tu casa para conocer a tus padres. El actor, de 25 años, nativo de la histórica ciudad de Mérida, México recién dejó a sus padres para pasar un año en Los Angeles. Como no se acostumbraba al estilo de vida de Hollywood, decidió regresar a su tranquilo pueblo natal. Por eso, decidió vivir en su querido país, y sólo volver a Los Angeles cuando tuviera un proyecto de cine.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] Your friend from Spain is telling you about his school. He says:

[La maestra lee] Mi colegio tiene aspectos positivos y negativos también. Lo que más me gustan son los profesores; son muy dedicados y se preocupan por nosotros. Lo único que cambiaría de mi colegio es el ambiente del comedor porque todos gritan y a veces salgo con dolor de cabeza. Además, la comida es horrible. Eso sí, el patio es fenomenal y como mis amigos son simpatiquísimos, lo pasamos muy bien.`,
    psource: TDC_SRC
  },
  frida: {
    passage: `Frida Kahlo

Fue bautizada Magdalena Carmen Frida Kahlo y Calderón en 1907 en la Ciudad de México. Su tercer nombre, el que la familia usaba, significa paz en alemán, la lengua nativa de su padre. Irónicamente, su vida no fue nada tranquila.

Alrededor de los 6 años, Frida Kahlo contrajo polio, enfermedad que la dejó algo incapacitada. A los 18 años, sufrió un accidente de autobús que la dejó semi-inválida. Tuvo que someterse a muchas operaciones durante su vida. Sin embargo, llegó a ser una artista brillante y singular, aunque frecuentemente tenía que pintar en la cama.

Frida se casó con el gran muralista mexicano Diego Rivera, el gran amor de su vida, en 1929. Los dos tenían personalidades muy fuertes y en un momento se divorciaron. Pero se volvieron a casar después de un año, y se quedaron juntos, compartiendo sus ideas artísticas y políticas. Kahlo y Rivera viajaron mucho y conocieron a muchas personas muy conocidas de la época: al artista Pablo Picasso, al artista y surrealista André Breton, a muchos líderes políticos, incluso a Nelson Rockefeller y a Conger Goodyear.

Las obras de Frida son dramáticas y violentas—como su vida. Antes de Frida Kahlo, “nadie había pintado su propio nacimiento, sus conflictos emocionales muy contradictorios”, comenta Raquel Tibol, crítica de arte en México y amiga de Frida y Diego. Tibol añade, “Eso es lo que hace tan singular su pintura”.

Esa pintura única—producida por una mujer sin entrenamiento artístico formal—la llevó a París y a Nueva York, donde tuvo su primera exposición en 1938 y también fascinó a muchos de sus contemporáneos.

En una carta a Rivera, Pablo Picasso, el gran artista español escribió: “Ni Derain, ni yo, ni tú somos capaces de pintar una cabeza como Frida Kahlo”. En un artículo escrito en 1943, el propio Rivera declaró que la pintura de su esposa “brilla como un diamante entre muchas joyas inferiores”.

De hecho, su personalidad fue tan brillante y llamativa como su obra. Todos la reconocían, pues casi siempre se vestía con trajes y joyas mexicanos tradicionales. Y su popularidad sólo ha crecido con el paso de los años. Hace unos años se llevó al cine la vida de Kahlo. La película protagonizada por la joven actriz Salma Hayek, fue dirigida por Julie Taymor. En otra obra cinematográfica dirigida por Luis Valdez, será interpretada Jennifer López y se espera un anuncio formal pronto. No sorprende que las actrices se sientan motivadas por esta “artista y mujer revolucionaria”.

Tibol, la antigua amiga, está de acuerdo con esa evaluación. Frida “tenía mucho sentido de la ironía, mucho sentido del chiste”, y no le era bastante el gusto común de toda la gente. Era una mujer especial, única y muy progresiva.

Frida Kahlo murió a los 47 años en 1954. Era tan conocida y tan amada por la gente mexicana que su funeral tuvo lugar en el bellísimo Palacio de Bellas Artes en la ciudad de México.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 24, 2007"
  },
  tango: {
    imgs: [
      { src: "img/q21-tango-articulo.png",
        cap: "Article for question 21, Comprehensive Examination in Spanish, January 2007",
        alt: "Boxed article titled TANGO. The tango is a magical cocktail of music, nostalgia and poetry. It was born on the cobblestones of the port neighborhood of La Boca, in Buenos Aires, in the decade of 1880. Its sound is the invariable lament of the bandoneón, an instrument similar to the accordion, imported to Argentina by German sailors, which soon became the soul of the tango. The tango's infancy and adolescence circulated in the poor outskirts of Buenos Aires, but the Argentine government prohibited the music in public, which turned it into the forbidden dance of the upper class. The years and the rise of the dance ended up 'legalizing' it in 1920, when it reached the cabarets of downtown Buenos Aires to become 'The King of the Night.' The jump to Paris and the later boom internationalized it through the singer Carlos Gardel, its most famous 'spokesman,' who lived and worked professionally in Europe and New York. The recent Broadway success of the show 'Tango Argentino,' as well as the international impact of the composer Astor Piazzola, who has modernized the music while keeping its ethnic and cultural roots alive, are responsible for its current rebirth." }
    ]
  },
  revistaTu: {
    imgs: [
      { src: "img/q22-revista-tu-precio.png",
        cap: "Notice for question 22, Comprehensive Examination in Spanish, January 2007",
        alt: "Boxed notice from a magazine to its readers: We have learned that in some places the magazine TU is being sold at a price higher than normal. We want to ask you to help us fight these abuses. How? By checking the price that is printed on the cover. This is very important to us, since Editorial Televisa makes a great effort so that you can buy it at an accessible price, because we are aware of the difficult economic situation the world is experiencing. So now you know, do not fail to alert us if someone tries to get away with this." }
    ]
  },
  target: {
    imgs: [
      { src: "img/q23-target-tarjeta-escuela.png",
        cap: "Advertisement for question 23, Comprehensive Examination in Spanish, January 2007",
        alt: "Boxed advertisement: Would you like to help your child's school? Get a Target Guest Card and use it on all your purchases. Target will send 1% of your purchase to the K-12 school of your choice that meets certain requirements. During August, we will also add a 2% bonus with the purchase of school supplies for back-to-school. Your school will be able to invest the money in whatever it needs most." }
    ]
  },
  carnaval: {
    imgs: [
      { src: "img/q24-carnavales-espana.png",
        cap: "Article for question 24, Comprehensive Examination in Spanish, January 2007",
        alt: "Boxed article titled 'Carnavales en España'. After a few months of cold and before entering the hard days of Lent comes a week in which everything is allowed: Carnival. This holiday is celebrated in many corners of Spain, with neighbors participating one hundred percent in the preparations and in the unfolding of the celebrations. In Ciudad Rodrigo there is the Carnaval de Toro. The inhabitants of this town, located only 87 km from Salamanca, boast that their Carnival is the oldest in Spain. A document from 1493 is preserved in which the Catholic Monarchs regulated the bullfights in Ciudad Rodrigo. During the Carnival festivities a wooden structure is built in the Plaza Mayor where the bullfights are held. However, the bull festival does not begin in the Plaza Mayor but in the running of the bulls through the streets of the town, along which the young men of Ciudad Rodrigo and visitors guide the bulls. Only the most daring dare to run next to the bulls and even to touch them." }
    ]
  },
  lectores: {
    imgs: [
      { src: "img/q25-lectores-carta.png",
        cap: "Letter for question 25, Comprehensive Examination in Spanish, January 2007",
        alt: "Boxed letter headed LECTORES, signed MANUEL MARTINEZ (Estados Unidos). My parents went to Brazil in 1924 as immigrants. My father married twice: his first wife had already died when he married a second time, and he arrived in Brazil newly married. He left children, brothers and other relatives in Spain. He came from Aguilar de la Frontera, in the province of Córdoba. Manuel Conde de la Jave is the name of my brother, who stayed in Spain and is, above all, the one I am trying to locate. He is the son of Manuel Conde Baena and Francisca de la Jave. If I could locate my brother it would bring me great joy, since I do not know him." }
    ]
  },
  murales: {
    passage: `MURALES EN PELIGRO

El historiador oficial del estado mexicano de Tlaxcala, Desiderio Hernández Xochitiotzín, anunció que debido a la constante emisión de material incandescente que sale del volcán Popocatéptl, los murales de la zona arqueológica de Cacaxtla podrían ser afectados por la polvorosa ceniza volcánica. Entrevistado durante las labores de restauración de su obra pictórica que está dentro del palacio de gobierno, el historiador señaló que es indispensable que el Instituto Nacional de Antropología e Historia (INAH) realice las acciones preventivas para evitar la pérdida de esta herencia cultural de la nación.

Indicó que los tres principales murales de esa zona arqueológica, conocidos como “El Hombre Ave”, “El Hombre Jaguar” y “El mural de la Batalla”, los cuales fueron descubiertos el día 13 de septiembre de 1975, “sí pueden ser dañados por las cenizas producidas por el volcán”. Las autoridades del INAH, a través de los especialistas, deben asegurarse de que la conservación de los murales y de todo el sitio cultural donde también se encuentra la Pirámide de las Flores en la vecina zona arqueológica de “Xochitécatl” sea conservado en óptimas condiciones.

Explicó que desde el día del descubrimiento de la zona arqueológica y hasta la fecha actual, las pinturas pre-hispánicas que presentan elementos culturales, únicos en el mundo, han sufrido deterioro en su colorido y brillantez. Sin duda, es necesario conservar estos murales ya que representan un episodio histórico que es esencial para comprender la historia de nuestra civilización.

“Los murales han sufrido deterioro, no sólo ahora sino desde que se descubrieron, pues he observado que el tratamiento con químicos protectores que usan los especialistas no ha sido eficaz”, dijo Hernández Xochitiotzín. Según él, el deterioro ha sido producto principalmente del medio ambiente y ha resecado demasiado los murales durante los 25 años desde haber sido descubiertos. “Para conservar las pinturas contra la ceniza del volcán se deben reutilizar los productos naturales con los que fueron creadas”, dijo.

Explicó que los murales que se encuentran dentro del llamado Templo o Salón Rojo “han perdido colorido y brillantez y que se debe estudiar qué productos no abrasivos, y de procedencia natural se deben utilizar para reforzar la obra”.

Hay que mencionar que la zona arqueológica de Cacaxtla y Xochitécatl se desarrolló entre los años 600 A.C. y 1000 D.C. y según la revista “Guía México Desconocido” del 2000, fue habitada por la cultura Olmeca-Xicalanca, la cual dominó gran parte del valle poblano tlaxcalteca. El artículo también menciona que el principal centro ceremonial de la zona fue construido sobre una elevación natural conocida como “La Frontera”. En la ciudad se destacaban numerosos edificios y estructuras que fueron construidos durante varias épocas. También, en el Templo o Salón Rojo se encuentra una muestra de pintura mural pre-hispánica, la más grande descubierta hasta hoy. Mide 200 metros cuadrados aproximadamente y en ella se reproduce una gran batalla y algunos ritos ceremoniales. A simple vista se puede apreciar que su construcción tomó más de un sólo período histórico de este pueblo.

Hernández Xochitiotzín enfatizó que las pinturas han perdido humedad, la cual las había protegido por más de nueve siglos, y que ahora que han estado expuestas al aire no durarán mucho tiempo. Así se espera poner en acción un plan de tratar de solucionar el problema lo más pronto posible.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 24, 2007"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-gato-pareja.png",
        cap: "Picture for writing task 33 (— Bunny Hoest & John Reiner, “Laugh Parade” Parade), Comprehensive Examination in Spanish, January 2007",
        alt: "Line drawing of a young man and a young woman sitting on the floor back to back. The man, looking glum, sits with his knees drawn up and reaches toward a collared cat that is walking away from him with its eyes closed. Behind him the woman leans back on her hands with her mouth wide open, as if calling out." }
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
      "help her choose a cell phone",
      "help her plan a party",
      "give her suggestions for a gift",
      "lend her an article of clothing"
    ],
    answer: 2,
    back: "(3) give her suggestions for a gift — Verónica has no idea what to buy Alicia for her birthday and says \"Necesito que me llames lo más pronto posible con algunas ideas\" before she goes shopping in an hour."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What would be most appropriate to do after hearing this weather forecast?",
    choices: [
      "wear a winter coat",
      "go skiing",
      "wear a raincoat",
      "go to the beach"
    ],
    answer: 3,
    back: "(4) go to the beach — blue skies until nightfall, 31°, \"Hará bastante calor y hará mucho sol, el tiempo perfecto para broncearse\" (perfect weather for tanning)."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What product is being advertised?",
    choices: [
      "a new car",
      "an air-conditioning unit",
      "a compact disc cleaner",
      "an instruction manual"
    ],
    answer: 0,
    back: "(1) a new car — \"Es un automóvil hecho a la medida... Es un vehículo que contiene todos los adelantos de la tecnología e ingeniería de hoy,\" with anti-lock brakes, air conditioning and a compact stereo."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What are Rafael José’s plans for the future?",
    choices: [
      "start his own business",
      "run for political office",
      "star in a television sitcom",
      "open a dental practice"
    ],
    answer: 1,
    back: "(2) run for political office — the former \"Despierta América\" host \"está considerando un puesto en el senado de Puerto Rico\" and wants to organize his campaign carefully."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is this announcement about?",
    choices: [
      "a program of study",
      "a list of job opportunities",
      "a magazine subscription",
      "a source of free information"
    ],
    answer: 3,
    back: "(4) a source of free information — the \"Lista de publicaciones federales en español para el consumidor\" is \"un catálogo de doscientas publicaciones gratis del gobierno\" on federal benefits, food, finances, education and health."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is being advertised?",
    choices: [
      "a mini-laptop computer",
      "an antivirus program",
      "a memory card",
      "a web site for pen pals"
    ],
    answer: 0,
    back: "(1) a mini-laptop computer — the wireless e-mail device \"es una computadora portátil muy pequeña, con teclado y pantalla\" for sending and receiving e-mail anywhere."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. According to this announcement, why should children take music lessons at an early age?",
    choices: [
      "Children can do better in school as a result of the lessons.",
      "It helps children get up earlier on school days.",
      "It helps children start to walk at an earlier age.",
      "Children are attracted to all kinds of instruments."
    ],
    answer: 0,
    back: "(1) Children can do better in school — \"el entrenamiento musical temprano puede mejorar la inteligencia... los niños entrenados musicalmente sacan mejores notas que los niños que no han recibido clases de música.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. In what field is the son of García Márquez gaining recognition?",
    choices: [
      "in academics",
      "in modern dance",
      "in film and theater",
      "in law"
    ],
    answer: 2,
    back: "(3) in film and theater — Rodrigo García is a \"camarógrafo, escritor y director\" of hit film projects (Danzón, Mi vida loca, Frida) who now debuts as a playwright at the Teatro Lee Strasberg."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What is this announcement about?",
    choices: [
      "an exhibit of Spanish and other modern artists",
      "a tour of a neighborhood in New York City",
      "an opening of a science exposition",
      "a visit by a famous Spanish painter"
    ],
    answer: 0,
    back: "(1) an exhibit of Spanish and other modern artists — the exposition \"De Picasso a Pollock: clásicos del arte moderno\" at the Guggenheim \"unifica a los artistas de mayor importancia de la primera mitad del siglo XX,\" opened thanks to a rediscovered Miró mural."
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué sugerencias se ofrecen en el anuncio?",
    choices: [
      "cómo aprender a conducir",
      "cómo conocer nuevos amigos",
      "cómo prepararte para el año escolar",
      "cómo pasar las vacaciones de verano"
    ],
    answer: 3,
    back: "(4) cómo pasar las vacaciones de verano — \"Aprovecha estas vacaciones para disfrutar de nuevas actividades... aprender cosas nuevas y tener experiencias diferentes,\" como hacer trabajo voluntario o ayudar a los abuelitos."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué clase de consejos da esta página?",
    choices: [
      "una recomendación de hoteles para el turista",
      "información sobre las cosas necesarias para el viaje",
      "anuncios del horario de los vuelos",
      "ideas para viajar en ciertas líneas aéreas"
    ],
    answer: 1,
    back: "(2) información sobre las cosas necesarias para el viaje — pasaporte, cámara y rollos de película, maleta de mano, ropa de algodón, abrigo liviano, zapatos cómodos y un buen libro para el avión."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿De qué trata el anuncio?",
    choices: [
      "el transporte",
      "la naturaleza",
      "los deportes",
      "las nacionalidades"
    ],
    answer: 0,
    back: "(1) el transporte — se describe un tren de \"levitación\" magnética que va a 400 kilómetros por hora y puede viajar hasta 50 kilómetros en 8 minutos."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué se anuncia sobre este cantante?",
    choices: [
      "Va a escribir un libro.",
      "Va a aparecer en una telenovela.",
      "Va a empezar una nueva carrera.",
      "Va a recibir un premio."
    ],
    answer: 3,
    back: "(4) Va a recibir un premio — Juanes será el invitado de honor de los premios \"Lo Nuestro\", nominado como \"Mejor artista masculino\", \"Mejor artista de rock\" y \"Mejor álbum\", entre otros."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué decisión tomó Armando Gutiérrez?",
    choices: [
      "dejar su profesión de actor",
      "casarse el próximo año",
      "volver a la ciudad donde nació",
      "construir una casa en la playa"
    ],
    answer: 2,
    back: "(3) volver a la ciudad donde nació — como no se acostumbraba al estilo de vida de Hollywood, \"decidió regresar a su tranquilo pueblo natal,\" la histórica ciudad de Mérida, México."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. En la opinión de tu amigo, ¿cuál es un aspecto negativo de su colegio?",
    choices: [
      "los uniformes",
      "la cafetería",
      "los profesores",
      "la hora de recreo"
    ],
    answer: 1,
    back: "(2) la cafetería — \"Lo único que cambiaría de mi colegio es el ambiente del comedor porque todos gritan... Además, la comida es horrible.\" Los profesores y el patio le encantan."
  },
  // ----- Part 3a: Reading passage, questions in Spanish (Q16-20) -----
  { ...STIMULI.frida,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cómo era la juventud de Frida Kahlo?",
    choices: [
      "muy turbulenta",
      "muy aburrida",
      "llena de restricciones familiares",
      "llena de sorpresas agradables"
    ],
    answer: 0,
    back: "(1) muy turbulenta — \"su vida no fue nada tranquila\": contrajo polio a los 6 años, sufrió un accidente de autobús a los 18 y tuvo que someterse a muchas operaciones."
  },
  { ...STIMULI.frida,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué sobrevivió Frida cuando era joven?",
    choices: [
      "la pérdida de su casa y sus amigos",
      "una enfermedad y un gran accidente",
      "el fracaso en la escuela",
      "el traslado de su familia a otra ciudad"
    ],
    answer: 1,
    back: "(2) una enfermedad y un gran accidente — \"contrajo polio, enfermedad que la dejó algo incapacitada\" y \"sufrió un accidente de autobús que la dejó semi-inválida.\""
  },
  { ...STIMULI.frida,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿A quiénes conoció Frida en Europa y en los Estados Unidos?",
    choices: [
      "a muchos estudiantes que la admiraban",
      "a varios músicos célebres",
      "a muchos actores de cine",
      "a varios políticos y artistas"
    ],
    answer: 3,
    back: "(4) a varios políticos y artistas — conoció \"al artista Pablo Picasso, al artista y surrealista André Breton, a muchos líderes políticos, incluso a Nelson Rockefeller y a Conger Goodyear.\""
  },
  { ...STIMULI.frida,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Por qué se considera singular la pintura de Frida Kahlo?",
    choices: [
      "Pintó escenas de su propia vida.",
      "Pintó la vida rural europea.",
      "Pintó retratos de sus hijos.",
      "Pintó una gran variedad de murales."
    ],
    answer: 0,
    back: "(1) Pintó escenas de su propia vida — antes de Frida \"nadie había pintado su propio nacimiento, sus conflictos emocionales muy contradictorios\", comenta la crítica Raquel Tibol; \"Eso es lo que hace tan singular su pintura.\""
  },
  { ...STIMULI.frida,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Por qué quieren muchas actrices representar a Frida en películas?",
    choices: [
      "porque el público lo ha pedido",
      "porque admiran su vida dificultosa y única",
      "porque les permitirá usar la lengua española",
      "porque su obra no se conoce en Europa"
    ],
    answer: 1,
    back: "(2) porque admiran su vida dificultosa y única — \"No sorprende que las actrices se sientan motivadas por esta 'artista y mujer revolucionaria'\": era una mujer especial, única y muy progresiva."
  },
  // ----- Part 3b: Realia, questions in English (Q21-25) -----
  { ...STIMULI.tango,
    type: "mc",
    label: "Q21",
    stem: "Q21. What does this article say about the tango?",
    choices: [
      "The dance was popular with almost everyone before 1880.",
      "The dance was influenced by the ballet in France.",
      "The music had originally been created in Germany.",
      "The music was not allowed in public by the government at one time."
    ],
    answer: 3,
    back: "(4) The music was not allowed in public at one time — \"el gobierno argentino prohibió la música en público, lo que lo convirtió en la danza prohibida de la clase alta,\" until the dance was 'legalized' in 1920."
  },
  { ...STIMULI.revistaTu,
    type: "mc",
    label: "Q22",
    stem: "Q22. What problem did the magazine, Tú, have?",
    choices: [
      "The magazines were not delivered on time.",
      "There were not enough copies printed.",
      "The magazine was sold at higher prices in some places.",
      "The design of the cover was unpopular."
    ],
    answer: 2,
    back: "(3) sold at higher prices in some places — \"en algunos lugares la revista TU se está vendiendo a un precio más alto del normal,\" so readers are asked to check the price printed on the cover and report abuses."
  },
  { ...STIMULI.target,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is offered in this advertisement?",
    choices: [
      "coupons for future purchases",
      "free gifts for a friend",
      "financial rewards to schools",
      "extended hours for shopping"
    ],
    answer: 2,
    back: "(3) financial rewards to schools — with the Target Guest Card, \"Target enviará el 1% de su compra a la escuela de K–12º de su elección,\" plus a 2% bonus on school supplies during August."
  },
  { ...STIMULI.carnaval,
    type: "mc",
    label: "Q24",
    stem: "Q24. What information is provided about the Carnival in Ciudad Rodrigo?",
    choices: [
      "It is the subject of a new movie.",
      "It is a very old tradition.",
      "It begins in the Plaza Mayor.",
      "It takes place once a month."
    ],
    answer: 1,
    back: "(2) It is a very old tradition — locals \"presumen que su Carnaval es el más antiguo de España\" and preserve a document from 1493 in which the Catholic Monarchs regulated the bullfights; the fiesta begins in the streets, not in the Plaza Mayor."
  },
  { ...STIMULI.lectores,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does this person want?",
    choices: [
      "to locate his brother",
      "to get information about Brazil",
      "to visit Cordoba",
      "to exchange letters with pen pals"
    ],
    answer: 0,
    back: "(1) to locate his brother — \"Manuel Conde de la Jave es el nombre de mi hermano... es a quien sobre todo, trato de localizar. Si pudiese localizar a mi hermano, me llevaría una gran alegría, ya que no le conozco.\""
  },
  // ----- Part 3c: Second reading passage, questions in English (Q26-30) -----
  { ...STIMULI.murales,
    type: "mc",
    label: "Q26",
    stem: "Q26. What problem is described in the article?",
    choices: [
      "the loss of artistic techniques over the centuries",
      "the results of a workers’ strike",
      "the lack of funds for preservation",
      "the deterioration of the archaeological zone"
    ],
    answer: 3,
    back: "(4) the deterioration of the archaeological zone — the murals of Cacaxtla \"podrían ser afectados por la polvorosa ceniza volcánica\" of Popocatéptl and \"han sufrido deterioro\" since their discovery."
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "Q27",
    stem: "Q27. What happened to the murals?",
    choices: [
      "They were scratched by tourists.",
      "They were vandalized.",
      "They lost color and light intensity.",
      "They were destroyed when the walls collapsed."
    ],
    answer: 2,
    back: "(3) They lost color and light intensity — \"las pinturas pre-hispánicas... han sufrido deterioro en su colorido y brillantez,\" and those in the Templo o Salón Rojo \"han perdido colorido y brillantez.\""
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "Q28",
    stem: "Q28. What is the importance of these murals?",
    choices: [
      "They predict astronomical events.",
      "They depict a historical period.",
      "They offer an account of the origin of the world.",
      "They are imitated by artists throughout the world."
    ],
    answer: 1,
    back: "(2) They depict a historical period — \"representan un episodio histórico que es esencial para comprender la historia de nuestra civilización.\""
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "Q29",
    stem: "Q29. According to the expert in the passage, what needs to be done to the murals?",
    choices: [
      "The colors of the originals must be changed.",
      "More water needs to be drained from the site.",
      "The original natural products must be used.",
      "Special lights must be installed at the site."
    ],
    answer: 2,
    back: "(3) The original natural products must be used — \"Para conservar las pinturas contra la ceniza del volcán se deben reutilizar los productos naturales con los que fueron creadas,\" since the chemical treatments have not been effective."
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "Q30",
    stem: "Q30. What do we know about the buildings in the city of the archaeological zone?",
    choices: [
      "They were built during different periods.",
      "They remain the tallest buildings in the area.",
      "They were used as models for modern structures.",
      "They were built along a river."
    ],
    answer: 0,
    back: "(1) They were built during different periods — \"se destacaban numerosos edificios y estructuras que fueron construidos durante varias épocas,\" and even the great mural's construction \"tomó más de un sólo período histórico.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). In Spanish, write a journal entry describing what you do in a typical day. You may wish to include:
• morning routine
• school activities
• after-school events
• work/household chores
• family activities
• leisure activities (walking, shopping, sports, music, television/movies)
• meals
• evening and bedtime routine

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

A mí me gusta hacer cosas diferentes todos los días si es posible. En el verano puedo hacer cosas diferentes durante la semana, pero cuando estoy en la escuela tengo que tener una rutina. En las mañanas tengo que levantarme a las cinco, vestirme, desayunar y salir a la calle para tomar el autobús. Llego a la escuela a las siete y cuarto. Hablo con mis amigos por quince minutos. Tengo cuatro clases antes del almuerzo. Almorzamos a las doce y media y salimos de la escuela a las tres de la tarde. El entrenamiento de baloncesto es a las cuatro. Cuando regreso a casa ya es hora de la cena. Después de comer termino de hacer mi tarea y, si tengo tiempo, puedo ver mi programa favorito. Me voy a dormir a las diez de la noche. Este es un día de semana típico para mí.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). Your Spanish pen pal asked you about cars in America and what kinds you like. In Spanish, write a letter to your pen pal discussing cars in America. You may wish to include:
• size
• color
• price of gas
• number of passengers
• cost to repair
• safety
• cost of vehicle
• appearance

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido Antonio,
En los Estados Unidos tenemos mucha variedad de coches. Igual a mis amigos, a mí me encantan los coches deportivos. Mi papá tiene un SUV pero es muy grande y gasta mucha gasolina. Es verde y tiene asientos para siete personas. Es muy divertido cuando vamos de viaje porque podemos mirar una película mientras mi papá conduce. Mi mamá dice que los coches grandes no son buenos para el medio ambiente. Mi papá le prometió comprar un coche pequeño la próxima vez. También la semana pasada algo se rompió y costó más de doscientos dólares para arreglarlo. El mes que viene voy a tomar el examen para mi permiso de conducir. Espero tener mi propio coche después de terminar la escuela secundaria.
Un abrazo,
Sebastián

Rubric: a letter accomplishing the task with many connected details, clear organization with salutation and closing, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

El gatito, Jorge, es parte de nuestra familia. Fue un regalo de un vecino que se mudó a otra ciudad. Al principio, Jorge tenía mucho miedo de su nueva familia, pero poco a poco se acostumbró a nosotros. Ahora siempre quiere estar en nuestra compañía. A las cinco de la tarde, empieza a maullar y sigue “pidiendo” hasta el momento en que yo le preparo su comida. El tiene sus propias ideas de qué comer y dónde. Ha escogido un rincón en la cocina para que no tenga que comer a solas. Así es que mientras come él, toda la familia lo acompaña. Después de llenarse, Jorge descansa en su cama. Es muy vigilante, y por la mañana nos despierta a las ocho.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.frida,
    type: "mc",
    label: "S1",
    stem: "S1. Según el artículo, ¿qué significa el tercer nombre de Frida Kahlo en alemán, la lengua nativa de su padre?",
    choices: [
      "guerra",
      "paz",
      "flor",
      "esperanza"
    ],
    answer: 1,
    back: "(2) paz — \"Su tercer nombre, el que la familia usaba, significa paz en alemán, la lengua nativa de su padre. Irónicamente, su vida no fue nada tranquila.\""
  },
  { ...STIMULI.frida,
    type: "mc",
    label: "S2",
    stem: "S2. Según el artículo, ¿dónde tuvo lugar el funeral de Frida Kahlo?",
    choices: [
      "en el Museo Guggenheim de Nueva York",
      "en una galería de París",
      "en el Palacio de Bellas Artes en la ciudad de México",
      "en el estudio de Diego Rivera"
    ],
    answer: 2,
    back: "(3) en el Palacio de Bellas Artes — \"Era tan conocida y tan amada por la gente mexicana que su funeral tuvo lugar en el bellísimo Palacio de Bellas Artes en la ciudad de México.\""
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "S3",
    stem: "S3. According to the article, when were the three principal murals of Cacaxtla discovered?",
    choices: [
      "in 1929",
      "on September 13, 1975",
      "in 1954",
      "in the year 2000"
    ],
    answer: 1,
    back: "(2) on September 13, 1975 — the murals \"El Hombre Ave\", \"El Hombre Jaguar\" and \"El mural de la Batalla\" \"fueron descubiertos el día 13 de septiembre de 1975.\""
  },
  { ...STIMULI.murales,
    type: "mc",
    label: "S4",
    stem: "S4. According to the article, what does the largest pre-Hispanic mural painting found in the Templo or Salón Rojo show?",
    choices: [
      "a map of the valley and its rivers",
      "a great battle and some ceremonial rites",
      "portraits of the rulers of Tlaxcala",
      "the eruption of the Popocatéptl volcano"
    ],
    answer: 1,
    back: "(2) a great battle and some ceremonial rites — the mural \"mide 200 metros cuadrados aproximadamente y en ella se reproduce una gran batalla y algunos ritos ceremoniales.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S5",
    stem: "S5. According to the advertisement, what safety feature is this car equipped with?",
    choices: [
      "an anti-lock brake system",
      "airbags for every passenger",
      "a rearview camera",
      "an alarm with remote control"
    ],
    answer: 0,
    back: "(1) an anti-lock brake system — \"Está equipado con un sistema de frenos antibloqueo,\" along with air conditioning with anti-pollen filtration and individual temperature controls."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S6",
    stem: "S6. According to the announcement, how can listeners receive the list of publications in Spanish?",
    choices: [
      "by visiting a government office",
      "by sending their name and address to the radio station",
      "by calling a toll-free telephone number",
      "by subscribing to a consumer magazine"
    ],
    answer: 1,
    back: "(2) by sending their name and address to the radio station — \"Para recibir la lista de publicaciones en español, mande su nombre y dirección a nuestra emisora de radio.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S7",
    stem: "S7. According to the announcement, what was the perfect excuse to open this exhibition?",
    choices: [
      "the discovery of a Joan Miró mural not exhibited for more than ten years",
      "the fiftieth anniversary of the Guggenheim museum",
      "the donation of a new Picasso painting",
      "the visit of a famous art critic to New York"
    ],
    answer: 0,
    back: "(1) the discovery of a Joan Miró mural — \"El descubrimiento de un mural del artista catalán Joan Miró que no se había exhibido por más de diez años, fue la excusa perfecta para inaugurar la exposición.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S8",
    stem: "S8. Según la información, ¿qué se recomienda llevar para la noche?",
    choices: [
      "un traje de baño",
      "ropa de algodón",
      "un abrigo liviano",
      "un paraguas"
    ],
    answer: 2,
    back: "(3) un abrigo liviano — \"Para el día lleve ropa de algodón y para la noche lleve un abrigo liviano.\" La ropa de algodón es para el día."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S9",
    stem: "S9. Según el anuncio, ¿cuándo tendrá lugar la ceremonia de los premios “Lo Nuestro”?",
    choices: [
      "el cinco de febrero",
      "el trece de septiembre",
      "el primero de enero",
      "el cuatro de julio"
    ],
    answer: 0,
    back: "(1) el cinco de febrero — \"Este evento tendrá lugar el próximo cinco de febrero. ¡Enhorabuena a uno de nuestros músicos favoritos!\""
  },
  { ...STIMULI.tango,
    type: "mc",
    label: "S10",
    stem: "S10. According to the article, which instrument soon became the soul of the tango?",
    choices: [
      "the Spanish guitar",
      "the bandoneón, an instrument similar to the accordion",
      "the violin",
      "the piano"
    ],
    answer: 1,
    back: "(2) the bandoneón — \"Su sonido es el invariable lamento del bandoneón, un instrumento similar al acordeón, importado a la Argentina por marineros alemanes, que pronto se convirtió en el alma del tango.\""
  }
];
