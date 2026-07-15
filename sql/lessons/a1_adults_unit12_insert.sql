-- A1 Adults Unit 12: Appointments and Future Plans (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Plans and Dates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  'Plans and Dates',
  'A1',
  'adults',
  12,
  1,
  'Talk about days and simple plans. [Bridge, L1, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "Are you free on Monday?",
    "Do you have an appointment this week?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Monday",
      "bg": "#FAECE7"
    },
    {
      "word": "Tuesday",
      "bg": "#E1F5EE"
    },
    {
      "word": "Appointment",
      "bg": "#EEEDFE"
    },
    {
      "word": "Free",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you free on Monday?",
    "Do you have an appointment?"
  ],
  "student": [
    "Yes, I am free on Monday.",
    "Yes, I have an appointment."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am free on [Monday]."
    },
    {
      "speaker": "B",
      "text": "I have an [appointment] on [Tuesday]."
    },
    {
      "speaker": "A",
      "text": "I am [free] on Wednesday."
    }
  ],
  "blanks": [
    "monday",
    "appointment",
    "free"
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I am free on Monday' or 'I am free in Monday'?"
    },
    {
      "speaker": "B",
      "text": "'I am free on Monday' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. When are you free this week?"
    },
    {
      "speaker": "B",
      "text": "I am free on Wednesday."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own week."
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am free on Monday. I have an appointment on Tuesday. I am free on Wednesday too.",
  "questions": [
    "When is the writer free?",
    "When is the appointment?",
    "What other day is the writer free?"
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am free on ___.",
    "I have an appointment on ___.",
    "I am free on ___ too."
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name days of the week",
    "Say 'I am free on ___'",
    "Talk about an appointment"
  ],
  "challenge": "Tell me what day you are free this week!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Simple Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  'Making Simple Plans',
  'A1',
  'adults',
  12,
  2,
  'Use ''I''d like to'' for simple plans. [Bridge, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Would you like to meet this week?",
    "What day is convenient for you?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like to",
      "bg": "#FAECE7"
    },
    {
      "word": "Meet",
      "bg": "#E1F5EE"
    },
    {
      "word": "This week",
      "bg": "#EEEDFE"
    },
    {
      "word": "Convenient",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What day is convenient for you?",
    "Would you like to meet this week?"
  ],
  "student": [
    "Monday is convenient for me.",
    "Yes, I'd like to meet this week."
  ],
  "note": "Use the word bank: I'd like to, meet, this week, convenient.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like to] [meet] on Monday."
    },
    {
      "speaker": "B",
      "text": "That is [convenient] for me too."
    },
    {
      "speaker": "A",
      "text": "Let's meet [this week]."
    }
  ],
  "blanks": [
    "i'd like to",
    "meet",
    "convenient"
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to meet this week. What day is convenient for you?"
    },
    {
      "speaker": "B",
      "text": "Monday is convenient for me. What time?"
    },
    {
      "speaker": "A",
      "text": "10am, if that's okay."
    },
    {
      "speaker": "B",
      "text": "Now suggest your own meeting time, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to arrange a meeting, then arrange your own."
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to meet this week. Monday is convenient for me. Let's meet at 10am.",
  "questions": [
    "What does the writer want to do?",
    "What day is convenient?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to meet on ___.",
    "That is convenient for me.",
    "Let's meet at ___."
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'I'd like to' for a plan",
    "Say a convenient day",
    "Suggest a meeting time"
  ],
  "challenge": "Ask me to meet this week, and suggest a day and time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Invitations and Responses
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  'Invitations and Responses',
  'A1',
  'adults',
  12,
  3,
  'Invite and respond, accepting or declining. [Bridge, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "How do you invite someone politely?",
    "How do you politely say no?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
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
      "word": "I'd love to",
      "bg": "#E1F5EE"
    },
    {
      "word": "I'm sorry, I can't",
      "bg": "#EEEDFE"
    },
    {
      "word": "Another time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you like to come to dinner?",
    "Can you make it?"
  ],
  "student": [
    "I'd love to come!",
    "I'm sorry, I can't."
  ],
  "note": "Two answers are given. Choose the more polite one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Would you like to] come to dinner?"
    },
    {
      "speaker": "B",
      "text": "[I'd love to]! What time?"
    },
    {
      "speaker": "A",
      "text": "[I'm sorry, I can't] make it Friday."
    }
  ],
  "blanks": [
    "would you like to",
    "i'd love to",
    "i'm sorry, i can't"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you like to come to dinner on Friday?"
    },
    {
      "speaker": "B",
      "text": "I'd love to! What time?"
    },
    {
      "speaker": "A",
      "text": "7pm. Can you make it?"
    },
    {
      "speaker": "B",
      "text": "Fill in your own answer now!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Would you like to come to dinner on Friday? I'd love to! I'm sorry, I can't make Friday. Maybe another time?",
  "questions": [
    "What is the invitation for?",
    "Does the person accept or decline?",
    "What does the person suggest?"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Would you like to ___?",
    "I'd love to! / I'm sorry, I can't.",
    "Maybe another time?"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Invite someone politely",
    "Accept an invitation",
    "Decline politely and suggest another time"
  ],
  "challenge": "Invite me to something, and I'll accept or decline!"
}$json$::jsonb,
  true
);

