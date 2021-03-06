import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero.model'
import { HeroService } from '../hero.service';

// É a diretiva que define um componente
@Component({
  // É a tag HTML que será inserido o componente <app-root>
  selector: 'my-heroes',
  // Template html que terá o componente
  // Você pode ter um template nesse arquivo através da
  // variavel template: `<p>...</p>`
  templateUrl: 'heroes.component.html',
  // CSS do componente
  styleUrls: ['heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // Atributo selectedHero do tipo Hero que pode ser usado no template
  selectedHero: Hero;
  // Lista de herois do tipo Hero[]
  heroes: Hero[];

  // Quando o componente é criado/construido tem que ser injetado
  // um heroService do tipo HeroService
  // Agora angular sabe como fornecer uma instância de HeroService
  // quando for criado um AppComponent.
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  // Pega os herois definidos em heroService como uma promise
  // através do then podemos pegar os dados da promise assim que
  // ela for disponibilizada
  // Arrow functions: (parametro1, parametro2, ...) => {codigo}
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes
      });
  }

  // Angular oferece interfaces para explorar momentos críticos no ciclo de
  // vida do componente: na criação (onInit), após cada mudança ()
  // e na sua eventual destruição ().
  // No caso usamos o ngOnInit para pegar os herois ao criar o componente
  ngOnInit(): void {
    this.getHeroes();
  }

  // Adiciona um método que armazena no selectedHero o hero selecionado
  // pelo usuário com um click
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Vai para a rota de detalhes
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  // Adicionar um novo heroi
  add(name: string): void {
    //  pega o nome passado por parâmetro e retira seus espaço em branco se tiver
    name = name.trim();
    if (!name) {return;}
    // Quando a entrada não é vazia ele é delegado a função create do service
    // e esse insere o novo heroi no array do servidor.
    this.heroService
      .create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(hero_from_array => {
          return hero_from_array !== hero
        });
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
}


