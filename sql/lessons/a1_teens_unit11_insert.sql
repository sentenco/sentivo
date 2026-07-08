-- A1 Teens Unit 11: Social Media and Tech (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Social Media and Tech
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  'Social Media and Tech',
  'A1',
  'teens',
  11,
  1,
  'Name basic social media and technology words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "What device do you use most?",
    "Do you have a phone?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Phone",
      "bg": "#FAECE7"
    },
    {
      "word": "Laptop",
      "bg": "#E1F5EE"
    },
    {
      "word": "App",
      "bg": "#EEEDFE"
    },
    {
      "word": "Message",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What device do you use?",
    "Do you have a laptop?"
  ],
  "student": [
    "I use a phone.",
    "Yes, I have a laptop!"
  ],
  "note": "Think about the devices you really use!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use a [phone]."
    },
    {
      "speaker": "B",
      "text": "I have a [laptop]."
    },
    {
      "speaker": "A",
      "text": "I send a [message]."
    }
  ],
  "blanks": [
    "phone",
    "laptop",
    "message"
  ]
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What device do you use most?"
    },
    {
      "speaker": "B",
      "text": "I use my phone the most."
    },
    {
      "speaker": "A",
      "text": "I use a tablet!"
    },
    {
      "speaker": "B",
      "text": "Tablets are great for videos!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use a phone every day. I also have a laptop for school. I use apps to send messages. Technology helps me every day!",
  "questions": [
    "What device does the writer use every day?",
    "What is the laptop for?",
    "What do apps help with?"
  ]
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use a ___.",
    "I have a ___.",
    "I use apps to ___."
  ]
}$json$::jsonb,
  true
),
(
  'dc2e60bd-be1c-4e92-a1ff-7214f0a405ef',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four tech words",
    "Say 'I use a ___'",
    "Talk about devices I use"
  ],
  "challenge": "Tell me what device you use most!"
}$json$::jsonb,
  true
);

-- Lesson 2: Online Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  'Online Habits',
  'A1',
  'teens',
  11,
  2,
  'Say simple things they do online.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💻",
  "questions": [
    "What do you do online?",
    "Do you watch videos online?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Watch Videos",
      "bg": "#FAECE7"
    },
    {
      "word": "Send Messages",
      "bg": "#E1F5EE"
    },
    {
      "word": "Listen to Music",
      "bg": "#EEEDFE"
    },
    {
      "word": "Play Games",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do online?",
    "Do you play games online?"
  ],
  "student": [
    "I watch videos online.",
    "Yes, I play games every day!"
  ],
  "note": "Think about what you really do online!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [watch videos] online."
    },
    {
      "speaker": "B",
      "text": "I [send messages] to friends."
    },
    {
      "speaker": "A",
      "text": "I [play games] too."
    }
  ],
  "blanks": [
    "watch videos",
    "send messages",
    "play games"
  ]
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do online?"
    },
    {
      "speaker": "B",
      "text": "I watch videos and listen to music."
    },
    {
      "speaker": "A",
      "text": "I send messages to my friends!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Online, I watch videos. I send messages to my friends. I listen to music. Sometimes I play games. I use the internet every day!",
  "questions": [
    "What does the writer do online?",
    "Who does the writer send messages to?",
    "Does the writer play games?"
  ]
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Online, I ___.",
    "I send messages to ___.",
    "I use the internet to ___."
  ]
}$json$::jsonb,
  true
),
(
  'e1c7b7bc-ea4e-4922-8c96-c4deb3eb994f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four online habits",
    "Say 'Online, I ___'",
    "Talk about what I do online"
  ],
  "challenge": "Tell me three things you do online!"
}$json$::jsonb,
  true
);

