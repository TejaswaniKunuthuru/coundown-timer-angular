import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,BrowserAnimationsModule],
  declarations: [ AppComponent,CountdownTimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
