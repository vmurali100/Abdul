import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbdulComponent } from './abdul/abdul.component';
import { ThangamaniComponent } from './thangamani/thangamani.component';


const routes: Routes = [{path:'abdul',component:AbdulComponent},{path:'thangamani',component:ThangamaniComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
