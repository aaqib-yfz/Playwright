import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/homePage";

test("Visit Our Website", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visitHomepage();
});
