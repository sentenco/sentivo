-- A1 Teens Unit 4: Friends and Free Time (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Friends and Words for People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  'Friends and Words for People',
  'A1',
  'teens',
  4,
  1,
  'Name friends and simple people words. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
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
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "Do you have a friend at school?",
    "Who is your best friend?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Friend",
      "bg": "#FAECE7"
    },
    {
      "word": "Boy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Girl",
      "bg": "#EEEDFE"
    },
    {
      "word": "Classmate",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your friend?"
  ],
  "student": [
    "This is my friend.",
    "Yes, this is my friend."
  ],
  "note": "Point to a photo of a friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [friend]."
    },
    {
      "speaker": "B",
      "text": "He is a [boy]."
    },
    {
      "speaker": "A",
      "text": "She is a [girl]."
    }
  ],
  "blanks": [
    "friend",
    "boy",
    "girl"
  ]
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my friend."
    },
    {
      "speaker": "B",
      "text": "Is your friend a boy or a girl?"
    },
    {
      "speaker": "A",
      "text": "She is a girl. Her name is Mia."
    },
    {
      "speaker": "B",
      "text": "Nice friend!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my friend. Her name is Mia. She is a girl. She is my classmate.",
  "questions": [
    "What is the friend's name?",
    "Is the friend a boy or a girl?",
    "Is the friend a classmate?"
  ]
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my friend.",
    "My friend's name is ___.",
    "My friend is a ___."
  ]
}$json$::jsonb,
  true
),
(
  '03604ecc-814e-42a4-bff5-6e7bf6618364',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my friend'",
    "Say 'boy' or 'girl'",
    "Name a friend"
  ],
  "challenge": "Tell me about a friend!"
}$json$::jsonb,
  true
);

-- Lesson 2: What Friends Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  'What Friends Like',
  'A1',
  'teens',
  4,
  2,
  'Say what friends like using simple present. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
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
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎮",
  "questions": [
    "Does your friend like games?",
    "Does your friend like music?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Like",
      "bg": "#FAECE7"
    },
    {
      "word": "Don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Games",
      "bg": "#EEEDFE"
    },
    {
      "word": "Music",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Does your friend like games?",
    "What does your friend like?"
  ],
  "student": [
    "Yes, my friend likes games.",
    "My friend likes music."
  ],
  "note": "Use the word bank: like, don't like, games, music.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My friend [like]s games."
    },
    {
      "speaker": "B",
      "text": "She [don't like]s math."
    },
    {
      "speaker": "A",
      "text": "She likes [music]."
    }
  ],
  "blanks": [
    "like",
    "don't like",
    "music"
  ]
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Does your friend like games?"
    },
    {
      "speaker": "B",
      "text": "Yes, my friend likes games. She doesn't like math."
    },
    {
      "speaker": "A",
      "text": "My friend likes music."
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friend likes games. She likes music too. She doesn't like math.",
  "questions": [
    "What does the friend like?",
    "What else does she like?",
    "What doesn't she like?"
  ]
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My friend likes ___.",
    "My friend doesn't like ___.",
    "I like ___ too."
  ]
}$json$::jsonb,
  true
),
(
  '42971fe7-333b-4dbd-bf4a-28aa0d8d8280',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'likes' and 'doesn't like'",
    "Talk about what a friend likes",
    "Talk about what I like"
  ],
  "challenge": "Tell me what your friend likes and doesn't like!"
}$json$::jsonb,
  true
);

