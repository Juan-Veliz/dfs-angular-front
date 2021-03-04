import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbModalModule, NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { ItemsComponent } from './_admin/items/items.component';
import { HomeComponent } from './_layout/home/home.component';
import { MainComponent } from './_layout/main/main.component';
import { NotFoundComponent } from './_errors/not-found/not-found.component';
import { ItemsFormComponent } from './_modals/items-form/items-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FileUploadModule } from 'ng2-file-upload'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faRedo, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ItemSearchComponent } from './_search/item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    HomeComponent,
    MainComponent,
    NotFoundComponent,
    ItemsFormComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faRedo, faEdit, faSearch);
  }
 }
