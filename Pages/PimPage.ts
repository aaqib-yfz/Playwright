export class PimPage {
  page: any;
  PimPageLocators: { addEmpButton: any};

  constructor(page: any) {
    this.page = page;
    this.PimPageLocators = {
      addEmpButton: this.page.getByRole("button", { name: "Add" }),
    };
  }

  async addEmp(user: any) {

    await this.PimPageLocators.addEmpButton.click();
    await this.page.getByPlaceholder("First Name").fill("Test");
    await this.page.getByPlaceholder("Middle Name").fill("User");
    const lastName = `Hamza${Math.floor(Math.random() * 1000000)}`;
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    const employeeId = Math.floor(100000 + Math.random() * 900000).toString();
    await this.page.getByLabel('Employee Id').fill(employeeId);
  }
}