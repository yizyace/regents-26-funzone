// Shared card deck for the Aug 2025 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-82025-sk.pdf).
const STIMULI = {
  colonialTrade: {
    imgs: [
      {
        src: "img/q01-colonial-trade-routes.png",
        cap: "Colonial Trade Routes and Goods. Source: The Making of America, National Geographic Society (adapted)",
        alt: "Map of Atlantic trade linking the thirteen British colonies, Great Britain, Europe, Africa, and the West Indies, with arrows showing colonial raw materials exported and manufactured goods imported, and the Middle Passage"
      }
    ]
  },
  bostonMassacre: {
    imgs: [
      {
        src: "img/q03-boston-massacre.jpg",
        cap: "'The Bloody Massacre Perpetrated in King Street, Boston, on March 5th, 1770.' Source: Paul Revere, engraver, 1770 (adapted)",
        alt: "Engraving of a line of British soldiers firing their muskets into a crowd of colonists in Boston"
      }
    ]
  },
  washingtonNewport: {
    passage: `. . . The Citizens of the United States of America have a right to applaud themselves for having given to mankind examples of an enlarged and liberal policy: a policy worthy of imitation. All possess alike liberty of conscience and immunities [protections] of citizenship. It is now no more that toleration is spoken of, as if it was by the indulgence of one class of people, that another enjoyed the exercise of their inherent natural rights. For happily the Government of the United States, which gives to bigotry no sanction, to persecution no assistance, requires only that they who live under its protection should demean themselves as good citizens, in giving it on all occasions their effectual support. . . .

May the Children of the Stock of Abraham, who dwell in this land continue to merit and enjoy the good will of the other inhabitants. . . .`,
    psource: "President George Washington, Letter to the Hebrew Congregation of Newport, Rhode Island, August 18, 1790 (adapted)"
  },
  missouriCompromise: {
    passage: `SEC. 8. And be it further enacted. That in all that territory ceded by France to the United States, under the name of Louisiana, which lies north of thirty-six degrees and thirty minutes north latitude, not included within the limits of the state, contemplated by this act, slavery and involuntary servitude, otherwise than in the punishment of crimes, whereof the parties shall have been duly convicted, shall be, and is hereby, forever prohibited: Provided always, That any person escaping into the same, from whom labour or service is lawfully claimed, in any state or territory of the United States, such fugitive may be lawfully reclaimed and conveyed to the person claiming his or her labour or service as aforesaid.`,
    psource: "Missouri Compromise, 1820"
  },
  fifteenthAmendment: {
    imgs: [
      {
        src: "img/q09-fifteenth-amendment-poster.jpg",
        cap: "'The Fifteenth Amendment and Its Results.' Source: E. Sachse & Co., lithographer, 1870 (adapted)",
        alt: "1870 celebration lithograph for African American suffrage, with a portrait of Lincoln, panels labeled Education and Science, and a parade of Black citizens on horseback"
      }
    ]
  },
  gompers: {
    passage: `. . . Save our children in their infancy from being forced into the maelstrom [turmoil] of wage slavery. See to it that they are not dwarfed in body and mind or brought to a premature death by early drudgery. Give them the sunshine of the school and playground instead of the factory, the mine and the workshop. . . .`,
    psource: "Samuel Gompers, Address to the International Labor Congress, September 1893"
  },
  maineHeadline: {
    imgs: [
      {
        src: "img/q13-maine-headline.png",
        cap: "San Francisco Examiner, February 16, 1898",
        alt: "Front-page newspaper headline reading 'The Battleship Maine Blown Up in Havana Harbor'"
      }
    ]
  },
  wilsonLeague: {
    passage: `. . . A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small States alike. . . .`,
    psource: "President Woodrow Wilson, 1918 (adapted)"
  },
  bryanScopes: {
    passage: `. . . Let us, then, hear the conclusion of the whole matter. Science is a magnificent material force, but it is not a teacher of morals. It can perfect machinery, but it adds no moral restraints to protect society from the misuse of the machine. It can also build gigantic intellectual ships, but it constructs no moral rudders for the control of storm-tossed human vessels. It not only fails to supply the spiritual element needed but some of its unproven hypotheses rob the ship of its compass and thus endangers its cargo. . . .`,
    psource: "William Jennings Bryan, State of Tennessee v. Scopes, 1925"
  },
  korematsu: {
    passage: `. . . All citizens alike, both in and out of uniform, feel the impact of war in greater or lesser measure. Citizenship has its responsibilities, as well as its privileges, and, in time of war, the burden is always heavier. Compulsory [mandatory] exclusion of large groups of citizens from their homes, except under circumstances of direst emergency and peril, is inconsistent with our basic governmental institutions. But when, under conditions of modern warfare, our shores are threatened by hostile forces, the power to protect must be commensurate with [equal to] the threatened danger. . . .`,
    psource: "Supreme Court Justice Hugo Black, Majority Opinion, Korematsu v. United States, 1944 (adapted)"
  },
  truman: {
    passage: `. . . I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation [domination] by armed minorities or by outside pressures.

I believe that we must assist free peoples to work out their own destinies in their own way.

I believe that our help should be primarily through economic and financial aid which is essential to economic stability and orderly political processes. . . .

The seeds of totalitarian regimes are nurtured by misery and want. They spread and grow in the evil soil of poverty and strife. They reach their full growth when the hope of a people for a better life has died. . . .`,
    psource: "President Harry Truman, Message to Congress, March 12, 1947 (adapted)"
  },
  civilRights1964: {
    passage: `SEC. 703. (a) It shall be an unlawful employment practice for an employer—

(1) to fail or refuse to hire or to discharge any individual, or otherwise to discriminate against any individual with respect to his compensation, terms, conditions, or privileges of employment, because of such individual's race, color, religion, sex, or national origin; or

(2) to limit, segregate, or classify his employees in any way which would deprive or tend to deprive any individual of employment opportunities or otherwise adversely affect his status as an employee, because of such individual's race, color, religion, sex, or national origin. . . .`,
    psource: "Civil Rights Act, 1964"
  },
  miranda: {
    passage: `. . . You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be provided for you. Do you understand the rights I have just read to you? . . .`,
    psource: "Miranda v. Arizona, 1966"
  },
  election2000: {
    imgs: [
      {
        src: "img/q26-election-2000-map.png",
        cap: "2000 Election. Source: Kennedy et al., The American Pageant: A History of the Republic, Houghton Mifflin (adapted)",
        alt: "Electoral map of the 2000 presidential election with a results table: Bush 271 electoral votes and 50,456,169 popular votes; Gore 266 electoral and 50,996,116 popular; Nader 0 and 2,783,728"
      }
    ]
  },
  chinaTrade: {
    imgs: [
      {
        src: "img/q28-us-china-trade.png",
        cap: "Source: 'US Trade Deficit With China and Why It's So High,' The Balance, 2020 (adapted)",
        alt: "Graphic comparing total U.S. imports from China ($452.2 billion: computers, cell phones, apparel) with smaller U.S. exports to China ($106.6 billion: commercial aircraft, soybeans, semiconductors)"
      }
    ]
  },
  seqFounding: {
    passage: `Document 1

. . . We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,—That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government . . .
Source: Declaration of Independence, July 4, 1776 (adapted)

Document 2

We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America. . . .
Source: Preamble, United States Constitution, 1787`
  },
  seqForgottenMan: {
    passage: `Document 1

Bruce Craven is responding to one of President Franklin D. Roosevelt's fireside chats.
July 25, 1933

Dear Mr. President;
. . . The forgotten man has been forgotten, if he was ever really remembered. I happen to be an approved attorney for the Federal Land Bank . . . He is representative of thousands of farmers in North Carolina, owning maybe 50 acres of land and doing all of his own work, and about to lose his farm under a mortgage. But to get the loan he is obliged to pay $20 in advance for appraisals, and another $10 for a survey, and he no more has that much cash than he has the moon. . . . I hope yet that somehow you may remember this forgotten little man, who has no one in high places to befriend him.
Respectfully yours,
Bruce Craven, Trinity, North Carolina
Source: Levine and Levine, The People and the President: America's Conversation with FDR, Beacon Press, 2002`,
    imgs: [
      {
        src: "img/q30-batchelor-cartoon.jpg",
        cap: "Document 2: 'Yes, You Remembered Me.' Source: C. D. Batchelor, New York Daily News, October 11, 1936",
        alt: "Editorial cartoon of a smiling President Roosevelt, his coat labeled 'F.D.R.,' shaking hands with a ragged, stooped man labeled 'The Forgotten Man'"
      }
    ]
  },
  crbDoc1: {
    passage: `Document 1b

. . . In my Message to the present Congress at its first session I discussed at length the question of the regulation of those big corporations commonly doing an interstate business, often with some tendency to monopoly, which are popularly known as trusts. . . . We can do nothing of good in the way of regulating and supervising these corporations until we fix clearly in our minds that we are not attacking the corporations, but endeavoring to do away with any evil in them. We are not hostile to them; we are merely determined that they shall be so handled as to subserve [serve] the public good. We draw the line against misconduct, not against wealth. . . .
Source: President Theodore Roosevelt, Second Annual Message to Congress, December 2, 1902`,
    imgs: [
      {
        src: "img/q31-beard-judge-cartoon.jpg",
        cap: "Document 1a. Source: Frank Beard, The Judge, July 19, 1884 (adapted)",
        alt: "Cartoon of a giant Standard Oil tank with octopus-like pipes reaching out to strangle a 'Small Oil Co.' derrick, banks, factories, railroads, ships, and small struggling figures"
      }
    ]
  },
  crbDoc2: {
    passage: `. . . I deny emphatically the assertion that opportunity has been restricted or individual effort stifled by reason of the growth of the trusts. On the contrary, the trusts have opened wider avenues and greater opportunities to the young men of to-day than those of any other generation ever enjoyed. . . . It is combination that has produced the capital to open up mines and factories, to build great industrial plants and the monster wholesale and retail establishments. It is combination and capital that have sent the railroads shooting in a hundred different directions all over the continent. . . .`,
    psource: "J. D. Rockefeller, \"Opportunity in America,\" Cosmopolitan, September 1, 1907"
  },
  crbDoc3: {
    passage: `. . . Journalism and publicity played important roles in promoting the goals of the progressives, especially with regard to corruption in government and the monopolistic practices of business and industry. During the period, scores of articles appeared in magazines—revealing the truth, as the reformers saw it—about the way America was really ruled. . . . Such magazines included McClure's, Munsey's, Everybody's, Cosmopolitan, Collier's, and the American Magazine. The men and women who wrote these articles were called muckrakers . . . It was applied to them in 1906 by Theodore Roosevelt who, while basically on their side, feared their revelations would get people too worked up and indignant. . . .`,
    psource: "Fon Boardman, America and the Progressive Era, 1900–1917, Henry Z. Walck, Inc., 1970"
  },
  crbDoc4: {
    passage: `The Northern Securities Company was a combination of three railroads that monopolized transportation in several western states. Theodore Roosevelt considered the company to be in violation of the Sherman Antitrust Act and, in 1904, the Supreme Court agreed.

. . . Rather than follow the common Progressive line that by their nature all trusts were inherently evil, he divided them into "good" and "bad" trusts. . . . The line was to be drawn on conduct, not bigness. . . . Northern Securities, he decided, was bad—and should be broken up. . . . Specifically, Roosevelt called for the establishment of a Bureau of Corporations in a Cabinet-level Department of Commerce to determine if regulation was warranted . . .`,
    psource: "Nathan Miller, Theodore Roosevelt: A Life, William Morrow and Company, 1992"
  },
  crbDoc5: {
    passage: `. . . In a very public confrontation, Roosevelt did prosecute John D. Rockefeller and J. P. Morgan, two of the most celebrated titans of American business, for their railroad monopoly in the Northwest; he righteously took the side of labor and the consumer in the great coal strike of 1902; and by 1906 . . . TR increased the pace of reform by creating standards for food and drugs, tackling the corruption in the meat industry (in response to novelist Upton Sinclair's best-selling The Jungle), and, in the cause that he perhaps held dearest, aggressively limiting development of public lands (he would double the number of national parks and establish fifty-one wild bird refuges). . . .`,
    psource: "Jennings and Brewster, The Century, Doubleday, 1998"
  },
  crbDoc6: {
    passage: `. . . America's prosperity is built on hard work, open markets, and fair competition. But right now we're facing a monopoly problem as dominant digital platforms like Amazon increasingly use their power to increase prices, preference their own products and services, and harm small businesses. These anticompetitive practices are bad for consumers, entrepreneurs, and businesses, and I commend the Federal Trade Commission for taking action.

The case for reinvigorating competition policy and putting in place rules of the road for Big Tech companies is clear. I will continue to push for updates to the antitrust laws, including the bipartisan American Innovation and Choice Online Act . . .`,
    psource: "Senator Amy Klobuchar, Statement on the Antitrust Lawsuit Against Amazon, September 26, 2023"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.colonialTrade,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. Which conclusion is best supported by the information on this map?",
  "choices": [
    "Manufacturing in the colonies was restricted",
    "The West Indies were excluded from British trade",
    "Africa was a leading supplier of gunpowder",
    "Great Britain relied upon trade with South America"
  ],
  "answer": 0,
  "back": "(1) Manufacturing in the colonies was restricted — under mercantilism the colonies shipped raw materials (lumber, furs, fish, tobacco, indigo) to Britain and imported British manufactured goods, discouraging colonial manufacturing."
},
{
  ...STIMULI.colonialTrade,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. Which claim is best supported by the information on this map?",
  "choices": [
    "The colonies played an important role in Great Britain's economy",
    "The West Indies provided manufactured goods to the thirteen colonies",
    "Government in the thirteen colonies emphasized fair trade with other nations",
    "Great Britain promoted colonial economic independence"
  ],
  "answer": 0,
  "back": "(1) The colonies played an important role in Great Britain's economy — the map shows heavy trade flowing between the colonies and Britain, the core of the mercantilist system that enriched the mother country."
},
{
  ...STIMULI.bostonMassacre,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. Paul Revere created this engraving to",
  "choices": [
    "increase British sympathy toward the colonists",
    "discourage foreign support for colonial independence",
    "encourage colonial resistance to British rule",
    "convince King George III to expand colonial rights"
  ],
  "answer": 2,
  "back": "(3) encourage colonial resistance to British rule — Revere's propaganda engraving portrays the Boston Massacre as British soldiers deliberately gunning down peaceful colonists, inflaming anti-British feeling."
},
{
  ...STIMULI.bostonMassacre,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Which historical circumstance led to the event depicted in this engraving?",
  "choices": [
    "the signing of the Maryland Toleration Act",
    "the quartering of British troops",
    "the defeat of the British at the Battle of Saratoga",
    "the drafting of the United States Constitution"
  ],
  "answer": 1,
  "back": "(2) the quartering of British troops — Britain stationed soldiers in Boston to enforce its tax laws; friction between troops and colonists erupted in the March 1770 Boston Massacre."
},
{
  ...STIMULI.washingtonNewport,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. This passage would be most useful to a historian studying",
  "choices": [
    "colonial ideas about leadership in the Americas",
    "religious freedom in early United States history",
    "fair treatment for Native Americans",
    "presidential authority in immigration legislation"
  ],
  "answer": 1,
  "back": "(2) religious freedom in early United States history — Washington's 1790 letter to a Jewish congregation affirms liberty of conscience and that the government 'gives to bigotry no sanction, to persecution no assistance.'"
},
{
  ...STIMULI.washingtonNewport,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. The ideas expressed in this passage were guaranteed by the",
  "choices": [
    "Articles of Confederation",
    "Great Compromise",
    "Three-fifths Compromise",
    "Bill of Rights"
  ],
  "answer": 3,
  "back": "(4) Bill of Rights — the First Amendment (1791) guarantees freedom of religion, the very principle Washington praises in this letter."
},
{
  ...STIMULI.missouriCompromise,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. According to this excerpt, what would be the status of slavery in the Louisiana Territory?",
  "choices": [
    "Slavery would be determined by popular sovereignty.",
    "All territory west of the Mississippi River would be open to slavery.",
    "Each territory that applied for statehood would identify as free or slave.",
    "Slavery would be illegal in areas north of 36°30' latitude, except for Missouri."
  ],
  "answer": 3,
  "back": "(4) Slavery would be illegal in areas north of 36°30' latitude, except for Missouri — the Missouri Compromise (1820) banned slavery in the Louisiana Territory north of that line while admitting Missouri as a slave state."
},
{
  ...STIMULI.missouriCompromise,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. Which government action repealed the Missouri Compromise?",
  "choices": [
    "Indian Removal Act",
    "Kansas-Nebraska Act",
    "Homestead Act",
    "Dawes Act"
  ],
  "answer": 1,
  "back": "(2) Kansas-Nebraska Act — the 1854 act let those territories decide slavery by popular sovereignty, repealing the Missouri Compromise line and reigniting sectional conflict."
},
{
  ...STIMULI.fifteenthAmendment,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. This poster was created to celebrate",
  "choices": [
    "the Emancipation Proclamation",
    "African American suffrage",
    "the Harlem Renaissance",
    "the Great Migration"
  ],
  "answer": 1,
  "back": "(2) African American suffrage — the poster celebrates the Fifteenth Amendment (1870), which barred denying the vote on account of race, color, or previous condition of servitude."
},
{
  ...STIMULI.fifteenthAmendment,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. Which method was used after Reconstruction to deny African Americans the right illustrated in this poster?",
  "choices": [
    "passage of literacy tests and poll taxes",
    "introduction of sharecropping",
    "establishment of the Freedmen's Bureau",
    "decision of the Supreme Court in Brown v. Board of Education of Topeka"
  ],
  "answer": 0,
  "back": "(1) passage of literacy tests and poll taxes — after Reconstruction, Southern states used these (with grandfather clauses) to disenfranchise Black voters despite the Fifteenth Amendment."
},
{
  ...STIMULI.gompers,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. The problem that Samuel Gompers is discussing resulted from",
  "choices": [
    "railroad abuses",
    "free public education",
    "rapid industrialization",
    "immigration quotas"
  ],
  "answer": 2,
  "back": "(3) rapid industrialization — Gompers protests child labor ('wage slavery,' children in the factory, mine, and workshop), a problem created by the explosive industrial growth of the late 1800s."
},
{
  ...STIMULI.gompers,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. Which action did Samuel Gompers support to correct the problem described in the excerpt?",
  "choices": [
    "state regulation of public transportation",
    "passage of child labor laws",
    "adoption of an equal pay act",
    "strict enforcement of federal antitrust legislation"
  ],
  "answer": 1,
  "back": "(2) passage of child labor laws — Gompers, head of the AFL, wanted children in 'the school and playground instead of the factory,' supporting laws to end child labor."
},
{
  ...STIMULI.maineHeadline,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. This newspaper headline is an example of",
  "choices": [
    "progressive reform",
    "yellow journalism",
    "nativist attitudes",
    "isolationist policies"
  ],
  "answer": 1,
  "back": "(2) yellow journalism — sensational headlines like the Examiner's, blaming Spain for the Maine explosion, exemplify the exaggerated reporting that pushed the U.S. toward the Spanish-American War."
},
{
  ...STIMULI.maineHeadline,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. As a result of the event described in this headline, what action was taken by President William McKinley?",
  "choices": [
    "He offered to purchase Cuba from Spain.",
    "He asked Congress to declare war against Spain.",
    "He demanded that Spain pay to repair the damaged ship.",
    "He sent troops to assist Spain against the Cuban rebellion."
  ],
  "answer": 1,
  "back": "(2) He asked Congress to declare war against Spain — the sinking of the Maine (1898), amplified by yellow journalism, led McKinley to seek a war declaration, beginning the Spanish-American War."
},
{
  ...STIMULI.wilsonLeague,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. In this statement, President Woodrow Wilson is proposing the",
  "choices": [
    "establishment of colonies in other regions of the world",
    "repeal of international trade restrictions",
    "return of the United States to its traditional policy of neutrality",
    "creation of an international organization to settle disputes"
  ],
  "answer": 3,
  "back": "(4) creation of an international organization to settle disputes — Wilson calls for 'a general association of nations,' the League of Nations, the capstone of his Fourteen Points."
},
{
  ...STIMULI.bryanScopes,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. Which statement best describes the author's point of view during the Scopes trial?",
  "choices": [
    "Separation of church and state is essential to democracy.",
    "Scientific improvements do not promote the teaching of morality.",
    "Technological developments have no place in society.",
    "International trade is dependent upon technological developments."
  ],
  "answer": 1,
  "back": "(2) Scientific improvements do not promote the teaching of morality — Bryan argues science 'is not a teacher of morals' and 'adds no moral restraints,' reflecting his traditionalist, anti-evolution stance."
},
{
  ...STIMULI.bryanScopes,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. Which conclusion can be drawn from the Scopes trial?",
  "choices": [
    "It promoted the adoption of an open immigration policy.",
    "It encouraged a large population shift from urban to rural areas.",
    "It demonstrated a clash between modern and traditional values.",
    "It led to less materialism and demand for consumer goods."
  ],
  "answer": 2,
  "back": "(3) It demonstrated a clash between modern and traditional values — the 1925 Scopes 'Monkey Trial' pitted modern science (evolution) against traditional religious belief in 1920s America."
},
{
  ...STIMULI.korematsu,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. Which policy is being discussed in this excerpt?",
  "choices": [
    "congressional restrictions on war powers",
    "forced assimilation of Native Americans",
    "internment of Japanese Americans",
    "denial of legal counsel for the accused"
  ],
  "answer": 2,
  "back": "(3) internment of Japanese Americans — Korematsu v. United States (1944) upheld the wartime 'compulsory exclusion' and internment of Japanese Americans as a military necessity."
},
{
  ...STIMULI.korematsu,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. Which statement is best supported by the opinion of Justice Black?",
  "choices": [
    "Civil liberties have been limited in times of war.",
    "Freedom of speech is protected by the United States Constitution.",
    "Military participation is a citizen's obligation.",
    "Neutrality during wartime safeguards United States interests."
  ],
  "answer": 0,
  "back": "(1) Civil liberties have been limited in times of war — Black admits compulsory exclusion is normally 'inconsistent with our basic governmental institutions' but allows it under the war powers, showing wartime limits on liberty."
},
{
  ...STIMULI.truman,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. President Harry Truman made this statement in response to",
  "choices": [
    "Japan's occupation of Manchuria",
    "the signing of the United Nations Charter",
    "the communist threat to Greece and Turkey",
    "fighting in French Indochina"
  ],
  "answer": 2,
  "back": "(3) the communist threat to Greece and Turkey — the Truman Doctrine (March 1947) pledged aid to 'free peoples' resisting communism, prompted by crises in Greece and Turkey."
},
{
  ...STIMULI.truman,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. Which United States foreign policy is supported by Truman's message to Congress?",
  "choices": [
    "appeasement",
    "containment",
    "isolationism",
    "neutrality"
  ],
  "answer": 1,
  "back": "(2) containment — the Truman Doctrine embodies the Cold War policy of containing the spread of communism through economic and military aid."
},
{
  ...STIMULI.civilRights1964,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. These provisions in the 1964 Civil Rights Act are intended to",
  "choices": [
    "provide equal educational opportunities",
    "end unfair practices in the workplace",
    "desegregate the armed forces",
    "mandate fair voter registration"
  ],
  "answer": 1,
  "back": "(2) end unfair practices in the workplace — Section 703 (Title VII) bans employment discrimination based on race, color, religion, sex, or national origin."
},
{
  ...STIMULI.civilRights1964,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. The Civil Rights Act of 1964 was part of which federal program?",
  "choices": [
    "Reconstruction",
    "Square Deal",
    "New Deal",
    "Great Society"
  ],
  "answer": 3,
  "back": "(4) Great Society — the Civil Rights Act of 1964 was a centerpiece of President Lyndon B. Johnson's Great Society reforms."
},
{
  ...STIMULI.miranda,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. The Supreme Court ruling in this case",
  "choices": [
    "reinforced constitutional protections against self-incrimination",
    "guaranteed equal economic opportunity",
    "promoted separation of church and state",
    "upheld freedom of speech as a constitutional right"
  ],
  "answer": 0,
  "back": "(1) reinforced constitutional protections against self-incrimination — Miranda v. Arizona (1966) required police to inform suspects of their rights to silence and counsel, protecting the Fifth Amendment."
},
{
  ...STIMULI.miranda,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. Critics of this decision argued that it",
  "choices": [
    "created mandatory sentencing guidelines",
    "restricted attorney-client privilege",
    "gave the accused an advantage over law enforcement",
    "violated the equal protection clause"
  ],
  "answer": 2,
  "back": "(3) gave the accused an advantage over law enforcement — critics claimed Miranda warnings hampered police and let criminals go free on technicalities."
},
{
  ...STIMULI.election2000,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. According to this map, the results of the 2000 election indicate that",
  "choices": [
    "the candidate with the most popular votes can lose the election",
    "electoral votes had a limited impact on the election outcome",
    "third-party candidates have no effect on election results",
    "the South and Midwest voted overwhelmingly for Gore"
  ],
  "answer": 0,
  "back": "(1) the candidate with the most popular votes can lose the election — Gore won the popular vote (50,996,116 to 50,456,169) but lost the electoral vote 271–266, so Bush became president."
},
{
  ...STIMULI.election2000,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. The results of the 2000 election led directly to a national debate over",
  "choices": [
    "reforming the electoral college",
    "increasing the voting age",
    "expanding mail-in voting",
    "using social media in campaigns"
  ],
  "answer": 0,
  "back": "(1) reforming the electoral college — because Gore won the popular vote but lost in the Electoral College (decided by the Florida recount and Bush v. Gore), the 2000 election sparked debate over the electoral college."
},
{
  ...STIMULI.chinaTrade,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What is one reason for the conditions illustrated in this graphic?",
  "choices": [
    "Labor unions have consistently demanded more Chinese imports.",
    "China has outsourced many of its technology jobs to America.",
    "Companies in China often have lower production costs.",
    "China has a monopoly on the sale of commercial aircraft."
  ],
  "answer": 2,
  "back": "(3) Companies in China often have lower production costs — cheaper labor and production lead U.S. firms to import far more from China ($452.2B) than they export ($106.6B), creating the trade deficit shown."
},
{
  ...STIMULI.seqFounding,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: the Declaration of Independence (1776) and the Preamble to the U.S. Constitution (1787). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: the founding era. Colonial grievances against British rule (taxation without representation, the Coercive Acts) led the colonies to declare independence in 1776; after winning the Revolution, the new nation struggled under the weak Articles of Confederation, leading the Framers to write the Constitution in 1787. Relationship: Cause and Effect (or Similarity). Both documents rest on the same principle — government exists to secure the people's rights and draws its authority from the people ('consent of the governed' in Doc 1; 'We the People' in Doc 2). The ideals proclaimed in the Declaration became the goals the Constitution was written to 'secure' (a 'more perfect Union,' justice, liberty), so the Declaration's principles caused/shaped the framework of government in the Constitution."
},
{
  ...STIMULI.seqForgottenMan,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: a 1933 letter to FDR from attorney Bruce Craven (Doc 1) and a 1936 C. D. Batchelor cartoon (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 1's reliability as evidence.",
  "back": "Model answer — Context: the Great Depression. After the 1929 crash, unemployment reached about 25% and farmers were losing their land to mortgage foreclosure; FDR's New Deal (1933 on) created relief programs (e.g., the Federal Land Bank loans Craven mentions), and by 1936 FDR campaigned as the champion of the 'forgotten man.' Reliability of Doc 1: Craven's audience is President Roosevelt himself and his purpose is to plead the case of poor farmers, so his firsthand account of fees ($20 appraisal, $10 survey) blocking loans is credible eyewitness evidence of New Deal shortcomings. But his clear point of view — sympathy for the 'little man' and advocacy — biases him toward emphasizing failure, so his sweeping claims should be checked against other sources before being taken as the full picture."
},
{
  ...STIMULI.crbDoc1,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1a — Frank Beard cartoon, The Judge, 1884; and Doc 1b — Theodore Roosevelt, 1902). Based on these documents, what is ONE historical circumstance surrounding the government regulation of business?",
  "back": "By the late 1800s and early 1900s huge trusts and monopolies dominated key industries — the cartoon shows Standard Oil as an octopus whose pipes strangle a small oil company, banks, factories, and railroads — and Theodore Roosevelt warned that these big interstate corporations 'commonly doing an interstate business' tended toward monopoly, creating a need for federal regulation 'to subserve the public good.'"
},
{
  ...STIMULI.crbDoc2,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — J. D. Rockefeller, 'Opportunity in America,' 1907). According to Rockefeller, what is ONE reason he believed trusts were good for the country?",
  "back": "Rockefeller argued that trusts (combination) created capital and opportunity: they 'opened wider avenues and greater opportunities' for young men, supplied the capital to open mines and factories, build great industrial plants, and send the railroads 'shooting in a hundred different directions all over the continent' — ending the 'murderous competition' of the old days."
},
{
  ...STIMULI.crbDoc3,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Fon Boardman, America and the Progressive Era, 1970). Based on this document, what was ONE effort made to address the government regulation of business?",
  "back": "Journalism and publicity — muckraking writers exposed the corruption of government and the monopolistic practices of business in mass-circulation magazines (McClure's, Cosmopolitan, Collier's, and others), arousing public outrage and building support for reform."
},
{
  ...STIMULI.crbDoc4,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Nathan Miller, Theodore Roosevelt: A Life, 1992). According to Nathan Miller, what was ONE effort made to address the government regulation of business?",
  "back": "Roosevelt distinguished 'good' from 'bad' trusts (drawing the line 'on conduct, not bigness') and used antitrust prosecution selectively — for example, having the Northern Securities railroad combination broken up under the Sherman Antitrust Act (1904). He also called for a Bureau of Corporations in a new Department of Commerce to investigate the trusts."
},
{
  ...STIMULI.crbDoc5,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5 — Jennings and Brewster, The Century, 1998). Based on this document, what is ONE result of efforts to address the government regulation of business?",
  "back": "TR's regulation produced concrete reforms: he prosecuted Rockefeller's and J. P. Morgan's railroad monopoly (Northern Securities), sided with labor and consumers in the 1902 coal strike, created federal food and drug standards and tackled corruption in the meat industry (after Upton Sinclair's The Jungle), and dramatically expanded conservation (doubling the national parks and creating fifty-one bird refuges)."
},
{
  ...STIMULI.crbDoc6,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — Senator Amy Klobuchar, statement on the antitrust suit against Amazon, 2023). According to this document, what is ONE result of efforts to address the government regulation of business?",
  "back": "The federal government continues to confront monopoly power in the digital age: the Federal Trade Commission has taken antitrust action against dominant platforms like Amazon, and Klobuchar is pushing updates to the antitrust laws (such as the bipartisan American Innovation and Choice Online Act) to protect consumers, entrepreneurs, and small businesses."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Government Regulation of Business). Write an essay that: describes the historical circumstances surrounding this issue, explains at least TWO efforts by individuals, groups, and/or governments to address it, and discusses the extent to which the efforts were successful (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1a/1b): in the Gilded Age, unregulated trusts and monopolies (Standard Oil, the railroads) gained enormous power over the economy, fixing prices and crushing small competitors, which raised public demand for regulation. Efforts (explain 2+): (a) muckraking journalism exposed corporate abuses and built reform pressure (Doc 3); (b) Theodore Roosevelt's 'good vs. bad trust' policy — breaking up Northern Securities under the Sherman Antitrust Act and creating the Bureau of Corporations (Docs 1b, 4); plus outside information such as the Pure Food and Drug Act, Meat Inspection Act, and later the Clayton Antitrust Act and FTC; (c) modern regulation — the FTC's suit against Amazon and proposed antitrust updates (Doc 6). Extent of success: mixed. Government broke up some trusts and won lasting consumer protections (food and drug safety, conservation, the FTC), but concentrated corporate power persists into the digital age (Doc 6), so regulation has been a partial and ongoing effort. (Note the opposing view in Doc 2: Rockefeller defended trusts as engines of opportunity.)"
}
];
