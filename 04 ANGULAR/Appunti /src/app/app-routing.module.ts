import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/routingModule/page-not-found/page-not-found.component';
import { AboutComponent } from './components/routingModule/about/about.component';
import { ContactComponent } from './components/routingModule/contact/contact.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProductServicesComponent } from './components/product-services/product-services.component';
import { AdminPageComponent } from './components/routingModule/admin-page/admin-page.component';
import { UtentiForAdminComponent } from './components/cartelle_figlie_admin/utenti-for-admin/utenti-for-admin.component';
import { ReportComponent } from './components/cartelle_figlie_admin/report/report.component';
import { HomepageComponent } from './components/routingModule/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  //{path: 'about', component: AboutComponent},
  //{path: 'contatti', component: ContactComponent},
  //{path: 'cocktail', component: ProductServicesComponent},
  //{path: 'user-list', component: UserListComponent},
  //{path: 'user-list/:name', component: UserListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profilo', component: UserListComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
