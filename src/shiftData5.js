// SHIFT Lesson 5 — Present Simple vs Present Continuous
// Theme: daily routine vs right now

export default {
  id: "shift-5",
  code: "L5",
  title: "Present Simple vs Present Continuous",
  tenses: "Present Simple vs Present Continuous",
  theme: "Daily routine vs right now",
  mainGoal: "The learner distinguishes regular habits from actions happening now or around now.",
  tag: "Progress",

  warmup: {
    onScreen: "What do you usually do after dinner? What are you doing right now?",
    expectedOutput: "First answer in present simple, second in present continuous.",
  },
  contrast: {
    examples: ["I study at night.", "I'm studying now."],
    prompt: "Which one is a habit? Which one is happening now?",
  },
  makeIt: {
    onScreen: "base verb vs am/is/are + verb-ing",
    models: ["She walks to school.", "She isn't walking to school now.", "Is she walking to school now?"],
  },
  trigger: {
    prompts: [
      "What do you usually eat for breakfast?",
      "What are you eating today?",
      "Where do you usually study?",
      "Are you studying at home this week?",
    ],
    cue: "“Habit?” / “Now?”",
  },
  interrupt: {
    onScreen: "Live-room prompts — describe what's around you right now.",
    cueWords: ["wear", "sit", "hold", "open", "write"],
    teacherMove: "Describe normal habits, then the current moment.",
  },
  samestory: {
    task: "One topic, two frames: “I usually…” / “Right now, I'm…”",
    purpose: "Keep vocabulary stable, shift time meaning.",
  },
  clockturn: {
    baseSentence: "I read a book.",
    cueChain: ["every night", "now", "these days", "usually", "at the moment"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "What do you usually do on weekends?",
      "What are you doing differently this week?",
      "Tell me one habit and one current action.",
    ],
  },
  scorecard: {
    teacherNote: "Note confusion between permanent routine and temporary current action.",
    canDoLine: "I can tell apart a regular habit from something happening now or around now.",
  },
  retention: {
    homework: "Record 3 habit sentences and 3 “now / this week” sentences.",
  },

  teacherGuide: {
    cover: {
      goal: "New pair, familiar rhythm — routine vs now.",
      say: ["New pair today: present simple vs present continuous — habits vs right now."],
      do: ["This is usually the most intuitive pair so far — keep the pace brisk."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit one clean habit-then-now pair.",
      say: ["What do you usually do after dinner?", "What are you doing right now?"],
      do: ["Expect present simple then present continuous — listen before correcting."],
      timing: "2 min",
    },
    contrast: {
      goal: "Land the habit-vs-now distinction with a minimal pair.",
      say: ["I study at night.", "I'm studying now.", "Which one is a habit? Which one is happening now?"],
      do: ["Keep this quick — the concept is usually intuitive at this point."],
      timing: "2 min",
    },
    makeit: {
      goal: "Drill the form trio.",
      say: ["She walks to school.", "She isn't walking to school now.", "Is she walking to school now?"],
      do: ["Base verb vs am/is/are + verb-ing — quick drill, move on."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast alternating habit/now reps.",
      say: ["What do you usually eat for breakfast?", "What are you eating today?", "Where do you usually study?", "Are you studying at home this week?"],
      do: ["Cue with “habit?” or “now?” if he stalls."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Describe the live moment, correcting only tense slips.",
      say: ["Tell me about your normal habits, then describe what's happening right now — try: wear, sit, hold, open, write."],
      do: ["Interrupt only on tense errors."],
      timing: "3 min",
    },
    samestory: {
      goal: "One topic, both time frames.",
      say: ["I usually…", "Right now, I'm…"],
      do: ["Keep vocabulary stable across both versions — only the time meaning should shift."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate across a chain of habit/now markers.",
      say: ["I read a book.", "every night...", "now...", "these days...", "usually...", "at the moment..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live production, no support.",
      say: ["What do you usually do on weekends?", "What are you doing differently this week?", "Tell me one habit and one current action."],
      do: ["Delay feedback until the turn is complete."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score, watching for routine/temporary confusion specifically.",
      say: ["Let's score today."],
      do: ["Note any confusion between a permanent routine and a temporary current action — that's the specific error to watch for here."],
      timing: "2 min",
    },
    retention: {
      goal: "Recyclable production task for next lesson.",
      say: ["Before next time: record 3 habit sentences and 3 ‘now / this week’ sentences."],
      do: ["Reused as review material at the start of Lesson 6."],
      timing: "1 min",
    },
  },
};
