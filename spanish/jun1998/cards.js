// June 1998 Comprehensive Examination in Spanish — quiz deck
// Sources: exam booklet (scan, transcribed from 2.5–4x renders), Teacher
// Dictation Copy (text layer), official scoring key (digits re-verified at 4x).
// Listening passages are printed on the cards because no audio exists.

const TDC_SRC = "Teacher Dictation Copy, June 1998 Comprehensive Spanish Regents";
const EXAM_SRC = "June 1998 Comprehensive Spanish Regents";

const STIMULI = {
  l1: {
    passage: `[Background] You are listening to a radio program in Puerto Rico. You hear this announcement about an upcoming contest:

¡Convierta a su bebé en video-estrella! ¡Envíenos un video con alguna escena cómica de su bebé! Gane diez mil dólares para la educación de su hijo u otros premios fabulosos. Hágalo pronto porque también hay regalos especiales para los primeros cien videos que se reciban. Envíe su cinta con su nombre, dirección, y el nombre y la edad del pequeño a TeleMujer, Apartado 600, San Juan, Puerto Rico. Los mejores concursantes saldrán en el programa TeleMujer.`,
    psource: TDC_SRC
  },
  l2: {
    passage: `[Background] You are shopping at El Corte Inglés, a major department store in Madrid. You hear this announcement:

¡Atención, viajero! Hemos creado un servicio único: el "servicio pasaporte", que le ofrece exclusiva atención al turista. Entre las ventajas increíbles hay un diez por ciento de descuento, envío de mercancía a su hotel o al extranjero, y dos horas de estacionamiento gratis. Solicite la tarjeta de compras "servicio pasaporte". ¡Con nosotros, su pasaporte de otro país vale dinero y la máxima comodidad en sus compras!`,
    psource: TDC_SRC
  },
  l3: {
    passage: `[Background] You are living with a family in Mexico. While your host mother is away from home, she calls and says:

Hola. Vamos a llegar tarde a casa hoy. Necesito que empiece a preparar la cena. En la nevera hay cebollas, tomates y pescado fresco. Corte las cebollas y los tomates. Póngalos en una cacerola y añada el pescado. Cocínelo todo junto durante 45 minutos. José y yo llegaremos aproximadamente a las nueve. Muchas gracias por su ayuda.`,
    psource: TDC_SRC
  },
  l4: {
    passage: `[Background] You are listening to a Spanish-language program and hear this announcement:

El Departamento de Parques y Recreación de Austin invita a toda la comunidad a las fiestas acuáticas todos los sábados en diferentes piscinas municipales. Todos los invitados pueden traer sus flotadores. Mientras ellos flotan en el agua fresca, pueden ver sus películas favoritas que comienzan a las nueve. La entrada es de dos dólares por adulto; los menores de dieciocho años pagan cincuenta centavos. Se proveen refrescos.`,
    psource: TDC_SRC
  },
  l5: {
    passage: `[Background] You are listening to a Spanish radio program from Boston and you hear this announcement:

La compañía Kraft anuncia que va a apoyar el programa "Lectores Jóvenes" de los centros educativos nacionales Lulac. Kraft va a donar dinero y premios a este programa de verano en Boston. El objetivo principal de este proyecto es ayudar a los estudiantes a mejorar su capacidad para leer. Al mismo tiempo se quiere entusiasmarlos para que lean por toda la vida.`,
    psource: TDC_SRC
  },
  l6: {
    passage: `[Background] You hear this advertisement about a new product:

Una compañía española acaba de anunciar un nuevo sistema telefónico que ayuda a limitar la duración de las llamadas y a hacer un uso racional del teléfono. Según sus creadores, este sistema puede ahorrar entre el 30 y el 40 por ciento de la cuenta normal. Otra ventaja para los padres de familia es que este aparato puede limitar las llamadas de larga distancia de sus niños. Así, en general, las llamadas serán más cortas. Para más información, llame a NETTEL, 314-49-13.`,
    psource: TDC_SRC
  },
  l7: {
    passage: `[Background] Your Spanish friend has left you this message on your answering machine:

Oye, ¿dónde estás cuando te necesito? Hace tres horas que trato de llamarte. No entiendo nada de la lección de historia. Tú eres el único que saca buenas notas en este curso. No voy a salir bien sin tu ayuda. Llámame o ven a mi casa. Hasta pronto.`,
    psource: TDC_SRC
  },
  l8: {
    passage: `[Background] You hear this announcement on a Mexican radio station:

¿Hablas inglés? Si tienes excelente presentación, estudios de bachillerato o equivalente y tu edad es entre los 20 y 30 años, te invitamos a integrarte a nuestro equipo de trabajo. Solicitamos vendedores para trabajar en nuestras tiendas del aeropuerto de Vallarta. Ofrecemos buen sueldo y posibilidad de avance.`,
    psource: TDC_SRC
  },
  l9: {
    passage: `[Background] You are watching a Mexican channel on television and hear this news item:

Aprovechando la celebración de su Quinto Centenario, el Instituto de Arte de Chicago organizó una gran exposición sobre el arte y la cultura precolombinos. Esta exposición llamada "La América Antigua" representa una colaboración entre los museos nacionales de países centro y sudamericanos y también de los Estados Unidos y Europa. La exhibición contiene unas 300 piezas procedentes de diez y siete culturas diferentes como las culturas maya, inca, y azteca. Muchas de estas obras se exhiben por primera vez en este país. La exposición también se trasladará a Houston y a Los Angeles.`,
    psource: TDC_SRC
  },
  l10: {
    passage: `[Background] Your Argentinian friend is telling you about a new restaurant. She says:

Entré en el nuevo restaurante de la ciudad y pedí de comer. Noté que el mantel de la mesa no estaba muy limpio. También se olvidaron de ponerme una cuchara y una servilleta. Me sirvieron la sopa fría y la carne dura. Todo lo que me dieron era malo y caro.`,
    psource: TDC_SRC
  },
  l11: {
    passage: `[Background] You are listening to the radio and you hear this news item:

El cantante británico Sting ha participado en un coloquio en la Universidad Complutense de Madrid. Sting, uno de los cantantes más ocupados del momento, confesó: "Vivo en un castillo maravilloso, pero estoy conectado con los problemas de la gente". También reafirmó su decisión de participar en causas nobles. Sting comentó: "No he hecho el dinero explotando a nadie ni robando, y pienso que con mis canciones doy felicidad a la gente".`,
    psource: TDC_SRC
  },
  l12: {
    passage: `[Background] While staying with a family in Mexico City, you hear your host brother talking on the telephone. He is giving someone directions:

Cuando vengas a visitarme no tomes la Avenida Juárez. Sé que el viaje va a ser más largo, pero ya hace tres semanas que tienen cerradas varias calles a causa de la construcción del nuevo túnel para el tren subterráneo. Es mejor si cruzas por el puente y en veinte minutos estarás en mi casa.`,
    psource: TDC_SRC
  },
  l13: {
    passage: `[Background] You are watching television and hear this information:

La natación es perfecta para mejorar el tono muscular de todo el cuerpo, aliviar dolores de espalda y cuello, y tranquilizar los nervios. Nadando se realiza un buen ejercicio sin riesgo de lesiones. Se mueven casi todos los músculos del cuerpo y se gastan un montón de calorías. Aprovecha tus vacaciones para iniciarte en este deporte con la promesa de seguir todo el año. Las personas que lo hacen dicen sentirse eufóricas después de nadar. A ti puede ocurrirte lo mismo.`,
    psource: TDC_SRC
  },
  l14: {
    passage: `[Background] You are visiting Puerto Rico and a travel agent is explaining about a place to stay:

La Hacienda Miramar es uno de los dieciséis hoteles estilo paradores de Puerto Rico. Este parador está ganando popularidad entre los visitantes cansados de grandes hoteles. Muchos viajeros buscan escapar de la multitud de turistas para explorar los lugares históricos de la isla y al mismo tiempo disfrutar de la paz que el ambiente rural les ofrece.`,
    psource: TDC_SRC
  },
  l15: {
    passage: `[Background] While you are touring Mérida, Mexico, your guide says:

Hay que visitar los templos arqueológicos de Yucatán. Para disfrutar mejor de su viaje a los templos arqueológicos, le recomendamos lo siguiente: Utilice sombrero. Lleve una loción bloqueadora de sol. Utilice zapatos cómodos. Recuerde que es ilegal llevarse objetos o materiales encontrados en los sitios arqueológicos.`,
    psource: TDC_SRC
  },
  enrique: {
    passage: `Conozca a Enrique Iglesias — hijo de un famoso cantante

Enrique Iglesias Preysler nació el 8 de mayo de 1975. Él es hijo del ultrafamoso cantante Julio Iglesias y de Isabel Preysler, una de las mujeres más guapas y queridas de España. Enrique tiene dos hermanos, Julio José y Chabeli, y dos medias hermanas chiquititas llamadas Tamara y Ana que, según dice, son su adoración. El cantante es de 1.88 metros de altura, y bastante delgado. Tiene ojos cafés, piel bronceada y cabello castaño. Enrique ha pasado casi toda su vida en Miami. Aunque ha estado separado de su papá y de su mamá, llevan una relación muy buena y son muy buenos amigos. Sus principales pasatiempos desde niño son los deportes acuáticos, la escritura — escribe canciones y poemas — y la música. Le gusta escuchar desde un aria de ópera hasta un buen mariachi.

Desde pequeño, Enrique sintió la necesidad de expresarse con la música y formó un grupo con varios amigos de la escuela. Pero ellos siempre practicaban en secreto. No quería lanzarse al mundo musical hasta estar completamente seguro de sus habilidades artísticas. Esa seguridad precisamente le llegó hace poco menos de un año cuando, juntando sus ahorros, grabó su primer disco.

Hablando un poquito de su infancia Enrique nos dijo: "Yo fui un niño muy normal dentro de la normalidad que se puede tener cuando se viaja por todo el mundo desde muy chico. Siempre me sentí muy querido y apoyado por mis padres. En los grandes recuerdos que tengo de mi niñez nunca puedo olvidar a la Seño'. Es la mujer que más le ha dado a mis hermanos y a mí más tiempo, cuidados, y cariño. En la escuela yo era un muchacho muy inquieto, pero tan común y corriente como los demás. Quizás la única diferencia era que yo viajaba mucho, que conocía a mucha gente, que me tomaban fotos en la calle y que tenía unos padres que salían en las portadas de todas las revistas.

Ahora siento que mi vida ha sufrido un cambio radical. Soy reconocido por mis talentos artísticos por todo el mundo y por esto estoy más presionado. Vivo en un constante estado de estrés, pero puedo decir que he sido y soy muy feliz".

Por si te queda alguna duda, hoy por hoy en cuanto a cantantes juveniles se refiere, Enrique es el número uno. Hasta la fecha ha superado a otros cantantes como Ricky Martin y Luis Miguel en países como España, donde ha vendido casi 200 mil discos; en Portugal donde ha vendido 50 mil; en México con más de 400 mil, y en Argentina y Chile donde ha superado las ventas anticipadas. Hoy día se encuentra promoviendo sus canciones en italiano y portugués, y dentro de poco, las grabará en inglés.

Para el futuro, Enrique piensa incluir canciones más expresivas, más realistas, más vividas porque ya tiene experiencia para hablar de muchas cosas. Quiere conocer a todo el mundo y desea ser respetado como músico, algo que le agradaría muchísimo a su padre — el famoso cantante español — Julio Iglesias.`,
    psource: "Part 3a reading passage, " + EXAM_SRC
  },
  r21: {
    imgs: [{
      src: "img/q21-canarias.png",
      cap: "\"canarias — NATURALEZA CALIDA\" tourism advertisement for the seven Canary Islands. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Boxed Spanish tourism ad for the Canary Islands describing incredible deserts, tropical forests, lunar landscapes and rich sea floors across its seven islands"
    }]
  },
  r22: {
    imgs: [{
      src: "img/q22-carta-secretaria.png",
      cap: "Letter from María González responding to MTL S.A.'s bilingual-secretary opening announced in \"La Opinión\". Source: " + EXAM_SRC + ", Part 3b",
      alt: "Formal Spanish letter in which María González asks to be considered for a bilingual secretary position, describing her university studies, languages, and experience in an export sales department"
    }]
  },
  r23: {
    imgs: [{
      src: "img/q23-bicicletas-copenhague.png",
      cap: "\"Bicicletas gratis en Copenhague\" — news box about Copenhagen's free city bicycles. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Boxed Spanish news item explaining that Copenhagen put a thousand free bicycles on the street to fight noise and pollution, returnable at fifty points around the city"
    }]
  },
  r24: {
    imgs: [{
      src: "img/q24-trivia-cilantro.png",
      cap: "\"LA TRIVIA DE 'CILANTRO Y PEREJIL'\" — Revista ERES & IMCINE contest with photo of actors Juan Manuel Bernal and Alpha Acosta. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Spanish magazine contest box offering ten questionnaire winners a dinner with the young stars of the film Cilantro y Perejil; entries to Revista ERES, Mexico City, deadline June 16 1996"
    }]
  },
  r25: {
    imgs: [{
      src: "img/q25-verano-electricidad.png",
      cap: "\"• YA LLEGO EL VERANO •\" — electric-company notice with a sweating cartoon air conditioner and energy-saving tips. Source: " + EXAM_SRC + ", Part 3b",
      alt: "Spanish utility notice warning that electricity charges have increased and listing air-conditioner maintenance and thermostat tips to control consumption"
    }]
  },
  cloze: {
    passage: `Sensacional método de guitarra

¿Tiene su propia guitarra pero no sabe tocarla? ¿Siempre quería aprender a tocar la guitarra? Esta es su gran oportunidad. Hay un método muy sencillo, agradable y en video. Úselo en su propio hogar, sin tener que ir a una escuela, sin ejercicios aburridos y sobre todo con canciones hermosas y de moda. Las canciones que aprenderá son muy conocidas, por ejemplo: "El Reloj", "Tu Cárcel", "Amor Eterno", "La Puerta Negra".

GUITARRA FACILISIMA es la sensación del momento. Desde la publicación de este método para aprender a tocar la guitarra, la reacción del público ha sido explosiva. Hay miles y miles de personas, que están __(26)__ con este método. La aceptación de este método por tantas personas ha hecho que varias bibliotecas de los Estados Unidos lo tengan para prestar al público.

Ud. aprende con canciones de __(27)__ famosos como Roberto Carlos, Juan Gabriel, Los Bukis y muchos más. Además, en video es donde el maestro no se cansa de repetir hasta que Ud. aprenda. Su costo es sumamente módico . . . ¡sólo $24.95. Incluye un libro con instrucciones, un __(28)__ de larga duración y se está regalando un juego de cuerdas de nilón para su guitarra con valor de $12.00, completamente gratis.

Se han hecho varios años de estudio e investigación para __(29)__ el método que hace que tocar la guitarra sea fácil . . . facilísimo. Además, es super económico, ya que no tiene que pagar grandes cantidades por clases particulares, las cuales pueden ser costosas. El video es equivalente a muchísimas horas de estudio por lo que el costo es mínimo.

Es posible ordenar su método hoy mismo o pedirlo en su librería o tienda de discos favorita.

Y tiene una super garantía. Si en 60 días no aprende, puede devolver su método para una vuelta de su __(30)__ y por supuesto, se puede quedar con las cuerdas. Pregunte a sus amigos. Estamos seguros que ya han oído hablar de GUITARRA FACILISIMA. Tanta gente satisfecha no se puede equivocar. Ordene su curso hoy mismo y empiece a ser feliz.`,
    psource: "Part 3c cloze passage, " + EXAM_SRC
  },
  w33pic: {
    imgs: [{
      src: "img/q33-dibujo-bebe.png",
      cap: "Part 4b picture prompt: write a story about the situation shown. Source: " + EXAM_SRC,
      alt: "Line drawing of two women and a man outdoors under a tree admiring a baby in an old-fashioned carriage, with houses in the background"
    }]
  }
};

