import { expect } from "@playwright/test";

export class AdminPage {
  page: any;
  adminPageLocators: { addUserButton: any; selectUserRole: any };

  constructor(page: any) {
    this.page = page;
    this.adminPageLocators = {
      addUserButton: this.page.getByRole("button", { name: "Add" }),
      selectUserRole: this.page.locator(".oxd-select-text--arrow").first(),
    };
  }

  async addUser(user: any) {
    const tableRow = this.page.locator(".oxd-table-row").nth(4);
    const employeeName = await tableRow
      .locator("div.oxd-table-cell")
      .nth(3)
      .textContent();

    await this.adminPageLocators.addUserButton.click();
    await this.adminPageLocators.selectUserRole.click();
    await this.page.getByRole("option", { name: "Admin" }).click();
    await this.page.getByPlaceholder("Type for hints...").fill(employeeName);

    await this.page.getByRole("option", { name: employeeName }).click();

    await this.page.locator(".oxd-select-text--arrow").last().click();
    await this.page.getByRole("option", { name: "Enabled" }).click();
    await this.page.getByRole("textBox").nth(2).fill(user);
    await this.page.getByRole("textBox").nth(3).fill("Test@123");
    await this.page.getByRole("textBox").nth(4).fill("Test@123");
    await this.page.getByRole("button", { name: "Save" }).click();

    await this.page.waitForNavigation();

    const usernameTb = await this.page.getByRole("textbox").nth(1);
    await expect(usernameTb).toBeVisible();
    await this.page.getByRole("textbox").nth(1).fill(`${user}`);
    await this.page.getByRole("button", { name: "Search" }).click();

    const userExists = await this.page
      .getByRole("cell", { name: user })
      .textContent();
    await expect(userExists).toBe(user);
  }
}
