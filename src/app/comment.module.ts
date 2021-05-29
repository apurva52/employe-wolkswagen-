import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './comment.component';

import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
// primeng;
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,

    // primeng
    ButtonModule,
    CardModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
  bootstrap: [CommentComponent]
})
export class CommentModule { }
