import { CanvasClient } from '@uniformdev/canvas'

export const client = new CanvasClient({
  apiKey: process.env.UNIFORM_API_KEY,
  projectId: process.env.UNIFORM_PROJECT_ID,
});