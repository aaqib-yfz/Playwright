import { expect } from "@playwright/test";
import "dotenv/config";

export class LoginPage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async visitLoginPage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

 // async login() {
   // await this.page.locator('input[name = "username"]').fill(env.USER_NAME);
   // await this.page.locator('input[name = "password"]').fill(env.PASSWORD);
   // await this.page.locator('button[type = "submit"]').click();
   async login() {
const env = (globalThis as any).process?.env ?? {};
  console.log("USER_NAME:", env.USER_NAME);
  console.log("PASSWORD:", env.PASSWORD);

  await this.page
    .locator('input[name="username"]')
    .fill(env.USER_NAME!);

  await this.page
    .locator('input[name="password"]')
    .fill(env.PASSWORD!);

  await this.page
    .locator('button[type="submit"]')
    .click();
}
}

