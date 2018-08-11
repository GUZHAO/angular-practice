import {NgModule} from '@angular/core';
import {SkillsService} from './skills.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SkillsService
  ]
})
export class ServicesModule {
}
