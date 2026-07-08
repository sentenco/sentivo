-- A2 Adults Unit 9: Leisure, Community, and Free Time (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What I Do in My Free Time
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  'What I Do in My Free Time',
  'A2',
  'adults',
  9,
  1,
  'Talk about leisure activities and simple preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
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
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚶",
  "questions": [
    "What do you do in your free time?",
    "Do you volunteer or take classes?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Volunteer",
      "bg": "#FAECE7"
    },
    {
      "word": "Meet friends",
      "bg": "#E1F5EE"
    },
    {
      "word": "Take a class",
      "bg": "#EEEDFE"
    },
    {
      "word": "Walk",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in your free time?",
    "Do you meet friends often?"
  ],
  "student": [
    "I like to walk and read.",
    "Yes, I meet friends every weekend."
  ],
  "note": "Think about your real free-time activities!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like to [walk] in the park."
    },
    {
      "speaker": "B",
      "text": "I [meet friends] on Sundays."
    },
    {
      "speaker": "A",
      "text": "I want to [take a class] in cooking."
    }
  ],
  "blanks": [
    "walk",
    "meet friends",
    "take a class"
  ]
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do in your free time?"
    },
    {
      "speaker": "B",
      "text": "I like to walk and meet friends on weekends. What about you?"
    },
    {
      "speaker": "A",
      "text": "I volunteer at a local shelter and I want to take a class in painting."
    },
    {
      "speaker": "B",
      "text": "That sounds meaningful."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two adults share their free-time habits. Laura likes to walk in the park and meet friends for coffee on weekends. Diego volunteers at a community center and is taking a photography class. Both enjoy staying active in their free time.",
  "questions": [
    "What does Laura do in her free time?",
    "What does Diego do?",
    "What do they both enjoy?"
  ]
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my free time, I like to ___.",
    "I want to spend more time ___.",
    "My favorite free-time activity is ___."
  ]
}$json$::jsonb,
  true
),
(
  'b524d9cd-cefe-4ac8-8c95-79baf44cbcae',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about free-time activities",
    "Use 'volunteer', 'meet friends', 'take a class'",
    "Say what I want more time for"
  ],
  "challenge": "Tell me what you do in your free time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Last Weekend
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  'Last Weekend',
  'A2',
  'adults',
  9,
  2,
  'Describe a simple past weekend event using sequence language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
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
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What did you do last weekend?",
    "Did you cook anything special?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Visited",
      "bg": "#FAECE7"
    },
    {
      "word": "Met",
      "bg": "#E1F5EE"
    },
    {
      "word": "Watched",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cooked",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do last weekend?",
    "Did you meet anyone?"
  ],
  "student": [
    "I visited my parents.",
    "Yes, I met an old friend."
  ],
  "note": "Think about your last weekend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last weekend, I [visited] my parents."
    },
    {
      "speaker": "B",
      "text": "I [met] an old friend."
    },
    {
      "speaker": "A",
      "text": "I [cooked] a big dinner."
    }
  ],
  "blanks": [
    "visited",
    "met",
    "cooked"
  ]
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do last weekend?"
    },
    {
      "speaker": "B",
      "text": "First, I visited my parents. Then, I met an old friend for coffee."
    },
    {
      "speaker": "A",
      "text": "After that, I cooked a big dinner and watched a movie."
    },
    {
      "speaker": "B",
      "text": "Sounds like a nice, full weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last weekend was relaxing. First, I visited my parents in the morning. Then, I met an old friend for lunch. After that, I cooked dinner for my family. Finally, we watched a movie together in the evening.",
  "questions": [
    "Who did the writer visit first?",
    "Who did they meet?",
    "What did they do in the evening?"
  ]
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last weekend, I visited ___.",
    "I met ___.",
    "Finally, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '25b0e118-e0fe-46be-b287-3f3a99c9fb2e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: visited, met, watched, cooked",
    "Tell a weekend story in order",
    "Describe a recent weekend"
  ],
  "challenge": "Tell me about your last weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: More Relaxing or More Active?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  'More Relaxing or More Active?',
  'A2',
  'adults',
  9,
  3,
  'Compare leisure options using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
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
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Do you prefer relaxing or active free time?",
    "Is reading more relaxing than sports for you?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
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
      "word": "More social",
      "bg": "#E1F5EE"
    },
    {
      "word": "Healthier",
      "bg": "#EEEDFE"
    },
    {
      "word": "Less stressful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is walking more relaxing than the gym?",
    "Which is more social for you?"
  ],
  "student": [
    "Yes, walking is more relaxing.",
    "Meeting friends is more social."
  ],
  "note": "Compare two leisure activities!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Reading is [more relaxing] than the gym."
    },
    {
      "speaker": "B",
      "text": "Meeting friends is [more social]."
    },
    {
      "speaker": "A",
      "text": "Walking is [healthier] than watching TV."
    }
  ],
  "blanks": [
    "more relaxing",
    "more social",
    "healthier"
  ]
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer relaxing or active free time?"
    },
    {
      "speaker": "B",
      "text": "I prefer relaxing activities, reading is more relaxing than sports for me."
    },
    {
      "speaker": "A",
      "text": "I prefer active things, they're healthier and less stressful for my mind."
    },
    {
      "speaker": "B",
      "text": "We balance each other out!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two colleagues compare free-time choices. Sofia says reading is more relaxing than going to the gym after a long day. Marco says exercise is healthier and less stressful for him because it clears his mind. Both agree free time should fit your needs.",
  "questions": [
    "What does Sofia find more relaxing?",
    "Why does Marco prefer exercise?",
    "What do they agree on?"
  ]
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is more relaxing than ___.",
    "___ is healthier for me because ___.",
    "After work, I prefer ___."
  ]
}$json$::jsonb,
  true
),
(
  '23e56182-25f4-4e3d-b3f2-d8ce0e1ecadc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare leisure activities",
    "Use comparatives for free time",
    "Say what's best for relaxing"
  ],
  "challenge": "Tell me if you prefer relaxing or active free time, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Community Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  'A Community Post',
  'A2',
  'adults',
  9,
  4,
  'Write a short post or message about a free-time activity or local event.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
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
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📣",
  "questions": [
    "Have you posted about a local event before?",
    "Do you like community events?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Local event",
      "bg": "#FAECE7"
    },
    {
      "word": "Join us",
      "bg": "#E1F5EE"
    },
    {
      "word": "Everyone welcome",
      "bg": "#EEEDFE"
    },
    {
      "word": "Details",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the local event about?",
    "Is everyone welcome?"
  ],
  "student": [
    "It's a community walk on Saturday.",
    "Yes, everyone is welcome."
  ],
  "note": "Think about a local event you'd post about!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There's a [local event] this Saturday."
    },
    {
      "speaker": "B",
      "text": "Please [join us] at the park."
    },
    {
      "speaker": "A",
      "text": "[Everyone welcome], bring a friend!"
    }
  ],
  "blanks": [
    "local event",
    "join us",
    "everyone welcome"
  ]
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Have you heard about the local event this weekend?"
    },
    {
      "speaker": "B",
      "text": "No, tell me more."
    },
    {
      "speaker": "A",
      "text": "It's a community walk in the park on Saturday morning. Everyone welcome, join us!"
    },
    {
      "speaker": "B",
      "text": "Sounds fun, I'll be there."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Community post: Join us for a free morning walk in the park this Saturday at 9am! Everyone welcome, bring water and comfortable shoes. It's a great way to meet neighbors and stay active. See you there!",
  "questions": [
    "What is the event?",
    "When is it?",
    "Who is welcome?"
  ]
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Join us for ___.",
    "It's on ___.",
    "Everyone welcome, ___."
  ]
}$json$::jsonb,
  true
),
(
  '7e75ac79-b4c3-40df-a1bf-c7abf76b6734',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short community post",
    "Use 'join us' and 'everyone welcome'",
    "Mention time, place, and details"
  ],
  "challenge": "Write a short post about a local event!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6e075a23-4058-4284-8d4c-b10770099c50',
  'Unit Review',
  'A2',
  'adults',
  9,
  5,
  'Review leisure habits, a past weekend, comparisons, and a community post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
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
  '6e075a23-4058-4284-8d4c-b10770099c50',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌿",
  "questions": [
    "What do you do in your free time?",
    "What did you do last weekend?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Free time",
      "bg": "#FAECE7"
    },
    {
      "word": "Visited",
      "bg": "#E1F5EE"
    },
    {
      "word": "More relaxing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Local event",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in your free time?",
    "What did you do last weekend?"
  ],
  "student": [
    "I like to walk and read.",
    "I visited family and cooked dinner."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In my [free time], I like to walk."
    },
    {
      "speaker": "B",
      "text": "Last weekend, I [visited] my parents."
    },
    {
      "speaker": "A",
      "text": "Reading is [more relaxing] than TV for me."
    }
  ],
  "blanks": [
    "free time",
    "visited",
    "more relaxing"
  ]
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your free time and last weekend."
    },
    {
      "speaker": "B",
      "text": "In my free time, I like to walk. Last weekend, I visited my parents and cooked dinner."
    },
    {
      "speaker": "A",
      "text": "I think reading is more relaxing than watching TV."
    },
    {
      "speaker": "B",
      "text": "I should post about the community walk this weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In my free time, I like to walk and meet friends. Last weekend, I visited my parents, cooked a big dinner, and watched a movie together. I find walking more relaxing than watching TV. I also saw a post about a local community walk and I'm going to join.",
  "questions": [
    "What does the writer like to do?",
    "What happened last weekend?",
    "What will the writer do next?"
  ]
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my free time, I ___.",
    "Last weekend, I ___.",
    "I think ___ is more relaxing than ___."
  ]
}$json$::jsonb,
  true
),
(
  '6e075a23-4058-4284-8d4c-b10770099c50',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about free-time habits",
    "Tell a past weekend story",
    "Compare leisure options",
    "Write a community post"
  ],
  "challenge": "Tell me all about your free time and community life!"
}$json$::jsonb,
  true
);
