-- A2 Adults Unit 8: Technology and Online Communication (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Digital Tools I Use
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  'Digital Tools I Use',
  'A2',
  'adults',
  8,
  1,
  'Talk about digital tools used for work and daily life.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
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
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💻",
  "questions": [
    "What digital tools do you use daily?",
    "Do you use video calls for work?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Video call",
      "bg": "#FAECE7"
    },
    {
      "word": "App",
      "bg": "#E1F5EE"
    },
    {
      "word": "Password",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cloud storage",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What digital tools do you use daily?",
    "Do you use video calls often?"
  ],
  "student": [
    "I use a messaging app and email.",
    "Yes, I have video calls every week."
  ],
  "note": "Think about the digital tools you use!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use a [video call] app for meetings."
    },
    {
      "speaker": "B",
      "text": "I save files in [cloud storage]."
    },
    {
      "speaker": "A",
      "text": "I need to change my [password]."
    }
  ],
  "blanks": [
    "video call",
    "cloud storage",
    "password"
  ]
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What digital tools do you use every day?"
    },
    {
      "speaker": "B",
      "text": "I use a messaging app and video calls for work meetings."
    },
    {
      "speaker": "A",
      "text": "I also use cloud storage to save important files."
    },
    {
      "speaker": "B",
      "text": "That's very practical."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every day, I use several digital tools. I have video calls with my team every morning. I save important files using cloud storage. I also use a messaging app to stay in touch with colleagues and family.",
  "questions": [
    "What does the writer use every morning?",
    "Where does the writer save files?",
    "What app does the writer use to stay in touch?"
  ]
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use ___ every day.",
    "I save files in ___.",
    "I use ___ to stay in touch with ___."
  ]
}$json$::jsonb,
  true
),
(
  '72e97949-4a79-4ba6-8cee-370e0c0fb0e0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about digital tools",
    "Use 'video call', 'app', 'cloud storage'",
    "Describe my digital habits"
  ],
  "challenge": "Tell me about the digital tools you use every day!"
}$json$::jsonb,
  true
);

-- Lesson 2: Online Problems and Help
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  'Online Problems and Help',
  'A2',
  'adults',
  8,
  2,
  'Describe simple online problems and ask for help.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
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
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚠️",
  "questions": [
    "Have you had an online problem recently?",
    "Have you forgotten a password before?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Won't load",
      "bg": "#FAECE7"
    },
    {
      "word": "Forgot password",
      "bg": "#E1F5EE"
    },
    {
      "word": "Reset",
      "bg": "#EEEDFE"
    },
    {
      "word": "Technical support",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the problem?",
    "Do you need to reset your password?"
  ],
  "student": [
    "The page won't load.",
    "Yes, I forgot my password."
  ],
  "note": "Think about an online problem you've had!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The website [won't load]."
    },
    {
      "speaker": "B",
      "text": "I [forgot my password]."
    },
    {
      "speaker": "A",
      "text": "I need to contact [technical support]."
    }
  ],
  "blanks": [
    "won't load",
    "forgot my password",
    "technical support"
  ]
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's wrong? You look frustrated."
    },
    {
      "speaker": "B",
      "text": "The website won't load, and I also forgot my password."
    },
    {
      "speaker": "A",
      "text": "You can reset it, or contact technical support if it doesn't work."
    },
    {
      "speaker": "B",
      "text": "Good idea, thank you."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message to support: Hello, I'm having trouble with my account. The page won't load, and I also forgot my password. I tried to reset it, but it didn't work. Could you please help me? Thank you.",
  "questions": [
    "What two problems does the writer have?",
    "What did the writer try to do?",
    "What does the writer ask for?"
  ]
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm having trouble with ___.",
    "I tried to ___, but it didn't work.",
    "Could you please help me with ___?"
  ]
}$json$::jsonb,
  true
),
(
  '32565fee-87ee-46ce-9159-40b9ae5e6219',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe an online problem",
    "Use 'won't load' and 'forgot my password'",
    "Ask for technical help"
  ],
  "challenge": "Tell me about an online problem you had and how you solved it!"
}$json$::jsonb,
  true
);

