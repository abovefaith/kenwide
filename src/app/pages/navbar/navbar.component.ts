import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isNavbarActive: boolean = false;   // Handle the navbar state


  isAccountFormActive: boolean = false;
  isRegisterActive: boolean = false;
  isLoginActive: boolean = true;  // Login form is active by default

  constructor(private cdr:ChangeDetectorRef){

  }

  transitionToggleMenu(){
    this.isNavbarActive = !this.isNavbarActive;
    console.log(this.isNavbarActive);
    this.cdr.markForCheck();
  }

  openNavbar() {
    this.isNavbarActive = true;
  }

  closeNavbar() {
    this.isNavbarActive = false;
  }


  openAccountForm() {
    this.isAccountFormActive = true;
  }

  closeAccountForm() {
    this.isAccountFormActive = false;
  }

  showLoginForm() {
    this.isRegisterActive = false;
    this.isLoginActive = true;
  }

  showRegisterForm() {
    this.isRegisterActive = true;
    this.isLoginActive = false;
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
