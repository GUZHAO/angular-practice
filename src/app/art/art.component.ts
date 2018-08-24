import {Component, OnInit} from '@angular/core';
import {SkillsService} from '../services/skills.service';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';
import {flatMap, take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  sList$: Observable<Skill[]>;

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.sList$ = this.skillsService.findAll().pipe(
      flatMap(s => s),
      take(5),
      toArray()
    );
  }

}
