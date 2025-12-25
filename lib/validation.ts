import { z } from 'zod';

export const automationRequestSchema = z.object({
  type: z.enum(['deal', 'content', 'task']),
  status: z.string(),
  id: z.string(),
  timestamp: z.string().datetime()
});

export type AutomationRequest = z.infer<typeof automationRequestSchema>;
