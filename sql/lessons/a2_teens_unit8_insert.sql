-- A2 Teens Unit 8: Travel and Holidays (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Travel Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'becf9e18-e168-480a-83f2-576a499125da',
  'Travel Plans',
  'A2',
  'teens',
  8,
  1,
  'Talk about future travel plans using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'becf9e18-e168-480a-83f2-576a499125da',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✈️",
  "questions": [
    "Are you going to travel this year?",
    "Where would you like to go?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Going to",
      "bg": "#FAECE7"
    },
    {
      "word": "Destination",
      "bg": "#E1F5EE"
    },
    {
      "word": "Pack",
      "bg": "#EEEDFE"
    },
    {
      "word": "Itinerary",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where are you going to travel?",
    "When will you go?"
  ],
  "student": [
    "I'm going to visit my cousins.",
    "We're going in the summer."
  ],
  "note": "Think about a real or dream travel plan!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [going to] visit my cousins this summer."
    },
    {
      "speaker": "B",
      "text": "My [destination] is a beach town."
    },
    {
      "speaker": "A",
      "text": "I need to [pack] my bags soon."
    }
  ],
  "blanks": [
    "going to",
    "destination",
    "pack"
  ]
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you going to travel this year?"
    },
    {
      "speaker": "B",
      "text": "Yes, I'm going to visit my cousins. My destination is a small coastal town."
    },
    {
      "speaker": "A",
      "text": "I need to pack soon, we leave next week!"
    },
    {
      "speaker": "B",
      "text": "Have an amazing trip!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This summer, I'm going to travel to visit my cousins in a coastal town. My destination is famous for its beaches. I need to pack my bags soon because we leave in two weeks. I can't wait!",
  "questions": [
    "Where is the writer going to travel?",
    "What is the destination famous for?",
    "When do they leave?"
  ]
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm going to travel to ___.",
    "My destination is ___.",
    "I need to pack ___."
  ]
}$json$::jsonb,
  true
),
(
  'becf9e18-e168-480a-83f2-576a499125da',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'going to' for travel plans",
    "Talk about a destination",
    "Say when I will travel"
  ],
  "challenge": "Tell me about a trip you're planning or dreaming about!"
}$json$::jsonb,
  true
);

-- Lesson 2: Last Holiday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8162eff8-299e-495a-81ce-845210eba37d',
  'Last Holiday',
  'A2',
  'teens',
  8,
  2,
  'Describe a past holiday using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧳",
  "questions": [
    "Where did you go on your last holiday?",
    "Did you explore a new place?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Flew",
      "bg": "#FAECE7"
    },
    {
      "word": "Explored",
      "bg": "#E1F5EE"
    },
    {
      "word": "Relaxed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Discovered",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where did you go on your last holiday?",
    "What did you do there?"
  ],
  "student": [
    "I flew to the coast.",
    "I explored the old town."
  ],
  "note": "Think about your last holiday!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last holiday, I [flew] to the coast."
    },
    {
      "speaker": "B",
      "text": "I [explored] a new city."
    },
    {
      "speaker": "A",
      "text": "I [relaxed] on the beach all day."
    }
  ],
  "blanks": [
    "flew",
    "explored",
    "relaxed"
  ]
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where did you go on your last holiday?"
    },
    {
      "speaker": "B",
      "text": "I flew to the coast with my family. We explored the old town."
    },
    {
      "speaker": "A",
      "text": "I discovered a beautiful hidden beach and relaxed all day."
    },
    {
      "speaker": "B",
      "text": "That sounds amazing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last summer, I flew to a coastal city with my family. We explored the old town and discovered a beautiful hidden beach. I relaxed there for hours. It was one of the best holidays I've ever had.",
  "questions": [
    "How did the writer travel?",
    "What did they explore?",
    "What did they discover?"
  ]
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last holiday, I ___.",
    "I explored ___.",
    "I discovered ___."
  ]
}$json$::jsonb,
  true
),
(
  '8162eff8-299e-495a-81ce-845210eba37d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: flew, explored, relaxed, discovered",
    "Tell a holiday story",
    "Describe a past trip"
  ],
  "challenge": "Tell me about your last holiday!"
}$json$::jsonb,
  true
);

