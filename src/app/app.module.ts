import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { PannelComponent } from './pannel/pannel.component';
import { DiceComponent } from './dice/dice.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/* 

import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";               Copied from cristeena for prime-NG
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from 'primeng/splitbutton';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";
import { MessageModule } from 'primeng/message';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from "primeng/radiobutton"; */



@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    PannelComponent,
    DiceComponent,
    NavBarComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
 
  ],

 /* 
  CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SplitButtonModule,              inside imports
    DialogModule,
    DynamicDialogModule,
    ToastModule,
    MessageModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    TooltipModule,
    TieredMenuModule,
    CalendarModule,
    RadioButtonModule */

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
