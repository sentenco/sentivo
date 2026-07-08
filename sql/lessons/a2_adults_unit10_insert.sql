-- A2 Adults Unit 10: People, Culture, and Experiences (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: People Around Me
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8eae6d72-afce-4555-a591-4e8748704a61',
  'People Around Me',
  'A2',
  'adults',
  10,
  1,
  'Describe people, relationships, and simple social roles.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
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
  '8eae6d72-afce-4555-a591-4e8748704a61',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "Who is an important person in your life?",
    "Do you know your neighbors well?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Colleague",
      "bg": "#FAECE7"
    },
    {
      "word": "Neighbor",
      "bg": "#E1F5EE"
    },
    {
      "word": "Classmate",
      "bg": "#EEEDFE"
    },
    {
      "word": "Relative",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is an important person in your life?",
    "Do you know your neighbors well?"
  ],
  "student": [
    "My colleague is very supportive.",
    "Yes, I know my neighbors well."
  ],
  "note": "Think about the people in your life!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [colleague] is very helpful."
    },
    {
      "speaker": "B",
      "text": "My [neighbor] is friendly and kind."
    },
    {
      "speaker": "A",
      "text": "I have a close [relative] nearby."
    }
  ],
  "blanks": [
    "colleague",
    "neighbor",
    "relative"
  ]
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is an important person in your life?"
    },
    {
      "speaker": "B",
      "text": "My colleague is very supportive because she always helps me at work."
    },
    {
      "speaker": "A",
      "text": "My neighbor is kind, we help each other often."
    },
    {
      "speaker": "B",
      "text": "It's nice to have good people around."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have many important people in my life. My colleague Ana is supportive and always helps at work. My neighbor Tom is friendly and we often chat outside. My cousin, a close relative, calls me every week. I feel lucky to have them.",
  "questions": [
    "Who is Ana?",
    "Who is Tom?",
    "Who calls the writer every week?"
  ]
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My colleague/neighbor/relative is ___.",
    "They are important to me because ___.",
    "I feel ___ to have them in my life."
  ]
}$json$::jsonb,
  true
),
(
  '8eae6d72-afce-4555-a591-4e8748704a61',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe people in my life",
    "Use 'colleague', 'neighbor', 'relative'",
    "Say why someone is important to me"
  ],
  "challenge": "Tell me about an important person in your life!"
}$json$::jsonb,
  true
);

