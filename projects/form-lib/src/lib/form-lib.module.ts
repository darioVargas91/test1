import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
import { FormLibComponent } from './form-lib.component';
import { QuestionarioComponent } from './questionario/questionario.component';



@NgModule({
  declarations: [
    FormLibComponent,
    QuestionarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DndModule
  ],
  exports: [
    FormLibComponent
  ]
})
export class FormLibModule { }
