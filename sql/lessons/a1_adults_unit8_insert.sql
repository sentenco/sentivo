-- A1 Adults Unit 8: Technology and Communication (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Devices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '96501252-2318-457a-9538-dbfb46b71189',
  'Devices',
  'A1',
  'adults',
  8,
  1,
  'Name common devices. [Combination, Lesson 1: notice/receptive, read-and-identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '96501252-2318-457a-9538-dbfb46b71189',
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
  '96501252-2318-457a-9538-dbfb46b71189',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "Do you have a phone?",
    "Do you use a laptop for work?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
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
      "word": "Computer",
      "bg": "#E1F5EE"
    },
    {
      "word": "Laptop",
      "bg": "#EEEDFE"
    },
    {
      "word": "Tablet",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a phone?",
    "Do you use a laptop?"
  ],
  "student": [
    "Yes, I have a phone.",
    "Yes, I use a laptop for work."
  ],
  "note": "Read the model text, then find the device words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [phone]."
    },
    {
      "speaker": "B",
      "text": "I use a [computer] at work."
    },
    {
      "speaker": "A",
      "text": "I have a [laptop] too."
    }
  ],
  "blanks": [
    "phone",
    "computer",
    "laptop"
  ]
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a phone."
    },
    {
      "speaker": "B",
      "text": "I use a computer at work."
    },
    {
      "speaker": "A",
      "text": "I have a laptop too."
    },
    {
      "speaker": "B",
      "text": "I have a tablet!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a phone. I use a computer at work. I have a laptop at home too.",
  "questions": [
    "What does the writer have?",
    "What does the writer use at work?",
    "What is at home?"
  ]
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "I use a ___ at work.",
    "I have a ___ at home."
  ]
}$json$::jsonb,
  true
),
(
  '96501252-2318-457a-9538-dbfb46b71189',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 devices",
    "Say 'I have a ___'",
    "Talk about my devices"
  ],
  "challenge": "Tell me about the devices you use!"
}$json$::jsonb,
  true
);

-- Lesson 2: Communication Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  'Communication Habits',
  'A1',
  'adults',
  8,
  2,
  'Use frequency words with communication habits. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
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
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📞",
  "questions": [
    "Do you call your family every day?",
    "Do you usually text or call?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Every day",
      "bg": "#FAECE7"
    },
    {
      "word": "Usually",
      "bg": "#E1F5EE"
    },
    {
      "word": "Call",
      "bg": "#EEEDFE"
    },
    {
      "word": "Text",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you call your family every day?",
    "Do you usually text?"
  ],
  "student": [
    "Yes, I call every day.",
    "I usually text."
  ],
  "note": "Use the word bank: every day, usually, call, text.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [call] my mother [every day]."
    },
    {
      "speaker": "B",
      "text": "I [usually] text my colleagues."
    },
    {
      "speaker": "A",
      "text": "I call my husband every day too."
    }
  ],
  "blanks": [
    "call",
    "every day",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you call your family every day?"
    },
    {
      "speaker": "B",
      "text": "Yes, I call my mother every day. I usually text my friends."
    },
    {
      "speaker": "A",
      "text": "I usually text my colleagues too."
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
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I call my mother every day. I usually text my friends. I text my colleagues at work too.",
  "questions": [
    "Who does the writer call every day?",
    "Who does the writer usually text?",
    "What about colleagues?"
  ]
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I call ___ every day.",
    "I usually text ___.",
    "I text ___ at work."
  ]
}$json$::jsonb,
  true
),
(
  '0d0b4941-96ef-4923-b0bf-6d9f457665fd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'every day' and 'usually'",
    "Say 'call' and 'text'",
    "Talk about my communication habits"
  ],
  "challenge": "Tell me your communication habits!"
}$json$::jsonb,
  true
);

