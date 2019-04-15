import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ToDoComponent } from './app.component';

@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ToDoComponent]
})
export class AppModule { }
