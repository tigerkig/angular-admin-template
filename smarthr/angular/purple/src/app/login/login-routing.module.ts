import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobViewComponent } from './job-view/job-view.component';

const routes: Routes = [
    { path: '' , component: LoginComponent },
    {path:'forgot', component:ForgotComponent},
    {path:'register',component:RegisterComponent},
    {path:'otp',component:OtpComponent},
    {path:'lockscreen',component:LockscreenComponent},
    {path:'joblist',component:JobListComponent},
    {path:'jobview',component:JobViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
