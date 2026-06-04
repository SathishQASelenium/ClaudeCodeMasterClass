import { test, expect } from '@playwright/test';
import fs from 'fs';

test('explore page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const content = await page.content();
  fs.writeFileSync('page_content.html', content);
});
