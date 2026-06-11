// Shared card deck for the January 2025 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-12025-sk.pdf).
const STIMULI = {
  fundamentalOrders: {
    passage: `. . . It is Ordered, sentenced, and decreed, that there shall be yearly two General Assemblies or Courts . . . the first shall be called the Court of Election, wherein shall be yearly chosen from time to time, so many Magistrates and other public Officers as shall be found requisite [needed]: Whereof one to be chosen Governor for the year ensuing . . . which choice shall be made by all that are admitted freemen and have taken the Oath of Fidelity . . .`,
    psource: "Fundamental Orders of Connecticut, Section 1, January 14, 1639"
  },
  neutralityProc: {
    passage: `Whereas it appears that a state of war exists between Austria, Prussia, Sardinia, Great Britain, and the United Netherlands, of the one part, and France on the other; and the duty and interest of the United States require, that they should with sincerity and good faith adopt and pursue a conduct friendly and impartial toward the belligerent Powers; . . .`,
    psource: "President George Washington, Proclamation of Neutrality, April 22, 1793"
  },
  mcculloch: {
    passage: `. . . The result is a conviction that the States have no power, by taxation or otherwise, to retard [slow down], impede, burden, or in any manner control, the operations of the constitutional laws enacted by Congress to carry into execution the powers vested in the general government. This is, we think, the unavoidable consequence of that supremacy which the constitution has declared. We are unanimously of opinion, that the law passed by the legislature of Maryland, imposing a tax on the Bank of the United States, is unconstitutional and void. . . .`,
    psource: "McCulloch v. Maryland, 1819"
  },
  jeffersonLetter: {
    passage: `. . . This treaty [Louisiana Purchase] must of course be laid before both houses, because both have important functions to exercise respecting it. . . . The constitution has made no provision for our holding foreign territory, still less for incorporating foreign nations into our union. . . .`,
    psource: "Thomas Jefferson, letter to John Breckinridge, August 12, 1803 (adapted)"
  },
  lincolnGreeley: {
    passage: `. . . I would save the Union. I would save it the shortest way under the Constitution. . . . My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that. What I do about slavery, and the colored [African American] race, I do because I believe it helps to save the Union . . .`,
    psource: "Letter from President Abraham Lincoln to Horace Greeley, August 22, 1862"
  },
  trustBusting: {
    imgs: [
      {
        src: "img/q11-trust-busting-cartoon.png",
        cap: "\"Hit Harder, Theodore!\" — the U.S. Attorney General urged to club the Coal, Sugar, Steel, Beef, Oil, and Iron Trusts. Source: Charles Green Bush, August 7, 1902, Library of Congress (adapted)",
        alt: "1902 cartoon urging Theodore Roosevelt and the Attorney General to strike harder at labeled trusts (coal, sugar, steel, beef, oil, iron)"
      }
    ]
  },
  immigration: {
    imgs: [
      {
        src: "img/q13-mulberry-street.jpg",
        cap: "Mulberry Street in New York City, c. 1900. Source: Library of Congress (adapted)",
        alt: "Photograph of a crowded immigrant neighborhood, Mulberry Street in New York City around 1900"
      },
      {
        src: "img/q13-foreign-born-map.png",
        cap: "Distribution of Foreign-Born Whites in the United States, 1910. Source: Edward Alsworth Ross, The Old World in the New, 1914 (adapted)",
        alt: "Map showing foreign-born population concentrated heavily in the industrial Northeast and Great Lakes states in 1910"
      }
    ]
  },
  trWorldPower: {
    passage: `. . . As a people we have played a large part in the world, and we are bent upon making our future even larger than the past. In particular, the events of the last four years have definitely decided that, for woe or weal [poverty or prosperity], our place must be great among the nations. We may either fall greatly or succeed greatly; but we can not avoid the endeavor from which either great failure or great success must come. Even if we would, we can not play a small part. . . .`,
    psource: "President Theodore Roosevelt, Second Annual Message to Congress, December 2, 1902"
  },
  socialSecurity: {
    passage: `. . . This social security measure gives at least some protection to thirty millions of our citizens who will reap direct benefits through unemployment compensation, through old-age pensions and through increased services for the protection of children and the prevention of ill health. . . . It will act as a protection to future Administrations against the necessity of going deeply into debt to furnish relief to the needy. . . . it is, in short, a law that will take care of human needs and at the same time provide the United States an economic structure of vastly greater soundness. . . .`,
    psource: "President Franklin D. Roosevelt, statement on signing the Social Security Act, August 14, 1935"
  },
  rationing: {
    imgs: [
      {
        src: "img/q19-war-ration-book.png",
        cap: "War Ration Book, Office of Price Administration. Source: Office of Price Administration",
        alt: "Cover of a World War II Office of Price Administration War Ration Book"
      },
      {
        src: "img/q19-ration-stamp-notice.png",
        cap: "Office of Price Administration notice on the use of ration stamps. Source: Office of Price Administration",
        alt: "World War II Office of Price Administration notice instructing citizens never to buy rationed goods without ration stamps"
      }
    ]
  },
  trumanKorea: {
    passage: `In [South] Korea the Government forces . . . were attacked by invading forces from North Korea. The Security Council of the United Nations called upon the invading troops to cease hostilities and to withdraw to the 38th parallel. This they have not done . . . In these circumstances I have ordered United States air and sea forces to give the Korean Government troops cover and support.

The attack upon Korea makes it plain beyond all doubt that Communism has passed beyond the use of subversion to conquer independent nations and will now use armed invasion and war. . . .`,
    psource: "President Harry Truman, statement on the situation in Korea, June 27, 1950"
  },
  mlkBallot: {
    passage: `Three years ago the Supreme Court of this nation rendered . . . a decision which . . . came as a great beacon light of hope to millions . . . It came as a legal and sociological deathblow to the old Plessy doctrine of "separate-but-equal." . . . But, even more, all types of conniving methods are still being used to prevent Negroes [African Americans] from becoming registered voters. The denial of this sacred right is a tragic betrayal of the highest mandates of our democratic traditions and it is democracy turned upside down. . . .`,
    psource: "Dr. Martin Luther King Jr., \"Give Us the Ballot,\" May 17, 1957"
  },
  sputnik: {
    imgs: [
      {
        src: "img/q24-sputnik-headline.png",
        cap: "Headline reporting the Soviet launch of the first artificial Earth satellite, Sputnik. Source: New York Times, October 5, 1957",
        alt: "1957 New York Times headline announcing that the Soviet Union had launched the first artificial Earth satellite into orbit"
      }
    ]
  },
  lbjPromise: {
    passage: `. . . Every device of which human ingenuity is capable has been used to deny this right. The Negro [African American] citizen may go to register only to be told that the day is wrong, or the hour is late, or the official in charge is absent. . . . And if he manages to fill out an application he is given a test. The registrar is the sole judge of whether he passes this test. He may be asked to recite the entire Constitution, or explain the most complex provisions of State law. And even a college degree cannot be used to prove that he can read and write. . . .`,
    psource: "President Lyndon B. Johnson, Special Message to Congress, \"The American Promise,\" 1965"
  },
  clintonImpeach: {
    imgs: [
      {
        src: "img/q27-clinton-impeached.png",
        cap: "Headlines reporting the impeachment of President Bill Clinton by the House of Representatives. Source: New York Times, December 20, 1998",
        alt: "1998 New York Times front-page headlines announcing that the House of Representatives had impeached President Clinton"
      }
    ]
  },
  seqCitizenship: {
    passage: `Document 1

AMENDMENT XIV (1868), Section 1. All persons born or naturalized in the United States . . . are citizens of the United States and of the State wherein they reside. No State shall . . . deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.
AMENDMENT XV (1870), Section 1. The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.
Source: 14th and 15th amendments, United States Constitution

Document 2

. . . Miss Anthony—When I was brought before your honor for trial, I hoped for a broad and liberal interpretation of the Constitution and its recent amendments, that should declare all United States citizens under its protecting aegis [shield] . . . But failing to get this justice . . . I shall earnestly and persistently continue to urge all women to the practical recognition of the old revolutionary maxim, that "Resistance to tyranny is obedience to God."
Source: An Account of the Proceedings on the Trial of Susan B. Anthony on the Charge of Illegal Voting, Rochester, New York, 1874`
  },
  seqStampAct: {
    passage: `Document 1

Thomas Whately . . . was the primary author of the Stamp Act.
. . . The Revenue that may be raised by the Duties . . . are all equally applied by Parliament, towards defraying [paying] the necessary Expenses of defending, protecting, and securing, the British Colonies and Plantations in America. . . . the national Debt . . . the heaviest Part of it has been incurred [assumed] by a War undertaken for the Protection of the Colonies, lies solely still upon her. . . .
Source: Thomas Whately, The Regulations Lately Made Concerning the Colonies, January 1765 (adapted)

Document 2

. . . III. That it is inseparably essential to the Freedom of a People . . . that no Taxes be imposed on them, but with their own Consent, given personally, or by their Representatives.
IV. That the People of these Colonies are not, and from their local Circumstances cannot be, Represented in the House of Commons in Great-Britain.
V. That the only Representatives of the People of these Colonies, are Persons chosen therein by themselves . . .
Source: Declaration of Rights and Grievances, Stamp Act Congress, October 19, 1765 (adapted)`
  },
  clWilsonHouse: {
    passage: `During World War I, President Woodrow Wilson announced his 14 Points, which he hoped would be included in the Treaty of Versailles. . . . In January 1918 he announced the 14 Points . . . [which] included an international organization to keep the peace . . . When Wilson traveled to Europe in late 1918 to attend the Paris Peace Conference, he was met by crowds numbering in the millions. . . . Wilson drew up terms of peace including his design for a League of Nations, a world body to settle future conflicts among nations. . . .`,
    psource: "\"League of Nations,\" The President Woodrow Wilson House (adapted)"
  },
  clLodge: {
    passage: `After discussing the proposed treaty with President Wilson, Senator Henry Cabot Lodge gave an address to the Senate on February 28, 1919.
. . . Lodge's address was a painstaking critique of the League's constitution. He began with the impassioned argument that the document repudiated [contradicted] George Washington's . . . Farewell Address and the Monroe Doctrine, two sacred canons [principles] of American foreign policy. . . . Lodge argued that the provision guaranteeing the independence and territorial integrity of all members was particularly troubling. He warned that, to insure that guarantee, the United States "must be in possession of fleets and armies capable of enforcing them at a moment's notice." . . .`,
    psource: "\"Henry Cabot Lodge: Constitution of the League of Nations,\" Classic Senate Speeches, U.S. Senate"
  },
  clPueblo: {
    passage: `. . . mothers who lost their sons in France . . . believe, and they rightly believe, that their sons saved the liberty of the world. They believe that wrapped up with the liberty of the world is the continuous protection of that liberty by the concerted [united] powers of all civilized people. . . . You will say, "Is the League an absolute guaranty against war?" No . . . but . . . If it is not an absolute insurance against war, do you want no insurance at all? . . . The arrangements of this treaty are just, but they need the support of the combined power of the great nations of the world. . . .`,
    psource: "President Woodrow Wilson, The Pueblo Speech, September 25, 1919"
  },
  clJames: {
    passage: `. . . Opposition in the Senate to the Covenant of the League of Nations, led by Republican Henry Cabot Lodge . . . was directed in particular at Article X, which stated that members would "undertake to respect and preserve as against external aggression the territorial integrity and existing political independence of all Members of the League." . . . Many Americans believed with Lodge that through the treaty the United States would be committed to an "entangling alliance" and that other nations could determine its foreign policy by obliging it to participate in action against aggressors.
Deciding that an appeal to the country would force the Senate into line . . . President Wilson traveled over 8,000 miles by train and spoke forty times in twenty-two days. He became ill, and was forced to abandon his appeal. Wilson never succeeded in mustering enough votes . . .`,
    psource: "Leonard F. James, American Foreign Policy, Scott, Foresman and Company, 1967"
  },
  clTreatyFails: {
    imgs: [
      {
        src: "img/q35-senate-kills-treaty.png",
        cap: "Document 5a: headline reporting the Senate's rejection of the Treaty of Versailles. Source: New York Tribune, March 20, 1920",
        alt: "1920 newspaper headline announcing that the U.S. Senate killed the Treaty of Versailles"
      },
      {
        src: "img/q35-gap-in-the-bridge.png",
        cap: "Document 5b: \"The Gap in the Bridge\" — the missing keystone of the League of Nations bridge labeled U.S.A. Source: Leonard Raven-Hill, Punch (adapted)",
        alt: "Cartoon of a stone bridge of the League of Nations with the keystone missing, labeled 'U.S.A.,' showing the absent United States weakening the League"
      }
    ]
  },
  clLeuchtenburg: {
    passage: `. . . In the end Wilson failed largely because the country had never really abandoned its isolationist predilections [preferences], particularly the assumption that the United States unaided could maintain its national security. . . . even if the country had entered the League, it is doubtful that Americans would have been willing to assume their full obligations. . . . It would take the chastening experience of World War II, Hiroshima, and the Cold War to provide that incentive. . . .`,
    psource: "William E. Leuchtenburg, The Perils of Prosperity: 1914-1932, University of Chicago Press, 1993"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.fundamentalOrders,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. The Fundamental Orders of Connecticut represent an early step in the colonial advance toward",
  "choices": [
    "representative government",
    "an American monarchy",
    "freedom of speech and of the press",
    "abolition of slavery"
  ],
  "answer": 0,
  "back": "(1) representative government — often called the first written constitution in the colonies, it provided for elected magistrates and a governor chosen by the freemen."
},
{
  ...STIMULI.fundamentalOrders,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. Which colonial development was most similar to the Fundamental Orders of Connecticut?",
  "choices": [
    "Maryland Toleration Act",
    "Virginia House of Burgesses",
    "Proclamation of 1763",
    "Stamp Act"
  ],
  "answer": 1,
  "back": "(2) Virginia House of Burgesses — like the Fundamental Orders, it was an early example of colonial self-government through an elected assembly."
},
{
  ...STIMULI.neutralityProc,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. What is the primary purpose of this proclamation?",
  "choices": [
    "to align the United States with Great Britain",
    "to negotiate a peace treaty between the warring states of Europe",
    "to avoid being drawn into the war between Great Britain and France",
    "to stay out of the affairs of the French colonies in Latin America"
  ],
  "answer": 2,
  "back": "(3) to avoid being drawn into the war between Great Britain and France — Washington declared the U.S. would stay \"friendly and impartial toward the belligerent Powers.\""
},
{
  ...STIMULI.neutralityProc,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Which later United States foreign policy action is most consistent with the ideas expressed in this proclamation?",
  "choices": [
    "announcing the Monroe Doctrine",
    "ratifying the Treaty of Guadalupe Hidalgo",
    "annexing the Philippines",
    "negotiating the Camp David Accords"
  ],
  "answer": 0,
  "back": "(1) announcing the Monroe Doctrine — like the neutrality proclamation, it sought to keep the U.S. out of Europe's wars and conflicts."
},
{
  ...STIMULI.mcculloch,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. What was an important impact of the McCulloch v. Maryland (1819) decision?",
  "choices": [
    "It established the idea that states should have the power to overturn federal laws.",
    "It determined that the creation of the National Bank was constitutional.",
    "It stated that the bicameral legislature established by the Constitution was illegal.",
    "It limited the power of Congress to add new states to the Union."
  ],
  "answer": 1,
  "back": "(2) It determined that the creation of the National Bank was constitutional — and that Maryland could not tax it, affirming federal authority."
},
{
  ...STIMULI.mcculloch,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. The Supreme Court decision described in this excerpt is an example of which principle?",
  "choices": [
    "republican government",
    "popular sovereignty",
    "sectionalism",
    "federal supremacy"
  ],
  "answer": 3,
  "back": "(4) federal supremacy — the Court ruled states have no power to \"impede\" the federal government, since the Constitution and federal laws are supreme."
},
{
  ...STIMULI.jeffersonLetter,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. Which claim about the Constitution is best supported by this letter?",
  "choices": [
    "It does not specifically state how to incorporate foreign territory.",
    "The Senate must provide the money for this purchase.",
    "Adding articles to the Constitution requires presidential approval.",
    "The Supreme Court must review treaties."
  ],
  "answer": 0,
  "back": "(1) It does not specifically state how to incorporate foreign territory — Jefferson worried the Constitution \"made no provision for our holding foreign territory.\""
},
{
  ...STIMULI.jeffersonLetter,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. One major goal for President Thomas Jefferson in purchasing the Louisiana Territory was that it would",
  "choices": [
    "promote the growth of manufacturing in the South",
    "establish a base to exert control over Caribbean trade",
    "help the United States expand the slave trade",
    "give the United States full control of the Mississippi River"
  ],
  "answer": 3,
  "back": "(4) give the United States full control of the Mississippi River — securing New Orleans and the river was vital for Western farmers to ship their goods."
},
{
  ...STIMULI.lincolnGreeley,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. According to this letter, President Abraham Lincoln's primary goal in fighting the Civil War was to",
  "choices": [
    "advance the cause of Northern abolitionists",
    "save the Union",
    "extend the vote to African Americans",
    "free African Americans enslaved in Confederate territory"
  ],
  "answer": 1,
  "back": "(2) save the Union — Lincoln states \"My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.\""
},
{
  ...STIMULI.lincolnGreeley,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. What was one action President Lincoln took to achieve his primary goal?",
  "choices": [
    "He signed the Homestead Act.",
    "He vetoed a federal draft law.",
    "He issued the Emancipation Proclamation.",
    "He supported passage of the Pacific Railway Act."
  ],
  "answer": 2,
  "back": "(3) He issued the Emancipation Proclamation — freeing slaves in rebelling states was a war measure to help save the Union by weakening the Confederacy."
},
{
  ...STIMULI.trustBusting,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. Which statement most accurately represents the point of view of this cartoonist?",
  "choices": [
    "President Roosevelt supported logging in national parks.",
    "President Roosevelt opposed regulation of big business.",
    "President Roosevelt refused to involve the attorney general in regulating monopolies.",
    "President Roosevelt must use the full force of the law to end the power of trusts."
  ],
  "answer": 3,
  "back": "(4) President Roosevelt must use the full force of the law to end the power of trusts — \"Hit Harder, Theodore!\" urges TR to club the trusts using the Attorney General."
},
{
  ...STIMULI.trustBusting,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. What law is this cartoonist referring to?",
  "choices": [
    "Pacific Railway Act",
    "Chinese Exclusion Act",
    "Sherman Antitrust Act",
    "Dawes Act"
  ],
  "answer": 2,
  "back": "(3) Sherman Antitrust Act — the law Roosevelt's \"trust-busting\" used to break up monopolies like the Northern Securities railroad combination."
},
{
  ...STIMULI.immigration,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Which conclusion is best supported by these documents?",
  "choices": [
    "Immigration to Texas and the Southwest outpaced other regions.",
    "Northeastern cities became a refuge for immigrant families in the early 20th century.",
    "Agriculture was the dominant occupation for most immigrants in the Midwest.",
    "The steel and petroleum industries grew near the Great Lakes because of rail transportation."
  ],
  "answer": 1,
  "back": "(2) Northeastern cities became a refuge for immigrant families in the early 20th century — the crowded Mulberry Street photo and the map both show immigrants concentrated in the industrial Northeast."
},
{
  ...STIMULI.immigration,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. The situation presented in these documents was addressed in the 1920s when",
  "choices": [
    "legislation was passed limiting the number of immigrants",
    "overcrowded cities received federal housing assistance",
    "immigrants were relocated to less populated areas",
    "deportation programs were eliminated"
  ],
  "answer": 0,
  "back": "(1) legislation was passed limiting the number of immigrants — the 1920s quota laws sharply restricted immigration, especially from Southern and Eastern Europe."
},
{
  ...STIMULI.trWorldPower,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. In his 1902 message to Congress, President Theodore Roosevelt expressed support for the",
  "choices": [
    "creation of a permanent United States military",
    "European colonization of Latin America",
    "traditional United States foreign policy of isolationism",
    "expansion of the United States as a world power"
  ],
  "answer": 3,
  "back": "(4) expansion of the United States as a world power — TR insists \"our place must be great among the nations\" and that the U.S. \"can not play a small part.\""
},
{
  ...STIMULI.trWorldPower,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. Which action was most consistent with the ideas expressed in this message?",
  "choices": [
    "United States construction of the Panama Canal",
    "opposition to the Open Door policy",
    "signing consumer protection legislation",
    "creation of the National Park Service"
  ],
  "answer": 0,
  "back": "(1) United States construction of the Panama Canal — building the canal projected U.S. power across the hemisphere, matching TR's world-power vision."
},
{
  ...STIMULI.socialSecurity,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. According to President Franklin D. Roosevelt, a major purpose of the Social Security system was to",
  "choices": [
    "end years of industrial practices that had hurt workers",
    "eliminate deficits and balance the federal budget",
    "improve medical care through grants to hospitals",
    "provide benefits to jobless and aged citizens"
  ],
  "answer": 3,
  "back": "(4) provide benefits to jobless and aged citizens — FDR describes unemployment compensation and old-age pensions for thirty million citizens."
},
{
  ...STIMULI.socialSecurity,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. By signing the Social Security Act into law, President Roosevelt was keeping his promise that the federal government would",
  "choices": [
    "take a more active role in the economy to improve the well-being of citizens",
    "give tax breaks to corporations to expand production and increase employment",
    "protect the life savings of people who had trusted their banks",
    "regulate the activities of the stock market in the future"
  ],
  "answer": 0,
  "back": "(1) take a more active role in the economy to improve the well-being of citizens — Social Security expanded the federal government's responsibility for citizens' welfare."
},
{
  ...STIMULI.rationing,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. Why did the government establish a wartime rationing system?",
  "choices": [
    "to limit consumption of critical, scarce resources",
    "to avoid price controls on goods and services",
    "to protect the property of the United States",
    "to help law enforcement prosecute criminal offenses"
  ],
  "answer": 0,
  "back": "(1) to limit consumption of critical, scarce resources — rationing books and stamps conserved goods like sugar, gasoline, and rubber for the World War II war effort."
},
{
  ...STIMULI.rationing,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. Public acceptance of government rationing was based on the belief that it",
  "choices": [
    "would increase profits for small farmers",
    "would eliminate the influence of big businesses on political candidates",
    "was basically a fair and equitable system",
    "guaranteed women equal pay for equal work"
  ],
  "answer": 2,
  "back": "(3) was basically a fair and equitable system — sharing scarce goods equally through ration stamps was seen as a fair way for everyone to sacrifice for the war."
},
{
  ...STIMULI.trumanKorea,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. What was a major reason for President Harry Truman's June 27, 1950, statement?",
  "choices": [
    "the United States commitment to the Cold War policy of containment",
    "an attempt to gain the support of China to halt aggression against South Korea",
    "the continuing presence of Japanese forces in Korea after World War II",
    "the announcement of a plan to reunite North and South Korea"
  ],
  "answer": 0,
  "back": "(1) the United States commitment to the Cold War policy of containment — Truman sent forces to stop communist North Korea from conquering the South."
},
{
  ...STIMULI.trumanKorea,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. What made the response to North Korea's invasion of South Korea different from past conflicts?",
  "choices": [
    "The Soviet Union and the United States became allies.",
    "The aggression of North Korea ended when the Soviet Union intervened.",
    "Members of the United Nations supplied troops to defend South Korea.",
    "Neighboring Southeast Asian nations were divided over which side to support."
  ],
  "answer": 2,
  "back": "(3) Members of the United Nations supplied troops to defend South Korea — Korea was the first major United Nations collective military action against aggression."
},
{
  ...STIMULI.mlkBallot,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. What was one method that was used to deny African Americans the voting rights mentioned in this speech?",
  "choices": [
    "literacy tests and poll taxes",
    "deployment of federal troops",
    "bus boycotts and sit-ins",
    "student protests"
  ],
  "answer": 0,
  "back": "(1) literacy tests and poll taxes — Southern states used these (with \"conniving methods\") to keep African Americans from registering to vote."
},
{
  ...STIMULI.sputnik,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. Why were Americans worried by the event described in this headline?",
  "choices": [
    "They feared the United States was being overtaken in the Cold War arms race.",
    "They believed the satellite might have a negative effect on weather patterns.",
    "They thought launching the satellite violated international law.",
    "They were concerned about the effects of satellite technology on future prosperity."
  ],
  "answer": 0,
  "back": "(1) They feared the United States was being overtaken in the Cold War arms race — the Soviet launch of Sputnik suggested the USSR was ahead in rocketry and missiles."
},
{
  ...STIMULI.sputnik,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. What was one direct result of the event described in this headline?",
  "choices": [
    "President Eisenhower mobilized the military for an attack.",
    "The United Nations condemned the Soviet Union's actions.",
    "Congress mandated that families build fallout shelters.",
    "Congress passed legislation to promote science education in schools."
  ],
  "answer": 3,
  "back": "(4) Congress passed legislation to promote science education in schools — the National Defense Education Act (1958) funded science, math, and foreign-language education after Sputnik."
},
{
  ...STIMULI.lbjPromise,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. Congress responded to President Lyndon B. Johnson's message by passing the",
  "choices": [
    "Equal Pay Act of 1963",
    "Voting Rights Act of 1965",
    "Immigration Act of 1965",
    "Americans with Disabilities Act of 1990"
  ],
  "answer": 1,
  "back": "(2) Voting Rights Act of 1965 — it banned the literacy tests and other devices LBJ describes and provided federal oversight of voter registration."
},
{
  ...STIMULI.clintonImpeach,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. Which constitutional principle is illustrated by these headlines?",
  "choices": [
    "federalism",
    "checks and balances",
    "judicial review",
    "reserved powers"
  ],
  "answer": 1,
  "back": "(2) checks and balances — the House's power to impeach the president is a legislative check on the executive branch."
},
{
  ...STIMULI.clintonImpeach,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. Which president faced the same constitutional challenge as President Bill Clinton?",
  "choices": [
    "Jimmy Carter",
    "William McKinley",
    "Andrew Johnson",
    "George W. Bush"
  ],
  "answer": 2,
  "back": "(3) Andrew Johnson — like Clinton, Andrew Johnson was impeached by the House of Representatives (1868) but acquitted by the Senate."
},
{
  ...STIMULI.seqCitizenship,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: the 14th and 15th Amendments and the 1874 trial of Susan B. Anthony for illegal voting. Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: during Reconstruction, the 14th (1868) and 15th (1870) Amendments expanded citizenship and barred denying the vote on account of race, but said nothing about sex; in 1872 Susan B. Anthony was arrested and tried for voting. Relationship: Cause and Effect (and Difference). The amendments (Doc 1) guaranteed citizenship and voting rights but excluded women, and that gap caused women like Anthony (Doc 2) to argue that all citizens, including women, deserved equal rights, and to practice civil disobedience. Anthony's protest helped fuel the woman suffrage movement, which finally won the vote with the 19th Amendment (1920)."
},
{
  ...STIMULI.seqStampAct,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: Thomas Whately's defense of the Stamp Act (Doc 1) and the Stamp Act Congress's Declaration of Rights and Grievances (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 2's reliability as evidence.",
  "back": "Model answer — Context: after the costly French and Indian War, Britain taxed the colonies directly through the Stamp Act (1765), which sparked colonial protest and the Stamp Act Congress. Reliability of Doc 2: the Declaration of Rights and Grievances was written by the colonists' Stamp Act Congress for an audience of the King and Parliament, and its purpose was to protest the tax and assert colonial rights. Its point of view is entirely the colonists' — \"no taxation without representation\" — so it is a persuasive, one-sided statement of grievances rather than a neutral account. It is very useful for understanding the colonial argument, but should be balanced against Doc 1, in which Whately defends the tax as paying for the colonies' own defense."
},
{
  ...STIMULI.clWilsonHouse,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — Woodrow Wilson House). Based on this document, what is ONE historical circumstance surrounding the ratification of the Treaty of Versailles?",
  "back": "During World War I, President Wilson announced his Fourteen Points (January 1918), including a plan for an international organization (a League of Nations) to prevent future wars. He traveled to the Paris Peace Conference in 1919 and fought to include his League in the Treaty of Versailles — the treaty that then had to be ratified by the U.S. Senate."
},
{
  ...STIMULI.clLodge,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — Senator Henry Cabot Lodge, 1919). Based on this document, what is ONE historical circumstance surrounding the debate over ratification of the Treaty of Versailles?",
  "back": "Senator Henry Cabot Lodge delivered a detailed critique of the League's constitution, arguing it contradicted Washington's Farewell Address and the Monroe Doctrine — long-standing principles of avoiding entangling alliances — and warning that the pledge to defend every member's territorial integrity would require the U.S. to keep \"fleets and armies\" ready to enforce it."
},
{
  ...STIMULI.clPueblo,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Wilson's Pueblo Speech, 1919). According to President Woodrow Wilson, why should the Senate approve the Treaty of Versailles?",
  "back": "Wilson argued the League was needed to honor the soldiers who died to \"save the liberty of the world\" and to protect that liberty going forward. Even if the League was not an absolute guarantee against war, he asked whether Americans really wanted \"no insurance at all\" — the just terms of the treaty needed the combined power of the great nations to uphold them."
},
{
  ...STIMULI.clJames,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Leonard F. James). According to Leonard F. James, what is ONE reason Senator Henry Cabot Lodge opposed the League of Nations?",
  "back": "Lodge especially objected to Article X, which obligated members to defend one another's territorial integrity against external aggression. He and many Americans feared this committed the United States to an \"entangling alliance\" in which other nations could determine American foreign policy by forcing it to take action against aggressors."
},
{
  ...STIMULI.clTreatyFails,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5a/5b — \"Senate Kills Treaty\" headline + \"The Gap in the Bridge\" cartoon). Based on these documents, what is ONE impact of the efforts to ratify the Treaty of Versailles?",
  "back": "The Senate rejected the Treaty of Versailles, so the United States never joined the League of Nations. The \"Gap in the Bridge\" cartoon shows the U.S. as the missing keystone of the League bridge — its absence weakened the new world organization that the American president had designed, undermining the League's ability to keep the peace."
},
{
  ...STIMULI.clLeuchtenburg,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — William E. Leuchtenburg). According to William E. Leuchtenburg, what is ONE reason President Woodrow Wilson was not successful in gaining support for the Treaty of Versailles?",
  "back": "Wilson failed largely because the country had never abandoned its isolationist traditions — especially the belief that the United States could maintain its own security unaided. Americans lacked sufficient incentive to give up isolation or full national sovereignty; that incentive would come only later, with World War II, Hiroshima, and the Cold War."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Debate Over Ratification of the Treaty of Versailles). Write an essay that describes the historical circumstances, explains at least TWO efforts to address the issue, and discusses the impact of those efforts (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 3): after World War I, President Wilson sought to end future wars through his Fourteen Points and a League of Nations, which he fought to include in the Treaty of Versailles and then submitted to the Senate for the required two-thirds approval. Efforts (explain 2+): Wilson campaigned — traveling 8,000 miles and speaking dozens of times to rally public support (Docs 3, 4) until he collapsed from illness; opponents led by Senator Lodge fought ratification, objecting that Article X created an \"entangling alliance\" contrary to Washington's Farewell Address and the Monroe Doctrine (Docs 2, 4). Impact (Docs 5, 6): the Senate rejected the treaty, so the U.S. never joined the League — leaving the new organization weakened (the \"gap in the bridge\") and the United States on an isolationist course until World War II forced a change."
}
];
