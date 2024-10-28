import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component'; // Ensure this import is correct
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PondManagementComponent } from './components/pond-management/pond-management.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginUserComponent }, // Ensure this route is defined
  { path: 'register', component: RegisterUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'pond-management', component: PondManagementComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
