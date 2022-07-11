import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from '../shared-components/dialog-box/dialog-box.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent
  ],
  entryComponents:[
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class HomePageModule { }
