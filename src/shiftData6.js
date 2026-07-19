// SHIFT Lesson 6 — Will vs Going to
// Theme: instant decisions vs plans/predictions with evidence

export default {
  id: "shift-6",
  code: "L6",
  title: "Will vs Going to",
  tenses: "Will vs Going to",
  theme: "Instant decisions vs plans/predictions with evidence",
  mainGoal: "The learner distinguishes spontaneous decisions from intentions or likely results.",
  tag: "Progress",

  warmup: {
    onScreen: "What will you do after this class? What are you going to do this weekend?",
    expectedOutput: "Short spontaneous decision vs pre-existing plan.",
  },
  contrast: {
    examples: ["I'll answer it.", "I'm going to visit my cousin this weekend."],
    prompt: "Which sounds like a decision now? Which sounds like a plan?",
  },
  makeIt: {
    onScreen: "will + base verb / be going to + base verb",
    models: ["I won't stay long.", "Are you going to study tonight?"],
  },
  trigger: {
    prompts: [
      "The phone is ringing.",
      "Your friend invites you out tomorrow.",
      "The sky is very dark.",
      "You forgot your homework.",
    ],
    cue: "“Decision now?” / “Already planned?” / “Evidence?”",
  },
  interrupt: {
    onScreen: "Situation cards: weather, invitation, surprise task, forgotten item, family plan.",
    teacherMove: "Interrupt only at a meaning mismatch, not a form slip.",
  },
  samestory: {
    task: "Give one answer as a plan, then one as a decision made now.",
    example: "“I'm going to cook tonight.” / “Okay, I'll cook tonight.”",
  },
  clockturn: {
    baseSentence: "I help you.",
    cueChain: ["right now", "this weekend", "look at those clouds", "okay, no problem", "already planned"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "What are you going to do next weekend?",
      "Your friend says, “I'm tired.” What will you say?",
      "Give one plan and one instant decision.",
    ],
  },
  scorecard: {
    teacherNote: "Focus on meaning-based choice, not just form.",
    canDoLine: "I can tell apart a spontaneous decision from an intention or a prediction based on evidence.",
  },
  retention: {
    homework: "Make 4 future sentences, then label each as plan or instant decision.",
  },

  teacherGuide: {
    cover: {
      goal: "New pair — this one is about meaning, not just form, since both are grammatically simple.",
      say: ["New pair today: will vs going to — this one is about meaning, since both are easy to form."],
      do: ["Flag up front: the challenge here is choosing correctly, not building the sentence."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit one spontaneous decision and one pre-existing plan.",
      say: ["What will you do after this class?", "What are you going to do this weekend?"],
      do: ["Expect a spontaneous “I'll…” and a pre-planned “I'm going to…” — listen before correcting."],
      timing: "2 min",
    },
    contrast: {
      goal: "Land the decision-now vs plan distinction.",
      say: ["I'll answer it.", "I'm going to visit my cousin this weekend.", "Which sounds like a decision now? Which sounds like a plan?"],
      do: ["Push for the meaning explanation, not just the label."],
      timing: "2 min",
    },
    makeit: {
      goal: "Quick form drill — light touch since form isn't the real challenge.",
      say: ["I won't stay long.", "Are you going to study tonight?"],
      do: ["Don't over-invest here — move to meaning practice quickly."],
      timing: "3 min",
    },
    trigger: {
      goal: "React to a situation with the right future form based on meaning.",
      say: ["The phone is ringing.", "Your friend invites you out tomorrow.", "The sky is very dark.", "You forgot your homework."],
      do: ["Cue with “decision now?” “already planned?” or “evidence?” as needed."],
      timing: "3 min",
    },
    interrupt: {
      goal: "React naturally to situation cards, correcting meaning mismatches only.",
      say: ["Here's a situation — react naturally: weather, an invitation, a surprise task, a forgotten item, a family plan."],
      do: ["Interrupt only at a meaning mismatch — not a minor form slip."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same idea as both a plan and a spontaneous decision.",
      say: ["I'm going to cook tonight.", "Okay, I'll cook tonight."],
      do: ["Have him produce his own pair using a real weekend idea."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate as the cue shifts between plan-evidence and decision-now signals.",
      say: ["I help you.", "right now...", "this weekend...", "look at those clouds...", "okay, no problem...", "already planned..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live production, meaning-first.",
      say: ["What are you going to do next weekend?", "Your friend says, “I'm tired.” What will you say?", "Give one plan and one instant decision."],
      do: ["Delay feedback until after the full turn."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score with emphasis on meaning-based choice, not just correct form.",
      say: ["Let's score today."],
      do: ["Focus on whether the choice matched the actual meaning — form accuracy matters less in this specific lesson."],
      timing: "2 min",
    },
    retention: {
      goal: "Recyclable labeling task for next lesson's review.",
      say: ["Before next time: make 4 future sentences, then label each one as a plan or an instant decision."],
      do: ["Reused as the warm-up review at the start of Lesson 7."],
      timing: "1 min",
    },
  },
};
