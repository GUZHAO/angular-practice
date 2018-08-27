import {NgModule} from '@angular/core';
import {SkillsService} from './skills.service';
import {HttpClientModule} from '@angular/common/http';
import {CarServiceService} from './car-service.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SkillsService,
    CarServiceService
  ]
})
export class ServicesModule {
}
