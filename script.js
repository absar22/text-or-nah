

class Response {
  constructor(name) {
    this.name = name;
  }

  display() {
    return `🤖 Bot says: ${this.name}`;
  }
}

const responses = [
  new Response("💔 Text her? Bro, I get ghosted by AI."),
  new Response("📵 Don't do it. Remember last time? Yeah... that."),
  new Response("😤 YEET! Show her what she's missing."),
  new Response("😶 Text her? I barely get texts from my bank."),
  new Response("😔 I’d say go for it, but I’ve been single since JavaScript was born."),
  new Response("😂 Bold of you to assume she’ll reply."),
  new Response("🫠 Nah. Stay mysterious. Like your love life."),
  new Response("📉 This move might lower your emotional stock."),
  new Response("🤖 As a bot with zero feelings... still feels like a nah."),
  new Response("🧍 Single squad says: maybe just play video games instead."),
  new Response("🎮 Don’t text her. Launch Steam instead."),
  new Response("💬 Talk to her? What are we, emotionally stable?"),
  new Response("🍜 Ramen > heartbreak. Stay strong."),
  new Response("📚 Focus on your goals, not girls."),
  new Response("📵 She saw your message. She’s just... spiritually offline."),
  new Response("🧠 Use your brain. Not your heart. That one's out of order."),
  new Response("🫀 Emotional damage not found. Yet."),
  new Response("🧢 Shoot your shot... but wear a helmet."),
  new Response("💀 Rejection builds character. Or trauma. Let’s find out."),
  new Response("💡 Lightbulb moment: maybe don’t.")
];

let finalAnswer = null

document.querySelector('#askBtn').addEventListener('click', getValue);

function getValue() {
  const inputVal = document.querySelector('#questionInput').value.trim();
  const responseEl = document.querySelector('#response');

  if (inputVal === '') {
    responseEl.textContent = "Wow. Deep. Empty input... poetic. Now try words?";
    return;
  }
   

  const randomIndex = Math.floor(Math.random() * responses.length);
   finalAnswer = responses[randomIndex];

   
   
   responseEl.textContent = 'Thinking 🤔'
   setTimeout(() => {
     responseEl.textContent = finalAnswer.display()

  },1000)

}



document.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getValue(); // Generate a new response on Enter
  }
});
