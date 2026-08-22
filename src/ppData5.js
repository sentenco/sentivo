// Pronouns & Possessives -- Lesson 5: Possessive 's with Nouns

export default {
  number: 5,
  code: "5",
  title: "Possessive 's with Nouns",
  formula: "singular: 's  ·  regular plural: s'  ·  irregular plural: 's",
  leadIn: "Name one thing that belongs to a family member, and say whose it is using an apostrophe.",
  teach: [
    {
      name: "Singular vs Plural Possessive",
      definition: "Add 's to a singular noun, and just an apostrophe after the s for a regular plural noun.",
      examples: ["The dog's leash.", "The students' classroom. (plural students)", "My sister's car."],
    },
    {
      name: "Irregular Plurals and Joint Possession",
      definition: "Irregular plurals still take 's, and two names sharing one item only need 's on the last name — separate ownership needs 's on both.",
      examples: ["The children's toys.", "Tom and Jerry's house. (one shared house)", "Tom's and Jerry's houses. (two separate houses)"],
    },
  ],
  compareLeftLabel: "One shared item",
  compareRightLabel: "Separate items",
  compareNote: "Whether you mark both names or just the last one depends entirely on whether the thing is shared or owned separately.",
  comparePairs: [
    { left: "Mom and Dad's car. (they share one car)", right: "Mom's and Dad's cars. (each has their own)" },
    { left: "Anna and Ben's apartment.", right: "Anna's and Ben's apartments." },
  ],
  guided: [
    { prompt: "The ___ (dog/dog's) bowl is empty.", answer: "dog's" },
    { prompt: "The ___ (student/students') lockers are down the hall. (plural, regular)", answer: "students'" },
    { prompt: "The ___ (child/children's) playground was renovated. (irregular plural)", answer: "children's" },
  ],
  practice: [
    "Write one sentence with a singular possessive noun, like the dog's leash.",
    "Write one sentence with a plural possessive noun, like the students' books.",
    "Write one sentence showing joint possession, like Tom and Jerry's house.",
  ],
  wrapup: "Singular nouns take 's, regular plurals take s' after the s, and irregular plurals still take 's. Joint possession only marks the last name; separate possession marks both.",
  nextHint: null,
};
