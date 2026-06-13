// June 2001 Comprehensive Examination in Spanish — session deck.
// Source: exam.pdf / tdc.pdf / key.pdf, raw-docs/nysedregents.org/spanish/jun2001/.

const TDC = "Teacher Dictation Copy, June 2001 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You hear this announcement on the radio:

[La maestra lee] En el corazón del centro histórico de la ciudad de Roma hay un curioso restaurante que tiene a la entrada un letrero que dice: “Aquí se come lo que hay en la casa”. La razón es que el simpático restaurante no tiene menú y los clientes no pueden escoger absolutamente nada. Todos los días la cocinera, Paola Fazi, va al mercado temprano en la mañana. Es ahí donde decide lo que va a preparar ese día para el almuerzo y la cena. Como la comida es tan sabrosa, nadie se queja. El sitio es popularísimo.`,
    psource: TDC
  },
  l02: {
    passage: `[Background] While you are taking a tour of the zoo in Buenos Aires, Argentina, the tour guide says:

[La maestra lee] El zoológico porteño presentó a su nuevo habitante. Ahora los porteños pueden visitar un nuevo habitante del zoológico: un hipopótamo que nació el domingo pasado. Los hipopótamos fueron bautizados por los griegos con el nombre de “caballo de río”. Es que pueden correr rápidamente, miden hasta 4 metros de largo, y suelen pasar mucho tiempo en el agua. Aunque los hipopótamos tienen patas cortas, son unos excelentes nadadores. Sus cuatro dedos tienen membranas, como las de los patos que les permiten nadar con facilidad por el agua.`,
    psource: TDC
  },
  l03: {
    passage: `[Background] While in Puerto Rico, you hear this announcement:

[La maestra lee] Los precios de todo lo que tiene que ver con reparaciones y embellecimiento del hogar están muy altos. Sería buena idea que usted misma pintara su propia casa. De esta manera se puede ahorrar mucho dinero. Usted misma puede pintarla, ya que eso no requiere talento. Sólo lo que necesita es mucho cuidado, dedicación, y paciencia. Estará muy satisfecha con el resultado de su proyecto.`,
    psource: TDC
  },
  l04: {
    passage: `[Background] Your friend Luisa reads to you part of a letter she received from her teacher. This is what you hear:

[La maestra lee] Escribo esta carta especialmente para aquellos alumnos que, como tú, han demostrado excepcionales cualidades como estudiantes del idioma español. Quisiera que tu entusiasmo continuara y que siguieras trabajando con el mismo esfuerzo de siempre. Ahora estás perfeccionando la habilidad de comunicarte con personas de habla española, lo que te dará una mejor comprensión y un mejor aprecio de la cultura hispana. Quiero que sigas realizando un buen trabajo como hasta ahora lo has hecho, y mucho éxito.`,
    psource: TDC
  },
  l05: {
    passage: `[Background] You are listening to a Spanish television program and hear this information about Julio Iglesias:

[La maestra lee] Nadie se hubiera imaginado que la guitarra que le regalaron a Julio Iglesias para ejercitar sus dedos después del accidente automovilístico que sufrió a los 19 años, habría de convertirlo en uno de los artistas que más discos ha vendido en la historia de la música. Hasta febrero de este año, Iglesias había vendido más de 120 millones de discos, sobrepasando a Michael Jackson o Barbra Streisand. La clave de este madrileño está en cantar en seis idiomas diferentes, permitiendo que su música se escuche desde Pekín a Estocolmo y de Santiago a Nueva York. “La emoción del público es la misma en cualquier lugar del mundo — sólo las lenguas son diferentes”, dijo Iglesias.`,
    psource: TDC
  },
  l06: {
    passage: `[Background] You turn on the television in your hotel room in Quito, Ecuador, and you hear this announcement:

[La maestra lee] Bienvenidos. Los directores del hotel Las Brisas desean que usted disfrute de su visita a uno de los más elegantes hoteles de Quito. Es nuestro deseo servirle en todo posible. Para su seguridad y bienestar, le pedimos que ponga sus joyas o posesiones de valor en la caja de seguridad en su cuarto. Simplemente siga las instrucciones escritas en su armario. Gracias.`,
    psource: TDC
  },
  l07: {
    passage: `[Background] You are on a flight to Venezuela. The flight attendant makes this announcement:

[La maestra lee] Señores pasajeros aquí en Viasa de Venezuela nuestra principal consideración es su comodidad. Por lo tanto les pedimos que al aterrizar, tomen unos minutos para llenar un breve cuestionario. Sus respuestas nos ayudarán a servirles mejor en el futuro. Muchísimas gracias por su ayuda.`,
    psource: TDC
  },
  l08: {
    passage: `[Background] You are listening to the radio in Uruguay and hear this announcement:

[La maestra lee] Hoy culmina la primera Exhibición del Automóvil Antiguo y Clásico, donde se han reunido los mejores 200 vehículos antiguos y clásicos. Se van a dar premios a los mejores modelos, y la celebración incluirá música de décadas y otros entretenimientos. Tendrá lugar en el área expositiva de la Universidad Metropolitana. Esta nueva exhibición ha sido organizada por la Asociación de Automóviles Antiguos y Clásicos a beneficio de los niños abandonados.`,
    psource: TDC
  },
  l09: {
    passage: `[Background] You are in Mexico and hear this advertisement:

