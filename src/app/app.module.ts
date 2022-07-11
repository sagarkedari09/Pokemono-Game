import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './Modules/auth/auth.module';
import { HomePageModule } from './Modules/home-page/home-page.module';
import { SharedComponentsModule } from './Modules/shared-components/shared-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './service/interceptor.service';


@NgModule({
  declarations: [
    AppComponent, 
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    AuthModule,
    HomePageModule,
    SharedComponentsModule,
    BrowserAnimationsModule
    ],
  providers: [
    {  
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
