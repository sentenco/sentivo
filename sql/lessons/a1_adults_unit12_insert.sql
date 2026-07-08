-- A1 Adults Unit 12: Appointments and Future Plans (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Plans and Dates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  'Plans and Dates',
  'A1',
  'adults',
  12,
  1,
  'Say simple future plans with days and times.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
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
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What are your plans this week?",
    "Do you have a busy schedule?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Meeting",
      "bg": "#FAECE7"
    },
    {
      "word": "Tomorrow",
      "bg": "#E1F5EE"
    },
    {
      "word": "Next Week",
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
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans this week?",
    "Do you have a meeting tomorrow?"
  ],
  "student": [
    "I have a meeting on Monday.",
    "Yes, tomorrow at 10."
  ],
  "note": "Think about your real plans this week!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [meeting] tomorrow."
    },
    {
      "speaker": "B",
      "text": "I have a class [next week]."
    },
    {
      "speaker": "A",
      "text": "I will [visit] my parents."
    }
  ],
  "blanks": [
    "meeting",
    "next week",
    "visit"
  ]
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are your plans this week?"
    },
    {
      "speaker": "B",
      "text": "I have a meeting on Monday."
    },
    {
      "speaker": "A",
      "text": "I have a class next week!"
    },
    {
      "speaker": "B",
      "text": "That's a busy week!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This week, I have a meeting on Monday. Next week, I have a class. Tomorrow, I will visit my parents. I have a busy schedule!",
  "questions": [
    "What does the writer have on Monday?",
    "What happens next week?",
    "Who will the writer visit tomorrow?"
  ]
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On ___, I have a ___.",
    "Next week, I will ___.",
    "Tomorrow, I will ___."
  ]
}$json$::jsonb,
  true
),
(
  '4d77406f-ac46-49a9-b9d5-7fef6bdf18c3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four plan words",
    "Say 'On ___, I have a ___'",
    "Talk about my weekly plans"
  ],
  "challenge": "Tell me one plan you have this week!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Simple Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  'Making Simple Plans',
  'A1',
  'adults',
  12,
  2,
  'Say a simple plan with beginner future expressions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
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
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What are you going to do this weekend?",
    "Do you have plans?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'm Going To",
      "bg": "#FAECE7"
    },
    {
      "word": "I Want To",
      "bg": "#E1F5EE"
    },
    {
      "word": "Plan",
      "bg": "#EEEDFE"
    },
    {
      "word": "This Week",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you going to do?",
    "Do you want to go out?"
  ],
  "student": [
    "I'm going to work late.",
    "Yes, I want to go out!"
  ],
  "note": "Talk about your real plan for this week!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'm going to] work late."
    },
    {
      "speaker": "B",
      "text": "[I want to] visit my family."
    },
    {
      "speaker": "A",
      "text": "That's my [plan] for the week."
    }
  ],
  "blanks": [
    "I'm going to",
    "I want to",
    "plan"
  ]
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you going to do this weekend?"
    },
    {
      "speaker": "B",
      "text": "I'm going to visit my parents."
    },
    {
      "speaker": "A",
      "text": "I want to relax at home!"
    },
    {
      "speaker": "B",
      "text": "That's a good plan too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I'm going to visit my parents. I want to relax too. That's my plan! What's your plan for the weekend?",
  "questions": [
    "What is the writer going to do?",
    "What does the writer also want?",
    "What question does the writer ask?"
  ]
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm going to ___ this week.",
    "I want to ___.",
    "My plan is to ___."
  ]
}$json$::jsonb,
  true
),
(
  '139b7ee6-41c1-4c28-b9bd-2bf2c9f58756',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I'm going to ___'",
    "Say 'I want to ___'",
    "Talk about weekly plans"
  ],
  "challenge": "Tell me what you're going to do this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Invitations and Responses
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  'Invitations and Responses',
  'A1',
  'adults',
  12,
  3,
  'Make and answer a simple invitation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
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
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you invite colleagues to lunch?",
    "How do you say yes to an invitation?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Do You Want To",
      "bg": "#FAECE7"
    },
    {
      "word": "Yes I Do",
      "bg": "#E1F5EE"
    },
    {
      "word": "No I Can't",
      "bg": "#EEEDFE"
    },
    {
      "word": "Invite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you want to have coffee?",
    "Do you want to come to dinner?"
  ],
  "student": [
    "Yes, I do!",
    "No, I can't, sorry."
  ],
  "note": "Practice inviting a real colleague or friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you want to] meet up?"
    },
    {
      "speaker": "B",
      "text": "[Yes, I do]!"
    },
    {
      "speaker": "A",
      "text": "I [invite] you to dinner."
    }
  ],
  "blanks": [
    "Do you want to",
    "Yes, I do",
    "invite"
  ]
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you want to have coffee tomorrow?"
    },
    {
      "speaker": "B",
      "text": "Yes, I do! That sounds nice."
    },
    {
      "speaker": "A",
      "text": "Do you want to come to the meeting?"
    },
    {
      "speaker": "B",
      "text": "No, I can't, sorry. I'm busy."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you want to have coffee tomorrow? Yes, I do! I invite my colleague to lunch. She says yes. We are going to have a nice time together!",
  "questions": [
    "What is the writer invited to do?",
    "Does the colleague say yes?",
    "What are they going to do?"
  ]
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you want to ___? ___.",
    "I invite my colleague to ___.",
    "We are going to ___."
  ]
}$json$::jsonb,
  true
),
(
  '28f10fec-eea9-4c19-a324-0026bed68d67',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you want to ___?'",
    "Answer 'Yes, I do' / 'No, I can't'",
    "Invite someone to do something"
  ],
  "challenge": "Invite me to do something this week!"
}$json$::jsonb,
  true
);

