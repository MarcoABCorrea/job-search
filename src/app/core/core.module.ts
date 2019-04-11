import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidenavComponent,
    NotFoundComponent
  ],
  
  imports: [
    AppRoutingModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
  
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
