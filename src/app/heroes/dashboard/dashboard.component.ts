import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Cria um atributo heroes do tipo Hero[] que será inicializada como uma lista vazia []
  heroes: Hero[] = [];

  // Construtor com injeção de dependencia (HeroService)
  // Injete o HeroService no construtor e armazene em um campo privado heroService.
  constructor(private heroService: HeroService) {}

  // Cria uma lista de 5 herois ao criar o componente
  ngOnInit(): void {
    this.heroService.getHeroes().then(
      heroes => {this.heroes = heroes.slice(1, 5);}
    );
  }
}
