import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './_admin/items/items.component';
import { NotFoundComponent } from './_errors/not-found/not-found.component';
import { HomeComponent } from './_layout/home/home.component';
import { MainComponent } from './_layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: "", redirectTo:'/items', pathMatch:"full"},
      { path: 'items', component: ItemsComponent },
      { path: 'home', component: HomeComponent },
      // { path: "unity", component: UnityWebglContainerComponent },
      // { path: "reportes", component: FichasAdminComponent },
      // { path: "inscriptions", component: InscriptionAdminComponent }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
