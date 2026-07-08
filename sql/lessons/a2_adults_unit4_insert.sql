-- A2 Adults Unit 4: Food, Dining, and Social Plans (lessons 1-5)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Meals and Preferences
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '57849ade-fcbd-40a0-9101-77a263093699',
  'Meals and Preferences',
  'A2',
  'adults',
  4,
  1,
  'Talk about meal preferences and dietary habits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '57849ade-fcbd-40a0-9101-77a263093699',
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
  '57849ade-fcbd-40a0-9101-77a263093699',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍲",
  "questions": [
    "What kind of food do you prefer?",
    "Do you avoid any foods?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Prefer",
      "bg": "#FAECE7"
    },
    {
      "word": "Avoid",
      "bg": "#E1F5EE"
    },
    {
      "word": "Diet",
      "bg": "#EEEDFE"
    },
    {
      "word": "Homemade",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you prefer to eat?",
    "Do you avoid anything?"
  ],
  "student": [
    "I prefer homemade meals.",
    "I avoid too much sugar."
  ],
  "note": "Think about your real food preferences!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [prefer] homemade meals."
    },
    {
      "speaker": "B",
      "text": "I try to [avoid] fried food."
    },
    {
      "speaker": "A",
      "text": "I follow a balanced [diet]."
    }
  ],
  "blanks": [
    "prefer",
    "avoid",
    "diet"
  ]
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What kind of food do you prefer?"
    },
    {
      "speaker": "B",
      "text": "I prefer homemade meals. I try to avoid too much fast food."
    },
    {
      "speaker": "A",
      "text": "I follow a balanced diet and avoid too much sugar."
    },
    {
      "speaker": "B",
      "text": "That's a healthy approach."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I prefer homemade meals over fast food. I try to follow a balanced diet, with plenty of vegetables. I avoid too much sugar and fried food when I can. On weekends, I sometimes allow myself a treat.",
  "questions": [
    "What does the writer prefer?",
    "What does the writer avoid?",
    "What happens on weekends?"
  ]
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___.",
    "I try to avoid ___.",
    "My diet includes ___."
  ]
}$json$::jsonb,
  true
),
(
  '57849ade-fcbd-40a0-9101-77a263093699',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about food preferences",
    "Use 'prefer' and 'avoid'",
    "Describe my diet"
  ],
  "challenge": "Tell me about your food preferences and diet!"
}$json$::jsonb,
  true
);

-- Lesson 2: Ordering and Booking
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  'Ordering and Booking',
  'A2',
  'adults',
  4,
  2,
  'Order food and make a restaurant booking politely.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
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
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "Have you booked a table at a restaurant?",
    "What do you usually order?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Reservation",
      "bg": "#FAECE7"
    },
    {
      "word": "Table for",
      "bg": "#E1F5EE"
    },
    {
      "word": "Menu",
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
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like to make a reservation.",
    "What do you recommend?"
  ],
  "student": [
    "A table for two, please.",
    "I recommend the fish."
  ],
  "note": "Practice booking a table and ordering!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like a [reservation] for two."
    },
    {
      "speaker": "B",
      "text": "A [table for] two at 8pm, then."
    },
    {
      "speaker": "A",
      "text": "What do you [recommend] from the menu?"
    }
  ],
  "blanks": [
    "reservation",
    "table for",
    "recommend"
  ]
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello, I'd like to make a reservation for tonight."
    },
    {
      "speaker": "B",
      "text": "Of course, a table for how many?"
    },
    {
      "speaker": "A",
      "text": "A table for two, at 8pm please. What do you recommend from the menu?"
    },
    {
      "speaker": "B",
      "text": "The grilled fish is very popular."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello, I'd like to make a reservation for two people at 8pm tonight. Could I also ask what you recommend from the menu? Thank you, we look forward to our visit. Best regards, Carlos.",
  "questions": [
    "How many people is the reservation for?",
    "What time is the reservation?",
    "What does Carlos ask about?"
  ]
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a reservation for ___.",
    "A table for ___, please.",
    "What do you recommend?"
  ]
}$json$::jsonb,
  true
),
(
  '35a9b0b6-6a40-4c33-bd72-bef710c4f1e5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Make a restaurant reservation",
    "Order politely",
    "Ask for a recommendation"
  ],
  "challenge": "Book a table and order a meal from me!"
}$json$::jsonb,
  true
);

