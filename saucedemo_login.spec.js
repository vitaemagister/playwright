// @ts-check
const { test, expect } = require('@playwright/test');
import {user} from './credentials.js';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(user.login);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(user.password);
  await page.pause();
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  

});