-- Lesson 3: Better Online Options
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  'Better Online Options',
  'A2',
  'adults',
  8,
  3,
  'Compare apps or websites using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
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
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔒",
  "questions": [
    "Which app is easier to use for you?",
    "Do you think this website is secure?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Easier to use",
      "bg": "#FAECE7"
    },
    {
      "word": "More secure",
      "bg": "#E1F5EE"
    },
    {
      "word": "Faster",
      "bg": "#EEEDFE"
    },
    {
      "word": "Reliable",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this app easier to use?",
    "Is it more secure than the other one?"
  ],
  "student": [
    "Yes, it's much easier.",
    "Yes, it's more secure."
  ],
  "note": "Compare two apps or websites you use!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This app is [easier to use]."
    },
    {
      "speaker": "B",
      "text": "That one is [more secure]."
    },
    {
      "speaker": "A",
      "text": "This website is [faster] too."
    }
  ],
  "blanks": [
    "easier to use",
    "more secure",
    "faster"
  ]
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which app do you prefer for messaging?"
    },
    {
      "speaker": "B",
      "text": "This one is easier to use and more secure than the other one."
    },
    {
      "speaker": "A",
      "text": "I agree, and it's faster too."
    },
    {
      "speaker": "B",
      "text": "It's definitely more reliable overall."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I compared two messaging apps. The first one is easier to use, with a simple design. The second one is more secure, with better privacy features. Overall, I think the first one is faster, but the second one is more reliable for important messages.",
  "questions": [
    "What is the first app like?",
    "What is the second app like?",
    "Which one is more reliable?"
  ]
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is easier to use than ___.",
    "___ is more secure because ___.",
    "I prefer ___ because it's ___."
  ]
}$json$::jsonb,
  true
),
(
  '7f8bb0fe-40ee-47d6-bbb6-3a5610c254a8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare apps or websites",
    "Use comparatives for technology",
    "Say which I prefer and why"
  ],
  "challenge": "Compare two apps you use and tell me which is better!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Online Update
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  'A Short Online Update',
  'A2',
  'adults',
  8,
  4,
  'Write a short online status update or message.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
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
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📤",
  "questions": [
    "Have you posted an online update recently?",
    "What was it about?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
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
      "word": "Status",
      "bg": "#E1F5EE"
    },
    {
      "word": "Currently",
      "bg": "#EEEDFE"
    },
    {
      "word": "Stay tuned",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would your update say?",
    "What are you currently working on?"
  ],
  "student": [
    "My update would be about my new project.",
    "I'm currently learning English."
  ],
  "note": "Think about a short online update you'd post!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Here's my quick [update]."
    },
    {
      "speaker": "B",
      "text": "My [status] is 'busy but happy'."
    },
    {
      "speaker": "A",
      "text": "[Currently], I'm working on a new project."
    }
  ],
  "blanks": [
    "update",
    "status",
    "currently"
  ]
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's your quick update this week?"
    },
    {
      "speaker": "B",
      "text": "Currently, I'm working on a new project. Busy but happy!"
    },
    {
      "speaker": "A",
      "text": "Same here. I'm learning English and enjoying it."
    },
    {
      "speaker": "B",
      "text": "That's great progress, stay tuned for more!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Quick update: currently working on a new project at the office. It's busy, but I'm enjoying it. I'm also learning English in my free time. Stay tuned for more updates soon!",
  "questions": [
    "What is the writer currently doing?",
    "What is the writer learning?",
    "What does the writer say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Quick update: currently, I'm ___.",
    "I'm also ___.",
    "Stay tuned for ___."
  ]
}$json$::jsonb,
  true
),
(
  '79236483-4dda-425b-bde1-c9e1ad3299ef',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short online update",
    "Use 'currently' and 'status'",
    "Share a brief personal update"
  ],
  "challenge": "Write and read me a short online update!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  'Unit Review',
  'A2',
  'adults',
  8,
  5,
  'Review digital tools, online problems, comparisons, and an online update.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
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
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖥️",
  "questions": [
    "What digital tools do you use?",
    "Have you had an online problem?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Digital tools",
      "bg": "#FAECE7"
    },
    {
      "word": "Problem",
      "bg": "#E1F5EE"
    },
    {
      "word": "Easier to use",
      "bg": "#EEEDFE"
    },
    {
      "word": "Update",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What digital tools do you use?",
    "Have you had an online problem recently?"
  ],
  "student": [
    "I use messaging apps and email.",
    "Yes, my password stopped working once."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use many [digital tools] for work."
    },
    {
      "speaker": "B",
      "text": "I had a [problem] with my password."
    },
    {
      "speaker": "A",
      "text": "This new app is [easier to use]."
    }
  ],
  "blanks": [
    "digital tools",
    "problem",
    "easier to use"
  ]
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about the digital tools you use and any problems you've had."
    },
    {
      "speaker": "B",
      "text": "I use video calls and cloud storage every day. Once, I had a problem with a forgotten password."
    },
    {
      "speaker": "A",
      "text": "This new app is easier to use than my old one."
    },
    {
      "speaker": "B",
      "text": "I should post an update about switching apps!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use many digital tools every day, like video calls and cloud storage. Once, I had a problem: I forgot my password and had to contact technical support. I recently switched to a new app that's easier to use and more secure. I posted a short update about it online.",
  "questions": [
    "What tools does the writer use?",
    "What problem did the writer have?",
    "What did the writer do recently?"
  ]
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use ___ every day.",
    "Once, I had a problem with ___.",
    "I recently ___."
  ]
}$json$::jsonb,
  true
),
(
  '7d402387-25c1-4ceb-b915-ad7e2eddce5d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about digital tools",
    "Describe an online problem",
    "Compare apps or websites",
    "Write an online update"
  ],
  "challenge": "Tell me all about your digital life!"
}$json$::jsonb,
  true
);
