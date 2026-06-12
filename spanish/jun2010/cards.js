// June 2010 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2010/.
// Spelling quirks ("tradícional", "Tambíen", "passsage", "El piensa",
// "cocidas", "predilecta- la", "Los Angeles") are verbatim from the
// printed exam, verified against page renders.

const TDC_SRC = "Teacher Dictation Copy, June 2010 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are watching television in Los Angeles and hear this announcement:

[La maestra lee] La organización, Futuro Planeta, propone la televisión como medio de enseñar a los ciudadanos sobre la ecología porque se considera la televisión un buen medio de educación. Todos debemos empezar a preocuparnos más por los problemas ambientales del planeta tales como la contaminación. Es esencial aprender sobre todo tipo de actividad que afectará la vida en el planeta para futuras generaciones. La televisión puede ser un instrumento de gran impacto para mejorar los problemas que afectan el planeta.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You hear this advertisement while visiting Puerto Rico:

[La maestra lee] Maquilla y cuida tu piel al mismo tiempo. “Carasuave” es la línea de maquillaje que contiene componentes que cuidan y protegen tu piel, incluyendo los efectos de los rayos ultravioleta. Dale a tu cara una apariencia impecable por larga duración. Disponible en muchas tiendas de alta calidad.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] While attending a meeting of your Spanish club, you hear this announcement:

[La maestra lee] Durante las próximas dos semanas nuestro club aceptará ropa y dinero para las personas que sufrieron a causa de las lluvias torrenciales en Nicaragua. Muchas personas han perdido sus casas a causa de las inundaciones y les va a llevar mucho tiempo construir de nuevo. Por favor, vamos a mostrarles a nuestros amigos de Nicaragua que ellos nos importan y que queremos ayudarlos. Traigan sus contribuciones a la próxima reunión del club.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] Your Spanish friend leaves you this message on your answering machine:

[La maestra lee] ¡Hola! Ay … cuánto siento que no estés en casa… ¿Ya le compraste un regalo a Dolores? Yo he estado buscando una bufanda y unos guantes pero no he encontrado ningún color que me guste. Por favor, llámame si piensas ir al centro comercial antes del sábado y así vamos juntas. Quiero estar segura de comprarle algo que sea útil y de última moda también. Llámame cuando regreses, por favor.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You hear this announcement on Chilean television:

[La maestra lee] Como ya es tradicional cada verano, la Facultad de Artes de la Universidad de Chile abre sus puertas al público interesado en desarrollar su habilidad en el baile. Se han abierto las inscripciones para la Cuarta Academia de Danza de Verano que se realizará entre el 9 y 19 de enero. Los interesados pueden optar a diferentes alternativas de cursos tales como: Danza Afro, Técnica Académica, y Danza Moderna. Para más información, llame al Profesor Romero en la Facultad de Artes.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] Your friend is unable to attend a special event. He explains:

[La maestra lee] Me encantaría ir contigo al festival de música folclórica este fin de semana pero no tengo tiempo. Como sabes, me interesa todo tipo de música, pero me han dado información sobre un examen para recibir una beca. Sólo cinco estudiantes recibirán dinero para sus estudios universitarios. Es muy importante para mí y mi familia. El apoyo financiero me ayudará a ser profesor un día. Por eso estoy pasando muchas horas preparándome para el examen. Diviértete y deséame buena suerte.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You hear this news broadcast on a radio station in Argentina:

[La maestra lee] Fue increíble el número de personas festejando en las calles de Buenos Aires ayer. La gente se asombró mucho porque fue la primera gran nevada del siglo. Fue alarmante que no paró de nevar por unas veinte horas. Todos se quedaron afuera disfrutando de la inesperada experiencia.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] Your friend Mercedes is telling you about where she lives. She says:

[La maestra lee] Estoy muy contenta con mi nuevo apartamento aunque me preocupa que tenga que pasar mucho tiempo buscando un lugar en la calle para estacionar mi coche. Mis amigos me recomendaron este barrio. Hace dos años que ellos viven aquí, y les gusta la proximidad a los servicios. El correo, el mercado y la lavandería están todos muy cerca. Como te dije, el estacionamiento es muy difícil porque hay tantos carros.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are watching television and hear this interview with Ignacio Ramos Altamira, who is discussing his latest book. He says:

[La maestra lee] La guitarra es uno de los instrumentos más universales. Pero poco se conoce de sus orígenes. ¿Cuándo y dónde surgió la guitarra? ¿Qué influencia tuvo la guitarra a través del mundo? ¿Qué diferencias hay entre la guitarra clásica y la del flamenco? Estas son preguntas que en alguna ocasión nos hemos hecho y cuyas respuestas Ud. podrá encontrar en este libro. Mi libro es entretenido e interesante.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You are on a bus in El Paso with your friend María. She says:

