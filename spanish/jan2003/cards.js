// January 2003 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jan2003/.
// Spelling quirks ("vida familial", "intrumentos", "univeridad", "humor y
// alegria", "consejales", "está preparados", "plaza San Jonnos") are verbatim
// from the printed exam and Teacher Dictation Copy.

const TDC_SRC = "Teacher Dictation Copy, January 2003 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You hear this commentary on a local Spanish-language radio station:

[La maestra lee] ¿Saben lo que le gusta coleccionar a la actriz Maribel Guardia? Colecciona toda clase de ángeles. En su casa tiene una colección grande de ángeles. Si ve uno que le gusta, lo compra. Maribel no sólo adorna su casa con ellos, sino que también se los regala a sus amigos más queridos. La actriz recibe gran satisfacción regalando los ángeles.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are listening to the radio and hear this advertisement:

[La maestra lee] Escuelas, familias y compañías listadas en la revista Fortuna han descubierto lo interesante que es aprender acerca de otras culturas. Como es semejante al juego de Trivial Pursuit, el juego Diversidad les hace preguntas a los jugadores sobre más de 60 culturas. Las cartas están divididas en 10 categorías que incluyen costumbres, comida y religión. Para ganar el juego los jugadores tienen que ganar puntos y letras.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to the radio in Madrid, Spain. You hear this commercial message:

[La maestra lee] Llega algo nuevo a tu estilo de viajar. Lo último en billetes de avión es no poseer billete. El billete del futuro, que Iberia te ofrece hoy, tiene toda la seguridad y ventajas de un billete convencional. Nosotros de la aerolínea Iberia creemos que la nueva forma de volar debe ser la más rápida y la más cómoda posible. Desde hoy en adelante, compra tu billete ciber por teléfono, en cualquier agencia de viajes o a través del Internet. Luego puedes ir directamente al mostrador de facturación a recoger tu tarjeta de embarque. ¡Viaja con Iberia!`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] While watching television in Madrid, you hear this introduction:

[La maestra lee] Queremos presentarles una nueva voz que les va a dar mucho placer. El tenor hispano, José Cura, cantará varias óperas aquí en Madrid durante esta temporada. Es argentino, tiene 36 años y parece jugador de rugby. Lleva 25 años en el mundo de la música y ha hecho prácticamente todo. Dirige orquestas, domina el violín, la guitarra y la flauta. Para escuchar a este cantante hay que llamar a la billetería al número 301-26-16-54.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are listening to the radio in Santo Domingo and you hear this report:

[La maestra lee] Julia Alvarez aprendió la importancia de contar historias desde su temprana edad. Gracias a su tía, descubrió el mundo de los libros. De niña leía a escondidas. Desde entonces, no ha parado de escribir cuentos. Al ser nombrada “Latina del Año”, explicó su éxito literario diciendo: “Llegué a este punto con la gran ayuda y apoyo de muchas personas”.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] A guest on a Spanish talk show offers this advice:

[La maestra lee] Si últimamente te encuentras muy cansado, sin razón, es posible que lo que realmente te pase es que estás aburrido. El hacer la misma actividad siempre acaba por cansar a la persona más activa. Si crees que te encuentras en esta situación, ¡Cambia tu vida! No necesitas una cita con el médico, ni dormir más por la noche. ¡Cambia tu rutina! Es suficiente hacer pequeños cambios en tus actividades diarias. Por ejemplo, puedes volver a casa por un camino diferente, o cenar con un amigo que no has visto recientemente.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] While watching Spanish television you hear this report:

[La maestra lee] En febrero del año 2000 el presidente de los Estados Unidos entregó la Medalla de Honor del Congreso, la más alta distinción militar de los Estados Unidos, a Alfred Rascón. Rascón nació en México y emigró con su familia a California cuando era niño. Entró en el ejército a los 17 años, aunque no era ciudadano de los Estados Unidos. Durante un combate muy peligroso les salvó la vida a tres soldados norteamericanos. Años después, sus compañeros del ejército le pidieron al Congreso no olvidar su gran heroísmo y reconocer finalmente a Alfred Rascón con la Medalla de Honor.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are in a school in Lima, Peru, and hear this announcement over the loudspeaker:

[La maestra lee] Felicitaciones a los estudiantes que han salido bien en los exámenes y que han obtenido reconocimientos por sus logros escolares. Queremos felicitar también a los profesores que han ayudado tanto a los estudiantes. Para los estudiantes que tienen dificultades en el colegio, queremos ofrecerles la oportunidad de mejorar sus notas. El mes próximo ofreceremos varios cursos que se pueden tomar antes de volver a sufrir los exámenes.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are visiting Colombia and you hear this announcement on the radio:

[La maestra lee] ¿Tiene tos? ¿Estornuda día y noche? ¿Le duele la garganta? ¿No puede dormir? Si tiene estos síntomas aquí tiene Ud. la solución para todos sus malestares. La medicina que le ayudará a sentirse mejor día y noche ya está aquí. Se llama Sedra. Hable con su farmacéutico predilecto y pídasela. Así no sufrirá más.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are on a flight from Buenos Aires to New York. You hear the flight attendant say:

[La maestra lee] ¿Le gustaría probar nuestra carne asada o preferiría filete de pescado? Les aseguro que cualquiera de los dos platos está preparados cuidadosamente, y sabe muy bien al paladar. El postre se compone de un riquísimo flan y una taza de café o té.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] While watching television you hear this announcement:

[La maestra lee] ¿Cansado de estar cambiando los canales de su televisión? Conéctese con el canal latino que hace su programación en inglés y español. Es un canal unido a la Televisión Directa para Todos. Podrá ver películas románticas, de aventura, acontecimientos deportivos de última hora, los últimos videos musicales de los cantantes de ayer y hoy y conciertos como el de Marc Anthony. Eso es sólo un poco de lo que le ofrecemos. Tendrá acceso a más de cuarenta canales con programación en dos idiomas. Para más información llame al número 358-4338.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to a Spanish radio station and you hear:

[La maestra lee] El gran grupo chileno llamado “La Ley” vuelve después de dos años de ausencia. Regresa con un sonido nuevo y lleno de la sensibilidad que los caracterizó en sus comienzos. En su nuevo álbum titulado Uno, hace un rompimiento casi radical y vuelve al rock clásico. Beto Cuevas, compositor y vocalista del grupo, sintetiza en diez temas un nuevo espíritu optimista que deja atrás lo oscuro y reflexiona poéticamente sobre el amor. ¡No se pierda la sorpresa!`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are listening to the radio and hear this advertisement:

