// Shared card deck for the June 2024 U.S. History & Government Regents apps.
// Loaded via <script src="cards.js"> by quizshow.html and flashcards.html.
// type: 'mc' = Part I multiple choice; 'self' = self-graded Parts II-III tasks.
// Answers verified against the official scoring key (ushg-62024-sk.pdf).
const STIMULI = {
  franklin: {
    passage: `. . . Having frequent Occasions to hold public Councils, they have acquired great Order and Decency in conducting them. The old Men sit in the foremost Ranks, the Warriors in the next, and the Women and Children in the hindmost. The Business of the Women is to take exact Notice of what passes, imprint it in their Memories (for they have no Writing), and communicate it to their Children. They are the Records of the Council, and they preserve Traditions of the Stipulations in Treaties 100 Years back; which, when we compare with our Writings, we always find exact. . . .`,
    psource: "Benjamin Franklin Papers (Wampum Chronicles) before January 7, 1784"
  },
  taylorSlavery: {
    passage: `. . . By adopting the three-fifths clause, prolonging the import slave trade, and providing a fugitive-slave clause, the constitution defended slavery. . . .`,
    psource: "Alan Taylor, American Revolutions: A Continental History, 1750-1804, W. W. Norton & Company, 2016"
  },
  jeffersonLouisiana: {
    passage: `. . . I know that the acquisition of Louisiana has been disapproved by some, from a candid apprehension that the enlargement of our territory would endanger its union. But who can limit the extent to which the federative principle [republic] may operate effectively? The larger our association, the less will it be shaken by local passions; and in any view, is it not better that the opposite bank of the Mississippi should be settled by our own brethren and children, than by strangers of another family? . . .`,
    psource: "President Thomas Jefferson, Second Inaugural Address, March 4, 1805"
  },
  lincolnSecond: {
    passage: `. . . With malice toward none; with charity for all; with firmness in the right, as God gives us to see the right, let us strive on to finish the work we are in; to bind up the nation's wounds; to care for him who shall have borne the battle, and for his widow, and his orphan;—to do all which may achieve and cherish a just, and a lasting peace, among ourselves, and with all nations.`,
    psource: "President Abraham Lincoln, Second Inaugural Address, March 4, 1865"
  },
  anthony: {
    passage: `An Account of the Proceedings on the Trial of Susan B. Anthony on the Charge of Illegal Voting, Rochester, NY, 1874

Judge Hunt—The sentence of the Court is that you pay a fine of one hundred dollars and the costs of the prosecution.

Miss Anthony—May it please your honor, I shall never pay a dollar of your unjust penalty. . . . I shall earnestly and persistently continue to urge all women to the practical recognition of the old revolutionary maxim, that "Resistance to tyranny is obedience to God." . . .`,
    psource: "The Elizabeth Cady Stanton and Susan B. Anthony Papers Project, Rutgers.edu"
  },
  bossesSenate: {
    imgs: [
      {
        src: "img/q10-bosses-of-the-senate.jpg",
        cap: "\"The Bosses of the Senate\" — giant moneybag \"monopolists\" tower over senators while the \"Peoples' Entrance\" is closed. Source: Joseph J. Keppler, Puck, 1889 (adapted)",
        alt: "Cartoon of bloated moneybag trusts looming over the U.S. Senate, with a sign reading 'a Senate of the monopolists, by the monopolists and for the monopolists'"
      }
    ]
  },
  mckinley: {
    passage: `War Message to Congress
. . . The grounds for such intervention may be briefly summarized as follows:
First. In the cause of humanity and to put an end to the barbarities, bloodshed, starvation, and horrible miseries now existing there . . . It is specially our duty, for it is right at our door.
Second. We owe it to our citizens in Cuba to afford them that protection and indemnity [security] for life and property which no government there can or will afford . . .
Third. The right to intervene may be justified by the very serious injury to the commerce, trade, and business of our people . . .
The issue is now with the Congress. It is a solemn responsibility. . . . I await your action. . . .`,
    psource: "President William McKinley, Message to Congress, April 11, 1898"
  },
  tipToTip: {
    imgs: [
      {
        src: "img/q14-tip-to-tip-eagle.png",
        cap: "\"10,000 Miles From Tip to Tip\" — the American eagle spanning from Puerto Rico to the Philippines. Source: Philadelphia Press, 1899 (adapted)",
        alt: "Cartoon of a giant American eagle stretching its wings across the globe from the Caribbean to the Pacific, symbolizing U.S. overseas empire after 1898"
      }
    ]
  },
  meatScandal: {
    imgs: [
      {
        src: "img/q16-meat-scandal-cartoon.jpg",
        cap: "\"A Nauseating Job, But It Must Be Done.\" Source: Utica Saturday Globe, 1906 (adapted)",
        alt: "1906 cartoon depicting the cleanup of the filthy, scandal-ridden meatpacking industry"
      }
    ]
  },
  wilsonWar: {
    passage: `. . . The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty. We have no selfish ends to serve. We desire no conquest, no dominion. We seek no indemnities [repayments] for ourselves, no material compensation for the sacrifices we shall freely make. We are but one of the champions of the rights of mankind. . . .`,
    psource: "President Woodrow Wilson's War Message to Congress, April 2, 1917"
  },
  watchfires: {
    imgs: [
      {
        src: "img/q20-party-watchfires.jpg",
        cap: "Party Watchfires Burn Outside White House, January 1919. Source: Library of Congress (adapted)",
        alt: "Photograph of suffragists tending watchfires and holding banners outside the White House in January 1919"
      }
    ]
  },
  laguardia: {
    passage: `It is impossible to tell whether prohibition is a good thing or a bad thing. It has never been enforced in this country.

There may not be as much liquor in quantity consumed to-day as there was before prohibition, but there is just as much alcohol. . . .`,
    psource: "New York City Mayor Fiorello H. LaGuardia, Statement to Congress on the subject of Prohibition, 1926"
  },
  fdrFirst: {
    passage: `. . . Our greatest primary task is to put people to work. This is no unsolvable problem if we face it wisely and courageously. It can be accomplished in part by direct recruiting by the Government itself, treating the task as we would treat the emergency of a war . . .

Finally, in our progress toward a resumption of work we require two safeguards against a return of the evils of the old order: there must be a strict supervision of all banking and credits and investments, so that there will be an end to speculation with other people's money . . .`,
    psource: "President Franklin D. Roosevelt, First Inaugural Address, March 4, 1933"
  },
  vietnamDominoes: {
    imgs: [
      {
        src: "img/q25-vietnam-dominoes.jpg",
        cap: "Cold War \"domino theory\" cartoon on Vietnam. Source: Maggie Zhang",
        alt: "Cartoon illustrating the domino theory, in which the fall of South Vietnam to communism would topple neighboring Southeast Asian nations like dominoes"
      }
    ]
  },
  swingStates: {
    imgs: [
      {
        src: "img/q26-swing-states-map.png",
        cap: "Cartoon on the Electoral College and presidential \"swing states.\" Source: Stuart Carlson, 2012",
        alt: "Cartoon showing presidential candidates focused on a handful of swing states while ignoring the rest of the country under the Electoral College"
      }
    ]
  },
  sunBelt: {
    passage: `. . . One of the most significant demographic trends of the 20th century has been the steady shifting of the population west and south. . . . In 1900, the majority (62 percent) of the population lived in either the Northeast or the Midwest. This combined proportion declined each decade during the century. By 1980, the majority (52 percent) of the country's population resided in either the South or the West. . . . the combined South and West regional populations represent[ed] 58 percent of the total population of the United States in 2000. . . .`,
    psource: "Demographic Trends in the 20th Century, U.S. Census Bureau, November 2002"
  },
  seqSegregation: {
    passage: `Document 1

. . . We consider the underlying fallacy of the plaintiff's [Homer Plessy] argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it. . . . If one race be inferior to the other socially, the Constitution of the United States cannot put them upon the same plane.
Source: Justice Henry Billings Brown, Majority Opinion in Plessy v. Ferguson, 1896

Document 2

. . . To separate them from others of a similar age and qualifications solely because of their race generates a feeling of inferiority as to their status in the community that may affect their hearts and minds in a way unlikely ever to be undone. . . . Segregation with the sanction of law, therefore, has a tendency to retard [restrict] the educational and mental development of Negro children and to deprive them of some of the benefits they would receive in a racially integrated school system. . . .
Source: Chief Justice Earl Warren, Majority Opinion in Brown v. Board of Education, 1954`
  },
  seqKorea: {
    passage: `Document 1

. . . it would be wrong—tragically wrong—for us to take the initiative in extending the war. . . . Our aim is to avoid the spread of the conflict. . . . I believe that we must try to limit the war to Korea . . . to make sure that the precious lives of our fighting men are not wasted; to see that the security of our country and the free world is not needlessly jeopardized; and to prevent a third world war. . . . I have therefore considered it essential to relieve General MacArthur . . .
Source: President Harry Truman, Radio Report on Korea and U.S. Policy in the Far East, April 11, 1951

Document 2

. . . once war is forced upon us, there is no other alternative than to apply every available means to bring it to a swift end. War's very object is victory, not prolonged indecision. In war there is no substitute for victory. There are some who, for varying reasons, would appease Red China. They are blind to history's clear lesson, for history teaches with unmistakable emphasis that appeasement but begets new and bloodier war. . . .
Source: General Douglas MacArthur, Farewell Speech to Congress, April 19, 1951`
  },
  clPearlHarbor: {
    passage: `Powerful and resourceful gangsters have banded together to make war upon the whole human race. Their challenge has now been flung at the United States of America. The Japanese have treacherously violated the long-standing peace between us. . . .

We are now in this war. We are all in it all the way. Every single man, woman, and child is a partner in the most tremendous undertaking of our American history. . . . So far, the news has been all bad. We have suffered a serious set-back in Hawaii. Our forces in the Philippines . . . are taking punishment . . . The reports from Guam and Wake and Midway Islands are still confused . . .`,
    psource: "President Franklin D. Roosevelt, Fireside Chat, December 9, 1941"
  },
  clExclusion: {
    passage: `Document 2b

This store was located in Oakland, California. The owner was a University of California graduate of Japanese descent. On December 8, the day after the attack on Pearl Harbor, he placed the "I AM AN AMERICAN" sign on the storefront. After evacuation orders were issued, the store was closed and eventually sold despite the owner's declaration of loyalty.
Source: Dorothea Lange, War Relocation Authority, Courtesy of the National Archives`,
    imgs: [
      {
        src: "img/d2a-japanese-exclusion-order.png",
        cap: "Document 2a: \"Instructions to All Persons of Japanese Ancestry\" — Civilian Exclusion Order. Source: National Archives, adapted by Newsweek, 1991",
        alt: "Wartime exclusion order poster directing all persons of Japanese ancestry to report for evacuation"
      },
      {
        src: "img/d2b-i-am-an-american.jpg",
        cap: "Document 2b: An Oakland storefront marked \"I AM AN AMERICAN\" the day after Pearl Harbor; the Japanese American owner was later evacuated and lost the store. Source: Dorothea Lange, War Relocation Authority / National Archives",
        alt: "Photograph of a shuttered Oakland store with a large 'I AM AN AMERICAN' sign placed by its Japanese American owner before internment"
      }
    ]
  },
  clKorematsu: {
    passage: `Document 3a

Fred Korematsu, an American citizen, was born of Japanese parents in Oakland, California. . . . Korematsu refused to report for relocation, and on May 30 local police arrested him. . . . he decided to mount a legal fight. He explained why: "These camps have been definitely an imprisonment under armed guard with orders shoot to kill. In order to be imprisoned, these people should have been given a fair trial . . . Many Disloyal Germans and Italians were caught, but they were not all corralled under armed guard like the Japanese—is this a racial issue? . . ."
Source: Stephen Breyer, Making Our Democracy Work, A Judge's View, Alfred A. Knopf, 2010 (adapted)

Document 3b — Eleanor Roosevelt, after visiting Gila River Internment Camp, April 1943:
. . . We have no common race in this country, but we have an ideal to which all of us are loyal . . . Every citizen in this country has a right to our basic freedoms, to justice and to equality of opportunity. . . .`,
    imgs: [
      {
        src: "img/d3b-eleanor-roosevelt-gila-river.jpg",
        cap: "Document 3b: Eleanor Roosevelt visited the Gila River Internment Camp on April 23, 1943. Source: Franklin D. Roosevelt Presidential Library",
        alt: "Photograph of First Lady Eleanor Roosevelt visiting Japanese American internees at the Gila River camp in 1943"
      }
    ]
  },
  clRedress: {
    passage: `. . . partly because of the black civil rights and anti-Vietnam War protest movements in the 1960s and 1970s, young Japanese Americans began questioning their parents and grandparents about what happened to them in the 1940s. Soon enough, books and memoirs by American Japanese held in camps began to appear . . . oral history projects were created, letters became public, small museums were opened, and activists lobbied for official apologies, financial redress [compensation], and the designation of some of the camp sites, like Manzanar, as national historical monuments. . . .`,
    psource: "Richard Reeves, Infamy: The Shocking Story of Japanese American Internment in World War II, Holt and Company, 2015"
  },
  clApology: {
    passage: `Document 5a

. . . The promulgation [issuance] of Executive Order 9066 was not justified by military necessity . . . The broad historical causes which shaped these decisions were race prejudice, war hysteria and a failure of political leadership. . . . A grave injustice was done to American citizens and resident aliens of Japanese ancestry who, without individual review or any probative [provable] evidence against them, were excluded, removed and detained by the United States during World War II.
Source: Personal Justice Denied: Report of the Commission on Wartime Relocation and Internment of Civilians, 1982

Document 5b

. . . More than 40 years ago . . . 120,000 persons of Japanese ancestry living in the United States were forcibly removed from their homes and placed in makeshift internment camps. This action was taken without trial, without jury. It was based solely on race . . . The legislation that I am about to sign provides for a restitution payment to each of the 60,000 surviving Japanese-Americans . . . here we admit a wrong; here we reaffirm our commitment as a nation to equal justice under the law.
Source: President Ronald Reagan, Remarks on Signing the Bill Providing Restitution for the Wartime Internment of Japanese-American Civilians, August 10, 1988`
  },
  clOverruled: {
    passage: `The following is an excerpt from Fred Korematsu's daughter, Karen Korematsu, responding to the Supreme Court's 2018 travel-ban decision, in which the Court declared the 1944 Korematsu ruling wrong.

. . . After nearly 75 years, the court officially overruled Korematsu v. United States. . . . Chief Justice John G. Roberts Jr. . . . wrote that . . . "Korematsu was gravely wrong the day it was decided, has been overruled in the court of history, and—to be clear—'has no place in law under the Constitution.'" . . . My father spent his life fighting for justice and educating people about the inhumanity of the Japanese-American incarceration . . . My father would still say, "Stand up for what is right."`,
    psource: "Karen Korematsu, New York Times, June 27, 2018"
  }
};

