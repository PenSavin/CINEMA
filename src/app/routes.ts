import { Route } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import path from 'path';

const routesConfig: Route[] = [
  {
    path: '/Login',
    component: LoginForm,
    title:'Login Page'
  },
];

export default routesConfig;
