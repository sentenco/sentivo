-- A2 Adults Unit 3: Shopping and Services (lessons 1-5)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Everyday Shopping
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  'Everyday Shopping',
  'A2',
  'adults',
  3,
  1,
  'Talk about everyday shopping habits and needs.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
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
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛒",
  "questions": [
    "Where do you usually do your shopping?",
    "How often do you buy groceries?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Groceries",
      "bg": "#FAECE7"
    },
    {
      "word": "Errands",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nearby",
      "bg": "#EEEDFE"
    },
    {
      "word": "Essentials",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you usually shop?",
    "How often do you buy groceries?"
  ],
  "student": [
    "I usually shop at the market nearby.",
    "I buy groceries once a week."
  ],
  "note": "Think about your real shopping habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I buy [groceries] every week."
    },
    {
      "speaker": "B",
      "text": "I run [errands] on Saturdays."
    },
    {
      "speaker": "A",
      "text": "There's a good shop [nearby]."
    }
  ],
  "blanks": [
    "groceries",
    "errands",
    "nearby"
  ]
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you usually do your shopping?"
    },
    {
      "speaker": "B",
      "text": "I buy groceries at the market nearby, once a week."
    },
    {
      "speaker": "A",
      "text": "I run other errands on Saturdays, like the pharmacy and post office."
    },
    {
      "speaker": "B",
      "text": "That's a good routine."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every Saturday, I do my shopping. First, I buy groceries at the market nearby. Then, I run a few errands: the pharmacy, the post office, and sometimes the bank. I try to get all my essentials in one morning.",
  "questions": [
    "When does the writer shop?",
    "What does the writer buy first?",
    "What errands does the writer run?"
  ]
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually shop at ___.",
    "I buy groceries ___.",
    "My weekly errands include ___."
  ]
}$json$::jsonb,
  true
),
(
  '10da57a0-ad1f-40d0-bdb1-1feb74f39a4e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about shopping habits",
    "Use 'groceries' and 'errands'",
    "Describe a weekly shopping routine"
  ],
  "challenge": "Tell me about your shopping routine!"
}$json$::jsonb,
  true
);

-- Lesson 2: Prices and Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  'Prices and Questions',
  'A2',
  'adults',
  3,
  2,
  'Ask and answer questions about prices and products.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
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
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏷️",
  "questions": [
    "Do you look for discounts when shopping?",
    "Have you asked for a refund before?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Discount",
      "bg": "#FAECE7"
    },
    {
      "word": "Receipt",
      "bg": "#E1F5EE"
    },
    {
      "word": "Refund",
      "bg": "#EEEDFE"
    },
    {
      "word": "On sale",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this item on sale?",
    "Can I get a refund?"
  ],
  "student": [
    "Yes, it has a discount today.",
    "Yes, with your receipt."
  ],
  "note": "Practice asking shopping questions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is this item [on sale]?"
    },
    {
      "speaker": "B",
      "text": "Yes, there's a 20% [discount]."
    },
    {
      "speaker": "A",
      "text": "Can I keep the [receipt] for a refund?"
    }
  ],
  "blanks": [
    "on sale",
    "discount",
    "receipt"
  ]
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Excuse me, is this jacket on sale?"
    },
    {
      "speaker": "B",
      "text": "Yes, it has a 20% discount today."
    },
    {
      "speaker": "A",
      "text": "Great, and can I get a refund if it doesn't fit?"
    },
    {
      "speaker": "B",
      "text": "Yes, just keep your receipt."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Customer: Excuse me, is this on sale? Shop assistant: Yes, it has a 20% discount today. Customer: Great, I'll take it. Can I get a refund if it doesn't fit? Assistant: Yes, just keep your receipt and come back within 30 days.",
  "questions": [
    "What discount does the item have?",
    "What does the customer ask about?",
    "What does the customer need to keep?"
  ]
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Is this ___ on sale?",
    "Can I get a ___?",
    "I need to keep my ___."
  ]
}$json$::jsonb,
  true
),
(
  '6d85af64-2a15-44a1-86ff-12f1909baef8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask about discounts and sales",
    "Ask for a refund",
    "Understand shop policies"
  ],
  "challenge": "Ask me shopping questions at a pretend store!"
}$json$::jsonb,
  true
);

