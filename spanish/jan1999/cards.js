// January 27, 1999 Comprehensive Examination in Spanish — session deck.
// Source: exam.pdf / tdc.pdf / key.pdf, raw-docs/nysedregents.org/spanish/jan1999/.

const STIMULI = {
  "l01": {
    "passage": "[Background] A Spanish-speaking celebrity is being interviewed on television. She says:\n\n[La maestra lee] Yo era una niña como todas, con mucha fantasía y tenía el gran sueño de ser\npintora. Hija de padre chino y madre cubana, yo contemplaba con deleite mi\nmundo lleno de color que deseaba con fuerza en imágenes.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l02": {
    "passage": "[Background] You are at the airport in Cancun, Mexico, and hear this announcement:\n\n[La maestra lee] Señores y Señoras. Es prohibido llevar frutas o vegetales de México a los\nEstados Unidos. Todos los pasajeros deben abordar el avión sin productos\ncultivados en México. La aduana en los Estados Unidos va a confiscar alimentos\nde este país traídos por los turistas y también les pondrá una multa.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l03": {
    "passage": "[Background] You are at a shopping mall and hear this announcement over the public address\n\n[La maestra lee] system:\nCambio 16, fiel a su cita, ofrece a los hombres todo lo que necesitan saber para\nestar a la última moda esta primavera-verano en el extra Moda 16. En esta edición\nespecial hablamos de las tendencias en la moda de baño; los colores blancos,\ncrudos y tostados, protagonistas de la temporada; la nueva ropa interior; los\ncuidados personales o los movimientos que marcan el estilo nuevo en la\ndecoración. Por eso, Cambio 16 cuesta esta semana 475 pesetas.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l04": {
    "passage": "[Background] When you arrive home from school, you hear your Spanish friend's message on your\n\n[La maestra lee] telephone answering machine:\nTe habla, Alicia. Lo siento, pero no fui a recoger el reloj como te prometí.\nEscucha. Es que esta mañana mi coche no funcionó y pasé todo el día con mi\npapá y el mecánico. ¡Qué horror! Ya llamé al joyero para decirle que no podía ir.\nLo siento mucho. ¡Llámame cuando regreses!\nWhat message did Alicia leave on the answering machine?\n[2]\ntwice in succession. Make every effort to read the passage in the way students would hear it in an authentic setting.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l05": {
    "passage": "[Background] A visitor has come to your Spanish class to speak about her recent trip to Belize,\n\n[La maestra lee] Central America. She says:\nEste verano visité un lugar histórico maravilloso. Escondido en las junglas,\nexiste un auténtico tesoro de ciudades mayas. Este sitio data de miles de años y\nempieza ahora a ser apreciado por los arqueólogos. Al visitar este lugar histórico,\nse hace evidente que Belice fue una vez un gran centro del Imperio Maya. Allí,\npasé la mayor parte de mis vacaciones, y yo lo recomiendo a quien tenga interés\nen las civilizaciones antiguas.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l06": {
    "passage": "[Background] You are listening to a television program about famous Latin Americans and hear this\n\n[La maestra lee] information:\nLa actriz mexicana Angélica Rivera actúa en la telenovela \"La Dueña\". La\ntelenovela que recientemente terminó ahora se transmite en otros países. Es un\néxito en Chile, Puerto Rico, Perú y los Estados Unidos. Las transmisiones a estos\npaíses le han dado a esta estrella mexicana fama internacional. Ahora Angélica\nRivera iniciará su carrera como modelo y conductora de programas de videos.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l07": {
    "passage": "[Background] You are an exchange student in Spain. During your hosts' absence, you answer this call\n\n[La maestra lee] from a telephone company representative:\nHola. Soy representante de la telefónica y quisiera ofrecerles un servicio\nnuevo, Teletimbres. Este servicio les permite tener hasta dos números telefónicos\nadicionales en su línea. Los números, aunque usan sólo una línea, tienen sonidos\ndistintos. Así, el sonido del teléfono indicará para quién es la llamada antes de\ndescolgar.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l08": {
    "passage": "[Background] Your Spanish teacher is telling the class about an unusual \"festival\" in Spain. She says:\n\n[La maestra lee] En Buñol, un pequeño pueblo en el este de España, se celebra \"la tomatina\" el\núltimo miércoles de agosto. No es una fiesta religiosa, sino un corto tiempo de\ngozo en tirarse tomates. Camiones llenos de tomates bien maduros pasan por la\ncalle y reparten tomates a la gente, especialmente entre los chicos jóvenes. Con\nmucha risa, todos se tiran los tomates que vuelan por todas partes. \"La tomatina\"\ncomienza y termina según un horario estricto y con reglas de cuidado. Dos horas\ndespués de tirarse el último tomate, la calle está tan limpia como si nunca hubiera\nocurrido esta diversión.\nHow would visitors to this small village in Spain participate in its festival?\n[3]",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l09": {
    "passage": "[Background] While shopping in a supermarket in Mexico, you hear this advertisement:\n\n[La maestra lee] \"Comebien\", una marca líder en Europa, garantiza que sus productos son\nsanos y mantienen el sabor original y la riqueza en nutrientes. Estos productos son\nnaturales y, además, protegen y cuidan el medio ambiente. Se nota que no utilizan\nlos elementos químicos que contaminan los alimentos y que destruyen la riqueza\nde la tierra.\nWhat new type of product is being made available to consumers?\n[4]\n[5]\nAdminister Part 2b in the same manner as Part 2a.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l10": {
    "passage": "[Background] While in Madrid, you hear a sports commentator on television. He says:\n\n[La maestra lee] El origen de las gorras de béisbol fue muy práctico: para proteger a los\njugadores de los rayos del sol. Pero pronto se han hecho populares las gorras en\notros deportes. Hoy día la fabricación y comercialización de gorras deportivas es\nun negocio de primera magnitud. Ahora cuestan entre 1.850 pesetas y 15.000\npesetas.  Las gorras más deseables son las de los Yankees de Nueva York y las de\nlos White Sox de Chicago.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l11": {
    "passage": "[Background] Your friend is telling you about a way to relax. Your friend says:\n\n[La maestra lee] Yo trabajo como secretaria bilingüe en una agencia internacional. Como\npueden imaginarse siempre tengo mucho que hacer. A veces quiero dejarlo todo y\nsalir corriendo. Los únicos momentos en que me siento aliviada, son cuando leo\nmi nueva edición de VANIDADES. Cada página de esta revista es una sorpresa\nagradable para mí; siempre la leo toda, incluyendo la sección de correspondencia y\nsé que reciben miles de felicitaciones, las cuales apoyo sinceramente.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l12": {
    "passage": "[Background] You are listening to the radio and hear this advertisement:\n\n[La maestra lee] Los largos viajes por carretera serán más agradables gracias al sistema\nmultimedia Clarión para el automóvil. Detrás del asiento del conductor se instala\nun televisor a color de 15 centímetros, con vídeo, para que los viajeros del coche\ndisfruten de los largos viajes. Por sólo 250.000 pesetas los viajeros pueden disfrutar\nde juegos en la televisión o ver sus películas favoritas.\n¿Qué beneficio ofrece el sistema Clarión?\nanswers are in Spanish. I will now begin.\n[6]",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l13": {
    "passage": "[Background] You are talking to your friend Geraldo from Bolivia. He tells you about what happened\n\n[La maestra lee] to him last night at the movies. He says:\nLe pedí a una señora que estaba sentada delante de mí si sería tan amable de\nquitarse el sombrero. Ella me dijo en tono violento que si no podía ver que me\nsentara en otro lugar. Como el cine estaba bastante lleno decidí quedarme donde\nestaba porque no íbamos a conseguir otros asientos para sentarnos todos juntos.\nAsí que no pude disfrutar mucho la película.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l14": {
    "passage": "[Background] You are listening to the radio in Lima, Peru, and you hear this advertisement:\n\n[La maestra lee] Si tus dientes no están blancos es porque tú no quieres. Blanx, el nuevo\nproducto dentífrico, reúne dos conceptos en un solo producto: salud y belleza para\ntus dientes. Blanx es el primer dentífrico cosmético protector que blanquea tus\ndientes naturalmente. Contiene una sustancia natural, y previene la formación de\nlas caries. El blanco natural de tus dientes volverá. Es hora de que regrese el\nblanco de tus dientes. Blanx, dientes blancos, dientes sanos y de forma natural.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "l15": {
    "passage": "[Background] You are walking on a street in Barcelona and you hear Graciela and Rosa talking. Rosa\n\n[La maestra lee] says:\nOye, estoy harta de caminar. No conozco esta ciudad para nada. Hace media\nhora que caminamos y no encontramos el restaurante. Dices que estaba en esta\nesquina, pero ya le hemos dado la vuelta a la manzana varias veces y no lo vimos.\nVamos a preguntarle a alguien porque si no, vamos a llegar tarde a la cita.",
    "psource": "Teacher Dictation Copy, January 1999 Comprehensive Spanish Regents"
  },
  "longReading": {
    "passage": "Miguel de Cervantes Saavedra\nMe llamo Miguel de Cervantes Saavedra. Mis padres eran nobles pero muy pobres. Mi\nvida está llena de aventuras de todas clases. Yo creo que nací en Alcalá de Henares en\n1547, pero nadie puede asegurarlo. Estudié en la Universidad de Alcalá y en la de\nSalamanca.\nRecuerdo que cuando era niño me gustaba mucho leer. Siempre estaba leyendo.\nCuando iba por la calle recogía los papeles de la calle para leerlos.\nA los veintiún años me marché de España para probar mi fortuna. Trabajé al servicio\ndel Cardenal Aquaviva cuando llegué a Roma. Italia me gustó mucho y allí pude leer\nmuchos libros de los escritores clásicos italianos. Pero yo no había nacido para ser criado y\ndos años después me enlisté como soldado en el ejército, y me fui a pelear contra los\npiratas turcos.\nNuestro jefe era Don Juan de Austria, un príncipe valiente, que era hijo de Carlos V.\nPeleamos contra los piratas en las ciudades de Corfú, Túnez y Navarino. En 1571\nluchamos en el Golfo de Lepanto contra los turcos. En esta batalla yo fui herido en el\npecho y en la mano. Perdí el uso de la mano izquierda y por eso me llaman el Manco de\nLepanto. Estoy orgulloso de ese apodo.\nPero con una sola mano no podía pelear. Entonces decidí volver a Italia donde pasé el\ntiempo necesario para curarme y aprender el italiano.\nMuchos años después volví a España. ¡Qué triste! Mi padre había muerto, y mi familia\nestaba en la pobreza. En este punto de mi vida decidí cambiar de carrera. Yo dejé de ser\nsoldado y empecé a escribir. Desde niño siempre tuve interés en la literatura y en escribir.\nEstaba yo entonces enamorado de Catalina Salazar y Palacios. Me casé con ella, y ella\nfue la inspiración para mi primera obra, titulada La Galatea. Pero esta novela no tuvo\néxito. Entonces decidí escribir para el teatro y por cuatro años escribí muchas obras breves\ny unas treinta comedias. De las numerosas obras que yo escribí solamente la Numancia y\nlos Tratos de Argel tuvieron éxito. Confieso que me dejó muy triste que solamente dos de\nmis obras tuvieron éxito. Decidí buscar otro trabajo. Encontré un empleo de\nadministración en Sevilla. Pero aún allí me persiguió la mala fortuna. Por hacer un error\nfinanciero con el dinero de la compañía me pusieron en la cárcel.\n¡Qué días más tristes pasé en la cárcel! Pero, allí empecé a escribir mi primera novela,\nEl ingenioso hidalgo don Quijote de La Mancha, también conocido como Don Quijote. Por\nfin lo terminé. Se publicó. Fue un éxito. En un año se publicaron dos ediciones que fueron\ntraducidas a varios idiomas.\nContinué escribiendo. Publiqué una colección de Novelas Ejemplares; éstas son\ncuentos cortos sobre costumbres españolas de esta época. También escribí la segunda parte\nde Don Quijote. Muchos críticos creen que la segunda parte de Don Quijote es mejor que\nla primera parte. La última obra que escribí fue Los Trabajos de Persiles y Segismunda.\nEs verdad que mi vida fue muy difícil, pero mis dificultades me hicieron filósofo. Mis\naventuras fueron la materia que les dio vida a mis narraciones. Mis viajes me dieron nuevas\nideas y material que puedo usar por muchos años. ¡Estoy orgulloso de haber escrito el libro\ndivertido, Don Quijote, y de que me llamen el Manco de Lepanto!",
    "psource": "Part 3a reading passage, January 1999 Comprehensive Spanish Regents"
  },
  "cloze": {
    "passage": "Puerto Rico: Isla Turística\nAl ponerse el sol sobre las altas montañas de la\nCordillera Central de Puerto Rico, los techos rojos\nde Hacienda Juanita brillan en medio de la\nvegetación tropical. El patio central de la Hacienda\nJuanita es un refugio tranquilo con una plaza, una\nfuente y flores vibrantes. El aire fresco y los colores\npastel le dan al comedor un ambiente agradable.\nLa Hacienda Juanita fue establecida hace más\nde 150 años por un aristócrata español. La tierra era\nfértil para establecer una plantación de café. Hoy\ndía la Hacienda Juanita es uno de los destinos\nturísticos más especiales de la isla. La Hacienda es\nparte del sistema de paradores de Puerto Rico. Los\nparadores, o posadas, son hoteles pequeños con un\nespíritu particular. Los paradores se encuentran en\nlos lugares menos visitados de la isla por los turistas.\nLa Hacienda Juanita y los otros _\n26)\n_ están\nganando popularidad con los turistas que están\ncansados de los grandes hoteles. Estos _\n_ (27)\nestán ansiosos de escapar de la multitud para\nexplorar los variados encantos del campo\npuertorriqueño.\nSegún María Alicia Laird, una turista que viajó\nallí de Nueva York, la Hacienda Juanita provee una\nexperiencia típica de esta bella isla. En la Hacienda\n\"hay un verdadero deseo de preservar lo que es\nauténticamente _\n28)\n_. El menú es muy\ntípico. La piscina es una maravilla. La librería y la\ntienda de regalos tienen cosas auténticas. ¡Nos\nencantó!\"\n(26) 1 comedores\n2 paradores\n3 lagos\n4 terrenos\n(27) 1 visitantes\n2 nativos\n3 trabajadores\n4 estudiantes\n(28) 1 puertorriqueño\n2 neoyorquino\n3 americano\n4 internacional\n\nEn otros lugares de la isla, el sistema de\nparadores que son administrados por el gobierno\nofrece experiencias similares. Otra posada llamada\nVilla Parguera, al sudoeste de la isla, combina las\ncomodidades de un gran hotel con la atmósfera de\ninformalidad de un parador. \"Hay gente que viene\ncada año desde hace 25 años\", dice el gerente,\nNelson Ortega. \"Tenemos un _\n29)\n_familiar\nque se adapta perfectamente para cualquiera, desde\nparejas de Luna de Miel hasta ancianos\".\nUna de las atracciones del lugar es el maravilloso\nespectáculo nocturno en la Bahía Fosforescente.\nOtro lugar para visitar está a apenas 20 minutos. Se\ntrata del pueblo de Cabo Rojo, con sus acantilados\nlisos, sus olas fuertes y un faro construido en estilo\nespañol.\nCerca de la ciudad de Coamo, el Parador Baños\nde Coamo refleja la elegancia que cultivaba décadas\natrás, con los baños termales más exclusivos de la\nisla. Las aguas termales y el ambiente rural con\naspectos coloniales hace del Parador Baños de\nCoamo uno de los paradores más _\n(30)\nA la sombra de la montaña más alta de Puerto\nRico en la ciudad de Jayuya, la Hacienda Gripiñas es\notro de los paradores históricos. La vieja finca de\ncafé de la Hacienda Gripiñas está rodeada de\npalmeras. El terreno cuidadosamente mantenido da\nla imagen de elegancia ganada con esfuerzo.\nLuis Rivera, dueño de la Hacienda Juanita dice\nque \"En España, los paradores usualmente están en\nviejos castillos. Pero en Puerto Rico no usamos los\ncastillos como paradores, pero sí tenemos un\nencanto que es únicamente nuestro\".\n(29) 1 número\n2 país\n(30) 1 complicados\n2 baratos",
    "psource": "Part 3c cloze passage, January 1999 Comprehensive Spanish Regents"
  },
  "q21doc": {
    "imgs": [
      {
        "src": "img/q21-ingles-sin-barreras.png",
        "cap": "Advertisement for Inglés Sin Barreras, a video/audio/books course for learning English. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Inglés Sin Barreras advertisement showing a television/video learning system, audio cassettes, illustrated books, and a phone number for learning English."
      }
    ]
  },
  "q22doc": {
    "imgs": [
      {
        "src": "img/q22-alerta-modelaje.png",
        "cap": "Notice titled ¡Alerta! about modeling agencies. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Notice warning families to investigate modeling agencies, including licensing and contracts."
      }
    ]
  },
  "q23doc": {
    "imgs": [
      {
        "src": "img/q23-elpais-tarifas.png",
        "cap": "EL PAÍS international edition subscription-rate notice. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Newspaper notice explaining new subscription and cover-price rates for the international edition of EL PAÍS."
      }
    ]
  },
  "q24doc": {
    "imgs": [
      {
        "src": "img/q24-editorial-santiago.png",
        "cap": "Editorial about trash collection problems in Santiago. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Spanish editorial describing garbage accumulation, deteriorated collection trucks, and contamination in Santiago."
      }
    ]
  },
  "q25doc": {
    "imgs": [
      {
        "src": "img/q25-gelatina-royal.png",
        "cap": "Gelatina Royal advertisement. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Advertisement presenting Gelatina Royal as a fast, healthy dessert for modern households."
      }
    ]
  },
  "writingPicture": {
    "imgs": [
      {
        "src": "img/q33-dibujo-lampara.png",
        "cap": "Part 4b picture prompt for question 33. Source: January 27, 1999 Comprehensive Spanish Regents.",
        "alt": "Cartoon scene with a person at a table and a large lamp; students must write a story related to the picture."
      }
    ]
  }
};

const ALL_CARDS = [
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. As a child, what did this celebrity always want to do?",
    choices: [
        "become an artist",
        "visit other countries",
        "perform in the theater",
        "learn several languages"
    ],
    answer: 0,
    back: "(1) become an artist — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What information does this announcement give to tourists?",
    choices: [
        "There will be a short delay due to problems at Customs.",
        "Food and beverages will be served during the flight.",
        "Travelers bringing produce into the United States will be fined.",
        "Passengers traveling with young children will board first."
    ],
    answer: 2,
    back: "(3) Travelers bringing produce into the United States will be fined. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. Why is a new price being advertised?",
    choices: [
        "as a result of an increase in mailing costs",
        "as a result of a delay in the production schedule",
        "as a result of a temporary labor problem",
        "as a result of a special supplement"
    ],
    answer: 3,
    back: "(4) as a result of a special supplement — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What message did Alicia leave on the answering machine?",
    choices: [
        "She forgot to buy the watch.",
        "The jeweler did not have the gift ready.",
        "Her father borrowed her car for the day.",
        "She was unable to do the favor you wanted."
    ],
    answer: 3,
    back: "(4) She was unable to do the favor you wanted. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. Where did this traveler spend most of her time?",
    choices: [
        "relaxing on the beach in Belize",
        "visiting ruins from an ancient civilization",
        "shopping in a large historical city",
        "visiting historical museums in Belize"
    ],
    answer: 1,
    back: "(2) visiting ruins from an ancient civilization — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. How did Angélica Rivera achieve international fame?",
    choices: [
        "She was a model with several foreign agencies.",
        "Her soap opera was televised in other countries.",
        "She was a conductor of a Mexican orchestra.",
        "Her appearance in Mexican commercials made her popular."
    ],
    answer: 1,
    back: "(2) Her soap opera was televised in other countries. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. What does this message concern?",
    choices: [
        "disconnecting telephone service",
        "a new answering machine",
        "additional telephone numbers",
        "changes in telephone rates"
    ],
    answer: 2,
    back: "(3) additional telephone numbers — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. How would visitors to this small village in Spain participate in its festival?",
    choices: [
        "by throwing ripe tomatoes",
        "by marching in a parade",
        "by tasting a variety of regional dishes",
        "by dancing in the streets"
    ],
    answer: 0,
    back: "(1) by throwing ripe tomatoes — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What new type of product is being made available to consumers?",
    choices: [
        "vegetables that are grown in water rather than soil",
        "vitamins that can replace many foods",
        "products that are natural and healthy",
        "foods that are easy to prepare"
    ],
    answer: 2,
    back: "(3) products that are natural and healthy — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿De qué trata este anuncio?",
    choices: [
        "el precio de billetes para un juego de béisbol profesional",
        "la falta de respeto de los aficionados",
        "la fabricación de bates de aluminio",
        "el aumento en popularidad de un artículo de ropa de béisbol"
    ],
    answer: 3,
    back: "(4) el aumento en popularidad de un artículo de ropa de béisbol — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Cómo se escapa tu amiga de su rutina en el trabajo?",
    choices: [
        "Habla por teléfono con su novio.",
        "Lee su revista favorita.",
        "Contesta su correo personal.",
        "Escucha su música predilecta."
    ],
    answer: 1,
    back: "(2) Lee su revista favorita. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué beneficio ofrece el sistema Clarión?",
    choices: [
        "Mejora su habilidad como conductor.",
        "Disminuye el número de accidentes.",
        "Hace los viajes menos aburridos.",
        "Reduce la contaminación del ambiente."
    ],
    answer: 2,
    back: "(3) Hace los viajes menos aburridos. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Por qué no pudo disfrutar la película Geraldo?",
    choices: [
        "porque no podía ver la película",
        "porque no se sentó con sus amigos",
        "porque no era violenta",
        "porque no podía oír bien"
    ],
    answer: 0,
    back: "(1) porque no podía ver la película — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Cuál es una ventaja de este producto?",
    choices: [
        "que alivia el dolor dental al rellenar las caries",
        "que blanquea los dientes sin sustancias químicas fuertes",
        "que reduce el mal aliento",
        "que elimina la necesidad de cepillarse los dientes"
    ],
    answer: 1,
    back: "(2) que blanquea los dientes sin sustancias químicas fuertes — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué problema tienen Graciela y Rosa?",
    choices: [
        "Dejaron el dinero en casa.",
        "Se perdieron en la ciudad.",
        "Llegaron temprano al restaurante.",
        "Tomaron el autobús equivocado."
    ],
    answer: 1,
    back: "(2) Se perdieron en la ciudad. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿Cuáles son algunos de los trabajos de Miguel de Cervantes?",
    choices: [
        "músico y vendedor",
        "soldado y escritor",
        "carpintero y profesor",
        "bibliotecario y médico"
    ],
    answer: 1,
    back: "(2) soldado y escritor — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Qué otro nombre tiene Miguel de Cervantes Saavedra?",
    choices: [
        "Catalina Salazar y Palacios",
        "Don Juan de Austria",
        "Manco de Lepanto",
        "Carlos V"
    ],
    answer: 2,
    back: "(3) Manco de Lepanto — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Con quién contrae matrimonio Miguel de Cervantes?",
    choices: [
        "doña Juana",
        "Catalina Salazar y Palacios",
        "una mujer italiana",
        "una estudiante de la Universidad de Salamanca"
    ],
    answer: 1,
    back: "(2) Catalina Salazar y Palacios — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Dónde comenzó a escribir Don Quijote?",
    choices: [
        "en la cárcel",
        "en la universidad",
        "en un teatro",
        "en una biblioteca italiana"
    ],
    answer: 0,
    back: "(1) en la cárcel — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cuál es el resultado de sus dificultades?",
    choices: [
        "Decide abandonar sus sueños.",
        "Se casa varias veces cuando era joven.",
        "Nunca puede viajar al extranjero.",
        "Tiene mucha información para seguir escribiendo."
    ],
    answer: 3,
    back: "(4) Tiene mucha información para seguir escribiendo. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "Q21",
    stem: "Q21. This advertisement provides information about",
    choices: [
        "a way to learn English",
        "a course in television repair",
        "the benefits of using videos in the classroom",
        "a collection of cassettes of popular music"
    ],
    answer: 0,
    back: "(1) a way to learn English — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.q22doc,
    type: "mc",
    label: "Q22",
    stem: "Q22. What advice does this notice give?",
    choices: [
        "Children should be dressed in practical clothing.",
        "Children should be encouraged to develop artistic talents.",
        "A legal contract should be understood before it is signed.",
        "The credentials of modeling agencies should be investigated."
    ],
    answer: 3,
    back: "(4) The credentials of modeling agencies should be investigated. — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "Q23",
    stem: "Q23. This announcement informs readers that",
    choices: [
        "subscribers will receive additional copies at no cost",
        "an international edition will soon be available",
        "subscription prices will be raised",
        "more copies will be printed each day"
    ],
    answer: 2,
    back: "(3) subscription prices will be raised — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.q24doc,
    type: "mc",
    label: "Q24",
    stem: "Q24. According to this editorial, the city of Santiago has a problem with",
    choices: [
        "repairing public streets",
        "inadequate garbage removal",
        "deterioration of the city hall",
        "excessive automobile traffic"
    ],
    answer: 1,
    back: "(2) inadequate garbage removal — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "Q25",
    stem: "Q25. This advertisement is intended to appeal to",
    choices: [
        "teachers of health courses",
        "families who want to buy a refrigerator",
        "people interested in fast ways of cooking",
        "families with health problems"
    ],
    answer: 2,
    back: "(3) people interested in fast ways of cooking — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: [
        "comedores",
        "paradores",
        "lagos",
        "terrenos"
    ],
    answer: 1,
    back: "(2) paradores — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: [
        "visitantes",
        "nativos",
        "trabajadores",
        "estudiantes"
    ],
    answer: 0,
    back: "(1) visitantes — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: [
        "puertorriqueño",
        "neoyorquino",
        "americano",
        "internacional"
    ],
    answer: 0,
    back: "(1) puertorriqueño — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: [
        "número",
        "país",
        "ambiente",
        "mercado"
    ],
    answer: 2,
    back: "(3) ambiente — official scoring key answer for January 27, 1999."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: [
        "complicados",
        "baratos",
        "aburridos",
        "atractivos"
    ],
    answer: 3,
    back: "(4) atractivos — official scoring key answer for January 27, 1999."
  },
  {
    type: "self",
    label: "W1",
    front: "W1 (Part 4a, Question 31 — note, at least 6 clauses). You are an exchange student in Venezuela and have been asked by a teacher at your host school to talk to students about your own school in New York State. Write a note in Spanish to that teacher responding to the teacher's request. Accomplish the purpose: respond to the teacher's request. Salutation: Estimado Profesor/Estimada Profesora; Closing: [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  {
    type: "self",
    label: "W2",
    front: "W2 (Part 4a, Question 32 — note, at least 6 clauses). Your teacher gave everyone in your class a different assignment. You do not like your topic and want to change it. Write a note in Spanish to your teacher requesting a change in topic. Salutation: Estimado/Estimada [teacher's name]; Closing: Su estudiante, [your name].",
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
    front: "W4 (Part 4b, Question 34 — letter, at least 10 clauses). Your Spanish Club is planning a summer trip to Mexico. Write a letter in Spanish to the Mexican Embassy requesting information about Mexico. Dateline: el 27 de enero de 1999; Salutation: Estimado Director/Estimada Directora; Closing: Atentamente, [your name].",
    back: "Model response: answer the prompt directly in Spanish, include the required salutation/closing when supplied, and develop at least the required number of clauses. Rubric: credit depends on accomplishing the stated purpose; each required clause is rated for comprehensibility, appropriateness, and form."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to the airport announcement, what item should travelers not bring into the United States?",
    choices: [
        "fruits or vegetables from Mexico",
        "souvenirs bought in Cancun",
        "children's toys",
        "extra luggage"
    ],
    answer: 0,
    back: "(1) fruits or vegetables from Mexico — supported by the stimulus above."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S2",
    stem: "S2. What does Teletimbres allow a household to have?",
    choices: [
        "two additional telephone numbers on one line",
        "free international calls",
        "a new answering machine",
        "lower telephone rates"
    ],
    answer: 0,
    back: "(1) two additional telephone numbers on one line — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S3",
    stem: "S3. Según el pasaje, ¿qué le gustaba hacer a Cervantes cuando era niño?",
    choices: [
        "leer mucho",
        "pintar retratos",
        "viajar por Italia",
        "trabajar en Sevilla"
    ],
    answer: 0,
    back: "(1) leer mucho — supported by the stimulus above."
  },
  { ...STIMULI.longReading,
    type: "mc",
    label: "S4",
    stem: "S4. ¿Dónde fue herido Cervantes?",
    choices: [
        "en el Golfo de Lepanto",
        "en la Universidad de Alcalá",
        "en la cárcel",
        "en una biblioteca italiana"
    ],
    answer: 0,
    back: "(1) en el Golfo de Lepanto — supported by the stimulus above."
  },
  { ...STIMULI.q21doc,
    type: "mc",
    label: "S5",
    stem: "S5. According to the ad, what media does Inglés Sin Barreras use?",
    choices: [
        "videos, audio cassettes, and books",
        "newspapers only",
        "private tutors only",
        "radio programs only"
    ],
    answer: 0,
    back: "(1) videos, audio cassettes, and books — supported by the stimulus above."
  },
  { ...STIMULI.q23doc,
    type: "mc",
    label: "S6",
    stem: "S6. What publication is changing its rates?",
    choices: [
        "EL PAÍS international edition",
        "Cambio 16",
        "Vanidades",
        "Gelatina Royal"
    ],
    answer: 0,
    back: "(1) EL PAÍS international edition — supported by the stimulus above."
  },
  { ...STIMULI.q25doc,
    type: "mc",
    label: "S7",
    stem: "S7. What type of product is Gelatina Royal?",
    choices: [
        "a dessert gelatin",
        "a travel magazine",
        "a modeling agency",
        "a telephone service"
    ],
    answer: 0,
    back: "(1) a dessert gelatin — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S8",
    stem: "S8. Según el pasaje, ¿qué tipo de hoteles son los paradores?",
    choices: [
        "hoteles pequeños con espíritu particular",
        "grandes hoteles de playa",
        "castillos europeos",
        "apartamentos urbanos"
    ],
    answer: 0,
    back: "(1) hoteles pequeños con espíritu particular — supported by the stimulus above."
  },
  { ...STIMULI.cloze,
    type: "mc",
    label: "S9",
    stem: "S9. ¿Qué atracción nocturna se menciona cerca de Villa Parguera?",
    choices: [
        "la Bahía Fosforescente",
        "una corrida de toros",
        "un festival de tomate",
        "un museo de arte"
    ],
    answer: 0,
    back: "(1) la Bahía Fosforescente — supported by the stimulus above."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S10",
    stem: "S10. Según tu amiga, ¿qué lee para relajarse?",
    choices: [
        "VANIDADES",
        "EL PAÍS",
        "un libro de historia",
        "una guía de viajes"
    ],
    answer: 0,
    back: "(1) VANIDADES — supported by the stimulus above."
  },
];
