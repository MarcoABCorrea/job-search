import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/core/not-found/not-found.component';
import { JobsComponent } from 'app/jobs/jobs.component';
import { AppRoutes } from 'app/shared/constants';
import { HomeComponent } from '../core/home/home.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' },
	{ path: AppRoutes.HOME, component: HomeComponent },
  { path: AppRoutes.JOBS, component: JobsComponent },
  { path: AppRoutes.JOB_DETAIL, component: JobDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