-- Lesson 3: Messages and Communication
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '949a899d-35cd-43ac-9450-241b23085f54',
  'Messages and Communication',
  'A1',
  'teens',
  11,
  3,
  'Use simple communication phrases online.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "What do you write when you message a friend?",
    "Do you say 'thank you' online?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hi",
      "bg": "#FAECE7"
    },
    {
      "word": "Please",
      "bg": "#E1F5EE"
    },
    {
      "word": "Thank You",
      "bg": "#EEEDFE"
    },
    {
      "word": "See You",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you start a message?",
    "How do you end a message?"
  ],
  "student": [
    "I say 'Hi'.",
    "I say 'See you!'"
  ],
  "note": "Think about a real message you sent recently!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hi]! How are you?"
    },
    {
      "speaker": "B",
      "text": "[Thank you] for the message."
    },
    {
      "speaker": "A",
      "text": "[See you] later!"
    }
  ],
  "blanks": [
    "Hi",
    "Thank you",
    "See you"
  ]
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! How are you?"
    },
    {
      "speaker": "B",
      "text": "I'm good, thank you! And you?"
    },
    {
      "speaker": "A",
      "text": "I'm great! See you later!"
    },
    {
      "speaker": "B",
      "text": "See you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! How are you? I'm good, thank you! Can you help me, please? Yes, of course. Thank you! See you later!",
  "questions": [
    "How does the message start?",
    "What does the writer ask for?",
    "How does the message end?"
  ]
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hi! How are ___?",
    "Can you help me, ___?",
    "___ later!"
  ]
}$json$::jsonb,
  true
),
(
  '949a899d-35cd-43ac-9450-241b23085f54',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hi' and 'See you'",
    "Say 'please' and 'thank you'",
    "Write a simple message"
  ],
  "challenge": "Send me a short message with a greeting and a goodbye!"
}$json$::jsonb,
  true
);

-- Lesson 4: Tech Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '53a55c78-7888-4a71-b19a-032733cad460',
  'Tech Questions',
  'A1',
  'teens',
  11,
  4,
  'Answer simple questions about technology use.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "Do you use a phone every day?",
    "What app do you like?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Do You Use",
      "bg": "#FAECE7"
    },
    {
      "word": "What App",
      "bg": "#E1F5EE"
    },
    {
      "word": "Every Day",
      "bg": "#EEEDFE"
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you use a phone?",
    "What app do you like?"
  ],
  "student": [
    "Yes, I use a phone every day.",
    "I like a video app."
  ],
  "note": "Answer about your real tech habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you use] a laptop?"
    },
    {
      "speaker": "B",
      "text": "[What app] do you like?"
    },
    {
      "speaker": "A",
      "text": "I use it [every day]."
    }
  ],
  "blanks": [
    "Do you use",
    "What app",
    "every day"
  ]
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you use a phone every day?"
    },
    {
      "speaker": "B",
      "text": "Yes, I use it every day."
    },
    {
      "speaker": "A",
      "text": "What app do you like?"
    },
    {
      "speaker": "B",
      "text": "I like a music app the best!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you use a phone every day? Yes, I use it every day. What app do you like? I like a video app. Technology is part of my daily life!",
  "questions": [
    "Does the writer use a phone every day?",
    "What app does the writer like?",
    "Is technology part of daily life?"
  ]
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you use a ___? ___.",
    "My favorite app is ___.",
    "I use technology to ___."
  ]
}$json$::jsonb,
  true
),
(
  '53a55c78-7888-4a71-b19a-032733cad460',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you use ___?'",
    "Ask 'What app do you like?'",
    "Talk about technology use"
  ],
  "challenge": "Ask me what app I like and why!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  'Unit Review',
  'A1',
  'teens',
  11,
  5,
  'Talk briefly about technology and online habits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "What tech words do you remember?",
    "What do you do online?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Phone",
      "bg": "#FAECE7"
    },
    {
      "word": "App",
      "bg": "#E1F5EE"
    },
    {
      "word": "Message",
      "bg": "#EEEDFE"
    },
    {
      "word": "Online",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What device do you use?",
    "What do you do online?"
  ],
  "student": [
    "I use a phone.",
    "I watch videos online."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use a [phone]."
    },
    {
      "speaker": "B",
      "text": "I use an [app] for music."
    },
    {
      "speaker": "A",
      "text": "I send a [message]."
    }
  ],
  "blanks": [
    "phone",
    "app",
    "message"
  ]
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What device do you use most?"
    },
    {
      "speaker": "B",
      "text": "I use my phone the most."
    },
    {
      "speaker": "A",
      "text": "What do you do online?"
    },
    {
      "speaker": "B",
      "text": "I watch videos and send messages!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use a phone every day. Online, I watch videos and send messages to friends. I say 'Hi' and 'See you' in my messages. Technology helps me every day!",
  "questions": [
    "What device does the writer use?",
    "What does the writer do online?",
    "What does the writer say in messages?"
  ]
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use a ___.",
    "Online, I ___.",
    "In messages, I say ___."
  ]
}$json$::jsonb,
  true
),
(
  '9ec629e2-3d46-41c0-b677-cdf28893fd1b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name tech words",
    "Talk about online habits",
    "Use message phrases",
    "Answer tech questions"
  ],
  "challenge": "Tell me about the technology you use every day!"
}$json$::jsonb,
  true
);
