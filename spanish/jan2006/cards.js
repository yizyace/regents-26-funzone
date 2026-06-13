// January 2006 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key / rating guide), raw-docs/nysedregents.org/spanish/jan2006/.
// Printed quirks kept verbatim (verified against page renders): "Ordónez" in the
// exam Q9 stem and the TDC spoken question (the TDC passage itself prints
// "Ordóñez"), "entitulado" (TDC item 13), "Franciso Jara" and "compañía
// discógrafa" (Part 3c passage), and in the official Part 4 sample responses
// "sobretodo" (Q31), "famila", "no entiende", "muchísma" and "traerla" (Q33).

const TDC_SRC = "Teacher Dictation Copy, January 2006 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to the radio and hear this announcement about a special issue of a magazine:

[La maestra lee] Sus niños y usted, edición especializada de BUENHOGAR, le ofrece importantes temas que tienen que ver con la mejor educación de los hijos y las actitudes que deben ser asumidas por sus padres. Los artículos incluyen “Salud infantil: señales de alarma,” “¿Es su niño apático?,” “Cómo bañar al bebé,”…y mucho más. Sus niños y usted ya está a la venta. ¡Cómprela hoy!`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are watching “Univisión”, a Spanish television channel, when you hear this announcement:

[La maestra lee] Si la pasión futbolista le corre por sus venas y el estar en el estadio es lo que le emociona, nuestro banco le ofrece la tarjeta de crédito ideal. Su foto que aparece en la tarjeta, le ofrece más seguridad. Sólo Ud. la podrá usar. Ahora Ud. puede comprar los boletos de los partidos de su equipo favorito sin tener que preocuparse. Además, puede transferir sus deudas de alto interés y pagar un interés más bajo. Llámenos, hoy mismo, o para más información, visite la sucursal más cercana de su banco.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] At the beginning of your Spanish class in Spain, your teacher reads this announcement:

[La maestra lee] Quiero leerles este anuncio importante que acabo de recibir. ¿Quieren Uds. practicar inglés? Habrá un grupo de estudiantes que puede hablar con Uds. y ayudarles a estudiar para sus exámenes de inglés sin ningún costo. El grupo se reunirá en el jardín enfrente de la Facultad de Medicina este miércoles a las tres de la tarde. Se promete que será una experiencia muy buena y provechosa.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] A friend has invited you to a celebration. While you are there you hear:

[La maestra lee] Atención, amigos, compañeros, hermanos, padres e hijos. Quisiera tomar esta oportunidad para festejar a los novios aquí esta noche. Les deseo un matrimonio feliz como el mío. Que pasen una luna de miel maravillosa y que tengan una vida llena de salud, alegría y buena fortuna.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are watching a Spanish cable television program and hear this announcement:

[La maestra lee] El Ballet Hispánico, fundado en 1970 por la bailarina coreógrafa venezolana Tina Ramírez, es una compañía de baile y un centro de danza. Aquí los jóvenes sin recursos económicos pueden desarrollar su potencial artístico. Su fundadora acaba de anunciar que, para los alumnos que necesiten ayuda financiera, su organización cuenta con $25,000 para dar becas. El Ballet Hispánico ha prometido continuar reuniendo fondos para que estas becas estén disponibles por muchos años más. El grupo ofrece clases gratis en las escuelas públicas y presenta conciertos gratuitos en centros y parques de muchos barrios de la nación.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are listening to the local news and events in Guayaquil, Ecuador, and you hear this item:

[La maestra lee] Y ahora las noticias culturales... Un dragón de 165 metros de largo no cabe en sólo un salón. Por eso, tuvieron que usar tres salas de exposición para instalar la enorme obra de Don Ed Hardy. Con el título de Dos mil dragones, esta pintura grandísima conmemora el año del dragón según el zodíaco asiático. Para crear la obra, Hardy tomó un rollo de fibra plástica de 165 metros de largo por 1,65 metros de alto. Ud. podrá ver la exposición en el Museo Municipal, hasta el veinte y ocho de este mes entre las nueve y las dieciocho horas. La entrada es gratis.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are in the lobby of a hotel in Spain and overhear another tourist say to the manager:

[La maestra lee] Me gustaría hablar con el encargado de los teléfonos de las habitaciones de este hotel, ya que quiero llamar a los Estados Unidos y no hay manera de conectar. Sé que hay que marcar el código internacional y otros números. La verdad es que no entiendo. No sé suficiente español. Por favor, ¿puede ayudarme?`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are in Buenos Aires and hear this announcement for an upcoming event:

[La maestra lee] El Ateneo Popular organizará un concurso de pintura, cuyo tema será el paisaje urbano. Los participantes deberán presentarse a las 9 de la mañana en la sala Benito Pérez Galdós. Allí tendrán los materiales necesarios para pintar un cuadro en sólo dos horas. El jurado ofrecerá tres premios de 500, 300 y 200 pesos para los ganadores. Para más información llamar al Sr. Suárez en el ateneo.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are listening to the radio and you hear this report:

[La maestra lee] Nacido en la Habana, Cuba, Ray Ordóñez siempre se ha sentido orgulloso de sus raíces latinas en todos los aspectos. El pelotero Ordóñez les pidió a los Mets de Nueva York, su club, que le pusieran en la espalda de su camiseta la letra eñe para escribir su apellido como verdaderamente se escribe en español. La insistencia del jugador resultó en que ahora tiene la eñe escrita en la espalda de la camiseta.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are listening to your answering machine where your host father from Argentina has left you a message concerning your impending trip to Buenos Aires:

