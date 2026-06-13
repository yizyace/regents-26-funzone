// January 2002 Comprehensive Examination in Spanish — session deck
// Sources: exam.pdf (Parts 2-4 booklet), tdc.pdf (Teacher Dictation Copy), key.pdf (scoring key)
// raw-docs/nysedregents.org/spanish/jan2002/

const TDC_SRC = "Teacher Dictation Copy, January 2002 Comprehensive Spanish Regents";

const STIMULI = {
  l01: {
    passage: `[Background] You are watching a cooking show and hear:

[La maestra lee] La gastronomía de Perú se destaca por su riqueza en pescados y mariscos. Un claro ejemplo es el ceviche, una exquisita comida del mar que tiene al pescado como base. El ceviche es un plato de pescado crudo que se prepara con limón y otros ingredientes.`,
    psource: TDC_SRC
  },
  l02: {
    passage: `[Background] You are watching an international news report on television. You hear this item:

[La maestra lee] La aerolínea inglesa, British Airways, va a instalar en sus aviones monitores cardíacos conectados con tierra vía satélite. De esta forma, si un pasajero sufre algún problema cardíaco, podrá ser diagnosticado rápidamente y tratado por un equipo de médicos.`,
    psource: TDC_SRC
  },
  l03: {
    passage: `[Background] While listening to a radio station in Madrid you hear this advice from a pet trainer:

[La maestra lee] Aunque al principio le causa gracia, la verdad es que permitirle a su perro recibir bocados de la mesa es una mala costumbre, que no se debe tolerar. Si este consejo llega demasiado tarde, intente corregir este mal hábito dándole de comer antes. Si usted quiere seguir dándole de comer al perro, hágalo en un sitio diferente. Entonces cierre la puesta a la comida. No le permita a su perro con su carita inocente, sus ojos tristes, y sus lamentos estar en el comedor con Uds. Todos los miembros de la familia deben hacer lo mismo.`,
    psource: TDC_SRC
  },
  l04: {
    passage: `[Background] You are listening to a student from Chile who is talking to your Spanish class. The student says:

[La maestra lee] Cuando estamos en la clase de historia en Chile y la profesora lee una lectura sobre un tema histórico, es difícil seguir todos los apuntes muy rápido, y por eso los estudiantes tienen su propia manera de abreviar las palabras. En vez de usar palabras completas, usan dos o tres letras o símbolos. También es posible usar palabras en inglés. En vez de escribir una palabra, por ejemplo, “corazón”, los estudiantes dibujan un corazón. Los jóvenes siempre están inventando las maneras más fáciles de escribir.`,
    psource: TDC_SRC
  },
  l05: {
    passage: `[Background] While listening to a Spanish-language radio station, you hear this announcement about a job opportunity:

[La maestra lee] Estamos solicitando personas amigables, inteligentes y enérgicas para trabajar en nuestro centro de llamadas al cliente. No se requiere experiencia previa pero necesita un diploma universitario. Le ofrecemos todo el entrenamiento y preparación que usted necesite para tener éxito. Esta es una compañía en la cual usted adquiere experiencia y gana dinero mientras aprende. Este empleo es de tiempo completo, con horas flexibles que incluyen un día de fin de semana. Le ofrecemos empleo inmediato. No espere. Llame para coordinar su entrevista hoy.`,
    psource: TDC_SRC
  },
  l06: {
    passage: `[Background] While in Spain on a school trip, you listen to your tour guide talk about accommodations in Madrid:

[La maestra lee] Hace muchos años, en la ciudad de Madrid sólo existían dos tipos de hoteles: hoteles lujosos y carísimos, y hoteles de precios más moderados, pero mediocres y sin mucha elegancia o estilo. Recientemente, con el gran aumento de turismo en España, eso ha cambiado. El sistema hotelero de la ciudad se ha beneficiado enormemente de un sinnúmero de hoteles modernísimos y elegantes aunque todavía caros. También hay una enorme cantidad de nuevos hoteles pequeños y encantadores, con una decoración modernísima. Se puede alquilar una habitación en estos hoteles por la mitad de lo que cuesta una en un hotel de lujo.`,
    psource: TDC_SRC
  },
  l07: {
    passage: `[Background] While visiting South America you hear this radio broadcast:

[La maestra lee] Durante todo el mes de julio, un grupo de teatro representará la obra “Piel de papel”, escrita y dirigida por José Rafael Briceño. La pieza se presentará durante cuatro fines de semana consecutivos, en la sala número uno del Celarg, en Altamira. “Piel de papel” cuenta la historia de un papagayo que, en su deseo por elevarse hacia límites desconocidos, afronta riesgos y aventuras. Las funciones serán a las 3:00 de la tarde tanto sábados como domingos. La entrada es 3.000 bolívares.`,
    psource: TDC_SRC
  },
  l08: {
    passage: `[Background] You are listening to a Spanish radio station and hear this announcement:

[La maestra lee] Este verano las mejores rebajas para el hombre están en El Corte Inglés. Son las rebajas en las que encontrará todo lo último de esta temporada con unos descuentos de locura. Por ejemplo, las chaquetas para hombre, ahora cuestan un 50% menos. Una camisa cuesta 2.995 pesetas y dos valen 5.000 pesetas. Esta oferta es una que no puede perderse por nada del mundo. Llame para más información sobre otras ofertas.`,
    psource: TDC_SRC
  },
  l09: {
    passage: `[Background] You are listening to an instructor talk about relieving stress. The instructor says:

[La maestra lee] Si Ud. espera obtener un alivio completo del estrés haciendo ejercicio, no haga ejercicio y estudie al mismo tiempo. Un estudio universitario encontró que las mujeres que estudiaban mientras pedaleaban en una bicicleta estacionaria no obtuvieron tantos beneficios contra el estrés como las mujeres que se dedicaban totalmente a ejercitarse. Entonces, si quiere reducir el estrés, hay que concentrarse sólo en el ejercicio.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] Your Cuban friend called and left this message on your answering machine:

[La maestra lee] Hola, soy yo, Irene. Te llamo porque necesito tu ayuda. No puedo hacer la tarea de biología porque se me olvidó la combinación de mi ropero y no tengo mi libro. ¿Me puedes prestar el tuyo? Tú sabes lo exigente y complicada que es la señora Machado y no quiero tener problemas con ella.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You hear this television announcement regarding a scientific study:

[La maestra lee] Una serie de estudios científicos comprueba que la costumbre de dormir una siesta es algo muy saludable. Reduce enormemente el estrés. En pruebas científicas los europeos y latinoamericanos sufren mucho menos de tensión nerviosa y problemas relacionados con el estrés porque duermen la siesta. Entre personas famosas que necesitaban dormir siesta diariamente figuraban Napoleón Bonaparte, Sir Winston Churchill, Albert Einstein, Thomas Edison, John F. Kennedy, y Ronald Reagan. Para aliviar el estrés, estas personas tomaban siestas porque trabajaban hasta muy tarde por la noche.`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] You hear this announcement on a Spanish-language television station:

[La maestra lee] Un observatorio astronómico de unos 2,000 años de antigüedad fue descubierto en pleno centro de la ciudad estadounidense de Miami. El grupo de arqueólogos que realizó el hallazgo opina que este antiguo observatorio puede pertenecer a la cultura maya, lo que se relaciona con la hipótesis de que los mayas pudieron haber llegado a la península de la Florida antes que los españoles.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] While in Mexico, you hear this announcement on television. The announcer says:

