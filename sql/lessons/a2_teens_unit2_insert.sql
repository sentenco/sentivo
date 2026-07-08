-- A2 Teens Unit 2: Friends and Social Life (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Good Friends
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  'Good Friends',
  'A2',
  'teens',
  2,
  1,
  'Describe qualities of a good friend using personality language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
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
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "What makes a good friend?",
    "Is your best friend loyal?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Trustworthy",
      "bg": "#FAECE7"
    },
    {
      "word": "Supportive",
      "bg": "#E1F5EE"
    },
    {
      "word": "Loyal",
      "bg": "#EEEDFE"
    },
    {
      "word": "Understanding",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes a good friend?",
    "Is your friend supportive?"
  ],
  "student": [
    "A good friend is trustworthy and loyal.",
    "Yes, she is always supportive."
  ],
  "note": "Think about the qualities of a good friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A good friend is [trustworthy]."
    },
    {
      "speaker": "B",
      "text": "My friend is always [supportive]."
    },
    {
      "speaker": "A",
      "text": "She is [loyal] and understanding."
    }
  ],
  "blanks": [
    "trustworthy",
    "supportive",
    "loyal"
  ]
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes a good friend, in your opinion?"
    },
    {
      "speaker": "B",
      "text": "A good friend is trustworthy and supportive."
    },
    {
      "speaker": "A",
      "text": "My best friend is loyal and understanding, even when I make mistakes."
    },
    {
      "speaker": "B",
      "text": "That's a real friend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Teens talk about friendship online. One writes: a good friend is trustworthy and never shares your secrets. Another writes: a good friend is supportive, especially on bad days. Both agree loyalty matters most.",
  "questions": [
    "What does the first teen say about a good friend?",
    "What does the second teen say?",
    "What do both agree matters most?"
  ]
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A good friend is ___ and ___.",
    "My best friend is ___ because ___.",
    "Friendship matters to me because ___."
  ]
}$json$::jsonb,
  true
),
(
  'e73cf132-1457-4f21-89d0-ef086e81d904',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe qualities of a good friend",
    "Use personality adjectives",
    "Talk about my best friend"
  ],
  "challenge": "Tell me what makes your best friend a good friend!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  'Making Plans',
  'A2',
  'teens',
  2,
  2,
  'Make and respond to simple social plans and invitations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
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
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📲",
  "questions": [
    "Do you like to hang out with friends?",
    "Are you free this weekend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hang out",
      "bg": "#FAECE7"
    },
    {
      "word": "Free",
      "bg": "#E1F5EE"
    },
    {
      "word": "Meet up",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plan",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you free this weekend?",
    "Do you want to hang out?"
  ],
  "student": [
    "Yes, I'm free on Saturday.",
    "Sure, let's meet up at the mall."
  ],
  "note": "Practice making a real plan!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you want to [hang out] this weekend?"
    },
    {
      "speaker": "B",
      "text": "Sure, I'm [free] on Saturday."
    },
    {
      "speaker": "A",
      "text": "Let's [meet up] at the park."
    }
  ],
  "blanks": [
    "hang out",
    "free",
    "meet up"
  ]
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you want to hang out this weekend?"
    },
    {
      "speaker": "B",
      "text": "Sure! I'm free on Saturday afternoon."
    },
    {
      "speaker": "A",
      "text": "Let's meet up at the mall around 2pm."
    },
    {
      "speaker": "B",
      "text": "Sounds like a plan!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message thread: Hey, are you free this weekend? Yeah, I'm free on Saturday! Want to hang out? Sure, let's meet up at the mall at 2pm. See you then!",
  "questions": [
    "Is the person free on Saturday?",
    "Where will they meet up?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Are you free on ___?",
    "Let's meet up at ___.",
    "I want to hang out because ___."
  ]
}$json$::jsonb,
  true
),
(
  '501df113-2daa-4ce3-b722-c872897f1eb9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Make a simple plan",
    "Ask 'Are you free?'",
    "Suggest a time and place"
  ],
  "challenge": "Make a plan to hang out with me this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Last Weekend with Friends
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  'Last Weekend with Friends',
  'A2',
  'teens',
  2,
  3,
  'Describe a past weekend with friends using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
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
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎬",
  "questions": [
    "What did you do last weekend?",
    "Did you hang out with friends?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hung out",
      "bg": "#FAECE7"
    },
    {
      "word": "Watched",
      "bg": "#E1F5EE"
    },
    {
      "word": "Laughed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Talked",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do last weekend?",
    "Did you have fun?"
  ],
  "student": [
    "I hung out with my friends.",
    "Yes, we watched a movie and laughed a lot."
  ],
  "note": "Think about your last weekend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last weekend, I [hung out] with my friends."
    },
    {
      "speaker": "B",
      "text": "We [watched] a funny movie."
    },
    {
      "speaker": "A",
      "text": "We [laughed] and [talked] for hours."
    }
  ],
  "blanks": [
    "hung out",
    "watched",
    "talked"
  ]
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do last weekend?"
    },
    {
      "speaker": "B",
      "text": "I hung out with my friends. We watched a movie and laughed a lot."
    },
    {
      "speaker": "A",
      "text": "We also talked about our plans for the summer."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last weekend was great. My friends and I hung out at my house. First, we watched a funny movie. Then, we talked about school and laughed about old memories. It was one of my favorite weekends this year.",
  "questions": [
    "Where did the friends hang out?",
    "What did they watch?",
    "What did they talk about?"
  ]
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last weekend, I hung out with ___.",
    "We ___.",
    "It was a great weekend because ___."
  ]
}$json$::jsonb,
  true
),
(
  'a7551d0f-0512-49c6-876e-02ec18abd578',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: hung out, watched, laughed, talked",
    "Tell a story about last weekend",
    "Say why it was a good weekend"
  ],
  "challenge": "Tell me about your last weekend with friends!"
}$json$::jsonb,
  true
);

