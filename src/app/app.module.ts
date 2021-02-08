import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'a', component: AComponent},
      {path: 'b', component: BComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
