-- A1 Adults Unit 8: Technology and Communication (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Devices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '931dfd49-ba17-4c83-b168-93280696088d',
  'Devices',
  'A1',
  'adults',
  8,
  1,
  'Name basic technology devices.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '931dfd49-ba17-4c83-b168-93280696088d',
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
  '931dfd49-ba17-4c83-b168-93280696088d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What device do you use most?",
    "Do you have a phone?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
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
      "word": "Laptop",
      "bg": "#E1F5EE"
    },
    {
      "word": "Computer",
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
  '931dfd49-ba17-4c83-b168-93280696088d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What device do you use?",
    "Do you have a laptop?"
  ],
  "student": [
    "I use a phone.",
    "Yes, I have a laptop!"
  ],
  "note": "Think about the devices you really use!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use a [phone]."
    },
    {
      "speaker": "B",
      "text": "I have a [laptop]."
    },
    {
      "speaker": "A",
      "text": "I send an [email]."
    }
  ],
  "blanks": [
    "phone",
    "laptop",
    "email"
  ]
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What device do you use most?"
    },
    {
      "speaker": "B",
      "text": "I use my phone the most."
    },
    {
      "speaker": "A",
      "text": "I use a computer for work!"
    },
    {
      "speaker": "B",
      "text": "Computers are useful for work."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use a phone every day. I also have a laptop for work. I send emails every morning. Technology helps me every day!",
  "questions": [
    "What device does the writer use every day?",
    "What is the laptop for?",
    "What does the writer send every morning?"
  ]
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use a ___.",
    "I have a ___.",
    "I use technology to ___."
  ]
}$json$::jsonb,
  true
),
(
  '931dfd49-ba17-4c83-b168-93280696088d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four tech words",
    "Say 'I use a ___'",
    "Talk about devices I use"
  ],
  "challenge": "Tell me what device you use most!"
}$json$::jsonb,
  true
);

-- Lesson 2: Communication Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  'Communication Habits',
  'A1',
  'adults',
  8,
  2,
  'Say simple things they do with technology.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
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
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you send emails at work?",
    "Do you call your family often?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Send Emails",
      "bg": "#FAECE7"
    },
    {
      "word": "Call",
      "bg": "#E1F5EE"
    },
    {
      "word": "Text",
      "bg": "#EEEDFE"
    },
    {
      "word": "Join A Meeting",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you send emails at work?",
    "Do you join meetings online?"
  ],
  "student": [
    "Yes, I send emails every day.",
    "Yes, I join meetings online."
  ],
  "note": "Think about what you really do with technology!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [send emails] at work."
    },
    {
      "speaker": "B",
      "text": "I [call] my family."
    },
    {
      "speaker": "A",
      "text": "I [join a meeting] online."
    }
  ],
  "blanks": [
    "send emails",
    "call",
    "join a meeting"
  ]
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do with technology?"
    },
    {
      "speaker": "B",
      "text": "I send emails and call my family."
    },
    {
      "speaker": "A",
      "text": "I join meetings online!"
    },
    {
      "speaker": "B",
      "text": "That's very useful for work."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At work, I send emails. I call my family every weekend. I text my friends. Sometimes I join a meeting online. Technology is part of my life!",
  "questions": [
    "What does the writer do at work?",
    "Who does the writer call?",
    "Does the writer join meetings?"
  ]
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "At work, I ___.",
    "I call ___.",
    "I use technology to ___."
  ]
}$json$::jsonb,
  true
),
(
  '89f59e3f-b5a4-4224-b70d-fa6e4b6716b4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four tech habits",
    "Say 'I ___ at work'",
    "Talk about communication habits"
  ],
  "challenge": "Tell me three things you do with technology!"
}$json$::jsonb,
  true
);

