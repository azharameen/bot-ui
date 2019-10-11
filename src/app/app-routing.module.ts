import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { UpdateJobseekerProfileComponent } from './update-jobseeker-profile/update-jobseeker-profile.component';
import { JobseekerProfileViewComponent } from './jobseeker-profile-view/jobseeker-profile-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'recommendations', component: RecommendationsComponent, canActivate: [AuthGuard] },
  { path: 'view-my-profile', component: JobseekerProfileViewComponent, canActivate: [AuthGuard] },
  { path: 'update-my-profile', component: UpdateJobseekerProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
