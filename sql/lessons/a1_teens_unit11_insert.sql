-- A1 Teens Unit 11: Social Media and Tech (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Social Media and Tech
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f79969a9-828c-4d38-b314-908557c40a3c',
  'Social Media and Tech',
  'A1',
  'teens',
  11,
  1,
  'Name tech and social media words. [Bridge, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
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
  'f79969a9-828c-4d38-b314-908557c40a3c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "Do you have a phone?",
    "Do you watch videos?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
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
      "word": "App",
      "bg": "#E1F5EE"
    },
    {
      "word": "Video",
      "bg": "#EEEDFE"
    },
    {
      "word": "Message",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a phone?",
    "What app do you use?"
  ],
  "student": [
    "Yes, I have a phone.",
    "I use a video app."
  ],
  "note": "Point to a phone or app icon!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [phone]."
    },
    {
      "speaker": "B",
      "text": "I use an [app]."
    },
    {
      "speaker": "A",
      "text": "I watch a [video]."
    }
  ],
  "blanks": [
    "phone",
    "app",
    "video"
  ]
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a phone."
    },
    {
      "speaker": "B",
      "text": "I use an app every day."
    },
    {
      "speaker": "A",
      "text": "I watch videos too."
    },
    {
      "speaker": "B",
      "text": "I send messages too!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a phone. I use an app every day. I watch videos. I send messages to my friends.",
  "questions": [
    "What does the writer have?",
    "What does the writer watch?",
    "Who does the writer message?"
  ]
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "I use an ___.",
    "I send ___ to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f79969a9-828c-4d38-b314-908557c40a3c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 tech words",
    "Say 'I have a phone'",
    "Talk about an app I use"
  ],
  "challenge": "Tell me about your phone and apps!"
}$json$::jsonb,
  true
);

-- Lesson 2: Online Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  'Online Habits',
  'A1',
  'teens',
  11,
  2,
  'Use frequency words with tech habits. [Bridge, Lesson 2: controlled practice, frequency combined]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
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
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📲",
  "questions": [
    "Do you check your phone every day?",
    "Do you usually scroll videos?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Every day",
      "bg": "#FAECE7"
    },
    {
      "word": "Usually",
      "bg": "#E1F5EE"
    },
    {
      "word": "Check",
      "bg": "#EEEDFE"
    },
    {
      "word": "Scroll",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you check your phone every day?",
    "What do you usually do?"
  ],
  "student": [
    "Yes, I check it every day.",
    "I usually scroll videos."
  ],
  "note": "Use the word bank: every day, usually, check, scroll.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [check] my phone [every day]."
    },
    {
      "speaker": "B",
      "text": "I [usually] scroll videos."
    },
    {
      "speaker": "A",
      "text": "I message friends every day."
    }
  ],
  "blanks": [
    "check",
    "every day",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you check your phone every day?"
    },
    {
      "speaker": "B",
      "text": "Yes, I check it every day. I usually scroll videos too."
    },
    {
      "speaker": "A",
      "text": "I message my friends every day."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I check my phone every day. I usually scroll videos. I message my friends every day too.",
  "questions": [
    "How often does the writer check the phone?",
    "What does the writer usually do?",
    "Who does the writer message?"
  ]
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I check my phone ___.",
    "I usually ___.",
    "I message ___."
  ]
}$json$::jsonb,
  true
),
(
  '03689551-9b7f-4408-be9d-4de6bcb571d2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'every day' and 'usually'",
    "Talk about phone habits",
    "Say what I do on my phone"
  ],
  "challenge": "Tell me your phone habits!"
}$json$::jsonb,
  true
);

