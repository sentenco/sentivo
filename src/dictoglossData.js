// Writing category, Dictogloss activity: 2 activities per audience/level combo.
// Shape: { title, focus, warmup, preteach: [3], text, followup }
const DICTOGLOSS_SETS = {
  "teens-beginner": [
    {
      title: "My School Morning",
      focus: "Present simple, daily routine",
      warmup: "What do you do before school?",
      preteach: ["wake up", "bus", "first class"],
      text: "I wake up at seven. I eat breakfast at home. I take the bus to school. My first class starts at eight.",
      followup: "Tell me about your school morning.",
    },
    {
      title: "My Best Friend",
      focus: "be, has, likes",
      warmup: "Tell me about a friend.",
      preteach: ["friendly", "glasses", "basketball"],
      text: "My best friend is very friendly. He has short black hair and glasses. He likes basketball and video games. We talk every day after school.",
      followup: "Describe your own friend.",
    },
  ],
  "teens-intermediate": [
    {
      title: "School Pressure",
      focus: "Past simple + because / so",
      warmup: "When do students feel stressed?",
      preteach: ["assignment", "stressed", "finish on time"],
      text: "Last week, I had three big assignments, so I felt very stressed. I stayed up late on Tuesday because I wanted to finish everything on time. In the end, I submitted all my work, but I was very tired the next day.",
      followup: "Talk about a stressful school week.",
    },
    {
      title: "Social Media Habit",
      focus: "Present simple + frequency adverbs",
      warmup: "Is social media helpful or distracting?",
      preteach: ["scroll", "notifications", "distract"],
      text: "I usually check social media after dinner, but sometimes I scroll for too long. My phone notifications distract me when I try to study. Now I turn my phone off for one hour every night.",
      followup: "What are your phone habits?",
    },
  ],
  "adults-beginner": [
    {
      title: "My Workday",
      focus: "Present simple, time expressions",
      warmup: "What time do you start work?",
      preteach: ["office", "meeting", "lunch break"],
      text: "I start work at nine. I check my emails in the morning. I have a meeting before lunch. I go home at six.",
      followup: "Tell me about your workday.",
    },
    {
      title: "Saturday Routine",
      focus: "Present simple, sequence",
      warmup: "What do you usually do on weekends?",
      preteach: ["market", "clean", "relax"],
      text: "On Saturdays, I go to the market in the morning. Then I clean my apartment and cook lunch. In the afternoon, I relax and watch a movie.",
      followup: "Talk about your weekend routine.",
    },
  ],
  "adults-intermediate": [
    {
      title: "Travel Problem",
      focus: "Past simple + sequencing",
      warmup: "Have you ever had a travel problem?",
      preteach: ["delayed", "gate", "rebook"],
      text: "My flight was delayed for three hours, so I missed my connection. First, I spoke to the airline staff at the gate. Then they helped me rebook my ticket for the next morning, and I spent the night in a hotel near the airport.",
      followup: "Describe a difficult travel experience.",
    },
    {
      title: "Health Habit Change",
      focus: "Present perfect + present simple",
      warmup: "What do people do to stay healthy?",
      preteach: ["recently", "cut down", "energy"],
      text: "Recently, I have tried to improve my health habits. I have cut down on sugar and I walk for thirty minutes every evening. Because of these changes, I have more energy during the day.",
      followup: "What healthy changes have you made?",
    },
  ],
};

export default DICTOGLOSS_SETS;