[La maestra lee] Me alegra mucho que vengas a Buenos Aires pronto. Prepárate, pues, para el domingo. Cuando llegues, vamos a una gran reunión familiar. La fiesta honra el cumpleaños de tu tía Luisa que va a cumplir sesenta años. Durará todo el día y conocerás a tus nuevos hermanos, primos y otros parientes. No te preocupes en traer un regalo, tu presencia es lo que nos importa. Si quieres traer algo para la tía Luisa, te sugiero una buena novela de misterio.

Bueno, BUEN VIAJE y FELIZ LLEGADA a Buenos Aires. Nos vemos pronto…….. Papá Julio`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to a program on the radio. You hear:

[La maestra lee] Juan José Lázaro comenzó a practicar el piano a la edad de tres años y antes de aprender el alfabeto ya sabía leer las notas musicales. Toca con la maestría de una persona de muchos años de experiencia. Su primer concierto fue a los siete años. Dice que su sueño es cambiar el mundo a través de la música. Su compositor favorito es Ludwig van Beethoven. Ahora él está preparando un recital para demostrar su talento.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are an exchange student in Peru. Your friend leaves you this telephone message:

[La maestra lee] Hola. Quisiera pedirte un favor. Tú tienes más experiencia que yo en este país. Quiero llevar a mi “familia” peruana a cenar en un buen restaurante. Mis padres me enviaron un cheque pero necesito ir a un banco y cambiarlo por soles peruanos para poder pagar la cena. ¿Puedes acompañarme a un banco? Gracias.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While listening to the radio in Mexico, you hear this information about a new book:

[La maestra lee] En el siglo XXI el fanatismo por los deportes forma parte de la cultura. Es la vocación y la práctica de millones de personas. Por eso, el libro entitulado, Balón a tierra, primer tomo de la Crónica del fútbol mexicano, resulta indispensable para saber más de los equipos y de las estrellas futbolistas de los años 1896 a 1932.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are sitting in the waiting room at the doctor’s office in Bogotá, Colombia. The nurse says to you:

[La maestra lee] Lo siento pero hace diez minutos el médico recibió una llamada urgente del hospital. Es necesario que yo cambie las citas de hoy. Tal vez Ud. pueda regresar este viernes a las dos. Llámenos mañana para confirmar la nueva cita para el viernes. Espero que esto no le cause mucha inconveniencia.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are visiting a family in Chile. Your host is telling you about a hike they took:

[La maestra lee] Fue una caminata inolvidable. Al empezar a caminar vimos unas montañas verdes con muchos árboles magníficos. Nos sentamos en un sitio muy pintoresco, pero de momento empezamos a sentir mucho calor. Era un fuego que se extendía por todo el bosque. El incendio cubrió rápidamente el bosque y todos los animales grandes y pequeños trataban de escapar ante el peligro. Nosotros sentimos mucho miedo. Por suerte, dentro de unos minutos llegaron los bomberos.`,
    psource: TDC_SRC
  },
  botero: {
    passage: `El Artista, Fernando Botero

Se le considera a Fernando Botero uno de los pintores y escultores contemporáneos más importantes. Nació y creció en Medellín, ciudad colombiana que en los años 50 no era centro artístico ni cultural. En Medellín se hablaba mucho de arte pero se veía poco, porque no había museos. Las primeras obras que Fernando Botero vio eran cuadros de iglesias y artefactos precolombinos. Un día, por casualidad, encontró un librito de la historia del arte moderno en el que había reproducciones de dibujos de Picasso, Matisse y Cezanne. Así Botero descubrió el arte y este pequeño libro lo inspiró a ser pintor aunque no había visto nunca una pintura original en persona.

Fernando Botero empezó a trabajar cuando tenía 16 años. Siempre había tenido el mismo placer, la misma pasión y la misma necesidad de crear. Era un pintor conocido en su país cuando tenía 21 años. Disfrutaba de una reputación pequeña. Vendió varios cuadros con escenas de la vida cotidiana, muy coloridos y un poco primitivos.

Su primer viaje fue a Madrid. Decidió ir allí porque se hablaba español y no tendría dificultad con comunicarse. Más importante era poder visitar el famoso Museo del Prado. Allí Botero vio las obras de los grandes maestros de la pintura que él copió para aprender la técnica.

Viajó por otros países de Europa también. Pasó mucho tiempo en el gran museo de París, el Louvre, fascinado con las esculturas antiguas. Después fue a Italia para estudiar los frescos de los artistas italianos. Entonces regresó a Colombia, donde hizo una exposición de pinturas que no tuvo éxito. Allá le tocó sobrevivir. Fue vendedor y artista gráfico para diarios a los que les vendió algunas ilustraciones. En 1961 el Museo de Arte Moderno de Nueva York le compró a Botero el “Retrato de Mona Lisa a los 12 años.” El periódico New York Times reprodujo el cuadro en una de sus páginas. Botero entonces fue descubierto por el público y comenzó a vender sus pinturas. La crítica de aquella época, sobre todo en Nueva York, sólo se interesaba en el arte abstracto y el arte de Botero era figurativo. Desde entonces, Fernando Botero se sentía único porque su arte era difícil de clasificar.

Botero nunca usa modelos. Trabaja sólo con el lienzo frente a él. Para inspirarse usa su memoria e imaginación y esto le ayuda a crear sus formidables pinturas y esculturas. Con esta inspiración Botero intenta sugerir el placer, la plenitud, la abundancia y la expansión.

Hace a sus figuras artísticas con dimensiones enormes. Engorda a sus personajes no para reírse de ellos sino para exaltar su belleza. La gordura no le interesa por sí misma, sino por su cualidad original y personal. Esta es su “manera” y lo que hace que su estilo sea reconocido de inmediato—estilo que lo ha hecho célebre en todo el mundo.

Según Botero, a las personas gruesas se les percibe como amantes de la vida, simpáticas, y amables. Para él la gente delgada no provoca la misma reacción. Botero piensa que lo gordo da tranquilidad.

A partir del año 1973 Botero pasó de la pintura a la escultura porque quería crear los volúmenes y las formas de sus cuadros en lo concreto, en el espacio real. La ironía en sus esculturas y sus pinturas está en lo que observa el espectador. A menudo se puede apreciar el buen humor, pero sus personajes no son víctimas de ese humor: son inmóviles, pero nunca ridículos. Según Botero, el artista en nuestra sociedad hace el papel de contribuir a la belleza, a la cultura y al placer. El arte no tiene que ver con la realidad.

Ahora Fernando Botero vive parte del tiempo en Italia pero también en Nueva York, París y Mónaco. No regresa a menudo a Medellín pero sí ama a Colombia con pasión y quiso darle un regalo a su país natal. Por eso, Botero decidió dar a Medellín su colección de obras de arte que adquirió durante 25 años. Su deseo sería morir allí con el pincel en la mano, trabajando en su último cuadro, en la casa que conoció cuando era niño—una casa fresca, rodeada de corredores, con el olor de los naranjos en flor viniendo del patio.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 25, 2006"
  },
  articulo: {
    imgs: [
      { src: "img/q21-articulo-pelo.png",
        cap: "Reading selection for question 21, Comprehensive Examination in Spanish, January 2006",
        alt: "Boxed first-person magazine article in Spanish. As on any other day, the writer got up and went to bathe, but was so tired from studying all the previous night that she was not paying much attention. She washed her hair, and just when she finished drying it — what a horror! — she screamed because it had turned an impressive orange color. It turned out her little brother had put peroxide in her shampoo bottle as a joke. Since it was already very late for school, she had to put on a cap, but the color still showed a lot. That day she was the center of everyone's attention and will never forget it." }
    ]
  },
  peru: {
    imgs: [
      { src: "img/q22-peru-clasico.png",
        cap: "Advertisement for question 22, Comprehensive Examination in Spanish, January 2006",
        alt: "Boxed travel advertisement titled Circuito Perú Clásico 9 días / 7 noches. Price per person in a double room in three- or four-star hotels, valid January 10 to March 29. The 1,754-euro price includes: transfers, transportation during the itinerary, daily breakfast, two lunches and two dinners, visits listed in the brochure and a bilingual local guide, tourist-class flight with Iberia, departures from Madrid or Barcelona on Mondays, Thursdays and Saturdays; airport taxes not included. Ask about prices for other dates and departures from other cities. Request the brochure Ven a Perú." }
    ]
  },
  mdo: {
    imgs: [
      { src: "img/q23-mdo-cambia.png",
        cap: "Magazine article for question 23, Comprehensive Examination in Spanish, January 2006",
        alt: "Boxed magazine article titled MDO VUELVE A CAMBIAR. A good while has passed without news of the boys of MDO. The reason is that Abel, Didier, Pablo and Anthony no longer belong to the group, and in days the new lineup will be announced, which may even change its name. Meanwhile, the idols' plans: Didier is producing the new Rabanas CD and wants to launch a solo career mixing pop and tropical; Abel gives dance workshops in different countries and prepares solo songs with Angel and Tommy Torres; Pablo will go solo with an independent label; Anthony will continue hosting on TV. In the preselection for the new MDO there are three Puerto Ricans, two Mexicans, two Venezuelans, a Peruvian and an Argentine who lives in Brazil; only four will remain, and they should enter the recording studio soon." }
    ]
  },
  parador: {
    imgs: [
      { src: "img/q24-parador-zamora.png",
        cap: "Advertisement for question 24, Comprehensive Examination in Spanish, January 2006",
        alt: "Boxed advertisement titled PARADORES with an engraving of a renaissance courtyard, then ZAMORA four stars, Plza. Viriato 5, Telf. (980) 51 44 97. The medieval aroma given off by suits of armor, noble tapestries and attractive beds connects with the renaissance style of its magnificent patio, corridors and heraldic shields. From its garden with a pool you can enjoy a beautiful view of the Duero river as it passes the capital. Remodeled and enlarged, this Parador now has just over fifty rooms and modern, attractive decor. In its spacious lounges and dining rooms you can savor the famous Castilian roasts, veal, several cod specialties, traditional Zamoran sweets, and Denominación de Origen Queso Zamorano cheeses." }
    ]
  },
  carta: {
    imgs: [
      { src: "img/q25-carta-felicitacion.png",
        cap: "Letter for question 25, Comprehensive Examination in Spanish, January 2006",
        alt: "Boxed letter addressed to Dr. Andrés Mata Osorio, editor of the daily EL UNIVERSAL, Mexico City. My most sincere words of congratulations for the National Journalism Prize awarded to EL UNIVERSAL this year. I consider that the paper you lead is making a great effort to adapt to the new times, to produce modern, serious and responsible communication, and to appreciate the journalistic task in the full dimension of its importance for society. I extend these congratulations to Luis Alfredo Chaves, John Müller, Pedro Llorens and the whole journalistic team that works day after day at EL UNIVERSAL." }
    ]
  },
  mariachi: {
    passage: `En los últimos años la música mariachi se ha convertido en uno de los símbolos culturales más populares de México en los Estados Unidos.

El Mariachi Internacional, uno de los grupos mariachi más prestigiosos del mundo, es un producto de un comerciante que supo usar su dinero para promover el arte. Francisco Jara es un próspero hombre de negocios que ha hecho su fortuna vendiendo terrenos y casas. Dentro de 13 años su éxito en esta profesión lo ha convertido en uno de los hispanos más ricos de los Estados Unidos y, por supuesto, en uno de los hombres más poderosos en varias ciudades californianas. Sin embargo, su mayor orgullo y pasión es la música. Jara es director del Mariachi Internacional, un grupo que está compitiendo con el popular Mariachi del Sol de México. En su mansión en San Bernardino, Jara ha invitado a varios de sus amigos para relajarse este bonito día californiano. Con visible satisfacción por lo que artísticamente están logrando sus muchachos en el grupo, comentó: “Este mariachi ha tenido mucho éxito en los diferentes lugares donde ha actuado, porque no es solamente acompañante para varios artistas célebres, sino que presenta también su propio show con un repertorio muy variado.”

El grupo comienza a tocar rancheras y boleros poniéndole el clima adecuado a esta pequeña reunión de amigos. Y para hacer la fiesta completa, Francisco Jara hace preparar un almuerzo muy a la mexicana.

Jara ha sabido hacerse parte del negocio de la música. No solamente es propietario del Mariachi Internacional, sino que también del mariachi Dorados de Villa y una compañía discógrafa donde ha grabado la música de los dos grupos. En una de las recientes producciones, Jara combinó el Mariachi Internacional y Dorados de Villa para interpretar canciones que eran las favoritas de su padre en un álbum titulado En memoria de mi padre, que es también el título de la primera canción.

Al hablar sobre cómo ha sido el desarrollo de la música mexicana en esta región de California en los últimos 10 años, Jara dice:

“Siempre es bien recibida, pero considero que cada vez aumenta más el número de personas de diversas culturas a quienes les gusta esta música. He observado por años, la música mariachi no solamente en mis restaurantes (los restaurantes Pancho Villa), sino también en mis viajes por otros continentes. En mis restaurantes, 60% de los que asisten al show de música mexicana son latinos, pero el resto son anglosajones, afro-americanos, asiáticos y de otras razas. El tener suficiente dinero para mis mariachis (que tienen docenas de diferentes trajes tradicionales por cada miembro del grupo) y el interesarme personalmente en la música típica de México, es mi gran placer, lo que me gusta hacer en mi tiempo libre, pero comprar y vender casas, edificios y terrenos es lo que más dinero me hace y es lo que me permite mantener mis intereses personales en la música.”

El feliz padre de familia tiene cuatro hijas y tres hijos. Tuvo un origen humilde y está orgulloso de su origen. Lo cuenta así: “Nací en la colonia Pancho Villa, de Tijuana, México, el 6 de enero de 1958. A los 8 años de edad mi primer trabajo era vender periódicos. Luego en Los Ángeles me hice vendedor. Después, de adolescente trabajé en restaurantes como mesero. Allí me interesé en la música mariachi y en el negocio basado en la comida mexicana.”

Franciso Jara es otro ejemplo de un hombre de familia feliz que ha dedicado parte de su fortuna para mantener viva la música de su México querido.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 25, 2006"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-dibujo-cocina.png",
        cap: "Picture for writing task 33 (— Bunny Hoest & John Reiner, “Laugh Parade,” Parade, adapted), Comprehensive Examination in Spanish, January 2006",
        alt: "Line drawing of a dining room. A woman stands at the table talking while stirring a mixing bowl she holds in one arm. A boy and a man sit at the table, which is set with a tablecloth, empty plates, and a platter, both looking up at her. Empty chairs stand around the table." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, questions and answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. Who would be most interested in the special issue of this magazine?",
    choices: [
      "homeowners",
      "people interested in fashion",
      "families with children",
      "people who are planning weddings"
    ],
    answer: 2,
    back: "(3) families with children — the special issue Sus niños y usted covers \"la mejor educación de los hijos y las actitudes que deben ser asumidas por sus padres,\" with articles on children's health and bathing the baby."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What does this bank offer in this advertisement?",
    choices: [
      "a free ticket to a soccer game",
      "a more secure credit card",
      "a free digital camera",
      "a safe-deposit box"
    ],
    answer: 1,
    back: "(2) a more secure credit card — \"Su foto que aparece en la tarjeta, le ofrece más seguridad. Sólo Ud. la podrá usar.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. To whom is this announcement directed?",
    choices: [
      "students who want to study medicine",
      "students who are interested in gardening",
      "students who are applying for a scholarship",
      "students who want to improve their English skills"
    ],
    answer: 3,
    back: "(4) students who want to improve their English skills — \"¿Quieren Uds. practicar inglés?\": a group of students will talk with them and help them study for their English exams at no cost."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What type of celebration is taking place?",
    choices: [
      "a wedding",
      "a birthday party",
      "an award ceremony",
      "a graduation"
    ],
    answer: 0,
    back: "(1) a wedding — the toast is \"para festejar a los novios,\" wishing them a happy marriage and \"una luna de miel maravillosa.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What was announced about the Ballet Hispánico?",
    choices: [
      "It no longer will provide private lessons.",
      "It is relocating its headquarters.",
      "It is offering financial assistance.",
      "It has changed the schedule."
    ],
    answer: 2,
    back: "(3) It is offering financial assistance — its founder just announced that for students who need financial help \"su organización cuenta con $25,000 para dar becas.\""
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is unique about this painting?",
    choices: [
      "its origin",
      "its size",
      "its cost",
      "its age"
    ],
    answer: 1,
    back: "(2) its size — the dragon is \"de 165 metros de largo,\" too big for one room: three exhibition halls were needed to install the enormous work."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What does this person want?",
    choices: [
      "a different room",
      "a local newspaper",
      "information on places of interest to see",
      "assistance in making a long-distance call"
    ],
    answer: 3,
    back: "(4) assistance in making a long-distance call — \"quiero llamar a los Estados Unidos y no hay manera de conectar… Por favor, ¿puede ayudarme?\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is being announced?",
    choices: [
      "a contest",
      "a tour of the city",
      "a community picnic",
      "a concert"
    ],
    answer: 0,
    back: "(1) a contest — \"El Ateneo Popular organizará un concurso de pintura,\" with three prizes of 500, 300 and 200 pesos."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What did Ray Ordónez want?",
    choices: [
      "to return to his homeland",
      "to have his name spelled correctly on his shirt",
      "to record a song in Spanish about his life",
      "to manage his own team"
    ],
    answer: 1,
    back: "(2) to have his name spelled correctly on his shirt — he asked the Mets to put the letter eñe on the back of his jersey \"para escribir su apellido como verdaderamente se escribe en español.\" (The exam stem prints \"Ordónez\"; the dictation passage prints \"Ordóñez.\")"
  },
  // ----- Part 2b: Listening, questions and answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué regalo le debes traer a tu tía Luisa?",
    choices: [
      "un disco compacto",
      "una foto de tu familia",
      "un libro",
      "unas flores"
    ],
    answer: 2,
    back: "(3) un libro — Papá Julio dice: \"Si quieres traer algo para la tía Luisa, te sugiero una buena novela de misterio.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Por qué es especial Juan José Lázaro?",
    choices: [
      "Terminó la escuela primaria a los siete años.",
      "Empezó a enseñar a una edad muy joven.",
      "Empezó a tocar el piano a los 3 años.",
      "Escribió un libro sobre Ludwig van Beethoven a los diez años."
    ],
    answer: 2,
    back: "(3) Empezó a tocar el piano a los 3 años — \"comenzó a practicar el piano a la edad de tres años y antes de aprender el alfabeto ya sabía leer las notas musicales.\""
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué desea tu amigo?",
    choices: [
      "que tú vayas al banco con él",
      "que tú lo acompañes al cine",
      "que tú le ayudes a hacer reservaciones",
      "que tú le ayudes a preparar una cena"
    ],
    answer: 0,
    back: "(1) que tú vayas al banco con él — necesita cambiar un cheque por soles peruanos para pagar la cena: \"¿Puedes acompañarme a un banco?\""
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿De qué trata el nuevo libro que se va a publicar?",
    choices: [
      "la evolución del cine mexicano",
      "la situación económica de los trabajadores",
      "la importancia de la religión en la cultura",
      "la historia de un deporte popular"
    ],
    answer: 3,
    back: "(4) la historia de un deporte popular — Balón a tierra es el \"primer tomo de la Crónica del fútbol mexicano,\" sobre los equipos y las estrellas futbolistas de 1896 a 1932. (La errata \"entitulado\" es del texto impreso.)"
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué tiene que hacer Ud.?",
    choices: [
      "ir a un especialista",
      "ir otro día",
      "tomar la medicina",
      "entrar en la oficina"
    ],
    answer: 1,
    back: "(2) ir otro día — el médico recibió una llamada urgente y la enfermera cambia las citas: \"Tal vez Ud. pueda regresar este viernes a las dos. Llámenos mañana para confirmar la nueva cita.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Por qué tenían miedo estas personas?",
    choices: [
      "Hubo un fuego.",
      "Estaban perdidos.",
      "Alguien se rompió una pierna.",
      "Empezó una tormenta peligrosa."
    ],
    answer: 0,
    back: "(1) Hubo un fuego — \"Era un fuego que se extendía por todo el bosque. El incendio cubrió rápidamente el bosque\" y los animales trataban de escapar."
  },
  // ----- Part 3a: Reading, long passage, questions in Spanish (Q16-20) -----
  { ...STIMULI.botero,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Por qué decidió ser artista Fernando Botero?",
    choices: [
      "Estudió historia del arte en la escuela secundaria.",
      "Quería ser pintor como su padre.",
      "Vio reproducciones de obras de arte en un libro.",
      "Conoció a Pablo Picasso en 1950."
    ],
    answer: 2,
    back: "(3) Vio reproducciones de obras de arte en un libro — encontró por casualidad \"un librito de la historia del arte moderno\" con dibujos de Picasso, Matisse y Cezanne, y \"este pequeño libro lo inspiró a ser pintor.\""
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "Q17",
    stem: "Q17. Botero fue a Madrid principalmente para",
    choices: [
      "estar con su familia",
      "visitar el gran museo de arte",
      "vender sus cuadros en las calles",
      "trabajar para el gobierno"
    ],
    answer: 1,
    back: "(2) visitar el gran museo de arte — \"Más importante era poder visitar el famoso Museo del Prado,\" donde copió las obras de los grandes maestros para aprender la técnica."
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Cuándo empezó la gente a conocer el arte de Botero?",
    choices: [
      "cuando una foto de su cuadro apareció en el periódico",
      "cuando comenzó a regalar sus cuadros",
      "cuando tuvo una exhibición en una iglesia",
      "cuando recibió un premio internacional"
    ],
    answer: 0,
    back: "(1) cuando una foto de su cuadro apareció en el periódico — el New York Times reprodujo el \"Retrato de Mona Lisa a los 12 años\" y \"Botero entonces fue descubierto por el público y comenzó a vender sus pinturas.\""
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "Q19",
    stem: "Q19. Según la selección, ¿qué usa Botero como inspiración?",
    choices: [
      "las montañas de Medellín",
      "los edificios religiosos",
      "los recuerdos y la imaginación",
      "las fotos de familiares y amigos"
    ],
    answer: 2,
    back: "(3) los recuerdos y la imaginación — Botero nunca usa modelos: \"Para inspirarse usa su memoria e imaginación y esto le ayuda a crear sus formidables pinturas y esculturas.\""
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cómo demuestra Botero su amor por Colombia?",
    choices: [
      "Regaló muchas pinturas a su país.",
      "Pintó cuadros de todos los presidentes colombianos.",
      "Contribuyó mucho dinero a causas humanitarias.",
      "Vivió allí toda su vida."
    ],
    answer: 0,
    back: "(1) Regaló muchas pinturas a su país — quiso darle un regalo a su país natal: \"Botero decidió dar a Medellín su colección de obras de arte que adquirió durante 25 años.\""
  },
  // ----- Part 3b: Realia, questions in English (Q21-25) -----
  { ...STIMULI.articulo,
    type: "mc",
    label: "Q21",
    stem: "Q21. What problem did the writer of this article have?",
    choices: [
      "She studied for the wrong exam.",
      "She colored her hair by mistake.",
      "She lost her favorite hat.",
      "She forgot to go shopping."
    ],
    answer: 1,
    back: "(2) She colored her hair by mistake — her little brother had put peroxide in her shampoo bottle as a joke, and her hair turned \"un color anaranjado impresionante.\""
  },
  { ...STIMULI.peru,
    type: "mc",
    label: "Q22",
    stem: "Q22. What is included in the cost of the trip?",
    choices: [
      "a local guide",
      "airport taxes",
      "movie tickets",
      "a single room"
    ],
    answer: 0,
    back: "(1) a local guide — the 1,754-euro price includes \"visitas incluídas en folleto y guía local bilingüe\"; airport taxes are expressly NOT included (\"tarifas aéreas no incluídas\") and the room is double, not single."
  },
  { ...STIMULI.mdo,
    type: "mc",
    label: "Q23",
    stem: "Q23. According to this article, what has happened with the group MDO?",
    choices: [
      "They have just purchased their own recording studio.",
      "The group has released a new album in English.",
      "They have decided to take dance lessons.",
      "The original members have left the group."
    ],
    answer: 3,
    back: "(4) The original members have left the group — \"Abel, Didier, Pablo y Anthony ya no pertenecen al grupo,\" and a new lineup is about to be announced."
  },
  { ...STIMULI.parador,
    type: "mc",
    label: "Q24",
    stem: "Q24. What is being offered?",
    choices: [
      "a trip around the world",
      "a place to stay overnight",
      "an opportunity for employment",
      "a book about modern art"
    ],
    answer: 1,
    back: "(2) a place to stay overnight — the ad is for the Parador de Zamora, a hotel with \"algo más de medio centenar de habitaciones,\" lounges and dining rooms."
  },
  { ...STIMULI.carta,
    type: "mc",
    label: "Q25",
    stem: "Q25. Why was this letter written?",
    choices: [
      "to help a failing business",
      "to offer an apology",
      "to praise a job well done",
      "to give advice for a new column"
    ],
    answer: 2,
    back: "(3) to praise a job well done — \"Mis más sinceras palabras de felicitación por el Premio Nacional de Periodismo que le fue otorgado a EL UNIVERSAL este año,\" extending congratulations to the whole journalistic team."
  },
  // ----- Part 3c: Reading, second passage, questions in English (Q26-30) -----
  { ...STIMULI.mariachi,
    type: "mc",
    label: "Q26",
    stem: "Q26. How does Mr. Jara earn a living?",
    choices: [
      "selling land and houses",
      "translating poems and novels",
      "competing in athletic events",
      "teaching Spanish"
    ],
    answer: 0,
    back: "(1) selling land and houses — Francisco Jara \"ha hecho su fortuna vendiendo terrenos y casas\"; buying and selling real estate \"es lo que más dinero me hace.\""
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "Q27",
    stem: "Q27. What took place at the mansion in San Bernardino?",
    choices: [
      "a family reunion",
      "a birthday party",
      "a gathering of friends",
      "a wedding celebration"
    ],
    answer: 2,
    back: "(3) a gathering of friends — \"Jara ha invitado a varios de sus amigos para relajarse,\" and the group plays rancheras and boleros at \"esta pequeña reunión de amigos.\""
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "Q28",
    stem: "Q28. En memoria de mi padre is the name of a",
    choices: [
      "song",
      "restaurant",
      "television program",
      "financial company"
    ],
    answer: 0,
    back: "(1) song — the album titled En memoria de mi padre takes its name from \"el título de la primera canción.\""
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "Q29",
    stem: "Q29. What was Mr. Jara’s first job?",
    choices: [
      "He worked in a bank.",
      "He repaired automobiles.",
      "He developed computer software.",
      "He sold newspapers."
    ],
    answer: 3,
    back: "(4) He sold newspapers — \"A los 8 años de edad mi primer trabajo era vender periódicos.\""
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "Q30",
    stem: "Q30. Mr. Jara uses the money he earns in order to",
    choices: [
      "collect antique records",
      "continue his interest in music",
      "provide a variety of college scholarships",
      "hire more employees for his restaurant"
    ],
    answer: 1,
    back: "(2) continue his interest in music — real estate \"es lo que más dinero me hace y es lo que me permite mantener mis intereses personales en la música,\" including dozens of traditional suits for each mariachi member."
  },
  // ----- Part 4: Writing tasks (W1-W3) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). In Spanish, write a journal entry about what you will be doing in ten years. You may wish to include:
