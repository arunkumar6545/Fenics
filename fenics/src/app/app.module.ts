import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { TicketsModule } from './tickets/tickets.module';


import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';

import { WelcomeComponent } from './welcome/welcome.component';

//this is the starting point
//this is for master

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,   
    TicketsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