const ALL_CARDS = [
  // ---------- Part 2a: listening, Q1-9 (answered in English) ----------
  {
    ...STIMULI.l1, "type": "mc", "label": "Q1",
    "stem": "Q1. Who would be most interested in this contest?",
    "choices": ["the parent of a young child", "someone who wants to be an actor", "an elementary school teacher", "a professional photographer"],
    "answer": 0,
    "back": "(1) the parent of a young child — the contest asks for a funny video of \"su bebé\" with a $10,000 education prize for the child."
  },
  {
    ...STIMULI.l2, "type": "mc", "label": "Q2",
    "stem": "Q2. Who would benefit most from this service offered by El Corte Inglés?",
    "choices": ["a city resident who has no car", "a visitor from outside Spain", "a person who needs a credit card", "a person looking for a job"],
    "answer": 1,
    "back": "(2) a visitor from outside Spain — the \"servicio pasaporte\" offers \"exclusiva atención al turista\"; a foreign passport unlocks the perks."
  },
  {
    ...STIMULI.l3, "type": "mc", "label": "Q3",
    "stem": "Q3. What does your host mother want you to do?",
    "choices": ["go shopping for the family", "start to prepare dinner for the family", "get ready to go out in 45 minutes", "help José when he arrives"],
    "answer": 1,
    "back": "(2) start to prepare dinner — \"Necesito que empiece a preparar la cena\": cut the onions and tomatoes, add the fish, cook 45 minutes."
  },
  {
    ...STIMULI.l4, "type": "mc", "label": "Q4",
    "stem": "Q4. What is a unique feature of this activity?",
    "choices": ["A tour of the park will be given.", "The community will host a sports competition.", "No admission fee is charged for children.", "People can watch a movie while they enjoy the water."],
    "answer": 3,
    "back": "(4) People can watch a movie while they enjoy the water — \"mientras ellos flotan en el agua fresca, pueden ver sus películas favoritas\"."
  },
  {
    ...STIMULI.l5, "type": "mc", "label": "Q5",
    "stem": "Q5. What opportunity is being offered to students?",
    "choices": ["to improve their reading skills", "to attend summer camp at no cost", "to go sightseeing in Boston", "to get a summer job"],
    "answer": 0,
    "back": "(1) to improve their reading skills — the \"Lectores Jóvenes\" program's main objective is \"ayudar a los estudiantes a mejorar su capacidad para leer\"."
  },
  {
    ...STIMULI.l6, "type": "mc", "label": "Q6",
    "stem": "Q6. What is this product designed to do?",
    "choices": ["allow rapid dialing of numbers", "permit unlimited calls to be made at special rates", "lower telephone bills by limiting long-distance calls", "keep a record of each call received"],
    "answer": 2,
    "back": "(3) lower telephone bills by limiting calls — it limits call duration and children's long-distance calls, saving 30–40% of a normal bill."
  },
  {
    ...STIMULI.l7, "type": "mc", "label": "Q7",
    "stem": "Q7. What is the purpose of this message?",
    "choices": ["to accept an invitation", "to cancel an appointment", "to request a favor", "to express appreciation"],
    "answer": 2,
    "back": "(3) to request a favor — the friend understands nothing of the history lesson and needs your help: \"No voy a salir bien sin tu ayuda\"."
  },
  {
    ...STIMULI.l8, "type": "mc", "label": "Q8",
    "stem": "Q8. What does this announcement describe?",
    "choices": ["a vacation trip", "a special sale", "a course of study", "a job opportunity"],
    "answer": 3,
    "back": "(4) a job opportunity — \"Solicitamos vendedores\" for the Vallarta airport stores, with good pay and chance for advancement."
  },
  {
    ...STIMULI.l9, "type": "mc", "label": "Q9",
    "stem": "Q9. What is the subject of this exhibition?",
    "choices": ["modern art", "ancient cultures", "urban life", "famous artists"],
    "answer": 1,
    "back": "(2) ancient cultures — \"La América Antigua\" shows pre-Columbian art: some 300 pieces from seventeen cultures like the Maya, Inca, and Aztec."
  },
  // ---------- Part 2b: listening, Q10-15 (answered in Spanish) ----------
  {
    ...STIMULI.l10, "type": "mc", "label": "Q10",
    "stem": "Q10. ¿Cómo era el nuevo restaurante?",
    "choices": ["Todo era desagradable.", "Todo era muy bueno.", "La comida era deliciosa.", "Era barato."],
    "answer": 0,
    "back": "(1) Todo era desagradable — mantel sucio, cubiertos olvidados, sopa fría, carne dura: \"Todo lo que me dieron era malo y caro\"."
  },
  {
    ...STIMULI.l11, "type": "mc", "label": "Q11",
    "stem": "Q11. ¿Qué les dijo el cantante Sting a los estudiantes universitarios?",
    "choices": ["que a pesar de ser rico, comprende que la gente tiene problemas", "que regalará su castillo a los pobres", "que necesita escribir más canciones para los jóvenes", "que su música no le gusta a la gente"],
    "answer": 0,
    "back": "(1) que a pesar de ser rico, comprende que la gente tiene problemas — \"Vivo en un castillo maravilloso, pero estoy conectado con los problemas de la gente\"."
  },
  {
    ...STIMULI.l12, "type": "mc", "label": "Q12",
    "stem": "Q12. ¿Por qué no se debe tomar la Avenida Juárez?",
    "choices": ["Hay mucho tráfico a esa hora.", "Es fácil perderse en el túnel del tren.", "Es imposible encontrar la parada del tren.", "No se puede pasar por esa calle."],
    "answer": 3,
    "back": "(4) No se puede pasar por esa calle — \"tienen cerradas varias calles a causa de la construcción del nuevo túnel para el tren subterráneo\"."
  },
  {
    ...STIMULI.l13, "type": "mc", "label": "Q13",
    "stem": "Q13. ¿Qué recomienda esta persona?",
    "choices": ["ponerse en dieta ahora", "levantar peso en el verano", "hacer ejercicios acuáticos", "dormir más para aliviar los dolores"],
    "answer": 2,
    "back": "(3) hacer ejercicios acuáticos — recomienda la natación: mejora el tono muscular, alivia dolores y tranquiliza los nervios."
  },
  {
    ...STIMULI.l14, "type": "mc", "label": "Q14",
    "stem": "Q14. ¿Por qué es popular este hotel?",
    "choices": ["Es el más barato de la isla.", "Ofrece tranquilidad a los visitantes.", "Está situado en el centro.", "Tiene habitaciones muy lujosas."],
    "answer": 1,
    "back": "(2) Ofrece tranquilidad a los visitantes — los viajeros buscan escapar de la multitud y \"disfrutar de la paz que el ambiente rural les ofrece\"."
  },
  {
    ...STIMULI.l15, "type": "mc", "label": "Q15",
    "stem": "Q15. ¿Qué recomienda el guía?",
    "choices": ["no entrar en los templos sin guía", "traer dinero para un refresco y una comida", "cubrirse la cabeza y llevar zapatos adecuados", "recoger artefactos antiguos"],
    "answer": 2,
    "back": "(3) cubrirse la cabeza y llevar zapatos adecuados — \"Utilice sombrero... Utilice zapatos cómodos\" para visitar los templos de Yucatán."
  },
  // ---------- Part 3a: reading passage, Q16-20 ----------
  {
    ...STIMULI.enrique, "type": "mc", "label": "Q16",
    "stem": "Q16. ¿Dónde ha vivido Enrique Iglesias por la mayor parte de su vida?",
    "choices": ["en los Estados Unidos", "en España", "en México", "en Portugal"],
    "answer": 0,
    "back": "(1) en los Estados Unidos — \"Enrique ha pasado casi toda su vida en Miami\"."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "Q17",
    "stem": "Q17. ¿Por qué tocaba Enrique la música en secreto con sus amigos?",
    "choices": ["Sus padres le prohibían tocar.", "Sus hermanos se reían de él.", "No quería ofender a nadie.", "No estaba seguro de su talento."],
    "answer": 3,
    "back": "(4) No estaba seguro de su talento — \"No quería lanzarse al mundo musical hasta estar completamente seguro de sus habilidades artísticas\"."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "Q18",
    "stem": "Q18. ¿Cómo era Enrique como niño?",
    "choices": ["Era un chico serio y callado.", "Era un chico solitario.", "Era un chico parecido a los otros.", "Era un chico perezoso."],
    "answer": 2,
    "back": "(3) Era un chico parecido a los otros — se describe \"tan común y corriente como los demás\", aunque inquieto y muy viajado."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "Q19",
    "stem": "Q19. ¿Quién era \"la Seño\"?",
    "choices": ["una aficionada que siempre le escribía", "una señora que cuidaba a Enrique y a sus hermanos", "una tía a quien quería Enrique", "una cantante que lo influía mucho"],
    "answer": 1,
    "back": "(2) una señora que cuidaba a Enrique y a sus hermanos — \"la mujer que más le ha dado a mis hermanos y a mí más tiempo, cuidados, y cariño\"."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "Q20",
    "stem": "Q20. ¿Qué está causando el estrés en la vida de Enrique?",
    "choices": ["su gran fama", "sus problemas familiares", "el descontento con las ventas", "la pérdida de la voz"],
    "answer": 0,
    "back": "(1) su gran fama — \"Soy reconocido por mis talentos artísticos por todo el mundo y por esto estoy más presionado\"."
  },
  // ---------- Part 3b: realia, Q21-25 ----------
  {
    ...STIMULI.r21, "type": "mc", "label": "Q21",
    "stem": "Q21. This advertisement would be most interesting to people who",
    "choices": ["need a job", "like to travel", "want to shop", "enjoy museums"],
    "answer": 1,
    "back": "(2) like to travel — a tourism ad: \"Vive unas vacaciones intensas\" across the Canary Islands' deserts, forests, and sea floors."
  },
  {
    ...STIMULI.r22, "type": "mc", "label": "Q22",
    "stem": "Q22. Why did María González write this letter?",
    "choices": ["to apply for a job", "to find a secretary", "to enroll in a language course", "to file a complaint"],
    "answer": 0,
    "back": "(1) to apply for a job — she asks to be considered for the bilingual secretary position MTL S.A. announced in \"La Opinión\"."
  },
  {
    ...STIMULI.r23, "type": "mc", "label": "Q23",
    "stem": "Q23. What problem is the city of Copenhagen trying to resolve?",
    "choices": ["a lack of public transportation", "an excess of old bicycles", "contamination of the air", "insufficient parking for cars"],
    "answer": 2,
    "back": "(3) contamination of the air — the free bicycles exist \"con el fin de combatir el ruido y la polución\"."
  },
  {
    ...STIMULI.r24, "type": "mc", "label": "Q24",
    "stem": "Q24. This advertisement offers readers the chance to",
    "choices": ["be interviewed by a reporter for a magazine", "take a photography course at no cost", "obtain information about well-known restaurants", "meet some people who are famous"],
    "answer": 3,
    "back": "(4) meet some people who are famous — ten winners get \"una cena en el restaurante TecamaCharlie's con la pareja joven de la película 'Cilantro y perejil'\"."
  },
  {
    ...STIMULI.r25, "type": "mc", "label": "Q25",
    "stem": "Q25. This information is intended to help people to",
    "choices": ["find employment", "heat their homes", "prevent fires", "save energy"],
    "answer": 3,
    "back": "(4) save energy — electricity rates went up (\"Actúe ahora para controlar su consumo\") and every tip reduces air-conditioning consumption."
  },
  // ---------- Part 3c: cloze, Q26-30 ----------
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q26",
    "stem": "Q26. Which choice best completes blank (26)?",
    "choices": ["satisfechas", "enojados", "aburridas", "casadas"],
    "answer": 0,
    "back": "(1) satisfechas — thousands of people are satisfied with the method (\"Tanta gente satisfecha no se puede equivocar\")."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q27",
    "stem": "Q27. Which choice best completes blank (27)?",
    "choices": ["abogados", "artistas", "aduaneros", "arquitectos"],
    "answer": 1,
    "back": "(2) artistas — you learn with songs by famous artists \"como Roberto Carlos, Juan Gabriel, Los Bukis\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q28",
    "stem": "Q28. Which choice best completes blank (28)?",
    "choices": ["reloj", "vuelo", "video", "recuerdo"],
    "answer": 2,
    "back": "(3) video — the $24.95 package includes an instruction book and a long-playing video (it is a video method)."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q29",
    "stem": "Q29. Which choice best completes blank (29)?",
    "choices": ["perfeccionar", "parar", "comprar", "cantar"],
    "answer": 0,
    "back": "(1) perfeccionar — years of study and research went into perfecting the method that makes guitar playing \"fácil... facilísimo\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "Q30",
    "stem": "Q30. Which choice best completes blank (30)?",
    "choices": ["tarjeta", "guitarra", "diccionario", "dinero"],
    "answer": 3,
    "back": "(4) dinero — the 60-day guarantee: return the method \"para una vuelta de su dinero\" (a refund) and keep the strings."
  },
  // ---------- Part 4: writing tasks ----------
  {
    "type": "self", "label": "W1",
    "front": "W1 (Part 4a, Question 31 — choose 31 OR 32 on the real exam). You stopped by to return something you found that belongs to your friend, but your friend was not at home. Write a note in Spanish to your friend to explain that you have found something that belongs to him or her. At least SIX clauses (you may say what you found, where and when you found it, and suggest how your friend can get it back). Salutation: Hola [your friend's first name]; Closing: Un abrazo, [your first name].",
    "back": "Model note (6+ clauses): \"Hola Carmen: Esta tarde encontré tu mochila azul en la cafetería. Adentro están tus libros y tu calculadora. Pasé por tu casa para devolvértela, pero no estabas. La tengo en mi casa ahora. Puedo llevártela mañana a la escuela, o puedes venir a buscarla esta noche. Llámame cuando llegues. Un abrazo, Pablo\" — Rubric: must tell the friend you found something of theirs; six clauses with verb + subject."
  },
  {
    "type": "self", "label": "W2",
    "front": "W2 (Part 4a, Question 32 — choose 31 OR 32 on the real exam). You and a friend had made plans to get together this weekend for outside activities. However, bad weather is expected. Write a note in Spanish to your friend suggesting other activities you could do. At least SIX clauses (you may explain that bad weather is expected and how you learned about it). Salutation: [your friend's first name]; Closing: [your first name].",
    "back": "Model note (6+ clauses): \"Miguel: Acabo de ver el pronóstico en la televisión. Va a llover todo el fin de semana. No podemos jugar al fútbol en el parque. ¿Por qué no vamos al cine el sábado? También podemos jugar videojuegos en mi casa el domingo. Mi mamá puede prepararnos una pizza. Dime qué prefieres. Ana\" — Rubric: must suggest alternative activities; the note accomplishes its purpose only if alternatives are proposed."
  },
  {
    ...STIMULI.w33pic, "type": "self", "label": "W3",
    "front": "W3 (Part 4b, Question 33 — choose 33 OR 34 on the real exam). In Spanish, write a STORY about the situation shown in the picture (two women and a man admiring a baby in a carriage outdoors). It must be a story relating to the picture, NOT a description of the picture. Do not write a dialogue. At least TEN clauses.",
    "back": "Model story (10+ clauses): \"El domingo pasado, la señora Ruiz salió a pasear con su bebé recién nacido. Era el primer paseo de la pequeña Lucía. En el parque se encontraron con los vecinos, don Felipe y doña Marta. Los vecinos se acercaron al cochecito con mucha curiosidad. Doña Marta dijo que la bebé tenía los ojos de su mamá. Don Felipe le regaló una sonrisa enorme. La bebé empezó a reír por primera vez. Su mamá se sintió muy orgullosa. Los vecinos invitaron a la familia a cenar el sábado siguiente. Todos volvieron a casa muy contentos con la nueva amistad.\" — Rubric: a narrative (not description, no dialogue) tied to the picture; 10 clauses."
  },
  {
    "type": "self", "label": "W4",
    "front": "W4 (Part 4b, Question 34 — choose 33 OR 34 on the real exam). You recently participated in a community service activity. In Spanish, write a LETTER to your pen pal telling him or her about this activity. At least TEN clauses (identify the activity — e.g. helping at a hospital, cleaning local parks, working with young children —, mention how often you participate, where you go and who is involved, why you like it; you may ask if your pen pal has done something similar). Use: Dateline: el 18 de junio de 1998; Salutation: Querido/Querida [your pen pal's first name]; Closing: [your first name].",
    "back": "Model letter (10+ clauses): \"el 18 de junio de 1998 — Querida Sofía: Quiero contarte sobre mi nueva actividad de servicio comunitario. Todos los sábados trabajo como voluntario en el hospital de mi ciudad. Voy con dos compañeros de mi clase de español. Ayudamos a llevar libros y revistas a los pacientes. También jugamos con los niños enfermos. Me gusta mucho porque los pacientes siempre sonríen cuando llegamos. Mi parte favorita es leerles cuentos a los niños. Aprendo mucho sobre la paciencia y la bondad. ¿Has hecho tú algún trabajo voluntario en tu ciudad? Escríbeme pronto. Marcos\" — Rubric: the letter must TELL the pen pal about the community service activity; dateline/salutation/closing don't count toward the 10 clauses."
  },
  // ---------- Supplemental coverage cards S1-S10 ----------
  {
    ...STIMULI.l1, "type": "mc", "label": "S1",
    "stem": "S1. (Supplemental — same announcement as Q1.) What is the grand prize of the baby-video contest?",
    "choices": ["a family trip to San Juan", "ten thousand dollars for the child's education", "a new video camera", "a year of free groceries"],
    "answer": 1,
    "back": "(2) ten thousand dollars for the child's education — \"Gane diez mil dólares para la educación de su hijo u otros premios fabulosos\"."
  },
  {
    ...STIMULI.l2, "type": "mc", "label": "S2",
    "stem": "S2. (Supplemental — same announcement as Q2.) Besides the 10% discount, what does the \"servicio pasaporte\" include?",
    "choices": ["two hours of free parking", "a free meal in the store restaurant", "a guided tour of Madrid", "double reward points"],
    "answer": 0,
    "back": "(1) two hours of free parking — the perks are the discount, shipping to your hotel or abroad, and \"dos horas de estacionamiento gratis\"."
  },
  {
    ...STIMULI.l6, "type": "mc", "label": "S3",
    "stem": "S3. (Supplemental — same advertisement as Q6.) How much of a normal phone bill can the NETTEL system save?",
    "choices": ["about 10 percent", "between 30 and 40 percent", "exactly half", "up to 90 percent"],
    "answer": 1,
    "back": "(2) between 30 and 40 percent — \"este sistema puede ahorrar entre el 30 y el 40 por ciento de la cuenta normal\"."
  },
  {
    ...STIMULI.l9, "type": "mc", "label": "S4",
    "stem": "S4. (Suplementaria — la misma noticia que Q9.) ¿Cuántas piezas contiene la exposición \"La América Antigua\"?",
    "choices": ["unas cien piezas", "unas trescientas piezas", "unas quinientas piezas", "unas mil piezas"],
    "answer": 1,
    "back": "(2) unas trescientas piezas — \"La exhibición contiene unas 300 piezas procedentes de diez y siete culturas diferentes\"."
  },
  {
    ...STIMULI.l13, "type": "mc", "label": "S5",
    "stem": "S5. (Suplementaria — la misma información que Q13.) Según la información, ¿qué beneficio ofrece la natación?",
    "choices": ["Mejora el tono muscular de todo el cuerpo.", "Aumenta el apetito.", "Cuesta muy poco dinero.", "Se aprende en un solo día."],
    "answer": 0,
    "back": "(1) Mejora el tono muscular de todo el cuerpo — además alivia dolores de espalda y cuello y tranquiliza los nervios."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "S6",
    "stem": "S6. (Suplementaria — el mismo artículo que Q16–20.) ¿Cómo grabó Enrique su primer disco?",
    "choices": ["con el dinero de su padre", "juntando sus propios ahorros", "con un contrato de una compañía", "vendiendo su guitarra"],
    "answer": 1,
    "back": "(2) juntando sus propios ahorros — \"juntando sus ahorros, grabó su primer disco\" hace poco menos de un año."
  },
  {
    ...STIMULI.enrique, "type": "mc", "label": "S7",
    "stem": "S7. (Suplementaria — el mismo artículo que Q16–20.) ¿En qué país ha vendido Enrique más de 400 mil discos?",
    "choices": ["en España", "en Portugal", "en México", "en Argentina"],
    "answer": 2,
    "back": "(3) en México — \"en México con más de 400 mil\"; en España casi 200 mil y en Portugal 50 mil."
  },
  {
    ...STIMULI.r23, "type": "mc", "label": "S8",
    "stem": "S8. (Supplemental — same news box as Q23.) At how many points around Copenhagen can the free bicycles be returned?",
    "choices": ["ten", "twenty-five", "fifty", "one thousand"],
    "answer": 2,
    "back": "(3) fifty — the thousand bicycles \"pueden ser usadas y devueltas después en cincuenta puntos repartidos por toda la ciudad\"."
  },
  {
    ...STIMULI.r24, "type": "mc", "label": "S9",
    "stem": "S9. (Supplemental — same contest as Q24.) What is the deadline to send in the questionnaires?",
    "choices": ["May 27, 1996", "June 16, 1996", "July 1, 1996", "August 18, 1996"],
    "answer": 1,
    "back": "(2) June 16, 1996 — \"La fecha límite para entregar tus cuestionarios es el 16 de junio de 1996\"."
  },
  {
    ...STIMULI.cloze, "type": "mc", "label": "S10",
    "stem": "S10. (Suplementaria — el mismo anuncio que Q26–30.) ¿Qué se regala completamente gratis con el método GUITARRA FACILISIMA?",
    "choices": ["una guitarra nueva", "un juego de cuerdas de nilón", "un diccionario musical", "dos meses de clases particulares"],
    "answer": 1,
    "back": "(2) un juego de cuerdas de nilón — \"se está regalando un juego de cuerdas de nilón para su guitarra con valor de $12.00, completamente gratis\"."
  }
];