[La maestra lee] Ya llegó la primavera a la Tienda Gloria donde encontrarás la última moda de la temporada, tanto casual como de vestir, con precios siempre del 20% al 60% menos que en los grandes almacenes. La Tienda Gloria ofrece desde marcas famosas para toda la familia, hasta accesorios para ti y alegres artículos decorativos para tu hogar. Además no tienes que esperar a las ventas especiales. Los bajos precios de la Tienda Gloria son una atracción diaria. ¡Ven y comienza ya a vestirte a la última moda y a los mejores precios!`,
    psource: TDC
  },
  l10: {
    passage: `[Background] You are watching a Costa Rican television program and you hear this announcement:

[La maestra lee] Las carreras más prometedoras para el nuevo milenio son las que destacan la creatividad, exigen alta habilidad y permiten flexibilidad en el horario. Por ejemplo, puedes explorar la computación creativa usando tus talentos para ser artista gráfico creando imágenes y efectos visuales en la computadora. O, si prefieres tener más contacto con la gente, prueba el campo del comercio o ventas vía Internet.`,
    psource: TDC
  },
  l11: {
    passage: `[Background] You hear this message on your answering machine from Pablo, the new exchange student from Bolivia:

[La maestra lee] Hola. Te habla Pablo. Por favor, busca en tu mochila para ver si tú tienes mi libro de matemáticas. Cuando estábamos estudiando en la biblioteca, yo creo que tú lo pusiste junto con tus libros. Espero que no lo haya dejado en la mesa. Llámame cuando puedas pues tengo que estudiar para mañana.`,
    psource: TDC
  },
  l12: {
    passage: `[Background] You hear this announcement on the radio while in Mexico:

[La maestra lee] Creamos nuevas carreras. Nuestra compañía le ofrece atractivas oportunidades profesionales dentro del rápido crecimiento de la industria del empleo. ¿Le interesaría un puesto en nuestra oficina central o en nuestro cuerpo de directores situados en más de 230 lugares por todo el mundo? ¿Quizás le gustaría explorar un trabajo temporal o de jornada completa a través de nuestra división especializada en empleos? Para más información sobre oportunidades para una carrera profesional, le invitamos a ponerse en contacto con nosotros lo antes posible. Somos una agencia de empleos con igualdad de derechos para todos.`,
    psource: TDC
  },
  l13: {
    passage: `[Background] You are waiting at the train station in Madrid for your train to Barcelona when you hear this announcement over the public address system:

[La maestra lee] Damas y caballeros, su atención por favor. El tren el Talgo Express, con ruta a Barcelona de las trece y treinta, lleva unos cuarenta y cinco minutos de retraso debido a un problema mecánico. Le rogamos su paciencia y le invitamos a tomar una taza de café y unas tapas gratis en el restaurante de la estación. Es nuestra manera de decirle que sentimos la inconveniencia. Gracias.`,
    psource: TDC
  },
  l14: {
    passage: `[Background] You are listening to the radio in Puerto Rico and you hear this advertisement:

[La maestra lee] ¿Quiéres disfrutar de unas merecidas vacaciones? Nuestra compañía Hyatt Resorts Puerto Rico te ofrece unas super económicas ofertas. Si deseas gozar de unas vacaciones familiares o un fin de semana relajante, puedes escoger entre el Hyatt Dorado Beach o el Hyatt Regency Cerromar. Los precios especiales serán disponibles hasta el 19 de diciembre. Para información puedes llamar al 796-8927.`,
    psource: TDC
  },
  l15: {
    passage: `[Background] You are listening to a Spanish-language television station in Los Angeles. This is what you hear:

[La maestra lee] El muy conocido actor hispano Edward James Olmos tiene un proyecto especial que desea compartir con el público. Se trata de un proyecto nacional de multimedia que celebra la cultura latina. El propósito es el de unir a los hispanos y dar énfasis a sus importantes contribuciones a la cultura americana. Esta obra, que incluye fotografía, música, literatura y cinematografía, se inauguró en el Smithsonian de Washington.`,
    psource: TDC
  },
  tablavela: {
    passage: `Viento, mar y energía vital

En Puerto Rico, por ser isla, la práctica del “windsurfing” o tablavela es ideal. Desde los años 70, este deporte se ha convertido en uno de los favoritos de los amantes del mar y de los deportes acuáticos. Hoy día vemos cómo más personas lo practican para canalizar energías y bajar los niveles de estrés, causante de tantos males. El mar, el viento y el propio cuerpo luchando con los elementos logran que la persona experimente una sensación única, que va mucho más allá que el asunto deportivo.

Juan Silva, doctor de profesión, comenzó a practicar la tablavela hace cinco años y opina que es un deporte relajante. Utiliza este deporte como un ejercicio para salir de la rutina de su trabajo y lo considera un deporte divertido. El doctor Silva practica la tablavela como pasatiempo junto a otros colegas y profesionales.

