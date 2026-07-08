-- A2 Adults Unit 1: Daily Communication and Personal Updates (lessons 2-5)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 2: A Short Personal Message
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  'A Short Personal Message',
  'A2',
  'adults',
  1,
  2,
  'Write a short personal message to a friend or family member.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
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
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "Do you send messages to family often?",
    "When did you last message a friend?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Message",
      "bg": "#FAECE7"
    },
    {
      "word": "Catch up",
      "bg": "#E1F5EE"
    },
    {
      "word": "Miss you",
      "bg": "#EEEDFE"
    },
    {
      "word": "Reply",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you usually message your friends?",
    "What do you write?"
  ],
  "student": [
    "I usually send a quick message.",
    "I write about my week."
  ],
  "note": "Think about a message you'd send today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I want to [catch up] with my sister."
    },
    {
      "speaker": "B",
      "text": "I'll send her a quick [message]."
    },
    {
      "speaker": "A",
      "text": "I [miss you], let's talk soon!"
    }
  ],
  "blanks": [
    "catch up",
    "message",
    "miss you"
  ]
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you usually stay in touch with family?"
    },
    {
      "speaker": "B",
      "text": "I send a short message every week to catch up."
    },
    {
      "speaker": "A",
      "text": "I usually write about my week and ask how they are."
    },
    {
      "speaker": "B",
      "text": "That's a nice habit."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi Mom, just wanted to say hi and catch up! Work has been busy this week, but I'm doing well. I miss you and hope to visit soon. How is Dad? Write back when you can. Love, Anna.",
  "questions": [
    "Who is the message to?",
    "How is the writer doing?",
    "What does the writer hope to do?"
  ]
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hi ___, just wanted to say ___.",
    "I miss you and ___.",
    "Write back when you can!"
  ]
}$json$::jsonb,
  true
),
(
  '1bed842b-44fe-4cb2-aded-0297a0707af3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short personal message",
    "Use 'catch up' and 'miss you'",
    "Ask about someone's wellbeing"
  ],
  "challenge": "Write a short message to someone you care about!"
}$json$::jsonb,
  true
);

