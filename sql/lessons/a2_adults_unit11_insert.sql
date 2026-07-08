-- A2 Adults Unit 11: Future Plans and Problem Solving (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Plans for Next Week
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  'Plans for Next Week',
  'A2',
  'adults',
  11,
  1,
  'Talk about simple near-future plans using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
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
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What are you going to do next week?",
    "Do you have any appointments?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Going to",
      "bg": "#FAECE7"
    },
    {
      "word": "Appointment",
      "bg": "#E1F5EE"
    },
    {
      "word": "Meeting",
      "bg": "#EEEDFE"
    },
    {
      "word": "Schedule",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you going to do next week?",
    "Do you have any appointments?"
  ],
  "student": [
    "I'm going to visit the dentist.",
    "Yes, I have a meeting on Tuesday."
  ],
  "note": "Think about your real plans for next week!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [going to] visit the dentist."
    },
    {
      "speaker": "B",
      "text": "I have a [meeting] on Tuesday."
    },
    {
      "speaker": "A",
      "text": "My [schedule] is full this week."
    }
  ],
  "blanks": [
    "going to",
    "meeting",
    "schedule"
  ]
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you going to do next week?"
    },
    {
      "speaker": "B",
      "text": "I'm going to visit the dentist and have a meeting on Tuesday."
    },
    {
      "speaker": "A",
      "text": "My schedule is full too, but I have some free time on the weekend."
    },
    {
      "speaker": "B",
      "text": "Good, everyone needs a break."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Next week is going to be busy. On Monday, I'm going to have a work meeting. On Wednesday, I have a dentist appointment. On the weekend, I'm going to relax and visit my parents.",
  "questions": [
    "What is happening on Monday?",
    "What appointment is on Wednesday?",
    "What will the writer do on the weekend?"
  ]
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Next week, I'm going to ___.",
    "I have an appointment on ___.",
    "On the weekend, I'm going to ___."
  ]
}$json$::jsonb,
  true
),
(
  '25c00bdd-632f-454f-9614-208d8baf0d69',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'going to' for near-future plans",
    "Talk about appointments and meetings",
    "Describe next week's schedule"
  ],
  "challenge": "Tell me your plans for next week!"
}$json$::jsonb,
  true
);

