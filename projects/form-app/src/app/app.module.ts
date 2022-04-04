import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormLibModule } from 'form-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