[La maestra lee] El último modelo, Rivera 2002. El medio de transporte ideal para toda la familia. Toques de lujo, buenas llantas, interiores de piel, automático, aire acondicionado, volantes de posición, alarma, y bolsa de aire. Es cómodo, útil y, a los que lo conducen, les encanta.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are with a tour group in Guatemala and the tour guide says:

[La maestra lee] Usted puede apreciar lo que nuestros antepasados del mundo maya construyeron en Guatemala. Las ruinas de Tikal ofrecen una hermosura, tanto de la naturaleza como de la arquitectura. Años atrás y sin la tecnología de hoy, los mayas construyeron los templos sin nosotros saber cómo lo lograron hacer. Los bellos templos forman una ciudad que se extiende por millas, y la vegetación es como una alfombra que acaricia nuestros pies. Hoy día podemos apreciar este maravilloso mundo del pasado.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are watching television and hear this report:

[La maestra lee] El cantante Manny Manuel recuerda cómo su mamá preparaba una comida sabrosa todos los días cuando él llegaba a su casa después de la escuela. Por eso él está muy agradecido. Ella tiene amplio conocimiento de la comida de la Isla de Puerto Rico. Por supuesto Manny Manuel empezó a preparar los deliciosos platos de su mamá cuando él comenzó a vivir solo. Ahora le encanta que todos juntos, en su familia, disfruten de una buena cena.`,
    psource: TDC_SRC
  },
  cheito: {
    passage: `Cheíto

Emilio Estefan es lo más parecido a la lámpara del genio de Aladino, porque todo lo que toca lo convierte en éxito. Recientemente, Emilio Estefan acaba de hacer un nuevo descubrimiento. Esta vez es un salsero puertorriqueño que hizo coro en el disco Mi tierra de Gloria Estefan. Su nombre es Juan José Quiñones, pero todo el mundo lo conoce por Cheíto. Cuando Emilio lo oyó, rápidamente pensó en otro hit. “Quise encontrar un sonido nuevo en la salsa porque últimamente la salsa no ha cambiado mucho. Quise tomarme un chance con Cheíto y a la gente de Sony le encantó, así que en seguida lo firmó”, dice el superfamoso productor.

Junto a Emilio Estefan en la producción del primer disco de Cheíto hay otro gran músico: Juanito Márquez. Ambos han trabajado arduamente en la elaboración de este disco, utilizando la tecnología de la música norteamericana en la latina.

Cheíto comenzó tocando trompeta, percusión y trombón en diferentes orquestas y cantaba cada vez que tenía una oportunidad. Hace apenas 7 años decidió mudarse a Miami con su mujer y sus hijos. “Recuerdo que mi primer trabajo aquí fue con Willy Chirino. Luego hice coros para Frankie Ruiz, Justo Betancourt, Adalberto Santiago y con todos los cantantes de salsa de Puerto Rico, pero nunca pensé en hacer un disco. Luego grabé el coro de Mi tierra, y Emilio Estefan se interesó en hacer un disco conmigo. Así que todos esperamos que sea un éxito”, explicó el cantante. Los temas de este disco son de Juanito Márquez, Roberto Blades (el hermano de Rubén Blades) y de Cheíto, que también es compositor.

