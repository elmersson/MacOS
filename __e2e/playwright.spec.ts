import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
   });

   test('has title', async ({ page }) => {  
    await expect(page).toHaveTitle(/Rasmus Elmersson/);
  });

  test('has boot', async ({ page }) => {
    const progressBar = await page.$('.h-1');
    expect(progressBar).not.toBeNull();

    await page.waitForFunction(() => {
      const progress = document.querySelector('.h-1') as HTMLElement;
      return progress.style.width === '100%';
    });
  });

  test('has booted', async ({ page }) => {
    await expect(page.getByText('Rasmus Elmersson')).toBeDefined();
  });