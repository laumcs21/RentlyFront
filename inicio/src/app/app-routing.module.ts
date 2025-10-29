import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../components/ad/pages/home.page';
import { LoginPage } from '../components/ad/pages/login.page';
import { RegisterPage } from '../components/ad/pages/register.page';
import { MainLayout } from './layout/main-layout.component';

const routes: Routes = [{
    path: '',
    component: MainLayout,             
    children: [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
    ]
  },
     { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