-- Lesson 3: Better Options
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  'Better Options',
  'A2',
  'adults',
  3,
  3,
  'Compare shops or products using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
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
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Do you prefer cheaper or better quality products?",
    "Is online shopping more convenient for you?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Better quality",
      "bg": "#FAECE7"
    },
    {
      "word": "Cheaper",
      "bg": "#E1F5EE"
    },
    {
      "word": "More convenient",
      "bg": "#EEEDFE"
    },
    {
      "word": "Worth it",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this shop cheaper than that one?",
    "Is online shopping more convenient?"
  ],
  "student": [
    "Yes, this shop is cheaper.",
    "Online shopping is more convenient for me."
  ],
  "note": "Compare two shopping options!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This shop has [better quality] items."
    },
    {
      "speaker": "B",
      "text": "The market is [cheaper] than the mall."
    },
    {
      "speaker": "A",
      "text": "Online shopping is [more convenient]."
    }
  ],
  "blanks": [
    "better quality",
    "cheaper",
    "more convenient"
  ]
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer shopping online or in stores?"
    },
    {
      "speaker": "B",
      "text": "Online is more convenient, but stores have better quality sometimes."
    },
    {
      "speaker": "A",
      "text": "The local market is cheaper than the big supermarket."
    },
    {
      "speaker": "B",
      "text": "That's true, and it's worth the extra trip."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two shopping options: the local market is cheaper than the supermarket, and the produce is fresher. Online shopping is more convenient because you save time. Both have advantages, so I use both depending on what I need.",
  "questions": [
    "What is cheaper, the market or the supermarket?",
    "Why is online shopping convenient?",
    "How does the writer decide where to shop?"
  ]
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is cheaper than ___.",
    "___ is more convenient because ___.",
    "I prefer ___ when I need ___."
  ]
}$json$::jsonb,
  true
),
(
  'aff51550-f411-4fcd-aebb-30e95b9ae69c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare shops and products",
    "Use comparatives for shopping",
    "Say what I prefer and why"
  ],
  "challenge": "Compare two ways you shop and tell me which you prefer!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Complaint or Request
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  'A Short Complaint or Request',
  'A2',
  'adults',
  3,
  4,
  'Write a short polite complaint or request.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
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
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📝",
  "questions": [
    "Have you ever complained about a product?",
    "How do you make a polite request?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Unfortunately",
      "bg": "#FAECE7"
    },
    {
      "word": "I would like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Apologize",
      "bg": "#EEEDFE"
    },
    {
      "word": "Resolve",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you write in a complaint?",
    "How do you stay polite?"
  ],
  "student": [
    "I would explain the problem clearly.",
    "I would use polite language."
  ],
  "note": "Think about a polite way to complain or ask for something!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Unfortunately], the item arrived broken."
    },
    {
      "speaker": "B",
      "text": "[I would like] a refund, please."
    },
    {
      "speaker": "A",
      "text": "Please [resolve] this quickly."
    }
  ],
  "blanks": [
    "unfortunately",
    "i would like",
    "resolve"
  ]
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write if a product arrived broken?"
    },
    {
      "speaker": "B",
      "text": "I would write: unfortunately, the item arrived broken, and I would like a refund."
    },
    {
      "speaker": "A",
      "text": "I would also ask them to resolve it quickly and politely."
    },
    {
      "speaker": "B",
      "text": "That's a clear, polite complaint."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Dear Customer Service, unfortunately, the item I ordered arrived broken. I would like a refund or a replacement. Could you please resolve this as soon as possible? Thank you for your help. Best regards, Tomas.",
  "questions": [
    "What is the problem?",
    "What does Tomas want?",
    "How does Tomas end the message?"
  ]
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Unfortunately, ___.",
    "I would like ___.",
    "Could you please ___?"
  ]
}$json$::jsonb,
  true
),
(
  'e74480eb-c24b-4653-a3fd-e2e4e6b9933c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a polite complaint or request",
    "Use 'unfortunately' and 'I would like'",
    "Ask for a resolution politely"
  ],
  "challenge": "Write a short polite complaint about a product!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  'Unit Review',
  'A2',
  'adults',
  3,
  5,
  'Review shopping habits, prices, comparisons, and a complaint.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
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
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "Where do you usually shop?",
    "Have you ever made a complaint?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Groceries",
      "bg": "#FAECE7"
    },
    {
      "word": "Discount",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheaper",
      "bg": "#EEEDFE"
    },
    {
      "word": "Complaint",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "Have you made a complaint before?"
  ],
  "student": [
    "I shop at the market nearby.",
    "Yes, I once asked for a refund."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I buy [groceries] every week."
    },
    {
      "speaker": "B",
      "text": "This shop has a [discount] today."
    },
    {
      "speaker": "A",
      "text": "The market is [cheaper] than the mall."
    }
  ],
  "blanks": [
    "groceries",
    "discount",
    "cheaper"
  ]
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your shopping habits."
    },
    {
      "speaker": "B",
      "text": "I buy groceries every week at the market, it's cheaper than the mall."
    },
    {
      "speaker": "A",
      "text": "I once wrote a complaint because an item arrived broken."
    },
    {
      "speaker": "B",
      "text": "Did they resolve it quickly?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually buy groceries at the local market because it's cheaper than the mall. Last month, I bought a jacket on sale with a 20% discount. Unfortunately, it arrived with a small tear, so I wrote a polite complaint and asked for a refund. They resolved it quickly.",
  "questions": [
    "Where does the writer usually buy groceries?",
    "What happened with the jacket?",
    "How did the writer respond?"
  ]
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually shop at ___.",
    "Once, I had a problem with ___.",
    "I wrote asking for ___."
  ]
}$json$::jsonb,
  true
),
(
  'bb70786d-f03f-4567-b8cd-ea9b547c4887',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about shopping habits",
    "Ask about prices and discounts",
    "Compare shops",
    "Write a complaint or request"
  ],
  "challenge": "Tell me all about your shopping experiences!"
}$json$::jsonb,
  true
);