[La maestra lee] Suscríbase a la revista Tiempo. Con su suscripción le llevamos el cine a su casa: ocho vídeos para toda la familia. Son vídeos de intriga, del humor, de misterio, y de terror. Es la magia del cine más famoso de México en ocho vídeos para toda la familia que usted recibirá en su casa por sólo 110 pesos de gastos cada uno. Llévese a casa el mejor cine con su suscripción a Tiempo.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] While in Colombia, you hear this news item on television:

[La maestra lee] El futbolista Hilario Deluchi fue a jugar fútbol a Medellín, y de allí pasó a Bogotá, donde decidió vender pizzas. Su obra maestra ha sido una de 338 metros, más o menos de la altura de la Torre Eiffel. En su preparación de la pizza trabajaron 200 personas sin parar durante 24 horas. Y se requirieron 100 kilos de tomates y 100 kilos de jamón; 50 de champiñones; 50 de frutas; 50 de salchichas; 50 de salami; y más de una tonelada de harina y no podemos olvidar la gran cantidad de queso.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] You are listening to a talk show in Mexico about how famous people spend their money. This is what you hear:

[La maestra lee] Desde que su padre le compró una guitarra cuando tenía sólo 5 años, Soraya quedó hipnotizada con su sonoridad y, desde entonces, las colecciona. “Tengo más guitarras que las suficientes” dice la cantante. “No me fijo en marcas ni en precio. Sólo me importa tocarlas”. ¿Su preferida? Entre las 36 guitarras que tiene, una que le hicieron especialmente para ella en Irlanda, con cinco tipos de madera. No viaja con ésa por miedo a que se rompa.`,
    psource: TDC_SRC
  },
  fey: {
    passage: `Un fenómeno llamado Fey

María Fernanda Blázquez Gil, mejor conocida como Fey, es una joven muy simpática. Tiene una personalidad radiante y siempre positiva. De padres españoles y argentinos, esta artista mexicana ha gozado recientemente de un éxito fenomenal. Una muestra de su éxito, posiblemente la más importante, ocurrió en febrero del año pasado cuando llenó el Auditorio Nacional de la Ciudad de México. Después de diez conciertos, Fey tiene su nombre junto al de Juan Gabriel y Luis Miguel. Pasó a ser la primera mujer en romper el récord de boletos vendidos en este auditorio.

A primera vista, no tiene lógica que esta niña-mujer se haya convertido en la sensación del momento, ya que sus críticos dicen que no tiene una voz especial y su música, pop industrial, suena repetitiva. Pero vista desapasionadamente, ella es el producto de una cuidadosa planificación comercial. “La gente cree que mi éxito fue muy rápido pero yo llevo toda la vida tocando puertas,” dice la cantante mientras saluda a unos fans venezolanos que la reconocieron en Miami.

Desde que grabó su primer álbum, Fey, ella no ha dejado de sentir el vértigo del éxito. “Todo este tiempo me parece como si fuera un segundo,” dice Fey. A ella se le critica por no admitir su edad. Y es que mientras sus admiradores le atribuyen 19 años, sus críticos aseguran que tiene 26. Ella admite sólo 20 años de edad.

El misterio de su edad ha creado grandes discusiones. Lo cierto es que mantener su edad verdadera un misterio, parece más bien una estrategia comercial que le permite llegar a un público más vasto. No por nada la edad de sus aficionados varía entre los 7 y los 25 años. Y tal vez por esa misma estrategia comercial niega que entre ella y Mauri Stern, el ex Magneto, existía una amistad amorosa, aunque las apariencias demuestran lo contrario.

