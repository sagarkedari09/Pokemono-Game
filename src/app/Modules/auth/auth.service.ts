import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http'
import { userLoginData } from '../../app.types';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  

  constructor(private http:HttpClient) { }
  loginUser(userData:userLoginData):Observable<userLoginData>{
    // alert('login done');
    return this.http.post("http://localhost:3000/auth/login",userData) as Observable<userLoginData>
  }
}
