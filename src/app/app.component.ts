import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = "";


  onMenuTextClicked(evt: string) {
    console.log(evt);
    this.text = evt;
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo_white',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo_white.svg')
    );
  }
}
