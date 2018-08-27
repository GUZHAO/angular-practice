import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HomeModule} from './home/home.module';
import {ServicesModule} from './services/services.module';
import {MaterialModule} from './material/material.module';
import {SkillModule} from './skill/skill.module';
import { MustKnowComponent } from './must-know/must-know.component';
import { ProjectComponent } from './project/project.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MustKnowComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SkillModule,
    ServicesModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