• where you will be living
• why you chose to live there
• what your residence will be like
• what job you will have or what work you will be doing
• why you will enjoy that job or work
• what you will do in your leisure time
• if or where you will travel
• information about your friends
• information about your family
• how you will use your foreign language ability

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

¿Qué estaré haciendo dentro de diez años? Es una buena pregunta, pero no sé la respuesta. Hay unas cosas ciertas. Quiero vivir cerca de mis padres porque les siento mucho cariño y no hay otros parientes cercanos. Como soy muy atlética, seguiré participando en los deportes, especialmente la natación.

¿Mi carrera? ¿Quiere saber? Me interesan mucho las ciencias, sobretodo la biología. Hay una fábrica de medicina en nuestro pueblo. Puedo estudiar en la universidad y trabajar allí en la investigación para descubrir medicinas contra el cáncer.

No podré comprarme una casa al graduarme. Las casas son muy caras y mi sueldo será limitado. Tendré que compartir un apartamento con varias amigas. Con el dinero ahorrado podré viajar por España. Así tendré la oportunidad de practicar mi español y conocer los centros culturales.

Dentro de 10 años volveré a leer estas líneas para ver si mi adivinación se habrá hecho realidad.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You lost electrical power briefly after a severe storm. In Spanish, write a letter to your pen pal explaining what you did while you did not have electrical power. You may wish to include:
• what time the problem occurred
• how long it lasted
• where you were
• how you passed the time
• what you prepared to eat
• how your friends passed the time
• what other people in your family did
• how you would prepare for this problem in the future
• what the first thing was that you did when the electrical power returned

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido Javier,
¡Qué lío! ¿Sabes lo que pasó anoche? Pues, ¡imagínate! A las nueve de la noche, después de una tormenta ruidosa y horrible, perdimos la corriente eléctrica durante media hora. Yo estaba trabajando con la computadora en un ensayo muy importante para la clase de inglés. Estaba a punto de terminarlo, de ponerlo en un archivo e imprimirlo, cuando todo se apagó. No había nada en la pantalla. ¡Qué desastre! Le llamé a mi amiga Cecilia para preguntarle si tenía electricidad en su casa. Ella me dijo que sí y que fuera a su casa para usar su computadora. Yo sabía que sin el ensayo escrito al día siguiente la profesora me reñiría mucho. Mi mamá me llevó a la casa de Cecilia y se quedó con su mamá tomando café mientras yo terminé mi trabajo.
Tu amigo,
Paco