Todo el equipo de producción que intervino en la elaboración de este primer material, que tiene el mismo nombre del cantante, está de acuerdo en que el disco es muy orgánico. “Se tocan diferentes temas de la vida diaria. Hay para todos los gustos porque básicamente tratamos de buscar algo distinto y diferente que a la misma vez sea bailable, y que puedas sentarte a escuchar. Además, tiene mucho humor porque si no hay alegría no hay música. La música no es para llorar ni para ponerse triste, porque para eso hay tiempo”, terminó diciendo Emilio Estefan.`,
    psource: "Part 3a reading selection, Comprehensive Examination in Spanish, January 2003"
  },
  bratell: {
    imgs: [
      { src: "img/q21-bratell-gift-shop-ad.png",
        cap: "Bratell “El arte hecho regalo” advertisement — reading selection for question 21, Comprehensive Examination in Spanish, January 2003",
        alt: "Advertisement in Spanish for Bratell, with the slogan El arte hecho regalo and the heading Finos accesorios de decoración para toda estación: a new line of English bergère armchairs, rocking chairs, Tiffany lamps, European oil paintings and mirrors, fine crystal, pewter ornaments, perfume bottles, candles, and endless gift ideas for anniversaries and weddings; visit and enjoy shopping in comfort; Grau 299 – Miraflores – Tel. 446 8684; ask about items on clearance." }
    ]
  },
  parque: {
    imgs: [
      { src: "img/q22-desert-park-notice.png",
        cap: "Park superintendent’s welcome notice — reading selection for question 22, Comprehensive Examination in Spanish, January 2003",
        alt: "Boxed welcome notice in Spanish signed José A. Cisneros, Superintendente: visitors have discovered firsthand that desert and river environments can be very dangerous; despite constant warnings, accidents happen; water is a scarce, precious resource in the desert; animals are used to the scarcity but humans are not; you must have plenty of water at all times, especially for hikes; with the desert’s very low humidity the human body loses water quickly and must replace it; we recommend you carry and drink a gallon of water each day." }
    ]
  },
  ricky: {
    imgs: [
      { src: "img/q23-la-copa-de-ricky.png",
        cap: "“La Copa de Ricky” article — reading selection for question 23, Comprehensive Examination in Spanish, January 2003",
        alt: "Boxed article in Spanish titled La Copa de Ricky: no global show is better received than the opening of a soccer World Cup, and this year FIFA and the French chose Ricky Martin to open the spectacle; FIFA called his record company in England to ask him to write the emblem song of France 98 and sing it at the inauguration; they wanted something similar to María, his most popular song; to write La Copa de la Vida he drew inspiration from the Rio carnival and the universal language of soccer fans’ chants, then composed it at his piano." }
    ]
  },
  revista: {
    imgs: [
      { src: "img/q24-magazine-ad.png",
        cap: "“No te pierdas” advertisement — reading selection for question 24, Comprehensive Examination in Spanish, January 2003",
        alt: "Advertisement in Spanish headed No te pierdas, with bullet points promising exclusive interviews with today’s Latin stars, fabulous photos you will not see anywhere else, achievers who make a difference in our community, and, each month, sections such as beauty, fashion, family and more of lo nuestro; large text at the bottom says Llama al 1-800-950-8100." }
    ]
  },
  caiman: {
    imgs: [
      { src: "img/q25-caiman-article.png",
        cap: "News article on the caimán llanero — reading selection for question 25, Comprehensive Examination in Spanish, January 2003",
        alt: "Boxed newspaper article in Spanish datelined Bogotá: the caimán llanero, a relative of the crocodile living in the lower and middle Orinoco river basin between Colombia and Venezuela, was declared an endangered species by Colombia’s environment ministry; human intervention — setting forests on fire, draining swamps, altering river courses, hunting the animal and stealing its eggs and young — has put it at risk, despite a capture ban imposed by the Agriculture Ministry since 1968; a 1994–1996 study confirmed the species has disappeared from almost all its historic range; the ministry accepted a proposal from institutions including the Alexander Von Humboldt institute for a census and a breeding program protecting its habitat." }
    ]
  },
  sanfermin: {
    passage: `La fiesta de San Fermín

Del 6 al 14 de julio es tiempo de San Fermín en España y, en consecuencia de toros, encierros, peñas, gente divirtiéndose en las calles hasta el amanecer y miles de aficionados a la fiesta brava vestidos de blanco y rojo. En fin, son días de insomnio para la ciudad de Pamplona.

Los orígenes de la fiesta de San Fermín se remontan a la época del santo del mismo nombre quien es el patrono de la ciudad de Pamplona. Desde esos tiempos, la gente ha corrido por las calles de la ciudad perseguida por toros asustados y furiosos. Los sanfermines, como __(26)__ los españoles a esta celebración, es el pretexto ideal para romper con la monotonía de la vida cotidiana y entregarse a una fiesta ininterrumpida y sin límites que __(27)__ por poco más de una semana.

