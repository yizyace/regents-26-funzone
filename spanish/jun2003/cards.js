// June 2003 Comprehensive Examination in Spanish — session deck
// Sources: exam.pdf (Parts 2-4 booklet), tdc.pdf (Teacher Dictation Copy), key.pdf (scoring key)
// raw-docs/nysedregents.org/spanish/jun2003/

const TDC_SRC = "Teacher Dictation Copy, June 2003 Comprehensive Spanish Regents";

const STIMULI = {
  tdc1: {
    passage: `[Background] You are listening to the radio in San Juan, Puerto Rico, and hear this announcement:

[La maestra lee] No juegue con la vida de su bebé. Vacúnelo antes de que cumpla dos años de edad. Protéjalo contra enfermedades infantiles peligrosas como varicela, difteria, sarampión, tos ferina, tétano, paperas, rubéola, hepatitis B y polio. Esperar es lamentar. Para más información llame gratis al 232-22-33.`,
    psource: TDC_SRC
  },
  tdc2: {
    passage: `[Background] You hear this announcement about a job opportunity:

[La maestra lee] El Programa de Tutores Victoria, en asociación con el Distrito Escolar Independiente de Austin, está buscando voluntarios interesados en ayudar a los niños del primer al décimo grado con sus estudios en inglés y español. Los voluntarios deben ser bilingües. Si usted es bilingüe, tiene una hora libre cada semana, y quiere ayudar a un niño que tiene dificultades con sus clases, favor de llamar al teléfono 499-7317. Su tiempo y atención personal permitirán al estudiante superarse en sus estudios y tener éxito en la escuela.`,
    psource: TDC_SRC
  },
  tdc3: {
    passage: `[Background] You are an exchange student in Argentina planning your day, and your host says:

[La maestra lee] Para celebrar el Día de la Independencia, los Centros de Gestión y Participación de la Zona Sur organizaron una competencia en bicicleta. Cada participante necesitará su propia bicicleta. Los participantes no podrán ver el panorama de la ruta por la velocidad en que pasean. Los ciclistas tienen previsto salir hoy de Caminito y recorrer la ciudad, hasta llegar a las 12, 30 h al Parque Indoamericano. Con esta competencia, terminará una semana de festivales para conmemorar la independencia argentina.`,
    psource: TDC_SRC
  },
  tdc4: {
    passage: `[Background] While listening to a Spanish-language radio station, you hear this commercial:

[La maestra lee] Sin andar con rodeos, estamos buscando gente simpática y trabajadora que quiera carrera en una línea aérea verdaderamente única. Nuestros empleados trabajan en equipo para ofrecer a nuestros pasajeros un servicio excepcional todos los días. Y a cambio, nosotros les ofrecemos a nuestros empleados excelentes beneficios médicos, un plan de retiro, y privilegios para viajar gratis. Por eso, te invitamos a formar parte de nuestra gran organización que la revista FORTUNE mencionó como “Una de las compañías más admiradas” de los Estados Unidos. Mándanos tu résumé o llámanos para más información.`,
    psource: TDC_SRC
  },
  tdc5: {
    passage: `[Background] You hear this announcement on the radio:

[La maestra lee] Las bibliotecas públicas han organizado una serie de actividades con motivo de la “Semana del Libro”. La “Semana del Libro” tendrá lugar la semana que viene, y está dirigida a los niños. Diez y nueve bibliotecas infantiles de la red municipal se transformarán en “Museos del cuento”. En estas bibliotecas infantiles se exhibirán algunos objetos de cuentos para niños como la nariz de Pinocho, los zapatos de Cenicienta o unas muñecas de la Bella y la Bestia. Estos centros de lectura serán escenarios para la narración de cuentos.`,
    psource: TDC_SRC
  },
  tdc6: {
    passage: `[Background] You are listening to the radio in Mexico City and hear this sports report:

[La maestra lee] Uno de los mejores atractivos de los Juegos Olímpicos es la gimnasia olímpica. Además de ser una presentación de habilidad, equilibrio y fuerza, la gimnasia olímpica es admirada por competidores que son los más jóvenes de todos los participantes en este festival de deporte. Muchos no han cumplido los 18 años. El público debe admirar el talento de estos atletas que demuestran tanto profesionalismo para personas de su edad.`,
    psource: TDC_SRC
  },
  tdc7: {
    passage: `[Background] While you are browsing through magazines at the airport newsstand in Mexico, you hear this announcement:

[La maestra lee] Señoras y Señores viajeros, favor de tener cuidado de no dejar equipaje desatendido en ningún momento. No permitan que personas desconocidas toquen sus maletas por ninguna razón. También recuerden que no deben ofrecer llevar paquetes o equipaje como favor a personas desconocidas. Les pedimos esto por su propio bien y para la seguridad de todos los pasajeros abordo de nuestros aviones. Gracias por su cooperación.`,
    psource: TDC_SRC
  },
  tdc8: {
    passage: `[Background] You are listening to the radio in Spain and hear this report:

[La maestra lee] Dos madrileños están entre los dieciséis jóvenes y niños españoles que han sido los ganadores de “Soñadores del Milenio”. Este programa internacional da premios por el valor y la generosidad de los menores de más de 100 países. El premio es algo muy divertido. No irán a acampar ni a estudiar al extranjero. Este programa, organizado por Disney y McDonald’s en colaboración con la UNESCO, les dará a estos niños el premio de un viaje al parque de Walt Disney de Orlando donde se unirán a otros dos mil jóvenes escogidos en más de cien países.`,
    psource: TDC_SRC
  },
  tdc9: {
    passage: `[Background] You are at the beach in Panama and hear this announcement:

[La maestra lee] ¡Todos afuera del agua! ¡Hay peligro! ¡Salgan del agua rápidamente! Hay un tiburón acercándose a la playa. Cuiden a los menores y quédense más atrás de la silla del salvavidas en la arena. Por favor, no regresen al agua hasta que les avisemos.`,
    psource: TDC_SRC
  },
  tdc10: {
    passage: `[Background] While on vacation in Puerto Rico, you hear this commercial:

[La maestra lee] Con los productos Chef Mérito, usted no tiene que saber cocinar. Con recetas en cada frasco, Chef Mérito le ayuda a preparar cualquier plato. El pollo, la carne, o el pescado más exquisito, usted lo prepara con Chef Mérito. Chef Mérito tiene un sazonador para cada ocasión y la mejor auténtica salsa picante. Todos los productos Chef Mérito tienen sellos protectores y fechas de expiración para garantizar el buen sabor y calidad. Recuerde … con Chef Mérito en la sartén, cualquiera puede cocinar bien. Pídalo en su tienda favorita.`,
    psource: TDC_SRC
  },
  tdc11: {
    passage: `[Background] You are in Spain and are at the dentist’s office. The dentist says to you:

[La maestra lee] Usted tiene que tener más cuidado con la limpieza de sus dientes. Necesita comprar una nueva pasta de dientes que tiene un avanzado sistema de limpieza. No sólo le ayudará a mantener sus dientes protegidos con sólo cepillarse, sino que le protegerá de las manchas y el sarro. Esta nueva pasta tiene microcristales limpiadores que al disolverse, forman esa capa protectora para sus dientes.`,
    psource: TDC_SRC
  },
  tdc12: {
    passage: `[Background] You are listening to the radio in Mexico and hear this advertisement:

[La maestra lee] ¿Sabe usted realmente lo que tiene su pizza? Lo mejor es inventar su propia pizza con las nuevas bases para pizza Fígaro que vienen listas para ponerles todo el queso que quiera … o ponga hongos, salami, salchichas, cebollas, jalapeños. Escoja lo que le apetezca sin gastar dinero en ingredientes innecesarios. Recuerde que en Fígaro somos la base para su mejor pizza.`,
    psource: TDC_SRC
  },
  tdc13: {
    passage: `[Background] While listening to the radio, you hear this information:

[La maestra lee] Cuarenta y cinco envejecidos adultos mayores aprendieron en tres años a tocar música con campanas, utilizando un concepto diferente para leer música.

En este sistema se utilizan letras, colores y números para representar la música. “Cada uno de los viejos tiene una letra con un color específico asignado, y hay un grupo de ellos que tocan juntos para poder tener una partitura completa de campanas” dijo el director del centro. Después de mucho ensayo, repetición y tres años de práctica, se ha logrado el objetivo: que este grupo de personas aprendiera a tocar música con este sistema.`,
    psource: TDC_SRC
  },
  tdc14: {
    passage: `[Background] While visiting Miami, you hear this announcement on the radio:

[La maestra lee] Carlos Mata y Gabriela Rivero, los populares actores y presentadores de la tele, han abierto en Miami la Academia de Artes Escénicas, donde comparten su experiencia artística con niños y adultos en clases de actuación, danza, canto, elocución y modelo. Mata, el galán venezolano de exitosas telenovelas, y Gaby, la ex-presentadora de “El Club de Gaby,” de Televisa, y actriz de famosas telenovelas, dan clases a grupos pequeños de no más de 12 personas y también ofrecen enseñanza privada y cursos intensivos.`,
    psource: TDC_SRC
  },
  tdc15: {
    passage: `[Background] You are listening to a news program in Spanish and hear this item:

[La maestra lee] Durante unas vacaciones por los Estados Unidos, encontramos algo que para nosotros era muy interesante. Hay varios pueblos en el estado de Idaho donde la población es mayormente de origen vasco. También nos enteramos de un festival vasco muy famoso por esas partes que se llama Jaialdi. La palabra misma significa “festival”. Miles de vascos, originalmente del norte de España, se reúnen en Boise, Idaho, para celebrar su herencia cultural con música, baile, competiciones atléticas y comida típica. Esta celebración de vascos, que se organizó por primera vez en 1987, es la más grande fuera del País Vasco en España y ahora tiene lugar cada cinco años.`,
    psource: TDC_SRC
  },
  ritaMoreno: {
    passage: `Rita Moreno: Leyenda Latina

“Soy un dinosaurio, una especie que está a punto de desaparecer,” dice Rita Moreno, una de las pocas artistas que ha ganado los cuatro premios más grandes del mundo del espectáculo — un Oscar por su papel en West Side Story, un Tony por The Ritz, dos Emmys por su actuación en The Muppet Show y The Rockford Files, y un Grammy por contribuir en un disco con The Electric Company. Esta artista puertorriqueña que canta, baila y actúa debe su celebridad a su persistencia y perseverancia personal. Por eso, sirve como ejemplo positivo para los latinos de todas las generaciones.

Desde el momento en que dejó su ciudad natal, Humacao, Puerto Rico, Rita aprendió a luchar para sobrevivir. Cuando tenía cuatro años, Rita llegó a Nueva York con su madre. Se encontró en un ambiente totalmente distinto al que había dejado en Puerto Rico. Cuando fue a la escuela por primera vez, su mamá la dejó en el salón sin saber la mínima palabra en inglés. En este mundo extraño, Rita tuvo que trabajar con mucha energía para adaptarse a un nuevo idioma y cultura. Con su talento y su fuerte labor, no le llevó mucho tiempo para dominar lo difícil. Una década más tarde a los trece años, debutó en Broadway con su participación en Skydrift, un drama de 1945. Pero aquella primera aventura teatral solo duró siete presentaciones y para poder mantener a su familia, Rita tuvo que trabajar en bares cantando y bailando flamenco.

Durante los próximos años Rita trató de demostrar su versatilidad con varios proyectos pero en aquellos días los estudios de Hollywood no sabían qué hacer con el talento hispano. Aunque había obtenido un Oscar por su actuación en la película West Side Story en 1962, Rita Moreno no se convirtió en la super estrella que todos habían esperado. Sin embargo, ella nunca abandonó su batalla de romper los estereotipos ante los latinos en los Estados Unidos. Durante los años ‘70 y ‘80 trabajó sin cesar para sobresalir en los campos del teatro, del cine y de la televisión.

Al empezar el nuevo milenio, Rita Moreno continúa actuando en la televisión estadounidense. Se le puede ver actualmente en el papel de Sister Peter Marie en la serie dramática Oz, que ha ganado aclamación de los críticos y del público norteamericano. Ahora Rita Moreno, una abuela con unos setenta años de edad, no está lista para retirarse. Después de todo lo que ella ha cumplido, todavía tiene ganas de seguir logrando éxito. Además de su carrera artística, Rita Moreno es una activista política, a favor de las causas humanitarias, especialmente en cuanto a los niños latinos que tienen desventajas. En el futuro parece que no hay extinción de este “dinosaurio” talentoso.`,
    psource: "Reading passage (Part 3a), June 2003 Comprehensive Spanish Regents"
  },
  acapulco: {
    passage: `Acapulco

Sólo 50 minutos de vuelo separan la Ciudad de México del mar amigable de Acapulco, con su bahía situada en el Océano Pacífico y una belleza que atrae a todos los sentidos. Un día no es suficiente para poder experimentar las emociones que llegan con el sol de la mañana y toman fuerza cuando miles de luces de neón se encienden sobre la avenida Miguel Alemán.

Acapulco tiene múltiples caras: la de los amaneceres en las playas de Pie de la Cuesta, la de la gente que pasa horas al sol, la de los imponentes hoteles, la de los deportistas que esquían en la Laguna de Coyuca o que frecuentan campos de golf y tenis, y de los jóvenes que bucean, pescan en altamar y practican windsurf. Paralelamente, aparece el Acapulco cosmopolita, americanizado, que atrae al turista con los mejores restaurantes de comida internacional o rápida, elegantes tienditas de moda, galerías de arte, modernas discotecas y quioscos de recuerdos.

Hay también el Acapulco tradicional, donde la identidad mexicana se defiende de la modernización: hay calles estrechas y construcciones antiguísmas que vigilan la historia y las costumbres de ese México lindo y querido que se alimenta de tacos, tortillas y jugos frescos, mientras escucha las canciones de José Alfredo Jiménez, Agustín Lara y Juan Gabriel.

Si el visitante continúa el paseo por este sector antiguo llegará a la Quebrada de Acapulco, una grandísima piedra de casi 70 metros de altura, que se extiende hacia el mar. Este sitio es famoso por el espectáculo que presentan los “clavadistas”, quienes saltan al agua desde una altura de 45 metros. Este espectáculo, que empieza a las 10:00 de la noche, resulta emocionante porque el “clavadista” salta al mar, que se ilumina solamente por la luz de una antorcha.

En esta bahía, casi nunca llueve. Tiene temperaturas de 27 grados centígrados, vegetación exuberante y atracciones turísticas. Esta región se ha convertido en una de las áreas turísticas más importantes del mundo por sus grandes balnearios y su naturaleza maravillosa. A esta área llegan famosas personalidades como Jane Fonda, Elizabeth Taylor, el expresidente George Bush, Robert Wagner, LaToya Jackson, Mick Jagger, entre otros, quienes mantienen sus residencias en Acapulco Punta Diamante. La nueva área del balneario, fue presentada a turistas y a agentes de viajes durante una exposición turística.

La diferencia entre el llamado Acapulco moderno y Acapulco Punta Diamante es básicamente en los hoteles. En el Acapulco Punta Diamante los hoteles son verdaderas joyas de arquitectura: El Vidafel, El Acapulco Princess, El Camino Real, las Brisas, Aca Diamante y Sheraton.

Al contrario de lo que sucede con importantes centros turísticos que se preocupan por las necesidades de los adultos, Acapulco ha pensado en los niños, quienes encontrarán allí sitios creados especialmente para ellos, como el Nuevo Cici y el Parque Papagayo. En el Nuevo Cici hay piscinas de todas clases, club de playa, lagos para que los chicos jueguen a los piratas con los cañones de agua, restaurantes y, además, hay presentaciones acuáticas con delfines y “clavadistas.” El parque Papagayo es un centro de diversiones y ecología donde los niños gozarán de flora y fauna, mientras que patinan en el parque o pasean por el lago en barcos.

Como puede verse, hay un Acapulco para todos. Prepare sus maletas, y feliz viaje.`,
    psource: "Reading passage (Part 3c), June 2003 Comprehensive Spanish Regents"
  },
  miele: {
    imgs: [
      { src: "img/q21-miele-lavavajillas-ad.png",
        cap: "Advertisement for the new Miele Oceanis dishwasher — Part 3b (Q21), June 2003 Comprehensive Spanish Regents",
        alt: "Boxed Spanish advertisement headlined 'Nuevo lavavajillas Miele Oceanis: Una decisión que no te sorprenderá.' The text says the new dishwasher incorporates the most advanced technology to give each type of dish the treatment it needs: six wash programs, two temperatures, greater capacity in the upper basket, very quiet operation, and maximum care for the environment. It closes with the slogan 'Miele — Una sabia decisión.'" }
    ]
  },
  reunion: {
    imgs: [
      { src: "img/q22-quince-anos-graduadas.png",
        cap: "Notice 'Lo del Momento — Quince años de graduadas' — Part 3b (Q22), June 2003 Comprehensive Spanish Regents",
        alt: "Boxed newspaper notice titled 'Lo del Momento — Quince años de graduadas.' It announces that next Saturday, July 16, the members of the graduating class of 1988 of the Colegio San José de Tarbes de La Florida will celebrate the fifteenth anniversary of their graduation. The celebration consists of a lunch at the restaurant Vecchio Molino, and group members can contact señora Leonor Sarmiento (telephone 77.03.91) at the school in La Florida." }
    ]
  },
  mujerHistoria: {
    imgs: [
      { src: "img/q23-mujer-en-la-historia.png",
        cap: "Letter to the editor 'LA MUJER EN LA HISTORIA' — Part 3b (Q23), June 2003 Comprehensive Spanish Regents",
        alt: "Boxed letter to the editor titled 'LA MUJER EN LA HISTORIA.' The writer says that in the May/June issue she read the excellent article 'El noble rival del Libertador' by Martha Gil-Montero, which mentions that the author has just finished a novel based on the life of Manuela Sáenz. The writer is very interested in the stories of women of the conquest and independence, especially doña Manuela, and would like to know if the novel is already published and where it can be bought." }
    ]
  },
  emy: {
    imgs: [
      { src: "img/q24-almacenes-emy-ad.png",
        cap: "Advertisement for 'Grandes almacenes Emy' — Part 3b (Q24), June 2003 Comprehensive Spanish Regents",
        alt: "Boxed advertisement for the department store 'Grandes almacenes Emy' inviting people to come to Emy and select from a great variety of clothing. It says they are wholesalers and distributors of the most prestigious brands, lists cash and wholesale-credit programs, four floors of clothing and accessories for ladies, gentlemen, and children with brands such as Nina Ricci, Christian Dior, Yves Saint Laurent, and Pierre Cardin, accepts major credit cards, has parking next to the building, and pays the ground-transportation ticket on a first wholesale purchase. It ends 'VISÍTENOS . . . SE CONVENCERÁ' and invites readers to apply for the 'EMY – BANPAIS' credit card." }
    ]
  },
  udla: {
    imgs: [
      { src: "img/q25-ubicacion-udla.png",
        cap: "Text 'UBICACION DE LA UDLA' — Part 3b (Q25), June 2003 Comprehensive Spanish Regents",
        alt: "Boxed informational text titled 'UBICACION DE LA UDLA.' It explains that the Universidad de las Américas-Puebla was built on the former hacienda of Santa Catarina Mártir in the municipality of San Andrés Cholula, State of Puebla. The campus, next to Cholula, the oldest city on the continent, is 15 minutes from Puebla and 120 kilometers from Mexico City. The whole zone is a very important archaeological site because of its pre-Hispanic relevance as a religious center, and colonial architecture commonly stands near pre-Hispanic construction — for example, the pyramid of Tlachihualtépetl supports the church of Nuestra Señora de los Remedios." }
    ]
  },
  familiaTV: {
    imgs: [
      { src: "img/q33-familia-television.png",
        cap: "— Bunny Hoest & John Reiner, “Laugh Parade,” Parade — picture for Part 4 writing task 33, June 2003 Comprehensive Spanish Regents",
        alt: "Black-and-white cartoon of a family sitting on a couch in front of a large television set. The father holds the remote control and points it at the TV, the mother sits at the other end, and between them a young boy looks upset, with his mouth open as if protesting." }
    ]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a: Listening, questions and answers in English (Q1-9) ----------
  { ...STIMULI.tdc1,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is the purpose of this announcement?",
    choices: [
      "to prevent childhood diseases",
      "to promote safe playgrounds for children",
      "to explain school entrance requirements",
      "to recall a historical event"
    ],
    answer: 0,
    back: "(1) to prevent childhood diseases — the announcement urges parents to vaccinate babies before age two to protect them against dangerous childhood illnesses (varicela, difteria, sarampión, tos ferina, tétano, paperas, rubéola, hepatitis B y polio)."
  },
  { ...STIMULI.tdc2,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is a requirement to apply for this job?",
    choices: [
      "The applicant must own a car and be able to drive.",
      "The applicant must be attending high school.",
      "The applicant must be currently employed.",
      "The applicant must speak both languages."
    ],
    answer: 3,
    back: "(4) The applicant must speak both languages. — The tutoring program helps children with their studies in English and Spanish, and the passage states directly: “Los voluntarios deben ser bilingües.”"
  },
  { ...STIMULI.tdc3,
    type: "mc",
    label: "Q3",
    stem: "Q3. For what occasion are the cyclists competing?",
    choices: [
      "a sightseeing tour",
      "a presidential election",
      "a national holiday",
      "a bicycle sale"
    ],
    answer: 2,
    back: "(3) a national holiday — the bicycle competition was organized “Para celebrar el Día de la Independencia” and closes a week of festivals commemorating Argentine independence."
  },
  { ...STIMULI.tdc4,
    type: "mc",
    label: "Q4",
    stem: "Q4. To whom is this advertisement directed?",
    choices: [
      "people who want to purchase discount travel packages",
      "people who want to work for an airline",
      "people who want to start their own business",
      "people who want to submit an article"
    ],
    answer: 1,
    back: "(2) people who want to work for an airline — the airline is looking for “gente simpática y trabajadora que quiera carrera en una línea aérea” and asks listeners to send a résumé."
  },
  { ...STIMULI.tdc5,
    type: "mc",
    label: "Q5",
    stem: "Q5. What activities are planned for children?",
    choices: [
      "preparing a special meal for them",
      "reading stories to them",
      "taking them to a park",
      "taking them to a zoo"
    ],
    answer: 1,
    back: "(2) reading stories to them — for the “Semana del Libro” the children's libraries become “Museos del cuento” and “escenarios para la narración de cuentos” (settings for storytelling)."
  },
  { ...STIMULI.tdc6,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is unusual about this Olympic competition?",
    choices: [
      "the location of the events",
      "the nationality of the participants",
      "the number of competitors",
      "the age of the athletes"
    ],
    answer: 3,
    back: "(4) the age of the athletes — Olympic gymnasts are “los más jóvenes de todos los participantes” and many have not yet turned 18."
  },
  { ...STIMULI.tdc7,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is being announced?",
    choices: [
      "Do not to let your luggage out of your sight.",
      "Allow extra time to board your flight.",
      "Try to help other passengers who may need assistance.",
      "Many flights are delayed due to the weather."
    ],
    answer: 0,
    back: "(1) Do not to let your luggage out of your sight. [choice reproduced as printed] — Travelers are warned “favor de tener cuidado de no dejar equipaje desatendido en ningún momento” and not to let strangers touch their bags."
  },
  { ...STIMULI.tdc8,
    type: "mc",
    label: "Q8",
    stem: "Q8. What did two young people from Madrid win?",
    choices: [
      "a trip to a Disney theme park",
      "a chance to go hiking in Spain",
      "free meals at a restaurant",
      "a study abroad program"
    ],
    answer: 0,
    back: "(1) a trip to a Disney theme park — the “Soñadores del Milenio” prize is “un viaje al parque de Walt Disney de Orlando,” where they will join two thousand other young winners."
  },
  { ...STIMULI.tdc9,
    type: "mc",
    label: "Q9",
    stem: "Q9. What instructions are being given to the people?",
    choices: [
      "Stop playing ball on the beach.",
      "Help the lifeguard.",
      "Put on suntan lotion.",
      "Leave the water immediately."
    ],
    answer: 3,
    back: "(4) Leave the water immediately. — “¡Todos afuera del agua! … ¡Salgan del agua rápidamente!” because a shark is approaching the beach."
  },

  // ---------- Part 2b: Listening, questions and answers in Spanish (Q10-15) ----------
  { ...STIMULI.tdc10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué puede hacer con este producto?",
    choices: [
      "limpiar su cocina",
      "cocinar todo tipo de comida",
      "adquirir muchas vitaminas",
      "bajar de peso"
    ],
    answer: 1,
    back: "(2) cocinar todo tipo de comida — con Chef Mérito “usted no tiene que saber cocinar”: ayuda a preparar cualquier plato, sea pollo, carne o pescado, con un sazonador para cada ocasión."
  },
  { ...STIMULI.tdc11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué sugiere este dentista?",
    choices: [
      "necesita cerrar la boca",
      "necesita visitar al médico",
      "necesita usar una nueva pasta de dientes",
      "necesita hacer otra cita"
    ],
    answer: 2,
    back: "(3) necesita usar una nueva pasta de dientes — el dentista dice: “Necesita comprar una nueva pasta de dientes que tiene un avanzado sistema de limpieza” con microcristales limpiadores."
  },
  { ...STIMULI.tdc12,
    type: "mc",
    label: "Q12",
    stem: "Q12. Según el anuncio, ¿por qué es especial este tipo de pizza?",
    choices: [
      "viene con un regalo gratuito",
      "está en venta por un tiempo limitado",
      "viene sin ingredientes encima",
      "tiene una variedad de tamaños"
    ],
    answer: 2,
    back: "(3) viene sin ingredientes encima — las bases para pizza Fígaro “vienen listas para ponerles todo el queso que quiera”: cada persona inventa su propia pizza y escoge sus ingredientes."
  },
  { ...STIMULI.tdc13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿De qué nos informa esta noticia?",
    choices: [
      "que es importante saber leer y escribir",
      "que tuvo éxito un método para aprender a tocar música",
      "que todos los bebés necesitan escuchar música clásica",
      "que la escuela ofrece clases de literatura"
    ],
    answer: 1,
    back: "(2) que tuvo éxito un método para aprender a tocar música — cuarenta y cinco adultos mayores aprendieron a tocar música con campanas usando letras, colores y números: “se ha logrado el objetivo.”"
  },
  { ...STIMULI.tdc14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué van a iniciar estos dos actores?",
    choices: [
      "un canal de televisión nuevo en Miami",
      "dos nuevas telenovelas",
      "un viaje para niños y padres",
      "unas clases y cursos"
    ],
    answer: 3,
    back: "(4) unas clases y cursos — Carlos Mata y Gabriela Rivero abrieron la Academia de Artes Escénicas con clases de actuación, danza, canto, elocución y modelo, además de enseñanza privada y cursos intensivos."
  },
  { ...STIMULI.tdc15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué descubrió el reportero en su viaje a Idaho?",
    choices: [
      "que había un festival vasco en Idaho",
      "que el idioma oficial en Boise es el vasco",
      "que había mucha gente de Idaho viajando a España",
      "que el alcalde de Boise nació en España"
    ],
    answer: 0,
    back: "(1) que había un festival vasco en Idaho — el reportero se enteró del festival Jaialdi en Boise, la celebración vasca más grande fuera del País Vasco en España."
  },

  // ---------- Part 3a: Reading passage, questions in Spanish (Q16-20) ----------
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cuál es la cosa más notable sobre Rita Moreno?",
    choices: [
      "nació en un lugar muy cerca de Hollywood",
      "solamente quiere cantar en español",
      "ha recibido una variedad de premios",
      "tiene interés en la conservación"
    ],
    answer: 2,
    back: "(3) ha recibido una variedad de premios — es una de las pocas artistas que ha ganado los cuatro premios más grandes del espectáculo: un Oscar, un Tony, dos Emmys y un Grammy."
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿A qué se debe la fama de esta artista?",
    choices: [
      "a su pura determinación",
      "a su buena suerte",
      "a su familia rica",
      "a su educación en la universidad"
    ],
    answer: 0,
    back: "(1) a su pura determinación — el pasaje dice que “debe su celebridad a su persistencia y perseverancia personal.”"
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Qué problema enfrentó ella al llegar a Nueva York?",
    choices: [
      "no podía alquilar un apartamento",
      "no tenía buena salud",
      "no ganaba el concurso",
      "no entendía bien la lengua"
    ],
    answer: 3,
    back: "(4) no entendía bien la lengua — su mamá la dejó en la escuela “sin saber la mínima palabra en inglés,” y Rita tuvo que trabajar con mucha energía para adaptarse a un nuevo idioma y cultura."
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Cuándo empezó su carrera profesional?",
    choices: [
      "cuando era una jovencita",
      "después de hacerse abuela",
      "en los años setenta",
      "cuando vivía en Puerto Rico"
    ],
    answer: 0,
    back: "(1) cuando era una jovencita — a los trece años debutó en Broadway con su participación en Skydrift, un drama de 1945."
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cuál es un deseo actual de Rita?",
    choices: [
      "ganar más dinero",
      "ayudar a la gente latina",
      "volver a su país de origen",
      "escribir su autobiografía"
    ],
    answer: 1,
    back: "(2) ayudar a la gente latina — hoy es una activista política a favor de las causas humanitarias, “especialmente en cuanto a los niños latinos que tienen desventajas.”"
  },

  // ---------- Part 3b: Realia, questions in English (Q21-25) ----------
  { ...STIMULI.miele,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is emphasized in this advertisement?",
    choices: [
      "a free set of dishes with the purchase of the product",
      "the product’s low price",
      "the features of this new product",
      "a decision to change the name of the product"
    ],
    answer: 2,
    back: "(3) the features of this new product — the ad highlights the dishwasher's advanced technology: “seis programas de lavado, dos temperaturas, mayor capacidad en el cesto superior,” quiet operation, and care for the environment."
  },
  { ...STIMULI.reunion,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is being celebrated?",
    choices: [
      "the reopening of a restaurant",
      "a class reunion",
      "a wedding anniversary",
      "a job promotion"
    ],
    answer: 1,
    back: "(2) a class reunion — the graduates of the class of 1988 of the Colegio San José de Tarbes “festejarán el décimo quinto aniversario de su graduación” with a lunch at the restaurant Vecchio Molino."
  },
  { ...STIMULI.mujerHistoria,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is the purpose of this letter to the editor?",
    choices: [
      "to inquire about the price of a subscription",
      "to contribute an article to the magazine",
      "to get information about a new book",
      "to complain about a recent article"
    ],
    answer: 2,
    back: "(3) to get information about a new book — the writer asks about the novel based on the life of Manuela Sáenz: “Quisiera saber si la novela ya está publicada y dónde se puede comprar.”"
  },
  { ...STIMULI.emy,
    type: "mc",
    label: "Q24",
    stem: "Q24. This announcement would appeal most to people who want to",
    choices: [
      "start a new business",
      "work in a department store",
      "learn about international finance",
      "purchase clothing"
    ],
    answer: 3,
    back: "(4) purchase clothing — the store invites shoppers: “VENGA A ‘EMY’ Y SELECCIONE DE NUESTRA GRAN VARIEDAD DE ROPA,” with four floors of clothing and accessories for ladies, gentlemen, and children."
  },
  { ...STIMULI.udla,
    type: "mc",
    label: "Q25",
    stem: "Q25. Which statement best describes this campus?",
    choices: [
      "It is in danger of closing.",
      "It is an example of modern architecture.",
      "It is located in the capital of Mexico.",
      "It is situated in an area rich in historical sites."
    ],
    answer: 3,
    back: "(4) It is situated in an area rich in historical sites. — “Toda la zona es un importantísimo sitio arqueológico” with pre-Hispanic relevance, and colonial architecture stands beside pre-Hispanic construction, like the pyramid of Tlachihualtépetl supporting the church of Nuestra Señora de los Remedios."
  },

  // ---------- Part 3c: Second reading passage, questions in English (Q26-30) ----------
  { ...STIMULI.acapulco,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which description of Acapulco is best supported by the passage?",
    choices: [
      "It is a city that contains both traditional and modern elements.",
      "It is a city that hosts international sports competitions.",
      "It is a city that remains isolated.",
      "It is a city that has a high unemployment rate."
    ],
    answer: 0,
    back: "(1) It is a city that contains both traditional and modern elements. — The passage contrasts “el Acapulco cosmopolita, americanizado” with “el Acapulco tradicional, donde la identidad mexicana se defiende de la modernización.”"
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "Q27",
    stem: "Q27. What can be seen at “la Quebrada de Acapulco”?",
    choices: [
      "a lighthouse",
      "a golf course",
      "a performance",
      "an island"
    ],
    answer: 2,
    back: "(3) a performance — “Este sitio es famoso por el espectáculo que presentan los ‘clavadistas’,” who dive into the sea from a height of 45 meters by torchlight."
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "Q28",
    stem: "Q28. What is a “clavadista”?",
    choices: [
      "a person who dives into water from high places",
      "a very large rock that is in the shape of a person",
      "a famous statue that is of historic significance",
      "a type of artist known for painting landscapes"
    ],
    answer: 0,
    back: "(1) a person who dives into water from high places — the clavadistas “saltan al agua desde una altura de 45 metros” at La Quebrada."
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "Q29",
    stem: "Q29. What made Acapulco a tourist attraction?",
    choices: [
      "the reputation of its historical museums",
      "its natural beauty and weather",
      "its favorable economic conditions",
      "the number of accessible ports"
    ],
    answer: 1,
    back: "(2) its natural beauty and weather — it almost never rains, temperatures are 27 degrees centigrade, and the region became one of the world's most important tourist areas “por sus grandes balnearios y su naturaleza maravillosa.”"
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "Q30",
    stem: "Q30. According to the passage, how does Acapulco differ from other beach resorts?",
    choices: [
      "It has an excellent transportation system.",
      "It has places especially designed for children.",
      "It has had to overcome environmental pollution.",
      "It has limited the number of hotels that can be built."
    ],
    answer: 1,
    back: "(2) It has places especially designed for children. — Unlike resorts that worry only about adults, “Acapulco ha pensado en los niños,” with sites created especially for them such as el Nuevo Cici and el Parque Papagayo."
  },

  // ---------- Part 4: Writing tasks (choose two of three on the actual exam) ----------
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, task 31). There are many activities or events of interest that occur at school and in your community. In Spanish, write an article for your school's foreign-language newspaper describing an interesting activity or event that is going to take place in your school or community. In your article you may want to include:

