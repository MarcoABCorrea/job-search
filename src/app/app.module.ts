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
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent
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
