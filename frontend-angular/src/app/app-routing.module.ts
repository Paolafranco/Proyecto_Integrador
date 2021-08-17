import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/cart/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
 // {
   // path: 'upload',
    //component: UploadPageComponent,
    //canActivate: [VigilanteGuard]
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
