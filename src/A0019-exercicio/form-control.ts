import validator from 'validator';

export default class FormControl {
  private form: HTMLFormElement;
  private formFields: NodeListOf<HTMLDivElement>;
  private errorMessage: NodeListOf<HTMLSpanElement>;
  private inputUsername: HTMLInputElement;
  private inputEmail: HTMLInputElement;
  private inputPassword: HTMLInputElement;
  private inputConfirmPassword: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('#form') as HTMLFormElement;
    this.formFields = document.querySelectorAll('#form-fields');
    this.errorMessage = document.querySelectorAll('#error-message');
    this.inputUsername = document.querySelector('#username') as HTMLInputElement;
    this.inputEmail = document.querySelector('#email') as HTMLInputElement;
    this.inputPassword = document.querySelector('#password') as HTMLInputElement;
    this.inputConfirmPassword = document.querySelector('#password2') as HTMLInputElement;

    this.listen();
  }

  listen(): void {
    this.form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e: SubmitEvent): void {
    console.log('Validando...');
  }
}
