-- A2 Kids Unit 10: Stories and Imagination (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Story Characters
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  'Story Characters',
  'A2',
  'kids',
  10,
  1,
  'Describe simple story characters and say what they do.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧙",
  "questions": [
    "What is your favorite story character?",
    "Do you like wizards or robots?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hero",
      "bg": "#FAECE7"
    },
    {
      "word": "Wizard",
      "bg": "#E1F5EE"
    },
    {
      "word": "Giant",
      "bg": "#EEEDFE"
    },
    {
      "word": "Robot",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the hero like?",
    "What can the wizard do?"
  ],
  "student": [
    "The hero is brave and strong.",
    "The wizard can make magic."
  ],
  "note": "Think about your favorite story character!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The [hero] is brave. It can fight."
    },
    {
      "speaker": "B",
      "text": "The [wizard] is wise. It can make magic."
    },
    {
      "speaker": "A",
      "text": "The [giant] is big. It can lift rocks."
    }
  ],
  "blanks": [
    "hero",
    "wizard",
    "giant"
  ]
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite story character?"
    },
    {
      "speaker": "B",
      "text": "My favorite is the robot. It is smart and it can fly."
    },
    {
      "speaker": "A",
      "text": "I like the wizard. It is wise and it can make magic."
    },
    {
      "speaker": "B",
      "text": "Both are cool characters!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Meet four story characters. The hero is brave and can fight dragons. The wizard is wise and can make magic. The giant is big and can lift huge rocks. The robot is smart and can fly to the moon.",
  "questions": [
    "What can the hero do?",
    "What can the wizard do?",
    "What can the robot do?"
  ]
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is ___.",
    "It can ___.",
    "My favorite character is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'e99cdc62-a486-4627-a706-f20d5ca38720',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe story characters",
    "Say what a character can do",
    "Talk about my favorite character"
  ],
  "challenge": "Describe your favorite story character to me!"
}$json$::jsonb,
  true
);

-- Lesson 2: What Happened Next?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  'What Happened Next?',
  'A2',
  'kids',
  10,
  2,
  'Follow and retell a very simple story using sequence words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📖",
  "questions": [
    "Do you like adventure stories?",
    "What happens in your favorite story?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Adventure",
      "bg": "#FAECE7"
    },
    {
      "word": "Suddenly",
      "bg": "#E1F5EE"
    },
    {
      "word": "Discovered",
      "bg": "#EEEDFE"
    },
    {
      "word": "Escaped",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What happened first?",
    "What happened next?"
  ],
  "student": [
    "First, the hero found a map.",
    "Then, he discovered a cave."
  ],
  "note": "Think about the order of events in a story!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "First, the hero went on an [adventure]."
    },
    {
      "speaker": "B",
      "text": "Then, he [discovered] a hidden cave."
    },
    {
      "speaker": "A",
      "text": "Finally, he [escaped] safely."
    }
  ],
  "blanks": [
    "adventure",
    "discovered",
    "escaped"
  ]
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What happened first in the story?"
    },
    {
      "speaker": "B",
      "text": "First, the hero went on an adventure. Then, suddenly, he found a map."
    },
    {
      "speaker": "A",
      "text": "After that, he discovered a hidden cave. Finally, he escaped safely."
    },
    {
      "speaker": "B",
      "text": "What an exciting story!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The hero went on an adventure. First, he found an old map. Then, suddenly, he discovered a hidden cave. After that, a giant appeared! Finally, the hero escaped safely and became famous.",
  "questions": [
    "What did the hero find first?",
    "What did he discover?",
    "Who appeared suddenly?"
  ]
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, the character ___.",
    "Then, suddenly, ___.",
    "Finally, ___."
  ]
}$json$::jsonb,
  true
),
(
  '4fd5d9fe-276b-4f0a-a834-d0735a38bd7e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Retell a story in order",
    "Use 'first, then, finally'",
    "Use the word 'suddenly'"
  ],
  "challenge": "Retell a short adventure story to me!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Funny Past Story
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  'A Funny Past Story',
  'A2',
  'kids',
  10,
  3,
  'Understand and produce simple past story sentences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😄",
  "questions": [
    "Do you know a funny story?",
    "Did something funny happen to you?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Looked",
      "bg": "#FAECE7"
    },
    {
      "word": "Opened",
      "bg": "#E1F5EE"
    },
    {
      "word": "Laughed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Jumped",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What happened in the funny story?",
    "Why did everyone laugh?"
  ],
  "student": [
    "The cat opened the door.",
    "Everyone laughed because it was funny."
  ],
  "note": "Think of a funny story you know!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The cat [looked] at the box."
    },
    {
      "speaker": "B",
      "text": "It [opened] the door by mistake."
    },
    {
      "speaker": "A",
      "text": "Everyone [laughed] and [jumped] with joy."
    }
  ],
  "blanks": [
    "looked",
    "opened",
    "laughed"
  ]
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me a funny story."
    },
    {
      "speaker": "B",
      "text": "A dog looked at a mirror and jumped back in surprise!"
    },
    {
      "speaker": "A",
      "text": "Then it opened the door and everyone laughed."
    },
    {
      "speaker": "B",
      "text": "That's so funny!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Here is a funny story. A small dog looked at a mirror. It jumped back in surprise because it saw another dog! Then, it opened the door by accident and ran outside. Everyone laughed at the funny dog.",
  "questions": [
    "What did the dog look at?",
    "Why did the dog jump back?",
    "Why did everyone laugh?"
  ]
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The character looked at ___.",
    "Then, it ___.",
    "Everyone laughed because ___."
  ]
}$json$::jsonb,
  true
),
(
  '05bfbecd-4615-4837-81f1-4974832c6e31',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: looked, opened, laughed, jumped",
    "Tell a funny past story",
    "Connect 3-4 sentences"
  ],
  "challenge": "Tell me a funny story using the past tense!"
}$json$::jsonb,
  true
);

