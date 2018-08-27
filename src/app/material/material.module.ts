import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatTreeModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatTreeModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {
}
