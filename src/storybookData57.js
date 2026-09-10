// B1 Adults digital storybook, Book 57: "A Mix-Up at the Hotel"
// Static content -- no Supabase. First book in a new B1 Adults batch
// (Books 57-64) -- Adults has been A1/A2-only until now; this is the
// first B1 Adults content. Calibrated to the sourced B1 Adults spec
// (see memory project_b1_level_jump_and_approach): past simple + past
// continuous for work/travel/service incidents, modals (could/would/
// should/have to/might) for politeness and nuance, first conditional +
// controlled second conditional, relative clauses, linking devices
// (however, on the other hand, in the end, for example), specialized
// service/complaint vocabulary and multi-word verbs (look into, sort
// out, check in). Distinct register from the B1 Teens batch, which
// leans into abstract identity/emotional themes -- Adults B1 leans
// into workplace/service incidents and complaint resolution per the
// source document. Same Adults-track shape: 3 questions, 5 True/False,
// 5 Build-a-Sentence per chapter, shortest-to-longest.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Mix-Up at the Hotel";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Priya standing at a hotel front desk late at night, rolling suitcase beside her, looking at a confused receptionist checking a computer screen.";

export const CHARACTERS = [
  { name: "Priya", role: "The narrator, an adult traveling for work", look: "Blazer, rolling suitcase, professional but visibly tired after a long trip." },
  { name: "Mr. Bennett", role: "The hotel's night manager", look: "Name badge, calm demeanor, apologetic but resourceful under pressure." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Arriving Late",
    image: null,
    imageNote: "Priya walking into a quiet hotel lobby at night, suitcase in hand, checking her phone for the confirmation email.",
    story:
      "After a delayed flight and a long taxi ride, I finally arrive at my hotel close to eleven at night. I'm here for a work conference starting early tomorrow, so all I want is to check in and sleep. The lobby is quiet, with only a single receptionist working behind the desk at this hour. I pull up my confirmation email on my phone, the booking listed clearly under my name, Priya, and feel relieved that at least the booking itself should be straightforward. Walking toward the desk, I rehearse nothing in particular, since checking in is usually the easiest part of traveling. I could not have predicted how wrong that assumption was about to turn out to be.",
    questions: [
      { text: "What time does Priya arrive at the hotel?", answer: "Close to eleven at night." },
      { text: "Why is Priya traveling?", answer: "For a work conference." },
      { text: "What does Priya pull up on her phone?", answer: "Her confirmation email." },
    ],
    trueFalse: [
      { text: "Priya arrives close to eleven at night.", answer: true },
      { text: "Priya is traveling for a vacation.", answer: false },
      { text: "Priya pulls up her confirmation email.", answer: true },
      { text: "The lobby is extremely crowded at this hour.", answer: false },
      { text: "Priya expects checking in to be straightforward.", answer: true },
    ],
    buildSentence: [
      { target: "I finally arrive tonight.", jumbled: ["finally", "arrive", "I", "tonight."] },
      { target: "The lobby is quiet now.", jumbled: ["lobby", "is", "The", "quiet", "now."] },
      { target: "I feel relieved about this.", jumbled: ["I", "feel", "relieved", "about", "this."] },
      { target: "I could not have predicted this.", jumbled: ["I", "could", "not", "have", "predicted", "this."] },
      { target: "All I want is to check in and sleep.", jumbled: ["All", "I", "want", "is", "to", "check", "in", "and", "sleep."] },
    ],
    mySentencePrompt: "Write or say one sentence about arriving somewhere late and tired.",
    mySentenceExample: "I arrived late and tired after a long day of travel.",
  },
  {
    number: 2,
    title: "A Problem at Check-In",
    image: null,
    imageNote: "The receptionist frowning at her computer screen while Priya waits nervously, tapping her fingers on the counter.",
    story:
      "The receptionist types my name into the system, then pauses, her expression shifting from routine to visibly puzzled. “I'm sorry, Priya, but I don't see a reservation under this name,” she says, checking again more carefully. My stomach drops slightly, and I show her the confirmation number on my phone, hoping it's simply a search error. She looks it up manually this time, and after a moment, her face confirms my growing suspicion: something has genuinely gone wrong. “It looks like your reservation was accidentally cancelled during a system update earlier this week,” she explains apologetically. I ask if there's any way to sort this out tonight, given how late it already is.",
    questions: [
      { text: "What does the receptionist say when she checks the system?", answer: "That she doesn't see a reservation under Priya's name." },
      { text: "What does Priya show the receptionist?", answer: "The confirmation number on her phone." },
      { text: "What does the receptionist explain happened?", answer: "That the reservation was accidentally cancelled during a system update." },
    ],
    trueFalse: [
      { text: "The receptionist doesn't see a reservation under Priya's name.", answer: true },
      { text: "Priya shows her the confirmation number.", answer: true },
      { text: "The reservation was accidentally cancelled during a system update.", answer: true },
      { text: "Priya feels completely unconcerned by this news.", answer: false },
      { text: "Priya asks if this can be sorted out tonight.", answer: true },
    ],
    buildSentence: [
      { target: "My stomach drops slightly now.", jumbled: ["My", "stomach", "drops", "slightly", "now."] },
      { target: "She checks again more carefully.", jumbled: ["She", "checks", "again", "more", "carefully."] },
      { target: "Something has genuinely gone wrong.", jumbled: ["Something", "has", "genuinely", "gone", "wrong."] },
      { target: "I ask if we can sort this out.", jumbled: ["I", "ask", "if", "we", "can", "sort", "this", "out."] },
      { target: "Your reservation was accidentally cancelled during an update.", jumbled: ["Your", "reservation", "was", "accidentally", "cancelled", "during", "an", "update."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering an unexpected problem while traveling.",
    mySentenceExample: "I discovered an unexpected problem with my ticket while traveling.",
  },
  {
    number: 3,
    title: "Explaining the Situation",
    image: null,
    imageNote: "Priya speaking calmly but firmly to the receptionist, gesturing at her phone screen showing the original booking confirmation.",
    story:
      "I explain that I have an important conference beginning at eight tomorrow morning and genuinely cannot handle finding another hotel tonight. The receptionist apologizes again, explaining that she doesn't have the authority to resolve booking errors of this particular size. “Would it be possible to speak with someone who does?” I ask, trying to remain calm despite my mounting frustration. She nods and picks up the phone, calling the night manager. “He'll be right down, Priya, just give him a few minutes,” she tells me. While waiting, I remind myself that getting angry probably wouldn't speed up the solution anyway. Although this delay is frustrating, panicking certainly won't help resolve the situation any faster.",
    questions: [
      { text: "What does Priya explain about tomorrow?", answer: "That she has an important conference beginning at eight." },
      { text: "Why can't the receptionist resolve this herself?", answer: "She doesn't have the authority for errors of this size." },
      { text: "What does Priya ask to speak with someone?", answer: "Someone with the authority to help." },
    ],
    trueFalse: [
      { text: "Priya has an important conference starting at eight tomorrow.", answer: true },
      { text: "The receptionist has full authority to fix this herself.", answer: false },
      { text: "Priya asks to speak with someone who has more authority.", answer: true },
      { text: "The receptionist calls the night manager.", answer: true },
      { text: "Priya decides getting angry would speed things up.", answer: false },
    ],
    buildSentence: [
      { target: "I explain the situation calmly.", jumbled: ["explain", "the", "I", "situation", "calmly."] },
      { target: "She picks up the phone.", jumbled: ["She", "picks", "up", "the", "phone."] },
      { target: "Would it be possible to speak with someone?", jumbled: ["it", "be", "Would", "possible", "to", "speak", "with", "someone?"] },
      { target: "Panicking certainly won't help resolve this.", jumbled: ["Panicking", "certainly", "won't", "help", "resolve", "this."] },
      { target: "Getting angry probably wouldn't speed up the solution.", jumbled: ["Getting", "angry", "probably", "wouldn't", "speed", "up", "the", "solution."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm while explaining a problem to someone.",
    mySentenceExample: "I stayed calm while explaining a problem to customer service.",
  },
  {
    number: 4,
    title: "Meeting the Manager",
    image: null,
    imageNote: "Mr. Bennett walking into the lobby, shaking Priya's hand apologetically, both standing near the front desk.",
    story:
      "A few minutes later, Mr. Bennett, the night manager, arrives and introduces himself with a genuinely apologetic expression. He reviews the situation on his own computer, confirming what the receptionist had already explained about the system error. “I sincerely apologize for this inconvenience, Priya. Let me see what options we have available,” he says professionally. He checks the hotel's current occupancy, though I can tell from his expression that tonight might be fully booked. If there are truly no rooms left, I'm not entirely sure what my next step would even be. He asks me to wait just a few more minutes while he explores every possible solution.",
    questions: [
      { text: "Who arrives to help Priya?", answer: "Mr. Bennett, the night manager." },
      { text: "What does Mr. Bennett confirm?", answer: "The system error the receptionist explained." },
      { text: "What does Mr. Bennett check on his computer?", answer: "The hotel's current occupancy." },
    ],
    trueFalse: [
      { text: "Mr. Bennett is the hotel's night manager.", answer: true },
      { text: "Mr. Bennett confirms the system error happened.", answer: true },
      { text: "Mr. Bennett checks the hotel's current occupancy.", answer: true },
      { text: "Priya feels completely certain the hotel is fully booked.", answer: false },
      { text: "Mr. Bennett refuses to look into any solutions.", answer: false },
    ],
    buildSentence: [
      { target: "He introduces himself apologetically.", jumbled: ["He", "introduces", "himself", "apologetically."] },
      { target: "He checks the current occupancy.", jumbled: ["He", "checks", "the", "current", "occupancy."] },
      { target: "I sincerely apologize for this.", jumbled: ["I", "sincerely", "apologize", "for", "this."] },
      { target: "Let me see what options we have.", jumbled: ["Let", "me", "see", "what", "options", "we", "have."] },
      { target: "If there are no rooms left, I'm unsure what to do.", jumbled: ["If", "there", "are", "no", "rooms", "left,", "I'm", "unsure", "what", "to", "do."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone trying to fix a mistake professionally.",
    mySentenceExample: "The manager tried to fix the mistake professionally and quickly.",
  },
  {
    number: 5,
    title: "Bad News, Then Better News",
    image: null,
    imageNote: "Mr. Bennett looking at his screen with a concerned expression, then his face shifting to relief as he finds an available option.",
    story:
      "Mr. Bennett returns with disappointing news: tonight, the hotel is indeed completely full because of a large event nearby. My heart sinks, and I briefly consider whether I'll need to search for another hotel this late at night. However, he continues speaking before I can panic further, mentioning a possible alternative he'd like to suggest. “We do have a suite available, Priya, normally at a much higher rate, but I could offer it at your original price,” he explains. Relief washes over me instantly, though I'm still slightly cautious about whether this solution will actually work smoothly. “That would honestly solve everything,” I tell him, unable to hide my genuine gratitude.",
    questions: [
      { text: "What news does Mr. Bennett return with?", answer: "That the hotel is completely full tonight." },
      { text: "What does Mr. Bennett suggest as an alternative?", answer: "A suite at her original price." },
      { text: "How does Priya feel hearing this suggestion?", answer: "Relief." },
    ],
    trueFalse: [
      { text: "The hotel is completely full tonight.", answer: true },
      { text: "Mr. Bennett offers Priya a suite at her original price.", answer: true },
      { text: "Priya feels no relief hearing this suggestion.", answer: false },
      { text: "There is a large event happening nearby.", answer: true },
      { text: "Priya refuses this offer immediately.", answer: false },
    ],
    buildSentence: [
      { target: "My heart sinks slightly now.", jumbled: ["My", "heart", "sinks", "slightly", "now."] },
      { target: "Relief washes over me instantly.", jumbled: ["Relief", "washes", "over", "me", "instantly."] },
      { target: "We do have a suite available.", jumbled: ["We", "do", "have", "a", "suite", "available."] },
      { target: "That would honestly solve everything.", jumbled: ["That", "would", "honestly", "solve", "everything."] },
      { target: "I could offer it at your original price.", jumbled: ["I", "could", "offer", "it", "at", "your", "original", "price."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving good news after expecting something bad.",
    mySentenceExample: "I received good news after expecting something bad about my appointment.",
  },
  {
    number: 6,
    title: "Settling In",
    image: null,
    imageNote: "Priya standing in a spacious hotel suite, setting down her suitcase, looking relieved as she surveys the unexpectedly upgraded room.",
    story:
      "Mr. Bennett personally walks me up to the suite, apologizing once more for the entire situation along the way. The room turns out to be considerably nicer than what I had originally booked, with a small sitting area and a much larger bathroom. “If anything else comes up tonight, Priya, please don't hesitate to call the front desk directly,” he says before leaving. I thank him sincerely, genuinely appreciating how he handled what could have easily become a much worse situation. Setting my suitcase down, I finally allow myself to relax after nearly an hour of stressful uncertainty. Despite the rocky start, tonight is ending considerably better than I had feared just thirty minutes ago.",
    questions: [
      { text: "Who walks Priya up to the suite?", answer: "Mr. Bennett." },
      { text: "How does the suite compare to what Priya originally booked?", answer: "Considerably nicer." },
      { text: "What does Mr. Bennett tell Priya before leaving?", answer: "To call the front desk if anything else comes up." },
    ],
    trueFalse: [
      { text: "Mr. Bennett personally walks Priya up to the suite.", answer: true },
      { text: "The suite is considerably nicer than what Priya booked.", answer: true },
      { text: "Mr. Bennett tells her to call the front desk if needed.", answer: true },
      { text: "Priya feels this situation could not have gone worse.", answer: false },
      { text: "Priya finally allows herself to relax.", answer: true },
    ],
    buildSentence: [
      { target: "The room turns out nicer.", jumbled: ["room", "turns", "The", "out", "nicer."] },
      { target: "I thank him sincerely now.", jumbled: ["I", "thank", "him", "sincerely", "now."] },
      { target: "I finally allow myself to relax.", jumbled: ["I", "finally", "allow", "myself", "to", "relax."] },
      { target: "Please don't hesitate to call us.", jumbled: ["Please", "don't", "hesitate", "to", "call", "us."] },
      { target: "This is ending considerably better than I feared.", jumbled: ["This", "is", "ending", "considerably", "better", "than", "I", "feared."] },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult situation that ended better than expected.",
    mySentenceExample: "My difficult situation at the airport ended better than expected.",
  },
  {
    number: 7,
    title: "A Restless Night",
    image: null,
    imageNote: "Priya lying awake in the hotel bed, checking her alarm clock, still slightly stressed despite the comfortable room.",
    story:
      "Despite the comfortable suite, sleep doesn't come easily, since my mind keeps replaying the evening's stressful events repeatedly. I check my alarm three separate times, worried I might somehow oversleep after such an exhausting, chaotic arrival. Tomorrow's conference presentation weighs on me too, and I check my laptop one last time, the title slide still glowing with my name, Priya, in the corner, adding another layer of anxiety to an already restless mind. I remind myself that everything worked out reasonably well, in the end, despite how frightening it felt in the moment. Eventually, exhaustion overtakes my racing thoughts, and I drift into a light, uneasy sleep before morning arrives. Whatever tomorrow brings, at least tonight's hotel crisis has been fully resolved.",
    questions: [
      { text: "Why doesn't sleep come easily for Priya?", answer: "Her mind keeps replaying the evening's stressful events." },
      { text: "What does Priya check three times?", answer: "Her alarm." },
      { text: "What does Priya remind herself about the situation?", answer: "That everything worked out reasonably well in the end." },
    ],
    trueFalse: [
      { text: "Priya's mind keeps replaying the evening's events.", answer: true },
      { text: "Priya checks her alarm clock three separate times.", answer: true },
      { text: "Priya sleeps peacefully without any trouble.", answer: false },
      { text: "Priya reminds herself everything worked out reasonably well.", answer: true },
      { text: "Priya's hotel crisis remains unresolved by morning.", answer: false },
    ],
    buildSentence: [
      { target: "Sleep doesn't come easily tonight.", jumbled: ["Sleep", "doesn't", "come", "easily", "tonight."] },
      { target: "I check my alarm repeatedly.", jumbled: ["I", "check", "my", "alarm", "repeatedly."] },
      { target: "Everything worked out reasonably well.", jumbled: ["Everything", "worked", "out", "reasonably", "well."] },
      { target: "I drift into a light, uneasy sleep.", jumbled: ["I", "drift", "into", "a", "light,", "uneasy", "sleep."] },
      { target: "This crisis has been fully resolved by now.", jumbled: ["This", "crisis", "has", "been", "fully", "resolved", "by", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about a restless night after a stressful day.",
    mySentenceExample: "I had a restless night after a stressful day at work.",
  },
  {
    number: 8,
    title: "The Conference Begins",
    image: null,
    imageNote: "Priya standing confidently in a conference hall, nametag on, coffee in hand, looking composed despite the previous night's chaos.",
    story:
      "The next morning, I arrive at the conference feeling surprisingly composed, given everything that happened the night before. Coffee in hand, I check in smoothly this time, without a single complication interrupting the straightforward process. My presentation goes well, and afterward, several colleagues mention how organized and confident I appeared throughout the session. “Great talk, Priya, you made that look easy,” one of them tells me with a smile. Little do they know about the chaotic hotel situation that preceded this seemingly ordinary morning entirely. On the other hand, I suppose that quietly handling problems is exactly what professionalism sometimes actually requires. I make a mental note to always keep printed confirmations from now on, just in case something similar happens again.",
    questions: [
      { text: "How does Priya feel arriving at the conference?", answer: "Surprisingly composed." },
      { text: "How does Priya's presentation go?", answer: "Well." },
      { text: "What mental note does Priya make?", answer: "To always keep printed confirmations from now on." },
    ],
    trueFalse: [
      { text: "Priya arrives at the conference feeling surprisingly composed.", answer: true },
      { text: "Priya's presentation goes well.", answer: true },
      { text: "Colleagues mention how disorganized Priya seemed.", answer: false },
      { text: "Priya makes a note to keep printed confirmations.", answer: true },
      { text: "Priya tells everyone about the hotel chaos immediately.", answer: false },
    ],
    buildSentence: [
      { target: "I feel surprisingly composed today.", jumbled: ["I", "feel", "surprisingly", "composed", "today."] },
      { target: "My presentation goes well now.", jumbled: ["My", "presentation", "goes", "well", "now."] },
      { target: "I check in smoothly this time.", jumbled: ["I", "check", "in", "smoothly", "this", "time."] },
      { target: "I make a mental note now.", jumbled: ["I", "make", "a", "mental", "note", "now."] },
      { target: "Professionalism sometimes requires quietly handling problems.", jumbled: ["Professionalism", "sometimes", "requires", "quietly", "handling", "problems."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying professional despite a difficult situation behind the scenes.",
    mySentenceExample: "I stayed professional despite a difficult situation earlier that morning.",
  },
  {
    number: 9,
    title: "A Thank-You Note",
    image: null,
    imageNote: "Priya sitting at a desk writing a short email on her laptop, a small smile on her face, hotel receipt visible nearby.",
    story:
      "That evening, back in my room, I decide to write a short email thanking the hotel for how they handled last night's mistake. I sign it simply, “Best regards, Priya,” before starting the first paragraph. I mention Mr. Bennett specifically by name, describing how professionally and calmly he resolved a genuinely stressful situation. Writing this note takes only a few minutes, but it feels important to acknowledge good service, not only complain about bad service. I also mention, gently, that a system error like this could easily happen to someone less understanding. If handled poorly, this exact situation could have ruined someone's entire trip rather than simply becoming a memorable story. I send the email, feeling satisfied that I addressed the situation completely and fairly.",
    questions: [
      { text: "What does Priya decide to write that evening?", answer: "A thank-you email to the hotel." },
      { text: "Who does Priya mention specifically by name?", answer: "Mr. Bennett." },
      { text: "Why does Priya feel it's important to write this note?", answer: "To acknowledge good service, not just complain about bad service." },
    ],
    trueFalse: [
      { text: "Priya writes a thank-you email to the hotel.", answer: true },
      { text: "Priya mentions Mr. Bennett specifically by name.", answer: true },
      { text: "Priya feels it's important to acknowledge good service too.", answer: true },
      { text: "Priya only complains without mentioning anything positive.", answer: false },
      { text: "Priya feels satisfied after sending the email.", answer: true },
    ],
    buildSentence: [
      { target: "I decide to write an email.", jumbled: ["decide", "to", "I", "write", "an", "email."] },
      { target: "This takes only a few minutes.", jumbled: ["This", "takes", "only", "a", "few", "minutes."] },
      { target: "I mention him specifically by name.", jumbled: ["I", "mention", "him", "specifically", "by", "name."] },
      { target: "I feel satisfied about this now.", jumbled: ["I", "feel", "satisfied", "about", "this", "now."] },
      { target: "This could easily happen to someone less understanding.", jumbled: ["This", "could", "easily", "happen", "to", "someone", "less", "understanding."] },
    ],
    mySentencePrompt: "Write or say one sentence about acknowledging someone who helped you handle a problem well.",
    mySentenceExample: "I acknowledged the worker who helped me handle a problem well.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Priya sitting on a plane home, looking out the window with a reflective, calm expression, her printed confirmation tucked into her bag.",
    story:
      "On my flight home, I glance at my boarding pass, my name printed under the flight number, Priya, and reflect on how differently this entire trip could have unfolded without a bit of patience and clear communication. If I had panicked or argued unreasonably at check-in, the situation might have escalated rather than resolved so smoothly. Instead, staying calm and explaining my situation clearly allowed Mr. Bennett to actually help me effectively. This experience taught me something valuable about business travel: mistakes happen, but how people respond genuinely matters more than the mistake itself. I now keep printed confirmations for every trip, a small habit born directly from that chaotic hotel night. In the end, what could have been a disaster became simply an unusual story worth telling colleagues later.",
    questions: [
      { text: "What does Priya reflect on during her flight home?", answer: "How differently the trip could have unfolded without patience and clear communication." },
      { text: "What does Priya say might have happened if she had panicked?", answer: "The situation might have escalated rather than resolved smoothly." },
      { text: "What habit has Priya started because of this experience?", answer: "Keeping printed confirmations for every trip." },
    ],
    trueFalse: [
      { text: "Priya reflects on the trip during her flight home.", answer: true },
      { text: "Priya believes panicking might have made things worse.", answer: true },
      { text: "Priya has started keeping printed confirmations for trips.", answer: true },
      { text: "Priya believes mistakes never happen during business travel.", answer: false },
      { text: "Priya feels this became simply an unusual story to tell.", answer: true },
    ],
    buildSentence: [
      { target: "I reflect on this trip now.", jumbled: ["reflect", "on", "I", "this", "trip", "now."] },
      { target: "I now keep printed confirmations.", jumbled: ["I", "now", "keep", "printed", "confirmations."] },
      { target: "Mistakes happen, but responses matter more.", jumbled: ["Mistakes", "happen,", "but", "responses", "matter", "more."] },
      { target: "This became simply an unusual story worth telling.", jumbled: ["This", "became", "simply", "an", "unusual", "story", "worth", "telling."] },
      { target: "If I had panicked, the situation might have escalated.", jumbled: ["If", "I", "had", "panicked,", "the", "situation", "might", "have", "escalated."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from handling a stressful travel situation.",
    mySentenceExample: "I learned that staying calm helps resolve stressful travel situations.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