La misma pasión por este deporte es compartida por Carla Barrera, una joven que con tan sólo quince años de edad, se ha convertido en una de las mejores practicantes de este deporte en su categoría. Carla es la más joven en practicar dicho deporte a nivel de competencia en Puerto Rico.

Carla dice que siempre que en la playa haya viento, va a estar allí. Su fascinación por la playa y por el deporte de tablavela ocupa todo su tiempo libre. Aunque desde pequeña vive frente al mar, fue su padre, que practica el “surfing”, su principal motivación. Él la animó a que aprendiera este emocionante deporte. A los diez años tomó su primera clase de tablavela en la Laguna de El Condado. “Me encanta sentir las olas del mar y la brisa, pero más me gusta el sentido de satisfacción que me da”, dice Carla.

Para las personas que estén interesadas en aprender la tablavela, se aconseja que tomen clases de un instructor profesional. De esta manera, se facilita el conocimiento del equipo necesario y adecuado para aprender este deporte. El ser perseverante, el saber nadar, el tener apreciación por los deportes marinos y no tenerle miedo al mar son factores importantes para el éxito.

La tablavela, que es tan popular con las mujeres como con los hombres, no requiere estar en una forma física perfecta y ayuda a ejercitar todos los músculos del cuerpo, especialmente torso y brazos. Niños tan pequeños como de cinco años y hasta adultos de sobre sesenta años, pueden practicar este deporte sin problemas.

Las condiciones del tiempo y de las olas son determinantes en la práctica de la tablavela. En Puerto Rico los lugares más adecuados son toda la costa norte y la zona metropolitana. La tablavela puede practicarse todo el año, pero se considera la temporada ideal entre septiembre a diciembre y en el verano, por la dirección e intensidad del viento durante estos meses.

A las personas que quieran comenzar a practicar este deporte se les recomienda invertir en equipos usados, ya que son más económicos. Luego, cuando decida continuar practicando la tablavela, puede comprar equipo más costoso pero más profesional.

Por último, una ventaja muy importante es que aunque este pasatiempo se practica de forma individual, puede compartirse con otra persona o en grupo.`,
    psource: "Part 3a reading passage, June 2001 Comprehensive Spanish Regents"
  },
  futbol: {
    imgs: [
      { src: "img/q21-futbol-torneo-poster.png",
        cap: "Announcement for Q21 — “¿Te gusta el fútbol?” tournament poster (June 2001 Comprehensive Spanish Regents)",
        alt: "Black-and-white poster from the Consulate General of Mexico and the Mexican Center of Atlanta inviting readers to the VI Torneo Regional de Comunidades Mexicanas en el Extranjero, Región B: Los Rayos (representing Atlanta) vs. Miami, Sunday, November 8, 1998 at 12:00 p.m., Escuela Sequoyah, 3456 Aztec Road, Doraville, Ga. A soccer-player graphic fills the center. A box notes the winning team advances to represent zone B at the Torneo Copa Orlando '98 in Florida, November 20-22. Large text reads ¡¡¡ENTRADA GRATIS!!! with a phone number for more information." }
    ]
  },
  ejercicio: {
    imgs: [
      { src: "img/q22-perfecta-a-cada-lado.png",
        cap: "Selection for Q22 — “Perfecta a cada lado” (June 2001 Comprehensive Spanish Regents)",
        alt: "Boxed magazine article in Spanish titled Perfecta a cada lado. It describes a floor exercise done lying on one's side: raise the shoulders slightly, place the hands behind the neck, then lift the upper leg and torso, twisting a little so the oblique abdominal muscle works. Up to four series of 16 repetitions, two per side, may be done." }
    ]
  },
  pasajero: {
    imgs: [
      { src: "img/q23-informacion-para-el-pasajero.png",
        cap: "Selection for Q23 — “Información para el pasajero” (June 2001 Comprehensive Spanish Regents)",
        alt: "Two-column airline notice in Spanish titled Información para el pasajero. It welcomes passengers aboard and asks them to read safety procedures: listen to crew announcements; electronic devices such as radios, portable computers and cell phones emit signals that can interfere with the plane's navigation system; passengers may not visit the cockpit in flight; dangerous materials like explosives, flammable liquids and radioactive materials are prohibited; smoking is prohibited; label your checked bags, keep medicines, keys and valuables with you, and stow your two carry-on bags under the seat or in the overhead compartment." }
    ]
  },
  concurso: {
    imgs: [
      { src: "img/q24-notas-concurso-dibujo.png",
        cap: "Selection for Q24 — “NOTAS: Dibujo” (June 2001 Comprehensive Spanish Regents)",
        alt: "Boxed announcement in Spanish headed NOTAS, subtitled Dibujo. It announces the Antonio Chiwerto rapid-drawing contest for national and foreign painters over 16. The theme is La Verbena; paintings will be made August 13 at the verbena dance set up by the Agrupación Los Castizos in the Carrera de San Francisco, Madrid. Paper size 35 by 50 will be provided along with other materials. Two prizes: first, a watercolor by painter Mayte Ramos; second, a drawing kit. Registration closes 15 minutes before the contest, which runs from 20.30 to 22.00." }
    ]
  },
  miel: {
    imgs: [
      { src: "img/q25-la-dulce-miel.png",
        cap: "Selection for Q25 — “La dulce miel para la salud” (June 2001 Comprehensive Spanish Regents)",
        alt: "Boxed article in Spanish titled La dulce miel para la salud. It says honey has been one of the natural remedies most used by grandmothers, and in Puerto Rico and elsewhere it remains a favorite when the inevitable cold appears. Bees produced honey long before humans existed, known because petrified bees appear in geological eras earlier than the oldest human skeletons, as seen in bees fossilized in amber. When you have a cold, take advantage of this natural medicine." }
    ]
  },
  cloze: {
    passage: `¿Se Necesita Una Computadora?

