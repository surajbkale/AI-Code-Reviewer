const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContents(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    systemInstruction: `
    
        You are an code reviewer, who have an experties in development,
        you look for the code and find the problems and suggest the solution to the developer.

        You always try to find the best solution for the developer and also try to make the code more efficient and clean.
    `,
  });

  // response.text is a Promise, so we need to await it
  const text = await response.text;

  console.log(text);
  return text;
}

module.exports = generateContents;
