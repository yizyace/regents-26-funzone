// Shared card deck for the Jan 2026 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
const STIMULI = {
  robinson: {
    passage: `. . . Lastly, whereas you are become a body politic [group of citizens], using amongst yourselves civil government, and are not furnished with any persons of special eminency [rank] above the rest, to be chosen by you into office of government; let your wisdom and godliness appear, not only in choosing such persons as do entirely love and will promote the common good, but also in yielding unto them all due honor and obedience in their lawful administrations. . . .`,
    psource: "John Robinson, Farewell Address to the Pilgrims, August 5, 1620 (adapted)"
  },
  centinel: {
    passage: `Centinel, no. 5

Fall 1787

. . . But the convention has superadded another power, by which the congress may stamp with the sanction of the constitution every possible law; it is contained in the following clause--"To make all laws which shall be necessary and proper for carrying into execution the foregoing powers, and all other powers vested by this constitution in the government of the United States, or in any department or officer thereof." Whatever law congress may deem necessary and proper for carrying into execution any of the powers vested in them, may be enacted; and by virtue of this clause, they may controul [control] and abrogate [abolish] any and every of the laws of the state governments, on the allegation that they interfere with the execution of any of their powers, and yet these laws will "be made in pursuance [fulfillment] of the constitution," and of course will "be the supreme law of the land, and the judges in every state shall be bound thereby, any thing in the constitution or laws of any state to the contrary notwithstanding."`,
    psource: "Samuel Bryan, 1787; Herbert J. Storing, ed., The Complete Anti-Federalist, University of Chicago Press, 1981 (adapted)"
  },
  jacksonRemoval: {
    passage: `. . . It will relieve the whole State of Mississippi and the western part of Alabama of Indian [Native American] occupancy, and enable those States to advance rapidly in population, wealth, and power. It will separate the Indians from immediate contact with settlements of whites; free them from the power of the States; enable them to pursue happiness in their own way and under their own rude [basic] institutions; will retard [slow] the progress of decay, which is lessening their numbers, and perhaps cause them gradually, under the protection of the Government and through the influence of good counsels, to cast off their savage habits and become an interesting, civilized, and Christian community. . . .`,
    psource: "President Andrew Jackson, Message to Congress on Indian Removal, 1830"
  },
  homestead: {
    imgs: [
      {
        src: "img/q07-homestead-certificate.jpg",
        cap: "Homestead Certificate for Daniel Freeman, 1868",
        alt: "Homestead certificate for Daniel Freeman"
      }
    ]
  },
  plessy: {
    passage: `. . . we think the enforced separation of the races, as applied to the internal commerce of the state, neither abridges the privileges or immunities of the colored man, deprives him of his property without due process of law, nor denies him the equal protection of the laws, within the meaning of the fourteenth amendment . . .`,
    psource: "Plessy v. Ferguson, 1896"
  },
  riis: {
    imgs: [
      {
        src: "img/q11-riis-tenement.jpg",
        cap: "Jacob Riis, How the Other Half Lives, 1890",
        alt: "Jacob Riis photograph of crowded tenement lodgers"
      }
    ]
  },
  maine: {
    imgs: [
      {
        src: "img/q13-uss-maine-before.jpg",
        cap: "USS Maine, photographed circa 1895-98. Source: J.S. Johnston (adapted)",
        alt: "USS Maine before its destruction"
      },
      {
        src: "img/q13-uss-maine-wreck.jpg",
        cap: "U.S. Navy diving crew at work in 1898 on the wreck of the USS Maine. Source: U.S. Naval History and Heritage Command (adapted)",
        alt: "U.S. Navy divers at the wreck of the USS Maine"
      }
    ]
  },
  rooseveltTrusts: {
    passage: `. . . The large corporations, commonly called trusts, though organized in one State, always do business in many States, often doing very little business in the State where they are incorporated. There is utter lack of uniformity in the State laws about them; and as no State has any exclusive interest in or power over their acts, it has in practice proved impossible to get adequate regulation through State action. Therefore, in the interest of the whole people, the Nation should, without interfering with the power of the States in the matter itself, also assume power of supervision and regulation over all corporations doing an interstate business. This is especially true where the corporation derives a portion of its wealth from the existence of some monopolistic element or tendency in its business. There would be no hardship in such supervision; banks are subject to it. . . .`,
    psource: "President Theodore Roosevelt, First Annual Message to Congress, 1901"
  },
  wilsonWar: {
    passage: `. . . When I addressed the Congress on the twenty-sixth of February last I thought that it would suffice to assert our neutral rights with arms, our right to use the seas against unlawful interference, our right to keep our people safe against unlawful violence. But armed neutrality, it now appears, is impracticable. Because submarines are in effect outlaws when used as the German submarines have been used against merchant shipping, it is impossible to defend ships against their attacks as the law of nations has assumed that merchantmen would defend themselves against privateers or cruisers, visible craft giving chase upon the open sea. . . .`,
    psource: "President Woodrow Wilson, Joint Address to Congress, 1917"
  },
  socialSecurity: {
    imgs: [
      {
        src: "img/q19-social-security-poster.jpg",
        cap: "Social Security Board poster, 1936",
        alt: "Social Security Board poster encouraging workers to join old age security"
      }
    ]
  },
  nuremberg: {
    passage: `. . . The privilege of opening the first trial in history for crimes against the peace of the world imposes a grave responsibility. The wrongs which we seek to condemn and punish have been so calculated, so malignant, and so devastating, that civilization cannot tolerate their being ignored, because it cannot survive their being repeated. That four great nations, flushed with victory and stung with injury stay the hand of vengeance and voluntarily submit their captive enemies to the judgment of the law is one of the most significant tributes that Power has ever paid to Reason. . . .`,
    psource: "Justice Robert H. Jackson, Opening Statement, Nuremberg Trials, November 21, 1945"
  },
  communismMap: {
    imgs: [
      {
        src: "img/q21-tide-of-communism.png",
        cap: "Europe, 1946. Source: Thomas A. Bailey, A Diplomatic History of the American People, Prentice-Hall, 1974 (adapted)",
        alt: "Map of Europe in 1946 showing the tide of communism"
      }
    ]
  },
  redScare: {
    passage: `Excerpt 1

. . . I have here in my hand a list of 205--a list of names that were made known to the Secretary of State as being members of the Communist Party and who nevertheless are still working and shaping policy in the State Department. . . .

Source: Joseph McCarthy, Address in Wheeling, West Virginia, February 9, 1950

Excerpt 2

. . . Those of us who shout the loudest about Americanism in making character assassinations are all too frequently those who, by our own words and acts, ignore some of the basic principles of Americanism--

The right to criticize.
The right to hold unpopular beliefs.
The right to protest.
The right of independent thought. . . .`,
    psource: "Margaret Chase Smith, Declaration of Conscience, June 1, 1950"
  },
  herblockCivilRights: {
    imgs: [
      {
        src: "img/q23-herblock-cartoon.jpg",
        cap: '"Tsk Tsk--Somebody Should Do Something About That." Source: Herblock, Washington Post, April 3, 1956 (adapted)',
        alt: "Herblock cartoon showing Eisenhower watching a civil rights crisis fire"
      }
    ]
  },
  nixonWatergate: {
    passage: `. . . In recent months, members of my Administration and officials of the Committee for the Re-Election of the President--including some of my closest friends and most trusted aides--have been charged with involvement in what has come to be known as the Watergate affair. These include charges of illegal activity during and preceding the 1972 Presidential election and charges that responsible officials participated in efforts to cover up illegal activity. . . .`,
    psource: "President Richard M. Nixon, Address to the Nation, April 30, 1973"
  },
  warPowers: {
    imgs: [
      {
        src: "img/q26-war-powers-cartoon.jpg",
        cap: "Source: Jack Ohman, The Oregonian, January 1992",
        alt: "Cartoon contrasting executive and legislative war powers"
      }
    ]
  },
  patriotAct: {
    imgs: [
      {
        src: "img/q27-patriot-act-cartoon.jpg",
        cap: "Source: Dana Summers, Tribune Content Agency, 2015",
        alt: "Cartoon showing the Patriot Act between privacy and security concerns"
      }
    ]
  },
  seqDepression: {
    passage: `Document 2

. . . In every dark hour of our national life a leadership of frankness and vigor has met with that understanding and support of the people themselves which is essential to victory. I am convinced that you will again give that support to leadership in these critical days.

In such a spirit on my part and on yours we face our common difficulties. . . . Farmers find no markets for their produce; the savings of many years in thousands of families are gone.

More important, a host of unemployed citizens face the grim problem of existence, and an equally great number toil with little return. Only a foolish optimist can deny the dark realities of the moment. . . .

Our greatest primary task is to put people to work. This is no unsolvable problem if we face it wisely and courageously. . . .

Finally, in our progress toward a resumption of work we require two safeguards against a return of the evils of the old order; there must be a strict supervision of all banking and credits and investments; there must be an end to speculation with other people's money, and there must be a provision for an adequate but sound currency. . . .`,
    psource: "President Franklin D. Roosevelt, First Inaugural Address, March 4, 1933 (adapted)",
    imgs: [
      {
        src: "img/q29-depression-graphs.png",
        cap: "Document 1: Unemployment, bank failures, and average income/spending, 1929-1933. Source: Historical Statistics of the United States (adapted)",
        alt: "Graphs showing Great Depression unemployment, bank failures, income, and spending"
      }
    ]
  },
  seqErieCanal: {
    passage: `Document 1

President Franklin Pierce appointed James Guthrie as secretary of the Treasury in 1853. Guthrie was responsible for presenting detailed annual reports to Congress about the nation's economy.

. . . As soon as the [Great] Lakes were reached, the line of navigable water was extended through them nearly one thousand miles farther into the interior. The Western states immediately commenced the construction of similar works, for the purpose of opening a communication, from the more remote portions of their territories, with this great water-line. All these works took their direction and character from the Erie Canal, which in this manner became the outlet for almost the greater part of the West.

It is difficult to estimate the influence which this Canal has exerted upon the commerce, growth, and prosperity of the whole country, for it is impossible to imagine what would have been the state of things without it.

But for this work, the West would have held out few inducements [incentives] to the settler, who would have been without a market for his most important products, and consequently without the means of supplying many of his most essential wants. That portion of the country would have remained comparatively unsettled up to the present time; and, where now exist rich and populous communities, we should find an uncultivated wilderness.

The East would have been equally without the elements of growth. The Canal has supplied it with cheap food, and has opened an outlet and created a market for the products of its manufactures and commerce. . . .`,
    psource: 'James Guthrie, Secretary of the Treasury, "The Impact of the Erie Canal," 1853',
    imgs: [
      {
        src: "img/q30-great-lakes-shipping.png",
        cap: "Document 2: Great Lakes Shipping. Source: University of Michigan, Department of Geography (adapted)",
        alt: "Map of Great Lakes shipping routes for iron ore, coal, and grain"
      }
    ]
  },
  prohibitionDoc1: {
    passage: `. . . The prohibition movement was an outgrowth of the temperance crusades of the first half of the nineteenth century. Hard drinking was almost the rule among the Fathers of the Republic. The per capita consumption of spirits in the early days was many times what it is now, and beer drinking was almost unknown. After the War of 1812, there grew up in the New England States a large commerce in West Indian rum, which was consumed extensively, especially in Maine, supplementing the consumption of heavy liquors which were manufactured in those States. Maine alone, in 1827, when her population was 360,000, manufactured 1,333,160 gallons of liquor, and it was sold at retail in nearly every store and tavern. Drunkenness in its worst form, involving disastrous social consequences, was widespread. Sufficient evidence of it was to be found in the number of persons in the jails and poorhouses. . . .`,
    psource: 'L. Ames Brown, "Prohibition," The North American Review, November 1915'
  },
  prohibitionDoc2: {
    imgs: [
      {
        src: "img/q32-anti-saloon-league.jpg",
        cap: "Anti-Saloon League of America poster, 1919",
        alt: "Anti-Saloon League poster showing states that ratified national prohibition"
      }
    ]
  },
  prohibitionDoc3: {
    passage: `. . . Over his first three years in the White House Hoover never wavered in his support for Prohibition. In 1929 he signed the "Five and Ten Law" making every liquor violation a felony, and his Justice Department ramped up federal enforcement. "We enormously increased the jail population," by jailing Prohibition violators Hoover recalled in his memoirs. "We multiplied the fines, padlocking, and confiscations." Yet all this aggressive action he ascribed [attributed] to his duty as a constitutional officer, not to his actual endorsement. On this basic political question, Hoover declined to share his feelings and refused to act on them. . . .

During the 1928 campaign Hoover famously saluted Prohibition as "a great social and economic experiment, noble in motive and far-reaching in purpose." But three years later, surely the test had been run. . . .

By early 1932 little doubt remained as to the mood of the electorate. Respondents to a national mail-in survey conducted by The Literary Digest in February and March endorsed repeal of the Eighteenth Amendment by a four-to-one margin. Residents of Ohio, the birthplace of Prohibition, sent in 112,026 ballots for repeal and just 43,284 for keeping the ban on booze. Kansas was the only state to poll in favor of Prohibition. . . .`,
    psource: "Charles Rappleye, Herbert Hoover in the White House, Simon & Schuster, 2016 (adapted)"
  },
  prohibitionDoc4: {
    passage: `. . . The Women's Organization for National Prohibition Reform (WONPR) was founded in 1929 to show that not all women supported temperance. New York socialite Pauline Sabin led the charge after hearing Ella Boole, the Brooklyn-based leader of the Women's Christian Temperance Union, declare that her support for Prohibition represented "the women of America." On the heels of the successful suffrage campaign that won women the right to vote in 1920, the WONPR, and Sabin in particular, reflected the modern "new woman" of the 1920s. Many members of the WONPR had in fact initially supported the 18th amendment. But they had come to believe that Prohibition had led to a surge in unregulated and particularly underage drinking, as well as a growing sense of distrust for the rule of law. The WONPR's opposition to Prohibition, just like the 18th amendment itself, was not only about drinking, but about the government's role in regulating behavior.

The WONPR did a lot of what we think of now as typical political campaign activities: members attended meetings and gave speeches at rallies, went door-to-door to recruit new supporters, used new technology to spread their message--at the time radio, and lobbied politicians. Wealthy women had founded the organization, and proved able to raise funds even after the Stock Market Crash of 1929 ushered in the Great Depression. From its headquarters in New York City, the organization also gained publicity by organizing events such as a motorcade through New York State. . . .`,
    psource: 'Sarah Seidman, "The New York Women Who Dismantled Prohibition," Museum of the City of New York, December 15, 2015'
  },
  prohibitionDoc5: {
    passage: `. . . The end of the Prohibition era marked the demise of a moral crusade meant to impose a uniform standard of social behavior in the United States. Unrealistic and unforgiving, Prohibition had allowed a vocal minority to regulate the personal habits of all Americans, especially those who lived and worked in cities like New York. While the desire of the dry crusade to uplift and improve the United States by banning alcohol and the saloon had in some ways been understandable in the Progressive era that spawned the Prohibition movement, the shortcomings of the dry crusade manifested themselves as soon as the dry experiment had begun. Anachronistic [outdated] and unworkable, the Prohibition experiment was ill suited to the diversity and dynamic of the modern United States, which by the 1920s had grown too large and too varied a nation to be governed by an impulse as intrusive as the dry crusade. Despite the force of federal law, the use of authoritarian tactics to enforce it, and the expenditure of millions of dollars a year, in fourteen years Prohibition succeeded neither in changing Americans' behavior nor in eliminating the problems caused by alcohol abuse. When Prohibition failed, and it did so spectacularly, it revealed the limits of moral reform movements, and specifically the paternalistic, prejudiced, and undemocratic ideals behind the dry crusade. . . .`,
    psource: "Michael A. Lerner, Dry Manhattan: Prohibition in New York City, Harvard University Press, 2007"
  },
  prohibitionDoc6: {
    passage: "Although President Franklin Roosevelt supported repeal of Prohibition, he wanted to ban the operation of saloons, bars, and taverns in the United States.",
    imgs: [
      {
        src: "img/q36-nyt-repeal.jpg",
        cap: "New York Times front page, December 6, 1933",
        alt: "New York Times front page reporting the repeal of prohibition"
      }
    ]
  }
};

