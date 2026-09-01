// SEQUENCE, Travel & Transportation Track, Lesson 5: "Talking About a Hotel Stay"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-travel-5",
  code: "L5",
  situation: "Talking About a Hotel Stay",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Road Trip",
      questions: [
        { q: "Where did you stay during your last trip?", parts: [
          { label: "Core", text: "We stayed" },
          { label: "Place", text: "at a small hotel downtown" },
          { label: "Detail", text: "specifically close to everything we wanted to see" },
        ]},
        { q: "Where in the hotel did you spend the most time?", parts: [
          { label: "Core", text: "We spent the most time" },
          { label: "Place", text: "on the rooftop terrace" },
          { label: "Detail", text: "specifically because of the view" },
        ]},
        { q: "Where did a hotel issue happen during your stay?", parts: [
          { label: "Core", text: "An issue happened" },
          { label: "Place", text: "with our room's air conditioning" },
          { label: "Detail", text: "specifically it stopped working the first night" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why did you choose that particular hotel?",
        parts: [
          { label: "Core", text: "I chose it" },
          { label: "Purpose", text: "to stay close to the main attractions" },
          { label: "Reason", text: "because I didn't want to spend money on taxis" },
        ],
      },
      questions: [
        { q: "Why did you book that hotel instead of a cheaper option?", parts: [
          { label: "Core", text: "I booked it" },
          { label: "Purpose", text: "to have a more comfortable stay" },
          { label: "Reason", text: "because it was a special trip" },
        ]},
        { q: "Why did you contact the front desk during your stay?", parts: [
          { label: "Core", text: "I contacted them" },
          { label: "Purpose", text: "to fix the issue in our room" },
          { label: "Reason", text: "because it was too hot to sleep otherwise" },
        ]},
        { q: "Why do you usually read reviews before booking a hotel?", parts: [
          { label: "Core", text: "I read reviews" },
          { label: "Purpose", text: "to avoid any unpleasant surprises" },
          { label: "Reason", text: "because photos don't always tell the full story" },
        ]},
      ],
    },
  ],
};
