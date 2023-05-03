import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import MaterialModule from './material.module';
import { TestInterceptor } from './interceptor/test.interceptor';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
