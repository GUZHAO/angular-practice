import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HomeModule} from './home/home.module';
import {ServicesModule} from './services/services.module';
import {MaterialModule} from './material/material.module';
import {ArtModule} from './art/art.module';
import { MustKnowComponent } from './must-know/must-know.component';
import { ProjectComponent } from './project/project.component';


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
    ArtModule,
    ServicesModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
