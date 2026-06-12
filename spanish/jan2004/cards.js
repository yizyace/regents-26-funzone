// Comprehensive Examination in Spanish — January 27, 2004
// Part 2 (Q1–15) listening passages from the Teacher Dictation Copy;
// Part 3 (Q16–30) reading passages and realia from the exam booklet;
// Part 4 (W1–W3) writing tasks; S1–S10 supplemental cards.
// Printed typos are preserved verbatim (e.g. "politíco", "Bayeru", "ortogaba", "Depués").

const TDC_SRC = "Teacher Dictation Copy, January 2004 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to the radio in San Juan, Puerto Rico, and hear this commercial:

[La maestra lee] Señoras y Señores: ahora ustedes podrán disfrutar de la oficina ideal donde ustedes quieran. Podrán navegar por la red más rápidamente y recibir su correo electrónico inmediatamente gracias a los últimos avances tecnológicos de nuestra nueva compañía de cable. Nuestro sistema les permite aprovechar de un servicio rapidísimo en cualquier lugar que se encuentren. Vean con sus propios ojos lo que podrían tener a su alcance hoy mismo con nuestro equipo de computación.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are listening to the radio in Mexico and hear this advice:

[La maestra lee] Aquí Ud. tiene unos consejos que pueden ser de gran ayuda para escoger la mascota perfecta: Primero, cualquier animal doméstico requiere cuidado y comida especial. Es importante que no coman alimentos hechos en su cocina. Segundo, el tamaño del animal determina el espacio que necesita dentro de la casa y fuera de la casa. Por ejemplo, si vive en un apartamento, sería mejor escoger un animal pequeño. Un animal más grande requiere más espacio. Tercero, debe consultarse con un veterinario que pueda aconsejarle sobre la selección apropiada para su familia.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are listening to a Spanish radio station and hear this announcement:

