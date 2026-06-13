// June 2007 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2007/.
// Spelling quirks ("activitades", "Quetzalcoátl", "Sodi se obtuvo el papel",
// "ella se le asocia", "unos de los mejores porcentajes", "el primero en
// México a asociarse", "17,000 audiciones", "le dice a que ella está de
// acuerdo") are verbatim from the printed exam, TDC, and key.

const TDC_SRC = "Teacher Dictation Copy, June 2007 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You hear this message from your friend on your answering machine:

[La maestra lee] ¡Oye! ¿Tienes planes para esta tarde? Necesito tu ayuda. Recibí una invitación a una cena importante el sábado y no tengo un vestido bastante elegante para esta ocasión. ¿Puedes ir de compras conmigo para buscar algo apropiado que pueda llevar? Podemos reunirnos a las dos en el centro comercial. ¡Llámame cuando llegues!`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You hear this advice on a Spanish-language radio program:

[La maestra lee] Para hacer que sus hijos se tomen las medicinas, pruebe estos consejos. Elimine el mal sabor de los medicamentos con bebidas o alimentos de sabor agradable, como pastillas de menta; tómese sus vitaminas o medicamentos al mismo tiempo que el niño, para que su niño siga su ejemplo. Si su hijo no puede o no quiere tomar píldoras, pregúntele en su farmacia si existe el medicamento en forma líquida.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are watching a program on the Univision network and you hear:

[La maestra lee] Ahora vamos a ver unos bellos paisajes de la riviera maya, Xcaret. Xcaret es una experiencia para todos los sentidos. Este parque tiene un nombre que viene del idioma maya antiguo. En la época de los mayas fue un centro ceremonial y también uno de los puertos más importantes de esta civilización. Hoy le invita a descubrir las maravillas de la naturaleza. Hay excursiones programadas que salen desde su hotel o Ud. puede alquilar un automóvil. De cualquier forma, ¡todos los caminos conducen a Xcaret!`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are listening to a science discussion on the radio. You hear:

[La maestra lee] Los niños que desayunan bien tienen más éxito en la escuela. Tienen mejor habilidad para el lenguaje, mayor capacidad para resolver problemas, mayor habilidad para recordar y utilizar la información recién adquirida. Desayunar habitualmente puede ayudar a mejorar la memoria y la creatividad. Además, el desayuno ayuda a restablecer los niveles de azúcar en la sangre, los cuales están bajos por la mañana. El organismo necesita suficiente azúcar para sentirse bien físicamente; sin el azúcar, probablemente se sentirá cansado.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are vacationing in San Juan, Puerto Rico, and hear this advertisement:

[La maestra lee] La Reserva Natural Las Cabezas de San Juan es una de las áreas naturales protegidas de mayor importancia en Puerto Rico. En esta área, compuesta por distintos tipos de ecosistemas costeros, se encuentra el restaurado Faro de Fajardo del siglo 19. Desde el Centro de Visitantes el público puede caminar por el bosque hasta el faro y la playa. Los visitantes tienen la oportunidad de aprender sobre la vegetación, las aves y la conservación de la naturaleza.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to the radio and hear this advertisement:

[La maestra lee] El sol brilla. Tus piernas se cansan y empiezas a sentirte un poco débil. Estás respirando fuerte. Un kilómetro más y luego tienes que volver al trabajo. ¿Cómo vas a trabajar 4 horas más? Amigo, no te rindas. Revive tu energía con la nueva Tesalia Sport. Tesalia Sport se absorbe rápidamente, mucho más rápido que cualquier otro líquido, y te devuelve la energía que necesitas para seguir adelante. Esta bebida es pura y deliciosa. Además, con su práctica botella con tapa hermética, va contigo a todas partes. Elige tu sabor: naranja, limón verde o fruta mixta.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are listening to tourist information at an airport kiosk. The taped message says:

[La maestra lee] Estar de vacaciones no quiere decir que Ud. tiene que estar aislado del resto del mundo. Aquí Ud. puede alquilar un teléfono móvil. La compañía Triptel ofrece teléfonos celulares que Ud. puede alquilar por días o por semanas. Úselo durante todas sus vacaciones y devuélvalo personalmente o por correo. A los viajeros europeos que utilicen una tecnología diferente, Triptel les ofrece también otro tipo de teléfono que acepta tarjetas de otros países. Conéctese al mundo con Triptel.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] Your Spanish friend is telling you about what he read on a new web page. He says:

[La maestra lee] Ruralka es una cadena de pequeños hoteles rurales situados en lugares de gran interés histórico-artístico que puedes encontrar en prácticamente cualquier región española. También ofrecen muchas activitades deportivas. Para hacer las reservas, busca en la lista que tienes en tu página web: www.ruralka.com.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You return home and hear this telephone message on your answering machine:

[La maestra lee] Estimado cliente, lamentamos tener que informarle que Ud. no continuará recibiendo nuestra revista. Si Ud. quiere leer las noticias sobre sus estrellas latinas favoritas, artículos de salud, moda, belleza, y mucho más, renueve su suscripción hoy a una tarifa reducida. ¿Por qué perderse esta gran oportunidad de ahorrar? Llámenos hoy al 888-1234 y seguirá recibiendo los fascinantes ejemplares de la revista Hola. Gracias por su atención.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] Your host mother asks you to run an errand for her. She says:

[La maestra lee] Necesito unos vegetales para preparar una ensalada esta noche. No tengo zanahorias, lechuga ni cebollas. Voy a preparar una paella valenciana, pero quiero una ensalada también. ¿Puedes ir a la tienda? El dinero está en mi cartera.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] While watching the evening news in Spain, you hear:

[La maestra lee] La quinta edición del Concurso Internacional de Canto Luis Mariano reunirá la próxima semana en Irún a 26 jóvenes llegados desde diversos puntos de la península. Los participantes interpretarán sus canciones ante un prestigioso jurado que estará presidido por famosos músicos conocidos a nivel internacional. Esta competencia que nació en el año 1995 ya forma parte de la Federación Mundial de Concursos Internacionales de Música.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are visiting Madrid and ask for tourist information. This is what you are told:

[La maestra lee] Un lugar fascinante aquí en Madrid es el Rastro. Allí Ud. puede encontrar todo lo que quiere por un precio fabuloso. Tiene artesanías, juguetes, animales, ropa, arte, etc. Es un mercado como los que encontramos en México. Tiene lugar los domingos por la mañana. Es una experiencia inolvidable para todas las edades. Es un sitio fenomenal donde puede disfrutar del sol, el aire y las buenas temperaturas de la capital madrileña.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are at a stadium watching a game and you hear this announcement:

[La maestra lee] Estimado público, sentimos informarle que el partido de béisbol de hoy miércoles será cancelado. Tendremos fuertes aguaceros y relámpagos debido a una tormenta que viene en nuestra dirección en las próximas horas. Todos Uds. recibirán entradas gratis para el juego de este fin de semana en el que podrán disfrutar de un juego emocionante entre los dos mejores equipos de la liga.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are watching television and hear this advertisement:

[La maestra lee] La primera clase es una clase aparte. Para aquellos pasajeros que deseen más comodidad, más espacio y privilegios especiales, Aeroméxico presenta un nuevo servicio en todos sus vuelos nacionales e internacionales. Además para aquellos que no quieran esperar... Aeroméxico cuenta con unos de los mejores porcentajes de puntualidad del mundo. Los aviones llegan a tiempo en el 87% de sus vuelos, en los dos últimos años. Aeroméxico. La línea aérea para aquellos que no quieran esperar, y que quieran llegar a tiempo.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio and hear this announcement:

[La maestra lee] Lincoln Center tiene una reputación excelente por su apoyo al mundo musical. Desde 1987 se han producido más de 300 conciertos en la ciudad de Nueva York, se han organizado 25 giras y los músicos han visitado 250 ciudades en 30 países de los cinco continentes. En los espectáculos de Lincoln Center han participado varios músicos latinos como Celia Cruz y Diego Urcola. Wynton Marsalis, un director en Lincoln Center, anunció que en el programa anual de conciertos van a integrar más música latina, incluyendo la obra del baterista puertorriqueño Tito Puente. Una de las tareas más importantes de Lincoln Center es la educación, y por eso producen programas de radio y de televisión sobre la música.`,
    psource: TDC_SRC
  },
  chocolate: {
    passage: `Chocolate, un buen amigo

El chocolate nutritivo
Las madres tienen ciertos alimentos como aliados naturales de la buena dieta de sus hijos. Entre ellos está el chocolate, excelente compañero en el desayuno o merienda, incluso como bebida refrescante en época de calor. Cuando se prepara con leche el beneficio al organismo es doble, pero hay que tomarlo con moderación, porque demasiado chocolate es malo.

Hay gran cantidad de chocolates en el mercado. Los hay en barras o en polvo. De estos últimos, uno de los más famosos es el Choko Milk, que ha dado su nombre a los licuados o batidos de este sabor. Esta marca es una de las más viejas y conocidas en México, y a la vez es una de las más innovadoras, pues sus fabricantes dicen que, por ejemplo, fue el primer alimento en polvo con sabor a chocolate que elevó el contenido de su fórmula de 10 a 17 vitaminas y minerales. La empresa que produce Choko Milk está orgullosa de su constante evaluación de las necesidades de los consumidores para ofrecer innovaciones en su producto.

La marca Choko Milk es pionera en la labor altruista en México. Este negocio fue el primero en México a asociarse con UNICEF para ayudar a alimentar a los niños del mundo. En el 2000, Choko Milk lanzó una nueva imagen de Pancho Pantera, el animal que aparece en las etiquetas y que siempre es asociado con el producto. De esta manera se daba a conocer al público la nueva fórmula con 20 vitaminas y minerales desde la A hasta el Zinc, un balance inteligente entre nutrición, sabor y diversión.

