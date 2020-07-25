import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {AccountsComponent} from './accounts/accounts.component'

const routes: Routes = [{path:"", component:MainPageComponent},
{path:"login", component:LoginComponent},
{path:"signup", component:RegisterComponent},
	{path:"account", component:AccountsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
