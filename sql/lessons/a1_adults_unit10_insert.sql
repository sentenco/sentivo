-- A1 Adults Unit 10: Health and Feelings (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: How Are You?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  'How Are You?',
  'A1',
  'adults',
  10,
  1,
  'Ask and answer about feelings. [Bridge, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
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
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "How are you today?",
    "Are you tired?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tired",
      "bg": "#FAECE7"
    },
    {
      "word": "Well",
      "bg": "#E1F5EE"
    },
    {
      "word": "Not well",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fine",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you today?",
    "Are you well?"
  ],
  "student": [
    "I am fine, thank you.",
    "I am a little tired."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [tired] today."
    },
    {
      "speaker": "B",
      "text": "I am [well], thank you."
    },
    {
      "speaker": "A",
      "text": "I am [fine]."
    }
  ],
  "blanks": [
    "tired",
    "well",
    "fine"
  ]
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I am fine, thank you. How are you?"
    },
    {
      "speaker": "A",
      "text": "I am a little tired."
    },
    {
      "speaker": "B",
      "text": "I hope you feel better!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How are you today? I am fine, thank you. I am a little tired.",
  "questions": [
    "How does the person feel?",
    "Is the person very tired or a little tired?",
    "What does the person say first?"
  ]
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ today.",
    "I am a little ___.",
    "How are you?"
  ]
}$json$::jsonb,
  true
),
(
  'd21e188a-38cf-4dcd-a8fe-10131718cc7e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I am fine' or 'I am tired'",
    "Ask 'How are you?'",
    "Answer politely"
  ],
  "challenge": "Ask me how I am, and answer how you feel!"
}$json$::jsonb,
  true
);

-- Lesson 2: Body and Health
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  'Body and Health',
  'A1',
  'adults',
  10,
  2,
  'Name body parts and simple symptoms. [Bridge, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
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
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤒",
  "questions": [
    "Do you have a headache sometimes?",
    "Does your stomach hurt?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7"
    },
    {
      "word": "Stomach",
      "bg": "#E1F5EE"
    },
    {
      "word": "Headache",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hurts",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a headache?",
    "Does your head hurt?"
  ],
  "student": [
    "Yes, I have a headache.",
    "Yes, my head hurts."
  ],
  "note": "Use the word bank: head, stomach, headache, hurts.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [headache]."
    },
    {
      "speaker": "B",
      "text": "My [stomach] hurts."
    },
    {
      "speaker": "A",
      "text": "My [head] hurts too."
    }
  ],
  "blanks": [
    "headache",
    "stomach",
    "head"
  ]
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a headache?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have a headache. My stomach hurts too."
    },
    {
      "speaker": "A",
      "text": "I am sorry to hear that."
    },
    {
      "speaker": "B",
      "text": "Thank you."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a headache today. My stomach hurts too. I feel unwell.",
  "questions": [
    "What does the writer have?",
    "What else hurts?",
    "How does the writer feel overall?"
  ]
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "My ___ hurts.",
    "I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '479ac479-8d3e-40e8-8cd6-93dea171ba32',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name head and stomach",
    "Say 'I have a headache'",
    "Say 'My ___ hurts'"
  ],
  "challenge": "Tell me if anything hurts today, real or pretend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Simple Advice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  'Simple Advice',
  'A1',
  'adults',
  10,
  3,
  'Give and receive simple advice with ''because''. [Bridge, Lesson 3: freer practice, choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
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
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💊",
  "questions": [
    "What do you do when you have a headache?",
    "Do you rest when you feel unwell?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "You should",
      "bg": "#FAECE7"
    },
    {
      "word": "Rest",
      "bg": "#E1F5EE"
    },
    {
      "word": "Drink water",
      "bg": "#EEEDFE"
    },
    {
      "word": "Because",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What should I do?",
    "Why should I rest?"
  ],
  "student": [
    "You should rest.",
    "Because it helps you feel better."
  ],
  "note": "Two answers are given. Choose the more helpful one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[You should] rest."
    },
    {
      "speaker": "B",
      "text": "You should [drink water] too."
    },
    {
      "speaker": "A",
      "text": "[Because] it helps."
    }
  ],
  "blanks": [
    "you should",
    "drink water",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a headache. What should I do?"
    },
    {
      "speaker": "B",
      "text": "You should rest. You should drink water too, because it helps."
    },
    {
      "speaker": "A",
      "text": "Thank you, that's good advice."
    },
    {
      "speaker": "B",
      "text": "I hope you feel better soon!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a headache. You should rest. You should drink water too, because it helps you feel better.",
  "questions": [
    "What is the problem?",
    "What is the first piece of advice?",
    "Why should the person drink water?"
  ]
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You should ___.",
    "You should ___ too, because ___.",
    "That's good advice."
  ]
}$json$::jsonb,
  true
),
(
  'b65fea89-f64f-45f7-a6e9-efdacea75463',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give advice with 'You should'",
    "Give a one-clause reason with 'because'",
    "Receive advice politely"
  ],
  "challenge": "Give me advice for a headache or a cold!"
}$json$::jsonb,
  true
);