-- Lesson 3: Messages and Calls
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  'Messages and Calls',
  'A1',
  'adults',
  8,
  3,
  'Give a simple reason for communication choices. [Combination, Lesson 3: freer practice, choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
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
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "Do you prefer calls or messages?",
    "Why do you prefer that?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Because",
      "bg": "#FAECE7"
    },
    {
      "word": "Easy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quick",
      "bg": "#EEEDFE"
    },
    {
      "word": "Prefer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you prefer calls or messages?",
    "Why?"
  ],
  "student": [
    "I prefer messages because they are quick.",
    "I prefer calls because they are easy."
  ],
  "note": "Two answers are given. Choose the more natural one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [prefer] messages [because] they are [quick]."
    },
    {
      "speaker": "B",
      "text": "I prefer calls because they are [easy]."
    },
    {
      "speaker": "A",
      "text": "Messages are faster for me."
    }
  ],
  "blanks": [
    "prefer",
    "because",
    "easy"
  ]
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer calls or messages?"
    },
    {
      "speaker": "B",
      "text": "I prefer messages because they are quick. Do you prefer calls?"
    },
    {
      "speaker": "A",
      "text": "Yes, I prefer calls because they are easy for me."
    },
    {
      "speaker": "B",
      "text": "That makes sense."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I prefer messages because they are quick. My husband prefers calls because they are easy for him.",
  "questions": [
    "What does the writer prefer?",
    "Why does the writer prefer messages?",
    "What does the husband prefer?"
  ]
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___ because ___.",
    "My ___ prefers ___.",
    "It is easy/quick for me."
  ]
}$json$::jsonb,
  true
),
(
  'ea5c4745-8ff3-487a-bfca-aee206e1817b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give a preference with a reason",
    "Use 'because' with one clause",
    "Talk about communication preferences"
  ],
  "challenge": "Tell me if you prefer calls or messages, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: Tech Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  'Tech Questions',
  'A1',
  'adults',
  8,
  4,
  'Combine devices, habits, and reasons into a short talk. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
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
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏱️",
  "questions": [
    "How much screen time do you have?",
    "Do you take a break from your phone?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Screen time",
      "bg": "#FAECE7"
    },
    {
      "word": "Careful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Break",
      "bg": "#EEEDFE"
    },
    {
      "word": "Balance",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much screen time do you have?",
    "Do you take a break?"
  ],
  "student": [
    "I have a lot of screen time.",
    "Yes, I take a break at night."
  ],
  "note": "Put it all together: device + habit + reason + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use my phone for [screen time] every day."
    },
    {
      "speaker": "B",
      "text": "I try to be [careful] with it."
    },
    {
      "speaker": "A",
      "text": "I take a [break] at night."
    }
  ],
  "blanks": [
    "screen time",
    "careful",
    "break"
  ]
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I check my phone every day because I text my colleagues."
    },
    {
      "speaker": "A",
      "text": "I try to have a balance, so I take a break at night."
    },
    {
      "speaker": "B",
      "text": "That's a good habit!"
    }
  ],
  "note": "Mini talk: tell me all about your phone habits in a few sentences."
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I check my phone every day because I text my colleagues. I try to have a balance, so I take a break at night.",
  "questions": [
    "Why does the writer check the phone?",
    "What does the writer try to have?",
    "When does the writer take a break?"
  ]
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone because ___.",
    "I try to have a balance by ___.",
    "I take a break at ___."
  ]
}$json$::jsonb,
  true
),
(
  'fa6a7797-b0d9-40ec-9d9e-cf416334524e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say why I use my phone",
    "Talk about screen time balance",
    "Say how I take a break"
  ],
  "challenge": "Tell me all about your phone habits and how you balance them!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  'Unit Review',
  'A1',
  'adults',
  8,
  5,
  'Review devices, habits, and preferences. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
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
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "How often do you use your phone?",
    "Do you prefer calls or messages?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
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
      "word": "Every day",
      "bg": "#E1F5EE"
    },
    {
      "word": "Prefer",
      "bg": "#EEEDFE"
    },
    {
      "word": "Balance",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How often do you use your phone?",
    "Do you prefer calls or messages?"
  ],
  "student": [
    "I use it every day.",
    "I prefer messages."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use my [phone] [every day]."
    },
    {
      "speaker": "B",
      "text": "I [prefer] messages."
    },
    {
      "speaker": "A",
      "text": "I try to have a [balance]."
    }
  ],
  "blanks": [
    "phone",
    "every day",
    "prefer"
  ]
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I use my phone every day. I prefer messages because they are quick."
    },
    {
      "speaker": "A",
      "text": "I try to have a balance and take a break at night."
    },
    {
      "speaker": "B",
      "text": "Good balance!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use my phone every day. I prefer messages because they are quick. I try to have a balance and take a break at night.",
  "questions": [
    "How often does the writer use the phone?",
    "What does the writer prefer?",
    "How does the writer balance screen time?"
  ]
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone ___.",
    "I prefer ___ because ___.",
    "I balance it by ___."
  ]
}$json$::jsonb,
  true
),
(
  '317fd1c5-ae62-4250-82f7-475bf7269aa6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about device habits",
    "Give a preference with a reason",
    "Talk about balance"
  ],
  "challenge": "Tell me all about your tech habits!"
}$json$::jsonb,
  true
);
