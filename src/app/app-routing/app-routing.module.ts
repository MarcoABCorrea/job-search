import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/core/not-found/not-found.component';
import { JobComponent } from 'app/job/job.component';
import { AppRoutes } from 'app/shared/constants';
import { HomeComponent } from '../core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' },
	{ path: AppRoutes.HOME, component: HomeComponent },
  { path: AppRoutes.JOB, component: JobComponent },
  { path: AppRoutes.JOB_DETAIL, component: JobComponent },
  { path: 'not-found', component: NotFoundComponent }
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
