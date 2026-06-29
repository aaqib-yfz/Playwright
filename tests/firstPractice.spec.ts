import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { DashboardPage } from "../Pages/dashboardPage";
import { AdminPage } from "../Pages/adminPage";
import { CreateUser } from "../helpers/createUser";

test("Visit Our Website", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const adminPage = new AdminPage(page);
  const createUser = new CreateUser();

  const userName = createUser.getRandomUserName(5);

  await loginPage.visitLoginPage();
  await loginPage.login();
  await page.waitForLoadState("networkidle");
  await dashboardPage.visitAdminPage();

  await adminPage.addUser(userName);
  await adminPage.deleteUser(userName);
});
