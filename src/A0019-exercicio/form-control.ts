import validator from 'validator';

const SHOW_ERROR_MESSAGE = 'show-error-message';

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
    this.formFields = document.querySelectorAll('.form-fields');
    this.errorMessage = document.querySelectorAll('.error-message');
    this.inputUsername = document.querySelector('#username') as HTMLInputElement;
    this.inputEmail = document.querySelector('#email') as HTMLInputElement;
    this.inputPassword = document.querySelector('#password') as HTMLInputElement;
    this.inputConfirmPassword = document.querySelector('#password2') as HTMLInputElement;
  }

  init = () => this.listen();

  private listen(): void {
    this.form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      this.removeErrors();
      if (this.validate()) alert('Formulário validado com sucesso!');
    });
  }

  private validate(): boolean {
    const username = this.validateUsername();
    const email = this.validateEmail();
    const password = this.validatePassword();

    return username && email && password;
  }

  private validateUsername(): boolean {
    const username = this.inputUsername.value.trim();

    if (!username || username.length < 2) {
      this.showErrorMessage(0, 'O Usuário precisa conter pelo menos 2 caracteres.');
      return false;
    }

    return true;
  }

  private validateEmail(): boolean {
    const email = this.inputEmail.value.trim();

    if (!validator.isEmail(email)) {
      this.showErrorMessage(1, 'E-mail inválido.');
      return false;
    }

    return true;
  }

  private validatePassword(): boolean {
    const password = this.inputPassword.value.trim();

    if (!password || password.length < 3) {
      this.showErrorMessage(2, 'A Senha precisa conter pelo menos 3 caracteres.');

      return this.validateConfirmPassword(null);
    } else {
      return this.validateConfirmPassword(password);
    }
  }

  private validateConfirmPassword(password: string | null): boolean {
    const confirmPassword = this.inputConfirmPassword.value.trim();

    if (!password) {
      this.showErrorMessage(3, 'A Senha precisa ser preenchida corretamente.');
      return false;
    } else if (!confirmPassword || confirmPassword !== password) {
      this.showErrorMessage(3, 'As Senhas não coincidem.');
      return false;
    }

    return true;
  }

  private showErrorMessage(index: number, message: string): void {
    this.errorMessage[index].innerHTML = message;
    this.formFields[index].classList.add(SHOW_ERROR_MESSAGE);
  }

  private removeErrors(): void {
    this.formFields.forEach((field) => field.classList.remove(SHOW_ERROR_MESSAGE));
  }
}
