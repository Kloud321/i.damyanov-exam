const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://i-damyanov-exam.onrender.com/Add-Product');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  