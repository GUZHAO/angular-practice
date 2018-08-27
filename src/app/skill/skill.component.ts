import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skillList: string[] = [
    'Component',
    'Module',
  ];
  skillChosen: string;
  skillChosen2: string;
  isChosen = false;


  constructor() {
  }

  ngOnInit() {

  }

  onSkillChosen1(skillList: string) {
    this.isChosen = !this.isChosen;

    if (this.isChosen) {
      this.skillChosen = 'Great, you have learnt how to create a ' + this.skillList[0] ;
    } else {
      this.skillChosen = '';
    }
  }

  onSkillChosen2(skillList: string) {
    this.skillChosen2 = 'Great, remember your app always has at least one ' + this.skillList[1];
  }
}
