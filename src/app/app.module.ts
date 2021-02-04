import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserTransformPipe } from './pipes/user-transform.pipe';
import { UserComponent } from './components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserTransformPipe,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
