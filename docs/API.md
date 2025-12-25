# API डॉक्युमेंटेशन

## Health
`GET /api/health`

Response:
```json
{ "status": "ok", "service": "command-center-crm" }
```

## Automation
`POST /api/automation`

Body:
```json
{
  "type": "deal" | "content" | "task",
  "status": "PAID" | "POSTED" | "DONE",
  "id": "uuid",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

Responses:
- `create_checklist` with checklist template
- `create_task` with task payload
- `noop`
