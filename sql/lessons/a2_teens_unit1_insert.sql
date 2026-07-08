-- A2 Teens Unit 1: Identity and Personal Style (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Style, My Choice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  'My Style, My Choice',
  'A2',
  'teens',
  1,
  1,
  'Describe personal style and give reasons for clothing and style choices.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
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
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👟",
  "questions": [
    "How would you describe your style?",
    "Is your style casual or sporty?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Casual",
      "bg": "#FAECE7"
    },
    {
      "word": "Sporty",
      "bg": "#E1F5EE"
    },
    {
      "word": "Neat",
      "bg": "#EEEDFE"
    },
    {
      "word": "Colorful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How would you describe your style?",
    "Why do you like that style?"
  ],
  "student": [
    "My style is casual and comfortable.",
    "I like it because it feels like me."
  ],
  "note": "Think about your own style before you answer!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My style is [casual] because it's comfortable."
    },
    {
      "speaker": "B",
      "text": "I like a [sporty] look for school."
    },
    {
      "speaker": "A",
      "text": "She always looks [neat] and put-together."
    }
  ],
  "blanks": [
    "casual",
    "sporty",
    "neat"
  ]
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How would you describe your style?"
    },
    {
      "speaker": "B",
      "text": "My style is casual and colorful. I like it because it feels like me."
    },
    {
      "speaker": "A",
      "text": "I prefer a neat, simple look, but sometimes I go sporty."
    },
    {
      "speaker": "B",
      "text": "That sounds like you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two teens post about their style. Jess writes: my style is colorful and a bit sporty because I'm always active. Marco writes: my style is neat and simple because I don't like fuss. Different styles, same confidence!",
  "questions": [
    "What is Jess's style?",
    "Why does Jess like that style?",
    "What is Marco's style?"
  ]
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My style is ___ because ___.",
    "I usually wear ___.",
    "My style fits me because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ed145f40-1a1b-414e-a387-6485b9f75fb3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my personal style",
    "Give a reason with 'because'",
    "Talk about what I usually wear"
  ],
  "challenge": "Describe your style and explain why it fits you!"
}$json$::jsonb,
  true
);