Hija de artistas, Fey creció rodeada de música, micrófonos, ensayos y giras. Su madre, Josefina, y su tía Noemí, formaban el dueto llamado Las hermanas Gil, mientras que su padre, Fernando Blázquez, integró grupos musicales en los años setenta. Por eso el éxito no la tomó de sorpresa, dice su madre. “A Fey no le interesa la fama, quiere hacer lo que más le gusta: cantar.”

Pero además de presentarse en los escenarios de más de 15 países y enloquecer a su público con sus jeans, camisetas a cuadros anudadas a la cintura– con las que ha creado una línea de ropa que lleva su nombre — Fey está lista para el crossover y ha grabado versiones en inglés y portugués de su CD Tierna la noche.`,
    psource: "Comprehensive Examination in Spanish, January 2002 — Part 3a reading passage"
  },
  corteIngles: {
    imgs: [
      { src: "img/q21-corte-ingles-viajes.png",
        cap: "Advertisement: “Adelanta 2 meses la RESERVA de tus vacaciones” — Viajes El Corte Inglés (January 2002 Comprehensive Spanish Regents, Part 3b)",
        alt: "Travel advertisement from Viajes El Corte Ingles urging readers to reserve summer vacations two months early to get a 7 percent discount on its vacation programs, with no cancellation fees up to 21 days before departure (except cruises), payment deferred over 3 months without interest using the El Corte Ingles card, and an extra 7 percent voucher toward winter vacations; information line 902 30 40 20." }
    ]
  },
  planetarios: {
    imgs: [
      { src: "img/q22-planetarios-cupon.png",
        cap: "Coupon: “Regalamos entradas para visitar los planetarios de Granada y Pamplona” (January 2002 Comprehensive Spanish Regents, Part 3b)",
        alt: "Boxed coupon announcing free admission tickets to the planetariums of Granada and Pamplona: presenting this coupon at the two planetariums lets you enjoy for free an approach to space, the secrets of the stars, a journey through the universe, and interesting exhibits — an unforgettable experience. Addresses given for Parque de las Ciencias, Avenida del Mediterraneo, Granada, and Planetario de Pamplona, Calle Sancho Ramirez, Pamplona." }
    ]
  },
  lectura: {
    imgs: [
      { src: "img/q23-lectura-aventura.png",
        cap: "Article: “Haga de la lectura una aventura” (January 2002 Comprehensive Spanish Regents, Part 3b)",
        alt: "Article illustrated with ABC alphabet blocks telling parents and guardians not to feel overwhelmed as their children's first teachers: a child naturally loves and trusts them, so they can make reading a fun adventure. Under the heading 'De un buen ejemplo...' it says the secret to getting a child to read is one word — to read — because research shows parents should read aloud to children daily; reading aloud helps children expand their vocabulary, appreciate books and reading, understand new ideas and concepts, and learn about the world around them." }
    ]
  },
  regaloArte: {
    imgs: [
      { src: "img/q24-regalo-arte.png",
        cap: "Advertisement: “¿Cuál será el regalo perfecto para esa persona especial?” (January 2002 Comprehensive Spanish Regents, Part 3b)",
        alt: "Print advertisement asking what the perfect gift is for that special person and answering that more and more people give art: a gift that lasts, admired again and again, creating a lasting bond of affection between giver and receiver. It advises considering the recipient's personality and lifestyle, the artist's style, the size of the work, the framing and the theme, and notes art can rise in value, citing the serigraph 'Unicornio Azul' by renowned Puerto Rican artist Augusto Marin, made to commemorate the retrospective of his 40-year artistic life, on exhibit from November to mid January at the Museo del Arsenal de la Puntilla in Old San Juan." }
    ]
  },
  bellasArtes: {
    imgs: [
      { src: "img/q25-bellas-artes.png",
        cap: "Subscription letter and form: “Amigos de Bellas Artes — la revista del Centro de Bellas Artes Luis A. Ferré” (January 2002 Comprehensive Spanish Regents, Part 3b)",
        alt: "Letter and mail-in application for Bellas Artes, the magazine of the Centro de Bellas Artes Luis A. Ferre in San Juan, Puerto Rico. The letter says many readers asked for a system guaranteeing receipt of the magazine; to get a copy every month, fill out the application at the end of the letter, cut it out, and mail it with a 15 dollar check or money order for postage and handling to receive the next 12 issues. The form asks for name and address and a check payable to Corporacion Centro de Bellas Artes, with a one-year subscription price of 15 dollars." }
    ]
  },
  lopez: {
    passage: `Javier López

En la serie mundial que se celebró en el mes de octubre de 1995, Javier López contribuyó a llevar a la victoria al equipo de pelota de Atlanta, los Braves. López nació en Ponce, Puerto Rico, hace sólo 25 años. Se ha dicho del joven que es una estrella naciente de la pelota y un posible candidato para el “Hall de la Fama”.

Millones de fanáticos vieron a López jugar el segundo juego de la Serie Mundial de manera __(26)__. Su fuerte brazo lanzador ayudó al equipo a terminar con la racha de anotaciones los Indios de Cleveland. López además, bateó un jonrón.

Pero el camino a la fama no ha sido fácil para López. Fue descubierto a los 15 años por un reclutador de los Braves de Atlanta. Estuvo varios años trabajando en las ligas menores. El dice que durante ese tiempo hubo momentos en que creyó merecer el ascenso a las ligas mayores. Pero ahora, cuando él mira hacia atrás, se da cuenta de que mantenerse en las ligas menores fue una decisión __(27)__. La paciencia le dio buenos resultados, dice. Jugó bien en las ligas menores, pero su primer año como principiante en las mayores en 1994 fue frustrante. Aunque en 1995 aumentó la presión, López pudo jugar un partido casi perfecto en la Serie Mundial.

