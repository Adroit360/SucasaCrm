import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InquiriesComponent } from './pages/inquiries/inquiries.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { UnitsComponent } from './pages/units/units.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { OpenHousesComponent } from './pages/open-houses/open-houses.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { AgentsComponent } from './pages/agents/agents.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AccountsComponent,
    CustomersComponent,
    ContactsComponent,
    InquiriesComponent,
    PropertiesComponent,
    UnitsComponent,
    ListingsComponent,
    OpenHousesComponent,
    LayoutComponent,
    AgentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
