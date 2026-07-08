-- A2 Adults Unit 7: Travel and Transport (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Getting Around
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  'Getting Around',
  'A2',
  'adults',
  7,
  1,
  'Talk about transport choices and simple travel routines.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
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
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚇",
  "questions": [
    "How do you usually get to work?",
    "Do you take the subway or a taxi?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Subway",
      "bg": "#FAECE7"
    },
    {
      "word": "Taxi",
      "bg": "#E1F5EE"
    },
    {
      "word": "Commute",
      "bg": "#EEEDFE"
    },
    {
      "word": "On foot",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you get to work?",
    "Do you walk or take transport?"
  ],
  "student": [
    "I usually take the subway.",
    "I go on foot when the weather is nice."
  ],
  "note": "Think about your real daily commute!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the [subway] to work."
    },
    {
      "speaker": "B",
      "text": "I sometimes take a [taxi]."
    },
    {
      "speaker": "A",
      "text": "I go [on foot] when it's close."
    }
  ],
  "blanks": [
    "subway",
    "taxi",
    "on foot"
  ]
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you usually get around the city?"
    },
    {
      "speaker": "B",
      "text": "I take the subway most days. My commute is about thirty minutes."
    },
    {
      "speaker": "A",
      "text": "I sometimes take a taxi, but I prefer going on foot when I can."
    },
    {
      "speaker": "B",
      "text": "Walking is healthier too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually take the subway to work every day. My commute takes about thirty minutes. On weekends, I prefer to walk or take a taxi if I'm in a hurry. It depends on the weather and how much time I have.",
  "questions": [
    "How does the writer usually get to work?",
    "How long is the commute?",
    "What does the writer do on weekends?"
  ]
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually get around by ___.",
    "My commute takes ___.",
    "I prefer ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'df16562f-b068-4d26-ab78-43ee0b60b4ef',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about transport choices",
    "Describe a daily commute",
    "Say what I prefer and why"
  ],
  "challenge": "Tell me how you get around your city!"
}$json$::jsonb,
  true
);

