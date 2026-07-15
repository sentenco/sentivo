-- A1 Teens Unit 12: Weekend Plans (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weekend Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  'Weekend Plans',
  'A1',
  'teens',
  12,
  1,
  'Say simple weekend activities. [Bridge, L1, format E: choose-the-better-answer]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
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
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What do you do on weekends?",
    "Do you relax on weekends?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Weekend",
      "bg": "#FAECE7"
    },
    {
      "word": "Plan",
      "bg": "#E1F5EE"
    },
    {
      "word": "Relax",
      "bg": "#EEEDFE"
    },
    {
      "word": "Visit",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do on weekends?",
    "Do you have a plan?"
  ],
  "student": [
    "I relax on weekends.",
    "Yes, I have a plan."
  ],
  "note": "Point to a weekend picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "On the [weekend], I relax."
    },
    {
      "speaker": "B",
      "text": "I have a [plan] for Saturday."
    },
    {
      "speaker": "A",
      "text": "I [visit] my grandma."
    }
  ],
  "blanks": [
    "weekend",
    "plan",
    "visit"
  ]
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'On the weekend I relax' or 'In the weekend I relax'?"
    },
    {
      "speaker": "B",
      "text": "'On the weekend' is correct."
    },
    {
      "speaker": "A",
      "text": "Good! What is your plan for this weekend?"
    },
    {
      "speaker": "B",
      "text": "I have a plan to visit my grandma."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own weekend plan."
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "On the weekend, I relax. I have a plan for Saturday. I visit my grandma on Sundays.",
  "questions": [
    "What does the writer do on weekends?",
    "What is the plan for Saturday?",
    "Who does the writer visit on Sundays?"
  ]
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On the weekend, I ___.",
    "I have a plan for ___.",
    "I visit ___."
  ]
}$json$::jsonb,
  true
),
(
  '97e7bc17-cbc6-464e-9d14-22e9991b6986',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 4 weekend words",
    "Say 'On the weekend, I ___'",
    "Talk about a weekend plan"
  ],
  "challenge": "Tell me what you do on weekends!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Simple Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  'Making Simple Plans',
  'A1',
  'teens',
  12,
  2,
  'Use ''want to'' for simple plans. [Bridge, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
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
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎬",
  "questions": [
    "What do you want to do this weekend?",
    "Do you want to meet friends?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Want to",
      "bg": "#FAECE7"
    },
    {
      "word": "Meet",
      "bg": "#E1F5EE"
    },
    {
      "word": "Watch",
      "bg": "#EEEDFE"
    },
    {
      "word": "Together",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you want to do this weekend?",
    "Do you want to meet friends?"
  ],
  "student": [
    "I want to watch a movie.",
    "Yes, I want to meet friends."
  ],
  "note": "Use the word bank: want to, meet, watch, together.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [want to] watch a movie."
    },
    {
      "speaker": "B",
      "text": "I want to [meet] my friends."
    },
    {
      "speaker": "A",
      "text": "We can go [together]."
    }
  ],
  "blanks": [
    "want to",
    "meet",
    "together"
  ]
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I want to watch a movie this weekend."
    },
    {
      "speaker": "B",
      "text": "I want to meet my friends. We can go together."
    },
    {
      "speaker": "A",
      "text": "Sounds like a nice plan!"
    },
    {
      "speaker": "B",
      "text": "Now make your own weekend plan using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to make a plan, then make your own."
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I want to watch a movie this weekend. I want to meet my friends too. We can go to the park together.",
  "questions": [
    "What does the writer want to watch?",
    "Who does the writer want to meet?",
    "Where can they go together?"
  ]
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want to ___ this weekend.",
    "I want to meet ___.",
    "We can ___ together."
  ]
}$json$::jsonb,
  true
),
(
  'd5aff168-7248-468a-85cc-4c2fff3d4263',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'want to' for a plan",
    "Say a weekend activity",
    "Say who I want to meet"
  ],
  "challenge": "Tell me what you want to do this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Invitations and Responses
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '076010c9-55a1-462b-844c-b97e4203f96e',
  'Invitations and Responses',
  'A1',
  'teens',
  12,
  3,
  'Invite and respond using ''want to''. [Bridge, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
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
  '076010c9-55a1-462b-844c-b97e4203f96e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "Do people invite you to things?",
    "Are you busy this weekend?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Would you like to",
      "bg": "#FAECE7"
    },
    {
      "word": "Sure",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sorry",
      "bg": "#EEEDFE"
    },
    {
      "word": "Busy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you like to come?",
    "Are you free or busy?"
  ],
  "student": [
    "Sure, I'd like to come!",
    "Sorry, I'm busy."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Would you like to] come to the park?"
    },
    {
      "speaker": "B",
      "text": "[Sure], I'd like to!"
    },
    {
      "speaker": "A",
      "text": "[Sorry], I'm [busy]."
    }
  ],
  "blanks": [
    "would you like to",
    "sure",
    "busy"
  ]
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you like to come to the park on Saturday?"
    },
    {
      "speaker": "B",
      "text": "Sure, I'd like to! Are you free on Sunday too?"
    },
    {
      "speaker": "A",
      "text": "Sorry, I'm busy on Sunday."
    },
    {
      "speaker": "B",
      "text": "Fill in your own invitation now!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Would you like to come to the park on Saturday? Sure, I'd like to! Sorry, I'm busy on Sunday, I want to visit my grandma.",
  "questions": [
    "What is the invitation for?",
    "Does the person say yes or no?",
    "Why is the person busy on Sunday?"
  ]
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Would you like to ___?",
    "Sure, I'd like to!",
    "Sorry, I'm busy because ___."
  ]
}$json$::jsonb,
  true
),
(
  '076010c9-55a1-462b-844c-b97e4203f96e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Invite someone with 'Would you like to?'",
    "Say 'sure' to accept",
    "Say 'sorry, I'm busy' to say no"
  ],
  "challenge": "Invite me to do something this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About the Weekend
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  'Talking About the Weekend',
  'A1',
  'teens',
  12,
  4,
  'Combine plans, invitations, and reasons into a full talk. [Bridge, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
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
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "Are you excited about this weekend?",
    "What do you hope to do?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Exciting",
      "bg": "#FAECE7"
    },
    {
      "word": "Can't wait",
      "bg": "#E1F5EE"
    },
    {
      "word": "Plan to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hope",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you excited about this weekend?",
    "What do you hope to do?"
  ],
  "student": [
    "Yes, I'm excited!",
    "I hope to see my friends."
  ],
  "note": "Put it all together: plan + invitation + reason + feeling.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This weekend is [exciting]!"
    },
    {
      "speaker": "B",
      "text": "I [can't wait]!"
    },
    {
      "speaker": "A",
      "text": "I [plan to] meet my friends."
    }
  ],
  "blanks": [
    "exciting",
    "can't wait",
    "plan to"
  ]
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me your weekend plan, in your own words."
    },
    {
      "speaker": "B",
      "text": "This weekend, I plan to ___. I'm excited because ___."
    },
    {
      "speaker": "A",
      "text": "I'll say it back: this weekend you plan to ___, and you can't wait."
    },
    {
      "speaker": "B",
      "text": "Yes, exactly!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your sentence back to check it."
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I want to meet my friends and watch a movie together. It's exciting! I plan to visit my grandma too. I can't wait to see her.",
  "questions": [
    "What does the writer want to do with friends?",
    "Who does the writer plan to visit?",
    "How does the writer feel about the weekend?"
  ]
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want to ___ this weekend.",
    "I plan to ___.",
    "I can't wait to ___."
  ]
}$json$::jsonb,
  true
),
(
  '7d2b4a43-4b04-482e-afc7-0ec6c3993889',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say a weekend plan",
    "Say who I will see",
    "Say how I feel about the plan"
  ],
  "challenge": "Tell me all about your weekend plan!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  'Unit Review',
  'A1',
  'teens',
  12,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
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
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What do you want to do this weekend?",
    "Are you excited?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Weekend",
      "bg": "#FAECE7"
    },
    {
      "word": "Want to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Would you like to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Exciting",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you want to do this weekend?",
    "Are you excited?"
  ],
  "student": [
    "I want to meet my friends.",
    "Yes, I'm excited!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This [weekend], I [want to] relax."
    },
    {
      "speaker": "B",
      "text": "[Would you like to] come with me?"
    },
    {
      "speaker": "A",
      "text": "Sure, that's [exciting]!"
    }
  ],
  "blanks": [
    "want to",
    "would you like to",
    "exciting"
  ]
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your weekend plan."
    },
    {
      "speaker": "B",
      "text": "I want to meet my friends and watch a movie. Would you like to come?"
    },
    {
      "speaker": "A",
      "text": "Sure, that sounds exciting! I can't wait."
    },
    {
      "speaker": "B",
      "text": "Great, see you this weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I want to meet my friends and watch a movie. Would you like to come? It's exciting, I can't wait!",
  "questions": [
    "What does the writer want to do?",
    "What does the writer ask?",
    "How does the writer feel?"
  ]
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This weekend, I want to ___.",
    "Would you like to ___?",
    "I can't wait to ___."
  ]
}$json$::jsonb,
  true
),
(
  '3f86ff99-0ccb-4600-8737-7409d0bc03ca',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about a weekend plan",
    "Invite someone",
    "Say how I feel about the plan"
  ],
  "challenge": "Tell me all about your weekend plans!"
}$json$::jsonb,
  true
);
