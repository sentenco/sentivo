-- A1 Teens Unit 4: Friends and Free Time (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Friends and Words for People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  'Friends and Words for People',
  'A1',
  'teens',
  4,
  1,
  'Name simple words for friends and describe friendship.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
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
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "Who is your best friend?",
    "What makes a good friend?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
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
      "word": "Best Friend",
      "bg": "#E1F5EE"
    },
    {
      "word": "Classmate",
      "bg": "#EEEDFE"
    },
    {
      "word": "Close",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is your best friend?",
    "Is your friend close to you?"
  ],
  "student": [
    "My best friend is Leo.",
    "Yes, we are very close."
  ],
  "note": "Think about your real best friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My best [friend] is Leo."
    },
    {
      "speaker": "B",
      "text": "My [classmate] is nice."
    },
    {
      "speaker": "A",
      "text": "We are [close]."
    }
  ],
  "blanks": [
    "friend",
    "classmate",
    "close"
  ]
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is your best friend?"
    },
    {
      "speaker": "B",
      "text": "My best friend is Mia."
    },
    {
      "speaker": "A",
      "text": "Is she nice?"
    },
    {
      "speaker": "B",
      "text": "Yes, she is very nice and close to me!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is Leo. He is nice and close to me. My classmate Ana is also my friend. I like having good friends!",
  "questions": [
    "Who is the writer's best friend?",
    "Is Leo nice?",
    "Who else is the writer's friend?"
  ]
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My best friend is ___.",
    "My friend is ___.",
    "My friend is ___ to me."
  ]
}$json$::jsonb,
  true
),
(
  'c719ae09-658d-4ef5-b22a-ad4c5282be0f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My best friend is ___'",
    "Describe a friend",
    "Use 'classmate' and 'close'"
  ],
  "challenge": "Tell me about your best friend!"
}$json$::jsonb,
  true
);

-- Lesson 2: What Friends Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  'What Friends Like',
  'A1',
  'teens',
  4,
  2,
  'Talk about a friend''s likes using simple present.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
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
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💭",
  "questions": [
    "What does your friend like?",
    "What does your friend not like?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Likes",
      "bg": "#FAECE7"
    },
    {
      "word": "Doesn't Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Music",
      "bg": "#EEEDFE"
    },
    {
      "word": "Games",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What does your friend like?",
    "Does she like music?"
  ],
  "student": [
    "My friend likes music.",
    "Yes, she loves music!"
  ],
  "note": "Think about a real friend's real likes!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My friend [likes] music."
    },
    {
      "speaker": "B",
      "text": "She [doesn't like] sports."
    },
    {
      "speaker": "A",
      "text": "My friend likes [games]."
    }
  ],
  "blanks": [
    "likes",
    "doesn't like",
    "games"
  ]
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What does your friend like?"
    },
    {
      "speaker": "B",
      "text": "My friend likes video games."
    },
    {
      "speaker": "A",
      "text": "Does she like sports?"
    },
    {
      "speaker": "B",
      "text": "No, she doesn't like sports!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friend Ana likes music. She doesn't like sports. My friend Leo likes games. He doesn't like reading. Everyone likes different things!",
  "questions": [
    "What does Ana like?",
    "What does Ana not like?",
    "What does Leo like?"
  ]
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My friend likes ___.",
    "My friend doesn't like ___.",
    "We both like ___."
  ]
}$json$::jsonb,
  true
),
(
  'e4b68a0e-108f-47d3-b572-e4b4896ee937',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My friend likes ___'",
    "Say 'doesn't like'",
    "Talk about a friend's interests"
  ],
  "challenge": "Tell me one thing your friend likes and one thing they don't!"
}$json$::jsonb,
  true
);

