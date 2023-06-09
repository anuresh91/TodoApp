import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {AddTodoItemComponent} from './components/add-todo-item/add-todo-item.component';
import { ShowTodoItemsComponent } from './components/show-todo-items/show-todo-items.component'

import { FilterPipe } from './pipes/filter.pipe';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    ShowTodoItemsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule, // Seperate module for Angular Material
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