A las doce del día del 6 de julio, el alcalde y los consejales de Pamplona salen al balcón del Ayuntamiento para lanzar el cohete que marca el inicio de la gran celebración. Miles de voces __(28)__: “¡Pamploneses, ¡Viva San Fermín, Gora San Fermín!” Esa noche es toda de fiesta hasta más allá del amanecer. Parece que no hay final, y entre otras cosas, se llega a conocer a los habitantes de esta región, Navarra. Las calles, plazas y demás lugares públicos están llenos de españoles y extranjeros de todas partes del mundo que, con gritos y cantos, inundan de calor la ciudad. No hay un solo lugar donde pasar la noche si no se tienen reservaciones en algún hotel u hostería; ni siquiera las bancas del parque están libres. Por todas partes hay música, comida, pañoletas rojas y personas que festejan. El encierro es quizá el acto más representativo de las fiestas de San Fermín y quizá el que le ha dado su fama espiritual. Inicia a las 8 de la mañana del día 7 y consiste en correr un trayecto de aproximadamente 800 metros frente a la estampida de toros que se dirige a la plaza San Jonnos.

Aparte de los toros y los tradicionales bailes típicos navarros existen otras actividades para __(29)__. La mayoría es de creación reciente, como la Fuente de la Navarrería, que consiste en arrojarse desde la fuente de Santa Cecilia para ser recibido en brazos de quienes se encuentran abajo; otra es el Estruendo de Iruña, que es, básicamente, un desfile en el que los participantes recorren las calles haciendo ruido con tambores, bombos, etc.

