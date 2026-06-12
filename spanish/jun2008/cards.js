// June 2008 Comprehensive Examination in Spanish — session deck.
// Sources: exam.pdf (Parts 2–4 booklet), tdc.pdf (Teacher Dictation Copy),
// key.pdf (scoring key), raw-docs/nysedregents.org/spanish/jun2008/.
// Spelling quirks ("Tulúm", "la casabe de yuca", "Espero que no necesitar
// inyecciones", "ha sido declarado", "Una de estos jóvenes", "¿En que país",
// "famila", "edución física") are verbatim from the printed exam and key.

const TDC_SRC = "Teacher Dictation Copy, June 2008 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are watching a program on a Spanish-language television station and hear this announcement:

[La maestra lee] Debido a problemas técnicos no se presentará la famosa telenovela El Corazón Salvaje esta noche. Para la fecha nueva del programa, lean la guía de televisión de la semana que viene. Ud. podrá ver dos episodios la semana próxima. Ahora seguimos con nuestra programación normal.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are at the Iberia Airlines counter in Madrid, Spain, when you hear the attendant say:

[La maestra lee] Estimados pasajeros, debido a la congestión y a largas filas hoy, los invitamos a usar nuestras máquinas nuevas y rápidas. Con la máquina automática de boletos usted puede facilitar la compra de su boleto y también seleccionar su asiento. Sólo necesita seguir las sencillas instrucciones de la máquina. Si tiene algún problema, estamos aquí para ayudarlos. Gracias y buen viaje.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] While in Puerto Rico, you receive a telephone call from a telemarketer. The telemarketer says:

[La maestra lee] Esta es una oferta magnífica. Tenemos muchos programas celulares muy baratos. Puede obtener dos teléfonos por el precio de uno por seis meses. No hay límites de llamadas de larga distancia por las noches ni de llamadas locales por los fines de semana. También, sólo pagará dos centavos por minuto durante el día. Si lo compra ahora, recibirá dos teléfonos portátiles por seis meses y un cupón por dos fines de semana totalmente gratis. Llame ahora mismo.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] While you are visiting Panama, you turn on the radio and hear these instructions:

[La maestra lee] Apóyese sobre los codos, ponga las piernas juntas, cintura contra el suelo, relaje el cuello y mire al frente.
Levante la pierna derecha, deje la pierna izquierda paralela al suelo con la rodilla un poco flexionada.
Respire profundamente. Baje la pierna derecha y haga lo mismo con la pierna izquierda. Repita 15 veces para mantenerse en forma.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] You are in Tulum, Mexico, and your tour guide says:

