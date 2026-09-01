// FORGE, Online & Gaming Track, Lesson 4: "Watching Your Favorite Streamer or YouTuber"

export default {
  id: "forge-gaming-4",
  code: "L4",
  category: "Online & Gaming",
  situation: "Watching Your Favorite Streamer or YouTuber",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with a Sore Loser or Toxic Player",
    words: ["block", "report", "shake it off"],
  },
  words: [
    { word: "streamer", meaning: "someone who broadcasts themselves live online, often playing games", example: "My favorite streamer plays every night.", question: "Do you have a favorite streamer or YouTuber?" },
    { word: "subscribe", meaning: "to sign up to follow someone's channel", example: "I subscribed to his channel last year.", question: "What was the last channel you subscribed to?" },
    { word: "content", meaning: "videos, posts, or media someone creates", example: "She makes really funny content.", question: "What kind of content do you enjoy watching most?" },
    { word: "clip", meaning: "a short piece of video, usually a funny or exciting moment", example: "That clip of the streamer's reaction went viral.", question: "Tell me about a funny clip you've seen recently." },
    { word: "algorithm", meaning: "the system that decides what videos are shown to you", example: "The algorithm keeps showing me the same kind of videos.", question: "Do you feel like the algorithm knows what you like?" },
    { word: "inspired", meaning: "feeling motivated to do or create something because of someone else", example: "Watching her content inspired me to try making videos too.", question: "Has a streamer or YouTuber ever inspired you to try something?" },
  ],
  storytellingPrompt: "Tell me about a streamer or YouTuber you enjoy watching and why.",
};
