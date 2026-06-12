// January 2010 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jan2010/.
// Spelling quirks verified against page renders and kept verbatim from print:
// exam — "estereo" (Q10), "informacion" (Q15), "decidío", "camára", "conocío",
// "ha convertido" (Part 3c passage); TDC — "éso" (item 7), "nuestro sucursal"
// (item 10), "la cualidad" (item 14), "practicamente" (item 15).

const TDC_SRC = "Teacher Dictation Copy, January 2010 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are listening to the radio in Guadalajara and hear this announcement:

[La maestra lee] Un estudio reciente concluye que los ciudadanos del mundo están dispuestos a pagar más dinero para parar el cambio en el clima del planeta. Estas personas están dispuestas a hacer sacrificios para ayudar a proteger el ambiente. Según el director del programa sobre Actitudes Hacia Política Internacional la gente en todo el mundo reconoce que el cambio climático requiere cambios en los hábitos. El aumento de la temperatura global causará más inundaciones y tormentas violentas.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are listening to a program on music in Argentina when you hear:

[La maestra lee] El tango es una música mágica llena de nostalgia y poesía. Nació entre los marineros en el barrio pobre de La Boca en el puerto de Buenos Aires, en el siglo XIX. Los que bailaban el tango, casi todos marineros, no querían ser identificados como miembros de la clase baja. Por eso usaban sombreros de ala ancha, pantalones abombillados, y botas de charol. El sonido único del tango es el lamento del bandoneón, un instrumento similar al acordeón, importado a la Argentina de Alemania.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] You are watching a program in Barcelona and hear this announcement:

[La maestra lee] El canal 2 ha anunciado el primer programa de televisión dedicado al Internet, llamado Cámara Abierta 2.0. La primera emisión será en noviembre y será un programa que explorará el lenguaje que se está usando en el siglo XXI. Este lenguaje ha transformado las relaciones humanas y ha promovido nuevas ideas que hace pocos años nadie podía imaginar. El programa también incluirá informes sobre los cambios que el Internet ha causado en la vida de los ciudadanos. El programa se podrá ver semanalmente de lunes a miércoles.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are in Peru and hear this information about Antonia Paz:

[La maestra lee] Una anciana de 103 años aprendió a leer y a escribir para comunicarse por carta con sus hijos y con el presidente de su país. Ella no quiere que él se olvide de sus promesas electorales. “Le voy a escribir al presidente para que él trate de crear más oportunidades de trabajo para todos los ciudadanos y para que ellos puedan recibir una buena educación. También para que ayude a los viejos”, dijo Antonia Paz. Con sus 103 años Antonia ahora lee, escribe su nombre, cuenta hasta cien y además sabe sumar y restar.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are listening to the radio in New York City and hear this weather report:

[La maestra lee] Aunque se esperaba una gran nevada esta noche los meteorólogos cancelaron las predicciones una vez más a causa de un frente que se aproxima a nuestra región proveniente del sur. En general la cantidad de nieve que se esperaba este año ha disminuido tanto que ha sorprendido a los expertos no sólo hoy sino varias veces durante este invierno.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] Your friend is reading aloud to you a brochure about the pyramids at Teotihuacan in Mexico. Your friend says:

[La maestra lee] Teotihuacán es un tesoro único y espectacular. Para disfrutarlo se necesita caminar y así apreciar las maravillosas cualidades de su construcción. Para que la visita sea más placentera tenemos algunas reglas sencillas que Ud. debe seguir. Primero, es esencial seguir las instrucciones de los guías. Para evitar que se canse demasiado, no traiga ni bolsas ni mochilas grandes ni pesadas. Se recomienda que deje esas cosas en el autobús.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] You are listening to a report on the radio in Argentina. You hear:

[La maestra lee] La tendencia a utilizar recursos digitales en la escuela crece cada día. No sólo se usan cada vez más los procesadores de textos, las planillas de cálculo, sino también una serie de programas creados especialmente para su utilización en la enseñanza sistemática. El “Moodle” es un programa que se puede bajar gratuitamente. Es un instrumento preparado para dar clases y éso lo hace muy potente y útil en la preparación de recursos para clases. También se puede utilizar el “Moodle” en la enseñanza a distancia. El “Moodle” es una herramienta potente y versátil.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You hear this announcement about an event in Mexico City:

[La maestra lee] La pera es la protagonista de la primera colección de esculturas de bronce de la artista panameña Olga Sinclair. Las obras de bronce fueron hechas en México, en los famosos talleres de la maestra Alfia Leiva Del Valle. La colección tiene una serie de siete esculturas, algunas en grupos de tres y otras de dos. En total son 21 esculturas. Las peras miden entre 30 y 150 centímetros de alto y pesan desde 60 hasta 160 kilos. Esta nueva muestra de Sinclair estará en la galería Mateo Sariei a partir de hoy.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You hear this information on the local news in the Cantabria region of Spain:

[La maestra lee] Durante este caluroso verano las cifras revelan que Cantabria será una de las regiones más visitadas por los turistas este año. Es importante recordar que los accesos a las playas en esta región registran serios problemas de tráfico desde la mañana hasta la tarde. San Vicente de la Barquera, Suances y Castro se convierten los fines de semana en verdaderas zonas de aparcamientos, debido a la congestión de coches.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You hear this advertisement on television in Spain:

[La maestra lee] La cantidad de gasolina que está en el mundo es limitada. Entonces ¿por qué no usarla cuidadosamente? Es simplemente sentido común, y esa es la razón por la cual construimos carros que usan tan poca gasolina como sea posible de manera que cada vehículo que hacemos ya alcanza al menos 12 kilómetros por litro en carretera. Nos preocupamos mucho por la conservación del ambiente. Revise y compare nuestra oferta por Internet y luego venga a nuestro sucursal en la Avenida Aragón, 17. Y no se olvide de la mejor garantía del país, 10 años — 250,000 kilómetros.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are watching UNIVISION and hear this announcement:

[La maestra lee] Médicos a domicilio. ¿Está empeorando su resfriado y no quiere salir de casa para ver al médico? Pues que venga el médico adonde Ud. esté. En muchas ciudades de los Estados Unidos como en Nueva York, San Francisco, y Dallas, hay una empresa que envía un médico a su casa para atender migrañas, infecciones y otras enfermedades. Estos médicos han formado una asociación que les permite mantener el costo de las visitas bastante razonable.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are in Chile watching television when you hear this public service announcement:

[La maestra lee] ¿Llevará a su mejor amigo de viaje? Los perros y los gatos son más susceptibles a los accidentes cuando están en sitios que no conocen. Cuando viaje, no olvide de llevar un collar que identifique a su mascota. Ponga la dirección y el número de teléfono local, así como el de su celular, por si se pierde. También lleve una foto reciente del animal. En caso de que necesite ayuda si se le pierde, les podrá mostrar su foto al personal del hotel y a las autoridades. Asegúrese de llevar información médica, ya que las visitas de emergencia al veterinario salen mucho mejor si tiene a mano la historia clínica de su mascota.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are at an IMAX theater complex in Barcelona. A friend reads this review to you about one of the movies that you could see:

[La maestra lee] Estas sensacionales imágenes nos permiten experimentar las emociones de situaciones extremas en una variedad de deportes de alto riesgo. Atletas y campeones del mundo en diferentes disciplinas arriesgan su vida. Estos deportes son casi imposibles de practicar. Por ejemplo se puede ver a los atletas cabalgar olas de 15 metros, esquiar sobre las montañas de Alaska y subir paredes verticales de hielo. También hay otros sorprendentes deportes de riesgo que capturan y fascinan al espectador en la pantalla.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] While in San Antonio, Texas, you hear this announcement on the radio:

[La maestra lee] El consumidor hispano en los Estados Unidos necesita información sobre productos y servicios que compra y usa. El próximo mes el Canal 3 empezará un nuevo programa en el que se discutirá la cualidad de todo tipo de producto desde utensilios para la cocina, cremas para rejuvenecer, y hasta servicios médicos. De esta manera el Canal 3 espera que los consumidores hispanos hagan sus compras con más información y con los recursos necesarios para que su dinero les traiga mejores beneficios.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to the radio in Madrid and hear this announcement:

[La maestra lee] No baje la guardia cuando viaje. Es época de viajar y de almorzar de prisa, pero a pesar de esto, ahora es muy fácil comer sanamente. En los aeropuertos, opte por frutas frescas y ensaladas y use pocas salsas cremosas. También los parques de atracciones han mejorado sus cartas. Para fin de año, muchos de ellos no usarán grasas “trans” y, en lugar de papas fritas, las comidas para niños incluirán manzanas o zanahorias. Ciertos restaurantes de comida rápida ya ofrecen estas mejores opciones, así que podemos comer bien practicamente en cualquier lugar.`,
    psource: TDC_SRC
  },
  sanz: {
    passage: `Alejandro Sanz y El tren de los momentos

Demasiado modesto para el éxito que ha obtenido, Alejandro Sanz es su peor enemigo. Se ríe de sí mismo cuando comenta que su inglés es muy malo y que le gustaría ser un poco más alto. Frecuentemente critica la calidad de su voz y su estatura baja, que cambiaría por cualquiera de sus éxitos. Incluso hace chistes de su inglés, que aunque ha vivido muchos años en Miami, no ha mejorado mucho. “Pero como lo que me gusta es bromear, me atrevo a todo”.

Ese es el autorretrato que pinta Sanz mientras sonríe. Parece jovial y juguetón, exactamente el Sanz que tiene quince premios Grammy Latinos en su poder. Es un cantante que ha vendido más de 21 millones de copias en todo el mundo y ahora ya está en venta su último álbum El tren de los momentos. Según Sanz es un disco hecho de “coraje, dolor y paciencia”. Un disco que no es nada común y es un éxito seguro. Claro que si le preguntas cuál es el significado de su éxito, fácilmente puedes encontrar una respuesta que no esperabas: “Vender un millón de discos es como imaginarte el Estadio Santiago Bernabéu lleno de gente diez veces con mi disco en la mano. ¡Impresionante!”. Nunca esperaba una fama tan espectacular.

Lo que nos impresiona es su naturalidad, una característica constante en este señor madrileño de 38 años a quien le corre la sangre andaluza en las venas. Aunque empezó a cantar a los 16 años en su país nativo, España, no pensaba que tendría una carrera tan larga y exitosa. Pocos sabían el lugar importante que este modesto cantante ocuparía hoy con su estilo, sin ser arrogante, para “contar” las historias que quiere contar. Y las cuenta con su voz calurosa y con un acento andaluz muy distinguible.