• what the activity or event is
• the reason for the activity or event
• where and when the activity or event will be held
• the cost to attend the activity or event
• how long the activity or event will last
• a description in some detail of the activity or event
• the main attraction of the activity or event
• how many people are expected to attend or participate in the activity or event
• your opinion as to why people should attend this activity or event

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Model 8-credit response (from the official scoring key):

Este año el club de español ha decidido organizar una actividad especial para los residentes de la comunidad y también para los estudiantes de la escuela. Vamos a ofrecer una feria cultural hispana en el parque atlético. La feria cultural consistirá en comidas típicas, juegos para niños, una presentación de bailes españoles, música latina y una serie de películas cortas para conocer algunos países.

La semana próxima va a tener lugar la primera feria cultural hispana en nuestra comunidad. ¡Ojalá que tengamos mucho éxito! Habrá más de doscientas personas y varios oficiales distinguidos. Hemos invitado al alcalde del pueblo, al director de la escuela y a reporteros de la prensa y de la tele.

En mi opinión nos divertiremos mucho.

Rubric: accomplish the task with clearly connected details, a logical beginning–middle–end, varied vocabulary, strong Checkpoint B grammar control, and at least 100 words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, task 32). A group of exchange students from a Spanish-speaking country will be passing through your community. In Spanish, write a letter to one of these students inviting him or her to visit your school. You may wish to include:

