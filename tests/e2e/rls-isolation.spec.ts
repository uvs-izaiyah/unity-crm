import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const schema = fs.readFileSync('supabase/migrations/0001_init.sql', 'utf-8');

test('rls policies are defined', async () => {
  expect(schema).toContain('enable row level security');
  expect(schema).toContain('create policy');
});
