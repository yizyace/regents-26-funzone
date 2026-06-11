// Shared card deck for the June 2025 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-62025-sk.pdf).
const STIMULI = {
  secota: {
    imgs: [
      {
        src: "img/q01-secota-engraving.jpg",
        cap: "\"The Town of Secota, 1590\" — a planned Algonquian village with cultivated fields, dwellings, and ceremonies. Source: Theodor de Bry, engraver, 1590 (adapted)",
        alt: "1590 engraving of the organized Native American town of Secota, showing rows of houses, planted cornfields at different stages, and a community gathering"
      }
    ]
  },
  proclamationMap: {
    imgs: [
      {
        src: "img/q03-north-america-1775.png",
        cap: "North America, 1775 — colonial borders and the Proclamation Line of 1763. Source: Schwartz and O'Connor, Exploring American History, Globe Book Company (adapted)",
        alt: "Map of North America in 1775 showing the thirteen colonies and the Proclamation Line of 1763 running along the Appalachian Mountains"
      }
    ]
  },
  federalist15: {
    passage: `. . . the point next in order to be examined is the "insufficiency of the present Confederation to the preservation of the Union." . . . In our case, the concurrence [agreement] of thirteen distinct sovereign wills is requisite [required], under the Confederation, to the complete execution of every important measure that proceeds from the Union. . . . the delinquencies of the States have, step by step, matured themselves to an extreme, which has, at length, arrested all the wheels of the national government . . . the frail and tottering edifice seems ready to fall upon our heads, and to crush us beneath its ruins.`,
    psource: "Alexander Hamilton, The Federalist Papers: No. 15, December 1, 1787 (adapted)"
  },
  marbury: {
    passage: `. . . The authority, therefore, given to the supreme court . . . to issue writs of mandamus to public officers, appears not to be warranted by the constitution . . . Certainly all those who have framed written constitutions contemplate them as forming the fundamental and paramount law of the nation, and consequently the theory of every such government must be, that an act of the legislature repugnant [disagreeable] to the constitution is void. . . . It is emphatically the province and duty of the judicial department to say what the law is. . . .`,
    psource: "Chief Justice John Marshall, Majority Opinion, Marbury v. Madison, February 24, 1803 (adapted)"
  },
  jacksonRemoval: {
    passage: `. . . The consequences of a speedy removal will be important to the United States, to individual States, and to the Indians [Native Americans] themselves. . . . It will place a dense and civilized population in large tracts of country now occupied by a few savage hunters. By opening the whole territory between Tennessee on the north and Louisiana on the south to the settlement of the whites it will incalculably [greatly] strengthen the SW [southwestern] frontier . . . It will relieve the whole State of Mississippi and the western part of Alabama of Indian occupancy . . .`,
    psource: "President Andrew Jackson, Second Annual Message to Congress, December 6, 1830"
  },
  election1876: {
    imgs: [
      {
        src: "img/q11-electoral-1876.png",
        cap: "Electoral Votes in the Election of 1876 — Hayes (Rep.) 185 / 4,037,000 popular; Tilden (Dem.) 184 / 4,284,000 popular; with disputed votes assigned to Hayes by a congressional commission. Source: Blum et al., The National Experience, Harcourt Brace Jovanovich, 1985 (adapted)",
        alt: "Electoral map of the 1876 presidential election showing Hayes winning 185 electoral votes to Tilden's 184, with several Southern states' votes disputed"
      }
    ]
  },
  newColossus: {
    passage: `. . . Here at our sea-washed, sunset gates shall stand
A mighty woman with a torch, whose flame
Is the imprisoned lightning, and her name
Mother of Exiles. From her beacon-hand
Glows world-wide welcome; . . .
"Keep ancient lands, your storied pomp!" cries she
With silent lips. "Give me your tired, your poor,
Your huddled masses yearning to breathe free,
The wretched refuse of your teeming shore.
Send these, the homeless, tempest-tost to me,
I lift my lamp beside the golden door!"`,
    psource: "Emma Lazarus, \"The New Colossus,\" 1883 (adapted)"
  },
  standardOil: {
    passage: `. . . Even as it was menaced by new competitors abroad, Standard Oil seemed omnipotent [all-powerful] in American oil. Everything about its operation was colossal: Twenty thousand wells poured their output into 4,000 miles of Standard Oil pipelines . . . The combine now employed 100,000 people and superintended the export of 50,000 barrels of oil to Europe daily. . . . It was the biggest and richest, the most feared and admired business organization in the world. . . .`,
    psource: "Ron Chernow, Titan: The Life of John D. Rockefeller, Sr., Vintage Books, 1998"
  },
  antiImperialist: {
    passage: `We hold that the policy known as imperialism is hostile to liberty and tends toward militarism, an evil from which it has been our glory to be free. . . . We maintain that governments derive their just powers from the consent of the governed. We insist that the subjugation of any people is "criminal aggression" . . .

We earnestly condemn the policy of the present National Administration in the Philippines. It seeks to extinguish the spirit of 1776 in those islands. . . . We denounce the slaughter of the Filipinos as a needless horror. . . .`,
    psource: "Platform of the American Anti-Imperialist League, 1899"
  },
  schenck: {
    passage: `. . . The most stringent protection of free speech would not protect a man in falsely shouting fire in a theatre and causing a panic. . . . The question in every case is whether the words used are used in such circumstances and are of such a nature as to create a clear and present danger that they will bring about the substantive evils that Congress has a right to prevent. . . .`,
    psource: "Supreme Court Justice Oliver Wendell Holmes, Majority Opinion, Schenck v. United States, 1919 (adapted)"
  },
  fdrFirst: {
    passage: `. . . So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance. In every dark hour of our national life a leadership of frankness and vigor has met with that understanding and support of the people themselves which is essential to victory. . . .`,
    psource: "President Franklin D. Roosevelt, First Inaugural Address, March 4, 1933 (adapted)"
  },
  korematsuDissent: {
    passage: `. . . The military necessity which is essential to the validity of the evacuation order thus resolves itself into a few intimations that certain individuals actively aided the enemy, from which it is inferred that the entire group of Japanese Americans could not be trusted . . . But to infer that examples of individual disloyalty prove group disloyalty and justify discriminatory action against the entire group is to deny that, under our system of law, individual guilt is the sole basis for deprivation of rights. . . .`,
    psource: "Supreme Court Justice Frank Murphy, Dissenting Opinion, Korematsu v. United States, 1944 (adapted)"
  },
  herblock1951: {
    imgs: [
      {
        src: "img/q24-herblock-1951.jpg",
        cap: "\"The Tumult and the Shouting Dies; the Captains and the Kings Depart.\" Source: Herblock, Washington Post, 1951",
        alt: "1951 Herblock cartoon depicting the heavy burdens of the presidency during the early Cold War"
      }
    ]
  },
  reaganBerlin: {
    passage: `. . . Behind me stands a wall that encircles the free sectors of this city, part of a vast system of barriers that divides the entire continent of Europe. . . . But in the West today, we see a free world that has achieved a level of prosperity and well-being unprecedented in all human history. In the Communist world, we see failure, technological backwardness, declining standards of health, even want of the most basic kind—too little food. . . . Freedom leads to prosperity. . . .`,
    psource: "President Ronald Reagan, Speech at the Berlin Wall, June 12, 1987"
  },
  authEquality: {
    imgs: [
      {
        src: "img/q27-auth-equality-stairs.png",
        cap: "Cartoon on the path to legal equality for successive groups. Source: Tony Auth, Philadelphia Inquirer, May 9, 2004",
        alt: "2004 cartoon showing a difficult staircase to equality, where the climb made by one group opens the way for other groups to follow"
      }
    ]
  },
  seqWatergate: {
    passage: `Document 2

The Supreme Court ruled yesterday unanimously, and definitively, that President [Richard] Nixon must turn over tape recordings of White House conversations needed by the Watergate special prosecutor . . . the court rejected Mr. Nixon's broad claims of unreviewable executive privilege and said they "must yield to the demonstrated, specific need for evidence in a pending criminal trial." . . . Burger . . . found that President Nixon was wrong in arguing that courts must honor without question any presidential claim of executive privilege. . . .
Source: John P. MacKenzie, Washington Post, July 25, 1974 (adapted)`,
    imgs: [
      {
        src: "img/q29-herblock-nixon-tapes.jpg",
        cap: "Document 1: \"Nixon Hanging Between the Tapes\" — Congress subpoenaed the White House tapes of President Nixon's conversations. Source: Herblock, Washington Post, May 24, 1974",
        alt: "1974 Herblock cartoon depicting President Nixon entangled by the subpoenaed Watergate White House tape recordings"
      }
    ]
  },
  seqAtomicBomb: {
    passage: `Document 1

. . . We, the undersigned scientists, have been working in the field of atomic power. . . . The war has to be brought speedily to a successful conclusion and attacks by atomic bombs may very well be an effective method of warfare. We feel, however, that such attacks on Japan could not be justified, at least not unless the terms which will be imposed after the war on Japan were made public in detail and Japan were given an opportunity to surrender. . . . a nation which sets the precedent of using these newly liberated forces of nature for purposes of destruction may have to bear the responsibility of opening the door to an era of devastation on an unimaginable scale. . . .
Source: E. Lapp et al., Petition to the President from the Manhattan Project Scientists at Los Alamos, July 17, 1945

Document 2

. . . The Japanese began the war from the air at Pearl Harbor. They have been repaid many fold. . . . It is an atomic bomb. It is a harnessing of the basic power of the universe. . . . We shall completely destroy Japan's power to make war. It was to spare the Japanese people from utter destruction that the ultimatum of July 26 was issued at Potsdam. Their leaders promptly rejected that ultimatum. If they do not now accept our terms they may expect a rain of ruin from the air, the like of which has never been seen on this earth. . . .
Source: President Harry S. Truman, Statement Announcing the Use of the A-Bomb at Hiroshima, August 6, 1945`
  },
  clNps: {
    passage: `. . . When the United States won its independence from Great Britain in 1783, one of its major concerns was having a European power on its western boundary, and the need for unrestricted access to the Mississippi River. . . . The problem with this route was that the Spanish owned both sides of the Mississippi below Natchez. . . . On October 1, 1800, Napoleon Bonaparte . . . concluded the Treaty of San Ildefonso with Spain, which returned Louisiana to French ownership . . .`,
    psource: "\"The Louisiana Purchase,\" Museum Gazette, National Park Service, December 1991 (adapted)"
  },
  clHarriss: {
    passage: `. . . By the time Monroe arrived in Paris on April 12, the situation had, unknown to him, radically altered: Napoléon had suddenly decided to sell the entire Louisiana Territory to the United States. He had always seen Saint Domingue . . . as France's most important holding in the Western Hemisphere. The Louisiana Territory, in Napoléon's view, was useful mainly as a granary for Saint Domingue. With the colony in danger of being lost, the territory was less useful. Then, too, Napoléon was gearing up for another campaign against Britain and needed funds for that. . . .`,
    psource: "Joseph A. Harriss, \"How the Louisiana Purchase Changed the World,\" Smithsonian, April 2003 (adapted)"
  },
  clConstitution: {
    passage: `. . . there was a debate about whether and how such a large property purchase was allowed under the Constitution. Jefferson took a strict, literal view of constitutional powers . . . The ability to buy property from foreign governments was not among these powers listed [in] the Constitution. . . . Instead, Jefferson considered a constitutional amendment the only way to conclude the deal . . . Jefferson's cabinet, including James Madison, disagreed about the need for a constitutional amendment. . . . On October 20, 1803, the Senate voted for ratification 24-7, and the treaty was signed on October 31, 1803. . . .`,
    psource: "\"The Louisiana Purchase: Jefferson's Constitutional Gamble,\" Constitution Daily, National Constitution Center (adapted)"
  },
  clFarnham: {
    passage: `. . . the Federalists of New England, led by [Timothy] Pickering, were also doing an about-face, from broad to strict interpretation of the Constitution. In this way, they hoped to prevent the inclusion of Louisiana in the Union. . . . Other voices of New England Federalism urged that the purchase was unconstitutional, that the general government did not have the power to acquire foreign territory. . . . Pickering and his fellow Federalists in Congress proceeded to Washington with much determination to defeat the agreement. Their attack was to be launched on constitutional grounds. . . .`,
    psource: "Thomas J. Farnham, \"The Federal-State Issue and the Louisiana Purchase,\" Louisiana History, 1965 (adapted)"
  },
  clLaMap: {
    passage: `Document 5b

. . . The enormous expanse to the north and west of New Orleans . . . meant that thirteen new states would eventually be created, in whole or in substantial part, from the eight hundred seventy-five thousand square miles that had been bought. These, ascending from the Gulf of Mexico to the Canadian border, are Louisiana, Arkansas, Oklahoma, Missouri, Kansas, Iowa, Nebraska, Minnesota, South Dakota, North Dakota, Colorado, Wyoming, and Montana. . . .
Source: Charles A. Cerami, Jefferson's Great Gamble, Sourcebooks, 2003 (adapted)`,
    imgs: [
      {
        src: "img/q35-louisiana-purchase-map.png",
        cap: "Document 5a: The Louisiana Purchase and Western Exploration — the territory that nearly doubled the United States, with the routes of Lewis and Clark. Source: Joyce Appleby et al., The American Journey, Glencoe McGraw-Hill, 2003 (adapted)",
        alt: "Map of the United States after the Louisiana Purchase, showing the vast Louisiana Territory between the Mississippi River and the Rocky Mountains and the Lewis and Clark expedition routes"
      }
    ]
  },
  clLehrman: {
    passage: `. . . What was clear at the time of the Louisiana Purchase was that it had put America on the road to becoming a truly continental power. . . . Historian Henry Adams wrote: "The annexation of Louisiana was an event so portentous [considerable] as to defy measurement; it gave a new face to politics, and ranked in historical importance next to the Declaration of Independence and the adoption of the Constitution . . ." . . . Historian Sean Wilentz wrote: "Over the coming decades, the consequences of the Purchase would indeed disturb public opinion over constitutional issues connected to the expansion of slavery—and help rip the country to pieces." . . .`,
    psource: "\"The Louisiana Purchase: Aftermath,\" The Lehrman Institute online (adapted)"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.secota,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. Which statement about Native American societies can be inferred from this engraving?",
  "choices": [
    "The inhabitants valued entertainment over field work.",
    "The layouts of their villages were based on European societies.",
    "Internal conflict and disease led to their decline.",
    "Their communities were planned and supported an organized way of life."
  ],
  "answer": 3,
  "back": "(4) Their communities were planned and supported an organized way of life — the orderly rows of houses and carefully cultivated cornfields show a planned, organized village."
},
{
  ...STIMULI.secota,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. A historian would find this engraving most useful for",
  "choices": [
    "describing Native American societies prior to European colonization",
    "examining the way Native Americans dealt with hardship",
    "illustrating the influence colonial leaders had on Native American societies",
    "understanding the trading patterns of Native American societies"
  ],
  "answer": 0,
  "back": "(1) describing Native American societies prior to European colonization — the 1590 engraving depicts an Algonquian town before extensive European settlement."
},
{
  ...STIMULI.proclamationMap,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. The Proclamation Line of 1763 generally followed which geographic feature?",
  "choices": [
    "Great Lakes",
    "Appalachian Mountains",
    "Rocky Mountains",
    "Mississippi River"
  ],
  "answer": 1,
  "back": "(2) Appalachian Mountains — the Proclamation Line of 1763 ran along the crest of the Appalachians, barring colonial settlement to the west."
},
{
  ...STIMULI.proclamationMap,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. How did many American colonists respond to the establishment of the Proclamation Line of 1763?",
  "choices": [
    "They argued it was an abuse of British authority.",
    "They established a colony on the Florida peninsula.",
    "They honored Native American treaties.",
    "They purchased land needed to construct the National Road."
  ],
  "answer": 0,
  "back": "(1) They argued it was an abuse of British authority — colonists who wanted western land resented being forbidden to settle beyond the Appalachians."
},
{
  ...STIMULI.federalist15,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. Based on this passage, what action would Alexander Hamilton recommend?",
  "choices": [
    "strengthening the national government",
    "establishing a monarchy",
    "increasing the power of the states",
    "continuing to use the Articles of Confederation"
  ],
  "answer": 0,
  "back": "(1) strengthening the national government — Hamilton argues the weak Confederation has \"arrested all the wheels\" of government and must be replaced by a stronger union."
},
{
  ...STIMULI.federalist15,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. Based on this passage, the purpose of the Federalist Papers was to",
  "choices": [
    "discourage the creation of political parties",
    "justify the American Revolution to the colonists",
    "support ratification of the Constitution",
    "argue for a bill of rights"
  ],
  "answer": 2,
  "back": "(3) support ratification of the Constitution — the Federalist Papers argued that the new Constitution was needed to fix the failures of the Articles of Confederation."
},
{
  ...STIMULI.marbury,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. The Supreme Court's decision in this case established the principle of",
  "choices": [
    "states' rights",
    "nullification",
    "judicial review",
    "popular sovereignty"
  ],
  "answer": 2,
  "back": "(3) judicial review — Marbury v. Madison (1803) established the Court's power to declare an act of the legislature \"repugnant to the constitution\" void."
},
{
  ...STIMULI.marbury,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. What was a direct result of the Supreme Court's decision in this case?",
  "choices": [
    "The power of the federal judiciary was strengthened.",
    "The court increased the number of justices.",
    "The legislative branch's power was increased.",
    "The authority of the executive branch expanded."
  ],
  "answer": 0,
  "back": "(1) The power of the federal judiciary was strengthened — judicial review made the Supreme Court a coequal branch able to check Congress and the president."
},
{
  ...STIMULI.jacksonRemoval,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. What was the primary reason President Andrew Jackson supported the removal of Native Americans from their tribal lands?",
  "choices": [
    "it provided fertile farmland to Native Americans",
    "it gave political support to Native Americans",
    "it opened Native American land to white settlement",
    "it granted citizenship to Native Americans"
  ],
  "answer": 2,
  "back": "(3) it opened Native American land to white settlement — Jackson argues removal would open the territory \"to the settlement of the whites\" and let those states grow."
},
{
  ...STIMULI.jacksonRemoval,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. Which Supreme Court case was directly related to the control of Native American land in the southeast?",
  "choices": [
    "McCulloch v. Maryland",
    "Worcester v. Georgia",
    "Dred Scott v. Sanford",
    "Plessy v. Ferguson"
  ],
  "answer": 1,
  "back": "(2) Worcester v. Georgia — the 1832 ruling held that Georgia could not impose its laws on Cherokee land, though Jackson ignored it and removal proceeded (the Trail of Tears)."
},
{
  ...STIMULI.election1876,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. This map of electoral votes in the 1876 presidential election shows that",
  "choices": [
    "Samuel Tilden won in most western states",
    "the votes of several northern states were disputed",
    "the Democratic candidate won fewer popular votes",
    "Rutherford B. Hayes won the presidential election"
  ],
  "answer": 3,
  "back": "(4) Rutherford B. Hayes won the presidential election — Hayes won 185 electoral votes to Tilden's 184 after a commission awarded him the disputed votes."
},
{
  ...STIMULI.election1876,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. What was a major result of the negotiations that settled the election of 1876?",
  "choices": [
    "Confederate General Robert E. Lee surrendered to end the Civil War.",
    "Manifest Destiny was completed with the addition of new western territory.",
    "Slavery was abolished with the ratification of the 13th amendment.",
    "Reconstruction ended with the removal of the Union army from the South."
  ],
  "answer": 3,
  "back": "(4) Reconstruction ended with the removal of the Union army from the South — the Compromise of 1877 made Hayes president in exchange for withdrawing federal troops."
},
{
  ...STIMULI.newColossus,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Which group would most strongly oppose the idea expressed in this poem?",
  "choices": [
    "nativists",
    "industrialists",
    "suffragists",
    "imperialists"
  ],
  "answer": 0,
  "back": "(1) nativists — \"The New Colossus\" welcomes \"your tired, your poor,\" while nativists opposed immigration and favored native-born Americans."
},
{
  ...STIMULI.newColossus,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. These words on the Statue of Liberty reflect 19th-century American support for",
  "choices": [
    "socialism",
    "populism",
    "immigration",
    "neutrality"
  ],
  "answer": 2,
  "back": "(3) immigration — the poem casts the Statue of Liberty as the \"Mother of Exiles\" welcoming immigrants to the \"golden door.\""
},
{
  ...STIMULI.standardOil,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. Historians could best use this passage to study",
  "choices": [
    "the transportation revolution in the early 19th century",
    "industrialization during the late 19th century",
    "jobs creation under the New Deal",
    "the impact of the Quota Acts"
  ],
  "answer": 1,
  "back": "(2) industrialization during the late 19th century — Standard Oil's huge pipelines, tank cars, and 100,000 workers illustrate the giant trusts of the industrial age."
},
{
  ...STIMULI.standardOil,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. Which writer became famous for exposing the questionable business tactics of Rockefeller's Standard Oil Company?",
  "choices": [
    "Upton Sinclair",
    "Jacob Riis",
    "Ida Tarbell",
    "Margaret Sanger"
  ],
  "answer": 2,
  "back": "(3) Ida Tarbell — her muckraking History of the Standard Oil Company exposed Rockefeller's ruthless monopoly tactics."
},
{
  ...STIMULI.antiImperialist,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. Which event led to the issues described in this passage?",
  "choices": [
    "Mexican-American War",
    "Civil War",
    "Spanish-American War",
    "World War I"
  ],
  "answer": 2,
  "back": "(3) Spanish-American War — victory in 1898 gave the U.S. the Philippines, and the war to suppress Filipino independence prompted the Anti-Imperialist League's protest."
},
{
  ...STIMULI.antiImperialist,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. Which action would most likely have been rejected by the authors of this passage?",
  "choices": [
    "passage of an amendment for the direct election of senators",
    "creation of the Pure Food and Drug Act",
    "establishment of the Federal Reserve System",
    "announcement of the Roosevelt Corollary"
  ],
  "answer": 3,
  "back": "(4) announcement of the Roosevelt Corollary — its assertion of U.S. police power over Latin America was exactly the imperialism the Anti-Imperialist League condemned."
},
{
  ...STIMULI.schenck,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. In this decision, the actions of Charles Schenck were labeled as a \"clear and present danger\" because the United States was",
  "choices": [
    "responding to strikes by organized labor",
    "implementing a new immigration system",
    "involved in fighting a world war",
    "concerned about a revolution in Russia"
  ],
  "answer": 2,
  "back": "(3) involved in fighting a world war — Schenck's leaflets urging resistance to the draft were ruled a danger because the nation was at war (World War I)."
},
{
  ...STIMULI.schenck,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. Which constitutional right was limited by this Supreme Court decision?",
  "choices": [
    "freedom of expression",
    "right to bear arms",
    "right to counsel",
    "trial by jury"
  ],
  "answer": 0,
  "back": "(1) freedom of expression — Schenck v. United States held that the First Amendment's free-speech protection could be limited when speech posed a \"clear and present danger.\""
},
{
  ...STIMULI.fdrFirst,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. What issue is being addressed by President Franklin D. Roosevelt in this speech?",
  "choices": [
    "the failure of Prohibition",
    "the economic problems caused by the Great Depression",
    "the destruction caused by the attack on Pearl Harbor",
    "the possibility of a military alliance with Great Britain"
  ],
  "answer": 1,
  "back": "(2) the economic problems caused by the Great Depression — FDR's 1933 \"fear itself\" address sought to restore confidence during the depths of the Depression."
},
{
  ...STIMULI.fdrFirst,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. Which program was created in response to the situation described in this speech?",
  "choices": [
    "Fourteen Points",
    "New Deal",
    "Lend-Lease",
    "Great Society"
  ],
  "answer": 1,
  "back": "(2) New Deal — FDR's response to the Great Depression was the New Deal's relief, recovery, and reform programs."
},
{
  ...STIMULI.korematsuDissent,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. What was the main reason for Supreme Court Justice Frank Murphy's dissent in Korematsu v. United States?",
  "choices": [
    "to ensure Japanese Americans remained loyal to the United States",
    "to increase Japanese American participation in the military",
    "to express opposition to the internment of Japanese Americans",
    "to pressure Congress to limit the rights of Japanese Americans during wartime"
  ],
  "answer": 2,
  "back": "(3) to express opposition to the internment of Japanese Americans — Murphy argued that punishing an entire group for the disloyalty of a few denied individuals their rights."
},
{
  ...STIMULI.herblock1951,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. Which idea is being illustrated in this cartoon?",
  "choices": [
    "expansion of presidential responsibility",
    "increasing congressional checks on presidential power",
    "increased role of the Supreme Court in United States foreign policy",
    "use of executive orders to end foreign alliances"
  ],
  "answer": 0,
  "back": "(1) expansion of presidential responsibility — the cartoon shows the heavy and growing burdens the early Cold War placed on the president."
},
{
  ...STIMULI.herblock1951,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. What is causing the problems shown in this cartoon?",
  "choices": [
    "failure to sign the Universal Declaration of Human Rights",
    "judgments made at the Nuremberg War Trials",
    "President Harry Truman's decision to desegregate the military",
    "emergence of the Cold War rivalry"
  ],
  "answer": 3,
  "back": "(4) emergence of the Cold War rivalry — the global tensions of the U.S.-Soviet Cold War (Korea, containment, the arms race) weighed heavily on the presidency."
},
{
  ...STIMULI.reaganBerlin,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. What was the main idea of President Ronald Reagan's speech?",
  "choices": [
    "to draw attention to the human rights violations in Western Europe",
    "to increase humanitarian aid to the Communist bloc",
    "to prevent a re-emergence of fascism in East Germany",
    "to emphasize the failures of communism"
  ],
  "answer": 3,
  "back": "(4) to emphasize the failures of communism — Reagan contrasts the prosperous free West with the failure, backwardness, and shortages of the Communist world."
},
{
  ...STIMULI.authEquality,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. What is the main idea of this cartoon?",
  "choices": [
    "Equal rights are easily achieved by all groups.",
    "The difficult path to equality for one group has opened the way to others.",
    "Gay marriage has lost support among racial and ethnic groups.",
    "Women had more difficulty than any other group in gaining equality."
  ],
  "answer": 1,
  "back": "(2) The difficult path to equality for one group has opened the way to others — the cartoon shows successive groups climbing the same hard-won staircase toward equality."
},
{
  ...STIMULI.authEquality,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What key constitutional provision is frequently used by groups seeking legal equality?",
  "choices": [
    "14th amendment—equal protection of the law",
    "4th amendment—protection against unreasonable search and seizure",
    "6th amendment—right of trial by jury",
    "Article 1—establishing rules for naturalization"
  ],
  "answer": 0,
  "back": "(1) 14th amendment—equal protection of the law — its Equal Protection Clause is the basis many groups have used in the courts to win equal rights."
},
{
  ...STIMULI.seqWatergate,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: a 1974 Herblock cartoon of Nixon and the subpoenaed tapes (Doc 1) and a news report on the Supreme Court's ruling in United States v. Nixon (Doc 2). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: the Watergate scandal grew out of the 1972 break-in at the Democratic headquarters and the cover-up that followed; Congress and the Watergate special prosecutor subpoenaed President Nixon's secret White House tapes, and Nixon resisted by claiming executive privilege. Relationship: Cause and Effect (and Turning Point). The demand for the tapes (Doc 1 shows Nixon \"hanging between the tapes\") led to the Supreme Court's unanimous ruling in United States v. Nixon (Doc 2) that the president had to turn them over, rejecting his claim of \"unreviewable executive privilege.\" The decision affirmed that no one, not even the president, is above the law, and it forced the release of evidence that led to Nixon's resignation in August 1974."
},
{
  ...STIMULI.seqAtomicBomb,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: a 1945 petition from Manhattan Project scientists (Doc 1) and Truman's statement announcing the atomic bombing of Hiroshima (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 2's reliability as evidence.",
  "back": "Model answer — Context: in the final months of World War II in 1945, the United States developed the atomic bomb through the Manhattan Project; some scientists urged that Japan be warned and given a chance to surrender first, while President Truman decided to use the bomb to end the war quickly. Reliability of Doc 2: Truman's audience was the American public and the world, and his purpose was to announce and justify the bombing of Hiroshima. His point of view is the commander in chief defending his decision — he stresses that Japan started the war at Pearl Harbor and \"have been repaid many fold,\" and warns of a \"rain of ruin\" unless Japan surrenders. That makes the statement a one-sided justification rather than a neutral assessment: it is very useful for understanding the official rationale, but its bias should be weighed against the moral concerns raised by the scientists in Doc 1."
},
{
  ...STIMULI.clNps,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — NPS Museum Gazette). Based on this document, what is ONE historical circumstance that led to the purchase of the Louisiana Territory?",
  "back": "After winning independence in 1783, the United States worried about a European power on its western border and needed unrestricted access to the Mississippi River and the port of New Orleans to ship Western goods. That concern deepened when, in 1800, Napoleon's France secretly reacquired Louisiana from Spain (the Treaty of San Ildefonso)."
},
{
  ...STIMULI.clHarriss,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — Joseph A. Harriss, Smithsonian). According to Joseph A. Harriss, what is ONE historical circumstance that led to the purchase of the Louisiana Territory?",
  "back": "Napoleon suddenly decided to sell the entire Louisiana Territory: with France's prized sugar colony of Saint Domingue (Haiti) in danger of being lost, the territory — which Napoleon valued mainly as a granary for that colony — became far less useful, and Napoleon needed money for his coming war against Britain."
},
{
  ...STIMULI.clConstitution,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Constitution Daily). Based on this document, state ONE way the constitutional issue raised by the Louisiana Purchase was addressed.",
  "back": "Although Jefferson, a strict constructionist, worried the Constitution did not authorize buying foreign territory and even considered a constitutional amendment, his cabinet (including Madison and Treasury Secretary Gallatin) argued the purchase was permitted under the treaty-making power — so the Senate simply ratified the treaty 24-7 on October 20, 1803."
},
{
  ...STIMULI.clFarnham,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Thomas J. Farnham). According to Thomas J. Farnham, what is ONE effort by Federalists to oppose the Louisiana Purchase?",
  "back": "The New England Federalists, led by Timothy Pickering, switched to a strict interpretation of the Constitution and argued that the purchase was unconstitutional because the federal government had no power to acquire foreign territory; Pickering and his allies went to Congress determined to defeat the treaty on constitutional grounds."
},
{
  ...STIMULI.clLaMap,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5a/5b — Louisiana Purchase map + Cerami). Based on these documents, what is ONE impact of the Louisiana Purchase on the United States?",
  "back": "The Louisiana Purchase nearly doubled the size of the United States — about 875,000 square miles stretching from the Mississippi River to the Rocky Mountains (explored by Lewis and Clark) — and from this land thirteen new states would eventually be created, transforming the U.S. into a continental nation."
},
{
  ...STIMULI.clLehrman,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — Lehrman Institute). Based on this document, state ONE impact of the Louisiana Purchase on the United States.",
  "back": "The Purchase put America \"on the road to becoming a truly continental power\" (Henry Adams ranked it in importance next to the Declaration of Independence and the Constitution) — but it also sowed the seeds of future conflict, since debates over the expansion of slavery into the new territory would help \"rip the country to pieces\" in the Civil War."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Purchase of the Louisiana Territory). Write an essay that describes the historical circumstances, explains at least TWO efforts to address the issue, and discusses the impact of those efforts (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 2): Western farmers needed the Mississippi River and the port of New Orleans, controlled by Spain and then by Napoleon's France; when France suddenly offered to sell the entire Louisiana Territory (because it had lost Saint Domingue and needed funds for war), the U.S. faced the chance — and the constitutional question — of a huge purchase. Efforts (explain 2+): Jefferson sent Monroe and Livingston to negotiate and, despite his strict-constructionist doubts, let the Senate ratify the treaty rather than wait for an amendment (Doc 3, plus outside info: the $15 million deal); New England Federalists led by Pickering fought it on constitutional grounds (Doc 4). Impact (Docs 5, 6): the Purchase nearly doubled the nation's size, made it a continental power, and opened the West to settlement and exploration (Lewis and Clark) — but it also intensified the slavery-expansion debates (Missouri Compromise, \"Bleeding Kansas\") that would lead to the Civil War."
}
];
