import {
  buildFollowUpTask,
  buildFulfillmentChecklist,
  buildRepurposeTask,
  shouldCreateChecklist,
  shouldCreateFollowUp,
  shouldCreateRepurpose
} from '../../lib/automation';

describe('automation rules', () => {
  it('creates checklist for paid deals', () => {
    expect(shouldCreateChecklist('PAID')).toBe(true);
    expect(shouldCreateChecklist('BOOKED')).toBe(false);
  });

  it('creates repurpose task for posted content', () => {
    const task = buildRepurposeTask('content-1', '2024-01-01T00:00:00.000Z');
    expect(task.id).toBe('repurpose-content-1');
    expect(shouldCreateRepurpose('POSTED')).toBe(true);
  });

  it('creates follow-up task for completed tasks', () => {
    const task = buildFollowUpTask('task-1', '2024-01-01T00:00:00.000Z');
    expect(task.id).toBe('followup-task-1');
    expect(shouldCreateFollowUp('DONE')).toBe(true);
  });

  it('builds fulfillment checklist template', () => {
    const checklist = buildFulfillmentChecklist('deal-1');
    expect(checklist.items).toHaveLength(5);
  });
});
