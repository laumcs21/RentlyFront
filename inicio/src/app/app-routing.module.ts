import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../components/ad/pages/home.page';
import { LoginPage } from '../components/ad/pages/login.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
