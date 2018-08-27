import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../models/car';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private baseUrl = 'assets/mockData/carData.json';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }
}
