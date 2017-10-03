import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero } from '../hero.model';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(word: string): Observable<Hero[]> {
    return this.http
      // A requisição busca por uma query string
      .get(`api/heroes/?name=${word}`)
      // Ao receber o Observable acima podemos extrair os dados (herois) através do map
      .map(response => {
        return response.json().data as Hero[]
      });
  }

}
