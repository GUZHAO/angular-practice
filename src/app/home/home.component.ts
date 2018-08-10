import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  skillList: string[] = [
    'New Skill',
    'Dispirit',
    'New Evolve',
    'Animalcule',
    'Cachaxia'
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

  onSkillChosen(skill: string) {
    console.log(skill);
    this.skillChosen = skill;
  }
}
