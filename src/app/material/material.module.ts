import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
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
    MatListModule
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
    MatListModule
  ]
})
export class MaterialModule {
}
