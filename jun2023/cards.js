// Shared card deck for the June 2023 U.S. History & Government (Framework) Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg62023-sk.pdf).
const STIMULI = {
  paine: {
    passage: `. . . Small islands not capable of protecting themselves, are the proper objects for kingdoms to take under their care; but there is something very absurd, in supposing a continent to be perpetually governed by an island. In no instance hath nature made the satellite larger than its primary planet, and as England and America, with respect to each other, reverses the common order of nature, it is evident they belong to different systems: England to Europe, America to itself. . . .`,
    psource: "Thomas Paine, Common Sense, 1776"
  },
  federalist51: {
    passage: `. . . This policy of supplying, by opposite and rival interests, the defect of better motives, might be traced through the whole system of human affairs, private as well as public. We see it particularly displayed in all the subordinate [lesser] distributions of power, where the constant aim is to divide and arrange the several offices in such a manner as that each may be a check on the other—that the private interest of every individual may be a sentinel [guard] over the public rights. These inventions of prudence cannot be less requisite [essential] in the distribution of the supreme powers of the State. . . .`,
    psource: "James Madison, Federalist No. 51, 1788"
  },
  jeffersonEmbargo: {
    passage: `. . . When the British and French both seized American vessels if they touched at the ports of the other, Jefferson decided to test one of his favorite doctrines—that war was both intolerable and unnecessary, and that the best weapon against both powers lay in economic sanctions. He got Congress to pass a series of five Embargo Acts, stringently forbidding U.S. trade with Britain and France not only overseas but even along the Canadian border. . . .`,
    psource: "Max Lerner, Wounded Titans: American Presidents and the Perils of Power, Arcade Publishing, 1996"
  },
  lincolnInaugural: {
    passage: `. . . Apprehension seems to exist among the people of the Southern States that by the accession [rise to power] of a Republican Administration their property and their peace and personal security are to be endangered. There has never been any reasonable cause for such apprehension. . . .

I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists. I believe I have no lawful right to do so, and I have no inclination to do so. . . .`,
    psource: "First Inaugural Address of Abraham Lincoln, March 4, 1861"
  },
  turner: {
    passage: `. . . Thus American development has exhibited not merely advance along a single line, but a return to primitive conditions on a continually advancing frontier line, and a new development for that area. American social development has been continually beginning over again on the frontier. This perennial rebirth, this fluidity of American life, this expansion westward with its new opportunities, its continuous touch with the simplicity of primitive society, furnish the forces dominating American character. . . .`,
    psource: "Frederick Jackson Turner, \"The Significance of the Frontier in American History,\" 1893"
  },
  demPlatform1900: {
    passage: `. . . Private monopolies are indefensible and intolerable. They destroy competition, control the price of all material, and of the finished product, thus robbing both producer and consumer. They lessen the employment of labor, and arbitrarily fix the terms and conditions thereof; and deprive individual energy and small capital of their opportunity of betterment. . . .`,
    psource: "Democratic Party Platform of 1900"
  },
  maineHeadline: {
    imgs: [
      {
        src: "img/q13-maine-headline.png",
        cap: "\"Destruction of the War Ship Maine Was the Work of an Enemy.\" Source: New York Journal, February 17, 1898 (adapted)",
        alt: "Sensational front-page newspaper headlines blaming an enemy for the explosion of the battleship Maine and offering a $50,000 reward"
      }
    ]
  },
  migrationMap: {
    imgs: [
      {
        src: "img/q15-great-migration-map.png",
        cap: "Patterns of African American Migration from the South, 1910-1970. Source: Michael Siegel, Rutgers Cartography, 2005 (adapted)",
        alt: "Map with arrows showing African American migration routes from Southern states to Northern and Western cities, 1910-1970"
      }
    ]
  },
  laFollette: {
    passage: `. . . I think all men recognize that in time of war the citizen must surrender some rights for the common good which he is entitled to enjoy in time of peace. But, sir, the right to control their own government according to constitutional forms is not one of the rights that the citizens of this country are called upon to surrender in time of war. . . .

More than all, the citizen and his representative in Congress in time of war must maintain his right of free speech. More than in times of peace it is necessary that the channels for free public discussion of governmental policies shall be open and unclogged. . . .`,
    psource: "Senator Robert M. La Follette, Free Speech in Wartime, October 6, 1917"
  },
  wiseEconomist: {
    imgs: [
      {
        src: "img/q19-wise-economist-cartoon.png",
        cap: "\"A Wise Economist Asks a Question.\" Source: John T. McCutcheon, Chicago Tribune, 1931 (adapted)",
        alt: "Depression-era cartoon of a man who lost his bank savings sitting beside a squirrel that had stored away nuts for winter"
      }
    ]
  },
  courtPacking: {
    imgs: [
      {
        src: "img/q20-court-packing-cartoon.png",
        cap: "\"Trying to Change the Umpiring.\" Source: Ray O. Evans, Columbus Dispatch, February 10, 1937 (adapted)",
        alt: "Cartoon depicting FDR's plan to add justices to the Supreme Court as trying to change the umpires of a baseball game"
      }
    ]
  },
  internmentOrder: {
    imgs: [
      {
        src: "img/q21-japanese-internment-poster.png",
        cap: "\"Instructions to All Persons of Japanese Ancestry,\" Civilian Exclusion Order, April 1, 1942. Source: Oakland Museum of California (adapted)",
        alt: "Wartime exclusion order directing all persons of Japanese ancestry to evacuate a designated area of San Francisco"
      }
    ]
  },
  marshallPlan: {
    imgs: [
      {
        src: "img/q23-marshall-plan-cartoon.png",
        cap: "\"Can He Block It?\" Source: Edwin Marcus, ca. 1947, Library of Congress (adapted)",
        alt: "Cold War cartoon showing the Marshall Plan as economic aid Stalin is trying to block from reaching Europe"
      }
    ]
  },
  warPowers: {
    passage: `SECTION 1. This joint resolution may be cited as the "War Powers Resolution".

SEC. 2. (a) It is the purpose of this joint resolution to fulfill the intent of the framers of the Constitution of the United States and insure that the collective judgment of both the Congress and the President will apply to the introduction of United States Armed Forces into hostilities . . .

(c) The constitutional powers of the President as Commander-in-Chief to introduce United States Armed Forces into hostilities . . . are exercised only pursuant to (1) a declaration of war, (2) specific statutory authorization, or (3) a national emergency created by attack upon the United States, its territories or possessions, or its armed forces. . . .`,
    psource: "War Powers Resolution, 1973"
  },
  votingRightsSigning: {
    imgs: [
      {
        src: "img/q27-voting-rights-act-signing.jpg",
        cap: "President Lyndon B. Johnson signs the Voting Rights Act as Martin Luther King Jr. and other civil rights leaders look on at the U.S. Capitol. Source: LBJ Presidential Library, August 6, 1965 (adapted)",
        alt: "Photograph of President Johnson seated at a desk signing the Voting Rights Act while Martin Luther King Jr. and other leaders watch"
      }
    ]
  },
  seqMeatpacking: {
    passage: `Document 1

. . . There would be meat that had tumbled out on the floor, in the dirt and sawdust, where the workers had tramped and spit uncounted billions of consumption [tuberculosis] germs. There would be meat stored in great piles in rooms; and the water from leaky roofs would drip over it, and thousands of rats would race about on it. . . . All of their sausage came out of the same bowl, but when they came to wrap it they would stamp some of it "special," and for this they would charge two cents more a pound. . . .
Source: Upton Sinclair, The Jungle, February 1906

Document 2

The Secretary [of Agriculture] shall cause to be made, by experts in sanitation or by other competent inspectors, such inspection of all slaughtering, meat canning, salting, packing, rendering, or similar establishments . . . to inform himself concerning the sanitary conditions of the same . . . and where the sanitary conditions of any such establishment are such that the meat or meat food products are rendered adulterated [contaminated], he shall refuse to allow said meat or meat food products to be labeled, marked, stamped or tagged as "inspected and passed."
Source: Meat Inspection Act, June 30, 1906, as amended in 1967 and 2005`
  },
  seqBostonMassacre: {
    passage: `Document 2

The following is an excerpt of Captain Thomas Preston's testimony in the trial of British soldiers involved in the Boston Massacre, 1770.

. . . In my way there I saw the people in great commotion, and heard them use the most cruel and horrid threats against the troops. . . . On my asking the soldiers why they fired without orders, they said they heard the word fire and supposed it came from me. This might be the case as many of the mob called out fire, fire, but I assured the men that I gave no such order; that my words were, don't fire, stop your firing. . . .
Source: Transcript of British Captain Thomas Preston's testimony, "The Boston Massacre, The British View, 1770," EyeWitness to History, 2009`,
    imgs: [
      {
        src: "img/q30-boston-massacre-engraving.jpg",
        cap: "Document 1: \"The Bloody Massacre Perpetrated in King Street Boston on March 5th 1770 by a Party of the 29th Regiment.\" Source: Engraved and printed by Paul Revere, Library of Congress",
        alt: "Paul Revere's engraving of a line of British soldiers firing into a crowd of colonists during the Boston Massacre"
      }
    ]
  },
  clBaker: {
    passage: `. . . In the years before the Civil War, American women began a campaign for the vote that lasted nearly seventy-five years. . . . Initially, suffrage was one of several reforms intended to end the significant legal, political, religious, and cultural discriminations against nineteenth-century women. In the 1840s and 1850s, activists targeted injustices ranging from child custody laws that favored fathers to prohibitions against women speaking in public, the denial of equal education, and the existence of a double sex standard. . . . women at the 1848 Seneca Falls convention resolved, among other injustices, that "all laws which . . . place her in a position inferior to that of man are contrary to the great precept of nature and therefore of no force or authority." . . .`,
    psource: "Jean H. Baker, ed., Introduction to Votes For Women: The Struggle for Suffrage Revisited, Oxford University Press, 2002"
  },
  clHaessler: {
    passage: `Document 2a

Lucy Haessler learned about the suffragette movement while attending meetings with her mother in Washington, DC, in the early 1900s.

. . . The suffragettes had a big headquarters in downtown Washington, almost across from the Supreme Court Building. My mother would take me up there on Saturdays when she volunteered to help out with mailings. . . . The suffragettes organized pickets and marches and rallies. It wasn't anything comparable to the violence that the British women were going through in their fight for suffrage. . . .
Source: Peter Jennings and Todd Brewster, The Century, Doubleday, 1998`,
    imgs: [
      {
        src: "img/q32-suffrage-picket-line.jpg",
        cap: "Document 2b: \"The First Picket Line — College Day in the picket line,\" February 1917. Source: Library of Congress (adapted)",
        alt: "Photograph of women holding banners in a suffrage picket line outside the White House, 1917"
      }
    ]
  },
  clAntiSuffrage: {
    passage: `Document 3b

From the inception of the woman suffrage movement through the ratification of the Nineteenth Amendment in 1920, there were women and men who vigorously opposed it. . . . Early antisuffragists . . . were primarily concerned that the ballot would disrupt women's domestic and maternal roles and create disharmony in the family. . . . Other early arguments . . . included the following:
- Women have all the rights they need already;
- The ballot will degrade women by causing them to mingle in the "dirty," corrupt world of politics;
- Women don't need the vote because their husbands already vote for what is in women's best interests . . .
Source: Judith E. Harper, Susan B. Anthony: A Biographical Companion, ABC-CLIO (adapted)`,
    imgs: [
      {
        src: "img/q33-anti-suffrage-headquarters.jpg",
        cap: "Document 3a: anti-suffrage headquarters — \"Many men showed interest in the arguments of the anti-suffragists.\" Source: Library of Congress, ca. 1911",
        alt: "Photograph of men gathered outside the headquarters of an anti-woman-suffrage organization, ca. 1911"
      }
    ]
  },
  clCooney: {
    passage: `. . . this struggle was waged every bit as seriously as any struggle for equality, and we would do well to consider how women were able to do what men have rarely even tried, changing society in a positive and lasting way without violence and death. . . . Here are models of political leadership, of women organizers and administrators, activists and lobbyists. Here are the first women lawyers and doctors and ministers, the first women candidates, the first office-holders. . . .`,
    psource: "Robert Cooney, \"Taking a New Look at the Woman Suffrage Movement,\" in The Feminist Movement, Greenhaven Press, 2002"
  },
  clWeiss: {
    passage: `. . . The lessons of the woman suffrage struggle deeply influenced later American social justice and advocacy [public interest] movements. The lobbying, public relations, and grassroots organizing techniques developed by the suffragists, as well as their use of nonviolent protests and civil disobedience, stood as a model for midcentury African American civil rights campaigners, anti-Vietnam War protest groups, and gay rights activists. . . .`,
    psource: "Elaine Weiss, The Woman's Hour: The Great Fight to Win the Vote, Viking, 2018"
  },
  clRankin: {
    passage: `Document 6a

Jeannette Rankin made history 100 years ago this year [1917] when she took office as the first female member of Congress. "I may be the first woman member of Congress, but I won't be the last," the Montana Republican predicted . . . Rankin was right: In the century since . . . hundreds of women have followed in her footsteps. But women remain underrepresented in all major political offices and top business leadership positions in the United States. . . .
Source: Anna Brown, Pew Research Center, March 20, 2017 (adapted)`,
    imgs: [
      {
        src: "img/q36-women-leaders-chart.png",
        cap: "Document 6b: Women leaders in national government, state government, and major corporations, 1965-2017. Source: Pew Research Center (adapted)",
        alt: "Chart showing the rising percentage of women in the U.S. Senate, House, Cabinet, governorships, state legislatures, and corporate leadership from the 1960s to 2017"
      }
    ]
  }
};