-- Lesson 4: Appointments
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  'Appointments',
  'A1',
  'adults',
  12,
  4,
  'Combine plans, invitations, and appointments into a talk. [Bridge, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📞",
  "questions": [
    "Have you booked an appointment recently?",
    "Have you had to reschedule?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Book an appointment",
      "bg": "#FAECE7"
    },
    {
      "word": "Confirm",
      "bg": "#E1F5EE"
    },
    {
      "word": "Reschedule",
      "bg": "#EEEDFE"
    },
    {
      "word": "Look forward to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like to book an appointment.",
    "Can you confirm the time?"
  ],
  "student": [
    "Yes, Tuesday at 10am works.",
    "Yes, I confirm."
  ],
  "note": "Put it all together: plan + invitation + appointment.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to [book an appointment]."
    },
    {
      "speaker": "B",
      "text": "Can you [confirm] Tuesday?"
    },
    {
      "speaker": "A",
      "text": "I [look forward to] it."
    }
  ],
  "blanks": [
    "book an appointment",
    "confirm",
    "look forward to"
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about an appointment you'd like to book, in your own words."
    },
    {
      "speaker": "B",
      "text": "I'd like to book an appointment for ___. Is ___ convenient?"
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you'd like to book an appointment for ___."
    },
    {
      "speaker": "B",
      "text": "Yes, I confirm. I look forward to it!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your sentence back to check it."
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to book an appointment for next week. Tuesday at 10am is convenient. I confirm. I look forward to it.",
  "questions": [
    "What does the writer want to book?",
    "What day and time?",
    "How does the writer feel about it?"
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to book an appointment for ___.",
    "I confirm ___.",
    "I look forward to ___."
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Book an appointment politely",
    "Confirm a day and time",
    "Say I look forward to something"
  ],
  "challenge": "Book an appointment with me over the phone!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  'Unit Review',
  'A1',
  'adults',
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
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "When are you free this week?",
    "Do you have any plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Free",
      "bg": "#FAECE7"
    },
    {
      "word": "I'd like to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Would you like to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Confirm",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When are you free?",
    "Do you have plans?"
  ],
  "student": [
    "I am free on Monday.",
    "I'd like to meet this week."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [free] on Monday."
    },
    {
      "speaker": "B",
      "text": "[I'd like to] meet this week."
    },
    {
      "speaker": "A",
      "text": "[Would you like to] come to dinner?"
    }
  ],
  "blanks": [
    "free",
    "i'd like to",
    "would you like to"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your plans this week."
    },
    {
      "speaker": "B",
      "text": "I am free on Monday. I'd like to meet for coffee."
    },
    {
      "speaker": "A",
      "text": "Would you like to come to dinner on Friday too?"
    },
    {
      "speaker": "B",
      "text": "I'd love to! I confirm."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am free on Monday. I'd like to meet for coffee. Would you like to come to dinner on Friday? I'd love to! I confirm.",
  "questions": [
    "When is the writer free?",
    "What does the writer want to do?",
    "Does the person accept the dinner invitation?"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am free on ___.",
    "I'd like to ___.",
    "Would you like to ___?"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about being free",
    "Make a simple plan",
    "Invite and respond politely"
  ],
  "challenge": "Tell me your plans for this week, and invite me to something!"
}$json$::jsonb,
  true
);
