// Shared card deck for the August 2024 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-82024-sk.pdf).
const STIMULI = {
  earlyPopulations: {
    imgs: [
      {
        src: "img/q01-early-american-populations.png",
        cap: "Early American Populations (Estimated), c.1610 vs. c.1700 — European populations rising (English in Virginia 100 to 72,000) while Native populations collapse (Powhatans 15,000 to 1,000; Hurons 20,000 to hundreds; Pueblos 60,000 to 14,000). Source: Smithsonian National Museum of American History (adapted)",
        alt: "Chart comparing European and Native American populations around 1610 and 1700, showing European numbers growing sharply while Native numbers fall dramatically"
      }
    ]
  },
  servantsNotice: {
    passage: `JUST ARRIVED, The Justitia, Captain Kidd, With About ONE HUNDRED AND THIRTY healthy SERVANTS,

CONSISTING of Men, Women, and Boys; among whom are TRADESMEN, such as Carpenters and Joiners, Bricklayers and Plaisteres [plasterers], Shoemakers, Barbers and Hair Dressers, several Weavers, Cutlers, Curriers, and Bakers, a Tanner, a Tailor . . . a Blacksmith, a Painter, a Printer, a Bookbinder . . . There are also many Farmers, and other Country Labourers . . . The Sale will commence at Leeds Town, on Wednesday the 22d Instant (March) and be continued till all are sold. . . .`,
    psource: "Virginia Gazette, March 18, 1775 (adapted)"
  },
  bostonPortAct: {
    passage: `. . . At a very large and respectable meeting of the freeholders and freemen of the city and county of Philadelphia, on June 18, 1774. . . .

I. Resolved, That the act of parliament, for shutting up the port of Boston, is unconstitutional, oppressive to the inhabitants of that town, dangerous to the liberties of the British colonies . . .

II. That a congress of deputies from the several colonies, in North America, is the most probable and proper mode of procuring [obtaining] relief for our suffering brethren, obtaining redress of American grievances, securing our rights and liberties . . .`,
    psource: "Pennsylvania Resolutions on the Boston Port Act, June 20, 1774"
  },
  antifederalist46: {
    passage: `. . . But to the question—without force what can restrain the Congress from making such laws as they please? What limits are there to their authority? I fear none at all. For surely it cannot be justly said that they have no power but what is expressly given to them, when by the very terms of their creation they are vested with the powers of making laws in all cases—necessary and proper; when from the nature of their power, they must necessarily be the judges what laws are necessary and proper. . . .`,
    psource: "Antifederalist No. 46, November 2, 1788"
  },
  marbury: {
    passage: `. . . It is emphatically the province and duty of the judicial department to say what the law is. . . . So if a law be in opposition to the constitution . . . the court must determine which of these conflicting rules governs the case; This is of the very essence of judicial duty.

If, then, the courts are to regard the constitution, and the constitution is superior to any ordinary act of the legislature, the constitution, and not such ordinary act, must govern the case to which they both apply. . . .`,
    psource: "Chief Justice John Marshall, majority opinion, Marbury v. Madison, February 24, 1803"
  },
  douglass: {
    passage: `. . . I never saw my mother, to know her as such, more than four or five times in my life; and each of these times was very short in duration, and at night. . . . She was a field hand, and a whipping is the penalty of not being in the field at sunrise . . . She died when I was about seven years old . . . I was not allowed to be present during her illness, at her death, or burial. . . . I received the tidings of her death with much the same emotions I should have probably felt at the death of a stranger. . . .`,
    psource: "Frederick Douglass, Narrative of the Life of Frederick Douglass, 1845"
  },
  shermanAct: {
    passage: `Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled,

Section 1. Every contract, combination in the form of trust or otherwise, or conspiracy in restraint of trade or commerce among the several States, or with foreign nations, is hereby declared to be illegal. Every person who shall make any such contract or engage in any such combination or conspiracy, shall be deemed guilty of a misdemeanor . . .`,
    psource: "The Sherman Antitrust Act, December 2, 1890"
  },
  immigrationGraph: {
    imgs: [
      {
        src: "img/q15-us-immigration-1820-2009.png",
        cap: "United States Immigration, 1820-2009, by decade — peaking near 8.2 million in 1900-1909, dropping during the 1920s-1930s, and rising again after the 1960s. Source: U.S. Department of Homeland Security (adapted)",
        alt: "Bar graph of U.S. immigration by decade from 1820 to 2009, peaking around 1900-1909 and again at the end of the century, with a sharp drop in the 1920s-1940s"
      }
    ]
  },
  wilsonLeagueCartoon: {
    imgs: [
      {
        src: "img/q17-wilson-league-cartoon.png",
        cap: "\"Touch Not a Single Bough [Branch]\" — Woodrow Wilson and the Senate's treaty power. Source: Literary Digest, August 9, 1919 (adapted)",
        alt: "1919 cartoon about President Wilson and the U.S. Senate's role in approving the Treaty of Versailles and the League of Nations"
      }
    ]
  },
  perkins: {
    passage: `. . . She reminded FDR of her role in the Civilian Conservation Corps, the Public Works Program, and the labor aspects of the National Industrial Recovery Act. . . . he had entrusted her with the . . . establishment of unemployment insurance, old-age pensions, and the welfare program. She described how she had reduced child labor in America, minimized workplace accidents . . . The Fair Labor Standards Act brought about the minimum wage, the concept of the forty-hour workweek, and paying for overtime. . . .`,
    psource: "Kirstin Downey, The Woman Behind the New Deal: The Life of Frances Perkins, Doubleday, 2009"
  },
  marshall: {
    passage: `. . . It is logical that the United States should do whatever it is able to do to assist in the return of normal economic health in the world . . . Our policy is directed not against any country or doctrine but against hunger, poverty, desperation and chaos. Its purpose should be the revival of a working economy in the world so as to permit the emergence of political and social conditions in which free institutions can exist. . . . Any government which maneuvers to block the recovery of other countries cannot expect help from us. . . .`,
    psource: "Secretary of State George C. Marshall, Harvard University, June 1947"
  },
  chaseSmith: {
    passage: `. . . Those of us who shout the loudest about Americanism in making character assassinations are all too frequently those who, by our own words and acts, ignore some of the basic principles of Americanism:
The right to criticize.
The right to hold unpopular beliefs.
The right to protest.
The right of independent thought.

. . . The American people are sick and tired of being afraid to speak their minds lest they be politically smeared as "Communists" or "Fascists" by their opponents. . . .`,
    psource: "Senator Margaret Chase Smith, Declaration of Conscience Speech, June 1, 1950"
  },
  brown: {
    passage: `. . . Today, education is perhaps the most important function of state and local governments. . . . Such an opportunity, where the state has undertaken to provide, is a right which must be made available to all on equal terms.

We come then to the question presented: does segregation of children in public schools solely on the basis of race, even though the physical facilities and other "tangible" factors may be equal, deprive the children of the minority group of equal educational opportunities? We believe that it does. . . .`,
    psource: "Brown v. Board of Education of Topeka, May 17, 1954"
  },
  patriotAct: {
    imgs: [
      {
        src: "img/q27-patriot-act-signing.jpg",
        cap: "President Bush Signs the USA Patriot Act. Source: Eric Draper, White House, October 26, 2001",
        alt: "Photograph of President George W. Bush signing the USA Patriot Act in October 2001"
      }
    ]
  },
  seqDoubleV: {
    passage: `Document 1

DEAR EDITOR: . . . Being an American of dark complexion . . . these questions flash through my mind: "Should I sacrifice my life to live half American?" . . . "Will colored Americans suffer still the indignities that have been heaped upon them in the past?" . . . let colored Americans adopt the double VV for a double victory: The first V for victory over our enemies from without, the second V for victory over our enemies within. . . .
Source: James G. Thompson, letter to the editor, Pittsburgh Courier, 1942 (adapted)

Document 2

. . . there still are examples—flagrant examples—of discrimination which are utterly contrary to our ideals. . . . We cannot be satisfied until all our people have equal opportunities for jobs, for homes, for education, for health, and for political expression, and until all our people have equal protection under the law. . . . I recommend . . . [s]trengthening existing civil rights statutes . . . Providing Federal protection against lynching . . . Protecting more adequately the right to vote . . .
Source: President Harry Truman, "Special message to the Congress on Civil Rights," February 2, 1948`
  },
  seqNorthSouth: {
    passage: `Document 1

The following excerpt was written by Hinton Rowan Helper, the son of a North Carolina farmer.
. . . the causes which have impeded [slowed] the progress and prosperity of the South . . . sunk a large majority of our people in galling [distressing] poverty and ignorance . . . entailed [imposed] upon us a humiliating dependence on the Free States . . . may all be traced to one common source . . . —Slavery! . . .
Source: Hinton Helper, The Impending Crisis of the South: How To Meet It, 1857`,
    imgs: [
      {
        src: "img/q30-north-south-resources.png",
        cap: "Document 2: Selected Resources of the North and South, 1861 — the North held roughly 92% of manufactured goods and industry, 71% of railroad track, and 63% of population. Source: James West Davidson et al., The American Nation, Prentice Hall, 2000; 1860 Census (adapted)",
        alt: "Table comparing Northern and Southern resources in 1861 (farmland, railroads, manufacturing, factories, workers, population), showing the North's overwhelming industrial advantage"
      }
    ]
  },
  clEspionage: {
    passage: `Document 1a

Before the declaration of war in 1917 . . . once Congress declared war, there was considerable pressure to stifle [quiet] dissent about the war. Elihu Root . . . said in early 1917, "We must have no criticism now." . . . Congress enacted the Espionage Act of 1917, which made acts of insubordination and disloyalty punishable by prison terms of up to twenty years. . . . More than 2,000 people were prosecuted under the act.
Source: Tony Mauro, Illustrated Great Decisions of the Supreme Court, CQ Press, 2006

Document 1b

. . . World War I saw the development of a much more consequential opposition . . . powerful enough to inspire a massive government crackdown that included thousands of arrests, the suppression of newspapers and organizations . . . The government campaign to suppress antiwar opposition turned into a generalized red scare that continued into the 1920s. . . .
Source: Pacific Northwest Labor and Civil Rights Projects, University of Washington, 2009`
  },
  clZinn: {
    passage: `Document 2a

Congress passed, and Wilson signed, in June of 1917, the Espionage Act. From its title one would suppose it was an act against spying. However, it had a clause that provided penalties up to twenty years in prison for "Whoever, when the United States is at war, shall willfully cause or attempt to cause insubordination, disloyalty, mutiny, or refusal of duty in the military or naval forces . . . or shall willfully obstruct the recruiting or enlistment service . . ." . . . The Espionage Act was used to imprison Americans who spoke or wrote against the war.
Source: Howard Zinn, A People's History of the United States, Harper Perennial, 2001`,
    imgs: [
      {
        src: "img/q32-mccay-liberty-cartoon.png",
        cap: "Document 2b: \"Must Liberty's Light Go Out?\" Source: Winsor McCay, New York American, May 3, 1917 (adapted)",
        alt: "1917 cartoon warning that wartime restrictions threaten to extinguish the torch of the Statue of Liberty / individual freedom"
      }
    ]
  },
  clLaFollette: {
    passage: `. . . More than all, the citizen and his representative in Congress in time of war must maintain his right of free speech. . . . I am contending . . . for the great fundamental right of the sovereign people of this country to make their voice heard and have that voice heeded upon the great questions arising out of this war, including not only how the war shall be prosecuted [conducted] but the conditions upon which it may be terminated . . .`,
    psource: "Senator Robert M. La Follette Sr., \"Free Speech in Wartime,\" October 6, 1917, Congressional Record"
  },
  clSchenck: {
    passage: `. . . One of the cases, Schenck v. United States, began . . . when Charles Schenck, a prominent socialist, was arrested and tried for printing and distributing a leaflet that urged his fellow Americans to resist the draft. . . . In all three Espionage Act cases, the justices voted unanimously to uphold the convictions. . . . Holmes . . . concluded, "is whether the words used are used in such a nature as to create a clear and present danger that they will bring about the substantive [real] evils that Congress has a right to prevent."`,
    psource: "Haynes, Chaltain, and Glisson, A Documentary History Of First Amendment Rights in America, Oxford University Press, 2006"
  },
  clHarding: {
    passage: `Eugene Debs was arrested for giving an antiwar speech and later convicted of violating the Espionage Act. . . . In 1921, President Warren G. Harding made the decision to release Debs from prison.
. . . President Harding's pardon of Eugene Debs and other political prisoners . . . served as a check on potential abuse by both coequal branches of government. Harding's strategic use of the presidential pardon helped undo the damage done by a war-frenzied Congress in enacting the Espionage and Sedition Acts, which had been compounded by the failure of the Supreme Court to defend the First Amendment . . .`,
    psource: "Ken Gormley, The Presidents and the Constitution, New York University Press, 2016 (adapted)"
  },
  clStone: {
    passage: `. . . During World War II, President Roosevelt ordered the internment of more than 110,000 individuals of Japanese descent . . . for no reason other than their race. Faced with the threat of Soviet espionage . . . during the Cold War, the government instituted loyalty programs, legislative investigations, blacklists, and criminal prosecutions . . . It was an era scarred by the actions of Senator Joseph McCarthy and the House Un-American Activities Committee. During the Vietnam War, the Johnson and Nixon administrations initiated surreptitious [secret] programs of surveillance and infiltration . . . to disrupt and neutralize those who opposed the war . . .`,
    psource: "Geoffrey R. Stone, War and Liberty: An American Dilemma, W. W. Norton & Company, 2007"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.earlyPopulations,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. Which statement is best supported by the information in this chart?",
  "choices": [
    "There was steady growth of both European and Native American populations.",
    "Native Americans aided Europeans for almost 90 years.",
    "European colonization had devastating effects on Native Americans.",
    "The French and Indian War impacted both Europeans and Native Americans."
  ],
  "answer": 2,
  "back": "(3) European colonization had devastating effects on Native Americans — as European numbers soared, Native populations collapsed (Powhatans 15,000 to 1,000; Hurons 20,000 to hundreds)."
},
{
  ...STIMULI.earlyPopulations,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. What was a main cause of the population trend shown in this chart?",
  "choices": [
    "the use of indentured servants in the early British colonies",
    "disputes between the British and the French over land",
    "the growing numbers of enslaved Africans brought to the American colonies",
    "the diseases and technology brought by Europeans to the Americas"
  ],
  "answer": 3,
  "back": "(4) the diseases and technology brought by Europeans to the Americas — Old World diseases like smallpox, to which Native peoples had no immunity, devastated their populations."
},
{
  ...STIMULI.servantsNotice,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. Notices such as this, published in the Virginia Gazette in 1775, demonstrate that",
  "choices": [
    "a skilled labor force was emigrating to British North America",
    "impoverished Europeans were being denied entry to America",
    "an extreme shortage of plantation workers existed in the south",
    "northern economies were growing at a faster rate than those in the south"
  ],
  "answer": 0,
  "back": "(1) a skilled labor force was emigrating to British North America — the notice advertises servants including carpenters, weavers, blacksmiths, printers, and other tradesmen."
},
{
  ...STIMULI.servantsNotice,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Based on this notice, what was the main reason immigrants were willing to enter into years of indentured servitude in British North America?",
  "choices": [
    "They faced harsh punishments for petty criminal acts.",
    "They believed they could eventually prosper in the colonies.",
    "They could immediately pay off the debt they owed to colonial sponsors.",
    "They were facing severe hardship as a result of the Great Famine."
  ],
  "answer": 1,
  "back": "(2) They believed they could eventually prosper in the colonies — indentured servants traded years of labor for passage and the hope of opportunity once their term ended."
},
{
  ...STIMULI.bostonPortAct,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. The June 1774 meeting of Philadelphia freemen was called as a direct result of",
  "choices": [
    "Great Britain's punishment of Boston for the destruction of British tea",
    "establishing a committee to elect representatives to speak to the British king",
    "pressure from loyalists to resolve tensions between Pennsylvania and Great Britain",
    "the creation of an armed colonial militia in New England"
  ],
  "answer": 0,
  "back": "(1) Great Britain's punishment of Boston for the destruction of British tea — the Boston Port Act (one of the Intolerable Acts) closed Boston Harbor after the Boston Tea Party."
},
{
  ...STIMULI.bostonPortAct,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. How did the Pennsylvania Resolutions move the colonies toward independence?",
  "choices": [
    "They closed the harbor to international trade.",
    "They censured Boston for destroying valuable British property.",
    "They ordered that citizens of Pennsylvania contribute to relief for fellow colonists.",
    "They aided the process of unifying the colonists in defense of traditional rights."
  ],
  "answer": 3,
  "back": "(4) They aided the process of unifying the colonists in defense of traditional rights — they called for a congress of all the colonies, helping unite them (leading to the Continental Congress)."
},
{
  ...STIMULI.antifederalist46,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. Based on this passage, why did Antifederalists oppose ratification of the Constitution?",
  "choices": [
    "The legislative branch had too much power.",
    "A judicial branch did not exist.",
    "The executive branch had no limits on its authority.",
    "The president was elected by popular vote."
  ],
  "answer": 0,
  "back": "(1) The legislative branch had too much power — the author fears Congress's \"necessary and proper\" power has no real limits."
},
{
  ...STIMULI.antifederalist46,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. Which action was taken to deal with the criticism expressed in this passage?",
  "choices": [
    "assigning the power of judicial review to the Supreme Court",
    "giving states the ability to check the powers of Congress",
    "amending the Constitution to eliminate the elastic clause",
    "adding a Bill of Rights to the Constitution"
  ],
  "answer": 3,
  "back": "(4) adding a Bill of Rights to the Constitution — to ease Antifederalist fears of an overpowerful government, the first ten amendments were added to protect individual rights."
},
{
  ...STIMULI.marbury,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. In this excerpt from Marbury v. Madison, Chief Justice Marshall established the precedent that the Supreme Court",
  "choices": [
    "can overturn laws that violate the Constitution",
    "may disregard the Constitution in their decision-making",
    "has an obligation to base decisions on the popular beliefs of the electorate",
    "may have their decisions overruled by the executive branch of government"
  ],
  "answer": 0,
  "back": "(1) can overturn laws that violate the Constitution — Marbury v. Madison (1803) established judicial review, the power of courts to strike down unconstitutional laws."
},
{
  ...STIMULI.marbury,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. What is one important consequence of the Supreme Court's decision in Marbury v. Madison?",
  "choices": [
    "The Supreme Court's decisions may be reversed by a lower court.",
    "Amending the Constitution became the sole responsibility of the judicial branch.",
    "The power of the judicial branch was expanded.",
    "Nominations of Supreme Court Justices had to be approved by a majority vote of Congress."
  ],
  "answer": 2,
  "back": "(3) The power of the judicial branch was expanded — judicial review made the courts a coequal branch able to check Congress and the president."
},
{
  ...STIMULI.douglass,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. What was one primary characteristic of slavery in the United States?",
  "choices": [
    "An American slave child had to attend school until age 10.",
    "Family members usually remained together after they were sold at auction.",
    "The condition of slavery was passed from generation to generation.",
    "Slaves were freed after 50 years of service."
  ],
  "answer": 2,
  "back": "(3) The condition of slavery was passed from generation to generation — Douglass, born to an enslaved mother, was enslaved from birth, as slavery was inherited."
},
{
  ...STIMULI.douglass,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. Which three individuals would historians most likely study in conjunction with this passage?",
  "choices": [
    "John D. Rockefeller, Andrew Carnegie, and Henry Ford",
    "Sojourner Truth, William Lloyd Garrison, and Harriet Tubman",
    "Ida Tarbell, Upton Sinclair, and Jacob Riis",
    "Terence Powderly, Samuel Gompers, and Eugene Debs"
  ],
  "answer": 1,
  "back": "(2) Sojourner Truth, William Lloyd Garrison, and Harriet Tubman — like Frederick Douglass, these were leading abolitionists who fought to end slavery."
},
{
  ...STIMULI.shermanAct,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Congress enacted the Sherman Antitrust Act so that",
  "choices": [
    "labor unions could bargain collectively",
    "large businesses that hurt consumers could be nationalized by the government",
    "business practices that attempted to eliminate competition could be regulated",
    "trade with foreign nations would be restricted"
  ],
  "answer": 2,
  "back": "(3) business practices that attempted to eliminate competition could be regulated — the act declared illegal any combination or conspiracy \"in restraint of trade.\""
},
{
  ...STIMULI.shermanAct,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. The greatest weakness of the Sherman Antitrust Act was that it",
  "choices": [
    "contained vague wording and could not be easily enforced",
    "established fines that were considered unreasonable",
    "denied individuals their right to trial if accused of violating the act",
    "exempted companies that lobbied members of Congress"
  ],
  "answer": 0,
  "back": "(1) contained vague wording and could not be easily enforced — its loose language made it hard to apply, and courts even used it against labor unions instead of trusts."
},
{
  ...STIMULI.immigrationGraph,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. Based on this graph, the largest number of immigrants came to the United States during periods of",
  "choices": [
    "worldwide economic depression",
    "economic growth in the United States",
    "United States overseas expansion",
    "war between the nations of Europe"
  ],
  "answer": 1,
  "back": "(2) economic growth in the United States — immigration peaked during industrial booms (over 8 million in 1900-1909), when factory jobs drew newcomers."
},
{
  ...STIMULI.immigrationGraph,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. The main reason for declining immigration in the 1920s was that the United States",
  "choices": [
    "enacted quotas to limit immigration from select nations",
    "faced severe weather conditions",
    "encouraged industrialists to reduce the pay of foreign workers",
    "experienced a transformation in social and cultural life"
  ],
  "answer": 0,
  "back": "(1) enacted quotas to limit immigration from select nations — the Emergency Quota Act (1921) and National Origins Act (1924) sharply cut immigration, especially from Southern and Eastern Europe."
},
{
  ...STIMULI.wilsonLeagueCartoon,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. Which constitutional principle is the focus of this cartoon?",
  "choices": [
    "federalism",
    "the unwritten constitution",
    "executive privilege",
    "checks and balances"
  ],
  "answer": 3,
  "back": "(4) checks and balances — the Senate's power to approve or reject Wilson's treaty (the Treaty of Versailles) checks the president's treaty-making power."
},
{
  ...STIMULI.wilsonLeagueCartoon,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. What was one reason for the Senate's action illustrated in this cartoon?",
  "choices": [
    "It was unconstitutional for a president to negotiate a treaty.",
    "There was fear of becoming involved in another European war.",
    "There was concern over communist control of international organizations.",
    "The Treaty of Versailles did not punish Germany enough."
  ],
  "answer": 1,
  "back": "(2) There was fear of becoming involved in another European war — isolationist senators rejected the Treaty of Versailles and the League of Nations to keep the U.S. out of foreign entanglements."
},
{
  ...STIMULI.perkins,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. As Secretary of Labor, what was Frances Perkins' primary role in the Roosevelt administration?",
  "choices": [
    "She advised the president on many aspects of economic relief and reform.",
    "She used the power of the federal government to oppose factory safety regulations.",
    "She opposed deficit spending.",
    "She worked with the president to develop United States foreign policy."
  ],
  "answer": 0,
  "back": "(1) She advised the president on many aspects of economic relief and reform — Perkins shaped key New Deal programs from unemployment insurance to old-age pensions."
},
{
  ...STIMULI.perkins,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. What were two of the New Deal's permanent legacies that Frances Perkins helped to create?",
  "choices": [
    "the Federal Housing Administration and the Tennessee Valley Authority",
    "the Federal Deposit Insurance Corporation and the Public Works Program",
    "the Social Security Administration and the Fair Labor Standards Act",
    "the Lend-Lease Act and the National Industrial Recovery Act"
  ],
  "answer": 2,
  "back": "(3) the Social Security Administration and the Fair Labor Standards Act — Perkins helped create Social Security and the law establishing the minimum wage and 40-hour week, both lasting reforms."
},
{
  ...STIMULI.marshall,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. Which foreign policy supported the goals expressed in this passage?",
  "choices": [
    "expansionism",
    "Open Door",
    "Big Stick",
    "containment"
  ],
  "answer": 3,
  "back": "(4) containment — the Marshall Plan rebuilt Western Europe's economies to contain the spread of communism."
},
{
  ...STIMULI.marshall,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. Secretary of State George C. Marshall's plan was partly a response to the",
  "choices": [
    "occupation of Eastern Europe by the Soviet Union",
    "creation of the United Nations",
    "isolationist sentiments in the United States",
    "independence movements throughout Africa"
  ],
  "answer": 0,
  "back": "(1) occupation of Eastern Europe by the Soviet Union — Soviet expansion into a weakened Europe spurred the U.S. to rebuild the West and resist communism."
},
{
  ...STIMULI.chaseSmith,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. In this passage, Senator Smith argues that those who question an individual's loyalty to the United States should be reminded that",
  "choices": [
    "the loss of one's job and reputation because of a rumor can be justified",
    "the rights of accused persons are safeguarded by the Constitution",
    "Americans have the right to their own opinions, even if those opinions are unpopular",
    "freedom of speech is not absolute and may be limited in a national emergency"
  ],
  "answer": 2,
  "back": "(3) Americans have the right to their own opinions, even if those opinions are unpopular — Smith defends \"the right to criticize\" and \"hold unpopular beliefs\" against McCarthy-era smears."
},
{
  ...STIMULI.chaseSmith,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. This 1950 \"Declaration of Conscience\" speech by Senator Smith was written in response to",
  "choices": [
    "President Harry Truman's integration of the armed forces",
    "General Douglas MacArthur's military strategy in Korea",
    "President Dwight D. Eisenhower's support for the French in Indochina",
    "Senator Joseph McCarthy's unproven accusations of treason"
  ],
  "answer": 3,
  "back": "(4) Senator Joseph McCarthy's unproven accusations of treason — Smith spoke out against McCarthy's reckless \"character assassinations\" branding people Communists without evidence."
},
{
  ...STIMULI.brown,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. As a result of this Supreme Court decision, the Court ordered that",
  "choices": [
    "segregated schools must be improved so they are equal to white schools",
    "public schools across the nation should be integrated with all deliberate speed",
    "the federal government must fund the construction of new public schools",
    "private schools cannot prevent African American children from enrolling"
  ],
  "answer": 1,
  "back": "(2) public schools across the nation should be integrated with all deliberate speed — Brown v. Board (1954) declared segregated schools unconstitutional and ordered desegregation."
},
{
  ...STIMULI.brown,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. Which government action further promoted equality in the United States?",
  "choices": [
    "passing the Civil Rights Act of 1964",
    "the Supreme Court decision in Plessy v. Ferguson",
    "establishing Jim Crow laws",
    "ending affirmative action programs"
  ],
  "answer": 0,
  "back": "(1) passing the Civil Rights Act of 1964 — it outlawed segregation in public accommodations and banned discrimination, advancing the equality Brown began."
},
{
  ...STIMULI.patriotAct,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. The Patriot Act was a direct response to",
  "choices": [
    "religious toleration",
    "international terrorism",
    "unbalanced trade",
    "global genocide"
  ],
  "answer": 1,
  "back": "(2) international terrorism — the USA Patriot Act (October 2001) was passed after the September 11 terrorist attacks to expand surveillance and security powers."
},
{
  ...STIMULI.patriotAct,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What is one impact of the Patriot Act on the United States?",
  "choices": [
    "it increased international travel",
    "it decreased militarization",
    "it threatened civil liberties",
    "it expanded immigration"
  ],
  "answer": 2,
  "back": "(3) it threatened civil liberties — critics argued the act's broad surveillance powers (wiretaps, records searches) endangered Americans' privacy and due-process rights."
},
{
  ...STIMULI.seqDoubleV,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: James Thompson's 1942 \"Double V\" letter (Doc 1) and Truman's 1948 civil rights message to Congress (Doc 2). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: during and after World War II, African Americans served and worked for a nation that still denied them equal rights, fueling growing civil rights activism. Relationship: Cause and Effect (and Similarity). Thompson's 1942 \"Double V\" campaign (Doc 1) demanded victory over fascism abroad AND over racism at home, capturing the wartime push for equality; that rising pressure helped lead to Truman's 1948 message (Doc 2) calling on Congress to strengthen civil rights laws, protect voting, and ban discrimination in employment — and to his desegregation of the armed forces. Both documents demand full citizenship and equal protection, with the wartime activism contributing to the postwar federal response."
},
{
  ...STIMULI.seqNorthSouth,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: Hinton Helper's The Impending Crisis of the South (Doc 1) and an 1861 North/South resources table (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 1's reliability as evidence.",
  "back": "Model answer — Context: in the decades before the Civil War, the industrializing North and the slave-based agricultural South grew increasingly divided, and writers debated slavery's effects. Reliability of Doc 1: Helper, a Southerner, wrote for a national audience to argue that slavery had economically ruined the South — leaving most white Southerners in poverty and dependent on the free states. His point of view is a Southern critic of slavery on economic (not moral) grounds, so the document is a persuasive argument rather than a neutral report; that bias means it should be checked against data like Doc 2's resource table, which confirms the North's overwhelming advantage in manufacturing, railroads, and population in 1861."
},
{
  ...STIMULI.clEspionage,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1a/1b — Espionage Act background). Based on these documents, what is ONE historical circumstance that led to the restriction of individual rights during World War I?",
  "back": "Once Congress declared war in 1917, the government pressured Americans to support it and \"have no criticism\" — Congress passed the Espionage Act (1917), making disloyalty and obstruction of the draft punishable by up to twenty years in prison. More than 2,000 people were prosecuted, and a massive crackdown suppressed newspapers, antiwar groups, German Americans, and radicals."
},
{
  ...STIMULI.clZinn,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2a/2b — Howard Zinn + McCay cartoon). Based on these documents, what was ONE effort to address the issue of individual rights during World War I?",
  "back": "Critics and the press spoke out against the wartime crackdown: Winsor McCay's cartoon \"Must Liberty's Light Go Out?\" warned that the restrictions threatened to extinguish American freedom, and writers like Howard Zinn exposed how the vaguely worded Espionage Act was being used not against spies but to imprison Americans who simply spoke or wrote against the war."
},
{
  ...STIMULI.clLaFollette,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Senator La Follette, 1917). According to Senator Robert La Follette, what is ONE reason freedom of speech is important during wartime?",
  "back": "La Follette argued that even in war the citizens and their representatives must keep the right of free speech, so the \"sovereign people\" can openly and without fear discuss the war's causes, how it should be conducted, and the terms on which peace should be made — making their voice heard on these momentous questions."
},
{
  ...STIMULI.clSchenck,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Schenck v. United States). Based on this document, how did the decision in Schenck v. United States impact individual rights during wartime?",
  "back": "In Schenck v. United States (1919) the Supreme Court unanimously upheld the conviction of a man who urged resistance to the draft, ruling that free speech could be restricted in wartime. Justice Holmes created the \"clear and present danger\" test (you cannot falsely shout \"fire\" in a crowded theatre), which limited individual First Amendment rights during war."
},
{
  ...STIMULI.clHarding,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5 — Ken Gormley on Harding's pardons). According to Ken Gormley, how did President Harding's pardon of Eugene Debs impact individual rights after World War I?",
  "back": "By pardoning Eugene Debs and other political prisoners in 1921, President Harding used the executive pardon power to undo the damage done by the wartime Espionage and Sedition Acts and the Supreme Court's failure to protect the First Amendment — restoring freedoms and checking the government's abuse of individual rights."
},
{
  ...STIMULI.clStone,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — Geoffrey Stone). According to Geoffrey Stone, what is ONE way individual rights during wartime continued to be an issue after World War I?",
  "back": "Restrictions on civil liberties recurred in later conflicts: during World War II the government interned over 110,000 Japanese Americans solely because of their race; during the Cold War it used loyalty programs, blacklists, and McCarthyism against suspected \"disloyalty\"; and during the Vietnam War it spied on, infiltrated, and prosecuted antiwar dissenters."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Individual Rights During World War I). Write an essay that describes the historical circumstances, explains at least TWO efforts to address the issue, and discusses the extent to which the efforts were successful (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 2): after the U.S. entered World War I in 1917, war hysteria led the government to suppress dissent through the Espionage Act (1917) and Sedition Act (1918), which criminalized criticism of the war and were used to imprison over 2,000 people. Efforts (explain 2+): individuals and the press protested — Senator La Follette defended free speech and McCay's cartoon warned against extinguishing liberty (Docs 2, 3); a legal challenge reached the Supreme Court in Schenck v. United States (Doc 4); and executive action — President Harding pardoned Eugene Debs and other political prisoners in 1921 (Doc 5). Extent of success: limited at first — the Court upheld the restrictions with the \"clear and present danger\" standard — but later pardons restored freedoms; yet, as Document 6 shows, the tension between national security and civil liberties returned in World War II, the Cold War, and Vietnam, so the issue was never fully resolved."
}
];