-- Lesson 3: Beach or City?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  'Beach or City?',
  'A2',
  'teens',
  8,
  3,
  'Compare holiday types using comparatives and opinions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "Do you prefer the beach or the city on holiday?",
    "Which is more relaxing for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "More relaxing",
      "bg": "#FAECE7"
    },
    {
      "word": "Livelier",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cultural",
      "bg": "#EEEDFE"
    },
    {
      "word": "Peaceful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the beach more relaxing than the city?",
    "Which do you prefer?"
  ],
  "student": [
    "Yes, the beach is more relaxing.",
    "I prefer the city because it's livelier."
  ],
  "note": "Compare two types of holiday!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The beach is [more relaxing] than the city."
    },
    {
      "speaker": "B",
      "text": "The city is [livelier] and more cultural."
    },
    {
      "speaker": "A",
      "text": "I prefer [peaceful] places."
    }
  ],
  "blanks": [
    "more relaxing",
    "livelier",
    "peaceful"
  ]
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer beach holidays or city holidays?"
    },
    {
      "speaker": "B",
      "text": "I prefer the beach, it's more relaxing and peaceful."
    },
    {
      "speaker": "A",
      "text": "I prefer the city, it's livelier and there's more culture to explore."
    },
    {
      "speaker": "B",
      "text": "We're opposites when it comes to holidays!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two friends have different holiday preferences. Mia prefers the beach because it's more relaxing and peaceful. Leo prefers the city because it's livelier and more cultural, with museums and events. They agree both can be great holidays.",
  "questions": [
    "What does Mia prefer?",
    "Why does Leo prefer the city?",
    "What do they agree on?"
  ]
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___ holidays because ___.",
    "The beach is more ___ than the city.",
    "The city is more ___ than the beach."
  ]
}$json$::jsonb,
  true
),
(
  'e24c011a-23c8-432e-b5da-3d899ad93124',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare beach and city holidays",
    "Use comparatives",
    "Give my holiday preference"
  ],
  "challenge": "Tell me if you prefer the beach or the city, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Travel Message
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  'A Travel Message',
  'A2',
  'teens',
  8,
  4,
  'Write a short message describing a trip.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💌",
  "questions": [
    "Have you sent a postcard or message from a trip?",
    "What would you write?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Amazing",
      "bg": "#FAECE7"
    },
    {
      "word": "Wish you were here",
      "bg": "#E1F5EE"
    },
    {
      "word": "View",
      "bg": "#EEEDFE"
    },
    {
      "word": "Memories",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you write in a travel message?",
    "What is the view like?"
  ],
  "student": [
    "I'd write about the amazing food.",
    "The view is beautiful."
  ],
  "note": "Think about a travel message you'd send!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This trip is [amazing]!"
    },
    {
      "speaker": "B",
      "text": "I [wish you were here] with me."
    },
    {
      "speaker": "A",
      "text": "The [view] from the hotel is beautiful."
    }
  ],
  "blanks": [
    "amazing",
    "wish you were here",
    "view"
  ]
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write to a friend from your trip?"
    },
    {
      "speaker": "B",
      "text": "This trip is amazing! The view from our hotel is beautiful. Wish you were here!"
    },
    {
      "speaker": "A",
      "text": "I'd write about the memories we're making every day."
    },
    {
      "speaker": "B",
      "text": "That sounds like a lovely message!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message from vacation: Hi! This trip is amazing. The view from our hotel is beautiful, and the food is delicious. We're making so many great memories. Wish you were here! See you next week.",
  "questions": [
    "How does the writer describe the trip?",
    "What is the view like?",
    "What does the writer say about memories?"
  ]
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This trip is ___!",
    "The view is ___.",
    "Wish you were here because ___."
  ]
}$json$::jsonb,
  true
),
(
  '4bb30430-a3af-4b8b-a5d8-710f8361dfd6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short travel message",
    "Describe a view or experience",
    "Use 'wish you were here'"
  ],
  "challenge": "Write and read me a travel message from an imaginary trip!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  'Unit Review',
  'A2',
  'teens',
  8,
  5,
  'Review travel plans, a past holiday, comparisons, and a travel message.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌍",
  "questions": [
    "Where would you like to travel?",
    "Where did you go on your last trip?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Travel",
      "bg": "#FAECE7"
    },
    {
      "word": "Explored",
      "bg": "#E1F5EE"
    },
    {
      "word": "Prefer",
      "bg": "#EEEDFE"
    },
    {
      "word": "Amazing",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where are you going to travel?",
    "Where did you go last time?"
  ],
  "student": [
    "I'm going to visit the coast.",
    "Last time, I explored a new city."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm going to [travel] to the coast this summer."
    },
    {
      "speaker": "B",
      "text": "Last year, I [explored] a new city."
    },
    {
      "speaker": "A",
      "text": "I [prefer] the beach because it's relaxing."
    }
  ],
  "blanks": [
    "travel",
    "explored",
    "prefer"
  ]
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your travel plans and past trips."
    },
    {
      "speaker": "B",
      "text": "I'm going to travel to the mountains this year. Last year, I explored a coastal city."
    },
    {
      "speaker": "A",
      "text": "Which do you prefer, the beach or the city?"
    },
    {
      "speaker": "B",
      "text": "I prefer the beach, it's more relaxing. This trip is going to be amazing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year, I'm going to travel to the mountains with my family. Last year, we explored a coastal city and it was amazing. I prefer the beach because it's more relaxing than the city. I'm already excited to send everyone a travel message!",
  "questions": [
    "Where is the writer going to travel this year?",
    "What did they do last year?",
    "What does the writer prefer?"
  ]
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This year, I'm going to ___.",
    "Last year, I ___.",
    "I prefer ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff88386a-bdf2-4b42-9e9e-ef68eddad1c0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about travel plans",
    "Tell a past holiday story",
    "Compare holiday types",
    "Write a travel message"
  ],
  "challenge": "Tell me all about your travel dreams and memories!"
}$json$::jsonb,
  true
);
