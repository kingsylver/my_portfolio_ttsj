import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvAppComponent } from './pages/cv-app/cv-app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent
  },
  /*{
    path: '**',
    component: PageNotFoundComponent
  },*/
  {
    path: 'CV',
    component:CvAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  PageNotFoundComponent,
];