El acto que da conclusión a los sanfermines es El pobre de mí, un angustioso canto de despedida al jolgorio: “¡Pobre de mí que se han terminado las fiestas de San Fermín!”, entona la gente a las doce de la noche del 14 de julio. La tristeza invade las calles y el pueblo navarro empieza a prepararse psicológica y físicamente para volver a la realidad, __(30)__ duro de todo un año, que sólo se suspende durante este festejo.`,
    psource: "Part 3c cloze passage, Comprehensive Examination in Spanish, January 2003"
  },
  cena: {
    imgs: [
      { src: "img/q33-dinner-table-picture.png",
        cap: "Picture for Part 4b, Question 33 — Comprehensive Examination in Spanish, January 2003",
        alt: "Black-and-white drawing of a family of three at a dinner table: a teenage girl in the middle talks on a cordless phone with an antenna while her mother, seated at the left, speaks to her with an annoyed expression and her father, seated at the right, keeps eating his meal." }
    ]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a — Listening, answers in English (Q1–9) ----------
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does Maribel collect?",
    choices: [
      "earrings",
      "doll clothes",
      "figures of angels",
      "miniature houses"
    ],
    answer: 2,
    back: "(3) figures of angels — “Colecciona toda clase de ángeles. En su casa tiene una colección grande de ángeles.” She even gives them to her dearest friends."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What can one learn from playing this new game?",
    choices: [
      "information about the culture of different parts of the world",
      "information about where to learn another language",
      "information about school exchange programs",
      "information about investment opportunities"
    ],
    answer: 0,
    back: "(1) information about the culture of different parts of the world — the game Diversidad “les hace preguntas a los jugadores sobre más de 60 culturas,” with categories including customs, food, and religion."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is Iberia Airlines offering its customers?",
    choices: [
      "in-flight telephone service",
      "less expensive international flights",
      "credit for frequent flyer miles",
      "a new form of airline ticket"
    ],
    answer: 3,
    back: "(4) a new form of airline ticket — “Lo último en billetes de avión es no poseer billete. El billete del futuro…”: a ticketless “billete ciber” bought by phone, travel agency, or Internet."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is this person going to do in Madrid?",
    choices: [
      "teach music",
      "play rugby",
      "lecture on Latin America",
      "perform at the opera"
    ],
    answer: 3,
    back: "(4) perform at the opera — “El tenor hispano, José Cura, cantará varias óperas aquí en Madrid durante esta temporada.” He merely looks like a rugby player."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What is the profession of Julia Alvarez?",
    choices: [
      "She is a talented actress.",
      "She is a successful writer.",
      "She is a famous model.",
      "She is a dedicated historian."
    ],
    answer: 1,
    back: "(2) She is a successful writer. — “no ha parado de escribir cuentos,” and named “Latina del Año” she explained her “éxito literario.”"
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What advice is offered?",
    choices: [
      "make changes in one’s daily routine",
      "have a thorough medical checkup",
      "sleep more hours each night",
      "discuss problems with a good friend"
    ],
    answer: 0,
    back: "(1) make changes in one’s daily routine — “¡Cambia tu rutina! Es suficiente hacer pequeños cambios en tus actividades diarias.” No doctor visit or extra sleep is needed."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Why was Alfred Rascón honored by the President?",
    choices: [
      "He negotiated a peace treaty.",
      "He became a United States Congressman.",
      "He saved the lives of fellow soldiers.",
      "He established a children’s organization."
    ],
    answer: 2,
    back: "(3) He saved the lives of fellow soldiers. — “Durante un combate muy peligroso les salvó la vida a tres soldados norteamericanos,” earning the Congressional Medal of Honor."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. Who would be most interested in this announcement?",
    choices: [
      "students with extracurricular activities",
      "students who are about to graduate",
      "students with academic difficulties",
      "students who have part-time jobs"
    ],
    answer: 2,
    back: "(3) students with academic difficulties — “Para los estudiantes que tienen dificultades en el colegio, queremos ofrecerles la oportunidad de mejorar sus notas” with courses before retaking exams."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What is this medicine for?",
    choices: [
      "a cut",
      "a stomachache",
      "a toothache",
      "a cold"
    ],
    answer: 3,
    back: "(4) a cold — the symptoms are a cough (“¿Tiene tos?”), sneezing, and a sore throat; Sedra promises relief day and night."
  },

  // ---------- Part 2b — Listening, answers in Spanish (Q10–15) ----------
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué le está hablando esta persona?",
    choices: [
      "de artículos de venta",
      "del menú abordo del avión",
      "del uso del teléfono celular",
      "de productos argentinos"
    ],
    answer: 1,
    back: "(2) del menú abordo del avión — the flight attendant offers “carne asada” or “filete de pescado,” with flan and coffee or tea for dessert."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué ofrece este anuncio de publicidad?",
    choices: [
      "un canal bilingüe de televisión",
      "una entrada a un concierto",
      "una manera de llamar a Puerto Rico",
      "un acceso directo a la red"
    ],
    answer: 0,
    back: "(1) un canal bilingüe de televisión — “el canal latino que hace su programación en inglés y español… más de cuarenta canales con programación en dos idiomas.”"
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué se anuncia sobre este grupo?",
    choices: [
      "que un miembro se ha casado",
      "que el grupo se ha separado",
      "que ha grabado un nuevo disco",
      "que va a dar un concierto en Chile"
    ],
    answer: 2,
    back: "(3) que ha grabado un nuevo disco — La Ley returns after two years “En su nuevo álbum titulado Uno,” a near-radical break back to classic rock."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué quieren vender en este anuncio?",
    choices: [
      "un coche",
      "una casa",
      "un abrigo de invierno",
      "una obra de arte"
    ],
    answer: 0,
    back: "(1) un coche — the Rivera 2002 has “buenas llantas, interiores de piel, automático, aire acondicionado… alarma, y bolsa de aire”: all car features."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué describe el guía?",
    choices: [
      "idiomas nuevos",
      "ropa antigua",
      "ciudades modernas",
      "ruinas indígenas"
    ],
    answer: 3,
    back: "(4) ruinas indígenas — “Las ruinas de Tikal,” the Mayan temples forming a city that stretches for miles in Guatemala."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué le gusta a Manny Manuel?",
    choices: [
      "salir con sus parientes",
      "cocinar para su familia",
      "tocar un instrumento musical",
      "viajar a Puerto Rico"
    ],
    answer: 1,
    back: "(2) cocinar para su familia — he began preparing “los deliciosos platos de su mamá” and “le encanta que todos juntos, en su familia, disfruten de una buena cena.”"
  },

  // ---------- Part 3a — Long reading passage (Q16–20) ----------
  { ...STIMULI.cheito,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cómo se describe a Emilio Estefan en este artículo?",
    choices: [
      "preocupado",
      "exitoso",
      "desilusionado",
      "estudioso"
    ],
    answer: 1,
    back: "(2) exitoso — like Aladdin’s genie lamp, “todo lo que toca lo convierte en éxito.”"
  },
  { ...STIMULI.cheito,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Cómo es el disco de Cheíto?",
    choices: [
      "describe aspectos de la ciudad grande",
      "describe la vida familial",
      "representa las voces femeninas y masculinas",
      "representa lo latino y lo norteamericano"
    ],
    answer: 3,
    back: "(4) representa lo latino y lo norteamericano — the album was made “utilizando la tecnología de la música norteamericana en la latina.” (“familial” is the exam’s printed spelling.)"
  },
  { ...STIMULI.cheito,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Quién ayudó a Emilio Estefan a grabar el disco de Cheíto?",
    choices: [
      "Juanito Márquez",
      "Willy Chirino",
      "Justo Betancourt",
      "Rubén Blades"
    ],
    answer: 0,
    back: "(1) Juanito Márquez — “Junto a Emilio Estefan en la producción del primer disco de Cheíto hay otro gran músico: Juanito Márquez.”"
  },
  { ...STIMULI.cheito,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Cómo empezó Cheíto su carrera?",
    choices: [
      "haciendo negocios internacionales",
      "tocando varios intrumentos",
      "produciendo música cinematográfica",
      "estudiando en la univeridad"
    ],
    answer: 1,
    back: "(2) tocando varios intrumentos — “Cheíto comenzó tocando trompeta, percusión y trombón en diferentes orquestas.” (“intrumentos” and “univeridad” are the exam’s printed spellings.)"
  },
  { ...STIMULI.cheito,
    type: "mc",
    label: "Q20",
    stem: "Q20. Según Emilio Estefan, ¿qué debe tener la música?",
    choices: [
      "un tono melancólico",
      "orquestas diferentes",
      "humor y alegria",
      "un coro grande"
    ],
    answer: 2,
    back: "(3) humor y alegria — “tiene mucho humor porque si no hay alegría no hay música. La música no es para llorar ni para ponerse triste.” (“alegria” without the accent is the printed choice.)"
  },

  // ---------- Part 3b — Realia (Q21–25) ----------
  { ...STIMULI.bratell,
    type: "mc",
    label: "Q21",
    stem: "Q21. This advertisement is intended to interest someone who",
    choices: [
      "wants to decorate a home",
      "needs electrical repairs",
      "plans to visit a museum",
      "has an interest in historical artifacts"
    ],
    answer: 0,
    back: "(1) wants to decorate a home — Bratell sells “finos accesorios de decoración para toda estación”: armchairs, rocking chairs, Tiffany lamps, mirrors, crystal, and gift ideas."
  },
  { ...STIMULI.parque,
    type: "mc",
    label: "Q22",
    stem: "Q22. What does the superintendent of parks advise?",
    choices: [
      "do not swim in the river",
      "drink plenty of fluids",
      "do not hike alone",
      "wear layers of clothing"
    ],
    answer: 1,
    back: "(2) drink plenty of fluids — “Hay que tener bastante agua todo el tiempo… Recomendamos que Ud. lleve y tome un galón de agua cada día.”"
  },
  { ...STIMULI.ricky,
    type: "mc",
    label: "Q23",
    stem: "Q23. Why is this man in the news?",
    choices: [
      "He inaugurated a soccer stadium in Rio De Janeiro.",
      "He sold his record company in England.",
      "He played on a World Cup soccer team.",
      "He wrote the theme song for the World Cup ceremonies."
    ],
    answer: 3,
    back: "(4) He wrote the theme song for the World Cup ceremonies. — FIFA asked Ricky Martin to write “la canción emblema de Francia 98” (La Copa de la Vida) and sing it at the opening."
  },
  { ...STIMULI.revista,
    type: "mc",
    label: "Q24",
    stem: "Q24. What is being advertised?",
    choices: [
      "a job opportunity",
      "a contest",
      "a magazine",
      "a movie"
    ],
    answer: 2,
    back: "(3) a magazine — exclusive interviews, photos, and “Cada mes, secciones como belleza, moda, familia”: a monthly publication you call to order."
  },
  { ...STIMULI.caiman,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is this article about?",
    choices: [
      "new information about the Incan civilization",
      "the causes for the disappearance of an animal native to South America",
      "the changes in the use of the river in Colombia and Venezuela",
      "new animal species discovered in recent years"
    ],
    answer: 1,
    back: "(2) the causes for the disappearance of an animal native to South America — the caimán llanero was declared endangered; the article lists forest burning, swamp drainage, river alteration, hunting, and egg theft."
  },

  // ---------- Part 3c — Cloze passage (Q26–30) ----------
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
      "hacen",
      "reciben",
      "llaman",
      "venden"
    ],
    answer: 2,
    back: "(3) llaman — “Los sanfermines, como llaman los españoles a esta celebración”: what Spaniards call the festival."
  },
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
      "rompe",
      "se viste",
      "se cierra",
      "dura"
    ],
    answer: 3,
    back: "(4) dura — an uninterrupted fiesta “que dura por poco más de una semana”: it runs July 6–14, a bit more than a week."
  },
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
      "salen",
      "gritan",
      "callan",
      "buscan"
    ],
    answer: 1,
    back: "(2) gritan — when the rocket is launched, thousands of voices shout: “¡Pamploneses, ¡Viva San Fermín, Gora San Fermín!”"
  },
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
      "salvarse",
      "levantarse",
      "divertirse",
      "irse"
    ],
    answer: 2,
    back: "(3) divertirse — besides the bulls and traditional dances there are other activities for having fun, like la Fuente de la Navarrería and el Estruendo de Iruña."
  },
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
      "el trabajo",
      "el viaje",
      "el sonido",
      "el tesoro"
    ],
    answer: 0,
    back: "(1) el trabajo — returning to reality means “el trabajo duro de todo un año, que sólo se suspende durante este festejo”: the year’s hard work, suspended only during the fiesta."
  },

  // ---------- Part 4 — Writing (one self card per printed prompt) ----------
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4a, Question 31 — choose question 31 or 32; write a well-organized note in Spanish of at least six clauses; a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning).

You would like to study with an exchange student for a test. Write a note in Spanish to the exchange student asking him or her to meet with you to study for a test.

In your note, you may wish to include an invitation to study together and mention where you suggest meeting, what you and the exchange student will need, what you will do after studying, transportation, the subject you will be studying, how long you will study, when you will meet, when the test is scheduled, who else will be studying with you, and how you feel about taking the test. Be sure to accomplish the purpose of the note, which is to ask the exchange student to meet with you to study for a test.

Use the following:
Salutation: Hola (exchange student’s first name)
Closing: Hasta luego

The salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key):

Hola Roberto
Me has dicho que me ayudarías a estudiar español. Tengo un examen el viernes. ¿Podrás venir a mi casa el jueves por la noche? Llámame y haremos los planes.
Hasta luego
Jaime

Rubric: the note must achieve the stated purpose (asking the exchange student to meet and study); each of the first six clauses earns credit for comprehensibility-appropriateness (2/3) and form (1/3), and a clause with more than one form error loses the form point.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4a, Question 32 — choose question 31 or 32; write a well-organized note in Spanish of at least six clauses; a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning).

You recently had dinner at a Spanish restaurant while you were on vacation. After you returned from your vacation, you realized that you left something at the restaurant. Write a note in Spanish to the manager of the restaurant to ask if the item that you left has been found.

In your note, you may want to mention when you were at the restaurant, where you sat, what item you left, what it looks like, where you might have left it, why you need the item returned, and how you can be contacted. Be sure to accomplish the purpose of the note, which is to ask if the item that you left has been found.

Use the following:
Salutation: Estimados señores
Closing: Sinceramente

The salutation and closing will not be counted as part of the six required clauses.`,
    back: `Official 6-credit sample response (scoring key):

Estimados señores:
El sábado pasado cené en su restaurante y se me olvidó el bolso. Lo dejé debajo de la mesa cerca de la ventana. Si Uds. han encontrado un bolso negro, me hacen el favor de llamarme al número 555-0607. Les agradezco su ayuda.
Sinceramente
Carmen López

Rubric: the note must achieve the stated purpose (asking whether the lost item has been found); the first six clauses are rated for comprehensibility-appropriateness and form.`
  },
  { ...STIMULI.cena,
    type: "self",
    label: "W3",
    front: `W3 (Part 4b, Question 33 — choose question 33 or 34; write a well-organized composition in Spanish of at least 10 clauses).

In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.`,
    back: `Official 10-credit sample response (scoring key):

Carlita y su familia cenan juntos todas las noches. Hoy Carlita quiere hablar por teléfono con su mejor amiga Juanita. Ellas quieren ir al baile hoy por la noche, pero tienen que planear cómo van a viajar y la ropa que van a llevar. A la madre no le gusta que Carlita hable por teléfono durante la cena. Le manda que deje de charlar y que coma la cena. Carlita decide que es mejor hacerle caso a su mamá.

Rubric: the story must relate to the picture (not describe it, and not be a dialogue) and contain at least 10 clauses, each rated for comprehensibility-appropriateness (2/3) and form (1/3).`
  },
  {
    type: "self",
    label: "W4",
    front: `W4 (Part 4b, Question 34 — choose question 33 or 34; write a well-organized letter in Spanish of at least 10 clauses).

The language department of a local community college is sponsoring an international film festival. Your Spanish teacher has asked you to obtain more information about the international film festival for your class. In Spanish, write a letter to the college language department to request details about the international film festival.

You must accomplish the purpose of the letter, which is to request information about the film festival.

In your letter you may wish to: identify yourself and state the purpose of your letter; request a list of films to be shown, a schedule with dates and times, and a list of ticket prices; inquire about special group or student discounts; mention your interest in Spanish films; and express your hope that your class will be able to attend.

You may use any or all of the ideas suggested above or you may use your own ideas. Either way, you must request information about the film festival.

Use the following:
Dateline: el 28 de enero de 2003
Salutation: Estimados señores
Closing: Atentamente

The dateline, salutation, and closing will not be counted as part of the ten required clauses.`,
    back: `Official 10-credit sample response (scoring key):

Estimados señores,
He oído que habrá un festival de cine en su universidad. A mi clase de español le encantaría asistir a su festival. ¿Podría darnos más información sobre el festival? Por ejemplo, ¿cuándo empieza el festival y cuándo termina? ¿Dónde se presentarán las películas y cuál es el horario? ¿Pueden Uds. enviarnos una lista de las películas que se darán? Y, por favor, ¿cuánto cuesta asistir al festival? ¿Hay precios especiales para estudiantes? Muchísimas gracias por su ayuda.
Atentamente
Carla Ortega

Rubric: the letter must achieve the stated purpose (requesting information about the film festival); the first 10 clauses are rated for comprehensibility-appropriateness and form.`
  },

  // ---------- Supplemental cards S1–S10 ----------
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to the advertisement, what must players do to win the game Diversidad?",
    choices: [
      "earn points and letters",
      "visit sixty different countries",
      "collect one card from every category",
      "answer questions about famous athletes"
    ],
    answer: 0,
    back: "(1) earn points and letters — “Para ganar el juego los jugadores tienen que ganar puntos y letras.” Its cards are divided into 10 categories such as customs, food, and religion."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S2",
    stem: "S2. How can travelers obtain Iberia’s new “billete ciber”?",
    choices: [
      "only at the check-in counter on the day of the flight",
      "by phone, at any travel agency, or through the Internet",
      "by mailing a request to the airline’s Madrid office",
      "only through the airline’s frequent flyer club"
    ],
    answer: 1,
    back: "(2) by phone, at any travel agency, or through the Internet — “compra tu billete ciber por teléfono, en cualquier agencia de viajes o a través del Internet,” then pick up the boarding pass at check-in."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "S3",
    stem: "S3. Besides singing, what else does José Cura do as a musician?",
    choices: [
      "He conducts orchestras and plays the violin, guitar, and flute.",
      "He composes operas for young singers.",
      "He records rugby anthems in Argentina.",
      "He sells tickets at the Madrid box office."
    ],
    answer: 0,
    back: "(1) He conducts orchestras and plays the violin, guitar, and flute. — “Dirige orquestas, domina el violín, la guitarra y la flauta,” after 25 years in the music world."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S4",
    stem: "S4. Where was Alfred Rascón born?",
    choices: [
      "in California",
      "in Mexico",
      "in Puerto Rico",
      "in Washington, D.C."
    ],
    answer: 1,
    back: "(2) in Mexico — “Rascón nació en México y emigró con su familia a California cuando era niño,” and he joined the U.S. Army at 17 before becoming a citizen."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S5",
    stem: "S5. Según el anuncio, ¿quién es Beto Cuevas?",
    choices: [
      "el compositor y vocalista del grupo",
      "el productor del nuevo álbum",
      "un crítico de música chilena",
      "el organizador de la gira del grupo"
    ],
    answer: 0,
    back: "(1) el compositor y vocalista del grupo — “Beto Cuevas, compositor y vocalista del grupo, sintetiza en diez temas un nuevo espíritu optimista.”"
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "S6",
    stem: "S6. Según el guía, ¿quiénes construyeron los templos de Tikal?",
    choices: [
      "los aztecas",
      "los españoles",
      "los mayas",
      "los incas"
    ],
    answer: 2,
    back: "(3) los mayas — “los mayas construyeron los templos sin nosotros saber cómo lo lograron hacer,” centuries ago and without today’s technology."
  },
  { ...STIMULI.cheito,
    type: "mc",
    label: "S7",
    stem: "S7. Según el artículo, ¿con quién tuvo Cheíto su primer trabajo en Miami?",
    choices: [
      "con Gloria Estefan",
      "con Willy Chirino",
      "con Frankie Ruiz",
      "con Roberto Blades"
    ],
    answer: 1,
    back: "(2) con Willy Chirino — “Recuerdo que mi primer trabajo aquí fue con Willy Chirino.” Afterward he sang chorus for Frankie Ruiz, Justo Betancourt, and Adalberto Santiago."
  },
  { ...STIMULI.parque,
    type: "mc",
    label: "S8",
    stem: "S8. How much water does the superintendent recommend that visitors carry and drink each day?",
    choices: [
      "one liter",
      "two quarts",
      "one gallon",
      "two gallons"
    ],
    answer: 2,
    back: "(3) one gallon — “Recomendamos que Ud. lleve y tome un galón de agua cada día,” because in the desert’s low humidity the body loses water quickly."
  },
  { ...STIMULI.caiman,
    type: "mc",
    label: "S9",
    stem: "S9. According to the article, since what year has capturing the caimán llanero and its eggs been prohibited?",
    choices: [
      "1968",
      "1994",
      "1996",
      "2003"
    ],
    answer: 0,
    back: "(1) 1968 — “desde 1968 el Ministerio de Agricultura impuso una prohibición in definida a la captura del animal y sus huevos” (the 1994–1996 dates refer to the specialists’ study)."
  },
  { ...STIMULI.sanfermin,
    type: "mc",
    label: "S10",
    stem: "S10. Según el pasaje, ¿en qué consiste el encierro de San Fermín?",
    choices: [
      "en correr unos 800 metros delante de la estampida de toros",
      "en arrojarse desde la fuente de Santa Cecilia",
      "en desfilar por las calles haciendo ruido con tambores",
      "en cantar una canción de despedida a medianoche"
    ],
    answer: 0,
    back: "(1) en correr unos 800 metros delante de la estampida de toros — the encierro starts at 8 a.m. on July 7 and “consiste en correr un trayecto de aproximadamente 800 metros frente a la estampida de toros.” The fountain jump is la Fuente de la Navarrería, the noisy parade is el Estruendo de Iruña, and the farewell song is El pobre de mí."
  }
];
