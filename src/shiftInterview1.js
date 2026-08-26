// SHIFT, Job Interview Track, Lesson 1: "The First Interview"
// Interviewer & candidate. Present Simple (habit/routine) vs Present Continuous (right now / current situation).

export default {
  id: "interview-1",
  code: "L1",
  title: "The First Interview",
  tenses: "Present Simple vs Present Continuous",
  tag: "Interview",
  roles: { them: "Interviewer", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "The Interview Room",
    context: "You're sitting down for a job interview. The interviewer starts with some easy questions.",
  },

  scenarioSet: {
    say: "You're sitting down for a job interview. The interviewer starts with some easy warm-up questions before getting into the details.",
  },

  chain: [
    {
      question: "Thanks for coming in. Are you working anywhere right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current situation): <b>am</b>.",
      model: "Yes, I am. I'm working at a small marketing agency.",
      nextLine: "Nice. Do you usually work with a team, or mostly alone?",
    },
    {
      question: "Do you usually work with a team, or mostly alone?",
      shortAnswer: false,
      clue: "Present Simple (habit/general fact): <b>work</b>.",
      model: "I usually work with a small team.",
      nextLine: "What are you looking for in your next role?",
    },
    {
      question: "What are you looking for in your next role?",
      shortAnswer: false,
      clue: "Present Continuous (current, ongoing situation): <b>am looking</b>.",
      model: "I'm looking for more growth opportunities.",
      nextLine: "Do you always research a company before applying?",
    },
    {
      question: "Do you always research a company before applying?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I always look into the company first.",
      nextLine: "Are you interviewing with other companies at the moment?",
    },
    {
      question: "Are you interviewing with other companies at the moment?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm talking to two other companies.",
      nextLine: "What do you usually enjoy most about your work?",
    },
    {
      question: "What do you usually enjoy most about your work?",
      shortAnswer: false,
      clue: "Present Simple (general truth/habit): <b>enjoy</b>.",
      model: "I usually enjoy solving problems.",
      nextLine: "Are you commuting far to get here today?",
    },
    {
      question: "Are you commuting far to get here today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current/temporary): <b>am not</b>.",
      model: "No, I'm not. I'm actually staying nearby.",
      nextLine: "Do you ever work from home in your current role?",
    },
    {
      question: "Do you ever work from home in your current role?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I work from home twice a week.",
      nextLine: "Great, thanks for sharing that. Let's dig into your experience.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What's your current work situation? What do you usually look for? What are you doing at the moment?",
  },

  transfer: {
    question: "Forget the interview. What are you doing right now, at this exact moment? And what do you usually look for in a job or a project?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually work with a small team, I always research companies), Present Continuous for your current situation or something happening right now (I'm working at an agency, I'm looking for growth). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up the warm-up phase of an interview, friendly but professional.",
      say: ["You're sitting down for a job interview. I'm the interviewer, let's start with some easy questions."],
      do: ["Keep it warm and professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (current situation or happening right now).",
      say: ["Ask each question in character, like an interviewer genuinely getting to know the candidate."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole warm-up conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real work habits.",
      say: ["Forget the interview. What are you doing right now? What do you usually look for in a job?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for your current situation or something happening right now."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};
