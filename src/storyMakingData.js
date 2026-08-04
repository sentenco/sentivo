// Writing category, Story Making activity: 2 activities per audience/level combo.
// Shape: { title, focus, scene, words, prompt, sample }
// "scene" keys into the illustrations rendered by StoryScene in StoryMakingActivity.jsx.
const STORY_MAKING_SETS = {
  "teens-beginner": [
    {
      title: "A Day at the Park",
      focus: "Simple past, sequencing (first, then, after)",
      scene: "park",
      words: ["park", "sun", "friends", "ball", "ice cream", "laugh"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "Last Saturday, the sun was shining at the park. I met my friends near the big tree. First, we played with a ball for an hour. After that, we bought ice cream from a small cart. We sat on the grass and laughed all afternoon.",
    },
    {
      title: "The Lost Puppy",
      focus: "Simple past, adjectives, feelings",
      scene: "lostPuppy",
      words: ["puppy", "street", "scared", "boy", "help", "home"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "A small puppy was walking alone on the street. It looked scared and tired. A kind boy saw the puppy and stopped to help. He gave it some water and checked its collar. Then he walked the puppy safely back home.",
    },
  ],
  "teens-intermediate": [
    {
      title: "The Surprise Party",
      focus: "Past continuous + simple past, sequencing",
      scene: "party",
      words: ["surprise", "balloons", "cake", "friends", "gift", "laugh"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "While Maya was walking home, her friends were hiding behind the door with a surprise. The room was full of colorful balloons and a big cake. When she opened the door, everyone shouted and laughed. Her best friend handed her a small gift. It turned out to be the best birthday she ever had.",
    },
    {
      title: "Rainy Day Adventure",
      focus: "Past tense narrative, descriptive detail",
      scene: "rain",
      words: ["rain", "umbrella", "puddle", "boots", "run", "laugh"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "The rain started suddenly while we were walking to school. I opened my umbrella, but the wind turned it inside out. My sister jumped straight into a deep puddle in her yellow boots. We had to run the rest of the way, completely soaked. By the time we arrived, we couldn't stop laughing.",
    },
  ],
  "adults-beginner": [
    {
      title: "The New Neighbor",
      focus: "Simple past, everyday vocabulary",
      scene: "neighbor",
      words: ["neighbor", "moving truck", "boxes", "coffee", "smile", "welcome"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "A moving truck stopped in front of the house next door yesterday. Our new neighbor carried box after box into her new home. In the afternoon, I brought her a cup of coffee. She smiled and thanked me for the warm welcome. We talked on the porch for almost an hour.",
    },
    {
      title: "A Trip to the Market",
      focus: "Simple past, shopping vocabulary",
      scene: "market",
      words: ["market", "vegetables", "basket", "seller", "price", "bag"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "On Sunday morning, I walked to the local market to buy fresh vegetables. I filled my basket with tomatoes, onions, and peppers. The seller told me a fair price for everything. I paid and packed it all into my bag. It was a simple trip, but I enjoyed every minute of it.",
    },
  ],
  "adults-intermediate": [
    {
      title: "The Job Interview",
      focus: "Past tense, workplace vocabulary, connectors",
      scene: "interview",
      words: ["interview", "nervous", "suit", "questions", "handshake", "confident"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "David put on his best suit for the interview, even though he felt nervous. The manager asked several questions about his previous experience. Although his hands were shaking, he answered clearly and honestly. At the end, they shared a firm handshake. He left the office feeling far more confident than when he arrived.",
    },
    {
      title: "Missed Flight",
      focus: "Past tense narrative, cause and effect",
      scene: "airport",
      words: ["airport", "delay", "luggage", "gate", "worried", "rebook"],
      prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
      sample: "Traffic on the way to the airport caused a long delay. By the time I checked my luggage, I only had ten minutes left. I ran through the terminal, but the gate had already closed. I felt worried as I watched my flight leave without me. Luckily, an airline agent helped me rebook a seat on the next flight.",
    },
  ],
};

export default STORY_MAKING_SETS;
