// Worked example of the cards.js shape — see references/card-schema.md for the spec.
// Real excerpt from the Jan 2026 U.S. History deck, trimmed to a few cards: a passage
// stimulus shared by a question pair, an image stimulus, and a self-graded card.

const STIMULI = {
  robinson: {
    passage: `. . . Lastly, whereas you are become a body politic [group of citizens], using amongst yourselves civil government, and are not furnished with any persons of special eminency [rank] above the rest, to be chosen by you into office of government . . .`,
    psource: "John Robinson, Farewell Address to the Pilgrims, August 5, 1620 (adapted)"
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
  seqDepression: {
    passage: `Document 2

. . . Our greatest primary task is to put people to work. . . . there must be a strict supervision of all banking and credits and investments . . .`,
    psource: "President Franklin D. Roosevelt, First Inaugural Address, March 4, 1933 (adapted)",
    imgs: [
      {
        src: "img/q29-depression-graphs.png",
        cap: "Document 1: Unemployment, Bank Failures, and Average Income and Spending, 1929-1933. Source: Historical Statistics of the United States (adapted)",
        alt: "Three charts showing rising unemployment and bank failures and falling income, 1929 to 1933"
      }
    ]
  }
};

const ALL_CARDS = [
  {
    ...STIMULI.robinson,            // shared by Q1 and Q2
    type: "mc",
    label: "Q1",
    stem: "Q1. Based on this excerpt, what is the author's point of view about the role of government in the Plymouth Colony?",
    choices: [
      "Separate leaders for church and state should be elected",
      "People have the right to rebel against the government",
      "The power to govern belongs to the people",
      "Rulers must be given absolute authority to govern"
    ],
    answer: 2,
    back: "(3) The power to govern belongs to the people — Robinson says leaders are 'to be chosen by you into office of government.'"
  },
  {
    ...STIMULI.robinson,
    type: "mc",
    label: "Q2",
    stem: "Q2. Which document most closely reflects the ideas about government expressed by John Robinson in this address?",
    choices: ["Mayflower Compact", "Maryland Toleration Act", "Stamp Act", "Townshend Acts"],
    answer: 0,
    back: "(1) Mayflower Compact — the Pilgrims' 1620 agreement to form a self-governing 'civil body politic.'"
  },
  {
    ...STIMULI.homestead,           // Q7 and Q8 both show the certificate
    type: "mc",
    label: "Q7",
    stem: "Q7. This certificate supports a national commitment to what policy?",
    choices: ["Monroe Doctrine", "isolationism", "Manifest Destiny", "détente"],
    answer: 2,
    back: "(3) Manifest Destiny — the Homestead Act gave 160 acres of free public land to settlers."
  },
  {
    ...STIMULI.seqDepression,
    type: "self",
    label: "Q29",
    front: "Q29 (Part II, SEQ Set 1). Documents: Depression-era graphs + FDR's First Inaugural. Task: describe the historical context AND identify and explain the relationship between the documents.",
    back: "Model answer — Context: the Great Depression after the 1929 crash. Relationship: Cause and Effect — the collapse (Doc 1) drove FDR's New Deal response (Doc 2)."
  }
];
