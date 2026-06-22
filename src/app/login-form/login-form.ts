import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  activeTab = signal<'login' | 'signup'>('login');
  loginMethod = signal<'username' | 'phone'>('username');

  submit(){
    alert('Register Successfully')
  }

  username = '';
  password = '';
}
