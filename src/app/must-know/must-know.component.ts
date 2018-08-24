import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';
import {SkillsService} from '../services/skills.service';
import {flatMap, take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-must-know',
  templateUrl: './must-know.component.html',
  styleUrls: ['./must-know.component.scss']
})
export class MustKnowComponent implements OnInit {
  sList$: Observable<Skill[]>;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.sList$ = this.skillsService.findAll().pipe(
      flatMap(s => s),
      take(5),
      toArray()
    );
  }

}
