-- A2 Adults Unit 6: Health and Appointments (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: How Do You Feel?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  'How Do You Feel?',
  'A2',
  'adults',
  6,
  1,
  'Describe simple health problems and feelings.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
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
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤒",
  "questions": [
    "How do you feel today?",
    "Do you often get headaches?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Headache",
      "bg": "#FAECE7"
    },
    {
      "word": "Tired",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fever",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sore throat",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel today?",
    "Do you have a headache?"
  ],
  "student": [
    "I feel a bit tired.",
    "Yes, I have a small headache."
  ],
  "note": "Think about how you feel today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [headache] today."
    },
    {
      "speaker": "B",
      "text": "I feel [tired] too."
    },
    {
      "speaker": "A",
      "text": "I also have a [sore throat]."
    }
  ],
  "blanks": [
    "headache",
    "tired",
    "sore throat"
  ]
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel today?"
    },
    {
      "speaker": "B",
      "text": "Not great, I have a headache and I feel tired."
    },
    {
      "speaker": "A",
      "text": "I have a small fever and a sore throat."
    },
    {
      "speaker": "B",
      "text": "You should rest and drink water."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two colleagues talk about how they feel. Sam says he has a headache and feels tired after a long week. Ana says she has a small fever and a sore throat. Both decide to rest and drink plenty of water.",
  "questions": [
    "How does Sam feel?",
    "What symptoms does Ana have?",
    "What do they decide to do?"
  ]
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today, I feel ___.",
    "I have a ___.",
    "When I feel sick, I usually ___."
  ]
}$json$::jsonb,
  true
),
(
  'd35ac252-203e-4552-adfe-7082c5a5c24c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe how I feel",
    "Use symptom vocabulary",
    "Talk about health problems"
  ],
  "challenge": "Tell me how you feel today!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making an Appointment
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a05db6ee-7927-485b-821b-80a84860b740',
  'Making an Appointment',
  'A2',
  'adults',
  6,
  2,
  'Understand and create a short appointment message or call script.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a05db6ee-7927-485b-821b-80a84860b740',
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
  'a05db6ee-7927-485b-821b-80a84860b740',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📞",
  "questions": [
    "Have you made a doctor's appointment recently?",
    "Have you had to reschedule one?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Appointment",
      "bg": "#FAECE7"
    },
    {
      "word": "Available",
      "bg": "#E1F5EE"
    },
    {
      "word": "Reschedule",
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
  'a05db6ee-7927-485b-821b-80a84860b740',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like to make an appointment.",
    "Are you available on Tuesday?"
  ],
  "student": [
    "Yes, I have an opening at 10am.",
    "I need to reschedule, please."
  ],
  "note": "Practice booking an appointment!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to make an [appointment]."
    },
    {
      "speaker": "B",
      "text": "Are you [available] on Tuesday?"
    },
    {
      "speaker": "A",
      "text": "Yes, please [confirm] 10am."
    }
  ],
  "blanks": [
    "appointment",
    "available",
    "confirm"
  ]
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello, I'd like to make an appointment with the doctor."
    },
    {
      "speaker": "B",
      "text": "Of course, are you available on Tuesday at 10am?"
    },
    {
      "speaker": "A",
      "text": "Yes, that works. Could you confirm the time by message?"
    },
    {
      "speaker": "B",
      "text": "Sure, I'll send a confirmation now."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message: Hello, I'd like to make an appointment with Dr. Reyes this week. I am available on Tuesday or Wednesday morning. Could you confirm a time? If needed, I can reschedule. Thank you.",
  "questions": [
    "Who does the writer want to see?",
    "When is the writer available?",
    "What does the writer offer to do if needed?"
  ]
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to make an appointment with ___.",
    "I am available on ___.",
    "Could you confirm ___?"
  ]
}$json$::jsonb,
  true
),
(
  'a05db6ee-7927-485b-821b-80a84860b740',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Make an appointment request",
    "Ask about availability",
    "Confirm or reschedule a time"
  ],
  "challenge": "Book a pretend appointment with me!"
}$json$::jsonb,
  true
);

