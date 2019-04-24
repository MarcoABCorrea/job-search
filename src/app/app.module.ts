import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* App Root */
import { AppComponent } from './app-root/app.component';
/* App Navigation */
import { AppRoutingModule } from './app-routing/app-routing.module';
/* Feature Modules */
import { CoreModule } from './core/core.module';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
