export class Email {
  constructor(private readonly value: string) {
    this.validate();
  }

  private validate() {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(this.value)) {
      throw new Error('Invalid email address');
    }
  }

  public get value() {
    return this.value;
  }
}
