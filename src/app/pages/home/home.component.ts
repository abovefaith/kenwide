import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isNavbarActive: boolean = false;   // Handle the navbar state
  isRegisterActive: boolean = false;
  isLoginActive: boolean = true;  // Login form is active by default
  isAccountFormActive: boolean = false;

  openNavbar() {
    this.isNavbarActive = true;
  }

  closeNavbar() {
    this.isNavbarActive = false;
  }



  showRegisterForm() {
    this.isRegisterActive = true;
    this.isLoginActive = false;
  }

  showLoginForm() {
    this.isRegisterActive = false;
    this.isLoginActive = true;
  }

  openAccountForm() {
    this.isAccountFormActive = true;
  }

  closeAccountForm() {
    this.isAccountFormActive = false;
  }

  onSubmitLogin() {
    // Handle login form submission
    console.log('Login form submitted');
  }

  onSubmitRegister() {
    // Handle register form submission
    console.log('Register form submitted');
  }

}
