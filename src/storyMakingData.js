// Writing category, Story Making activity: 2 activities per audience/level combo.
// Shape: { title, focus, rounds: [round1, round2] }
// Each round: { scene, image, words, prompt, sample }
// "scene" keys into the placeholder illustrations in StoryMakingActivity.jsx,
// used until "image" (a real generated picture) is wired in. Round 2 is the
// bonus story for students who finish round 1 quickly.
const STORY_MAKING_SETS = {
  "teens-beginner": [
    {
      title: "A Day at the Park",
      focus: "Simple past, sequencing (first, then, after)",
      rounds: [
        {
          scene: "park",
          image: null,
          words: ["park", "sun", "friends", "ball", "ice cream", "laugh"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "Last Saturday, the sun was shining at the park. I met my friends near the big tree. First, we played with a ball for an hour. After that, we bought ice cream from a small cart. We sat on the grass and laughed all afternoon.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["zoo", "elephant", "camera", "excited", "feed", "laugh"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "Our class went to the zoo on Friday morning. Everyone was excited to see the elephants. First, we watched the zookeeper feed them fruit and vegetables. Then we took photos with my camera near the fence. We laughed all the way back to the bus.",
        },
      ],
    },
    {
      title: "The Lost Puppy",
      focus: "Simple past, adjectives, feelings",
      rounds: [
        {
          scene: "lostPuppy",
          image: null,
          words: ["puppy", "street", "scared", "boy", "help", "home"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "A small puppy was walking alone on the street. It looked scared and tired. A kind boy saw the puppy and stopped to help. He gave it some water and checked its collar. Then he walked the puppy safely back home.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["new student", "shy", "lunch", "invite", "friend", "smile"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "A new student sat alone at lunch on her first day. She looked shy and didn't talk to anyone. Mia noticed her and invited her to sit with our group. We asked her questions about her old school. By the end of lunch, she was smiling and laughing with her new friends.",
        },
      ],
    },
  ],
  "teens-intermediate": [
    {
      title: "The Surprise Party",
      focus: "Past continuous + simple past, sequencing",
      rounds: [
        {
          scene: "party",
          image: null,
          words: ["surprise", "balloons", "cake", "friends", "gift", "laugh"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "While Maya was walking home, her friends were hiding behind the door with a surprise. The room was full of colorful balloons and a big cake. When she opened the door, everyone shouted and laughed. Her best friend handed her a small gift. It turned out to be the best birthday she ever had.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["school play", "backstage", "forgot", "lines", "audience", "applause"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "Backstage before the school play, everyone was nervous and quiet. Just before her scene, Priya suddenly forgot her lines. Her friend whispered the first word from behind the curtain. Priya took a breath and finished the scene perfectly. The audience gave her a huge round of applause.",
        },
      ],
    },
    {
      title: "Rainy Day Adventure",
      focus: "Past tense narrative, descriptive detail",
      rounds: [
        {
          scene: "rain",
          image: null,
          words: ["rain", "umbrella", "puddle", "boots", "run", "laugh"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "The rain started suddenly while we were walking to school. I opened my umbrella, but the wind turned it inside out. My sister jumped straight into a deep puddle in her yellow boots. We had to run the rest of the way, completely soaked. By the time we arrived, we couldn't stop laughing.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["bike", "flat tire", "stranded", "stranger", "fix", "grateful"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "Halfway home, Leo's bike suddenly got a flat tire. He was stranded on a quiet road far from home. A stranger walking his dog stopped and offered to help. Together they managed to fix the tire in ten minutes. Leo thanked him and felt grateful the whole ride home.",
        },
      ],
    },
  ],
  "adults-beginner": [
    {
      title: "The New Neighbor",
      focus: "Simple past, everyday vocabulary",
      rounds: [
        {
          scene: "neighbor",
          image: null,
          words: ["neighbor", "moving truck", "boxes", "coffee", "smile", "welcome"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "A moving truck stopped in front of the house next door yesterday. Our new neighbor carried box after box into her new home. In the afternoon, I brought her a cup of coffee. She smiled and thanked me for the warm welcome. We talked on the porch for almost an hour.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["coffee shop", "stranger", "laptop", "spilled", "apologize", "conversation"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "I was working on my laptop at a busy coffee shop. A stranger accidentally spilled coffee near my table. He apologized right away and helped me dry my papers. We ended up sharing a table for the rest of the morning. It turned into a nice conversation between two strangers.",
        },
      ],
    },
    {
      title: "A Trip to the Market",
      focus: "Simple past, shopping vocabulary",
      rounds: [
        {
          scene: "market",
          image: null,
          words: ["market", "vegetables", "basket", "seller", "price", "bag"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "On Sunday morning, I walked to the local market to buy fresh vegetables. I filled my basket with tomatoes, onions, and peppers. The seller told me a fair price for everything. I paid and packed it all into my bag. It was a simple trip, but I enjoyed every minute of it.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["wallet", "lost", "worried", "stranger", "return", "thankful"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "I noticed my wallet was missing as soon as I got home. I felt worried and tried to remember every place I had visited. A stranger found it on the sidewalk near the market. She called the number on my card and offered to return it. I was so thankful that I brought her a small gift the next day.",
        },
      ],
    },
  ],
  "adults-intermediate": [
    {
      title: "The Job Interview",
      focus: "Past tense, workplace vocabulary, connectors",
      rounds: [
        {
          scene: "interview",
          image: null,
          words: ["interview", "nervous", "suit", "questions", "handshake", "confident"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "David put on his best suit for the interview, even though he felt nervous. The manager asked several questions about his previous experience. Although his hands were shaking, he answered clearly and honestly. At the end, they shared a firm handshake. He left the office feeling far more confident than when he arrived.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["business trip", "delayed flight", "meeting", "laptop", "reschedule", "relieved"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "Sarah's flight was delayed just hours before an important business trip. She worried she would miss the client meeting entirely. Using her laptop at the gate, she managed to reschedule the meeting for later that afternoon. Her flight finally boarded two hours late. She felt relieved when she landed with enough time to prepare.",
        },
      ],
    },
    {
      title: "Missed Flight",
      focus: "Past tense narrative, cause and effect",
      rounds: [
        {
          scene: "airport",
          image: null,
          words: ["airport", "delay", "luggage", "gate", "worried", "rebook"],
          prompt: "Look at the picture and use the words to write a short story — 5 sentences.",
          sample: "Traffic on the way to the airport caused a long delay. By the time I checked my luggage, I only had ten minutes left. I ran through the terminal, but the gate had already closed. I felt worried as I watched my flight leave without me. Luckily, an airline agent helped me rebook a seat on the next flight.",
        },
        {
          scene: "bonus",
          image: null,
          words: ["client", "complaint", "frustrated", "solution", "calm", "resolved"],
          prompt: "Finished already? Look at this picture and write another 5-sentence story.",
          sample: "An important client called the office with an angry complaint. The manager sounded frustrated as she explained what had gone wrong. James stayed calm and listened carefully to every detail. He offered a clear solution within a few minutes. By the end of the call, the issue was fully resolved.",
        },
      ],
    },
  ],
};

export default STORY_MAKING_SETS;
