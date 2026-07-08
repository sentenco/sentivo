-- A2 Teens Unit 4: Free Time and Hobbies (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What I Do for Fun
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  'What I Do for Fun',
  'A2',
  'teens',
  4,
  1,
  'Describe hobbies and free time activities.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎮",
  "questions": [
    "What do you do for fun?",
    "Do you like gaming or photography?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Gaming",
      "bg": "#FAECE7"
    },
    {
      "word": "Photography",
      "bg": "#E1F5EE"
    },
    {
      "word": "Skateboarding",
      "bg": "#EEEDFE"
    },
    {
      "word": "Playlist",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in your free time?",
    "Do you enjoy it?"
  ],
  "student": [
    "I like gaming with my friends.",
    "Yes, I really enjoy it."
  ],
  "note": "Think about your real hobbies!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [gaming] after school."
    },
    {
      "speaker": "B",
      "text": "I enjoy [photography] on weekends."
    },
    {
      "speaker": "A",
      "text": "I love [skateboarding] with my friends."
    }
  ],
  "blanks": [
    "gaming",
    "photography",
    "skateboarding"
  ]
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do for fun?"
    },
    {
      "speaker": "B",
      "text": "I love photography. I take pictures of nature and my friends."
    },
    {
      "speaker": "A",
      "text": "I like gaming and making music playlists."
    },
    {
      "speaker": "B",
      "text": "That sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four teens share their hobbies. Sam loves gaming with his friends online. Mia enjoys photography and posts her pictures online. Leo likes skateboarding at the park. Ana makes music playlists for every mood.",
  "questions": [
    "What does Sam do for fun?",
    "What does Mia enjoy?",
    "What does Ana make?"
  ]
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ in my free time.",
    "I enjoy it because ___.",
    "My favorite hobby is ___."
  ]
}$json$::jsonb,
  true
),
(
  '06ecf455-9f06-43b7-9525-16c81bbf08cc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name free time activities",
    "Say what I do for fun",
    "Explain why I enjoy a hobby"
  ],
  "challenge": "Tell me about your favorite hobby!"
}$json$::jsonb,
  true
);

-- Lesson 2: How I Started My Hobby
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  'How I Started My Hobby',
  'A2',
  'teens',
  4,
  2,
  'Tell a simple past story about how a hobby started.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌱",
  "questions": [
    "How did you start your hobby?",
    "Did someone teach you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Started",
      "bg": "#FAECE7"
    },
    {
      "word": "Tried",
      "bg": "#E1F5EE"
    },
    {
      "word": "Learned",
      "bg": "#EEEDFE"
    },
    {
      "word": "Practiced",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How did you start your hobby?",
    "Who taught you?"
  ],
  "student": [
    "I started skateboarding two years ago.",
    "My cousin taught me."
  ],
  "note": "Think about how your hobby began!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [started] photography last year."
    },
    {
      "speaker": "B",
      "text": "I [tried] it first with my dad's camera."
    },
    {
      "speaker": "A",
      "text": "I [practiced] every weekend and got better."
    }
  ],
  "blanks": [
    "started",
    "tried",
    "practiced"
  ]
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How did you start your hobby?"
    },
    {
      "speaker": "B",
      "text": "I started skateboarding two years ago. My cousin tried to teach me first."
    },
    {
      "speaker": "A",
      "text": "I practiced every day and slowly learned new tricks."
    },
    {
      "speaker": "B",
      "text": "That's dedication!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I started photography two years ago. First, I tried using my dad's old camera. It was hard at the beginning, but I practiced every weekend. Slowly, I learned how to take better pictures. Now it's my favorite hobby.",
  "questions": [
    "When did the writer start photography?",
    "What did the writer try first?",
    "How did the writer improve?"
  ]
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I started ___.",
    "First, I tried ___.",
    "I practiced and ___."
  ]
}$json$::jsonb,
  true
),
(
  '0c8ddaed-8d52-435e-ac04-8b23e969d62d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: started, tried, learned, practiced",
    "Tell how a hobby began",
    "Sequence a hobby story"
  ],
  "challenge": "Tell me how you started your favorite hobby!"
}$json$::jsonb,
  true
);

