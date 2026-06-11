// Shared card deck for the January 2024 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-12024-sk.pdf).
const STIMULI = {
  miantonomo: {
    passage: `Brothers, we must be as one as the English are, or we shall all be destroyed. You know our fathers had plenty of deer and skins and our plains were full of game and turkeys, and our coves and rivers were full of fish.

But, brothers, since these Englishmen have seized our country, they have cut down the grass with scythes, and the trees with axes. Their cows and horses eat up the grass, and their hogs spoil our bed of clams; and finally we shall all starve to death . . . All the sachems [tribal chiefs] both to the east and the west have joined with us, and we are resolved to fall upon them at a day appointed . . .`,
    psource: "Narragansett Chief Miantonomo"
  },
  declaration: {
    passage: `. . . "That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it," . . .`,
    psource: "Declaration of Independence, 1776"
  },
  embargoSong: {
    passage: `Our ships all in motion,
Once whiten'd the ocean
They sail'd and return'd with a Cargo;
Now doom'd to decay
They are fallen a prey,
To Jefferson, worms, and EMBARGO.`,
    psource: "Henry Mellen, 1808, Massachusetts Historical Society Broadsides"
  },
  texasMap: {
    imgs: [
      {
        src: "img/q07-texas-boundary-map.png",
        cap: "Republic of Texas Boundary Dispute with Mexico, 1836 — the area claimed by both Texas and Mexico between the Nueces River and the Rio Grande. Source: maps.com (adapted)",
        alt: "Map showing the disputed Texas-Mexico boundary, with Texas claiming the Rio Grande and Mexico claiming the Nueces River"
      }
    ]
  },
  chineseExclusion: {
    passage: `Forty-Seventh Congress. Session I. 1882. Chapter 126. An act to execute certain treaty stipulations relating to Chinese.

. . . Whereas, in the opinion of the Government of the United States the coming of Chinese laborers to this country endangers the good order of certain localities . . . Be it enacted . . . That from and after the expiration of ninety days next after the passage of this act, and until the expiration of ten years . . . the coming of Chinese laborers to the United States be, and the same is hereby, suspended . . .`,
    psource: "National Archives and Records Administration"
  },
  suffragePicket: {
    imgs: [
      {
        src: "img/q11-women-suffrage-picket.jpg",
        cap: "Women picket in front of the White House for their right to vote in 1917. Source: Library of Congress (adapted)",
        alt: "Photograph of women holding banners picketing for woman suffrage outside the White House in 1917"
      }
    ]
  },
  iToo: {
    passage: `I, Too

I, too, sing America.
I am the darker brother.
They send me to eat in the kitchen
When company comes,
But I laugh,
And eat well,
And grow strong.
Tomorrow,
I'll be at the table
When company comes.
Nobody'll dare
Say to me,
"Eat in the kitchen,"
Then.
Besides,
They'll see how beautiful I am
And be ashamed—
I, too, am America.`,
    psource: "Langston Hughes, 1924, The Collected Poems of Langston Hughes, Alfred A. Knopf"
  },
  quotaCartoon: {
    imgs: [
      {
        src: "img/q15-immigration-quota-cartoon.png",
        cap: "\"The Only Way to Handle It\" — a \"3% Gate\" limiting arrivals from Europe. Source: Milton Halladay, Providence Journal (adapted)",
        alt: "1920s cartoon showing immigration from Europe funneled through a narrow gate marked '3%', supporting quota limits"
      }
    ]
  },
  dustLetter: {
    passage: `March 24, 1935
Dear Family,
. . . The dust is something fierce. Sometimes it lets up enough so we can see around . . . then we have a frenzied time of cleaning . . . We keep the doors and windows all shut tight, with wet papers on the sills. The tiny particles of dirt sift right through the walls. Two different times it has been an inch thick on my kitchen floor. . . . As for gardens, we had ours plowed, but now we do not know whether we have more or less soil. It's useless to plant anything.
Grace`,
    psource: "Deb Mulvey, ed., \"We Had Everything but Money\" (adapted)"
  },
  fdrSecondInaugural: {
    passage: `. . . I see one-third of a nation ill-housed, ill-clad, ill-nourished.

But it is not in despair that I paint you that picture. I paint it for you in hope . . . The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little. . . .`,
    psource: "President Franklin D. Roosevelt, Second Inaugural Address, January 20, 1937 (adapted)"
  },
  courtPacking: {
    imgs: [
      {
        src: "img/q20-court-packing-cartoon.png",
        cap: "\"To Furnish The Supreme Court Practical Assistance.\" Source: Gene Elderman, Washington Post, February 6, 1937 (adapted)",
        alt: "Cartoon depicting FDR's plan to add justices to the Supreme Court"
      }
    ]
  },
  marshall: {
    passage: `. . . Europe's requirements for the next 3 or 4 years of foreign food and other essential products—principally from America—are so much greater than her present ability to pay that she must have substantial additional help, or face economic, social, and political deterioration of a very grave character. . . . Our policy is directed not against any country or doctrine but against hunger, poverty, desperation, and chaos. Its purpose should be the revival of working economy in the world so as to permit the emergence of political and social conditions in which free institutions can exist. . . .`,
    psource: "Secretary of State George Marshall, June 5, 1947"
  },
  littleRock: {
    passage: `[Reporter Mike] WALLACE: . . . A Federal District Court has already ruled that Little Rock [Arkansas] Central High School should be integrated. . . . will you respect this decision and give your okay to integration beginning tomorrow morning?

[Governor Orval] FAUBUS: I've previously given my okay to integration. The Guard was not called out to prevent integration, but to keep the peace and order of the community. . . .`,
    psource: "Mike Wallace interview with Arkansas Governor Orval Faubus, September 15, 1957"
  },
  vietnamCartoon: {
    imgs: [
      {
        src: "img/q26-vietnam-cartoon.png",
        cap: "\"The Other Ascent into the Unknown.\" Source: Herblock, Washington Post, June 10, 1965",
        alt: "1965 Herblock cartoon comparing escalating U.S. involvement in Vietnam to a rocket ascending into the unknown"
      }
    ]
  },
  poultryAct: {
    passage: `. . . Eight months ago I signed into law the Wholesome Meat Act of 1967. That landmark bill capped a crusade that had begun 60 years ago—[in the presidency of Theodore Roosevelt]—to assure American housewives that the meat they served their families was pure . . . Today I am proud to sign a bill that will extend the same coverage to all poultry products. . . . The Wholesome Poultry Products Act of 1968 will insure that dirty plants will have to clean up or close down. . . .`,
    psource: "President Lyndon B. Johnson, Statement Upon Signing the Wholesome Poultry Products Act, August 19, 1968"
  },
  seqForeignPolicy: {
    passage: `Document 1

. . . The great rule of conduct for us in regard to foreign nations is, in extending our commercial relations to have with them as little political connection as possible. . . . Europe has a set of primary interests which to us have none or a very remote relation. . . . Our detached and distant situation invites and enables us to pursue a different course. . . .
Source: President George Washington, Farewell Address, September 19, 1796

Document 2

. . . In the wars of the European powers in matters relating to themselves we have never taken any part, nor does it comport [accord] with our policy so to do. . . . we should consider any attempt on their part to extend their system to any portion of this hemisphere as dangerous to our peace and safety. With the existing colonies or dependencies of any European power we have not interfered and shall not interfere. . . .
Source: James Monroe, message to Congress outlining what became known as the Monroe Doctrine, December 2, 1823`
  },
  seqStandardOil: {
    passage: `Document 2

To know every detail of the oil trade, to be able to reach at any moment its remotest point, to control even its weakest factor—this was John D. Rockefeller's ideal of doing business. . . . it followed as a corollary [conclusion] that the markets of the world belonged to him. . . . Mr. Rockefeller was driven to this new task of organization . . . by that thing so abhorrent [appalling] to his mind—competition. . . .
Source: Ida Tarbell, The History of the Standard Oil Company, 1904`,
    imgs: [
      {
        src: "img/q30-standard-oil-cartoon.png",
        cap: "Document 1: \"Next!\" — Standard Oil as an octopus reaching for the state houses, the Capitol, and the White House. Source: Udo J. Keppler, Puck, September 7, 1904 (adapted)",
        alt: "Cartoon of Standard Oil drawn as an octopus whose tentacles grip state houses, the U.S. Capitol, and reach toward the White House"
      }
    ]
  },
  clDisenfranchise: {
    passage: `. . . The result [of state efforts] was the virtual elimination of black voting in the South. . . . Louisiana, for example, reduced the number of black voters from one hundred thirty thousand to one thousand. . . . In 1898, the Supreme Court encouraged the disenfranchisement movement by ruling, in Williams v. Mississippi, that the suffrage provisions of the state's 1890 constitution did not violate the Fifteenth Amendment, since they did not "on their face discriminate between the races." . . . The Fourteenth Amendment provided that if any state deprived a group of male citizens of the franchise, it would lose part of its representation in Congress. But . . . this provision became a dead letter [broken promise] so far as African Americans were concerned. . . .`,
    psource: "Eric Foner, Forever Free: The Story of Emancipation and Reconstruction, Vintage Books, 2005"
  },
  clPamphlet: {
    passage: `This is an excerpt from a pamphlet published in Philadelphia around 1901. It was written by northern reformers who wanted to support African Americans who were trying to vote in southern states.`,
    imgs: [
      {
        src: "img/q32-voting-pamphlet.png",
        cap: "Document 2: \"What a colored man should do to vote\" — northern reformers' guide to the poll-tax, registration, and tax-receipt requirements facing Black voters in the South. Source: Press of E. A. Wright, Philadelphia, ca. 1901",
        alt: "Cover of a ca. 1901 pamphlet titled 'What a colored man should do to vote,' listing voting requirements such as paying poll taxes and keeping tax receipts"
      }
    ]
  },
  clFreedomSummer: {
    passage: `Orientation Prepares Summer Volunteers

OXFORD, OHIO–More than 750 volunteers have passed through two weeklong orientation sessions here preparing them for a summer's work in Mississippi. . . . The summer workers, 60% of them white, will work on voter registration, man community centers, and teach in Freedom Schools. . . . Staff members from the Student Nonviolent Coordinating Committee (SNCC), the group that pioneered civil rights work in rural areas of the South, helped orient the summer volunteers. . . .`,
    psource: "The Student Voice, Student Nonviolent Coordinating Committee, June 30, 1964"
  },
  clSelma: {
    passage: `AN AMERICAN CITIZEN VOTING . . . for an African American living in the Deep South in the 1960s . . . was a forbidden act, a dangerous act. There were nearly impossible obstacles to overcome: poll taxes, literacy tests, and hostile registrars. . . . And yet they persevered. They marched on county courthouses, confronted sheriffs, and went to jail. In Selma, Alabama, on March 7, 1965, a day remembered as Bloody Sunday, they endured a brutal attack from state troopers and local vigilantes. That event touched the conscience of the nation, forcing President Lyndon B. Johnson to place a voting rights bill at the forefront of his political agenda. . . . The Voting Rights Act [of 1965] transformed American democracy . . .`,
    psource: "Gary May, Bending Toward Justice: The Voting Rights Act and the Transformation of American Democracy, 2013"
  },
  clRegTable: {
    imgs: [
      {
        src: "img/q35-registration-table.png",
        cap: "Document 5: Registration by Race, Before and After 1965, in Southern States Covered by the Voting Rights Act (percent of voting-age population). Source: U.S. Commission on Civil Rights, 1975 (adapted)",
        alt: "Table comparing Black and white voter registration before (1965) and after (1967) the Voting Rights Act, showing large gains in Black registration (e.g., Mississippi 6.7% to 59.8%)"
      }
    ]
  },
  clObamaMap: {
    passage: `Document 6a

. . . 50 years ago today, President Johnson signed the Voting Rights Act into law to protect this precious right. It broke down legal barriers at the state level and at the local level that were keeping African Americans from exercising their constitutional right to vote. . . . On the ground, there are still too many ways in which people are discouraged from voting. Some of the protections that had been enshrined in the Voting Rights Act itself have been weakened as a consequence of court decisions . . . State legislatures have instituted procedures and practices that, although on the surface may appear neutral, have the effect of discouraging people from voting . . .
Source: President Barack Obama, "Remarks on the Voting Rights Act," August 6, 2015`,
    imgs: [
      {
        src: "img/q36-voting-restrictions-map.png",
        cap: "Document 6b: Voting Restrictions in America — states adding new voting restrictions (strict photo ID, early-voting cutbacks, registration limits) since 2010. Source: Brennan Center for Justice, 2017 (adapted)",
        alt: "Map of the United States shading the states that put new voting restrictions in place for the 2012 and 2016 elections"
      }
    ]
  }
};