-- Lesson 2: Simple Problems, Simple Solutions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  'Simple Problems, Simple Solutions',
  'A2',
  'adults',
  11,
  2,
  'Discuss everyday problems and give simple suggestions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
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
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💡",
  "questions": [
    "What everyday problems do you have?",
    "Have you lost something recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "No time",
      "bg": "#FAECE7"
    },
    {
      "word": "Lost item",
      "bg": "#E1F5EE"
    },
    {
      "word": "Late",
      "bg": "#EEEDFE"
    },
    {
      "word": "Suggestion",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the problem?",
    "What do you suggest?"
  ],
  "student": [
    "I have no time for exercise.",
    "I suggest waking up earlier."
  ],
  "note": "Think of a problem and a solution!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have [no time] for exercise."
    },
    {
      "speaker": "B",
      "text": "The bus was [late] again."
    },
    {
      "speaker": "A",
      "text": "My [suggestion] is to plan ahead."
    }
  ],
  "blanks": [
    "no time",
    "late",
    "suggestion"
  ]
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a problem: I have no time to cook during the week."
    },
    {
      "speaker": "B",
      "text": "My suggestion is to cook on Sundays and save meals for later."
    },
    {
      "speaker": "A",
      "text": "That's smart! I always find myself late in the mornings."
    },
    {
      "speaker": "B",
      "text": "Try setting your alarm earlier."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two common problems and solutions: I have no time to cook, so I now cook meals on Sundays for the whole week. I am often late for the bus, so I set my alarm ten minutes earlier now. Small changes really help.",
  "questions": [
    "What is the first problem?",
    "What is the solution?",
    "What is the second problem and solution?"
  ]
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a problem: ___.",
    "My suggestion is to ___.",
    "This solution helps because ___."
  ]
}$json$::jsonb,
  true
),
(
  '642a8b3d-95f6-4256-aa33-04d19a183567',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Discuss an everyday problem",
    "Give a simple suggestion",
    "Use 'I have a problem' and 'I suggest'"
  ],
  "challenge": "Tell me a problem you have and a solution!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Problem Yesterday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd347010c-e91d-4a57-abc7-95482d441c84',
  'A Problem Yesterday',
  'A2',
  'adults',
  11,
  3,
  'Describe a simple recent problem and solution using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
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
  'd347010c-e91d-4a57-abc7-95482d441c84',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔍",
  "questions": [
    "Did you have a problem yesterday?",
    "How did you solve it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Missed",
      "bg": "#FAECE7"
    },
    {
      "word": "Forgot",
      "bg": "#E1F5EE"
    },
    {
      "word": "Found",
      "bg": "#EEEDFE"
    },
    {
      "word": "Solved",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What problem did you have yesterday?",
    "How did you solve it?"
  ],
  "student": [
    "I missed my bus.",
    "I solved it by taking a taxi."
  ],
  "note": "Think about a problem you solved recently!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Yesterday, I [missed] my bus."
    },
    {
      "speaker": "B",
      "text": "I [forgot] my keys at home."
    },
    {
      "speaker": "A",
      "text": "I finally [solved] the problem."
    }
  ],
  "blanks": [
    "missed",
    "forgot",
    "solved"
  ]
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Did you have a problem yesterday?"
    },
    {
      "speaker": "B",
      "text": "Yes, I missed my bus and forgot my keys at home."
    },
    {
      "speaker": "A",
      "text": "How did you solve it?"
    },
    {
      "speaker": "B",
      "text": "I asked a neighbor for help, and finally solved it by getting a spare key."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, I had a problem. First, I missed my usual bus to work. Then, I realized I forgot my keys at home too. After that, I asked a neighbor for help. Finally, I solved the problem by taking a taxi and getting a spare key later.",
  "questions": [
    "What did the writer miss first?",
    "What else went wrong?",
    "How was the problem finally solved?"
  ]
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I ___.",
    "Then, I ___.",
    "Finally, I solved it by ___."
  ]
}$json$::jsonb,
  true
),
(
  'd347010c-e91d-4a57-abc7-95482d441c84',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: missed, forgot, found, solved",
    "Tell a problem story in order",
    "Describe how a problem was solved"
  ],
  "challenge": "Tell me about a problem you solved recently!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Plan and Solution Email
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  'A Plan and Solution Email',
  'A2',
  'adults',
  11,
  4,
  'Write a short email explaining a problem and a plan.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
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
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "Have you written an email about a problem before?",
    "What did you suggest?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Regarding",
      "bg": "#FAECE7"
    },
    {
      "word": "Suggest",
      "bg": "#E1F5EE"
    },
    {
      "word": "New plan",
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
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the email about?",
    "What do you suggest?"
  ],
  "student": [
    "It's regarding a schedule change.",
    "I suggest meeting on Friday instead."
  ],
  "note": "Think about a problem-and-plan email you'd write!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am writing [regarding] the delay."
    },
    {
      "speaker": "B",
      "text": "I [suggest] a new date."
    },
    {
      "speaker": "A",
      "text": "Here is our [new plan]."
    }
  ],
  "blanks": [
    "regarding",
    "suggest",
    "new plan"
  ]
}$json$::jsonb,
  true
),
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write if you had to change a plan?"
    },
    {
      "speaker": "B",
      "text": "I'd write: I am writing regarding our meeting. Unfortunately, I have a conflict."
    },
    {
      "speaker": "A",
      "text": "I suggest a new plan: could we meet on Friday instead?"
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
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Dear Mr. Kim, I am writing regarding our meeting on Wednesday. Unfortunately, I have a scheduling conflict. I suggest a new plan: could we meet on Friday instead? I apologize for any inconvenience. Best regards, Sara.",
  "questions": [
    "What is the email about?",
    "What is the problem?",
    "What does Sara suggest?"
  ]
}$json$::jsonb,
  true
),
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am writing regarding ___.",
    "Unfortunately, ___.",
    "I suggest ___."
  ]
}$json$::jsonb,
  true
),
(
  '25bc80cd-90f1-4eee-8165-eab9be83d17b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short problem-and-plan email",
    "Use 'regarding' and 'I suggest'",
    "Apologize politely"
  ],
  "challenge": "Write a short email explaining a problem and a new plan!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  'Unit Review',
  'A2',
  'adults',
  11,
  5,
  'Review future plans, problems, past solutions, and a plan email.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
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
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗓️",
  "questions": [
    "What are your plans for next week?",
    "What problem did you solve recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Plans",
      "bg": "#FAECE7"
    },
    {
      "word": "Problem",
      "bg": "#E1F5EE"
    },
    {
      "word": "Solved",
      "bg": "#EEEDFE"
    },
    {
      "word": "Suggest",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans for next week?",
    "What problem did you solve recently?"
  ],
  "student": [
    "I'm going to visit family.",
    "I missed the bus, but I solved it."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [plans] for next week are busy."
    },
    {
      "speaker": "B",
      "text": "I had a [problem] yesterday."
    },
    {
      "speaker": "A",
      "text": "I finally [solved] it."
    }
  ],
  "blanks": [
    "plans",
    "problem",
    "solved"
  ]
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me your plans and any problems you've solved lately."
    },
    {
      "speaker": "B",
      "text": "My plans for next week are busy: a meeting and a dentist visit. Yesterday, I had a problem: I missed my bus."
    },
    {
      "speaker": "A",
      "text": "How did you solve it?"
    },
    {
      "speaker": "B",
      "text": "I suggest always keeping a backup plan, that's what solved it for me."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Next week, I'm going to have a busy schedule with a meeting and a dentist appointment. Yesterday, I had a problem: I missed my usual bus. I solved it by taking a taxi. I also wrote an email suggesting a new plan for a delayed project at work.",
  "questions": [
    "What is the writer's schedule like next week?",
    "What problem happened yesterday?",
    "What did the writer write about at work?"
  ]
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Next week, I'm going to ___.",
    "Yesterday, I had a problem: ___.",
    "I suggest ___."
  ]
}$json$::jsonb,
  true
),
(
  '032afb11-79e0-4ce1-bbf6-db2169176ef4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about future plans",
    "Discuss a problem and solution",
    "Tell a past problem story",
    "Write a plan-and-solution email"
  ],
  "challenge": "Tell me all about your plans and any problems you've solved!"
}$json$::jsonb,
  true
);
