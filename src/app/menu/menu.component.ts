import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() menuClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  // onMenuClick(evt) {
  //   console.log(evt);
  //   const text = evt.target.innerHTML;
  //   this.menuClicked.emit(text);
  // }

  onMustknow() {
    this.router.navigateByUrl('http://google.com');
  }
}
