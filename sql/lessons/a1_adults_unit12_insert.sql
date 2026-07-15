-- A1 Adults Unit 12: Appointments and Future Plans (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Plans and Dates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
  'Plans and Dates',
  'A1',
  'adults',
  12,
  1,
  'Talk about days and simple plans. [Bridge, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am free on Monday."
    },
    {
      "speaker": "B",
      "text": "I have an appointment on Tuesday."
    },
    {
      "speaker": "A",
      "text": "I am free on Wednesday too."
    },
    {
      "speaker": "B",
      "text": "Good, let's meet then!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  '7fca4c7f-55a9-4e52-bafa-9fe99d6f0a1c',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
  'Making Simple Plans',
  'A1',
  'adults',
  12,
  2,
  'Use ''I''d like to'' for simple plans. [Bridge, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
      "text": "Perfect, see you then!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'c2c4411c-d2bd-471f-91c6-a40002fbbfe7',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
  'Invitations and Responses',
  'A1',
  'adults',
  12,
  3,
  'Invite and respond, accepting or declining. [Bridge, Lesson 3: freer practice, choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
      "text": "I'm sorry, I can't. Maybe another time?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  'aae116d2-d40c-4251-b737-041dfa47e0a5',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
  'Appointments',
  'A1',
  'adults',
  12,
  4,
  'Combine plans, invitations, and appointments into a talk. [Bridge, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to book an appointment for next week."
    },
    {
      "speaker": "B",
      "text": "Is Tuesday at 10am convenient? Can you confirm?"
    },
    {
      "speaker": "A",
      "text": "Yes, I confirm. I look forward to it."
    },
    {
      "speaker": "B",
      "text": "See you then!"
    }
  ],
  "note": "Mini role-play: book an appointment over the phone."
}$json$::jsonb,
  true
),
(
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '10691014-ea44-4ddb-9fb1-4edef0da3e25',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
  'Unit Review',
  'A1',
  'adults',
  12,
  5,
  'Review plans, invitations, and appointments. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
  '1ff262d1-a4d8-46eb-8194-b24b8d55b4dc',
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
