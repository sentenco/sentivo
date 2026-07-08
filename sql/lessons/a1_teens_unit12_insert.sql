-- A1 Teens Unit 12: Weekend Plans (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weekend Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  'Weekend Plans',
  'A1',
  'teens',
  12,
  1,
  'Say simple weekend plans.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What do you usually do on weekends?",
    "Do you stay home or go out?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Stay Home",
      "bg": "#FAECE7"
    },
    {
      "word": "Go Out",
      "bg": "#E1F5EE"
    },
    {
      "word": "Relax",
      "bg": "#EEEDFE"
    },
    {
      "word": "Meet Friends",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do on weekends?",
    "Do you meet friends?"
  ],
  "student": [
    "I stay home and relax.",
    "Yes, I meet friends!"
  ],
  "note": "Think about your real weekend habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [stay home] on Saturday."
    },
    {
      "speaker": "B",
      "text": "I [meet friends] on Sunday."
    },
    {
      "speaker": "A",
      "text": "I like to [relax]."
    }
  ],
  "blanks": [
    "stay home",
    "meet friends",
    "relax"
  ]
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do on weekends?"
    },
    {
      "speaker": "B",
      "text": "I meet friends and go out."
    },
    {
      "speaker": "A",
      "text": "I stay home and relax!"
    },
    {
      "speaker": "B",
      "text": "That sounds nice too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "On weekends, I stay home on Saturday. I relax and watch videos. On Sunday, I meet friends. I go out and have fun. Weekends are the best!",
  "questions": [
    "What does the writer do Saturday?",
    "What does the writer do Sunday?",
    "Does the writer like weekends?"
  ]
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On Saturday, I ___.",
    "On Sunday, I ___.",
    "This weekend, I want to ___."
  ]
}$json$::jsonb,
  true
),
(
  '4ed36728-4f5f-439f-ad81-d6223d21becb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four weekend activities",
    "Say 'I ___ on weekends'",
    "Talk about my weekend"
  ],
  "challenge": "Tell me your usual weekend plan!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Simple Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  'Making Simple Plans',
  'A1',
  'teens',
  12,
  2,
  'Say a simple plan with ''I''m going to'' as a fixed phrase.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What are you going to do this weekend?",
    "Do you have plans?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
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
      "word": "This Weekend",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
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
    "I'm going to meet friends.",
    "Yes, I want to go out!"
  ],
  "note": "Talk about your real plan for this weekend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'm going to] stay home."
    },
    {
      "speaker": "B",
      "text": "[I want to] meet friends."
    },
    {
      "speaker": "A",
      "text": "That's my [plan] for the weekend."
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
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
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
      "text": "I'm going to meet my friends."
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
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I'm going to meet my friends. I want to go to the park. That's my plan! What's your plan for the weekend?",
  "questions": [
    "What is the writer going to do?",
    "Where does the writer want to go?",
    "What question does the writer ask?"
  ]
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm going to ___ this weekend.",
    "I want to ___.",
    "My plan is to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f99ef501-e914-49ca-90a3-eaefb4e21f52',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I'm going to ___'",
    "Say 'I want to ___'",
    "Talk about weekend plans"
  ],
  "challenge": "Tell me what you're going to do this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Invitations and Responses
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  'Invitations and Responses',
  'A1',
  'teens',
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
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "Do you invite friends to hang out?",
    "How do you say yes to an invitation?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
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
      "word": "No I Don't",
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
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you want to go out?",
    "Do you want to play games?"
  ],
  "student": [
    "Yes, I do!",
    "No, I don't, thanks."
  ],
  "note": "Practice inviting a real friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
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
      "text": "I [invite] you to my house."
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
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you want to go out this weekend?"
    },
    {
      "speaker": "B",
      "text": "Yes, I do! That sounds fun."
    },
    {
      "speaker": "A",
      "text": "Do you want to play games instead?"
    },
    {
      "speaker": "B",
      "text": "No, I don't, but thanks!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you want to go out this weekend? Yes, I do! I invite my friend to the park. She says yes. We are going to have fun together!",
  "questions": [
    "What is the writer invited to do?",
    "Does the friend say yes?",
    "Where are they going?"
  ]
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you want to ___? ___.",
    "I invite my friend to ___.",
    "We are going to ___."
  ]
}$json$::jsonb,
  true
),
(
  'dadcdd7a-3ecd-4b54-a92e-bb64070de27d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you want to ___?'",
    "Answer 'Yes, I do' / 'No, I don't'",
    "Invite a friend to do something"
  ],
  "challenge": "Invite me to do something this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About the Weekend
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  'Talking About the Weekend',
  'A1',
  'teens',
  12,
  4,
  'Answer simple questions about weekend plans.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What are your plans this weekend?",
    "Where are you going?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Are Your Plans",
      "bg": "#FAECE7"
    },
    {
      "word": "Where Are You Going",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nowhere",
      "bg": "#EEEDFE"
    },
    {
      "word": "Somewhere",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans?",
    "Where are you going?"
  ],
  "student": [
    "I'm meeting friends.",
    "I'm going to the park."
  ],
  "note": "Answer with your real weekend plans!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What are your plans]?"
    },
    {
      "speaker": "B",
      "text": "[Where are you going]?"
    },
    {
      "speaker": "A",
      "text": "I'm going [somewhere] fun."
    }
  ],
  "blanks": [
    "What are your plans",
    "Where are you going",
    "somewhere"
  ]
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are your plans this weekend?"
    },
    {
      "speaker": "B",
      "text": "I'm meeting friends at the park."
    },
    {
      "speaker": "A",
      "text": "Where are you going after that?"
    },
    {
      "speaker": "B",
      "text": "We're going somewhere for food!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What are your plans this weekend? I'm meeting friends. Where are you going? We're going to the park. Then we're going somewhere for food!",
  "questions": [
    "What are the writer's plans?",
    "Where is the writer going first?",
    "Where are they going after?"
  ]
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My plans this weekend are ___.",
    "I'm going to ___.",
    "After that, I'm going ___."
  ]
}$json$::jsonb,
  true
),
(
  'ab56cef1-f5ec-40c1-9f81-890cb3d68698',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What are your plans?'",
    "Ask 'Where are you going?'",
    "Talk about weekend plans"
  ],
  "challenge": "Tell me your full weekend plan, step by step!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  'Unit Review',
  'A1',
  'teens',
  12,
  5,
  'Talk briefly about weekend plans and invitations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What weekend words do you remember?",
    "What are your plans this weekend?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Relax",
      "bg": "#FAECE7"
    },
    {
      "word": "Meet Friends",
      "bg": "#E1F5EE"
    },
    {
      "word": "I'm Going To",
      "bg": "#EEEDFE"
    },
    {
      "word": "Invite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans?",
    "Do you want to go out?"
  ],
  "student": [
    "I'm going to relax.",
    "Yes, I do!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm going to [relax]."
    },
    {
      "speaker": "B",
      "text": "I will [meet friends]."
    },
    {
      "speaker": "A",
      "text": "[Do you want to] come?"
    }
  ],
  "blanks": [
    "relax",
    "meet friends",
    "Do you want to"
  ]
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are your plans this weekend?"
    },
    {
      "speaker": "B",
      "text": "I'm going to meet friends at the park."
    },
    {
      "speaker": "A",
      "text": "Do you want to invite me?"
    },
    {
      "speaker": "B",
      "text": "Yes, I do! Come with us!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I'm going to meet my friends. We're going to the park. I invited my friend Ana. She said yes! We're going to have a great weekend.",
  "questions": [
    "What is the writer going to do?",
    "Where are they going?",
    "Who did the writer invite?"
  ]
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This weekend, I'm going to ___.",
    "I invited ___.",
    "We're going to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f3ce5b6e-5fe8-4e1b-9b7b-de7602afceee',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about weekend plans",
    "Say 'I'm going to ___'",
    "Make and answer invitations",
    "Ask about someone's plans"
  ],
  "challenge": "Tell me your full weekend plan and invite me along!"
}$json$::jsonb,
  true
);