-- Lesson 3: Yesterday and Today
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  'Yesterday and Today',
  'A2',
  'adults',
  1,
  3,
  'Compare yesterday and today using simple past and present.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
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
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📆",
  "questions": [
    "What did you do yesterday?",
    "Is today different from yesterday?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Yesterday",
      "bg": "#FAECE7"
    },
    {
      "word": "Today",
      "bg": "#E1F5EE"
    },
    {
      "word": "Different",
      "bg": "#EEEDFE"
    },
    {
      "word": "Same",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do yesterday?",
    "What are you doing today?"
  ],
  "student": [
    "Yesterday, I worked late.",
    "Today, I'm resting."
  ],
  "note": "Compare your yesterday and today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Yesterday], I worked until 7pm."
    },
    {
      "speaker": "B",
      "text": "[Today], I finish earlier."
    },
    {
      "speaker": "A",
      "text": "Today feels [different] from yesterday."
    }
  ],
  "blanks": [
    "yesterday",
    "today",
    "different"
  ]
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do yesterday?"
    },
    {
      "speaker": "B",
      "text": "Yesterday, I worked late and cooked dinner. Today is quieter."
    },
    {
      "speaker": "A",
      "text": "Today I have a meeting, so it's a bit different."
    },
    {
      "speaker": "B",
      "text": "I hope it goes well!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday was busy. I worked until 7pm and then cooked dinner for my family. Today is different and much calmer. I only have one meeting this morning and the rest of the day is free.",
  "questions": [
    "What did the writer do yesterday?",
    "How is today different?",
    "What does the writer have this morning?"
  ]
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I ___.",
    "Today, I ___.",
    "Today is different because ___."
  ]
}$json$::jsonb,
  true
),
(
  '53e5422f-80d1-483e-873c-3041db9be1d7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use simple past for yesterday",
    "Use simple present for today",
    "Compare two days"
  ],
  "challenge": "Tell me about your yesterday and today!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Simple Weekly Update
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  'A Simple Weekly Update',
  'A2',
  'adults',
  1,
  4,
  'Write a short weekly update using connectors.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
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
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "How was your week overall?",
    "Do you send weekly updates to anyone?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Update",
      "bg": "#FAECE7"
    },
    {
      "word": "Busy week",
      "bg": "#E1F5EE"
    },
    {
      "word": "Overall",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plans",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How was your week?",
    "What are your plans for next week?"
  ],
  "student": [
    "It was a busy week overall.",
    "Next week, I have a few plans."
  ],
  "note": "Think about how to summarize your week!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This was a [busy week] for me."
    },
    {
      "speaker": "B",
      "text": "Here's my weekly [update]."
    },
    {
      "speaker": "A",
      "text": "I have some [plans] for next week."
    }
  ],
  "blanks": [
    "busy week",
    "update",
    "plans"
  ]
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How was your week overall?"
    },
    {
      "speaker": "B",
      "text": "It was a busy week, but a good one. Here's my update: I finished a big project."
    },
    {
      "speaker": "A",
      "text": "I have a few plans for next week, including a family visit."
    },
    {
      "speaker": "B",
      "text": "Sounds like a good balance!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Weekly update: this was a busy week at work, but overall a good one. I finished an important project and met with my team twice. Next week, I plan to visit my parents and relax a little.",
  "questions": [
    "How was the week overall?",
    "What did the writer finish?",
    "What are the writer's plans for next week?"
  ]
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This week was ___ overall.",
    "I finished ___.",
    "Next week, I plan to ___."
  ]
}$json$::jsonb,
  true
),
(
  '20e7a92e-61a0-4e7d-b64d-aa5dcd1fdf52',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short weekly update",
    "Use 'overall' to summarize",
    "Talk about next week's plans"
  ],
  "challenge": "Give me your weekly update!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  'Unit Review',
  'A2',
  'adults',
  1,
  5,
  'Review small talk, messages, past/present, and weekly updates.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
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
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "How do you usually communicate with family?",
    "How was your week?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Message",
      "bg": "#FAECE7"
    },
    {
      "word": "Yesterday",
      "bg": "#E1F5EE"
    },
    {
      "word": "Update",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plans",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you stay in touch with family?",
    "How was your week?"
  ],
  "student": [
    "I send a short message every week.",
    "It was a busy week overall."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I sent a [message] to my sister."
    },
    {
      "speaker": "B",
      "text": "[Yesterday] was busy for me."
    },
    {
      "speaker": "A",
      "text": "Here's my weekly [update]."
    }
  ],
  "blanks": [
    "message",
    "yesterday",
    "update"
  ]
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your week and how you communicate with family."
    },
    {
      "speaker": "B",
      "text": "I sent a message to my mom yesterday. This week was busy overall."
    },
    {
      "speaker": "A",
      "text": "Next week, I plan to relax more and catch up with friends."
    },
    {
      "speaker": "B",
      "text": "That sounds like a good plan."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I sent a short message to my sister yesterday to catch up. This week was busy overall, with lots of work. Today feels calmer. Next week, I plan to relax and visit my parents. I'll send them a weekly update too.",
  "questions": [
    "Who did the writer message?",
    "How was the week?",
    "What are the writer's plans for next week?"
  ]
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually stay in touch by ___.",
    "This week was ___ because ___.",
    "Next week, I plan to ___."
  ]
}$json$::jsonb,
  true
),
(
  '73e01a43-6873-4f72-afdd-5fde472ede97',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a personal message",
    "Compare yesterday and today",
    "Give a weekly update"
  ],
  "challenge": "Tell me all about your week and your plans!"
}$json$::jsonb,
  true
);
