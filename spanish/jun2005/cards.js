// June 2005 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2005/.
// Spelling quirks ("atraciones", "aprender navegar", "Mapunch" vs "Mapuche",
// "Hyerdahl" in Q27 choice 2) are verbatim from the printed exam.

const TDC_SRC = "Teacher Dictation Copy, June 2005 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are watching television with your friends in San Antonio and hear this advertisement:

[La maestra lee] Jóvenes, ya llegó aquí su club de música latina a precios muy bajos. Podrán comprar doce discos compactos por sólo un centavo. Sólo tendrán que comprar seis discos compactos al precio regular del club en los próximos dos años. Eso es todo. Podrán escoger entre las categorías de música clásica, tropical, pop, latina, mexicana, y muchas más. Podrán seleccionar su música favorita entre más de dieciséis mil selecciones. Dénse prisa y no pierdan más su tiempo. Aquí en su club de la música latina estamos para servirles.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are in Mexico and hear this announcement on the radio:

[La maestra lee] Bioparque Estrella es un parque ecológico dedicado al cuidado y a la preservación de la naturaleza, donde estarán en contacto con el fascinante mundo animal y con la naturaleza. Es el parque más grande de todo México. Aquí también ofrecemos fiestas infantiles. Nuestra oferta incluye invitaciones, bolsitas de dulces, piñatas y merienda. También ofrecemos todas las atraciones de Bioparque y unas fotos con los personajes de Bioparque. ¡Hasta les cantamos las mañanitas! ¡Diviértanse con nosotros en Bioparque!`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You hear this news item on the evening news in Madrid:

[La maestra lee] Sólo ocho por ciento de los hoteles españoles están preparados para recibir reservaciones a través del internet, según un estudio realizado por la Asociación de Empresarios del Sector Turístico de Telecomunicaciones. Este estudio demuestra que el cinco por ciento de los establecimientos, incluyendo hoteles de tres y cuatro estrellas, están listos para efectuar reservaciones a través de sus propias páginas del “web”. El presidente de la asociación destacó que esta cifra demuestra que muy pocos hoteles ofrecen aún este servicio. Es interesante ver cuántos hoteles todavía no usan la red para que sus clientes hagan reservaciones.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are listening to a radio program in Los Angeles. You hear:

[La maestra lee] ¿Es usted una madre que ha pasado varios años en casa criando a sus hijos? ¿Está dispuesta a entrar en la fuerza laboral, pero no puede encontrar un empleo? Cualquiera que sea la razón, regresar al mundo de trabajo después de una larga ausencia puede ser difícil. Para saber más, escuche nuestro programa del martes, “El Mundo de Margarita.” En el próximo programa, Margarita hará una entrevista a Sharon Martínez, dueña de una agencia de empleo en Los Angeles. Ella ofrecerá consejos para un regreso exitoso al trabajo. Escuche a las diez de la mañana en su mejor estación latina de las ondas, radio WADO.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] When you arrive home you hear this message from your Spanish neighbor on your answering machine:

[La maestra lee] Hola. Habla la Señora Blanca. Hoy es lunes y son las tres y cuarto. Tengo que salir inmediatamente porque mi tía está muy enferma en las afueras de la ciudad. Necesito tu ayuda otra vez porque mis hijos se fueron de vacaciones. Me gustaría que tú les dieras de comer al perro y al conejo esta noche y dos veces mañana. La comida está en la cocina. También necesitas sacar a pasear al perro. Espero volver el miércoles a eso de las nueve de la mañana. Muchísimas gracias.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are watching Univisión and you hear this advertisement:

[La maestra lee] Cuando su familia está lejos, la distancia desaparece cuando usted tiene una tarjeta prepagada Sprint. ¿Es el cumpleaños de abuelita en San Juan? Llámela para felicitarla sin tener que gastar una fortuna. ¿Le gustaría mucho hablar con su primo en San Francisco? Ahora usted puede hablar con su familia usando una tarjeta prepagada. Es barata. Las llamadas dentro de los Estados Unidos cuestan solamente ocho centavos por minuto. Para las llamadas internacionales, el costo depende del país. Puede usar su tarjeta Sprint desde cualquier teléfono en los Estados Unidos y desde casi cualquier parte del mundo. Las instrucciones en su tarjeta le guiarán a completar su llamada. Su tarjeta prepagada es una gran alternativa. Sprint. Persona a persona, corazón a corazón.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You hear this advertisement on a local television station in Miami:

[La maestra lee] ¡Viaje a Latinoamérica en español! Haga sus reservaciones con Continental Airlines en español llamando al 1-800-537-RESERVA. ¿Quiere saber si su avión sale o llega a tiempo? Verifique la salida y la llegada de vuelos antes de llegar al aeropuerto, llamando al sistema automatizado de información en español. ¿Quiere comprar su boleto o escoger su asiento? Use la pantalla interactiva en español en las máquinas de boletería electrónica de Continental en el aeropuerto. ¡Buen viaje!`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] While in Argentina you hear your host mother calling a travel agent. She says:

[La maestra lee] Buenos días, señor, tengo que pedirle un favor. Mi hija sale para los Estados Unidos en quince días, y como ella no habla inglés, necesita a una persona bilingüe que le acompañe en el aeropuerto, cuando llegue a Kennedy. Tiene que cambiar de avión y no sabe qué hacer. Quisiera saber si hay este servicio en Nueva York y cuánto le van a cobrar.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] Your friend, an exchange student from Venezuela, calls you and leaves this message:

