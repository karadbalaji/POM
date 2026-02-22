import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
console.log(".......................... from the POM test form page login.js class ..........................")
  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')
console.log(".......................... from the hardcoded test form page login.js class ..........................")
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
   await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});