const ALL_CARDS = [
{
  ...STIMULI.miantonomo,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. The situation described in this passage was caused by",
  "choices": [
    "Native Americans wasting valuable natural resources",
    "European settlement in North America",
    "intermarriage between British settlers and Native Americans",
    "sachems who had ordered the colonists' crops to be destroyed"
  ],
  "answer": 1,
  "back": "(2) European settlement in North America — Miantonomo blames the English for seizing the land, cutting the grass and trees, and letting their livestock destroy the game and clams his people depended on."
},
{
  ...STIMULI.miantonomo,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. What course of action does Chief Miantonomo support?",
  "choices": [
    "leaving their land and becoming hunters and gatherers",
    "relocating west of the Appalachian Mountains",
    "forming alliances to fight the colonial settlers",
    "making peace agreements with English settlers"
  ],
  "answer": 2,
  "back": "(3) forming alliances to fight the colonial settlers — he says the sachems \"have joined with us, and we are resolved to fall upon them at a day appointed.\""
},
{
  ...STIMULI.declaration,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. Which Enlightenment principle does this quotation refer to?",
  "choices": [
    "equal rights",
    "religious freedom",
    "separation of powers",
    "consent of the governed"
  ],
  "answer": 3,
  "back": "(4) consent of the governed — the people's \"Right . . . to alter or to abolish\" a destructive government reflects John Locke's idea that government rests on the consent of the governed."
},
{
  ...STIMULI.declaration,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. What impact did this quotation have on the American Revolution?",
  "choices": [
    "It led to the creation of a colonial monarchy.",
    "It supported efforts to compromise with the British.",
    "It helped to justify the colonists' fight for independence.",
    "It called for an increased British military presence in Europe."
  ],
  "answer": 2,
  "back": "(3) It helped to justify the colonists' fight for independence — the Declaration of Independence used this principle to argue the colonists had the right to overthrow British rule."
},
{
  ...STIMULI.embargoSong,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. The viewpoint expressed in this song reflects",
  "choices": [
    "opposition to the expansion of slavery",
    "support for United States involvement in European wars",
    "support for the embargo",
    "opposition to restrictions on American shipping"
  ],
  "answer": 3,
  "back": "(4) opposition to restrictions on American shipping — the song mocks Jefferson's embargo for leaving once-busy ships \"doom'd to decay.\""
},
{
  ...STIMULI.embargoSong,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. Why was New England concerned about President Thomas Jefferson's embargo?",
  "choices": [
    "It supplied a labor force to the rest of the nation.",
    "It depended on foreign trade for its economic prosperity.",
    "It formed the northern border with British Canada.",
    "It produced more agricultural goods than any other section of the nation."
  ],
  "answer": 1,
  "back": "(2) It depended on foreign trade for its economic prosperity — New England's shipping, fishing, and merchant economy was devastated by the ban on foreign trade."
},
{
  ...STIMULI.texasMap,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. This map could best be used to study the concept of",
  "choices": [
    "the War of 1812",
    "the Monroe Doctrine",
    "Manifest Destiny",
    "Social Darwinism"
  ],
  "answer": 2,
  "back": "(3) Manifest Destiny — the dispute over the Texas-Mexico boundary reflects the U.S. drive to expand westward across the continent."
},
{
  ...STIMULI.texasMap,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. The conflict shown on this map was settled by the",
  "choices": [
    "enactment of the Missouri Compromise",
    "war between the United States and Mexico",
    "passage of the Kansas-Nebraska Act",
    "ruling in the Gibbons v. Ogden case"
  ],
  "answer": 1,
  "back": "(2) war between the United States and Mexico — the Mexican-American War (1846-1848) settled the boundary at the Rio Grande and added the Mexican Cession."
},
{
  ...STIMULI.chineseExclusion,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. According to this excerpt, what is the main purpose of this act of Congress?",
  "choices": [
    "to increase the number of Chinese laborers recruited for work in the United States",
    "to prevent Chinese laborers from entering the United States",
    "to protect European immigrants from unsafe working conditions",
    "to require foreign-born immigrants to serve in the armed forces"
  ],
  "answer": 1,
  "back": "(2) to prevent Chinese laborers from entering the United States — the Chinese Exclusion Act (1882) suspended the immigration of Chinese laborers for ten years."
},
{
  ...STIMULI.chineseExclusion,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. This act of Congress supports the goals of",
  "choices": [
    "conservationists",
    "abolitionists",
    "industrialists",
    "nativists"
  ],
  "answer": 3,
  "back": "(4) nativists — the exclusion of Chinese immigrants reflected nativism, the favoring of native-born Americans and hostility toward immigrants."
},
{
  ...STIMULI.suffragePicket,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. The main goal of the women's rights movement in the early 20th century was to achieve",
  "choices": [
    "political equality",
    "equal pay for equal work",
    "improvements in living conditions",
    "better job opportunities"
  ],
  "answer": 0,
  "back": "(1) political equality — the women picketing the White House sought the right to vote, the core demand of the early-1900s suffrage movement."
},
{
  ...STIMULI.suffragePicket,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. Which statement best represents a reason why this protest was considered controversial?",
  "choices": [
    "The Senate had already repealed the Prohibition amendment.",
    "The country was dealing with public outrage over government corruption.",
    "President Wilson did not include women's demands in his Fourteen Points.",
    "Suffragists were picketing while German submarines were attacking American ships."
  ],
  "answer": 3,
  "back": "(4) Suffragists were picketing while German submarines were attacking American ships — protesting at the White House as the U.S. entered World War I (1917) struck many as unpatriotic."
},
{
  ...STIMULI.iToo,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. What concept is best illustrated in this 1924 poem written by Langston Hughes?",
  "choices": [
    "patriotism",
    "nationalism",
    "racial pride",
    "passive resistance"
  ],
  "answer": 2,
  "back": "(3) racial pride — Hughes insists \"I, too, am America,\" asserting the dignity and pride of African Americans."
},
{
  ...STIMULI.iToo,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. This poem is an example of the cultural movement known as",
  "choices": [
    "Transcendentalism",
    "Social Darwinism",
    "the Lost Generation",
    "the Harlem Renaissance"
  ],
  "answer": 3,
  "back": "(4) the Harlem Renaissance — the 1920s flowering of African American art, music, and literature in which Langston Hughes was a leading poet."
},
{
  ...STIMULI.quotaCartoon,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. Which policy is most directly related to the point of view expressed in this cartoon?",
  "choices": [
    "Quotas should be established for immigration.",
    "World War I refugees should be given jobs.",
    "Tariff rates on imports should be increased.",
    "Federal authorities should provide assistance to immigrants."
  ],
  "answer": 0,
  "back": "(1) Quotas should be established for immigration — the \"3% Gate\" represents the quota system that limited the percentage of immigrants admitted from each country."
},
{
  ...STIMULI.quotaCartoon,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. The policy represented by this cartoon was a response to",
  "choices": [
    "the country's demands that the United States follow a more open policy of immigration",
    "the belief that the United States needed to become more culturally diverse",
    "the growing number of immigrants arriving from Southern and Eastern Europe",
    "the demands by leaders of organized labor for more workers"
  ],
  "answer": 2,
  "back": "(3) the growing number of immigrants arriving from Southern and Eastern Europe — the 1920s quota laws were designed to sharply reduce immigration from those regions."
},
{
  ...STIMULI.dustLetter,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. What was one impact of the situation described in this letter?",
  "choices": [
    "Settlements on the Great Plains were banned.",
    "Many families were forced to migrate westward.",
    "Taxes on family farms were increased.",
    "Limitations were placed on agricultural exports."
  ],
  "answer": 1,
  "back": "(2) Many families were forced to migrate westward — Dust Bowl conditions drove thousands of \"Okies\" to leave the Plains for California in the 1930s."
},
{
  ...STIMULI.dustLetter,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. Which New Deal action attempted to address the causes of this situation?",
  "choices": [
    "The Securities and Exchange Commission limited stock speculation.",
    "The Civilian Conservation Corps implemented reforestation projects.",
    "The Social Security Act provided old age pensions.",
    "The Federal Deposit Insurance Corporation protected bank savings accounts."
  ],
  "answer": 1,
  "back": "(2) The Civilian Conservation Corps implemented reforestation projects — the CCC planted trees and did soil-conservation work to combat the erosion behind the Dust Bowl."
},
{
  ...STIMULI.fdrSecondInaugural,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. Which later presidential program is most similar to the idea expressed in this passage?",
  "choices": [
    "President Lyndon B. Johnson's Great Society in the 1960s",
    "President Jimmy Carter's Camp David Accords in the 1970s",
    "President Ronald Reagan's supply-side fiscal policy in the 1980s",
    "President George W. Bush's War on Terror in the 2000s"
  ],
  "answer": 0,
  "back": "(1) President Lyndon B. Johnson's Great Society — FDR's concern for the poor \"one-third of a nation\" parallels LBJ's War on Poverty and Great Society programs."
},
{
  ...STIMULI.courtPacking,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. What was the major reason President Franklin D. Roosevelt proposed the action illustrated in this cartoon?",
  "choices": [
    "The membership of the Supreme Court required greater social diversity.",
    "The Supreme Court had declared some New Deal programs unconstitutional.",
    "Current Supreme Court justices were not working hard enough.",
    "The jurisdiction of the Supreme Court needed to be expanded."
  ],
  "answer": 1,
  "back": "(2) The Supreme Court had declared some New Deal programs unconstitutional — FDR's 1937 \"court-packing\" plan aimed to add justices who would uphold the New Deal."
},
{
  ...STIMULI.courtPacking,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. Which constitutional principle was threatened by President Roosevelt's action?",
  "choices": [
    "checks and balances",
    "federalism",
    "popular sovereignty",
    "limited government"
  ],
  "answer": 0,
  "back": "(1) checks and balances — adding justices to overcome the Court's rulings would have undermined the judiciary's independent check on the other branches."
},
{
  ...STIMULI.marshall,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. By implementing this policy in Europe, the United States hoped to stabilize",
  "choices": [
    "democratic governments",
    "military dictatorships",
    "population growth",
    "colonialism"
  ],
  "answer": 0,
  "back": "(1) democratic governments — Marshall wanted economic recovery \"in which free institutions can exist,\" supporting democracy against communism."
},
{
  ...STIMULI.marshall,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. Which foreign policy does George Marshall's proposal most directly support?",
  "choices": [
    "isolationism",
    "containment",
    "imperialism",
    "disarmament"
  ],
  "answer": 1,
  "back": "(2) containment — the Marshall Plan was a key Cold War tool to contain the spread of communism by rebuilding Western Europe's economies."
},
{
  ...STIMULI.littleRock,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. The issue discussed in this interview resulted from an effort to enforce the Supreme Court decision in",
  "choices": [
    "Dred Scott v. Sanford",
    "Plessy v. Ferguson",
    "Brown v. Board of Education of Topeka",
    "Heart of Atlanta Motel v. United States"
  ],
  "answer": 2,
  "back": "(3) Brown v. Board of Education of Topeka — the 1957 Little Rock crisis arose from enforcing Brown's order to desegregate public schools."
},
{
  ...STIMULI.littleRock,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. Which action did President Eisenhower take to address the issue raised in this interview?",
  "choices": [
    "sending federal troops to protect African American students in Arkansas",
    "signing the Voting Rights Act passed by Congress",
    "forcing the resignation of Arkansas Governor Orval Faubus",
    "desegregating all southern schools"
  ],
  "answer": 0,
  "back": "(1) sending federal troops to protect African American students in Arkansas — Eisenhower federalized the National Guard and sent the 101st Airborne to escort the Little Rock Nine."
},
{
  ...STIMULI.vietnamCartoon,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. What was a major result of the situation portrayed in the cartoon?",
  "choices": [
    "Political support for an incumbent president increased.",
    "The debate over American intervention abroad intensified.",
    "The United Nations gained influence over American foreign policy.",
    "Expenditures on domestic programs increased."
  ],
  "answer": 1,
  "back": "(2) The debate over American intervention abroad intensified — escalating involvement in Vietnam (\"the other ascent into the unknown\") deeply divided the nation."
},
{
  ...STIMULI.poultryAct,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. President Lyndon B. Johnson's statements are most closely associated with the work of which Progressive Era muckraker?",
  "choices": [
    "Jane Addams",
    "Jacob Riis",
    "Upton Sinclair",
    "Ida B. Wells"
  ],
  "answer": 2,
  "back": "(3) Upton Sinclair — LBJ ties the food-inspection crusade back to Theodore Roosevelt's era, when Sinclair's The Jungle exposed the meatpacking industry."
},
{
  ...STIMULI.poultryAct,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What conclusion can be drawn from President Johnson's statement?",
  "choices": [
    "President Johnson favored policies to deregulate industry.",
    "American consumption of poultry was declining.",
    "The federal government should take ownership of meatpacking plants.",
    "President Johnson supported the expansion of consumer protection."
  ],
  "answer": 3,
  "back": "(4) President Johnson supported the expansion of consumer protection — extending federal inspection to poultry continued the government's role in protecting consumers."
},
{
  ...STIMULI.seqForeignPolicy,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: Washington's Farewell Address (1796) and the Monroe Doctrine (1823). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: the early republic was working out its place in a world dominated by European powers and recently independent Latin American nations. Relationship: Similarity (and Cause and Effect). Both documents express the policy of avoiding entanglement in Europe's affairs: Washington urges \"as little political connection as possible\" with Europe, and Monroe declares the U.S. will not take part in European wars. The Monroe Doctrine builds on Washington's principle — Washington's idea of avoiding entangling alliances influenced Monroe, who extended it by also warning European powers not to interfere in the Western Hemisphere, laying a foundation for American foreign policy for the next century."
},
{
  ...STIMULI.seqStandardOil,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: the \"Next!\" Standard Oil cartoon (Doc 1) and Ida Tarbell's history of Standard Oil (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 1's reliability as evidence.",
  "back": "Model answer — Context: during the Gilded Age, John D. Rockefeller's Standard Oil grew into a giant monopoly, and Progressive Era muckrakers like Ida Tarbell exposed the power of the trusts, fueling demands for antitrust regulation. Reliability of Doc 1: the cartoon's purpose was to attack Standard Oil, and its point of view is strongly anti-monopoly — it draws the company as an octopus whose tentacles grip the state houses, the Capitol, and the White House, exaggerating to make a political argument. That bias makes it persuasive editorializing rather than neutral evidence: it is very useful for understanding Progressive criticism of the trusts but is not an objective account of Standard Oil."
},
{
  ...STIMULI.clDisenfranchise,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — Eric Foner, Forever Free). According to this document, what is ONE historical circumstance related to voting by African Americans?",
  "back": "After Reconstruction, Southern states used poll taxes, literacy tests, and similar provisions to bring about the virtual elimination of Black voting (Louisiana cut its Black voters from 130,000 to 1,000), and in 1898 the Supreme Court's Williams v. Mississippi ruling encouraged disenfranchisement by upholding such measures, since they did not \"on their face\" discriminate by race."
},
{
  ...STIMULI.clPamphlet,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2 — \"What a colored man should do to vote,\" ca. 1901 pamphlet). Based on this document, what was ONE requirement that affected voting by African Americans?",
  "back": "The pamphlet, written to help African Americans vote in the South, laid out the obstacles they had to satisfy — such as paying a poll tax (and keeping the tax receipts as proof) and meeting registration and literacy requirements — devices Southern states used to keep Black citizens from voting."
},
{
  ...STIMULI.clFreedomSummer,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3 — The Student Voice, SNCC, 1964). Based on this document, what was ONE effort to address the issue of African American voting rights?",
  "back": "Freedom Summer (1964): the Student Nonviolent Coordinating Committee (SNCC) and more than 750 mostly white volunteers, trained in Ohio, went to Mississippi to register African American voters, staff community centers, and teach in Freedom Schools — despite great danger (three workers went missing at the start)."
},
{
  ...STIMULI.clSelma,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Gary May, Bending Toward Justice). According to this document, what is ONE effort to overcome obstacles to African American voting rights?",
  "back": "African Americans persevered against poll taxes, literacy tests, and violence by marching on county courthouses, confronting sheriffs, and going to jail — most dramatically at Selma, Alabama, where the Bloody Sunday attack on March 7, 1965, touched the nation's conscience and pushed President Johnson to make the Voting Rights Act a top priority."
},
{
  ...STIMULI.clRegTable,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5 — registration-by-race table). Based on this document, what was ONE impact of the Voting Rights Act in the South?",
  "back": "The Voting Rights Act sharply increased African American voter registration in the South: between 1965 and 1967, Black registration in Mississippi rose from 6.7% to 59.8%, in Alabama from 19.3% to 51.6%, and the overall total for the covered states climbed from 29.3% to 52.1%."
},
{
  ...STIMULI.clObamaMap,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6a/6b — Obama's 2015 remarks + Brennan Center map). Based on these documents, what is ONE reason the fight for African American voting rights needs to continue?",
  "back": "Protections in the Voting Rights Act have been weakened by court decisions, and many states have since passed new restrictions — strict photo-ID requirements, early-voting cutbacks, and registration limits (23 states by 2017) — that, while appearing neutral, have the effect of discouraging voting and can disproportionately affect African Americans, threatening to erode the gains of 1965."
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — African American Voting Rights). Write an essay that describes the historical circumstances surrounding African American voting rights, explains at least TWO efforts to address them, and discusses the extent to which the efforts were successful (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 2): although the 15th Amendment (1870) barred denying the vote by race, after Reconstruction Southern states disenfranchised Black citizens through poll taxes, literacy tests, grandfather clauses, and violence, upheld by Williams v. Mississippi (1898). Efforts (explain 2+): grassroots activism — SNCC's Freedom Summer voter-registration drives and the Selma marches/Bloody Sunday (Docs 3, 4); and federal action — the Voting Rights Act of 1965, which banned literacy tests and authorized federal oversight (Doc 4). Extent of success: the VRA dramatically raised Black registration and political power in the South (Doc 5), a major success; but the struggle continues, as later court decisions (Shelby County v. Holder) and new state restrictions have weakened protections (Doc 6), so the effort has been substantial but incomplete."
}
];
