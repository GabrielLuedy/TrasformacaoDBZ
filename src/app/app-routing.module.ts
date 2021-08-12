import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './main/body/body.component';
import { GokuSSComponent } from './main/goku-ss/goku-ss.component';
import { GokuComponent } from './main/goku/goku.component';
import { HomeComponent } from './main/home/home.component';
import { MenuComponent } from './main/menu/menu.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"body",component:BodyComponent},
  {path:"goku",component:GokuComponent},
  {path:"goku-ss",component:GokuSSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