-- Lesson 4: Create a Tiny Story
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  'Create a Tiny Story',
  'A2',
  'kids',
  10,
  4,
  'Write a very short imaginative story with support.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✍️",
  "questions": [
    "Who is the character in your story?",
    "Where does your story happen?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Character",
      "bg": "#FAECE7"
    },
    {
      "word": "Place",
      "bg": "#E1F5EE"
    },
    {
      "word": "Problem",
      "bg": "#EEEDFE"
    },
    {
      "word": "Ending",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is your character?",
    "What is the problem?"
  ],
  "student": [
    "My character is a brave girl.",
    "The problem is she is lost."
  ],
  "note": "Think of a character, place, problem, and ending!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [character] is a brave girl."
    },
    {
      "speaker": "B",
      "text": "The [place] is a dark forest."
    },
    {
      "speaker": "A",
      "text": "The [problem] is she is lost."
    }
  ],
  "blanks": [
    "character",
    "place",
    "problem"
  ]
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your tiny story."
    },
    {
      "speaker": "B",
      "text": "My character is a brave girl. She is in a dark forest."
    },
    {
      "speaker": "A",
      "text": "The problem is she is lost, but finally she finds her way home."
    },
    {
      "speaker": "B",
      "text": "What a great story!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a tiny story. The character is a brave girl named Mia. The place is a dark forest. The problem is she is lost and scared. Finally, she sees a light and finds her way home safely.",
  "questions": [
    "Who is the character?",
    "Where is the story?",
    "How does the story end?"
  ]
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My character is ___.",
    "The place is ___.",
    "Finally, ___."
  ]
}$json$::jsonb,
  true
),
(
  '10ee5807-05e7-40c8-8588-d376b30070d4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Choose a character, place, and problem",
    "Write a tiny story with an ending",
    "Read my story aloud"
  ],
  "challenge": "Read me your tiny story!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  'Unit Review',
  'A2',
  'kids',
  10,
  5,
  'Review characters, story retelling, and a tiny imaginative text.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📚",
  "questions": [
    "What is your favorite story?",
    "Who is your favorite character?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Story",
      "bg": "#FAECE7"
    },
    {
      "word": "Character",
      "bg": "#E1F5EE"
    },
    {
      "word": "Suddenly",
      "bg": "#EEEDFE"
    },
    {
      "word": "Ending",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your story about?",
    "How does it end?"
  ],
  "student": [
    "My story is about a brave hero.",
    "It ends happily."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [story] is about a wizard."
    },
    {
      "speaker": "B",
      "text": "The [character] is brave and smart."
    },
    {
      "speaker": "A",
      "text": "[Suddenly], a giant appeared!"
    }
  ],
  "blanks": [
    "story",
    "character",
    "suddenly"
  ]
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite story."
    },
    {
      "speaker": "B",
      "text": "My favorite story is about a brave hero. Suddenly, a dragon appeared!"
    },
    {
      "speaker": "A",
      "text": "What happened next?"
    },
    {
      "speaker": "B",
      "text": "The hero fought the dragon and everyone laughed and celebrated at the end."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite story is about a brave hero named Leo. He went on an adventure. Suddenly, he discovered a hidden cave. Inside, a friendly giant appeared. They became friends and everyone laughed and celebrated together.",
  "questions": [
    "Who is the hero?",
    "What did he discover?",
    "How does the story end?"
  ]
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite story is about ___.",
    "Suddenly, ___.",
    "The story ends when ___."
  ]
}$json$::jsonb,
  true
),
(
  'ffe4c62e-b98f-4783-8043-e21efec1a598',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe story characters",
    "Retell a story in order",
    "Write a tiny story"
  ],
  "challenge": "Tell me your own story from start to finish!"
}$json$::jsonb,
  true
);