[La maestra lee] ¿Desea usted disfrutar de la riqueza de un color duradero con una suavidad increíble? Ahora usted puede mejorar la apariencia de su cabello con el fragante tinte “Primavera.” Este tinte contiene acondicionador fabricado con aceite de frutas. Además, el color le durará por meses. ¡Cómprelo en su tienda favorita!`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] While listening to the radio in Spain, you hear this report about a study that was conducted:

[La maestra lee] Una reconocida universidad de Bélgica investigó y llegó a la conclusión de que la vida campestre y rural parece ser mucho más favorable para la salud. La vida allí es mucho más tranquila y equilibrada. Por lo general en el campo no estamos sometidos al estrés continuo que se siente en las grandes ciudades.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You hear this announcement on a Spanish-speaking radio station:

[La maestra lee] ¡Celebren Uds. la herencia hispana! El Consejo de La Raza ha planeado una gran cantidad de eventos culturales. Los eventos tendrán lugar en el Centro Cultural en la calle San Angelo. Se venderán pinturas, esculturas y platos típicos de varios países. También se podrá escuchar música de muchos países latinoamericanos. El espectáculo es el 31 de agosto y el primero de septiembre. La entrada costará cuatro dólares por adulto y es gratis para niños. La función empezará a las diez de la mañana y continuará hasta las once de la noche. ¡Vengan y traigan a toda la familia! ¡Gocen de la comida y música! ¡Apoyen al Consejo de la Raza! Para más información, llamen al número 442-RAZA.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] You are in Peru. While listening to the radio, you hear this announcement:

[La maestra lee] Parece que acaban de encontrar un remedio para la nariz congestionada. Parece raro pero es cierto. La revista SALUD ha publicado los resultados de sorprendentes experimentos en los que se usaron chiles jalapeños para el tratamiento de problemas respiratorios que no tienen origen alérgico. En un centro médico, se está experimentando con la sustancia que hace que los chiles piquen. El centro ha elaborado un inhalador cuyos resultados han dejado al mundo médico con muchas esperanzas. Las primeras dosis pueden provocar calor en la nariz y lágrimas en los ojos, sin embargo, eventualmente se logra que las fosas nasales queden descongestionadas.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You hear this news item on the Spanish television channel:

[La maestra lee] Los planes de cambiar la localidad de La Bolsa de Valores en Nueva York se discuten constantemente. Depués de 93 años, podrían abandonar el edificio en Wall Street y trasladarse a otro lugar más grande y moderno, bien sea en Manhattan o en Nueva Jersey.
Un portavoz de la Bolsa de Nueva York confirmó que la Junta de Directores del mercado de valores más importante del mundo está estudiando varias posibilidades y que este estudio está aún en fase muy preliminar. Por su parte, un representante del alcalde de Nueva York explicó que el mercado necesita más espacio y, sobre todo, un edificio más moderno que disponga de los últimos avances tecnológicos.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] Your friend is sharing the advice she received from her dentist:

[La maestra lee] ¡No vas a creer lo que mi dentista me sugirió! ¡Masticar chicle! Pues, me dijo que una investigación reciente demostró algo inesperado: masticar chicle durante 20 minutos después de cada comida estimula la producción de saliva que se necesita para neutralizar la formación de sarro. ¿No es increíble? Eso sí—y esto es muy importante—no mastiques chicle azucarado. . . porque sería una invitación a las caries.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are in a department store in Mexico City and a sales representative is explaining a new service to you. She says:

[La maestra lee] Sólo nuestro Mini-Catálogo le ofrece estas garantías. Con el nuevo Mini-Catálogo usted conocerá un moderno sistema de venta directa que nos permite darle los mejores precios de productos selectos. Además, usted disfrutará, de ahora en adelante, de nuestra garantía que incluye su satisfacción total o la devolución de su dinero. Compre Ud. lo que le guste, y si no le satisface su compra, le devolveremos su dinero sin ningún compromiso. Le llevaremos los mejores productos a precios bajos por medio de nuestros catálogos.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You hear this public service announcement on the radio:

[La maestra lee] El fumar es la causa más frecuente de las enfermedades cardiovasculares. El cardiólogo español, Valentín Fuster, dice que el tabaco es el factor principal de riesgo de las enfermedades coronarias. También indica que tres de cada cuatro fumadores se inician en este hábito entre los 14 y los 19 años. Por eso se considera muy importante la educación preventiva en las escuelas para evitar este problema de salud. Con los programas escolares, es posible que los estudiantes comprendan la importancia de no fumar.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] While watching television, you hear this advertisement:

[La maestra lee] ¿Está Ud. aburrido de la vida? ¿No está satisfecho con su carrera? ¿Necesita más educación formal? ¡Es hora de hacer un cambio! El Instituto Tecnológico de Cartago está aceptando solicitudes para el semestre del otoño. Puede matricularse para cursos en el programa de tiempo parcial o tiempo completo. Se ofrecen cursos en computadoras, negocios, y contabilidad. Cada curso le ofrece 3 créditos para avanzar hacia su diploma y su vida nueva. La decisión es suya, la vida aburrida o una exploración de un futuro magnífico. Llame a la oficina central del instituto.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are in the Dominican Republic. You are watching a documentary on television and hear the commentator say:

[La maestra lee] Cubanos triunfadores en los Estados Unidos como Emilio Estefan, Andy García y Arturo Sandoval todavía no habían nacido cuando el músico, actor y empresario cubano Desi Arnaz ya gozaba de gran éxito en este país.
Desi fue un pionero en todo el sentido de la palabra, y representó muy bien a todos los latinos con su imagen fresca y su orgullo de ser cubano. Como músico, actor y empresario influyó en el mundo artístico en diferentes niveles: él era propietario de estudios en Hollywood, produjo cientos de programas de televisión, y abrió caminos en el mundo de la televisión estadounidense.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While in Cancun, Mexico, you hear this announcement on the radio:

[La maestra lee] Para evitar los rayos dañinos del sol, la mejor hora de tomar el sol es antes de las diez de la mañana y después de las tres de la tarde. Sin embargo, gracias a un instrumento especial, podemos tomar el sol cuando los rayos son más intensos. Esta nueva técnica mide la cantidad de rayos ultravioletas. Inmediatamente convierte la intensidad de los rayos al número de minutos que uno puede exponerse al sol sin protección y sin hacerse daño.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] While watching television in Guatemala, you hear this announcement:

[La maestra lee] La serie de televisión “Mejorando su hogar” es el primer programa en español que le permite a usted hacer cambios en su hogar y convertirlo más cómodo y agradable. Los episodios ofrecen muchas ideas de cómo mejorar su hogar y haciéndolo sin ayuda profesional. Muchas personas que tienen su propia casa siempre buscan maneras de embellecerla. Los episodios ofrecen una guía perfecta para hacer esto. Es importante ofrecer estos programas de televisión porque a muchos les encanta renovar su casa y al mismo tiempo entretenerse.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are in Colombia and hear this news item on the radio:

[La maestra lee] A partir de enero próximo y durante tres meses, un millón de estudiantes y profesores de Colombia abandonarán sus estudios y actividades. Irán a las diferentes regiones del país para alfabetizar a los siete millones de sus compatriotas, enseñándoles a leer y a escribir. A pesar de que serán suspendidas las actividades académicas durante ese primer trimestre, los estudiantes recuperarán las clases en los períodos de vacaciones. El proyecto fue anunciado por el Ministro de Educación como una etapa del Plan de Alfabetización en el cual el gobierno invertirá millones de pesos durante los próximos tres años.`,
    psource: TDC_SRC
  },
  goya: {
    passage: `Goya: pintor español

Francisco de Goya y Lucientes, a la edad de 13 años, empezó a estudiar arte en el taller de José Luzán, copiando modelos de los grabados que su maestro le daba. Estos cuadros son los que más tarde habrían de tener gran influencia en sus obras. Las enseñanzas de Luzán fueron profundas y extensas en el joven Goya. Con los años, Goya se convirtió en un gran pintor.

En 1770, Goya se dirigió a París para aprender la técnica del fresco. Al año siguiente regresó a Zaragoza y fue contratado para pintar frescos en diversas iglesias. En 1775, Goya se casó con Josefa, hermana de Francisco Bayeru, un artista de la época. Con la ayuda de Bayeru, Goya llegó a ser favorecido por la corte y entró en la prestigiosa fábrica de tapices. Fue en la fábrica de tapices donde Goya hizo numerosos diseños basados en la vida campesina alegre y simple. Estas obras sirvieron para decorar el palacio del Prado y El Escorial. Mientras más ascendía Goya en prestigio, la vida superficial de los aristócratas cortesanos, que vivían del dinero del pueblo, lo hacía más descontento.

Carlos III, el rey durante aquella época, estaba dispuesto a reformar todo el sistema monárquico europeo, anticipando el peligro de insurrección popular que venía de Francia y de la independencia de las colonias inglesas en América. En aquellos días, Goya se encontró con personas que influyeron posteriormente en toda su obra. Al morir Carlos III en 1788, Goya vivió entre dos frentes, la lealtad a su arte y el dinero que la corte del rey le ortogaba.

En 1792, Goya se marchó de la corte, sin permiso, para realizar una obra en Cádiz. Fue entonces cuando sufrió una enfermedad que lo dejó débil por dos meses. El resultado fue que quedó completamente sordo. Al no poder oír absolutamente nada después de esa enfermedad, Goya intentó pasar el menor tiempo posible en la corte.

A pesar de su opinión desfavorable de la corte, Goya se benefició de ésa. Ascendió a director de la Real Academia. Editó algunas obras de la Tauromaquia, completó los frescos de la iglesia en Cádiz y vio el inicio y fin de su relación amorosa con la muy conocida duquesa de Alba. Más tarde ascendió otra vez y fue nombrado primer pintor de la corte.

En 1808, observó con temor, la invasión napoleónica. Aquella guerra trajo como consecuencia la destrucción de España. La devastación causada por la guerra fue increíble. En 1819, Goya se puso enfermo otra vez y estuvo entre vida y muerte. Unos años más tarde se mudó a Francia con el permiso de la corte real y allí vivió hasta su muerte en 1828.`,
    psource: "Part 3a reading passage, January 2004 Comprehensive Spanish Regents"
  },
  r21: {
    imgs: [
      { src: "img/q21-noticias-futbol.png",
        cap: "“Noticias en breve…” news brief (Part 3b realia), January 2004 Comprehensive Spanish Regents",
        alt: "Boxed news brief in Spanish titled 'Noticias en breve…' reporting that in Uruguay soccer does not allow players to earn money, quoting Uruguayan goalkeeper Oscar Ferro, recently signed by Sporting Cristal of Peru, who says players must emigrate abroad because in his country 'no se puede ganar dinero.'" }
    ]
  },
  r22: {
    imgs: [
      { src: "img/q22-astronauta-lopez-alegria.png",
        cap: "Magazine article about Miguel López-Alegría (Part 3b realia), January 2004 Comprehensive Spanish Regents",
        alt: "Boxed Spanish-language article: at age 25 Miguel López-Alegría decided to become an astronaut and eleven years later, at 36, fulfilled his dream, orbiting Earth 256 times during a 16-day space-shuttle mission with six other crew members. Born in Madrid, raised in America after his parents moved to Boston when he was two, he became a test pilot, read a magazine article about test pilots becoming astronauts, and got into NASA." }
    ]
  },
  r23: {
    imgs: [
      { src: "img/q23-el-azafran.png",
        cap: "“EL AZAFRAN” article (Part 3b realia), January 2004 Comprehensive Spanish Regents",
        alt: "Boxed Spanish-language article titled 'EL AZAFRAN' about saffron: the marvelous spice, ever more expensive, comes from Kashmir in India and La Mancha in Spain; since time immemorial it has been the world's most valuable and costly spice, a single thread adding fragrance, flavor, and color to dishes; it is so expensive because each crocus flower yields only three threads, which must be extracted by hand." }
    ]
  },
  r24: {
    imgs: [
      { src: "img/q24-clases-de-espanol.png",
        cap: "Notice about free Spanish language and culture classes (Part 3b realia), January 2004 Comprehensive Spanish Regents",
        alt: "Boxed Spanish-language notice: for eight years the government of Spain has run a teaching program in the United States consisting of free Spanish language and culture classes for children of Spanish citizens, in locations in New Jersey (Newark, Bayonne, Paterson, Union City), New York (Manhattan, Astoria, Queens), Baltimore, Maryland, and Washington D.C. For more information call (212) 741-5145 during office hours and ask for Sr. Cabrera." }
    ]
  },
  r25: {
    imgs: [
      { src: "img/q25-cortinas-verticales-ad.png",
        cap: "Mannix Verticals s.a. advertisement, Santo Domingo (Part 3b realia), January 2004 Comprehensive Spanish Regents",
        alt: "Newspaper ad in Spanish for Mannix Verticals s.a., a vertical-blind and carpet store in Santo Domingo: vertical blinds in fabric and PVC, big Month of Love special with discounts from 60% up to 75%, installation in less than 24 hours, free no-obligation estimates. 'LLAME AHORA: Las primeras 10 llamadas, les regalamos por su compra de dos cortinas o más, la cortina vertical del baño' — the first ten callers get a free bathroom vertical blind with the purchase of two or more blinds." }
    ]
  },
  juanga: {
    passage: `Juan Gabriel

Su rostro, cansado por un concierto que duró más de tres horas, luce como una máscara teatral griega. Descalzo y envuelto en una toalla blanca, Juan Gabriel recupera su energía en un lujoso camerín del Anfiteatro Universal en Los Angeles, mientras uno de sus asistentes prepara la ropa para la próxima función.

Con más de 30 millones de discos vendidos, el cantante mexicano no necesita publicidad. Sus admiradores lo siguen a muerte, haga lo que haga y vaya donde vaya. Detrás del escenario, lo esperan ansiosamente docenas de personas con la esperanza de obtener unas palabras, un autógrafo o una foto con él. “Con el tiempo me he convertido en admirador de mis admiradores”, dice el cantante, quien circula con el famoso apodo de “Juanga”.

Dentro del camerino, el asistente continúa con su tarea. Otro asistente observa la escena en silencio. Un camarógrafo de vídeo filma la entrevista en su totalidad.

Es imposible evitar los nervios de un reportero al encontrarse con una de las figuras claves de la música latinoamericana. Es que en sus 30 años de carrera, el creador de melodías inolvidables como “Querida”, “Siempre en mi mente”, “Te sigo amando” y “Amor eterno”, lleva cientos de canciones editadas. Su creatividad artística es inagotable: es un músico que se siente igualmente cómodo en géneros tan incompatibles como la música pop y la ranchera. “No sólo tiene un talento artístico excepcional, sino una calidad humana sin límites”, dice Malú Elizondo, gerente general en la costa oeste de BMG, la disquera del cantante.

Por suerte, el músico disipa cualquier caso de nervios con calidez y modales impecables. Ahora cierra los ojos mientras tararea “Sombras”, el tema que inmortalizó Javier Solís. Habla con ternura sobre la melancolía del tango. Y responde a las preguntas con la humildad con la que supo ganar el corazón de su público. “Siempre me ha gustado la música”, dice. “He vivido de esto toda mi vida y no sé hacer otra cosa. Hoy, a los 50 años de edad, lo sigo haciendo”, agrega.

Casi un final de cuento de hadas para una historia que comenzó trágicamente. Porque la vida de Juan Gabriel es la historia de Alberto Aguilera, un niño que a los 4 años fue abandonado en un orfelinato de Ciudad Juárez por una madre que no tenía ni para darle de comer. De adolescente, las monjas Leonor y Beatriz Berumen lo vieron mientras vendía tortillas en la calle y lo invitaron a vivir con ellas para ayudarlo. Ya a los 16 años, el joven adoptó el nombre artístico de Adán Luna y empezó a cantar en clubes nocturnos, entre ellos el legendario Noa-Noa. Un tiempo después, se trasladó a la Ciudad de México. A los 21 años tuvo su primer éxito discográfico con la canción “No tengo dinero”. El resto ya es historia.

Uno de los detalles más notables sobre el proceso creativo de Juan Gabriel es que, a pesar de su prodigiosa habilidad para componer éxitos, no es él mismo quien escribe las partituras de su música. Simplemente compone las canciones y luego contrata al arreglista para que realice las orquestaciones

El cantante es igualmente franco sobre el contenido de sus letras: “Si me hubieran preguntado a los 21 años, te diría que escribo canciones para contar mis aventuras, amores y vivencias. Pero a estas edades, yo creo que uno escribe para que no se le olviden las cosas. Muchas veces, cuando estoy triste, escribo cosas alegres, para animarme”.

En cuanto al famoso crossover al mercado de los Estados Unidos, Juan Gabriel no tiene el menor interés en lanzar un disco en inglés como Ricky Martin o Enrique Iglesias. “Es una lástima que los norteamericanos no hablen español”, dice. “Nuestro idioma nos permite decir cosas muy profundas, cosas que no son tan fáciles de expresar en inglés”.`,
    psource: "Part 3c reading passage, January 2004 Comprehensive Spanish Regents"
  },
  w33pic: {
    imgs: [
      { src: "img/q33-story-picture.png",
        cap: "Bunny Hoest & John Reiner, “Laugh Parade,” Parade — picture for Part 4 writing task 33",
        alt: "Black-and-white cartoon of a classroom: a teacher stands at a lectern beside a blackboard and an open door while four students sit at curved desks with papers in front of them; one student in the back raises his hand and the others look toward him with surprised expressions." }
    ]
  }
};