-- Lesson 4: At the Doctor
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  'At the Doctor',
  'A1',
  'adults',
  10,
  4,
  'Combine symptoms and advice into a doctor''s visit conversation. [Bridge, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
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
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🩺",
  "questions": [
    "Have you been to the doctor recently?",
    "What do you say when you make an appointment?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What's wrong",
      "bg": "#FAECE7"
    },
    {
      "word": "Since when",
      "bg": "#E1F5EE"
    },
    {
      "word": "Appointment",
      "bg": "#EEEDFE"
    },
    {
      "word": "Feel better",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's wrong?",
    "Since when?"
  ],
  "student": [
    "I have a headache.",
    "Since yesterday."
  ],
  "note": "Put it all together: symptom + advice + closing.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What's wrong]?"
    },
    {
      "speaker": "B",
      "text": "I have a headache. [Since when]? Since yesterday."
    },
    {
      "speaker": "A",
      "text": "I hope you [feel better] soon."
    }
  ],
  "blanks": [
    "what's wrong",
    "since when",
    "feel better"
  ]
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Good morning. What's wrong?"
    },
    {
      "speaker": "B",
      "text": "I have a headache and my stomach hurts."
    },
    {
      "speaker": "A",
      "text": "Since when? Since yesterday. You should rest and drink water."
    },
    {
      "speaker": "B",
      "text": "Thank you, I hope I feel better soon."
    }
  ],
  "note": "Mini role-play: doctor and patient at a check-up."
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Good morning. What's wrong? I have a headache since yesterday. You should rest and drink water. I hope you feel better soon.",
  "questions": [
    "What is wrong?",
    "Since when?",
    "What is the advice?"
  ]
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ since ___.",
    "You should ___.",
    "I hope you feel better."
  ]
}$json$::jsonb,
  true
),
(
  'e4c104b7-390e-499c-862f-4556d57b0c4e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a symptom with 'since'",
    "Give simple advice",
    "Close politely"
  ],
  "challenge": "Role-play a doctor visit with me!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  'Unit Review',
  'A1',
  'adults',
  10,
  5,
  'Review feelings, symptoms, and advice. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
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
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "How are you today?",
    "What advice do you give for a headache?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tired",
      "bg": "#FAECE7"
    },
    {
      "word": "Headache",
      "bg": "#E1F5EE"
    },
    {
      "word": "You should",
      "bg": "#EEEDFE"
    },
    {
      "word": "Feel better",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you today?",
    "What should I do for a headache?"
  ],
  "student": [
    "I am a little tired.",
    "You should rest."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [tired] today."
    },
    {
      "speaker": "B",
      "text": "I have a [headache]."
    },
    {
      "speaker": "A",
      "text": "[You should] rest."
    }
  ],
  "blanks": [
    "tired",
    "headache",
    "you should"
  ]
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I am tired, and I have a headache."
    },
    {
      "speaker": "A",
      "text": "You should rest and drink water, because it helps."
    },
    {
      "speaker": "B",
      "text": "Thank you, I hope I feel better soon."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am tired today, and I have a headache. You should rest and drink water, because it helps. I hope I feel better soon.",
  "questions": [
    "How does the writer feel?",
    "What is the advice?",
    "Why does the advice help?"
  ]
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ today.",
    "You should ___, because ___.",
    "I hope I feel better."
  ]
}$json$::jsonb,
  true
),
(
  'c85f1cb0-f5c1-489b-8cab-fec178d1cec1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about how I feel",
    "Describe a symptom",
    "Give and receive advice"
  ],
  "challenge": "Tell me how you feel today and any advice you'd give!"
}$json$::jsonb,
  true
);