Rubric: a letter accomplishing the task with many connected details (when the outage happened, how long it lasted, what you were doing, how you coped), clear organization with salutation and closing, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Es tarde y la famila Gómez está lista a comer. El papá y su hijo, Diego, no entiende lo que ha pasado en la casa hoy. No hay una comida preparada y ya son las seis. Desgraciadamente la señora Gómez se olvidó de cocinar la cena porque está haciendo galletas y tortas para un club. El señor Gómez quiere ir a un restaurante pero Diego tiene muchísma hambre y prefiere comer pizza. La señora sugiere que ellos vayan al restaurante chino y después de comer, ellos pueden traerla una comida. Su cocina favorita es china. Ella les dice que al regresar ellos pueden comer torta y helado para el postre. Ahora Diego está más contento.

(The sample's spellings "famila," "no entiende," "muchísma" and "traerla" are reproduced from the printed rating guide.)

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.botero,
    type: "mc",
    label: "S1",
    stem: "S1. Según la selección, ¿por qué hace Botero a sus personajes con dimensiones enormes?",
    choices: [
      "para reírse de ellos",
      "para exaltar su belleza",
      "para criticar a la sociedad moderna",
      "para imitar a los grandes maestros del Prado"
    ],
    answer: 1,
    back: "(2) para exaltar su belleza — \"Engorda a sus personajes no para reírse de ellos sino para exaltar su belleza.\" Esta \"manera\" hace que su estilo sea reconocido de inmediato."
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "S2",
    stem: "S2. Según la selección, ¿por qué pasó Botero de la pintura a la escultura a partir de 1973?",
    choices: [
      "Quería crear los volúmenes y las formas de sus cuadros en el espacio real.",
      "Ya no podía vender sus pinturas en Nueva York.",
      "Un museo de París le pidió esculturas nuevas.",
      "Quería trabajar con modelos profesionales."
    ],
    answer: 0,
    back: "(1) Quería crear los volúmenes y las formas de sus cuadros en el espacio real — \"Botero pasó de la pintura a la escultura porque quería crear los volúmenes y las formas de sus cuadros en lo concreto, en el espacio real.\""
  },
  { ...STIMULI.botero,
    type: "mc",
    label: "S3",
    stem: "S3. Según la selección, ¿qué hizo Botero en el Louvre de París?",
    choices: [
      "Vendió sus primeras ilustraciones a los diarios.",
      "Hizo una exposición de sus pinturas.",
      "Pasó mucho tiempo fascinado con las esculturas antiguas.",
      "Estudió los frescos de los artistas italianos."
    ],
    answer: 2,
    back: "(3) Pasó mucho tiempo fascinado con las esculturas antiguas — \"Pasó mucho tiempo en el gran museo de París, el Louvre, fascinado con las esculturas antiguas.\" (Los frescos los estudió después, en Italia.)"
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "S4",
    stem: "S4. According to the article, in addition to the Mariachi Internacional, what else does Mr. Jara own?",
    choices: [
      "a chain of music schools in California",
      "the mariachi Dorados de Villa and a recording company",
      "a television station in Tijuana",
      "a factory that makes traditional mariachi suits"
    ],
    answer: 1,
    back: "(2) the mariachi Dorados de Villa and a recording company — he is owner \"no solamente … del Mariachi Internacional, sino que también del mariachi Dorados de Villa y una compañía discógrafa donde ha grabado la música de los dos grupos.\""
  },
  { ...STIMULI.mariachi,
    type: "mc",
    label: "S5",
    stem: "S5. According to Mr. Jara, who attends the mariachi shows at his Pancho Villa restaurants?",
    choices: [
      "only tourists visiting from Mexico",
      "mostly professional musicians",
      "Latinos as well as people of many other backgrounds",
      "only the members of his own family"
    ],
    answer: 2,
    back: "(3) Latinos as well as people of many other backgrounds — \"En mis restaurantes, 60% de los que asisten al show de música mexicana son latinos, pero el resto son anglosajones, afro-americanos, asiáticos y de otras razas.\""
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S6",
    stem: "S6. According to the announcement, who founded the Ballet Hispánico in 1970?",
    choices: [
      "a Venezuelan dancer and choreographer",
      "a group of public school teachers",
      "a famous Spanish painter",
      "the parks department of New York"
    ],
    answer: 0,
    back: "(1) a Venezuelan dancer and choreographer — the Ballet Hispánico was \"fundado en 1970 por la bailarina coreógrafa venezolana Tina Ramírez.\""
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S7",
    stem: "S7. According to the report, how much does it cost to see the exhibition of Dos mil dragones at the Museo Municipal?",
    choices: [
      "165 pesos",
      "nothing — admission is free",
      "200 pesos",
      "28 pesos"
    ],
    answer: 1,
    back: "(2) nothing — admission is free — the exhibition can be seen at the Museo Municipal until the 28th of the month, between 9:00 and 18:00, and \"La entrada es gratis.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S8",
    stem: "S8. What is the theme of the painting contest organized by the Ateneo Popular?",
    choices: [
      "the urban landscape",
      "famous historical battles",
      "portraits of local artists",
      "life by the seashore"
    ],
    answer: 0,
    back: "(1) the urban landscape — \"El Ateneo Popular organizará un concurso de pintura, cuyo tema será el paisaje urbano,\" painted in only two hours with materials provided."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "S9",
    stem: "S9. Según el mensaje de Papá Julio, ¿qué celebra la gran reunión familiar del domingo?",
    choices: [
      "la llegada del verano",
      "el aniversario de boda de los padres",
      "el cumpleaños de la tía Luisa",
      "la graduación de un primo"
    ],
    answer: 2,
    back: "(3) el cumpleaños de la tía Luisa — \"La fiesta honra el cumpleaños de tu tía Luisa que va a cumplir sesenta años,\" durará todo el día y conocerás a tus nuevos hermanos, primos y otros parientes."
  },
  { ...STIMULI.peru,
    type: "mc",
    label: "S10",
    stem: "S10. According to the advertisement, on which days does the Circuito Perú Clásico depart from Madrid or Barcelona?",
    choices: [
      "Mondays, Thursdays, and Saturdays",
      "every day of the week",
      "Tuesdays and Fridays only",
      "Sundays only"
    ],
    answer: 0,
    back: "(1) Mondays, Thursdays, and Saturdays — the price includes a tourist-class flight with Iberia, \"salidas desde Madrid o Barcelona los lunes, jueves y sábados.\""
  }
];
