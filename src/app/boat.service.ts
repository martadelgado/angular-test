import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {BOATS} from '../mock-boats';
import {BoatModel} from './models/boat.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  boats: BoatModel[] = [];

  constructor() { }

  getBoats() {
    return of(BOATS);
  }

  add(newBoat: BoatModel[]) {
    return of(BOATS.push(newBoat));
  }
}
