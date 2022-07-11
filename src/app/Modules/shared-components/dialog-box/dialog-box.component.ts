import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
 form!:FormGroup
  constructor(public fb: FormBuilder) { }
  popUpFormData(form:FormGroup){
    console.log(form.value)
  }
  

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    })
  }

}
