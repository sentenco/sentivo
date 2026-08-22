// Writing category, Message Reply activity: 2 scenarios per audience/level
// combo. Shape: { title, focus, from, context, incoming, mustInclude: [3],
// prompt, sample } -- "mustInclude" lists communicative functions the
// reply should hit (not vocabulary), since this activity practices
// functional/register writing, not word usage.
const MESSAGE_REPLY_SETS = {
  "teens-beginner": [
    {
      title: "Missed the Bus",
      focus: "Explaining, apologizing, simple past",
      from: "Mom",
      context: "Text message",
      incoming: "Where are you? School started 10 minutes ago!",
      mustInclude: ["Apologize", "Explain why", "Say when you'll arrive"],
      prompt: "Reply to Mom's text.",
      sample: "Sorry Mom! I missed the bus because I woke up late. I'm walking to school now. I'll be there in 10 minutes.",
    },
    {
      title: "Party Invitation",
      focus: "Accepting/declining, giving a reason",
      from: "Sam",
      context: "Text message",
      incoming: "Hey! My birthday party is Saturday at 3pm. Can you come?",
      mustInclude: ["Say yes or no", "Thank them", "Ask one question"],
      prompt: "Reply to Sam's invitation.",
      sample: "Hi Sam! Yes, I can come, thank you for inviting me! What time should I be there, and can I bring anything?",
    },
  ],
  "teens-intermediate": [
    {
      title: "Group Project Problem",
      focus: "Explaining a problem, proposing a solution",
      from: "Priya",
      context: "Class group chat",
      incoming: "Hey, did you finish your part of the project? We need to submit it tomorrow and I haven't seen your slides yet.",
      mustInclude: ["Explain the situation", "Apologize if needed", "Propose a next step"],
      prompt: "Reply to Priya in the group chat.",
      sample: "Hi Priya, sorry for the late reply! I've been stuck on the research part, but I'll finish my slides tonight and send them by 9pm so we still have time to review everything before tomorrow.",
    },
    {
      title: "Canceled Plans",
      focus: "Responding with understanding, suggesting an alternative",
      from: "Marcus",
      context: "Text message",
      incoming: "I'm really sorry, but I can't make it to the movies this weekend. Something came up with my family.",
      mustInclude: ["Show understanding", "Say it's okay", "Suggest another time"],
      prompt: "Reply to Marcus's text.",
      sample: "No worries at all, family comes first! Hope everything is okay. Want to reschedule for next weekend instead? We could go Sunday if that works better.",
    },
  ],
  "adults-beginner": [
    {
      title: "Landlord Message",
      focus: "Confirming a time, polite requests",
      from: "Mr. Alvarez (Landlord)",
      context: "Text message",
      incoming: "Hi, the plumber can come to fix your sink on Thursday at 2pm. Does that work for you?",
      mustInclude: ["Confirm or suggest another time", "Thank them", "Ask one question"],
      prompt: "Reply to your landlord.",
      sample: "Hi Mr. Alvarez, thank you for arranging this. Thursday at 2pm works for me. Will I need to be home the whole time, or can I leave a key?",
    },
    {
      title: "Coworker Question",
      focus: "Agreeing/declining a request, giving a reason",
      from: "Lena (Coworker)",
      context: "Text message",
      incoming: "Hey, would you be able to swap shifts with me next Friday? I have a doctor's appointment.",
      mustInclude: ["Say yes or no", "Give a reason if declining", "Be friendly"],
      prompt: "Reply to Lena.",
      sample: "Hi Lena, no problem, I can swap with you! I don't have any plans that day. Just let the manager know so it's official.",
    },
  ],
  "adults-intermediate": [
    {
      title: "Client Complaint",
      focus: "Apologizing, explaining, offering a resolution",
      from: "Mr. Delgado (Client)",
      context: "Email",
      incoming: "I'm writing to express my disappointment. My order was supposed to arrive last Monday, and it's now Friday with no update. This is affecting my business.",
      mustInclude: ["Apologize sincerely", "Briefly explain the delay", "Offer a concrete solution"],
      prompt: "Reply to Mr. Delgado's email.",
      sample: "Dear Mr. Delgado, I sincerely apologize for the delay and the inconvenience this has caused. Your order was held up due to a shipping issue on our end. I've arranged expedited delivery, and it will arrive by Monday. As an apology, we'd also like to offer a 15% discount on your next order.",
    },
    {
      title: "Meeting Reschedule",
      focus: "Proposing alternatives, professional tone",
      from: "Ms. Okafor (Colleague)",
      context: "Email",
      incoming: "I need to reschedule our 10am meeting tomorrow due to a conflict. Could we find another time this week?",
      mustInclude: ["Acknowledge the request", "Propose 2 alternative times", "Stay flexible"],
      prompt: "Reply to Ms. Okafor's email.",
      sample: "Hi Ms. Okafor, of course, no problem. I'm available Wednesday at 2pm or Thursday at 11am — please let me know whichever works best for you, and I'll update the calendar accordingly.",
    },
  ],
};

export default MESSAGE_REPLY_SETS;