[La maestra lee] Hola, soy Lucía. Te llamo para que me prestes tu libro de arte. Tuve que salir temprano de la escuela hoy para una cita con el dentista y se me olvidó traer mi libro a casa. Tengo que escribir un ensayo sobre Botero para la clase de arte y necesito usar el libro. Por favor, cuando recibas este mensaje, ¡llámame lo más pronto posible! Gracias. Hasta pronto.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to the radio and hear:

[La maestra lee] Para no arruinar su mejor plato, en este caso las pastas, evite cometer los siguientes errores: use una cazuela que sea lo suficientemente grande, ya que la pasta necesita espacio para que no se pegue mientras hierve. No espere hasta que el agua esté realmente hirviendo antes de echar la pasta. Esto es un error muy frecuente. Deje hervir la pasta sin revolverla. Cuando la pasta esté preparada, saque la pasta del agua al instante o si no, la pasta se ablandará y perderá su textura.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to the radio and you hear this advertisement:

[La maestra lee] ¿Quiere ir de compras? ¿Necesita la traducción de un documento? ¿Siente nostalgia de su país? En Terra.com sus deseos son órdenes porque éste es uno de los portales informativos más completos en español. Al alcance de un clic consiga información sobre deportes, salud, finanzas, cultura, y muchas cosas más. También puede hacer miles de amigos. Terra.com…nuestra casa es su casa. ¡Visítenos pronto!`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are in Los Angeles watching Hispanic television and hear this advertisement:

[La maestra lee] Aunque esta muñeca sea rubia, moderna, y de ojos azules, ¡no la confundas con Barbie! La muñeca de Cristina Aguilera hace algo que Barbie no puede hacer: cantar. Al presionar un botón escucharás a la ganadora de un Premio Grammy cantar sus éxitos. La muñeca cuesta cuarenta y cinco dólares y está disponible en tiendas alrededor del país.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While listening to the news in Puerto Rico you hear:

[La maestra lee] Un grupo de estudiantes de ingeniería de la Universidad de Puerto Rico participa en una competencia sobre los diferentes usos de la energía solar que se lleva a cabo en los Estados Unidos. El equipo ha demostrado que existe una alternativa real de energía solar a un precio bajo, pero muy eficaz. Ellos tratan de resolver el problema de construir una casa en la que se utilice solamente la energía del sol para satisfacer las necesidades de la vida diaria, tales como, cocinar, lavar y usar la computadora. Este concepto, todavía considerado revolucionario, nos ayuda a tener una visión positiva para la conservación de energía en la casa del futuro.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You hear this announcement on a radio station in Mexico City:

[La maestra lee] ¿Llevas una vida agotada con mucha presión? Es facilísimo reducir el estrés en menos de veinte minutos con las ideas siguientes. Lleva un cuaderno y un lápiz contigo en todo momento y, cuando encuentres algo que te cause estrés, escríbelo. Inmediatamente después, haz ejercicios de relajación. También, participa en actividades que te den un ratito de felicidad como por ejemplo, ver una película, llamar a alguien por teléfono o caminar por el jardín.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a job recruiter in Uruguay and she says:

[La maestra lee] No somos iguales. Y eso nos gusta. El éxito de una compañía se debe a la gente que trabaja en ella — y sobre todo a las diferencias entre los empleados. Eso nos gusta, y lo promovemos. Sabemos que con opiniones y puntos de vista diferentes se puede crecer y mejorar. Por eso buscamos empleados que reflejen la diversidad de la comunidad a la cual servimos. Así podemos responder a las necesidades específicas de cada persona con flexibilidad e innovación. En un mundo donde las diferencias saltan a la vista, nuestra compañía está presente para el beneficio de toda la comunidad.`,
    psource: TDC_SRC
  },
  buceo: {
    passage: `Aprendiendo un nuevo deporte

Las personas se motivan a buscar y participar en actividades recreativas que tienen cierta cantidad de riesgo cuando van de vacaciones. Algunos ejemplos de estas actividades que interesan a los vacacionistas son: el paracaidismo, el buceo, el surfing, el alpinismo, el esquí y otros. En este artículo hablaremos del buceo. Este es un deporte muy divertido pero que también puede ser algo peligroso. El buceo requiere respirar bajo el agua con la ayuda de un tanque de aire comprimido y esto es algo que no es natural.

El bucear es uno de los deportes más aprendidos por personas que pasan las vacaciones en sitios cálidos como Puerto Rico y la República Dominicana. Los hoteles de estos lugares ofrecen clases a los interesados. La Asociación Nacional de Instructores (NAUI) es una de las organizaciones que certifica buceadores para que sean instructores en todo el mundo. Un portavoz de la NAUI dice: “Usted debe estar seguro de que su instructor es competente”. Una persona que es nueva al deporte del buceo debe investigar si el instructor tiene las credenciales necesarias para enseñar. A través de la organización llamada (PADI) o Asociación Profesional de Instructores de Buceo, puede verificarse si el lugar y las personas que enseñan están certificadas para enseñar este deporte.

Es recomendable que usted conozca al instructor antes de comenzar las clases. Acuérdese que usted está de vacaciones y por esto es importante saber si la personalidad del instructor es compatible con la de usted. El tiempo invertido en esta actividad será más relajado y divertido si pasan el tiempo con personas que le gusten. Después de todo, por esto está Ud. de vacaciones, para divertirse.

Los programas introductorios de buceo toman sólo un día. Por lo general, comienzan con clases en las orillas de la playa, luego se da instrucción en una piscina o en aguas más profundas, después se bucea en mar abierto bajo la supervisión del instructor. Al final de este día los estudiantes no recibirán un certificado o diploma como evidencia de haber completado el programa. Se considera que un día de instrucción no es un programa completo. Los estudiantes pueden bucear en los días que les quedan de vacaciones con la supervisión de buceadores certificados.

Hay ventajas en estos programas de instrucción que duran sólo un día. Muchas personas no tienen el tiempo para pasar por el proceso de certificación, y con este programa de un día, no tienen que hacer una inversión grande de dinero y tiempo. Si descubre que quiere aprender el deporte a fondo en el futuro, matricúlese en un programa completo y obtenga un certificado. Si descubre que el buceo no es para usted habrá perdido poco y se habrá divertido.

La idea de bucear en mares tropicales como el Caribe es muy agradable. El poder ver los animales marinos de cerca y la belleza de la vegetación marina es muy atractiva, pero si decide que este deporte no ofrece mucha seguridad, existen muchas otras posibilidades, como el aprender a manejar jet-esquiés acuáticos, practicar el surfing o simplemente aprender a nadar.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 17, 2005"
  },
  carnaval: {
    imgs: [
      { src: "img/q21-carnaval-caribe.png",
        cap: "Carnaval del Caribe advertisement — reading selection for question 21, Comprehensive Examination in Spanish, June 2005",
        alt: "Black-background advertisement in Spanish: Santiago de Cuba, July 24 to 28 — Come dance the conga at the Carnaval del Caribe. At the Santiago carnival, music can do anything: congas form spontaneously with lines of people who cannot resist the rhythm of the drums, and the comparsas, who have rehearsed all year, show off their beautiful costumes to the sound of the best orchestras of Cuba. Fly direct to Santiago de Cuba and take part in the fair. Direct flights from Madrid and Vitoria to Santiago de Cuba with Cubana de Aviación, and to Havana from Madrid, Barcelona, Santiago de Compostela, and Las Palmas; with Iberia to Havana; with Oasis and Spain Air to Varadero. Cubanacan hotels-restaurants-tours logo; for more information consult your travel agency. Drawing of a dancer in a straw hat carrying a decorated festival staff." }
    ]
  },
  perro: {
    imgs: [
      { src: "img/q22-perro-extraviado.png",
        cap: "Lost-dog notice — reading selection for question 22, Comprehensive Examination in Spanish, June 2005",
        alt: "Boxed classified notice in Spanish with large headline SE EXTRAVIO UN PERRO (a dog is lost): black Chow-Chow wearing a red leash, answers to the name Scooby. A reward of 40,000 bolivares is offered to whoever returns him. Call the following telephone numbers: (014) 38.53.54, (014) 38.53.52, 235.80.95, 235.10.73." }
    ]
  },
  moda: {
    imgs: [
      { src: "img/q23-moda-masculina.png",
        cap: "Men's fashion article — reading selection for question 23, Comprehensive Examination in Spanish, June 2005",
        alt: "Boxed magazine paragraph in Spanish saying that men's fashion has lately advanced by giant steps; the idea of the man dressed in dark suits in sober colors has been left behind, and today the man, just like the woman, can look well dressed in suits and coordinated outfits in cheerful combinations." }
    ]
  },
  tarjeta: {
    imgs: [
      { src: "img/q24-tarjeta-club.png",
        cap: "Club Christmas-card contest column — reading selection for question 24, Comprehensive Examination in Spanish, June 2005",
        alt: "Magazine column in Spanish headed UNA TARJETA PARA EL CLUB: only twenty days remain to send in drawings for the contest Pinta la Tarjeta de Navidad del Club, open to all members' children and grandchildren between 7 and 14 years old. Theme and style are free; drawings must be on sketch-pad paper of any size, with the personal-data coupon from this column attached; more than one drawing may be sent. Entries are accepted until July 31, by envelope to Santa María 5542 or in the boxes at the Santa María offices and at Bandera 331. There are prizes for the three best entries — the third wins a personal stereo, the second a bicycle, and the first a mini stereo system — and the winning drawing will illustrate the Christmas card with which the club greets all its members this year." }
    ]
  },
  modelo: {
    imgs: [
      { src: "img/q25-supermodelo-jcpenney.png",
        cap: "Super-model 2005 contest advertisement — reading selection for question 25, Comprehensive Examination in Spanish, June 2005",
        alt: "Boxed advertisement in Spanish: national winners receive scholarships, trips, fashion shows, a JCPenney wardrobe, and more. If you are a girl or boy between 16 and 22 years of age, of Hispanic descent, living in the continental United States, Puerto Rico, or León and Monterrey, Mexico, and are not a professional model, you are a candidate to be the super-model 2005. Applicants must complete the official application and include two photographs taken within the last six months, one of the face and one full body, between 3 by 5 and 8 by 10 inches, with name, address, and age noted on the back; non-professional photographs are accepted and photographs will not be returned. Registration begins May 3, 2005. Pick up the official application at participating JCPenney stores in listed cities across the United States, Puerto Rico, and Mexico." }
    ]
  },
  chile: {
    passage: `Chile

Chile está al suroeste de la América del Sur, con el océano Pacífico al oeste y los Andes y la Argentina al este. Su costa de 2,600 millas, que se extiende desde el Perú en el norte hasta el Estrecho de Magallanes al sur, ofrece una de las vistas más espectaculares de Sudamérica.

Las estaciones del año son contrarias a las del hemisferio norte. El verano dura desde diciembre a marzo mientras que el invierno dura de junio a septiembre. La temperatura en el verano está normalmente en los 90º Fahrenheit, mientras que en el invierno a veces baja a los 20º Fahrenheit.

La geografía natural de Chile atrae mucho turismo. Viña del Mar está en la costa del Pacífico, setenta millas al noreste de Santiago. El pueblo atrae a miles de turistas que van allí todos los años. Las bellas playas y jardines, así como los palacios, y la simpatía de sus habitantes atraen a turistas de todo el mundo. Viña del Mar tiene una gran plaza central con palmas; carruajes llevan a uno en un corto paseo alrededor de la plaza.

La Isla de Pascua es uno de los lugares más interesantes de Chile. Los chilenos tomaron posesión de la isla y la anexaron en 1888. Volcanes inactivos se encuentran en varios lugares en la Isla de Pascua y hay playas doradas. Sin embargo, las características más significativas de la Isla de Pascua son sus enormes estatuas de piedra. Algunas estatuas que fueron descubiertas por toda la isla son de cien pies de altura y pesan más de 70 toneladas. Hasta hace poco, los arqueólogos y antropólogos estaban confundidos sobre la función de estas estatuas. También dudaban cómo las estatuas llegaron allí. Recientemente los arqueólogos han desarrollado algunas teorías interesantes. Ellos ahora piensan que las estatuas eran dioses antiguos llamados “moai” y fueron transportadas a sus lugares sobre troncos de árboles que rodaban o que fueron tiradas por cuerdas sobre planchas de madera.

La Isla de Pascua está a 2,200 millas de la costa chilena en el Pacífico y es accesible solamente por avión. La población de la isla es una mezcla polinesia, sudamericana y europea. El famoso antropólogo Thor Heyerdahl creía que los habitantes originales eran de descendencia sudamericana porque él encontró en la isla costumbres muy similares a las del Perú. La teoría más reciente sugiere que los colonos originales eran polinesios del Pacífico Sur. Aparentemente, hubo un largo período de guerras durante los siglos XVI y XVII que destruyó a la población indígena y dejó el paso libre para la inmigración del continente sudamericano.

La región de Lagos de Chile, que se encuentra al sur del país, ha sido comparada a menudo con Suiza. Sus densos bosques de pino cubren las laderas de muchos volcanes inactivos. El pueblo de Villarica tiene seis pistas de esquí, la más larga de las cuales mide más de una milla. Muchos turistas visitan las aguas termales en el Parque Nacional Puyehue. Para la gente joven, el parque nacional a las afueras de Villarica ofrece bellas playas, así como campings y diversas sendas para caminantes.

Santiago de Chile, la capital, tiene más de cuatro millones de residentes, la tercera parte de la población del país entero. Un soldado mercenario español en el ejército del Rey Carlos III fundó Santiago del Nuevo Extremo en 1541. A este soldado lo siguió un ejército de aventureros españoles que defendió su colonia durante tres siglos contra los habitantes locales, las tribus Mapunch. Después de la exitosa rebelión contra España en 1818, los colonos tomaron armas contra los Mapuche y en 1881, por fin los subyugaron. El gobierno facilitó la inmigración europea a las tierras indígenas.

Santiago es una ciudad moderna con hoteles de primera calidad, museos, jardines públicos y bellas fuentes. El metro es un medio de transporte en esta ciudad. Es seguro y cómodo y la tarifa es aproximadamente treinta centavos.

El mercado central en Santiago fue diseñado y construido en Inglaterra y fue traído y reconstruido pieza por pieza en 1871. La zona comercial, por lo tanto, se parece más a un museo de Londres del siglo XIX que a un mercado de frutas y vegetales típico sudamericano. El mercado de pescado queda cerca y se pueden comprar pescados y mariscos exóticos que provienen de las aguas chilenas.

La Universidad de Santiago es probablemente una de las mejores del mundo y muchas de las turbulencias políticas de Chile empezaron allí. El Planetario de Santiago se encuentra en la Universidad y es una atracción principal del turismo.

Si Ud. decide visitar Chile, el viajar en un autobús lujoso es una experiencia inolvidable. Estos autobuses ofrecen meriendas, bebidas, películas, asientos reclinables, y otras diversiones. Para viajes de más distancia, es preferible ir en avión.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 17, 2005"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-nino-cuento.png",
        cap: "Picture for writing task 33 — Bunny Hoest & John Reiner, “Laugh Parade,” Parade (adapted), Comprehensive Examination in Spanish, June 2005",
        alt: "Line-drawing cartoon of a child sitting up in bed under the covers, smiling with delight, while a woman leans over the bedside tucking in the blanket and a man walks in through the open bedroom door carrying a book; a lamp and nightstand sit beside the bed." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does this advertisement suggest that you do?",
    choices: [
      "buy their music on compact disks",
      "buy their movies on video",
      "enter a contest to win a prize",
      "get the latest news about your favorite group"
    ],
    answer: 0,
    back: "(1) buy their music on compact disks — the Latin music club offers \"doce discos compactos por sólo un centavo\" with more than sixteen thousand selections to choose from."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What does this park offer?",
    choices: [
      "a new roller coaster",
      "infant care",
      "children’s parties",
      "overnight stays"
    ],
    answer: 2,
    back: "(3) children’s parties — \"Aquí también ofrecemos fiestas infantiles\" with invitations, candy bags, piñatas, and a snack; they even sing \"las mañanitas.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What did this study reveal?",
    choices: [
      "Internet access is widely available for guests in hotels in Spain.",
      "A small percentage of Spanish hotels use the Internet for reservations.",
      "Spanish hotels use the Internet solely as a means of advertising.",
      "The Internet in Spain has been overdeveloped and abused."
    ],
    answer: 1,
    back: "(2) A small percentage of Spanish hotels use the Internet for reservations — \"Sólo ocho por ciento de los hoteles españoles están preparados para recibir reservaciones a través del internet.\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. To whom is this announcement directed?",
    choices: [
      "young people interested in military service",
      "college students who have not completed their degrees",
      "women who want to get a job",
      "students who are absent from school"
    ],
    answer: 2,
    back: "(3) women who want to get a job — it addresses mothers who spent years at home raising children and are ready to enter the workforce; the radio program offers \"consejos para un regreso exitoso al trabajo.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is the caller’s problem?",
    choices: [
      "She needs someone to take care of the animals.",
      "Her children are sick again.",
      "Her children are with an aunt on vacation.",
      "She needs to find her dog."
    ],
    answer: 0,
    back: "(1) She needs someone to take care of the animals — \"Me gustaría que tú les dieras de comer al perro y al conejo... También necesitas sacar a pasear al perro,\" because she must leave to care for her sick aunt."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is an advantage of this product?",
    choices: [
      "It makes it easier for you to stay in touch with your loved ones.",
      "It comes with a CD to make it easier for you to use.",
      "You save eight cents every time you use it from a public telephone.",
      "You can earn frequent flyer miles every time you use it."
    ],
    answer: 0,
    back: "(1) It makes it easier for you to stay in touch with your loved ones — \"Cuando su familia está lejos, la distancia desaparece cuando usted tiene una tarjeta prepagada Sprint,\" calling cheaply from almost anywhere."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is this airline promoting?",
    choices: [
      "acquiring frequent flyer mileage",
      "cheaper rates for booking on-line",
      "making your travel plans in Spanish",
      "in-flight gourmet meals"
    ],
    answer: 2,
    back: "(3) making your travel plans in Spanish — \"¡Viaje a Latinoamérica en español!\": reservations, the automated flight-information line, and the airport ticket machines are all available in Spanish."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is the mother asking about?",
    choices: [
      "airline tickets",
      "taxi service",
      "arrival time",
      "passenger assistance"
    ],
    answer: 3,
    back: "(4) passenger assistance — her daughter does not speak English and \"necesita a una persona bilingüe que le acompañe en el aeropuerto\" to change planes at Kennedy."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What problem does Lucía have?",
    choices: [
      "She needs to change the time of an appointment.",
      "She needs a ride to the dentist after school.",
      "She needs help writing an essay for English class.",
      "She needs to borrow a book so she can write a report."
    ],
    answer: 3,
    back: "(4) She needs to borrow a book so she can write a report — \"Te llamo para que me prestes tu libro de arte... Tengo que escribir un ensayo sobre Botero para la clase de arte.\""
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Para qué son las instrucciones?",
    choices: [
      "sacar la basura",
      "preparar la cena",
      "lavar los platos",
      "limpiar la cocina"
    ],
    answer: 1,
    back: "(2) preparar la cena — son consejos para cocinar las pastas sin arruinarlas: la cazuela grande, el agua hirviendo y sacar la pasta al instante."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿De qué trata este anuncio?",
    choices: [
      "una fiesta virtual en el ciberespacio",
      "una biblioteca privada para latinos",
      "un sitio de Internet en español",
      "una nueva enciclopedia hispana"
    ],
    answer: 2,
    back: "(3) un sitio de Internet en español — \"En Terra.com sus deseos son órdenes porque éste es uno de los portales informativos más completos en español.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Por qué es diferente esta muñeca?",
    choices: [
      "Es una muñeca que canta.",
      "Es una Barbie morena y latina.",
      "Es una muñeca más grande que otras.",
      "Es una muñeca que baila."
    ],
    answer: 0,
    back: "(1) Es una muñeca que canta — \"La muñeca de Cristina Aguilera hace algo que Barbie no puede hacer: cantar\"; al presionar un botón canta sus éxitos."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Cuál fue la misión de este grupo de estudiantes de ingeniería?",
    choices: [
      "investigar el uso de computadoras en edificios nuevos",
      "viajar a los Estados Unidos para visitar la Casa Blanca",
      "construir centros comerciales más grandes",
      "diseñar y construir una casa solar"
    ],
    answer: 3,
    back: "(4) diseñar y construir una casa solar — el equipo trata de \"construir una casa en la que se utilice solamente la energía del sol\" para las necesidades de la vida diaria."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Para qué puede ayudarle este anuncio?",
    choices: [
      "para bajar de peso",
      "para escribir una novela",
      "para reducir la tensión",
      "para conocer a unos amigos"
    ],
    answer: 2,
    back: "(3) para reducir la tensión — \"Es facilísimo reducir el estrés en menos de veinte minutos con las ideas siguientes\": apuntar lo que causa estrés, hacer ejercicios de relajación y buscar ratitos de felicidad."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué tipo de empleado busca esta compañía?",
    choices: [
      "personas jóvenes solteras",
      "personas de culturas y experiencias diversas",
      "personas de habla española",
      "personas sin mucha experiencia"
    ],
    answer: 1,
    back: "(2) personas de culturas y experiencias diversas — \"buscamos empleados que reflejen la diversidad de la comunidad a la cual servimos,\" porque con puntos de vista diferentes se puede crecer y mejorar."
  },
  // ----- Part 3a: Reading passage, questions in Spanish (Q16-20) -----
  { ...STIMULI.buceo,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿A qué clase de personas le interesa este artículo?",
    choices: [
      "a jóvenes que practican la pesca como deporte",
      "a las personas que quieren aprender navegar en barco de vela",
      "a jóvenes interesados en graduarse de una escuela superior",
      "a personas interesadas en nuevos tipos de diversión"
    ],
    answer: 3,
    back: "(4) a personas interesadas en nuevos tipos de diversión — el artículo se dirige a vacacionistas que buscan \"actividades recreativas que tienen cierta cantidad de riesgo,\" como el buceo."
  },
  { ...STIMULI.buceo,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué debe usted saber de las personas que enseñan el buceo?",
    choices: [
      "si están certificadas para enseñar el deporte",
      "si han tenido muchos accidentes en el agua",
      "si han ganado premios de bucear",
      "si les gusta mucho el paracaidismo"
    ],
    answer: 0,
    back: "(1) si están certificadas para enseñar el deporte — a través de PADI \"puede verificarse si el lugar y las personas que enseñan están certificadas para enseñar este deporte.\""
  },
  { ...STIMULI.buceo,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Por qué necesita Ud. conocer al instructor de buceo antes de empezar las clases?",
    choices: [
      "para saber si habla inglés",
      "para saber si te gusta su personalidad",
      "para que te informe de playas bonitas",
      "para que te hable de las leyes nacionales"
    ],
    answer: 1,
    back: "(2) para saber si te gusta su personalidad — \"es importante saber si la personalidad del instructor es compatible con la de usted\"; el tiempo será más relajado y divertido con personas que le gusten."
  },
  { ...STIMULI.buceo,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Cuánto tiempo dura un programa de buceo corto?",
    choices: [
      "una semana completa",
      "de tres a cuatro días",
      "un día completo",
      "solamente dos horas"
    ],
    answer: 2,
    back: "(3) un día completo — \"Los programas introductorios de buceo toman sólo un día,\" desde las clases en la playa hasta bucear en mar abierto bajo supervisión."
  },
  { ...STIMULI.buceo,
    type: "mc",
    label: "Q20",
    stem: "Q20. Según este artículo, ¿qué puede Ud. hacer si no le gusta bucear?",
    choices: [
      "ir de vacaciones a las montañas",
      "aprender deportes de clima frío",
      "ver películas de la belleza de mares tropicales",
      "practicar otra clase de deporte acuático"
    ],
    answer: 3,
    back: "(4) practicar otra clase de deporte acuático — \"existen muchas otras posibilidades, como el aprender a manejar jet-esquiés acuáticos, practicar el surfing o simplemente aprender a nadar.\""
  },
  // ----- Part 3b: Realia, questions in English (Q21-25) -----
  { ...STIMULI.carnaval,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is this advertisement about?",
    choices: [
      "the dresses worn in Santiago",
      "a film about Cuba",
      "a Caribbean cultural celebration",
      "a chance to play in an orchestra"
    ],
    answer: 2,
    back: "(3) a Caribbean cultural celebration — the ad invites you to dance the conga at the Carnaval del Caribe in Santiago de Cuba, July 24–28, with congas, comparsas, and Cuba's best orchestras."
  },
  { ...STIMULI.perro,
    type: "mc",
    label: "Q22",
    stem: "Q22. Who would call one of the numbers listed in this advertisement?",
    choices: [
      "someone who wants to sell a dog",
      "someone who has found a stray dog",
      "someone who takes dogs for walks",
      "someone who needs to have a dog groomed"
    ],
    answer: 1,
    back: "(2) someone who has found a stray dog — a black Chow-Chow named Scooby is lost (\"SE EXTRAVIO UN PERRO\") and a 40,000-bolívar reward is offered \"a quien lo devuelva.\""
  },
  { ...STIMULI.moda,
    type: "mc",
    label: "Q23",
    stem: "Q23. Which statement is best supported by this article?",
    choices: [
      "Men’s fashions have undergone major changes.",
      "Men are relatively unconcerned with the latest fashions.",
      "Women’s fashions have become more conservative.",
      "More women are now designing men’s clothing."
    ],
    answer: 0,
    back: "(1) Men’s fashions have undergone major changes — \"la moda masculina ha avanzado a pasos agigantados\" and the idea of the man in dark, sober suits \"ha quedado atrás.\""
  },
  { ...STIMULI.tarjeta,
    type: "mc",
    label: "Q24",
    stem: "Q24. What does this article encourage children to do?",
    choices: [
      "sell magazines",
      "enter a contest",
      "make a recording",
      "write a short story"
    ],
    answer: 1,
    back: "(2) enter a contest — members' children and grandchildren ages 7 to 14 are invited to send drawings to the contest \"Pinta la Tarjeta de Navidad del Club\" before July 31."
  },
  { ...STIMULI.modelo,
    type: "mc",
    label: "Q25",
    stem: "Q25. A young person would enter this contest for a chance to become",
    choices: [
      "a fashion designer",
      "a photographer",
      "a model",
      "a correspondent"
    ],
    answer: 2,
    back: "(3) a model — non-professional applicants of Hispanic descent, ages 16 to 22, are candidates \"para ser el super-modelo 2005,\" with scholarships, trips, fashion shows, and a JCPenney wardrobe for national winners."
  },
  // ----- Part 3c: Second reading passage, questions in English (Q26-30) -----
  { ...STIMULI.chile,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which statement is best supported by the passage?",
    choices: [
      "The summer in Chile extends from June to December.",
      "The scenery in Chile is exceptional.",
      "Only the wealthy can enjoy themselves in Chile.",
      "Architecture is a popular profession in Chile."
    ],
    answer: 1,
    back: "(2) The scenery in Chile is exceptional — the coast \"ofrece una de las vistas más espectaculares de Sudamérica\" and \"La geografía natural de Chile atrae mucho turismo.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q27",
    stem: "Q27. Why is La Isla de Pascua famous?",
    choices: [
      "It has large stone statues.",
      "It was the birthplace of Thor Hyerdahl.",
      "It has many amusement parks.",
      "It has a tropical rain forest."
    ],
    answer: 0,
    back: "(1) It has large stone statues — \"las características más significativas de la Isla de Pascua son sus enormes estatuas de piedra,\" some one hundred feet tall and weighing more than 70 tons."
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q28",
    stem: "Q28. According to the most recent theory, where did the original inhabitants of La Isla de Pascua come from?",
    choices: [
      "Peru",
      "Argentina",
      "the South Pacific",
      "Spain"
    ],
    answer: 2,
    back: "(3) the South Pacific — \"La teoría más reciente sugiere que los colonos originales eran polinesios del Pacífico Sur.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which building site located in Santiago was brought over from England?",
    choices: [
      "a water park",
      "a church",
      "a university",
      "a marketplace"
    ],
    answer: 3,
    back: "(4) a marketplace — \"El mercado central en Santiago fue diseñado y construido en Inglaterra y fue traído y reconstruido pieza por pieza en 1871.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "Q30",
    stem: "Q30. According to the passage, what is the best way to travel short distances throughout Chile?",
    choices: [
      "boat",
      "airplane",
      "bicycle",
      "bus"
    ],
    answer: 3,
    back: "(4) bus — traveling in a luxury bus with snacks, drinks, movies, and reclining seats \"es una experiencia inolvidable\"; the plane is preferable only \"para viajes de más distancia.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You are running for president of your Spanish club. Write a presentation to your Spanish club explaining why you will make a good president. You may wish to include:
• an introduction
• how long you have studied Spanish
• your language skills and abilities
• other qualities that will make you a good president
• what you plan to do as president
• why you want to do those things
• how you will carry out your plans

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Yo soy Andrés Cortés y quiero ser el presidente del Club de español. Necesito que voten por mí y les aseguro de que seré un presidente responsable y un buen trabajador. Llevo cinco años estudiando español. Me gustan este idioma y las costumbres latinas. Tengo experiencia en organizar actividades y en hablar en público. Si ustedes me seleccionan para presidente de este club, les prometo organizar actividades interesantes. Unas posibilidades son: un viaje a México, a España o a Puerto Rico; fiestas internacionales una vez al mes; ir a restaurantes de comida hispana. Ustedes necesitan un buen presidente, un presidente trabajador. ¡Este presidente soy yo! Así que voten por Andrés Cortés.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). It is the end of the school year. Write a journal entry for your Spanish class about the school year that is ending. You may wish to include:
• how you feel about the past school year
• your favorite subject and teacher
• extracurricular activities you participated in
• special school events that took place
• what you liked and disliked
• how well you did

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

