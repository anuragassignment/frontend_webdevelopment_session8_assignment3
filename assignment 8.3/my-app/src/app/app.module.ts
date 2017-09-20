import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CouplesService} from './couples.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CouplesService], // Second CouplesService called
  bootstrap: [AppComponent]
})
export class AppModule { }
