import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'myLink/user',
      component: UsersComponent, children: [
        {path: ':id', component: UsersComponent}
      ]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
