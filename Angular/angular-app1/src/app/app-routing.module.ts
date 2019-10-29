import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbdulComponent } from './abdul/abdul.component';
import { ThangamaniComponent } from './thangamani/thangamani.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
    {path:"abdul",component:AbdulComponent},
    {path:"thangamani",component:ThangamaniComponent},
    {path:'about',component:AboutComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'education',component:EducationComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
