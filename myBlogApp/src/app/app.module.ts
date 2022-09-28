import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { BlogModule } from './blog/blog.module';
import { BookModule } from './book/book.module';
import { CommandBarComponent } from './shared/component/command-bar/command-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    CommandBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    BookModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
