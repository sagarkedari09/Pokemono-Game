import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from './btn/btn.component';
import { FormsModule } from '@angular/forms';
import { CustomStyleDirective } from './custom-style.directive';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    InputComponent,
    BtnComponent,
    CustomStyleDirective,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    BtnComponent,
    CustomStyleDirective
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class SharedComponentsModule { }
