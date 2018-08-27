import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';
import {SkillsService} from '../services/skills.service';
import {Car} from '../models/car';
import {CarServiceService} from '../services/car-service.service';

@Component({
  selector: 'app-must-know',
  templateUrl: './must-know.component.html',
  styleUrls: ['./must-know.component.scss']
})
export class MustKnowComponent implements OnInit {
  sList$: Observable<Skill[]>;
  sCar$: Observable<Car[]>;

  constructor(private skillsService: SkillsService
  , private carService: CarServiceService) {
  }

  ngOnInit() {
    this.sList$ = this.skillsService.findAll().pipe(
      // flatMap(s => s),
      // take(5),
      // toArray()
    );
    this.sCar$ = this.carService.findAll();
  }

}