Muchos padres en la era digital quieren introducir la última tecnología a sus hijos aun antes de que los niños puedan caminar. Aunque el uso de las computadoras en el aula de clase y en el futuro de sus niños va a ser más grande, las computadoras no son tan esenciales para los niños que todavía no asisten a la escuela.

Las computadoras pueden ser muy importantes para __(26)__ pero la mayoría de los especialistas en educación temprana — es decir, de niños muy pequeños — está de acuerdo en que los niños preescolares se benefician más de experiencias ricas y de interacción directa, tales como pintar, explorar los patios, jardines y parques, y jugar con otros niños.

Una computadora también puede limitar la actividad física — correr, __(27)__ saltar, subir — que todos los niños necesitan para crecer saludables. Otra desventaja es la soledad que experimenta el niño o la niña al estar frente a una pantalla de computadora por mucho tiempo. Esto puede causar que se sienta menos cómodo con la interacción entre personas en un período en que debería desarrollar su vida social.

Recuerde que los niños necesitan estar en un ambiente donde puedan usar su creatividad y su __(28)__ sin limitaciones. Es algo que la computadora no puede garantizar.

No queremos decir que las computadoras no puedan ser valiosas para aprender, pero deben usarse con moderación. Si su niño muestra __(29)__ en usar una computadora, cómprele una, a su disposición; si no le interesa, no lo obligue. Además, si su hijo se está volviendo en un adicto a la computadora, es bueno limitarle el __(30)__. La computadora debe suplementar, no reemplazar, los juegos de los niños.`,
    psource: "Part 3c cloze passage, June 2001 Comprehensive Spanish Regents"
  },
  playa: {
    imgs: [
      { src: "img/q33-cuento-playa.png",
        cap: "Picture for writing task 33 (June 2001 Comprehensive Spanish Regents)",
        alt: "Cartoon beach scene: a woman wearing a swimsuit, sun hat, and glasses reclines on a towel under a beach umbrella reading a book. A young boy in swim trunks stands beside her, mouth open as if speaking. Behind them, a person is in the water, and a cloud floats in the sky." }
    ]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a — Listening, answers in English (Q1-9) ----------
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is unique about this restaurant?",
    choices: [
      "It does not offer meal selections.",
      "It is not open on weekends.",
      "It is known expecially for its desserts.",
      "It only serves lunch."
    ],
    answer: 0,
    back: "(1) It does not offer meal selections — “el simpático restaurante no tiene menú y los clientes no pueden escoger absolutamente nada”: the cook decides each day what will be served."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What did the tour guide say?",
    choices: [
      "A hippopotamus escaped last week.",
      "The hippopotamuses cannot swim.",
      "Hippopotamuses have webbed feet.",
      "Another hippopotamus will soon be adopted."
    ],
    answer: 2,
    back: "(3) Hippopotamuses have webbed feet — “Sus cuatro dedos tienen membranas, como las de los patos”, which lets them swim easily."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is suggested by this advertisement?",
    choices: [
      "that you paint your own home",
      "that you replace old household appliances",
      "that you start your own business",
      "that you buy inexpensive furniture"
    ],
    answer: 0,
    back: "(1) that you paint your own home — “Sería buena idea que usted misma pintara su propia casa. De esta manera se puede ahorrar mucho dinero.”"
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What was the purpose of the letter?",
    choices: [
      "welcome Luisa to the class",
      "inform Luisa that her attitude needs to improve",
      "encourage Luisa to apply for a scholarship",
      "compliment Luisa on her effort in Spanish class"
    ],
    answer: 3,
    back: "(4) compliment Luisa on her effort in Spanish class — the teacher writes to students who “han demostrado excepcionales cualidades como estudiantes del idioma español” and urges her to keep up the good work."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. Why has Julio Iglesias been so successful?",
    choices: [
      "He learned from other famous singers.",
      "He chose songs that had previously been popular.",
      "He has recorded songs in many languages.",
      "He started his music career late in life."
    ],
    answer: 2,
    back: "(3) He has recorded songs in many languages — “La clave de este madrileño está en cantar en seis idiomas diferentes”, so his music is heard from Beijing to Stockholm."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is this announcement about?",
    choices: [
      "incentives to use room service",
      "your personal safety on the city streets",
      "instructions on the use of the telephone",
      "the security of your valuables"
    ],
    answer: 3,
    back: "(4) the security of your valuables — guests are asked to put “sus joyas o posesiones de valor en la caja de seguridad en su cuarto”."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What are you being asked to do?",
    choices: [
      "fasten your seat belt",
      "make any complaints directly to the flight attendant",
      "answer some questions about airline services",
      "move to a different place on the plane"
    ],
    answer: 2,
    back: "(3) answer some questions about airline services — passengers are asked to “llenar un breve cuestionario” so the airline can serve them better."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is being offered?",
    choices: [
      "a prize for university students",
      "a prize for classic cars",
      "a prize for young musicians",
      "a prize for new artists"
    ],
    answer: 1,
    back: "(2) a prize for classic cars — at the Exhibición del Automóvil Antiguo y Clásico, “Se van a dar premios a los mejores modelos”."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What makes this store unique?",
    choices: [
      "It is the largest department store in Mexico.",
      "It offers a sale on clothing every day.",
      "It specializes in children’s books.",
      "It donates money to community groups."
    ],
    answer: 1,
    back: "(2) It offers a sale on clothing every day — prices are always 20% to 60% below department stores and “Los bajos precios de la Tienda Gloria son una atracción diaria”."
  },
  // ---------- Part 2b — Listening, answers in Spanish (Q10-15) ----------
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué tipo de empleo se sugiere?",
    choices: [
      "un trabajo en grandes tiendas",
      "un trabajo limitado a la oficina en tu casa",
      "un trabajo en gimnasia y atletismo",
      "un trabajo usando la imaginación y la computadora"
    ],
    answer: 3,
    back: "(4) un trabajo usando la imaginación y la computadora — se sugieren carreras que destacan la creatividad, como ser “artista gráfico creando imágenes y efectos visuales en la computadora”."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué problema tiene Pablo?",
    choices: [
      "Se le olvidó una cita.",
      "No puede ir a la reunión.",
      "No puede encontrar su libro.",
      "Se le perdió su mochila."
    ],
    answer: 2,
    back: "(3) No puede encontrar su libro — Pablo pide que busques su libro de matemáticas, que cree que quedó entre tus libros o en la mesa de la biblioteca."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué se ofrece en este anuncio?",
    choices: [
      "consejos legales",
      "oportunidades de trabajo",
      "periódicos mundiales",
      "automóviles deportivos"
    ],
    answer: 1,
    back: "(2) oportunidades de trabajo — “Nuestra compañía le ofrece atractivas oportunidades profesionales… Somos una agencia de empleos.”"
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué le ofrecen a los pasajeros?",
    choices: [
      "una merienda gratuita por su paciencia",
      "otro tren en vez del Talgo",
      "un billete para un viaje gratis a su favorita ciudad",
      "unas vacaciones gratis en el futuro"
    ],
    answer: 0,
    back: "(1) una merienda gratuita por su paciencia — por el retraso, invitan a los pasajeros “a tomar una taza de café y unas tapas gratis en el restaurante de la estación”."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Quienes deben aprovecharse de esta oferta?",
    choices: [
      "familias que tengan aptitudes deportivas",
      "personas que quieran alquilar un apartamento",
      "familias que tengan muchos hijos",
      "personas que quieran gozar de vacaciones menos costosas"
    ],
    answer: 3,
    back: "(4) personas que quieran gozar de vacaciones menos costosas — Hyatt Resorts Puerto Rico ofrece “unas super económicas ofertas” de vacaciones."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué propósito tiene este proyecto?",
    choices: [
      "demostrar la contribución del hispano en la cultura americana",
      "establecer nuevos teatros para los hispanos",
      "crear escuelas de bellas artes en Washington",
      "dar más oportunidades a los hispanos en el cine"
    ],
    answer: 0,
    back: "(1) demostrar la contribución del hispano en la cultura americana — el propósito es “unir a los hispanos y dar énfasis a sus importantes contribuciones a la cultura americana”."
  },
  // ---------- Part 3a — Reading passage (Q16-20) ----------
  { ...STIMULI.tablavela,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cuál es uno de los mensajes sobre la tablavela que nos presenta este artículo?",
    choices: [
      "que se aprende con mucha dificultad",
      "que es un deporte muy popular de Puerto Rico",
      "que se requiere viajar mucho",
      "que es un deporte solo para los jovenes"
    ],
    answer: 1,
    back: "(2) que es un deporte muy popular de Puerto Rico — desde los años 70 “este deporte se ha convertido en uno de los favoritos de los amantes del mar”, y es tan popular con las mujeres como con los hombres."
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "Q17",
    stem: "Q17. Según este pasaje, un beneficio importante de la tablavela es el",
    choices: [
      "sobrevivir en una isla",
      "ganar mucho dinero",
      "eliminar las tensiones del trabajo",
      "obtener un mejor bronceado"
    ],
    answer: 2,
    back: "(3) eliminar las tensiones del trabajo — se practica “para canalizar energías y bajar los niveles de estrés”; el doctor Silva la usa “para salir de la rutina de su trabajo”."
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Quién interesó a Carla Barrera en este deporte?",
    choices: [
      "su padre",
      "una compañera de clase",
      "una amiga",
      "un atleta profesional"
    ],
    answer: 0,
    back: "(1) su padre — “fue su padre, que practica el ‘surfing’, su principal motivación. Él la animó a que aprendiera este emocionante deporte.”"
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "Q19",
    stem: "Q19. Para aprender a practicar la tablavela primero tienes que",
    choices: [
      "saber nadar",
      "sacar una licencia",
      "levantar pesas",
      "aprender a pescar"
    ],
    answer: 0,
    back: "(1) saber nadar — entre los factores importantes para el éxito están “el ser perseverante, el saber nadar… y no tenerle miedo al mar”."
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "Q20",
    stem: "Q20. En Puerto Rico ¿por qúe se practica la tablavela en el verano?",
    choices: [
      "Hay más salvavidas en la playa.",
      "Los días son más largos.",
      "Los precios son más bajos.",
      "Los vientos son más fuertes."
    ],
    answer: 3,
    back: "(4) Los vientos son más fuertes — la temporada ideal incluye el verano “por la dirección e intensidad del viento durante estos meses”."
  },
  // ---------- Part 3b — Realia (Q21-25) ----------
  { ...STIMULI.futbol,
    type: "mc",
    label: "Q21",
    stem: "Q21. What is offered in this announcement?",
    choices: [
      "an opportunity to try out for the team",
      "free admission to the game",
      "free soccer balls for the participants",
      "a chance to meet the players"
    ],
    answer: 1,
    back: "(2) free admission to the game — the poster announces the Los Rayos vs. Miami tournament match and says ¡¡¡ENTRADA GRATIS!!! (free admission)."
  },
  { ...STIMULI.ejercicio,
    type: "mc",
    label: "Q22",
    stem: "Q22. What information is provided in this article?",
    choices: [
      "a series of movements for exercise",
      "how to make a sculpture",
      "how to solve a financial problem",
      "some hints on cooking meat"
    ],
    answer: 0,
    back: "(1) a series of movements for exercise — the article gives step-by-step instructions for a floor exercise that works the oblique abdominal muscle, in series of 16 repetitions."
  },
  { ...STIMULI.pasajero,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is this announcement about?",
    choices: [
      "refund policies",
      "weather conditions",
      "seating arrangements",
      "safety regulations"
    ],
    answer: 3,
    back: "(4) safety regulations — the notice asks passengers to read “los siguientes procedimientos de seguridad”: electronics interference, prohibited dangerous materials, no smoking, and baggage rules."
  },
  { ...STIMULI.concurso,
    type: "mc",
    label: "Q24",
    stem: "Q24. What information is given in this article?",
    choices: [
      "directions to an art exhibit",
      "a special fashion-design program",
      "rules for participating in a contest",
      "a sports event for amateur athletes"
    ],
    answer: 2,
    back: "(3) rules for participating in a contest — it details the rapid-drawing contest: who may enter, the theme, the paper size, the prizes, and the registration deadline."
  },
  { ...STIMULI.miel,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does this article say about honey?",
    choices: [
      "It can be beneficial when you have a cold.",
      "It is used in the production of candy.",
      "It is used as a substitute for sugar.",
      "It can be both harmful and healthful."
    ],
    answer: 0,
    back: "(1) It can be beneficial when you have a cold — honey is a favorite natural remedy “cuando aparece el inevitable resfriado”: “Cuando tenga catarro, aprovéchese Ud. de esta medicina natural.”"
  },
  // ---------- Part 3c — Cloze passage (Q26-30) ----------
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: ["ganar", "levantar", "aprender", "oponer"],
    answer: 2,
    back: "(3) aprender — “Las computadoras pueden ser muy importantes para aprender”; the closing paragraph echoes it: “no queremos decir que las computadoras no puedan ser valiosas para aprender”."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: ["oír", "pensar", "dormir", "jugar"],
    answer: 3,
    back: "(4) jugar — the blank sits in a list of physical activities children need to grow up healthy: “correr, jugar, saltar, subir”."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: ["reducción", "estación", "imaginación", "porción"],
    answer: 2,
    back: "(3) imaginación — children need an environment where they can use “su creatividad y su imaginación sin limitaciones”."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: ["interés", "enojo", "miedo", "tristeza"],
    answer: 0,
    back: "(1) interés — “Si su niño muestra interés en usar una computadora, cómprele una… si no le interesa, no lo obligue.”"
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: ["chiste", "uso", "periódico", "título"],
    answer: 1,
    back: "(2) uso — if the child is becoming addicted to the computer, “es bueno limitarle el uso”."
  },
  // ---------- Part 4 — Writing (one self card per printed task) ----------
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4a, Question 31 — note, at least 6 clauses). On the exam you chose ONE of questions 31/32.

While your Spanish-speaking neighbor was away from home today, you accepted a delivery on his/her behalf. Write a note in Spanish to your neighbor informing him/her that you have something for him/her.

In your note, you may wish to mention: what you did and why; who made the delivery and where it was from; what time the delivery was made; something about the nature of the delivery; and/or where you are keeping it. You may also want to include whether you will be home later or where or how you can be contacted when your neighbor returns home.

Be sure to accomplish the purpose of the note, which is to inform your neighbor that you have something for him/her.

Use the following:
Salutation: Querido Señor/Querida Señora [your neighbor's name],
Closing: Hasta pronto, [your name]

The salutation and closing will not be counted as part of the six required clauses.`,
    back: `Model 6-credit answer (official sample from the scoring key):

Querido Señor ___,
Cuando regreses llámame, por favor. Esta mañana mientras tú estabas en el mercado el cartero te dejó un paquete para tí en mi casa. Me parece que te lo envió tu familia de Venezuela. Estaré en mi casa todo el día. Si regresas tarde en la noche puedes llamarme después de las nueve.
Hasta pronto,
Juanita

Rubric: the note must achieve its stated purpose; raters credit the first six clauses, each worth 2/3 for comprehensibility-appropriateness and 1/3 for form.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4a, Question 32 — note, at least 6 clauses). On the exam you chose ONE of questions 31/32.

You do not want your Spanish teacher to give a homework assignment tonight. Write a note in Spanish to your teacher to ask your teacher not to give a homework assignment for tonight.

In your note, you may wish to mention: reasons for this request (other homework, plans for tonight, family obligations, party, sports event); and suggested options for your teacher (postpone the homework to another day, not give homework at all for tonight). Your may want to express your appreciation for considering your request.

Be sure to accomplish the purpose of the note, which is to ask your teacher not to give a homework assignment for tonight.

Use the following:
Salutation: Sr./Sra. [your teacher's name],
Closing: [your name]

The salutation and closing will not be counted as part of the six required clauses.`,
    back: `Model 6-credit answer (official sample from the scoring key):

Sr. Molina,
Si es posible, no quiero tener tarea esta noche. Es el cumpleaños de mi abuela y toda la familia estará en casa para una fiesta grande de sorpresa. Ella cumplirá noventa y nueve años. Yo espero que Ud. pueda comprender mi situación; prometo hacer más tarea este fin de semana. Le agradezco muchísimo este favor.
Renaldo

Rubric: the note must achieve its stated purpose; raters credit the first six clauses, each worth 2/3 for comprehensibility-appropriateness and 1/3 for form.`
  },
  { ...STIMULI.playa,
    type: "self",
    label: "W3",
    front: `W3 (Part 4b, Question 33 — composition, at least 10 clauses). On the exam you chose ONE of questions 33/34.

In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.`,
    back: `Model 10-credit answer (official sample from the scoring key):

El sábado pasado hacía mucho calor y la Señora Gómez decidió ir a la playa con su hijo Miguel. Cuando llegaron, la señora arregló la manta, la silla y el parasol y empezó a leer una novela. Miguel tenía un problema: no quería entrar en el agua sin su mamá. Entonces, ella se levantó, le tomó la mano, y los dos entraron juntos en el agua. ¡Qué día tan divertido pasaron en la playa!

Rubric: the story must relate to the picture (not describe it) and contain at least 10 clauses; each clause earns 2/3 for comprehensibility-appropriateness and 1/3 for form.`
  },
  {
    type: "self",
    label: "W4",
    front: `W4 (Part 4b, Question 34 — letter, at least 10 clauses). On the exam you chose ONE of questions 33/34.

You would like to invite a former exchange student from Spain to spend some time with you this summer. In Spanish, write a letter to the former exchange student inviting him/her to spend some time with you this summer.

You must accomplish the purpose of the letter, which is to invite the former exchange student to spend some time with you this summer.

In your letter, you may want to mention when you would like him/her to come; travel arrangements; amount of time; what you have been doing since you last saw him/her; activities planned; special clothing needs; money needed; arrangements to see old friends; possible travel plans; how your family feels about the invitation; and how soon you need to know his/her answer.

You may use any or all of the ideas suggested above or you may use your own ideas. Either way, you must invite the former exchange student to spend some time with you this summer.

Use the following:
Dateline: el 19 junio de 2001
Salutation: Querido/Querida [exchange student's first name],
Closing: [your name]

The dateline, salutation, and closing will not be counted as part of the 10 required clauses.`,
    back: `Model 10-credit answer (official sample from the scoring key):

el 19 de junio de 2001
Querida Juanita,
Te escribo para invitarte a pasar las vacaciones del verano próximo aquí con nosotros. Podemos hacer muchas cosas juntos. Durante el mes de julio, vamos a visitar la ciudad de Nueva York. Allí veremos la Estatua de la Libertad, los museos y una obra de Broadway. También podemos comer en un restaurante español en Manhattan. En agosto, podemos ir a acampar en las montañas por una semana. No necesitas traer dinero. Mis padres lo pagan todo. Espero que puedas venir a vernos. Escríbeme pronto y dime si puedes pasar las vacaciones con nosotros.
Tu amiga,
Jeannette

Rubric: the letter must achieve its purpose (the invitation); raters credit the first 10 clauses, each worth 2/3 for comprehensibility-appropriateness and 1/3 for form.`
  },
  // ---------- Supplemental cards S1-S10 ----------
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. According to the announcement, who decides what food will be served each day at this restaurant?",
    choices: [
      "the customers, who order from a menu",
      "the cook, after her morning trip to the market",
      "a famous food critic from Rome",
      "the waiters, who poll the clients"
    ],
    answer: 1,
    back: "(2) the cook, after her morning trip to the market — “Todos los días la cocinera, Paola Fazi, va al mercado temprano en la mañana. Es ahí donde decide lo que va a preparar ese día.”"
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S2",
    stem: "S2. According to the report, why was Julio Iglesias first given a guitar?",
    choices: [
      "to entertain tourists in Madrid",
      "to study music at a university",
      "to exercise his fingers after a car accident",
      "to replace one he had lost on tour"
    ],
    answer: 2,
    back: "(3) to exercise his fingers after a car accident — the guitar was a gift “para ejercitar sus dedos después del accidente automovilístico que sufrió a los 19 años”."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S3",
    stem: "S3. Who will benefit from the proceeds of this classic car exhibition?",
    choices: [
      "university art students",
      "local musicians",
      "retired auto workers",
      "abandoned children"
    ],
    answer: 3,
    back: "(4) abandoned children — the exhibition was organized by the Asociación de Automóviles Antiguos y Clásicos “a beneficio de los niños abandonados”."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "S4",
    stem: "S4. Según el anuncio, ¿por qué lleva retraso el tren Talgo Express?",
    choices: [
      "por un problema mecánico",
      "por el mal tiempo",
      "por una huelga de los trabajadores",
      "por un accidente en la vía"
    ],
    answer: 0,
    back: "(1) por un problema mecánico — el tren “lleva unos cuarenta y cinco minutos de retraso debido a un problema mecánico”."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Dónde se inauguró la obra multimedia de Edward James Olmos?",
    choices: [
      "en un teatro de Los Ángeles",
      "en un cine de Nueva York",
      "en un museo de la Ciudad de México",
      "en el Smithsonian de Washington"
    ],
    answer: 3,
    back: "(4) en el Smithsonian de Washington — “Esta obra, que incluye fotografía, música, literatura y cinematografía, se inauguró en el Smithsonian de Washington.”"
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "S6",
    stem: "S6. Según el artículo, ¿qué equipo deben comprar las personas que comienzan a practicar la tablavela?",
    choices: [
      "un equipo usado, porque es más económico",
      "el equipo más profesional y costoso",
      "un equipo nuevo de alta tecnología",
      "el equipo de su instructor"
    ],
    answer: 0,
    back: "(1) un equipo usado, porque es más económico — a los principiantes “se les recomienda invertir en equipos usados, ya que son más económicos”; el equipo más costoso y profesional viene después."
  },
  { ...STIMULI.tablavela,
    type: "mc",
    label: "S7",
    stem: "S7. ¿A qué edad tomó Carla Barrera su primera clase de tablavela?",
    choices: [
      "a los cinco años",
      "a los diez años",
      "a los quince años",
      "a los sesenta años"
    ],
    answer: 1,
    back: "(2) a los diez años — “A los diez años tomó su primera clase de tablavela en la Laguna de El Condado.” Ahora, con quince años, compite en su categoría."
  },
  { ...STIMULI.futbol,
    type: "mc",
    label: "S8",
    stem: "S8. According to the poster, what will the winning team of this match do?",
    choices: [
      "receive new uniforms from the Mexican consulate",
      "play a rematch in Atlanta in December",
      "represent zone “B” at the Torneo Copa Orlando '98 in Florida",
      "travel to Mexico City for the national finals"
    ],
    answer: 2,
    back: "(3) represent zone “B” at the Torneo Copa Orlando '98 — “El equipo ganador pasará a representar a la zona 'B' en el Torneo Copa Orlando '98 en la ciudad de Florida del 20 al 22 de Noviembre.”"
  },
  { ...STIMULI.pasajero,
    type: "mc",
    label: "S9",
    stem: "S9. According to the notice, why are passengers asked not to use electronic devices on board?",
    choices: [
      "They disturb passengers who are sleeping.",
      "They must be checked with the rest of the luggage.",
      "Their signals can interfere with the plane's navigation system.",
      "They use too much of the aircraft's electrical power."
    ],
    answer: 2,
    back: "(3) Their signals can interfere with the plane's navigation system — radios, portable computers, cell phones and some electronic toys “emiten señales que pueden interferir con el sistema de navegación de la aeronave”."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S10",
    stem: "S10. Según el pasaje, ¿de qué se benefician más los niños preescolares?",
    choices: [
      "de las últimas tecnologías digitales",
      "de los programas educativos de computadora",
      "de experiencias ricas y de interacción directa",
      "de estar frente a una pantalla por mucho tiempo"
    ],
    answer: 2,
    back: "(3) de experiencias ricas y de interacción directa — los especialistas están de acuerdo en que los preescolares “se benefician más de experiencias ricas y de interacción directa, tales como pintar, explorar… y jugar con otros niños”."
  }
];