const ALL_CARDS = [
{
  ...STIMULI.franklin,
  "type": "mc",
  "label": "Q1",
  "stem": "Q1. Which claim about this group of Native Americans is supported by this passage?",
  "choices": [
    "Acquiring their land is justified.",
    "Women play a significant role in their society.",
    "Their treaties are preserved in writing.",
    "Colonial missionaries need to understand their beliefs."
  ],
  "answer": 1,
  "back": "(2) Women play a significant role in their society — Franklin notes the women are \"the Records of the Council,\" memorizing and preserving the terms of treaties going back 100 years."
},
{
  ...STIMULI.taylorSlavery,
  "type": "mc",
  "label": "Q2",
  "stem": "Q2. Why were the writers of the United States Constitution willing to compromise on these issues?",
  "choices": [
    "to gain Southern support for ratification",
    "to make approval of the Bill of Rights easier",
    "to end slavery after 1808",
    "to give Northern states an advantage in the House of Representatives"
  ],
  "answer": 0,
  "back": "(1) to gain Southern support for ratification — pro-slavery compromises (three-fifths, the slave trade, fugitive slaves) were needed to win the Southern states' approval of the Constitution."
},
{
  ...STIMULI.taylorSlavery,
  "type": "mc",
  "label": "Q3",
  "stem": "Q3. What was the primary purpose of the Three-fifths Clause?",
  "choices": [
    "to quickly end the importation of slaves",
    "to help determine a state's congressional representation",
    "to provide for the return of escaped slaves",
    "to ban slavery in the western territories"
  ],
  "answer": 1,
  "back": "(2) to help determine a state's congressional representation — enslaved people were counted as three-fifths of a person when apportioning seats in the House of Representatives."
},
{
  ...STIMULI.jeffersonLouisiana,
  "type": "mc",
  "label": "Q4",
  "stem": "Q4. Which claim is best supported by the views of President Thomas Jefferson as stated in his second inaugural address?",
  "choices": [
    "The purchase of Louisiana greatly benefits the United States.",
    "The United States Constitution forbids buying land.",
    "The United States lacks the funds to purchase the Louisiana Territory.",
    "The Spanish would support United States westward expansion."
  ],
  "answer": 0,
  "back": "(1) The purchase of Louisiana greatly benefits the United States — Jefferson defends the acquisition, arguing the larger republic will be more stable and better settled by Americans."
},
{
  ...STIMULI.jeffersonLouisiana,
  "type": "mc",
  "label": "Q5",
  "stem": "Q5. What is one concern about the acquisition of the Louisiana Territory raised in this passage?",
  "choices": [
    "The Supreme Court would declare the purchase unconstitutional.",
    "Farms would not succeed west of the Mississippi River.",
    "Such a large expanse of land would be difficult to govern.",
    "Attempts to explore the region would be impossible."
  ],
  "answer": 2,
  "back": "(3) Such a large expanse of land would be difficult to govern — Jefferson acknowledges the fear that \"the enlargement of our territory would endanger its union.\""
},
{
  ...STIMULI.lincolnSecond,
  "type": "mc",
  "label": "Q6",
  "stem": "Q6. This excerpt suggests that President Abraham Lincoln believed the best way to heal the nation after the Civil War was through",
  "choices": [
    "anger",
    "selfishness",
    "vengeance",
    "forgiveness"
  ],
  "answer": 3,
  "back": "(4) forgiveness — \"With malice toward none; with charity for all\" calls for binding up the nation's wounds rather than punishing the South."
},
{
  ...STIMULI.lincolnSecond,
  "type": "mc",
  "label": "Q7",
  "stem": "Q7. What does this excerpt suggest about President Lincoln's future Reconstruction policy?",
  "choices": [
    "It would be rejected by the defeated South.",
    "Rapid reunification would be his goal.",
    "Federal military occupation of the South would be harsh.",
    "It would guarantee his reelection."
  ],
  "answer": 1,
  "back": "(2) Rapid reunification would be his goal — Lincoln's charitable tone points toward a lenient plan to quickly \"bind up the nation's wounds\" and restore the Union."
},
{
  ...STIMULI.anthony,
  "type": "mc",
  "label": "Q8",
  "stem": "Q8. Which type of action is Susan B. Anthony advocating in this transcript?",
  "choices": [
    "running for elected offices",
    "civil disobedience",
    "unionization of workers",
    "economic boycotts"
  ],
  "answer": 1,
  "back": "(2) civil disobedience — Anthony refuses to pay the unjust fine and urges women to \"rebel against your man-made, unjust, unconstitutional forms of law.\""
},
{
  ...STIMULI.anthony,
  "type": "mc",
  "label": "Q9",
  "stem": "Q9. Anthony's statement is part of her campaign to gain",
  "choices": [
    "the abolition of slavery",
    "a progressive income tax",
    "woman's suffrage",
    "consumer safety regulations"
  ],
  "answer": 2,
  "back": "(3) woman's suffrage — she was tried for illegal voting, part of her lifelong campaign for women's right to vote."
},
{
  ...STIMULI.bossesSenate,
  "type": "mc",
  "label": "Q10",
  "stem": "Q10. According to this cartoon, whose interests was the Senate serving?",
  "choices": [
    "big business",
    "conservationists",
    "labor unions",
    "southern farmers"
  ],
  "answer": 0,
  "back": "(1) big business — the bloated moneybag \"monopolists\" tower over the senators in a Senate \"of the monopolists, by the monopolists and for the monopolists.\""
},
{
  ...STIMULI.bossesSenate,
  "type": "mc",
  "label": "Q11",
  "stem": "Q11. The viewpoint illustrated in this cartoon increased public support for",
  "choices": [
    "elimination of the electoral college",
    "direct election of senators",
    "creation of the Interstate Commerce Commission",
    "reducing the number of terms a president could serve"
  ],
  "answer": 1,
  "back": "(2) direct election of senators — anger at corporate control of the Senate led to the 17th Amendment (1913), which let voters elect senators directly."
},
{
  ...STIMULI.mckinley,
  "type": "mc",
  "label": "Q12",
  "stem": "Q12. President William McKinley's message to Congress illustrates which constitutional principle?",
  "choices": [
    "judicial review",
    "reserved powers",
    "popular sovereignty",
    "separation of powers"
  ],
  "answer": 3,
  "back": "(4) separation of powers — McKinley leaves the decision to go to war with Congress (\"The issue is now with the Congress\"), reflecting the division of war powers."
},
{
  ...STIMULI.mckinley,
  "type": "mc",
  "label": "Q13",
  "stem": "Q13. Which United States foreign policy was implemented during this time period?",
  "choices": [
    "mercantilism",
    "isolationism",
    "imperialism",
    "appeasement"
  ],
  "answer": 2,
  "back": "(3) imperialism — the Spanish-American War (1898) launched an era of U.S. overseas expansion, gaining Cuba's protection, Puerto Rico, Guam, and the Philippines."
},
{
  ...STIMULI.tipToTip,
  "type": "mc",
  "label": "Q14",
  "stem": "Q14. A historian would make best use of this cartoon to study which topic?",
  "choices": [
    "the purchase of Alaska",
    "the Open Door policy",
    "the United States as a world power",
    "United States entry into World War I"
  ],
  "answer": 2,
  "back": "(3) the United States as a world power — the eagle stretching \"10,000 miles from tip to tip\" (Puerto Rico to the Philippines) shows the new American empire after 1898."
},
{
  ...STIMULI.tipToTip,
  "type": "mc",
  "label": "Q15",
  "stem": "Q15. What was a direct response to the situation illustrated in the cartoon?",
  "choices": [
    "Anti-imperialist sentiment increased.",
    "Farmers demanded more imports of food products.",
    "Industrialists sought tariffs on Asian manufactured goods.",
    "Nativist attitudes decreased."
  ],
  "answer": 0,
  "back": "(1) Anti-imperialist sentiment increased — overseas expansion sparked an Anti-Imperialist League that opposed acquiring colonies like the Philippines."
},
{
  ...STIMULI.meatScandal,
  "type": "mc",
  "label": "Q16",
  "stem": "Q16. Which book highlighted the problem shown in this cartoon?",
  "choices": [
    "How the Other Half Lives",
    "The Octopus",
    "The Jungle",
    "The Shame of the Cities"
  ],
  "answer": 2,
  "back": "(3) The Jungle — Upton Sinclair's 1906 novel exposed the filthy conditions of the meatpacking industry shown in the cartoon."
},
{
  ...STIMULI.meatScandal,
  "type": "mc",
  "label": "Q17",
  "stem": "Q17. Which federal action was taken in response to conditions similar to those illustrated in this cartoon?",
  "choices": [
    "the passage of the Interstate Commerce Act",
    "the passage of the Pure Food and Drug Act",
    "increased regulation of banks",
    "increased efforts in the area of conservation"
  ],
  "answer": 1,
  "back": "(2) the passage of the Pure Food and Drug Act — public outrage over meatpacking led to the 1906 Pure Food and Drug Act and Meat Inspection Act."
},
{
  ...STIMULI.wilsonWar,
  "type": "mc",
  "label": "Q18",
  "stem": "Q18. What is one justification President Woodrow Wilson gives for a declaration of war?",
  "choices": [
    "acquisition of overseas colonies",
    "compensation for property lost at sea",
    "increased immigration from Europe",
    "self-government for all nations"
  ],
  "answer": 3,
  "back": "(4) self-government for all nations — Wilson says \"the world must be made safe for democracy,\" fighting for \"the rights of mankind\" rather than conquest."
},
{
  ...STIMULI.wilsonWar,
  "type": "mc",
  "label": "Q19",
  "stem": "Q19. What did President Wilson propose to support the ideals expressed in this message?",
  "choices": [
    "establishment of the Federal Reserve System",
    "creation of the League of Nations",
    "passage of a higher protective tariff",
    "decreasing aid to Europe"
  ],
  "answer": 1,
  "back": "(2) creation of the League of Nations — Wilson's Fourteen Points called for a league of nations to keep the peace after World War I."
},
{
  ...STIMULI.watchfires,
  "type": "mc",
  "label": "Q20",
  "stem": "Q20. Which section of the Bill of Rights protects the actions shown in this photograph?",
  "choices": [
    "\"the right of the people to keep and bear arms, shall not be infringed\"",
    "\"no warrants shall issue, but upon probable cause\"",
    "\"nor shall any person be subject for the same offense to be twice put in jeopardy\"",
    "\"the right of the people peaceably to assemble\""
  ],
  "answer": 3,
  "back": "(4) \"the right of the people peaceably to assemble\" — the First Amendment protects the suffragists' right to protest peacefully outside the White House."
},
{
  ...STIMULI.watchfires,
  "type": "mc",
  "label": "Q21",
  "stem": "Q21. What was the primary goal of the protest shown in this photograph?",
  "choices": [
    "to disagree with American involvement in World War I",
    "to promote the ratification of the Treaty of Versailles",
    "to gain support for a national woman's suffrage amendment",
    "to oppose restrictive immigration legislation"
  ],
  "answer": 2,
  "back": "(3) to gain support for a national woman's suffrage amendment — the 1919 White House \"watchfire\" demonstrations pressured the government to pass the 19th Amendment."
},
{
  ...STIMULI.laguardia,
  "type": "mc",
  "label": "Q22",
  "stem": "Q22. What was the primary reason for the problem described by New York City Mayor Fiorello LaGuardia?",
  "choices": [
    "Tax revenues increased as a result of Prohibition.",
    "Many Americans refused to accept that consuming alcohol was wrong.",
    "Americans discovered that imported alcohol was superior to domestic alcohol.",
    "Bootleggers drove up prices by restricting the supply of alcohol."
  ],
  "answer": 1,
  "back": "(2) Many Americans refused to accept that consuming alcohol was wrong — LaGuardia notes Prohibition \"has never been enforced\" because so many people kept drinking."
},
{
  ...STIMULI.fdrFirst,
  "type": "mc",
  "label": "Q23",
  "stem": "Q23. Which New Deal program addressed the \"greatest primary task\" President Franklin D. Roosevelt referred to in this passage?",
  "choices": [
    "Works Progress Administration",
    "Emergency Banking Relief Act",
    "Securities and Exchange Commission",
    "Social Security Act"
  ],
  "answer": 0,
  "back": "(1) Works Progress Administration — FDR's task was to \"put people to work\"; the WPA hired millions of unemployed Americans for public-works jobs."
},
{
  ...STIMULI.fdrFirst,
  "type": "mc",
  "label": "Q24",
  "stem": "Q24. What was one cause of the national economic emergency referred to in this passage?",
  "choices": [
    "costs of social welfare programs",
    "passage of antitrust laws and high taxes",
    "buying on margin and excessive use of credit",
    "a shortage of American factories making consumer goods"
  ],
  "answer": 2,
  "back": "(3) buying on margin and excessive use of credit — risky stock speculation on borrowed money helped cause the 1929 crash and the Great Depression."
},
{
  ...STIMULI.vietnamDominoes,
  "type": "mc",
  "label": "Q25",
  "stem": "Q25. What conclusion can best be drawn from this cartoon?",
  "choices": [
    "The United States was reluctant to commit troops to Southeast Asia.",
    "A united Vietnam was necessary for maintaining foreign alliances.",
    "The United States was shifting its foreign policy from isolationism to imperialism.",
    "Involvement in South Vietnam was necessary to prevent communist expansion."
  ],
  "answer": 3,
  "back": "(4) Involvement in South Vietnam was necessary to prevent communist expansion — the \"domino theory\" held that if Vietnam fell, neighboring nations would topple to communism too."
},
{
  ...STIMULI.swingStates,
  "type": "mc",
  "label": "Q26",
  "stem": "Q26. What conclusion can best be drawn from the cartoon?",
  "choices": [
    "Voters in a few states can decide presidential elections.",
    "Boundary lines between states should be redrawn.",
    "Presidential candidates only come from a few states.",
    "Political power in Congress is held by the president's political party."
  ],
  "answer": 0,
  "back": "(1) Voters in a few states can decide presidential elections — under the Electoral College, candidates concentrate on a handful of \"swing states.\""
},
{
  ...STIMULI.swingStates,
  "type": "mc",
  "label": "Q27",
  "stem": "Q27. What change has been proposed to address the issue raised by the cartoon?",
  "choices": [
    "reapportionment of state legislatures",
    "direct popular vote for the president",
    "allowing Congress to elect the president",
    "restricting voting rights of immigrants"
  ],
  "answer": 1,
  "back": "(2) direct popular vote for the president — reformers propose replacing the Electoral College with a national popular vote so every state matters equally."
},
{
  ...STIMULI.sunBelt,
  "type": "mc",
  "label": "Q28",
  "stem": "Q28. What was a direct political result of the population changes described in the passage?",
  "choices": [
    "Southwest states gained more electoral votes in presidential elections.",
    "Midwest states lost representation in the Senate.",
    "Northeast states gained representation in the House of Representatives.",
    "Overall public support for the electoral college increased."
  ],
  "answer": 0,
  "back": "(1) Southwest states gained more electoral votes in presidential elections — as population shifted to the Sun Belt, those states gained House seats and electoral votes through reapportionment."
},
{
  ...STIMULI.seqSegregation,
  "type": "self",
  "label": "Q29",
  "front": "Q29 (Part II, SEQ Set 1). Documents: the majority opinion in Plessy v. Ferguson (1896) and the majority opinion in Brown v. Board of Education (1954). Task: Describe the historical context surrounding these documents AND identify and explain the relationship between them (Cause and Effect, Similarity/Difference, or Turning Point).",
  "back": "Model answer — Context: after Reconstruction, Southern states imposed Jim Crow segregation laws. Relationship: Difference and Turning Point. Plessy v. Ferguson (1896) upheld \"separate but equal,\" ruling that enforced racial separation did not stamp African Americans with a \"badge of inferiority.\" Brown v. Board of Education (1954) directly reversed that reasoning, holding that segregating children \"solely because of their race generates a feeling of inferiority\" and that separate schools are \"inherently unequal.\" Brown was a turning point that overturned Plessy and launched the modern civil rights movement and school desegregation."
},
{
  ...STIMULI.seqKorea,
  "type": "self",
  "label": "Q30",
  "front": "Q30 (Part II, SEQ Set 2). Documents: Truman's 1951 radio report on Korea (Doc 1) and MacArthur's 1951 farewell speech (Doc 2). Task: Describe the historical context of Documents 1 and 2 AND analyze how audience, purpose, bias, or point of view affects Document 2's reliability as evidence.",
  "back": "Model answer — Context: during the Korean War, President Truman pursued a limited war to avoid drawing China and the USSR into World War III, while General MacArthur wanted to widen the war into China; Truman relieved MacArthur of command in April 1951. Reliability of Doc 2: MacArthur's audience was Congress and the American public, and his purpose was to defend his own position after being fired and to attack the policy of limited war. His point of view is strongly pro-victory and anti-\"appeasement\" (\"In war there is no substitute for victory\"), so the speech is a one-sided argument rather than a balanced analysis — valuable for understanding the debate over how to fight the Cold War, but biased by his stake in the outcome."
},
{
  ...STIMULI.clPearlHarbor,
  "type": "self",
  "label": "Q31",
  "front": "Q31 (Civic Literacy, Doc 1 — FDR Fireside Chat, December 9, 1941). According to President Franklin D. Roosevelt, what is ONE challenge facing the United States in December 1941?",
  "back": "The United States had just been attacked: Japan \"treacherously violated\" the peace at Pearl Harbor, and \"so far, the news has been all bad\" — a serious setback in Hawaii, forces in the Philippines under punishment, and the possible loss of Guam, Wake, and Midway. FDR warned the whole nation was now at war and every citizen had to share the burden."
},
{
  ...STIMULI.clExclusion,
  "type": "self",
  "label": "Q32",
  "front": "Q32 (Civic Literacy, Doc 2a/2b — exclusion order poster + \"I AM AN AMERICAN\" storefront). What do these documents demonstrate about the treatment of Japanese Americans during World War II?",
  "back": "They show that Japanese Americans were forcibly removed from their homes by government exclusion orders regardless of their loyalty or citizenship. Even an Oakland store owner — a U.S.-born University of California graduate who proudly posted \"I AM AN AMERICAN\" the day after Pearl Harbor — was evacuated and lost his business, demonstrating that the policy was based on ancestry, not on any individual evidence of disloyalty."
},
{
  ...STIMULI.clKorematsu,
  "type": "self",
  "label": "Q33",
  "front": "Q33 (Civic Literacy, Doc 3a/3b — Fred Korematsu's challenge + Eleanor Roosevelt). Based on these documents, what was ONE reason for opposition to the internment of Japanese Americans during World War II?",
  "back": "Internment imprisoned loyal American citizens without a fair trial, based on race — Korematsu pointed out that disloyal Germans and Italians were not all \"corralled under armed guard like the Japanese,\" asking \"is this a racial issue?\" Eleanor Roosevelt added that every citizen has a right to basic freedoms, justice, and equality of opportunity regardless of race or religion."
},
{
  ...STIMULI.clRedress,
  "type": "self",
  "label": "Q34",
  "front": "Q34 (Civic Literacy, Doc 4 — Richard Reeves). According to Richard Reeves, what is ONE effort by Japanese Americans to bring public attention to the history of their internment?",
  "back": "Younger Japanese Americans questioned their elders and created oral-history projects, wrote and published books and memoirs about the camps, opened small museums, made private letters public, and lobbied for official apologies, financial redress, and the designation of camp sites such as Manzanar as national historical monuments."
},
{
  ...STIMULI.clApology,
  "type": "self",
  "label": "Q35",
  "front": "Q35 (Civic Literacy, Doc 5a/5b — Personal Justice Denied + Reagan). Based on these documents, what is ONE result of the efforts to address the restriction of Japanese American civil liberties during World War II?",
  "back": "The federal government officially acknowledged the injustice: the 1982 commission concluded that Executive Order 9066 was driven by \"race prejudice, war hysteria and a failure of political leadership,\" not military necessity; and in 1988 President Reagan signed the Civil Liberties Act, providing a restitution payment to each surviving internee and an official apology that \"admit[ted] a wrong.\""
},
{
  ...STIMULI.clOverruled,
  "type": "self",
  "label": "Q36",
  "front": "Q36 (Civic Literacy, Doc 6 — Karen Korematsu, 2018). According to Karen Korematsu, what is ONE impact of Fred Korematsu's decision to challenge Japanese American internment?",
  "back": "Fred Korematsu's lifelong fight kept the injustice in the public conscience, and in 2018 the Supreme Court officially overruled Korematsu v. United States, declaring it \"gravely wrong the day it was decided\" with \"no place in law under the Constitution\" — though his daughter noted the ruling came while the Court upheld a travel ban she felt \"replaced one injustice with another.\""
},
{
  "type": "self",
  "label": "Q37",
  "front": "Q37 (Part B Civic Literacy Essay — Civil Liberties During World War II: Japanese American Internment). Write an essay that describes the historical circumstances, explains at least TWO efforts to address the issue, and discusses the impact of those efforts (use at least 4 documents + outside information).",
  "back": "Essay outline — Circumstances (Docs 1, 2): after Japan's attack on Pearl Harbor (Dec. 1941) unleashed fear and racial hysteria, President Roosevelt issued Executive Order 9066 (1942), forcibly removing about 120,000 Japanese Americans — most of them U.S. citizens — to internment camps without trial, based solely on ancestry. Efforts (explain 2+): legal challenge — Fred Korematsu's case (Doc 3, plus outside information: the 1944 Korematsu v. United States ruling); the postwar redress movement — oral histories, memoirs, museums, and lobbying for apology and reparations (Doc 4); and government action — the 1982 Personal Justice Denied report and the 1988 Civil Liberties Act apology and restitution (Doc 5). Impact (Docs 5, 6): the nation formally admitted the wrong, paid reparations, and in 2018 the Supreme Court overruled Korematsu — a measure of justice decades later, and a lasting warning about protecting civil liberties in times of war."
}
];