Su familia es una fuente importante de fuerza y apoyo para López. Sus padres, Jacinto y Evelia, lucharon para que sus cuatro hijos pudieran ir a la escuela y que __(28)__ la mejor educación posible. López conoció a su esposa, Analy, en la escuela secundaria. Ambos dicen que fue amor a primera vista y ya llevan casi cinco años de casados. Viven con su hija en Ponce, cerca de donde él se crió.

La familia tiene tradición de __(29)__. Una de las hermanas de López, famosa voleibolista de Puerto Rico, está casada con un pelotero de las ligas mayores. Otra hermana está casada con una estrella olímpica de natación.

Como es el caso con todos los catchers, el trabajo de López es difícil. Tiene que concentrarse en el lanzador y en el bateador, además de estar siempre listo para lanzar la pelota a primera, segunda o tercera base. El trabajo se hace aún más difícil en Atlanta, ya que los lanzadores de los Braves están entre los mejores del béisbol. Pero López está __(30)__ para la pelea: “Voy a convertirme en el pelotero que todo el mundo espera que yo sea.”`,
    psource: "Comprehensive Examination in Spanish, January 2002 — Part 3c cloze passage"
  },
  biblioteca: {
    imgs: [
      { src: "img/q33-biblioteca.png",
        cap: "Picture for Part 4b, Question 33 (January 2002 Comprehensive Spanish Regents)",
        alt: "Line drawing of a library: behind the counter, a librarian wearing glasses stamps cards or due-date slips next to a small box and folded newspapers; in front of the counter, a student with a ponytail stands holding a stack of books in her arms. Bookshelves filled with books line the walls behind both figures." }
    ]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a — Listening, answers in English (Q1-9) ----------
  { ...STIMULI.l01,
    type: "mc",
    label: "Q1",
    stem: "Q1. What is the subject of this program?",
    choices: ["seafood", "poultry", "desserts", "soups"],
    answer: 0,
    back: "(1) seafood — the program highlights Peruvian cooking's wealth of “pescados y mariscos” and describes ceviche, a dish based on raw fish prepared with lemon."
  },
  { ...STIMULI.l02,
    type: "mc",
    label: "Q2",
    stem: "Q2. What will this airline be doing soon?",
    choices: ["improving its flight schedule", "installing special medical equipment onboard its planes", "providing a doctor on all flights", "merging with another company"],
    answer: 1,
    back: "(2) installing special medical equipment onboard its planes — British Airways “va a instalar en sus aviones monitores cardíacos” linked to the ground by satellite so a passenger's heart problem can be diagnosed quickly."
  },
  { ...STIMULI.l03,
    type: "mc",
    label: "Q3",
    stem: "Q3. What advice does the pet trainer provide?",
    choices: ["how to modify a dog’s behavior at mealtime", "how to choose a dog as a pet", "how to select a toy for a dog", "how to keep a dog in good health"],
    answer: 0,
    back: "(1) how to modify a dog’s behavior at mealtime — table scraps are “una mala costumbre”; the trainer says to feed the dog beforehand, in a different place, and keep it out of the dining room."
  },
  { ...STIMULI.l04,
    type: "mc",
    label: "Q4",
    stem: "Q4. What is the exchange student discussing?",
    choices: ["how to prepare an oral presentation", "how to write term papers", "how to take notes", "how students study English"],
    answer: 2,
    back: "(3) how to take notes — Chilean students abbreviate words with two or three letters or symbols (even drawing a heart for “corazón”) because it is hard to keep up with dictated notes."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "Q5",
    stem: "Q5. What type of people is this employer looking for?",
    choices: ["people who can speak two languages", "people with previous experience", "people who want to work part time", "people with college degrees"],
    answer: 3,
    back: "(4) people with college degrees — “No se requiere experiencia previa pero necesita un diploma universitario.” The job itself is full time, not part time."
  },
  { ...STIMULI.l06,
    type: "mc",
    label: "Q6",
    stem: "Q6. What did the tour guide say?",
    choices: ["Today there is a wide range of hotels to meet different needs.", "There are not enough hotel rooms to meet the demands.", "The best hotels are located outside the city.", "Advance registration is required during the summer season."],
    answer: 0,
    back: "(1) Today there is a wide range of hotels to meet different needs — Madrid once had only two kinds of hotels, but now has countless modern elegant ones plus charming small hotels at half the price of a luxury room."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "Q7",
    stem: "Q7. When will this play take place?",
    choices: ["four weekends in July", "every day in July", "daily at 3:00 p.m.", "the first week in July, only"],
    answer: 0,
    back: "(1) four weekends in July — “La pieza se presentará durante cuatro fines de semana consecutivos” during the month of July, Saturdays and Sundays at 3:00 p.m."
  },
  { ...STIMULI.l08,
    type: "mc",
    label: "Q8",
    stem: "Q8. Who would be most interested in this announcement?",
    choices: ["people who want to travel", "people who want to buy clothing", "people who want to use cellular telephones", "people who want to invest money"],
    answer: 1,
    back: "(2) people who want to buy clothing — the El Corte Inglés summer sale offers men's jackets at 50% off and shirts at 2.995 pesetas (two for 5.000)."
  },
  { ...STIMULI.l09,
    type: "mc",
    label: "Q9",
    stem: "Q9. What does the instructor suggest to relieve stress?",
    choices: ["study a foreign language", "listen to music", "think pleasant thoughts", "concentrate on physical activity"],
    answer: 3,
    back: "(4) concentrate on physical activity — women who studied while pedaling got fewer anti-stress benefits than those who devoted themselves entirely to exercising: “hay que concentrarse sólo en el ejercicio.”"
  },

  // ---------- Part 2b — Listening, answers in Spanish (Q10-15) ----------
  { ...STIMULI.l10,
    type: "mc",
    label: "Q10",
    stem: "Q10. ¿Por qué llamó Irene?",
    choices: ["Necesita transportación a la escuela.", "Necesita el libro de ciencia.", "Está muy enferma.", "Está muy ocupada."],
    answer: 1,
    back: "(2) Necesita el libro de ciencia. — Irene no puede hacer la tarea de biología porque no tiene su libro y pide prestado el tuyo: “¿Me puedes prestar el tuyo?”"
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "Q11",
    stem: "Q11. ¿Qué sugiere este anuncio?",
    choices: ["Es difícil hacerse famoso.", "Es necesario practicar deportes.", "Es bueno estudiar después de la escuela.", "Es importante dormir un poco durante el día."],
    answer: 3,
    back: "(4) Es importante dormir un poco durante el día. — los estudios científicos comprueban que “la costumbre de dormir una siesta es algo muy saludable” y reduce enormemente el estrés."
  },
  { ...STIMULI.l12,
    type: "mc",
    label: "Q12",
    stem: "Q12. ¿Qué opinan los arqueólogos?",
    choices: ["que el observatorio no es auténtico", "que los mayas vivieron en la Florida", "que los estadounidenses no usaron el observatorio", "que los españoles construyeron el observatorio"],
    answer: 1,
    back: "(2) que los mayas vivieron en la Florida — los arqueólogos opinan que el observatorio “puede pertenecer a la cultura maya”, lo que apoya la hipótesis de que los mayas llegaron a la península de la Florida antes que los españoles."
  },
  { ...STIMULI.l13,
    type: "mc",
    label: "Q13",
    stem: "Q13. ¿Qué recibe Ud. si se suscribe a Tiempo?",
    choices: ["ocho libros de misterio", "un libro sobre la magia", "varias películas populares", "entradas gratis a los cines"],
    answer: 2,
    back: "(3) varias películas populares — con la suscripción “le llevamos el cine a su casa: ocho vídeos para toda la familia”, la magia del cine más famoso de México."
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "Q14",
    stem: "Q14. ¿Qué hizo este señor?",
    choices: ["Visitó la Torre Eiffel.", "Asistió a un partido de fútbol.", "Cocinó algo extraordinario.", "Abrió una tienda de comestibles."],
    answer: 2,
    back: "(3) Cocinó algo extraordinario. — Hilario Deluchi preparó una pizza de 338 metros, más o menos de la altura de la Torre Eiffel, con 200 personas trabajando 24 horas."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "Q15",
    stem: "Q15. ¿En qué gasta su dinero Soraya?",
    choices: ["comprando discos compactos", "coleccionando instrumentos musicales", "adquiriendo muchos tipos de muebles", "viajando al extranjero"],
    answer: 1,
    back: "(2) coleccionando instrumentos musicales — desde los 5 años Soraya colecciona guitarras (“Tengo más guitarras que las suficientes”); ya tiene 36."
  },

  // ---------- Part 3a — Reading passage (Q16-20) ----------
  { ...STIMULI.fey,
    type: "mc",
    label: "Q16",
    stem: "Q16. ¿De dónde viene Fey?",
    choices: ["de una familia de escritores", "de México, de padres españoles y argentinos", "de una familia de poco talento musical", "de Miami, con padres venezolanos"],
    answer: 1,
    back: "(2) de México, de padres españoles y argentinos — “De padres españoles y argentinos, esta artista mexicana ha gozado recientemente de un éxito fenomenal.”"
  },
  { ...STIMULI.fey,
    type: "mc",
    label: "Q17",
    stem: "Q17. ¿Por qué le critican a Fey?",
    choices: ["porque los boletos cuestan demasiado", "porque nunca dice su edad", "porque no canta canciones originales", "porque su ropa está pasada de moda"],
    answer: 1,
    back: "(2) porque nunca dice su edad — “A ella se le critica por no admitir su edad”: sus admiradores le atribuyen 19 años, sus críticos aseguran que tiene 26."
  },
  { ...STIMULI.fey,
    type: "mc",
    label: "Q18",
    stem: "Q18. ¿Por qué es mejor no decir cuántos años tiene ella?",
    choices: ["para aumentar su público de edades variadas", "porque es una costumbre típica de las artistas juveniles", "para evitar pagar impuestos altos", "porque no tiene certificado de nacimiento"],
    answer: 0,
    back: "(1) para aumentar su público de edades variadas — mantener su edad un misterio “parece más bien una estrategia comercial que le permite llegar a un público más vasto”; sus aficionados tienen entre 7 y 25 años."
  },
  { ...STIMULI.fey,
    type: "mc",
    label: "Q19",
    stem: "Q19. ¿Qué dice su madre?",
    choices: ["que a Fey le gustaría ser un fenómeno de nivel mundial", "que a Fey le interesa mucho la fama", "que le interesa cantar solamente", "que le fascina el mundo de sus amigos jóvenes"],
    answer: 2,
    back: "(3) que le interesa cantar solamente — dice su madre: “A Fey no le interesa la fama, quiere hacer lo que más le gusta: cantar.”"
  },
  { ...STIMULI.fey,
    type: "mc",
    label: "Q20",
    stem: "Q20. ¿En qué se basa la fama de Fey?",
    choices: ["puede cantar en español", "es aficionada a la fotografía", "goza de un éxito en la música y la moda", "es descubierta por Luis Miguel"],
    answer: 2,
    back: "(3) goza de un éxito en la música y la moda — llenó el Auditorio Nacional, rompió el récord de boletos vendidos y creó una línea de ropa que lleva su nombre."
  },

  // ---------- Part 3b — Realia (Q21-25) ----------
  { ...STIMULI.corteIngles,
    type: "mc",
    label: "Q21",
    stem: "Q21. What does El Corte Inglés offer?",
    choices: ["discounts on reservations", "help in planning winter cruises", "special prices for children", "employment opportunities in its travel department"],
    answer: 0,
    back: "(1) discounts on reservations — booking vacations two months ahead (“Adelanta 2 meses la reserva de tus vacaciones”) earns a 7% discount on its vacation programs."
  },
  { ...STIMULI.planetarios,
    type: "mc",
    label: "Q22",
    stem: "Q22. What does this advertisement offer?",
    choices: ["a special exhibit for students", "a free ticket to visit the planetarium", "a guided tour of the space center", "a copy of a popular book on astronomy"],
    answer: 1,
    back: "(2) a free ticket to visit the planetarium — “Regalamos entradas”: presenting the coupon at the planetariums of Granada and Pamplona lets you enjoy the experience “gratuitamente.”"
  },
  { ...STIMULI.lectura,
    type: "mc",
    label: "Q23",
    stem: "Q23. This article provides information about a",
    choices: ["public speaking course", "way to encourage reading", "benefit of speaking two languages", "dictionary for young children"],
    answer: 1,
    back: "(2) way to encourage reading — “Haga de la lectura una aventura” urges parents to read aloud to children daily so they expand vocabulary, appreciate books, and learn about the world."
  },
  { ...STIMULI.regaloArte,
    type: "mc",
    label: "Q24",
    stem: "Q24. What does this advertisement suggest you do?",
    choices: ["decorate homes with new furniture", "visit a new store", "go to a reopening of a museum", "buy paintings to give as gifts"],
    answer: 3,
    back: "(4) buy paintings to give as gifts — “Hoy día son más las personas que regalan arte”: the ad presents art such as Augusto Marín's serigraph “Unicornio Azul” as the perfect lasting gift."
  },
  { ...STIMULI.bellasArtes,
    type: "mc",
    label: "Q25",
    stem: "Q25. According to this advertisement, who should complete this application?",
    choices: ["people who want to study acting", "people who want to place an advertisement in the magazine", "people who want to receive the magazine", "people who want to work for Bellas Artes"],
    answer: 2,
    back: "(3) people who want to receive the magazine — fill out, cut out, and mail the form with $15.00 for postage to receive the next 12 issues of the Bellas Artes magazine every month."
  },

  // ---------- Part 3c — Cloze passage (Q26-30) ----------
  { ...STIMULI.lopez,
    type: "mc",
    label: "Q26",
    stem: "Q26. Which choice best completes blank (26)?",
    choices: ["tímida", "débil", "excelente", "preocupada"],
    answer: 2,
    back: "(3) excelente — millones de fanáticos lo vieron jugar “de manera excelente”: su fuerte brazo paró la racha de los Indios y además bateó un jonrón."
  },
  { ...STIMULI.lopez,
    type: "mc",
    label: "Q27",
    stem: "Q27. Which choice best completes blank (27)?",
    choices: ["buena", "tonta", "repetitiva", "aburrida"],
    answer: 0,
    back: "(1) buena — quedarse en las ligas menores fue “una decisión buena”: la oración siguiente lo confirma, “La paciencia le dio buenos resultados.”"
  },
  { ...STIMULI.lopez,
    type: "mc",
    label: "Q28",
    stem: "Q28. Which choice best completes blank (28)?",
    choices: ["negaran", "perdieran", "dejaran", "recibieran"],
    answer: 3,
    back: "(4) recibieran — sus padres lucharon para que sus hijos pudieran ir a la escuela y “recibieran la mejor educación posible.”"
  },
  { ...STIMULI.lopez,
    type: "mc",
    label: "Q29",
    stem: "Q29. Which choice best completes blank (29)?",
    choices: ["soldados", "profesores", "deportistas", "pensadores"],
    answer: 2,
    back: "(3) deportistas — la familia tiene tradición deportiva: una hermana es famosa voleibolista casada con un pelotero, y otra está casada con una estrella olímpica de natación."
  },
  { ...STIMULI.lopez,
    type: "mc",
    label: "Q30",
    stem: "Q30. Which choice best completes blank (30)?",
    choices: ["nervioso", "preparado", "disgustado", "descansado"],
    answer: 1,
    back: "(2) preparado — López está listo para el desafío: “Voy a convertirme en el pelotero que todo el mundo espera que yo sea.”"
  },

  // ---------- Part 4 — Writing (W1-W4 self cards) ----------
  { type: "self",
    label: "W1",
    front: `W1 (Part 4a, Question 31). Write one well-organized note in Spanish as directed below. [6 credits]

