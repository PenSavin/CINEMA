import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  // Track active tab: 'login' or 'signup'
  activeTab = signal<'login' | 'signup'>('login');
  loginMethod = signal<'username'|'phone'>('username');
}
