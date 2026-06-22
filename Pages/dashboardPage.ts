import { expect } from "@playwright/test";

export class DashboardPage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async visitAdminPage() {
    await this.page.getByRole("link", { name: "Admin" }).click();
  }
}
