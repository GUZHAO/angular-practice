import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtComponent} from './art.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ArtComponent
  ],
  exports: [
    ArtComponent,
    MaterialModule
  ]
})
export class ArtModule {
}
