import { expect } from "@playwright/test";

export class HomePage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async visitHomepage() {
    await this.page.goto("https://dd-demo-tau.vercel.app/web_elements.html");
    await expect(this.page).toHaveURL(
      "https://dd-demo-tau.vercel.app/web_elements.html",
    );
  }
}