-- Lesson 4: Friendship Advice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  'Friendship Advice',
  'A2',
  'teens',
  2,
  4,
  'Give simple advice for common friendship situations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
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
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "Have you ever given a friend advice?",
    "What do you do when friends argue?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Should",
      "bg": "#FAECE7"
    },
    {
      "word": "Advice",
      "bg": "#E1F5EE"
    },
    {
      "word": "Apologize",
      "bg": "#EEEDFE"
    },
    {
      "word": "Forgive",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What should I do if my friend is upset?",
    "Should I apologize first?"
  ],
  "student": [
    "You should talk to them.",
    "Yes, you should apologize."
  ],
  "note": "Think of good advice for a friend problem!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "You [should] talk to your friend."
    },
    {
      "speaker": "B",
      "text": "Maybe you should [apologize] first."
    },
    {
      "speaker": "A",
      "text": "It's important to [forgive] each other."
    }
  ],
  "blanks": [
    "should",
    "apologize",
    "forgive"
  ]
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My friend and I had an argument. What should I do?"
    },
    {
      "speaker": "B",
      "text": "You should talk to them and explain how you feel."
    },
    {
      "speaker": "A",
      "text": "Maybe I should apologize first, even if it wasn't my fault."
    },
    {
      "speaker": "B",
      "text": "That's kind advice. Good friends forgive each other."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A teen writes for advice: my friend and I argued last week and haven't talked since. What should I do? Reply: you should message her and apologize, even if it's hard. Good friendships are worth saving.",
  "questions": [
    "What is the problem?",
    "What advice does the reply give?",
    "Why should the teen apologize?"
  ]
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "If my friend is upset, I should ___.",
    "I think you should ___.",
    "Good friends always ___."
  ]
}$json$::jsonb,
  true
),
(
  '15e2332d-26fa-46e9-b963-75e0e6ab47de',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give advice using 'should'",
    "Talk about apologizing and forgiving",
    "Respond to a friendship problem"
  ],
  "challenge": "Give me advice for a friendship problem!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  'Unit Review',
  'A2',
  'teens',
  2,
  5,
  'Review friendship qualities, plans, past events, and advice.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
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
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👭",
  "questions": [
    "What makes a good friend?",
    "What did you do with friends recently?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
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
      "word": "Plan",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hung out",
      "bg": "#EEEDFE"
    },
    {
      "word": "Advice",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes a good friend?",
    "What did you do last weekend?"
  ],
  "student": [
    "A good friend is loyal and supportive.",
    "I hung out with my friends and watched a movie."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A good [friend] is trustworthy."
    },
    {
      "speaker": "B",
      "text": "Let's make a [plan] for the weekend."
    },
    {
      "speaker": "A",
      "text": "Last weekend, we [hung out] and had fun."
    }
  ],
  "blanks": [
    "friend",
    "plan",
    "hung out"
  ]
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend and your last weekend together."
    },
    {
      "speaker": "B",
      "text": "My friend is loyal and supportive. Last weekend, we hung out and watched a movie."
    },
    {
      "speaker": "A",
      "text": "Did you ever have an argument?"
    },
    {
      "speaker": "B",
      "text": "Yes, but I apologized and we forgave each other."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is trustworthy and supportive. Last weekend, we hung out, watched a movie, and talked for hours. We had a small argument once, but I apologized and we forgave each other. Good friendships take work, but they're worth it.",
  "questions": [
    "What is the writer's friend like?",
    "What did they do last weekend?",
    "How did they solve their argument?"
  ]
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My best friend is ___.",
    "Last weekend, we ___.",
    "Good friendships need ___."
  ]
}$json$::jsonb,
  true
),
(
  'b6d26e7b-dd41-40f6-85d9-d2a46f53df92',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a good friend",
    "Make plans with friends",
    "Tell a past weekend story",
    "Give friendship advice"
  ],
  "challenge": "Tell me all about your friendships!"
}$json$::jsonb,
  true
);
