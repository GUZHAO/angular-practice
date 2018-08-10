import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  skillList: string[] = [
    'Dispirit',
    'Animalcule',
  ];
  skillChosen: string;
  nm: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('I changed');
  }

  onSkillChosen1(skillList: string) {
    console.log(skillList);
    this.skillChosen = this.skillList[0] + " is a new Hex skill and it deals substantial damage to enmey.";
  }
  onSkillChosen2(skillList: string) {
    console.log(skillList);
    this.skillChosen = this.skillList[1] + " is a new Arcana skill that cna be evolved from Hex skill.";
  }
}
