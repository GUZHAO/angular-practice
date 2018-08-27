import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillComponent} from './skill.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SkillComponent
  ],
  exports: [
    SkillComponent,
    MaterialModule
  ]
})
export class SkillModule {
}
