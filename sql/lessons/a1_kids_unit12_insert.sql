-- A1 Kids Unit 12: My Feelings (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Feelings Vocabulary
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  'Feelings Vocabulary',
  'A1',
  'kids',
  12,
  1,
  'Recognize and name basic feelings.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "How do you feel today?",
    "What makes you happy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7"
    },
    {
      "word": "Sad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tired",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hungry",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Are you happy?"
  ],
  "student": [
    "I feel happy.",
    "Yes, I am happy!"
  ],
  "note": "Show the feeling with your face!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "I feel [tired]."
    },
    {
      "speaker": "A",
      "text": "I feel [hungry]."
    }
  ],
  "blanks": [
    "happy",
    "tired",
    "hungry"
  ]
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel?"
    },
    {
      "speaker": "B",
      "text": "I feel sad today."
    },
    {
      "speaker": "A",
      "text": "Why are you sad?"
    },
    {
      "speaker": "B",
      "text": "I am tired!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel happy. Sometimes I feel sad. Sometimes I feel tired. Sometimes I feel hungry. Everyone has feelings!",
  "questions": [
    "How does the writer feel today?",
    "Do people feel sad sometimes?",
    "Does everyone have feelings?"
  ]
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "When I am tired, I ___.",
    "I feel happy when ___."
  ]
}$json$::jsonb,
  true
),
(
  '91207b60-a7ad-4d78-8a83-75fef65afcac',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four feelings",
    "Say 'I feel ___'",
    "Show feelings with my face"
  ],
  "challenge": "Tell me how you feel right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: I Feel...
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  'I Feel...',
  'A1',
  'kids',
  12,
  2,
  'Use ''I feel...'' to express a simple emotion.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥳",
  "questions": [
    "How do you feel today?",
    "Do you feel excited?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Excited",
      "bg": "#FAECE7"
    },
    {
      "word": "Scared",
      "bg": "#E1F5EE"
    },
    {
      "word": "Thirsty",
      "bg": "#EEEDFE"
    },
    {
      "word": "Feel",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Do you feel scared?"
  ],
  "student": [
    "I feel excited!",
    "No, I don't feel scared."
  ],
  "note": "Think about how you really feel today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [feel] excited."
    },
    {
      "speaker": "B",
      "text": "I feel [scared]."
    },
    {
      "speaker": "A",
      "text": "I feel [thirsty]."
    }
  ],
  "blanks": [
    "feel",
    "scared",
    "thirsty"
  ]
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel today?"
    },
    {
      "speaker": "B",
      "text": "I feel excited!"
    },
    {
      "speaker": "A",
      "text": "Why are you excited?"
    },
    {
      "speaker": "B",
      "text": "Because it's my birthday!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel excited. It is my birthday! Sometimes I feel scared, like in a scary movie. Sometimes I feel thirsty and I drink water. I feel many things!",
  "questions": [
    "Why does the writer feel excited?",
    "When does the writer feel scared?",
    "What does the writer do when thirsty?"
  ]
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I feel ___ because ___.",
    "I feel scared when ___.",
    "When I feel thirsty, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '4b9d1abf-eeb1-4152-ac14-c9e48b4543f7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I feel ___'",
    "Give a reason for a feeling",
    "Talk about different feelings"
  ],
  "challenge": "Tell me how you feel today and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: Are You Happy?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  'Are You Happy?',
  'A1',
  'kids',
  12,
  3,
  'Ask and answer simple yes/no questions about feelings.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "Are you happy today?",
    "Are you tired?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Yes",
      "bg": "#FAECE7"
    },
    {
      "word": "No",
      "bg": "#E1F5EE"
    },
    {
      "word": "Are You",
      "bg": "#EEEDFE"
    },
    {
      "word": "I Am",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you happy?",
    "Are you hungry?"
  ],
  "student": [
    "Yes, I am happy.",
    "No, I'm not hungry."
  ],
  "note": "Answer honestly about how you feel!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Are you] happy?"
    },
    {
      "speaker": "B",
      "text": "[Yes], I am happy."
    },
    {
      "speaker": "A",
      "text": "[No], I'm not tired."
    }
  ],
  "blanks": [
    "Are you",
    "Yes",
    "No"
  ]
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you happy today?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am happy!"
    },
    {
      "speaker": "A",
      "text": "Are you tired?"
    },
    {
      "speaker": "B",
      "text": "No, I'm not tired!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Are you happy? Yes, I am happy today! Are you tired? No, I'm not tired. Are you hungry? Yes, I am a little hungry!",
  "questions": [
    "Is the writer happy?",
    "Is the writer tired?",
    "Is the writer hungry?"
  ]
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Are you happy? ___, I am/I'm not.",
    "Are you tired? ___.",
    "Are you hungry? ___."
  ]
}$json$::jsonb,
  true
),
(
  '62ed5e4f-75f3-4e7d-b4e8-ac5b5cab1f8a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Are you ___?'",
    "Answer 'Yes, I am' / 'No, I'm not'",
    "Talk about feelings with questions"
  ],
  "challenge": "Ask me if I'm happy, and I'll ask you back!"
}$json$::jsonb,
  true
);