-- Lesson 3: Comparing Hobbies
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  'Comparing Hobbies',
  'A2',
  'teens',
  4,
  3,
  'Compare hobbies using comparatives and opinions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Is your hobby relaxing or exciting?",
    "Is gaming cheaper than sports?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "More relaxing",
      "bg": "#FAECE7"
    },
    {
      "word": "More exciting",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheaper",
      "bg": "#EEEDFE"
    },
    {
      "word": "More expensive",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is photography more relaxing than sports?",
    "Which hobby is cheaper?"
  ],
  "student": [
    "Photography is more relaxing for me.",
    "Gaming is cheaper than skateboarding."
  ],
  "note": "Compare two hobbies you know!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Reading is [more relaxing] than gaming."
    },
    {
      "speaker": "B",
      "text": "Skateboarding is [more exciting] than reading."
    },
    {
      "speaker": "A",
      "text": "Gaming is [cheaper] than skateboarding."
    }
  ],
  "blanks": [
    "more relaxing",
    "more exciting",
    "cheaper"
  ]
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your hobby more relaxing or more exciting?"
    },
    {
      "speaker": "B",
      "text": "Photography is more relaxing for me than sports."
    },
    {
      "speaker": "A",
      "text": "Skateboarding is more exciting, but it's more expensive than gaming."
    },
    {
      "speaker": "B",
      "text": "Good point!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two friends compare hobbies. Leo says skateboarding is more exciting than reading, but it's more expensive because of the equipment. Ana says photography is more relaxing than gaming and cheaper too, since she uses her phone.",
  "questions": [
    "What does Leo say about skateboarding?",
    "Why is skateboarding more expensive?",
    "What does Ana say about photography?"
  ]
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is more relaxing than ___.",
    "___ is more expensive than ___.",
    "My hobby is ___ than ___."
  ]
}$json$::jsonb,
  true
),
(
  '865fa6f8-7bdd-4e94-b173-88b841b0f489',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare hobbies with comparatives",
    "Talk about cost and excitement",
    "Give my opinion about hobbies"
  ],
  "challenge": "Compare two hobbies and tell me which you prefer!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Hobby Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  'A Hobby Post',
  'A2',
  'teens',
  4,
  4,
  'Write a short social media post about a hobby.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📤",
  "questions": [
    "Have you posted about your hobby online?",
    "What would your caption say?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Post",
      "bg": "#FAECE7"
    },
    {
      "word": "Caption",
      "bg": "#E1F5EE"
    },
    {
      "word": "Share",
      "bg": "#EEEDFE"
    },
    {
      "word": "Passion",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you post about your hobby?",
    "Why is it your passion?"
  ],
  "student": [
    "I would post a picture with a caption.",
    "It's my passion because it makes me happy."
  ],
  "note": "Think about how you would share your hobby online!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I want to [share] my new photos."
    },
    {
      "speaker": "B",
      "text": "I'll write a fun [caption]."
    },
    {
      "speaker": "A",
      "text": "Photography is my [passion]."
    }
  ],
  "blanks": [
    "share",
    "caption",
    "passion"
  ]
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you post about your hobby?"
    },
    {
      "speaker": "B",
      "text": "I'd share a photo of my skateboard tricks with a fun caption."
    },
    {
      "speaker": "A",
      "text": "Photography is my passion because it lets me be creative."
    },
    {
      "speaker": "B",
      "text": "You should post it!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "New post: Just finished my best skate trick yet! Skateboarding is my passion because it makes me feel free and confident. I started two years ago and I've improved so much. Never stop trying new things!",
  "questions": [
    "What is the post about?",
    "Why is skateboarding the writer's passion?",
    "What advice does the post give?"
  ]
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby post: ___.",
    "___ is my passion because ___.",
    "My advice is: ___."
  ]
}$json$::jsonb,
  true
),
(
  '2172cd0f-0540-4a92-9f7b-409249f3ede5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short hobby post",
    "Use 'passion' and 'share'",
    "Write a caption for a post"
  ],
  "challenge": "Write and read me a hobby post!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  'Unit Review',
  'A2',
  'teens',
  4,
  5,
  'Review hobbies, how they started, comparisons, and a hobby post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What is your favorite hobby?",
    "How did you start it?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Started",
      "bg": "#E1F5EE"
    },
    {
      "word": "More exciting",
      "bg": "#EEEDFE"
    },
    {
      "word": "Post",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "How did you start it?"
  ],
  "student": [
    "My hobby is photography.",
    "I started it two years ago."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [hobby] is skateboarding."
    },
    {
      "speaker": "B",
      "text": "I [started] it last summer."
    },
    {
      "speaker": "A",
      "text": "It's [more exciting] than reading for me."
    }
  ],
  "blanks": [
    "hobby",
    "started",
    "more exciting"
  ]
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your hobby and how it started."
    },
    {
      "speaker": "B",
      "text": "My hobby is photography. I started it two years ago with my dad's camera."
    },
    {
      "speaker": "A",
      "text": "It's more relaxing than gaming for me, and cheaper too."
    },
    {
      "speaker": "B",
      "text": "I'd love to see your photos posted online!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite hobby is photography. I started it two years ago with my dad's old camera. It's more relaxing than gaming and it's my passion because I can be creative. Last week, I posted my best photo online with a caption about never giving up.",
  "questions": [
    "What is the writer's hobby?",
    "When did it start?",
    "What did the writer post last week?"
  ]
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite hobby is ___.",
    "I started it ___.",
    "I posted about it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'b1d484b1-c34d-472c-9843-7ca7e1c900bd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my hobby",
    "Tell how it started",
    "Compare hobbies",
    "Write a hobby post"
  ],
  "challenge": "Tell me all about your hobby, from start to now!"
}$json$::jsonb,
  true
);