[La maestra lee] Atención, pasajeros. Bienvenidos a las ruinas de Tulúm. Antes de bajar del autobús, recuerden que las temperaturas aquí suelen ser muy altas. Deben tomar precaución y no se olviden de llevar el parasol y las gafas. ¡Que lo pasen bien!`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] While in San Antonio, Texas, you hear this public service announcement for parents:

[La maestra lee] Para evitar que los hijos se desanimen en la escuela, los padres deben reforzar algunas reglas para el estudio. Deben establecer una rutina diaria. Esto implica apagar la televisión para que los niños no se distraigan. Se deben evitar las visitas cuando los niños estudian, y señalar una hora fija para que hagan las tareas. Es preciso disponer de una mesa especial para trabajar. Esto contribuirá a que los niños sepan que hacer la tarea es importante para ellos y para sus padres. De esta manera, los niños tendrán éxito y se graduarán a tiempo.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] While in Mexico City, you hear a speaker discuss the culture of the Americas. The speaker says:

[La maestra lee] El pan, alimento de vida, simboliza la comida compartida, la amistad y la comunión entre personas. Los principales panes de los indígenas de las Américas, en la época de la Conquista, eran la tortilla de maíz y la casabe de yuca, pero los ibéricos estaban habituados al pan de trigo, muy apreciado en Europa. Claro está, su color, forma y sabor variaban, pero lo cierto es que el pan ocupaba un lugar importante en la dieta de todos.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are listening to a Costa Rican radio station and hear this announcement:

[La maestra lee] Cinco comunidades rurales de Costa Rica van a implementar en los próximos tres años un proyecto de conservación ecológica, con una donación de 350 mil dólares de la Fundación Internacional Rotaria y del Club Rotario de San José. El proyecto fue iniciado por organizaciones privadas. El dinero está destinado a varias comunidades rurales tales como Plaza Vieja, El Humo, y La Esperanza, situadas a 250 kilómetros al sur de la capital. El Centro Científico Tropical, una de las principales instituciones de investigación de biodiversidad en la América Central, es el líder de este plan.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are watching a sports program on a Spanish-language television station and hear this information:

[La maestra lee] Los primeros juegos olímpicos de los tiempos modernos se celebraron en Atenas, en abril de 1896. En ese entonces, los deportistas más destacados del momento compitieron en solamente 9 deportes: atletismo, ciclismo, esgrima, gimnasia, tiro, deportes acuáticos, tenis, pesas y lucha libre. En Beijing en 2008 la lista de eventos incluye 28 deportes.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] You hear this report on a Dallas, Texas, radio station:

[La maestra lee] Gloria Estefan canceló un concierto en Dallas debido a problemas con las computadoras. La empresa Estefan Enterprises anunció el martes que estos problemas impedirían el funcionamiento de la amplificación, las luces y los efectos especiales. Los ingenieros están reparándolas y el problema será resuelto antes del próximo concierto que será el jueves en Phoenix. Los que compraron entradas para el espectáculo de Dallas recibirán reembolsos.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to a Spanish-speaking radio station and hear this report:

[La maestra lee] Este otoño, disfrute de 800 años de arte latino en una sola tarde que incluye desde cerámicas precolombinas hasta objetos de arte que reflejan las ideas políticas de nuestro tiempo. Esta extraordinaria exposición muestra los tesoros de El Museo del Barrio, reconocido museo de arte latinoamericano y caribeño, en la ciudad de Nueva York. Esta exposición es la única y Ud. no se la puede perder.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You are listening to the radio in the Dominican Republic and hear:

[La maestra lee] Atención estudiantes del colegio San Luis aquí en la ciudad. ¿Saben Uds. que hay un programa de intercambio con nuestro vecino al norte? En los Estados Unidos la escuela que participará se encuentra en San Antonio, Tejas. Allí Uds. podrán vivir con una familia por diez días, asistir a clases, ir a eventos deportivos, visitar museos y otros lugares de interés. También podrán practicar inglés. Los únicos gastos son para el boleto de avión y para los recuerdos que quieran comprar allí. Para más información llamen a 5-51-22-03.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] Your Spanish-speaking friend leaves this message on your answering machine:

[La maestra lee] Oye, es martes por la noche. No estaré en la escuela mañana. Tengo un resfriado. Me duele mucho la garganta y tengo escalofríos. Mis alergias me molestan también. Mi madre me llevará al médico mañana a las diez de la mañana. A mí no me gusta ir al doctor. Espero que no necesitar inyecciones. ¿Puedes ayudarme? Tráeme mis libros, por favor; los necesito todos. Gracias. Adiós.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] Your host mother in Mexico is telling you about her neighbors. She says:

[La maestra lee] María y Pepe van al centro comercial por lo menos tres veces a la semana y como no tienen auto, van en autobús. Son una pareja muy activa. A María le encanta cocinar y es bien conocida por sus postres sabrosos. En el centro comercial compran todo lo que necesitan para la cocina. Visitan y charlan con la gente que conocen ya desde hace muchos años. Todos son muy amables con María y Pepe y por eso la pareja está muy agradecida. Por su parte, María muestra su agradecimiento preparando galletitas que son famosas entre los empleados del centro.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a tour guide at the Spanish Stock Exchange in Madrid. Your guide says:

[La maestra lee] Durante esta gira por la Bolsa de Valores, síganme en una fila derecha. Por favor, no hablen con los empleados y guarden silencio. Es importante que no interfieran con el proceso normal del día. Hablaremos al salir de la Bolsa. Gracias.`,
    psource: TDC_SRC
  },
  ruta: {
    passage: `La Ruta Quetzal: Expedición multicultural

La Ruta Quetzal es una expedición multicultural para jóvenes que fue creada en 1979, a sugerencia de Su Majestad el Rey Don Juan Carlos. Por su gran valor educativo la Ruta Quetzal ha sido declarado un programa de interés universal por la UNESCO. Hasta ahora han participado en este programa más de siete mil jóvenes de todo el mundo. Cada año la expedición tiene un nombre distinto. Este año se llamó “Rumbo al estrecho de Cattígara, la ruta de los Huracanes 1502–2002” y se inició en Panamá con la participación de 300 jóvenes de 16 y 17 años de edad. Durante el viaje, el grupo de jóvenes recorrió tierras de Panamá, Costa Rica y España con el fin de conmemorar el descubrimiento del cacao. Estos jóvenes viajaron por dos meses con una mochila en la espalda, durmiendo en tiendas de campaña, caminando por la selva, escalando montañas y cruzando ríos. Viajaron por 45 días y caminaron hasta seis horas en cada jornada para llegar de un lugar a otro. En esos días tan largos las rocas se convirtieron en almohadas y la carne de cocodrilo parecía un plato exquisito.

El programa empezó en Panamá donde fueron recibidos por la presidenta del país, Mireya Elisa Moscoso. Los jóvenes acamparon en la playa Nombre de Dios, navegaron en barcas, caminaron por la selva y durmieron a la orilla del lago Gatún, lugar al que llegó Colón en 1502. La aventura apenas había comenzado. Uno de los jóvenes comentó que no hay nada mejor para conocer qué es la selva que caminar por seis horas bajo la fuerte lluvia y bajo el calor intenso.

Pasaron diez días viajando en Panamá y Costa Rica. En Panamá acamparon junto al cerro La Muerte a casi 3500 metros de altura. La mañana siguiente caminaron hasta el río Savegre, que está a 1000 metros más abajo. Tres días después visitaron el volcán Poas y descubrieron que era muy impresionante con una laguna color turquesa en el centro. Un experto en volcanes les dio una conferencia muy interesante sobre este volcán.

Después de unos días los estudiantes fueron a Puerto Limón, Costa Rica, para conmemorar el descubrimiento del cacao en el viaje que hizo Cristóbal Colón hace quinientos años. Al llegar allí, el presidente de Costa Rica, el Dr. Abel Pacheco, recibió al grupo de excursionistas. Terminaron el día en el río Reventazón haciendo “rafting” y al día siguiente sembraron más de 10,000 árboles.

De Costa Rica los estudiantes viajaron a España. En tierras españolas fueron recibidos por los Reyes de España. Uno de los momentos más emocionantes para los participantes fue la recepción en el Palacio Real. “Don Juan Carlos y doña Sofía son personas muy agradables, conversaron con nosotros” comentó una de las jóvenes del grupo.

Al día siguiente salieron hacia Toledo y luego, hacia Valencia de las Torres, en Badajoz, otro pueblo lleno de historia. “La llegada a este lugar fue increíble. Nos recibieron con aplausos. Las banderas de nuestros países colgaban de los balcones”, dijo una de las estudiantes seleccionada para el programa. Llegaron a Córdoba el 18 de julio. “Me impresionó la belleza de la arquitectura árabe que hay allí. Fuimos a la antigua Mezquita y al célebre Patio de los Naranjos”, afirmó otro estudiante.

Uno de los objetivos de la Ruta Quetzal es combinar la aventura con los estudios. Los jóvenes participaron en un programa de actividades académicas, que incluyó seminarios sobre la historia, astronomía, flora y fauna. La expedición finalizó en la Universidad Complutense de Madrid, donde se llevó a cabo la entrega de diplomas y la clausura del Curso Académico.

Este año varios jóvenes puertorriqueños participaron en el viaje. Una de estos jóvenes, Cristina Rodríguez, explica cómo fue elegida para hacer este viaje. Ella dijo que leyó sobre la Ruta Quetzal en un artículo que salió en el periódico. Para ser seleccionada tuvo que escribir un ensayo y ser entrevistada por el cónsul general de España en Puerto Rico. “Para mi sorpresa, resulté ganadora”, dijo Cristina. Estos jóvenes consideran que la experiencia de haber participado en esta excursión jamás se les olvidará. Cristina León, otra joven excursionista, dijo que esta expedición le dio la oportunidad de ver partes del mundo que de otra manera no habría visto. Para Julio Alberto, este viaje ha sido el mejor proceso de maduración que ha tenido. “Fue una gran oportunidad para conocer nuevas culturas y a nuevas personas”, comentó. Y por último, León Peneda dijo, “La convivencia me hizo apreciar las diferencias entre los participantes y a la vez celebrar la maravilla del ser humano”.`,
    psource: "Part 3a reading passage, Comprehensive Examination in Spanish, June 24, 2008"
  },
  consejos: {
    imgs: [
      { src: "img/q21-consejos-practicos.png",
        cap: "“Consejos prácticos” travel advice list — reading selection for question 21, Comprehensive Examination in Spanish, June 2008",
        alt: "Boxed bulleted list in Spanish titled Consejos prácticos: avoid traveling with a baby under three months old; keep baby bottles clean by washing them with quality bottled water and disinfecting them with water and a few drops of commercial colloidal silver; offer quality water to your children, especially babies; give children fresh foods; increase the amount of liquids, from water to rehydration solution; limit sun exposure at the beach; apply sunscreen with a protection factor between 40 and 50; carry a basic travel first-aid kit; and bring your children's favorite toys." }
    ]
  },
  quicesa: {
    imgs: [
      { src: "img/q22-quicesa-piscinas.png",
        cap: "QUICESA advertisement — reading selection for question 22, Comprehensive Examination in Spanish, June 2008",
        alt: "Boxed advertisement in Spanish headlined: do not throw away the water, it is a very scarce resource. Do not throw away your swimming-pool water — QUICESA recovers it; QUICESA guarantees pool water without ever having to change it; we are manufacturers and distributors of products for treating drinking water, wastewater, and pools: Piscinil clorix, hypochlorite, chlorine gas, solids, etc.; special terms for professionals, intermediaries, town councils, large consumers, commercial agents, etc. Química del Centro, S.A., post office box 102, telephone (911) 22 45 50, Guadalajara." }
    ]
  },
  mascotas: {
    imgs: [
      { src: "img/q23-mascotas-y-mas.png",
        cap: "“Mascotas y Más” weekly offer — reading selection for question 23, Comprehensive Examination in Spanish, June 2008",
        alt: "Boxed advertisement in Spanish for Mascotas y Más, weekly offer: animal lovers should know the way to the pet warehouse, where more than 40,000 aquariums and pet supplies are found at the best prices; having a fish tank or birds is a hobby that enriches us over the years; we offer fish tanks from 10 to 3,000 gallons, a great variety of fish, and books of advice needed to avoid problems; we know everything your fish needs; visit us and also see our variety of newly hatched birds, ready to take home, as well as our exotic fish." }
    ]
  },
  plumas: {
    imgs: [
      { src: "img/q24-plumas-antiguas.png",
        cap: "Antique pen market announcement — reading selection for question 24, Comprehensive Examination in Spanish, June 2008",
        alt: "Boxed two-column announcement in Spanish: from the 16th to the 18th of this month, the first antique pen market in Venezuela will be held; this curious show, more cultural than commercial, takes place under the sponsorship of Ofica C.A., exclusive national representative of Montblanc, one of the most prestigious firms in the market for writing articles; one of the most renowned experts in the field, Tom Weterich, specially invited for the occasion, will be in Caracas during those days; prices for antique pens and fountain pens range between 200 and 500 dollars, although seven years ago a 1910 piece sold for a record 28 thousand dollars; one purpose of the show is to stimulate the interest of possible new collectors; the appointment is Tuesday through next Thursday, from six to nine at night, in the Odissey Regalos boutique, on the mezzanine of Centro Comercial Plaza Las Américas." }
    ]
  },
  descubre: {
    imgs: [
      { src: "img/q25-descubre-madrid.png",
        cap: "“Descubre Madrid” announcement — reading selection for question 25, Comprehensive Examination in Spanish, June 2008",
        alt: "Announcement with a large Descubre Madrid logo and the logos of Fundación Caja de Madrid and Ayuntamiento de Madrid Patronato Municipal de Turismo beside a boxed text in Spanish: as has been customary for 12 years, the Municipal Tourism Board, in collaboration with the Caja de Madrid Foundation, runs its Descubre Madrid program, more than forty guided visits on foot that offer the chance to know and enjoy the facets of a historic, traditional Madrid in perpetual evolution; for more information contact the Patronato Municipal de Turismo, calle Mayor 69 (entrance on calle Traviesa), telephones 588 29 06 and 559 19 55." }
    ]
  },
  encanto: {
    passage: `El sencillo encanto de comer

Me encanta cocinar. Nada me agrada más que preparar una cena y ver cómo la disfrutan mis invitados. Por eso espero con mucho entusiasmo mi turno de ser anfitrión de las reuniones semanales con mis siete hermanos y sus familias.

Para mí la preparación de los alimentos comienza el lunes, cuando planeo el menú. El martes suelo ir al mercado para asegurarme de que tengan todos los ingredientes frescos que voy a requerir y le añado o le quito cosas a la lista, según los precios. Los dos días siguientes pongo a remojar y a marinar los pescados, los mariscos, los hongos secos y otros ingredientes. El viernes me dedico a comprar todo lo que se pueda preparar con anticipación. El sábado, el gran día, cocino y sirvo paso a paso las comidas deliciosas. Aunque nunca acabamos toda la comida, durante años he seguido fiel a mi costumbre de servir nueve platos fuertes.

Acepto de buena gana preparar banquetes para 20 personas o más. Los banquetes se hacen para celebrar algún acontecimiento, lo cual es ya beneficioso—y aún esencial—para el espíritu y para la vida familiar. Es difícil comprender que un niño pueda crecer sin fiestas y celebraciones.

Todos hemos tenido diferentes experiencias culinarias con otra gente y fuera de casa. Hace muchos años, en una ciudad a la que había ido a visitar, me hospedé en la casa de un amigo cuya famila era rica. El día que llegué, mi amigo tuvo que ir a atender su negocio, y yo me quedé a comer con su madre. Había un comedor inmenso, 13 platillos sobre la mesa, y su madre y yo atendidos por dos sirvientes. Esa fue nuestra cena. La señora no cesó de hablar y casi no comió nada. Tampoco yo comí gran cosa. La cena no se prolongó mucho, y algunos platos se quedaron casi intactos. No supe qué hicieron con toda esa comida que no comimos; sólo sé que aquella experiencia me hizo sentir completamente incómodo.

Con el pretexto de ir a la playa, me fui de la casa de mi amigo tan pronto como terminamos. A la vuelta de la esquina pasé por una casita humilde. Dentro, reunida alrededor de una mesita se encontraba cenando una familia. Sobre la mesa había dos cacerolas pequeñas; pero ¡qué contentos se veían todos y cómo charlaban! Era el extremo opuesto a la cena que acababa de compartir con la madre de mi amigo en aquella casa tan solitaria.

Recuerdo también otra experiencia inolvidable que tuve en uno de mis viajes. Después de visitar varios lugares turísticos, mis amigos y yo decidimos ir a comer a un restaurante de comida vegetariana. El menú consistía de retoños de bambú y gran variedad de vegetales a la parrilla. Mientras comíamos, empezamos a comparar los platos que teníamos en frente con otros que habíamos comido en otros lugares donde la preparación de la comida era más elaborada y la presentación más elegante.

Más tarde me levanté para ir al baño y pasé por una mesa donde un anciano comía solo. Sobre la mesa había un pequeño plato de frijoles, un tazón de tofu cocido y col. El señor masticaba lentamente, hasta con reverencia. Aunque la comida era muy sencilla, la expresión en su cara demostraba tanta paz y tanta satisfacción, que, en ese momento, algo se despertó en mi interior.

Saborear despacio una comida sencilla despierta todas nuestras sensaciones, no importa como haya sido preparada. La textura y el sabor de cada plato — e incluso de cada ingrediente — son tan especiales que podemos sentir gran satisfacción mientras comemos. No hay palabras capaces de describir el gozo que esto produce. Por esta razón lo que realmente me conmueve es una simple comida casera. Esta comida, sencilla, tradicional, forma parte de nuestra vida y es componente fundamental de nuestro crecimiento, alimentándonos generación tras generación.

Cuando no tenemos invitados en casa, nuestra cena normalmente se compone de unos cuantos platos simples de verduras y pescado, de los que nunca nos cansamos. Mis dos hijos, mi esposa y yo solemos disfrutar de un par de horas comiendo, compartiendo los alimentos y riéndonos. Es el paraíso nuestro de cada día.`,
    psource: "Part 3c reading passage, Comprehensive Examination in Spanish, June 24, 2008"
  },
  dibujo: {
    imgs: [
      { src: "img/q33-cumpleanos-torta.png",
        cap: "Picture for writing task 33 — Bunny Hoest and John Reiner, Laugh Parade (adapted), Comprehensive Examination in Spanish, June 2008",
        alt: "Black-and-white cartoon of a kitchen: a boy stands behind a counter happily cutting into a large round cake with a knife while a woman stands in the doorway at the right, staring at him with a stern expression." }
    ]
  }
};

