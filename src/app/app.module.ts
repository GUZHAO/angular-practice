import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HomeModule} from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArtComponent } from './art/art.component';
import {ServicesModule} from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
