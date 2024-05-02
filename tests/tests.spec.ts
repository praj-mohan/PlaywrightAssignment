import { test, expect } from '@playwright/test';
import fs from "fs";
import {parse} from "csv-parse/sync";
 
 const data = parse(fs.readFileSync("TestData.csv"), {columns:true, skip_empty_lines:true});

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

  test('add to cart and validation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        //console.log(item.ID);
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    
  });

  test('go to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
  });


  test('remove shirt', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await page.locator("[id='remove-sauce-labs-bolt-t-shirt']").click();

  });


  test('checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await page.locator("[id='remove-sauce-labs-bolt-t-shirt']").click();
    await page.locator("[id='checkout']").click();
    
  });

  test('info', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await page.locator("[id='remove-sauce-labs-bolt-t-shirt']").click();
    await page.locator("[id='checkout']").click();
    await expect(page.getByText("Checkout: Your Information")).toBeVisible();
    await page.getByPlaceholder('First Name').fill('Prajit');
    await page.getByPlaceholder('Last Name').fill('Mohan');
    await page.getByPlaceholder('Zip/Postal Code').fill('92126');
    await page.locator("[id='continue']").click();
  });

  test('check price', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await page.locator("[id='remove-sauce-labs-bolt-t-shirt']").click();
    await page.locator("[id='checkout']").click();
    await expect(page.getByText("Checkout: Your Information")).toBeVisible();
    await page.getByPlaceholder('First Name').fill('Prajit');
    await page.getByPlaceholder('Last Name').fill('Mohan');
    await page.getByPlaceholder('Zip/Postal Code').fill('92126');
    await page.locator("[id='continue']").click();
    const total = await page.locator('[data-test="total-label"]').textContent();
    if (total != null && +total >= 40) {
      await page.getByRole('button', { name: /Cancel/i }).click();

    }
    else {
      await page.getByRole('button', { name: /Finish/i }).click();
      await expect(page.getByText("Thank you for your order!")).toBeVisible();
      await page.getByRole('button', { name: /Back Home/i }).click();

    }
  });

  test('logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    //await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact: true })).toBeVisible();
    await page.waitForLoadState("networkidle");
    for (const item of data) {
      try {
        await expect(page.getByText(item.Products,{exact: true })).toBeVisible();
        await page.locator("[id='" + item.CartID +"']").click();
        
      }
      catch {
        console.log("The Product " + item.Products + " does not exist on the website.");
      }
    }
    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await page.locator("[id='remove-sauce-labs-bolt-t-shirt']").click();
    await page.locator("[id='checkout']").click();
    await expect(page.getByText("Checkout: Your Information")).toBeVisible();
    await page.getByPlaceholder('First Name').fill('Prajit');
    await page.getByPlaceholder('Last Name').fill('Mohan');
    await page.getByPlaceholder('Zip/Postal Code').fill('92126');
    await page.locator("[id='continue']").click();
    const total = await page.locator('[data-test="total-label"]').textContent();
    if (total != null && +total >= 40) {
      await page.getByRole('button', { name: /Cancel/i }).click();

    }
    else {
      await page.getByRole('button', { name: /Finish/i }).click();
      await expect(page.getByText("Thank you for your order!")).toBeVisible();
      await page.getByRole('button', { name: /Back Home/i }).click();

    }
    await page.locator("xpath=//*[@id=\"react-burger-menu-btn\"]").click();
    await page.locator("xpath=//*[@id=\"logout_sidebar_link\"]").click();
  });