Choose either question 31 or 32. Write a well-organized note, following the specific instructions given in the question you have chosen. Your note must consist of at least six clauses. To qualify for credit, a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning.

31 — You have a new pen pal from Paraguay. Write a note in Spanish to your pen pal telling him or her about yourself.

In your note you may wish to mention: your name and age, where you live, a description of yourself, your interests, and any other information that would help to tell your pen pal about yourself.

Be sure to accomplish the purpose of the note, which is to tell your pen pal about yourself.

Use the following — Salutation: Querido/Querida _______, / Closing: Un abrazo,
(The salutation and closing will not be counted as part of the six required clauses.)`,
    back: `Model answer (official six-credit sample from the scoring key):

Querida Pilar,
Me llamo Dolores. Soy del estado de Nueva York. Vivo en una casa en las montañas, muy cerca de un lago grande. Tengo diez y seis años. Mi pelo es castaño y soy bastante delgada. Me encanta leer, pero mi pasatiempo favorito es el esquí. Por eso me divierto muchísimo en el invierno. Por favor escríbeme pronto para decirme algo de ti.
Un abrazo,

Rubric: the note must accomplish its purpose (telling your pen pal about yourself) and contain at least six comprehensible, appropriate clauses, each with a verb, a subject, and meaning-bearing words; clauses with more than one grammar/spelling error lose the form point.`
  },
  { type: "self",
    label: "W2",
    front: `W2 (Part 4a, Question 32). Write one well-organized note in Spanish as directed below. [6 credits]

