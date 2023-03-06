import { surpriseMePrompts } from "../constants";

export function getRandomPrompts(propmt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompts(prompt);

  return randomPrompt;
}
