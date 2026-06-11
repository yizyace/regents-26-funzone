// Shared card deck for the August 2023 U.S. History & Government (Framework) Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (us-82023-sk.pdf).
const STIMULI = {
  antifederalist46: {
    passage: `. . . My object is to consider that undefined, unbounded and immense power which is comprised [included] in the following clause—"And to make all laws which shall be necessary and proper for carrying into execution the foregoing powers, and all other powers vested by this constitution in the government of the United States; or in any department or offices thereof." Under such a clause as this, can anything be said to be reserved and kept back from Congress? . . .`,
    psource: "Antifederalist Papers No. 46, November 2, 1788 (adapted)"
  },
  presSuccession: {
    passage: `. . . No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States.

In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on [pass on to] the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President . . .`,
    psource: "Article II, Section 1, United States Constitution"
  },
  washingtonFarewell: {
    passage: `. . . The great rule of conduct for us, in regard to foreign Nations is in extending our commercial relations to have with them as little political connection as possible. . . .

Europe has a set of primary interests, which to us have none, or a very remote relation. . . . it must be unwise in us to implicate ourselves, by artificial ties, in the ordinary vicissitudes [shifts] of her politics, or the ordinary combinations and collisions of her friendships, or enmities [hostilities].

Our detached and distant situation invites and enables us to pursue a different course. . . .`,
    psource: "President George Washington, Farewell Address, 1796 (adapted)"
  },
  expansionMap: {
    imgs: [
      {
        src: "img/q07-territorial-expansion-map.png",
        cap: "United States territorial expansion (Louisiana Purchase, Florida, Texas Annexation, Mexican Cession, Oregon, Gadsden Purchase). Source: Robert A. Divine et al., America: Past and Present, Scott, Foresman (adapted)",
        alt: "Map of U.S. territorial growth across the 1800s, labeling lands gained by purchase, annexation, treaty, and cession"
      }
    ]
  },
  senecaFalls: {
    passage: `. . . The history of mankind is a history of repeated injuries and usurpations [wrongdoings] on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her. . . .

He has never permitted her to exercise her inalienable right to the elective franchise.

He has compelled her to submit to laws, in the formation of which she had no voice. . . .

He has made her, if married, in the eye of the law, civilly dead.

He has taken from her all right in property, even to the wages she earns. . . .`,
    psource: "Declaration of Sentiments, Seneca Falls, 1848"
  },
  johnBrown: {
    passage: `Browns Station, Kansas Territory, 14th Decem 1855
Dear Sir,
. . . I have just returned from the Kansas War . . . I will only say at this time that the Territory is now entirely in the power of the Free State men; & notwithstanding this result has been secured by means of some bravery, & tact; with a good deal of trickery on the one side; & of cowardice, folly, & drunkenness on the other yet so it is; & I believe the Missourians will give up all further hope of making Kansas a Slave State. . . .`,
    psource: "John Brown, Letter to Orson Day, December 14, 1855 (adapted)"
  },
  election1876: {
    imgs: [
      {
        src: "img/q13-election-1876-map.png",
        cap: "The Election of 1876 — Tilden (Democrat) 184 electoral / 4,284,020 popular; Hayes (Republican) 185 electoral / 4,036,572 popular; with disputed territories. Source: Joyce Appleby et al., The American Republic, McGraw Hill, 2003 (adapted)",
        alt: "Electoral map of the disputed 1876 presidential election with a vote table showing Tilden won the popular vote but Hayes won the electoral vote"
      }
    ]
  },
  pullmanCartoon: {
    imgs: [
      {
        src: "img/q15-pullman-labor-cartoon.png",
        cap: "\"The Condition of the Laboring Man at Pullman.\" Source: Chicago Labor, July 7, 1894 (adapted)",
        alt: "Labor cartoon showing an employee crushed beneath a pyramid labeled capitalism, monopoly, plutocracy, and wage slavery"
      }
    ]
  },
  bigStick: {
    imgs: [
      {
        src: "img/q16-big-stick-caribbean-cartoon.png",
        cap: "\"The Big Stick in the Caribbean Sea.\" Source: W. A. Rogers, 1904 (adapted)",
        alt: "Cartoon of Theodore Roosevelt striding through the Caribbean carrying a big stick, dragging warships, symbolizing Big Stick diplomacy"
      }
    ]
  },
  dustBowl: {
    passage: `. . . In May a friend in the southwestern county of Kansas voluntarily sent me a list of the people who had already left their immediate neighborhood or were packed up and ready to go. . . . In these families there had been two deaths from dust pneumonia. . . . Little abandoned homes where people had drilled deep wells for the precious water, had set trees and vines, built reservoirs, and fenced in gardens—with everything now walled in half buried by banks of drifted soil, told a painful story of loss and disappointment.`,
    psource: "Letter from Caroline A. Henderson, printed in The Atlantic (adapted)"
  },
  fdrBritain: {
    passage: `. . . In the present world situation of course there is absolutely no doubt in the mind of a very overwhelming number of Americans that the best immediate defense of the United States is the success of Great Britain in defending itself . . . it is equally important from a selfish point of view of American defense that we should do everything to help the British Empire to defend itself. . . .`,
    psource: "President Franklin D. Roosevelt, Press Conference, December 17, 1940 (adapted)"
  },
  marshallPlanMap: {
    imgs: [
      {
        src: "img/q21-marshall-plan-map.png",
        cap: "Marshall Plan, 1948-1952 — U.S. aid per country in millions of dollars. Source: Robert A. Divine et al., America Past and Present, Addison Wesley Longman, 1999 (adapted)",
        alt: "Map of Western Europe shading U.S. Marshall Plan aid by country, with France and the United Kingdom receiving the most"
      }
    ]
  },
  freedomRides: {
    passage: `. . . Federal law said that there should be no segregation in interstate travel. The Supreme Court had decided that. But still state laws in the southern states and local ordinances ordered segregation of the races on those buses. Why didn't the federal government enforce its law? We decided it was because of politics. . . . We decided the way to do it was to have an interracial group ride through the South. . . . We felt that we could then count upon the racists of the South to create a crisis, so that the federal government would be compelled to enforce federal law. That was the rationale for the Freedom Ride. . . .`,
    psource: "James Farmer, Director of the Congress of Racial Equality, in Voices of Freedom, Random House, 1990"
  },
  votingRights1965: {
    passage: `Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled, That this Act shall be known as the "Voting Rights Act of 1965."

SEC. 2. No voting qualification or prerequisite to voting, or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color. . . .`,
    psource: "United States Congress, August 6, 1965"
  },
  bosnia: {
    passage: `. . . From 1991 to 1995 the United States had been reluctant to act in Bosnia. But after Srebrenica [massacre in Bosnia and Herzegovina], President Bill Clinton knew that although the American people would not like it, the United States could no longer avoid involvement there. Thus began the diplomatic and military policy that led to the Dayton accords, to peace in Bosnia and, four years later, to the liberation of the Albanian people in Kosovo from Slobodan Milosevic's oppression. . . .`,
    psource: "Richard Holbrooke, \"Was Bosnia Worth It?\", Washington Post, July 19, 2005"
  },
  berlinWall: {
    imgs: [
      {
        src: "img/q28-berlin-wall-headline.png",
        cap: "Source: New York Daily News, November 10, 1989",
        alt: "Newspaper front page reporting the opening of the Berlin Wall in November 1989"
      }
    ]
  },
  seqDepression: {
    passage: `Document 1

. . . This is not an issue as to whether the people are going hungry or cold in the United States. It is solely a question of the best method by which hunger and cold can be prevented. It is a question as to whether the American people . . . will maintain the spirit of charity and of mutual self-help through voluntary giving and the responsibility of local government as distinguished . . . from appropriations out of the Federal Treasury for such purposes. . . . if we start appropriations of this character we have . . . struck at the roots of self-government. . . .
Source: President Herbert Hoover, Press Statement, February 3, 1931

Document 2

. . . Our greatest primary task is to put people to work. This is no unsolvable problem if we face it wisely and courageously. It can be accomplished in part by direct recruiting by the Government itself, treating the task as we would treat the emergency of a war . . .
Source: Franklin D. Roosevelt, Inaugural Address, March 4, 1933`
  },
  seqLeague: {
    passage: `Document 2

The following is an excerpt from a Senate speech given by Senator Robert La Follette opposing United States membership in the League of Nations.

. . . We have already paid a fearful price for our participation in the late war. It has cost us the lives of more than 50,000 of our finest young men slain in battle . . . But, sir, there is one thing which is now demanded of us that we did not bargain for when we entered this war, and that is the surrender of our right to control our own destiny as a Nation. . . . We are asked to depart from the traditional policy . . . of keeping free from entangling alliances of European politics . . .
Source: United States Senator Robert M. La Follette, Speech on the League of Nations, November 13, 1919`,
    imgs: [
      {
        src: "img/q30-orr-league-cartoon.png",
        cap: "Document 1: \"Interrupting the Ceremony\" — the League of Nations and constitutional rights. Source: Carey Orr, Chicago Daily Tribune, December 27, 1918 (adapted)",
        alt: "1918 cartoon depicting the League of Nations interrupting or threatening American constitutional rights"
      }
    ]
  },
  clTreaties: {
    passage: `U.S.-Native American Treaties

. . . Between 1778 and the early 1800s, federal power over Indians expanded dramatically . . . Eventually all tribes came to be regarded as quasi-sovereign peoples, not national equals. This view led to diminished tribal control over their destiny, their increasing exploitation, and federal paternalism. Tribes came to be regarded as dependent nations, and treaties were considered in the same light as other statutes of the U.S. Congress. . . . Nearly 400 treaties were negotiated. The greatest number, nearly 260, were arranged during the great westward expansion of white settlers following the War of 1812. . . . A block of 76 treaties called for Indian removal from their lands and resettlement on other lands. . . .`,
    psource: "Wendell H. Oswalt, This Land Was Theirs: A Study of Native North Americans, Eighth Edition, 2006"
  },
  clWestMap: {
    imgs: [
      {
        src: "img/q32-west-native-americans-map.png",
        cap: "Document 2: The West and Native Americans, 1860-1890 — railroads, cattle trails, mining centers, reservations, and Native American defeats and victories. Source: Mary Beth Norton et al., A People and a Nation, Houghton Mifflin, and Robert A. Divine et al., America: Past and Present, HarperCollins (adapted)",
        alt: "Map of the American West, 1860-1890, marking railroads, cattle trails, mining centers, shrinking reservations, and battle sites such as Sand Creek, Little Big Horn, and Wounded Knee"
      }
    ]
  },
  clTimeline: {
    passage: `Document 3: Selected Events in Native American Relations with the United States
1879 — Carlisle Indian Industrial School founded
1887 — Dawes Severalty Act allotted reservation lands to individual Native Americans
1924 — Indian Citizenship Act granted United States citizenship to indigenous Americans
1934 — Indian Reorganization Act attempted to reverse the impact of the Dawes Act by restoring land to reservations
1968 — AIM (American Indian Movement) founded to ensure past treaties were honored; AIM occupied Alcatraz Island in 1969 and the headquarters of the Bureau of Indian Affairs in 1972
1970 — President Nixon called for a new era of self-determination for Native American peoples
1988 — Indian Gaming Regulatory Act affirmed the right of Native Americans to conduct gaming operations on tribal lands
2009 — President Obama established the White House Tribal Nations Conference`,
    psource: "Kathy Weiser, ed., \"Native American Timeline of Events,\" Legends of America online (adapted)"
  },
  clSacred: {
    passage: `Document 4a

. . . While some steps have been taken to undo damage to Native American religious liberties and to sacred places, most remain threatened by extractive minerals production . . . by commercial and recreational development . . . Federal-tribal agreements have been entered into for return of ownership and/or control of sacred places, for joint management or co-stewardship . . . Some of these . . . agreements have been in place and working to the satisfaction of all parties for over 40 years. . . .
Source: Suzan Shown Harjo, "Threatened and Damaged: Protecting Sacred Places," Expedition Magazine, Penn Museum, 2013

Document 4b

. . . Montana's Indian Education for All Act [1999] is generally regarded as the most thorough attempt by any state to integrate teaching about the state's Native American tribes into the curriculum of public schools. . . . Educators hope . . . that Native American students will feel more at home in the public school system and will see their own cultures recognized and celebrated.
Source: CQ Researcher, April 24, 2015`
  },
  clStandingRock: {
    passage: `Document 5a

. . . The Standing Rock Sioux tribe has opposed the Dakota Access Pipeline since first learning about plans for the pipeline in 2014. . . . thousands of protesters—including many Native Americans—have gathered in North Dakota in attempt to block the 1,200-mile project. . . .
Source: Justin Worland, "What to Know About the Dakota Access Pipeline Protests," Time, October 28, 2016

Document 5b: "Washington tribes stand with Standing Rock Sioux against North Dakota oil pipeline"

. . . Tribes from across Washington and the Northwest have journeyed to remote Cannon Ball, N.D., to join the Standing Rock Sioux Tribe in a peaceful occupation of ancestral lands where the tribe seeks an injunction to stop construction of an oil pipeline until its waters and cultural resources are protected. . . .
Source: Seattle Times online, September 1, 2016`,
    imgs: [
      {
        src: "img/q35-standing-rock-photo.jpg",
        cap: "Standing Rock pipeline protest, North Dakota, 2016. Source: Seattle Times online, September 1, 2016",
        alt: "Photograph of Native American water protectors demonstrating against the Dakota Access Pipeline at Standing Rock"
      }
    ]
  },
  clVoterID: {
    passage: `Document 6

A 2017 North Dakota voter identification law required that voters present identification displaying a street address, not just a post office box. Street addresses are not common on reservations.

. . . A controversial new voter ID law in North Dakota made casting a ballot more difficult for thousands of Native Americans living on reservations . . . But in the face of a law critics called "plainly unconstitutional," Native Americans in parts of North Dakota appeared to turn out to vote in record numbers in [the] 2018 midterm elections. . . .`,
    psource: "Katie Reilly, Time, November 7, 2018"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.antifederalist46,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. The purpose of this statement was to",
  "choices": [
    "give reasons to support the ratification of the Constitution",
    "question the power granted to Congress under the Constitution",
    "decide which powers would be given to the president in the Constitution",
    "encourage support for an amendment to limit personal taxation in the Constitution"
  ],
  "answer": 1,
  "back": "(2) question the power granted to Congress under the Constitution — Antifederalists warned that the \"necessary and proper\" clause left almost nothing \"reserved and kept back from Congress.\""
},
{
  ...STIMULI.antifederalist46,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. Which provision in the Constitution is the author of this passage questioning?",
  "choices": [
    "due process",
    "equal protection",
    "elastic clause",
    "rule of law"
  ],
  "answer": 2,
  "back": "(3) elastic clause — the \"necessary and proper\" clause the author quotes is known as the elastic clause because it stretches congressional power."
},
{
  ...STIMULI.presSuccession,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. The Constitution gives the power to determine presidential succession beyond the vice president to",
  "choices": [
    "the Supreme Court",
    "the president's cabinet",
    "Congress",
    "state governors"
  ],
  "answer": 2,
  "back": "(3) Congress — Article II says \"the Congress may by Law provide\" for who acts as president beyond the vice president."
},
{
  ...STIMULI.presSuccession,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. The 22nd amendment, added in 1951, changed presidential eligibility by",
  "choices": [
    "establishing a two-term limit",
    "raising the minimum age",
    "requiring four years of college",
    "ending the residency clause"
  ],
  "answer": 0,
  "back": "(1) establishing a two-term limit — passed after FDR's four terms, the 22nd Amendment limits a president to two elected terms."
},
{
  ...STIMULI.washingtonFarewell,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. In this address, President George Washington states that the United States can stay out of foreign entanglements because of its",
  "choices": [
    "ethnic diversity",
    "well-established military",
    "large industrial capacity",
    "geographical location"
  ],
  "answer": 3,
  "back": "(4) geographical location — Washington points to America's \"detached and distant situation\" across the Atlantic from Europe's conflicts."
},
{
  ...STIMULI.washingtonFarewell,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. Based on this passage, President Washington would urge the United States to avoid",
  "choices": [
    "trade agreements",
    "permanent political alliances",
    "foreign travel",
    "industrial development"
  ],
  "answer": 1,
  "back": "(2) permanent political alliances — he urges \"as little political connection as possible\" with foreign nations while still trading with them."
},
{
  ...STIMULI.expansionMap,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. A historian could best use this map to study",
  "choices": [
    "the Monroe Doctrine",
    "American nativism",
    "Manifest Destiny",
    "Dutch imperialism in North America"
  ],
  "answer": 2,
  "back": "(3) Manifest Destiny — the map of westward territorial growth (Louisiana Purchase, Texas, Mexican Cession, Oregon) illustrates the belief that the U.S. was destined to span the continent."
},
{
  ...STIMULI.expansionMap,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. Which statement can best be supported by the information found on this map?",
  "choices": [
    "Territorial expansion during the 1800s was achieved through a variety of methods.",
    "Colonial goals had been realized once the Louisiana Purchase was complete.",
    "The annexation of Texas was an effort to avoid war with Mexico.",
    "The Great Plains was the last area settled."
  ],
  "answer": 0,
  "back": "(1) Territorial expansion during the 1800s was achieved through a variety of methods — the map labels lands gained by purchase, annexation, treaty, and cession."
},
{
  ...STIMULI.senecaFalls,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. Based on this excerpt from the Seneca Falls' Declaration of Sentiments, women should",
  "choices": [
    "remain in the home",
    "serve in the military",
    "give up their personal property",
    "have equal rights with men"
  ],
  "answer": 3,
  "back": "(4) have equal rights with men — the Declaration protests women's denial of the vote, of legal standing, and of property rights, demanding equality."
},
{
  ...STIMULI.senecaFalls,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. Which government action addressed a grievance included in this declaration?",
  "choices": [
    "the 13th amendment",
    "the Plessy v. Ferguson decision",
    "the Schenck v. United States decision",
    "the 19th amendment"
  ],
  "answer": 3,
  "back": "(4) the 19th amendment — ratified in 1920, it gave women the right to vote, addressing the denial of the \"elective franchise\" the document protests."
},
{
  ...STIMULI.johnBrown,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. What was a major cause of the invasion John Brown refers to in this letter?",
  "choices": [
    "the forced relocation of Native American tribes into Kansas",
    "the passage of the Kansas-Nebraska Act",
    "the decision in the Dred Scott case",
    "the deployment of Union troops into border states"
  ],
  "answer": 1,
  "back": "(2) the passage of the Kansas-Nebraska Act — its policy of popular sovereignty let pro- and antislavery settlers fight to decide Kansas, producing \"Bleeding Kansas.\""
},
{
  ...STIMULI.johnBrown,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. The situation described in this letter led to which outcome?",
  "choices": [
    "It was a contributing factor to the Civil War.",
    "It illustrated the political influence of the Midwest.",
    "It reflected the impact of nationalism on territorial expansion.",
    "It resulted in a decline in sectional tensions."
  ],
  "answer": 0,
  "back": "(1) It was a contributing factor to the Civil War — the violence in \"Bleeding Kansas\" deepened the sectional divide over slavery."
},
{
  ...STIMULI.election1876,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Which conclusion about presidential elections is supported by the information on this map?",
  "choices": [
    "Territories receive a minimum of three electoral votes.",
    "The geographically larger states receive more electoral votes.",
    "Most northern states voted for the Democratic candidate.",
    "The popular vote does not solely determine the outcome of elections."
  ],
  "answer": 3,
  "back": "(4) The popular vote does not solely determine the outcome of elections — Tilden won more popular votes (4,284,020) but Hayes won the presidency by one disputed electoral vote."
},
{
  ...STIMULI.election1876,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. What was one result of the election of 1876?",
  "choices": [
    "Fighting in the Civil War continued.",
    "Reconstruction officially ended.",
    "Federal troops remained in the South.",
    "Discrimination ended in the South."
  ],
  "answer": 1,
  "back": "(2) Reconstruction officially ended — the Compromise of 1877 settled the disputed election by making Hayes president in exchange for withdrawing federal troops from the South."
},
{
  ...STIMULI.pullmanCartoon,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. A historian could best use this cartoon to study",
  "choices": [
    "expansionism",
    "sectionalism",
    "industrialism",
    "imperialism"
  ],
  "answer": 2,
  "back": "(3) industrialism — the cartoon shows an \"employee\" crushed by capitalism, monopoly, and \"wage slavery,\" the labor conflicts of the industrial age (the 1894 Pullman Strike)."
},
{
  ...STIMULI.bigStick,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. This cartoon reflects the foreign policy belief that the United States should",
  "choices": [
    "oppose independence movements in Latin America",
    "remain neutral in the affairs of Latin America",
    "become the protector of the Western Hemisphere",
    "annex the countries of the Western Hemisphere"
  ],
  "answer": 2,
  "back": "(3) become the protector of the Western Hemisphere — Theodore Roosevelt's \"Big Stick\" diplomacy and Roosevelt Corollary asserted U.S. police power over the Caribbean."
},
{
  ...STIMULI.dustBowl,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. The events described in this letter took place in",
  "choices": [
    "the Hudson River valley after the opening of the Erie Canal in the 1820s",
    "California during the 1849 Gold Rush",
    "San Francisco after the 1906 earthquake",
    "the Great Plains during the Dust Bowl in the 1930s"
  ],
  "answer": 3,
  "back": "(4) the Great Plains during the Dust Bowl in the 1930s — the letter describes \"dust pneumonia\" and farms buried by \"drifted soil\" in Kansas."
},
{
  ...STIMULI.dustBowl,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. Which action by the federal government was designed to help correct the problems described in this letter?",
  "choices": [
    "creation of the Civilian Conservation Corps (CCC)",
    "passage of the Social Security Administration (SSA)",
    "creation of the Federal Communications Commission (FCC)",
    "passage of the National Labor Relations Act (Wagner Act)"
  ],
  "answer": 0,
  "back": "(1) creation of the Civilian Conservation Corps (CCC) — this New Deal agency put young men to work on conservation projects such as planting trees and fighting soil erosion behind the Dust Bowl."
},
{
  ...STIMULI.fdrBritain,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. What foreign policy goal does President Franklin D. Roosevelt's statement illustrate?",
  "choices": [
    "shifting the United States away from neutrality",
    "uniting imperial nations in joint defense of their colonies",
    "promoting United States trade interests in Asia",
    "expanding democracy throughout the world by military force"
  ],
  "answer": 0,
  "back": "(1) shifting the United States away from neutrality — FDR argues that aiding Britain is essential to American defense, moving the U.S. away from strict neutrality before World War II."
},
{
  ...STIMULI.fdrBritain,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. Which United States action resulted from the ideas expressed in this passage?",
  "choices": [
    "rejection of the Treaty of Versailles",
    "establishment of the Lend-Lease program",
    "nonintervention in the Spanish Civil War",
    "announcement of the Good Neighbor policy"
  ],
  "answer": 1,
  "back": "(2) establishment of the Lend-Lease program — in 1941 the U.S. began supplying weapons and aid to Britain and the Allies, exactly the help FDR urges here."
},
{
  ...STIMULI.marshallPlanMap,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. What countries received the most aid from the Marshall Plan?",
  "choices": [
    "Austria and Bulgaria",
    "East Germany and West Germany",
    "Norway and Sweden",
    "France and the United Kingdom"
  ],
  "answer": 3,
  "back": "(4) France and the United Kingdom — the map's shading shows these two nations received the largest shares of U.S. Marshall Plan aid."
},
{
  ...STIMULI.marshallPlanMap,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. One major goal of the Marshall Plan was to",
  "choices": [
    "punish Germany as a result of World War II",
    "contain the spread of communism in Europe",
    "increase immigration to the United States",
    "improve economic relations with the Soviet Union"
  ],
  "answer": 1,
  "back": "(2) contain the spread of communism in Europe — rebuilding prosperous Western European economies was meant to keep them from turning to communism."
},
{
  ...STIMULI.freedomRides,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. According to this passage, why was the Supreme Court decision about this federal law not enforced?",
  "choices": [
    "Literacy tests and poll taxes had been declared unconstitutional.",
    "The president supported segregation.",
    "Politicians feared that they would lose the support of southern white voters.",
    "There was an increase in the frequency of migration in Northern cities."
  ],
  "answer": 2,
  "back": "(3) Politicians feared that they would lose the support of southern white voters — Farmer says the federal government would not enforce the law \"because of its fear of reprisals from the South.\""
},
{
  ...STIMULI.freedomRides,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. Based on this passage, what was the goal of the Freedom Riders?",
  "choices": [
    "to desegregate the buses and bus terminals in the South",
    "to maintain racial segregation in public transportation",
    "to improve bus safety features throughout the nation",
    "to protest the United States Supreme Court decision"
  ],
  "answer": 0,
  "back": "(1) to desegregate the buses and bus terminals in the South — the riders rode interracially and used the \"wrong\" waiting rooms to force the government to enforce desegregation."
},
{
  ...STIMULI.votingRights1965,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. What was the primary reason that Congress passed this 1965 law?",
  "choices": [
    "to end the Montgomery bus boycott",
    "to expand veterans benefits",
    "to eliminate segregation in public schools",
    "to protect rights guaranteed in the 15th amendment"
  ],
  "answer": 3,
  "back": "(4) to protect rights guaranteed in the 15th amendment — the Voting Rights Act enforced the 15th Amendment by barring devices used to deny the vote \"on account of race or color.\""
},
{
  ...STIMULI.bosnia,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. What was a main reason for the public's opposition to President Bill Clinton's intervention in Bosnia?",
  "choices": [
    "Americans feared that the result would begin a nuclear war.",
    "North Atlantic Treaty Organization (NATO) forces refused to participate.",
    "Americans were hesitant to support foreign military actions after the Vietnam War.",
    "There were a large number of American casualties in the Persian Gulf War."
  ],
  "answer": 2,
  "back": "(3) Americans were hesitant to support foreign military actions after the Vietnam War — the \"Vietnam syndrome\" made the public wary of intervening in another distant conflict."
},
{
  ...STIMULI.bosnia,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. Based on this passage, what was a major reason for President Clinton's decision?",
  "choices": [
    "defending human rights",
    "obtaining supplies of natural resources",
    "acquiring new territories",
    "establishing a military alliance"
  ],
  "answer": 0,
  "back": "(1) defending human rights — Clinton acted after the Srebrenica massacre to stop ethnic cleansing and oppression in Bosnia and later Kosovo."
},
{
  ...STIMULI.berlinWall,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. The event shown on the front page of this newspaper is most closely associated with the",
  "choices": [
    "failure of the Berlin airlift",
    "dissatisfaction of East Germans with United States policy",
    "end of the Cold War with the Soviet Union",
    "Allied victory in World War II"
  ],
  "answer": 2,
  "back": "(3) end of the Cold War with the Soviet Union — the fall of the Berlin Wall in November 1989 symbolized the collapse of communism in Eastern Europe and the end of the Cold War."
},
{
  ...STIMULI.seqDepression,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: Herbert Hoover's 1931 press statement opposing federal relief (Doc 1) and FDR's 1933 Inaugural calling to \"put people to work\" (Doc 2). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: the Great Depression. After the 1929 crash, unemployment reached about 25%, banks failed, and millions faced hunger and homelessness. Relationship: Difference (and a Turning Point). Hoover (Doc 1) opposed federal relief, insisting that voluntary charity, mutual self-help, and local government should handle hardship, warning that federal appropriations would \"strike at the roots of self-government.\" FDR (Doc 2) took the opposite view, calling to put people to work through direct government action \"as we would treat the emergency of a war.\" The failure of Hoover's limited-government approach was a cause of FDR's election; the New Deal that followed marked a turning point toward an active federal role in the economy (CCC, WPA, FDIC, Social Security)."
},
{
  ...STIMULI.seqLeague,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: Carey Orr's 1918 cartoon (Doc 1) and Senator La Follette's 1919 speech opposing the League of Nations (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 2's reliability as evidence.",
  "back": "Model answer — Context: after World War I, President Wilson pushed for U.S. membership in the League of Nations as part of the Treaty of Versailles, but isolationist senators (the \"irreconcilables\") opposed it, and the Senate ultimately rejected the treaty in 1919-1920. Reliability of Doc 2: La Follette's audience was the Senate and the public, and his purpose was to persuade them to reject the League. His point of view is strongly isolationist — he stresses the war's terrible cost in lives and money and warns that joining the League means surrendering the nation's right to control its own destiny. That advocacy makes the speech a biased argument rather than a balanced analysis: it is very useful as evidence of why many Americans opposed the League, but it overstates the dangers and should be weighed against pro-League sources."
},
{
  ...STIMULI.clTreaties,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — Wendell H. Oswalt, This Land Was Theirs, 2006). According to Wendell H. Oswalt, what is ONE historical circumstance surrounding the rights of Native Americans?",
  "back": "As federal power over Native Americans expanded between 1778 and the early 1800s, tribes came to be regarded as \"quasi-sovereign\" or dependent nations rather than equals, which led to diminished tribal control, increasing exploitation, and federal paternalism. Nearly 400 treaties were negotiated — most during the westward expansion after the War of 1812 — and a block of 76 of them forced Indian removal from their lands."
},
{
  ...STIMULI.clWestMap,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — \"The West and Native Americans, 1860-1890\" map). Based on this document, what was ONE effect of westward settlement on Native Americans?",
  "back": "Westward settlement — marked by railroads, cattle trails, and mining centers pushing across the map — brought repeated conflict that ended in Native American defeats and massacres (Sand Creek 1864, Little Big Horn 1876, Wounded Knee 1890) and confined Native nations to shrinking reservations by 1890."
},
{
  ...STIMULI.clTimeline,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — Native American timeline). Based on this document, what is ONE effort to address the rights of Native Americans?",
  "back": "Examples from the timeline: the Indian Citizenship Act (1924) granted citizenship to indigenous Americans; the Indian Reorganization Act (1934) reversed the Dawes Act by restoring land to reservations; the American Indian Movement (founded 1968) worked to have past treaties honored; and President Nixon called in 1970 for a new era of Native American self-determination."
},
{
  ...STIMULI.clSacred,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4a/4b — Harjo on sacred places + Montana's Indian Education for All Act). Based on these documents, state ONE impact of the efforts to restore Native American history and culture.",
  "back": "Federal-tribal agreements have returned or jointly managed sacred places, some working to all parties' satisfaction for over 40 years (Doc 4a); and Montana's Indian Education for All Act (1999) integrated teaching about the state's tribes into public-school curricula, helping Native students see their cultures recognized and giving all Montanans a greater appreciation of Native history (Doc 4b)."
},
{
  ...STIMULI.clStandingRock,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5a/5b — Standing Rock and the Dakota Access Pipeline). Based on these documents, what was ONE effort to protect the rights of Native Americans in North Dakota?",
  "back": "The Standing Rock Sioux — joined by thousands of other Native Americans and tribes from across the Northwest — staged a peaceful protest and occupation of ancestral lands in North Dakota to block the Dakota Access Pipeline, seeking a court injunction to stop construction until their water and cultural/sacred resources were protected."
},
{
  ...STIMULI.clVoterID,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — Katie Reilly on the 2017 North Dakota voter-ID law). According to Katie Reilly, what is ONE impact of the 2017 voter identification law on Native Americans?",
  "back": "The law's requirement of a residential street address (uncommon on reservations) made voting harder for thousands of Native Americans and risked disenfranchising them — but it backfired, energizing Native communities to turn out in record numbers in the 2018 midterm elections as a protest against the law."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Rights of Native Americans). Write an essay that describes the historical circumstances surrounding Native American rights, explains at least TWO efforts to address them, and discusses the impact of those efforts on the United States/American society (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 2): as the United States expanded westward, Native nations were treated as dependent peoples and forced off their lands through nearly 400 treaties and the violence of settlement (railroads, the Plains wars, Sand Creek, Wounded Knee), confining them to shrinking reservations. Efforts (explain 2+): government policy shifts — the assimilationist Dawes Act (1887), reversed by the Indian Reorganization Act (1934), plus the Indian Citizenship Act (1924) and Nixon-era self-determination (Doc 3); activism — the American Indian Movement and the Standing Rock pipeline protest (Docs 3, 5); and legal/educational protections — sacred-site agreements and Montana's Indian Education law (Doc 4). Impact (Docs 4, 5, 6): mixed success — Native Americans gained citizenship, restored lands, gaming rights, and growing cultural recognition, yet still face threats to sacred sites, water, and voting rights (e.g., the 2017 North Dakota voter-ID law), showing the struggle is ongoing."
}
];