[La maestra lee] En mi clase de historia no creo que haya salido muy bien. Es que no tuve mucho tiempo para estudiar. Además había mucho material para aprender de memoria. Por eso el examen fue bastante difícil. No sé lo que voy a hacer si fracaso el curso. Voy a tener que repetir el curso en el verano. ¡Qué horror! ¡Imagínate! No voy a disfrutar del verano. ¡No hay nada peor!`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are watching a cooking show in Spanish and hear this:

[La maestra lee] Calienta el aceite en una sartén grande. Fríe los filetes de pollo por tres minutos. Añade la mezcla de cilantro y caldo sobre los pedazos de pollo y deja que hierva. Reduce el fuego. Cocina los filetes unos cinco minutos o hasta que estén cocidas y la salsa esté espesa. Adorna con cilantro picado. Sirve con arroz.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You hear this advertisement on a Mexican television station:

[La maestra lee] Celebra tu cumpleaños viviendo toda La Magia del Cine. El día de tu cumpleaños deja que nosotros organicemos tu fiesta y te cantemos “Las mañanitas” mientras disfrutas de tu película favorita junto con tus amigos. Además, el pastel es por nuestra cuenta. Pide nuestra oferta para fiestas de cumpleaños llamando al 55-MAGIAS. También puedes ir a nuestra página en el internet.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While listening to the radio in Spain you hear this announcement:

[La maestra lee] La alimentación sana puede ser divertida. Pronto se celebrará el día europeo de la comida y la cocina sana. En este día habrá eventos para enseñar a los niños europeos la importancia de comer bien.
Varios cocineros visitarán las escuelas y enseñarán a los estudiantes a preparar platos fáciles y agradables y les explicarán por qué es importante preparar y compartir comidas familiares. Según la Unión Europea los hábitos empiezan en la juventud. Si los niños se divierten cocinando comida nutritiva y haciendo ejercicios regularmente desde una edad temprana, tienen muchas probabilidades de continuar con esos hábitos en la edad adulta.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are listening to a radio report in Puerto Rico and hear this announcement:

[La maestra lee] Ya en unos pocos años los científicos esperan que podamos ver el primer avión impulsado con energía del sol. El objetivo de este avión es completar un vuelo de 36 horas sin usar ningún combustible. El proyecto quiere demostrar que el sol y su energía podrán ser usados en el futuro para hacer volar a los aviones. De esta manera, se podrán reducir las emisiones de gases que afectan la atmósfera y el clima del planeta.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a podcast about language and cultural diversity in Spain. You hear:

[La maestra lee] Los vascos llegaron a los Estados Unidos durante la Fiebre de Oro de California. Pronto se establecieron por todo el Oeste, trabajando como pastores y manteniendo las tradiciones y costumbres culturales de su madre patria, España. Los vascos son naturales de los Pirineos, montañas que hacen frontera entre España y Francia. Son de un pueblo culturalmente diferente al resto de las otras comunidades de España. Un aspecto singular de los vascos es que tienen su propia lengua — el euskera, una lengua sin relación al español ni al francés y que hasta hoy en día no podemos identificar cuál es su origen.`,
    psource: TDC_SRC
  },
  jaguares: {
    passage: `¿Quiénes son Los Jaguares?

Los Jaguares son el pilar del rock en México y uno de los grupos más importantes del rock en español. Su música, enigmática, paradójica, compleja y sencilla a la vez, refleja las inquietudes del alma. Es un grupo de música alternativa compuesta de Saúl Hernández, Alfonso André, y César López. Alfonso, el baterista, es el corazón del grupo; César, el guitarrista, es la alegría, y Saúl —autor de letra y de la mayor parte de la música — es el alma intensa. Para poder comprender a Los Jaguares es necesario conocer la historia del camino que el grupo ha seguido.

En el México de los años 80 las canciones rockeras desaparecieron de la radio, pero los jóvenes seguían a sus ídolos y se juntaban para escuchar rock en casas o lugares privados. Dentro de este marco el rock mexicano se continuó desarrollando pero, a diferencia del rock de los Estados Unidos que rápidamente se comercializó, el rock mexicano tenía, como propósito, la lucha del hombre común en su vida diaria.

En 1984 Saúl Hernández, Alfonso André y Alejandro Marcovich fueron invitados, individualmente, a tocar en una fiesta pública que se celebraba en la calle. Pocos días después de conocerse formaron un grupo que decidieron llamar Las Insólitas Imágenes de Aurora, grupo cuyo nombre proviene de un cuento que había escrito Saúl. “Yo crecí en una casa donde se escuchaba música de todo tipo. La música fue una fuerza muy grande en mi desarrollo como cantante,” dice Saúl. Él cuenta que cuando tenía nueve años, la música se convirtió en su refugio. “Así, empecé a componer canciones y cuentos,” recuerda él. Para 1987 y por diversas razones, el grupo Las Insólitas Imágenes de Aurora, dejó de existir. Saúl y Alfonso formaron un grupo sin su compañero, César, llamado Los Caifanes, que pretendía combinar el rock con la cultura mexicana. El grupo vio la necesidad de llevar su mensaje a mayores audiencias. Saúl explica: “Con este nuevo grupo firmamos un contrato y entramos en la industria de la música.” Una canción de Saúl en su primer CD les trajo una fama increíble.

Según René Rosales, un admirador del grupo desde el principio, “La letra de las canciones es muy profunda. La música de Saúl es universal, su mensaje es colectivo; por eso llega a más gente y las canciones no se olvidan pronto.” Los Caifanes tuvieron otros miembros que eran invitados para algunas de las grabaciones, pero los miembros constantes siempre fueron Saúl y Alfonso. Los Caifanes grabaron cuatro discos. A pesar del éxito, Los Caifanes se desintegró en 1995, al parecer porque Saúl nunca quiso que las presiones comerciales cambiaran la identidad del grupo.

Unos años más tarde estos jóvenes músicos comenzaron a discutir su historia y decidieron formar el grupo que hoy conocemos como Los Jaguares. Durante esas conversaciones, Los Jaguares decidieron cambiar el propósito del grupo y formar un grupo musical completamente diferente a los grupos tradicionales. Nadie tiene un contrato. Estos músicos no tienen que quedarse con el grupo; pueden salir y entrar cuando quieran. Los miembros tienen más libertad. El primer disco de Los Jaguares, “Bajo el azul de tu misterio,” fue algo enigmático y sentimental. El segundo, “Cuando la sangre galopa” evoca memorias de los Beatles y el “soft rock” de los años 60. En este caso, la música es el vehículo que transporta el mensaje de las canciones. Su último álbum “Primer instinto,” es otro experimento musical. Este CD es una compilación acústica que incluye una nueva versión de un tema del famoso cantante Juan Gabriel, “Te lo pido por favor.” “Nos ha resultado muy interesante. Colaboramos con el mariachi El Sol de México, la Sonora Santanera y David Hidalgo,” comenta Alfonso. Hoy Los Jaguares llenan los estadios en ciudades como Los Angeles, Dallas, Monterrey y Guadalajara.

Sus admiradores siguen fielmente al grupo año tras año. Tambíen estos admiradores son los primeros en decir que lo que les gusta más es la sinceridad de los miembros y la verdad de las experiencias que cuentan en sus canciones.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 22, 2010"
  },
  chicle: {
    imgs: [
      { src: "img/q21-chicle-articulo.png",
        cap: "Article about chicle — reading selection for question 21, Comprehensive Examination in Spanish, June 2010",
        alt: "Boxed article in Spanish about chicle, the chewing gum obtained from the sap of the Chicozapote tree native to southeastern Mexico. Used since antiquity by Mayan civilizations, it began to be exploited commercially in the mid-19th century when a U.S. brand mixed it with sweeteners and flavorings in tablets and pastilles. By the end of the 19th century production exceeded 1,000 tons, an important economic activity in the country's southeast. Since 1935 the Mexican government has intervened in the exploitation of the Chicozapote tree from production through export, with the Secretaria de Agricultura Mexicana setting the parameters for cultivating and harvesting this latex. Most chicle is exported to the United States and in smaller proportion to Japan; Mexico uses only 5% of total production. Chicle is a popular sweet worldwide, from children to the elderly. Closing line: Orgullosamente mexicano (proudly Mexican)." }
    ]
  },
  cuentos: {
    imgs: [
      { src: "img/q22-cuentos-con-sazon.png",
        cap: "“Cuentos con sazón” book advertisement — reading selection for question 22, Comprehensive Examination in Spanish, June 2010",
        alt: "Book advertisement: halftone cover of Cuentos con sazon by Lulu Delacre showing a girl holding a book amid drawings of food and kitchen scenes. Text below in Spanish explains that Cuentos con sazon tells several stories for children about the importance of the family, and that along with each story the author Lulu Delacre offers several cooking recipes supposedly cooked by the story's fictional family. The books are on sale at Lectorum; details at (212) 741-0220." }
    ]
  },
  ciclismo: {
    imgs: [
      { src: "img/q23-ciclismo-emboscada.png",
        cap: "“El ciclismo va a Emboscada” notice — reading selection for question 23, Comprehensive Examination in Spanish, June 2010",
        alt: "Boxed notice in Spanish titled El ciclismo va a Emboscada: for the fourth consecutive year the Paraguayan Cycling Federation holds the competition called Dia Nacional de la Bicicleta, with a road race this morning from 8 in Emboscada. Categories: 1a categoria for federated riders 19 and over; 2a categoria for riders 19 and over, federated or not; Junior for riders 17 and 18; Jovenes for riders 15 and 16; Master for riders 30 and over; Damas 16 and over. Prizes: in first category the winner takes 80,000 guaranies plus a trophy and second place gets 60,000 plus a trophy; for the remaining categories trophies go to the top three finishers in each category." }
    ]
  },
  telemundo: {
    imgs: [
      { src: "img/q24-telemundo-anuncio.png",
        cap: "Estudios-Telemundo advertisement — reading selection for question 24, Comprehensive Examination in Spanish, June 2010",
        alt: "Boxed advertisement in Spanish headed: Who makes the decisions about Telemundo's programming? Starting right now, it will be you! Telemundo has partnered with OTX to create Estudios-Telemundo, a place where you can shape the programming and everything related to the entertainment world such as movies, products, and music. When you give your opinion about the programming you will earn gifts such as (star-bulleted list): toys, music, books, clothing, electronic games. This is our way of thanking you for your ideas about the programs; press the Unete a Nosotros link on our web page right now and make your opinion count." }
    ]
  },
  consulta: {
    imgs: [
      { src: "img/q25-consulta-representante.png",
        cap: "“en español: consulta a un representante” advice column — reading selection for question 25, Comprehensive Examination in Spanish, June 2010",
        alt: "Rounded advice-column box in Spanish headed: en espanol, consulta a un representante. Question: If I participate in a summer program, do I have a better chance of being accepted at the institution I chose? Reply: Participating in a summer program at a university has several advantages: getting to know the institution's facilities and living a college experience; adapting to a roommate; learning to manage time for study and social life; making contact with professors, other members of the institution, and students. Another advantage is the opportunity to talk with enrolled students or with the academic/residential assistants who work in the program, often from other universities, a valuable tool for learning about your university and the application process; each institution has its own admission criteria, and the more you know the more prepared you will be to make a decision. An indirect advantage of living on campus during the summer is the opportunity to have practice or real interviews and individual meetings with admissions counselors, gaining valuable information not only about the university but about its whole application process; counselors not only select students but also closely guide potential participants so they know the different options and can make the best decision for a successful higher education." }
    ]
  },
  ramos: {
    passage: `Jorge Ramos

Jorge Ramos es la famosa imagen con que todos identifican al Noticiero Internacional del canal Univisión. Tan grande es su poder con el público que la revista Hispanic Trends lo ha nombrado uno de los tres hispanos más influyentes de los Estados Unidos — aunque Ramos no está completamente de acuerdo.

Ramos tiene un estilo muy directo de entrevistar. Cuando le preguntamos qué lo caracteriza, inmediatamente contesta: “Mi independencia es lo que más me define.” Los periodistas que él más admira son dos mujeres: la italiana Oriana Fallaci y la mexicana Elena Poniatowska. Como ellas, “no me da miedo entrevistar a nadie… ni hacerle preguntas difíciles a cualquier líder poderoso.”

Aunque su manera es sencilla, Ramos es un hombre complejo. Es decir que cada aspecto de su persona es diferente, dependiendo de la situación. Él puede ser un buen padre cuando está con su familia, un buen amigo con sus compañeros de trabajo y un buen hijo con sus padres. A pesar de tener un saludo amable y una facilidad de conversación, Ramos es un hombre muy privado. “Soy de pocos amigos; no pasan de cinco los que realmente me conocen, y son de toda la vida.”

Siendo inmigrante, Ramos sufre el conflicto de ser de un país, pero vivir en otro. “Hay una canción de Facundo Cabral que dice ‘no soy de aquí, ni soy de allá.’ Creo que refleja perfectamente cómo me siento. Curiosamente, el tema de mi próximo libro es también el de muchos inmigrantes: el eterno regreso y la tragedia de no ser ni de un lado ni de otro. Yo llevo veinte años en este país y te juro que no hay día en que no piense regresar a mi país.” Ramos acepta que nadie lo forzó a salir de México, que en México hubiera sido un periodista con menos influencia. Por eso se siente agradecido de la oportunidad que le da su trabajo en los Estados Unidos.

Aquí su influencia es enorme y Ramos la usa para promover su causa predilecta- la causa de los inmigrantes. Y aunque está lleno de ideales, no se considera un idealista. “Yo soy muy pragmático en este aspecto.” Además de su lucha por los inmigrantes, Ramos contribuye dinero para una beca del Centro Latinoamericano del periodismo para ayudar a estudiantes latinoamericanos que quieran ser periodistas.

En cuanto a su carrera como escritor, Ramos dice: “Yo escribo porque estoy cansado de la televisión. Estoy cansado de tratar de explicar una guerra, una muerte, un conflicto en dos minutos.” Confiesa también su gran deseo de dejar su marca en el mundo. El piensa que necesita explicar sus ideas y emociones a través de los libros. “Siempre he tratado de dejar una huella. Esta es la razón principal por la que escribí los libros, porque nadie se acuerda de un programa de televisión.”

Como todo personaje público, tiene admiradores y críticos. Los mexicanos están muy orgullosos de él por su buen trabajo. Sus admiradores señalan su profesionalismo, sus sacrificios y su gran inteligencia. Todos reconocen sus cualidades para investigar profundamente la noticia ante cualquier obstáculo y, sin excepción, lo respetan.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 22, 2010"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-nino-regalo.png",
        cap: "Picture for writing task 33 — Bil Keane, “The Family Circus” (adapted), Comprehensive Examination in Spanish, June 2010",
        alt: "Line-drawing cartoon in a circular panel: a small boy carrying a large wrapped gift with a bow walks along the street past a parked van, while a woman in the driver's seat turns to look at him. The panel is dated 11-27 and marked copyright 1987 Cowles Syndicate, Inc." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What does this organization want to do?",
    choices: [
      "explain the importance of music in our lives",
      "investigate the possibility of life on other planets",
      "produce new television programs about experiments in space",
      "promote environmental education through the use of television"
    ],
    answer: 3,
    back: "(4) promote environmental education through the use of television — Futuro Planeta \"propone la televisión como medio de enseñar a los ciudadanos sobre la ecología\" because TV is considered a good means of education."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What type of product is being advertised?",
    choices: [
      "sunglasses",
      "makeup",
      "hair spray",
      "nail polish"
    ],
    answer: 1,
    back: "(2) makeup — \"Carasuave\" es \"la línea de maquillaje que contiene componentes que cuidan y protegen tu piel.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is this announcement about?",
    choices: [
      "tourist attractions in Nicaragua",
      "an international night at school",
      "donations for flood victims",
      "a student exchange program"
    ],
    answer: 2,
    back: "(3) donations for flood victims — the club will accept clothing and money for the people who suffered from the torrential rains and floods in Nicaragua."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is your friend’s problem?",
    choices: [
      "She cannot meet with you.",
      "She cannot find the right present.",
      "She cannot go on the school trip.",
      "She cannot work on the weekend."
    ],
    answer: 1,
    back: "(2) She cannot find the right present — she has been looking for a scarf and gloves for Dolores \"pero no he encontrado ningún color que me guste,\" and wants something useful and fashionable."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What would individuals enrolled in this program study?",
    choices: [
      "computer programming",
      "language",
      "dance",
      "modern literature"
    ],
    answer: 2,
    back: "(3) dance — enrollment is open for the Cuarta Academia de Danza de Verano, with courses such as Danza Afro, Técnica Académica, and Danza Moderna."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. Why is your friend unable to go to the music festival?",
    choices: [
      "He does not care for that type of music.",
      "He must meet with his science teacher.",
      "He does not have the money for a ticket.",
      "He is studying for a scholarship exam."
    ],
    answer: 3,
    back: "(4) He is studying for a scholarship exam — \"me han dado información sobre un examen para recibir una beca\"; only five students will receive money for university studies, so he is spending many hours preparing."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is this news story about?",
    choices: [
      "a major snowstorm",
      "a recent election",
      "a sporting event",
      "a serious accident"
    ],
    answer: 0,
    back: "(1) a major snowstorm — people celebrated in the streets of Buenos Aires because it was \"la primera gran nevada del siglo,\" and it did not stop snowing for some twenty hours."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What does Mercedes say about her new neighborhood?",
    choices: [
      "There is limited parking.",
      "Shopping is not very convenient.",
      "She does not have any friends who live nearby.",
      "There is little public transportation."
    ],
    answer: 0,
    back: "(1) There is limited parking — \"el estacionamiento es muy difícil porque hay tantos carros\"; she spends a lot of time looking for a street spot for her car."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. According to the speaker, what is included in this book?",
    choices: [
      "a glossary of musical terms",
      "biographies of flamenco dancers",
      "a history of the guitar",
      "interviews with famous musicians"
    ],
    answer: 2,
    back: "(3) a history of the guitar — the book answers \"¿Cuándo y dónde surgió la guitarra? ¿Qué influencia tuvo la guitarra a través del mundo?\" — little is known of its origins."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué no quiere hacer María?",
    choices: [
      "Visitar a sus abuelos en el verano.",
      "Volver a viajar por autobús.",
      "Asistir a clases en el verano.",
      "Trabajar en una granja comercial."
    ],
    answer: 2,
    back: "(3) Asistir a clases en el verano — si fracasa el curso de historia, \"Voy a tener que repetir el curso en el verano. ¡Qué horror!... No voy a disfrutar del verano.\""
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué comida se prepara aquí?",
    choices: [
      "un pastel de frutas",
      "una bebida fría",
      "una tortilla de huevos",
      "un plato de carne"
    ],
    answer: 3,
    back: "(4) un plato de carne — la receta fríe filetes de pollo, añade cilantro y caldo, y se sirve con arroz."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué se ofrece en este anuncio?",
    choices: [
      "oportunidades de viajar al extranjero",
      "entradas gratis a un festival internacional",
      "una fiesta de cumpleaños que incluye una película",
      "una comida italiana en un restaurante famoso"
    ],
    answer: 2,
    back: "(3) una fiesta de cumpleaños que incluye una película — La Magia del Cine organiza tu fiesta y te canta \"Las mañanitas\" mientras disfrutas de tu película favorita; además, el pastel es gratis."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Cuál es el propósito de este programa?",
    choices: [
      "darles un premio a los mejores restaurantes",
      "promover buenos hábitos de alimentación",
      "ofrecer comida gratis a los estudiantes",
      "reconocer a los mejores atletas"
    ],
    answer: 1,
    back: "(2) promover buenos hábitos de alimentación — en el día europeo de la comida sana, cocineros enseñarán a los niños a preparar platos y a comer bien, porque \"los hábitos empiezan en la juventud.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué se anuncia aquí?",
    choices: [
      "el uso de energía solar para volar los aviones",
      "el cambio de altas tarifas aéreas",
      "el aumento de velocidad de los nuevos aviones",
      "el diseño de una nave para viajes al espacio"
    ],
    answer: 0,
    back: "(1) el uso de energía solar para volar los aviones — los científicos esperan ver \"el primer avión impulsado con energía del sol,\" capaz de un vuelo de 36 horas sin combustible."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. Según este programa, ¿qué se dice sobre los vascos?",
    choices: [
      "El origen de su idioma es desconocido.",
      "Son descendientes de los Mayas.",
      "No pudieron quedarse por mucho tiempo en los Estados Unidos.",
      "No trataron de conservar su cultura."
    ],
    answer: 0,
    back: "(1) El origen de su idioma es desconocido — el euskera es \"una lengua sin relación al español ni al francés y que hasta hoy en día no podemos identificar cuál es su origen.\""
  },
  // ----- Part 3a: Long reading passage (Q16-20) -----
  { ...STIMULI.jaguares,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cómo era diferente el rock mexicano de los 80 al rock de los Estados Unidos?",
    choices: [
      "Era un rock menos comercial.",
      "Era un rock más tradícional.",
      "Era un rock bailable.",
      "Era un rock menos romántico."
    ],
    answer: 0,
    back: "(1) Era un rock menos comercial — \"a diferencia del rock de los Estados Unidos que rápidamente se comercializó, el rock mexicano tenía, como propósito, la lucha del hombre común en su vida diaria.\""
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "Q17",
    stem: "Q17. El grupo se llamaba Las Insólitas Imágenes de Aurora porque era el título de",
    choices: [
      "una película",
      "una canción",
      "un cuento",
      "un poema"
    ],
    answer: 2,
    back: "(3) un cuento — el nombre del grupo \"proviene de un cuento que había escrito Saúl.\""
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Por qué se desintegró el grupo Los Caifanes?",
    choices: [
      "porque los miembros necesitaban pasar más tiempo con sus familias",
      "porque los miembros querían ganar más dinero",
      "porque no les gustaba competir con otros grupos",
      "porque no querían perder su identidad"
    ],
    answer: 3,
    back: "(4) porque no querían perder su identidad — Los Caifanes se desintegró en 1995 \"al parecer porque Saúl nunca quiso que las presiones comerciales cambiaran la identidad del grupo.\""
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Por qué es diferente a los grupos tradicionales el grupo Los Jaguares?",
    choices: [
      "Algunos miembros del grupo cambian regularmente.",
      "Contribuyen su dinero a los pobres.",
      "Sólo aparecen en lugares pequeños e íntimos.",
      "Graban sus CDs mientras tocan en los conciertos."
    ],
    answer: 0,
    back: "(1) Algunos miembros del grupo cambian regularmente — \"Nadie tiene un contrato. Estos músicos no tienen que quedarse con el grupo; pueden salir y entrar cuando quieran.\""
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué les gusta a los admiradores de Los Jaguares?",
    choices: [
      "la realidad que expresan en su música",
      "las voces femeninas de varias canciones",
      "los instrumentos que usan",
      "el uso de poemas clásicos en sus canciones"
    ],
    answer: 0,
    back: "(1) la realidad que expresan en su música — lo que más les gusta es \"la sinceridad de los miembros y la verdad de las experiencias que cuentan en sus canciones.\""
  },
  // ----- Part 3b: Realia (Q21-25) -----
  { ...STIMULI.chicle,
    type: "mc",
    label: "Q21",
    stem: "Q21. Which statement about chicle is best supported by this article?",
    choices: [
      "Japan is the largest buyer of chicle.",
      "Chicle is difficult to grow.",
      "Mexico exports the majority of chicle to other countries.",
      "Chicle originated in the United States."
    ],
    answer: 2,
    back: "(3) Mexico exports the majority of chicle to other countries — \"La mayor parte del chicle se exporta a los Estados Unidos y en menor proporción al Japón... México utiliza sólo el 5% de la producción total.\""
  },
  { ...STIMULI.cuentos,
    type: "mc",
    label: "Q22",
    stem: "Q22. What does this book contain?",
    choices: [
      "recipes for the family",
      "children’s artwork",
      "cartoon stickers",
      "ideas for parties"
    ],
    answer: 0,
    back: "(1) recipes for the family — along with each story, author Lulu Delacre \"ofrece varias recetas de cocina que supuestamente son cocinadas por la familia ficticia del cuento.\""
  },
  { ...STIMULI.ciclismo,
    type: "mc",
    label: "Q23",
    stem: "Q23. In which of the divisions will the winner receive both a monetary prize and a trophy?",
    choices: [
      "master",
      "junior",
      "first category",
      "women"
    ],
    answer: 2,
    back: "(3) first category — \"en primera categoría; el primer puesto se llevará 80.000 guaraníes más un trofeo; el segundo, G. 60.000 más trofeo\"; the other categories get trophies only."
  },
  { ...STIMULI.telemundo,
    type: "mc",
    label: "Q24",
    stem: "Q24. What must consumers do to qualify for the rewards?",
    choices: [
      "make a purchase",
      "provide an opinion",
      "attend a movie premiere",
      "join a club"
    ],
    answer: 1,
    back: "(2) provide an opinion — \"Cuando das tu opinión sobre nuestra programación vas a ganar regalos\" such as toys, music, books, clothing, and electronic games."
  },
  { ...STIMULI.consulta,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does this person recommend?",
    choices: [
      "enroll in a sports program",
      "get work experience",
      "travel to other countries",
      "learn about college life"
    ],
    answer: 3,
    back: "(4) learn about college life — the representative recommends a university summer program: get to know the facilities, live a college experience, adapt to a roommate, manage your time, and meet professors, students, and admissions counselors."
  },
  // ----- Part 3c: Second reading passage, questions in English (Q26-30) -----
  { ...STIMULI.ramos,
    type: "mc",
    label: "Q26",
    stem: "Q26. According to the passage, why does Jorge Ramos admire Oriana Fallaci and Elena Poniatowska?",
    choices: [
      "They both won a Nobel Prize.",
      "They were instrumental in changing Mexican law.",
      "They began their careers when they were very young.",
      "They are not afraid to interview anyone."
    ],
    answer: 3,
    back: "(4) They are not afraid to interview anyone — like them, Ramos says \"no me da miedo entrevistar a nadie… ni hacerle preguntas difíciles a cualquier líder poderoso.\""
  },
  { ...STIMULI.ramos,
    type: "mc",
    label: "Q27",
    stem: "Q27. What personal information about Jorge Ramos is given in the passage?",
    choices: [
      "He had no formal education.",
      "He avoids attending formal events.",
      "He has a very complex personality.",
      "He would like to run for public office."
    ],
    answer: 2,
    back: "(3) He has a very complex personality — \"Aunque su manera es sencilla, Ramos es un hombre complejo\": each aspect of his persona differs depending on the situation, and he is a very private man."
  },
  { ...STIMULI.ramos,
    type: "mc",
    label: "Q28",
    stem: "Q28. In his new book, Jorge Ramos will write about the challenges of",
    choices: [
      "living in one country, but having come from another country",
      "coping with future changes in technology",
      "dealing with the demands of being a role model",
      "choosing the right profession to match one’s talents"
    ],
    answer: 0,
    back: "(1) living in one country, but having come from another country — the theme of his next book is that of many immigrants: \"el eterno regreso y la tragedia de no ser ni de un lado ni de otro.\""
  },
  { ...STIMULI.ramos,
    type: "mc",
    label: "Q29",
    stem: "Q29. According to the passsage, Jorge Ramos provides support for",
    choices: [
      "an organization to protect the environment",
      "a scholarship for Latin American students",
      "a school for foreign diplomats",
      "an association of national and international businesses"
    ],
    answer: 1,
    back: "(2) a scholarship for Latin American students — \"Ramos contribuye dinero para una beca del Centro Latinoamericano del periodismo para ayudar a estudiantes latinoamericanos que quieran ser periodistas.\""
  },
  { ...STIMULI.ramos,
    type: "mc",
    label: "Q30",
    stem: "Q30. Why does Jorge Ramos feel the need to write?",
    choices: [
      "He wants to promote his interest in Mexican culture.",
      "He wants to write about his family history.",
      "He wants to teach his journalistic skills to others.",
      "He wants to explain his thoughts and feelings."
    ],
    answer: 3,
    back: "(4) He wants to explain his thoughts and feelings — \"El piensa que necesita explicar sus ideas y emociones a través de los libros\"; he has always tried to leave a mark (\"una huella\")."
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). Your Spanish-language club has decided to hire a Spanish-speaking performer (or group) to come to your school for a show. In Spanish, write a letter to this performer (or group) to request a show for your school. You may wish to include:
• information about your school (location, size)
• how you heard about the group
• information about the club (members, purpose, activities)
• amount of money that the club has for payment
• why you are inviting the performer (or group)
• where the performer (or group) will be entertaining
• date and time of performance
• how you will publicize the show
• how many people will attend
• your contact information

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Estimado Señor López,
Yo soy José Gómez, presidente del club de español y le escribo para invitarle a hacer una presentación de flamenco en nuestro colegio. El club de español ha tenido muchos eventos durante el año. Vamos a tener una feria internacional el próximo abril y necesitamos intérpretes de música y bailes europeos. Nuestro colegio está en un pueblo de cinco mil personas en el centro del estado. Este programa tendrá lugar en el escenario del colegio el 20 de abril a las siete de la noche. Creemos que más de doscientas personas asistirán, incluyendo muchos miembros de la comunidad. Favor de llamar a José Gómez al número 555-8202. Espero que Ud. pueda participar en este evento especial.
Atentamente
José Gomez

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). You recently arrived home after visiting Spain as an exchange student. In Spanish, write a journal entry about your experience. You may wish to include:
• a description of your return trip
• your thoughts and feelings about leaving Spain
• your thoughts and feelings about being home
• a special memory of your stay with your Spanish family
• an event that took place during an excursion you took while in Spain
• your interest in having the host family visit you
• how the time in Spain has influenced your life
• your plans to stay in contact with your host family

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido diario,
Estoy muy contenta de haber regresado a casa, pero al mismo tiempo echo de menos a todos los que dejé en España. Este año pasado fue la mejor experiencia de mi vida. Pasé un año en la ciudad de Granada con una familia española. Me encantaba mucho la hora de la cena porque toda la familia se sentaba a la mesa y teníamos una conversación muy animada sobre los eventos del día. Tuve la oportunidad de visitar el famoso palacio árabe La Alhambra. ¡Qué divino es! Además, los jardines son espectaculares.
Un día quisiera invitar a mi familia española a nuestra casa. Sé que les gustaría mucho conocer los Estados Unidos y practicar el inglés que yo les enseñé.
Mi vida ha cambiado mucho en un año. He aprendido a comer mariscos y otros platos deliciosos que nunca había probado antes. También me he acostumbrado al horario español que me gusta mucho.
Bueno, querido diario. Tengo que preparar mis apuntes para la presentación que voy a hacer sobre España al club de español mañana.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Hoy es el cumpleaños de mi mejor amigo, Miguel. Tiene seis años. Mi madre y yo vamos a su fiesta. Yo le compré un regalo. Es un juguete muy divertido y popular. Estoy muy emocionado para ir porque todos nuestros amigos de la escuela estarán allí. Me dijo que vamos a comer pizza y dulces. También tiene una piñata muy grande para romper. Finalmente habrá un pastel de chocolate, que es mi favorito. Porque es mi mejor amigo, Miguel también me invitó a pasar la noche en su casa. Mañana voy con Miguel y su familia al estadio para ver un partido de béisbol. ¡Que fin de semana tan divertido!

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. Besides giving your face an impeccable appearance, what does the advertisement say Carasuave makeup does?",
    choices: [
      "It must be reapplied every hour.",
      "It cares for and protects the skin, including from ultraviolet rays.",
      "It comes in only one shade.",
      "It is sold exclusively online."
    ],
    answer: 1,
    back: "(2) It cares for and protects the skin, including from ultraviolet rays — \"contiene componentes que cuidan y protegen tu piel, incluyendo los efectos de los rayos ultravioleta\"; it is available in many high-quality stores."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S2",
    stem: "S2. When will the Cuarta Academia de Danza de Verano take place?",
    choices: [
      "during the first two weeks of June",
      "every weekend in September",
      "from July 4 to 14",
      "between January 9 and 19"
    ],
    answer: 3,
    back: "(4) between January 9 and 19 — \"se realizará entre el 9 y 19 de enero\" (summer in Chile); interested students can call Professor Romero at the Facultad de Artes for more information."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S3",
    stem: "S3. Según el anuncio, ¿qué recibirán gratis los clientes que celebren su cumpleaños con La Magia del Cine?",
    choices: [
      "el pastel",
      "las entradas",
      "los refrescos",
      "los juguetes"
    ],
    answer: 0,
    back: "(1) el pastel — \"Además, el pastel es por nuestra cuenta\": la empresa organiza la fiesta, canta \"Las mañanitas\" y regala el pastel; se pide la oferta llamando al 55-MAGIAS."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S4",
    stem: "S4. Según el programa, ¿qué trabajo hacían muchos vascos cuando se establecieron en el Oeste de los Estados Unidos?",
    choices: [
      "mineros",
      "cocineros",
      "pastores",
      "maestros"
    ],
    answer: 2,
    back: "(3) pastores — los vascos llegaron durante la Fiebre de Oro de California y \"se establecieron por todo el Oeste, trabajando como pastores y manteniendo las tradiciones y costumbres culturales de su madre patria, España.\""
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "S5",
    stem: "S5. Según la selección, ¿qué incluye el último álbum de Los Jaguares, “Primer instinto”?",
    choices: [
      "canciones originales de los Beatles",
      "una nueva versión de un tema de Juan Gabriel",
      "grabaciones de conciertos en estadios",
      "solamente música instrumental"
    ],
    answer: 1,
    back: "(2) una nueva versión de un tema de Juan Gabriel — \"Primer instinto\" es una compilación acústica que incluye una nueva versión de \"Te lo pido por favor,\" con colaboraciones del mariachi El Sol de México, la Sonora Santanera y David Hidalgo."
  },
  { ...STIMULI.jaguares,
    type: "mc",
    label: "S6",
    stem: "S6. Según la selección, ¿qué hacían los jóvenes mexicanos en los años 80 cuando las canciones rockeras desaparecieron de la radio?",
    choices: [
      "Se juntaban para escuchar rock en casas o lugares privados.",
      "Dejaron de escuchar la música rockera.",
      "Compraban discos de los Estados Unidos.",
      "Organizaban conciertos en los estadios."
    ],
    answer: 0,
    back: "(1) Se juntaban para escuchar rock en casas o lugares privados — \"los jóvenes seguían a sus ídolos y se juntaban para escuchar rock en casas o lugares privados.\""
  },
  { ...STIMULI.chicle,
    type: "mc",
    label: "S7",
    stem: "S7. According to the article, what has the Mexican government done since 1935?",
    choices: [
      "banned the export of chicle",
      "planted Chicozapote trees in northern Mexico",
      "promoted sugar-free chewing gum",
      "taken part in the chicle industry from production through export"
    ],
    answer: 3,
    back: "(4) taken part in the chicle industry from production through export — \"Desde 1935 el gobierno mexicano ha intervenido en la explotación del árbol de Chicozapote desde su producción hasta su exportación\"; the Secretaría de Agricultura Mexicana sets the parameters for cultivating and harvesting the latex."
  },
  { ...STIMULI.ciclismo,
    type: "mc",
    label: "S8",
    stem: "S8. According to the notice, riders in the Junior category must be",
    choices: [
      "15 and 16 years old",
      "17 and 18 years old",
      "19 years old and older",
      "30 years old and older"
    ],
    answer: 1,
    back: "(2) 17 and 18 years old — \"Junior – para corredores 17 y 18 años\"; Jóvenes covers 15 and 16, the first two categories are for riders 19 and over, and Máster starts at 30."
  },
  { ...STIMULI.consulta,
    type: "mc",
    label: "S9",
    stem: "S9. According to the column, what indirect advantage comes from living on a university campus during the summer?",
    choices: [
      "free housing for the school year",
      "a guaranteed scholarship",
      "the chance to have practice or real interviews and individual meetings with admissions counselors",
      "automatic admission to the institution"
    ],
    answer: 2,
    back: "(3) the chance to have practice or real interviews and individual meetings with admissions counselors — \"Una ventaja indirecta de vivir en el campus... es la oportunidad de poder tener tantas entrevistas de ensayo o reales y reuniones individuales con los consejeros de admisión.\""
  },
  { ...STIMULI.ramos,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, the magazine Hispanic Trends named Jorge Ramos",
    choices: [
      "one of the three most influential Hispanics in the United States",
      "the best news anchor on Spanish-language television",
      "the most popular author in Latin America",
      "the most generous philanthropist of the year"
    ],
    answer: 0,
    back: "(1) one of the three most influential Hispanics in the United States — \"la revista Hispanic Trends lo ha nombrado uno de los tres hispanos más influyentes de los Estados Unidos — aunque Ramos no está completamente de acuerdo.\""
  }
];