-- Lesson 3: Free Time Activities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  'Free Time Activities',
  'A1',
  'teens',
  4,
  3,
  'Name common free-time activities.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
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
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎮",
  "questions": [
    "What do you do after school?",
    "Do you watch videos or listen to music?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
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
      "word": "Listen to Music",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chat",
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
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do after school?",
    "Do you play games?"
  ],
  "student": [
    "I watch videos.",
    "Yes, I play games every day!"
  ],
  "note": "Think about what you really do after school!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [watch videos] after school."
    },
    {
      "speaker": "B",
      "text": "I [listen to music]."
    },
    {
      "speaker": "A",
      "text": "I [chat] with friends."
    }
  ],
  "blanks": [
    "watch videos",
    "listen to music",
    "chat"
  ]
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do after school?"
    },
    {
      "speaker": "B",
      "text": "I play games and chat with friends."
    },
    {
      "speaker": "A",
      "text": "I listen to music!"
    },
    {
      "speaker": "B",
      "text": "That sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "After school, I watch videos. Sometimes I listen to music. I chat with my friends online. On weekends, I play games. I have a lot of free time activities!",
  "questions": [
    "What does the writer do after school?",
    "Who does the writer chat with?",
    "What does the writer do on weekends?"
  ]
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "After school, I ___.",
    "I like to ___.",
    "On weekends, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'a2747307-0bad-4bd8-b334-b166e8d6b917',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four free-time activities",
    "Say what I do after school",
    "Talk about my free time"
  ],
  "challenge": "Tell me your favorite free-time activity!"
}$json$::jsonb,
  true
);

-- Lesson 4: Friends and Free Time Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  'Friends and Free Time Questions',
  'A1',
  'teens',
  4,
  4,
  'Ask and answer simple questions about friends and free time.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
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
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What do you do with friends?",
    "What do you like to do?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Do You Do",
      "bg": "#FAECE7"
    },
    {
      "word": "Together",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hang Out",
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
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do with friends?",
    "Is it fun?"
  ],
  "student": [
    "We hang out together.",
    "Yes, it's very fun!"
  ],
  "note": "Answer about real time with friends!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What do you do] with friends?"
    },
    {
      "speaker": "B",
      "text": "We [hang out] together."
    },
    {
      "speaker": "A",
      "text": "It is [fun]."
    }
  ],
  "blanks": [
    "What do you do",
    "hang out",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do with friends?"
    },
    {
      "speaker": "B",
      "text": "We play games together."
    },
    {
      "speaker": "A",
      "text": "Is it fun?"
    },
    {
      "speaker": "B",
      "text": "Yes, it's really fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What do you do with friends? We hang out together. We play games and chat. What do you like to do? I like to watch videos. It's a lot of fun!",
  "questions": [
    "What do the friends do together?",
    "Is it fun?",
    "What does the writer like to do?"
  ]
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What do you do with friends? ___.",
    "We ___ together.",
    "It is ___."
  ]
}$json$::jsonb,
  true
),
(
  'a74b21a6-3940-4e9c-94fc-29eb0fba0a2d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What do you do with friends?'",
    "Say 'We ___ together'",
    "Talk about fun activities"
  ],
  "challenge": "Tell me what you do with your friends!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  'Unit Review',
  'A1',
  'teens',
  4,
  5,
  'Talk briefly about friends and free time.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
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
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "What friend words do you remember?",
    "What free-time activities do you remember?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
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
      "word": "Games",
      "bg": "#E1F5EE"
    },
    {
      "word": "Music",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fun",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is your friend?",
    "What do you do together?"
  ],
  "student": [
    "My friend is Leo.",
    "We play games together."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My best [friend] is Leo."
    },
    {
      "speaker": "B",
      "text": "We play [games] together."
    },
    {
      "speaker": "A",
      "text": "It is [fun]."
    }
  ],
  "blanks": [
    "friend",
    "games",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend."
    },
    {
      "speaker": "B",
      "text": "My best friend is Mia. She likes music."
    },
    {
      "speaker": "A",
      "text": "What do you do together?"
    },
    {
      "speaker": "B",
      "text": "We chat and watch videos. It's fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is Leo. He likes music and games. We hang out after school. We chat and play games together. It's always fun!",
  "questions": [
    "Who is the writer's best friend?",
    "What does Leo like?",
    "What do they do together?"
  ]
}$json$::jsonb,
  true
),
(
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
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
  '053a2f41-fa1b-4b50-9cde-0d7ddbdeb583',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a friend",
    "Talk about free-time activities",
    "Ask and answer about friends"
  ],
  "challenge": "Tell me about your best friend and what you do together!"
}$json$::jsonb,
  true
);
