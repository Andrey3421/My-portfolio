require('dotenv').config();
const {OpenAI} = require("openai");

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

async function requestToGpt(request) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: request }],
    model: "gpt-4o-mini",
  });

  return completion.choices[0].message.content;
}

module.exports = requestToGpt;