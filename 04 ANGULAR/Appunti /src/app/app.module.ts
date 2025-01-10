import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsercizioNgIfComponent } from './components/esercizio-ng-if/esercizio-ng-if.component';
import { EsercizioNgForComponent } from './components/esercizio-ng-for/esercizio-ng-for.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductDetailComponentComponent } from './components/product-detail-component/product-detail-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServicesComponent } from './components/product-services/product-services.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomepageComponent } from './components/routingModule/homepage/homepage.component';
import { PageNotFoundComponent } from './components/routingModule/page-not-found/page-not-found.component';
import { ContactComponent } from './components/routingModule/contact/contact.component';
import { AboutComponent } from './components/routingModule/about/about.component';
import { AdminPageComponent } from './components/routingModule/admin-page/admin-page.component';
import { UtentiForAdminComponent } from './components/cartelle_figlie_admin/utenti-for-admin/utenti-for-admin.component';
import { ReportComponent } from './components/cartelle_figlie_admin/report/report.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EsercizioNgIfComponent,
    EsercizioNgForComponent,
    ProductListComponentComponent,
    ProductDetailComponentComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    ProductServicesComponent,
    UserListComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutComponent,
    AdminPageComponent,
    UtentiForAdminComponent,
    ReportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

