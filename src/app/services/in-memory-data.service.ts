import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../classes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const Heroes: Hero[] = [
      { id: 2, name: 'Hero 2' },
      { id: 3, name: 'Hero 3' },
      { id: 4, name: 'Hero 4' },
      { id: 5, name: 'Hero 5' },
      { id: 6, name: 'Hero 6' }
    ]
    return { Heroes }
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