const ALL_CARDS = [
  // ----- Part 2a: Listening, answers in English (Q1-9) -----
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What did the television station announce?",
    choices: [
      "The program will not be shown this evening.",
      "A different actor will star in the program.",
      "A storm is interfering with service.",
      "The program has been permanently cancelled."
    ],
    answer: 0,
    back: "(1) The program will not be shown this evening — \"Debido a problemas técnicos no se presentará la famosa telenovela El Corazón Salvaje esta noche\"; viewers should check next week's TV guide for the new date."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What is the attendant asking you to do?",
    choices: [
      "be patient",
      "weigh your bags",
      "use the automated walkway",
      "use the self-service ticket machine"
    ],
    answer: 3,
    back: "(4) use the self-service ticket machine — because of congestion and long lines, passengers are invited to use \"la máquina automática de boletos\" to buy a ticket and select a seat."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. How long do the terms of this offer last?",
    choices: [
      "two months",
      "six months",
      "one year",
      "two years"
    ],
    answer: 1,
    back: "(2) six months — \"Puede obtener dos teléfonos por el precio de uno por seis meses\"; buying now gets you two portable phones for six months plus a coupon for two free weekends."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is the program about?",
    choices: [
      "a new recipe",
      "a proper diet",
      "a series of exercises",
      "a self-defense course"
    ],
    answer: 2,
    back: "(3) a series of exercises — the instructions are leg-raise steps (\"Levante la pierna derecha... Repita 15 veces para mantenerse en forma\") to stay in shape."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What are you being advised to do?",
    choices: [
      "protect yourself against the extreme heat",
      "carry bottled water that is unopened",
      "leave your possessions on the bus",
      "wait for further instructions"
    ],
    answer: 0,
    back: "(1) protect yourself against the extreme heat — temperatures at the Tulúm ruins are usually very high, so visitors should take precautions and bring a parasol and sunglasses."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What is the purpose of this announcement?",
    choices: [
      "to promote competitive sports programs for children",
      "to identify high-quality television shows for children",
      "to involve children in cooking meals",
      "to help children be successful in school"
    ],
    answer: 3,
    back: "(4) to help children be successful in school — parents should enforce study rules (daily routine, TV off, fixed homework hour, special work table) so that \"los niños tendrán éxito y se graduarán a tiempo.\""
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. According to this speaker, what food item was preferred by the Europeans as well as by the indigenous people of America?",
    choices: [
      "fish or meat",
      "bread or its substitute",
      "fruits and berries",
      "coffee and cocoa beans"
    ],
    answer: 1,
    back: "(2) bread or its substitute — the indigenous peoples had corn tortillas and yuca casabe while the Iberians were used to wheat bread; \"el pan ocupaba un lugar importante en la dieta de todos.\""
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. What is this announcement about?",
    choices: [
      "a scientific program in Costa Rica",
      "tourism plans for Costa Rica",
      "a student exchange program to Costa Rica",
      "scholarships to study in Costa Rica"
    ],
    answer: 0,
    back: "(1) a scientific program in Costa Rica — five rural communities will implement an ecological conservation project led by the Centro Científico Tropical, a leading biodiversity research institution."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. According to the information in this broadcast, how have the Olympics changed over the years?",
    choices: [
      "Women are participating in more of the events.",
      "Many more sporting events are included in the competitions.",
      "The games are now televised in over twenty different languages.",
      "Fencing has been eliminated as an event."
    ],
    answer: 1,
    back: "(2) Many more sporting events are included — the first modern games in Athens (1896) had only 9 sports; in Beijing in 2008 the list includes 28."
  },
  // ----- Part 2b: Listening, answers in Spanish (Q10-15) -----
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Qué clase de problemas tenía la empresa?",
    choices: [
      "financieros",
      "personales",
      "técnicos",
      "legales"
    ],
    answer: 2,
    back: "(3) técnicos — el concierto fue cancelado \"debido a problemas con las computadoras\" que impedían el funcionamiento de la amplificación, las luces y los efectos especiales."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿A quién le interesaría más este anuncio?",
    choices: [
      "a alguien que necesita dinero",
      "a una persona que asiste a eventos deportivos",
      "a un aficionado de la música internacional",
      "a la gente interesada en la cultura latinoamericana"
    ],
    answer: 3,
    back: "(4) a la gente interesada en la cultura latinoamericana — la exposición muestra 800 años de arte latino, los tesoros de El Museo del Barrio, museo de arte latinoamericano y caribeño."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿De qué trata este anuncio?",
    choices: [
      "de una nueva exposición de arte",
      "de un viaje a otro país",
      "de una excursión a un monumento",
      "de un boleto para un concierto"
    ],
    answer: 1,
    back: "(2) de un viaje a otro país — es un programa de intercambio con los Estados Unidos: los estudiantes vivirán con una familia en San Antonio, Tejas, por diez días."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿A qué hora visita al médico mañana?",
    choices: [
      "a las ocho",
      "a las diez",
      "al mediodía",
      "después de escuela"
    ],
    answer: 1,
    back: "(2) a las diez — \"Mi madre me llevará al médico mañana a las diez de la mañana.\""
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Cómo les da María las gracias a los vendedores?",
    choices: [
      "con fiestas",
      "con flores",
      "con comida",
      "con dinero"
    ],
    answer: 2,
    back: "(3) con comida — \"María muestra su agradecimiento preparando galletitas que son famosas entre los empleados del centro.\""
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿Qué quiere el guía?",
    choices: [
      "que mantengan silencio durante la visita",
      "que conversen con él solamente",
      "que miren los anuncios del día",
      "que hablen en español con los empleados"
    ],
    answer: 0,
    back: "(1) que mantengan silencio durante la visita — \"Por favor, no hablen con los empleados y guarden silencio... Hablaremos al salir de la Bolsa.\""
  },
  // ----- Part 3a: Reading, long passage (Q16-20) -----
  { ...STIMULI.ruta,
    type: "mc",
    label: "Q16",
    stem: "Q16. En general, ¿cuál es el objetivo más importante de La Ruta Quetzal?",
    choices: [
      "vivir varios años con familias hispanas",
      "aliviar el estrés de la rutina diaria",
      "estudiar y participar en actividades interesantes",
      "aprender varios idiomas durante el viaje"
    ],
    answer: 2,
    back: "(3) estudiar y participar en actividades interesantes — \"Uno de los objetivos de la Ruta Quetzal es combinar la aventura con los estudios\", con seminarios sobre historia, astronomía, flora y fauna."
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Cuál es uno de los propósitos principales del programa de este año?",
    choices: [
      "tener la oportunidad de aprender español en las universidades",
      "escribir un libro sobre cómo sobrevivir en la selva de Costa Rica",
      "celebrar el cumpleaños del Rey Juan Carlos durante su visita a Panamá",
      "celebrar el primer conocimiento del cacao en una expedición de Cristóbal Colón"
    ],
    answer: 3,
    back: "(4) celebrar el primer conocimiento del cacao — el grupo recorrió Panamá, Costa Rica y España \"con el fin de conmemorar el descubrimiento del cacao\" en el viaje de Colón de hace quinientos años."
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿En que país comenzó la expedición este año?",
    choices: [
      "Argentina",
      "Costa Rica",
      "España",
      "Panamá"
    ],
    answer: 3,
    back: "(4) Panamá — la expedición \"se inició en Panamá con la participación de 300 jóvenes de 16 y 17 años de edad\", donde los recibió la presidenta Mireya Elisa Moscoso."
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "Q19",
    stem: "Q19. Para participar en el viaje, ¿qué tuvo que hacer Cristina?",
    choices: [
      "enviar una composición bien escrita",
      "pedir ayuda a los reyes de España",
      "escribir una carta al presidente de Panamá",
      "ganar muchas competencias deportivas"
    ],
    answer: 0,
    back: "(1) enviar una composición bien escrita — para ser seleccionada, Cristina Rodríguez \"tuvo que escribir un ensayo y ser entrevistada por el cónsul general de España en Puerto Rico.\""
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿Qué opinan los jóvenes de Puerto Rico que participaron en este viaje?",
    choices: [
      "que el viaje fue muy corto y no conocieron a jóvenes de otros países",
      "que fue una gran experiencia para conocer diversas culturas",
      "que las personas que conocieron no sabían hablar español",
      "que Cristóbal Colón hizo un viaje muy fácil quinientos años atrás"
    ],
    answer: 1,
    back: "(2) que fue una gran experiencia para conocer diversas culturas — Julio Alberto la llamó \"una gran oportunidad para conocer nuevas culturas y a nuevas personas\", y los demás coinciden en que jamás la olvidarán."
  },
  // ----- Part 3b: Reading, realia (Q21-25) -----
  { ...STIMULI.consejos,
    type: "mc",
    label: "Q21",
    stem: "Q21. This advice is especially intended for",
    choices: [
      "experienced travelers",
      "students traveling with a group",
      "travelers who have lost their luggage",
      "parents traveling with children"
    ],
    answer: 3,
    back: "(4) parents traveling with children — the tips are all about babies and kids: bottle hygiene, quality water for \"sus hijos\", fresh foods, sun protection, and bringing the children's favorite toys."
  },
  { ...STIMULI.quicesa,
    type: "mc",
    label: "Q22",
    stem: "Q22. What does this company offer?",
    choices: [
      "to heat the water in swimming pools",
      "to clean the water in swimming pools",
      "to install fencing around swimming pools",
      "to build residential swimming pools"
    ],
    answer: 1,
    back: "(2) to clean the water in swimming pools — \"No tire el agua de su piscina. QUICESA se la recupera\"; the company makes water-treatment products that guarantee pool water never has to be changed."
  },
  { ...STIMULI.mascotas,
    type: "mc",
    label: "Q23",
    stem: "Q23. What is this store advertising this week?",
    choices: [
      "rabbits and hamsters",
      "cats and dogs",
      "birds and fish",
      "spiders and insects"
    ],
    answer: 2,
    back: "(3) birds and fish — the store offers fish tanks from 10 to 3,000 gallons, a great variety of fish, newly hatched birds ready to take home, and exotic fish."
  },
  { ...STIMULI.plumas,
    type: "mc",
    label: "Q24",
    stem: "Q24. This event would be of most interest to",
    choices: [
      "coin collectors",
      "stamp collectors",
      "collectors of rare books",
      "collectors of writing implements"
    ],
    answer: 3,
    back: "(4) collectors of writing implements — it is the first antique pen market in Venezuela, sponsored by the exclusive representative of Montblanc, a top firm in \"artículos de escritura.\""
  },
  { ...STIMULI.descubre,
    type: "mc",
    label: "Q25",
    stem: "Q25. What is being offered?",
    choices: [
      "walking tours of Madrid",
      "promotional films about Madrid",
      "guides to shopping in Madrid",
      "lists of inexpensive hotels in Madrid"
    ],
    answer: 0,
    back: "(1) walking tours of Madrid — the Descubre Madrid program offers \"más de cuarenta visitas guiadas a pie\" (more than forty guided visits on foot) through historic Madrid."
  },
  // ----- Part 3c: Reading, second passage, questions in English (Q26-30) -----
  { ...STIMULI.encanto,
    type: "mc",
    label: "Q26",
    stem: "Q26. For what purpose does the author cook on a regular basis?",
    choices: [
      "charity fundraisers",
      "business lunch meetings",
      "community celebrations",
      "weekly family gatherings"
    ],
    answer: 3,
    back: "(4) weekly family gatherings — he eagerly awaits his turn to host \"las reuniones semanales con mis siete hermanos y sus familias.\""
  },
  { ...STIMULI.encanto,
    type: "mc",
    label: "Q27",
    stem: "Q27. How long does it take the author to prepare a meal for his extended family?",
    choices: [
      "less than an hour",
      "a few hours",
      "several days",
      "almost a month"
    ],
    answer: 2,
    back: "(3) several days — planning starts Monday with the menu, Tuesday is the market, the next two days are for soaking and marinating, Friday for advance shopping, and Saturday he cooks and serves."
  },
  { ...STIMULI.encanto,
    type: "mc",
    label: "Q28",
    stem: "Q28. Where did the author have an unpleasant experience during dinner?",
    choices: [
      "at home with his family",
      "at a friend's home",
      "at a vegetarian restaurant",
      "at the beach"
    ],
    answer: 1,
    back: "(2) at a friend's home — dining alone with his rich friend's mother, attended by two servants, with 13 little dishes left almost untouched, made him feel \"completamente incómodo.\""
  },
  { ...STIMULI.encanto,
    type: "mc",
    label: "Q29",
    stem: "Q29. According to the author, how should one best enjoy a meal?",
    choices: [
      "by eating small quantities and not worrying about calories",
      "by including candlelight and soft music",
      "by slowly savoring each dish, no matter how it is prepared",
      "by eating the delicious leftovers the following day"
    ],
    answer: 2,
    back: "(3) by slowly savoring each dish — \"Saborear despacio una comida sencilla despierta todas nuestras sensaciones, no importa como haya sido preparada.\""
  },
  { ...STIMULI.encanto,
    type: "mc",
    label: "Q30",
    stem: "Q30. What happens at dinner at the author's home when there are no guests?",
    choices: [
      "The family often spends time laughing and eating simple dishes together.",
      "The family generally eats quickly together and then rushes to attend other activities.",
      "The family usually eats at separate times due to busy schedules.",
      "The family sometimes argues when the children do not like the food."
    ],
    answer: 0,
    back: "(1) The family often spends time laughing and eating simple dishes together — they enjoy a couple of hours eating simple vegetable and fish dishes, sharing and laughing: \"Es el paraíso nuestro de cada día.\""
  },
  // ----- Part 4: Writing tasks (choose two of three on the real exam) -----
  {
    type: "self",
    label: "W1",
    front: `W1 (Part 4, Question 31). You found a lost pet. In Spanish, write a letter to your pen pal telling him or her about what happened. You may wish to include:
• the kind of animal
• when you found it
• where you found it
• who was with you when you found it
• what you did when you found it
• how you feel about the animal
• your plan for the animal
• your reason for that plan
• where the pet is now

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido José,
Deseo contarte lo que me pasó hace dos semanas. Caminaba por el bosque con mis amigos cuando oí un ruido. Me acerqué y vi un perrito blanco herido ¡Qué lástima! A mí me gustan mucho los perros. Este perro se parece mucho a mi mascota. Tin Ton, entonces voy a quedarme con él. Tengo todo lo que necesito en casa, como juguetes, comida, mantas, y hasta una casa para el perro. El perrito puede jugar con Tin Ton. Voy a llamarlo Tin Tin. Mis padres están de acuerdo porque les fascinan los perros también.
Ciao,
Juanita

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar (agreement, tenses, word order, spelling/accents), and 100+ words.`
  },
  {
    type: "self",
    label: "W2",
    front: `W2 (Part 4, Question 32). Your family volunteered to host an exchange student last year. In Spanish, write a letter to your pen pal telling him or her about the experience. You may wish to include:
• when and where the exchange student arrived
• how long the exchange student stayed
• where your family heard of this exchange student program
• where the exchange student was from
• a description of the student
• what preparations at home were made by your family
• what school arrangements had to be made
• what plans were made to celebrate the arrival of the exchange student
• what you did to make the exchange student feel welcome
• how you felt about hosting an exchange student

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Querido David,
El año pasado un chico de la Argentina vino a vivir con mi familia. El llegó en agosto y pasó un año con nosotros. Mi padre es socio del Club Rotario y el club buscaba familias en esta área.
Nuestro nuevo hermano se llamaba “Fernando”. Es alto y fuerte y le gusta mucho jugar fútbol. Ayudó a nuestro equipo a ganar muchos partidos.
Mi familia le preparó un cuarto y después lo acompañó a la escuela para matricularse. El tenía muchas clases conmigo. A nosotros dos nos gustaban mucho la tecnología y la edución física. El conoció a mis amigos y nos llevamos muy bien. Lo extraño mucho.
Hasta pronto,
Carlos

Rubric: full credit requires accomplishing the task with many connected details, a clear beginning–middle–end, wide vocabulary, strong control of Checkpoint B grammar, and 100+ words.`
  },
  { ...STIMULI.dibujo,
    type: "self",
    label: "W3",
    front: `W3 (Part 4, Question 33). In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.

Your answer should be written entirely in Spanish and should contain a minimum of 100 words.`,
    back: `Official 8-credit sample response:

Hoy es el cumpleaños del Señor García, el padre de Enrique. Para la ocasión, la Señora hizo una torta, porque esta noche la familia va a celebrar con una fiesta. Enrique viene de la escuela y entra en la cocina. El llega a casa con mucha hambre, y al ver la torta en la mesa, decide comer un trozo. Toma un platillo y un cuchillo. Después de cortarla, su madre entra en la cocina. Cuando ve lo que está haciendo Enrique, se enoja y empieza a gritarle. Ella tiene mucho que hacer y ya es tarde. La fiesta va a empezar en dos horas y no queda bastante tiempo para hacer otra. ¿Qué van a hacer? Enrique siente mucho que haya arruinado los planes de su madre. Al fin, le toca a Enrique hacer otra torta. Es deliciosa y nadie sabe nada de lo que pasó en la casa de los García.

Rubric: full credit requires a STORY connected to the picture (not a description, not a dialogue), with many connected details, clear organization, wide vocabulary, strong Checkpoint B grammar, and 100+ words.`
  },
  // ----- Supplemental cards S1-S10 (new questions on unprobed content) -----
  { ...STIMULI.l02,
    type: "mc",
    label: "S1",
    stem: "S1. According to the attendant, what can you do with the automated ticket machine besides buying your ticket?",
    choices: [
      "check your luggage",
      "select your seat",
      "change your flight",
      "order a special meal"
    ],
    answer: 1,
    back: "(2) select your seat — \"Con la máquina automática de boletos usted puede facilitar la compra de su boleto y también seleccionar su asiento.\""
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "S2",
    stem: "S2. According to the telemarketer, how much will you pay per minute for calls made during the day?",
    choices: [
      "two cents",
      "ten cents",
      "twenty cents",
      "nothing — daytime calls are free"
    ],
    answer: 0,
    back: "(1) two cents — \"sólo pagará dos centavos por minuto durante el día\"; nighttime long-distance and weekend local calls are unlimited."
  },
  { ...STIMULI.consejos,
    type: "mc",
    label: "S3",
    stem: "S3. According to this advice list, what protection factor should the sunscreen you apply have?",
    choices: [
      "between 10 and 20",
      "between 20 and 30",
      "between 40 and 50",
      "exactly 100"
    ],
    answer: 2,
    back: "(3) between 40 and 50 — one tip says \"Aplicar crema con un factor de protección de entre 40 y 50\" (apply cream with a protection factor of between 40 and 50)."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "S4",
    stem: "S4. Who donated the 350 thousand dollars for the conservation project in Costa Rica?",
    choices: [
      "the government of Costa Rica",
      "the Rotary International Foundation and the Rotary Club of San José",
      "the Tropical Science Center",
      "the communities of Plaza Vieja, El Humo, and La Esperanza"
    ],
    answer: 1,
    back: "(2) the Rotary International Foundation and the Rotary Club of San José — the project comes \"con una donación de 350 mil dólares de la Fundación Internacional Rotaria y del Club Rotario de San José.\""
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "S5",
    stem: "S5. According to the broadcast, where and when were the first modern Olympic Games held?",
    choices: [
      "in Athens, in April of 1896",
      "in Beijing, in 2008",
      "in Rome, in 1900",
      "in Paris, in April of 1924"
    ],
    answer: 0,
    back: "(1) in Athens, in April of 1896 — \"Los primeros juegos olímpicos de los tiempos modernos se celebraron en Atenas, en abril de 1896,\" with only 9 sports."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "S6",
    stem: "S6. Según el anuncio, ¿cuáles son los únicos gastos para los estudiantes que participen en el programa?",
    choices: [
      "el hotel y las comidas",
      "la matrícula de la escuela",
      "el boleto de avión y los recuerdos",
      "las entradas a los museos y a los eventos deportivos"
    ],
    answer: 2,
    back: "(3) el boleto de avión y los recuerdos — \"Los únicos gastos son para el boleto de avión y para los recuerdos que quieran comprar allí.\""
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "S7",
    stem: "S7. Según la selección, ¿dónde finalizó la expedición de este año?",
    choices: [
      "en el Palacio Real de Madrid",
      "en Puerto Limón, Costa Rica",
      "en el Patio de los Naranjos en Córdoba",
      "en la Universidad Complutense de Madrid"
    ],
    answer: 3,
    back: "(4) en la Universidad Complutense de Madrid — \"La expedición finalizó en la Universidad Complutense de Madrid, donde se llevó a cabo la entrega de diplomas y la clausura del Curso Académico.\""
  },
  { ...STIMULI.ruta,
    type: "mc",
    label: "S8",
    stem: "S8. Según la selección, ¿qué hicieron los jóvenes el día después de hacer “rafting” en el río Reventazón?",
    choices: [
      "visitaron el volcán Poas",
      "sembraron más de 10,000 árboles",
      "navegaron en barcas por el lago Gatún",
      "conocieron a los Reyes de España"
    ],
    answer: 1,
    back: "(2) sembraron más de 10,000 árboles — \"Terminaron el día en el río Reventazón haciendo 'rafting' y al día siguiente sembraron más de 10,000 árboles.\""
  },
  { ...STIMULI.plumas,
    type: "mc",
    label: "S9",
    stem: "S9. According to the announcement, what record price was paid seven years ago for a 1910 piece?",
    choices: [
      "200 dollars",
      "500 dollars",
      "28 thousand dollars",
      "28 million dollars"
    ],
    answer: 2,
    back: "(3) 28 thousand dollars — prices usually run between 200 and 500 dollars, \"aunque hace siete años una pieza de 1910 se negoció por un valor récord de 28 mil dólares.\""
  },
  { ...STIMULI.encanto,
    type: "mc",
    label: "S10",
    stem: "S10. Although the food is never finished, how many main dishes has the author faithfully served at his family dinners for years?",
    choices: [
      "nine",
      "two",
      "thirteen",
      "twenty"
    ],
    answer: 0,
    back: "(1) nine — \"durante años he seguido fiel a mi costumbre de servir nueve platos fuertes\" (13 was the number of little dishes at his friend's house; 20 refers to banquet guests)."
  }
];
