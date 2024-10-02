import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PondManagementComponent } from './components/pond-management/pond-management.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUserComponent,
    RegisterUserComponent,
    PondManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
