// FORGE, Friends & Social Life Track, Lesson 2: "Texting and Group Chats"

export default {
  id: "forge-friends-2",
  code: "L2",
  category: "Friends & Social Life",
  situation: "Texting and Group Chats",
  hasCallback: true,
  callback: {
    fromSituation: "Making Plans with Friends",
    words: ["invite", "confirm", "hang out"],
  },
  words: [
    { word: "reply", meaning: "to answer a message", example: "I always reply to my friends quickly.", question: "Do you reply to messages quickly or do you take your time?" },
    { word: "mute", meaning: "to stop notifications from a chat", example: "I muted the group chat because it was too noisy.", question: "Have you ever muted a group chat? Why?" },
    { word: "screenshot", meaning: "a picture you take of your phone screen", example: "She sent a screenshot of the funny message.", question: "Tell me about a time you took a screenshot to show a friend." },
    { word: "awkward", meaning: "uncomfortable or embarrassing", example: "It was awkward when I texted the wrong person.", question: "Has anything awkward ever happened in one of your chats?" },
    { word: "spam", meaning: "too many repeated or annoying messages", example: "The group chat is full of spam today.", question: "Which of your chats gets the most spam?" },
    { word: "unread", meaning: "a message you haven't opened yet", example: "I have twenty unread messages from my friends.", question: "How many unread messages do you usually have?" },
  ],
  storytellingPrompt: "Tell me about something funny or awkward that happened in a group chat.",
};