• what your classes are like
• what your language experience is
• what your favorite pastimes are
• a description of the area where you live
• when the student might be able to visit
• suggestions of possible activities
• a description of your school
• suggestions for meal arrangements

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Model 8-credit response (from the official scoring key):

Querida Justina,

Mi profesora dice que tu grupo de estudiantes de intercambio va a pasar unos días en nuestra comunidad. Me gustaría invitarte a visitar nuestra escuela y participar en algunas clases y actividades. Nuestras clases son muy interesantes y variadas. En estos momentos estoy en el tercer nivel de español. Creo que hablo bastante bien pero entiendo mucho más de lo que hablo.

Después de las clases tenemos muchas actividades tales como el baloncesto, el drama, el ajedrez, clases de canto, y reuniones de clubs. Yo participo en el club de español y en el club de drama. Quizás puedas acompañarme.

Cuando llegues, tú y yo podemos ir a la cafetería escolar y almorzar. Después de comer podemos ir a mis clases de la tarde.

Pienso que vamos a divertirnos mucho.

Hasta pronto
Mariela

Rubric: a friendly letter that satisfies the invitation purpose, with salutation and closing (both count toward the 100-word minimum), connected ideas, and varied vocabulary.`
  },
  { ...STIMULI.familiaTV,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, task 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Model 8-credit response (from the official scoring key):

Es sábado por la noche y la familia Sánchez está en casa. Acaban de cenar y ahora van a disfrutar de un programa especial en la televisión. Los padres de Pepito han decidido escoger un programa de Disney. Pero Pepito tiene otras ideas. El prefiere ver su programa favorito que está en otro canal a la misma hora que el programa de Disney. Si no puede ver su programa, él quiere ir a casa de sus amigos para jugar con videojuegos. Sus padres insisten en que se quede en casa para pasar tiempo con la familia porque mañana el Sr. Sánchez sale de viaje.

Pepito sigue insistiendo pero al final la mamá le da una cajita de palomitas y también le ofrece una taza de chocolate caliente.

Ah, Pepito está contento y toda la familia goza muchísimo de la película.

Rubric: a narrative (not a description or dialogue) clearly related to the picture, with a beginning, middle, and end, past/present/future tenses used appropriately, and at least 100 words.`
  },

  // ---------- Supplemental cards S1-S10 ----------
  { ...STIMULI.tdc2,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, how much free time must a volunteer have for the Victoria tutoring program?",
    choices: [
      "one weekend each month",
      "one hour each week",
      "one hour each day",
      "one full day each week"
    ],
    answer: 1,
    back: "(2) one hour each week — the program asks for bilingual volunteers who have “una hora libre cada semana” to help a child who is having difficulty with classes."
  },
  { ...STIMULI.tdc8,
    type: "mc",
    label: "S2",
    stem: "S2. According to the report, why did these young people win prizes from the “Soñadores del Milenio” program?",
    choices: [
      "for winning an athletic competition",
      "for getting excellent grades in school",
      "for their courage and generosity",
      "for writing essays about world peace"
    ],
    answer: 2,
    back: "(3) for their courage and generosity — the international program “da premios por el valor y la generosidad de los menores” from more than 100 countries."
  },
  { ...STIMULI.tdc10,
    type: "mc",
    label: "S3",
    stem: "S3. Según el anuncio, ¿qué tienen todos los productos Chef Mérito para garantizar el buen sabor y la calidad?",
    choices: [
      "recetas escritas por chefs famosos",
      "sellos protectores y fechas de expiración",
      "ingredientes orgánicos certificados",
      "cupones de descuento en cada frasco"
    ],
    answer: 1,
    back: "(2) sellos protectores y fechas de expiración — el anuncio dice: “Todos los productos Chef Mérito tienen sellos protectores y fechas de expiración para garantizar el buen sabor y calidad.”"
  },
  { ...STIMULI.tdc15,
    type: "mc",
    label: "S4",
    stem: "S4. Según la noticia, ¿con qué frecuencia tiene lugar ahora el festival Jaialdi?",
    choices: [
      "cada año",
      "dos veces al año",
      "cada cinco años",
      "cada diez años"
    ],
    answer: 2,
    back: "(3) cada cinco años — esta celebración vasca, organizada por primera vez en 1987, “ahora tiene lugar cada cinco años” en Boise, Idaho."
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "S5",
    stem: "S5. Según el pasaje, ¿qué hizo Rita Moreno para mantener a su familia cuando terminó su primera aventura teatral?",
    choices: [
      "volvió a Puerto Rico con su madre",
      "trabajó en bares cantando y bailando flamenco",
      "enseñó inglés en una escuela primaria",
      "escribió artículos para una revista"
    ],
    answer: 1,
    back: "(2) trabajó en bares cantando y bailando flamenco — su debut en Broadway, Skydrift, solo duró siete presentaciones, y “para poder mantener a su familia, Rita tuvo que trabajar en bares cantando y bailando flamenco.”"
  },
  { ...STIMULI.ritaMoreno,
    type: "mc",
    label: "S6",
    stem: "S6. Según el pasaje, ¿qué problema tuvo Rita Moreno con los estudios de Hollywood en aquellos días?",
    choices: [
      "No querían pagarle un buen salario.",
      "No le permitían cantar en sus películas.",
      "No la dejaban viajar a Puerto Rico.",
      "No sabían qué hacer con el talento hispano."
    ],
    answer: 3,
    back: "(4) No sabían qué hacer con el talento hispano. — Aunque ganó un Oscar por West Side Story en 1962, “en aquellos días los estudios de Hollywood no sabían qué hacer con el talento hispano,” y ella luchó por romper los estereotipos."
  },
  { ...STIMULI.miele,
    type: "mc",
    label: "S7",
    stem: "S7. According to the advertisement, how many washing programs does the new Miele Oceanis dishwasher offer?",
    choices: [
      "four",
      "five",
      "six",
      "eight"
    ],
    answer: 2,
    back: "(3) six — the ad lists “seis programas de lavado, dos temperaturas, mayor capacidad en el cesto superior” among the dishwasher's features."
  },
  { ...STIMULI.udla,
    type: "mc",
    label: "S8",
    stem: "S8. According to this text, how far is the Universidad de las Américas-Puebla campus from Mexico City?",
    choices: [
      "15 kilometers",
      "50 kilometers",
      "120 kilometers",
      "200 kilometers"
    ],
    answer: 2,
    back: "(3) 120 kilometers — the campus “está a 120 kilómetros de la ciudad de México” and is also just 15 minutes from Puebla, the state capital."
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "S9",
    stem: "S9. According to the passage, at what time does the “clavadista” show at La Quebrada begin?",
    choices: [
      "at 8:00 in the morning",
      "at noon",
      "at 6:00 in the evening",
      "at 10:00 at night"
    ],
    answer: 3,
    back: "(4) at 10:00 at night — “Este espectáculo, que empieza a las 10:00 de la noche, resulta emocionante porque el ‘clavadista’ salta al mar, que se ilumina solamente por la luz de una antorcha.”"
  },
  { ...STIMULI.acapulco,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, how long is the flight from Mexico City to Acapulco?",
    choices: [
      "50 minutes",
      "90 minutes",
      "two hours",
      "three hours"
    ],
    answer: 0,
    back: "(1) 50 minutes — the passage opens: “Sólo 50 minutos de vuelo separan la Ciudad de México del mar amigable de Acapulco.”"
  }
];
