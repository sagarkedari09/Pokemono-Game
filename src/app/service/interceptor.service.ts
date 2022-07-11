import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { userLoginData } from '../app.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<userLoginData>, next: HttpHandler){
    let requiredToken = req.clone({
      setHeaders:{
        Authorization:`${localStorage.getItem('token')} || ''`
      }
    })
      return next.handle(requiredToken).pipe(tap(event => {
        if(event.type===HttpEventType.Response){
          if(event.status===200){
          }
        }
      }))
  }
  
  constructor() { }
}