-- Lesson 3: Free Time Activities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  'Free Time Activities',
  'A1',
  'teens',
  4,
  3,
  'Name free time activities. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
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
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What do you do in your free time?",
    "Do you like to draw?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Play",
      "bg": "#FAECE7"
    },
    {
      "word": "Watch TV",
      "bg": "#E1F5EE"
    },
    {
      "word": "Read",
      "bg": "#EEEDFE"
    },
    {
      "word": "Draw",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in your free time?",
    "Do you like to draw?"
  ],
  "student": [
    "I play games.",
    "Yes, I like to draw."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [play] with my friends."
    },
    {
      "speaker": "B",
      "text": "I [watch TV] at home."
    },
    {
      "speaker": "A",
      "text": "I like to [draw]."
    }
  ],
  "blanks": [
    "play",
    "watch tv",
    "draw"
  ]
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do in your free time?"
    },
    {
      "speaker": "B",
      "text": "I play games and watch TV. What about you?"
    },
    {
      "speaker": "A",
      "text": "I like to draw and read."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In my free time, I play games. I watch TV too. Sometimes I read or draw.",
  "questions": [
    "What does the writer play?",
    "What does the writer watch?",
    "What else does the writer do?"
  ]
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my free time, I ___.",
    "I also ___.",
    "Sometimes I ___."
  ]
}$json$::jsonb,
  true
),
(
  'c678a6f7-4030-4118-8d66-6791410e40e1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 free time activities",
    "Say 'In my free time, I ___'",
    "Ask about free time"
  ],
  "challenge": "Tell me what you do in your free time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Friends and Free Time Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  'Friends and Free Time Questions',
  'A1',
  'teens',
  4,
  4,
  'Combine friends and free time into a short talk. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
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
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "Do you play with friends every day?",
    "Who is your best friend?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Together",
      "bg": "#FAECE7"
    },
    {
      "word": "Fun",
      "bg": "#E1F5EE"
    },
    {
      "word": "Best friend",
      "bg": "#EEEDFE"
    },
    {
      "word": "Every day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you play with friends every day?",
    "Who is your best friend?"
  ],
  "student": [
    "Yes, we play together every day.",
    "My best friend is Mia."
  ],
  "note": "Put it all together: friend + what they like + free time.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [best friend] is Mia."
    },
    {
      "speaker": "B",
      "text": "We play [together] every day."
    },
    {
      "speaker": "A",
      "text": "It is [fun]!"
    }
  ],
  "blanks": [
    "best friend",
    "together",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend and free time."
    },
    {
      "speaker": "B",
      "text": "My best friend is Mia. She likes games and music."
    },
    {
      "speaker": "A",
      "text": "We play together every day. It's fun!"
    },
    {
      "speaker": "B",
      "text": "Sounds like a great friendship!"
    }
  ],
  "note": "Mini talk: tell me all about your best friend and free time in a few sentences."
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is Mia. She likes games and music. We play together every day. It is fun!",
  "questions": [
    "Who is the best friend?",
    "What does Mia like?",
    "How often do they play together?"
  ]
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My best friend is ___.",
    "My friend likes ___.",
    "We ___ together."
  ]
}$json$::jsonb,
  true
),
(
  '370da70a-dc49-466a-a709-1ca3be42a51c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Introduce my best friend",
    "Say what my friend likes",
    "Talk about free time together"
  ],
  "challenge": "Tell me all about your best friend and free time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  'Unit Review',
  'A1',
  'teens',
  4,
  5,
  'Review friends, likes, and free time. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
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
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "Who is your friend?",
    "What do you do in your free time?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Friend",
      "bg": "#FAECE7"
    },
    {
      "word": "Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Play",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fun",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is your friend?",
    "What do you do in your free time?"
  ],
  "student": [
    "This is my friend.",
    "I play games in my free time."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [friend]."
    },
    {
      "speaker": "B",
      "text": "She [like]s music."
    },
    {
      "speaker": "A",
      "text": "We [play] together."
    }
  ],
  "blanks": [
    "friend",
    "like",
    "play"
  ]
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your friend and free time."
    },
    {
      "speaker": "B",
      "text": "This is my friend. She likes music. We play together every day."
    },
    {
      "speaker": "A",
      "text": "It is fun!"
    },
    {
      "speaker": "B",
      "text": "Sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my friend. She likes music. We play together. It is fun!",
  "questions": [
    "Who is this about?",
    "What does the friend like?",
    "Is it fun?"
  ]
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my friend.",
    "My friend likes ___.",
    "We ___ together."
  ]
}$json$::jsonb,
  true
),
(
  '6928db27-fafe-47c8-90ec-d4156548dabc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about a friend",
    "Say what a friend likes",
    "Talk about free time together"
  ],
  "challenge": "Tell me all about your friends and free time!"
}$json$::jsonb,
  true
);
