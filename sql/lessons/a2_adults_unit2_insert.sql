-- A2 Adults Unit 2: Work and Study Life (lessons 1-5)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Work or Study Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  'My Work or Study Day',
  'A2',
  'adults',
  2,
  1,
  'Describe a typical work or study day using simple present.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💼",
  "questions": [
    "What does a typical work day look like for you?",
    "Do you have a long commute?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Commute",
      "bg": "#FAECE7"
    },
    {
      "word": "Meeting",
      "bg": "#E1F5EE"
    },
    {
      "word": "Deadline",
      "bg": "#EEEDFE"
    },
    {
      "word": "Break",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you start work?",
    "Do you have meetings often?"
  ],
  "student": [
    "I start work at nine.",
    "I have a meeting every morning."
  ],
  "note": "Think about your real work or study day!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [commute] takes thirty minutes."
    },
    {
      "speaker": "B",
      "text": "I have a [meeting] every morning."
    },
    {
      "speaker": "A",
      "text": "I take a short [break] at noon."
    }
  ],
  "blanks": [
    "commute",
    "meeting",
    "break"
  ]
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What does your work day usually look like?"
    },
    {
      "speaker": "B",
      "text": "My commute takes about thirty minutes. Then I have a meeting every morning."
    },
    {
      "speaker": "A",
      "text": "I take a short break at noon and finish around six."
    },
    {
      "speaker": "B",
      "text": "That sounds like a full day."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My work day starts with a thirty-minute commute. At nine, I have a team meeting. I work on projects until noon, then take a short break for lunch. I usually finish by six, unless there's a deadline.",
  "questions": [
    "How long is the writer's commute?",
    "What happens at nine?",
    "When does the writer usually finish?"
  ]
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My day starts with ___.",
    "I usually ___.",
    "I finish work/study at ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff805681-8d8b-4da5-baed-2157d2e2da55',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a typical work or study day",
    "Use simple present for routines",
    "Talk about my schedule"
  ],
  "challenge": "Tell me about your typical work or study day!"
}$json$::jsonb,
  true
);

-- Lesson 2: Work Messages
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  'Work Messages',
  'A2',
  'adults',
  2,
  2,
  'Write and understand short work-related messages.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "Do you send work messages often?",
    "What does ASAP mean?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Attached",
      "bg": "#FAECE7"
    },
    {
      "word": "Follow up",
      "bg": "#E1F5EE"
    },
    {
      "word": "ASAP",
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
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you send that document?",
    "Can you confirm the meeting time?"
  ],
  "student": [
    "Yes, I'll attach it now.",
    "I confirm, 3pm works for me."
  ],
  "note": "Think about a real work message you'd write!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I've [attached] the report."
    },
    {
      "speaker": "B",
      "text": "I'll [follow up] tomorrow."
    },
    {
      "speaker": "A",
      "text": "Please reply [ASAP]."
    }
  ],
  "blanks": [
    "attached",
    "follow up",
    "ASAP"
  ]
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Can you send me the report?"
    },
    {
      "speaker": "B",
      "text": "Yes, I've attached it to this message."
    },
    {
      "speaker": "A",
      "text": "Great, please confirm you received it, ASAP if possible."
    },
    {
      "speaker": "B",
      "text": "Confirmed, I'll follow up tomorrow with feedback."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi team, I've attached the meeting notes from today. Please review them and reply ASAP if you have questions. I'll follow up tomorrow to confirm next steps. Thanks, Maria.",
  "questions": [
    "What did Maria attach?",
    "What should the team do?",
    "When will Maria follow up?"
  ]
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I've attached ___.",
    "Please ___ ASAP.",
    "I'll follow up ___."
  ]
}$json$::jsonb,
  true
),
(
  '936ab43e-992d-4cf1-8a67-6fd81724024a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short work message",
    "Use 'attached', 'ASAP', 'confirm'",
    "Understand a work message"
  ],
  "challenge": "Write a short work message to a colleague!"
}$json$::jsonb,
  true
);

