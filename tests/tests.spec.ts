import { test, expect } from '@playwright/test';

test('going to page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await expect(page).toHaveTitle('Swag Labs');

    
  });

  test('log in', async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await expect(page).toHaveTitle('Swag Labs');
      await page.getByPlaceholder('Username').fill('standard_user');
      await page.getByPlaceholder('Password').fill('secret_sauce');
      await page.getByRole('button', { name: /login/i }).click();
  });

  test('add to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    await page.click("[id='add-to-cart-sauce-labs-backpack']");
    await page.click("[id='add-to-cart-sauce-labs-bike-light']");
    await page.click("[id='add-to-cart-sauce-labs-bolt-t-shirt']");
    await page.click("[id='add-to-cart-sauce-labs-mrf-bat']");
  });

  test('validate', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    await page.click("[id='add-to-cart-sauce-labs-backpack']");
    await page.click("[id='add-to-cart-sauce-labs-bike-light']");
    await page.click("[id='add-to-cart-sauce-labs-bolt-t-shirt']");
    await page.click("[id='add-to-cart-sauce-labs-mrf-bat']");
  });