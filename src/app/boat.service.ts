import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {BOATS} from '../mock-boats';
import {Boat} from './boat';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  boats: Boat[] = [];

  constructor() { }

  getBoats() {
    return of(BOATS);
  }

  add(newBoat: Boat) {
    return of(BOATS.push(newBoat));
  }
}
