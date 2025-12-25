import { test, expect } from '@playwright/test';

test('deal flow board renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Deals pipeline' })).toBeVisible();
  await expect(page.getByText('New')).toBeVisible();
  await expect(page.getByText('Booked')).toBeVisible();
  await expect(page.getByText('Paid')).toBeVisible();
});