const ALL_CARDS = [
{
  ...STIMULI.robinson,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. Based on this excerpt, what is the author's point of view about the role of government in the Plymouth Colony?",
  "choices": [
    "Separate leaders for church and state should be elected",
    "People have the right to rebel against the government",
    "The power to govern belongs to the people",
    "Rulers must be given absolute authority to govern"
  ],
  "answer": 2,
  "back": "(3) The power to govern belongs to the people — Robinson says leaders are 'to be chosen by you into office of government,' meaning self-government by consent of the governed."
},
{
  ...STIMULI.robinson,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. Which document most closely reflects the ideas about government expressed by John Robinson in this address?",
  "choices": [
    "Mayflower Compact",
    "Maryland Toleration Act",
    "Stamp Act",
    "Townshend Acts"
  ],
  "answer": 0,
  "back": "(1) Mayflower Compact — the Pilgrims' 1620 agreement to form a self-governing 'civil body politic' and obey laws made for the common good."
},
{
  ...STIMULI.centinel,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. This passage was written during the",
  "choices": [
    "debate over the adoption of the Articles of Confederation",
    "ratification of the United States Constitution",
    "nullification crisis in Virginia and Kentucky",
    "controversy over the War of 1812"
  ],
  "answer": 1,
  "back": "(2) ratification of the United States Constitution — Centinel was an Anti-Federalist essay written in fall 1787 during the ratification debate."
},
{
  ...STIMULI.centinel,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Which claim about the proposed United States Constitution is being made by the author of this passage?",
  "choices": [
    "The new Constitution gave the states enough power to avoid tyranny",
    "The elastic clause would give too much power to Congress",
    "The system of federalism is best for the new nation",
    "The two-party system would lead to rebellion in the future"
  ],
  "answer": 1,
  "back": "(2) The elastic (necessary and proper) clause would give too much power to Congress — a classic Anti-Federalist fear that Congress could 'controul and abrogate' state laws."
},
{
  ...STIMULI.jacksonRemoval,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. Which statement best describes the claims made by President Andrew Jackson in this passage?",
  "choices": [
    "The U.S. government must obey past treaties made with Native Americans",
    "White settlers must work harder to get along with Native Americans",
    "Native Americans had agreed to assimilate into American society",
    "The relocation of Native Americans will assist both them and white settlers"
  ],
  "answer": 3,
  "back": "(4) The relocation of Native Americans will assist both them and white settlers — Jackson claims removal will free Mississippi/Alabama for whites while supposedly 'protecting' and 'civilizing' Native Americans."
},
{
  ...STIMULI.jacksonRemoval,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. What was one result of President Jackson's message to Congress on Indian Removal?",
  "choices": [
    "Trail of Tears",
    "annexation of Texas",
    "Dred Scott decision",
    "Grange Movement"
  ],
  "answer": 0,
  "back": "(1) Trail of Tears — the Indian Removal Act (1830) led to the forced relocation of the Cherokee and other nations west of the Mississippi; thousands died on the journey."
},
{
  ...STIMULI.homestead,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. This certificate supports a national commitment to what policy?",
  "choices": [
    "Monroe Doctrine",
    "isolationism",
    "Manifest Destiny",
    "détente"
  ],
  "answer": 2,
  "back": "(3) Manifest Destiny — the Homestead Act gave 160 acres of free public land to settlers, encouraging westward expansion across the continent."
},
{
  ...STIMULI.homestead,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. What area of the United States was most affected by the program described in this document?",
  "choices": [
    "the Southwest deserts",
    "the Great Plains",
    "the Hudson Valley",
    "the Pacific Northwest"
  ],
  "answer": 1,
  "back": "(2) the Great Plains — most homestead claims were on the open grasslands of the Plains states (e.g., Nebraska, Kansas, the Dakotas)."
},
{
  ...STIMULI.plessy,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. Which phrase is most closely associated with the ideas expressed in this excerpt?",
  "choices": [
    "'separate but equal'",
    "'clear and present danger'",
    "'all men are created equal'",
    "'necessary and proper'"
  ],
  "answer": 0,
  "back": "(1) 'separate but equal' — Plessy v. Ferguson (1896) ruled that racial segregation was constitutional if facilities were equal."
},
{
  ...STIMULI.plessy,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. What was an effect of the Supreme Court's decision in Plessy v. Ferguson?",
  "choices": [
    "The Freedmen's Bureau was established",
    "The Underground Railroad was formed",
    "The practice of segregation was reinforced",
    "Voting rights were enhanced by grandfather clauses"
  ],
  "answer": 2,
  "back": "(3) The practice of segregation was reinforced — the ruling gave legal backing to Jim Crow segregation laws until Brown v. Board of Education (1954) overturned it."
},
{
  ...STIMULI.riis,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. The purpose of this photograph was to",
  "choices": [
    "raise public awareness for conditions in the tenements",
    "support unrestricted immigration",
    "expose the unsafe working conditions in factories",
    "promote the use of child labor"
  ],
  "answer": 0,
  "back": "(1) raise public awareness for conditions in the tenements — Riis was a muckraker who used photography to expose urban poverty and overcrowded slum housing."
},
{
  ...STIMULI.riis,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. Individuals who were influenced by the work of Jacob Riis would most likely agree that",
  "choices": [
    "federal income taxes should be eliminated",
    "monopolistic business practices should be encouraged",
    "labor unions should be banned",
    "social and economic reforms should be addressed by the government"
  ],
  "answer": 3,
  "back": "(4) social and economic reforms should be addressed by the government — Riis inspired Progressive Era reforms such as tenement housing laws."
},
{
  ...STIMULI.maine,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Photographs such as these were often published to",
  "choices": [
    "increase newspaper sales",
    "discourage investigative journalists",
    "support restrictions on the freedom of the press",
    "pressure reporters to reveal their sources"
  ],
  "answer": 0,
  "back": "(1) increase newspaper sales — yellow journalism (Hearst and Pulitzer) sensationalized the Maine explosion to sell papers."
},
{
  ...STIMULI.maine,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. What was one outcome of the destruction of the USS Maine?",
  "choices": [
    "Spanish officials responsible were put on trial",
    "Spain strengthened its control over Cuba",
    "Public support for a declaration of war against Spain increased",
    "Spain paid to rebuild the ship and compensate the victims"
  ],
  "answer": 2,
  "back": "(3) Public support for a declaration of war against Spain increased — 'Remember the Maine!' helped push the U.S. into the Spanish-American War (1898)."
},
{
  ...STIMULI.rooseveltTrusts,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. Which constitutional provision supports President Theodore Roosevelt's view regarding large corporations?",
  "choices": [
    "reserved powers of the states",
    "presidential veto",
    "eminent domain",
    "congressional power to regulate interstate commerce"
  ],
  "answer": 3,
  "back": "(4) congressional power to regulate interstate commerce — the Commerce Clause justified federal regulation of corporations operating across state lines."
},
{
  ...STIMULI.rooseveltTrusts,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. Which United States economic policy did President Roosevelt's message challenge?",
  "choices": [
    "mercantilism",
    "laissez-faire",
    "protectionism",
    "supply-side"
  ],
  "answer": 1,
  "back": "(2) laissez-faire — TR rejected the hands-off approach by calling for federal supervision and regulation of trusts."
},
{
  ...STIMULI.wilsonWar,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. In this address, why does President Woodrow Wilson conclude that neutrality is no longer a practical United States policy?",
  "choices": [
    "The German government has invaded U.S. territory",
    "United States ships and citizens are being attacked by German submarines",
    "The Allies have committed several acts of war",
    "Germany broke a series of peace treaties"
  ],
  "answer": 1,
  "back": "(2) United States ships and citizens are being attacked by German submarines — Germany's unrestricted submarine warfare made armed neutrality 'impracticable.'"
},
{
  ...STIMULI.wilsonWar,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. How did Congress respond to President Wilson's 1917 address?",
  "choices": [
    "They sent negotiators to meet with representatives",
    "They voted to declare war against Germany",
    "They placed an embargo on all goods shipped to and from Germany",
    "They asked the League of Nations to stop Germany's use of submarine warfare"
  ],
  "answer": 1,
  "back": "(2) They voted to declare war against Germany — Congress declared war in April 1917, bringing the U.S. into World War I."
},
{
  ...STIMULI.socialSecurity,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. The purpose of this 1936 poster was to encourage Americans to",
  "choices": [
    "sign up for government jobs",
    "receive low-cost medical insurance",
    "enroll in a national retirement system",
    "exercise their right to vote in national elections"
  ],
  "answer": 2,
  "back": "(3) enroll in a national retirement system — the poster urged workers to apply for Social Security account numbers under the Social Security Act (1935), a New Deal program."
},
{
  ...STIMULI.nuremberg,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. The purpose of the Nuremberg Trials referred to in this passage was to",
  "choices": [
    "force Germany to pay war reparations",
    "punish Germany for the blitzkrieg military campaign through Europe",
    "warn the German people about the Nazi party",
    "hold German leaders accountable for crimes against humanity"
  ],
  "answer": 3,
  "back": "(4) hold German leaders accountable for crimes against humanity — Nazi leaders were tried for war crimes including the Holocaust, establishing that individuals are responsible under international law."
},
{
  ...STIMULI.communismMap,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. What was the United States response to the situation shown on this map?",
  "choices": [
    "providing financial aid to Western European nations",
    "immediate military action against the Soviet Union",
    "a call for the United Nations to send forces to Eastern Europe",
    "withdrawal of financial support for NATO"
  ],
  "answer": 0,
  "back": "(1) providing financial aid to Western European nations — the Marshall Plan (1948) and Truman Doctrine aimed to contain the spread of communism."
},
{
  ...STIMULI.redScare,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. A historian would find these excerpts useful for studying the",
  "choices": [
    "impact of the Red Scare on civil liberties",
    "opposition to New Deal reforms",
    "debates over international affairs",
    "concerns over executive cabinet appointments"
  ],
  "answer": 0,
  "back": "(1) impact of the Red Scare on civil liberties — McCarthy's accusations vs. Smith's defense of basic American freedoms illustrate the McCarthyism debate."
},
{
  ...STIMULI.herblockCivilRights,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. This cartoonist is criticizing President Dwight D. Eisenhower for failing to",
  "choices": [
    "provide government support for public housing",
    "promote equality for African Americans",
    "address natural disasters in the South",
    "enforce strict public safety measures"
  ],
  "answer": 1,
  "back": "(2) promote equality for African Americans — Herblock depicts Eisenhower as a fire chief passively watching the civil rights crisis burn instead of acting."
},
{
  ...STIMULI.herblockCivilRights,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. In 1957, President Eisenhower dealt with a civil rights crisis in Little Rock, Arkansas, by sending troops to",
  "choices": [
    "enforce a Supreme Court decision on school integration",
    "protect freedom riders on interstate buses",
    "arrest leaders of the Ku Klux Klan",
    "stop the violence during voter registration drives"
  ],
  "answer": 0,
  "back": "(1) enforce a Supreme Court decision on school integration — Eisenhower sent the 101st Airborne to escort the Little Rock Nine into Central High School, enforcing Brown v. Board of Education (1954)."
},
{
  ...STIMULI.nixonWatergate,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. What was one outcome associated with the Watergate affair?",
  "choices": [
    "The Vietnam War continued to expand",
    "Trade with China expanded rapidly",
    "Support for immigration reform increased",
    "President Nixon eventually resigned from the presidency"
  ],
  "answer": 3,
  "back": "(4) President Nixon eventually resigned from the presidency — facing impeachment over the cover-up, Nixon resigned in August 1974, the only president ever to do so."
},
{
  ...STIMULI.warPowers,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. Which statement is best supported by the idea expressed in this cartoon?",
  "choices": [
    "War powers are divided equally between the branches",
    "The legislative branch has refused to exercise its war powers",
    "The war powers of the executive branch have expanded",
    "The war powers of the executive branch are often checked by the judicial branch"
  ],
  "answer": 2,
  "back": "(3) The war powers of the executive branch have expanded — the cartoon shows the executive branch's war powers as strong and growing while Congress's have withered."
},
{
  ...STIMULI.patriotAct,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. Which problem is represented in this cartoon?",
  "choices": [
    "Americans were confused by the wording of the new law",
    "The Patriot Act did not apply to enough people",
    "The Patriot Act, while keeping the nation safe, would violate the rights of individuals",
    "Individuals were concerned the Patriot Act did not make the nation safe enough"
  ],
  "answer": 2,
  "back": "(3) The Patriot Act, while keeping the nation safe, would violate the rights of individuals — the cartoon captures the privacy vs. security debate over expanded government surveillance."
},
{
  ...STIMULI.patriotAct,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. Which event most directly led to the passage of the Patriot Act?",
  "choices": [
    "Iraq's invasion of Kuwait",
    "end of the Cold War",
    "Soviet launching of Sputnik",
    "terrorist attacks on the United States on September 11, 2001"
  ],
  "answer": 3,
  "back": "(4) the terrorist attacks of September 11, 2001 — the Patriot Act (October 2001) expanded surveillance and law-enforcement powers to fight terrorism."
},
{
  ...STIMULI.seqDepression,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Task: Describe the historical context AND identify and explain the relationship (Cause and Effect, Similarity/Difference, or Turning Point) between the documents.",
  "back": "Model answer — Context: the Great Depression. After the October 1929 stock market crash, the economy collapsed: unemployment rose to about 13 million (roughly 25%), thousands of banks failed and wiped out savings, and average income and consumer spending fell sharply, while Hoover's limited response left conditions worsening. Relationship: Cause and Effect — the economic collapse in Document 1 caused the response in Document 2. FDR's inaugural promised to put people to work and impose 'strict supervision of all banking and credits and investments,' which became the New Deal: the bank holiday and Emergency Banking Act, FDIC, SEC, CCC, and WPA (relief, recovery, reform). (Could also be framed as a Turning Point: the Depression ended laissez-faire government and began an era of federal responsibility for the economy.)"
},
{
  ...STIMULI.seqErieCanal,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 1's reliability as evidence.",
  "back": "Model answer — Context: the Erie Canal opened in 1825, linking the Great Lakes to the Hudson River and New York City. It cut shipping costs dramatically, spurred westward settlement and the Market Revolution, made NYC the nation's leading port, gave western farmers a market for their crops, and gave the East cheap food and markets for manufactured goods — the Great Lakes shipping network in Document 2 grew from this canal-era trade. Reliability: Guthrie's audience was Congress and his purpose was an official Treasury report on the economy, so his facts about trade and growth are credible; but his point of view is strongly celebratory (the West would be 'uncultivated wilderness' without it), so his sweeping claims overstate the canal as the sole cause of growth and should be checked against other sources."
},
{
  ...STIMULI.prohibitionDoc1,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — L. Ames Brown, 'Prohibition,' North American Review, 1915). According to Brown, what is ONE historical circumstance surrounding the issue of Prohibition?",
  "back": "Heavy drinking was widespread in early America — per capita consumption of spirits was many times later levels, a large rum trade grew after the War of 1812, and drunkenness 'in its worst form' caused disastrous social consequences (seen in the jails and poorhouses). Prohibition grew out of the temperance crusades of the first half of the 1800s."
},
{
  ...STIMULI.prohibitionDoc2,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — Anti-Saloon League ratification map and statement, 1919). According to this poster, what is ONE historical circumstance surrounding the issue of Prohibition?",
  "back": "By January 31, 1919, all but four states had ratified the National Prohibition (18th) Amendment — the result of more than 25 years of organized effort by the Anti-Saloon League, which called it the greatest victory for moral reform since the Declaration of Independence and now sought strict enforcement legislation."
},
{
  ...STIMULI.prohibitionDoc3,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Charles Rappleye, Herbert Hoover in the White House, 2016). Based on this document, what was ONE effort to address the issue of Prohibition?",
  "back": "President Hoover enforced Prohibition aggressively: in 1929 he signed the 'Five and Ten Law' making every liquor violation a felony, and his Justice Department increased federal enforcement — multiplying fines, padlockings, confiscations, and jailings of violators. (By 1932, public opinion had swung heavily toward repeal — the Literary Digest poll favored repeal four to one.)"
},
{
  ...STIMULI.prohibitionDoc4,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Sarah Seidman, 'The New York Women Who Dismantled Prohibition,' 2015). According to Seidman, what was ONE effort to address Prohibition?",
  "back": "The Women's Organization for National Prohibition Reform (WONPR), founded in 1929 and led by Pauline Sabin, campaigned for repeal — attending meetings, giving speeches at rallies, going door-to-door to recruit supporters, using radio to spread its message, lobbying politicians, and raising funds even during the Depression. Members believed Prohibition had increased unregulated and underage drinking and distrust for the rule of law."
},
{
  ...STIMULI.prohibitionDoc5,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5 — Michael A. Lerner, Dry Manhattan, 2007). According to Lerner, what has been ONE impact of the efforts to address Prohibition?",
  "back": "Prohibition failed: despite federal law, authoritarian enforcement tactics, and millions of dollars a year, fourteen years of Prohibition neither changed Americans' drinking behavior nor eliminated the problems of alcohol abuse. Its spectacular failure revealed the limits of moral reform movements and the paternalistic, prejudiced, undemocratic ideals behind the dry crusade."
},
{
  ...STIMULI.prohibitionDoc6,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — New York Times front page, December 6, 1933). Based on this document, what is ONE impact of the efforts to address Prohibition?",
  "back": "Prohibition was repealed — the 21st Amendment was ratified on December 5, 1933 (Utah cast the deciding vote), ending national Prohibition. Effects shown: celebrations (with 'quiet restraint'), speakeasies closing, legal liquor returning (though scarce), and recovery of about $227 million a year in alcohol taxes."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Prohibition). Write an essay that: describes the historical circumstances surrounding Prohibition, explains at least TWO efforts by individuals/groups/governments to address it, and discusses the impact on the U.S./American society (use at least 4 documents + outside info).",
  "back": "Essay outline — Circumstances (Docs 1, 2): widespread heavy drinking and its social damage fueled the 1800s temperance movement (WCTU, Anti-Saloon League); Progressive Era reform energy and anti-German WWI sentiment led to the 18th Amendment (ratified 1919) and the Volstead Act. Efforts (pick 2+): (a) government enforcement — Hoover's Five and Ten Law and expanded federal prosecution (Doc 3); (b) repeal campaigns — Pauline Sabin's WONPR rallies, door-to-door recruiting, radio, and lobbying (Doc 4); (c) the Anti-Saloon League's 25-year ratification drive (Doc 2). Impact (Docs 5, 6 + outside info): Prohibition failed to change behavior; it bred speakeasies, bootlegging, and organized crime (Al Capone) and disrespect for law; the 21st Amendment (1933) repealed it — the only amendment to repeal another — restoring tax revenue during the Depression and showing the limits of legislating morality."
}
];
