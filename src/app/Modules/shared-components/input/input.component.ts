import { Component, OnInit, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting:InputComponent,
    multi:true
  }]
})
export class InputComponent implements OnInit {
  @Input('type') public type: string='';
  @Input('placeholder') public placeholder='';

value:string='';
onChange!:(value:string)=>void;
onTouched!:()=>void;

  constructor() { }
  writeValue(obj: any): void {
    this.value= obj;
  }
  registerOnChange(fn: any): void {
   this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

}