-- Lesson 4: Appointments
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  'Appointments',
  'A1',
  'adults',
  12,
  4,
  'Ask and answer simple questions about time and availability.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
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
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Are you free this week?",
    "How do you make appointments?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Are You Free",
      "bg": "#FAECE7"
    },
    {
      "word": "What Time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Busy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Available",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you free on Friday?",
    "What time works for you?"
  ],
  "student": [
    "Yes, I'm free on Friday.",
    "3 o'clock works for me."
  ],
  "note": "Answer about your real availability!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Are you free] on Friday?"
    },
    {
      "speaker": "B",
      "text": "[What time] works for you?"
    },
    {
      "speaker": "A",
      "text": "I am [busy] on Monday."
    }
  ],
  "blanks": [
    "Are you free",
    "What time",
    "busy"
  ]
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you free on Friday?"
    },
    {
      "speaker": "B",
      "text": "Yes, I'm free in the afternoon."
    },
    {
      "speaker": "A",
      "text": "What time works for you?"
    },
    {
      "speaker": "B",
      "text": "3 o'clock is good for me!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Are you free on Friday? Yes, I'm free in the afternoon. What time works for you? 3 o'clock is good. Let's make an appointment!",
  "questions": [
    "Is the person free on Friday?",
    "What time works for them?",
    "What are they doing?"
  ]
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Are you free on ___? ___.",
    "What time works for you? ___.",
    "I am busy on ___."
  ]
}$json$::jsonb,
  true
),
(
  'cdd8a221-3e38-4a4a-9826-5ae7b59a85fe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Are you free on ___?'",
    "Ask 'What time works for you?'",
    "Make an appointment"
  ],
  "challenge": "Make an appointment with me — ask when I'm free!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  'Unit Review',
  'A1',
  'adults',
  12,
  5,
  'Talk briefly about plans, invitations, and appointments.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
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
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What plan words do you remember?",
    "What are your plans this week?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Meeting",
      "bg": "#FAECE7"
    },
    {
      "word": "I'm Going To",
      "bg": "#E1F5EE"
    },
    {
      "word": "Invite",
      "bg": "#EEEDFE"
    },
    {
      "word": "Are You Free",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans?",
    "Are you free on Friday?"
  ],
  "student": [
    "I have a meeting.",
    "Yes, I'm free."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [meeting]."
    },
    {
      "speaker": "B",
      "text": "[I'm going to] visit my family."
    },
    {
      "speaker": "A",
      "text": "[Are you free] on Friday?"
    }
  ],
  "blanks": [
    "meeting",
    "I'm going to",
    "Are you free"
  ]
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are your plans this week?"
    },
    {
      "speaker": "B",
      "text": "I'm going to visit my family on Saturday."
    },
    {
      "speaker": "A",
      "text": "Are you free on Friday for coffee?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am! Let's meet at 3."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This week, I have a meeting on Monday. I'm going to visit my family on Saturday. My friend invited me to coffee. I said yes! We will meet at 3 o'clock on Friday.",
  "questions": [
    "What does the writer have on Monday?",
    "What is the writer doing Saturday?",
    "What time will they meet on Friday?"
  ]
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This week, I have a ___.",
    "I'm going to ___.",
    "Are you free on ___?"
  ]
}$json$::jsonb,
  true
),
(
  'a4e0a9bb-e71e-492c-a275-591978ec4282',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about weekly plans",
    "Say 'I'm going to ___'",
    "Make and answer invitations",
    "Ask about availability"
  ],
  "challenge": "Tell me your plans this week and invite me to something!"
}$json$::jsonb,
  true
);