¡Qué emocionante! Ya estamos en junio y pronto vamos a tener las vacaciones. Este año me gustó más la clase de español. Ahora entiendo mucho más cuando la profesora nos habla. También hicimos dos viajes interesantes con la clase y el Club de español. En marzo fuimos a la Ciudad Nueva York para visitar un museo y ver una obra de teatro en español.

Durante el año asistí a dos bailes, uno con el chico que ya es mi novio. Me encantó el cotillón en mayo cuando nos fuimos a un restaurante elegante y luego bailamos en un barco en el río. ¡Hasta hubo fuegos artificiales!

Mis cursos fueron difíciles pero estudié mucho y saqué buenas notas. Ahora me siento preparada para mi último año de secundaria. ¡No lo puedo creer! Dentro de un año me voy a graduar.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Anita es la hija única de los señores Garzona. Es muy mimada. Es la hora de acostarse pero Anita no tiene sueño. Su madre le dice que tiene que dormirse porque hay que despertarse muy temprano en la mañana siguiente. Van a salir en una excursión especial. Anita le dice a su mamá que quiere ver los leones y los elefantes en el zoológico. Se siente muy emocionada, y dice que no va a dormirse hasta que su padre le lea un cuento, el cuento especial que tiene dibujos de los leones y elefantes. El padre buscó el libro por todas partes, y al fin lo encontró. Espera que al leerle el cuento Anita se quede tranquila y que se duerma.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  // ----- Supplemental cards (new questions over the same stimuli) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. According to the advertisement, what must you do after getting twelve compact disks for one cent?",
    choices: [
      "pay a monthly membership fee",
      "buy six more compact disks at the regular club price within two years",
      "attend a concert sponsored by the club",
      "convince two friends to join the club"
    ],
    answer: 1,
    back: "(2) buy six more compact disks at the regular club price within two years — \"Sólo tendrán que comprar seis discos compactos al precio regular del club en los próximos dos años. Eso es todo.\""
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S2",
    stem: "S2. What does the announcement say about the size of Bioparque Estrella?",
    choices: [
      "It is the largest park in all of Mexico.",
      "It is the oldest park in the country.",
      "It is the smallest ecological park in the region.",
      "It is spread over three islands."
    ],
    answer: 0,
    back: "(1) It is the largest park in all of Mexico — \"Es el parque más grande de todo México,\" an ecological park dedicated to the care and preservation of nature."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S3",
    stem: "S3. According to the advertisement, what can travelers do before going to the airport?",
    choices: [
      "reserve a rental car at a discount",
      "order a special meal for the flight",
      "check flight departures and arrivals by calling an automated system in Spanish",
      "print their boarding passes at home"
    ],
    answer: 2,
    back: "(3) check flight departures and arrivals by calling an automated system in Spanish — \"Verifique la salida y la llegada de vuelos antes de llegar al aeropuerto, llamando al sistema automatizado de información en español.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S4",
    stem: "S4. Why did Lucía leave school early today?",
    choices: [
      "She felt sick during class.",
      "She had a dentist appointment.",
      "She had to catch a flight to Venezuela.",
      "She was meeting her art teacher."
    ],
    answer: 1,
    back: "(2) She had a dentist appointment — \"Tuve que salir temprano de la escuela hoy para una cita con el dentista y se me olvidó traer mi libro a casa.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Cuánto cuesta la muñeca de Cristina Aguilera?",
    choices: [
      "quince dólares",
      "veinticinco dólares",
      "cincuenta y cuatro dólares",
      "cuarenta y cinco dólares"
    ],
    answer: 3,
    back: "(4) cuarenta y cinco dólares — \"La muñeca cuesta cuarenta y cinco dólares y está disponible en tiendas alrededor del país.\""
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "S6",
    stem: "S6. Según las instrucciones, ¿qué pasará si la pasta no se saca del agua al instante?",
    choices: [
      "Se ablandará y perderá su textura.",
      "Se pegará a la cazuela.",
      "Perderá todo su sabor.",
      "Se pondrá demasiado dura."
    ],
    answer: 0,
    back: "(1) Se ablandará y perderá su textura — \"Cuando la pasta esté preparada, saque la pasta del agua al instante o si no, la pasta se ablandará y perderá su textura.\""
  },
  { ...STIMULI.buceo,
    type: "mc",
    label: "S7",
    stem: "S7. Según el artículo, ¿qué reciben los estudiantes al final del programa introductorio de un día?",
    choices: [
      "un descuento en el hotel",
      "un diploma oficial de la NAUI",
      "ningún certificado o diploma",
      "un tanque de aire comprimido gratis"
    ],
    answer: 2,
    back: "(3) ningún certificado o diploma — \"Al final de este día los estudiantes no recibirán un certificado o diploma como evidencia de haber completado el programa\"; un día de instrucción no se considera un programa completo."
  },
  { ...STIMULI.carnaval,
    type: "mc",
    label: "S8",
    stem: "S8. According to the advertisement, when does the Carnaval del Caribe take place in Santiago de Cuba?",
    choices: [
      "from May 3 to May 10",
      "during the last week of December",
      "from June 1 to June 5",
      "from July 24 to July 28"
    ],
    answer: 3,
    back: "(4) from July 24 to July 28 — the headline reads \"Santiago de Cuba del 24 al 28 de Julio,\" inviting visitors to fly direct to Santiago de Cuba and take part in the fair."
  },
  { ...STIMULI.perro,
    type: "mc",
    label: "S9",
    stem: "S9. What is offered to the person who returns the lost dog?",
    choices: [
      "a free puppy",
      "a reward of 40,000 bolívares",
      "a new red leash",
      "a year of free dog food"
    ],
    answer: 1,
    back: "(2) a reward of 40,000 bolívares — the notice says \"SE OFRECEN 40.000 BOLIVARES DE RECOMPENSA A QUIEN LO DEVUELVA.\""
  },
  { ...STIMULI.chile,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, how can visitors get to La Isla de Pascua?",
    choices: [
      "by ferry from Viña del Mar",
      "by luxury bus",
      "only by airplane",
      "by cruise ship from Peru"
    ],
    answer: 2,
    back: "(3) only by airplane — \"La Isla de Pascua está a 2,200 millas de la costa chilena en el Pacífico y es accesible solamente por avión.\""
  }
];