El proceso de su última creación musical fue: “No escribí nada, todo estaba en mi cabeza,” así describe, sin aires de grandeza, esa música tan personal que quiere compartir con su público. Para producirla se aisló de todo por 18 meses en su casa-estudio de Miami que está frente al mar. De allí ha salido todo lo que él tenía dentro, un sonido que suena cada vez más personal.

Aunque Sanz a veces canta de tristes amores perdidos, es un ser gregario que no tiene una casa suficientemente grande para recibir a todos sus amigos. Por muy grande que sea su mansión, con piscina y sala de juegos, a veces no caben todos los amigos y conocidos. Este hogar en Miami siempre está lleno como su casa en España. Al pensar en su madre, Sanz dijo: “Mi madre siempre me hace volver a la realidad porque yo soy demasiado soñador”. De ella también heredó la sinceridad. Si es un poco travieso, dice que es por parte de su padre. Sanz tiene un profundo cariño hacia su padre con quien compartió su amor por la música.

Aunque tenga muchos amigos, si alguien tiene un lugar especial en su corazón, es su hija Manuela de seis años. Se pone muy emocionado cuando habla de su hija, que nació de su matrimonio con la modelo mexicana Jaydy Mitchel. “Esa niña no deja de hablar”, añade con el orgullo de padre. La crítica de su hija de sus canciones es la única crítica que le importa, pero con este nuevo álbum, no tiene por qué preocuparse. “Manuela está encantada. Siempre me pide que le cante todas las canciones del disco”, dice con mucho alivio.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, January 27, 2010"
  },
  nextstep: {
    imgs: [
      { src: "img/q21-next-step-carta.png",
        cap: "“en español” letter from Next Step magazine — reading selection for question 21, Comprehensive Examination in Spanish, January 2010",
        alt: "Letter in Spanish with an “en español” tab, addressed “Querido lector de Next Step”: Next Step is a free magazine covering universities, professional careers, and student life after high school. Free copies are available in your school counselor's office five times a year — in September, November, January, March, and May. This is the second Latino bilingual edition, with articles on campus living, paying for your studies, and special programs. The website nextSTEPmag.com/Latino lets you e-mail articles to friends, enter a $5,000 scholarship contest, and use free college and scholarship search tools; sending in the magazine's reply card gives a chance to win $1,000. It closes “Sigue sonriendo,” over a handwritten signature." }
    ]
  },
  premios: {
    imgs: [
      { src: "img/q22-premios-jovenes-viajes.png",
        cap: "“Premios para jóvenes que comparten sus viajes” — reading selection for question 22, Comprehensive Examination in Spanish, January 2010",
        alt: "Boxed notice in Spanish titled “Premios para jóvenes que comparten sus viajes”: the Oficina de Información Juvenil reminds readers that until September 30 suggestions may be sent to the contest “Te recomiendo…”, aimed at young people aged 12 to 34 and organized for the third year with other offices of Guipúzcoa. It consists of recommending places or towns visited on a trip, as well as lodgings, museums, natural spaces, landscapes, activities, and events for young people. Recommendations go on registration sheets delivered to the Oficina de Información Juvenil, by e-mail to gibandoain@euskalnet.net, or directly on the blog www.aiuze.com. Participants aged 12 to 17 can win an i-pod or a camera, while contestants 18 to 34 compete for an i-pod or a vacation stay." }
    ]
  },
  receta: {
    imgs: [
      { src: "img/q23-receta-tarta-queso.png",
        cap: "“Ingredientes para la receta” — recipe card, reading selection for question 23, Comprehensive Examination in Spanish, January 2010",
        alt: "Boxed recipe card in Spanish. Ingredients: 10 ounces of cream cheese, 1 plain yogurt, 6 eggs, 1 small can of condensed milk, 1 glass of milk, strawberry jam, butter. To prepare the tarta de queso: mix everything with the blender, then butter a round pan so the cake does not stick, pour in the mixture, and bake in an oven preheated to 325 degrees for about 45 minutes. To finish, remove, let cool, and decorate with the strawberry jam." }
    ]
  },
  pelicula: {
    imgs: [
      { src: "img/q24-pelicula-anuncio.png",
        cap: "Promotion for the film “Un buen día lo tiene cualquiera” — reading selection for question 24, Comprehensive Examination in Spanish, January 2010",
        alt: "Boxed advertisement in Spanish quoting the magazine Fotogramas: “Una de las películas españolas más divertidas de los últimos años.” We have made a film called UN BUEN DIA LO TIENE CUALQUIERA, about a guy willing to do anything to find a cheap house; in the end he gets one for only 40 euros a month, but a kindly old man living there will make his life very difficult. If you come see the film you can get the rent you pay for your house reduced to just 40 euros a month for a year: keep your ticket stub and send a message to 7212 with the keyword. You can be one of the lucky ones whose rent comes out cheaper next year; more information on the film's web page." }
    ]
  },
  spanair: {
    imgs: [
      { src: "img/q25-spanair-anuncio.jpg",
        cap: "Spanair advertisement “Tú nos haces volar.” — reading selection for question 25, Comprehensive Examination in Spanish, January 2010",
        alt: "Full-page airline advertisement headlined “Tú nos haces volar.” The text thanks passengers: every time you board one of our planes you show your trust and satisfaction with Spanair; we know that among all the Spanish airlines you have chosen ours — for arriving on time, for taking care of your luggage, for knowing how to listen to you and look after you, on the ground and while you are flying, for treating you as you deserve. To you, and to everyone who does not know us yet, many thanks. It closes “Trabajamos para que volar sea como siempre has soñado.” with the Spanair logo, the slogan “Disfruta volando,” and a Salamanca 2002 emblem." }
    ]
  },
  lechuga: {
    passage: `Colección con una razón de ser

Ruth Deutsch tuvo que mudarse a la ciudad de México en 1939 con su familia, refugiada de la Austria que estaba ocupada por los nazis. No tenía conocimientos de México ni hablaba español, pero al poco tiempo de haber llegado vio un mural del gran artista José Clemente Orozco en el Palacio de Bellas Artes, que despertó en ella una curiosidad por la cultura mexicana que continuó toda su vida.

No era tanto el tema del cuadro como los colores. Esa noche soñó con amarillos y rojos. Fue una emoción tan intensa que le hizo darse cuenta de que se trataba de una cultura completamente diferente, que no podía entenderse a través de ojos europeos.

Esta percepción llevó a la joven a interesarse seriamente en la tradición cultural artística mexicana, la más rica del continente. Por esta razón decidío viajar por todo el país. Su viaje comenzó el día en que visitó la aldea indígena de Nahuzontla, donde se compró una blusa diseñada con flores de colores vivos. Observando el diseño, se preguntó: en primer lugar, ¿quién lo hizo? y en segundo lugar, ¿por qué lo hizo esa persona?

La compra de aquella blusa la llevó a una búsqueda de sesenta años, mientras trataba de descubrir el mejor arte folclórico de México y de comprender las culturas indígenas que producían este arte. Al principio, se dio cuenta de lo que muchos otros nunca pudieron comprender: que la riqueza artística de México es evidente a través de las artesanías indígenas.

Deutsch era una fotógrafa profesional. En 1950 se casó con el aventurero Carlos Lechuga. Con sus cámaras al hombro, los dos fueron a las regiones más remotas de México en busca de la auténtica cultura nacional. No fue una vida fácil. A veces caminaban por la selva durante días. Con frecuencia sufrían dificultades increíbles, privaciones e incomodidades, en su intento de llegar a pueblecitos aislados. Allí los habitantes solamente hablaban las lenguas indígenas y jamás habían visto a un extranjero. En todas partes compraban artesanías y documentaban con su camára la vida diaria y las ceremonias sagradas de los indígenas.

Hoy, Ruth D. Lechuga (su apellido después de casarse) es una autoridad reconocida mundialmente en el arte folclórico mexicano, sobre el que ella ha escrito varios libros. También ha reunido un importante archivo antropológico de veinte mil fotografías, y una extraordinaria colección de diez mil objetos de arte folclórico que conserva en un museo, que hoy lleva su nombre.

El Museo Ruth D. Lechuga se encuentra en una calle llena de árboles en el barrio residencial de Condesa. Comparado con los otros museos de la ciudad, este pequeño museo es menos conocido, aunque es uno de los más únicos de la ciudad de México, ya que ofrece a los visitantes una singular experiencia personal.

Un día en el museo, un periodista conocío a Ruth D. Lechuga, una frágil mujer de cabello blanco y sonrisa amable y bondadosa. Durante dos horas ella lo guió a cada una de las magníficas habitaciones. Mientras hablaba, la ardiente pasión que todavía siente por los objetos de arte parecía darle energía. Cada vez que se refería a un objeto en particular, Lechuga acompañaba sus comentarios de innumerables historias sobre el objeto. El museo, en el que se conservan diez mil objetos, ha convertido en un lugar encantado en el que los objetos más comunes revelaban una historia de individualidad artística y de valores indígenas.

Lechuga dice que nunca compró un objeto sin conocer quien lo había hecho y sin saber su propósito. Al comprar una máscara, quería conocer el bailarín que la había usado en la ceremonia sagrada. Recuerda que una vez, tuvo que ponerse una máscara y bailar ella misma para poder comprarla. Recuerda que la máscara conservaba el olor del sudor del bailarín, y que al ponérsela y al bailar con ella le hizo comprender que la máscara no era sólo una obra de arte, sino un instrumento de expresión del espíritu humano.

Según ella, “cada objeto produce todo un contexto cultural, y eso es lo que está presente en mi colección: una historia y una razón de ser”.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, January 27, 2010"
  },
  circus: {
    imgs: [
      { src: "img/q33-family-circus.png",
        cap: "— Bil Keane, “The Family Circus” (adapted); picture for Part 4 writing task 33, Comprehensive Examination in Spanish, January 2010",
        alt: "Circular Family Circus cartoon panel: a grandmother with curly hair and glasses sits on a couch reading a book she holds open in both hands. A cat lies curled up asleep on the couch beside her. In the foreground, two small children look on, one of them talking excitedly with mouth wide open." }
    ]
  }
};

const ALL_CARDS = [
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is this announcement about?",
    choices: [
      "a new government program for road construction",
      "an increase in the cost of fuel to heat homes",
      "technological advances in space travel in the future",
      "the willingness of people to protect the environment"
    ],
    answer: 3,
    back: "(4) the willingness of people to protect the environment — the study concludes that citizens worldwide are ready to pay more to stop climate change and “están dispuestas a hacer sacrificios para ayudar a proteger el ambiente.”"
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. According to this program, where did the tango originate?",
    choices: [
      "among the poorer classes of a port city",
      "among the upper classes in dinner clubs",
      "in a small town in Spain",
      "in the Hispanic neighborhoods in New York"
    ],
    answer: 0,
    back: "(1) among the poorer classes of a port city — the tango “nació entre los marineros en el barrio pobre de La Boca en el puerto de Buenos Aires, en el siglo XIX.”"
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What is being announced?",
    choices: [
      "the lack of Internet service in some areas",
      "the cancellation of a popular series",
      "the broadcast of a new program",
      "the start of university classes"
    ],
    answer: 2,
    back: "(3) the broadcast of a new program — Canal 2 announced the first television program dedicated to the Internet, Cámara Abierta 2.0, with its first broadcast in November."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. Why did Antonia Paz learn to read and write at the age of 103?",
    choices: [
      "to keep herself busy",
      "to voice her concerns to the president of her country",
      "to read books about Peruvian history",
      "to write her autobiography"
    ],
    answer: 1,
    back: "(2) to voice her concerns to the president of her country — she learned “para comunicarse por carta con sus hijos y con el presidente de su país”; she does not want him to forget his campaign promises about jobs, education, and help for the elderly."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What change in the weather forecast is being reported?",
    choices: [
      "extremely strong winds",
      "more hot and sunny days",
      "less snow than originally predicted",
      "unusually cold nights"
    ],
    answer: 2,
    back: "(3) less snow than originally predicted — meteorologists canceled the snowstorm prediction once again; this year's expected snowfall “ha disminuido tanto que ha sorprendido a los expertos.”"
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is recommended in this brochure?",
    choices: [
      "visiting the gift shop before leaving",
      "wearing warm clothing at night",
      "staying with the group at all times",
      "leaving heavy bags on the bus"
    ],
    answer: 3,
    back: "(4) leaving heavy bags on the bus — “no traiga ni bolsas ni mochilas grandes ni pesadas. Se recomienda que deje esas cosas en el autobús.”"
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. Who would be most interested in this product?",
    choices: [
      "a teacher",
      "a designer",
      "a travel agent",
      "a musician"
    ],
    answer: 0,
    back: "(1) a teacher — Moodle can be downloaded free and “es un instrumento preparado para dar clases,” powerful for preparing class resources and usable for distance learning."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is being announced?",
    choices: [
      "a theatrical performance",
      "an art exhibit",
      "a traditional restaurant",
      "a new music school"
    ],
    answer: 1,
    back: "(2) an art exhibit — Olga Sinclair's first collection of bronze sculptures (21 pears) goes on display at the galería Mateo Sariei starting today."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What problem is being reported in the news?",
    choices: [
      "There is a lack of housing for vacationers.",
      "There are many beaches closing due to pollution.",
      "There are traffic jams due to the number of tourists.",
      "There are medical concerns due to the excessive heat."
    ],
    answer: 2,
    back: "(3) There are traffic jams due to the number of tourists. — beach access roads in Cantabria “registran serios problemas de tráfico”; on weekends the towns become “verdaderas zonas de aparcamientos, debido a la congestión de coches.”"
  },
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Cuál es la mayor ventaja del producto?",
    choices: [
      "Incluye el sistema de navegación especial.",
      "Tiene un sistema estereo excepcional.",
      "Es ideal para una familia grande.",
      "Conserva gasolina en la carretera."
    ],
    answer: 3,
    back: "(4) Conserva gasolina en la carretera. — “construimos carros que usan tan poca gasolina como sea posible de manera que cada vehículo que hacemos ya alcanza al menos 12 kilómetros por litro en carretera.”"
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué servicio ofrece esta empresa?",
    choices: [
      "mandar un médico a su casa si no se siente bien",
      "ofrecer clases para prevenir enfermedades",
      "vender medicina a precio muy bajo",
      "enviar medicina a cualquier parte del país"
    ],
    answer: 0,
    back: "(1) mandar un médico a su casa si no se siente bien — “hay una empresa que envía un médico a su casa para atender migrañas, infecciones y otras enfermedades.”"
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Para quiénes es este anuncio?",
    choices: [
      "para personas que viajan con animales domésticos",
      "para padres que viajan con niños pequeños",
      "para familias que viajan con personas de edad avanzada",
      "para maestros que viajan con alumnos menores de edad"
    ],
    answer: 0,
    back: "(1) para personas que viajan con animales domésticos — el anuncio da consejos para viajar con perros y gatos: collar con identificación, foto reciente e información médica de la mascota."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿De qué trata esta película?",
    choices: [
      "de los efectos de los desastres naturales",
      "de las culturas de las tribus aisladas",
      "de los deportes muy peligrosos",
      "de las historias de lugares exóticos"
    ],
    answer: 2,
    back: "(3) de los deportes muy peligrosos — la película muestra “deportes de alto riesgo” en los que atletas arriesgan su vida: cabalgar olas de 15 metros, esquiar sobre las montañas de Alaska y subir paredes verticales de hielo."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Cuál es el propósito del nuevo programa del Canal 3?",
    choices: [
      "entretener con películas cómicas para toda la familia",
      "ofrecer información para ser un mejor consumidor",
      "conocer a cocineros de fama internacional",
      "recomendar ejercicios para mantenerse en forma"
    ],
    answer: 1,
    back: "(2) ofrecer información para ser un mejor consumidor — el programa “discutirá la cualidad de todo tipo de producto” para que los consumidores hispanos “hagan sus compras con más información.”"
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿De qué trata este anuncio?",
    choices: [
      "de visitar los parques de atracciones cuando se viaja",
      "de obtener informacion de la oficina de turismo",
      "de comer comidas nutritivas cuando se viaja",
      "de comprar guías para buenos restaurantes"
    ],
    answer: 2,
    back: "(3) de comer comidas nutritivas cuando se viaja — “ahora es muy fácil comer sanamente”: frutas frescas y ensaladas en los aeropuertos, y manzanas o zanahorias en lugar de papas fritas en los parques de atracciones."
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "Q16",
    stem: "Q16. El disco de Sanz que acaba de salir es",
    choices: [
      "su primer disco en México",
      "uno entre muchos discos exitosos",
      "su primer disco con otros cantantes",
      "un disco que causa controversia"
    ],
    answer: 1,
    back: "(2) uno entre muchos discos exitosos — Sanz ha vendido más de 21 millones de copias y tiene quince premios Grammy Latinos; El tren de los momentos es su último álbum y “un éxito seguro.”"
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Cuándo empezó la carrera de Sanz?",
    choices: [
      "cuando era adolescente",
      "hace dos años",
      "después de casarse",
      "después de tener un accidente"
    ],
    answer: 0,
    back: "(1) cuando era adolescente — “empezó a cantar a los 16 años en su país nativo, España.”"
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿De qué nacionalidad es Sanz?",
    choices: [
      "español",
      "estadounidense",
      "argentino",
      "inglés"
    ],
    answer: 0,
    back: "(1) español — es un “señor madrileño de 38 años a quien le corre la sangre andaluza en las venas,” y empezó a cantar en su país nativo, España."
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Por qué necesita Sanz una casa grande?",
    choices: [
      "tiene muchos hijos",
      "tiene muchos amigos",
      "tiene muchos parientes",
      "tiene muchos empleados"
    ],
    answer: 1,
    back: "(2) tiene muchos amigos — “es un ser gregario que no tiene una casa suficientemente grande para recibir a todos sus amigos”; a veces no caben todos los amigos y conocidos."
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Cuál es la opinión más importante para Sanz sobre su música?",
    choices: [
      "la de su prima",
      "la de su hermana",
      "la de su esposa",
      "la de su hija"
    ],
    answer: 3,
    back: "(4) la de su hija — “La crítica de su hija de sus canciones es la única crítica que le importa,” y Manuela está encantada con el nuevo álbum."
  },
  { ...STIMULI.nextstep,
    type: "mc",
    label: "Q21",
    stem: "Q21. According to this information, where is this magazine available?",
    choices: [
      "from professional associations",
      "at most newsstands",
      "from the guidance counselor at school",
      "through the mail by purchasing a subscription"
    ],
    answer: 2,
    back: "(3) from the guidance counselor at school — the letter says free copies of Next Step are available “en la oficina del consejero de tu escuela,” five times a year (September, November, January, March, and May)."
  },
  { ...STIMULI.premios,
    type: "mc",
    label: "Q22",
    stem: "Q22. What must you submit to enter this contest?",
    choices: [
      "an original short story or poem",
      "ideas for creating a new web site",
      "a photograph of a landscape",
      "recommendations of vacation sites"
    ],
    answer: 3,
    back: "(4) recommendations of vacation sites — the contest “Te recomiendo…” consists of recommending places or towns visited on a trip, plus lodgings, museums, natural spaces, landscapes, activities, and events for young people."
  },
  { ...STIMULI.receta,
    type: "mc",
    label: "Q23",
    stem: "Q23. This recipe is used to prepare a",
    choices: [
      "fruit salad",
      "sweet dessert",
      "hot beverage",
      "cooked vegetable"
    ],
    answer: 1,
    back: "(2) sweet dessert — the cream cheese, condensed milk, and strawberry jam make a tarta de queso (cheesecake), baked about 45 minutes, cooled, and decorated with strawberry jam."
  },
  { ...STIMULI.pelicula,
    type: "mc",
    label: "Q24",
    stem: "Q24. What would you receive if you won this contest?",
    choices: [
      "a trip to a Spanish city for a week",
      "movie tickets for a month",
      "a reduction in monthly housing costs",
      "free cell phone service for a year"
    ],
    answer: 2,
    back: "(3) a reduction in monthly housing costs — moviegoers who keep their ticket and text the keyword to 7212 can get “que el alquiler que pagas por tu casa sea reducido a tan sólo 40 euros al mes durante un año.”"
  },
  { ...STIMULI.spanair,
    type: "mc",
    label: "Q25",
    stem: "Q25. What does this airline advertisement emphasize?",
    choices: [
      "its service",
      "its frequent flyer program",
      "its destinations",
      "its low airfares"
    ],
    answer: 0,
    back: "(1) its service — the ad thanks passengers “Por llegar a tiempo. Por cuidar de tu equipaje. Por saber escucharte y atenderte, en tierra y mientras estás volando. Por tratarte como te mereces.”"
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "Q26",
    stem: "Q26. Why did Ruth Deutsch move to Mexico?",
    choices: [
      "to escape the political situation in Europe",
      "to teach German at a university",
      "to open a travel agency",
      "to meet José Clemente Orozco"
    ],
    answer: 0,
    back: "(1) to escape the political situation in Europe — her family moved to Mexico City in 1939 “refugiada de la Austria que estaba ocupada por los nazis.”"
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "Q27",
    stem: "Q27. What incident sparked the interest of Ruth Deutsch to embark on her life’s journey to understand the indigenous culture of Mexico?",
    choices: [
      "her discovery of Mexican literature",
      "her purchase of a blouse",
      "her marriage to Carlos Lechuga",
      "her first meal with a Mexican family"
    ],
    answer: 1,
    back: "(2) her purchase of a blouse — buying a brightly flowered blouse in the indigenous village of Nahuzontla made her ask who made it and why; “La compra de aquella blusa la llevó a una búsqueda de sesenta años.”"
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "Q28",
    stem: "Q28. According to the passage, what did Ruth (Deutsch) Lechuga and her husband do?",
    choices: [
      "They returned to Europe.",
      "They taught at the same university.",
      "They established a scholarship for art students.",
      "They traveled to very isolated regions."
    ],
    answer: 3,
    back: "(4) They traveled to very isolated regions. — “los dos fueron a las regiones más remotas de México,” sometimes walking through jungle for days to reach isolated little villages where the people had never seen a foreigner."
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "Q29",
    stem: "Q29. What did Ruth Lechuga once do before buying a mask?",
    choices: [
      "She put it on and danced.",
      "She made a duplicate of it.",
      "She decorated it.",
      "She cleaned it."
    ],
    answer: 0,
    back: "(1) She put it on and danced. — “tuvo que ponerse una máscara y bailar ella misma para poder comprarla,” which made her understand the mask as an instrument of human expression."
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "Q30",
    stem: "Q30. What distinguishes all the objects in Ruth Lechuga’s collection?",
    choices: [
      "They were all made of wood.",
      "They were all religious objects.",
      "She knew each object’s story.",
      "She designed each object herself."
    ],
    answer: 2,
    back: "(3) She knew each object's story. — “nunca compró un objeto sin conocer quien lo había hecho y sin saber su propósito”; in her words, her collection holds “una historia y una razón de ser.”"
  },
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31 — students choose two of tasks 31–33). Your Spanish Club is planning an international fair for the spring. In Spanish, write an article for the school newspaper describing the fair. You may wish to include:
• the purpose of the event
• date and time of the event
• location
• who will attend
• approximately how many will attend
• cost of entrance ticket
• activities
• student involvement
• community involvement
• how you feel about the event

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

El mes que viene el Club Español de nuestra escuela piensa celebrar una feria en el campo de fútbol. Será el quince de mayo a las dos de la tarde. Termina a eso de las nueve de la noche. Las entradas cuestan cinco dólares por cada persona. Este dinero va a pagar un viaje escolar a la ciudad de Nueva York el fin de junio. El Club espera que todo el mundo en el pueblo asista. Habrá atracciones para cada edad: juegos, concursos, montar a caballitos, pescar. También hay muchos padres que van a vender tortas, bizcochos y pan para ayudar el club. Cada estudiante en el club participará. Algunos venderán perros calientes, hamburguesas y refrescos. Otros van a vigilar a los niños. Creo que va a ser un evento maravilloso.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32 — students choose two of tasks 31–33). You are looking forward to summer vacation. In Spanish, write a letter to your pen pal telling him or her about your plans for the summer. You may wish to include:
• possible vacation plans for the summer
• time frame for these plans
• reasons for these plans
• costs involved
• travel plans involved
• how your family feels about these plans
• what you will be expected to do
• preparations that will be necessary
• who will be included

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido Gabriel,
Este verano será muy divertido para mí. Ya que soy mayor puedo salir más con mis amigos. Ahora que puedo conducir, mis amigos y yo iremos dos otras veces a las montañas para pescar e ir de camping. También es posible que mis padres nos lleven a un partido de béisbol en el nuevo estadio en Nueva York. Tengo que trabajar en el supermercado para ganar un poco de dinero. Necesito el dinero para mis viajes y para unos recuerdos de los Yankees. ¿Te gustaría venir a visitarme? Puedes acompañarnos a ver el partido de béisbol. Mis padres piensan que es una buena idea. También podrás ir de camping y pasar un buen rato en las montañas. Escríbeme pronto.

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  { ...STIMULI.circus,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33 — students choose two of tasks 31–33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

A Carlota y a Antonio les gusta visitar a su abuela. La abuela no está muy ocupada. Por lo general, ella siempre está en la cocina preparando la comida o unos postres muy ricos para el abuelo y los nietos. Ahora ella está leyendo una novela de su autor favorito. Después de jugar con el gatito, Antonio y Carlota decidieron sentarse a mirar la televisión. Discuten sobre cual programa quieren ver. El gato está contento y se acuesta en la silla con la abuela. En pocos minutos el abuelo llegará de su trabajo. Los niños están contentos porque el abuelo siempre les trae bombones a sus nietos. La abuela sabe que necesita poner la cena en la mesa pronto porque los niños tienen hambre. Desafortunadamente ella no quiere dejar de leer porque el libro es muy interesante.

Rubric: full credit requires a story (not a description, not a dialogue) related to the picture, with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to this program, what gives the tango its unique sound?",
    choices: [
      "the strumming of a Spanish guitar",
      "the beat of traditional drums",
      "the lament of the bandoneón",
      "the melody of a violin"
    ],
    answer: 2,
    back: "(3) the lament of the bandoneón — “El sonido único del tango es el lamento del bandoneón, un instrumento similar al acordeón, importado a la Argentina de Alemania.”"
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "S2",
    stem: "S2. Besides reading and writing her name, what else can Antonia Paz now do?",
    choices: [
      "speak several foreign languages",
      "count to one hundred and do simple arithmetic",
      "play a musical instrument",
      "drive a car in her village"
    ],
    answer: 1,
    back: "(2) count to one hundred and do simple arithmetic — “Antonia ahora lee, escribe su nombre, cuenta hasta cien y además sabe sumar y restar.”"
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "S3",
    stem: "S3. According to the brochure, what is the first simple rule for a pleasant visit to Teotihuacán?",
    choices: [
      "following the guides’ instructions",
      "buying tickets in advance",
      "drinking plenty of water",
      "arriving early in the morning"
    ],
    answer: 0,
    back: "(1) following the guides' instructions — “Primero, es esencial seguir las instrucciones de los guías.”"
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S4",
    stem: "S4. What fruit is the subject of Olga Sinclair’s first collection of bronze sculptures?",
    choices: [
      "the apple",
      "the pear",
      "the orange",
      "the banana"
    ],
    answer: 1,
    back: "(2) the pear — “La pera es la protagonista de la primera colección de esculturas de bronce de la artista panameña Olga Sinclair”; in all there are 21 sculptures measuring 30 to 150 centimeters tall."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S5",
    stem: "S5. Según este anuncio, ¿qué información debe llevar el collar de su mascota?",
    choices: [
      "el nombre del veterinario",
      "la edad y el peso del animal",
      "el nombre del hotel donde se queda",
      "la dirección y los números de teléfono"
    ],
    answer: 3,
    back: "(4) la dirección y los números de teléfono — “Ponga la dirección y el número de teléfono local, así como el de su celular, por si se pierde.”"
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S6",
    stem: "S6. Según el anuncio, ¿qué incluirán las comidas para niños en muchos parques de atracciones en lugar de papas fritas?",
    choices: [
      "manzanas o zanahorias",
      "helados y dulces",
      "papas al horno",
      "sopas y ensaladas"
    ],
    answer: 0,
    back: "(1) manzanas o zanahorias — para fin de año muchos parques no usarán grasas “trans” y, “en lugar de papas fritas, las comidas para niños incluirán manzanas o zanahorias.”"
  },
  { ...STIMULI.sanz,
    type: "mc",
    label: "S7",
    stem: "S7. ¿Cómo produjo Sanz su último álbum El tren de los momentos?",
    choices: [
      "Escribió todas las canciones en un cuaderno en España.",
      "Trabajó con su hija en un estudio de Nueva York.",
      "Se aisló de todo por 18 meses en su casa-estudio de Miami.",
      "Grabó las canciones durante sus conciertos."
    ],
    answer: 2,
    back: "(3) Se aisló de todo por 18 meses en su casa-estudio de Miami. — “Para producirla se aisló de todo por 18 meses en su casa-estudio de Miami que está frente al mar”; según Sanz, “No escribí nada, todo estaba en mi cabeza.”"
  },
  { ...STIMULI.nextstep,
    type: "mc",
    label: "S8",
    stem: "S8. According to this letter, how often are free copies of Next Step available at the counselor’s office?",
    choices: [
      "once a semester",
      "five times a year",
      "every week",
      "only in September"
    ],
    answer: 1,
    back: "(2) five times a year — the letter says copies are available “cinco veces al año—en septiembre, noviembre, enero, marzo y mayo.”"
  },
  { ...STIMULI.receta,
    type: "mc",
    label: "S9",
    stem: "S9. According to the recipe, how long should the mixture bake in the oven?",
    choices: [
      "about 10 minutes",
      "exactly 2 hours",
      "about 25 minutes",
      "about 45 minutes"
    ],
    answer: 3,
    back: "(4) about 45 minutes — “con el horno precalentado a 325º, ponerlo en el horno unos 45 minutos,” then remove, cool, and decorate with the strawberry jam."
  },
  { ...STIMULI.lechuga,
    type: "mc",
    label: "S10",
    stem: "S10. According to the passage, what does the Museo Ruth D. Lechuga preserve?",
    choices: [
      "ten thousand folk art objects",
      "twenty thousand colonial paintings",
      "murals by José Clemente Orozco",
      "European sculptures from Austria"
    ],
    answer: 0,
    back: "(1) ten thousand folk art objects — she assembled “una extraordinaria colección de diez mil objetos de arte folclórico que conserva en un museo, que hoy lleva su nombre” (her photographs form a separate 20,000-image archive)."
  }
];
