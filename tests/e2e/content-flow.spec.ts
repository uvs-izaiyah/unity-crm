import { test, expect } from '@playwright/test';

test('content flow board renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Content pipeline' })).toBeVisible();
  await expect(page.getByText('Idea')).toBeVisible();
  await expect(page.getByText('Recorded')).toBeVisible();
  await expect(page.getByText('Posted')).toBeVisible();
});
