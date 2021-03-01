import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { ItemsComponent } from './_admin/items/items.component';
import { HomeComponent } from './_layout/home/home.component';
import { MainComponent } from './_layout/main/main.component';
import { NotFoundComponent } from './_errors/not-found/not-found.component';
import { ItemsFormComponent } from './_modals/items-form/items-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    HomeComponent,
    MainComponent,
    NotFoundComponent,
    ItemsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
