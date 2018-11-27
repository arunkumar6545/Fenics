import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewticketComponent } from './newticket/newticket.component';



@NgModule({
  declarations: [NewticketComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports:[NewticketComponent]
})
export class TicketsModule { }
