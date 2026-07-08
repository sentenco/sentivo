-- A2 Teens Unit 10: Entertainment and Events (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What Do You Watch or Listen To?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  'What Do You Watch or Listen To?',
  'A2',
  'teens',
  10,
  1,
  'Talk about entertainment preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
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
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎧",
  "questions": [
    "What show or series are you watching?",
    "What genre of music do you like?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Series",
      "bg": "#FAECE7"
    },
    {
      "word": "Playlist",
      "bg": "#E1F5EE"
    },
    {
      "word": "Genre",
      "bg": "#EEEDFE"
    },
    {
      "word": "Podcast",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What series are you watching?",
    "What genre do you like?"
  ],
  "student": [
    "I'm watching a mystery series.",
    "I like pop and hip-hop."
  ],
  "note": "Think about what you're watching or listening to!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm watching a new [series]."
    },
    {
      "speaker": "B",
      "text": "I made a new [playlist]."
    },
    {
      "speaker": "A",
      "text": "My favorite [genre] is pop."
    }
  ],
  "blanks": [
    "series",
    "playlist",
    "genre"
  ]
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you watching these days?"
    },
    {
      "speaker": "B",
      "text": "I'm watching a mystery series. What about you?"
    },
    {
      "speaker": "A",
      "text": "I made a new playlist and I'm listening to a podcast about music."
    },
    {
      "speaker": "B",
      "text": "Send me the playlist!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four teens share what they enjoy. Sam is watching a new mystery series. Mia made a playlist of her favorite pop songs. Leo listens to a comedy podcast every morning. Ana loves hip-hop and rock music.",
  "questions": [
    "What is Sam watching?",
    "What did Mia make?",
    "What does Leo listen to?"
  ]
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm watching/listening to ___.",
    "My favorite genre is ___.",
    "I recommend ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'f1c0d795-e018-4319-8971-72ef1fe5f2d9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about entertainment preferences",
    "Use series/playlist/genre/podcast",
    "Recommend something I enjoy"
  ],
  "challenge": "Tell me what you're watching or listening to right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Event Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  'Event Plans',
  'A2',
  'teens',
  10,
  2,
  'Make plans for an event using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
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
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎤",
  "questions": [
    "Are you going to a concert or event soon?",
    "What event would you love to attend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Concert",
      "bg": "#FAECE7"
    },
    {
      "word": "Tickets",
      "bg": "#E1F5EE"
    },
    {
      "word": "Line up",
      "bg": "#EEEDFE"
    },
    {
      "word": "Excited",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you going to the concert?",
    "Do you have tickets?"
  ],
  "student": [
    "Yes, I'm going with my friends.",
    "We bought tickets last week."
  ],
  "note": "Think about an event you're excited about!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm going to the [concert] this weekend."
    },
    {
      "speaker": "B",
      "text": "We bought [tickets] last week."
    },
    {
      "speaker": "A",
      "text": "I'm so [excited] for it!"
    }
  ],
  "blanks": [
    "concert",
    "tickets",
    "excited"
  ]
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you going to the concert this weekend?"
    },
    {
      "speaker": "B",
      "text": "Yes! We bought tickets last week and I'm so excited."
    },
    {
      "speaker": "A",
      "text": "What time is the line up?"
    },
    {
      "speaker": "B",
      "text": "It starts at 7pm, we're getting there early!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I'm going to my first concert! We bought tickets a month ago. The line up starts at 7pm and my favorite band plays at 9pm. I'm so excited I can barely wait.",
  "questions": [
    "What event is the writer going to?",
    "When did they buy tickets?",
    "What time does the favorite band play?"
  ]
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm going to ___ this weekend.",
    "I bought tickets ___.",
    "I'm excited because ___."
  ]
}$json$::jsonb,
  true
),
(
  '678925fe-09ac-4aa2-ae84-fadaf95a12f9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about event plans",
    "Use 'going to' for future events",
    "Express excitement"
  ],
  "challenge": "Tell me about an event you're excited to attend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Better Than…
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  'Better Than…',
  'A2',
  'teens',
  10,
  3,
  'Compare entertainment options using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
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
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎬",
  "questions": [
    "Is this show better than the last one?",
    "What is funnier, comedy or drama?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Funnier",
      "bg": "#FAECE7"
    },
    {
      "word": "More thrilling",
      "bg": "#E1F5EE"
    },
    {
      "word": "Better than",
      "bg": "#EEEDFE"
    },
    {
      "word": "Worse than",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this movie better than the last one?",
    "What is funnier for you?"
  ],
  "student": [
    "Yes, it's much better.",
    "Comedy is funnier for me."
  ],
  "note": "Compare two shows, movies, or songs!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This new series is [funnier] than the old one."
    },
    {
      "speaker": "B",
      "text": "The movie was [more thrilling] than I expected."
    },
    {
      "speaker": "A",
      "text": "This album is [better than] the last one."
    }
  ],
  "blanks": [
    "funnier",
    "more thrilling",
    "better than"
  ]
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is the new season better than the last one?"
    },
    {
      "speaker": "B",
      "text": "Yes, it's funnier and more thrilling than before."
    },
    {
      "speaker": "A",
      "text": "I think the movie was worse than the book, though."
    },
    {
      "speaker": "B",
      "text": "Books are usually better!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A review: the new season is funnier and more thrilling than the last one. The characters are better developed. However, some fans say the movie version was worse than the book because it left out important scenes.",
  "questions": [
    "Is the new season funnier or less funny?",
    "What do some fans say about the movie?",
    "Why do fans prefer the book?"
  ]
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is funnier than ___.",
    "___ was better/worse than ___.",
    "In my opinion, ___ is more thrilling."
  ]
}$json$::jsonb,
  true
),
(
  'b35e77c2-12c9-4c3c-ae0e-47f705cb26d4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare entertainment using comparatives",
    "Use 'better than' and 'worse than'",
    "Give my opinion"
  ],
  "challenge": "Compare two shows or movies you know!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Review or Recommendation
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  'A Review or Recommendation',
  'A2',
  'teens',
  10,
  4,
  'Write a short recommendation for a show, song, or event.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
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
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📣",
  "questions": [
    "What show would you recommend to everyone?",
    "Is there something you'd tell people to skip?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Must-watch",
      "bg": "#FAECE7"
    },
    {
      "word": "Highly recommend",
      "bg": "#E1F5EE"
    },
    {
      "word": "Skip",
      "bg": "#EEEDFE"
    },
    {
      "word": "Worth watching",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you recommend this show?",
    "Is it worth watching?"
  ],
  "student": [
    "Yes, it's a must-watch.",
    "Definitely worth watching."
  ],
  "note": "Think of a show or song you'd recommend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This show is a [must-watch]."
    },
    {
      "speaker": "B",
      "text": "I [highly recommend] this album."
    },
    {
      "speaker": "A",
      "text": "Honestly, you can [skip] the sequel."
    }
  ],
  "blanks": [
    "must-watch",
    "highly recommend",
    "skip"
  ]
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What show would you recommend?"
    },
    {
      "speaker": "B",
      "text": "I highly recommend this series, it's a must-watch."
    },
    {
      "speaker": "A",
      "text": "What about the second season?"
    },
    {
      "speaker": "B",
      "text": "Honestly, you can skip it. It's not as worth watching."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My recommendation this week: this new series is a must-watch, definitely worth your time. I highly recommend the soundtrack too. However, I'd say you can skip the movie spin-off, it's not as good as the show.",
  "questions": [
    "What does the writer recommend?",
    "What else do they highly recommend?",
    "What do they say to skip?"
  ]
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I highly recommend ___.",
    "It's worth watching because ___.",
    "You can skip ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'cb260ccc-0b3b-431e-a99f-f0d348ab255d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short recommendation",
    "Use 'must-watch' and 'worth watching'",
    "Give balanced opinions"
  ],
  "challenge": "Recommend something to me and explain why!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  'Unit Review',
  'A2',
  'teens',
  10,
  5,
  'Review entertainment preferences, event plans, comparisons, and a recommendation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
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
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍿",
  "questions": [
    "What are you watching these days?",
    "What event are you excited about?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Series",
      "bg": "#FAECE7"
    },
    {
      "word": "Concert",
      "bg": "#E1F5EE"
    },
    {
      "word": "Better than",
      "bg": "#EEEDFE"
    },
    {
      "word": "Recommend",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you watching?",
    "What would you recommend?"
  ],
  "student": [
    "I'm watching a new series.",
    "I recommend the new album."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm watching a new [series]."
    },
    {
      "speaker": "B",
      "text": "I'm going to a [concert] this weekend."
    },
    {
      "speaker": "A",
      "text": "This show is [better than] the last one."
    }
  ],
  "blanks": [
    "series",
    "concert",
    "better than"
  ]
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me what you're into these days."
    },
    {
      "speaker": "B",
      "text": "I'm watching a new series, it's better than the last one. I highly recommend it."
    },
    {
      "speaker": "A",
      "text": "I'm going to a concert this weekend, I'm so excited!"
    },
    {
      "speaker": "B",
      "text": "Have an amazing time!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "These days, I'm watching a new mystery series. It's funnier and better than the last one, so I highly recommend it. This weekend, I'm going to a concert with my friends. We bought tickets last month and I'm so excited!",
  "questions": [
    "What is the writer watching?",
    "What does the writer recommend?",
    "What is happening this weekend?"
  ]
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "These days, I'm watching/listening to ___.",
    "I recommend ___ because ___.",
    "This weekend, I'm going to ___."
  ]
}$json$::jsonb,
  true
),
(
  '3b4d9381-825d-418d-94c9-95726537f6ab',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about entertainment preferences",
    "Make event plans",
    "Compare shows or songs",
    "Write a recommendation"
  ],
  "challenge": "Tell me all about your entertainment picks this month!"
}$json$::jsonb,
  true
);
