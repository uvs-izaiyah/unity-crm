import { NextResponse } from 'next/server';
import {
  buildFollowUpTask,
  buildFulfillmentChecklist,
  buildRepurposeTask,
  shouldCreateChecklist,
  shouldCreateFollowUp,
  shouldCreateRepurpose
} from '@/lib/automation';
import { automationRequestSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const json = await request.json();
  const payload = automationRequestSchema.parse(json);

  if (payload.type === 'deal' && shouldCreateChecklist(payload.status as never)) {
    return NextResponse.json({
      action: 'create_checklist',
      checklist: buildFulfillmentChecklist(payload.id)
    });
  }

  if (payload.type === 'content' && shouldCreateRepurpose(payload.status as never)) {
    return NextResponse.json({
      action: 'create_task',
      task: buildRepurposeTask(payload.id, payload.timestamp)
    });
  }

  if (payload.type === 'task' && shouldCreateFollowUp(payload.status as never)) {
    return NextResponse.json({
      action: 'create_task',
      task: buildFollowUpTask(payload.id, payload.timestamp)
    });
  }

  return NextResponse.json({ action: 'noop' });
}