-- Lesson 2: People I Look Up To
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '41569997-af1b-4a64-99f7-763d7d855995',
  'People I Look Up To',
  'A2',
  'teens',
  1,
  2,
  'Describe a person they admire using appearance and personality language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '41569997-af1b-4a64-99f7-763d7d855995',
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
  '41569997-af1b-4a64-99f7-763d7d855995',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "Who do you look up to?",
    "What makes that person special?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hardworking",
      "bg": "#FAECE7"
    },
    {
      "word": "Creative",
      "bg": "#E1F5EE"
    },
    {
      "word": "Confident",
      "bg": "#EEEDFE"
    },
    {
      "word": "Kind",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who do you admire?",
    "Why do you admire them?"
  ],
  "student": [
    "I admire my older sister.",
    "I admire her because she is hardworking."
  ],
  "note": "Think of someone you really admire!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I admire my coach because she is [hardworking]."
    },
    {
      "speaker": "B",
      "text": "My favorite artist is very [creative]."
    },
    {
      "speaker": "A",
      "text": "I look up to people who are [confident]."
    }
  ],
  "blanks": [
    "hardworking",
    "creative",
    "confident"
  ]
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who do you look up to?"
    },
    {
      "speaker": "B",
      "text": "I admire my older brother. He is hardworking and kind."
    },
    {
      "speaker": "A",
      "text": "I admire a singer I follow because she is confident and creative."
    },
    {
      "speaker": "B",
      "text": "That's a great role model!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two teens talk about people they admire. Sara admires her grandmother because she is kind and hardworking. Tom admires a YouTuber because he is creative and always positive. Both say these people inspire them every day.",
  "questions": [
    "Who does Sara admire?",
    "Why does Sara admire her?",
    "Who does Tom admire and why?"
  ]
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I admire ___.",
    "I admire them because ___.",
    "They inspire me to ___."
  ]
}$json$::jsonb,
  true
),
(
  '41569997-af1b-4a64-99f7-763d7d855995',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe someone I admire",
    "Use personality adjectives",
    "Give a reason with 'because'"
  ],
  "challenge": "Tell me about someone you look up to and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: Same or Different?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  'Same or Different?',
  'A2',
  'teens',
  1,
  3,
  'Compare people and styles using basic comparative language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
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
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔀",
  "questions": [
    "Are you and your best friend similar or different?",
    "Who is quieter, you or your friend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Taller",
      "bg": "#FAECE7"
    },
    {
      "word": "Quieter",
      "bg": "#E1F5EE"
    },
    {
      "word": "More colorful",
      "bg": "#EEEDFE"
    },
    {
      "word": "Less sporty",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you taller than your friend?",
    "Who is more colorful in style?"
  ],
  "student": [
    "I'm taller than my friend.",
    "My friend is more colorful than me."
  ],
  "note": "Compare yourself with a friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [taller] than my best friend."
    },
    {
      "speaker": "B",
      "text": "My friend is [quieter] than me."
    },
    {
      "speaker": "A",
      "text": "Her style is [more colorful] than mine."
    }
  ],
  "blanks": [
    "taller",
    "quieter",
    "more colorful"
  ]
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you and your best friend similar or different?"
    },
    {
      "speaker": "B",
      "text": "We are different. I'm quieter, but she is more confident."
    },
    {
      "speaker": "A",
      "text": "My style is less sporty than my brother's."
    },
    {
      "speaker": "B",
      "text": "It's cool to be different!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia and her friend Leo have different styles. Mia is quieter and her style is neat and simple. Leo is more confident and his style is colorful and sporty. They are different, but they are still best friends.",
  "questions": [
    "Is Mia quieter or louder than Leo?",
    "What is Leo's style like?",
    "Are Mia and Leo still friends?"
  ]
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ than my friend.",
    "My style is ___ than theirs.",
    "We are different, but ___."
  ]
}$json$::jsonb,
  true
),
(
  'fb4d95ee-1a1a-435e-9f41-7189bbacba7d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use comparatives for people",
    "Compare styles and personalities",
    "Say how I'm different from a friend"
  ],
  "challenge": "Compare yourself with a friend or sibling!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Profile Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  'My Profile Post',
  'A2',
  'teens',
  1,
  4,
  'Write a short personal profile post with simple connected sentences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
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
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "What would you write in your bio?",
    "What are your interests?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Interests",
      "bg": "#FAECE7"
    },
    {
      "word": "Personality",
      "bg": "#E1F5EE"
    },
    {
      "word": "Profile",
      "bg": "#EEEDFE"
    },
    {
      "word": "Bio",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your interests?",
    "How would you describe your personality?"
  ],
  "student": [
    "My interests are music and sports.",
    "My personality is friendly and funny."
  ],
  "note": "Think about what makes a great profile!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [interests] are music and gaming."
    },
    {
      "speaker": "B",
      "text": "My [personality] is friendly and curious."
    },
    {
      "speaker": "A",
      "text": "This is my new [profile] post."
    }
  ],
  "blanks": [
    "interests",
    "personality",
    "profile"
  ]
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would your profile post say?"
    },
    {
      "speaker": "B",
      "text": "My interests are music and photography, and I'm friendly but a bit shy."
    },
    {
      "speaker": "A",
      "text": "Mine would say I love sports and I'm confident and funny."
    },
    {
      "speaker": "B",
      "text": "Sounds like a great profile!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Ana! My interests are music and drawing. My style is colorful and casual. I'm friendly, but sometimes shy. I love spending time with my friends because they make me laugh. That's a bit about me!",
  "questions": [
    "What are Ana's interests?",
    "What is Ana's style?",
    "Why does Ana love spending time with friends?"
  ]
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My interests are ___ and ___.",
    "My personality is ___.",
    "I love ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '5a79e39b-f4f3-457b-8e6f-f8b90c359475',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short profile post",
    "Describe interests and personality",
    "Connect ideas with and/but/because"
  ],
  "challenge": "Read me your profile post!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  'Unit Review',
  'A2',
  'teens',
  1,
  5,
  'Review identity, style comparisons, and a teen profile.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
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
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🪞",
  "questions": [
    "How would you describe your style?",
    "Who do you admire?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Style",
      "bg": "#FAECE7"
    },
    {
      "word": "Admire",
      "bg": "#E1F5EE"
    },
    {
      "word": "Different",
      "bg": "#EEEDFE"
    },
    {
      "word": "Profile",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your style?",
    "Who inspires you?"
  ],
  "student": [
    "My style is casual and colorful.",
    "My sister inspires me because she is hardworking."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [style] is casual and neat."
    },
    {
      "speaker": "B",
      "text": "I [admire] my coach because she is confident."
    },
    {
      "speaker": "A",
      "text": "My friend is [different] from me, but we get along."
    }
  ],
  "blanks": [
    "style",
    "admire",
    "different"
  ]
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your style and who you admire."
    },
    {
      "speaker": "B",
      "text": "My style is sporty and colorful. I admire my brother because he's hardworking."
    },
    {
      "speaker": "A",
      "text": "We're different, but we both love music."
    },
    {
      "speaker": "B",
      "text": "That's what makes friendship interesting!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Leo. My style is sporty and casual because I love being active. I admire my dad because he is hardworking and kind. My best friend has a different style, more colorful and neat, but we still have a lot in common.",
  "questions": [
    "What is Leo's style?",
    "Who does Leo admire?",
    "Is Leo's friend's style the same or different?"
  ]
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My style is ___ because ___.",
    "I admire ___ because ___.",
    "My friend and I are ___."
  ]
}$json$::jsonb,
  true
),
(
  '45e51fb1-e051-41fb-bc0e-ecf41e4721eb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my style",
    "Talk about someone I admire",
    "Compare myself with others",
    "Write a profile post"
  ],
  "challenge": "Tell me all about your identity and style!"
}$json$::jsonb,
  true
);