Choose either question 31 or 32. Write a well-organized note, following the specific instructions given in the question you have chosen. Your note must consist of at least six clauses. To qualify for credit, a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning.

32 — You and a Spanish-speaking friend want to plan an activity to do together. You have an idea to suggest, but you are unable to find your friend at the moment. Write a note in Spanish to leave for your friend suggesting an activity to do together.

In your note you may wish to mention: what the activity is, where you will go, who will be going, the date and time of the activity, how you will get there, and what you may need for the activity.

Be sure to accomplish the purpose of the note, which is to suggest an activity to do together.

Use the following — Salutation: [your friend's first name] / Closing: [your first name]
(The salutation and closing will not be counted as part of the six required clauses.)`,
    back: `Model answer (official six-credit sample from the scoring key):

Paco,
Mira. Un grupo de chicos va a reunirse en el parque el sábado para jugar fútbol. Felipe nos ha invitado. El partido es a las cuatro, y podemos andar desde mi casa. ¿Qué te parece? Llámame después de las 8. Hasta pronto.
David

Rubric: the note must accomplish its purpose (suggesting an activity to do together) and contain at least six comprehensible, appropriate clauses, each with a verb, a subject, and meaning-bearing words; clauses with more than one grammar/spelling error lose the form point.`
  },
  { ...STIMULI.biblioteca,
    type: "self",
    label: "W3",
    front: `W3 (Part 4b, Question 33). Write one well-organized composition in Spanish as directed below. [10 credits]

Choose either question 33 or 34. Write a well-organized composition, following the specific instructions given in the question you have chosen. Your composition must consist of at least 10 clauses. To qualify for credit, a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning.

33 — In Spanish, write a story about the situation shown in the picture below. It must be a story relating to the picture, not a description of the picture. Do not write a dialogue.`,
    back: `Model answer (official ten-credit sample from the scoring key):

Hoy es sábado y María está en la biblioteca. Busca información para hacer un reportaje de un país sudamericano. El bibliotecario la ayuda mucho. Le muestra muchos libros interesantes. Hay mucha información que puede usar. Identifica varios libros que pueden ayudarle con la tarea. Desafortunadamente, María dejó su tarjeta de identificación en casa y no puede sacar los libros sin ella. Ella le pregunta al bibliotecario si ella puede dejar los libros en el mostrador por unos minutos mientras ella regresa a su casa por su tarjeta.

Rubric: the composition must be a story relating to the picture (not a description, not a dialogue) with at least 10 comprehensible, appropriate clauses; each clause needs a verb, a subject, and meaning-bearing words, and more than one form error in a clause loses its form point.`
  },
  { type: "self",
    label: "W4",
    front: `W4 (Part 4b, Question 34). Write one well-organized composition in Spanish as directed below. [10 credits]

Choose either question 33 or 34. Write a well-organized composition, following the specific instructions given in the question you have chosen. Your composition must consist of at least 10 clauses. To qualify for credit, a clause must contain a verb, a stated or implied subject, and additional words necessary to convey meaning.

34 — The Spanish Club in your school would like to participate in a community service project. The president of the club has asked for suggestions of community service project activities. In Spanish, write a letter to the president of the Spanish Club suggesting some ideas for the community service project.

You must accomplish the purpose of the letter, which is to suggest an activity for a community service project.

In your letter you may wish to include: what the project is, why you think it is important, how to accomplish it, how many people could participate, how much time and money would be needed, who will benefit from the project, how you can help, when this could take place and who to contact for more information.

You may use any or all of the ideas suggested above or you may use your own ideas. Either way, you must suggest an activity for a community service project.

Use the following — Dateline: el 24 de enero de 2002 / Salutation: Querido Presidente / Closing: Atentament [your name],
(The dateline, salutation, and closing will not be counted as part of the ten required clauses.)`,
    back: `Model answer (official ten-credit sample from the scoring key):

el 24 de enero de 2002
Querido Presidente:
Tengo una buena idea para ayudar a nuestra comunidad. Hay un problema grande con el parque cerca del río. Hay mucha basura y tiene un aspecto horrible. Creo que debemos limpiar el parque como nuestro proyecto. Podemos recoger las latas, las botellas y los papeles. Todos los miembros pueden participar, y no va a costar nada. Claro que esto será bueno para todas las personas que frecuentan el parque. Yo puedo organizar el transporte para llevar a los estudiantes al parque. Podemos hacer este trabajo un sábado al fin del mes. Mi papá me dijo que podemos ponernos en contacto con el alcalde para más información.
Atentamente,

Rubric: the letter must accomplish its purpose (suggesting an activity for a community service project) with at least 10 comprehensible, appropriate clauses; each clause needs a verb, a subject, and meaning-bearing words, and more than one form error in a clause loses its form point. (Note: the exam booklet prints the closing as “Atentament [your name],”.)`
  },

  // ---------- Supplemental cards (S1-S10) ----------
  { ...STIMULI.l03,
    type: "mc",
    label: "S1",
    stem: "S1. According to the pet trainer, what should you do if you want to keep feeding your dog yourself?",
    choices: ["feed the dog in a different place", "give the dog smaller portions", "let the dog stay in the dining room", "feed the dog only dry food"],
    answer: 0,
    back: "(1) feed the dog in a different place — “Si usted quiere seguir dándole de comer al perro, hágalo en un sitio diferente,” and do not let the dog into the dining room, no matter its innocent face and sad eyes."
  },
  { ...STIMULI.l05,
    type: "mc",
    label: "S2",
    stem: "S2. What does this company offer its new employees?",
    choices: ["free transportation to the call center", "complete training while they earn money", "housing assistance near the office", "weekends entirely free of work"],
    answer: 1,
    back: "(2) complete training while they earn money — “Le ofrecemos todo el entrenamiento y preparación que usted necesite” and “gana dinero mientras aprende”; the schedule actually includes one weekend day, so weekends off is wrong."
  },
  { ...STIMULI.l07,
    type: "mc",
    label: "S3",
    stem: "S3. How much does it cost to attend a performance of “Piel de papel”?",
    choices: ["1.000 bolívares", "2.000 bolívares", "3.000 bolívares", "5.000 bolívares"],
    answer: 2,
    back: "(3) 3.000 bolívares — the broadcast ends: “La entrada es 3.000 bolívares,” for the play staged in sala número uno del Celarg, in Altamira."
  },
  { ...STIMULI.l11,
    type: "mc",
    label: "S4",
    stem: "S4. Según el anuncio, ¿por qué tomaban siestas las personas famosas como Churchill y Einstein?",
    choices: ["porque trabajaban hasta muy tarde por la noche", "porque los médicos se lo recomendaron", "porque no podían dormir en casa", "porque querían soñar con nuevas ideas"],
    answer: 0,
    back: "(1) porque trabajaban hasta muy tarde por la noche — “Para aliviar el estrés, estas personas tomaban siestas porque trabajaban hasta muy tarde por la noche.”"
  },
  { ...STIMULI.l14,
    type: "mc",
    label: "S5",
    stem: "S5. ¿Cuántas personas trabajaron en la preparación de la pizza gigante?",
    choices: ["24", "100", "200", "338"],
    answer: 2,
    back: "(3) 200 — “En su preparación de la pizza trabajaron 200 personas sin parar durante 24 horas”; los otros números son las horas de trabajo, los kilos de tomates y los metros de la pizza."
  },
  { ...STIMULI.l15,
    type: "mc",
    label: "S6",
    stem: "S6. ¿Por qué no viaja Soraya con su guitarra preferida?",
    choices: ["porque es demasiado grande", "por miedo a que se rompa", "porque la vendió a un museo", "porque la dejó en Irlanda"],
    answer: 1,
    back: "(2) por miedo a que se rompa — su preferida, hecha especialmente para ella en Irlanda con cinco tipos de madera, se queda en casa: “No viaja con ésa por miedo a que se rompa.”"
  },
  { ...STIMULI.fey,
    type: "mc",
    label: "S7",
    stem: "S7. Según el artículo, ¿qué récord rompió Fey en el Auditorio Nacional?",
    choices: ["Fue la primera mujer en romper el récord de boletos vendidos.", "Dio el concierto más largo de la historia del auditorio.", "Cantó en más idiomas que cualquier otro artista.", "Presentó el mayor número de conciertos en un solo mes."],
    answer: 0,
    back: "(1) Fue la primera mujer en romper el récord de boletos vendidos — después de diez conciertos en el Auditorio Nacional, “Pasó a ser la primera mujer en romper el récord de boletos vendidos en este auditorio.”"
  },
  { ...STIMULI.planetarios,
    type: "mc",
    label: "S8",
    stem: "S8. According to this coupon, what must a visitor do to enjoy the planetariums free of charge?",
    choices: ["buy a book about astronomy", "present the coupon at the planetariums", "make a reservation by telephone", "join a science club in Granada"],
    answer: 1,
    back: "(2) present the coupon at the planetariums — “Presentando este cupón en los dos planetarios usted podrá disfrutar gratuitamente” of the space experience in Granada and Pamplona."
  },
  { ...STIMULI.corteIngles,
    type: "mc",
    label: "S9",
    stem: "S9. According to the advertisement, what happens if you cancel a trip up to 21 days before the departure date?",
    choices: ["You pay no cancellation fees.", "You lose your entire deposit.", "You must rebook within one year.", "You receive a winter cruise instead."],
    answer: 0,
    back: "(1) You pay no cancellation fees — the ad promises “sin gastos de anulación” up to 21 days before the start of the trip (except on the cruise program), plus payment deferred over 3 months without interest."
  },
  { ...STIMULI.lopez,
    type: "mc",
    label: "S10",
    stem: "S10. Según el pasaje, ¿dónde nació Javier López?",
    choices: ["en Atlanta, Georgia", "en Ponce, Puerto Rico", "en Cleveland, Ohio", "en la Ciudad de México"],
    answer: 1,
    back: "(2) en Ponce, Puerto Rico — “López nació en Ponce, Puerto Rico, hace sólo 25 años”, y hoy vive allí con su esposa Analy y su hija, cerca de donde se crió."
  }
];
