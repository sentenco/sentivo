// B1 Adults digital storybook, Book 60: "A Delayed Flight"
// Static content -- no Supabase. Fourth book in the B1 Adults batch
// (57-64). Travel-disruption scenario, matching the B1 Adults spec's
// emphasis on negotiation, rebooking, and communicating with staff
// under pressure. First air-travel story in the whole feature.
// Adults-track shape: 3 questions, 5 True/False, 5 Build-a-Sentence
// per chapter. Images not generated yet -- image/coverImage null.

export const STORYBOOK_TITLE = "A Delayed Flight";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Daniel standing at an airport gate, looking up at a departures board showing a delayed flight, suitcase beside him.";

export const CHARACTERS = [
  { name: "Daniel", role: "The narrator, an adult traveling for a family event", look: "Travel jacket, backpack, boarding pass in hand." },
  { name: "Ms. Kwan", role: "The airline's gate agent", look: "Airline uniform, headset, calm and efficient under pressure." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Waiting at the Gate",
    image: null,
    imageNote: "Daniel sitting near an airport gate, checking his watch and glancing at the departures board nearby.",
    story:
      "I arrive at the airport with plenty of time, hoping to relax a little before my flight to my sister's wedding this weekend. Boarding is supposed to begin in forty minutes, so I find a seat near the gate and settle in comfortably. Glancing occasionally at the departures board, everything still appears completely normal, with my flight listed as on time. I use the extra time to reply to a few messages and grab a quick coffee from a nearby kiosk. Little do I know, this peaceful waiting period is about to be interrupted rather suddenly.",
    questions: [
      "Why is Daniel traveling this weekend?",
      "How much time does Daniel have before boarding?",
      "What does Daniel do while he waits?",
    ],
    trueFalse: [
      { text: "Daniel is traveling for his sister's wedding.", answer: true },
      { text: "Boarding is supposed to begin in forty minutes.", answer: true },
      { text: "The departures board shows his flight is delayed already.", answer: false },
      { text: "Daniel uses the time to reply to messages and get coffee.", answer: true },
      { text: "Daniel expects his peaceful waiting to be interrupted soon.", answer: false },
    ],
    buildSentence: [
      { target: "I arrive with plenty of time.", jumbled: ["I", "arrive", "with", "plenty", "of", "time."] },
      { target: "I find a seat near the gate.", jumbled: ["I", "find", "a", "seat", "near", "the", "gate."] },
      { target: "Everything still appears completely normal.", jumbled: ["Everything", "still", "appears", "completely", "normal."] },
      { target: "I grab a quick coffee nearby.", jumbled: ["I", "grab", "a", "quick", "coffee", "nearby."] },
      { target: "This peaceful waiting is about to be interrupted.", jumbled: ["This", "peaceful", "waiting", "is", "about", "to", "be", "interrupted."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting calmly at an airport before a flight.",
    mySentenceExample: "I waited calmly at the airport before my flight.",
  },
  {
    number: 2,
    title: "An Announcement",
    image: null,
    imageNote: "Daniel looking up from his phone as an overhead announcement plays, other passengers around him reacting too.",
    story:
      "Suddenly, an announcement crackles over the speakers, and I catch the word “delay” before fully understanding the rest. Looking up at the departures board, I notice my flight's status has changed from on time to a new, later departure. Around me, other passengers groan quietly, some immediately pulling out their phones to check connecting flights or plans. My own heart sinks slightly, since I specifically need to arrive in time for tonight's rehearsal dinner. I approach the nearest gate agent, hoping to understand exactly how long this delay might actually last.",
    questions: [
      "What word does Daniel catch in the announcement?",
      "What does Daniel notice on the departures board?",
      "Why does Daniel's heart sink slightly?",
    ],
    trueFalse: [
      { text: "Daniel catches the word 'delay' in the announcement.", answer: true },
      { text: "The departures board now shows a later departure time.", answer: true },
      { text: "Other passengers seem completely unbothered by the news.", answer: false },
      { text: "Daniel needs to arrive in time for the rehearsal dinner.", answer: true },
      { text: "Daniel approaches a gate agent to ask about the delay.", answer: true },
    ],
    buildSentence: [
      { target: "An announcement crackles over the speakers.", jumbled: ["An", "announcement", "crackles", "over", "the", "speakers."] },
      { target: "My heart sinks slightly now.", jumbled: ["My", "heart", "sinks", "slightly", "now."] },
      { target: "I approach the nearest gate agent.", jumbled: ["I", "approach", "the", "nearest", "gate", "agent."] },
      { target: "Other passengers groan quietly around me.", jumbled: ["Other", "passengers", "groan", "quietly", "around", "me."] },
      { target: "I need to arrive in time for tonight's dinner.", jumbled: ["I", "need", "to", "arrive", "in", "time", "for", "tonight's", "dinner."] },
    ],
    mySentencePrompt: "Write or say one sentence about hearing unexpected news that changed your plans.",
    mySentenceExample: "I heard unexpected news that changed my travel plans.",
  },
  {
    number: 3,
    title: "Asking for Details",
    image: null,
    imageNote: "Daniel speaking politely with Ms. Kwan at the gate desk, other worried passengers forming a small line behind him.",
    story:
      "Ms. Kwan, the gate agent, greets me calmly despite what must already be a stressful shift for her. I explain that I have an important event tonight and ask whether she could tell me more about the reason for this delay. She explains that the delay is due to a mechanical issue being checked by the maintenance crew right now. “Would it be possible to know roughly how long this might take?” I ask, trying to sound polite despite my growing worry. She mentions it's currently estimated at two hours, though she admits that number could still change slightly.",
    questions: [
      "Who does Daniel speak with about the delay?",
      "What is causing the delay, according to Ms. Kwan?",
      "How long is the delay currently estimated to be?",
    ],
    trueFalse: [
      { text: "Ms. Kwan greets Daniel calmly despite a stressful shift.", answer: true },
      { text: "The delay is due to a mechanical issue being checked.", answer: true },
      { text: "Daniel asks how long the delay might take.", answer: true },
      { text: "The delay is currently estimated at two hours.", answer: true },
      { text: "Ms. Kwan guarantees the estimate will not change.", answer: false },
    ],
    buildSentence: [
      { target: "She greets me calmly now.", jumbled: ["She", "greets", "me", "calmly", "now."] },
      { target: "This is due to a mechanical issue.", jumbled: ["This", "is", "due", "to", "a", "mechanical", "issue."] },
      { target: "That number could still change slightly.", jumbled: ["That", "number", "could", "still", "change", "slightly."] },
      { target: "I try to sound polite despite my worry.", jumbled: ["I", "try", "to", "sound", "polite", "despite", "my", "worry."] },
      { target: "Would it be possible to know how long this takes?", jumbled: ["Would", "it", "be", "possible", "to", "know", "how", "long", "this", "takes?"] },
    ],
    mySentencePrompt: "Write or say one sentence about asking politely for more information during a problem.",
    mySentenceExample: "I asked politely for more information about the delay.",
  },
  {
    number: 4,
    title: "Doing the Math",
    image: null,
    imageNote: "Daniel sitting back down, phone in hand, calculating times on a notes app, a worried expression on his face.",
    story:
      "Sitting back down, I quickly calculate whether a two-hour delay would still allow me to reach the dinner on time. Even in the best case, I would land only about an hour before the event actually starts, without accounting for traffic. If the delay grows any longer, however, missing the rehearsal dinner entirely becomes a genuine possibility. I text my sister, explaining the situation honestly rather than promising something I'm not actually certain I can deliver. She replies quickly, reassuring me not to stress and that family will understand if I simply arrive a little later.",
    questions: [
      "What does Daniel calculate while sitting back down?",
      "What happens in the best-case scenario?",
      "How does Daniel's sister respond to his text?",
    ],
    trueFalse: [
      { text: "Daniel calculates whether he can still reach the dinner on time.", answer: true },
      { text: "In the best case, he would land an hour before the event.", answer: true },
      { text: "Daniel promises his sister he'll definitely arrive on time.", answer: false },
      { text: "Missing the dinner entirely becomes a genuine possibility.", answer: true },
      { text: "His sister reassures him not to stress about it.", answer: true },
    ],
    buildSentence: [
      { target: "I quickly calculate the timing now.", jumbled: ["I", "quickly", "calculate", "the", "timing", "now."] },
      { target: "I text my sister honestly.", jumbled: ["I", "text", "my", "sister", "honestly."] },
      { target: "She replies quickly to this.", jumbled: ["She", "replies", "quickly", "to", "this."] },
      { target: "Family will understand if I arrive later.", jumbled: ["Family", "will", "understand", "if", "I", "arrive", "later."] },
      { target: "Missing the dinner entirely becomes a genuine possibility.", jumbled: ["Missing", "the", "dinner", "entirely", "becomes", "a", "genuine", "possibility."] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining an honest situation instead of making an uncertain promise.",
    mySentenceExample: "I explained the honest situation instead of an uncertain promise.",
  },
  {
    number: 5,
    title: "A Longer Wait",
    image: null,
    imageNote: "The departures board now showing an even later time, Daniel standing and looking at it with a frustrated but composed expression.",
    story:
      "An hour later, another announcement extends the delay further, and my stomach tightens as I glance up at the board. The new estimate now shows an additional ninety minutes, considerably longer than what was originally suggested earlier. Frustration builds inside me, though I remind myself that getting upset with the staff certainly wouldn't fix the mechanical issue itself. Instead, I walk over calmly and ask Ms. Kwan whether there are any alternative flights I could possibly be rebooked onto. She checks her system thoroughly, mentioning that one earlier connecting option might actually still be available.",
    questions: [
      "What happens an hour later?",
      "How much longer does the new estimate add?",
      "What does Daniel ask Ms. Kwan?",
    ],
    trueFalse: [
      { text: "Another announcement extends the delay further.", answer: true },
      { text: "The new estimate adds an additional ninety minutes.", answer: true },
      { text: "Daniel decides getting upset with staff would fix the issue.", answer: false },
      { text: "Daniel asks about alternative flights he could be rebooked onto.", answer: true },
      { text: "Ms. Kwan says no other options exist at all.", answer: false },
    ],
    buildSentence: [
      { target: "My stomach tightens now.", jumbled: ["My", "stomach", "tightens", "now."] },
      { target: "Frustration builds inside me slowly.", jumbled: ["Frustration", "builds", "inside", "me", "slowly."] },
      { target: "I walk over calmly now.", jumbled: ["I", "walk", "over", "calmly", "now."] },
      { target: "She checks her system thoroughly.", jumbled: ["She", "checks", "her", "system", "thoroughly."] },
      { target: "One earlier connecting option might still be available.", jumbled: ["One", "earlier", "connecting", "option", "might", "still", "be", "available."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm even when frustrated by a longer wait.",
    mySentenceExample: "I stayed calm even though the longer wait frustrated me.",
  },
  {
    number: 6,
    title: "An Alternative Option",
    image: null,
    imageNote: "Ms. Kwan pointing at her screen, explaining a rebooking option to Daniel, who leans in to look carefully.",
    story:
      "Ms. Kwan explains that a flight leaving from a nearby gate departs sooner and could actually get me there in time. However, it would involve a layover, which means slightly more walking and one additional security check along the way. “If you're comfortable with that, I could rebook you right now before the seats fill up,” she offers helpfully. Weighing my options quickly, I decide the layover route sounds considerably better than possibly missing tonight's dinner altogether. I thank her sincerely and agree to the change, relieved that a workable solution actually exists after all.",
    questions: [
      "What does Ms. Kwan explain about the alternative flight?",
      "What would the alternative flight involve?",
      "What does Daniel decide to do?",
    ],
    trueFalse: [
      { text: "The alternative flight departs from a nearby gate sooner.", answer: true },
      { text: "The alternative flight involves a layover.", answer: true },
      { text: "Daniel decides the layover route sounds better than missing dinner.", answer: true },
      { text: "Daniel refuses the rebooking offer immediately.", answer: false },
      { text: "Daniel feels relieved a workable solution exists.", answer: true },
    ],
    buildSentence: [
      { target: "This departs from a nearby gate.", jumbled: ["This", "departs", "from", "a", "nearby", "gate."] },
      { target: "I thank her sincerely now.", jumbled: ["I", "thank", "her", "sincerely", "now."] },
      { target: "I agree to the change now.", jumbled: ["I", "agree", "to", "the", "change", "now."] },
      { target: "I could rebook you right now.", jumbled: ["I", "could", "rebook", "you", "right", "now."] },
      { target: "A workable solution actually exists after all.", jumbled: ["A", "workable", "solution", "actually", "exists", "after", "all."] },
    ],
    mySentencePrompt: "Write or say one sentence about choosing a practical solution instead of waiting for a perfect one.",
    mySentenceExample: "I chose a practical solution instead of waiting for a perfect one.",
  },
  {
    number: 7,
    title: "Rushing to the Gate",
    image: null,
    imageNote: "Daniel walking quickly through the airport terminal, boarding pass in hand, glancing at signs overhead.",
    story:
      "With my new boarding pass printed, I hurry through the terminal, weaving carefully between other travelers along the way. The layover gate is farther than I expected, so I pick up my pace, watching the time remaining before boarding closes. Along the way, I pass through the additional security check quickly, thankful the line isn't as long as it could have been. Arriving at the gate slightly out of breath, I find boarding has just begun, which means I made it with time to spare. Settling into my seat moments later, I finally allow myself to relax just a little.",
    questions: [
      "What does Daniel do once his new boarding pass is printed?",
      "What does Daniel pass through along the way?",
      "What does Daniel find when he arrives at the gate?",
    ],
    trueFalse: [
      { text: "Daniel hurries through the terminal with his new boarding pass.", answer: true },
      { text: "The layover gate turns out closer than expected.", answer: false },
      { text: "Daniel passes through an additional security check.", answer: true },
      { text: "Daniel finds boarding has just begun when he arrives.", answer: true },
      { text: "Daniel misses the flight despite rushing.", answer: false },
    ],
    buildSentence: [
      { target: "I hurry through the terminal.", jumbled: ["I", "hurry", "through", "the", "terminal."] },
      { target: "I pick up my pace now.", jumbled: ["I", "pick", "up", "my", "pace", "now."] },
      { target: "Boarding has just begun now.", jumbled: ["Boarding", "has", "just", "begun", "now."] },
      { target: "I finally allow myself to relax.", jumbled: ["I", "finally", "allow", "myself", "to", "relax."] },
      { target: "I made it with time to spare.", jumbled: ["I", "made", "it", "with", "time", "to", "spare."] },
    ],
    mySentencePrompt: "Write or say one sentence about rushing to make it somewhere just in time.",
    mySentenceExample: "I rushed to make it to the gate just in time.",
  },
  {
    number: 8,
    title: "A Quick Message",
    image: null,
    imageNote: "Daniel sitting in his airplane seat, phone in hand, typing a quick message before the flight departs.",
    story:
      "Before the plane doors close, I quickly text my sister, updating her on my new flight and revised arrival time. She responds with a relieved message, saying the timing should now work out perfectly for the rehearsal dinner. I put my phone away as the flight attendants begin their final safety announcements before departure. Looking out the window, I feel a mix of exhaustion and relief after an unexpectedly stressful few hours at the airport. Whatever happens with the layover, at least I'm finally moving in the right direction now.",
    questions: [
      "What does Daniel do before the plane doors close?",
      "How does his sister respond to the update?",
      "How does Daniel feel looking out the window?",
    ],
    trueFalse: [
      { text: "Daniel texts his sister before the plane doors close.", answer: true },
      { text: "His sister responds saying the timing should work out.", answer: true },
      { text: "Daniel feels only exhaustion and no relief at all.", answer: false },
      { text: "Flight attendants begin final safety announcements.", answer: true },
      { text: "Daniel feels he is finally moving in the right direction.", answer: true },
    ],
    buildSentence: [
      { target: "I quickly text my sister now.", jumbled: ["I", "quickly", "text", "my", "sister", "now."] },
      { target: "I put my phone away now.", jumbled: ["I", "put", "my", "phone", "away", "now."] },
      { target: "This should now work out perfectly.", jumbled: ["This", "should", "now", "work", "out", "perfectly."] },
      { target: "I feel a mix of exhaustion and relief.", jumbled: ["I", "feel", "a", "mix", "of", "exhaustion", "and", "relief."] },
      { target: "I'm finally moving in the right direction now.", jumbled: ["I'm", "finally", "moving", "in", "the", "right", "direction", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relief after a stressful situation finally starts improving.",
    mySentenceExample: "I felt relief after the stressful delay finally improved.",
  },
  {
    number: 9,
    title: "Arriving at the Dinner",
    image: null,
    imageNote: "Daniel walking into a warmly lit restaurant, still in travel clothes, being hugged by his sister at the entrance.",
    story:
      "After landing and a short taxi ride, I arrive at the restaurant just as the rehearsal dinner is getting underway. My sister spots me immediately, rushing over with a relieved hug, clearly happy I made it despite everything. “I can't believe you actually made it! I was honestly a little worried,” she admits, laughing with relief. I explain the whole delay, rebooking, and rushing through the airport, and she just shakes her head, amused. Sitting down at the table finally, exhausted but present, I realize the stressful journey was completely worth it in the end.",
    questions: [
      "When does Daniel arrive at the restaurant?",
      "How does his sister react when she sees him?",
      "How does Daniel feel sitting down at the table?",
    ],
    trueFalse: [
      { text: "Daniel arrives just as the rehearsal dinner is getting underway.", answer: true },
      { text: "His sister rushes over with a relieved hug.", answer: true },
      { text: "His sister says she wasn't worried at all.", answer: false },
      { text: "Daniel explains the whole delay and rebooking story.", answer: true },
      { text: "Daniel feels the journey was completely worth it.", answer: true },
    ],
    buildSentence: [
      { target: "I arrive at the restaurant now.", jumbled: ["I", "arrive", "at", "the", "restaurant", "now."] },
      { target: "She spots me immediately now.", jumbled: ["She", "spots", "me", "immediately", "now."] },
      { target: "I explain the whole delay now.", jumbled: ["I", "explain", "the", "whole", "delay", "now."] },
      { target: "I was honestly a little worried.", jumbled: ["I", "was", "honestly", "a", "little", "worried."] },
      { target: "This stressful journey was completely worth it.", jumbled: ["This", "stressful", "journey", "was", "completely", "worth", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally arriving somewhere important after a stressful journey.",
    mySentenceExample: "I finally arrived at the dinner after a stressful journey.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Daniel sitting at the dinner table later that night, relaxed and smiling, looking back on the day with quiet satisfaction.",
    story:
      "Later that night, reflecting on the entire day, I realize how differently things could have gone without a bit of flexibility. If I had insisted on waiting for my original flight stubbornly, I might have genuinely missed tonight's dinner entirely. Instead, staying calm, asking clear questions, and accepting a reasonable alternative got me here in time after all. I've learned that travel disruptions, however stressful in the moment, usually have some workable solution if you look for one. In the end, what could have been a disappointing story became instead a memorable one worth telling for years.",
    questions: [
      "What does Daniel reflect on later that night?",
      "What might have happened if he had insisted on waiting?",
      "What has Daniel learned about travel disruptions?",
    ],
    trueFalse: [
      { text: "Daniel reflects on the entire day later that night.", answer: true },
      { text: "Insisting on the original flight might have made him miss dinner.", answer: true },
      { text: "Daniel believes travel disruptions usually have no solution.", answer: false },
      { text: "Staying calm and asking questions got him there in time.", answer: true },
      { text: "Daniel feels this became a memorable story worth telling.", answer: true },
    ],
    buildSentence: [
      { target: "I reflect on the day now.", jumbled: ["I", "reflect", "on", "the", "day", "now."] },
      { target: "This got me here in time.", jumbled: ["This", "got", "me", "here", "in", "time."] },
      { target: "This became a memorable story instead.", jumbled: ["This", "became", "a", "memorable", "story", "instead."] },
      { target: "Travel disruptions usually have a workable solution.", jumbled: ["Travel", "disruptions", "usually", "have", "a", "workable", "solution."] },
      { target: "If I had insisted stubbornly, I might have missed dinner.", jumbled: ["If", "I", "had", "insisted", "stubbornly,", "I", "might", "have", "missed", "dinner."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from handling a travel disruption calmly.",
    mySentenceExample: "I learned that staying flexible helps during travel disruptions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