-- Lesson 3: Then and Now at Work
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  'Then and Now at Work',
  'A2',
  'adults',
  2,
  3,
  'Compare past and present work situations using used to and now.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔄",
  "questions": [
    "Did you used to work differently before?",
    "Has your job changed recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Used to",
      "bg": "#FAECE7"
    },
    {
      "word": "Now",
      "bg": "#E1F5EE"
    },
    {
      "word": "Changed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Remote",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Did you use to work in an office?",
    "How has your job changed?"
  ],
  "student": [
    "I used to work in an office.",
    "Now I work remotely."
  ],
  "note": "Think about how your work has changed!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [used to] work in an office."
    },
    {
      "speaker": "B",
      "text": "[Now] I work from home."
    },
    {
      "speaker": "A",
      "text": "My job has really [changed]."
    }
  ],
  "blanks": [
    "used to",
    "now",
    "changed"
  ]
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Did you use to work differently before?"
    },
    {
      "speaker": "B",
      "text": "Yes, I used to work in an office every day. Now I work remotely most days."
    },
    {
      "speaker": "A",
      "text": "My job has changed a lot too, more online meetings now."
    },
    {
      "speaker": "B",
      "text": "Things really are different now."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I used to work in a busy office every day. Now, I work remotely most of the week. My job has changed a lot: more online meetings, fewer commutes. I like the flexibility now, but I miss seeing my colleagues.",
  "questions": [
    "Where did the writer used to work?",
    "Where does the writer work now?",
    "What does the writer miss?"
  ]
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I used to ___.",
    "Now I ___.",
    "My work has changed because ___."
  ]
}$json$::jsonb,
  true
),
(
  'a877bdeb-a9e1-42ef-9ed3-36393ae6909d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'used to' for past work habits",
    "Compare past and present work",
    "Talk about changes at work"
  ],
  "challenge": "Tell me how your work or study life has changed!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Work or Study Email
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '23424f4f-7216-4453-8d11-de676976f74f',
  'A Short Work or Study Email',
  'A2',
  'adults',
  2,
  4,
  'Write a short functional email for work or study.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📧",
  "questions": [
    "Have you written a formal email recently?",
    "What was it about?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dear",
      "bg": "#FAECE7"
    },
    {
      "word": "Regarding",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind regards",
      "bg": "#EEEDFE"
    },
    {
      "word": "Request",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you start a formal email?",
    "How do you end one?"
  ],
  "student": [
    "I start with 'Dear' and the name.",
    "I end with 'Kind regards'."
  ],
  "note": "Think about the parts of a formal email!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Dear] Mr. Lopez, I am writing regarding..."
    },
    {
      "speaker": "B",
      "text": "I have a [request] about the schedule."
    },
    {
      "speaker": "A",
      "text": "[Kind regards], Elena."
    }
  ],
  "blanks": [
    "dear",
    "request",
    "kind regards"
  ]
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you usually start a work email?"
    },
    {
      "speaker": "B",
      "text": "I start with 'Dear' and the person's name, then explain the reason regarding my message."
    },
    {
      "speaker": "A",
      "text": "I usually end with 'Kind regards' and my name."
    },
    {
      "speaker": "B",
      "text": "That's the standard format."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Dear Mr. Lopez, I am writing regarding next week's schedule. I have a small request: could we move our meeting to Thursday? Please let me know if that works. Kind regards, Elena.",
  "questions": [
    "Who is the email to?",
    "What is the email about?",
    "What does Elena ask for?"
  ]
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Dear ___, I am writing regarding ___.",
    "I have a request: ___.",
    "Kind regards, ___."
  ]
}$json$::jsonb,
  true
),
(
  '23424f4f-7216-4453-8d11-de676976f74f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short formal email",
    "Use 'Dear' and 'Kind regards'",
    "Make a polite request"
  ],
  "challenge": "Write a short work or study email!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  'Unit Review',
  'A2',
  'adults',
  2,
  5,
  'Review work routines, messages, past/present, and a formal email.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗂️",
  "questions": [
    "What does your work or study day look like?",
    "Has it changed recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Commute",
      "bg": "#FAECE7"
    },
    {
      "word": "Message",
      "bg": "#E1F5EE"
    },
    {
      "word": "Used to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Email",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What does your work day look like?",
    "How has it changed?"
  ],
  "student": [
    "I start work at nine.",
    "I used to work in an office, now I work from home."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [commute] is thirty minutes."
    },
    {
      "speaker": "B",
      "text": "I sent a work [message] today."
    },
    {
      "speaker": "A",
      "text": "I [used to] work differently."
    }
  ],
  "blanks": [
    "commute",
    "message",
    "used to"
  ]
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your work day and how it's changed."
    },
    {
      "speaker": "B",
      "text": "My commute is short now. I used to work in an office, but now I work remotely."
    },
    {
      "speaker": "A",
      "text": "I sent a formal email today requesting a schedule change."
    },
    {
      "speaker": "B",
      "text": "Sounds like a productive day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My work day starts with a short commute. I used to work in a busy office, but now I work remotely most days. Today, I sent a work message and a formal email requesting a schedule change. Overall, my work life has changed a lot, but I like the flexibility.",
  "questions": [
    "How does the writer's day start?",
    "How has the writer's work changed?",
    "What did the writer send today?"
  ]
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My work/study day starts with ___.",
    "It has changed because ___.",
    "Today, I sent ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb4e56a1-9e20-47e9-bbe3-6a8a75aabcb5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a work or study day",
    "Write and understand work messages",
    "Compare past and present work",
    "Write a formal email"
  ],
  "challenge": "Tell me all about your work or study life!"
}$json$::jsonb,
  true
);