-- Lesson 3: Messages and Calls
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  'Messages and Calls',
  'A1',
  'adults',
  8,
  3,
  'Use simple communication phrases by phone or message.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
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
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "How do you start a phone call?",
    "Do you send messages every day?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "Call Me",
      "bg": "#E1F5EE"
    },
    {
      "word": "Send Me A Message",
      "bg": "#EEEDFE"
    },
    {
      "word": "See You",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you start a call?",
    "How do you end a message?"
  ],
  "student": [
    "I say 'Hello'.",
    "I say 'See you!'"
  ],
  "note": "Think about a real call or message you sent!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hello]! How are you?"
    },
    {
      "speaker": "B",
      "text": "[Call me] later, please."
    },
    {
      "speaker": "A",
      "text": "[See you] soon!"
    }
  ],
  "blanks": [
    "Hello",
    "Call me",
    "See you"
  ]
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! How are you?"
    },
    {
      "speaker": "B",
      "text": "I'm good, thank you! Can you call me later?"
    },
    {
      "speaker": "A",
      "text": "Yes, of course! See you soon."
    },
    {
      "speaker": "B",
      "text": "See you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! How are you? I'm fine, thank you. Can you send me a message later? Yes, of course. Thank you! See you soon!",
  "questions": [
    "How does the call start?",
    "What does the writer ask for?",
    "How does the call end?"
  ]
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! How are ___?",
    "Please send me a ___.",
    "___ soon!"
  ]
}$json$::jsonb,
  true
),
(
  'aa1ba885-fc04-42d3-828e-5059caa758fe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hello' and 'See you'",
    "Say 'Call me' / 'Send me a message'",
    "Have a simple phone conversation"
  ],
  "challenge": "Call me and have a short conversation, from hello to goodbye!"
}$json$::jsonb,
  true
);

-- Lesson 4: Tech Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  'Tech Questions',
  'A1',
  'adults',
  8,
  4,
  'Answer simple questions about technology use.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
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
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you use email every day?",
    "What app do you use most?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Do You Use",
      "bg": "#FAECE7"
    },
    {
      "word": "What App",
      "bg": "#E1F5EE"
    },
    {
      "word": "Every Day",
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
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you use email?",
    "What app do you use?"
  ],
  "student": [
    "Yes, I use email every day.",
    "I use a message app."
  ],
  "note": "Answer about your real tech habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you use] a computer?"
    },
    {
      "speaker": "B",
      "text": "[What app] do you use?"
    },
    {
      "speaker": "A",
      "text": "I use [email] every day."
    }
  ],
  "blanks": [
    "Do you use",
    "What app",
    "email"
  ]
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you use email every day?"
    },
    {
      "speaker": "B",
      "text": "Yes, I use it every day for work."
    },
    {
      "speaker": "A",
      "text": "What app do you use most?"
    },
    {
      "speaker": "B",
      "text": "I use a message app the most!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you use email every day? Yes, I use it every day. What app do you use? I use a message app. Technology is part of my daily work!",
  "questions": [
    "Does the writer use email every day?",
    "What app does the writer use?",
    "Is technology part of daily work?"
  ]
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you use ___? ___.",
    "My favorite app is ___.",
    "I use technology to ___."
  ]
}$json$::jsonb,
  true
),
(
  '3a64c431-6496-4279-ab89-ca6257b5d97a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you use ___?'",
    "Ask 'What app do you use?'",
    "Talk about technology use"
  ],
  "challenge": "Ask me what app I use and why!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  'Unit Review',
  'A1',
  'adults',
  8,
  5,
  'Talk briefly about technology and communication habits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
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
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What tech words do you remember?",
    "What do you do with technology?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
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
      "word": "Email",
      "bg": "#E1F5EE"
    },
    {
      "word": "Call",
      "bg": "#EEEDFE"
    },
    {
      "word": "Message",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What device do you use?",
    "What do you do with technology?"
  ],
  "student": [
    "I use a phone.",
    "I send emails and call people."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use a [phone]."
    },
    {
      "speaker": "B",
      "text": "I send [email]s at work."
    },
    {
      "speaker": "A",
      "text": "I [call] my family."
    }
  ],
  "blanks": [
    "phone",
    "email",
    "call"
  ]
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What device do you use most?"
    },
    {
      "speaker": "B",
      "text": "I use my phone and laptop the most."
    },
    {
      "speaker": "A",
      "text": "What do you do with them?"
    },
    {
      "speaker": "B",
      "text": "I send emails and call my family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use a phone every day. At work, I send emails and join meetings. I call my family on weekends. Technology helps me stay connected!",
  "questions": [
    "What device does the writer use?",
    "What does the writer do at work?",
    "Who does the writer call?"
  ]
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use a ___.",
    "At work, I ___.",
    "I call ___."
  ]
}$json$::jsonb,
  true
),
(
  '0b5496ff-b0e1-45c9-99d0-19524f9765b9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name tech words",
    "Talk about communication habits",
    "Use message/call phrases",
    "Answer tech questions"
  ],
  "challenge": "Tell me about the technology you use every day!"
}$json$::jsonb,
  true
);
