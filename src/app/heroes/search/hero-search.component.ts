import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Extensão da classe Observable
import 'rxjs/add/observable/of';

// Operadores da classe Observable
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;

  // Um Subject é produtor de eventos Observables
  // searchWord produz um Observable de strings
  // que são os critérios de filtro para a pesquisa do nome do heroi
  private searchWord = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  // Recebe a pesquisa (palavra) dentro da stream Observable
  search(word: string): void {
    // Cada chamada para search() coloca uma nova string no fluxo observável deste Subject
    // conectando a próxima string
    this.searchWord.next(word);
  }

  // Transforma o fluxo de strings/palavras em um fluxo arrays de herois
  // e atribui os resultados para a propriedade dos herois
  ngOnInit(): void {
    this.heroes = this.searchWord
      // Espera 300ms após cada pressionada de tecla antes de considerar a pesquisa
      .debounceTime(300)
      // Garante que uma solicitação seja enviada somente se o texto do filtro tiver mudado
      .distinctUntilChanged()
      // Chama o serviço de pesquisa para cada palavra que o o usuário digitar, retorna apenas o ultimo observable
      .switchMap(word => {
        if (word) {
          // Retorna o http search Observable
          return this.heroSearchService.search(word);
        } else {
          // Retorna o Observable de um vetor de herois vazio se não tiver passado nada na pesquisa
          return Observable.of<Hero[]>([]);
        }
      })
      // Intercepta uma falha do Observable e retorna uma matriz vazia para limpar o campo de pesquisa.
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
