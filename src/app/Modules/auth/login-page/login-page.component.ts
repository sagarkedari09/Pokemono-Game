import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Modules/auth/auth.service';
import { Router } from '@angular/router';
import { BtnComponent } from '../../shared-components/btn/btn.component'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup
  formSubmitted:boolean = false;

  constructor(public fb:FormBuilder, private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, 
      Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmitClick(loginForm:FormGroup){
    this.authservice.loginUser(loginForm.value).subscribe((res)=>{
      // console.log(res);
     localStorage.setItem('token', Object(res).data.token);
      this.router.navigate(['home']);
      
    })
  }

}