const ALL_CARDS = [
  // ---------------- Part 2a — Listening, answers in English (Q1–9) ----------------
  { ...STIMULI.l01, type: "mc", label: "Q1",
    stem: "Q1. What new service is available?",
    choices: ["cheaper cable movie rates", "repair of electronic games", "advanced computer classes", "faster Internet connection"],
    answer: 3,
    back: "(4) faster Internet connection — the cable company's ad promises you can “navegar por la red más rápidamente y recibir su correo electrónico inmediatamente” thanks to its latest technological advances." },
  { ...STIMULI.l02, type: "mc", label: "Q2",
    stem: "Q2. Who would be most interested in this information?",
    choices: ["someone who wants to study medicine", "someone who wants to learn to cook", "someone who wants to get a pet", "someone who wants to buy a home"],
    answer: 2,
    back: "(3) someone who wants to get a pet — the passage gives “consejos . . . para escoger la mascota perfecta”: special food, space by size, and consulting a veterinarian." },
  { ...STIMULI.l03, type: "mc", label: "Q3",
    stem: "Q3. What is the purpose of this product?",
    choices: ["to dye hair and condition it", "to wash hair and make it shinier", "to give hair more curl", "to make hair grow"],
    answer: 0,
    back: "(1) to dye hair and condition it — “el fragante tinte 'Primavera'” is a long-lasting hair dye that “contiene acondicionador fabricado con aceite de frutas.”" },
  { ...STIMULI.l04, type: "mc", label: "Q4",
    stem: "Q4. What does this study show?",
    choices: ["the lack of universities in rural areas", "the advantages of living in the country", "the benefits of city life", "the problems of small towns"],
    answer: 1,
    back: "(2) the advantages of living in the country — the Belgian university concluded that “la vida campestre y rural parece ser mucho más favorable para la salud,” calmer and free of big-city stress." },
  { ...STIMULI.l05, type: "mc", label: "Q5",
    stem: "Q5. What does this event offer?",
    choices: ["arts and crafts lessons", "international films", "food and music", "dance competitions"],
    answer: 2,
    back: "(3) food and music — the Hispanic heritage celebration sells “platos típicos de varios países” and features “música de muchos países latinoamericanos.”" },
  { ...STIMULI.l06, type: "mc", label: "Q6",
    stem: "Q6. To whom would this news be of particular interest?",
    choices: ["to someone who is no longer able to eat spicy foods", "to someone who suffers from frequent headaches", "to someone who has developed high blood pressure", "to someone who has nasal congestion"],
    answer: 3,
    back: "(4) to someone who has nasal congestion — the jalapeño-based inhaler is “un remedio para la nariz congestionada” that leaves “las fosas nasales . . . descongestionadas.”" },
  { ...STIMULI.l07, type: "mc", label: "Q7",
    stem: "Q7. Why is this move being proposed?",
    choices: ["to qualify for tax exemptions", "to have more space in a more modern facility", "to make use of older buildings", "to decrease the annual cost of rent"],
    answer: 1,
    back: "(2) to have more space in a more modern facility — the mayor's representative explains “el mercado necesita más espacio y, sobre todo, un edificio más moderno” with the latest technology." },
  { ...STIMULI.l08, type: "mc", label: "Q8",
    stem: "Q8. What did the dentist recommend?",
    choices: ["come back in two weeks", "chew sugar-free gum after meals", "use mouthwash regularly", "brush with an electric toothbrush"],
    answer: 1,
    back: "(2) chew sugar-free gum after meals — chewing gum for 20 minutes after each meal stimulates saliva, but “no mastiques chicle azucarado . . . porque sería una invitación a las caries.”" },
  { ...STIMULI.l09, type: "mc", label: "Q9",
    stem: "Q9. How will the customers benefit from this new service?",
    choices: ["Their total satisfaction is guaranteed.", "The store will allow them to pay in installments.", "They will receive products sooner.", "A salesperson will come to their home to demonstrate the products."],
    answer: 0,
    back: "(1) Their total satisfaction is guaranteed — the Mini-Catálogo guarantee includes “su satisfacción total o la devolución de su dinero.”" },

  // ---------------- Part 2b — Listening, answers in Spanish (Q10–15) ----------------
  { ...STIMULI.l10, type: "mc", label: "Q10",
    stem: "Q10. ¿Qué recomienda el cardiólogo Valentín Fuster?",
    choices: ["que se aumente el precio de los cigarrillos", "que sólo se vendan cigarrillos lejos de las escuelas", "que se prohiba fumar en lugares públicos", "que las escuelas ofrezcan programas educativos contra el fumar"],
    answer: 3,
    back: "(4) que las escuelas ofrezcan programas educativos contra el fumar — Fuster considera “muy importante la educación preventiva en las escuelas” porque tres de cada cuatro fumadores empiezan entre los 14 y 19 años." },
  { ...STIMULI.l11, type: "mc", label: "Q11",
    stem: "Q11. ¿A quién le interesaría más esta noticia?",
    choices: ["a una persona que quiere adquirir un diploma técnico", "a una persona recien llegada al país", "a una persona interesada en el arte", "a una persona que quiere viajar"],
    answer: 0,
    back: "(1) a una persona que quiere adquirir un diploma técnico — el Instituto Tecnológico de Cartago ofrece cursos de computadoras, negocios y contabilidad, cada uno con “3 créditos para avanzar hacia su diploma.”" },
  { ...STIMULI.l12, type: "mc", label: "Q12",
    stem: "Q12. ¿De quién habla el comentador?",
    choices: ["un politíco popular", "un profesor universitario de música", "un propietario de un equipo deportivo latinoamericano", "un hombre de diversos talentos"],
    answer: 3,
    back: "(4) un hombre de diversos talentos — Desi Arnaz fue “músico, actor y empresario”: dueño de estudios en Hollywood y productor de cientos de programas de televisión." },
  { ...STIMULI.l13, type: "mc", label: "Q13",
    stem: "Q13. ¿De qué trata este anuncio?",
    choices: ["cómo broncearse y no quemarse al sol", "dónde comprar nuevos trajes de baños", "el beneficio de levantarse y acostarse temprano", "las ventajas de caminar por la playa"],
    answer: 0,
    back: "(1) cómo broncearse y no quemarse al sol — el instrumento convierte la intensidad de los rayos ultravioletas en “el número de minutos que uno puede exponerse al sol sin protección y sin hacerse daño.”" },
  { ...STIMULI.l14, type: "mc", label: "Q14",
    stem: "Q14. ¿De qué trata el nuevo programa de televisión?",
    choices: ["cómo vender su casa", "cómo vestirse a la última moda", "cómo usted mismo puede mejorar su hogar", "cómo comenzar su propio programa de televisión"],
    answer: 2,
    back: "(3) cómo usted mismo puede mejorar su hogar — “Mejorando su hogar” ofrece ideas para mejorar la casa “haciéndolo sin ayuda profesional.”" },
  { ...STIMULI.l15, type: "mc", label: "Q15",
    stem: "Q15. ¿Cuál es el propósito de este proyecto?",
    choices: ["mejorar la salud pública de los colombianos", "enseñar a los ciudadanos a leer y a escribir", "cambiar el método de enseñanza que se emplea", "acortar el trimestre y alargar las vacaciones"],
    answer: 1,
    back: "(2) enseñar a los ciudadanos a leer y a escribir — un millón de estudiantes y profesores irán a las regiones del país “para alfabetizar a los siete millones de sus compatriotas, enseñándoles a leer y a escribir.”" },

  // ---------------- Part 3a — Reading passage (Q16–20) ----------------
  { ...STIMULI.goya, type: "mc", label: "Q16",
    stem: "Q16. ¿Cómo empezó Goya su estudio de arte?",
    choices: ["imitando las obras de otros pintores", "usando libros escritos por pintores famosos", "observando las atrocidades de la guerra", "pintando la naturaleza que se veía desde el taller"],
    answer: 0,
    back: "(1) imitando las obras de otros pintores — empezó en el taller de José Luzán “copiando modelos de los grabados que su maestro le daba.”" },
  { ...STIMULI.goya, type: "mc", label: "Q17",
    stem: "Q17. ¿Por qué fue aceptado Goya en la corte?",
    choices: ["Contribuyó mucho dinero al rey.", "Se mudó a un pueblo cercano.", "Usó diseños antiguos de la naturaleza.", "Recibió ayuda de la familia de su esposa."],
    answer: 3,
    back: "(4) Recibió ayuda de la familia de su esposa — se casó con Josefa, hermana del artista Francisco Bayeru, y “con la ayuda de Bayeru, Goya llegó a ser favorecido por la corte.”" },
  { ...STIMULI.goya, type: "mc", label: "Q18",
    stem: "Q18. ¿Qué daño permanente le causó su enfermedad?",
    choices: ["Perdió la capacidad de ver.", "Perdió la capacidad de oír.", "Perdió la capacidad de caminar.", "Perdió la capacidad de usar las manos."],
    answer: 1,
    back: "(2) Perdió la capacidad de oír — tras la enfermedad de 1792 “el resultado fue que quedó completamente sordo.”" },
  { ...STIMULI.goya, type: "mc", label: "Q19",
    stem: "Q19. ¿Cuál fue el resultado de la guerra?",
    choices: ["una revolución en el campo de arte", "buenas relaciones entre Francia y España", "innovaciones en armas militares", "mucha destrucción en España"],
    answer: 3,
    back: "(4) mucha destrucción en España — la invasión napoleónica de 1808 “trajo como consecuencia la destrucción de España. La devastación causada por la guerra fue increíble.”" },
  { ...STIMULI.goya, type: "mc", label: "Q20",
    stem: "Q20. Según la selección, Goya murió en una ciudad",
    choices: ["española", "americana", "francesa", "inglesa"],
    answer: 2,
    back: "(3) francesa — “se mudó a Francia con el permiso de la corte real y allí vivió hasta su muerte en 1828.”" },

  // ---------------- Part 3b — Realia (Q21–25) ----------------
  { ...STIMULI.r21, type: "mc", label: "Q21",
    stem: "Q21. What did this soccer player complain about?",
    choices: ["the difficulty of earning money", "the high price of tickets", "the lack of fans at the games", "the high tax rate"],
    answer: 0,
    back: "(1) the difficulty of earning money — goalkeeper Oscar Ferro says Uruguayan players must emigrate because in their country “no se puede ganar dinero.”" },
  { ...STIMULI.r22, type: "mc", label: "Q22",
    stem: "Q22. What information does this article provide about Miguel López-Alegría?",
    choices: ["He completed a mission in space.", "He always wanted to be a newspaper reporter.", "He worked for the government of Italy.", "He became famous when he was 11 years old."],
    answer: 0,
    back: "(1) He completed a mission in space — aboard a space shuttle he spent 16 days in space and circled the Earth 256 times on his first mission." },
  { ...STIMULI.r23, type: "mc", label: "Q23",
    stem: "Q23. The product described in this article would be used by",
    choices: ["a dentist", "a secretary", "a cook", "a taxi driver"],
    answer: 2,
    back: "(3) a cook — saffron is a spice (“esa maravillosa especia llamada azafrán”) that adds fragrance, flavor, and color to dishes (“los platos”) and is used in regional cooking." },
  { ...STIMULI.r24, type: "mc", label: "Q24",
    stem: "Q24. For whom is this program intended?",
    choices: ["adults who want to work for the government", "people who need health insurance", "people who intend to travel", "children of Spanish citizens"],
    answer: 3,
    back: "(4) children of Spanish citizens — the free Spanish language and culture classes are “para hijos de españoles” in the listed U.S. locations." },
  { ...STIMULI.r25, type: "mc", label: "Q25",
    stem: "Q25. What is offered to the first ten callers?",
    choices: ["free carpet cleaning", "a free calendar", "information about special finance rates", "a free gift with the purchase of two items"],
    answer: 3,
    back: "(4) a free gift with the purchase of two items — “Las primeras 10 llamadas, les regalamos por su compra de dos cortinas o más, la cortina vertical del baño”: the first ten callers who buy two or more blinds get a free bathroom vertical blind." },

  // ---------------- Part 3c — Second reading passage (Q26–30) ----------------
  { ...STIMULI.juanga, type: "mc", label: "Q26",
    stem: "Q26. How does the reporter first describe Juan Gabriel?",
    choices: ["angered by a review", "exhausted from his performance", "sitting on the floor", "watching television"],
    answer: 1,
    back: "(2) exhausted from his performance — his face is “cansado por un concierto que duró más de tres horas” as he recovers his energy in the dressing room." },
  { ...STIMULI.juanga, type: "mc", label: "Q27",
    stem: "Q27. What was the birth name of this performer?",
    choices: ["Adán Luna", "Alberto Aguilera", "Malú Elizondo", "Javier Solís"],
    answer: 1,
    back: "(2) Alberto Aguilera — “la vida de Juan Gabriel es la historia de Alberto Aguilera”; Adán Luna was only the stage name he adopted at 16." },
  { ...STIMULI.juanga, type: "mc", label: "Q28",
    stem: "Q28. Where did Juan Gabriel spend his early years?",
    choices: ["in Juárez", "in Miami", "in Mexico City", "in Los Angeles"],
    answer: 0,
    back: "(1) in Juárez — at age 4 he was left “en un orfelinato de Ciudad Juárez,” and as a teenager he sold tortillas in the street there before moving to Mexico City later." },
  { ...STIMULI.juanga, type: "mc", label: "Q29",
    stem: "Q29. The life work of this man has been dedicated to",
    choices: ["producing dramas", "painting landscapes", "writing songs", "creating fairy tales"],
    answer: 2,
    back: "(3) writing songs — in his 30-year career the creator of “Querida,” “Siempre en mi mente,” “Te sigo amando,” and “Amor eterno” has hundreds of published songs." },
  { ...STIMULI.juanga, type: "mc", label: "Q30",
    stem: "Q30. Why does Juan Gabriel perform only in Spanish?",
    choices: ["He only gives concerts in Mexico.", "His fans demand it.", "Many Americans already speak Spanish.", "He can express his feelings better."],
    answer: 3,
    back: "(4) He can express his feelings better — “Nuestro idioma nos permite decir cosas muy profundas, cosas que no son tan fáciles de expresar en inglés.”" },

  // ---------------- Part 4 — Writing tasks (one self card per printed prompt) ----------------
  { type: "self", label: "W1",
    front: `W1 (Part 4, Task 31). Your pen pal from Chile has asked you what you do during your weekends. In Spanish, write a letter to your friend in Chile telling him or her about what you did last weekend. In your letter you may want to mention:
• several activities
• a description of each activity
• who was with you
• when the activity took place
• whether you enjoy the activity
• chores you must do
• routine events at home
• why you do one or more of the activities

(Exam directions: choose two of the three writing tasks 31–33. Your answer should be written entirely in Spanish and should contain a minimum of 100 words.)`,
    back: `Official 8-credit sample response (from the scoring key):

Querido Lorenzo,
Me preguntaste cómo suelo pasar los fines de semana. El sábado pasado, por ejemplo, hice mis quehaceres por la mañana. Limpié mi dormitorio y le ayudé a mi mami en la huerta. Más tarde mis amigos y yo asistimos a un partido de fútbol. ¡Nuestro equipo ganó! Por la noche mi novia, yo, y unos amigos fuimos al cine. La película era muy cómica y nos divertimos.
El domingo dormí hasta muy tarde. Mi familia siempre tiene una comida grande en casa de los abuelos, y salimos a la 1:00 para su casa. Mi abuelita preparó un arroz con pollo muy sabroso. Volvimos a casa por la noche y tuve que hacer mi tarea para el colegio.
Este es un fin de semana más o menos típico para mí. Escríbeme pronto y cuéntame cómo pasaste tu fin de semana.
Tu amigo,

Rubric note: full credit requires accomplishing the task with many connected details, a clear beginning/middle/end with smooth transitions, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, accents), and 100+ words.` },
  { type: "self", label: "W2",
    front: `W2 (Part 4, Task 32). In Spanish, write a journal entry about a person you admire. In your journal entry you may want to mention:
• the name of the person
• where the person lives
• what the person does for a living
• the age of the person
• how that person has affected your life
• whether you would like to be like that person
• how you are like or not like that person
• how you came to know about that person
• why you admire the person

(Exam directions: choose two of the three writing tasks 31–33. Your answer should be written entirely in Spanish and should contain a minimum of 100 words.)`,
    back: `Official 8-credit sample response (from the scoring key):

Una persona que admiro mucho es mi amiga Lori. Hoy, yo pasé unas horas con ella. Entiendo muy bien que, por causa de su enfermedad, ya no puede caminar. Pero ella nunca se queja, nunca se rinde, siempre sigue adelante con su vida. Ella tiene que pasar todo su tiempo en una silla de ruedas, pero siempre intenta hacer todo lo que hacemos nosotros. ¡Cuánto la admiro! Hoy me dijo que es posible que obtenga un perro para ayudarle. Ella tendrá que conocer al perro y aprender mucho. El perro podrá recoger lo que ella ha dejado caer, darle el teléfono cuando ella se cae, y muchas otras cosas. Mi amiga es una persona muy importante en mi vida. Es un honor conocerla.

Rubric note: full credit requires accomplishing the task with many connected details, a clear beginning/middle/end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.` },
  { ...STIMULI.w33pic, type: "self", label: "W3",
    front: `W3 (Part 4, Task 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

(Exam directions: choose two of the three writing tasks 31–33. Your answer should be written entirely in Spanish and should contain a minimum of 100 words.)`,
    back: `Official 8-credit sample response (from the scoring key):

Un día el profesor Garzona estaba hablando con sus estudiantes en la clase de español. Durante la conversación, Pablo levantó la mano. El dijo que necesitaba ir a la oficina de la enfermera. El explicó que se cayó en la clase de gimnasio durante un partido de fútbol. Tuvo un problema con la pierna y pensaba que necesitaría hielo. El profesor le dio permiso a Pablo y le dijo a él que necesitaría tomar el examen el próximo día después de la escuela. En la oficina, la enfermera examinó a Pablo. Ella le dio hielo y después de algunos minutos Pablo volvió a su clase y tomó su examen de español.

Rubric note: full credit requires a story (not a description or dialogue) connected to the picture, with a clear beginning/middle/end, wide vocabulary, strong Checkpoint B grammar control, and 100+ words.` },

  // ---------------- Supplemental cards S1–S10 ----------------
  { ...STIMULI.l02, type: "mc", label: "S1",
    stem: "S1. According to the advice, what determines how much space a pet needs inside and outside the house?",
    choices: ["the animal's age", "the animal's size", "the cost of its special food", "the advice of a veterinarian"],
    answer: 1,
    back: "(2) the animal's size — “el tamaño del animal determina el espacio que necesita dentro de la casa y fuera de la casa”; in an apartment, a small animal is the better choice." },
  { ...STIMULI.l05, type: "mc", label: "S2",
    stem: "S2. How much does admission to this cultural celebration cost?",
    choices: ["four dollars per adult, free for children", "ten dollars per family", "one dollar per person", "it is free for everyone"],
    answer: 0,
    back: "(1) four dollars per adult, free for children — “La entrada costará cuatro dólares por adulto y es gratis para niños.”" },
  { ...STIMULI.l08, type: "mc", label: "S3",
    stem: "S3. According to the dentist, why should you avoid sweetened gum?",
    choices: ["It stains your teeth.", "It damages dental fillings.", "It would be an invitation to cavities.", "It stops the production of saliva."],
    answer: 2,
    back: "(3) It would be an invitation to cavities — “no mastiques chicle azucarado . . . porque sería una invitación a las caries.”" },
  { ...STIMULI.l13, type: "mc", label: "S4",
    stem: "S4. Según el anuncio, ¿qué mide el instrumento especial?",
    choices: ["la temperatura del agua del mar", "la cantidad de rayos ultravioletas", "el número de personas en la playa", "la velocidad del viento"],
    answer: 1,
    back: "(2) la cantidad de rayos ultravioletas — “Esta nueva técnica mide la cantidad de rayos ultravioletas” y la convierte en minutos de exposición segura al sol." },
  { ...STIMULI.l15, type: "mc", label: "S5",
    stem: "S5. Según la noticia, ¿cómo recuperarán los estudiantes colombianos las clases suspendidas?",
    choices: ["asistiendo a clases nocturnas", "estudiando por correspondencia", "tomando clases en los períodos de vacaciones", "repitiendo el primer trimestre el año siguiente"],
    answer: 2,
    back: "(3) tomando clases en los períodos de vacaciones — “los estudiantes recuperarán las clases en los períodos de vacaciones” después del trimestre dedicado a alfabetizar." },
  { ...STIMULI.goya, type: "mc", label: "S6",
    stem: "S6. Según la selección, ¿por qué se dirigió Goya a París en 1770?",
    choices: ["para aprender la técnica del fresco", "para casarse con Josefa", "para vender sus tapices a la corte", "para escaparse de la invasión napoleónica"],
    answer: 0,
    back: "(1) para aprender la técnica del fresco — “En 1770, Goya se dirigió a París para aprender la técnica del fresco,” y al año siguiente regresó a Zaragoza a pintar frescos en diversas iglesias." },
  { ...STIMULI.goya, type: "mc", label: "S7",
    stem: "S7. ¿En qué se basaban los numerosos diseños que Goya hizo en la fábrica de tapices?",
    choices: ["en escenas de batallas militares", "en la vida campesina alegre y simple", "en retratos de la familia real", "en las obras de la Tauromaquia"],
    answer: 1,
    back: "(2) en la vida campesina alegre y simple — en la fábrica de tapices Goya hizo “numerosos diseños basados en la vida campesina alegre y simple,” obras que decoraron el palacio del Prado y El Escorial." },
  { ...STIMULI.r22, type: "mc", label: "S8",
    stem: "S8. According to the article, where did Miguel López-Alegría's parents settle when he was only two years old?",
    choices: ["Madrid, Spain", "Rome, Italy", "Boston, in the United States", "Houston, Texas"],
    answer: 2,
    back: "(3) Boston, in the United States — “sus padres se fueron a vivir a Boston, en Estados Unidos, cuando él sólo tenía dos años,” and he spent most of his life in that country." },
  { ...STIMULI.r23, type: "mc", label: "S9",
    stem: "S9. According to this article, why is saffron so expensive?",
    choices: ["Only three threads can be taken from each crocus flower, by hand.", "It grows only in one region of the world.", "It must be transported by airplane.", "It loses its flavor quickly after harvest."],
    answer: 0,
    back: "(1) Only three threads can be taken from each crocus flower, by hand — “de cada flor de crocus sólo se pueden sacar 3 hilos de azafrán, lo que además, debe hacerse a mano y encarece enormemente su cultivo y manufactura.”" },
  { ...STIMULI.juanga, type: "mc", label: "S10",
    stem: "S10. Who helped the teenage Alberto Aguilera while he was selling tortillas in the street?",
    choices: ["a Hollywood producer", "his mother", "two nuns", "a radio announcer"],
    answer: 2,
    back: "(3) two nuns — “las monjas Leonor y Beatriz Berumen lo vieron mientras vendía tortillas en la calle y lo invitaron a vivir con ellas para ayudarlo.”" }
];