-- Lesson 3: Messages and Communication
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  'Messages and Communication',
  'A1',
  'teens',
  11,
  3,
  'Give a simple reason for tech habits using ''because''. [Bridge, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
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
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "Why do you like messaging?",
    "Is it easy or hard?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Because",
      "bg": "#FAECE7"
    },
    {
      "word": "Talk to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Easy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fast",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Why do you like messaging?",
    "Is it easy or fast?"
  ],
  "student": [
    "I like it because it's easy.",
    "It's fast too."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like messages [because] they are [easy]."
    },
    {
      "speaker": "B",
      "text": "I [talk to] my friends every day."
    },
    {
      "speaker": "A",
      "text": "It's [fast] too."
    }
  ],
  "blanks": [
    "because",
    "talk to",
    "fast"
  ]
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Why do you like messaging?"
    },
    {
      "speaker": "B",
      "text": "I like it because it's easy and fast. I talk to my friends every day."
    },
    {
      "speaker": "A",
      "text": "I like video calls because I can see my family."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like messaging because it's easy and fast. I talk to my friends every day. I like video calls too, because I can see my family.",
  "questions": [
    "Why does the writer like messaging?",
    "Who does the writer talk to every day?",
    "Why does the writer like video calls?"
  ]
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ because ___.",
    "I talk to ___ every day.",
    "I also like ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'e1baa035-11dc-452b-91b1-5b2d9d5c9b96',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give a reason with 'because'",
    "Talk about who I message",
    "Say why I like a tech habit"
  ],
  "challenge": "Tell me why you like messaging or video calls!"
}$json$::jsonb,
  true
);

-- Lesson 4: Tech Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  'Tech Questions',
  'A1',
  'teens',
  11,
  4,
  'Combine tech habits and reasons into a talk. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
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
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏱️",
  "questions": [
    "How much screen time do you have?",
    "Do you take a break from your phone?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Screen time",
      "bg": "#FAECE7"
    },
    {
      "word": "Too much",
      "bg": "#E1F5EE"
    },
    {
      "word": "Break",
      "bg": "#EEEDFE"
    },
    {
      "word": "Careful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much screen time do you have?",
    "Do you take a break?"
  ],
  "student": [
    "I have a lot of screen time.",
    "Yes, I take a break."
  ],
  "note": "Put it all together: habit + frequency + reason + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have [too much] [screen time]."
    },
    {
      "speaker": "B",
      "text": "I take a [break] sometimes."
    },
    {
      "speaker": "A",
      "text": "I am [careful] with my phone."
    }
  ],
  "blanks": [
    "too much",
    "break",
    "careful"
  ]
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I check my phone every day because I like messaging my friends."
    },
    {
      "speaker": "A",
      "text": "Sometimes I have too much screen time, so I take a break and read."
    },
    {
      "speaker": "B",
      "text": "That's a good habit!"
    }
  ],
  "note": "Mini talk: tell me all about your phone habits in a few sentences."
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I check my phone every day because I like messaging my friends. Sometimes I have too much screen time. I take a break and read a book. I am careful with my phone.",
  "questions": [
    "Why does the writer check the phone every day?",
    "What does the writer do for a break?",
    "Is the writer careful with the phone?"
  ]
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone because ___.",
    "Sometimes I have too much ___.",
    "I take a break by ___."
  ]
}$json$::jsonb,
  true
),
(
  'a11a49ec-a130-4800-895c-3fb2d9a04a1d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say why I use my phone",
    "Talk about screen time",
    "Say how I take a break"
  ],
  "challenge": "Tell me all about your phone habits and how you take a break!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e873e169-2eca-4a15-9033-79eeec73e793',
  'Unit Review',
  'A1',
  'teens',
  11,
  5,
  'Review tech vocabulary, habits, and reasons. [Bridge, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
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
  'e873e169-2eca-4a15-9033-79eeec73e793',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "How often do you use your phone?",
    "Why do you like it?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
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
      "word": "Every day",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Break",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How often do you use your phone?",
    "Why do you like it?"
  ],
  "student": [
    "I use it every day.",
    "I like it because it's easy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use my [phone] [every day]."
    },
    {
      "speaker": "B",
      "text": "I like it [because] it's fast."
    },
    {
      "speaker": "A",
      "text": "I take a [break] sometimes."
    }
  ],
  "blanks": [
    "phone",
    "every day",
    "break"
  ]
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I use my phone every day. I like it because it's easy and fast."
    },
    {
      "speaker": "A",
      "text": "Sometimes I take a break and read instead."
    },
    {
      "speaker": "B",
      "text": "Good balance!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use my phone every day. I like it because it's easy and fast. Sometimes I take a break and read instead.",
  "questions": [
    "How often does the writer use the phone?",
    "Why does the writer like it?",
    "What does the writer do for a break?"
  ]
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone ___.",
    "I like it because ___.",
    "Sometimes I ___."
  ]
}$json$::jsonb,
  true
),
(
  'e873e169-2eca-4a15-9033-79eeec73e793',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about phone habits",
    "Give a reason with 'because'",
    "Talk about taking a break"
  ],
  "challenge": "Tell me all about your tech habits!"
}$json$::jsonb,
  true
);
