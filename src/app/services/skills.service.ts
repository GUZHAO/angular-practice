import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private baseUrl = 'assets/mockData/skill.json';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl);
  }
}