Como parte de la innovación de la marca en el mercado mexicano, aparecieron ediciones limitadas de Choko Milk con sabor a canela y nuez. Inventaron el paquete individual de Choko Milk para facilitar el consumo y la distribución de su producto. Referente a su presentación, Choko Milk fue la primera marca que empezó a usar el ya mencionado icono Pancho Pantera para promover la buena nutrición y fortaleza de la marca. También lanzaron una campaña en televisión para lograr esto.

De uso médico para los mayas
El chocolate se usaba con fines médicos en el siglo IV, cuando los mayas empezaron a cultivar el árbol de cacao. Los curanderos prescribían su consumo como estimulante. Los guerreros lo consumían antes de luchar en una guerra porque era una bebida reconfortante, y su manteca era usada como medicina para curar heridas.

El chocolate en la época azteca
Según la leyenda azteca, el chocolate (chocolatl) fue descubierto por el rey azteca Quetzalcoátl, hace unos 3 mil años. Su nombre tiene dos partes: “choco,” que significa, “cacao” y “atl,” que significa “agua.” En esa época, los aztecas usaban el cacao mezclado con otros ingredientes para curar enfermedades intestinales. Es interesante notar que los granos de cacao también sirvieron de monedas para los aztecas.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 15, 2007"
  },
  aviso: {
    imgs: [
      { src: "img/q21-aviso-mudanza.png",
        cap: "“¡AVISO!” moving checklist — reading selection for question 21, Comprehensive Examination in Spanish, June 2007",
        alt: "Bordered notice in Spanish titled ¡AVISO! with five bullet points: if you move far away, make the necessary arrangements such as flight, hotel, and rental-car reservations; notify everyone you correspond with of your new address and follow the instructions of the companies that send you mail; tell the gas, water, cable, and telephone services about your move; make arrangements to transfer or close your bank account; and keep your legal, medical, and insurance documents in a safe and accessible place." }
    ]
  },
  libros: {
    imgs: [
      { src: "img/q22-libros-en-circulacion.png",
        cap: "Article on a new book-sharing fad — reading selection for question 22, Comprehensive Examination in Spanish, June 2007",
        alt: "Bordered single-column article in Spanish: like almost all the latest fads, this one also arrives from the United States and is really original; it consists of buying a paperback book (so it is cheaper and easier to handle) and, once read, leaving it on a park bench, in a metro station, on a bus, etc., so another person can find it, read it, and put it back into circulation; a blank sheet is usually glued inside the book so readers can write their name, signature, a comment they want others to keep in mind, or any other identifying mark; hundreds of books already circulate around Spain, above all in big cities like Madrid or Barcelona, although there are still 'listillos' (sneaky ones) who find the books and keep them. Let's see if we learn!" }
    ]
  },
  curso: {
    imgs: [
      { src: "img/q23-curso-internet-biblioteca.png",
        cap: "Biblioteca Regional Internet course announcement — reading selection for question 23, Comprehensive Examination in Spanish, June 2007",
        alt: "Bordered announcement in Spanish: the Regional Library is organizing a practical Internet course aimed at users of all ages, so they learn to search for information about Castilla-La Mancha; under the title 'Castilla-La Mancha en la red' participants will get to know interesting web sites on its culture, nature, gastronomy, and current events; the hour-and-a-half course will take place on October 6, in a morning or afternoon session as participants choose, in groups of no more than ten people to make personalized attention easier; the courses will initially run from 10:30 to 12:00 and from 14:00 to 15:30, and will continue on successive days if there is greater demand; those interested can register at the access desk of the Regional Library during regular opening hours, 9:00 to 21:00, and Saturdays until 14:00." }
    ]
  },
  casero: {
    imgs: [
      { src: "img/q24-casero-de-lobones.png",
        cap: "“El Casero de Lobones” advertisement — reading selection for question 24, Comprehensive Examination in Spanish, June 2007",
        alt: "Bordered advertisement in Spanish: do you want to have your next business meeting in the countryside? Be original and surprise your employees by gathering them in the open Segovian countryside; trade your boring meeting room for the fresh air and green fields of El Casero de Lobones, 9 kilometers from Segovia; in its halls you can hold presentations and conferences thanks to their ample dimensions and the most advanced technology; if they wish, attendees can end the day horseback riding, playing sports, and afterwards everyone can stay overnight." }
    ]
  },
  trovador: {
    imgs: [
      { src: "img/q25-trovador-xavier-ribalta.png",
        cap: "“El Trovador de un Pueblo” press item — reading selection for question 25, Comprehensive Examination in Spanish, June 2007",
        alt: "Boxed press item in Spanish headlined EL TROVADOR DE UN PUEBLO: Xavier Ribalta is one of the grandfathers of the new Catalan song, a singer-songwriter who, following a personal and independent path, found in music a forum from which he could champion man's most fundamental freedoms; the most significant Spanish and Catalan poetry of the dictatorship years found in his throat a loudspeaker from which it could express itself; Xavier Ribalta returns to the stage after a 12-year absence to present his new work, Antología de cantos íntimos, in a single concert." }
    ]
  },
  sodi: {
    passage: `Camila Sodi, ¿la nueva Thalía?

Con su pelo suelto, poco maquillaje y sus jeans, camiseta y zapatos tenis, Camila Sodi se pasea como cualquier hija de familia por el popular distrito comercial de Lincoln Road, en Miami Beach. Cuando ella camina por la calle no lleva ni gorras ni anteojos oscuros para esconderse de los siempre presentes fotógrafos o de sus admiradores buscando autógrafos. “Nadie me reconoce y soy feliz así”, dice una risueña Sodi.

Eso está a punto de cambiar. Aunque toda su vida ha sido reconocida por ser la sobrina de la cantante Thalía, Camila Sodi la talentosa actriz mexicana de 18 años ahora busca brillar con propia luz. Sodi se ha mudado a Miami para grabar su primer papel como protagonista en Inocente de ti (cadena Televisa). “Desde chiquita traigo este gran deseo por la actuación”, admite. Su galán en la serie, el actor Valentino Lanús está de acuerdo. “Trae en la sangre todo ese talento. Esta es su primera telenovela, pero lo está haciendo extraordinariamente bien”.

En sí, su papel en la telenovela es casi como una herencia familiar. Inocente de ti es una adaptación de María Mercedes, la novela que convirtió a Thalía en una estrella en los años noventa. Pero quien piense que Sodi se obtuvo el papel de protagonista simplemente por su parentesco se equivoca, afirma el productor de Inocente de ti Salvador Mejía. “Evidentemente ella se le asocia con su famosa tía” dice. “Pero esta niña tiene lo que se necesita para ser estrella. Ella es Camila Sodi y por eso nos estamos aventurando al darle esta oportunidad.”

Sodi niega los chismes de que le dieron esta oportunidad de actuar gracias a su familia. “La verdad es que desde cumplir los 10 años, estoy estudiando actuación. He hecho 17,000 audiciones. Tengo mucha experiencia. Acepto que no he hecho 16 películas y ocho novelas como mi tía. Pero por algo se empieza.”

En México, Sodi comenzó en el mundo del espectáculo hace unos cinco años como muchos otros actores mexicanos: modelando, estudiando en el Centro de Educación Artística de Televisa y presentando programas de televisión. “En mi clase ella fue una alumna muy sencilla y disciplinada”, recuerda Rosa María Gómez, profesora de actuación. “Me pareció siempre una mujer que sabía lo que quería. Era muy trabajadora”.

Sodi sigue en el camino de su madre, quien también dejó México para vivir y trabajar en Estados Unidos. Sodi afirma que su madre siempre apoya sus sueños al igual que los sueños de su hermana menor, Marina de 16 años. Cuando vemos a Sodi en persona, es difícil creer que ella sea la hermana mayor. Con su rostro de niña y su pequeña figura, Sodi parece tener sólo unos 13 años.

Hablando con mucha seriedad, Sodi asegura que no ha pensado en qué hará después de la telenovela. “Mientras estoy trabajando y voy de aquí a allá, no pienso en lo que viene después”, dice. Por el momento, se quedará a vivir en los Estados Unidos donde ya ha vivido por un año para estudiar inglés. Según ella, “Aquí soy feliz. Y aquí me quedo. Ese es el plan”.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 15, 2007"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-dennis-the-menace.png",
        cap: "Picture for writing task 33 — Hank Ketcham, “Dennis the Menace” (adapted), Comprehensive Examination in Spanish, June 2007",
        alt: "Black-and-white cartoon of a classroom: a small boy stands beside the teacher's desk, arms spread wide as he talks to the young woman teacher seated behind it with her arms folded; classmates seated at and around their desks all turn to watch him." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. Where does your friend want you to meet her?",
    choices: [
      "at school",
      "at a park",
      "at city hall",
      "at a shopping mall"
    ],
    answer: 3,
    back: "(4) at a shopping mall — \"Podemos reunirnos a las dos en el centro comercial\"; she needs help shopping for an elegant dress for an important dinner on Saturday."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What type of advice is being given?",
    choices: [
      "how to select children’s books",
      "how to get children to take medicine",
      "how to choose a doctor for children",
      "how to get children to go to bed"
    ],
    answer: 1,
    back: "(2) how to get children to take medicine — tips \"para hacer que sus hijos se tomen las medicinas\": mask the bad taste with pleasant foods like mints, take your own vitamins at the same time, and ask the pharmacy for a liquid form."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is this television program about?",
    choices: [
      "languages",
      "science",
      "art",
      "travel"
    ],
    answer: 3,
    back: "(4) travel — the segment shows the beautiful landscapes of Xcaret on the Riviera Maya, with scheduled excursions from your hotel or a rental car: \"¡todos los caminos conducen a Xcaret!\""
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is recommended to help children do better in school?",
    choices: [
      "less sugar in their diet",
      "a good breakfast",
      "a good night’s sleep",
      "less activity near bedtime"
    ],
    answer: 1,
    back: "(2) a good breakfast — \"Los niños que desayunan bien tienen más éxito en la escuela\"; breakfast restores morning blood-sugar levels and improves memory and creativity."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is the advertisement about?",
    choices: [
      "eating native foods",
      "raising funds for charity",
      "walking through a nature preserve",
      "shipbuilding in the 19th century"
    ],
    answer: 2,
    back: "(3) walking through a nature preserve — at the Las Cabezas de San Juan nature reserve, \"el público puede caminar por el bosque hasta el faro y la playa\" and learn about vegetation, birds, and conservation."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is being advertised?",
    choices: [
      "an exercise program",
      "sports equipment",
      "a sports drink",
      "sports sunscreen lotion"
    ],
    answer: 2,
    back: "(3) a sports drink — Tesalia Sport \"se absorbe rápidamente... y te devuelve la energía que necesitas\"; a pure, delicious drink in a practical bottle, in orange, lime, or mixed-fruit flavors."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What does this advertisement offer?",
    choices: [
      "car rentals",
      "maps and directions",
      "special fares to Europe",
      "cell-phone rentals"
    ],
    answer: 3,
    back: "(4) cell-phone rentals — \"Aquí Ud. puede alquilar un teléfono móvil\"; Triptel rents cell phones by the day or by the week so vacationers stay connected."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is this web page about?",
    choices: [
      "hotel accommodations",
      "television stations",
      "sports schedules",
      "city office buildings"
    ],
    answer: 0,
    back: "(1) hotel accommodations — Ruralka is \"una cadena de pequeños hoteles rurales\" in places of great historic-artistic interest, with reservations made through the list on its web page."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. Why did you receive this message?",
    choices: [
      "You won a contest.",
      "You were offered a job.",
      "Your subscription has expired.",
      "Your doctor’s appointment has been canceled."
    ],
    answer: 2,
    back: "(3) Your subscription has expired. — \"Ud. no continuará recibiendo nuestra revista... renueve su suscripción hoy a una tarifa reducida\" to keep getting the magazine Hola."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Adónde tienes que ir?",
    choices: [
      "a un restaurante",
      "a un supermercado",
      "a un banco",
      "a un museo"
    ],
    answer: 1,
    back: "(2) a un supermercado — la madre necesita zanahorias, lechuga y cebollas para la ensalada y pide: \"¿Puedes ir a la tienda? El dinero está en mi cartera.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Quiénes participarán en este evento?",
    choices: [
      "pintores",
      "deportistas",
      "escritores",
      "cantantes"
    ],
    answer: 3,
    back: "(4) cantantes — es el Concurso Internacional de Canto Luis Mariano: 26 jóvenes \"interpretarán sus canciones ante un prestigioso jurado.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué es el Rastro?",
    choices: [
      "un mercado al aire libre",
      "una montaña muy alta",
      "un nuevo deporte de invierno",
      "un teatro para muchos tipos de espectáculos"
    ],
    answer: 0,
    back: "(1) un mercado al aire libre — \"Es un mercado como los que encontramos en México,\" con artesanías, juguetes, animales, ropa y arte, los domingos por la mañana, disfrutando del sol y el aire de Madrid."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué anuncian en el estadio?",
    choices: [
      "que no habrá juego ese día",
      "que no ha podido llegar uno de los equipos",
      "que un jugador no va a participar",
      "que el público podrá conocer a los jugadores personalmente"
    ],
    answer: 0,
    back: "(1) que no habrá juego ese día — \"el partido de béisbol de hoy miércoles será cancelado\" por una tormenta con fuertes aguaceros y relámpagos."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué ofrece Aeroméxico a sus clientes?",
    choices: [
      "una nueva ruta más rápida",
      "los aviones más grandes de cualquier línea aérea",
      "un nuevo servicio con vuelos puntuales",
      "la posibilidad de poder cancelar a último momento"
    ],
    answer: 2,
    back: "(3) un nuevo servicio con vuelos puntuales — Aeroméxico presenta un nuevo servicio de primera clase en todos sus vuelos y \"cuenta con unos de los mejores porcentajes de puntualidad del mundo\": el 87% de sus vuelos llegan a tiempo."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. Según el artículo, ¿qué ofrecerá Lincoln Center al público este año?",
    choices: [
      "un festival del cine español",
      "unas obras de teatro hispano",
      "una competencia internacional de baile",
      "una oportunidad de escuchar más música latina"
    ],
    answer: 3,
    back: "(4) una oportunidad de escuchar más música latina — Wynton Marsalis anunció que en el programa anual de conciertos \"van a integrar más música latina,\" incluyendo la obra del baterista puertorriqueño Tito Puente."
  },
  // ----- Part 3a: Reading, long passage (Q16-20) -----
  { ...STIMULI.chocolate,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Qué dice el artículo sobre tomar el chocolate?",
    choices: [
      "que hace daño a los jóvenes",
      "que contribuye a la buena salud",
      "que da problemas con los músculos",
      "que contribuye a perder peso"
    ],
    answer: 1,
    back: "(2) que contribuye a la buena salud — el chocolate está entre los \"aliados naturales de la buena dieta\" y, preparado con leche, \"el beneficio al organismo es doble\" (aunque hay que tomarlo con moderación)."
  },
  { ...STIMULI.chocolate,
    type: "mc",
    label: "Q17",
    stem: "Q17. Según el artículo, ¿qué se sabe de Choko Milk?",
    choices: [
      "Tiene muchas vitaminas.",
      "Es demasiado caro.",
      "Se ha exportado a los Estados Unidos.",
      "Tiene sólo un sabor."
    ],
    answer: 0,
    back: "(1) Tiene muchas vitaminas. — fue el primer alimento en polvo con sabor a chocolate que elevó su fórmula de 10 a 17 vitaminas y minerales, y desde el 2000 tiene \"20 vitaminas y minerales desde la A hasta el Zinc.\""
  },
  { ...STIMULI.chocolate,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué dice el artículo sobre Pancho Pantera?",
    choices: [
      "Es el presidente de Choko Milk.",
      "Es un líder de los aztecas.",
      "Es un dibujo que identifica el producto Choko Milk.",
      "Es el descubridor de Choko Milk."
    ],
    answer: 2,
    back: "(3) Es un dibujo que identifica el producto Choko Milk. — Pancho Pantera es \"el animal que aparece en las etiquetas y que siempre es asociado con el producto.\""
  },
  { ...STIMULI.chocolate,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según el artículo, los mayas y los aztecas usaron el cacao como",
    choices: [
      "adorno",
      "medicina",
      "juguetes",
      "armas"
    ],
    answer: 1,
    back: "(2) medicina — la manteca del cacao \"era usada como medicina para curar heridas\" por los mayas, y los aztecas usaban el cacao mezclado \"para curar enfermedades intestinales.\""
  },
  { ...STIMULI.chocolate,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cuál es el origen de la palabra “chocolate”?",
    choices: [
      "una palabra azteca",
      "el nombre de un hombre de negocios",
      "un mineral exótico",
      "un lugar donde se lo descubrió"
    ],
    answer: 0,
    back: "(1) una palabra azteca — según la leyenda azteca, \"chocolatl\" une dos partes: \"choco,\" que significa \"cacao,\" y \"atl,\" que significa \"agua.\""
  },
  // ----- Part 3b: Reading, realia (Q21-25) -----
  { ...STIMULI.aviso,
    type: "mc",
    label: "Q21",
    stem: "Q21. For whom is this information most useful?",
    choices: [
      "people who are moving",
      "people who need automobile repairs",
      "people who telephone frequently",
      "people who like to e-mail"
    ],
    answer: 0,
    back: "(1) people who are moving — every tip is about a move (\"Si se muda lejos...\"): travel reservations, change-of-address notices, utility services, the bank account, and important documents."
  },
  { ...STIMULI.libros,
    type: "mc",
    label: "Q22",
    stem: "Q22. This article is about a way to",
    choices: [
      "find a new bank",
      "relax through exercise",
      "travel between two large Spanish cities",
      "share paperback books among readers"
    ],
    answer: 3,
    back: "(4) share paperback books among readers — buy a paperback and, once read, leave it on a park bench, in the metro, or on a bus \"de modo que otra persona pueda encontrarlo, leerlo y volver a ponerlo en circulación.\""
  },
  { ...STIMULI.curso,
    type: "mc",
    label: "Q23",
    stem: "Q23. What information is provided about this course?",
    choices: [
      "It begins in the summer.",
      "It is especially designed for children.",
      "It has morning and afternoon sessions.",
      "It is offered in several languages."
    ],
    answer: 2,
    back: "(3) It has morning and afternoon sessions. — the course runs on October 6 \"en jornada de mañana o tarde, a elegir por los interesados\" (initially 10:30–12:00 and 14:00–15:30)."
  },
  { ...STIMULI.casero,
    type: "mc",
    label: "Q24",
    stem: "Q24. What is this advertisement about?",
    choices: [
      "a theme park",
      "a movie theater",
      "a home that is for sale",
      "a place to have meetings"
    ],
    answer: 3,
    back: "(4) a place to have meetings — El Casero de Lobones invites you to hold your next business meeting in the Segovian countryside; its halls host presentations and conferences with the latest technology."
  },
  { ...STIMULI.trovador,
    type: "mc",
    label: "Q25",
    stem: "Q25. Why is Xavier Ribalta in the news?",
    choices: [
      "He has returned as a choreographer.",
      "He has received a special award.",
      "He published a popular novel.",
      "He returned to perform on stage."
    ],
    answer: 3,
    back: "(4) He returned to perform on stage. — \"Xavier Ribalta regresa al escenario después de 12 años de ausencia para presentar en un único concierto Antología de cantos íntimos, su nuevo trabajo.\""
  },
  // ----- Part 3c: Reading, second passage, questions in English (Q26-30) -----
  { ...STIMULI.sodi,
    type: "mc",
    label: "Q26",
    stem: "Q26. Why did Camila Sodi go to Miami?",
    choices: [
      "to become involved in politics",
      "to star in a television show",
      "to record her first album",
      "to take a vacation"
    ],
    answer: 1,
    back: "(2) to star in a television show — \"Sodi se ha mudado a Miami para grabar su primer papel como protagonista en Inocente de ti (cadena Televisa).\""
  },
  { ...STIMULI.sodi,
    type: "mc",
    label: "Q27",
    stem: "Q27. What does Camila mention as being a reason for her success?",
    choices: [
      "She studied for many years.",
      "She received help from her father.",
      "She had good luck throughout her life.",
      "She traveled extensively through Europe."
    ],
    answer: 0,
    back: "(1) She studied for many years. — \"desde cumplir los 10 años, estoy estudiando actuación. He hecho 17,000 audiciones. Tengo mucha experiencia.\""
  },
  { ...STIMULI.sodi,
    type: "mc",
    label: "Q28",
    stem: "Q28. How does the acting teacher describe Camila?",
    choices: [
      "shy",
      "popular",
      "talkative",
      "hardworking"
    ],
    answer: 3,
    back: "(4) hardworking — her acting teacher Rosa María Gómez remembers a simple, disciplined student who knew what she wanted: \"Era muy trabajadora.\""
  },
  { ...STIMULI.sodi,
    type: "mc",
    label: "Q29",
    stem: "Q29. Camila and her mother are alike in that they both",
    choices: [
      "had teaching careers",
      "published autobiographies",
      "left Mexico to work in the United States",
      "owned a dance studio"
    ],
    answer: 2,
    back: "(3) left Mexico to work in the United States — \"Sodi sigue en el camino de su madre, quien también dejó México para vivir y trabajar en Estados Unidos.\""
  },
  { ...STIMULI.sodi,
    type: "mc",
    label: "Q30",
    stem: "Q30. What does the passage say about Camila?",
    choices: [
      "She is an only child.",
      "She has a younger sister.",
      "She has older brothers.",
      "She is the youngest of her siblings."
    ],
    answer: 1,
    back: "(2) She has a younger sister. — her mother supports her dreams \"al igual que los sueños de su hermana menor, Marina de 16 años.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). The Spanish-language club in your school has decided to organize a surprise birthday party for one of the Spanish teachers. In Spanish, write a letter to the president of the language club suggesting some ideas for the party. You may wish to include:
• the name of the teacher
• why you think that this is a good idea
• the date and time of the party
• the location of the party
• who will be invited
• refreshments
• musical entertainment
• games

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido amigo:
Creo que es una idea fantástica tener una fiesta para el cumpleaños de la señora Gómez. Ella siempre ayuda a todos los estudiantes y ellos la admiran muchísimo. Podemos tener la fiesta de sorpresa el viernes, a las tres de la tarde. Yo sé que podemos decorar la cafetería del colegio después de la hora del almuerzo. Ya compré los globos y las decoraciones para las mesas. Mis padres van a traer la torta de cumpleaños, el helado y varias gaseosas. Tengo CDs de Gloria Estefan y Juanes, sus cantantes favoritos. Tal vez la señora nos pueda enseñar a bailar la cumbia durante la fiesta. A ella siempre le gusta compartir la cultura latina con nosotros y ¡ella baila tan bien! Para divertirnos aún más, podemos jugar sus juegos favoritos — Scrabble y Matamoscas. Son muy divertidos. No olvides de invitar a todos sus estudiantes y los otros profesores del colegio. Será una sorpresa maravillosa.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You are going to be an exchange student in Uruguay next year. In Spanish, write a letter to your host brother/sister introducing yourself. You may wish to include:
• information about you and your family
• information about your personal interests and hobbies
• what you would like to do and learn in Uruguay
• why you want to be an exchange student
• questions about the host family
• questions about the host school
• questions about what you should take with you to Uruguay

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response (note: the official sample letter talks about Spain even though the task names Uruguay — reproduced verbatim from the scoring key):

Querida amiga,
Hola. Me llamo Ann Smith. Mi familia y yo vivimos en el estado de Nueva York. Tengo un hermano menor y una hermana mayor. Mi mamá es profesor y mi papá es ingeniero. Todos nosotros esquiamos, vamos a acampar y leemos muchos libros.
Cuando llegue a España el año que viene, quisiera visitar el Prado en Madrid, el acueducto en Segovia y la Universidad de Salamanca. También quiero aprender más de la tierra de donde vinieron los conquistadores.
Me divierto mucho cuando viajo y, por eso, deseo vivir con una familia española. ¿Cómo es tu familia? ¿Me puedes decir cómo es tu escuela? ¿Necesito llevar algo especial para las clases? Yo sé que hace buen tiempo allí en el otoño, pero ¿voy a necesitar un abrigo y botas en diciembre?
Escríbeme pronto para que me informes de lo que necesito saber. Saludos a tu familia.
Ann

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

La escena tiene lugar en un salón de clase. Hay una maestra y unos estudiantes. Un chico habla con la profesora y le dice que la clase debe tener una fiesta para celebrar el Cinco de mayo. La profesora escucha y el chico continúa hablando.
El chico dice que todos los estudiantes de la clase van a ayudar con la preparación. Entonces el chico dice que él va a traer las bebidas y los otros muchachos traerán las papas fritas, los dulces y las salsas. El comenta que es necesario tener música mexicana porque es una celebración de México. Antes de la fiesta los estudiantes van a hacer una presentación de la batalla y así pueden recibir una nota y además divertirse y disfrutar de la celebración.
Finalmente la profesora le dice a que ella está de acuerdo y que va a traer la música mexicana. También va a ayudar con las decoraciones, pero con la condición de que todos ayuden a limpiar.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l03,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcer, what was Xcaret during the time of the Maya?",
    choices: [
      "a royal palace and observatory",
      "a ceremonial center and important port",
      "a marketplace for cacao traders",
      "a fortress that defended the coast"
    ],
    answer: 1,
    back: "(2) a ceremonial center and important port — \"En la época de los mayas fue un centro ceremonial y también uno de los puertos más importantes de esta civilización.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S2",
    stem: "S2. What restored 19th-century structure can visitors walk to at Las Cabezas de San Juan?",
    choices: [
      "a sugar mill",
      "a Spanish fort",
      "a lighthouse",
      "a stone bridge"
    ],
    answer: 2,
    back: "(3) a lighthouse — the reserve contains \"el restaurado Faro de Fajardo del siglo 19,\" and from the Visitors Center the public can walk through the forest to the lighthouse and the beach."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S3",
    stem: "S3. Which flavors of Tesalia Sport can you choose from?",
    choices: [
      "orange, lime, or mixed fruit",
      "strawberry, banana, or grape",
      "apple, mango, or cherry",
      "lemon, coconut, or melon"
    ],
    answer: 0,
    back: "(1) orange, lime, or mixed fruit — the ad ends: \"Elige tu sabor: naranja, limón verde o fruta mixta.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S4",
    stem: "S4. According to the message, how can you return the rented telephone at the end of your vacation?",
    choices: [
      "only at the airport kiosk",
      "in person or by mail",
      "through your hotel’s front desk",
      "at any Triptel store in Europe"
    ],
    answer: 1,
    back: "(2) in person or by mail — \"Úselo durante todas sus vacaciones y devuélvalo personalmente o por correo.\""
  },
  { ...STIMULI.aviso,
    type: "mc",
    label: "S5",
    stem: "S5. According to this notice, what should you do with your legal, medical, and insurance documents when you move?",
    choices: [
      "mail them to your new address ahead of time",
      "leave them with your bank",
      "keep them in a safe and accessible place",
      "give copies to the utility companies"
    ],
    answer: 2,
    back: "(3) keep them in a safe and accessible place — the last tip says \"Guarde sus documentos legales, médicos y de seguros en un lugar seguro y accesible.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S6",
    stem: "S6. Según el anuncio, ¿quiénes formarán parte del jurado del concurso?",
    choices: [
      "famosos músicos conocidos a nivel internacional",
      "los 26 jóvenes participantes",
      "profesores de las escuelas de Irún",
      "cantantes de la Federación Mundial"
    ],
    answer: 0,
    back: "(1) famosos músicos conocidos a nivel internacional — los participantes interpretarán sus canciones \"ante un prestigioso jurado que estará presidido por famosos músicos conocidos a nivel internacional.\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S7",
    stem: "S7. Según el anuncio, ¿qué recibirá el público por la cancelación del partido?",
    choices: [
      "un reembolso completo",
      "entradas gratis para el juego del fin de semana",
      "camisetas de los dos equipos",
      "comida y bebida gratis"
    ],
    answer: 1,
    back: "(2) entradas gratis para el juego del fin de semana — \"Todos Uds. recibirán entradas gratis para el juego de este fin de semana\" entre los dos mejores equipos de la liga."
  },
  { ...STIMULI.chocolate,
    type: "mc",
    label: "S8",
    stem: "S8. Según el artículo, además de bebida y medicina, ¿de qué sirvieron los granos de cacao para los aztecas?",
    choices: [
      "de monedas",
      "de adornos para los templos",
      "de regalos para los reyes",
      "de juguetes para los niños"
    ],
    answer: 0,
    back: "(1) de monedas — \"Es interesante notar que los granos de cacao también sirvieron de monedas para los aztecas.\""
  },
  { ...STIMULI.curso,
    type: "mc",
    label: "S9",
    stem: "S9. Why are the Internet course groups limited to no more than ten people?",
    choices: [
      "because the room has only ten computers",
      "to make personalized attention easier",
      "because few people registered",
      "to finish the course in one day"
    ],
    answer: 1,
    back: "(2) to make personalized attention easier — the course is run \"en grupos no superiores a diez personas con el fin de facilitar una atención personalizada.\""
  },
  { ...STIMULI.sodi,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, where does Camila Sodi plan to live for the time being?",
    choices: [
      "in Mexico City with her aunt Thalía",
      "in the United States",
      "in Spain with her sister",
      "wherever the next telenovela is filmed"
    ],
    answer: 1,
    back: "(2) in the United States — \"Por el momento, se quedará a vivir en los Estados Unidos donde ya ha vivido por un año para estudiar inglés... 'Aquí soy feliz. Y aquí me quedo. Ese es el plan.'\""
  }
];