-- Lesson 3: Eating Out: Better or Worse?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  'Eating Out: Better or Worse?',
  'A2',
  'adults',
  4,
  3,
  'Compare eating out and eating at home using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
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
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Do you prefer eating out or eating at home?",
    "Is homecooked food healthier for you?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Healthier",
      "bg": "#FAECE7"
    },
    {
      "word": "More expensive",
      "bg": "#E1F5EE"
    },
    {
      "word": "Convenient",
      "bg": "#EEEDFE"
    },
    {
      "word": "Homecooked",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is eating at home healthier?",
    "Is eating out more expensive?"
  ],
  "student": [
    "Yes, homecooked food is healthier for me.",
    "Yes, eating out is more expensive."
  ],
  "note": "Compare eating out and eating at home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Homecooked meals are [healthier]."
    },
    {
      "speaker": "B",
      "text": "Eating out is [more expensive]."
    },
    {
      "speaker": "A",
      "text": "But eating out is more [convenient]."
    }
  ],
  "blanks": [
    "healthier",
    "more expensive",
    "convenient"
  ]
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer eating out or eating at home?"
    },
    {
      "speaker": "B",
      "text": "I prefer eating at home, it's healthier and cheaper than eating out."
    },
    {
      "speaker": "A",
      "text": "I like eating out sometimes, it's more convenient after a long day."
    },
    {
      "speaker": "B",
      "text": "Both have their place!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Eating at home is usually healthier and cheaper than eating out. Homecooked meals let you control the ingredients. But eating out is more convenient, especially after a busy day. I try to balance both during the week.",
  "questions": [
    "What is healthier, eating at home or eating out?",
    "Why is eating out convenient?",
    "How does the writer balance both?"
  ]
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Eating at home is ___ than eating out.",
    "Eating out is more convenient because ___.",
    "I usually eat ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '99c50ec1-66e5-411b-a685-5e4e14b452cd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare eating out and eating at home",
    "Use comparatives for food choices",
    "Say my personal preference"
  ],
  "challenge": "Tell me if you prefer eating out or at home, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Social Invitation
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  'A Social Invitation',
  'A2',
  'adults',
  4,
  4,
  'Write a short social invitation using functional language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
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
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "Have you sent an invitation recently?",
    "What was the occasion?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Invite",
      "bg": "#FAECE7"
    },
    {
      "word": "Join us",
      "bg": "#E1F5EE"
    },
    {
      "word": "RSVP",
      "bg": "#EEEDFE"
    },
    {
      "word": "Occasion",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you like to join us?",
    "What is the occasion?"
  ],
  "student": [
    "Yes, I'd love to join.",
    "It's a birthday dinner."
  ],
  "note": "Think about an invitation you'd send!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to [invite] you to dinner."
    },
    {
      "speaker": "B",
      "text": "Please [join us] on Saturday."
    },
    {
      "speaker": "A",
      "text": "Please [RSVP] by Friday."
    }
  ],
  "blanks": [
    "invite",
    "join us",
    "rsvp"
  ]
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to invite you to a small dinner party."
    },
    {
      "speaker": "B",
      "text": "That sounds lovely! What is the occasion?"
    },
    {
      "speaker": "A",
      "text": "It's my husband's birthday. Please join us on Saturday at 7pm."
    },
    {
      "speaker": "B",
      "text": "We'd love to come, thank you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "You're invited! Please join us for a birthday dinner on Saturday at 7pm at our home. It would mean a lot to have you there. Please RSVP by Friday so we can plan. Looking forward to seeing you!",
  "questions": [
    "What is the occasion?",
    "When is the dinner?",
    "What should guests do by Friday?"
  ]
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to invite you to ___.",
    "Please join us on ___.",
    "Please RSVP by ___."
  ]
}$json$::jsonb,
  true
),
(
  '332b48a0-7f66-489e-9021-1a231d8ea4aa',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short social invitation",
    "Use 'join us' and 'RSVP'",
    "Mention an occasion, date, and time"
  ],
  "challenge": "Write and read me a social invitation!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  'Unit Review',
  'A2',
  'adults',
  4,
  5,
  'Review food preferences, ordering, comparisons, and an invitation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
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
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍴",
  "questions": [
    "What food do you prefer?",
    "Have you booked a table recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Prefer",
      "bg": "#FAECE7"
    },
    {
      "word": "Reservation",
      "bg": "#E1F5EE"
    },
    {
      "word": "Healthier",
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
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you prefer to eat?",
    "Have you made a reservation before?"
  ],
  "student": [
    "I prefer homemade meals.",
    "Yes, I booked a table last month."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [prefer] homecooked meals."
    },
    {
      "speaker": "B",
      "text": "I made a [reservation] for Friday."
    },
    {
      "speaker": "A",
      "text": "Eating at home is [healthier] for me."
    }
  ],
  "blanks": [
    "prefer",
    "reservation",
    "healthier"
  ]
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your food habits and any plans this weekend."
    },
    {
      "speaker": "B",
      "text": "I prefer homemade meals, they're healthier for me. I made a reservation for Friday though."
    },
    {
      "speaker": "A",
      "text": "I'm inviting friends over for dinner on Saturday."
    },
    {
      "speaker": "B",
      "text": "That sounds like a fun weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I prefer homemade meals because they're healthier and cheaper than eating out. This Friday, though, I made a reservation at a new restaurant. I'm also inviting friends over for a dinner party on Saturday. Please join us if you're free!",
  "questions": [
    "What does the writer prefer and why?",
    "What happens on Friday?",
    "What happens on Saturday?"
  ]
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___ because ___.",
    "This weekend, I ___.",
    "I'd like to invite you to ___."
  ]
}$json$::jsonb,
  true
),
(
  'a75aa09c-e64e-4e60-b3b4-5438922f5cc7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about food preferences",
    "Order food and book a table",
    "Compare eating out and at home",
    "Write an invitation"
  ],
  "challenge": "Tell me all about your food habits and social plans!"
}$json$::jsonb,
  true
);
