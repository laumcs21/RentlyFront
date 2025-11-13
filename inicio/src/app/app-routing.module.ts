import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '@pages/home-page/home.page';
import { LoginPage } from '@pages/login-page/login-page.component';
import { RegisterPage } from '@pages/register-page/register-page.component';
import { MainLayout } from './layout/main-layout.component';
import { RoleGuard } from '../guards/role.guard';
import { UserHomePage } from '@pages/user-home-page/user-home.page';
import { ListingDetailPage } from '@pages/listing-detail-page/listing-detail.page';
import { HostDashboardPage } from '@pages/host-dashboard-page/host-dashboard.page';
import { HostEditAlojamientoPage } from '@pages/host-edit-alojamiento-page/host-edit-alojamiento.page';
import { HostReservasPage } from '@pages/host-reservas-page/host-reservas.page';
import { HostCreateAlojamientoPage } from '@pages/host-create-alojamiento-page/host-create-alojamiento.page';


const routes: Routes = [{
    path: '',
    component: MainLayout,             
    children: [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'listing/:id', component: ListingDetailPage }, 
    {
    path: 'user/home',
    component: UserHomePage,
    canActivate: [RoleGuard],
    data: { roles: ['USUARIO'] }
  },
    { path: 'host', component: HostDashboardPage },
{
  path: 'host/alojamientos/:id/editar',
  component: HostEditAlojamientoPage
},
{ path: 'host/reservas', component: HostReservasPage },
{ path: 'host/alojamientos/nuevo', component: HostCreateAlojamientoPage }
    ]
  },
     { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