-- Lesson 4: What Makes You Feel...?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  'What Makes You Feel...?',
  'A1',
  'kids',
  12,
  4,
  'Match feelings to simple causes/situations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎂",
  "questions": [
    "What makes you happy?",
    "What makes you scared?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Birthday",
      "bg": "#FAECE7"
    },
    {
      "word": "Dark",
      "bg": "#E1F5EE"
    },
    {
      "word": "Friends",
      "bg": "#EEEDFE"
    },
    {
      "word": "Makes",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes you happy?",
    "What makes you scared?"
  ],
  "student": [
    "My birthday makes me happy.",
    "The dark makes me scared."
  ],
  "note": "Think of a real situation for each feeling!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [birthday] makes me happy."
    },
    {
      "speaker": "B",
      "text": "The [dark] makes me scared."
    },
    {
      "speaker": "A",
      "text": "My [friends] make me happy."
    }
  ],
  "blanks": [
    "birthday",
    "dark",
    "friends"
  ]
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes you happy?"
    },
    {
      "speaker": "B",
      "text": "My friends make me happy!"
    },
    {
      "speaker": "A",
      "text": "What makes you scared?"
    },
    {
      "speaker": "B",
      "text": "Big dogs make me scared!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My birthday makes me happy. My friends make me happy too. The dark makes me scared. No lunch makes me hungry. Many things make me feel different ways!",
  "questions": [
    "What makes the writer happy?",
    "What makes the writer scared?",
    "What makes the writer hungry?"
  ]
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ makes me happy.",
    "___ makes me scared.",
    "___ makes me feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '3eee7d16-c738-450c-899e-d7fa369b5bb0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Match feelings to causes",
    "Say '___ makes me ___'",
    "Talk about my feelings"
  ],
  "challenge": "Tell me one thing that makes you happy!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  'Unit Review',
  'A1',
  'kids',
  12,
  5,
  'Review feelings vocabulary and simple sentences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "What feelings do you remember?",
    "How do you feel today?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7"
    },
    {
      "word": "Sad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Excited",
      "bg": "#EEEDFE"
    },
    {
      "word": "Scared",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Are you happy?"
  ],
  "student": [
    "I feel happy.",
    "Yes, I am happy!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "[Are you] tired?"
    },
    {
      "speaker": "A",
      "text": "My birthday [makes] me happy."
    }
  ],
  "blanks": [
    "happy",
    "Are you",
    "makes"
  ]
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel today?"
    },
    {
      "speaker": "B",
      "text": "I feel excited!"
    },
    {
      "speaker": "A",
      "text": "What makes you excited?"
    },
    {
      "speaker": "B",
      "text": "My birthday makes me excited!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel happy. Yesterday I felt tired. My friends make me happy. The dark makes me scared. Are you happy today? I hope so!",
  "questions": [
    "How does the writer feel today?",
    "How did the writer feel yesterday?",
    "What makes the writer happy?"
  ]
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "___ makes me happy.",
    "Are you ___? Yes/No, ___."
  ]
}$json$::jsonb,
  true
),
(
  'd3903530-b118-4d7c-a86b-394a97e62eff',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name feelings",
    "Say 'I feel ___'",
    "Ask and answer about feelings",
    "Say what causes a feeling"
  ],
  "challenge": "Tell me how you feel today and one thing that makes you feel that way!"
}$json$::jsonb,
  true
);