-- Lesson 2: Tickets, Times, and Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  'Tickets, Times, and Questions',
  'A2',
  'adults',
  7,
  2,
  'Understand and ask simple travel questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
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
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎫",
  "questions": [
    "Have you bought a train or bus ticket recently?",
    "Do you know how to ask about platforms?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Platform",
      "bg": "#FAECE7"
    },
    {
      "word": "One-way",
      "bg": "#E1F5EE"
    },
    {
      "word": "Round trip",
      "bg": "#EEEDFE"
    },
    {
      "word": "Departure",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which platform does the train leave from?",
    "Is this a one-way or round trip ticket?"
  ],
  "student": [
    "It leaves from platform 3.",
    "I'd like a round trip ticket, please."
  ],
  "note": "Practice asking travel questions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which [platform] does it leave from?"
    },
    {
      "speaker": "B",
      "text": "I'd like a [round trip] ticket."
    },
    {
      "speaker": "A",
      "text": "What time is the [departure]?"
    }
  ],
  "blanks": [
    "platform",
    "round trip",
    "departure"
  ]
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Excuse me, which platform does the train to the city leave from?"
    },
    {
      "speaker": "B",
      "text": "It leaves from platform 3. Would you like a one-way or round trip ticket?"
    },
    {
      "speaker": "A",
      "text": "Round trip, please. What time is the departure?"
    },
    {
      "speaker": "B",
      "text": "The departure is at 10:15."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At the ticket counter: Excuse me, I'd like a round trip ticket to the city. Which platform does it leave from? It leaves from platform 3, departure at 10:15. Thank you, here is your ticket.",
  "questions": [
    "What kind of ticket did the customer buy?",
    "Which platform does the train leave from?",
    "What time is the departure?"
  ]
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a ___ ticket.",
    "Which platform does ___ leave from?",
    "What time is the departure of ___?"
  ]
}$json$::jsonb,
  true
),
(
  '8f14ac0a-cecf-4e97-81a3-fa22bc08e0bb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask about platforms and times",
    "Buy a one-way or round trip ticket",
    "Understand travel information"
  ],
  "challenge": "Ask me travel questions at a pretend ticket counter!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Trip Yesterday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  'A Trip Yesterday',
  'A2',
  'adults',
  7,
  3,
  'Describe a short past travel event using simple past and sequencing.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
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
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚆",
  "questions": [
    "Did you travel anywhere recently?",
    "Did you wait a long time?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Left",
      "bg": "#FAECE7"
    },
    {
      "word": "Arrived",
      "bg": "#E1F5EE"
    },
    {
      "word": "Waited",
      "bg": "#EEEDFE"
    },
    {
      "word": "Returned",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where did you go yesterday?",
    "Did you have to wait?"
  ],
  "student": [
    "I went to visit a friend.",
    "Yes, I waited twenty minutes for the bus."
  ],
  "note": "Think about a recent trip you took!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [left] home at 9am."
    },
    {
      "speaker": "B",
      "text": "I [arrived] an hour later."
    },
    {
      "speaker": "A",
      "text": "I [waited] for the train."
    }
  ],
  "blanks": [
    "left",
    "arrived",
    "waited"
  ]
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a trip you took yesterday."
    },
    {
      "speaker": "B",
      "text": "I left home at 9am and waited twenty minutes for the train."
    },
    {
      "speaker": "A",
      "text": "I arrived at noon, visited a friend, and returned home in the evening."
    },
    {
      "speaker": "B",
      "text": "Sounds like a full day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, I took a day trip to visit my friend. First, I left home early and waited twenty minutes for the train. Then, I arrived around noon. After that, we had lunch together. Finally, I returned home in the evening.",
  "questions": [
    "What did the writer do first?",
    "How long did they wait?",
    "When did the writer return home?"
  ]
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I left ___.",
    "I arrived ___.",
    "Finally, I returned ___."
  ]
}$json$::jsonb,
  true
),
(
  '9f77743f-8e60-492e-a772-f65e3bda2dd4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: left, arrived, waited, returned",
    "Tell a trip story in order",
    "Describe a recent trip"
  ],
  "challenge": "Tell me about a trip you took recently!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Travel Email or Booking Note
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  'A Travel Email or Booking Note',
  'A2',
  'adults',
  7,
  4,
  'Write a short travel message or booking request.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
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
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📩",
  "questions": [
    "Have you booked a trip online before?",
    "What information did you need?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Booking",
      "bg": "#FAECE7"
    },
    {
      "word": "Confirm",
      "bg": "#E1F5EE"
    },
    {
      "word": "Itinerary",
      "bg": "#EEEDFE"
    },
    {
      "word": "Inquire",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like to make a booking.",
    "Could you confirm the itinerary?"
  ],
  "student": [
    "Yes, I'd like to book two seats.",
    "Yes, I'll send the confirmation."
  ],
  "note": "Think about a travel booking you'd make!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to make a [booking] for two."
    },
    {
      "speaker": "B",
      "text": "Could you [confirm] the details?"
    },
    {
      "speaker": "A",
      "text": "I want to [inquire] about the price."
    }
  ],
  "blanks": [
    "booking",
    "confirm",
    "inquire"
  ]
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello, I'd like to make a booking for a trip next month."
    },
    {
      "speaker": "B",
      "text": "Of course, could you tell me the dates?"
    },
    {
      "speaker": "A",
      "text": "I'd also like to inquire about the price and confirm the itinerary."
    },
    {
      "speaker": "B",
      "text": "I'll send you all the details by email."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Dear Sir or Madam, I would like to make a booking for two people traveling next month. Could you confirm the itinerary and the total price? I would also like to inquire about baggage allowance. Thank you for your help. Best regards, Javier.",
  "questions": [
    "What does Javier want to book?",
    "What does Javier ask to confirm?",
    "What else does Javier inquire about?"
  ]
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I would like to make a booking for ___.",
    "Could you confirm ___?",
    "I would like to inquire about ___."
  ]
}$json$::jsonb,
  true
),
(
  '86d75f80-97f0-479f-8cc2-de82654c4339',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short travel booking email",
    "Use 'confirm' and 'inquire'",
    "Ask for travel details"
  ],
  "challenge": "Write a short travel booking message!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  'Unit Review',
  'A2',
  'adults',
  7,
  5,
  'Review transport, travel questions, a past trip, and a booking message.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
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
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧳",
  "questions": [
    "How do you get around?",
    "Have you traveled recently?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Commute",
      "bg": "#FAECE7"
    },
    {
      "word": "Ticket",
      "bg": "#E1F5EE"
    },
    {
      "word": "Arrived",
      "bg": "#EEEDFE"
    },
    {
      "word": "Booking",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you get around?",
    "Did you travel recently?"
  ],
  "student": [
    "I usually take the subway.",
    "Yes, I took a trip last week."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [commute] takes thirty minutes."
    },
    {
      "speaker": "B",
      "text": "I bought a round trip [ticket]."
    },
    {
      "speaker": "A",
      "text": "I [arrived] late yesterday."
    }
  ],
  "blanks": [
    "commute",
    "ticket",
    "arrived"
  ]
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about how you travel and a recent trip."
    },
    {
      "speaker": "B",
      "text": "My commute is thirty minutes by subway. Last week, I bought a ticket and traveled to visit family."
    },
    {
      "speaker": "A",
      "text": "I arrived late because I waited a long time for the train."
    },
    {
      "speaker": "B",
      "text": "I made a booking online for my next trip, it was much easier."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My daily commute takes thirty minutes by subway. Last week, I bought a round trip ticket and traveled to visit my family. I left early, waited for the train, and arrived a bit late in the afternoon. I've already made a booking for my next trip online.",
  "questions": [
    "How does the writer commute?",
    "What happened last week?",
    "What has the writer already done for the next trip?"
  ]
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My daily commute is ___.",
    "Last week, I traveled to ___.",
    "I made a booking for ___."
  ]
}$json$::jsonb,
  true
),
(
  '4caabc7b-9062-466a-971f-cc51a2e6d2e2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about transport",
    "Ask travel questions",
    "Tell a past trip story",
    "Write a booking message"
  ],
  "challenge": "Tell me all about your travel habits and a recent trip!"
}$json$::jsonb,
  true
);
