import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { GokuComponent } from './goku/goku.component';
import { GokuSSComponent } from './goku-ss/goku-ss.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    BodyComponent,
    GokuComponent,
    GokuSSComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    BodyComponent,
    GokuComponent,
    GokuSSComponent
  ]
})
export class MainModule { }
