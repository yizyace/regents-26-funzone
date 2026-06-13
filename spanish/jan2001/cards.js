// January 25, 2001 Comprehensive Examination in Spanish — session deck.
// Source: exam.pdf / tdc.pdf / key.pdf, raw-docs/nysedregents.org/spanish/jan2001/.

const STIMULI = {
  "l01": {
    "passage": "[Background] You are listening to the radio and the announcer reads this letter from a listener:\n\n[La maestra lee] El propósito de mi carta es darles las gracias por la entrevista en el mes de\nfebrero con la cantante Ana Gabriel. Ella es mi cantante favorita y preferida. Me\nagradó mucho su entrevista, pero al mismo tiempo lamento que no haya sido más\nextensa. ¿Les sería posible entrevistar a Ana Gabriel por mucho más tiempo, la\npróxima vez?",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l02": {
    "passage": "[Background] You are watching television in Mexico City and hear this announcement:\n\n[La maestra lee] Establecer el amor a la lectura es menester hoy día para la juventud. Hay que\nenseñar a temprana edad el amor a la lectura. Es un hábito para toda la vida que\nvale la pena. Aquí tiene usted unas reglitas importantes para tener éxito en este\ncampo.\nEs importante que el niño seleccione lo que él desea leer. Visite la biblioteca\nfrecuentemente para ver los libros recién llegados. Otra excelente idea es darle al\nniño varios libros para leer antes de acostarse. Si es posible, pase tiempo leyendo\nal niño.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l03": {
    "passage": "[Background] While listening to the radio in Spain, you hear this announcement:\n\n[La maestra lee] La Radiotelevisión Española planea extender su señal por el sur de Estados\nUnidos. La Compañía de Radiotelevisión Española piensa llevar programas de\ncable a los estados de California, Nuevo México y Texas. También espera alcanzar\notro acuerdo que permitirá distribuir su programación por las redes de cable de\nFlorida. Esta señal internacional llegará a 800.000 hogares adicionales.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l04": {
    "passage": "[Background] You are watching the Spanish television channel on cable and hear:\n\n[La maestra lee] ¿Irlandeses cantando en español? Dada la presente popularidad de la música\nlatina, todo es posible. O por lo menos es lo que piensa el grupo de muchachitos\nque integran Boyzone, un quinteto irlandés que está causando sensación entre las\njovencitas de Europa y América.  ¿El secreto? Boyzone canta en inglés y español e\nincluye temas de cantantes latinos. El éxito de este grupo empezó en Europa, con\nsu primer álbum \"Said and Done\". Para satisfacer la alta demanda de música\nlatina, los chicos de Boyzone no dudaron en invitar a alguien muy especial, el\ntalentísimo Enrique Iglesias, para participar en su nuevo video.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l05": {
    "passage": "[Background] While listening to the radio, you hear this advertisement:\n\n[La maestra lee] En Miami, Florida, Thais Carreño ha creado un sistema revolucionario de\ncomidas a domicilio o \"cantinas\". La razón es que Carreño ha diseñado la manera\nde cocinar la rica comida cubana, manteniendo al mínimo el uso de grasa y usando\nelementos de la comida criolla cubana que son muy saludables. Esta preparación\nes completamente conforme con las sugerencias dietéticas de la Asociación\nNorteamericana del Corazón; logrando una comida baja en grasa y calorías y al\nmismo tiempo riquísima.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l06": {
    "passage": "[Background] You are on a flight to Spain. You hear the flight attendant make this announcement:\n\n[La maestra lee] Como pasajero, usted hace un papel muy importante en su seguridad personal.\nLo más importante y sencillo que Ud. puede hacer es asegurarse de siempre\nmantener su cinturón de seguridad abrochado. A pesar de los mejores esfuerzos\nde nuestros pilotos, ocasionalmente nos encontramos con turbulencias\ninesperadas. Comenzando este verano, Delta requerirá que todos sus pasajeros se\nqueden sentados y que mantengan sus cinturones de seguridad abrochados\nmientras estén en sus asientos.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l07": {
    "passage": "[Background] While listening to a Spanish-language radio station, you hear this news broadcast:\n\n[La maestra lee] La Administración municipal de Nueva York piensa autorizar a los taxis de la\nciudad a equiparse con teléfonos portátiles para el uso de los clientes. Los\nprimeros vehículos con teléfono, que permitirán hacer llamadas pero no recibirlas,\nfuncionarán este verano. Las empresas de taxi y las compañías telefónicas discuten\nlas condiciones del mantenimiento de los aparatos y las tarifas.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l08": {
    "passage": "[Background] You are listening to an exchange student from Costa Rica talk about her country. She\n\n[La maestra lee] says:\nCosta Rica tiene una de las democracias más antiguas de América. Es una\nrepública libre e independiente. A diferencia de muchos otros países en América\nLatina, los habitantes de Costa Rica han disfrutado de plena estabilidad política.\nEn Costa Rica no se oye de revoluciones ni guerras civiles como en otras naciones\ncentroamericanas. Por ser una nación libre y democrática se le llama \"La Suiza\nCentroamericana\".",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l09": {
    "passage": "[Background] You are listening to the radio and hear this advertisement:\n\n[La maestra lee] La aerolínea española Iberia ahora ofrece un nuevo servicio a sus clientes, la\nventa de boletos electrónicos por la red mundial. Con este nuevo servicio, el\ncliente podrá hacer la reserva y pagar por su billete utilizando el ordenador. Usted\npuede pedir que le manden el boleto a su domicilio, o si prefiere, lo puede\nreclamar en el aeropuerto el día de su vuelo. Como siempre, Iberia está dispuesta\na mejorar sus servicios para complacer a sus clientes.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l10": {
    "passage": "[Background] You are in Puerto Rico watching a television program. You hear the announcer say:\n\n[La maestra lee] La compañía Disney comenzó a operar recientemente un nuevo crucero. El\ncrucero sale desde Miami y viaja hasta las Bahamas, parándose en la isla privada\nde Disney, Castaway.\nLos costos por persona para los turistas son de $2,000 y hasta $4,000. Estos\nprecios diseñados para paquetes de siete noches, incluyen tarifa aérea, entrada a\ntodos los parques y gastos del hotel en el Reino Mágico y las comidas dentro del\ncrucero en nave.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l11": {
    "passage": "[Background] Your teacher is telling you a story about a famous photographer. The teacher says:\n\n[La maestra lee] Antonio Pérez tenía 13 años cuando tuvo su primera experiencia con el\nperiodismo. Todos los días, al salir de clases, recorría en bicicleta las calles de su\nbarrio en el sur de Chicago distribuyendo el Diario, un pequeño periódico local.\nCinco años más tarde, Pérez se convirtió en fotoperiodista y por coincidencia, su\nprimera foto apareció publicada en el Diario.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l12": {
    "passage": "[Background] While listening to a Spanish radio station, you hear this commercial:\n\n[La maestra lee] La geometría de las caras humanas es muy variada. Así que tenemos caras\ncuadradas, caras redondas, triangulares, y hasta ovaladas. Esto importa a la hora de\nseleccionar las gafas. Existe una nueva línea de gafas tan individuales como cada\nconsumidor. Para la cara cuadrada, tienes marco de curva, la cara redonda necesita\nmonturas de línea recta o angular de color negro. Cada estilo nos hace ver mejor.\nEsta nueva línea también nos protege contra los rayos ultravioletas.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l13": {
    "passage": "[Background] You received a telephone call from a friend. This is the message on the answering\n\n[La maestra lee] machine:\n¡Hola! Soy María Mercedes. Llamo porque hoy mismo recibí los dulces que\nme mandaste. ¡Gracias por este regalo tan rico! Me acuerdo de haberlos comido\ncuando era niña. Son mis favoritos.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l14": {
    "passage": "[Background] A representative of a production company is speaking to a club at your school. The\n\n[La maestra lee] representative says:\nNarrada en inglés por la actriz Phylicia Rashad, esta videocinta les explica a los\nniños, en 25 minutos, la historia, la geografía y el folklore de Puerto Rico y la\nsituación de los puertorriqueños que viven en Estados Unidos. Compuesta de\nvarios segmentos, la grabación abarca desde los carnavales en Ponce, hasta la\npresentación de un coro escolar acompañado de instrumentos típicos de la isla.\nLos segmentos son bastante cortos como para mantener la atención y el interés de\nlos niños.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "l15": {
    "passage": "[Background] While listening to the Spanish news on television, you hear this information:\n\n[La maestra lee] \"Haciendo Ambiente 2000\" es un programa para enseñar a la comunidad en\ngeneral sobre la importancia de conservar las especies en peligro de extinción. El\nmiércoles 15 se llevará a cabo el Primer Eco Tour Ambiental. Ese día se regalarán\n1,000 árboles, habrá talleres de siembra y del reciclaje de papel, y se dará\ninformación de cómo conservar el medio ambiente. Se presentará también un\nprograma de reciclaje en los comercios participantes para mantener la ciudad de\nPonce limpia.",
    "psource": "Teacher Dictation Copy, January 2001 Comprehensive Spanish Regents"
  },
  "longReading": {
    "passage": "Una Entrevista con Luis Miguel\nVestido completamente de negro y bronceado por el sol de Los Angeles, Luis Miguel\nluce la mejor de sus sonrisas. Confiesa estar satisfecho de volver a España para dar unos\nconciertos después de seis meses de ausencia, seguramente porque no esperaba el éxito\nque aquí está cosechando. El cantante mexicano empezó su carrera artística a los 12 años\nen 1982 con su producción titulada “Luis Miguel, un sol”. Ahora con 28 años, una carrera\nconsolidada con esfuerzo y recompensada por gran cantidad de premios — cuatro\nGrammys entre ellos — viene dispuesto a ofrecer lo mejor de sí mismo en los cinco\nconciertos programados en Madrid, Barcelona, Valencia, Murcia, y Málaga. “Quiero\nagradecer a todo el público por su cariño incondicional y por haberme seguido siempre.\nSu amor interminable me inspiró y me dio energías en aquellos momentos cuando llegué\na pensar que nunca descubriría el éxito actual. A ellos les dedico mi esfuerzo, ya que por\nellos he logrado la fama mundial que tengo”, comentó el cantante.\nLuis Miguel fue nombrado el artista del Año 2000 y también fue reconocido como el\ncantante con más conciertos ofrecidos en el Auditorio Nacional. Estos reconocimientos se\nunen a los 346 discos de platino que ha obtenido en los 18 años de exitosa carrera,\ndurante la cual ha vendido más de 37 millones de discos a nivel mundial.\nEl periodista: ¿Esperabas tan buena aceptación en España? \nLuis Miguel :\nDesde luego que me ha sorprendido porque no esperaba una hospitalidad tan\ncálida y agradable. Me siento como en casa. Ahora vengo por poco tiempo,\npero me gusta tanto estar aquí que a lo mejor me quede a vivir en España.\nEl periodista: ¿Cuáles son las claves de tu éxito?\nLuis Miguel:\nNo conozco el secreto del éxito. Creo que he tenido éxito porque elijo las\ncanciones con las que me identifico y trabajo mucho.\nEl periodista: ¿Disfrutas cantando boleros?\nLuis Miguel:\nSoy un enamorado del bolero y otras canciones de emoción de ternura.\nCuando canto un bolero, puedo expresarme con todo mi corazón y mis\nsentimientos. No sabría elegir uno en especial de todos los que canto.\nEl periodista: Tú mantienes tu residencia principal en Los Angeles. ¿No has pensado\ncantar en inglés para entrar más directamente en el mercado americano?\nLuis Miguel:\nNo. El español es una lengua muy importante en el mundo y creo que hay\nque defenderla por encima de todo. No he considerado cantar en otro\nidioma. \nEl periodista: ¿Qué le pides a la vida?\nLuis Miguel:\nMás música, más público y seguir evolucionando como intérprete musical.\nEl periodista: ¿Qué valor y significado tiene en tu vida el amor?\nLuis Miguel:\nEl amor lo es todo. Llevo toda mi vida cantando a ese grandioso\nsentimiento que rejuvenece y llena el corazón de las personas.\nEl periodista: Finalmente, ¿es cierto que te has casado?\nLuis Miguel:\nPor el momento, no; pero estoy muy enamorado y aún tengo la esperanza\nde casarme en un futuro cercano y formar una gran familia.",
    "psource": "Part 3a reading passage, January 2001 Comprehensive Spanish Regents"
  },
  "cloze": {
    "passage": "La Danza\nLa danza es una forma de expresión tan antigua\ncomo el hombre. Desde la más remota antigüedad,\nel bailar ha sido una actividad inherente a la\nexpresividad humana. La danza, o baile, está\nconsiderada en algunas culturas como la madre de\ntodas las artes. El bailar es una actividad exclusiva\ndel hombre. Forma parte de las actividades más\nnaturales e instintivas de la especie humana.\nEl baile es una actividad     (26)    , relajante, y\nbeneficiosa para la salud. Nos ayuda a mejorar\nnuestro estado físico y psíquico, nos permite\nmejorar nuestras relaciones sociales y ayuda a\nproyectar nuestra personalidad. Es una de las\nactividades más completas y exigentes de todas las\ndisciplinas gimnásticas que mantienen en forma\nnuestro     (27)    . Nos proporciona fuerza,\nflexibilidad, resistencia y ritmo. \nLos ejercicios físicos necesarios para aprender\ndeterminadas técnicas se coordinan con la música, y\nal mismo tiempo que vamos entrenando nuestro\ncuerpo mejoramos nuestra figura y adquirimos un\nsentido del ritmo y del equilibrio. Las personas que\npractican el baile     (28)    con equilibrio, elegancia\ny ritmo.\nAl principio, la danza se practicaba como un rito\nreligioso. Después de muchos siglos el baile ha\nevolucionado hasta convertirse en un agradable\n    (29)    . Existen múltiples tipos de bailes, unos\norientados a favorecer nuestra forma física y otros a \npotenciar nuestra expresividad corporal. Se puede\ndecir que las formas de practicar el baile son el \n\nballet clásico, el gim jazz, la danza regional y los\nbailes sociales. Y cada una de estas formas da\nbeneficios a sus practicantes.\nLa danza también favorece las relaciones\nsociales. Tanto el baile en grupos como el baile de\nsalón en pareja ayudan a crear nuevas amistades. Es\ndecir que el baile nos ayuda a conocer a nuevos\namigos en poco tiempo. La proximidad, el\nmovimiento del cuerpo y el contacto físico hacen\nque se rompa el hielo, estimulando la relación\ninterpersonal y provocando que el conocimiento sea\nmás rápido y relajado.\nTambién a través del baile podemos transmitir\nsensaciones y sentimientos. Podemos eliminar\ntensiones y conseguir una relajación física y mental\nsimilar a la que se obtiene en la práctica de\ncualquier otro ejercicio aeróbico. Como disciplina y\npráctica deportiva es una actividad ideal para\nproducir efectos calmantes en nuestro sistema\nnervioso. Además, está comprobado que danzar\nejerce un efecto     (30)    sobre nuestra mente\nproduciendo efectos similares a los que dan la\npsicoterapia y el yoga.",
    "psource": "Part 3c cloze passage, January 2001 Comprehensive Spanish Regents"
  },
  "q21doc": {
    "imgs": [
      {
        "src": "img/q21-peru-travel-ad.png",
        "cap": "Selection for Q21 — Para visitar Perú. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Travel advertisement from Utell inviting tourists to Peru with hotel discounts and visits to ruins and other attractions."
      }
    ]
  },
  "q22doc": {
    "imgs": [
      {
        "src": "img/q22-ojo-con-la-tv.png",
        "cap": "Selection for Q22 — Ojo con la TV. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Article advising adults not to use television as a routine activity for children and to encourage outdoor play and imagination."
      }
    ]
  },
  "q23doc": {
    "imgs": [
      {
        "src": "img/q23-marcavoz-ad.png",
        "cap": "Selection for Q23 — Marcavoz/telephone announcement. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Advertisement or announcement about telephone services, including dialing and telephone-line information."
      }
    ]
  },
  "q24doc": {
    "imgs": [
      {
        "src": "img/q24-editor-letter.png",
        "cap": "Selection for Q24 — reader letter to an editor. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Reader letter written to a magazine or editor about a printed mistake or earlier publication issue."
      }
    ]
  },
  "q25doc": {
    "imgs": [
      {
        "src": "img/q25-guitar-video-ad.png",
        "cap": "Selection for Q25 — Guitarra Facilísima. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Advertisement for a video method that teaches guitar at home, including a book, video, and free nylon strings."
      }
    ]
  },
  "writingPicture": {
    "imgs": [
      {
        "src": "img/q33-restaurant-scene.jpg",
        "cap": "Part 4b picture prompt for question 33. Source: January 25, 2001 Comprehensive Spanish Regents.",
        "alt": "Restaurant scene with a waiter and diners; students must write a story related to the picture."
      }
    ]
  }
};

const ALL_CARDS = [
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is this person’s complaint?",
    choices: [
        "The interview was not long enough.",
        "The interview did not include songs.",
        "The interview was not previously advertised.",
        "The interview was not interesting."
    ],
    answer: 0,
    back: "(1) The interview was not long enough. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is the main idea of this announcement?",
    choices: [
        "Children should get regular exercise to promote good health.",
        "Parents should encourage their children to develop new hobbies.",
        "Watching television may be helpful for some children.",
        "It is important to stimulate an interest in reading in children."
    ],
    answer: 3,
    back: "(4) It is important to stimulate an interest in reading in children. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What does the Spanish Radio-Television Network plan to do?",
    choices: [
        "offer the cable at discount prices",
        "offer more programs in English",
        "increase its listening and viewing audience",
        "move its main network offices to Mexico"
    ],
    answer: 2,
    back: "(3) increase its listening and viewing audience — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What was just announced?",
    choices: [
        "A popular Spanish singer appeared in a video with an Irish group.",
        "Boyzone performed in concert in Latin America.",
        "Boyzone invited English fans to appear in a new video.",
        "Enrique Iglesias toured Europe with the Irish group."
    ],
    answer: 0,
    back: "(1) A popular Spanish singer appeared in a video with an Irish group. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What does this advertisement promote?",
    choices: [
        "an exercise program",
        "helpful medicines",
        "new cooking utensils",
        "a healthier way of cooking"
    ],
    answer: 3,
    back: "(4) a healthier way of cooking — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What does the flight attendant advise you to do?",
    choices: [
        "remember to take all personal belongings",
        "stay seated during takeoff",
        "store your carry-on luggage carefully",
        "keep your seat belt fastened"
    ],
    answer: 3,
    back: "(4) keep your seat belt fastened — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What is this announcement about?",
    choices: [
        "certain telephone numbers that can be called for free",
        "the chance to receive a free telephone",
        "the opportunity to make telephone calls in taxis",
        "procedures to follow to comment on taxi service"
    ],
    answer: 2,
    back: "(3) the opportunity to make telephone calls in taxis — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is a distinguishing feature of Costa Rica?",
    choices: [
        "There has been widespread rebellion for many years.",
        "It has a long history of freedom and democracy.",
        "Its economy has changed little since it became a republic.",
        "Swiss investments have significantly affected the economy of Costa Rica."
    ],
    answer: 1,
    back: "(2) It has a long history of freedom and democracy. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What new service does this company now offer?",
    choices: [
        "laptops for business-class passengers",
        "additional frequent-flier miles",
        "more comfortable accommodations",
        "ticket purchases online"
    ],
    answer: 3,
    back: "(4) ticket purchases online — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Cuál es el propósito de este anuncio?",
    choices: [
        "ofrecer excursiones a Disneylandia en Europa",
        "hablar de una película nueva",
        "anunciar vacaciones por el nuevo barco de Disney",
        "inaugurar un nuevo hotel en las Bahamas"
    ],
    answer: 2,
    back: "(3) anunciar vacaciones por el nuevo barco de Disney — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué hacía Antonio cuando era un chico de 13 años?",
    choices: [
        "Distribuía los periódicos.",
        "Sacaba fotos.",
        "Arreglaba bicicletas.",
        "Escribía libros."
    ],
    answer: 0,
    back: "(1) Distribuía los periódicos. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué producto se anuncia?",
    choices: [
        "gafas de último estilo",
        "loción para la piel",
        "nuevos maquillajes para la cara",
        "un nuevo método de aprender matemáticas"
    ],
    answer: 0,
    back: "(1) gafas de último estilo — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Por qué llamó tu amiga?",
    choices: [
        "Quiere informarte de una noticia.",
        "Quiere agradecerte el regalo.",
        "Quiere verte pronto.",
        "Quiere invitarte a su casa."
    ],
    answer: 1,
    back: "(2) Quiere agradecerte el regalo. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué vende la compañía?",
    choices: [
        "instrumentos musicales",
        "viajes turísticos",
        "videocintas educacionales",
        "novelas históricas"
    ],
    answer: 2,
    back: "(3) videocintas educacionales — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Cuál es el tema de esta noticia?",
    choices: [
        "un nuevo programa de computadoras para el año 2000",
        "clases ofrecidas en una universidad",
        "la inauguración de un centro comercial",
        "la conservación de la naturaleza"
    ],
    answer: 3,
    back: "(4) la conservación de la naturaleza — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Por qué ha regresado Luis Miguel a España?",
    choices: [
        "para conocer este país mejor",
        "para casarse con su primer amor",
        "para descansar después de mucho trabajo",
        "para cantar sus últimas canciones"
    ],
    answer: 3,
    back: "(4) para cantar sus últimas canciones — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Cómo le ha recibido el público español a este cantante?",
    choices: [
        "con mucho entusiasmo",
        "con mucha melancolía",
        "con mucha tristeza",
        "con mucho disgusto"
    ],
    answer: 0,
    back: "(1) con mucho entusiasmo — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q18",
    stem: "Q18. Según Luis Miguel, ¿a qué atribuye su triunfo musical?",
    choices: [
        "a su vida estable en Los Angeles",
        "a su lugar del nacimiento",
        "a su esfuerzo y relación personal con su música",
        "a su apariencia juvenil"
    ],
    answer: 2,
    back: "(3) a su esfuerzo y relación personal con su música — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Por qué le gusta cantar boleros?",
    choices: [
        "porque son canciones sentimentales",
        "porque expresan sus ideas políticas",
        "porque describen su país natal",
        "porque contienen temas folklóricos"
    ],
    answer: 0,
    back: "(1) porque son canciones sentimentales — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué planes incluye su futuro?",
    choices: [
        "Quiere tener una familia algún día.",
        "Quiere regresar a México para vivir.",
        "Quiere grabar canciones en inglés.",
        "Quiere dejar de trabajar pronto."
    ],
    answer: 0,
    back: "(1) Quiere tener una familia algún día. — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "Q21",
    stem: "Q21. Who is advertising a trip to Peru?",
    choices: [
        "the government of Peru",
        "an airline",
        "a university",
        "a group of hotels"
    ],
    answer: 3,
    back: "(4) a group of hotels — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "Q22",
    stem: "Q22. To whom is this article directed?",
    choices: [
        "television producers",
        "teenagers",
        "advertisers",
        "parents of small children"
    ],
    answer: 3,
    back: "(4) parents of small children — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "Q23",
    stem: "Q23. This announcement provides information about",
    choices: [
        "low international telephone rates",
        "bilingual telephone operators",
        "voice-activated telephone dialing",
        "additional free telephone lines"
    ],
    answer: 2,
    back: "(3) voice-activated telephone dialing — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "Q24",
    stem: "Q24. Why did this reader write the letter?",
    choices: [
        "to thank the magazine staff for an article on conquerors",
        "to ask for a previous edition of the magazine",
        "to inform the magazine staff of a mistake they printed",
        "to find out about subscription prices"
    ],
    answer: 2,
    back: "(3) to inform the magazine staff of a mistake they printed — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "Q25",
    stem: "Q25. According to this advertisement, where can you learn to play the guitar?",
    choices: [
        "in the offices of Imperial Music in Los Angeles",
        "in your own home",
        "in your favorite music store",
        "in the Juan Gabriel music studio"
    ],
    answer: 1,
    back: "(2) in your own home — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
        "física",
        "inadecuada",
        "pasiva",
        "obscura"
    ],
    answer: 0,
    back: "(1) física — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
        "empleo",
        "hogar",
        "cuerpo",
        "espanto"
    ],
    answer: 2,
    back: "(3) cuerpo — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
        "se oyen",
        "se comprenden",
        "se visten",
        "se mueven"
    ],
    answer: 3,
    back: "(4) se mueven — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
        "viaje",
        "pasatiempo",
        "castigo",
        "monumento"
    ],
    answer: 1,
    back: "(2) pasatiempo — official scoring key answer for January 25, 2001."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
        "molestoso",
        "celoso",
        "temeroso",
        "beneficioso"
    ],
    answer: 3,
    back: "(4) beneficioso — official scoring key answer for January 25, 2001."
  },
  {
    type: "self",
    label: "W1",
    front: "W1 (Part 4a, Question 31 — note, at least 6 clauses). You are in a restaurant in San Juan. At the end of your meal, you are asked to evaluate the restaurant. Write a note in Spanish to the manager expressing your opinion of the restaurant. Salutation: Señor/Señora; Closing: Sinceramente, [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W2",
    front: "W2 (Part 4a, Question 32 — note, at least 6 clauses). You are an exchange student at a school in Mexico and would like to change one of your classes. Write a note in Spanish to your guidance counselor asking about changing one class. Salutation: Querido Señor/Querida Señora [counselor's name]; Closing: [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.writingPicture,
    type: "self",
    label: "W3",
    front: "W3 (Part 4b, Question 33 — composition, at least 10 clauses). In Spanish, write a story about the situation shown in the picture. It must be a story relating to the picture, not a description. Do not write a dialogue.",
    back: "Model response: write a complete Spanish narrative with a clear beginning, middle, and ending that uses the picture as the situation. Rubric: the response must accomplish the stated purpose, avoid dialogue-only writing, and include at least 10 clauses; each clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W4",
    front: "W4 (Part 4b, Question 34 — letter, at least 10 clauses). The Spanish Club newspaper is sponsoring an essay contest about a person you admire. Write a letter in Spanish to the newspaper telling about a person you admire. Dateline: el 25 de enero de 2001; Salutation: La tribuna español; Closing: Atentamente, [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.l01,
    type: "mc",
    label: "S1",
    stem: "S1. Which singer was the listener writing about?",
    choices: [
        "Ana Gabriel",
        "Luis Miguel",
        "Enrique Iglesias",
        "Julio Iglesias"
    ],
    answer: 0,
    back: "(1) Ana Gabriel — supported by the stimulus above."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S2",
    stem: "S2. Where does the announcement suggest children should go often?",
    choices: [
        "the library",
        "the zoo",
        "the airport",
        "the beach"
    ],
    answer: 0,
    back: "(1) the library — supported by the stimulus above."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S3",
    stem: "S3. Why is Costa Rica called “La Suiza Centroamericana”?",
    choices: [
        "because it is free and democratic",
        "because it has snowy mountains",
        "because it uses Swiss money",
        "because it has many banks"
    ],
    answer: 0,
    back: "(1) because it is free and democratic — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S4",
    stem: "S4. ¿A qué edad empezó Luis Miguel su carrera artística?",
    choices: [
        "a los 12 años",
        "a los 18 años",
        "a los 28 años",
        "a los 37 años"
    ],
    answer: 0,
    back: "(1) a los 12 años — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Dónde mantiene Luis Miguel su residencia principal?",
    choices: [
        "Los Angeles",
        "Madrid",
        "Valencia",
        "Málaga"
    ],
    answer: 0,
    back: "(1) Los Angeles — supported by the stimulus above."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "S6",
    stem: "S6. Which hotel company invites tourists to Peru?",
    choices: [
        "Utell",
        "Disney",
        "Iberia",
        "Imperial Music"
    ],
    answer: 0,
    back: "(1) Utell — supported by the stimulus above."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "S7",
    stem: "S7. What free item is included with the guitar course?",
    choices: [
        "a set of nylon strings",
        "a new guitar",
        "a concert ticket",
        "a music-store coupon"
    ],
    answer: 0,
    back: "(1) a set of nylon strings — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S8",
    stem: "S8. Según el pasaje, ¿qué actividad ayuda a crear nuevas amistades?",
    choices: [
        "el baile",
        "mirar televisión",
        "viajar en avión",
        "comprar revistas"
    ],
    answer: 0,
    back: "(1) el baile — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S9",
    stem: "S9. ¿Qué puede transmitir una persona a través del baile?",
    choices: [
        "sensaciones y sentimientos",
        "números de teléfono",
        "boletos electrónicos",
        "recetas de cocina"
    ],
    answer: 0,
    back: "(1) sensaciones y sentimientos — supported by the stimulus above."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S10",
    stem: "S10. What does “Haciendo Ambiente 2000” teach the community about?",
    choices: [
        "conserving endangered species and the environment",
        "opening a new mall",
        "using a computer program",
        "traveling to Disney"
    ],
    answer: 0,
    back: "(1) conserving endangered species and the environment — supported by the stimulus above."
  },
];