-- Lesson 2: Cultural Events and Traditions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  'Cultural Events and Traditions',
  'A2',
  'adults',
  10,
  2,
  'Talk about simple cultural activities or traditions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
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
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎊",
  "questions": [
    "Do you celebrate any traditions?",
    "What is your favorite festival?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Festival",
      "bg": "#FAECE7"
    },
    {
      "word": "Tradition",
      "bg": "#E1F5EE"
    },
    {
      "word": "Celebrate",
      "bg": "#EEEDFE"
    },
    {
      "word": "Custom",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you celebrate any traditions?",
    "What is your favorite festival?"
  ],
  "student": [
    "Yes, we celebrate a big festival every year.",
    "My favorite is a harvest festival."
  ],
  "note": "Think about a tradition you know well!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We [celebrate] a big [festival] every year."
    },
    {
      "speaker": "B",
      "text": "It's an old family [tradition]."
    },
    {
      "speaker": "A",
      "text": "It's a nice local [custom]."
    }
  ],
  "blanks": [
    "celebrate",
    "tradition",
    "custom"
  ]
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you celebrate any traditions in your family?"
    },
    {
      "speaker": "B",
      "text": "Yes, we celebrate a harvest festival every autumn. It's a family tradition."
    },
    {
      "speaker": "A",
      "text": "We have a local custom of sharing food with neighbors during holidays."
    },
    {
      "speaker": "B",
      "text": "That's a lovely custom."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every autumn, my family celebrates a harvest festival. It's an old tradition passed down from my grandparents. We cook special food and share it with neighbors, which is a nice local custom. It's one of my favorite times of year.",
  "questions": [
    "What festival does the family celebrate?",
    "Where did the tradition come from?",
    "What custom do they follow?"
  ]
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family celebrates ___.",
    "It's a tradition because ___.",
    "We usually ___."
  ]
}$json$::jsonb,
  true
),
(
  'c2850d3f-2710-4690-b29e-e044b64086c7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about cultural events and traditions",
    "Use 'festival', 'tradition', 'custom'",
    "Describe a family or local tradition"
  ],
  "challenge": "Tell me about a tradition or festival you celebrate!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Memorable Event
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  'A Memorable Event',
  'A2',
  'adults',
  10,
  3,
  'Describe a simple past personal or cultural event.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
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
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎇",
  "questions": [
    "What was a memorable event for you?",
    "Did you celebrate something recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Attended",
      "bg": "#FAECE7"
    },
    {
      "word": "Celebrated",
      "bg": "#E1F5EE"
    },
    {
      "word": "Enjoyed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Memorable",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What was a memorable event for you?",
    "What did you enjoy most?"
  ],
  "student": [
    "I attended my cousin's wedding.",
    "I enjoyed the music the most."
  ],
  "note": "Think about a memorable event you attended!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [attended] a wedding last month."
    },
    {
      "speaker": "B",
      "text": "We [celebrated] all night."
    },
    {
      "speaker": "A",
      "text": "I [enjoyed] the music the most."
    }
  ],
  "blanks": [
    "attended",
    "celebrated",
    "enjoyed"
  ]
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a memorable event you attended."
    },
    {
      "speaker": "B",
      "text": "First, I attended my cousin's wedding. Then, we celebrated with a big dinner."
    },
    {
      "speaker": "A",
      "text": "After that, everyone danced. Finally, I enjoyed the fireworks at the end."
    },
    {
      "speaker": "B",
      "text": "That sounds truly memorable!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last month, I attended my cousin's wedding. First, we celebrated with a big family dinner. Then, everyone danced late into the night. I enjoyed the music the most. It was one of the most memorable events of my year.",
  "questions": [
    "What event did the writer attend?",
    "What happened first?",
    "What did the writer enjoy most?"
  ]
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I attended ___.",
    "We celebrated by ___.",
    "I enjoyed ___ the most."
  ]
}$json$::jsonb,
  true
),
(
  '671d6f85-a1d4-41f9-80a9-94a9f6413840',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: attended, celebrated, enjoyed",
    "Tell a memorable event story",
    "Sequence a past event"
  ],
  "challenge": "Tell me about a memorable event you attended!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Experience Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  'A Short Experience Post',
  'A2',
  'adults',
  10,
  4,
  'Write a short post or message about an experience or event.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
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
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📝",
  "questions": [
    "Have you posted about an experience online?",
    "What made it special?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Experience",
      "bg": "#FAECE7"
    },
    {
      "word": "Unforgettable",
      "bg": "#E1F5EE"
    },
    {
      "word": "Grateful",
      "bg": "#EEEDFE"
    },
    {
      "word": "Shared",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What experience would you post about?",
    "What made it special?"
  ],
  "student": [
    "I'd post about my trip.",
    "It was special because I was with family."
  ],
  "note": "Think about an experience you'd share!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "That was an [unforgettable] [experience]."
    },
    {
      "speaker": "B",
      "text": "I feel so [grateful]."
    },
    {
      "speaker": "A",
      "text": "I [shared] the moment with family."
    }
  ],
  "blanks": [
    "experience",
    "grateful",
    "shared"
  ]
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about an experience you'd like to share."
    },
    {
      "speaker": "B",
      "text": "Last month's wedding was an unforgettable experience. I shared it with my whole family."
    },
    {
      "speaker": "A",
      "text": "I feel grateful I was there for such a special moment."
    },
    {
      "speaker": "B",
      "text": "That's a beautiful way to describe it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Sharing a quick post: last month I attended my cousin's wedding, an unforgettable experience. I was with my whole family and we celebrated together. I feel so grateful for that memory. Thank you all for the wonderful evening!",
  "questions": [
    "What experience is the post about?",
    "Who was the writer with?",
    "How does the writer feel?"
  ]
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want to share an experience: ___.",
    "It was unforgettable because ___.",
    "I feel grateful because ___."
  ]
}$json$::jsonb,
  true
),
(
  'c9027f8d-3f80-4d1d-bd5c-8cf0a57636da',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short experience post",
    "Use 'unforgettable' and 'grateful'",
    "Describe a feeling about an event"
  ],
  "challenge": "Write and read me a short experience post!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  'Unit Review',
  'A2',
  'adults',
  10,
  5,
  'Review people descriptions, traditions, a memorable event, and an experience post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
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
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌍",
  "questions": [
    "Who is important in your life?",
    "What tradition do you celebrate?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "People",
      "bg": "#FAECE7"
    },
    {
      "word": "Tradition",
      "bg": "#E1F5EE"
    },
    {
      "word": "Attended",
      "bg": "#EEEDFE"
    },
    {
      "word": "Experience",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is important in your life?",
    "What tradition do you celebrate?"
  ],
  "student": [
    "My neighbor is important to me.",
    "We celebrate a harvest festival."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The [people] around me matter a lot."
    },
    {
      "speaker": "B",
      "text": "We celebrate an old [tradition]."
    },
    {
      "speaker": "A",
      "text": "I [attended] a great event last month."
    }
  ],
  "blanks": [
    "people",
    "tradition",
    "attended"
  ]
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about the people and traditions in your life."
    },
    {
      "speaker": "B",
      "text": "The people around me matter a lot, especially my neighbors and colleagues."
    },
    {
      "speaker": "A",
      "text": "We celebrate a family tradition every year. Last month, I attended a memorable wedding."
    },
    {
      "speaker": "B",
      "text": "I'd love to hear more about that experience!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The people around me matter a lot, especially my colleagues and neighbors. My family celebrates a harvest tradition every year. Last month, I attended my cousin's wedding, an unforgettable experience. I shared a post about it because I felt so grateful.",
  "questions": [
    "Who matters to the writer?",
    "What tradition does the family celebrate?",
    "What experience did the writer share?"
  ]
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The people around me include ___.",
    "My family celebrates ___.",
    "A memorable experience for me was ___."
  ]
}$json$::jsonb,
  true
),
(
  'e66eca9b-cb18-4f5f-8097-89f407817571',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe people in my life",
    "Talk about traditions",
    "Tell a memorable event story",
    "Write an experience post"
  ],
  "challenge": "Tell me all about the people and experiences in your life!"
}$json$::jsonb,
  true
);