-- Lesson 3: Yesterday I Was Sick
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  'Yesterday I Was Sick',
  'A2',
  'adults',
  6,
  3,
  'Describe a simple recent health event using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
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
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛌",
  "questions": [
    "Were you sick recently?",
    "Did you stay home?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Felt",
      "bg": "#FAECE7"
    },
    {
      "word": "Stayed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Rested",
      "bg": "#EEEDFE"
    },
    {
      "word": "Called",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Were you sick recently?",
    "What did you do?"
  ],
  "student": [
    "Yes, I felt sick yesterday.",
    "I stayed home and rested."
  ],
  "note": "Think about the last time you were sick!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Yesterday, I [felt] sick."
    },
    {
      "speaker": "B",
      "text": "I [stayed] home all day."
    },
    {
      "speaker": "A",
      "text": "I [rested] and drank tea."
    }
  ],
  "blanks": [
    "felt",
    "stayed",
    "rested"
  ]
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Were you sick recently?"
    },
    {
      "speaker": "B",
      "text": "Yes, yesterday I felt sick and stayed home."
    },
    {
      "speaker": "A",
      "text": "I rested and called my doctor to ask for advice."
    },
    {
      "speaker": "B",
      "text": "That was a good idea."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, I felt sick with a headache and fever. First, I stayed home from work. Then, I rested and drank plenty of water. After that, I called my doctor to ask for advice. Today, I feel much better.",
  "questions": [
    "How did the writer feel yesterday?",
    "What did the writer do first?",
    "How does the writer feel today?"
  ]
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I felt ___.",
    "I stayed home and ___.",
    "Today, I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '9b8c1203-221c-44a2-9fc2-5372740afddf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: felt, stayed, rested, called",
    "Tell a short health story",
    "Sequence a recent health event"
  ],
  "challenge": "Tell me about the last time you were sick!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Health Update Email
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  'A Health Update Email',
  'A2',
  'adults',
  6,
  4,
  'Write a short email or message about health and availability.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
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
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📧",
  "questions": [
    "Have you had to tell work you were sick?",
    "How do you write that message?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sick day",
      "bg": "#FAECE7"
    },
    {
      "word": "Unable to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Apologize",
      "bg": "#EEEDFE"
    },
    {
      "word": "Available again",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you tell your boss you're sick?",
    "When will you be available again?"
  ],
  "student": [
    "I send a short message explaining.",
    "I'll be available again on Monday."
  ],
  "note": "Think about how to write a sick-day message!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [unable to] come in today."
    },
    {
      "speaker": "B",
      "text": "I [apologize] for the short notice."
    },
    {
      "speaker": "A",
      "text": "I will be [available again] tomorrow."
    }
  ],
  "blanks": [
    "unable to",
    "apologize",
    "available again"
  ]
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write if you were sick and couldn't come to work?"
    },
    {
      "speaker": "B",
      "text": "I'd write: I am unable to come in today because I feel unwell."
    },
    {
      "speaker": "A",
      "text": "I apologize for the short notice, and I'll be available again tomorrow."
    },
    {
      "speaker": "B",
      "text": "That's clear and polite."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi team, I am unable to come in today as I am feeling unwell. I apologize for the short notice. I will rest today and should be available again tomorrow. Please let me know if anything urgent comes up. Thank you, Elena.",
  "questions": [
    "Why can't Elena come in?",
    "What does Elena apologize for?",
    "When will Elena be available again?"
  ]
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am unable to ___ because ___.",
    "I apologize for ___.",
    "I will be available again ___."
  ]
}$json$::jsonb,
  true
),
(
  '8f6cac2f-baec-4f9a-90b0-a77f9503327c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short health update message",
    "Use 'unable to' and 'apologize'",
    "Say when I'll be available again"
  ],
  "challenge": "Write a short sick-day message!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  'Unit Review',
  'A2',
  'adults',
  6,
  5,
  'Review symptoms, appointments, a health story, and a health email.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
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
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🩺",
  "questions": [
    "How are you feeling today?",
    "Have you made an appointment recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Headache",
      "bg": "#FAECE7"
    },
    {
      "word": "Appointment",
      "bg": "#E1F5EE"
    },
    {
      "word": "Felt",
      "bg": "#EEEDFE"
    },
    {
      "word": "Apologize",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Have you made an appointment recently?"
  ],
  "student": [
    "I feel fine today.",
    "Yes, I made one last week."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I had a [headache] yesterday."
    },
    {
      "speaker": "B",
      "text": "I made an [appointment] with the doctor."
    },
    {
      "speaker": "A",
      "text": "I [felt] better after resting."
    }
  ],
  "blanks": [
    "headache",
    "appointment",
    "felt"
  ]
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your health this week."
    },
    {
      "speaker": "B",
      "text": "I had a headache yesterday, so I made an appointment with the doctor."
    },
    {
      "speaker": "A",
      "text": "I felt sick too and had to send a message apologizing for missing work."
    },
    {
      "speaker": "B",
      "text": "I hope we both feel better soon!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This week, I had a headache and felt tired, so I made an appointment with the doctor. Yesterday, I felt too sick to go to work, so I sent a message apologizing and explaining I would be available again today. I'm feeling much better now.",
  "questions": [
    "What symptoms did the writer have?",
    "What did the writer do?",
    "How does the writer feel now?"
  ]
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This week, I felt ___.",
    "I made an appointment because ___.",
    "I sent a message saying ___."
  ]
}$json$::jsonb,
  true
),
(
  'aaa684ed-062c-4189-b85f-9e8a54b2ffbb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe symptoms",
    "Make an appointment",
    "Tell a past health story",
    "Write a health update"
  ],
  "challenge": "Tell me all about your health this week!"
}$json$::jsonb,
  true
);
