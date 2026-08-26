// SHIFT, Job Interview Track, Lesson 2: "The Follow-Up Call"
// Interviewer & candidate. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "interview-2",
  code: "L2",
  title: "The Follow-Up Call",
  tenses: "Past Simple vs Present Perfect",
  tag: "Interview",
  roles: { them: "Interviewer", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "Phone Call, One Week Later",
    context: "You're on a follow-up call after your first interview.",
  },

  scenarioSet: {
    say: "It's been a week since your first interview. The interviewer is calling to follow up and learn more about your background.",
  },

  chain: [
    {
      question: "Thanks for your patience. Did you get a chance to look at the job description again?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I read it again last night.",
      nextLine: "Great. Have you worked with this type of software before?",
    },
    {
      question: "Have you worked with this type of software before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>have</b>.",
      model: "Yes, I have. I've used it at my current job.",
      nextLine: "What did you like most about your last position?",
    },
    {
      question: "What did you like most about your last position?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>liked</b>.",
      model: "I liked the variety of projects.",
      nextLine: "Have you ever managed a team before?",
    },
    {
      question: "Have you ever managed a team before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. This would be my first time.",
      nextLine: "Did you complete any certifications recently?",
    },
    {
      question: "Did you complete any certifications recently?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, I did. I finished one last month.",
      nextLine: "Have you had any interviews with other companies since we last talked?",
    },
    {
      question: "Have you had any interviews with other companies since we last talked?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>have</b>.",
      model: "Yes, I have. I had one on Monday.",
      nextLine: "When did you leave your previous job?",
    },
    {
      question: "When did you leave your previous job?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>left</b>.",
      model: "I left it two months ago.",
      nextLine: "Have you decided what you're looking for in terms of salary?",
    },
    {
      question: "Have you decided what you're looking for in terms of salary?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (recent, connected to now): <b>have</b>.",
      model: "Yes, I have. I've thought about a range.",
      nextLine: "Great, that's helpful. We'll be in touch soon.",
    },
  ],

  retell: {
    prompt: "Retell the whole call, no help this time. What have you done since the first interview? What did you like about your last job? What's still unresolved?",
  },

  transfer: {
    question: "Forget the interview. Did you learn anything new last week? And have you accomplished anything recently that you're proud of?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I read it last night, I left two months ago), Present Perfect for something connected to now with no exact time (I've worked with this software, I haven't managed a team). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a professional follow-up call, warmer than the first interview but still evaluative.",
      say: ["It's been a week since the first interview. I'm the interviewer, calling to follow up."],
      do: ["Keep it under a minute, professional and friendly."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like an interviewer genuinely digging into the background."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole follow-up call together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with the interview.",
      say: ["Forget the interview. Did you learn anything new last week? Have you accomplished anything recently?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"yet\" or \"ever\" moment before next lesson."],
      timing: "1 min",
    },
  },
};