const ALL_CARDS = [
{
  ...STIMULI.paine,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. According to this passage from Common Sense, the author is",
  "choices": [
    "trying to convince Americans to remain English colonists",
    "suggesting that the colonies join a European confederation against England",
    "proposing that the colonies revise the Articles of Confederation",
    "urging Americans to become independent from their mother country"
  ],
  "answer": 3,
  "back": "(4) urging Americans to become independent from their mother country — Paine argues it is absurd for a continent to be governed by an island; Common Sense rallied colonists for independence."
},
{
  ...STIMULI.paine,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. What is the primary argument used in this passage by Thomas Paine to make his point?",
  "choices": [
    "There is no economic relationship between the American colonies and England.",
    "England cannot effectively govern the colonies because America is so much larger.",
    "The American colonies are already allied with France and do not need England.",
    "England has denied the colonists any form of self-government."
  ],
  "answer": 1,
  "back": "(2) England cannot effectively govern the colonies because America is so much larger — \"In no instance hath nature made the satellite larger than its primary planet.\""
},
{
  ...STIMULI.federalist51,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. What was the primary reason James Madison wrote this and other Federalist Papers?",
  "choices": [
    "to support ratification of the Constitution",
    "to support creation of a national bank",
    "to encourage increasing ties to Europe",
    "to encourage the development of political parties"
  ],
  "answer": 0,
  "back": "(1) to support ratification of the Constitution — the Federalist Papers were written to persuade New York to ratify the new Constitution."
},
{
  ...STIMULI.federalist51,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Which constitutional principle does Madison most directly describe in this passage?",
  "choices": [
    "reserving the power of judicial review",
    "separation of powers between the branches of government",
    "support for the rule of law",
    "creation of a powerful military"
  ],
  "answer": 1,
  "back": "(2) separation of powers — Madison describes dividing offices \"in such a manner as that each may be a check on the other.\""
},
{
  ...STIMULI.jeffersonEmbargo,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. According to this passage, what was President Thomas Jefferson's primary objective in proposing the Embargo Acts?",
  "choices": [
    "to raise revenue",
    "to limit the slave trade",
    "to avoid war",
    "to increase trade"
  ],
  "answer": 2,
  "back": "(3) to avoid war — Jefferson believed economic sanctions could be a substitute for war, which he viewed as \"intolerable and unnecessary.\""
},
{
  ...STIMULI.jeffersonEmbargo,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. What was one result of the failure of the Embargo Acts?",
  "choices": [
    "Louisiana Purchase",
    "War of 1812",
    "Missouri Compromise",
    "Gibbons v. Ogden decision"
  ],
  "answer": 1,
  "back": "(2) War of 1812 — the embargo crippled U.S. trade without stopping British and French seizures; continued tensions led to the War of 1812."
},
{
  ...STIMULI.lincolnInaugural,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. What is one reason President Abraham Lincoln included these statements in this address?",
  "choices": [
    "to reduce the fears of slave-holding states",
    "to reestablish the foreign slave trade",
    "to increase support of northern abolitionists",
    "to encourage the expansion of slavery into the West"
  ],
  "answer": 0,
  "back": "(1) to reduce the fears of slave-holding states — Lincoln assured the South he had no purpose to interfere with slavery where it already existed, hoping to prevent secession."
},
{
  ...STIMULI.lincolnInaugural,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. Which later action by President Lincoln demonstrated a change from his 1861 position?",
  "choices": [
    "signing the Pacific Railway Act",
    "appointing William Seward Secretary of State",
    "issuing the Emancipation Proclamation",
    "suspending habeas corpus"
  ],
  "answer": 2,
  "back": "(3) issuing the Emancipation Proclamation — the 1863 proclamation freed enslaved people in the rebelling states, a clear shift from his 1861 promise not to touch slavery."
},
{
  ...STIMULI.turner,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. Which geographic feature does Frederick Jackson Turner suggest as primary in the creation of the American character?",
  "choices": [
    "an irregular coastline",
    "the Great Lakes",
    "unsettled wilderness",
    "the Mohawk Valley"
  ],
  "answer": 2,
  "back": "(3) unsettled wilderness — Turner's \"frontier thesis\" argues the continually advancing frontier line shaped a uniquely American character."
},
{
  ...STIMULI.turner,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. Which federal action is most consistent with the ideas expressed by Frederick Jackson Turner in this excerpt?",
  "choices": [
    "passage of the Federal Reserve Act",
    "establishment of the Freedmen's Bureau",
    "decision in Plessy v. Ferguson",
    "passage of the Homestead Act"
  ],
  "answer": 3,
  "back": "(4) passage of the Homestead Act — by giving free western land to settlers, it promoted the westward frontier expansion Turner celebrated."
},
{
  ...STIMULI.demPlatform1900,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. The authors of the passage would have been most critical of the activities of which two individuals?",
  "choices": [
    "Jacob Riis and Ida Tarbell",
    "John D. Rockefeller and Andrew Carnegie",
    "William Jennings Bryan and Eugene V. Debs",
    "Margaret Sanger and Jane Addams"
  ],
  "answer": 1,
  "back": "(2) John D. Rockefeller and Andrew Carnegie — the platform condemns \"private monopolies\"; Rockefeller (Standard Oil) and Carnegie (steel) built the era's great trusts."
},
{
  ...STIMULI.demPlatform1900,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. During the late 19th and early 20th centuries, how did Congress attempt to address these practices?",
  "choices": [
    "They authorized a federal takeover of large industries.",
    "They declared that all trade was interstate commerce.",
    "They implemented a minimum wage.",
    "They passed antitrust legislation."
  ],
  "answer": 3,
  "back": "(4) They passed antitrust legislation — the Sherman Antitrust Act (1890) and Clayton Antitrust Act (1914) aimed to break up monopolies."
},
{
  ...STIMULI.maineHeadline,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. A historian would most likely use this document to investigate events leading up to the",
  "choices": [
    "annexation of Alaska",
    "war with Spain",
    "Open Door policy",
    "invasion of Mexico"
  ],
  "answer": 1,
  "back": "(2) war with Spain — sensational \"yellow journalism\" blaming Spain for the Maine explosion helped push the United States into the Spanish-American War (1898)."
},
{
  ...STIMULI.maineHeadline,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. How did United States foreign policy change in the years immediately following this event?",
  "choices": [
    "The United States entered a period of overseas expansion.",
    "The United States pursued a policy of containment.",
    "The United States became more isolated.",
    "The United States rejected the goal of Manifest Destiny."
  ],
  "answer": 0,
  "back": "(1) The United States entered a period of overseas expansion — victory in 1898 brought the Philippines, Puerto Rico, and Guam, launching an era of American imperialism."
},
{
  ...STIMULI.migrationMap,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. What was a main reason for the movement of people as shown on this map?",
  "choices": [
    "Foreign food imports replaced domestic production of crops.",
    "Northern states banned all forms of racial discrimination.",
    "Abolitionists promised a means of escape from slavery.",
    "Industrialization provided more employment opportunities."
  ],
  "answer": 3,
  "back": "(4) Industrialization provided more employment opportunities — in the Great Migration, African Americans left the South for factory jobs in Northern and Western cities."
},
{
  ...STIMULI.migrationMap,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. What was one result of the migration shown on the map?",
  "choices": [
    "The South became the new destination for most European immigrants.",
    "The Democratic Party declined in the northern half of the country.",
    "American culture was enriched by new forms of music and literature.",
    "Segregated communities throughout the nation came to an end."
  ],
  "answer": 2,
  "back": "(3) American culture was enriched by new forms of music and literature — the Great Migration fueled movements such as the Harlem Renaissance and the spread of jazz and blues."
},
{
  ...STIMULI.laFollette,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. According to the passage, what is one argument in support of free speech during wartime?",
  "choices": [
    "Citizens must maintain their right to control the government even in times of war.",
    "Citizens must support the decisions of elected officials.",
    "Military leaders are bound by constitutional oath to defend the rights of the people.",
    "Congress has the authority to pass laws limiting first amendment rights."
  ],
  "answer": 0,
  "back": "(1) Citizens must maintain their right to control the government even in times of war — La Follette argues the right to control one's own government and to free speech must not be surrendered."
},
{
  ...STIMULI.laFollette,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. Which Supreme Court decision addresses the issue raised by Senator La Follette in this speech?",
  "choices": [
    "Wabash, St. Louis & Pacific R.R. v. Illinois",
    "Plessy v. Ferguson",
    "Northern Securities Co. v. United States",
    "Schenck v. United States"
  ],
  "answer": 3,
  "back": "(4) Schenck v. United States — the 1919 ruling held that speech creating a \"clear and present danger\" could be limited in wartime, defining the limits of free speech La Follette defended."
},
{
  ...STIMULI.wiseEconomist,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. Why were President Herbert Hoover and the Republican Party unable to solve the problem addressed in this cartoon?",
  "choices": [
    "They believed in limited federal government intervention in economic activity.",
    "They knew the problem existed only in rural areas of the United States.",
    "They thought that foreign influences were the primary cause of the bank crisis.",
    "They believed the federal government must first pay back those who lost money due to stock speculation."
  ],
  "answer": 0,
  "back": "(1) They believed in limited federal government intervention in economic activity — Hoover's faith in laissez-faire and \"rugged individualism\" limited his response to the Depression's bank failures."
},
{
  ...STIMULI.courtPacking,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. What was the reason for President Franklin D. Roosevelt's reaction to the Supreme Court as shown in this cartoon?",
  "choices": [
    "Congress had failed to pass any New Deal legislation.",
    "Several New Deal programs had been invalidated.",
    "The House of Representatives had voted to impeach President Roosevelt.",
    "Several Supreme Court Justices had been removed from office."
  ],
  "answer": 1,
  "back": "(2) Several New Deal programs had been invalidated — after the Court struck down the NRA and AAA, FDR proposed his \"court-packing\" plan to add justices."
},
{
  ...STIMULI.internmentOrder,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. Which situation led the Western Defense Command and Fourth Army Wartime Civil Control Administration to issue this order?",
  "choices": [
    "the Japanese attack on Pearl Harbor",
    "the lack of adequate housing on the West Coast",
    "widespread acts of espionage by Japanese Americans",
    "efforts to deport Japanese Americans"
  ],
  "answer": 0,
  "back": "(1) the Japanese attack on Pearl Harbor — the December 1941 attack led to Executive Order 9066 and the forced relocation and internment of Japanese Americans."
},
{
  ...STIMULI.internmentOrder,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. What Supreme Court case upheld the constitutionality of this order?",
  "choices": [
    "Mapp v. Ohio",
    "Korematsu v. United States",
    "Gideon v. Wainwright",
    "Miranda v. Arizona"
  ],
  "answer": 1,
  "back": "(2) Korematsu v. United States — the 1944 decision upheld the wartime exclusion and internment of Japanese Americans as a military necessity."
},
{
  ...STIMULI.marshallPlan,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. What was a primary purpose of the Marshall Plan?",
  "choices": [
    "to develop better relations with the Soviet Union",
    "to expand United States territory",
    "to support revolutions in the Middle East",
    "to contain the spread of communism"
  ],
  "answer": 3,
  "back": "(4) to contain the spread of communism — the Marshall Plan rebuilt war-torn Western Europe so its struggling nations would resist communism."
},
{
  ...STIMULI.marshallPlan,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. The Soviet response to the Marshall Plan contributed to",
  "choices": [
    "a decline in United States-European trade",
    "increased aid to African nations",
    "the Cold War",
    "the end of the North Atlantic Treaty Organization (NATO)"
  ],
  "answer": 2,
  "back": "(3) the Cold War — the Soviets rejected Marshall aid and tightened control over Eastern Europe, deepening the Cold War division of the continent."
},
{
  ...STIMULI.warPowers,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. The purpose of this law was to",
  "choices": [
    "limit the power of the president from involving the United States in extended wars",
    "expand the power of the president as commander in chief",
    "allow the president to declare war on foreign countries",
    "prevent the president from signing a treaty without the consent of Congress"
  ],
  "answer": 0,
  "back": "(1) limit the power of the president from involving the United States in extended wars — the War Powers Resolution requires the president to consult Congress and withdraw forces absent authorization."
},
{
  ...STIMULI.warPowers,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. What event most directly led to the passage of this act?",
  "choices": [
    "President Nixon's visit to China",
    "President Kennedy's response to the Cuban missile crisis",
    "involvement in the Vietnam War",
    "imposition of the Arab oil embargo"
  ],
  "answer": 2,
  "back": "(3) involvement in the Vietnam War — the long, undeclared war led Congress to pass the 1973 resolution reasserting its role over the use of military force."
},
{
  ...STIMULI.votingRightsSigning,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. Which presidential role is being demonstrated in the photograph?",
  "choices": [
    "commander in chief of the armed forces",
    "granting reprieves and pardons for federal offenses",
    "treaty-making powers with foreign nations",
    "chief executive approving congressional bills"
  ],
  "answer": 3,
  "back": "(4) chief executive approving congressional bills — President Johnson is signing the Voting Rights Act passed by Congress into law."
},
{
  ...STIMULI.votingRightsSigning,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What was one way the Voting Rights Act expanded the civil rights of African Americans?",
  "choices": [
    "It stopped the practice of sharecropping.",
    "It ended discrimination in public facilities.",
    "It outlawed the use of literacy tests.",
    "It forced the integration of public schools."
  ],
  "answer": 2,
  "back": "(3) It outlawed the use of literacy tests — the Voting Rights Act of 1965 banned literacy tests and authorized federal oversight of voter registration in discriminatory areas."
},
{
  ...STIMULI.seqMeatpacking,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: an excerpt from Upton Sinclair's The Jungle (1906) and the Meat Inspection Act (1906). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: the Progressive Era. Muckraking journalists and novelists exposed the abuses of industrial America; Upton Sinclair's The Jungle (1906) vividly described filthy, unsafe conditions in Chicago's meatpacking plants, shocking the public (and President Theodore Roosevelt). Relationship: Cause and Effect — the public outrage created by Doc 1 directly caused the federal response in Doc 2. Congress passed the Meat Inspection Act and the Pure Food and Drug Act in 1906, establishing federal inspection and regulation of food, a hallmark of Progressive reform expanding the government's role in protecting consumers."
},
{
  ...STIMULI.seqBostonMassacre,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: Paul Revere's engraving of the Boston Massacre (Doc 1) and Captain Thomas Preston's trial testimony (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 1's reliability as evidence.",
  "back": "Model answer — Context: by 1770, Britain had stationed troops in Boston to enforce taxes (the Townshend Acts) after colonial protests; tension between soldiers and colonists erupted on March 5, 1770, when troops fired into a crowd, killing five. Reliability of Doc 1: Revere's engraving is propaganda — its purpose was to inflame colonial anger and its point of view is strongly anti-British, showing an orderly line of soldiers deliberately firing on peaceful, unarmed colonists. That bias makes it unreliable as an objective record of the event (Preston's testimony in Doc 2 describes a threatening mob and confusion over the order to fire), though it is very useful evidence for studying how patriots used propaganda to build support for independence."
},
{
  ...STIMULI.clBaker,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — Jean H. Baker, Votes For Women, 2002). According to Jean H. Baker, what was ONE historical circumstance that led women to seek the right to vote?",
  "back": "Nineteenth-century women faced significant legal, political, religious, and cultural discrimination — child custody laws that favored fathers, bans on women speaking in public, denial of equal education, and a double sex standard. Suffrage was sought as a way to end these injustices; the 1848 Seneca Falls convention launched the campaign by declaring laws that placed women in an inferior position to be \"of no force or authority.\""
},
{
  ...STIMULI.clHaessler,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2a/2b — Lucy Haessler recollection + 1917 picket-line photo). Based on these documents, what was ONE effort made by suffragettes to gain support for woman's suffrage?",
  "back": "Suffragettes ran a downtown Washington headquarters and organized mailings, pickets, marches, and rallies to build support (Doc 2a); Document 2b shows the 1917 \"College Day\" picket line outside the White House — women publicly demonstrating and lobbying for the vote."
},
{
  ...STIMULI.clAntiSuffrage,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3a/3b — anti-suffrage headquarters + Harper). Based on these documents, state ONE reason for opposition to the efforts to gain woman's suffrage.",
  "back": "Antisuffragists argued the vote would disrupt women's domestic and maternal roles and create disharmony in the family. Other arguments: women already had all the rights they needed; voting would degrade women by drawing them into the \"dirty,\" corrupt world of politics; and women did not need the vote because their husbands already voted in their interest."
},
{
  ...STIMULI.clCooney,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Robert Cooney). According to Robert Cooney, what is ONE impact of the efforts to gain woman's suffrage?",
  "back": "The suffrage movement changed society in a positive and lasting way without violence, and it produced models of political leadership — women organizers, administrators, activists, and lobbyists, and the first women lawyers, doctors, ministers, candidates, and office-holders."
},
{
  ...STIMULI.clWeiss,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5 — Elaine Weiss). According to Elaine Weiss, what is ONE impact of the efforts to achieve woman's suffrage?",
  "back": "The lobbying, public-relations, and grassroots-organizing techniques the suffragists developed — along with their nonviolent protest and civil disobedience — became a model for later social-justice movements, including the African American civil rights movement, anti-Vietnam War protests, and gay rights activists."
},
{
  ...STIMULI.clRankin,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6a/6b — Jeannette Rankin + Pew chart). Based on these documents, what is ONE impact of achieving woman's suffrage?",
  "back": "Women entered elected and appointed office: Jeannette Rankin became the first woman in Congress in 1917, and she was \"not the last\" — the chart shows women's share of seats rising sharply between 1965 and 2017 (e.g., the U.S. House from about 2% to roughly 21%), even though women remain underrepresented in top political and business positions."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Expansion of Democracy: Woman's Suffrage). Write an essay that describes the historical circumstances surrounding woman's suffrage, explains at least TWO efforts to address it, and discusses the impact of those efforts on the United States/American society (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Doc 1): before the Civil War, women faced legal, political, and cultural discrimination (no vote, unequal education, child-custody and property laws favoring men); the 1848 Seneca Falls Convention and its Declaration of Sentiments launched a 75-year campaign for the vote. Efforts (explain 2+): (a) organizing and public protest — headquarters, mailings, marches, and the 1917 White House picket lines (Docs 2, 4); (b) lobbying, public relations, and nonviolent civil disobedience (Doc 5); plus outside information such as Susan B. Anthony and Elizabeth Cady Stanton, the NAWSA and Alice Paul's National Woman's Party, and the ratification of the Nineteenth Amendment in 1920. Note the opposition (Doc 3). Impact (Docs 5, 6): women won the vote and entered political life — Jeannette Rankin and a rising share of women in Congress and government — and the movement's tactics became a model for the civil rights and other later movements, though full political equality remains unfinished."
}
];
