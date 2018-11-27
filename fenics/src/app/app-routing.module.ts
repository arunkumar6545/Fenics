import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewticketComponent } from './tickets/newticket/newticket.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: "newticket", component: NewticketComponent},
  {path:"**", component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
