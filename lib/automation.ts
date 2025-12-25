import { addDays } from './date';

export type DealStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'BOOKED'
  | 'PAID'
  | 'DELIVERING'
  | 'COMPLETE'
  | 'UPSELL'
  | 'LOST';

export type ContentStatus =
  | 'IDEA'
  | 'SCRIPTED'
  | 'RECORDED'
  | 'POSTED'
  | 'REPURPOSED'
  | 'ARCHIVED';

export type TaskStatus = 'TODO' | 'DOING' | 'DONE' | 'BLOCKED';

export interface ChecklistTemplate {
  id: string;
  title: string;
  items: string[];
}

export interface AutomationTask {
  id: string;
  title: string;
  dueAt: string;
  source: 'deal' | 'content' | 'task';
}

export function buildFulfillmentChecklist(dealId: string): ChecklistTemplate {
  return {
    id: `checklist-${dealId}`,
    title: 'Client fulfillment checklist',
    items: [
      'Confirm kickoff date',
      'Collect intake form + assets',
      'Deliver first milestone',
      'Send recap + next steps',
      'Request testimonial'
    ]
  };
}

export function buildRepurposeTask(contentId: string, postedAt: string): AutomationTask {
  return {
    id: `repurpose-${contentId}`,
    title: 'Repurpose posted content',
    dueAt: addDays(postedAt, 2),
    source: 'content'
  };
}

export function buildFollowUpTask(taskId: string, completedAt: string): AutomationTask {
  return {
    id: `followup-${taskId}`,
    title: 'Follow up on completed task',
    dueAt: addDays(completedAt, 1),
    source: 'task'
  };
}

export function shouldCreateChecklist(status: DealStatus) {
  return status === 'PAID';
}

export function shouldCreateRepurpose(status: ContentStatus) {
  return status === 'POSTED';
}

export function shouldCreateFollowUp(status: TaskStatus) {
  return status === 'DONE';
}
