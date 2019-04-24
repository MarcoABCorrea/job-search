import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';

const materialModules = [    
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
